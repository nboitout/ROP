import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'

export const dynamic = 'force-dynamic'

function avgDuration(rows: { duration_seconds: string }[]): number {
  const valid = rows
    .map((r) => parseFloat(r.duration_seconds))
    .filter((n) => !isNaN(n) && n > 0)
  if (valid.length === 0) return 0
  return valid.reduce((a, b) => a + b, 0) / valid.length
}

function formatDuration(secs: number): string {
  if (secs === 0) return '—'
  if (secs >= 60) return `${Math.round(secs / 60)}m ${Math.round(secs % 60)}s`
  return `${Math.round(secs)}s`
}

export default async function EngagementPage() {
  const { events, visits } = await fetchAllSheets()

  const pageLeaves = visits.filter((v) => v.event === 'page_leave')

  // Avg time per specific page
  const avgChapter5 = avgDuration(pageLeaves.filter((v) => v.page.includes('/chapitre-5')))
  const avgIntro = avgDuration(pageLeaves.filter((v) => v.page.includes('/introduction')))
  const avgHome = avgDuration(pageLeaves.filter((v) => {
    const p = v.page.replace(/^https?:\/\/[^/]+/, '')
    return p === '/' || p === ''
  }))

  // Return visitor rate
  const pageVisits = visits.filter((v) => v.event === 'page_visit')
  const returningCount = pageVisits.filter(
    (v) => v.isReturning === 'TRUE' || v.isReturning === 'true'
  ).length
  const returnRate = pageVisits.length > 0 ? (returningCount / pageVisits.length) * 100 : 0

  // Bar: avg dwell time per page
  const pageMap = new Map<string, number[]>()
  pageLeaves.forEach((v) => {
    const n = parseFloat(v.duration_seconds)
    if (isNaN(n) || n <= 0) return
    const rawPage = v.page.replace(/^https?:\/\/[^/]+/, '') || '/'
    const page = rawPage || '/'
    const arr = pageMap.get(page)
    if (arr) arr.push(n)
    else pageMap.set(page, [n])
  })
  const dwellData: BarDataPoint[] = [...pageMap.entries()]
    .map(([name, arr]) => ({
      name,
      value: Math.round(arr.reduce((a, b) => a + b, 0) / arr.length),
    }))
    .sort((a, b) => b.value - a.value)

  // Bar: CTA clicks — group by cta field in data JSON
  const ctaCount = new Map<string, number>()
  events
    .filter((e) => e.event === 'cta_click')
    .forEach((e) => {
      let ctaName = e.data
      try {
        const parsed = JSON.parse(e.data) as Record<string, string>
        ctaName = parsed.cta ?? parsed.label ?? e.data
      } catch {
        // data is plain string
      }
      ctaCount.set(ctaName, (ctaCount.get(ctaName) ?? 0) + 1)
    })
  const ctaData: BarDataPoint[] = [...ctaCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  // Bar: UTM sources
  const utmCount = new Map<string, number>()
  visits
    .filter((v) => v.utm_source && v.utm_source.trim() !== '')
    .forEach((v) => {
      const s = v.utm_source.trim()
      utmCount.set(s, (utmCount.get(s) ?? 0) + 1)
    })
  const utmData: BarDataPoint[] = [...utmCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Engagement</h1>
          <p className="adm-page-sub">Reader behaviour and content engagement metrics</p>
        </div>
      </div>

      <div className="adm-scorecards">
        <Scorecard
          label="Avg Time — Chapitre 5"
          value={formatDuration(avgChapter5)}
          subtitle="page_leave events"
        />
        <Scorecard
          label="Avg Time — Introduction"
          value={formatDuration(avgIntro)}
          subtitle="page_leave events"
        />
        <Scorecard
          label="Avg Time — Homepage"
          value={formatDuration(avgHome)}
          subtitle="page_leave events"
        />
        <Scorecard
          label="Return Visitor Rate"
          value={`${returnRate.toFixed(1)}%`}
          subtitle="isReturning=true"
        />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Avg Dwell Time per Page (seconds)</p>
          <AdminBarChart data={dwellData} color="#4a6b5a" layout="vertical" />
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">CTA Clicks by Type</p>
          <AdminBarChart data={ctaData} color="#c9a35e" layout="vertical" />
        </div>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">UTM Sources</p>
        <AdminBarChart data={utmData} color="#4a6b5a" />
      </div>
    </main>
  )
}
