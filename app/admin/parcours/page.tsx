import type { CSSProperties } from 'react'
import Link from 'next/link'
import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import ChapterSelect from '@/components/admin/ChapterSelect'
import ReaderJourneyRadar, { type ReaderJourneyRadarPoint } from '@/components/admin/ReaderJourneyRadar'
import { fmtDuration } from '@/lib/adminFormat'
import { FREE_CHAPTER_KEYS } from '@/lib/access'
import { perVisitSeconds, type LeaveLike } from '@/lib/dwell'
import { translations } from '@/app/i18n/translations'

export const dynamic = 'force-dynamic'

type AccessState = 'free' | 'paid' | 'draft' | 'planned'

interface ChapterRoute {
  slug: string
  href: string
  classicHref?: string
  syncHref?: string
  draft?: boolean
}

// Built chapters: `href` is the preferred reader entry, while classic/sync
// routes let the dashboard combine older and newer traffic for the same chapter.
const ROUTES: Record<string, ChapterRoute> = {
  '00': { slug: 'introduction', href: '/introduction', classicHref: '/introduction' },
  '01': { slug: 'chapter-1', href: '/lecture/chapitre-1', classicHref: '/chapitre-1', syncHref: '/lecture/chapitre-1' },
  '02': { slug: 'chapter-2', href: '/lecture/traitement-rop', classicHref: '/chapitre-2', syncHref: '/lecture/traitement-rop' },
  '03': { slug: 'chapter-3', href: '/lecture/chapitre-3', classicHref: '/chapitre-3', syncHref: '/lecture/chapitre-3' },
  '04': { slug: 'chapter-4', href: '/lecture/chapitre-4', syncHref: '/lecture/chapitre-4', draft: true },
  '05': { slug: 'chapter-5', href: '/lecture/chapitre-5', classicHref: '/chapitre-5', syncHref: '/lecture/chapitre-5' },
  '06': { slug: 'chapter-6', href: '/lecture/chapitre-6', classicHref: '/chapitre-6', syncHref: '/lecture/chapitre-6' },
  '07': { slug: 'chapter-7', href: '/lecture/chapitre-7', classicHref: '/chapitre-7', syncHref: '/lecture/chapitre-7' },
  '08': { slug: 'chapter-8', href: '/lecture/chapitre-8', classicHref: '/chapitre-8', syncHref: '/lecture/chapitre-8' },
  '09': { slug: 'chapter-9', href: '/lecture/chapitre-9', classicHref: '/chapitre-9', syncHref: '/lecture/chapitre-9' },
  '10': { slug: 'chapter-10', href: '/lecture/chapitre-10', classicHref: '/chapitre-10', syncHref: '/lecture/chapitre-10' },
  '11': { slug: 'chapter-11', href: '/lecture/chapitre-11', classicHref: '/chapitre-11', syncHref: '/lecture/chapitre-11' },
  '12': { slug: 'chapter-12', href: '/lecture/chapitre-12', classicHref: '/chapitre-12', syncHref: '/lecture/chapitre-12' },
  '13': { slug: 'chapter-13', href: '/lecture/chapitre-13', classicHref: '/chapitre-13', syncHref: '/lecture/chapitre-13' },
  '14': { slug: 'chapter-14', href: '/lecture/chapitre-14', classicHref: '/chapitre-14', syncHref: '/lecture/chapitre-14' },
  '15': { slug: 'chapter-15', href: '/lecture/chapitre-15', classicHref: '/chapitre-15', syncHref: '/lecture/chapitre-15' },
  '16': { slug: 'chapter-16', href: '/lecture/chapitre-16', classicHref: '/chapitre-16', syncHref: '/lecture/chapitre-16' },
  '17': { slug: 'chapter-17', href: '/lecture/chapitre-17', classicHref: '/chapitre-17', syncHref: '/lecture/chapitre-17' },
  '18': { slug: 'chapter-18', href: '/lecture/chapitre-18', classicHref: '/chapitre-18', syncHref: '/lecture/chapitre-18' },
  '19': { slug: 'chapter-19', href: '/lecture/chapitre-19', classicHref: '/chapitre-19', syncHref: '/lecture/chapitre-19' },
  '20': { slug: 'chapter-20', href: '/lecture/chapitre-20', classicHref: '/chapitre-20', syncHref: '/lecture/chapitre-20' },
  '21': { slug: 'chapter-21', href: '/lecture/chapitre-21', classicHref: '/chapitre-21', syncHref: '/lecture/chapitre-21' },
}

