import { NextRequest, NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { createAccessLinkToken } from '@/lib/accessLink'
import { sendAccessLinkEmail } from '@/lib/email'
import { fulfillCheckoutSession } from '@/lib/fulfillment'
import { siteUrl } from '@/lib/payments'
import { recordSale } from '@/lib/salesLog'
import { getStripe } from '@/lib/stripe'

// Signature verification needs the raw body, so this route must stay on the
// Node runtime and must never be cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  const purchase = await fulfillCheckoutSession(session)
  if (!purchase) return

  const token = await createAccessLinkToken(purchase.email)
  const sent = await sendAccessLinkEmail(
    purchase.email,
    `${siteUrl()}/api/auth/verify?token=${encodeURIComponent(token)}`,
    purchase.lang,
  )
  if (!sent) {
    console.warn('[stripe-webhook] access link not delivered for', purchase.email)
  }
}

/**
 * Nothing to revoke: access is derived from Stripe, so the refund itself is
 * what ends it (lib/entitlements.ts drops refunded sessions). The reader's
 * existing cookie stays valid until it expires; the next link they request
 * will not open the book.
 *
 * All this does is keep the mirror honest for the author.
 */
async function handleRefund(charge: Stripe.Charge): Promise<void> {
  const email = charge.billing_details?.email ?? charge.receipt_email
  if (!email) return

  await recordSale({
    sessionId: typeof charge.payment_intent === 'string'
      ? charge.payment_intent
      : charge.payment_intent?.id ?? charge.id,
    email,
    product: '',
    amountTotal: charge.amount_refunded,
    currency: charge.currency,
    status: 'refunded',
    lang: '',
    readerId: null,
    termsAcceptedAt: null,
  })
}

export async function POST(req: NextRequest) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim()
  const signature = req.headers.get('stripe-signature')
  if (!webhookSecret || !signature) {
    return NextResponse.json({ error: 'Webhook is not configured' }, { status: 503 })
  }

  const payload = await req.text()

  let event: Stripe.Event
  try {
    event = await getStripe().webhooks.constructEventAsync(payload, signature, webhookSecret)
  } catch (error) {
    console.error('[stripe-webhook] signature verification failed:', error)
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  try {
    // Stripe retries deliveries. There is no event-claim table any more and
    // none is needed: fulfilment grants nothing that can be granted twice, so
    // a retry costs at most a duplicate mirror row and a second copy of the
    // same email.
    switch (event.type) {
      case 'checkout.session.completed':
      case 'checkout.session.async_payment_succeeded':
        await handleCheckoutCompleted(event.data.object)
        break
      case 'charge.refunded':
        await handleRefund(event.data.object)
        break
      default:
        break
    }
  } catch (error) {
    console.error(`[stripe-webhook] handling ${event.type} failed:`, error)
    // A 500 tells Stripe to retry.
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
