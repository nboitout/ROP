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
    // A getter, not a captured value: read at module load this would freeze
    // whatever the environment held on first import, which is a stale answer
    // for every later caller and unobservable in tests.
    get priceId() {
      return process.env.STRIPE_PRICE_ONLINE_BOOK?.trim() || null
    },
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
  return missingPaymentsConfig().length === 0
}

/**
 * What still stands between this deployment and a working payment. Variable
 * names and shape complaints only, never values — this is shown to whoever
 * holds a sales-preview grant so they can see at a glance why the cart is
 * closed, instead of unlocking the preview and finding the site unchanged.
 *
 * The prefixes are checked, not just presence: pasting the publishable key
 * instead of the secret one, or a bare "70" instead of a price id, are the two
 * mistakes that otherwise pass every check here and fail at Stripe with a 502.
 */
export function missingPaymentsConfig(): string[] {
  const problems: string[] = []

  const secretKey = process.env.STRIPE_SECRET_KEY?.trim()
  if (!secretKey) problems.push('STRIPE_SECRET_KEY')
  else if (!/^(sk|rk)_/.test(secretKey)) problems.push('STRIPE_SECRET_KEY (doit commencer par « sk_ »)')

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET?.trim()
  if (!webhookSecret) problems.push('STRIPE_WEBHOOK_SECRET')
  else if (!webhookSecret.startsWith('whsec_')) problems.push('STRIPE_WEBHOOK_SECRET (doit commencer par « whsec_ »)')

  if (!process.env.AUTH_SECRET?.trim()) problems.push('AUTH_SECRET')

  const priceId = PRODUCTS[ONLINE_BOOK_PRODUCT].priceId
  if (!priceId) problems.push('STRIPE_PRICE_ONLINE_BOOK')
  else if (!priceId.startsWith('price_')) {
    problems.push('STRIPE_PRICE_ONLINE_BOOK (doit être un identifiant « price_… », pas un montant)')
  }

  // Everything above only gets the buyer as far as paying. Fulfilment writes
  // the customer, the order and the entitlement, and emails the access link;
  // without these two a payment succeeds and the reader never gets the book.
  if (!process.env.DATABASE_URL?.trim()) {
    problems.push('DATABASE_URL (sans base, « Ouvrir le livre » échoue après le paiement)')
  }
  if (!process.env.RESEND_API_KEY?.trim()) {
    problems.push('RESEND_API_KEY (sans clé, le lien d’accès n’est pas envoyé par e-mail)')
  }

  // A checkout that redirects the buyer to localhost is broken even though
  // every key above is valid, so it belongs in the same list.
  if (siteUrl().startsWith('http://localhost')) {
    problems.push('NEXT_PUBLIC_SITE_URL (l’adresse publique du site, sinon le retour de paiement pointe vers localhost)')
  }

  return problems
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

/**
 * Where Stripe sends the buyer back to, and where magic links point.
 *
 * NEXT_PUBLIC_SITE_URL wins when set. Failing that this used to fall straight
 * back to localhost, which on a deployment means a buyer pays and is redirected
 * to a machine that isn't theirs — a silent break, since everything up to the
 * redirect works. So on Vercel the URL is derived instead: a preview deployment
 * returns to itself, production to the project's own domain. Localhost is only
 * ever the answer when nothing indicates a deployment at all.
 */
export function siteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')

  const vercelEnv = process.env.VERCEL_ENV?.trim()
  const deploymentUrl = process.env.VERCEL_URL?.trim()
  if (vercelEnv && vercelEnv !== 'production' && deploymentUrl) {
    return `https://${deploymentUrl}`
  }

  const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim()
  if (productionDomain) return `https://${productionDomain}`

  return 'http://localhost:3000'
}
