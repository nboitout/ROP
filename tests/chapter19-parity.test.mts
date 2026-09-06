import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter19En } from '../content/chapter19.en'
import { chapter19Fr } from '../content/chapter19.fr'
import {
  chapter19HalfBreaks,
  chapter19SlideAnchors,
  chapter19SlideAnchorsEn,
  chapter19Slides,
  chapter19SlidesEn,
} from '../content/chapter19.slidesync'
import type { Block, Chapter } from '../content/types'
import { integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import { assertVisibleHeadingParity } from './helpers/headingParity.mts'

const contentBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.filter((block) => block.type !== 'xref'),
)
const references = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks.flatMap((block) => [
  ...(block.type === 'xref' ? [block] : []),
  ...(block.xrefs ?? []).map((xref) => ({ type: 'xref' as const, ...xref })),
]))
const publicPath = (src: string) => `public${decodeURIComponent(src.split('?', 1)[0])}`

const englishPhotos = [
  'Chapter19 Cartography and Photos - 2.png',
  'figure-19-16.png', 'figure-19-18.png', 'figure-19-06.png',
  'figure-19-08.png', 'figure-19-10.png', 'figure-19-12.png',
  'figure-19-20.png', 'figure-19-14.png', 'figure-19-22.png',
  'figure-19-02.png', 'figure-19-04.png',
]

test('Chapter 19 English content preserves canonical French structure and media order', () => {
  assert.equal(chapter19En.sections.length, 23)
  assert.equal(contentBlocks(chapter19En).length, 138)
  assert.deepEqual(chapter19En.sections.map(({ id }) => id), chapter19Fr.sections.map(({ id }) => id))
  assert.equal(contentBlocks(chapter19En).length, contentBlocks(chapter19Fr).length)
  for (const [index, frenchSection] of chapter19Fr.sections.entries()) {
    assert.deepEqual(
      chapter19En.sections[index].blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      frenchSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      `non-xref block sequence differs in ${frenchSection.id}`,
    )
  }

  const figures = contentBlocks(chapter19En).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
  assert.equal(figures.length, 12)
  const figurePositions = contentBlocks(chapter19En).flatMap((block, index) => block.type === 'figure' ? [index] : [])
  assert.deepEqual(figurePositions, [100, 101, 102, 106, 107, 108, 109, 110, 125, 126, 135, 136])
  assert.deepEqual(
    figurePositions,
    contentBlocks(chapter19Fr).flatMap((block, index) => block.type === 'figure' ? [index] : []),
  )
  assert.deepEqual(figures.map(({ src }) => src.split('/').at(-1)), englishPhotos)
  for (const figure of figures) {
    assert.match(figure.src, /^\/chapter-19\/EN\/Cartography\//)
    assert.ok(existsSync(publicPath(figure.src)), `missing figure ${figure.src}`)
  }

  const xrefs = references(chapter19En)
  assert.equal(xrefs.length, 11)
  assert.ok(xrefs.every(({ href }) => href.includes('lang=en')))
})

test('Chapter 19 preserves exact visible heading numbering, hierarchy, rail behavior and translated wording', () => {
  assertVisibleHeadingParity(chapter19Fr, chapter19En, 71, '24a06ca726a658e6acb109393d3d9222f83e25957c895aff23b460988612c6d1')
})

test('Chapter 19 exposes the canonical 48-slide English deck without runtime duplicates', () => {
  assert.equal(chapter19Slides.length, 48)
  assert.equal(chapter19SlidesEn.length, 48)
  assert.equal(classicSlideDecks['chapter-19'].en?.length, 48)
  assert.equal(chapter19SlidesEn[16].title, 'From Complaint to Referral')
  assert.deepEqual(chapter19SlidesEn.slice(36).map(({ src }) => src.split('/').at(-1)), [
    'figure-19-01.png', 'figure-19-03.png', 'figure-19-05.png', 'figure-19-07.png',
    'figure-19-09.png', 'figure-19-11.png', 'figure-19-13.png', 'figure-19-15.png',
    'figure-19-17.png', 'figure-19-19.png', 'figure-19-21.png',
    'Chapter19 Cartography and Photos - 1.png',
  ])
  for (const slide of chapter19SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), `missing slide ${slide.src}`)
  }

  const slidesByHash = new Map<string, string[]>()
  for (const slide of chapter19SlidesEn) {
    const hash = createHash('sha256').update(readFileSync(publicPath(slide.src))).digest('hex')
    slidesByHash.set(hash, [...(slidesByHash.get(hash) ?? []), slide.src])
  }
  // No duplicate is intentional in the canonical Chapter 19 EN deck.
  assert.deepEqual([...slidesByHash.values()].filter((paths) => paths.length > 1), [])

  const beforeFigures = contentBlocks(chapter19En).filter(({ type }) => type === 'figure').length
  integrateEnglishReflexPhotos(chapter19En)
  assert.equal(contentBlocks(chapter19En).filter(({ type }) => type === 'figure').length, beforeFigures)
  const integrated = integrateEnglishReflexDeck(chapter19En, chapter19SlidesEn, chapter19SlideAnchorsEn)
  assert.equal(integrated.slides.length, 48)
  assert.equal(integrated.anchors.length, chapter19SlideAnchorsEn.length)
})

