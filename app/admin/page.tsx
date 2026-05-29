import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminClusteredBarChart, { ClusteredDataPoint } from '@/components/admin/AdminClusteredBarChart'
import AdminPieChart, { PieDataPoint } from '@/components/admin/AdminPieChart'

export const dynamic = 'force-dynamic'

const START_DATE = '2026-05-25'

function formatPct(n: number) {
  return `${n.toFixed(1)}%`
}

function formatDuration(secs: number) {
  if (secs >= 60) return `${Math.round(secs / 60)}m ${Math.round(secs % 60)}s`
  return `${Math.round(secs)}s`
}

export default async function AdminOverviewPage() {
  let leads, visits, errors
  try {
    ;({ leads, visits, errors } = await fetchAllSheets())
  } catch (err) {
    return (
      <div style={{ padding: 40, color: 'var(--adm-cream)', fontFamily: 'DM Sans, sans-serif' }}>
        <p className="adm-section-title">Dashboard error</p>
        <pre style={{ color: 'rgba(255,200,180,.9)', fontSize: 13, marginTop: 12 }}>{String(err)}</pre>
        <p style={{ color: 'rgba(245,240,232,.5)', marginTop: 12, fontSize: '.82rem', lineHeight: 1.6 }}>Check that GOOGLE_SHEETS_ID, GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY are set correctly in Vercel.</p>
      </div>
    )
  }

  const errorEntries = Object.entries(errors ?? {})

  // --- Filter all data from launch date onwards ---
  const filteredLeads = leads.filter((l) => l.timestamp.slice(0, 10) >= START_DATE)
  const filteredVisits = visits.filter((v) => v.timestamp.slice(0, 10) >= START_DATE)

  // --- Unique visitors (distinct readerId in page_visit events) ---
  const pageVisits = filteredVisits.filter((v) => v.event === 'page_visit')
  const uniqueVisitorSet = new Set(pageVisits.map((v) => v.readerId).filter(Boolean))
  const uniqueVisitors = uniqueVisitorSet.size

  // --- Total readers (distinct readerIds who registered) ---
  const totalLeads = new Set(filteredLeads.map((l) => l.readerId).filter(Boolean)).size

  // --- Conversion rate ---
  const convRate = uniqueVisitors > 0 ? (totalLeads / uniqueVisitors) * 100 : 0

  // --- Return visitor rate ---
  const returningCount = pageVisits.filter(
    (v) => v.isReturning === 'TRUE' || v.isReturning === 'true'
  ).length
  const returnRate = pageVisits.length > 0 ? (returningCount / pageVisits.length) * 100 : 0

  // --- Avg chapter dwell time ---
  const chapterLeaves = filteredVisits.filter(
    (v) =>
      v.event === 'page_leave' &&
      (v.page.includes('/chapitre') || v.page.includes('/introduction'))
  )
  const dwellTotal = chapterLeaves.reduce((sum, v) => {
    const n = parseFloat(v.duration_seconds)
    return isNaN(n) ? sum : sum + n
  }, 0)
  const avgDwell = chapterLeaves.length > 0 ? dwellTotal / chapterLeaves.length : 0

  // --- Clustered bar: visits + readers by country (top 10 by total) ---
  const countryVisits = new Map<string, number>()
  const countryReaders = new Map<string, number>()

  pageVisits.forEach((v) => {
    const c = v.country || 'Unknown'
    countryVisits.set(c, (countryVisits.get(c) ?? 0) + 1)
  })
  filteredLeads.forEach((l) => {
    const c = l.country || 'Unknown'
    countryReaders.set(c, (countryReaders.get(c) ?? 0) + 1)
  })

  const allCountries = new Set([...countryVisits.keys(), ...countryReaders.keys()])
  const countryData: ClusteredDataPoint[] = [...allCountries]
    .map((country) => ({
      country,
      visits: countryVisits.get(country) ?? 0,
      readers: countryReaders.get(country) ?? 0,
    }))
    .sort((a, b) => (b.visits + b.readers) - (a.visits + a.readers))
    .slice(0, 10)

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
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Overview</h1>
          <p className="adm-page-sub">Updated {new Date().toLocaleString('en-GB')}</p>
        </div>
      </div>

      {errorEntries.length > 0 && (
        <div style={{ background: 'rgba(255,100,100,.08)', border: '1px solid rgba(255,120,120,.24)', borderLeft: '3px solid rgba(255,120,120,.6)', borderRadius: 3, padding: '12px 16px', marginBottom: 24 }}>
          <p style={{ color: 'rgba(245,240,232,.9)', fontWeight: 600, marginBottom: 6, fontSize: '.8rem', letterSpacing: '.06em', textTransform: 'uppercase' }}>Sheet loading errors</p>
          {errorEntries.map(([sheet, msg]) => (
            <pre key={sheet} style={{ color: 'rgba(255,200,180,.9)', fontSize: 12, margin: '4px 0' }}>{sheet}: {msg}</pre>
          ))}
        </div>
      )}

<div className="adm-scorecards">
        <Scorecard label="Unique Visitors" value={uniqueVisitors.toLocaleString()} />
        <Scorecard label="Total Readers" value={totalLeads.toLocaleString()} />
        <Scorecard label="Conversion Rate" value={formatPct(convRate)} subtitle="readers / visitors" />
        <Scorecard label="Return Visitor Rate" value={formatPct(returnRate)} subtitle="of page visits" />
        <Scorecard
          label="Avg Chapter Dwell"
          value={formatDuration(avgDwell)}
          subtitle="chapter + intro"
        />
      </div>

      <p className="adm-section-title">Readers &amp; Visits — Since {START_DATE}</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Visits &amp; Readers by Country (top 10)</p>
        <AdminClusteredBarChart data={countryData} />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Visitors by Language</p>
          <AdminPieChart data={langData} />
        </div>
      </div>
    </main>
  )
}
