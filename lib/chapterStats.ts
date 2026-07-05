import type { Block, Chapter } from '@/content/types'
import type { Lang } from '@/app/i18n/translations'

const META_LABELS: Record<Lang, { perMin: (m: number) => string; perFig: (f: number) => string }> = {
  fr: { perMin: (m) => `~${m} min de lecture`,       perFig: (f) => `~${f} illustration${f > 1 ? 's' : ''}` },
  en: { perMin: (m) => `~${m} min read`,             perFig: (f) => `~${f} illustration${f > 1 ? 's' : ''}` },
  de: { perMin: (m) => `~${m} Min. Lektüre`,         perFig: (f) => `~${f} Illustration${f > 1 ? 'en' : ''}` },
  es: { perMin: (m) => `~${m} min de lectura`,       perFig: (f) => `~${f} ilustración${f > 1 ? 'es' : ''}` },
  it: { perMin: (m) => `~${m} min di lettura`,       perFig: (f) => `~${f} illustrazion${f > 1 ? 'i' : 'e'}` },
  th: { perMin: (m) => `ประมาณ ${m} นาที`,          perFig: (f) => `ภาพประกอบ ${f} ภาพ` },
}

const WORDS_PER_MINUTE = 150
const LONG_SENTENCE_WORDS = 35
const LONG_PARAGRAPH_WORDS = 120

export type ChapterQualityVisualOptions = {
  slideCount?: number
  podalZoneSlideCount?: number
}

export type ChapterQualityMetrics = {
  wordCount: number
  readingMinutes: number
  sectionCount: number
  paragraphCount: number
  avgWordsPerSection: number
  avgWordsPerParagraph: number
  longestSectionWords: number
  bulletCount: number
  figureCount: number
  figuresPer1000Words: number
  slidesCount: number
  podalZoneSlideCount: number
  podalZoneSectionCount: number
  podalZonePhotoCount: number
  revisionSheetCount: number
  clinicalCaseCount: number
  supplementalResourceCount: number
  xrefCount: number
  ropBlockCount: number
  avgSentenceWords: number
  sentenceCount: number
  longSentenceCount: number
  longSentenceRate: number
  longParagraphCount: number
  figureMissingAltCount: number
  figureMissingCaptionCount: number
}

export type ChapterQualityIssue = {
  label: string
  tone: 'warning' | 'critical' | 'info'
}

