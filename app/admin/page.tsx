import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminLineChart, { LineDataPoint } from '@/components/admin/AdminLineChart'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'
import AdminPieChart, { PieDataPoint } from '@/components/admin/AdminPieChart'

export const dynamic = 'force-dynamic'

function formatPct(n: number) {
  return `${n.toFixed(1)}%`
}

function formatDuration(secs: number) {
  if (secs >= 60) return `${Math.round(secs / 60)}m ${Math.round(secs % 60)}s`
  return `${Math.round(secs)}s`
}

export default async function AdminOverviewPage() {
  let leads, events, visits, errors
  try {
    ;({ leads, events, visits, errors } = await fetchAllSheets())
  } catch (err) {
    return (
      <div style={{ padding: 40, color: 'var(--cream)', fontFamily: 'DM Sans, sans-serif' }}>
        <h2>Dashboard error</h2>
        <pre style={{ color: '#f87171', fontSize: 13 }}>{String(err)}</pre>
        <p style={{ opacity: 0.6, marginTop: 12 }}>Check that GOOGLE_SHEETS_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY are set correctly in Vercel.</p>
      </div>
    )
  }

  const errorEntries = Object.entries(errors ?? {})

  // --- Unique visitors (distinct readerId in page_visit events) ---
  const pageVisits = visits.filter((v) => v.event === 'page_visit')
  const uniqueVisitorSet = new Set(pageVisits.map((v) => v.readerId).filter(Boolean))
  const uniqueVisitors = uniqueVisitorSet.size

  // --- Total leads ---
  const totalLeads = leads.length

  // --- Conversion rate ---
  const convRate = uniqueVisitors > 0 ? (totalLeads / uniqueVisitors) * 100 : 0

  // --- New visitor % ---
  const newVisitorCount = pageVisits.filter(
    (v) => v.isReturning === 'false' || v.isReturning === ''
  ).length
  const newVisitorPct = pageVisits.length > 0 ? (newVisitorCount / pageVisits.length) * 100 : 0

  // --- Avg chapter dwell time ---
  const chapterLeaves = visits.filter(
    (v) =>
      v.event === 'page_leave' &&
      (v.page.includes('/chapitre') || v.page.includes('/introduction'))
  )
  const dwellTotal = chapterLeaves.reduce((sum, v) => {
    const n = parseFloat(v.duration_seconds)
    return isNaN(n) ? sum : sum + n
  }, 0)
  const avgDwell = chapterLeaves.length > 0 ? dwellTotal / chapterLeaves.length : 0

  // --- Line chart: leads + visits per day (last 30 days) ---
  const now = new Date()
  const days: LineDataPoint[] = []
  for (let i = 29; i >= 0; i--) {
    const d = new Date(now)
    d.setDate(now.getDate() - i)
    const dayStr = d.toISOString().slice(0, 10)
    days.push({ date: dayStr, leads: 0, visits: 0 })
  }
  const dayMap = new Map(days.map((d) => [d.date, d]))

  leads.forEach((l) => {
    const day = l.timestamp.slice(0, 10)
    const entry = dayMap.get(day)
    if (entry) entry.leads++
  })
  pageVisits.forEach((v) => {
    const day = v.timestamp.slice(0, 10)
    const entry = dayMap.get(day)
    if (entry) entry.visits++
  })

  // --- Bar chart: visitors by country (top 10) ---
  const countryCount = new Map<string, number>()
  pageVisits.forEach((v) => {
    const c = v.country || 'Unknown'
    countryCount.set(c, (countryCount.get(c) ?? 0) + 1)
  })
  const countryData: BarDataPoint[] = [...countryCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }))

  // --- Pie chart: visitors by language ---
  const langCount = new Map<string, number>()
  pageVisits.forEach((v) => {
    const l = v.lang || 'Unknown'
    langCount.set(l, (langCount.get(l) ?? 0) + 1)
  })
  const langData: PieDataPoint[] = [...langCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  return (
    <main className="adm-page">
      <h1 className="adm-page-title">Overview</h1>
      <p className="adm-page-sub">Last updated: {new Date().toLocaleString('en-GB')}</p>

      {errorEntries.length > 0 && (
        <div style={{ background: '#7f1d1d', borderRadius: 8, padding: '12px 16px', marginBottom: 24 }}>
          <p style={{ color: '#fca5a5', fontWeight: 600, marginBottom: 6 }}>⚠ Sheet loading errors</p>
          {errorEntries.map(([sheet, msg]) => (
            <pre key={sheet} style={{ color: '#fca5a5', fontSize: 12, margin: '4px 0' }}>{sheet}: {msg}</pre>
          ))}
        </div>
      )}

      <div style={{ background: '#2a2a22', borderRadius: 8, padding: '10px 16px', marginBottom: 24, fontSize: 12, color: 'rgba(245,240,232,.6)', fontFamily: 'monospace' }}>
        DEBUG — rows read: Leads={leads.length} · Events={events.length} · Visits={visits.length} · SHEETS_ID={process.env.GOOGLE_SHEETS_ID?.slice(0,12)}…
      </div>

      <div className="adm-scorecards">
        <Scorecard label="Unique Visitors" value={uniqueVisitors.toLocaleString()} />
        <Scorecard label="Total Leads" value={totalLeads.toLocaleString()} />
        <Scorecard label="Conversion Rate" value={formatPct(convRate)} subtitle="leads / visitors" />
        <Scorecard label="New Visitors" value={formatPct(newVisitorPct)} subtitle="of page visits" />
        <Scorecard
          label="Avg Chapter Dwell"
          value={formatDuration(avgDwell)}
          subtitle="chapter + intro"
        />
      </div>

      <p className="adm-section-title">Leads &amp; Visits — Last 30 Days</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Daily trend</p>
        <AdminLineChart data={days} />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Visitors by Country (top 10)</p>
          <AdminBarChart data={countryData} color="#4a6b5a" />
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">Visitors by Language</p>
          <AdminPieChart data={langData} />
        </div>
      </div>
    </main>
  )
}
