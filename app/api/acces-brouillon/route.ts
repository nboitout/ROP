import { NextRequest, NextResponse } from 'next/server'
import { PAID_ACCESS_COOKIE } from '@/lib/access'
import { verifyReaderSession } from '@/lib/authSession'
import { recordServerEvent } from '@/lib/serverEvents'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

/** Draft pages a grant may unlock, and where the holder lands after redeeming. */
const DRAFT_ENTRY: Record<string, string> = {
  'chapter-3-rework': '/lecture/chapitre-3-rework',
  'chapter-4-rework': '/lecture/chapitre-4-rework',
  'chapter-5-rework': '/lecture/chapitre-5-rework',
}

/**
 * Redeems a per-person draft grant.
 *
 * The link carries a reader-session token minted by scripts/mint-draft-grant.ts
 * and signed with AUTH_SECRET. Verification happens here rather than on the
 * page itself because a server component cannot set a cookie.
 */
export async function GET(req: NextRequest) {
  const token = req.nextUrl.searchParams.get('token')
  const session = await verifyReaderSession(token)

  const grantedDraft = session?.products
    .find((product) => product.startsWith('draft:'))
    ?.slice('draft:'.length)
  const entry = grantedDraft ? DRAFT_ENTRY[grantedDraft] : undefined

  // Expired, tampered with, or naming a draft we no longer publish.
  if (!session || !entry) {
    return NextResponse.redirect(new URL('/', req.url))
  }

  recordServerEvent({
    chapter: grantedDraft!,
    event: 'draft_grant_redeemed',
    data: { grant: session.customerId, expiresAt: new Date(session.expiresAt * 1000).toISOString() },
    headers: req.headers,
  })

  const response = NextResponse.redirect(new URL(entry, req.url))
  response.cookies.set(PAID_ACCESS_COOKIE, token!, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    // The cookie dies with the grant it carries.
    expires: new Date(session.expiresAt * 1000),
  })
  return response
}
