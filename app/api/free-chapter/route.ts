import { NextRequest, NextResponse, after } from 'next/server'
import { randomUUID } from 'crypto'

export const maxDuration = 30

async function forwardToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[free-chapter] APPS_SCRIPT_URL is not set — skipping forward')
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
    console.log('[free-chapter] forward result:', r.status, text.slice(0, 200))
  } catch (err) {
    console.error('[free-chapter] apps script forward failed:', err)
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || !body.email || !body.fullName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const existing = req.cookies.get('reader_id')?.value
  const readerId = existing && /^[0-9a-f-]{36}$/i.test(existing) ? existing : randomUUID()

  const source: string = typeof body.source === 'string' ? body.source : ''
  const sessionId: string = typeof body.sessionId === 'string' ? body.sessionId : ''
  const lang: string = typeof body.lang === 'string' ? body.lang : ''
  const country: string = req.headers.get('x-vercel-ip-country') ?? ''

  // Persist the lead via the Apps Script (writes to the "Leads" sheet).
  after(() => forwardToAppsScript({
    type: 'lead',
    timestamp: new Date().toISOString(),
    readerId,
    sessionId,
    source,
    firstName: typeof body.firstName === 'string' ? body.firstName : '',
    lastName: typeof body.lastName === 'string' ? body.lastName : '',
    fullName: body.fullName,
    email: body.email,
    profession: typeof body.profession === 'string' ? body.profession : '',
    lang,
    country,
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  }))

  const res = NextResponse.json({ ok: true })

  // Make sure anonymous sign-ups still get a stable readerId.
  if (!existing) {
    res.cookies.set('reader_id', readerId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  // Unlock the free chapters for the free-chapter sign-up (not the book-launch
  // notify form, whose source contains "notify"). Without this cookie the gated
  // chapter pages redirect the visitor straight back to the sign-up wall.
  if (!source.includes('notify')) {
    res.cookies.set('free_chapters_access', '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 365,
    })
  }

  return res
}