function countWords(s: string): number {
  return s.match(/[\p{L}\p{N}]+(?:[’'-][\p{L}\p{N}]+)*/gu)?.length ?? 0
}

function splitSentences(s: string): string[] {
  return (
    s
      .replace(/\s+/g, ' ')
      .trim()
      .match(/[^.!?…]+(?:[.!?…]+|$)/g) ?? []
  )
    .map((sentence) => sentence.trim())
    .filter(Boolean)
}

function normalizeForSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u00df/g, 'ss')
    .toLowerCase()
}

function isPodalReflexText(value: string): boolean {
  const normalized = normalizeForSearch(value)
  const hasReflex = /reflex|reflej|rifless/.test(normalized)
  const hasPodal = /podal|plantar|plantaire|foot|feet|pied|fuss/.test(normalized)
  return hasReflex && hasPodal
}

function wordsInBlock(block: Block): number {
  switch (block.type) {
    case 'para':
    case 'sub':
      return countWords(block.text)
    case 'lead':
      return countWords(block.label) + countWords(block.text)
    case 'bullets':
      return block.items.reduce((n, s) => n + countWords(s), 0)
    case 'leadBullets':
      return block.items.reduce((n, { label, text }) => n + countWords(label) + countWords(text), 0)
    case 'rop':
      return block.body.reduce((n, s) => n + countWords(s), 0)
    case 'xref':
      return countWords(block.label) + countWords(block.text ?? '')
    case 'figure':
    case 'reflexAtlas':
      return 0
  }
}

function blockParagraphTexts(block: Block): string[] {
  switch (block.type) {
    case 'para':
    case 'sub':
      return [block.text]
    case 'lead':
      return [`${block.label} ${block.text}`.trim()]
    case 'bullets':
      return block.items
    case 'leadBullets':
      return block.items.map(({ label, text }) => `${label} ${text}`.trim())
    case 'rop':
      return block.body
    case 'xref':
      return [`${block.label} ${block.text ?? ''}`.trim()]
    case 'figure':
    case 'reflexAtlas':
      return []
  }
}

export function chapterStats(chapter: Chapter): { readingMinutes: number; figureCount: number } {
  let wordCount = 0
  let figureCount = 0

  for (const section of chapter.sections) {
    wordCount += countWords(section.title)
    for (const block of section.blocks) {
      if (block.type === 'figure') figureCount++
      else wordCount += wordsInBlock(block)
    }
  }

  return {
    readingMinutes: Math.ceil(wordCount / WORDS_PER_MINUTE),
    figureCount,
  }
}

export function chapterQualityMetrics(
  chapter: Chapter,
  visualOptions: ChapterQualityVisualOptions = {},
): ChapterQualityMetrics {
  let wordCount = 0
  let paragraphCount = 0
  let bulletCount = 0
  let figureCount = 0
  let podalZoneSectionCount = 0
  let podalZonePhotoCount = 0
  let xrefCount = 0
  let ropBlockCount = 0
  let sentenceCount = 0
  let sentenceWords = 0
  let longSentenceCount = 0
  let longParagraphCount = 0
  let figureMissingAltCount = 0
  let figureMissingCaptionCount = 0
  let longestSectionWords = 0

  for (const section of chapter.sections) {
    let sectionWords = countWords(section.title)
    const sectionIsPodalZone = isPodalReflexText(`${section.id} ${section.title}`)
    if (sectionIsPodalZone) podalZoneSectionCount++
    let insidePodalZone = sectionIsPodalZone

    for (const block of section.blocks) {
      sectionWords += wordsInBlock(block)

      if (block.type === 'figure') {
        figureCount++
        if (sectionIsPodalZone || insidePodalZone || isPodalReflexText(`${block.caption} ${block.alt}`)) {
          podalZonePhotoCount++
        }
        if (!block.alt.trim()) figureMissingAltCount++
        if (!block.caption.trim()) figureMissingCaptionCount++
        continue
      }
      if (block.type === 'sub') {
        insidePodalZone = sectionIsPodalZone || isPodalReflexText(block.text)
      }
      if (block.type === 'bullets') bulletCount += block.items.length
      if (block.type === 'leadBullets') bulletCount += block.items.length
      if (block.type === 'xref') xrefCount++
      if (block.type === 'rop') ropBlockCount++

      for (const text of blockParagraphTexts(block)) {
        const words = countWords(text)
        if (words === 0) continue
        paragraphCount++
        if (words >= LONG_PARAGRAPH_WORDS) longParagraphCount++

        const sentences = splitSentences(text)
        for (const sentence of sentences) {
          const wordsInSentence = countWords(sentence)
          if (wordsInSentence === 0) continue
          sentenceCount++
          sentenceWords += wordsInSentence
          if (wordsInSentence >= LONG_SENTENCE_WORDS) longSentenceCount++
        }
      }
    }
    wordCount += sectionWords
    longestSectionWords = Math.max(longestSectionWords, sectionWords)
  }

  const readingMinutes = Math.ceil(wordCount / WORDS_PER_MINUTE)
  const sectionCount = chapter.sections.length
  const slidesCount = visualOptions.slideCount ?? (chapter.slides ? 1 : 0)
  const podalZoneSlideCount = visualOptions.podalZoneSlideCount ?? 0
  const revisionSheetCount = chapter.revisionSheet ? 1 : 0
  const clinicalCaseCount = chapter.clinicalCase ? 1 : 0

  return {
    wordCount,
    readingMinutes,
    sectionCount,
    paragraphCount,
    avgWordsPerSection: sectionCount > 0 ? Math.round(wordCount / sectionCount) : 0,
    avgWordsPerParagraph: paragraphCount > 0 ? Math.round(wordCount / paragraphCount) : 0,
    longestSectionWords,
    bulletCount,
    figureCount,
    figuresPer1000Words: wordCount > 0 ? figureCount / (wordCount / 1000) : 0,
    slidesCount,
    podalZoneSlideCount,
    podalZoneSectionCount,
    podalZonePhotoCount,
    revisionSheetCount,
    clinicalCaseCount,
    supplementalResourceCount: (slidesCount > 0 ? 1 : 0) + revisionSheetCount + clinicalCaseCount,
    xrefCount,
    ropBlockCount,
    avgSentenceWords: sentenceCount > 0 ? Math.round(sentenceWords / sentenceCount) : 0,
    sentenceCount,
    longSentenceCount,
    longSentenceRate: sentenceCount > 0 ? longSentenceCount / sentenceCount : 0,
    longParagraphCount,
    figureMissingAltCount,
    figureMissingCaptionCount,
  }
}

export function chapterQualityIssues(
  metrics: ChapterQualityMetrics,
  translationIssues: ChapterQualityIssue[] = [],
): ChapterQualityIssue[] {
  const issues: ChapterQualityIssue[] = []

  if (metrics.wordCount < 1200) {
    issues.push({ label: 'Very short', tone: 'warning' })
  } else if (metrics.wordCount > 9000) {
    issues.push({ label: 'Very long', tone: 'info' })
  }

  if (metrics.wordCount >= 2500 && metrics.figureCount === 0) {
    issues.push({ label: 'No illustrations', tone: 'critical' })
  } else if (metrics.wordCount >= 4000 && metrics.figuresPer1000Words < 0.4) {
    issues.push({ label: 'Low visual density', tone: 'warning' })
  }

  if (metrics.supplementalResourceCount === 0) {
    issues.push({ label: 'No bonus resource', tone: 'info' })
  }

  if (metrics.longParagraphCount >= 3 || (metrics.paragraphCount > 0 && metrics.longParagraphCount / metrics.paragraphCount >= 0.12)) {
    issues.push({ label: 'Long paragraphs', tone: 'warning' })
  }

  if (metrics.longSentenceRate >= 0.18) {
    issues.push({ label: 'Long sentences', tone: 'warning' })
  }

  if (metrics.sectionCount >= 3 && metrics.wordCount > 0 && metrics.longestSectionWords / metrics.wordCount >= 0.4) {
    issues.push({ label: 'Uneven sections', tone: 'warning' })
  }

  if (metrics.figureMissingAltCount > 0 || metrics.figureMissingCaptionCount > 0) {
    issues.push({ label: 'Figure metadata', tone: 'critical' })
  }

  return [...issues, ...translationIssues]
}

export function chapterMeta(chapter: Chapter, lang: Lang = 'fr'): string {
  const { readingMinutes, figureCount } = chapterStats(chapter)
  const { perMin, perFig } = META_LABELS[lang]
  return figureCount > 0 ? `${perMin(readingMinutes)} · ${perFig(figureCount)}` : perMin(readingMinutes)
}

export function snapshotMeta(
  snapshot: { readingMinutes: number; figureCount: number },
  lang: Lang = 'fr',
): string {
  const { readingMinutes, figureCount } = snapshot
  const { perMin, perFig } = META_LABELS[lang]
  return figureCount > 0 ? `${perMin(readingMinutes)} · ${perFig(figureCount)}` : perMin(readingMinutes)
}
