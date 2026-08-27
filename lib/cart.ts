// The cart that sits between the pricing card and Stripe Checkout.
//
// Deliberately tiny: the online book is a personal reading licence, so a line
// can never exceed one unit and the cart holds at most one line today.  What
// matters is that the same rules run on both sides — the browser builds the
// cart, the checkout route rebuilds it from the request and trusts nothing the
// client sent about prices.

import { ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { getProduct, PRODUCTS } from '@/lib/payments'

/** localStorage key. Versioned so a future shape change cannot resurrect stale carts. */
export const CART_STORAGE_KEY = 'rop_cart_v1'

/** Same-tab notification; the `storage` event only fires in the *other* tabs. */
export const CART_CHANGED_EVENT = 'rop:cart-changed'

/** Owning a reading licence twice buys nothing, so every line caps at one. */
export const MAX_QUANTITY_PER_LINE = 1

export type CartLine = {
  product: string
  quantity: number
}

export type PricedCartLine = CartLine & {
  /** Cents, from the catalogue — never from the client. */
  unitAmount: number
  lineTotal: number
  currency: string
  /** null when the product exists but its Stripe price id is not configured yet. */
  priceId: string | null
}

export type PricedCart = {
  lines: PricedCartLine[]
  itemCount: number
  subtotal: number
  currency: string
}

/** Why a cart cannot go to Stripe, or null when it can. */
export type CartRejection = 'empty' | 'unknown-product' | 'price-not-configured'

/**
 * Rebuilds a cart from untrusted input — localStorage in the browser, a JSON
 * body in the checkout route.  Anything unrecognised is dropped rather than
 * rejected, so a half-corrupted cart degrades to a usable one instead of
 * trapping the buyer on a broken page.
 */
export function parseCart(raw: unknown): CartLine[] {
  let value = raw
  if (typeof value === 'string') {
    try {
      value = JSON.parse(value)
    } catch {
      return []
    }
  }

  // Tolerate both the bare array and a `{ lines: [...] }` envelope.
  const entries = Array.isArray(value)
    ? value
    : Array.isArray((value as { lines?: unknown })?.lines)
      ? (value as { lines: unknown[] }).lines
      : []

  const byProduct = new Map<string, number>()
  for (const entry of entries) {
    const product = typeof entry === 'string' ? entry : (entry as CartLine)?.product
    if (typeof product !== 'string' || !getProduct(product)) continue

    const rawQuantity = typeof entry === 'string' ? 1 : (entry as CartLine)?.quantity
    const quantity = Number.isFinite(rawQuantity) ? Math.floor(Number(rawQuantity)) : 1
    if (quantity < 1) continue

    byProduct.set(product, Math.min(MAX_QUANTITY_PER_LINE, (byProduct.get(product) ?? 0) + quantity))
  }

  return [...byProduct].map(([product, quantity]) => ({ product, quantity }))
}

/** Prices a parsed cart from the catalogue. Unknown products are skipped, not guessed. */
export function priceCart(lines: CartLine[]): PricedCart {
  const priced: PricedCartLine[] = []

  for (const line of lines) {
    const product = getProduct(line.product)
    if (!product) continue
    priced.push({
      product: product.key,
      quantity: line.quantity,
      unitAmount: product.amount,
      lineTotal: product.amount * line.quantity,
      currency: product.currency,
      priceId: product.priceId,
    })
  }

  return {
    lines: priced,
    itemCount: priced.reduce((total, line) => total + line.quantity, 0),
    subtotal: priced.reduce((total, line) => total + line.lineTotal, 0),
    currency: priced[0]?.currency ?? PRODUCTS[ONLINE_BOOK_PRODUCT].currency,
  }
}

/**
 * Server-side gate for the checkout route.  A missing price id fails here
 * rather than at Stripe, so a half-configured deployment shows an explanation
 * instead of a 502.
 *
 * Server-side only: `priceId` comes from STRIPE_PRICE_ONLINE_BOOK, which is not
 * a NEXT_PUBLIC_ variable and is therefore always null in the browser.  The
 * client checks `lines.length` and NEXT_PUBLIC_PAYMENTS_ENABLED instead.
 */
export function rejectCart(lines: CartLine[]): CartRejection | null {
  if (lines.length === 0) return 'empty'
  for (const line of lines) {
    const product = getProduct(line.product)
    if (!product) return 'unknown-product'
    if (!product.priceId) return 'price-not-configured'
  }
  return null
}

const NUMBER_LOCALES: Record<string, string> = {
  fr: 'fr-FR', en: 'en-GB', de: 'de-DE', es: 'es-ES', it: 'it-IT', th: 'th-TH',
}

/** Cents → "70,00 €". Whole euros keep their ",00" so totals line up in a column. */
export function formatAmount(cents: number, currency: string, lang = 'fr'): string {
  return new Intl.NumberFormat(NUMBER_LOCALES[lang] ?? NUMBER_LOCALES.fr, {
    style: 'currency',
    currency: currency.toUpperCase(),
  }).format(cents / 100)
}

// ---------------------------------------------------------------------------
// Browser-side persistence.  Every access is guarded: Safari's private mode
// throws on localStorage rather than returning null.
// ---------------------------------------------------------------------------

export function readStoredCart(): CartLine[] {
  if (typeof window === 'undefined') return []
  try {
    return parseCart(window.localStorage.getItem(CART_STORAGE_KEY))
  } catch {
    return []
  }
}

export function writeStoredCart(lines: CartLine[]): void {
  if (typeof window === 'undefined') return
  try {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(lines))
  } catch {
    // A cart that cannot be persisted still works for this page view.
  }
  window.dispatchEvent(new CustomEvent(CART_CHANGED_EVENT))
}
