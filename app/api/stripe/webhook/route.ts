import { NextRequest, NextResponse } from 'next/server'
import type Stripe from 'stripe'
import { sendAccessLinkEmail } from '@/lib/email'
import { fulfillCheckoutSession } from '@/lib/fulfillment'
import { siteUrl } from '@/lib/payments'
import {
  claimStripeEvent,
  createMagicLinkToken,
  markOrderRefundedByPaymentIntent,
  releaseStripeEvent,
  revokeEntitlements,
} from '@/lib/paymentsDb'
import { getStripe } from '@/lib/stripe'

// Signature verification needs the raw body, so this route must stay on the
// Node runtime and must never be cached.
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

async function handleCheckoutCompleted(session: Stripe.Checkout.Session): Promise<void> {
  // Line items are not expanded on the event payload; the session id is enough
  // because the price comes from our own catalogue.
  const purchase = await fulfillCheckoutSession(session)
  if (!purchase) return

  const token = await createMagicLinkToken(purchase.customerId)
  const sent = await sendAccessLinkEmail(
    purchase.email,
    `${siteUrl()}/api/auth/verify?token=${encodeURIComponent(token)}`,
    purchase.lang,
  )
  if (!sent) {
    console.warn('[stripe-webhook] access link not delivered for', purchase.email)
  }
}

async function handleRefund(charge: Stripe.Charge): Promise<void> {
  const paymentIntentId = typeof charge.payment_intent === 'string'
    ? charge.payment_intent
    : charge.payment_intent?.id
  if (!paymentIntentId) return

  const customerId = await markOrderRefundedByPaymentIntent(paymentIntentId)
  if (customerId) await revokeEntitlements(customerId)
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
    // Stripe retries deliveries; only the first arrival of an event does work.
    if (!(await claimStripeEvent(event.id, event.type))) {
      return NextResponse.json({ received: true, duplicate: true })
    }

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
    // Release the claim, otherwise Stripe's retry would be dismissed as a
    // duplicate and the purchase would never be fulfilled.
    await releaseStripeEvent(event.id).catch((releaseError) => {
      console.error('[stripe-webhook] could not release event claim:', releaseError)
    })
    // A 500 tells Stripe to retry.
    return NextResponse.json({ error: 'Handler failed' }, { status: 500 })
  }

  return NextResponse.json({ received: true })
}
