import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { hasPurchased } from '@/lib/purchases'
import { signToken, MAGIC_LINK_TTL } from '@/lib/auth'
import { sendMagicLinkEmail } from '@/lib/email'

// Returning-buyer flow: a reader enters their email and, IF that email has a
// recorded purchase, we email them a fresh magic link. The response is always
// the same ("check your inbox") so the endpoint never reveals who has paid.

function baseUrl(req: NextRequest): string {
  return process.env.NEXT_PUBLIC_BASE_URL?.replace(/\/$/, '') || req.nextUrl.origin
}

export async function POST(req: NextRequest) {
  const body = (await req.json().catch(() => null)) as { email?: string } | null
  const email = body?.email?.trim().toLowerCase() ?? ''
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  // Don't await delivery on the happy path's critical timing, but we do need
  // the lookup result; failures are swallowed so we never leak purchase state.
  try {
    if (await hasPurchased(email)) {
      const readerId = req.cookies.get('reader_id')?.value || randomUUID()
      const link = `${baseUrl(req)}/api/access/verify?token=${encodeURIComponent(
        signToken({ email, readerId, purpose: 'magic-link' }, MAGIC_LINK_TTL),
      )}`
      await sendMagicLinkEmail(email, link)
    }
  } catch (err) {
    console.error('[access/request] failed:', err)
  }

  // Uniform response regardless of whether the email had purchased.
  return NextResponse.json({ ok: true })
}