test('Chapter 19 English anchors, grouped slides, media pairs and breaks resolve', () => {
  assert.equal(chapter19SlideAnchorsEn.length, 45)
  const sections = new Map(chapter19En.sections.map((section) => [section.id, section.blocks]))
  for (const anchor of chapter19SlideAnchorsEn) {
    const blocks = sections.get(anchor.sectionId)
    assert.ok(blocks, `unknown anchor section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length, `invalid anchor ${JSON.stringify(anchor.slide)}`)
    if (anchor.itemIndex !== undefined) {
      const block = blocks[anchor.blockIndex]
      assert.equal(block?.type, 'bullets')
      assert.ok(block.type === 'bullets' && anchor.itemIndex < block.items.length)
    }
    if (anchor.end) assert.deepEqual(anchor.end, { sectionId: anchor.sectionId, blockIndex: anchor.blockIndex })
  }

  assert.ok(chapter19SlideAnchorsEn.some(({ slide }) => Array.isArray(slide) && slide.join(',') === '16,17'))
  assert.ok(chapter19SlideAnchorsEn.some(({ slide }) => Array.isArray(slide) && slide.join(',') === '26,27'))
  assert.ok(chapter19SlideAnchorsEn.some(({ slide }) => Array.isArray(slide) && slide.join(',') === '28,29'))
  assert.equal(chapter19SlideAnchorsEn.filter(({ end }) => end).length, 12)
  assert.equal(chapter19HalfBreaks.length, 6)
  assert.equal(chapter19SlideAnchors.length, chapter19SlideAnchorsEn.length)
})

test('Chapter 19 slides 44, 45 and 48 target their exact semantic figures', () => {
  const zones = chapter19En.sections.find(({ id }) => id === 'zones-reflexes-podales')!
  const expected = [
    { slide: 44, blockIndex: 10, caption: /Inguinal Ligament and Inguinal Canal/, forbidden: /Central Fibrous Body/ },
    { slide: 45, blockIndex: 11, caption: /Central Fibrous Body/, forbidden: /Level 4/ },
    { slide: 48, blockIndex: 9, caption: /Bladder Trigone.*Cervico-Isthmic.*Inferior Hypogastric Plexus/, forbidden: /Inguinal Ligament/ },
  ]

  for (const item of expected) {
    const matches = chapter19SlideAnchorsEn.filter(({ slide }) => slide === item.slide)
    assert.equal(matches.length, 1, `slide ${item.slide} must appear exactly once`)
    const anchor = matches[0]
    assert.equal(anchor.blockIndex, item.blockIndex)
    assert.deepEqual(anchor.end, { sectionId: 'zones-reflexes-podales', blockIndex: item.blockIndex })
    const target = zones.blocks[item.blockIndex]
    assert.equal(target.type, 'figure')
    assert.match(JSON.stringify(target), item.caption)
    assert.doesNotMatch(JSON.stringify(target), item.forbidden)
  }

  assert.deepEqual([43, 44, 45, 46, 47, 48].map((slide) => {
    const anchor = chapter19SlideAnchorsEn.find((candidate) => candidate.slide === slide)!
    return [slide, anchor.blockIndex]
  }), [[43, 34], [44, 10], [45, 11], [46, 19], [47, 35], [48, 9]])
  assert.match(JSON.stringify(zones.blocks[12]), /Level 4/)
})
