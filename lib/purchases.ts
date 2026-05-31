import { fetchSheetData } from '@/lib/sheets'

// ---------------------------------------------------------------------------
// Purchases live in a "Purchases" tab of the same Google Sheet as leads /
// events / visits. The webhook *writes* by forwarding to the Apps Script
// endpoint (type: 'purchase'); the returning-buyer flow *reads* via the
// service-account sheet reader.
//
// Expected Purchases sheet columns (row 1 = header):
//   timestamp | email | readerId | sessionId | amount | currency | stripeSessionId | status
// ---------------------------------------------------------------------------

export interface PurchaseRecord {
  timestamp: string
  email: string
  readerId: string
  sessionId: string
  amount: string
  currency: string
  stripeSessionId: string
  status: string
}

/** Forward a completed purchase to the Apps Script webhook (Sheets append). */
export async function recordPurchase(p: {
  email: string
  readerId: string
  sessionId: string
  amount: number // in major units, e.g. 70.00
  currency: string
  stripeSessionId: string
}): Promise<void> {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[purchases] APPS_SCRIPT_URL not set — purchase not persisted:', p.email)
    return
  }
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'purchase',
        timestamp: new Date().toISOString(),
        email: p.email.trim().toLowerCase(),
        readerId: p.readerId,
        sessionId: p.sessionId,
        amount: p.amount,
        currency: p.currency,
        stripeSessionId: p.stripeSessionId,
        status: 'paid',
      }),
      redirect: 'follow',
    })
    const text = await r.text().catch(() => '')
    console.log('[purchases] forward result:', r.status, text.slice(0, 200))
  } catch (err) {
    console.error('[purchases] apps script forward failed:', err)
  }
}

/** Has this email completed a paid purchase? Used by the returning-buyer path. */
export async function hasPurchased(email: string): Promise<boolean> {
  const target = email.trim().toLowerCase()
  if (!target) return false
  const rows = await fetchSheetData('Purchases').catch((err) => {
    console.error('[purchases] could not read Purchases sheet:', err)
    return [] as string[][]
  })
  if (rows.length < 2) return false
  // Column index 1 = email, 7 = status (see header above).
  return rows.slice(1).some((r) => {
    const rowEmail = (r[1] ?? '').trim().toLowerCase()
    const status = (r[7] ?? 'paid').trim().toLowerCase()
    return rowEmail === target && (status === '' || status === 'paid')
  })
}
