// Product catalogue and feature flag for the Stripe checkout.
//
// Only the enriched online book is sold here.  The printed edition is
// published by Elsevier-Masson, so its homepage plan keeps pointing at the
// launch waitlist.

import { ONLINE_BOOK_PRODUCT } from '@/lib/access'

export type PaidProduct = typeof ONLINE_BOOK_PRODUCT

export type ProductDefinition = {
  key: PaidProduct
  /** Stripe Price id, from the environment so test and live stay separate. */
  priceId: string | null
  /** Displayed amount in euro cents — sanity-checked against Stripe, never trusted from the client. */
  amount: number
  currency: string
}

export const PRODUCTS: Record<PaidProduct, ProductDefinition> = {
  [ONLINE_BOOK_PRODUCT]: {
    key: ONLINE_BOOK_PRODUCT,
    priceId: process.env.STRIPE_PRICE_ONLINE_BOOK?.trim() || null,
    amount: 7000,
    currency: 'eur',
  },
}

export function getProduct(key: string): ProductDefinition | null {
  return key === ONLINE_BOOK_PRODUCT ? PRODUCTS[ONLINE_BOOK_PRODUCT] : null
}

/**
 * Checkout stays dark until every piece is configured *and* the flag is on, so
 * a half-provisioned deployment can never take a real payment.  The public
 * twin (NEXT_PUBLIC_PAYMENTS_ENABLED) only decides whether the buy button is
 * rendered — the server checks this function again before creating a session.
 */
export function paymentsEnabled(): boolean {
  return (
    process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true'
    && !!process.env.STRIPE_SECRET_KEY?.trim()
    && !!process.env.STRIPE_WEBHOOK_SECRET?.trim()
    && !!process.env.AUTH_SECRET?.trim()
    && !!PRODUCTS[ONLINE_BOOK_PRODUCT].priceId
  )
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000').replace(/\/$/, '')
}
