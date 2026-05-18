import { NextRequest, NextResponse } from 'next/server'

// TODO: replace stub with real email delivery via Resend
// and persist lead to database (Neon/Postgres)
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null)
  if (!body || !body.email || !body.fullName) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }

  const source: string = typeof body.source === 'string' ? body.source : 'chapter-5-free'

  console.log('[free-chapter] lead:', {
    fullName: body.fullName,
    email: body.email,
    profession: body.profession,
    source,
  })

  const res = NextResponse.json({ ok: true, redirect: source === 'chapter-5-free' ? '/chapitre-5' : null })

  if (source === 'chapter-5-free') {
    // Session-only cookie — readers re-submit the form each visit (interest signal).
    res.cookies.set('chapter5_access', '1', {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
    })
  }

  return res
}
