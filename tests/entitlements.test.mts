// Guards the two pieces that decide who can read the paid book now that there
// is no database: which Stripe sessions count as ownership, and what an emailed
// access link is allowed to prove. Run with: npm test

import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import type Stripe from 'stripe'
import { canReadPaidChapter, ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { ACCESS_LINK_TTL_SECONDS, createAccessLinkToken, emailFromAccessLink } from '@/lib/accessLink'
import { createReaderSessionToken } from '@/lib/authSession'
import { emailFromSession, normalizeEmail, productsFromSession } from '@/lib/entitlements'

const SECRET = 'test-secret-for-entitlements'
const originalSecret = process.env.AUTH_SECRET
const originalPrice = process.env.STRIPE_PRICE_ONLINE_BOOK

before(() => {
  process.env.AUTH_SECRET = SECRET
  // getProduct() only resolves a configured product, and the session check
  // goes through it.
  process.env.STRIPE_PRICE_ONLINE_BOOK = 'price_test'
})
after(() => {
  if (originalSecret === undefined) delete process.env.AUTH_SECRET
  else process.env.AUTH_SECRET = originalSecret
  if (originalPrice === undefined) delete process.env.STRIPE_PRICE_ONLINE_BOOK
  else process.env.STRIPE_PRICE_ONLINE_BOOK = originalPrice
})

/** A paid session for the online book, which individual tests then spoil. */
function session(overrides: Record<string, unknown> = {}): Stripe.Checkout.Session {
  return {
    id: 'cs_test_1',
    payment_status: 'paid',
    metadata: { product: ONLINE_BOOK_PRODUCT, lang: 'fr' },
    customer_details: { email: 'Reader@Example.COM' },
    customer_email: null,
    payment_intent: {
      id: 'pi_1',
      latest_charge: { id: 'ch_1', refunded: false, amount_refunded: 0 },
    },
    ...overrides,
  } as unknown as Stripe.Checkout.Session
}

// --- What counts as ownership ------------------------------------------------

test('a paid, unrefunded session for a product we sell grants it', () => {
  assert.deepEqual(productsFromSession(session()), [ONLINE_BOOK_PRODUCT])
})

test('an unpaid session grants nothing', () => {
  for (const status of ['unpaid', 'no_payment_required']) {
    assert.deepEqual(productsFromSession(session({ payment_status: status })), [])
  }
})

test('a refunded payment grants nothing — this is what replaces revocation', () => {
  const fullyRefunded = session({
    payment_intent: { id: 'pi_1', latest_charge: { id: 'ch_1', refunded: true, amount_refunded: 7000 } },
  })
  assert.deepEqual(productsFromSession(fullyRefunded), [])

  // Stripe leaves `refunded` false on a partial refund, so the amount decides.
  const partiallyRefunded = session({
    payment_intent: { id: 'pi_1', latest_charge: { id: 'ch_1', refunded: false, amount_refunded: 1000 } },
  })
  assert.deepEqual(productsFromSession(partiallyRefunded), [])
})

test('a session for something we do not sell grants nothing', () => {
  for (const product of [undefined, '', 'printed_book', 'online_book_v2']) {
    assert.deepEqual(
      productsFromSession(session({ metadata: product === undefined ? {} : { product } })),
      [],
      `product ${String(product)} was accepted`,
    )
  }
})

test('an unexpanded payment intent still grants — the paid status is the signal', () => {
  // Stripe returns the id alone when the caller did not expand it; refusing
  // here would lock out a buyer over a missing expand rather than a refund.
  assert.deepEqual(productsFromSession(session({ payment_intent: 'pi_1' })), [ONLINE_BOOK_PRODUCT])
})

test('the buyer address is normalised, wherever Stripe put it', () => {
  assert.equal(emailFromSession(session()), 'reader@example.com')
  assert.equal(
    emailFromSession(session({ customer_details: null, customer_email: '  Reader@Example.com ' })),
    'reader@example.com',
  )
  assert.equal(emailFromSession(session({ customer_details: null, customer_email: null })), null)
  assert.equal(normalizeEmail('  MiXeD@Case.Com '), 'mixed@case.com')
})

// --- What an access link may prove -------------------------------------------

test('a link round-trips to the address it was issued to, normalised', async () => {
  const token = await createAccessLinkToken('  Reader@Example.COM ')
  assert.equal(await emailFromAccessLink(token), 'reader@example.com')
})

test('a forged or absent link proves nothing', async () => {
  for (const forged of ['', 'v1.x.y', 'reader@example.com', undefined, null]) {
    assert.equal(await emailFromAccessLink(forged), null, `accepted ${String(forged)}`)
  }
})

test('a link signed with another secret is refused', async () => {
  process.env.AUTH_SECRET = 'a-different-secret'
  const foreign = await createAccessLinkToken('reader@example.com')
  process.env.AUTH_SECRET = SECRET

  assert.equal(await emailFromAccessLink(foreign), null)
})

test('a link expires, and its lifetime stays short', async () => {
  const expired = await createReaderSessionToken('reader@example.com', ['access_link'], -10)
  assert.equal(await emailFromAccessLink(expired), null)

  // The short TTL is what buys back the single-use property the token table
  // used to provide; a regression to days would quietly undo that.
  assert.ok(ACCESS_LINK_TTL_SECONDS <= 60 * 60, 'access links must stay short-lived')
})

test('an access link is not itself book access', async () => {
  const token = await createAccessLinkToken('reader@example.com')
  const jar = { get: (name: string) => (name === 'paid_access' ? { value: token } : undefined) }

  // Pasted into the cookie that does grant the book, it names `access_link`
  // rather than a product, so it unlocks nothing. Entitlement is re-derived
  // from Stripe when the link is used.
  assert.equal(await canReadPaidChapter(jar), false)
})

test('a reader session naming the product still opens the book', async () => {
  const token = await createReaderSessionToken('reader@example.com', [ONLINE_BOOK_PRODUCT])
  const jar = { get: (name: string) => (name === 'paid_access' ? { value: token } : undefined) }
  assert.equal(await canReadPaidChapter(jar), true)
})
