import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'

export const dynamic = 'force-dynamic'

function daysAgo(days: number): string {
  const d = new Date()
  d.setDate(d.getDate() - days)
  return d.toISOString().slice(0, 10)
}

export default async function ReadersPage() {
  const { leads } = await fetchAllSheets()

  const total = leads.length
  const cutoff7 = daysAgo(7)
  const cutoff30 = daysAgo(30)
  const last7 = leads.filter((l) => l.timestamp.slice(0, 10) >= cutoff7).length
  const last30 = leads.filter((l) => l.timestamp.slice(0, 10) >= cutoff30).length

  // Bar: leads by source
  const sourceCount = new Map<string, number>()
  leads.forEach((l) => {
    const s = l.source || 'Unknown'
    sourceCount.set(s, (sourceCount.get(s) ?? 0) + 1)
  })
  const sourceData: BarDataPoint[] = [...sourceCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  // Bar: leads by profession (top 10)
  const profCount = new Map<string, number>()
  leads.forEach((l) => {
    const p = l.profession || 'Unknown'
    profCount.set(p, (profCount.get(p) ?? 0) + 1)
  })
  const profData: BarDataPoint[] = [...profCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([name, value]) => ({ name, value }))

  // Bar: leads by language
  const langCount = new Map<string, number>()
  leads.forEach((l) => {
    const lg = l.lang || 'Unknown'
    langCount.set(lg, (langCount.get(lg) ?? 0) + 1)
  })
  const langData: BarDataPoint[] = [...langCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  // Table: by country
  const countryCount = new Map<string, number>()
  leads.forEach((l) => {
    const c = l.country || 'Unknown'
    countryCount.set(c, (countryCount.get(c) ?? 0) + 1)
  })
  const countryRows = [...countryCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([country, count]) => ({ country, count }))

  // Sorted leads for data table
  const sortedLeads = [...leads].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  )

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

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Readers by Source</p>
          <AdminBarChart data={sourceData} color="#4a6b5a" />
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">Readers by Language</p>
          <AdminBarChart data={langData} color="#c9a35e" />
        </div>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">Readers by Profession (top 10)</p>
        <AdminBarChart data={profData} color="#4a6b5a" layout="vertical" />
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
              <th>Timestamp</th>
              <th>Name</th>
              <th>Email</th>
              <th>Profession</th>
              <th>Source</th>
              <th>Lang</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead, i) => (
              <tr key={i}>
                <td className="muted" style={{ whiteSpace: 'nowrap' }}>
                  {lead.timestamp.slice(0, 16).replace('T', ' ')}
                </td>
                <td>{lead.fullName || `${lead.firstName} ${lead.lastName}`.trim() || '—'}</td>
                <td>{lead.email}</td>
                <td>{lead.profession || '—'}</td>
                <td>{lead.source || '—'}</td>
                <td>{lead.lang || '—'}</td>
                <td>{lead.country || '—'}</td>
              </tr>
            ))}
            {sortedLeads.length === 0 && (
              <tr>
                <td colSpan={7} className="muted">No readers yet</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  )
}
