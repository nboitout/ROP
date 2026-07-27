import { NextRequest, NextResponse } from 'next/server'
import { sendAccessLinkEmail } from '@/lib/email'
import { siteUrl } from '@/lib/payments'
import { createMagicLinkToken, findCustomerByEmail, listActiveProducts } from '@/lib/paymentsDb'

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
    const customer = await findCustomerByEmail(email)
    if (customer) {
      const products = await listActiveProducts(customer.id)
      if (products.length > 0) {
        const token = await createMagicLinkToken(customer.id)
        await sendAccessLinkEmail(
          customer.email,
          `${siteUrl()}/api/auth/verify?token=${encodeURIComponent(token)}`,
          lang,
        )
      }
    }
  } catch (error) {
    console.error('[auth/request-link] failed:', error)
  }

  return NextResponse.json({ ok: true })
}
