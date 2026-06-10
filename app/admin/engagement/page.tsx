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
  return `${Math.round(secs)}s`
}

// Friendly, admin-readable label for a tracked page path. The homepage and the
// sign-up gate (/?gate=free) are reported separately. New chapters at
// /chapitre-N are handled automatically; slug-based chapter routes get an
// explicit entry below.
const SLUG_LABELS: Record<string, string> = {
  '/': 'Homepage',
  '/?gate=free': 'Gate (inscription)',
  '/introduction': 'Introduction',
  '/chapitres-gratuits': 'Chapitres gratuits',
  '/lecture/traitement-rop': 'Chapitre 2',
}

function pageLabel(rawPath: string): string {
  const p = rawPath.replace(/^https?:\/\/[^/]+/, '') || '/'
  if (SLUG_LABELS[p]) return SLUG_LABELS[p]
  const m = p.match(/^\/chapitre-(\d+)/)
  if (m) return `Chapitre ${m[1]}`
  return p
}

// Reading order so the chart stays legible once every chapter exists:
// Homepage, Gate, free-chapters, Introduction, then chapters in sequence.
function pageOrder(label: string): number {
  if (label === 'Homepage') return 0
  if (label === 'Gate (inscription)') return 1
  if (label === 'Chapitres gratuits') return 2
  if (label === 'Introduction') return 3
  const m = label.match(/^Chapitre (\d+)/)
  if (m) return 100 + parseInt(m[1], 10)
  return 999
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

  // Return visitor rate: % of distinct visitors seen on more than one distinct date
  const pageVisits = visits.filter((v) => v.event === 'page_visit')
  const visitorDates = new Map<string, Set<string>>()
  pageVisits.forEach((v) => {
    if (!v.readerId) return
    if (!visitorDates.has(v.readerId)) visitorDates.set(v.readerId, new Set())
    visitorDates.get(v.readerId)!.add(v.timestamp.slice(0, 10))
  })
  const totalVisitors = visitorDates.size
  const returningVisitors = [...visitorDates.values()].filter((dates) => dates.size > 1).length
  const returnRate = totalVisitors > 0 ? (returningVisitors / totalVisitors) * 100 : 0

  // Bar: avg dwell time per page (grouped by friendly label; gate vs homepage
  // are reported separately, chapters in reading order)
  const pageMap = new Map<string, number[]>()
  pageLeaves.forEach((v) => {
    const n = parseFloat(v.duration_seconds)
    if (isNaN(n) || n <= 0) return
    const label = pageLabel(v.page)
    const arr = pageMap.get(label)
    if (arr) arr.push(n)
    else pageMap.set(label, [n])
  })
  const dwellData: BarDataPoint[] = [...pageMap.entries()]
    .map(([name, arr]) => ({
      name,
      value: Math.round(arr.reduce((a, b) => a + b, 0) / arr.length),
    }))
    .sort((a, b) => pageOrder(a.name) - pageOrder(b.name))

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

  // Return frequency distribution: buckets 0, 1, 2, 3, 4+
  const returnBuckets: BarDataPoint[] = [
    { name: '0 returns', value: 0 },
    { name: '1 return',  value: 0 },
    { name: '2 returns', value: 0 },
    { name: '3 returns', value: 0 },
    { name: '4+',        value: 0 },
  ]
  visitorDates.forEach((dates) => {
    const returns = dates.size - 1
    if      (returns === 0) returnBuckets[0].value++
    else if (returns === 1) returnBuckets[1].value++
    else if (returns === 2) returnBuckets[2].value++
    else if (returns === 3) returnBuckets[3].value++
    else                    returnBuckets[4].value++
  })

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
          subtitle="of distinct visitors"
        />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Return frequency — visitors by number of return visits</p>
        <AdminBarChart data={returnBuckets} color="#4a6b5a" />
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
