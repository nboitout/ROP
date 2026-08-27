import { NextRequest, NextResponse } from 'next/server'
import { markInternalTraffic } from '@/lib/internalTraffic'
import {
  createSalesPreviewToken,
  SALES_PREVIEW_COOKIE,
  SALES_PREVIEW_TTL_SECONDS,
  salesPreviewPassword,
} from '@/lib/salesPreview'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Constant-time comparison, so a wrong password leaks nothing by timing. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const expected = salesPreviewPassword()
  if (!expected) {
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }
  if (!process.env.AUTH_SECRET?.trim()) {
    // Without a signing secret the grant could not be trusted, so refuse to
    // issue one rather than fall back to an unsigned flag.
    return NextResponse.json({ error: 'Server misconfiguration' }, { status: 500 })
  }

  const body = await req.json().catch(() => null)
  const password = typeof body?.password === 'string' ? body.password.trim() : ''
  if (!password || !safeEqual(password, expected)) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const response = NextResponse.json({ ok: true })
  response.cookies.set(SALES_PREVIEW_COOKIE, await createSalesPreviewToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: SALES_PREVIEW_TTL_SECONDS,
    path: '/',
  })
  // A walkthrough is not a visit: keep the review clicks out of the funnel.
  markInternalTraffic(response)
  return response
}

export async function DELETE(): Promise<NextResponse> {
  const response = NextResponse.json({ ok: true })
  response.cookies.set(SALES_PREVIEW_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 0,
    path: '/',
  })
  return response
}
