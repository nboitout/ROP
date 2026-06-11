import type { Block, Chapter } from '@/content/types'

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

export function chapterMeta(chapter: Chapter): string {
  const { readingMinutes, figureCount } = chapterStats(chapter)
  const time = `~${readingMinutes} min`
  return figureCount > 0 ? `${time} · ${figureCount} illustration${figureCount > 1 ? 's' : ''}` : time
}
