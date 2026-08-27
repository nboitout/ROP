import assert from 'node:assert/strict'
import { test } from 'node:test'
import { ONLINE_BOOK_PRODUCT } from '../lib/access'
import {
  formatAmount,
  MAX_QUANTITY_PER_LINE,
  parseCart,
  priceCart,
  rejectCart,
} from '../lib/cart'

// The cart reaches the checkout route as JSON from the browser, so every rule
// below is what stands between a hand-crafted request and a mispriced order.

test('a well-formed cart survives the round trip', () => {
  assert.deepEqual(
    parseCart([{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }]),
    [{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }],
  )
  assert.deepEqual(
    parseCart(JSON.stringify([{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }])),
    [{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }],
  )
})

test('unknown products are dropped, never priced', () => {
  assert.deepEqual(parseCart([{ product: 'printed_book', quantity: 1 }]), [])
  assert.deepEqual(parseCart([{ product: '', quantity: 1 }]), [])
  assert.deepEqual(
    parseCart([{ product: 'free_lunch', quantity: 3 }, { product: ONLINE_BOOK_PRODUCT, quantity: 1 }]),
    [{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }],
  )
})

test('a reading licence never exceeds one unit, however it is asked for', () => {
  assert.deepEqual(
    parseCart([{ product: ONLINE_BOOK_PRODUCT, quantity: 99 }]),
    [{ product: ONLINE_BOOK_PRODUCT, quantity: MAX_QUANTITY_PER_LINE }],
  )
  // Repeating the line is the other way to ask for two.
  assert.deepEqual(
    parseCart([
      { product: ONLINE_BOOK_PRODUCT, quantity: 1 },
      { product: ONLINE_BOOK_PRODUCT, quantity: 1 },
    ]),
    [{ product: ONLINE_BOOK_PRODUCT, quantity: MAX_QUANTITY_PER_LINE }],
  )
})

test('junk quantities and junk shapes cannot smuggle a line through', () => {
  for (const quantity of [0, -1, -99, Number.NaN, Number.POSITIVE_INFINITY, '2', null]) {
    const cart = parseCart([{ product: ONLINE_BOOK_PRODUCT, quantity }])
    assert.ok(
      cart.length === 0 || cart[0].quantity === MAX_QUANTITY_PER_LINE,
      `quantity ${String(quantity)} produced ${JSON.stringify(cart)}`,
    )
  }
  for (const junk of [null, undefined, 42, 'not json', '{"lines":', {}, [null], [42]]) {
    assert.deepEqual(parseCart(junk), [], `parsing ${JSON.stringify(junk) ?? 'undefined'}`)
  }
})

test('prices come from the catalogue, never from the request', () => {
  const tampered = parseCart([
    { product: ONLINE_BOOK_PRODUCT, quantity: 1, unitAmount: 1, lineTotal: 1 },
  ] as unknown)
  const cart = priceCart(tampered)

  assert.equal(cart.lines.length, 1)
  assert.equal(cart.lines[0].unitAmount, 7000)
  assert.equal(cart.subtotal, 7000)
  assert.equal(cart.currency, 'eur')
  assert.equal(cart.itemCount, 1)
})

test('an empty or unknown cart is refused before it reaches Stripe', () => {
  assert.equal(rejectCart([]), 'empty')
  assert.equal(rejectCart([{ product: 'printed_book', quantity: 1 }]), 'unknown-product')
})

test('a cart is refused while the Stripe price id is missing', () => {
  const previous = process.env.STRIPE_PRICE_ONLINE_BOOK
  try {
    delete process.env.STRIPE_PRICE_ONLINE_BOOK
    assert.equal(
      rejectCart([{ product: ONLINE_BOOK_PRODUCT, quantity: 1 }]),
      'price-not-configured',
    )
  } finally {
    if (previous === undefined) delete process.env.STRIPE_PRICE_ONLINE_BOOK
    else process.env.STRIPE_PRICE_ONLINE_BOOK = previous
  }
})

test('amounts render in the reader’s locale', () => {
  // Non-breaking spaces vary by ICU build, so compare on the digits.
  assert.match(formatAmount(7000, 'eur', 'fr').replace(/\s/g, ' '), /^70,00 €$/)
  assert.match(formatAmount(7000, 'eur', 'en'), /^€70\.00$/)
  assert.match(formatAmount(7000, 'eur', 'zz').replace(/\s/g, ' '), /^70,00 €$/)
})

// --- Payment configuration guards -------------------------------------------
// A non-empty but wrong value used to pass every check here and fail at Stripe
// with a 502. These pin the two mistakes that actually happened.

import { missingPaymentsConfig } from '../lib/payments'

function withEnv(vars: Record<string, string | undefined>, run: () => void) {
  const keys = Object.keys(vars)
  const previous = Object.fromEntries(keys.map((k) => [k, process.env[k]]))
  try {
    for (const [k, v] of Object.entries(vars)) {
      if (v === undefined) delete process.env[k]
      else process.env[k] = v
    }
    run()
  } finally {
    for (const k of keys) {
      if (previous[k] === undefined) delete process.env[k]
      else process.env[k] = previous[k]
    }
  }
}

const COMPLETE = {
  STRIPE_SECRET_KEY: 'sk_test_abc',
  STRIPE_WEBHOOK_SECRET: 'whsec_abc',
  AUTH_SECRET: 'a-secret',
  STRIPE_PRICE_ONLINE_BOOK: 'price_abc',
}

test('a fully configured deployment reports nothing missing', () => {
  withEnv(COMPLETE, () => assert.deepEqual(missingPaymentsConfig(), []))
})

test('a price amount pasted instead of a price id is caught before Stripe', () => {
  for (const wrong of ['70', '70.00', '7000', '€70']) {
    withEnv({ ...COMPLETE, STRIPE_PRICE_ONLINE_BOOK: wrong }, () => {
      const problems = missingPaymentsConfig()
      assert.equal(problems.length, 1, `value ${wrong} produced ${JSON.stringify(problems)}`)
      assert.match(problems[0], /^STRIPE_PRICE_ONLINE_BOOK \(/)
    })
  }
})

test('the publishable key pasted instead of the secret key is caught', () => {
  withEnv({ ...COMPLETE, STRIPE_SECRET_KEY: 'pk_test_abc' }, () => {
    assert.deepEqual(missingPaymentsConfig(), ['STRIPE_SECRET_KEY (doit commencer par « sk_ »)'])
  })
})

test('a restricted key is accepted, and every absent variable is named', () => {
  withEnv({ ...COMPLETE, STRIPE_SECRET_KEY: 'rk_test_abc' }, () => {
    assert.deepEqual(missingPaymentsConfig(), [])
  })
  withEnv(
    { STRIPE_SECRET_KEY: undefined, STRIPE_WEBHOOK_SECRET: undefined, AUTH_SECRET: undefined, STRIPE_PRICE_ONLINE_BOOK: undefined },
    () => assert.deepEqual(missingPaymentsConfig(), [
      'STRIPE_SECRET_KEY', 'STRIPE_WEBHOOK_SECRET', 'AUTH_SECRET', 'STRIPE_PRICE_ONLINE_BOOK',
    ]),
  )
})
