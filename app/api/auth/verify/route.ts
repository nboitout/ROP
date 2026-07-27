import { NextRequest, NextResponse } from 'next/server'
import { PAID_ACCESS_COOKIE } from '@/lib/access'
import { createReaderSessionToken, READER_SESSION_MAX_AGE } from '@/lib/authSession'
import { consumeMagicLinkToken, listActiveProducts } from '@/lib/paymentsDb'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Where a reader lands once the book is unlocked. */
const READING_ENTRY = '/lecture/chapitre-1'

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) {
    return NextResponse.redirect(new URL('/merci?state=invalid-link', req.url))
  }

  let customer
  try {
    customer = await consumeMagicLinkToken(token)
  } catch (error) {
    console.error('[auth/verify] token lookup failed:', error)
    return NextResponse.redirect(new URL('/merci?state=error', req.url))
  }

  // Expired, already used, or simply wrong.
  if (!customer) {
    return NextResponse.redirect(new URL('/merci?state=invalid-link', req.url))
  }

  const products = await listActiveProducts(customer.id)
  if (products.length === 0) {
    return NextResponse.redirect(new URL('/merci?state=no-access', req.url))
  }

  const response = NextResponse.redirect(new URL(READING_ENTRY, req.url))
  response.cookies.set(PAID_ACCESS_COOKIE, await createReaderSessionToken(customer.id, products), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: READER_SESSION_MAX_AGE,
  })
  return response
}
