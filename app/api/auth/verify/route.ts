import { NextRequest, NextResponse } from 'next/server'
import { PAID_ACCESS_COOKIE } from '@/lib/access'
import { emailFromAccessLink } from '@/lib/accessLink'
import { createReaderSessionToken, READER_SESSION_MAX_AGE } from '@/lib/authSession'
import { purchasedProductsFor } from '@/lib/entitlements'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Where a reader lands once the book is unlocked. */
const READING_ENTRY = '/lecture/chapitre-1'

/**
 * Opens the book from an emailed link.
 *
 * The link only proves which address it was issued to; what that address owns
 * is asked of Stripe here, on every use. So a link minted before a refund stops
 * working the moment the refund lands, without anything to revoke.
 */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  if (!token) {
    return NextResponse.redirect(new URL('/merci?state=invalid-link', req.url))
  }

  // Forged, expired, or signed by another deployment.
  const email = await emailFromAccessLink(token)
  if (!email) {
    return NextResponse.redirect(new URL('/merci?state=invalid-link', req.url))
  }

  let products: string[]
  try {
    products = await purchasedProductsFor(email)
  } catch (error) {
    console.error('[auth/verify] could not read the purchase from Stripe:', error)
    return NextResponse.redirect(new URL('/merci?state=error', req.url))
  }

  if (products.length === 0) {
    return NextResponse.redirect(new URL('/merci?state=no-access', req.url))
  }

  const response = NextResponse.redirect(new URL(READING_ENTRY, req.url))
  response.cookies.set(PAID_ACCESS_COOKIE, await createReaderSessionToken(email, products), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: READER_SESSION_MAX_AGE,
  })
  return response
}
