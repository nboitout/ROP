import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import test from 'node:test'
import { introductionFr } from '../content/introduction.fr'
import { chapter0En } from '../content/chapter0.en'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter0Slides, chapter0SlidesEn, chapter0SlideAnchors, chapter0SlideAnchorsEn, type SyncAnchor } from '../content/chapter0.slidesync'
import { getChapter } from '../content/registry'
import { getBookSlideSearchIndex, getChapterSlideVisuals } from '../content/slidesyncRegistry'
import type { Block, Chapter } from '../content/types'
import { readerXrefHref } from '../lib/access'

const root = fileURLToPath(new URL('..', import.meta.url))
const blocks = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks)
const figures = (chapter: Chapter) => blocks(chapter).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
const bibliography = (chapter: Chapter) => chapter.sections.at(-1)?.blocks ?? []
const bibliographyEntries = (chapter: Chapter) => bibliography(chapter).flatMap((block) => block.type === 'bullets' ? block.items : [])
const normalizedTypes = (chapter: Chapter) => chapter.sections.map((section) => section.blocks.filter((block) => block.type !== 'xref').map((block) => block.type))

function assetPath(src: string): string {
  return `${root}/public/${decodeURIComponent(src).replace(/^\//, '')}`
}

function assertValidAnchors(chapter: Chapter, anchors: SyncAnchor[], slideCount: number) {
  const coordinates = (sectionId: string, blockIndex: number, itemIndex?: number) => {
    const section = chapter.sections.find((candidate) => candidate.id === sectionId)
    assert.ok(section, `missing section ${sectionId}`)
    assert.ok(blockIndex >= -1 && blockIndex <= section.blocks.length, `invalid block ${sectionId}:${blockIndex}`)
    if (itemIndex !== undefined) {
      const block = section.blocks[blockIndex]
      assert.ok(block?.type === 'bullets' || block?.type === 'numbered' || block?.type === 'leadBullets', `invalid item block ${sectionId}:${blockIndex}`)
      assert.ok(itemIndex >= 0 && itemIndex < block.items.length, `invalid item ${sectionId}:${blockIndex}:${itemIndex}`)
    }
  }

  const covered = new Set<number>()
  for (const anchor of anchors) {
    coordinates(anchor.sectionId, anchor.blockIndex, anchor.itemIndex)
    if (anchor.end) coordinates(anchor.end.sectionId, anchor.end.blockIndex, anchor.end.itemIndex)
    for (const slide of Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]) {
      assert.ok(slide >= 1 && slide <= slideCount, `invalid slide ${slide}`)
      covered.add(slide)
    }
  }
  assert.deepEqual([...covered].sort((a, b) => a - b), Array.from({ length: slideCount }, (_, index) => index + 1))
}

test('Chapter 0 EN runtime mirrors the canonical FR structure and inventory', () => {
  assert.equal(chapter0En.sections.length, 17)
  assert.equal(blocks(introductionFr).length, 120)
  assert.equal(blocks(chapter0En).length, 120)
  assert.deepEqual(chapter0En.sections.map((section) => section.id), introductionFr.sections.map((section) => section.id))
  assert.deepEqual(normalizedTypes(chapter0En), normalizedTypes(introductionFr))
  assert.equal(blocks(introductionFr).filter((block) => block.type !== 'xref').length, 119)
  assert.equal(blocks(chapter0En).filter((block) => block.type !== 'xref').length, 119)
  assert.equal(figures(introductionFr).length, 6)
  assert.equal(figures(chapter0En).length, 6)
  assert.equal(blocks(introductionFr).filter((block) => block.type === 'xref').length, 1)
  assert.equal(blocks(chapter0En).filter((block) => block.type === 'xref').length, 1)
  assert.equal(bibliographyEntries(introductionFr).length, 18)
  assert.equal(bibliographyEntries(chapter0En).length, 18)
  assert.equal(introductionFr.clinicalCase, undefined)
  assert.equal(chapter0En.clinicalCase, undefined)
  assert.strictEqual(getChapter('introduction', 'en').chapter, chapter0En)
})

