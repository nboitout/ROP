import { chapterKeyFromHref, readerXrefHref } from '../../lib/access'
import {
  getChapterKeys,
  getChapterTranslations,
  type ChapterKey,
} from '../../content/registry'
import type { Block, Chapter, CrossReference } from '../../content/types'

export type InventoryLanguage = 'fr' | 'en'

export type RenderedCrossReference = {
  chapterKey: ChapterKey
  lang: InventoryLanguage
  sectionId: string
  blockIndex: number
  sourceBlockType: Block['type']
  placement: 'standalone' | 'attached'
  sourceAnchorId: string
  reference: CrossReference
  renderedHref: string
}

export function expectedReaderPath(chapterKey: string) {
  if (chapterKey === 'introduction') return '/introduction'
  if (chapterKey === 'chapter-2') return '/lecture/traitement-rop'
  return `/lecture/${chapterKey.replace(/^chapter-/, 'chapitre-')}`
}

export function inventoryRenderedCrossReferences(): RenderedCrossReference[] {
  return getChapterKeys().flatMap((chapterKey) => {
    return (['fr', 'en'] as const).flatMap((lang) => {
      const chapter = getChapterTranslations(chapterKey)[lang]
      if (!chapter) return []

      return chapter.sections.flatMap((section) => section.blocks.flatMap((block, blockIndex) => {
        const sourceAnchorId = `p-${section.id}-${blockIndex}`
        const references: Array<{ reference: CrossReference; placement: 'standalone' | 'attached' }> = [
          ...(block.type === 'xref' ? [{ reference: block, placement: 'standalone' as const }] : []),
          ...(block.xrefs ?? []).map((reference) => ({ reference, placement: 'attached' as const })),
        ]
        return references.map(({ reference, placement }) => ({
          chapterKey,
          lang,
          sectionId: section.id,
          blockIndex,
          sourceBlockType: block.type,
          placement,
          sourceAnchorId,
          reference,
          renderedHref: readerXrefHref(reference.href, chapterKey, false, sourceAnchorId, lang),
        }))
      }))
    })
  })
}

export function destinationChapter(entry: RenderedCrossReference): Chapter | undefined {
  const key = chapterKeyFromHref(entry.renderedHref)
  return key ? getChapterTranslations(key)[entry.lang] : undefined
}

export function destinationIdExists(chapter: Chapter, hash: string): boolean {
  if (!hash) return true
  const decoded = decodeURIComponent(hash)
  if (decoded.startsWith('#sec-')) {
    return chapter.sections.some((section) => section.id === decoded.slice(5))
  }
  const paragraph = decoded.match(/^#p-(.*)-(\d+)$/)
  if (!paragraph) return false
  const section = chapter.sections.find((candidate) => candidate.id === paragraph[1])
  return !!section && Number(paragraph[2]) < section.blocks.length
}

export function semanticTarget(entry: RenderedCrossReference): string {
  const url = new URL(entry.renderedHref, 'https://rop.test')
  return `${url.pathname}${url.hash}`
}
