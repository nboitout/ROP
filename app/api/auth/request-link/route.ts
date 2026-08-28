import { NextRequest, NextResponse } from 'next/server'
import { createAccessLinkToken } from '@/lib/accessLink'
import { sendAccessLinkEmail } from '@/lib/email'
import { purchasedProductsFor } from '@/lib/entitlements'
import { siteUrl } from '@/lib/payments'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * "I already bought the book, send me a new link."
 *
 * The response is deliberately identical whether or not the address matches a
 * purchase — it must not become a way to test which addresses bought the book.
 */
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  const email = typeof body?.email === 'string' ? body.email.trim() : ''
  const lang = typeof body?.lang === 'string' ? body.lang : 'fr'

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  try {
    const products = await purchasedProductsFor(email)
    if (products.length > 0) {
      const token = await createAccessLinkToken(email)
      await sendAccessLinkEmail(
        email,
        `${siteUrl()}/api/auth/verify?token=${encodeURIComponent(token)}`,
        lang,
      )
    }
  } catch (error) {
    console.error('[auth/request-link] failed:', error)
  }

  return NextResponse.json({ ok: true })
}
