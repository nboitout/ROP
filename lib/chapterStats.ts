import type { Block, Chapter } from '@/content/types'
import type { Lang } from '@/app/i18n/translations'

const META_LABELS: Record<Lang, { perMin: (m: number) => string; perFig: (f: number) => string }> = {
  fr: { perMin: (m) => `~${m} min de lecture`,       perFig: (f) => `~${f} illustration${f > 1 ? 's' : ''}` },
  en: { perMin: (m) => `~${m} min read`,             perFig: (f) => `~${f} illustration${f > 1 ? 's' : ''}` },
  de: { perMin: (m) => `~${m} Min. Lektüre`,         perFig: (f) => `~${f} Illustration${f > 1 ? 'en' : ''}` },
  es: { perMin: (m) => `~${m} min de lectura`,       perFig: (f) => `~${f} ilustración${f > 1 ? 'es' : ''}` },
  it: { perMin: (m) => `~${m} min di lettura`,       perFig: (f) => `~${f} illustrazion${f > 1 ? 'i' : 'e'}` },
}

const WORDS_PER_MINUTE = 150

function wordsInBlock(block: Block): number {
  const count = (s: string) => s.trim().split(/\s+/).filter(Boolean).length
  switch (block.type) {
    case 'para':
    case 'sub':
      return count(block.text)
    case 'lead':
      return count(block.label) + count(block.text)
    case 'bullets':
      return block.items.reduce((n, s) => n + count(s), 0)
    case 'leadBullets':
      return block.items.reduce((n, { label, text }) => n + count(label) + count(text), 0)
    case 'rop':
      return block.body.reduce((n, s) => n + count(s), 0)
    case 'xref':
      return count(block.label) + count(block.text ?? '')
    case 'figure':
      return 0
  }
}

export function chapterStats(chapter: Chapter): { readingMinutes: number; figureCount: number } {
  let wordCount = 0
  let figureCount = 0

  for (const section of chapter.sections) {
    wordCount += section.title.trim().split(/\s+/).filter(Boolean).length
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
