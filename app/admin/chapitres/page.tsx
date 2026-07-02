import type { Metadata } from 'next'
import { translations, type Lang } from '@/app/i18n/translations'
import { getChapterLangs, getChapterTranslations } from '@/content/registry'
import { getChapterSlideVisuals } from '@/content/slidesyncRegistry'
import ChapterBoard, { type BoardRow, type LangStatus } from '@/components/admin/ChapterBoard'
import {
  chapterQualityIssues,
  chapterQualityMetrics,
  type ChapterQualityIssue,
  type ChapterQualityMetrics,
} from '@/lib/chapterStats'

export const metadata: Metadata = { title: 'Chapters · Admin R.O.P.' }

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it']

const ROUTES: Record<string, { href: string; key: string; gated?: boolean; draft?: boolean }> = {
  '00': { href: '/introduction', key: 'introduction' },
  '01': { href: '/chapitre-1', key: 'chapter-1' },
  '02': { href: '/lecture/traitement-rop', key: 'chapter-2' },
  '03': { href: '/lecture/chapitre-3', key: 'chapter-3' },
  '04': { href: '/chapitre-4', key: 'chapter-4', draft: true },
  '06': { href: '/lecture/chapitre-6', key: 'chapter-6' },
  '07': { href: '/chapitre-7', key: 'chapter-7' },
  '08': { href: '/lecture/chapitre-8', key: 'chapter-8' },
  '09': { href: '/chapitre-9', key: 'chapter-9' },
  '10': { href: '/chapitre-10', key: 'chapter-10' },
  '11': { href: '/lecture/chapitre-11', key: 'chapter-11' },
  '12': { href: '/lecture/chapitre-12', key: 'chapter-12' },
  '13': { href: '/lecture/chapitre-13', key: 'chapter-13' },
  '05': { href: '/lecture/chapitre-5', key: 'chapter-5', gated: true },
  '14': { href: '/lecture/chapitre-14', key: 'chapter-14' },
  '15': { href: '/lecture/chapitre-15', key: 'chapter-15' },
  '16': { href: '/lecture/chapitre-16', key: 'chapter-16' },
  '17': { href: '/lecture/chapitre-17', key: 'chapter-17' },
  '18': { href: '/lecture/chapitre-18', key: 'chapter-18' },
  '19': { href: '/lecture/chapitre-19', key: 'chapter-19' },
  '20': { href: '/lecture/chapitre-20', key: 'chapter-20' },
  '21': { href: '/lecture/chapitre-21', key: 'chapter-21' },
}

type QualityRow = {
  num: string
  title: string
  partTitle: string
  href: string | null
  metrics: ChapterQualityMetrics | null
  liveLangs: Lang[]
  missingLangs: Lang[]
  issues: ChapterQualityIssue[]
}

function formatNumber(n: number): string {
  return n.toLocaleString('en-US')
}

function formatDensity(n: number): string {
  return n.toFixed(1)
}

function resourceLabel(metrics: ChapterQualityMetrics): string {
  const resources = [
    metrics.slidesCount ? `${metrics.slidesCount} slides` : '',
    metrics.revisionSheetCount ? 'revision' : '',
    metrics.clinicalCaseCount ? 'case' : '',
  ].filter(Boolean)
  return resources.length > 0 ? resources.join(' / ') : 'no bonus resource'
}

function clinicalCaseFlag(metrics: ChapterQualityMetrics | null): ChapterQualityIssue {
  return metrics?.clinicalCaseCount
    ? { label: 'Clinical case', tone: 'info' }
    : { label: 'No clinical case', tone: 'info' }
}

function translationIssues(
  metricsByLang: Map<Lang, ChapterQualityMetrics>,
  liveLangs: Lang[],
  missingLangs: Lang[],
): ChapterQualityIssue[] {
  const issues: ChapterQualityIssue[] = []
  const fr = metricsByLang.get('fr')

  if (missingLangs.length > 0) {
    issues.push({ label: `${missingLangs.length} translations missing`, tone: 'info' })
  }
  if (!fr) {
    issues.push({ label: 'Missing French source', tone: 'critical' })
    return issues
  }

  for (const lang of liveLangs) {
    if (lang === 'fr') continue
    const metrics = metricsByLang.get(lang)
    if (!metrics) continue

    const wordRatio = fr.wordCount > 0 ? metrics.wordCount / fr.wordCount : 1
    if (wordRatio < 0.72) {
      issues.push({ label: `${lang.toUpperCase()} much shorter`, tone: 'warning' })
    } else if (wordRatio > 1.35) {
      issues.push({ label: `${lang.toUpperCase()} much longer`, tone: 'warning' })
    }

    if (metrics.figureCount !== fr.figureCount) {
      issues.push({ label: `${lang.toUpperCase()} figure mismatch`, tone: 'warning' })
    }
    if (metrics.figureMissingAltCount > 0 || metrics.figureMissingCaptionCount > 0) {
      issues.push({ label: `${lang.toUpperCase()} figure metadata`, tone: 'critical' })
    }
  }

  return issues
}

