// Server-side twin of /api/track.
//
// The client tracker cannot answer "when did this person open the page": it is
// keyed by an anonymous reader_id cookie, and it never fires for a browser
// carrying the internal-traffic marker. A grant holder is a named individual we
// were asked to follow, so their opens are recorded from the server, where the
// grant label is known and no client script can be blocked.
//
// Rows land in the same Events sheet as /api/track, so the existing admin
// dashboards pick them up without changes.

import { after } from 'next/server'

type ServerEvent = {
  chapter: string
  event: string
  data?: Record<string, unknown>
  lang?: string
  /** Request headers, when available, to fill country / UA / referer. */
  headers?: Headers
}

export function recordServerEvent({ chapter, event, data, lang = '', headers }: ServerEvent) {
  const url = process.env.APPS_SCRIPT_URL
  if (!url) {
    console.warn('[serverEvent] APPS_SCRIPT_URL is not set — skipping forward')
    return
  }

  const payload = {
    type: 'event',
    timestamp: new Date().toISOString(),
    readerId: '',
    sessionId: '',
    chapter,
    event,
    data: data ?? null,
    lang,
    country: headers?.get('x-vercel-ip-country') ?? '',
    userAgent: headers?.get('user-agent') ?? '',
    referer: headers?.get('referer') ?? '',
  }

  // after() so the visitor never waits on the sheet round-trip, and so the
  // serverless invocation is not torn down mid-flight.
  after(async () => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        redirect: 'follow',
      })
      console.log('[serverEvent] forward result:', response.status, event)
    } catch (error) {
      console.error('[serverEvent] forward failed:', error)
    }
  })
}