const PART_TITLES = new Map(translations.en.chapters.parts.map((part) => [part.id, part.title]))

const CHAPTERS = translations.en.chapters.cards.map((card) => {
  const route = ROUTES[card.num]
  const access: AccessState = !route
    ? 'planned'
    : route.draft
      ? 'draft'
      : FREE_CHAPTER_KEYS.has(route.slug)
        ? 'free'
        : 'paid'

  return {
    num: card.num,
    label: card.label,
    title: card.title,
    partId: card.part,
    partTitle: PART_TITLES.get(card.part) ?? card.part,
    access,
    slug: route?.slug ?? null,
    href: route?.href ?? null,
    classicHref: route?.classicHref ?? null,
    syncHref: route?.syncHref ?? null,
  }
})

interface Metrics {
  visited: number
  started: number
  mid: number
  finished: number
  avgTimeOnPage: number
  dwellVisits: number
  slidesOpened: number
  slidesAvgTime: number
  slideCloseCount: number
  resourcesOpened: number
  resourcesAvgTime: number
  resourceCloseCount: number
  syncSeconds: number
  syncVisits: number
  classicSeconds: number
  classicVisits: number
  visitorIds: Set<string>
  startedIds: Set<string>
  finishedIds: Set<string>
}

interface JourneyRow {
  num: string
  label: string
  title: string
  partTitle: string
  access: AccessState
  href: string | null
  metrics: Metrics
}

interface Props {
  searchParams: Promise<{ chapter?: string }>
}

const HEAT_RGB = {
  sage: '74,107,90',
  gold: '160,124,58',
  rust: '155,93,69',
  blue: '73,98,123',
} as const

function emptyMetrics(): Metrics {
  return {
    visited: 0,
    started: 0,
    mid: 0,
    finished: 0,
    avgTimeOnPage: 0,
    dwellVisits: 0,
    slidesOpened: 0,
    slidesAvgTime: 0,
    slideCloseCount: 0,
    resourcesOpened: 0,
    resourcesAvgTime: 0,
    resourceCloseCount: 0,
    syncSeconds: 0,
    syncVisits: 0,
    classicSeconds: 0,
    classicVisits: 0,
    visitorIds: new Set<string>(),
    startedIds: new Set<string>(),
    finishedIds: new Set<string>(),
  }
}

function stripPath(p: string) {
  return p.replace(/^https?:\/\/[^/]+/, '') || '/'
}

function parseDur(data: string): number | null {
  try {
    const n = Number((JSON.parse(data) as { duration_seconds?: unknown }).duration_seconds)
    return Number.isNaN(n) ? null : n
  } catch {
    return null
  }
}

function parseScrollPercent(data: string): number | null {
  try {
    const parsed = JSON.parse(data) as { percent?: unknown }
    const n = Number(parsed.percent)
    return Number.isNaN(n) ? null : n
  } catch {
    const match = data.match(/\d+/)
    return match ? Number(match[0]) : null
  }
}

function parseCta(data: string): string {
  try {
    const parsed = JSON.parse(data) as { cta?: unknown; label?: unknown }
    const value = parsed.cta ?? parsed.label
    return typeof value === 'string' ? value : data
  } catch {
    return data
  }
}

function avg(arr: number[]) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
}

function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0)
}

function pct(n: number, d: number) {
  return d > 0 ? (n / d) * 100 : 0
}

function fmtPct(value: number) {
  return value > 0 ? `${Math.round(value)}%` : '-'
}

function fmtCount(value: number) {
  return Math.round(value).toLocaleString('en-US')
}

