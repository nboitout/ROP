import { createHmac, timingSafeEqual } from 'node:crypto'

// ---------------------------------------------------------------------------
// Password-less auth tokens (magic links + access cookie).
//
// We hand-roll a compact JWT (HS256) instead of pulling in a dependency —
// consistent with lib/sheets.ts, which hand-rolls Google's OAuth JWT.
// AUTH_SECRET (see .env.example) is the signing key.
// ---------------------------------------------------------------------------

export type TokenPurpose = 'magic-link' | 'access'

export interface TokenPayload {
  email: string
  readerId: string
  purpose: TokenPurpose
  iat: number
  exp: number
}

function getSecret(): string {
  const secret = process.env.AUTH_SECRET
  if (!secret || secret.length < 16) {
    throw new Error('AUTH_SECRET is missing or too short (need ≥16 chars).')
  }
  return secret
}

function base64url(input: string | Buffer): string {
  const b = typeof input === 'string' ? Buffer.from(input) : input
  return b.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64urlDecode(input: string): Buffer {
  const pad = input.length % 4 === 0 ? '' : '='.repeat(4 - (input.length % 4))
  return Buffer.from(input.replace(/-/g, '+').replace(/_/g, '/') + pad, 'base64')
}

function sign(signingInput: string): string {
  return base64url(createHmac('sha256', getSecret()).update(signingInput).digest())
}

/** Create a signed token. `ttlSeconds` controls expiry. */
export function signToken(
  data: { email: string; readerId: string; purpose: TokenPurpose },
  ttlSeconds: number,
): string {
  const now = Math.floor(Date.now() / 1000)
  const header = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }))
  const payload = base64url(
    JSON.stringify({
      email: data.email.trim().toLowerCase(),
      readerId: data.readerId,
      purpose: data.purpose,
      iat: now,
      exp: now + ttlSeconds,
    } satisfies TokenPayload),
  )
  const signingInput = `${header}.${payload}`
  return `${signingInput}.${sign(signingInput)}`
}

/** Verify a token. Returns the payload, or null if invalid/expired/wrong purpose. */
export function verifyToken(token: string, expected: TokenPurpose): TokenPayload | null {
  const parts = token.split('.')
  if (parts.length !== 3) return null
  const [header, payload, signature] = parts

  const expectedSig = sign(`${header}.${payload}`)
  const a = base64urlDecode(signature)
  const b = base64urlDecode(expectedSig)
  if (a.length !== b.length || !timingSafeEqual(a, b)) return null

  let decoded: TokenPayload
  try {
    decoded = JSON.parse(base64urlDecode(payload).toString('utf8')) as TokenPayload
  } catch {
    return null
  }

  if (decoded.purpose !== expected) return null
  if (typeof decoded.exp !== 'number' || decoded.exp < Math.floor(Date.now() / 1000)) return null
  if (!decoded.email) return null

  return decoded
}

// Token lifetimes
export const MAGIC_LINK_TTL = 60 * 30 // 30 minutes
export const ACCESS_TTL = 60 * 60 * 24 * 365 // 1 year
