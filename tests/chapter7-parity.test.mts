import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { chapter7En } from '../content/chapter7.en'
import { chapter7Fr } from '../content/chapter7.fr'
import {
  chapter7SlideAnchors,
  chapter7SlideAnchorsEn,
  chapter7Slides,
  chapter7SlidesEn,
} from '../content/chapter7.slidesync'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { getChapter } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import type { Chapter } from '../content/types'

const normalizedSections = (chapter: Chapter) => chapter.sections.map((section) => ({
  id: section.id,
  blocks: section.blocks.filter((block) => block.type !== 'xref').map((block) => ({
    type: block.type,
    size: block.type === 'bullets' || block.type === 'numbered'
      ? block.items.length
      : block.type === 'leadBullets'
        ? block.items.length
        : block.type === 'note' || block.type === 'rop'
          ? block.body.length
          : undefined,
  })),
}))

const figures = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => block.type === 'figure'
    ? [{ sectionId: section.id, blockIndex, block }]
    : []),
)

const referenceLocations = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => [
    ...(block.type === 'xref' ? [{ sectionId: section.id, blockIndex, reference: block }] : []),
    ...(block.xrefs ?? []).map((reference) => ({ sectionId: section.id, blockIndex, reference })),
  ]),
)

const publicPath = (src: string) => resolve('public', decodeURIComponent(src.split(/[?#]/, 1)[0].slice(1)))

function assertPointResolves(point: { sectionId: string; blockIndex: number; itemIndex?: number }, chapter: Chapter) {
  const section = chapter.sections.find((candidate) => candidate.id === point.sectionId)
  assert.ok(section, `missing section ${point.sectionId}`)
  assert.ok(point.blockIndex === -1 || (point.blockIndex >= 0 && point.blockIndex < section.blocks.length), `invalid block ${point.sectionId}:${point.blockIndex}`)
  if (point.itemIndex !== undefined) {
    const block = section.blocks[point.blockIndex]
    assert.ok(block.type === 'bullets' || block.type === 'numbered' || block.type === 'leadBullets', `item coordinate on ${block.type}`)
    assert.ok(point.itemIndex >= 0 && point.itemIndex < block.items.length, `invalid item ${point.itemIndex}`)
  }
}

test('Chapter 7 English mirrors the authoritative French section and normalized block structure', () => {
  assert.deepEqual(chapter7En.sections.map((section) => section.id), chapter7Fr.sections.map((section) => section.id))
  assert.deepEqual(normalizedSections(chapter7En), normalizedSections(chapter7Fr))
  assert.equal(chapter7En.sections.length, 9)
  assert.equal(chapter7En.sections.reduce((count, section) => count + section.blocks.length, 0), 208)
  assert.equal(chapter7Fr.sections.filter((section) => section.id !== 'references').length, 9)
  assert.equal(chapter7En.clinicalCase, undefined)
  assert.equal(chapter7Fr.clinicalCase, undefined)
  assert.ok(!chapter7En.sections.some((section) => section.id === 'references'))
})

test('Chapter 7 figures match French positions and use five distinct English treatment assets', () => {
  const frFigures = figures(chapter7Fr)
  const enFigures = figures(chapter7En)
  assert.equal(frFigures.length, 5)
  assert.equal(enFigures.length, 5)
  assert.deepEqual(enFigures.map(({ sectionId, blockIndex }) => ({ sectionId, blockIndex })), frFigures.map(({ sectionId, blockIndex }) => ({ sectionId, blockIndex })))
  assert.equal(new Set(enFigures.map(({ block }) => block.src.toLowerCase())).size, 5)
  assert.deepEqual(enFigures.map(({ block }) => block.src), [2, 4, 6, 8, 10].map((number) => `/chapter-7/EN/cartography/figure-7-${String(number).padStart(2, '0')}.png`))
  assert.ok(enFigures.every(({ block }) => existsSync(publicPath(block.src))))
})

test('Chapter 7 has ten resolving English references with exact return passages', () => {
  const runtime = getChapter('chapter-7', 'en').chapter
  const refs = referenceLocations(runtime)
  assert.equal(referenceLocations(chapter7Fr).length, 10)
  assert.equal(refs.length, 10)
  for (const { sectionId, blockIndex, reference } of refs) {
    const target = new URL(reference.href, 'https://rop.test')
    assert.equal(target.searchParams.get('lang'), 'en')
    assert.equal(target.searchParams.get('xrefBack'), `/lecture/chapitre-7?lang=en#p-${sectionId}-${blockIndex}`)
    assert.equal(target.searchParams.get('xrefBackLabel'), 'Back to Chapter 7')
    const targetMatch = target.pathname.match(/^\/lecture\/chapitre-(\d+)$/)
    assert.ok(targetMatch, `unresolved target route ${target.pathname}`)
    const targetChapter = getChapter(`chapter-${Number(targetMatch[1])}` as Parameters<typeof getChapter>[0], 'en').chapter
    if (target.hash) {
      const coordinate = decodeURIComponent(target.hash.slice(1)).match(/^p-(.+)-(\d+)$/)
      assert.ok(coordinate, `invalid target coordinate ${target.hash}`)
      const section = targetChapter.sections.find((candidate) => candidate.id === coordinate![1])
      assert.ok(section && Number(coordinate![2]) < section.blocks.length, `missing target ${target.hash}`)
    }
  }
  const prose = runtime.sections.flatMap((section) => section.blocks).map((block) => block.type === 'para' ? block.text : '').join('\n')
  assert.doesNotMatch(prose, /\(See Chapter \d+/)
})

test('Chapter 7 exposes the canonical 19-slide deck without runtime duplication', () => {
  assert.equal(chapter7Slides.length, 19)
  assert.equal(chapter7SlidesEn.length, 19)
  assert.equal(classicSlideDecks['chapter-7'].fr?.length, 19)
  assert.equal(classicSlideDecks['chapter-7'].en?.length, 19)
  assert.equal(new Set(chapter7SlidesEn.map((slide) => slide.src.toLowerCase())).size, 19)
  assert.ok(chapter7SlidesEn.every((slide) => existsSync(publicPath(slide.src))))
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-7'], [])

  const clone = structuredClone(chapter7En)
  integrateEnglishReflexPhotos(clone)
  assert.equal(figures(clone).length, 5)
  assert.deepEqual(integrateEnglishReflexDeck(clone, chapter7SlidesEn, chapter7SlideAnchorsEn), {
    slides: chapter7SlidesEn,
    anchors: chapter7SlideAnchorsEn,
  })
})

test('Chapter 7 English anchors match French semantic scope and every coordinate resolves', () => {
  assert.deepEqual(chapter7SlideAnchorsEn, chapter7SlideAnchors)
  assert.deepEqual(chapter7SlideAnchorsEn.flatMap((anchor) => Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]), Array.from({ length: 19 }, (_, index) => index + 1))
  for (const anchor of chapter7SlideAnchorsEn) {
    assertPointResolves(anchor, chapter7En)
    if (anchor.end) assertPointResolves(anchor.end, chapter7En)
  }
  assert.equal(chapter7SlideAnchorsEn[13].itemIndex, 4)
  assert.equal(chapter7SlideAnchorsEn[13].end?.blockIndex, -1)
  assert.ok(chapter7SlideAnchorsEn.every((anchor) => anchor.gapBefore === undefined))
})

test('Chapter 7 V2 slide selection and titles preserve the approved English media corrections', () => {
  assert.deepEqual(chapter7SlidesEn.slice(0, 14).map((slide) => slide.src.includes(' V2.png')), [
    false, true, true, true, true, false, false, true, true, true, true, true, true, true,
  ])
  assert.deepEqual(chapter7SlidesEn.slice(8, 14).map((slide) => slide.title), [
    'Dual Nervous Supply: Somatic and Autonomic',
    'Parietal–Visceral Physiology: The Role of Transversus Abdominis',
    'Dynamics of Peritoneal Fluid',
    'Peritoneal Pathology: Mechanisms and Clinical Features',
    'Map of Referred Pain',
    'Synthesis — Container, Contents, and Peritoneal Networks',
  ])
})
