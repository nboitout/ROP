import { chapter1Slides, chapter1SlidesEn, chapter1SlideAnchors, chapter1SlideAnchorsEn } from './chapter1.slidesync'
import {
  chapter2Slides,
  chapter2SlidesDe,
  chapter2SlidesEn,
  chapter2SlidesEs,
  chapter2SlidesIt,
  chapter2SlideAnchors,
  chapter2SlideAnchorsEn,
  chapter2SlideAnchorsFr,
} from './chapter2.slidesync'
import {
  chapter3ReworkSlides as chapter3Slides,
  chapter3ReworkSlidesEn as chapter3SlidesEn,
  chapter3ReworkSlideAnchors as chapter3SlideAnchors,
  chapter3ReworkSlideAnchorsEn as chapter3SlideAnchorsEn,
} from './chapter3-rework.slidesync'
import {
  chapter4ReworkSlides as chapter4Slides,
  chapter4ReworkSlidesEn as chapter4SlidesEn,
  chapter4ReworkSlideAnchors as chapter4SlideAnchors,
  chapter4ReworkSlideAnchorsEn as chapter4SlideAnchorsEn,
} from './chapter4-rework.slidesync'
import {
  chapter5SlidesDe,
  chapter5SlidesEn,
  chapter5SlidesEs,
  chapter5SlidesIt,
  chapter5SlideAnchorsEn,
  chapter5SlideAnchorsLegacy,
} from './chapter5.slidesync'
import { chapter5ReworkSlides as chapter5Slides, chapter5ReworkSlideAnchors as chapter5SlideAnchors } from './chapter5-rework.slidesync'
import { chapter6Slides, chapter6SlidesEn, chapter6SlideAnchors, chapter6SlideAnchorsEn } from './chapter6.slidesync'
import { chapter7Slides, chapter7SlidesEn, chapter7SlideAnchors, chapter7SlideAnchorsEn } from './chapter7.slidesync'
import { chapter8Slides, chapter8SlidesEn, chapter8SlideAnchors, chapter8SlideAnchorsEn } from './chapter8.slidesync'
import { chapter9Slides, chapter9SlidesEn, chapter9SlideAnchors, chapter9SlideAnchorsEn } from './chapter9.slidesync'
import { chapter10Slides, chapter10SlidesEn, chapter10SlideAnchors, chapter10SlideAnchorsEn } from './chapter10.slidesync'
import { chapter11Slides, chapter11SlidesEn, chapter11SlideAnchors, chapter11SlideAnchorsEn } from './chapter11.slidesync'
import { chapter12Slides, chapter12SlidesEn, chapter12SlideAnchors, chapter12SlideAnchorsEn } from './chapter12.slidesync'
import { chapter13Slides, chapter13SlidesEn, chapter13SlideAnchors, chapter13SlideAnchorsEn } from './chapter13.slidesync'
import {
  chapter14Slides,
  chapter14SlidesDe,
  chapter14SlidesEn,
  chapter14SlidesEs,
  chapter14SlidesIt,
  chapter14SlideAnchors,
  chapter14SlideAnchorsFr,
} from './chapter14.slidesync'
import {
  chapter15Slides,
  chapter15SlidesEn,
  chapter15SlideAnchors,
  chapter15SlideAnchorsEn,
} from './chapter15.slidesync'
import { chapter16Slides, chapter16SlidesEn, chapter16SlideAnchors, chapter16SlideAnchorsEn } from './chapter16.slidesync'
import { chapter17Slides, chapter17SlidesEn, chapter17SlideAnchors, chapter17SlideAnchorsEn } from './chapter17.slidesync'
import { chapter18Slides, chapter18SlidesEn, chapter18SlideAnchors, chapter18SlideAnchorsEn } from './chapter18.slidesync'
import { chapter19Slides, chapter19SlidesEn, chapter19SlideAnchors, chapter19SlideAnchorsEn } from './chapter19.slidesync'
import { chapter20Slides, chapter20SlidesEn, chapter20SlideAnchors, chapter20SlideAnchorsEn } from './chapter20.slidesync'
import { chapter21Slides, chapter21SlidesEn, chapter21SlideAnchors, chapter21SlideAnchorsEn } from './chapter21.slidesync'
import type { Lang } from '@/app/i18n/translations'
import { FREE_CHAPTER_KEYS } from '@/lib/access'
import { computeSlideVisuals, slideNumbers } from '@/lib/slideVisuals'
import { getChapterTranslations } from './registry'
import type { Chapter } from './types'

