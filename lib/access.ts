import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { verifyToken, type TokenPayload } from '@/lib/auth'

// Cookie that grants access to the paid online book. Holds a signed
// 'access' JWT (email + readerId), so it can't be forged by typing an email.
// Named 'paid_access' to match the existing gate in
// app/lecture/traitement-rop/page.tsx — one cookie unlocks all paid chapters.
export const BOOK_ACCESS_COOKIE = 'paid_access'

/** Returns the buyer's token payload if they hold valid book access, else null. */
export async function getBookAccess(): Promise<TokenPayload | null> {
  const token = (await cookies()).get(BOOK_ACCESS_COOKIE)?.value
  if (!token) return null
  return verifyToken(token, 'access')
}

/**
 * Gate a paid page. Call at the top of a server component for any chapter that
 * is part of the paid online book:
 *
 *   export default async function Chapter() {
 *     await requireBookAccess()
 *     return <ChapterReader ... />
 *   }
 *
 * Visitors without access are redirected to the purchase/access entry point.
 */
export async function requireBookAccess(): Promise<TokenPayload> {
  const access = await getBookAccess()
  if (!access) redirect('/acces?from=gate')
  return access
}
