import type { Metadata } from 'next'
import { revalidatePath, revalidateTag, unstable_cache } from 'next/cache'
import { translations, type Lang } from '@/app/i18n/translations'
import { getChapterLangs, getChapterTranslations } from '@/content/registry'
import { getChapterSlideVisuals } from '@/content/slidesyncRegistry'
import ChapterBoard, { type BoardRow, type LangStatus } from '@/components/admin/ChapterBoard'
import ChapterTextAnalyticsChart, { type ChapterTextAnalyticsRow } from '@/components/admin/ChapterTextAnalyticsChart'
import RecalculateStatsButton from '@/components/admin/RecalculateStatsButton'
import { chapterQualityMetrics, type ChapterQualityMetrics } from '@/lib/chapterStats'

export const metadata: Metadata = { title: 'Chapters · Admin R.O.P.' }

const CHAPTER_STATS_TAG = 'admin-chapter-stats'
const CHAPTER_STATS_CACHE_VERSION = 'rop-chapter-analytics-v4'

async function recalculateChapterStats() {
  'use server'
  revalidateTag(CHAPTER_STATS_TAG, 'max')
  revalidatePath('/admin/chapitres', 'page')
}

const LANGS: Lang[] = ['fr', 'en', 'de', 'es', 'it', 'th']

const ROUTES: Record<string, { href: string; key: string; gated?: boolean; draft?: boolean }> = {
  '00': { href: '/introduction', key: 'introduction' },
  '01': { href: '/chapitre-1', key: 'chapter-1' },
  '02': { href: '/lecture/traitement-rop', key: 'chapter-2' },
  '03': { href: '/lecture/chapitre-3', key: 'chapter-3' },
  '04': { href: '/lecture/chapitre-4', key: 'chapter-4', draft: true },
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
  metrics: ChapterQualityMetrics | null
  liveLangCount: number
}

type ChapterStatsSnapshot = {
  generatedAt: string
  rows: BoardRow[]
  total: number
  builtTotal: number
  frLive: number
  enLive: number
  deLive: number
  esLive: number
  itLive: number
  analyzedRows: Array<QualityRow & { metrics: ChapterQualityMetrics }>
  launchAssetRows: Array<QualityRow & { metrics: ChapterQualityMetrics }>
  chaptersWithSyncSlides: number
  chaptersWithReflexZoneText: number
  chaptersWithReflexZonePictures: number
  chaptersWithReflexZoneSlideSupport: number
  chaptersWithClinicalCases: number
  avgReadMinutes: number
  avgPhotosInText: number
  avgContentSlides: number
  avgCartographies: number
  fullyTranslatedRows: number
}

function formatGeneratedAt(value: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    dateStyle: 'short',
    timeStyle: 'medium',
    timeZone: 'Europe/Paris',
  }).format(new Date(value))
}

function buildChapterStatsSnapshot(): ChapterStatsSnapshot {
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

  const chapterMetricRows: QualityRow[] = t.cards.map((card) => {
    const route = ROUTES[card.num]
    if (!route) {
      return {
        num: card.num,
        title: card.title,
        metrics: null,
        liveLangCount: 0,
      }
    }

    const translations = getChapterTranslations(route.key)
    const liveLangs = LANGS.filter((lang) => translations[lang])
    const slideVisuals = getChapterSlideVisuals(route.key)
    const frMetrics = translations.fr ? chapterQualityMetrics(translations.fr, slideVisuals) : null

    return {
      num: card.num,
      title: card.title,
      metrics: frMetrics,
      liveLangCount: liveLangs.length,
    }
  })

  const analyzedRows = chapterMetricRows.filter((r): r is QualityRow & { metrics: ChapterQualityMetrics } => !!r.metrics)
  const launchAssetRows = analyzedRows.filter((row) => !ROUTES[row.num]?.draft)
  const chaptersWithSyncSlides = launchAssetRows.filter((row) => row.metrics.slidesCount > 0).length
  const chaptersWithReflexZoneText = launchAssetRows.filter((row) => row.metrics.podalZoneSectionCount > 0).length
  const chaptersWithReflexZonePictures = launchAssetRows.filter((row) => row.metrics.podalZonePhotoCount > 0).length
  const chaptersWithReflexZoneSlideSupport = launchAssetRows.filter((row) => row.metrics.podalZoneSlideCount > 0).length
  const chaptersWithClinicalCases = launchAssetRows.filter((row) => row.metrics.clinicalCaseCount > 0).length
  const avgReadMinutes = analyzedRows.length > 0
    ? Math.round(analyzedRows.reduce((sum, row) => sum + row.metrics.readingMinutes, 0) / analyzedRows.length)
    : 0
  const avgPhotosInText = analyzedRows.length > 0
    ? Math.round(analyzedRows.reduce((sum, row) => sum + row.metrics.figureCount, 0) / analyzedRows.length)
    : 0
  const avgContentSlides = analyzedRows.length > 0
    ? Math.round(
      analyzedRows.reduce((sum, row) => sum + Math.max(0, row.metrics.slidesCount - row.metrics.podalZoneSlideCount), 0) / analyzedRows.length,
    )
    : 0
  const avgCartographies = analyzedRows.length > 0
    ? Math.round(analyzedRows.reduce((sum, row) => sum + row.metrics.podalZoneSlideCount, 0) / analyzedRows.length)
    : 0
  const fullyTranslatedRows = chapterMetricRows.filter((r) => r.liveLangCount === LANGS.length).length

  return {
    generatedAt: new Date().toISOString(),
    rows,
    total,
    builtTotal,
    frLive,
    enLive,
    deLive,
    esLive,
    itLive,
    analyzedRows,
    launchAssetRows,
    chaptersWithSyncSlides,
    chaptersWithReflexZoneText,
    chaptersWithReflexZonePictures,
    chaptersWithReflexZoneSlideSupport,
    chaptersWithClinicalCases,
    avgReadMinutes,
    avgPhotosInText,
    avgContentSlides,
    avgCartographies,
    fullyTranslatedRows,
  }
}

