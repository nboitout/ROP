// The sales mirror: one spreadsheet row per order, for the author to read.
//
// Deliberately not a database. Nothing reads these rows back to decide
// anything — access comes from Stripe (lib/entitlements.ts) — so a row that is
// missing, duplicated, re-sorted or deleted by hand costs nobody their book.
// That is the whole point of keeping the ledger and the truth apart.
//
// It rides on the same Apps Script endpoint that already receives leads and
// events, so there is no second integration to configure.

const ORDER_ROW_TYPE = 'order'

export type SalesLogEntry = {
  /** Stripe Checkout Session id — the natural key if rows ever need deduping. */
  sessionId: string
  email: string
  product: string
  /** Smallest currency unit, as Stripe reports it. */
  amountTotal: number
  currency: string
  status: 'paid' | 'refunded'
  lang: string
  readerId: string | null
  /** When the buyer waived the withdrawal period, from the session metadata. */
  termsAcceptedAt: string | null
}

/**
 * Appends an order row. Never throws and never blocks the caller: a mirror that
 * fails must not turn a completed payment into an error page, so the worst case
 * is a missing row the author can reconcile from the Stripe dashboard.
 */
export async function recordSale(entry: SalesLogEntry): Promise<void> {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[sales-log] APPS_SCRIPT_URL is not set — order not mirrored:', entry.sessionId)
    return
  }

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: ORDER_ROW_TYPE,
        timestamp: new Date().toISOString(),
        sessionId: entry.sessionId,
        email: entry.email,
        product: entry.product,
        // Euros rather than cents: this sheet is read by people, not code.
        amount: (entry.amountTotal / 100).toFixed(2),
        currency: entry.currency.toUpperCase(),
        status: entry.status,
        lang: entry.lang,
        readerId: entry.readerId ?? '',
        termsAcceptedAt: entry.termsAcceptedAt ?? '',
      }),
      redirect: 'follow',
    })
    if (!response.ok) {
      console.error('[sales-log] append failed:', response.status, entry.sessionId)
    }
  } catch (error) {
    console.error('[sales-log] append threw:', error)
  }
}
