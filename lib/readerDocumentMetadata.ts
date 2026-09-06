import type { Metadata } from 'next'
import type { Chapter } from '@/content/types'

export type ReaderMode = 'classic' | 'synchronized'

export function englishReaderTitle(chapter: Chapter, mode: ReaderMode): string {
  const chapterLabel = chapter.number
    ? `Chapter ${chapter.number} — ${chapter.title}`
    : chapter.title
  const modeLabel = mode === 'synchronized' ? ' — Synchronized reading' : ''
  return `${chapterLabel}${modeLabel} · R.O.P. · Guy Boitout`
}

export function englishReaderDescription(chapter: Chapter, mode: ReaderMode): string {
  const subject = chapter.number
    ? `Chapter ${chapter.number}, ${chapter.title}`
    : chapter.title
  const format = mode === 'synchronized'
    ? 'Read the synchronized text-and-slide edition'
    : 'Read the illustrated online edition'
  return `${format} of ${subject} in Occipito-Podal Reflexotherapy.`
}

export function englishReaderMetadata(
  chapter: Chapter,
  mode: ReaderMode,
  fallback: Metadata,
): Metadata {
  return {
    ...fallback,
    title: englishReaderTitle(chapter, mode),
    description: englishReaderDescription(chapter, mode),
  }
}
