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

  // Stub: log lead until Resend + DB are wired up
  console.log('[free-chapter] lead:', { fullName: body.fullName, email: body.email, profession: body.profession })

  return NextResponse.json({ ok: true })
}
