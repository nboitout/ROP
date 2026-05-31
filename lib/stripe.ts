import { createHmac, timingSafeEqual } from 'node:crypto'

// ---------------------------------------------------------------------------
// Stripe via REST (https://api.stripe.com) — no SDK, matching the codebase's
// hand-rolled fetch convention. Covers exactly what the pipeline needs:
//   1. create a one-time Checkout Session
//   2. verify incoming webhook signatures
// ---------------------------------------------------------------------------

const STRIPE_API = 'https://api.stripe.com/v1'

function secretKey(): string {
  const key = process.env.STRIPE_SECRET_KEY
  if (!key) throw new Error('STRIPE_SECRET_KEY is not set.')
  return key
}

// Stripe's API takes application/x-www-form-urlencoded with bracketed keys
// (e.g. line_items[0][price]). Flatten a nested object into that shape.
function toFormBody(obj: Record<string, unknown>, prefix = ''): string[] {
  const pairs: string[] = []
  for (const [key, value] of Object.entries(obj)) {
    if (value === undefined || value === null) continue
    const name = prefix ? `${prefix}[${key}]` : key
    if (typeof value === 'object' && !Array.isArray(value)) {
      pairs.push(...toFormBody(value as Record<string, unknown>, name))
    } else if (Array.isArray(value)) {
      value.forEach((item, i) => {
        if (typeof item === 'object' && item !== null) {
          pairs.push(...toFormBody(item as Record<string, unknown>, `${name}[${i}]`))
        } else {
          pairs.push(`${encodeURIComponent(`${name}[${i}]`)}=${encodeURIComponent(String(item))}`)
        }
      })
    } else {
      pairs.push(`${encodeURIComponent(name)}=${encodeURIComponent(String(value))}`)
    }
  }
  return pairs
}

export interface CheckoutSession {
  id: string
  url: string
}

export async function createCheckoutSession(params: {
  priceId: string
  successUrl: string
  cancelUrl: string
  readerId: string
  sessionId?: string
  locale?: string
  customerEmail?: string
}): Promise<CheckoutSession> {
  const body: Record<string, unknown> = {
    mode: 'payment',
    'line_items': [{ price: params.priceId, quantity: 1 }],
    success_url: params.successUrl,
    cancel_url: params.cancelUrl,
    // Carry attribution so the purchase links back to reader engagement.
    metadata: { readerId: params.readerId, sessionId: params.sessionId ?? '' },
    // So the buyer's email lands on the PaymentIntent/Charge too.
    payment_intent_data: { metadata: { readerId: params.readerId } },
    allow_promotion_codes: true,
  }
  if (params.locale) body.locale = params.locale
  if (params.customerEmail) body.customer_email = params.customerEmail

  const res = await fetch(`${STRIPE_API}/checkout/sessions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${secretKey()}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: toFormBody(body).join('&'),
  })

  if (!res.ok) {
    const err = await res.text().catch(() => '')
    throw new Error(`Stripe checkout session failed (${res.status}): ${err.slice(0, 400)}`)
  }

  const json = (await res.json()) as { id: string; url: string }
  return { id: json.id, url: json.url }
}

// ---- Webhook signature verification ----------------------------------------
// Implements Stripe's scheme: the Stripe-Signature header carries `t=<ts>` and
// one or more `v1=<hmac>`. The signed payload is `${t}.${rawBody}`, HMAC-SHA256
// with the endpoint's signing secret. See stripe.com/docs/webhooks/signatures.

const SIGNATURE_TOLERANCE_SECONDS = 60 * 5

export function verifyWebhookSignature(
  rawBody: string,
  signatureHeader: string | null,
): boolean {
  const secret = process.env.STRIPE_WEBHOOK_SECRET
  if (!secret || !signatureHeader) return false

  const parts = Object.fromEntries(
    signatureHeader.split(',').map((kv) => {
      const idx = kv.indexOf('=')
      return [kv.slice(0, idx).trim(), kv.slice(idx + 1).trim()]
    }),
  ) as Record<string, string>

  const timestamp = parts['t']
  const provided = parts['v1']
  if (!timestamp || !provided) return false

  // Reject stale signatures (replay protection).
  const age = Math.floor(Date.now() / 1000) - Number(timestamp)
  if (!Number.isFinite(age) || age > SIGNATURE_TOLERANCE_SECONDS) return false

  const expected = createHmac('sha256', secret)
    .update(`${timestamp}.${rawBody}`)
    .digest('hex')

  const a = Buffer.from(expected)
  const b = Buffer.from(provided)
  return a.length === b.length && timingSafeEqual(a, b)
}
