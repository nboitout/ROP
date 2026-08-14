import { randomUUID } from 'crypto'
import type { NextRequest, NextResponse } from 'next/server'

export const READER_ID_COOKIE = 'reader_id'

const UUID_RE = /^[0-9a-f-]{36}$/i
const ONE_YEAR = 60 * 60 * 24 * 365

export interface ResolvedReaderId {
  readerId: string
  /** True only when the browser already presented a reader_id cookie. */
  isReturning: boolean
}

// Resolving the anonymous reader id, in priority order:
//
//   1. the reader_id cookie, which stays authoritative whenever it is present;
//   2. an id the client minted for itself and sent in the payload;
//   3. a fresh one.
//
// Step 2 exists because the tracking beacons are fired without awaiting each
// other. When several tabs of the same browser open at once, every one of
// those first requests arrives before any Set-Cookie has landed, so each sees
// "no cookie" and mints its own id — one browser then shows up as N distinct
// visitors. On 2026-08-12 a single client opened eight tabs in 1.5s and
// produced eight reader ids that way. Letting the client carry its own id
// across that window collapses them back into one.
//
// The client-supplied value is unverified, but a reader id is an anonymous
// analytics label with no access rights attached, and the cookie still wins
// whenever it exists — so a forged value can only mislabel its own traffic.
export function resolveReaderId(req: NextRequest, claimed?: unknown): ResolvedReaderId {
  const cookie = req.cookies.get(READER_ID_COOKIE)?.value
  if (cookie && UUID_RE.test(cookie)) return { readerId: cookie, isReturning: true }
  if (typeof claimed === 'string' && UUID_RE.test(claimed)) {
    return { readerId: claimed, isReturning: false }
  }
  return { readerId: randomUUID(), isReturning: false }
}

// Pair with resolveReaderId: persist whatever it resolved, so the browser
// converges on one id from its second request onwards.
export function setReaderIdCookie(res: NextResponse, readerId: string): void {
  res.cookies.set(READER_ID_COOKIE, readerId, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    path: '/',
    maxAge: ONE_YEAR,
  })
}