function heatStyle(value: number, max: number, tone: keyof typeof HEAT_RGB = 'sage'): CSSProperties {
  if (max <= 0 || value <= 0) return { background: 'rgba(26,26,24,.025)' }
  const strength = Math.min(1, value / max)
  const alpha = 0.07 + strength * 0.34
  return { background: `rgba(${HEAT_RGB[tone]}, ${alpha.toFixed(3)})` }
}

function accessLabel(access: AccessState) {
  if (access === 'free') return 'Free'
  if (access === 'paid') return 'Paid'
  if (access === 'draft') return 'Draft'
  return 'Planned'
}

function unionIds(rows: JourneyRow[], key: 'visitorIds' | 'startedIds' | 'finishedIds') {
  const ids = new Set<string>()
  rows.forEach((row) => row.metrics[key].forEach((id) => ids.add(id)))
  return ids
}

function aggregateMetrics(rows: JourneyRow[]): Metrics {
  const result = emptyMetrics()
  let dwellSeconds = 0
  let slideSeconds = 0
  let resourceSeconds = 0

  rows.forEach((row) => {
    const m = row.metrics
    result.visited += m.visited
    result.started += m.started
    result.mid += m.mid
    result.finished += m.finished
    result.dwellVisits += m.dwellVisits
    result.slidesOpened += m.slidesOpened
    result.slideCloseCount += m.slideCloseCount
    result.resourcesOpened += m.resourcesOpened
    result.resourceCloseCount += m.resourceCloseCount
    result.syncSeconds += m.syncSeconds
    result.syncVisits += m.syncVisits
    result.classicSeconds += m.classicSeconds
    result.classicVisits += m.classicVisits
    dwellSeconds += m.avgTimeOnPage * m.dwellVisits
    slideSeconds += m.slidesAvgTime * m.slideCloseCount
    resourceSeconds += m.resourcesAvgTime * m.resourceCloseCount
    m.visitorIds.forEach((id) => result.visitorIds.add(id))
    m.startedIds.forEach((id) => result.startedIds.add(id))
    m.finishedIds.forEach((id) => result.finishedIds.add(id))
  })

  result.avgTimeOnPage = result.dwellVisits > 0 ? dwellSeconds / result.dwellVisits : 0
  result.slidesAvgTime = result.slideCloseCount > 0 ? slideSeconds / result.slideCloseCount : 0
  result.resourcesAvgTime = result.resourceCloseCount > 0 ? resourceSeconds / result.resourceCloseCount : 0
  return result
}

function radarValues(row: JourneyRow, maxAvgTime: number) {
  const m = row.metrics
  return {
    start: pct(m.started, m.visited),
    midpoint: pct(m.mid, m.visited),
    finish: pct(m.finished, m.visited),
    dwell: maxAvgTime > 0 ? pct(m.avgTimeOnPage, maxAvgTime) : 0,
    slides: pct(m.slidesOpened, m.visited),
    resources: pct(m.resourcesOpened, m.visited),
  }
}

function averageRadarValues(rows: JourneyRow[], maxAvgTime: number) {
  const values = rows.map((row) => radarValues(row, maxAvgTime))
  const f = (key: keyof ReturnType<typeof radarValues>) =>
    values.length ? values.reduce((total, value) => total + value[key], 0) / values.length : 0

  return {
    start: f('start'),
    midpoint: f('midpoint'),
    finish: f('finish'),
    dwell: f('dwell'),
    slides: f('slides'),
    resources: f('resources'),
  }
}

function modeLabel(m: Metrics) {
  const total = m.syncSeconds + m.classicSeconds
  if (total <= 0) return '-'
  const syncShare = pct(m.syncSeconds, total)
  if (syncShare >= 75) return `Sync ${Math.round(syncShare)}%`
  if (syncShare <= 25) return `Classic ${Math.round(100 - syncShare)}%`
  return `${Math.round(syncShare)}% sync`
}

