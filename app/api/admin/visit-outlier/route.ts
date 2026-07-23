import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_SESSION_COOKIE } from '@/lib/internalTraffic'
import { deleteOutlierOverride, saveOutlierOverride, type OutlierOverrideDecision } from '@/lib/outlierOverrides'

function isAuthenticated(req: NextRequest): boolean {
  return req.cookies.get(ADMIN_SESSION_COOKIE)?.value === 'authenticated'
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  if (!isAuthenticated(req)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const body = (await req.json().catch(() => null)) as
    | { key?: string; readerId?: string; day?: string; decision?: OutlierOverrideDecision | 'auto' }
    | null

  if (!body?.key || !body.readerId || !body.day || !body.decision) {
    return NextResponse.json({ error: 'Bad payload' }, { status: 400 })
  }

  if (!/^\d{4}-\d{2}-\d{2}$/.test(body.day)) {
    return NextResponse.json({ error: 'Invalid day' }, { status: 400 })
  }

  if (body.decision === 'auto') {
    await deleteOutlierOverride(body.key)
    return NextResponse.json({ ok: true, decision: 'auto' })
  }

  if (body.decision !== 'keep' && body.decision !== 'exclude') {
    return NextResponse.json({ error: 'Invalid decision' }, { status: 400 })
  }

  await saveOutlierOverride({
    key: body.key,
    readerId: body.readerId,
    day: body.day,
    decision: body.decision,
  })

  return NextResponse.json({ ok: true, decision: body.decision })
}
