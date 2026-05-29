import Link from 'next/link'
import { fetchAllSheets } from '@/lib/sheets'

export const dynamic = 'force-dynamic'

interface Props {
  searchParams: Promise<{ chapter?: string }>
}

function pct(a: number, b: number) {
  if (b === 0) return '—'
  return `${(((b - a) / b) * 100).toFixed(1)}% drop`
}

export default async function FunnelPage({ searchParams }: Props) {
  const params = await searchParams
  const chapter = params.chapter ?? 'all'

  const { leads, events, visits } = await fetchAllSheets()

  function matchesChapter(page: string) {
    if (chapter === 'chapter-5') return page.includes('/chapitre')
    if (chapter === 'introduction') return page.includes('/introduction')
    return page.includes('/chapitre') || page.includes('/introduction')
  }

  function matchesChapterEvent(chapterField: string) {
    if (chapter === 'chapter-5') return chapterField.includes('chapitre') || chapterField.includes('chapter-5') || chapterField.includes('5')
    if (chapter === 'introduction') return chapterField.includes('introduction')
    return true
  }

  // Step 1: Visited chapter
  const step1Ids = new Set(
    visits
      .filter((v) => v.event === 'page_visit' && matchesChapter(v.page))
      .map((v) => v.readerId)
      .filter(Boolean)
  )

  // Step 2: read_start
  const step2Ids = new Set(
    events
      .filter((e) => e.event === 'read_start' && matchesChapterEvent(e.chapter))
      .map((e) => e.readerId)
      .filter(Boolean)
  )

  // Step 3: scroll_depth 50%
  const step3Ids = new Set(
    events
      .filter(
        (e) =>
          e.event === 'scroll_depth' &&
          e.data.includes('50') &&
          matchesChapterEvent(e.chapter)
      )
      .map((e) => e.readerId)
      .filter(Boolean)
  )

  // Step 4: scroll_depth 100%
  const step4Ids = new Set(
    events
      .filter(
        (e) =>
          e.event === 'scroll_depth' &&
          e.data.includes('100') &&
          matchesChapterEvent(e.chapter)
      )
      .map((e) => e.readerId)
      .filter(Boolean)
  )

  // Step 5: chapter_end_reached
  const step5Ids = new Set(
    events
      .filter((e) => e.event === 'chapter_end_reached' && matchesChapterEvent(e.chapter))
      .map((e) => e.readerId)
      .filter(Boolean)
  )

  // Step 6: Lead submitted (source contains book-notify)
  const step6Ids = new Set(
    leads
      .filter((l) => l.source.includes('book-notify'))
      .map((l) => l.readerId)
      .filter(Boolean)
  )

  const steps = [
    { label: 'Visited chapter page', count: step1Ids.size },
    { label: 'read_start', count: step2Ids.size },
    { label: 'scroll_depth 50%', count: step3Ids.size },
    { label: 'scroll_depth 100%', count: step4Ids.size },
    { label: 'chapter_end_reached', count: step5Ids.size },
    { label: 'Registered (book-notify)', count: step6Ids.size },
  ]

  const maxCount = steps[0]?.count ?? 1

  const filters = [
    { label: 'All chapters', value: 'all' },
    { label: 'Chapitre 5', value: 'chapter-5' },
    { label: 'Introduction', value: 'introduction' },
  ]

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Dashboard</p>
          <h1 className="adm-page-title">Funnel</h1>
          <p className="adm-page-sub">Distinct readers at each engagement step</p>
        </div>
      </div>

      <div className="adm-filter-row">
        <span className="adm-filter-label">Chapter:</span>
        {filters.map((f) => (
          <Link
            key={f.value}
            href={`/admin/funnel${f.value !== 'all' ? `?chapter=${f.value}` : ''}`}
            className={`adm-filter-btn${chapter === f.value ? ' active' : ''}`}
          >
            {f.label}
          </Link>
        ))}
      </div>

      <div className="adm-funnel">
        {steps.map((step, i) => {
          const prevCount = i === 0 ? step.count : steps[i - 1].count
          const barWidth = maxCount > 0 ? Math.round((step.count / maxCount) * 100) : 0

          return (
            <div key={i} className="adm-funnel-step" style={{ flexWrap: 'wrap' }}>
              <div className="adm-funnel-num">{i + 1}</div>
              <div className="adm-funnel-label">{step.label}</div>
              <div className="adm-funnel-count">{step.count.toLocaleString()}</div>
              <div className={`adm-funnel-drop${i === 0 ? ' first' : ''}`}>
                {i === 0 ? '—' : pct(step.count, prevCount)}
              </div>
              <div className="adm-funnel-bar-wrap">
                <div className="adm-funnel-bar" style={{ width: `${barWidth}%` }} />
              </div>
            </div>
          )
        })}
      </div>
    </main>
  )
}
