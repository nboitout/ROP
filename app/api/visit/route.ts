import { NextRequest, NextResponse, after } from 'next/server'
import { hasInternalTrafficMarker, markInternalTraffic } from '@/lib/internalTraffic'
import { resolveReaderId, setReaderIdCookie } from '@/lib/readerId'

export const maxDuration = 30

async function forwardToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[visit] APPS_SCRIPT_URL is not set — skipping forward')
    return
  }
  try {
    const r = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })
    const text = await r.text().catch(() => '')
    console.log('[visit] forward result:', r.status, text.slice(0, 200))
  } catch (err) {
    console.error('[visit] apps script forward failed:', err)
  }
}

export async function POST(req: NextRequest) {
  // Don't record internal traffic. As soon as someone visits while logged into
  // admin, we stamp a long-lived internal marker so later public browsing from
  // the same browser also stays out of the sheets.
  if (hasInternalTrafficMarker(req)) {
    const response = NextResponse.json({ ok: true, skipped: 'internal' })
    markInternalTraffic(response)
    return response
  }

  const body = await req.json().catch(() => null)
  if (!body || typeof body.lang !== 'string' || typeof body.page !== 'string') {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 })
  }

  const { readerId, isReturning } = resolveReaderId(req, body.readerId)

  const event: string = typeof body.event === 'string' ? body.event : 'page_visit'
  const durationSeconds: number | null =
    event === 'page_leave' && typeof body.duration_seconds === 'number'
      ? body.duration_seconds
      : null

  const sessionId: string = typeof body.sessionId === 'string' ? body.sessionId : ''
  const country: string = req.headers.get('x-vercel-ip-country') ?? ''
  const utm: Record<string, string> =
    body.utm && typeof body.utm === 'object' && !Array.isArray(body.utm) ? body.utm : {}

  after(() => forwardToAppsScript({
    type: 'visit',
    event,
    timestamp: new Date().toISOString(),
    readerId,
    sessionId,
    isReturning,
    lang: body.lang,
    page: body.page,
    country,
    ...(Object.keys(utm).length > 0 ? utm : {}),
    ...(durationSeconds !== null ? { duration_seconds: durationSeconds } : {}),
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  }))

  // Echoed so the client can align its mirror with the id actually recorded —
  // the cookie wins when both exist, and this is how the browser learns that.
  const res = NextResponse.json({ ok: true, readerId })

  if (!isReturning) setReaderIdCookie(res, readerId)

  return res
}
