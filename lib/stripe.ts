import Stripe from 'stripe'

let client: Stripe | null = null

/**
 * Lazily built so importing this module never throws at build time on a
 * deployment that has no Stripe keys yet.
 */
export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY?.trim()
  if (!secretKey) throw new Error('STRIPE_SECRET_KEY is not set')
  if (!client) client = new Stripe(secretKey)
  return client
}
