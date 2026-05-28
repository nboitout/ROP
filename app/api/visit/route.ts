import { NextRequest, NextResponse, after } from 'next/server'
import { randomUUID } from 'crypto'

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
  const body = await req.json().catch(() => null)
  if (!body || typeof body.lang !== 'string' || typeof body.page !== 'string') {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 })
  }

  const existing = req.cookies.get('reader_id')?.value
  const isReturning = !!(existing && /^[0-9a-f-]{36}$/i.test(existing))
  const readerId = isReturning ? existing! : randomUUID()

  const event: string = typeof body.event === 'string' ? body.event : 'page_visit'
  const durationSeconds: number | null =
    event === 'page_leave' && typeof body.duration_seconds === 'number'
      ? body.duration_seconds
      : null

  after(() => forwardToAppsScript({
    type: 'visit',
    event,
    timestamp: new Date().toISOString(),
    readerId,
    isReturning,
    lang: body.lang,
    page: body.page,
    ...(durationSeconds !== null ? { duration_seconds: durationSeconds } : {}),
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  }))

  const res = NextResponse.json({ ok: true })

  if (!isReturning) {
    res.cookies.set('reader_id', readerId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  return res
}
