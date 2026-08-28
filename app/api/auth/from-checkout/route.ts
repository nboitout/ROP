import { NextRequest, NextResponse } from 'next/server'
import { PAID_ACCESS_COOKIE } from '@/lib/access'
import { createReaderSessionToken, READER_SESSION_MAX_AGE } from '@/lib/authSession'
import { fulfillCheckoutSession } from '@/lib/fulfillment'
import { paymentsOpenFor } from '@/lib/payments'
import { getStripe } from '@/lib/stripe'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const READING_ENTRY = '/lecture/chapitre-1'

/**
 * Opens the book straight away on the device that just paid, without waiting
 * for the webhook or for the buyer to open their mailbox.  The Checkout
 * session id is only accepted after Stripe confirms it is paid, and
 * fulfilment is the same idempotent path the webhook uses.
 */
export async function GET(req: NextRequest) {
  const sessionId = req.nextUrl.searchParams.get('session_id')
  if (!sessionId || !(await paymentsOpenFor(req.cookies))) {
    return NextResponse.redirect(new URL('/merci?state=error', req.url))
  }

  try {
    const session = await getStripe().checkout.sessions.retrieve(sessionId)
    const purchase = await fulfillCheckoutSession(session)
    if (!purchase) {
      return NextResponse.redirect(new URL('/merci?state=pending', req.url))
    }

    const response = NextResponse.redirect(new URL(READING_ENTRY, req.url))
    response.cookies.set(
      PAID_ACCESS_COOKIE,
      await createReaderSessionToken(purchase.email, purchase.products),
      {
        httpOnly: true,
        sameSite: 'lax',
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: READER_SESSION_MAX_AGE,
      },
    )
    return response
  } catch (error) {
    console.error('[auth/from-checkout] failed:', error)
    return NextResponse.redirect(new URL('/merci?state=error', req.url))
  }
}
