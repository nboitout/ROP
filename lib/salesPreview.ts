// Private walkthrough of the sales pipeline before it opens to the public.
//
// The point is to let the team click the real cart, the real validation step
// and the real Stripe page — from the deployed site, on their own devices —
// while every other visitor still sees the "notify me on release" form.
//
// The preview grant rides on the same signed-token machinery as reader
// sessions (lib/authSession.ts), so a hand-set cookie cannot open the shop:
// forging one needs AUTH_SECRET. It names `sales_preview` rather than a
// product, so even if the value were pasted into the paid_access cookie it
// would not unlock a single paid chapter.

import { createReaderSessionToken, verifyReaderSession } from '@/lib/authSession'
import { cookieValue, type CookieReader } from '@/lib/access'
import { ADMIN_SESSION_COOKIE } from '@/lib/internalTraffic'

export const SALES_PREVIEW_COOKIE = 'sales_preview'

/** Not a product: it grants a view of the shop, never of the book. */
export const SALES_PREVIEW_GRANT = 'sales_preview'

export const SALES_PREVIEW_TTL_SECONDS = 60 * 60 * 24 * 30

export function createSalesPreviewToken(): Promise<string> {
  return createReaderSessionToken('sales-preview', [SALES_PREVIEW_GRANT], SALES_PREVIEW_TTL_SECONDS)
}

/**
 * Admins are already authenticated against the same site, so an admin session
 * opens the preview too — one less password to pass around.
 */
export async function hasSalesPreview(cookieStore: CookieReader): Promise<boolean> {
  if (cookieValue(cookieStore, ADMIN_SESSION_COOKIE)) return true

  const session = await verifyReaderSession(cookieValue(cookieStore, SALES_PREVIEW_COOKIE))
  return !!session?.products.includes(SALES_PREVIEW_GRANT)
}

/**
 * The password that opens the preview. Falls back to ADMIN_PASSWORD so the
 * feature works the day it deploys, but setting SALES_PREVIEW_PASSWORD lets
 * the walkthrough be shared without handing over the admin dashboard — which
 * holds readers' email addresses.
 */
export function salesPreviewPassword(): string | null {
  return (
    process.env.SALES_PREVIEW_PASSWORD?.trim()
    || process.env.ADMIN_PASSWORD?.trim()
    || null
  )
}
