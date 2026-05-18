import { NextRequest, NextResponse } from 'next/server'

// TODO: replace stub with real email delivery via Resend
// and persist lead to database (Neon/Postgres)
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

  if (source === 'chapter-5-free' && !fullName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  console.log('[free-chapter] lead:', {
    firstName,
    lastName,
    fullName,
    email: body.email,
    profession: body.profession,
    source,
  })

  const res = NextResponse.json({ ok: true, redirect: source === 'chapter-5-free' ? '/chapitre-5' : null })

  if (source === 'chapter-5-free') {
    // 30-day cookie — readers can come back to the chapter without re-submitting.
    res.cookies.set('chapter5_access', '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 30,
    })
  }

  return res
}
