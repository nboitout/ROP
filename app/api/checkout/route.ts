import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { createCheckoutSession } from '@/lib/stripe'

// Creates a Stripe Checkout Session for the online book and returns its URL.
// The client redirects the browser to that URL.

const STRIPE_LOCALES = new Set(['fr', 'en', 'de', 'es', 'it', 'nl', 'pt'])

function baseUrl(req: NextRequest): string {
  return (
    process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') ||
    req.nextUrl.origin
  )
}

export async function POST(req: NextRequest) {
  const priceId = process.env.STRIPE_PRICE_ID
  if (!priceId) {
    console.error('[checkout] STRIPE_PRICE_ID is not set')
    return NextResponse.json({ error: 'Checkout unavailable' }, { status: 503 })
  }

  const body = (await req.json().catch(() => ({}))) as {
    lang?: string
    sessionId?: string
  }

  // Preserve reader attribution; mint a readerId if the visitor has none yet.
  const existing = req.cookies.get('reader_id')?.value
  const hasReader = !!(existing && /^[0-9a-f-]{36}$/i.test(existing))
  const readerId = hasReader ? existing! : randomUUID()

  const lang = typeof body.lang === 'string' ? body.lang.toLowerCase() : ''
  const base = baseUrl(req)

  try {
    const session = await createCheckoutSession({
      priceId,
      successUrl: `${base}/acces/merci?session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${base}/#acheter`,
      readerId,
      sessionId: typeof body.sessionId === 'string' ? body.sessionId : '',
      locale: STRIPE_LOCALES.has(lang) ? lang : undefined,
    })

    const res = NextResponse.json({ url: session.url })
    if (!hasReader) {
      res.cookies.set('reader_id', readerId, {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
      })
    }
    return res
  } catch (err) {
    console.error('[checkout] failed:', err)
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 })
  }
}
