import { fetchAllSheets } from '@/lib/sheets'
import { fmtParis, parisDate, fmtDuration } from '@/lib/adminFormat'

export const dynamic = 'force-dynamic'

// Turn an ISO 3166 country code (FR, KR, etc.) into a full name (France, South Korea).
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
function countryLabel(code: string): string {
  if (!/^[A-Za-z]{2}$/.test(code)) return code || 'Unknown'
  try {
    return regionNames.of(code.toUpperCase()) ?? code
  } catch {
    return code
  }
}

// Coarse device class from a user-agent string (laptop vs desktop is
// indistinguishable from UA, so both report as "Desktop").
function deviceType(ua: string): string {
  if (!ua) return '-'
  if (/iPad|Tablet|PlayBook|Silk|Kindle|Nexus 7|Nexus 10|(?:Android(?!.*Mobile))/i.test(ua)) return 'Tablet'
  if (/Mobi|iPhone|iPod|Android|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(ua)) return 'Mobile'
  return 'Desktop'
}

function isGuyBoitoutReferer(referer: string): boolean {
  if (!referer) return false
  try {
    return new URL(referer).hostname === 'www.guy-boitout.com'
  } catch {
    return false
  }
}

// One visit = all the pageviews of one reader on one Paris calendar day.
interface Visit {
  readerId: string
  day: string
  firstTs: string
  lastTs: string
  pages: string[]
  pageviews: number
  country: string
  userAgent: string
  referer: string
  utm_source: string
}

const PARIS_TZ = 'Europe/Paris'
const fmtTimeOnly = (t: string) =>
  new Intl.DateTimeFormat('fr-FR', { timeZone: PARIS_TZ, hour: '2-digit', minute: '2-digit', hour12: false })
    .format(new Date(t))

