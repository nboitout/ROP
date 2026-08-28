// Turning a paid Stripe Checkout session into book access.
//
// Two callers reach this: the webhook (which also emails the access link) and
// the success page's "open the book now" handler, so the buyer does not have to
// wait for the webhook on the device they just paid from.
//
// Nothing is written that access depends on. The entitlement *is* the paid
// session in Stripe, so running this twice grants exactly what running it once
// grants, and a webhook retry needs no idempotency table to be harmless — the
// only repeated side effects are a duplicate mirror row and, at worst, a second
// copy of the same email.

import type Stripe from 'stripe'
import { emailFromSession, productsFromSession } from '@/lib/entitlements'
import { recordSale } from '@/lib/salesLog'

export type FulfilledPurchase = {
  /** Normalised email — the reader's identity now that there is no customer table. */
  email: string
  products: string[]
  lang: string
}

/**
 * Returns null when the session is not (yet) paid — the caller decides whether
 * that means "wait for the webhook" or "ignore this event".
 */
export async function fulfillCheckoutSession(
  session: Stripe.Checkout.Session,
): Promise<FulfilledPurchase | null> {
  if (session.payment_status !== 'paid') return null

  const email = emailFromSession(session)
  if (!email) {
    console.error('[fulfillment] paid session without an email:', session.id)
    return null
  }

  const products = productsFromSession(session)
  if (products.length === 0) {
    console.error('[fulfillment] paid session for an unknown product:', session.id, session.metadata?.product)
    return null
  }

  const lang = session.metadata?.lang || 'fr'

  // The mirror is best-effort by design and never blocks the reader.
  await recordSale({
    sessionId: session.id,
    email,
    product: products[0],
    amountTotal: session.amount_total ?? 0,
    currency: session.currency ?? 'eur',
    status: 'paid',
    lang,
    readerId: session.metadata?.readerId || null,
    termsAcceptedAt: session.metadata?.termsAcceptedAt || null,
  })

  return { email, products, lang }
}
