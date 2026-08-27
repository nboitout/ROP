// Guards the pre-launch sales preview. Run with: npm test
//
// The preview opens the cart, the validation step and Stripe checkout for one
// browser while the shop is still closed to everyone else. It must therefore be
// as unforgeable as paid access — and must never become paid access.

import assert from 'node:assert/strict'
import { after, before, test } from 'node:test'
import { canReadPaidChapter, ONLINE_BOOK_PRODUCT } from '@/lib/access'
import { createReaderSessionToken } from '@/lib/authSession'
import {
  createSalesPreviewToken,
  hasSalesPreview,
  SALES_PREVIEW_COOKIE,
  SALES_PREVIEW_GRANT,
  salesPreviewPassword,
} from '@/lib/salesPreview'

const SECRET = 'test-secret-for-sales-preview'
const originalSecret = process.env.AUTH_SECRET

before(() => { process.env.AUTH_SECRET = SECRET })
after(() => {
  if (originalSecret === undefined) delete process.env.AUTH_SECRET
  else process.env.AUTH_SECRET = originalSecret
})

function cookies(jar: Record<string, string>) {
  return { get: (name: string) => (name in jar ? { value: jar[name] } : undefined) }
}

test('a visitor with no cookies sees the closed shop', async () => {
  assert.equal(await hasSalesPreview(cookies({})), false)
})

test('a hand-set cookie cannot open the shop', async () => {
  for (const forged of ['1', 'true', 'authenticated', 'sales_preview', 'v1.x.y', '']) {
    assert.equal(
      await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: forged })),
      false,
      `forged value ${JSON.stringify(forged)} was accepted`,
    )
  }
})

test('a token issued by this deployment opens the shop', async () => {
  const token = await createSalesPreviewToken()
  assert.equal(await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: token })), true)
})

test('a token signed with someone else’s secret is refused', async () => {
  process.env.AUTH_SECRET = 'a-different-secret'
  const foreign = await createSalesPreviewToken()
  process.env.AUTH_SECRET = SECRET

  assert.equal(await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: foreign })), false)
})

test('an expired preview grant is refused', async () => {
  const expired = await createReaderSessionToken('sales-preview', [SALES_PREVIEW_GRANT], -10)
  assert.equal(await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: expired })), false)
})

test('a paying reader’s session does not open the pre-launch shop', async () => {
  const readerToken = await createReaderSessionToken('customer-1', [ONLINE_BOOK_PRODUCT])
  assert.equal(await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: readerToken })), false)
})

test('the preview grant never unlocks a paid chapter', async () => {
  const token = await createSalesPreviewToken()
  // Even pasted into the cookie that does grant the book, it names
  // `sales_preview` rather than a product, so it opens nothing.
  assert.equal(await canReadPaidChapter(cookies({ paid_access: token })), false)
})

test('an admin session opens the preview', async () => {
  assert.equal(await hasSalesPreview(cookies({ admin_session: 'authenticated' })), true)
})

test('without AUTH_SECRET the preview fails closed', async () => {
  const token = await createSalesPreviewToken()
  delete process.env.AUTH_SECRET
  try {
    assert.equal(await hasSalesPreview(cookies({ [SALES_PREVIEW_COOKIE]: token })), false)
  } finally {
    process.env.AUTH_SECRET = SECRET
  }
})

test('the preview password falls back to the admin password, and is null without either', () => {
  const previousPreview = process.env.SALES_PREVIEW_PASSWORD
  const previousAdmin = process.env.ADMIN_PASSWORD
  try {
    delete process.env.SALES_PREVIEW_PASSWORD
    process.env.ADMIN_PASSWORD = 'admin-pw'
    assert.equal(salesPreviewPassword(), 'admin-pw')

    process.env.SALES_PREVIEW_PASSWORD = 'preview-pw'
    assert.equal(salesPreviewPassword(), 'preview-pw')

    delete process.env.SALES_PREVIEW_PASSWORD
    delete process.env.ADMIN_PASSWORD
    assert.equal(salesPreviewPassword(), null)
  } finally {
    if (previousPreview === undefined) delete process.env.SALES_PREVIEW_PASSWORD
    else process.env.SALES_PREVIEW_PASSWORD = previousPreview
    if (previousAdmin === undefined) delete process.env.ADMIN_PASSWORD
    else process.env.ADMIN_PASSWORD = previousAdmin
  }
})
