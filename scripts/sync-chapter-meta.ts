#!/usr/bin/env node
// Computes, for every chapter of the book (from the French canonical content
// and the reading-mode slide decks), the reading time and the three visual
// counts surfaced on the public homepage:
//
//   photos         — figure blocks embedded in the chapter text
//   slides         — anatomy / physiology plates of the reading deck
//   cartographies  — reflex-zone maps of the reading deck
//
// The result is written to lib/chapterMetaSnapshot.ts so the (client-side)
// homepage table of contents can display them without importing any chapter
// content.  Run daily via GitHub Actions; commit the output when it changes.

import { writeFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { chapterStats } from '../lib/chapterStats.ts'
import { computeSlideVisuals, type SlideVisualSource } from '../lib/slideVisuals.ts'
import type { Chapter } from '../content/types.ts'

import { introductionFr } from '../content/introduction.fr.ts'
import { chapter1Fr } from '../content/chapter1.fr.ts'
import { chapter2Fr } from '../content/chapter2.fr.ts'
import { chapter3Fr } from '../content/chapter3.fr.ts'
import { chapter4Fr } from '../content/chapter4.fr.ts'
import { chapter5Fr } from '../content/chapter5.fr.ts'
import { chapter6Fr } from '../content/chapter6.fr.ts'
import { chapter7Fr } from '../content/chapter7.fr.ts'
import { chapter8Fr } from '../content/chapter8.fr.ts'
import { chapter9Fr } from '../content/chapter9.fr.ts'
import { chapter10Fr } from '../content/chapter10.fr.ts'
import { chapter11Fr } from '../content/chapter11.fr.ts'
import { chapter12Fr } from '../content/chapter12.fr.ts'
import { chapter13Fr } from '../content/chapter13.fr.ts'
import { chapter14Fr } from '../content/chapter14.fr.ts'
import { chapter15Fr } from '../content/chapter15.fr.ts'
import { chapter16Fr } from '../content/chapter16.fr.ts'
import { chapter17Fr } from '../content/chapter17.fr.ts'
import { chapter18Fr } from '../content/chapter18.fr.ts'
import { chapter19Fr } from '../content/chapter19.fr.ts'
import { chapter20Fr } from '../content/chapter20.fr.ts'
import { chapter21Fr } from '../content/chapter21.fr.ts'

import { chapter1Slides, chapter1SlideAnchors } from '../content/chapter1.slidesync.ts'
import { chapter2Slides, chapter2SlideAnchorsFr } from '../content/chapter2.slidesync.ts'
import { chapter3Slides, chapter3SlideAnchors } from '../content/chapter3.slidesync.ts'
import { chapter4Slides, chapter4SlideAnchors } from '../content/chapter4.slidesync.ts'
import { chapter5Slides, chapter5SlideAnchors } from '../content/chapter5.slidesync.ts'
import { chapter6Slides, chapter6SlideAnchors } from '../content/chapter6.slidesync.ts'
import { chapter7Slides, chapter7SlideAnchors } from '../content/chapter7.slidesync.ts'
import { chapter8Slides, chapter8SlideAnchors } from '../content/chapter8.slidesync.ts'
import { chapter9Slides, chapter9SlideAnchors } from '../content/chapter9.slidesync.ts'
import { chapter10Slides, chapter10SlideAnchors } from '../content/chapter10.slidesync.ts'
import { chapter11Slides, chapter11SlideAnchors } from '../content/chapter11.slidesync.ts'
import { chapter12Slides, chapter12SlideAnchors } from '../content/chapter12.slidesync.ts'
import { chapter13Slides, chapter13SlideAnchors } from '../content/chapter13.slidesync.ts'
import { chapter14Slides, chapter14SlideAnchorsFr } from '../content/chapter14.slidesync.ts'
import { chapter15Slides, chapter15SlideAnchors } from '../content/chapter15.slidesync.ts'
import { chapter16Slides, chapter16SlideAnchors } from '../content/chapter16.slidesync.ts'
import { chapter17Slides, chapter17SlideAnchors } from '../content/chapter17.slidesync.ts'
import { chapter18Slides, chapter18SlideAnchors } from '../content/chapter18.slidesync.ts'
import { chapter19Slides, chapter19SlideAnchors } from '../content/chapter19.slidesync.ts'
import { chapter20Slides, chapter20SlideAnchors } from '../content/chapter20.slidesync.ts'
import { chapter21Slides, chapter21SlideAnchors } from '../content/chapter21.slidesync.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))

type ChapterSource = {
  /** Registry key, also used as the snapshot key. */
  slug: string
  content: Chapter
  /** Reading-mode deck; the introduction has none. */
  deck?: SlideVisualSource
}

const chapters: ChapterSource[] = [
  { slug: 'introduction', content: introductionFr },
  { slug: 'chapter-1',    content: chapter1Fr,  deck: { slides: chapter1Slides,  anchors: chapter1SlideAnchors } },
  { slug: 'chapter-2',    content: chapter2Fr,  deck: { slides: chapter2Slides,  anchors: chapter2SlideAnchorsFr } },
  { slug: 'chapter-3',    content: chapter3Fr,  deck: { slides: chapter3Slides,  anchors: chapter3SlideAnchors } },
  { slug: 'chapter-4',    content: chapter4Fr,  deck: { slides: chapter4Slides,  anchors: chapter4SlideAnchors } },
  { slug: 'chapter-5',    content: chapter5Fr,  deck: { slides: chapter5Slides,  anchors: chapter5SlideAnchors } },
  { slug: 'chapter-6',    content: chapter6Fr,  deck: { slides: chapter6Slides,  anchors: chapter6SlideAnchors } },
  { slug: 'chapter-7',    content: chapter7Fr,  deck: { slides: chapter7Slides,  anchors: chapter7SlideAnchors } },
  { slug: 'chapter-8',    content: chapter8Fr,  deck: { slides: chapter8Slides,  anchors: chapter8SlideAnchors } },
  { slug: 'chapter-9',    content: chapter9Fr,  deck: { slides: chapter9Slides,  anchors: chapter9SlideAnchors } },
  { slug: 'chapter-10',   content: chapter10Fr, deck: { slides: chapter10Slides, anchors: chapter10SlideAnchors } },
  { slug: 'chapter-11',   content: chapter11Fr, deck: { slides: chapter11Slides, anchors: chapter11SlideAnchors } },
  { slug: 'chapter-12',   content: chapter12Fr, deck: { slides: chapter12Slides, anchors: chapter12SlideAnchors } },
  { slug: 'chapter-13',   content: chapter13Fr, deck: { slides: chapter13Slides, anchors: chapter13SlideAnchors } },
  { slug: 'chapter-14',   content: chapter14Fr, deck: { slides: chapter14Slides, anchors: chapter14SlideAnchorsFr } },
  { slug: 'chapter-15',   content: chapter15Fr, deck: { slides: chapter15Slides, anchors: chapter15SlideAnchors } },
  { slug: 'chapter-16',   content: chapter16Fr, deck: { slides: chapter16Slides, anchors: chapter16SlideAnchors } },
  { slug: 'chapter-17',   content: chapter17Fr, deck: { slides: chapter17Slides, anchors: chapter17SlideAnchors } },
  { slug: 'chapter-18',   content: chapter18Fr, deck: { slides: chapter18Slides, anchors: chapter18SlideAnchors } },
  { slug: 'chapter-19',   content: chapter19Fr, deck: { slides: chapter19Slides, anchors: chapter19SlideAnchors } },
  { slug: 'chapter-20',   content: chapter20Fr, deck: { slides: chapter20Slides, anchors: chapter20SlideAnchors } },
  { slug: 'chapter-21',   content: chapter21Fr, deck: { slides: chapter21Slides, anchors: chapter21SlideAnchors } },
]

type Snapshot = {
  readingMinutes: number
  photoCount: number
  slideCount: number
  cartographyCount: number
  visualCount: number
}

const snapshots = chapters.map(({ slug, content, deck }) => {
  const { readingMinutes, figureCount } = chapterStats(content)
  const { slideCount, podalZoneSlideCount } = computeSlideVisuals(deck)

  const snapshot: Snapshot = {
    readingMinutes,
    photoCount: figureCount,
    slideCount: Math.max(0, slideCount - podalZoneSlideCount),
    cartographyCount: podalZoneSlideCount,
    visualCount: figureCount + slideCount,
  }

  console.log(
    `${slug.padEnd(13)} ${String(snapshot.readingMinutes).padStart(3)} min · `
    + `${String(snapshot.photoCount).padStart(3)} photos · `
    + `${String(snapshot.slideCount).padStart(3)} slides · `
    + `${String(snapshot.cartographyCount).padStart(3)} cartographies`,
  )

  return { slug, snapshot }
})

const totals = snapshots.reduce(
  (sum, { snapshot }) => ({
    chapterCount: sum.chapterCount + 1,
    readingMinutes: sum.readingMinutes + snapshot.readingMinutes,
    photoCount: sum.photoCount + snapshot.photoCount,
    slideCount: sum.slideCount + snapshot.slideCount,
    cartographyCount: sum.cartographyCount + snapshot.cartographyCount,
    visualCount: sum.visualCount + snapshot.visualCount,
  }),
  { chapterCount: 0, readingMinutes: 0, photoCount: 0, slideCount: 0, cartographyCount: 0, visualCount: 0 },
)

console.log(
  `\nTOTAL         ${totals.readingMinutes} min · ${totals.photoCount} photos · `
  + `${totals.slideCount} slides · ${totals.cartographyCount} cartographies · ${totals.visualCount} visuals`,
)

const entries = snapshots.map(({ slug, snapshot }) =>
  `  '${slug}': { readingMinutes: ${snapshot.readingMinutes}, photoCount: ${snapshot.photoCount},`
  + ` slideCount: ${snapshot.slideCount}, cartographyCount: ${snapshot.cartographyCount},`
  + ` visualCount: ${snapshot.visualCount} },`
)

const output = `// AUTO-GENERATED by scripts/sync-chapter-meta.ts — do not edit manually.
// Recomputed daily from the chapter content files via GitHub Actions.
//
//   photoCount        photos embedded in the chapter text
//   slideCount        anatomy / physiology plates of the reading deck
//   cartographyCount  reflex-zone maps of the reading deck
//   visualCount       photoCount + slideCount + cartographyCount

export type ChapterMetaSnapshot = {
  readingMinutes: number
  photoCount: number
  slideCount: number
  cartographyCount: number
  visualCount: number
}

export const chapterMetaSnapshot: Record<string, ChapterMetaSnapshot> = {
${entries.join('\n')}
}

export const bookVisualTotals = {
  chapterCount: ${totals.chapterCount},
  readingMinutes: ${totals.readingMinutes},
  photoCount: ${totals.photoCount},
  slideCount: ${totals.slideCount},
  cartographyCount: ${totals.cartographyCount},
  visualCount: ${totals.visualCount},
}
`

const outPath = resolve(__dirname, '../lib/chapterMetaSnapshot.ts')
writeFileSync(outPath, output, 'utf8')
console.log(`Written → ${outPath}`)
