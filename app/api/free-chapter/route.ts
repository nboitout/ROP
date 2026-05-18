import { NextRequest, NextResponse, after } from 'next/server'
import { randomUUID } from 'crypto'

export const maxDuration = 30

async function forwardToAppsScript(payload: Record<string, unknown>) {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[free-chapter] APPS_SCRIPT_URL is not set — skipping forward')
    return
  }
  console.log('[free-chapter] forwarding to:', url.slice(0, 60) + '…')
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
  if (!body || !body.email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const source: string = typeof body.source === 'string' ? body.source : 'chapter-5-free'
  const firstName: string = typeof body.firstName === 'string' ? body.firstName.trim() : ''
  const lastName: string = typeof body.lastName === 'string' ? body.lastName.trim() : ''
  const fullName: string = typeof body.fullName === 'string' && body.fullName.trim()
    ? body.fullName.trim()
    : `${firstName} ${lastName}`.trim()
  const profession: string = typeof body.profession === 'string' ? body.profession : ''

  if (source === 'chapter-5-free' && !fullName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Preserve the existing readerId across re-submissions (cookie outlives the access cookie).
  const existing = req.cookies.get('reader_id')?.value
  const readerId = existing && /^[0-9a-f-]{36}$/i.test(existing) ? existing : randomUUID()

  // Forward in the background so the user isn't blocked by Apps Script latency.
  after(() => forwardToAppsScript({
    type: 'lead',
    timestamp: new Date().toISOString(),
    readerId,
    firstName,
    lastName,
    fullName,
    email: body.email,
    profession,
    source,
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  }))

  console.log('[free-chapter] lead:', { readerId, fullName, email: body.email, profession, source })

  const res = NextResponse.json({ ok: true, redirect: source === 'chapter-5-free' ? '/chapitres-gratuits' : null })

  const secure = process.env.NODE_ENV === 'production'

  // readerId — 1 year, used for tracking journeys across multiple visits.
  res.cookies.set('reader_id', readerId, {
    httpOnly: true,
    sameSite: 'lax',
    secure,
    path: '/',
    maxAge: 60 * 60 * 24 * 365,
  })

  if (source === 'chapter-5-free') {
    // Access gate — 30 days. One form unlocks all free chapters.
    res.cookies.set('free_chapters_access', '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure,
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return res
}
