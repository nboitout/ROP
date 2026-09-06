import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter21En } from '../content/chapter21.en'
import { chapter21Fr } from '../content/chapter21.fr'
import {
  chapter21HalfBreaks,
  chapter21SlideAnchors,
  chapter21SlideAnchorsEn,
  chapter21Slides,
  chapter21SlidesEn,
} from '../content/chapter21.slidesync'
import type { Block, Chapter } from '../content/types'
import { integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const contentBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.filter((block) => block.type !== 'xref'),
)
const references = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks.flatMap((block) => [
  ...(block.type === 'xref' ? [block] : []),
  ...(block.xrefs ?? []).map((xref) => ({ type: 'xref' as const, ...xref })),
]))
const publicPath = (src: string) => `public${decodeURIComponent(src.split('?', 1)[0])}`

test('Chapter 21 English content preserves the final French structure and canonical figures', () => {
  assert.equal(chapter21Fr.sections.length, 10)
  assert.equal(chapter21En.sections.length, 10)
  assert.equal(contentBlocks(chapter21Fr).length, 74)
  assert.equal(contentBlocks(chapter21En).length, 74)
  assert.deepEqual(chapter21En.sections.map(({ id }) => id), chapter21Fr.sections.map(({ id }) => id))

  for (const [index, frenchSection] of chapter21Fr.sections.entries()) {
    const englishSection = chapter21En.sections[index]
    assert.deepEqual(
      englishSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      frenchSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      `non-reference block sequence differs in ${frenchSection.id}`,
    )
    assert.deepEqual(
      englishSection.blocks.filter((block) => block.type === 'bullets').map((block) => block.items.length),
      frenchSection.blocks.filter((block) => block.type === 'bullets').map((block) => block.items.length),
      `bullet-item structure differs in ${frenchSection.id}`,
    )
  }

  const figures = contentBlocks(chapter21En).filter(
    (block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure',
  )
  assert.equal(figures.length, 5)
  assert.deepEqual(
    contentBlocks(chapter21En).flatMap((block, index) => block.type === 'figure' ? [index] : []),
    contentBlocks(chapter21Fr).flatMap((block, index) => block.type === 'figure' ? [index] : []),
  )
  assert.deepEqual(figures.map(({ src }) => src.split('/').at(-1)), [
    'figure-21-08.png',
    'figure-21-02.png',
    'figure-21-04.png',
    'figure-21-06.png',
    'figure-21-10.png',
  ])
  for (const figure of figures) {
    assert.match(figure.src, /^\/chapter-21\/EN\/Cartography\//)
    assert.ok(existsSync(publicPath(figure.src)), `missing figure ${figure.src}`)
  }

  const allText = JSON.stringify(chapter21En)
  assert.match(allText, /pudendal nerve/i)
  assert.match(allText, /inferior hypogastric plexus/i)
  assert.match(allText, /corpora cavernosa/i)
  assert.match(allText, /olfactory nerve \(CN I\)/i)
  assert.doesNotMatch(allText, /\(Figures? [\d.]+/)
})

test('Chapter 21 has exact English cross-reference parity and resolvable local targets', () => {
  const french = references(chapter21Fr)
  const english = references(chapter21En)
  assert.equal(french.length, 9)
  assert.equal(english.length, 9)
  assert.ok(english.every(({ href }) => href.includes('lang=en')))
  assert.deepEqual(
    english.map(({ href }) => new URL(href, 'https://rop.test').pathname),
    french.map(({ href }) => new URL(href, 'https://rop.test').pathname),
  )

  const selfReference = english.find(({ href }) => href.includes('/chapitre-21?'))
  assert.ok(selfReference)
  assert.equal(new URL(selfReference.href, 'https://rop.test').hash, '#p-relations-viscero-emotionnelles-0')
  assert.equal(chapter21En.sections.find(({ id }) => id === 'relations-viscero-emotionnelles')?.blocks[0]?.type, 'para')
})

test('Chapter 21 exposes the complete canonical 17-slide English deck without runtime augmentation', () => {
  assert.equal(chapter21Slides.length, 17)
  assert.equal(chapter21SlidesEn.length, 17)
  assert.equal(classicSlideDecks['chapter-21'].en?.length, 17)
  assert.equal(chapter21SlidesEn[5].src, '/chapter-21/EN/Images/NCH 21 EN IMG 6 V2.png')
  assert.deepEqual(chapter21SlidesEn.slice(11).map(({ src }) => src.split('/').at(-1)), [
    'figure-21-01.png',
    'figure-21-03.png',
    'figure-21-05.png',
    'figure-21-07.png',
    'figure-21-09.png',
    'figure-21-11.png',
  ])

  const slidesByHash = new Map<string, string[]>()
  for (const slide of chapter21SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), `missing slide ${slide.src}`)
    const hash = createHash('sha256').update(readFileSync(publicPath(slide.src))).digest('hex')
    slidesByHash.set(hash, [...(slidesByHash.get(hash) ?? []), slide.src])
  }
  assert.deepEqual([...slidesByHash.values()].filter((paths) => paths.length > 1), [])

  const beforeFigures = contentBlocks(chapter21En).filter(({ type }) => type === 'figure').length
  integrateEnglishReflexPhotos(chapter21En)
  assert.equal(contentBlocks(chapter21En).filter(({ type }) => type === 'figure').length, beforeFigures)
  const effective = integrateEnglishReflexDeck(chapter21En, chapter21SlidesEn, chapter21SlideAnchorsEn)
  assert.equal(effective.slides.length, 17)
  assert.equal(effective.anchors.length, 17)
  assert.deepEqual(effective.slides, chapter21SlidesEn)
  assert.deepEqual(effective.anchors, chapter21SlideAnchorsEn)
})

test('Chapter 21 English anchors and page breaks mirror French and every coordinate resolves', () => {
  assert.equal(chapter21SlideAnchors.length, 17)
  assert.deepEqual(chapter21SlideAnchorsEn, chapter21SlideAnchors)
  const sections = new Map(chapter21En.sections.map((section) => [section.id, section.blocks]))
  for (const anchor of chapter21SlideAnchorsEn) {
    const blocks = sections.get(anchor.sectionId)
    assert.ok(blocks, `unknown anchor section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length, `invalid anchor ${JSON.stringify(anchor.slide)}`)
    if (anchor.itemIndex !== undefined) {
      const block = blocks[anchor.blockIndex]
      assert.equal(block?.type, 'bullets')
      assert.ok(block.type === 'bullets' && anchor.itemIndex >= 0 && anchor.itemIndex < block.items.length)
    }
    if (anchor.end) {
      const endBlocks = sections.get(anchor.end.sectionId)
      assert.ok(endBlocks)
      assert.ok(anchor.end.blockIndex >= -1 && anchor.end.blockIndex < endBlocks.length)
      if (anchor.end.itemIndex !== undefined) {
        const endBlock = endBlocks[anchor.end.blockIndex]
        assert.equal(endBlock?.type, 'bullets')
        assert.ok(endBlock.type === 'bullets' && anchor.end.itemIndex >= 0 && anchor.end.itemIndex < endBlock.items.length)
      }
    }
  }

  assert.deepEqual(chapter21HalfBreaks, [
    { sectionId: 'innervation', blockIndex: -1 },
    { sectionId: 'physiologie', blockIndex: -1 },
    { sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 },
  ])
})
