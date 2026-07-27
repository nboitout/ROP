// Signed reader session, used for paid-book access.
//
// The token is a compact `v1.<payload>.<signature>` string, HMAC-SHA256 signed
// with AUTH_SECRET.  Verification runs through Web Crypto so the same helper
// works in the Node runtime (route handlers, server components) and in the
// Edge runtime (proxy.ts middleware).
//
// Before this existed the `paid_access` cookie was a plain flag: any visitor
// could set it by hand and read the whole book.  Nothing may treat the cookie
// value as trusted without going through verifyReaderSession().

const TOKEN_VERSION = 'v1'
const DEFAULT_TTL_SECONDS = 60 * 60 * 24 * 365

export type ReaderSession = {
  /** Customer id in our database. */
  customerId: string
  /** Products the reader owns, e.g. ['online_book']. */
  products: string[]
  /** Issued-at and expiry, epoch seconds. */
  issuedAt: number
  expiresAt: number
}

type TokenPayload = {
  cid: string
  prd: string[]
  iat: number
  exp: number
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
}

function base64UrlDecode(value: string): Uint8Array {
  const padded = value.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(value.length / 4) * 4, '=')
  const binary = atob(padded)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i)
  return bytes
}

function authSecret(): string {
  const secret = process.env.AUTH_SECRET?.trim()
  if (!secret) throw new Error('AUTH_SECRET is not set — reader sessions cannot be signed')
  return secret
}

async function hmacKey(): Promise<CryptoKey> {
  return crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(authSecret()),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  )
}

async function sign(data: string): Promise<string> {
  const signature = await crypto.subtle.sign('HMAC', await hmacKey(), new TextEncoder().encode(data))
  return base64UrlEncode(new Uint8Array(signature))
}

/** Constant-time comparison — avoids leaking the signature byte by byte. */
function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function createReaderSessionToken(
  customerId: string,
  products: string[],
  ttlSeconds: number = DEFAULT_TTL_SECONDS,
): Promise<string> {
  const issuedAt = Math.floor(Date.now() / 1000)
  const payload: TokenPayload = {
    cid: customerId,
    prd: products,
    iat: issuedAt,
    exp: issuedAt + ttlSeconds,
  }
  const encoded = base64UrlEncode(new TextEncoder().encode(JSON.stringify(payload)))
  const body = `${TOKEN_VERSION}.${encoded}`
  return `${body}.${await sign(body)}`
}

export async function verifyReaderSession(token: string | undefined | null): Promise<ReaderSession | null> {
  if (!token) return null

  const parts = token.split('.')
  if (parts.length !== 3) return null

  const [version, encoded, signature] = parts
  if (version !== TOKEN_VERSION) return null

  let expected: string
  try {
    expected = await sign(`${version}.${encoded}`)
  } catch {
    // AUTH_SECRET missing — fail closed rather than granting access.
    return null
  }
  if (!safeEqual(signature, expected)) return null

  let payload: TokenPayload
  try {
    payload = JSON.parse(new TextDecoder().decode(base64UrlDecode(encoded)))
  } catch {
    return null
  }

  if (typeof payload.cid !== 'string' || !Array.isArray(payload.prd)) return null
  if (typeof payload.exp !== 'number' || payload.exp * 1000 <= Date.now()) return null

  return {
    customerId: payload.cid,
    products: payload.prd.filter((product): product is string => typeof product === 'string'),
    issuedAt: payload.iat,
    expiresAt: payload.exp,
  }
}

export const READER_SESSION_MAX_AGE = DEFAULT_TTL_SECONDS