test('Chapter 0 bibliography preserves every cited source and DOI', () => {
  const fr = bibliographyEntries(introductionFr).map((entry) => entry.replace(/^\d+\.\s*/, ''))
  const en = bibliographyEntries(chapter0En).map((entry) => entry.replace(/^\d+\.\s*/, ''))
  assert.deepEqual(en, fr)
  assert.deepEqual(en.flatMap((entry) => entry.match(/doi:[^\s.]+(?:\.[^\s.]+)*/gi) ?? []), fr.flatMap((entry) => entry.match(/doi:[^\s.]+(?:\.[^\s.]+)*/gi) ?? []))
})

test('Chapter 0 cross-reference resolves and returns to its exact EN passage', () => {
  const section = chapter0En.sections[8]
  const blockIndex = section.blocks.findIndex((block) => block.type === 'xref')
  assert.equal(blockIndex, 6)
  const xref = section.blocks[blockIndex]
  assert.equal(xref.type, 'xref')
  if (xref.type !== 'xref') return
  assert.equal(xref.href, '/fondements-neuro-anatomiques?lang=en')
  const sourceAnchor = `p-${section.id}-${blockIndex}`
  const resolved = new URL(readerXrefHref(xref.href, 'introduction', false, sourceAnchor, 'en'), 'https://rop.test')
  assert.equal(resolved.pathname, '/fondements-neuro-anatomiques')
  assert.equal(resolved.searchParams.get('xrefBack'), `/introduction?lang=en#${sourceAnchor}`)
})

test('Chapter 0 slides, assets, anchors, and effective integration are canonical', () => {
  assert.equal(chapter0Slides.length, 6)
  assert.equal(chapter0SlidesEn.length, 6)
  assert.equal(new Set(chapter0Slides.map((slide) => slide.src)).size, 6)
  assert.equal(new Set(chapter0SlidesEn.map((slide) => slide.src)).size, 6)
  assert.ok(chapter0SlidesEn[1].src.endsWith('IMG%202%20V2.png'))
  for (const slide of [...chapter0Slides, ...chapter0SlidesEn]) assert.ok(existsSync(assetPath(slide.src)), `missing ${slide.src}`)

  assertValidAnchors(introductionFr, chapter0SlideAnchors, chapter0Slides.length)
  assertValidAnchors(chapter0En, chapter0SlideAnchorsEn, chapter0SlidesEn.length)
  assert.deepEqual(chapter0SlideAnchorsEn, chapter0SlideAnchors)
  assert.equal(chapter0SlideAnchors.length, 6)
  assert.equal(chapter0SlideAnchorsEn.length, 6)

  assert.strictEqual(classicSlideDecks.introduction.fr, chapter0Slides)
  assert.strictEqual(classicSlideDecks.introduction.en, chapter0SlidesEn)
  assert.equal(getChapter('introduction', 'fr').chapter.slideDeck?.length, 6)
  assert.equal(getChapter('introduction', 'en').chapter.slideDeck?.length, 6)
  assert.deepEqual(getChapterSlideVisuals('introduction'), { slideCount: 6, podalZoneSlideCount: 0 })
  assert.equal(getBookSlideSearchIndex('fr').filter((record) => record.chapterKey === 'introduction').length, 6)
  assert.equal(getBookSlideSearchIndex('en').filter((record) => record.chapterKey === 'introduction').length, 6)

  assert.ok(figures(introductionFr).every((figure) => figure.syncHide), 'FR inline deck figures must be hidden in sync mode')
  assert.ok(figures(chapter0En).every((figure) => figure.syncHide), 'EN inline deck figures must be hidden in sync mode')
  assert.deepEqual(figures(introductionFr).map((figure) => Number(figure.src.match(/figure-0-(\d+)/)?.[1])), [1, 2, 4, 5, 6, 3])
  assert.deepEqual(figures(chapter0En).map((figure) => Number(decodeURIComponent(figure.src).match(/IMG (\d+)/)?.[1])), [1, 2, 4, 5, 6, 3])
})
