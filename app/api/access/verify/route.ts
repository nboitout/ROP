import { NextRequest, NextResponse } from 'next/server'
import { verifyToken, signToken, ACCESS_TTL } from '@/lib/auth'
import { BOOK_ACCESS_COOKIE } from '@/lib/access'

// Clicked from the magic-link email: exchange the short-lived 'magic-link'
// token for a long-lived 'access' cookie, then redirect into the book.

function baseUrl(req: NextRequest): string {
  return process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || req.nextUrl.origin
}

export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token') ?? ''
  const payload = verifyToken(token, 'magic-link')

  if (!payload) {
    return NextResponse.redirect(`${baseUrl(req)}/acces?error=expired`)
  }

  // Re-mint as a long-lived access token bound to the same email + reader.
  const accessToken = signToken(
    { email: payload.email, readerId: payload.readerId, purpose: 'access' },
    ACCESS_TTL,
  )

  const res = NextResponse.redirect(`${baseUrl(req)}/chapitres-gratuits?welcome=1`)
  res.cookies.set(BOOK_ACCESS_COOKIE, accessToken, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: ACCESS_TTL,
  })
  // Keep reader attribution stable across the purchase boundary.
  if (payload.readerId && !req.cookies.get('reader_id')?.value) {
    res.cookies.set('reader_id', payload.readerId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: ACCESS_TTL,
    })
  }
  return res
}