export default async function VisitsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>
}) {
  const { country } = await searchParams
  const { visits, leads, outlierVisitDays } = await fetchAllSheets({ includeOutlierVisitDays: true })
  const outlierByVisitDay = new Map(outlierVisitDays.map((item) => [item.key, item]))

  const identity = new Map<string, { name: string; email: string }>()
  leads.forEach((l) => {
    if (!l.readerId) return
    const key = l.readerId.toLowerCase()
    const name = [l.firstName, l.lastName].filter(Boolean).join(' ').trim() || l.fullName.trim()
    const cur = identity.get(key)
    if (cur && (cur.name || !name)) return
    identity.set(key, { name, email: l.email.trim() })
  })

  const dayDwell = new Map<string, number>()
  visits
    .filter((v) => v.event === 'page_leave' && v.readerId)
    .forEach((v) => {
      const n = parseFloat(v.duration_seconds)
      if (isNaN(n) || n <= 0) return
      const dayKey = `${v.readerId}|${parisDate(v.timestamp)}`
      dayDwell.set(dayKey, (dayDwell.get(dayKey) ?? 0) + n)
    })

  const pageVisits = visits.filter((v) => v.event === 'page_visit' && isGuyBoitoutReferer(v.referer))

  const firstSeen = new Map<string, string>()
  pageVisits.forEach((v) => {
    if (!v.readerId) return
    const day = parisDate(v.timestamp)
    const cur = firstSeen.get(v.readerId)
    if (!cur || day < cur) firstSeen.set(v.readerId, day)
  })

  const groups = new Map<string, Visit>()
  ;[...pageVisits]
    .sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime())
    .forEach((v) => {
      const day = parisDate(v.timestamp)
      const id = v.readerId || `anon:${v.userAgent}:${v.country}`
      const key = `${id}|${day}`
      const page = v.page.replace(/^https?:\/\/[^/]+/, '') || '/'
      const g = groups.get(key)
      if (!g) {
        groups.set(key, {
          readerId: v.readerId,
          day,
          firstTs: v.timestamp,
          lastTs: v.timestamp,
          pages: [page],
          pageviews: 1,
          country: v.country,
          userAgent: v.userAgent,
          referer: v.referer,
          utm_source: v.utm_source,
        })
      } else {
        g.lastTs = v.timestamp
        g.pageviews += 1
        if (g.pages[g.pages.length - 1] !== page) g.pages.push(page)
        if (!g.referer) g.referer = v.referer
        if (!g.utm_source) g.utm_source = v.utm_source
      }
    })
  const allVisits = [...groups.values()]

  const filter = (country ?? '').trim().toLowerCase()
  const filtered = filter
    ? allVisits.filter((g) => {
        const code = (g.country || '').toLowerCase()
        return code === filter || countryLabel(g.country).toLowerCase() === filter
      })
    : allVisits

  const rows = [...filtered]
    .sort((a, b) => new Date(b.lastTs).getTime() - new Date(a.lastTs).getTime())
    .slice(0, 250)

  const byCountry = new Map<string, number>()
  allVisits.forEach((g) => {
    const c = countryLabel(g.country)
    byCountry.set(c, (byCountry.get(c) ?? 0) + 1)
  })
  const countryChips = [...byCountry.entries()].sort((a, b) => b[1] - a[1]).slice(0, 12)

  const uniqueReaders = new Set(pageVisits.map((v) => v.readerId).filter(Boolean)).size

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Visits inspector</h1>
          <p className="adm-page-sub">
            One line per <strong>visit</strong> - all the pages a reader viewed on one day, newest
            first (max 250). Readers who signed up via the email gate appear by name; the rest show
            their anonymous cookie ID. Only live-site traffic with a <code>www.guy-boitout.com</code>{' '}
            referrer is listed here.
          </p>
          <p className="adm-page-sub">
            Suspiciously long visit-days stay visible here and are flagged, but they are excluded from the broader dashboard metrics.
          </p>
          <p className="adm-page-sub">
            {uniqueReaders.toLocaleString()} unique visitor{uniqueReaders === 1 ? '' : 's'} ·{' '}
            {allVisits.length.toLocaleString()} visit{allVisits.length === 1 ? '' : 's'} ·{' '}
            {pageVisits.length.toLocaleString()} pageview{pageVisits.length === 1 ? '' : 's'} all-time
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 20 }}>
        <a
          href="/admin/visits"
          className="adm-nav-link"
          style={{ border: '1px solid var(--adm-i08)', padding: '4px 10px', borderRadius: 3, fontSize: '.8rem' }}
        >
          All countries
        </a>
        {countryChips.map(([c, n]) => (
          <a
            key={c}
            href={`/admin/visits?country=${encodeURIComponent(c)}`}
            className="adm-nav-link"
            style={{ border: '1px solid var(--adm-i08)', padding: '4px 10px', borderRadius: 3, fontSize: '.8rem' }}
          >
            {c} ({n})
          </a>
        ))}
      </div>

      {filter && (
        <p className="adm-section-title">
          Filtered: {country} - {rows.length} visit{rows.length === 1 ? '' : 's'}
        </p>
      )}

      <div className="adm-leads-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Time (Paris)</th>
              <th>Reader</th>
              <th>Country</th>
              <th>Device</th>
              <th>Pages viewed</th>
              <th>Dwell (day)</th>
              <th>Flag</th>
              <th>Ret.</th>
              <th>Referer</th>
              <th>UTM</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((g, i) => {
              const dwellToday = dayDwell.get(`${g.readerId}|${g.day}`) ?? 0
              const outlier = outlierByVisitDay.get(`${g.readerId.toLowerCase()}|${g.day}`)
              const ref = (g.referer || '').replace(/^https?:\/\//, '').replace(/\/$/, '')
              const isReturn = (firstSeen.get(g.readerId) ?? g.day) < g.day
              const sameMinute = fmtParis(g.firstTs) === fmtParis(g.lastTs)
              const who = identity.get(g.readerId.toLowerCase())
              return (
                <tr key={i}>
                  <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                    {fmtParis(g.firstTs)}
                    {!sameMinute && ` -> ${fmtTimeOnly(g.lastTs)}`}
                  </td>
                  <td style={{ maxWidth: 180 }}>
                    {who ? (
                      <>
                        {who.name || who.email}
                        {who.name && who.email && (
                          <span className="muted" style={{ display: 'block', fontSize: '.72rem' }}>{who.email}</span>
                        )}
                      </>
                    ) : (
                      <span className="muted" style={{ fontFamily: 'monospace', fontSize: '.72rem' }}>
                        {(g.readerId || '').slice(0, 8) || '-'}
                      </span>
                    )}
                  </td>
                  <td style={{ whiteSpace: 'nowrap' }}>{countryLabel(g.country)}</td>
                  <td>{deviceType(g.userAgent)}</td>
                  <td style={{ maxWidth: 240 }}>
                    {g.pageviews} page{g.pageviews === 1 ? '' : 's'}
                    <span className="muted" style={{ display: 'block', fontSize: '.72rem', lineHeight: 1.4 }}>
                      {g.pages.join(' -> ')}
                    </span>
                  </td>
                  <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                    {dwellToday > 0 ? fmtDuration(dwellToday) : '-'}
                  </td>
                  <td>
                    {outlier ? (
                      <>
                        <span className="adm-quality-flag warning">Excluded</span>
                        <span className="muted" style={{ display: 'block', fontSize: '.72rem', lineHeight: 1.4 }}>
                          {outlier.reason}
                        </span>
                      </>
                    ) : (
                      <span className="muted">-</span>
                    )}
                  </td>
                  <td>{isReturn ? 'yes' : '-'}</td>
                  <td className="muted" style={{ maxWidth: 140, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{ref || '-'}</td>
                  <td className="muted">{g.utm_source || '-'}</td>
                </tr>
              )
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={10} className="muted">No matching visits</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
