// Product catalogue and feature flag for the Stripe checkout.
//
// Only the enriched online book is sold here.  The printed edition is
// published by Elsevier-Masson, so its homepage plan keeps pointing at the
// launch waitlist.

import { ONLINE_BOOK_PRODUCT, type CookieReader } from '@/lib/access'
import { hasSalesPreview } from '@/lib/salesPreview'

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
 * Every piece a payment needs is present. Says nothing about whether the shop
 * is open — a half-provisioned deployment fails this and can never take a
 * payment, previewed or not.
 */
export function paymentsConfigured(): boolean {
  return (
    !!process.env.STRIPE_SECRET_KEY?.trim()
    && !!process.env.STRIPE_WEBHOOK_SECRET?.trim()
    && !!process.env.AUTH_SECRET?.trim()
    && !!PRODUCTS[ONLINE_BOOK_PRODUCT].priceId
  )
}

/**
 * The shop is open to everyone: configured *and* the launch flag is on.  The
 * public twin (NEXT_PUBLIC_PAYMENTS_ENABLED) only decides what the browser
 * renders — the server checks this again before creating a session.
 */
export function paymentsEnabled(): boolean {
  return process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true' && paymentsConfigured()
}

/**
 * The shop is open to *this visitor*: either it has launched, or they hold a
 * sales-preview grant. This is what every page and route in the purchase path
 * asks, so the team can walk the real pipeline on the deployed site while
 * everyone else still sees the waitlist form.
 */
export async function paymentsOpenFor(cookieStore: CookieReader): Promise<boolean> {
  if (!paymentsConfigured()) return false
  if (process.env.NEXT_PUBLIC_PAYMENTS_ENABLED === 'true') return true
  return hasSalesPreview(cookieStore)
}

export function siteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000').replace(/\/$/, '')
}
