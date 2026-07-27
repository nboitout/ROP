// Database access for the purchase flow (Neon Postgres, schema in db/payments.sql).
//
// Every function throws when DATABASE_URL is missing: a purchase that cannot be
// recorded must fail loudly rather than take money and forget about it.

import { createHash, randomBytes } from 'node:crypto'
import { getDbPool } from '@/lib/db'

export type CustomerRow = { id: string; email: string; stripe_customer_id: string | null }

function pool() {
  const dbPool = getDbPool()
  if (!dbPool) throw new Error('DATABASE_URL is not set — the purchase flow needs a database')
  return dbPool
}

function normalizeEmail(email: string): string {
  return email.trim().toLowerCase()
}

export async function upsertCustomer(
  email: string,
  options: { stripeCustomerId?: string | null; lang?: string | null } = {},
): Promise<CustomerRow> {
  const { rows } = await pool().query<CustomerRow>(
    `insert into customers (email, stripe_customer_id, lang)
     values ($1, $2, $3)
     on conflict (email) do update
       set stripe_customer_id = coalesce(excluded.stripe_customer_id, customers.stripe_customer_id),
           lang = coalesce(excluded.lang, customers.lang)
     returning id, email, stripe_customer_id`,
    [normalizeEmail(email), options.stripeCustomerId ?? null, options.lang ?? null],
  )
  return rows[0]
}

export async function findCustomerByEmail(email: string): Promise<CustomerRow | null> {
  const { rows } = await pool().query<CustomerRow>(
    'select id, email, stripe_customer_id from customers where email = $1',
    [normalizeEmail(email)],
  )
  return rows[0] ?? null
}

export type RecordOrderInput = {
  customerId: string
  stripeSessionId: string
  stripePaymentIntentId: string | null
  product: string
  amountTotal: number
  currency: string
  status: 'paid' | 'refunded'
  lang: string | null
  readerId: string | null
}

/** Idempotent on the Stripe session id, so webhook retries update rather than duplicate. */
export async function recordOrder(input: RecordOrderInput): Promise<{ id: string }> {
  const { rows } = await pool().query<{ id: string }>(
    `insert into orders (
       customer_id, stripe_session_id, stripe_payment_intent_id, product,
       amount_total, currency, status, lang, reader_id
     )
     values ($1, $2, $3, $4, $5, $6, $7, $8, $9)
     on conflict (stripe_session_id) do update
       set status = excluded.status,
           stripe_payment_intent_id = coalesce(excluded.stripe_payment_intent_id, orders.stripe_payment_intent_id),
           updated_at = now()
     returning id`,
    [
      input.customerId,
      input.stripeSessionId,
      input.stripePaymentIntentId,
      input.product,
      input.amountTotal,
      input.currency,
      input.status,
      input.lang,
      input.readerId,
    ],
  )
  return rows[0]
}

export async function markOrderRefundedByPaymentIntent(paymentIntentId: string): Promise<string | null> {
  const { rows } = await pool().query<{ customer_id: string }>(
    `update orders set status = 'refunded', updated_at = now()
     where stripe_payment_intent_id = $1
     returning customer_id`,
    [paymentIntentId],
  )
  return rows[0]?.customer_id ?? null
}

export async function grantEntitlement(customerId: string, product: string, orderId: string | null): Promise<void> {
  await pool().query(
    `insert into entitlements (customer_id, product, order_id)
     values ($1, $2, $3)
     on conflict (customer_id, product) do update
       set revoked_at = null,
           order_id = coalesce(excluded.order_id, entitlements.order_id)`,
    [customerId, product, orderId],
  )
}

export async function revokeEntitlements(customerId: string): Promise<void> {
  await pool().query(
    'update entitlements set revoked_at = now() where customer_id = $1 and revoked_at is null',
    [customerId],
  )
}

export async function listActiveProducts(customerId: string): Promise<string[]> {
  const { rows } = await pool().query<{ product: string }>(
    'select product from entitlements where customer_id = $1 and revoked_at is null',
    [customerId],
  )
  return rows.map((row) => row.product)
}

/** True the first time an event id is seen; false for Stripe's retries. */
export async function claimStripeEvent(eventId: string, type: string): Promise<boolean> {
  const { rowCount } = await pool().query(
    'insert into stripe_events (id, type) values ($1, $2) on conflict (id) do nothing',
    [eventId, type],
  )
  return rowCount === 1
}

/**
 * Undoes a claim when handling failed, so Stripe's retry of that event does
 * real work instead of being skipped as a duplicate.
 */
export async function releaseStripeEvent(eventId: string): Promise<void> {
  await pool().query('delete from stripe_events where id = $1', [eventId])
}

function hashToken(token: string): string {
  return createHash('sha256').update(token).digest('hex')
}

export async function createMagicLinkToken(customerId: string, ttlMinutes = 60 * 24 * 7): Promise<string> {
  const token = randomBytes(32).toString('base64url')
  await pool().query(
    `insert into auth_tokens (token_hash, customer_id, expires_at)
     values ($1, $2, now() + ($3 || ' minutes')::interval)`,
    [hashToken(token), customerId, String(ttlMinutes)],
  )
  return token
}

/** Consumes a magic-link token; returns the customer only on the first use. */
export async function consumeMagicLinkToken(token: string): Promise<CustomerRow | null> {
  const { rows } = await pool().query<{ customer_id: string }>(
    `update auth_tokens set used_at = now()
     where token_hash = $1 and used_at is null and expires_at > now()
     returning customer_id`,
    [hashToken(token)],
  )
  const customerId = rows[0]?.customer_id
  if (!customerId) return null

  const customer = await pool().query<CustomerRow>(
    'select id, email, stripe_customer_id from customers where id = $1',
    [customerId],
  )
  return customer.rows[0] ?? null
}