type SyncSlideLike = { src: string; title: string; orientation?: 'portrait' }
type SyncAnchorLike = { sectionId: string; blockIndex: number; itemIndex?: number; slide: number | number[] }

type SlideVisualSource = {
  slides: readonly SyncSlideLike[]
  anchors: readonly SyncAnchorLike[]
}

type SlideSearchSource = SlideVisualSource & {
  lang: Lang
}

export type BookSlideSearchRecord = {
  id: string
  kind: 'slide'
  lang: Lang
  chapterKey: string
  chapterNumber?: number
  chapterTitle: string
  sectionId: string
  sectionTitle: string
  blockIndex: number
  blockType: 'slide'
  slideNumber: number
  title: string
  href: string
  imageSrc: string
  sourcePath: string
  access: 'free' | 'paid'
}

const slideVisualSources: Record<string, SlideVisualSource> = {
  'chapter-1': { slides: chapter1Slides, anchors: chapter1SlideAnchors },
  'chapter-2': { slides: chapter2Slides, anchors: chapter2SlideAnchorsFr },
  'chapter-3': { slides: chapter3Slides, anchors: chapter3SlideAnchors },
  'chapter-4': { slides: chapter4Slides, anchors: chapter4SlideAnchors },
  'chapter-5': { slides: chapter5Slides, anchors: chapter5SlideAnchors },
  'chapter-6': { slides: chapter6Slides, anchors: chapter6SlideAnchors },
  'chapter-7': { slides: chapter7Slides, anchors: chapter7SlideAnchors },
  'chapter-8': { slides: chapter8Slides, anchors: chapter8SlideAnchors },
  'chapter-9': { slides: chapter9Slides, anchors: chapter9SlideAnchors },
  'chapter-10': { slides: chapter10Slides, anchors: chapter10SlideAnchors },
  'chapter-11': { slides: chapter11Slides, anchors: chapter11SlideAnchors },
  'chapter-12': { slides: chapter12Slides, anchors: chapter12SlideAnchors },
  'chapter-13': { slides: chapter13Slides, anchors: chapter13SlideAnchors },
  'chapter-14': { slides: chapter14Slides, anchors: chapter14SlideAnchorsFr },
  'chapter-15': { slides: chapter15Slides, anchors: chapter15SlideAnchors },
  'chapter-16': { slides: chapter16Slides, anchors: chapter16SlideAnchors },
  'chapter-17': { slides: chapter17Slides, anchors: chapter17SlideAnchors },
  'chapter-18': { slides: chapter18Slides, anchors: chapter18SlideAnchors },
  'chapter-19': { slides: chapter19Slides, anchors: chapter19SlideAnchors },
  'chapter-20': { slides: chapter20Slides, anchors: chapter20SlideAnchors },
  'chapter-21': { slides: chapter21Slides, anchors: chapter21SlideAnchors },
}

