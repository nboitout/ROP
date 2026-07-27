// Guards the paid-access boundary. Run with: npm test
//
// Before signed reader sessions existed, `paid_access` was a plain flag and any
// visitor could grant themselves the whole book from the browser console. These
// tests exist so that hole cannot come back unnoticed.

import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { canReadPaidChapter } from '@/lib/access'
import { createReaderSessionToken, verifyReaderSession } from '@/lib/authSession'

const SECRET = 'test-secret-for-access-tests'
const originalSecret = process.env.AUTH_SECRET

before(() => { process.env.AUTH_SECRET = SECRET })
after(() => {
  if (originalSecret === undefined) delete process.env.AUTH_SECRET
  else process.env.AUTH_SECRET = originalSecret
})

function cookies(jar: Record<string, string>) {
  return { get: (name: string) => (name in jar ? { value: jar[name] } : undefined) }
}

test('a signed session round-trips', async () => {
  const token = await createReaderSessionToken('customer-1', ['online_book'])
  const session = await verifyReaderSession(token)

  assert.equal(session?.customerId, 'customer-1')
  assert.deepEqual(session?.products, ['online_book'])
  assert.equal(await canReadPaidChapter(cookies({ paid_access: token })), true)
})

test('a hand-made cookie value grants nothing', async () => {
  for (const forged of ['1', 'true', 'paid', 'v1.x.y', '']) {
    assert.equal(await verifyReaderSession(forged), null, `verified junk: ${forged}`)
    assert.equal(await canReadPaidChapter(cookies({ paid_access: forged })), false, `unlocked with: ${forged}`)
  }
})

test('a tampered payload fails the signature', async () => {
  const token = await createReaderSessionToken('customer-1', ['online_book'])
  const [version, , signature] = token.split('.')
  const forged = Buffer.from(JSON.stringify({
    cid: 'attacker',
    prd: ['online_book'],
    iat: 0,
    exp: Math.floor(Date.now() / 1000) + 9999,
  })).toString('base64url')

  assert.equal(await verifyReaderSession(`${version}.${forged}.${signature}`), null)
})

test('a token signed with another secret is rejected', async () => {
  const token = await createReaderSessionToken('customer-1', ['online_book'])
  process.env.AUTH_SECRET = 'some-other-secret'
  try {
    assert.equal(await verifyReaderSession(token), null)
  } finally {
    process.env.AUTH_SECRET = SECRET
  }
})

test('an expired token is rejected', async () => {
  const expired = await createReaderSessionToken('customer-1', ['online_book'], -10)
  assert.equal(await verifyReaderSession(expired), null)
})

test('access is scoped to the purchased product', async () => {
  const other = await createReaderSessionToken('customer-1', ['some_other_product'])
  assert.equal(await canReadPaidChapter(cookies({ paid_access: other })), false)
})

test('the admin session still opens every chapter', async () => {
  assert.equal(await canReadPaidChapter(cookies({ admin_session: 'authenticated' })), true)
})

test('a missing AUTH_SECRET fails closed', async () => {
  const token = await createReaderSessionToken('customer-1', ['online_book'])
  delete process.env.AUTH_SECRET
  try {
    assert.equal(await canReadPaidChapter(cookies({ paid_access: token })), false)
  } finally {
    process.env.AUTH_SECRET = SECRET
  }
})