export default async function ParcoursPage({ searchParams }: Props) {
  const params = await searchParams
  const rawSelected = params.chapter ?? 'all'
  const { leads, events, visits } = await fetchAllSheets()

  function computeChapter(
    slug: string,
    href: string,
    classicHref: string | null,
    syncHref: string | null,
  ): Metrics {
    const visited = new Set<string>()
    const started = new Set<string>()
    const mid = new Set<string>()
    const finished = new Set<string>()
    const slidesOpen = new Set<string>()
    const resOpen = new Set<string>()
    const paths = new Set([href, classicHref, syncHref].filter(Boolean) as string[])
    const hrefLeaves: LeaveLike[] = []
    const classicLeaves: LeaveLike[] = []
    const syncLeaves: LeaveLike[] = []

    visits.forEach((v) => {
      const p = stripPath(v.page)
      if (paths.has(p)) {
        if (v.event === 'page_visit' && v.readerId) visited.add(v.readerId)
        if (v.event === 'page_leave') hrefLeaves.push(v)
      }
      if (v.event === 'page_leave') {
        if (classicHref && p === classicHref) classicLeaves.push(v)
        if (syncHref && p === syncHref) syncLeaves.push(v)
      }
    })

    const pageSecs = perVisitSeconds(hrefLeaves)
    const classicSecs = perVisitSeconds(classicLeaves)
    const syncSecs = perVisitSeconds(syncLeaves)
    const slideTimes: number[] = []
    const resTimes: number[] = []

    events.forEach((e) => {
      if (e.chapter !== slug) return
      if (e.readerId && e.event === 'read_start') started.add(e.readerId)
      if (e.readerId && e.event === 'scroll_depth') {
        const percent = parseScrollPercent(e.data)
        if (percent != null && percent >= 50) mid.add(e.readerId)
        if (percent != null && percent >= 100) finished.add(e.readerId)
      }
      if (e.readerId && e.event === 'chapter_end_reached') finished.add(e.readerId)
      if (e.readerId && ['slides_viewer_open', 'sync_slide_nav', 'sync_jump_section'].includes(e.event)) {
        slidesOpen.add(e.readerId)
      }
      if (e.readerId && e.event === 'resource_open') resOpen.add(e.readerId)
      if (e.event === 'slides_viewer_close') {
        const n = parseDur(e.data)
        if (n != null) slideTimes.push(n)
      }
      if (e.event === 'resource_close') {
        const n = parseDur(e.data)
        if (n != null) resTimes.push(n)
      }
    })

    return {
      visited: visited.size,
      started: started.size,
      mid: mid.size,
      finished: finished.size,
      avgTimeOnPage: avg(pageSecs),
      dwellVisits: pageSecs.length,
      slidesOpened: slidesOpen.size,
      slidesAvgTime: avg(slideTimes),
      slideCloseCount: slideTimes.length,
      resourcesOpened: resOpen.size,
      resourcesAvgTime: avg(resTimes),
      resourceCloseCount: resTimes.length,
      syncSeconds: sum(syncSecs),
      syncVisits: syncSecs.length,
      classicSeconds: sum(classicSecs),
      classicVisits: classicSecs.length,
      visitorIds: visited,
      startedIds: started,
      finishedIds: finished,
    }
  }

  const rows: JourneyRow[] = CHAPTERS.map((chapter) => ({
    num: chapter.num,
    label: chapter.label,
    title: chapter.title,
    partTitle: chapter.partTitle,
    access: chapter.access,
    href: chapter.href,
    metrics: chapter.slug && chapter.href
      ? computeChapter(chapter.slug, chapter.href, chapter.classicHref, chapter.syncHref)
      : emptyMetrics(),
  }))

  const options = [
    { value: 'all', label: 'Book average' },
    ...CHAPTERS.map((c) => ({ value: c.num, label: c.href ? `${c.label}: ${c.title}` : `${c.label} (planned)` })),
  ]
  const selected = rawSelected === 'all' || rows.some((row) => row.num === rawSelected) ? rawSelected : 'all'
  const selectedRow = selected === 'all' ? null : rows.find((row) => row.num === selected) ?? null
  const activeRows = rows.filter((row) => row.metrics.visited > 0)
  const focusMetrics = selectedRow ? selectedRow.metrics : aggregateMetrics(activeRows)
  const maxVisitors = Math.max(1, ...rows.map((row) => row.metrics.visited))
  const maxAvgTime = Math.max(1, ...rows.map((row) => row.metrics.avgTimeOnPage))
  const averageRadar = averageRadarValues(activeRows, maxAvgTime)
  const selectedRadar = selectedRow ? radarValues(selectedRow, maxAvgTime) : averageRadar
  const radarData: ReaderJourneyRadarPoint[] = [
    { metric: 'Start', selected: selectedRadar.start, average: averageRadar.start },
    { metric: '50%', selected: selectedRadar.midpoint, average: averageRadar.midpoint },
    { metric: 'Finish', selected: selectedRadar.finish, average: averageRadar.finish },
    { metric: 'Dwell', selected: selectedRadar.dwell, average: averageRadar.dwell },
    { metric: 'Slides', selected: selectedRadar.slides, average: averageRadar.slides },
    { metric: 'Resources', selected: selectedRadar.resources, average: averageRadar.resources },
  ]

  const freeRows = rows.filter((row) => row.access === 'free')
  const paidRows = rows.filter((row) => row.access === 'paid')
  const freeVisitorIds = unionIds(freeRows, 'visitorIds')
  const freeStartedIds = unionIds(freeRows, 'startedIds')
  const freeFinishedIds = unionIds(freeRows, 'finishedIds')
  const paidStartedIds = unionIds(paidRows, 'startedIds')
  const freeToPaidIds = new Set([...paidStartedIds].filter((id) => freeVisitorIds.has(id)))

  const freeSignupIds = new Set(
    leads
      .filter((lead) => lead.source === 'free-chapters' && lead.readerId)
      .map((lead) => lead.readerId)
  )
  const intentCtas = new Set(['chapters_buy', 'pricing_notify', 'pricing_notify_digital', 'pricing_notify_print'])
  const buyIntentIds = new Set<string>()
  const purchaseIds = new Set<string>()
  events.forEach((e) => {
    if (e.event === 'cta_click') {
      const cta = parseCta(e.data)
      if (intentCtas.has(cta) && e.readerId) buyIntentIds.add(e.readerId)
    }
    if (['purchase_complete', 'checkout_complete', 'paid_access_granted'].includes(e.event) && e.readerId) {
      purchaseIds.add(e.readerId)
    }
  })

  const totalVisited = activeRows.reduce((total, row) => total + row.metrics.visited, 0)
  const totalFinished = activeRows.reduce((total, row) => total + row.metrics.finished, 0)
  const completionRate = pct(totalFinished, totalVisited)
  const freeToPaidRate = pct(freeToPaidIds.size, freeVisitorIds.size)

  const funnelSteps = [
    { label: 'Free signup', count: freeSignupIds.size },
    { label: 'Free chapter visit', count: freeVisitorIds.size },
    { label: 'Free reading start', count: freeStartedIds.size },
    { label: 'Free chapter finish', count: freeFinishedIds.size },
    { label: 'Order or notify intent', count: buyIntentIds.size },
    { label: 'Purchase event', count: purchaseIds.size },
    { label: 'Paid chapter start', count: paidStartedIds.size },
  ]
  const funnelMax = Math.max(1, ...funnelSteps.map((step) => step.count))

  const focusSteps = [
    { label: 'Visited', count: focusMetrics.visited, rate: focusMetrics.visited > 0 ? 100 : 0 },
    { label: 'Started', count: focusMetrics.started, rate: pct(focusMetrics.started, focusMetrics.visited) },
    { label: 'Reached 50%', count: focusMetrics.mid, rate: pct(focusMetrics.mid, focusMetrics.visited) },
    { label: 'Finished', count: focusMetrics.finished, rate: pct(focusMetrics.finished, focusMetrics.visited) },
  ]
  const syncAvg = focusMetrics.syncVisits > 0 ? focusMetrics.syncSeconds / focusMetrics.syncVisits : 0
  const classicAvg = focusMetrics.classicVisits > 0 ? focusMetrics.classicSeconds / focusMetrics.classicVisits : 0
  const modeTotal = focusMetrics.syncSeconds + focusMetrics.classicSeconds
  const focusName = selectedRow ? `${selectedRow.label}` : 'Book average'

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Reader Journey</h1>
          <p className="adm-page-sub">
            A book-wide view of how readers move through the 3 free chapters now, and the full online book after launch.
          </p>
        </div>
      </div>

      <div className="adm-scorecards adm-journey-kpis">
        <Scorecard label="Free signups" value={fmtCount(freeSignupIds.size)} subtitle="registered for the 3 free chapters" />
        <Scorecard label="Free chapter readers" value={fmtCount(freeVisitorIds.size)} subtitle="visited Introduction, Ch. 2, or Ch. 14" />
        <Scorecard label="Order or notify intent" value={fmtCount(buyIntentIds.size)} subtitle="distinct readers who clicked a launch CTA" />
        <Scorecard label="Free -> paid starts" value={fmtPct(freeToPaidRate)} subtitle={`${fmtCount(freeToPaidIds.size)} readers crossed into paid chapters`} />
        <Scorecard label="Avg completion" value={fmtPct(completionRate)} subtitle="finished / visited, across active chapters" />
      </div>

      <div className="adm-journey-toolbar">
        <div>
          <p className="adm-section-title adm-section-title-first">Book heatmap</p>
          <p className="adm-page-sub adm-journey-intro">
            Scan the whole book at once. Darker cells mean stronger activity or higher rates; the free chapters remain marked permanently.
          </p>
        </div>
        <div className="adm-journey-legend" aria-label="Heatmap legend">
          <span><i className="sage" /> volume</span>
          <span><i className="gold" /> depth</span>
          <span><i className="rust" /> completion</span>
          <span><i className="blue" /> time and mode</span>
        </div>
      </div>

      <div className="adm-table-wrap adm-journey-table-wrap">
        <table className="adm-table adm-journey-table">
          <thead>
            <tr>
              <th style={{ width: 54 }}>#</th>
              <th>Chapter</th>
              <th>Access</th>
              <th>Visitors</th>
              <th>Started</th>
              <th>50%</th>
              <th>Finished</th>
              <th>Avg dwell</th>
              <th>Slides</th>
              <th>Resources</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const m = row.metrics
              const startRate = pct(m.started, m.visited)
              const midRate = pct(m.mid, m.visited)
              const finishRate = pct(m.finished, m.visited)
              const slideRate = pct(m.slidesOpened, m.visited)
              const resourceRate = pct(m.resourcesOpened, m.visited)
              const isSelected = selectedRow?.num === row.num

              return (
                <tr key={row.num} className={isSelected ? 'adm-journey-row-selected' : undefined}>
                  <td className="adm-board-num">{row.num}</td>
                  <td>
                    {row.href ? (
                      <Link className="adm-journey-chapter-link" href={`/admin/parcours?chapter=${row.num}`}>
                        <span className="adm-journey-chapter-title">{row.title}</span>
                        <span className="adm-journey-chapter-sub">{row.partTitle}</span>
                      </Link>
                    ) : (
                      <>
                        <span className="adm-journey-chapter-title">{row.title}</span>
                        <span className="adm-journey-chapter-sub">{row.partTitle}</span>
                      </>
                    )}
                  </td>
                  <td>
                    <span className={`adm-journey-badge ${row.access}`}>{accessLabel(row.access)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(m.visited, maxVisitors, 'sage')}>
                    {fmtCount(m.visited)}
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(startRate, 100, 'gold')}>
                    {fmtPct(startRate)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.started)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(midRate, 100, 'gold')}>
                    {fmtPct(midRate)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.mid)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(finishRate, 100, 'rust')}>
                    {fmtPct(finishRate)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.finished)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(m.avgTimeOnPage, maxAvgTime, 'blue')}>
                    {fmtDuration(m.avgTimeOnPage)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.dwellVisits)} visits</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(slideRate, 100, 'sage')}>
                    {fmtPct(slideRate)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.slidesOpened)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(resourceRate, 100, 'sage')}>
                    {fmtPct(resourceRate)}
                    <span className="adm-journey-cell-sub">{fmtCount(m.resourcesOpened)}</span>
                  </td>
                  <td className="adm-journey-heat" style={heatStyle(modeTotal > 0 ? pct(m.syncSeconds, modeTotal) : 0, 100, 'blue')}>
                    {modeLabel(m)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="adm-journey-focus-head">
        <div>
          <p className="adm-section-title">Chapter focus</p>
          <p className="adm-page-sub">
            {selectedRow
              ? `${selectedRow.label}: ${selectedRow.title}`
              : 'Book average across chapters with traffic'}
          </p>
        </div>
        <div className="adm-filter-row adm-journey-focus-filter">
          <span className="adm-filter-label">Focus</span>
          <ChapterSelect options={options} selected={selected} />
          {selectedRow?.href && (
            <a className="adm-nav-link" href={selectedRow.href} target="_blank" rel="noopener noreferrer">
              Open reader
            </a>
          )}
        </div>
      </div>

      <div className="adm-journey-focus-grid">
        <div className="adm-chart-card adm-journey-radar-card">
          <p className="adm-chart-title">Engagement radar</p>
          <p className="adm-page-sub adm-journey-card-sub">
            Normalized against the strongest chapter for dwell time; all other spokes are visitor rates.
          </p>
          <div className="adm-radar-wrap">
            <ReaderJourneyRadar data={radarData} selectedName={focusName} />
          </div>
        </div>

        <div className="adm-chart-card">
          <p className="adm-chart-title">Reading funnel</p>
          <div className="adm-journey-funnel">
            {focusSteps.map((step) => (
              <div className="adm-journey-funnel-row" key={step.label}>
                <span>{step.label}</span>
                <div className="adm-journey-funnel-bar-wrap">
                  <i style={{ width: `${Math.max(4, step.rate)}%` }} />
                </div>
                <strong>{fmtCount(step.count)}</strong>
                <em>{fmtPct(step.rate)}</em>
              </div>
            ))}
          </div>

          <div className="adm-journey-mode">
            <div>
              <span>Synchronized</span>
              <strong>{fmtDuration(focusMetrics.syncSeconds)}</strong>
              <em>{focusMetrics.syncVisits > 0 ? `${fmtCount(focusMetrics.syncVisits)} visits / avg ${fmtDuration(syncAvg)}` : 'no data'}</em>
              <i style={{ width: `${modeTotal > 0 ? pct(focusMetrics.syncSeconds, modeTotal) : 0}%` }} />
            </div>
            <div>
              <span>Classic</span>
              <strong>{fmtDuration(focusMetrics.classicSeconds)}</strong>
              <em>{focusMetrics.classicVisits > 0 ? `${fmtCount(focusMetrics.classicVisits)} visits / avg ${fmtDuration(classicAvg)}` : 'no data'}</em>
              <i style={{ width: `${modeTotal > 0 ? pct(focusMetrics.classicSeconds, modeTotal) : 0}%` }} />
            </div>
          </div>
        </div>
      </div>

      <p className="adm-section-title">Launch funnel</p>
      <div className="adm-chart-card adm-launch-funnel-card">
        <p className="adm-chart-title">Free chapters -&gt; purchase -&gt; paid reading</p>
        <div className="adm-launch-funnel">
          {funnelSteps.map((step, index) => {
            const previous = index > 0 ? funnelSteps[index - 1].count : step.count
            const stepRate = index > 0 ? pct(step.count, previous) : 100
            return (
              <div className="adm-launch-funnel-step" key={step.label}>
                <div>
                  <span>{step.label}</span>
                  <strong>{fmtCount(step.count)}</strong>
                  <em>{index === 0 ? 'starting point' : `${fmtPct(stepRate)} from previous`}</em>
                </div>
                <i style={{ width: `${Math.max(3, pct(step.count, funnelMax))}%` }} />
              </div>
            )
          })}
        </div>
        <p className="adm-page-sub adm-journey-footnote">
          Purchase event is ready for checkout tracking once the online book is opened for sale. Paid chapter start already uses chapter-read events.
        </p>
      </div>

      <p className="adm-page-sub adm-journey-footnote">
        Started reading = stayed 10s+ in the reader. Finished = reached 100% scroll depth or the end marker.
        Dwell is active time only. Slides count explicit slide interactions; synchronized reading time is tracked separately by mode.
      </p>
    </main>
  )
}
