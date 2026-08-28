// Who owns the book, answered by Stripe.
//
// There is no local table of customers, orders or entitlements. Stripe already
// records every payment and every refund, so it is the source of truth and the
// question "has this address paid?" is asked of it directly. A Google Sheet
// mirrors the sales for the author to read (lib/salesLog.ts); deleting a row
// there costs nobody their access.
//
// This runs at three moments only — issuing an access link, verifying one, and
// completing a purchase. Reading a chapter never gets here: that is decided by
// the signed cookie alone (lib/access.ts).

import type Stripe from 'stripe'
import { getProduct } from '@/lib/payments'
import { getStripe } from '@/lib/stripe'

/** Stripe pages at 100; nobody legitimately has more than this. */
const PAGE_LIMIT = 100

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

function chargeWasRefunded(charge: Stripe.Charge | null): boolean {
  if (!charge) return false
  return charge.refunded || charge.amount_refunded > 0
}

/**
 * A session grants its product when Stripe says it was paid and the money was
 * not given back. `metadata.product` is what /api/checkout stamped on it, and
 * it is checked against our own catalogue so a session for something we no
 * longer sell cannot unlock the book.
 */
function productFromSession(session: Stripe.Checkout.Session): string | null {
  if (session.payment_status !== 'paid') return null

  const product = getProduct(session.metadata?.product ?? '')
  if (!product) return null

  const intent = session.payment_intent
  if (intent && typeof intent !== 'string') {
    const charge = intent.latest_charge
    if (charge && typeof charge !== 'string' && chargeWasRefunded(charge)) return null
  }

  return product.key
}

/**
 * Products this address owns, right now.
 *
 * `customer_creation: 'always'` means one Stripe customer per purchase rather
 * than per person, so a repeat buyer legitimately has several — all of them are
 * searched, not just the first.
 */
export async function purchasedProductsFor(email: string): Promise<string[]> {
  const address = normalizeEmail(email)
  if (!address) return []

  const stripe = getStripe()
  const customers = await stripe.customers.list({ email: address, limit: PAGE_LIMIT })
  if (customers.data.length === 0) return []

  const owned = new Set<string>()
  for (const customer of customers.data) {
    const sessions = await stripe.checkout.sessions.list({
      customer: customer.id,
      limit: PAGE_LIMIT,
      // One round trip gets the payment status and whether it was refunded.
      expand: ['data.payment_intent.latest_charge'],
    })
    for (const session of sessions.data) {
      const product = productFromSession(session)
      if (product) owned.add(product)
    }
  }

  return [...owned]
}

/** True when the address owns at least one product. */
export async function hasPurchased(email: string): Promise<boolean> {
  return (await purchasedProductsFor(email)).length > 0
}

/**
 * Whether a cart holds nothing the buyer does not already own.
 *
 * Separated from the Stripe lookup so the decision itself is testable, and
 * because it is the part that will need thought when a second product exists:
 * with a mixed cart the right answer is to drop the owned lines, not to refuse
 * the order. Today the catalogue has one product, so "all owned" and "any
 * owned" are the same question.
 */
export function cartIsFullyOwned(products: string[], owned: string[]): boolean {
  if (products.length === 0) return false
  return products.every((product) => owned.includes(product))
}

/**
 * The same question for a single Checkout Session, used right after payment
 * when the buyer is still on the page and Stripe has just confirmed it.
 * Avoids the customer lookup entirely.
 */
export function productsFromSession(session: Stripe.Checkout.Session): string[] {
  const product = productFromSession(session)
  return product ? [product] : []
}

export function emailFromSession(session: Stripe.Checkout.Session): string | null {
  const email = session.customer_details?.email ?? session.customer_email
  return email ? normalizeEmail(email) : null
}
