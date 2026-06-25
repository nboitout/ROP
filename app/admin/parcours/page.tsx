import { fetchAllSheets } from '@/lib/sheets'
import Scorecard from '@/components/admin/Scorecard'
import ChapterSelect from '@/components/admin/ChapterSelect'
import { fmtDuration } from '@/lib/adminFormat'
import { perVisitSeconds, type LeaveLike } from '@/lib/dwell'

export const dynamic = 'force-dynamic'

// Built chapters: maps the manifest number to its event slug (the `chapter`
// field tracked by the readers) and its page URLs. `href` is the page the
// funnel is attributed to. `classicHref` / `syncHref` are the two reading-mode
// routes (Classic = ChapterReader, Synchronized = SlideSyncReader) whose dwell
// we split for the per-mode time metric. Chapters not listed have no page yet.
const ROUTES: Record<string, { slug: string; href: string; classicHref?: string; syncHref?: string }> = {
  '00': { slug: 'introduction', href: '/introduction', classicHref: '/introduction' },
  '02': { slug: 'chapter-2', href: '/lecture/traitement-rop', classicHref: '/chapitre-2', syncHref: '/lecture/traitement-rop' },
  '04': { slug: 'chapter-4', href: '/chapitre-4', classicHref: '/chapitre-4' },
  '05': { slug: 'chapter-5', href: '/lecture/chapitre-5', classicHref: '/chapitre-5', syncHref: '/lecture/chapitre-5' },
  '14': { slug: 'chapter-14', href: '/lecture/chapitre-14', syncHref: '/lecture/chapitre-14' },
}

// Full book: Introduction (00) + Chapitres 1–21.
const CHAPTERS = Array.from({ length: 22 }, (_, i) => {
  const num = String(i).padStart(2, '0')
  return {
    num,
    label: num === '00' ? 'Introduction' : `Chapitre ${i}`,
    slug: ROUTES[num]?.slug ?? null,
    href: ROUTES[num]?.href ?? null,
    classicHref: ROUTES[num]?.classicHref ?? null,
    syncHref: ROUTES[num]?.syncHref ?? null,
  }
})

interface Metrics {
  visited: number
  started: number
  mid: number
  finished: number
  avgTimeOnPage: number
  slidesOpened: number
  slidesAvgTime: number
  resourcesOpened: number
  resourcesAvgTime: number
  syncSeconds: number
  syncVisits: number
  classicSeconds: number
  classicVisits: number
}

const ZERO: Metrics = {
  visited: 0, started: 0, mid: 0, finished: 0, avgTimeOnPage: 0,
  slidesOpened: 0, slidesAvgTime: 0, resourcesOpened: 0, resourcesAvgTime: 0,
  syncSeconds: 0, syncVisits: 0, classicSeconds: 0, classicVisits: 0,
}

function stripPath(p: string) {
  return p.replace(/^https?:\/\/[^/]+/, '') || '/'
}
function parseDur(data: string): number | null {
  try {
    const n = Number((JSON.parse(data) as { duration_seconds?: unknown }).duration_seconds)
    return isNaN(n) ? null : n
  } catch {
    return null
  }
}
function avg(arr: number[]) {
  return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0
}
function sum(arr: number[]) {
  return arr.reduce((a, b) => a + b, 0)
}

interface Props {
  searchParams: Promise<{ chapter?: string }>
}