const getChapterStatsSnapshot = unstable_cache(
  async () => buildChapterStatsSnapshot(),
  [CHAPTER_STATS_TAG, CHAPTER_STATS_CACHE_VERSION],
  { tags: [CHAPTER_STATS_TAG] },
)

export default async function AdminChapitresPage() {
  const t = translations.en.chapters
  const {
    generatedAt,
    rows,
    total,
    builtTotal,
    frLive,
    enLive,
    deLive,
    esLive,
    itLive,
    analyzedRows,
    chaptersWithSyncSlides,
    chaptersWithReflexZoneText,
    chaptersWithReflexZonePictures,
    chaptersWithReflexZoneSlideSupport,
    chaptersWithClinicalCases,
    avgReadMinutes,
    avgPhotosInText,
    avgContentSlides,
    avgCartographies,
    fullyTranslatedRows,
  } = await getChapterStatsSnapshot()
  const textAnalyticsRows: ChapterTextAnalyticsRow[] = analyzedRows.map((row) => ({
    num: row.num,
    title: row.title,
    wordCount: row.metrics.wordCount,
    readingMinutes: row.metrics.readingMinutes,
    photosInText: row.metrics.figureCount,
    contentSlideCount: Math.max(0, row.metrics.slidesCount - row.metrics.podalZoneSlideCount),
    cartographyCount: row.metrics.podalZoneSlideCount,
  }))

  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Preparation</p>
          <h1 className="adm-page-title">Chapters — FR / EN / DE / ES / IT / TH</h1>
          <p className="adm-page-sub">
            Each link opens the chapter in the selected language without changing the site language.
            Useful for reviewing versions side by side, with one tab per language.
          </p>
        </div>
        <div className="adm-refresh">
          <RecalculateStatsButton action={recalculateChapterStats} />
          <p className="adm-refresh-note">Last calculated {formatGeneratedAt(generatedAt)}</p>
        </div>
      </div>

      <p className="adm-section-title adm-section-title-first">Text availability</p>
      <div className="adm-special-review">
        <div>
          <p className="adm-special-review-kicker">Special review link</p>
          <h2>Chapter 5 rework</h2>
          <p>Dedicated draft page for Guy: rewritten stress/allostasis chapter with synchronized slides.</p>
        </div>
        <a href="/lecture/chapitre-5-rework" target="_blank" rel="noopener noreferrer">
          Open rework
        </a>
      </div>

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
          <p className="adm-scorecard-label">Cartographies</p>
          <p className="adm-scorecard-value">{chaptersWithReflexZoneSlideSupport}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with reflex-zone slide maps</p>
        </div>
        <div className="adm-scorecard adm-scorecard-asset">
          <p className="adm-scorecard-label">Clinical cases</p>
          <p className="adm-scorecard-value">{chaptersWithClinicalCases}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
          <p className="adm-scorecard-sub">chapters with a dedicated clinical case</p>
        </div>
      </div>

      <ChapterBoard parts={t.parts} rows={rows} />

      <section className="adm-quality-section">
        <p className="adm-section-title">Chapter analytics comparison</p>
        <p className="adm-page-sub adm-quality-intro">
          Compare chapters one measure at a time: reading load, text length, foot massage photos, anatomy/physio slides, and cartographies.
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
            <p className="adm-scorecard-label">Avg foot massage photos</p>
            <p className="adm-scorecard-value">{avgPhotosInText}</p>
            <p className="adm-scorecard-sub">photos per chapter</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Avg anatomy slides</p>
            <p className="adm-scorecard-value">{avgContentSlides}</p>
            <p className="adm-scorecard-sub">anatomy and physio</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">Avg cartographies</p>
            <p className="adm-scorecard-value">{avgCartographies}</p>
            <p className="adm-scorecard-sub">reflex-zone slides</p>
          </div>
          <div className="adm-scorecard">
            <p className="adm-scorecard-label">All languages</p>
            <p className="adm-scorecard-value">{fullyTranslatedRows}<span style={{ fontSize: '1rem', color: 'var(--adm-i30)' }}> / {total}</span></p>
            <p className="adm-scorecard-sub">FR EN DE ES IT TH live</p>
          </div>
        </div>

        <ChapterTextAnalyticsChart rows={textAnalyticsRows} />
      </section>

    </main>
  )
}