const slideSearchSources: Record<string, readonly SlideSearchSource[]> = {
  'chapter-1': [
    { lang: 'fr', slides: chapter1Slides, anchors: chapter1SlideAnchors },
    { lang: 'en', slides: chapter1SlidesEn, anchors: chapter1SlideAnchorsEn },
  ],
  'chapter-2': [
    { lang: 'fr', slides: chapter2Slides, anchors: chapter2SlideAnchorsFr },
    { lang: 'en', slides: chapter2SlidesEn, anchors: chapter2SlideAnchorsEn },
    { lang: 'de', slides: chapter2SlidesDe, anchors: chapter2SlideAnchors },
    { lang: 'es', slides: chapter2SlidesEs, anchors: chapter2SlideAnchors },
    { lang: 'it', slides: chapter2SlidesIt, anchors: chapter2SlideAnchors },
  ],
  'chapter-3': [
    { lang: 'fr', slides: chapter3Slides, anchors: chapter3SlideAnchors },
    { lang: 'en', slides: chapter3SlidesEn, anchors: chapter3SlideAnchorsEn },
  ],
  'chapter-4': [
    { lang: 'fr', slides: chapter4Slides, anchors: chapter4SlideAnchors },
    { lang: 'en', slides: chapter4SlidesEn, anchors: chapter4SlideAnchorsEn },
  ],
  'chapter-5': [
    { lang: 'fr', slides: chapter5Slides, anchors: chapter5SlideAnchors },
    { lang: 'en', slides: chapter5SlidesEn, anchors: chapter5SlideAnchorsEn },
    { lang: 'de', slides: chapter5SlidesDe, anchors: chapter5SlideAnchorsLegacy },
    { lang: 'es', slides: chapter5SlidesEs, anchors: chapter5SlideAnchorsLegacy },
    { lang: 'it', slides: chapter5SlidesIt, anchors: chapter5SlideAnchorsLegacy },
  ],
  'chapter-6': [
    { lang: 'fr', slides: chapter6Slides, anchors: chapter6SlideAnchors },
    { lang: 'en', slides: chapter6SlidesEn, anchors: chapter6SlideAnchorsEn },
  ],
  'chapter-7': [
    { lang: 'fr', slides: chapter7Slides, anchors: chapter7SlideAnchors },
    { lang: 'en', slides: chapter7SlidesEn, anchors: chapter7SlideAnchorsEn },
  ],
  'chapter-8': [
    { lang: 'fr', slides: chapter8Slides, anchors: chapter8SlideAnchors },
    { lang: 'en', slides: chapter8SlidesEn, anchors: chapter8SlideAnchorsEn },
  ],
  'chapter-9': [
    { lang: 'fr', slides: chapter9Slides, anchors: chapter9SlideAnchors },
    { lang: 'en', slides: chapter9SlidesEn, anchors: chapter9SlideAnchorsEn },
  ],
  'chapter-10': [
    { lang: 'fr', slides: chapter10Slides, anchors: chapter10SlideAnchors },
    { lang: 'en', slides: chapter10SlidesEn, anchors: chapter10SlideAnchorsEn },
  ],
  'chapter-11': [
    { lang: 'fr', slides: chapter11Slides, anchors: chapter11SlideAnchors },
    { lang: 'en', slides: chapter11SlidesEn, anchors: chapter11SlideAnchorsEn },
  ],
  'chapter-12': [
    { lang: 'fr', slides: chapter12Slides, anchors: chapter12SlideAnchors },
    { lang: 'en', slides: chapter12SlidesEn, anchors: chapter12SlideAnchorsEn },
  ],
  'chapter-13': [
    { lang: 'fr', slides: chapter13Slides, anchors: chapter13SlideAnchors },
    { lang: 'en', slides: chapter13SlidesEn, anchors: chapter13SlideAnchorsEn },
  ],
  'chapter-14': [
    { lang: 'fr', slides: chapter14Slides, anchors: chapter14SlideAnchorsFr },
    { lang: 'en', slides: chapter14SlidesEn, anchors: chapter14SlideAnchors },
    { lang: 'de', slides: chapter14SlidesDe, anchors: chapter14SlideAnchors },
    { lang: 'es', slides: chapter14SlidesEs, anchors: chapter14SlideAnchors },
    { lang: 'it', slides: chapter14SlidesIt, anchors: chapter14SlideAnchors },
  ],
  'chapter-15': [
    { lang: 'fr', slides: chapter15Slides, anchors: chapter15SlideAnchors },
    { lang: 'en', slides: chapter15SlidesEn, anchors: chapter15SlideAnchorsEn },
  ],
  'chapter-16': [
    { lang: 'fr', slides: chapter16Slides, anchors: chapter16SlideAnchors },
    { lang: 'en', slides: chapter16SlidesEn, anchors: chapter16SlideAnchorsEn },
  ],
  'chapter-17': [
    { lang: 'fr', slides: chapter17Slides, anchors: chapter17SlideAnchors },
    { lang: 'en', slides: chapter17SlidesEn, anchors: chapter17SlideAnchorsEn },
  ],
  'chapter-18': [
    { lang: 'fr', slides: chapter18Slides, anchors: chapter18SlideAnchors },
    { lang: 'en', slides: chapter18SlidesEn, anchors: chapter18SlideAnchorsEn },
  ],
  'chapter-19': [
    { lang: 'fr', slides: chapter19Slides, anchors: chapter19SlideAnchors },
    { lang: 'en', slides: chapter19SlidesEn, anchors: chapter19SlideAnchorsEn },
  ],
  'chapter-20': [
    { lang: 'fr', slides: chapter20Slides, anchors: chapter20SlideAnchors },
    { lang: 'en', slides: chapter20SlidesEn, anchors: chapter20SlideAnchorsEn },
  ],
  'chapter-21': [
    { lang: 'fr', slides: chapter21Slides, anchors: chapter21SlideAnchors },
    { lang: 'en', slides: chapter21SlidesEn, anchors: chapter21SlideAnchorsEn },
  ],
}

let cachedSlideSearchIndex: BookSlideSearchRecord[] | null = null

