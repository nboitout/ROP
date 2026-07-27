// Turning a paid Stripe Checkout session into book access.
//
// Two callers reach this: the webhook (source of truth, always runs) and the
// success page's "open the book now" handler (so the buyer does not have to
// wait for the webhook on the device they just paid from).  Everything here is
// idempotent — running it twice grants the same single entitlement.

import type Stripe from 'stripe'
import { ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { getProduct } from '@/lib/payments'
import {
  grantEntitlement,
  listActiveProducts,
  recordOrder,
  upsertCustomer,
} from '@/lib/paymentsDb'

export type FulfilledPurchase = {
  customerId: string
  email: string
  products: string[]
  lang: string
}

function sessionEmail(session: Stripe.Checkout.Session): string | null {
  return session.customer_details?.email ?? session.customer_email ?? null
}

function stripeId(value: string | { id: string } | null | undefined): string | null {
  if (!value) return null
  return typeof value === 'string' ? value : value.id
}

/**
 * Returns null when the session is not (yet) paid — the caller decides whether
 * that means "wait for the webhook" or "ignore this event".
 */
export async function fulfillCheckoutSession(session: Stripe.Checkout.Session): Promise<FulfilledPurchase | null> {
  if (session.payment_status !== 'paid') return null

  const email = sessionEmail(session)
  if (!email) {
    console.error('[fulfillment] paid session without an email:', session.id)
    return null
  }

  const productKey = session.metadata?.product ?? ONLINE_BOOK_PRODUCT
  const product = getProduct(productKey)
  if (!product) {
    console.error('[fulfillment] unknown product on session:', session.id, productKey)
    return null
  }

  const lang = session.metadata?.lang || 'fr'
  const customer = await upsertCustomer(email, {
    stripeCustomerId: stripeId(session.customer),
    lang,
  })

  const order = await recordOrder({
    customerId: customer.id,
    stripeSessionId: session.id,
    stripePaymentIntentId: stripeId(session.payment_intent),
    product: product.key,
    amountTotal: session.amount_total ?? product.amount,
    currency: session.currency ?? product.currency,
    status: 'paid',
    lang,
    readerId: session.metadata?.readerId || null,
  })

  await grantEntitlement(customer.id, product.key, order.id)

  return {
    customerId: customer.id,
    email: customer.email,
    products: await listActiveProducts(customer.id),
    lang,
  }
}
