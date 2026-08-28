// The link emailed to a buyer to open the book on any device.
//
// This used to be a random string stored in an `auth_tokens` row and consumed
// with an atomic "update … where used_at is null", which made it single-use.
// With no database that atomicity is not available — two clicks could both read
// the row as unused — so rather than pretend, the link is now a *signed,
// short-lived* token: unforgeable without AUTH_SECRET, and replayable only
// within its lifetime.
//
// That is the one property the move to Stripe-as-source-of-truth costs, so it
// is bought back with a short TTL: thirty minutes rather than seven days.
// Losing the link no longer matters — the reader asks for another from the
// site, and nothing is stored that could go stale.
//
// The token carries only the address. Entitlement is re-derived from Stripe
// when the link is used, so a refunded buyer cannot open the book with a link
// minted before the refund.

import { createReaderSessionToken, verifyReaderSession } from '@/lib/authSession'
import { normalizeEmail } from '@/lib/entitlements'

/**
 * Long enough to walk from the checkout page to a mail client, short enough
 * that a forwarded or intercepted mail is not a standing key to the book.
 */
export const ACCESS_LINK_TTL_SECONDS = 30 * 60

/** Not a product: it proves an address was verified, never that it owns anything. */
const ACCESS_LINK_GRANT = 'access_link'

export function createAccessLinkToken(email: string): Promise<string> {
  return createReaderSessionToken(normalizeEmail(email), [ACCESS_LINK_GRANT], ACCESS_LINK_TTL_SECONDS)
}

/** The address the link was issued to, or null if it is forged, stale or foreign. */
export async function emailFromAccessLink(token: string | undefined | null): Promise<string | null> {
  const session = await verifyReaderSession(token)
  if (!session?.products.includes(ACCESS_LINK_GRANT)) return null
  return session.customerId || null
}
