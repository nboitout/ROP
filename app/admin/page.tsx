import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminStackedCountryChart, { StackedTimePoint } from '@/components/admin/AdminStackedCountryChart'
import AdminPieChart, { PieDataPoint } from '@/components/admin/AdminPieChart'
import DaySelect from '@/components/admin/DaySelect'

export const dynamic = 'force-dynamic'

const START_DATE = '2026-05-25'

function formatPct(n: number) {
  return `${n.toFixed(1)}%`
}

function formatDuration(secs: number) {
  return `${Math.round(secs)}s`
}

// Turn an ISO 3166 country code (FR, MT, …) into a full name (France, Malta).
// Falls back to the raw value for non-codes like 'Unknown' / 'Other'.
const regionNames = new Intl.DisplayNames(['en'], { type: 'region' })
function countryLabel(code: string): string {
  if (!/^[A-Za-z]{2}$/.test(code)) return code
  try {
    return regionNames.of(code.toUpperCase()) ?? code
  } catch {
    return code
  }
}

export default async function AdminOverviewPage({
  searchParams,
}: {
  searchParams: Promise<{ day?: string }>
}) {
  const { day } = await searchParams
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

  // --- Total readers (distinct emails — each person may submit multiple forms) ---
  const totalLeads = new Set(filteredLeads.map((l) => l.email.toLowerCase()).filter(Boolean)).size

  // --- Conversion rate ---
  const convRate = uniqueVisitors > 0 ? (totalLeads / uniqueVisitors) * 100 : 0

  // --- Return visitor rate: % of distinct visitors seen on more than one distinct date ---
  const visitorDates = new Map<string, Set<string>>()
  pageVisits.forEach((v) => {
    if (!v.readerId) return
    if (!visitorDates.has(v.readerId)) visitorDates.set(v.readerId, new Set())
    visitorDates.get(v.readerId)!.add(v.timestamp.slice(0, 10))
  })
  const totalVisitors = visitorDates.size
  const returningVisitors = [...visitorDates.values()].filter((dates) => dates.size > 1).length
  const returnRate = totalVisitors > 0 ? (returningVisitors / totalVisitors) * 100 : 0

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

  // --- Stacked bar: visits per day, stacked by country (top 10 + Other) ---
  const countryTotals = new Map<string, number>()
  pageVisits.forEach((v) => {
    const c = countryLabel(v.country || 'Unknown')
    countryTotals.set(c, (countryTotals.get(c) ?? 0) + 1)
  })
  const topCountries = [...countryTotals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([c]) => c)
  const topCountrySet = new Set(topCountries)
  const stackedCountries = [...topCountries, 'Other']

  const now = new Date()
  const startD = new Date(START_DATE + 'T00:00:00Z')
  const stackedData: StackedTimePoint[] = []
  for (let d = new Date(startD); d <= now; d.setUTCDate(d.getUTCDate() + 1)) {
    const entry: StackedTimePoint = { date: d.toISOString().slice(0, 10) }
    stackedCountries.forEach((c) => { entry[c] = 0 })
    stackedData.push(entry)
  }
  const dateMap = new Map(stackedData.map((d) => [d.date as string, d]))
  pageVisits.forEach((v) => {
    const entry = dateMap.get(v.timestamp.slice(0, 10))
    if (!entry) return
    const c = countryLabel(v.country || 'Unknown')
    const key = topCountrySet.has(c) ? c : 'Other'
    entry[key] = (entry[key] as number) + 1
  })

  // --- Pie chart: visitors by language ---
  const langCount = new Map<string, number>()
  pageVisits.forEach((v) => {
    const l = v.lang || 'Unknown'
    langCount.set(l, (langCount.get(l) ?? 0) + 1)
  })
  const langData: PieDataPoint[] = [...langCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  // --- All-time visits by country (every date; exclusions + bot filter already
  // applied in fetchAllSheets, so this omits the owner's own visits and bots) ---
  const allTimeCountry = new Map<string, number>()
  visits
    .filter((v) => v.event === 'page_visit')
    .forEach((v) => {
      const c = countryLabel(v.country || 'Unknown')
      allTimeCountry.set(c, (allTimeCountry.get(c) ?? 0) + 1)
    })
  const countryRows = [...allTimeCountry.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([country, count]) => ({ country, count }))
  const allTimeVisitsTotal = countryRows.reduce((sum, r) => sum + r.count, 0)

  // --- Intraday: visits per hour for a selected UTC day, stacked by country ---
  const todayUTC = new Date().toISOString().slice(0, 10)
  const selectedDay = day && /^\d{4}-\d{2}-\d{2}$/.test(day) ? day : todayUTC
  // Days offered in the picker: today + every day that has visit data, newest first
  const dayOptions = [...new Set([todayUTC, ...pageVisits.map((v) => v.timestamp.slice(0, 10))])]
    .sort((a, b) => (a < b ? 1 : -1))
  const dayVisits = pageVisits.filter((v) => v.timestamp.slice(0, 10) === selectedDay)
  const dayCountryTotals = new Map<string, number>()
  dayVisits.forEach((v) => {
    const c = countryLabel(v.country || 'Unknown')
    dayCountryTotals.set(c, (dayCountryTotals.get(c) ?? 0) + 1)
  })
  const dayTopCountries = [...dayCountryTotals.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([c]) => c)
  const dayTopSet = new Set(dayTopCountries)
  const intradayCountries = [...dayTopCountries, 'Other']
  const intradayData: StackedTimePoint[] = []
  for (let h = 0; h < 24; h++) {
    const entry: StackedTimePoint = { date: `${String(h).padStart(2, '0')}:00` }
    intradayCountries.forEach((c) => { entry[c] = 0 })
    intradayData.push(entry)
  }
  dayVisits.forEach((v) => {
    const hour = parseInt(v.timestamp.slice(11, 13), 10)
    const entry = intradayData[hour]
    if (!entry) return
    const c = countryLabel(v.country || 'Unknown')
    const key = dayTopSet.has(c) ? c : 'Other'
    entry[key] = (entry[key] as number) + 1
  })

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
        <Scorecard label="Return Visitor Rate" value={formatPct(returnRate)} subtitle="of distinct visitors" />
        <Scorecard
          label="Avg Chapter Dwell"
          value={formatDuration(avgDwell)}
          subtitle="chapter + intro"
        />
      </div>

      <p className="adm-section-title">Readers &amp; Visits — Since {START_DATE}</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Daily visits by country (top 10)</p>
        <AdminStackedCountryChart data={stackedData} countries={stackedCountries} />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 20 }}>
          <p className="adm-chart-title" style={{ marginBottom: 0 }}>
            By hour ({selectedDay}{selectedDay === todayUTC ? ', today' : ''}, UTC) — {dayVisits.length.toLocaleString()} visits
          </p>
          <DaySelect days={dayOptions} selected={selectedDay} today={todayUTC} />
        </div>
        <AdminStackedCountryChart
          data={intradayData}
          countries={intradayCountries}
          tickFormatter={(v) => v}
          interval={2}
        />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">All-time visits by country</p>
          <p className="adm-page-sub" style={{ marginTop: -12, marginBottom: 16 }}>
            All dates · {allTimeVisitsTotal.toLocaleString()} visits · excludes owner &amp; bots
          </p>
          <div className="adm-table-wrap">
            <table className="adm-table">
              <thead>
                <tr>
                  <th>Country</th>
                  <th>Visits</th>
                  <th>Share</th>
                </tr>
              </thead>
              <tbody>
                {countryRows.map((row) => (
                  <tr key={row.country}>
                    <td>{row.country}</td>
                    <td>{row.count.toLocaleString()}</td>
                    <td className="muted">
                      {allTimeVisitsTotal > 0 ? formatPct((row.count / allTimeVisitsTotal) * 100) : '—'}
                    </td>
                  </tr>
                ))}
                {countryRows.length > 0 && (
                  <tr>
                    <td style={{ fontWeight: 600, borderTop: '1px solid var(--adm-i08)' }}>Total</td>
                    <td style={{ fontWeight: 600, borderTop: '1px solid var(--adm-i08)' }}>{allTimeVisitsTotal.toLocaleString()}</td>
                    <td className="muted" style={{ borderTop: '1px solid var(--adm-i08)' }}>100%</td>
                  </tr>
                )}
                {countryRows.length === 0 && (
                  <tr>
                    <td colSpan={3} className="muted">No data</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">Visitors by Language</p>
          <AdminPieChart data={langData} />
        </div>
      </div>
    </main>
  )
}
