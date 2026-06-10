import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'

export const dynamic = 'force-dynamic'

// Every supported site language, in a fixed display order, so the
// "Readers by Language" chart always shows all of them — even at zero.
const ALL_LANGS: { code: string; label: string }[] = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'de', label: 'Deutsch' },
  { code: 'es', label: 'Español' },
  { code: 'it', label: 'Italiano' },
]

function daysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString().slice(0, 10)
}

export default async function ReadersPage() {
  const { leads, visits } = await fetchAllSheets()

  // lang/country are absent from the Leads sheet — enrich from the first page_visit per readerId
  const visitorMeta = new Map<string, { lang: string; country: string }>()
  visits
    .filter((v) => v.event === 'page_visit' && v.readerId)
    .forEach((v) => {
      if (!visitorMeta.has(v.readerId)) {
        visitorMeta.set(v.readerId, { lang: v.lang, country: v.country })
      }
    })
  const enrichedLeads = leads.map((l) => {
    const meta = visitorMeta.get(l.readerId)
    return meta ? { ...l, lang: meta.lang || l.lang, country: meta.country || l.country } : l
  })

  // Deduplicate by email — each reader may have submitted multiple forms (chapter-5-free + book-notify)
  // Prefer the chapter-5-free row (has real name + profession); fall back to whichever comes first.
  const deduped = new Map<string, typeof enrichedLeads[0]>()
  enrichedLeads.forEach((l) => {
    const key = l.email.toLowerCase()
    if (!key) return
    const existing = deduped.get(key)
    if (!existing || l.source === 'chapter-5-free') deduped.set(key, l)
  })
  const dedupedLeads = [...deduped.values()]

  const total = dedupedLeads.length
  const cutoff7 = daysAgo(7)
  const cutoff30 = daysAgo(30)
  const last7 = dedupedLeads.filter((l) => l.timestamp.slice(0, 10) >= cutoff7).length
  const last30 = dedupedLeads.filter((l) => l.timestamp.slice(0, 10) >= cutoff30).length

  // Bar: leads by profession (top 10)
  const profCount = new Map<string, number>()
  dedupedLeads.forEach((l) => {
    const p = l.profession || 'Unknown'
    profCount.set(p, (profCount.get(p) ?? 0) + 1)
  })
  const profData: BarDataPoint[] = [...profCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }))

  // Bar: leads by language — always show every supported language (even at 0),
  // in a fixed order, so the chart is stable over time. Any unexpected value
  // (e.g. a missing lang recorded as "Unknown") is appended only if present.
  const langCount = new Map<string, number>()
  dedupedLeads.forEach((l) => {
    const lg = l.lang || 'Unknown'
    langCount.set(lg, (langCount.get(lg) ?? 0) + 1)
  })
  const langData: BarDataPoint[] = ALL_LANGS.map(({ code, label }) => ({
    name: label,
    value: langCount.get(code) ?? 0,
  }))
  ;[...langCount.entries()]
    .filter(([code]) => !ALL_LANGS.some((l) => l.code === code))
    .sort((a, b) => b[1] - a[1])
    .forEach(([code, value]) => langData.push({ name: code, value }))

  // Table: by country
  const countryCount = new Map<string, number>()
  dedupedLeads.forEach((l) => {
    const c = l.country || 'Unknown'
    countryCount.set(c, (countryCount.get(c) ?? 0) + 1)
  })
  const countryRows = [...countryCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([country, count]) => ({ country, count }))

  // Sorted leads for data table
  const sortedLeads = [...dedupedLeads].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

  // Per-reader visit stats (keyed by readerId) from page_visit events:
  // first time seen, last time seen, and how many times they came back.
  // A "return" = any visit after the first, counted by distinct session.
  const visitStats = new Map<
    string,
    { first: number; last: number; sessions: Set<string>; count: number; lastUA: string }
  >()
  visits
    .filter((v) => v.event === 'page_visit' && v.readerId)
    .forEach((v) => {
      const t = new Date(v.timestamp).getTime()
      if (isNaN(t)) return
      const s = visitStats.get(v.readerId)
      if (!s) {
        visitStats.set(v.readerId, {
          first: t,
          last: t,
          sessions: new Set(v.sessionId ? [v.sessionId] : []),
          count: 1,
          lastUA: v.userAgent || '',
        })
      } else {
        if (t < s.first) s.first = t
        // Keep the user agent from the most recent visit (the last session).
        if (t >= s.last) {
          s.last = t
          if (v.userAgent) s.lastUA = v.userAgent
        }
        if (v.sessionId) s.sessions.add(v.sessionId)
        s.count += 1
      }
    })

  // Coarse device class from a user-agent string. We can't reliably tell a
  // laptop from a desktop, so both report as "Desktop".
  const deviceType = (ua: string) => {
    if (!ua) return '—'
    if (/iPad|Tablet|PlayBook|Silk|Kindle|Nexus 7|Nexus 10|(?:Android(?!.*Mobile))/i.test(ua))
      return 'Tablet'
    if (/Mobi|iPhone|iPod|Android|Windows Phone|BlackBerry|IEMobile|Opera Mini/i.test(ua))
      return 'Mobile'
    return 'Desktop'
  }

  const fmtTs = (ms: number) =>
    new Date(ms).toISOString().slice(0, 16).replace('T', ' ')

  // First/last name, reconstructed from fullName when the split columns are empty.
  const splitName = (l: typeof sortedLeads[0]) => {
    let first = (l.firstName || '').trim()
    let last = (l.lastName || '').trim()
    if (!first && !last && l.fullName) {
      const parts = l.fullName.trim().split(/\s+/)
      first = parts[0] || ''
      last = parts.slice(1).join(' ')
    }
    return { first, last }
  }

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Readers</h1>
          <p className="adm-page-sub">All registered readers</p>
        </div>
      </div>

      <div className="adm-scorecards">
        <Scorecard label="Total Readers" value={total.toLocaleString()} />
        <Scorecard label="Last 7 Days" value={last7.toLocaleString()} />
        <Scorecard label="Last 30 Days" value={last30.toLocaleString()} />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Readers by Language</p>
        <AdminBarChart data={langData} color="#c9a35e" showValues />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">Readers by Profession (top 10)</p>
        <AdminBarChart data={profData} color="#4a6b5a" layout="vertical" showValues />
      </div>

      <p className="adm-section-title">By Country</p>
      <div className="adm-table-wrap" style={{ marginBottom: 32 }}>
        <table className="adm-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Readers</th>
            </tr>
          </thead>
          <tbody>
            {countryRows.map((row) => (
              <tr key={row.country}>
                <td>{row.country}</td>
                <td>{row.count}</td>
              </tr>
            ))}
            {countryRows.length === 0 && (
              <tr>
                <td colSpan={2} className="muted">No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <p className="adm-section-title">All Readers</p>
      <div className="adm-leads-table-wrap">
        <table className="adm-table">
          <thead>
            <tr>
              <th>Registered</th>
              <th>First Name</th>
              <th>Family Name</th>
              <th>Email</th>
              <th>Profession</th>
              <th>Lang</th>
              <th>Country</th>
              <th>First Visit</th>
              <th>Last Visit</th>
              <th>Returns</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead, i) => {
              const { first, last } = splitName(lead)
              const stats = visitStats.get(lead.readerId)
              const returns = stats
                ? Math.max((stats.sessions.size || stats.count) - 1, 0)
                : 0
              return (
                <tr key={i}>
                  <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                    {lead.timestamp.slice(0, 16).replace('T', ' ')}
                  </td>
                  <td>{first || '—'}</td>
                  <td>{last || '—'}</td>
                  <td>{lead.email}</td>
                  <td>{lead.profession || '—'}</td>
                  <td>{lead.lang || '—'}</td>
                  <td>{lead.country || '—'}</td>
                  <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                    {stats ? fmtTs(stats.first) : '—'}
                  </td>
                  <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                    {stats ? fmtTs(stats.last) : '—'}
                  </td>
                  <td>{stats ? returns : '—'}</td>
                  <td>{stats ? deviceType(stats.lastUA) : '—'}</td>
                </tr>
              )
            })}
            {sortedLeads.length === 0 && (
              <tr>
                <td colSpan={11} className="muted">No readers yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