export default async function AdminChapitresPage() {
  const t = translations.en.chapters
  const partTitle = new Map(t.parts.map((p) => [p.id, p.title]))

  const rows: BoardRow[] = t.cards.map((card) => {
    const route = ROUTES[card.num]
    const langs = route ? getChapterLangs(route.key) : []
    const fr: LangStatus = route ? (langs.includes('fr') ? 'live' : 'none') : 'none'
    const en: LangStatus = route ? (langs.includes('en') ? 'live' : 'fallback') : 'none'
    const de: LangStatus = route ? (langs.includes('de') ? 'live' : 'fallback') : 'none'
    const es: LangStatus = route ? (langs.includes('es') ? 'live' : 'fallback') : 'none'
    const it: LangStatus = route ? (langs.includes('it') ? 'live' : 'fallback') : 'none'
    return {
      num: card.num,
      title: card.title,
      partId: card.part,
      partTitle: partTitle.get(card.part) ?? card.part,
      href: route?.href ?? null,
      free: 'variant' in card && card.variant === 'free',
      gated: !!route?.gated,
      draft: !!route?.draft,
      fr,
      en,
      de,
      es,
      it,
    }
  })

  const total = rows.length
  const builtTotal = rows.filter((r) => r.href).length
  const frLive = rows.filter((r) => r.fr === 'live').length
  const enLive = rows.filter((r) => r.en === 'live').length
  const deLive = rows.filter((r) => r.de === 'live').length
  const esLive = rows.filter((r) => r.es === 'live').length
  const itLive = rows.filter((r) => r.it === 'live').length

  const qualityRows: QualityRow[] = t.cards.map((card) => {
    const route = ROUTES[card.num]
    if (!route) {
      return {
        num: card.num,
        title: card.title,
        partTitle: partTitle.get(card.part) ?? card.part,
        href: null,
        metrics: null,
        liveLangs: [],
        missingLangs: LANGS,
        issues: [{ label: 'Not built', tone: 'critical' }],
      }
    }

    const translations = getChapterTranslations(route.key)
    const liveLangs = LANGS.filter((lang) => translations[lang])
    const missingLangs = LANGS.filter((lang) => !translations[lang])
    const metricsByLang = new Map<Lang, ChapterQualityMetrics>()
    const slideVisuals = getChapterSlideVisuals(route.key)

    for (const lang of liveLangs) {
      const chapter = translations[lang]
      if (chapter) {
        metricsByLang.set(
          lang,
          chapterQualityMetrics(chapter, lang === 'fr' ? slideVisuals : undefined),
        )
      }
    }

    const frMetrics = metricsByLang.get('fr') ?? null
    const issues: ChapterQualityIssue[] = frMetrics
      ? chapterQualityIssues(frMetrics, translationIssues(metricsByLang, liveLangs, missingLangs))
      : [{ label: 'No content file', tone: 'critical' }]

    return {
      num: card.num,
      title: card.title,
      partTitle: partTitle.get(card.part) ?? card.part,
      href: route.href,
      metrics: frMetrics,
      liveLangs,
      missingLangs,
      issues,
    }
  })

  const analyzedRows = qualityRows.filter((r): r is QualityRow & { metrics: ChapterQualityMetrics } => !!r.metrics)
  const launchAssetRows = analyzedRows.filter((row) => !ROUTES[row.num]?.draft)
  const attentionRows = qualityRows.filter((r) => r.issues.some((issue) => issue.tone !== 'info'))
  const chaptersWithSyncSlides = launchAssetRows.filter((row) => row.metrics.slidesCount > 0).length
  const chaptersWithReflexZoneText = launchAssetRows.filter((row) => row.metrics.podalZoneSectionCount > 0).length
  const chaptersWithReflexZonePictures = launchAssetRows.filter((row) => row.metrics.podalZonePhotoCount > 0).length
  const chaptersWithReflexZoneSlideSupport = launchAssetRows.filter((row) => row.metrics.podalZoneSlideCount > 0).length
  const chaptersWithClinicalCases = launchAssetRows.filter((row) => row.metrics.clinicalCaseCount > 0).length
  const reflexZoneCoverageRows = launchAssetRows.filter(
    (row) => row.metrics.podalZoneSectionCount > 0
      || row.metrics.podalZonePhotoCount > 0
      || row.metrics.podalZoneSlideCount > 0,
  )
  const avgReadMinutes = analyzedRows.length > 0
    ? Math.round(analyzedRows.reduce((sum, row) => sum + row.metrics.readingMinutes, 0) / analyzedRows.length)
    : 0
  const avgVisualDensity = analyzedRows.length > 0
    ? analyzedRows.reduce((sum, row) => sum + row.metrics.figuresPer1000Words, 0) / analyzedRows.length
    : 0
  const fullyTranslatedRows = qualityRows.filter((r) => r.liveLangs.length === LANGS.length).length

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Preparation</p>
          <h1 className="adm-page-title">Chapters — FR / EN / DE / ES / IT</h1>
          <p className="adm-page-sub">
            Each link opens the chapter in the selected language without changing the site language.
            Useful for reviewing versions side by side, with one tab per language.
          </p>
        </div>
      </div>

      <p className="adm-section-title adm-section-title-first">Text availability</p>
      <p className="adm-page-sub adm-asset-intro">
        These cards count chapter text only: live pages and translations. Slides, reflex-zone pictures, and clinical cases are tracked separately below.
      </p>

      <div className="adm-scorecards adm-text-scorecards">
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">Text pages built</p>
          <p className="adm-scorecard-value">{builtTotal}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapter text pages live</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">FR text</p>
          <p className="adm-scorecard-value">{frLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">text chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">EN text</p>
          <p className="adm-scorecard-value">{enLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">text chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">DE text</p>
          <p className="adm-scorecard-value">{deLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">text chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">ES text</p>
          <p className="adm-scorecard-value">{esLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">text chapters translated</p>
        </div>
        <div className="adm-scorecard">
          <p className="adm-scorecard-label">IT text</p>
          <p className="adm-scorecard-value">{itLive}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">text chapters translated</p>
        </div>
      </div>

      <p className="adm-section-title">Chapter assets</p>
      <p className="adm-page-sub adm-asset-intro">
        Separate from the text counts above: these cards track richer learning assets available in the launch reading experience.
      </p>

      <div className="adm-scorecards adm-asset-scorecards">
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">Sync slides</p>
          <p className="adm-scorecard-value">{chaptersWithSyncSlides}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with synced reading-mode slides</p>
        </div>
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">ROP zone text</p>
          <p className="adm-scorecard-value">{chaptersWithReflexZoneText}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with a full reflex-zone text section</p>
        </div>
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">ROP zone pictures</p>
          <p className="adm-scorecard-value">{chaptersWithReflexZonePictures}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with reflex-zone pictures</p>
        </div>
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">ROP zone slides</p>
          <p className="adm-scorecard-value">{chaptersWithReflexZoneSlideSupport}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with synced reflex-zone slides</p>
        </div>
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">Clinical cases</p>
          <p className="adm-scorecard-value">{chaptersWithClinicalCases}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with a dedicated clinical case</p>
        </div>
      </div>

      <div className="adm-table-wrap adm-rop-coverage-wrap">
        <table className="adm-table adm-rop-coverage-table">
          <thead>
            <tr>
              <th style={{ width: 44 }}>#</th>
              <th>Chapter</th>
              <th>Zone text</th>
              <th>Zone pictures</th>
              <th>Zone slide support</th>
            </tr>
          </thead>
          <tbody>
            {reflexZoneCoverageRows.map((row) => (
              <tr key={row.num}>
                <td className="adm-board-num">{row.num}</td>
                <td>
                  {row.href ? (
                    <a className="adm-quality-title-link" href={row.href} target="_blank" rel="noopener noreferrer">
                      {row.title}
                    </a>
                  ) : (
                    <span>{row.title}</span>
                  )}
                  <span className="adm-quality-cell-sub">{row.partTitle}</span>
                </td>
                <td>
                  {row.metrics.podalZoneSectionCount > 0 ? (
                    <span className="adm-quality-flag info">{row.metrics.podalZoneSectionCount} full section</span>
                  ) : (
                    <span className="muted">No full section</span>
                  )}
                </td>
                <td>
                  {row.metrics.podalZonePhotoCount > 0 ? (
                    <span className="adm-quality-flag info">{row.metrics.podalZonePhotoCount} picture{row.metrics.podalZonePhotoCount > 1 ? 's' : ''}</span>
                  ) : (
                    <span className="muted">No zone picture</span>
                  )}
                </td>
                <td>
                  {row.metrics.podalZoneSlideCount > 0 ? (
                    <span className="adm-quality-flag info">{row.metrics.podalZoneSlideCount} slide{row.metrics.podalZoneSlideCount > 1 ? 's' : ''}</span>
                  ) : (
                    <span className="muted">No synced zone slide</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ChapterBoard parts={t.parts} rows={rows} />

      <section className="adm-quality-section">
        <p className="adm-section-title">Chapter quality signals</p>
        <p className="adm-page-sub adm-quality-intro">
          Static checks from the chapter content files: reading load, visual support, structure, translation parity, and review flags.
        </p>

        <div className="adm-scorecards adm-quality-scorecards">
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Analyzed</p>
            <p className="adm-scorecard-value">{analyzedRows.length}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
            <p className="adm-scorecard-sub">chapters with content</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Avg read load</p>
            <p className="adm-scorecard-value">{avgReadMinutes}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> min</span></p>
            <p className="adm-scorecard-sub">canonical FR content</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Visual density</p>
            <p className="adm-scorecard-value">{formatDensity(avgVisualDensity)}</p>
            <p className="adm-scorecard-sub">figures per 1k words</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">5-language set</p>
            <p className="adm-scorecard-value">{fullyTranslatedRows}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
            <p className="adm-scorecard-sub">FR EN DE ES IT live</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Needs attention</p>
            <p className="adm-scorecard-value">{attentionRows.length}</p>
            <p className="adm-scorecard-sub">non-info flags</p>
          </div>
        </div>

        <div className="adm-table-wrap adm-quality-table-wrap">
          <table className="adm-table adm-quality-table">
            <thead>
              <tr>
                <th style={{ width: 44 }}>#</th>
                <th>Chapter</th>
                <th>Reading load</th>
                <th>Visual support</th>
                <th>Structure</th>
                <th>Translations</th>
                <th>Quality flags</th>
              </tr>
            </thead>
            <tbody>
              {qualityRows.map((row) => (
                <tr key={row.num}>
                  <td className="adm-board-num">{row.num}</td>
                  <td>
                    {row.href ? (
                      <a className="adm-quality-title-link" href={row.href} target="_blank" rel="noopener noreferrer">
                        {row.title}
                      </a>
                    ) : (
                      <span>{row.title}</span>
                    )}
                    <span className="adm-quality-cell-sub">{row.partTitle}</span>
                  </td>
                  <td>
                    {row.metrics ? (
                      <>
                        <strong>{formatNumber(row.metrics.wordCount)} words</strong>
                        <span className="adm-quality-cell-sub">
                          {row.metrics.readingMinutes} min / {row.metrics.sectionCount} sections / avg {formatNumber(row.metrics.avgWordsPerSection)} words
                        </span>
                      </>
                    ) : (
                      <span className="adm-quality-cell-sub">No chapter content</span>
                    )}
                  </td>
                  <td>
                    {row.metrics ? (
                      <>
                        <strong>{row.metrics.figureCount} figures</strong>
                        <span className="adm-quality-cell-sub">
                          {row.metrics.slidesCount} slides / {row.metrics.podalZoneSlideCount} podal-zone slides
                        </span>
                        <span className="adm-quality-cell-sub">
                          {row.metrics.podalZoneSectionCount} podal-zone sections / {row.metrics.podalZonePhotoCount} podal-zone photos
                        </span>
                        <span className="adm-quality-cell-sub">
                          {formatDensity(row.metrics.figuresPer1000Words)} figures per 1k words
                        </span>
                        <span className="adm-quality-cell-sub">
                          {resourceLabel(row.metrics)} / {row.metrics.ropBlockCount} ROP blocks / {row.metrics.xrefCount} references
                        </span>
                      </>
                    ) : (
                      <span className="adm-quality-cell-sub">No visual data</span>
                    )}
                  </td>
                  <td>
                    {row.metrics ? (
                      <>
                        <strong>{row.metrics.avgSentenceWords} words/sentence</strong>
                        <span className="adm-quality-cell-sub">
                          {row.metrics.paragraphCount} paragraphs / avg {row.metrics.avgWordsPerParagraph} words
                        </span>
                        <span className="adm-quality-cell-sub">
                          {row.metrics.longParagraphCount} long paragraphs / {row.metrics.longSentenceCount} long sentences
                        </span>
                      </>
                    ) : (
                      <span className="adm-quality-cell-sub">No structure data</span>
                    )}
                  </td>
                  <td>
                    <div className="adm-quality-lang-row">
                      {LANGS.map((lang) => (
                        <span
                          key={lang}
                          className={`adm-quality-lang ${row.liveLangs.includes(lang) ? 'live' : 'missing'}`}
                        >
                          {lang.toUpperCase()}
                        </span>
                      ))}
                    </div>
                    <span className="adm-quality-cell-sub">
                      {row.liveLangs.length}/5 live{row.missingLangs.length > 0 ? ` / missing ${row.missingLangs.map((lang) => lang.toUpperCase()).join(', ')}` : ''}
                    </span>
                  </td>
                  <td>
                    <div className="adm-quality-flags">
                      {[clinicalCaseFlag(row.metrics), ...row.issues].map((issue, index) => (
                        <span key={`${issue.label}-${index}`} className={`adm-quality-flag ${issue.tone}`}>
                          {issue.label}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

    </main>
  )
}