export default async function ParcoursPage({ searchParams }: Props) {
  const params = await searchParams
  const selected = params.chapter ?? 'all'
  const { events, visits } = await fetchAllSheets()

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
    // page_leave rows per route — collapsed into per-visit dwell below so the
    // mobile visibilitychange flush (several leaves per visit) isn't counted as
    // many short visits.
    const hrefLeaves: LeaveLike[] = []
    const classicLeaves: LeaveLike[] = []
    const syncLeaves: LeaveLike[] = []

    visits.forEach((v) => {
      const p = stripPath(v.page)
      if (p === href) {
        if (v.event === 'page_visit' && v.readerId) visited.add(v.readerId)
        if (v.event === 'page_leave') hrefLeaves.push(v)
      }
      if (v.event === 'page_leave') {
        if (classicHref && p === classicHref) classicLeaves.push(v)
        else if (syncHref && p === syncHref) syncLeaves.push(v)
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
      if (e.readerId && e.event === 'scroll_depth' && e.data.includes('50')) mid.add(e.readerId)
      if (e.readerId && (e.event === 'chapter_end_reached' || (e.event === 'scroll_depth' && e.data.includes('100')))) finished.add(e.readerId)
      if (e.readerId && e.event === 'slides_viewer_open') slidesOpen.add(e.readerId)
      if (e.readerId && e.event === 'resource_open') resOpen.add(e.readerId)
      if (e.event === 'slides_viewer_close') { const n = parseDur(e.data); if (n != null) slideTimes.push(n) }
      if (e.event === 'resource_close') { const n = parseDur(e.data); if (n != null) resTimes.push(n) }
    })

    return {
      visited: visited.size,
      started: started.size,
      mid: mid.size,
      finished: finished.size,
      avgTimeOnPage: avg(pageSecs),
      slidesOpened: slidesOpen.size,
      slidesAvgTime: avg(slideTimes),
      resourcesOpened: resOpen.size,
      resourcesAvgTime: avg(resTimes),
      syncSeconds: sum(syncSecs),
      syncVisits: syncSecs.length,
      classicSeconds: sum(classicSecs),
      classicVisits: classicSecs.length,
    }
  }

  const isAvg = selected === 'all'
  let m: Metrics
  if (isAvg) {
    // Average per chapter, across built chapters that have at least one visitor.
    const built = CHAPTERS.filter((c) => c.slug && c.href).map((c) => computeChapter(c.slug!, c.href!, c.classicHref, c.syncHref))
    const base = built.filter((x) => x.visited > 0)
    const f = (key: keyof Metrics) => (base.length ? base.reduce((a, b) => a + b[key], 0) / base.length : 0)
    m = {
      visited: f('visited'), started: f('started'), mid: f('mid'), finished: f('finished'),
      avgTimeOnPage: f('avgTimeOnPage'),
      slidesOpened: f('slidesOpened'), slidesAvgTime: f('slidesAvgTime'),
      resourcesOpened: f('resourcesOpened'), resourcesAvgTime: f('resourcesAvgTime'),
      syncSeconds: f('syncSeconds'), syncVisits: f('syncVisits'),
      classicSeconds: f('classicSeconds'), classicVisits: f('classicVisits'),
    }
  } else {
    const ch = CHAPTERS.find((c) => c.num === selected)
    m = ch?.slug && ch?.href ? computeChapter(ch.slug, ch.href, ch.classicHref, ch.syncHref) : ZERO
  }

  const fmtCount = (n: number) => (isAvg ? n.toFixed(1) : Math.round(n).toString())
  // Seconds, switching to minutes past 2 min (shared helper).
  const fmtTime = fmtDuration
  const fmtSpan = fmtDuration
  // Share of visitors who reached a step (visited is the 100% base).
  const rate = (n: number) => (m.visited > 0 ? `${Math.round((n / m.visited) * 100)}% of visitors` : '—')

  const options = [
    { value: 'all', label: 'Average per chapter' },
    ...CHAPTERS.map((c) => ({ value: c.num, label: c.slug ? c.label : `${c.label} (à venir)` })),
  ]

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Parcours</h1>
          <p className="adm-page-sub">
            {isAvg
              ? 'Average reading journey per chapter (across chapters with data)'
              : 'Reading journey for this chapter'}
          </p>
        </div>
      </div>

      <div className="adm-filter-row">
        <span className="adm-filter-label">Chapter:</span>
        <ChapterSelect options={options} selected={selected} />
      </div>

      <p className="adm-section-title">Reading funnel</p>
      <div className="adm-scorecards">
        <Scorecard label="Visited chapter page" value={fmtCount(m.visited)} subtitle="landed on the page" />
        <Scorecard label="Started reading (10s+)" value={fmtCount(m.started)} subtitle={rate(m.started)} />
        <Scorecard label="Reached 50%" value={fmtCount(m.mid)} subtitle={rate(m.mid)} />
        <Scorecard label="Finished chapter" value={fmtCount(m.finished)} subtitle={rate(m.finished)} />
      </div>

      <p className="adm-section-title">Engagement</p>
      <div className="adm-scorecards">
        <Scorecard label="Avg Time on Page" value={fmtTime(m.avgTimeOnPage)} subtitle="active seconds before leaving" />
        <Scorecard label="Opened Slides" value={fmtCount(m.slidesOpened)} subtitle={`avg ${fmtTime(m.slidesAvgTime)} in viewer`} />
        <Scorecard label="Opened Resources" value={fmtCount(m.resourcesOpened)} subtitle={`avg ${fmtTime(m.resourcesAvgTime)} open`} />
      </div>

      <p className="adm-section-title">Reading mode — time spent</p>
      <div className="adm-scorecards">
        <Scorecard
          label="Synchronized (default)"
          value={fmtSpan(m.syncSeconds)}
          subtitle={m.syncVisits > 0 ? `${fmtCount(m.syncVisits)} visits · avg ${fmtTime(m.syncSeconds / m.syncVisits)}` : 'no data'}
        />
        <Scorecard
          label="Classic"
          value={fmtSpan(m.classicSeconds)}
          subtitle={m.classicVisits > 0 ? `${fmtCount(m.classicVisits)} visits · avg ${fmtTime(m.classicSeconds / m.classicVisits)}` : 'no data'}
        />
      </div>

      <p className="adm-page-sub" style={{ marginTop: 16, maxWidth: 760, lineHeight: 1.6 }}>
        <strong>Visited</strong> = landed on the chapter page. <strong>Started reading</strong> = stayed
        10s+ (active tab). <strong>Finished</strong> = scrolled to 100% or hit the end marker.
        <strong> Avg time on page</strong> is active dwell. <strong>Opened slides / resources</strong> count
        distinct readers who opened them; their average time is measured only from new visits (the
        close-duration tracking was just added), so it shows “—” until fresh data accrues. “Average per
        chapter” averages each value across the built chapters that have at least one visitor.
      </p>
      <p className="adm-page-sub" style={{ marginTop: 8, maxWidth: 760, lineHeight: 1.6 }}>
        <strong>Reading mode — time spent</strong> splits active dwell between the two routes:
        <strong> Synchronized</strong> (text + pinned slides, the default for chapters with a deck,
        at <code>/lecture/…</code>) and <strong>Classic</strong> (plain reader, at <code>/chapitre-N</code>).
        The headline is total active seconds; the subtitle shows the visit count and average per visit.
      </p>
    </main>
  )
}
