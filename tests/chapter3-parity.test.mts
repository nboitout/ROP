import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { chapter3ReworkFr } from '../content/chapter3-rework.fr'
import {
  chapter3ReworkSlideAnchors,
  chapter3ReworkSlideAnchorsEn,
  chapter3ReworkSlides,
  chapter3ReworkSlidesEn,
} from '../content/chapter3-rework.slidesync'
import { chapter3En } from '../content/chapter3.en'
import type { Block, Chapter } from '../content/types'

const contentBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.filter((block) => block.type !== 'xref'),
)

const crossReferences = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block) => [
    ...(block.type === 'xref' ? [block] : []),
    ...(block.xrefs ?? []).map((xref) => ({ type: 'xref' as const, ...xref })),
  ]),
)

const publicPath = (src: string) => `public${decodeURIComponent(src.split('?', 1)[0])}`

test('Chapter 3 English content has strict structural parity with canonical French', () => {
  assert.deepEqual(chapter3En.sections.map(({ id }) => id), chapter3ReworkFr.sections.map(({ id }) => id))
  assert.equal(contentBlocks(chapter3En).length, contentBlocks(chapter3ReworkFr).length)
  assert.equal(contentBlocks(chapter3En).length, 99)

  for (const [index, frenchSection] of chapter3ReworkFr.sections.entries()) {
    const englishSection = chapter3En.sections[index]
    assert.deepEqual(
      englishSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      frenchSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      `non-xref block sequence differs in ${frenchSection.id}`,
    )
  }

  const opening = chapter3En.sections[0].blocks[0]
  assert.deepEqual(opening, {
    type: 'note',
    label: 'LEVEL 1 OF THE ROP PROTOCOL',
    body: ['Level 1 of the ROP protocol — Regulation of higher centres'],
  })

  assert.equal(contentBlocks(chapter3En).filter((block) => block.type === 'rop').length, 7)
  const bibliography = chapter3En.sections.find(({ id }) => id === 'references-complementaires')
  assert.ok(bibliography)
  assert.equal(bibliography.blocks.length, 4)
  assert.ok(bibliography.blocks.every((block) => block.type === 'para'))
})

test('Chapter 3 English figures and cross-references are complete and English-only', () => {
  const figures = contentBlocks(chapter3En).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
  assert.equal(figures.length, 5)
  for (const figure of figures) {
    assert.match(figure.src, /^\/chapter-3\/EN\/Images\/.* V3\.png$/)
    assert.doesNotMatch(figure.src, /\/FR\//)
    assert.ok(existsSync(publicPath(figure.src)), `missing figure ${figure.src}`)
  }

  const xrefs = crossReferences(chapter3En)
  assert.equal(xrefs.length, 17)
  for (const xref of xrefs) {
    assert.doesNotMatch(xref.href, /lang=fr|\/FR\//)
    assert.ok(xref.label.length > 0)
    assert.ok(xref.href.startsWith('/lecture/') || xref.href.startsWith('/fondements-neuro-anatomiques'))
  }
})

test('Chapter 3 English slide deck mirrors the 23-slide French semantic order', () => {
  assert.equal(chapter3ReworkSlides.length, 23)
  assert.equal(chapter3ReworkSlidesEn.length, 23)
  assert.deepEqual(
    chapter3ReworkSlidesEn.map(({ src }) => src),
    [
      '/chapter-3/EN/Images/NCH 3 EN IMG 1.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 2 V2.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 3 V2.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 5 V2.png',
      '/chapter-3/EN/Images/NCH 3 EN SLIDE CAROTID NTS V3.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 6.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 13.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 14.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 15.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 4.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 7.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 8.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 9.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 10.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 12.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 17 V2.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 16.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 11.png',
      '/chapter-3/EN/Images/NCH 3 EN IMG 19.png',
      '/chapter-3/EN/Images/NCH 3 EN SLIDE BRAINSTEM CARTOGRAPHY V3.png',
      '/chapter-3/EN/Images/NCH 3 EN SLIDE LIMBIC CARTOGRAPHY V3.png',
      '/chapter-3/EN/Images/NCH 3 EN SLIDE DIENCEPHALON PITUITARY CARTOGRAPHY V3.png',
      '/chapter-3/EN/Images/NCH 3 EN SLIDE CORTEX ASCENDING PATHWAYS V3.png',
    ],
  )

  for (const slide of chapter3ReworkSlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), `missing slide ${slide.src}`)
  }
})

test('Chapter 3 English slide anchors exactly preserve canonical placement and page breaks', () => {
  assert.deepEqual(chapter3ReworkSlideAnchorsEn, chapter3ReworkSlideAnchors)
  assert.deepEqual(chapter3ReworkSlideAnchorsEn.map(({ slide }) => slide), Array.from({ length: 23 }, (_, index) => index + 1))

  const sections = new Map(chapter3En.sections.map((section) => [
    section.id,
    section.blocks.filter((block) => block.type !== 'xref'),
  ]))
  for (const anchor of chapter3ReworkSlideAnchorsEn) {
    const blocks = sections.get(anchor.sectionId)
    assert.ok(blocks, `unknown section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length, `invalid anchor for slide ${anchor.slide}`)
    if ('end' in anchor) {
      const endBlocks = sections.get(anchor.end.sectionId)
      assert.ok(endBlocks, `unknown end section ${anchor.end.sectionId}`)
      assert.ok(anchor.end.blockIndex >= -1 && anchor.end.blockIndex < endBlocks.length, `invalid end anchor for slide ${anchor.slide}`)
    }
  }
})
