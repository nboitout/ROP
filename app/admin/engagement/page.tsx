import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import AdminBarChart, { BarDataPoint } from '@/components/admin/AdminBarChart'
import { fmtDuration } from '@/lib/adminFormat'

export const dynamic = 'force-dynamic'

function avgDuration(rows: { duration_seconds: string }[]): number {
  const valid = rows
    .map((r) => parseFloat(r.duration_seconds))
    .filter((n) => !isNaN(n) && n > 0)
  if (valid.length === 0) return 0
  return valid.reduce((a, b) => a + b, 0) / valid.length
}

function formatDuration(secs: number): string {
  return fmtDuration(secs)
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

// Group CTA clicks into the meaningful visitor actions. Pre-launch there is
// no purchase step, so the print/online plan "notify me" buttons fold into
// "Notify me on release"; both free-chapter buttons (hero + pricing plan)
// fold into "Read the 3 chapters".
const CTA_BUCKET: Record<string, string> = {
  hero_chapters: 'Read the 3 chapters',
  pricing_chapters_bundle: 'Read the 3 chapters',
  hero_summary: 'See chapters list',
  chapters_buy: 'Order the full book',
  pricing_notify: 'Notify me on release',
  // Outbound links in the "about Guy" section → the R.O.P. Institute site.
  author_institut: 'Institut R.O.P. — site',
  author_formations: 'Institut R.O.P. — formations',
}

export default async function EngagementPage() {
  const { events, visits } = await fetchAllSheets()

  const pageLeaves = visits.filter((v) => v.event === 'page_leave')

  // Avg time per specific page
  const avgChapter2 = avgDuration(pageLeaves.filter((v) => {
    const p = v.page.replace(/^https?:\/\/[^/]+/, '')
    return p.includes('/chapitre-2') || p.includes('/lecture/traitement-rop')
  }))
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

  // Bar: CTA clicks — group by cta field in data JSON. Seed the two outbound
  // "about Guy" links at zero so they're always visible, even before any click.
  const ctaCount = new Map<string, number>([
    ['Institut R.O.P. — site', 0],
    ['Institut R.O.P. — formations', 0],
  ])
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
      // Legacy split notify names → one notify CTA, then into its action bucket.
      if (ctaName === 'pricing_notify_digital' || ctaName === 'pricing_notify_print') ctaName = 'pricing_notify'
      const bucket = CTA_BUCKET[ctaName] ?? ctaName
      ctaCount.set(bucket, (ctaCount.get(bucket) ?? 0) + 1)
    })
  const ctaData: BarDataPoint[] = [...ctaCount.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, value]) => ({ name, value }))

  // --- Homepage Intent Rate ---
  // Qualified visitors = stayed >10s on the homepage OR clicked any button
  // (a click signals intent regardless of dwell). Of those, the share who
  // clicked Read (free chapters) or Buy. Pure bounces (<10s and no click at
  // all) are excluded from the denominator.
  const READ_BUY = new Set(['hero_chapters', 'pricing_chapters_bundle', 'chapters_buy'])
  const dwell10 = new Set<string>()
  pageLeaves.forEach((v) => {
    if (!v.readerId || pageLabel(v.page) !== 'Homepage') return
    const n = parseFloat(v.duration_seconds)
    if (!isNaN(n) && n > 10) dwell10.add(v.readerId)
  })
  const anyClick = new Set<string>()
  const readBuyClick = new Set<string>()
  events.filter((e) => e.event === 'cta_click').forEach((e) => {
    if (!e.readerId) return
    let cta = e.data
    try { cta = (JSON.parse(e.data) as Record<string, string>).cta ?? e.data } catch { /* plain string */ }
    anyClick.add(e.readerId)
    if (READ_BUY.has(cta)) readBuyClick.add(e.readerId)
  })
  const qualifiedVisitors = new Set<string>([...dwell10, ...anyClick])
  // readBuyClick ⊆ anyClick ⊆ qualifiedVisitors, so its size is the numerator.
  const intentRate = qualifiedVisitors.size > 0 ? (readBuyClick.size / qualifiedVisitors.size) * 100 : 0

  // Language switches: deliberate FR↔EN↔… toggles, grouped as "from → to".
  // (A high count of e.g. fr → en means the audience is landing on the wrong
  // default language and correcting it by hand.)
  const switchCount = new Map<string, number>()
  let totalSwitches = 0
  events
    .filter((e) => e.event === 'language_switch')
    .forEach((e) => {
      let from = ''
      let to = ''
      try {
        const d = JSON.parse(e.data) as Record<string, string>
        from = d.from
        to = d.to
      } catch {
        /* ignore malformed */
      }
      if (!from || !to) return
      totalSwitches += 1
      const key = `${from} → ${to}`
      switchCount.set(key, (switchCount.get(key) ?? 0) + 1)
    })
  const switchData: BarDataPoint[] = [...switchCount.entries()]
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
          label="Avg Time — Chapitre 2"
          value={formatDuration(avgChapter2)}
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
        <Scorecard
          label="Homepage Intent Rate"
          value={`${intentRate.toFixed(1)}%`}
          subtitle=">10s or clicked → read/buy"
        />
        <Scorecard
          label="Language Switches"
          value={totalSwitches.toLocaleString()}
          subtitle="deliberate from → to toggles"
        />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Return frequency — visitors by number of return visits</p>
        <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, maxWidth: 720, lineHeight: 1.6 }}>
          Groups visitors by how many <strong>separate days</strong> they came back. “0 returns” = seen on
          one day only; “2 returns” = seen on 3 different dates. Same-day reloads don’t count. Identity is the
          browser’s anonymous <code>reader_id</code> cookie, so clearing cookies or switching device shows up
          as a new visitor.
        </p>
        <AdminBarChart data={returnBuckets} color="#4a6b5a" showValues />
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Avg Dwell Time per Page (seconds)</p>
          <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, lineHeight: 1.6 }}>
            Average <strong>active</strong> seconds spent on each page before leaving (time with the tab
            hidden isn’t counted). The homepage and the sign-up gate are reported separately. Chapitre 2
            now combines classic and synchronized reading routes in the headline scorecard above.
          </p>
          <AdminBarChart data={dwellData} color="#4a6b5a" layout="vertical" showValues />
        </div>
        <div className="adm-chart-card">
          <p className="adm-chart-title">CTA Clicks by Type</p>
          <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, lineHeight: 1.6 }}>
            Homepage button clicks grouped by the visitor’s action: <strong>Read the 3 chapters</strong>
            (both the hero and pricing-plan buttons), <strong>Order the full book</strong>,
            <strong>Notify me on release</strong>, and <strong>See chapters list</strong>. Counts clicks,
            not people. Pre-launch the editions aren’t purchasable yet, so the print/online plan buttons
            fall under “Notify me on release” — a separate buy action will be added once the book is on sale.
            The two outbound links in the “about Guy” section are also tracked here as
            <strong>Institut R.O.P. — site</strong> and <strong>Institut R.O.P. — formations</strong>.
          </p>
          <AdminBarChart data={ctaData} color="#c9a35e" layout="vertical" showValues />
        </div>
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">UTM Sources</p>
        <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, maxWidth: 640, lineHeight: 1.6 }}>
          This chart only counts visitors who arrive through a link <strong>tagged</strong> with UTM
          parameters (e.g. <code>?utm_source=facebook&amp;utm_medium=social</code>). An ordinary,
          untagged link — even an organic Facebook or Instagram post — will <strong>not</strong> appear
          here; it’s recorded as direct/referral instead. To measure a channel, add UTM tags to the link
          you share there. The chart stays empty until tagged campaigns are used.
        </p>
        <AdminBarChart data={utmData} color="#4a6b5a" showValues />
      </div>

      <div className="adm-chart-card" style={{ marginBottom: 32 }}>
        <p className="adm-chart-title">Language Switches (from → to)</p>
        <p className="adm-page-sub" style={{ marginTop: -10, marginBottom: 18, maxWidth: 680, lineHeight: 1.6 }}>
          Counts <strong>deliberate</strong> language toggles via the FR/EN/DE/ES/IT selector, as
          <code>from → to</code>. The site opens in French by default, so a lot of e.g. <code>fr → en</code>
          would signal that part of the audience lands on the wrong language and corrects it — a cue to
          auto-detect the browser locale. Counts switches, not people. Empty until visitors start toggling.
        </p>
        <AdminBarChart data={switchData} color="#c9a35e" layout="vertical" showValues />
      </div>
    </main>
  )
}
