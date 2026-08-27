import { NextRequest, NextResponse } from 'next/server'
import { parseCart, priceCart, rejectCart } from '@/lib/cart'
import { paymentsEnabled, siteUrl } from '@/lib/payments'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUPPORTED_LOCALES: Record<string, 'fr' | 'en' | 'de' | 'es' | 'it' | 'th'> = {
  fr: 'fr', en: 'en', de: 'de', es: 'es', it: 'it', th: 'th',
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(req: NextRequest) {
  if (!paymentsEnabled()) {
    return NextResponse.json({ error: 'Payments are not enabled' }, { status: 503 })
  }

  const body = await req.json().catch(() => null)

  // No session without the express consent collected on the validation step:
  // it is what waives the 14-day withdrawal period on digital content, and the
  // only record that it was given.
  if (body?.acceptTerms !== true) {
    return NextResponse.json({ error: 'terms-required' }, { status: 400 })
  }

  // Nothing the client says about the contents of the cart is trusted: the
  // lines are rebuilt from our own catalogue and priced by Stripe from the
  // price ids below.
  const lines = parseCart(body?.items)
  const rejection = rejectCart(lines)
  if (rejection) {
    // A missing price id is our misconfiguration, not a bad request.
    const status = rejection === 'price-not-configured' ? 503 : 400
    return NextResponse.json({ error: rejection }, { status })
  }

  const lang = typeof body?.lang === 'string' && body.lang in SUPPORTED_LOCALES ? body.lang : 'fr'
  const readerId = req.cookies.get('reader_id')?.value ?? ''

  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const customerEmail = EMAIL_PATTERN.test(email) ? email : undefined

  const cart = priceCart(lines)

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      // The amounts live in the Stripe Prices, never in the request body.
      // rejectCart() above has already refused any line without a price id.
      line_items: cart.lines.map((line) => ({ price: line.priceId as string, quantity: line.quantity })),
      locale: SUPPORTED_LOCALES[lang],
      // EU VAT on a digital product: Stripe computes it from the buyer's
      // country. Opt-in, because Stripe rejects the session while Stripe Tax
      // has no origin address and no registration — which is the state of a
      // brand-new account.
      automatic_tax: { enabled: process.env.STRIPE_AUTOMATIC_TAX === 'true' },
      allow_promotion_codes: true,
      // The receipt address is also the address the access link is sent to;
      // prefilled with the one the buyer confirmed on the validation step.
      customer_creation: 'always',
      ...(customerEmail ? { customer_email: customerEmail } : {}),
      success_url: `${siteUrl()}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl()}/panier`,
      metadata: {
        // `product` stays singular: it is what lib/fulfillment.ts reads, and
        // the cart holds exactly one product today.
        product: cart.lines[0].product,
        lang,
        readerId,
        termsAcceptedAt: new Date().toISOString(),
      },
    })

    if (!session.url) {
      return NextResponse.json({ error: 'Stripe returned no checkout URL' }, { status: 502 })
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('[checkout] session creation failed:', error)
    return NextResponse.json({ error: 'Checkout could not be started' }, { status: 502 })
  }
}
