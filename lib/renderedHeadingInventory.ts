import type { Chapter } from '@/content/types'
import { isRopInterestSection } from '@/lib/ropInterestSection'

export type RenderedHeading = {
  level: 'h2' | 'h3'
  sectionId: string
  sectionIndex: number
  blockIndex: number
  title: string
  numberPrefix: string | null
  inSectionRail: boolean
}

export type SectionRailEntry = {
  sectionId: string
  sectionIndex: number
  title: string
  numberPrefix: string | null
}

const NUMBER_PREFIX = /^(\d+(?:\.\d+)*(?:[–-]\d+(?:\.\d+)*)?\.)\s+/

/** Extract the exact visible leading section number, including its final dot. */
export function extractHeadingNumberPrefix(title: string): string | null {
  return title.trim().match(NUMBER_PREFIX)?.[1] ?? null
}

/** Remove only a visible leading section number; translated wording is retained. */
export function stripHeadingNumberPrefix(title: string): string {
  return title.trim().replace(NUMBER_PREFIX, '')
}

/** Mirrors the content H2/H3 contract shared by ChapterReader and SlideSyncReader. */
export function extractRenderedHeadingInventory(chapter: Chapter): RenderedHeading[] {
  return chapter.sections.flatMap((section, sectionIndex) => {
    const sectionHeading: RenderedHeading[] = isRopInterestSection(section)
      ? []
      : [{
          level: 'h2',
          sectionId: section.id,
          sectionIndex,
          blockIndex: -1,
          title: section.title,
          numberPrefix: extractHeadingNumberPrefix(section.title),
          inSectionRail: !section.railHidden,
        }]

    const subheadings: RenderedHeading[] = section.blocks.flatMap((block, blockIndex) =>
      block.type === 'sub'
        ? [{
            level: 'h3',
            sectionId: section.id,
            sectionIndex,
            blockIndex,
            title: block.text,
            numberPrefix: extractHeadingNumberPrefix(block.text),
            inSectionRail: false,
          }]
        : [],
    )

    return [...sectionHeading, ...subheadings]
  })
}

/** Mirrors SlideSyncReader's section-navigation rail filtering and labels. */
export function extractSectionRailInventory(chapter: Chapter): SectionRailEntry[] {
  return chapter.sections.flatMap((section, sectionIndex) => {
    if (isRopInterestSection(section) || section.railHidden) return []
    const title = section.railTitle ?? section.title
    return [{
      sectionId: section.id,
      sectionIndex,
      title,
      numberPrefix: extractHeadingNumberPrefix(title),
    }]
  })
}
