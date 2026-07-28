import { NextRequest, NextResponse } from 'next/server'
import { ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { getProduct, paymentsEnabled, siteUrl } from '@/lib/payments'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SUPPORTED_LOCALES: Record<string, 'fr' | 'en' | 'de' | 'es' | 'it' | 'th'> = {
  fr: 'fr', en: 'en', de: 'de', es: 'es', it: 'it', th: 'th',
}

export async function POST(req: NextRequest) {
  if (!paymentsEnabled()) {
    return NextResponse.json({ error: 'Payments are not enabled' }, { status: 503 })
  }

  const body = await req.json().catch(() => null)
  const productKey = typeof body?.product === 'string' ? body.product : ONLINE_BOOK_PRODUCT
  const product = getProduct(productKey)
  if (!product?.priceId) {
    return NextResponse.json({ error: 'Unknown product' }, { status: 400 })
  }

  const lang = typeof body?.lang === 'string' && body.lang in SUPPORTED_LOCALES ? body.lang : 'fr'
  const readerId = req.cookies.get('reader_id')?.value ?? ''

  try {
    const session = await getStripe().checkout.sessions.create({
      mode: 'payment',
      // The amount lives in the Stripe Price, never in the request body.
      line_items: [{ price: product.priceId, quantity: 1 }],
      locale: SUPPORTED_LOCALES[lang],
      // EU VAT on a digital product: Stripe computes it from the buyer's
      // country. Opt-in, because Stripe rejects the session while Stripe Tax
      // has no origin address and no registration — which is the state of a
      // brand-new account.
      automatic_tax: { enabled: process.env.STRIPE_AUTOMATIC_TAX === 'true' },
      allow_promotion_codes: true,
      // The receipt address is also the address the access link is sent to.
      customer_creation: 'always',
      success_url: `${siteUrl()}/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl()}/#acheter`,
      metadata: {
        product: product.key,
        lang,
        readerId,
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