function chapterBaseHref(chapterKey: string): string {
  if (chapterKey === 'introduction') return '/introduction'
  if (chapterKey === 'chapter-2') return '/lecture/traitement-rop'

  const match = chapterKey.match(/^chapter-(\d+)$/)
  if (match) return `/lecture/chapitre-${Number(match[1])}`

  return `/${chapterKey}`
}

function hrefForSlideRecord(chapterKey: string, lang: Lang, anchor: string): string {
  return `${chapterBaseHref(chapterKey)}?lang=${encodeURIComponent(lang)}#${anchor}`
}

function accessForChapter(chapterKey: string): 'free' | 'paid' {
  return FREE_CHAPTER_KEYS.has(chapterKey) ? 'free' : 'paid'
}

function chapterNumber(chapterKey: string, chapter: Chapter): number | undefined {
  const fromKey = chapterKey.match(/^chapter-(\d+)$/)?.[1]
  if (fromKey) return Number.parseInt(fromKey, 10)

  const fromChapter = chapter.number?.match(/\d+/)?.[0]
  return fromChapter ? Number.parseInt(fromChapter, 10) : undefined
}

function slideSourcePath(src: string): string {
  const pathname = src.split(/[?#]/, 1)[0] ?? src
  return `public${pathname.startsWith('/') ? pathname : `/${pathname}`}`.replace(/\\/g, '/')
}

function anchorForPoint(anchor: SyncAnchorLike | undefined, chapter: Chapter): string {
  const sectionId = anchor?.sectionId ?? chapter.sections[0]?.id ?? ''
  const blockIndex = anchor?.blockIndex ?? -1
  if (!sectionId) return ''
  return blockIndex < 0 ? `sec-${sectionId}` : `p-${sectionId}-${blockIndex}`
}

function findAnchorForSlide(anchors: readonly SyncAnchorLike[], slideNumber: number): SyncAnchorLike | undefined {
  return anchors.find((anchor) => slideNumbers(anchor.slide).includes(slideNumber))
}

function buildSlideRecordsForSource(
  chapterKey: string,
  source: SlideSearchSource,
  seenImages: Set<string>,
): BookSlideSearchRecord[] {
  const chapter = getChapterTranslations(chapterKey)[source.lang]
  if (!chapter) return []

  const number = chapterNumber(chapterKey, chapter)
  const records: BookSlideSearchRecord[] = []

  source.slides.forEach((slide, index) => {
    const imageSrc = slide.src
    const dedupeKey = `${chapterKey}:${slideSourcePath(imageSrc).toLowerCase()}`
    if (seenImages.has(dedupeKey)) return
    seenImages.add(dedupeKey)

    const slideNumber = index + 1
    const syncAnchor = findAnchorForSlide(source.anchors, slideNumber)
    const sectionId = syncAnchor?.sectionId ?? chapter.sections[0]?.id ?? ''
    const sectionTitle = chapter.sections.find((section) => section.id === sectionId)?.title ?? chapter.title
    const anchor = anchorForPoint(syncAnchor, chapter)
    const record: BookSlideSearchRecord = {
      id: `${chapterKey}:${source.lang}:slide:${slideNumber}`,
      kind: 'slide',
      lang: source.lang,
      chapterKey,
      chapterTitle: chapter.title,
      sectionId,
      sectionTitle,
      blockIndex: syncAnchor?.blockIndex ?? -1,
      blockType: 'slide',
      slideNumber,
      title: slide.title,
      href: hrefForSlideRecord(chapterKey, source.lang, anchor),
      imageSrc,
      sourcePath: slideSourcePath(imageSrc),
      access: accessForChapter(chapterKey),
    }

    if (number !== undefined) record.chapterNumber = number
    records.push(record)
  })

  return records
}

export function getChapterSlideVisuals(key: string): { slideCount: number; podalZoneSlideCount: number } {
  return computeSlideVisuals(slideVisualSources[key])
}

export function getBookSlideSearchIndex(lang: Lang | 'all' = 'all'): BookSlideSearchRecord[] {
  if (!cachedSlideSearchIndex) {
    const seenImages = new Set<string>()
    cachedSlideSearchIndex = Object.entries(slideSearchSources).flatMap(([chapterKey, sources]) =>
      sources.flatMap((source) => buildSlideRecordsForSource(chapterKey, source, seenImages))
    )
  }

  return lang === 'all'
    ? cachedSlideSearchIndex
    : cachedSlideSearchIndex.filter((record) => record.lang === lang)
}
