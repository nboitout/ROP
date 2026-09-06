import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter10En } from '../content/chapter10.en'
import { chapter10Fr } from '../content/chapter10.fr'
import {
  chapter10HalfBreaks,
  chapter10SlideAnchors,
  chapter10SlideAnchorsEn,
  chapter10Slides,
  chapter10SlidesEn,
} from '../content/chapter10.slidesync'
import { getChapter } from '../content/registry'
import { readerXrefHref } from '../lib/access'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import type { Chapter } from '../content/types'

const root = join(import.meta.dirname, '..')
const reflexId = 'zones-reflexes-podales'
const allBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks)
const references = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => [
    ...(block.type === 'xref' ? [{ reference: block, sectionId: section.id, blockIndex }] : []),
    ...(block.xrefs ?? []).map((reference) => ({ reference, sectionId: section.id, blockIndex })),
  ]),
)

const englishSectionTitles = [
  '1. Overview',
  '2. Location',
  '3. Anatomy',
  '4. Anatomical relationships',
  '5. Vascular supply',
  '6. Innervation',
  '7. Physiology',
  '8. Common disorders',
  '9. Indications: functional disorders',
  '10. Viscerosomatic relationships',
  '11. Visceral–emotional relationships',
  '12. Advice',
  '13. ROP reflex zones',
]

test('Chapter 10 preserves the canonical section inventory and normalized block structure', () => {
  assert.equal(chapter10Fr.sections.length, 13)
  assert.equal(chapter10En.sections.length, 13)
  assert.deepEqual(chapter10En.sections.map((section) => section.id), chapter10Fr.sections.map((section) => section.id))
  assert.deepEqual(chapter10En.sections.map((section) => section.title), englishSectionTitles)
  for (let index = 0; index < chapter10Fr.sections.length; index += 1) {
    assert.deepEqual(
      chapter10En.sections[index].blocks.map((block) => block.type),
      chapter10Fr.sections[index].blocks.map((block) => block.type),
      chapter10Fr.sections[index].id,
    )
  }
  assert.equal(allBlocks(chapter10Fr).length, 134)
  assert.equal(allBlocks(chapter10En).length, 134)

  const emotional = chapter10En.sections.find((section) => section.id === 'relations-viscero-emotionnelles')!
  assert.equal(emotional.blocks[1].type, 'lead')
  if (emotional.blocks[1].type === 'lead') assert.equal(emotional.blocks[1].label, 'Limbic brain–duodenum balance')
})

test('Chapter 10 owns four canonical English reflex figures in exact French positions', () => {
  const reflex = chapter10En.sections.find((section) => section.id === reflexId)!
  const figures = reflex.blocks.flatMap((block, index) => block.type === 'figure' ? [{ block, index }] : [])
  assert.deepEqual(figures.map(({ index }) => index), [24, 25, 26, 27])
  assert.deepEqual(figures.map(({ block }) => block.src), [
    '/chapter-10/EN/Cartography/figure-10-d2.png',
    '/chapter-10/EN/Cartography/figure-10-sphincter-of-oddi.png',
    '/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png',
    '/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png',
  ])
  assert.deepEqual(figures.map(({ block }) => block.caption), [
    'Photo: Duodenum D2',
    'Photo: Sphincter of Oddi',
    'Photo: Duodenum D4',
    'Photo: Duodenojejunal Junction',
  ])
  assert.ok(figures.every(({ block }) => block.orientation === 'portrait'))
  assert.equal(new Set(figures.map(({ block }) => block.src)).size, 3, 'D4 and the junction intentionally reuse one source')
  for (const { block } of figures) assert.ok(existsSync(join(root, 'public', block.src.slice(1))), block.src)
})

test('Chapter 10 exposes eight independent English cross-references with exact returns', () => {
  const refs = references(chapter10En)
  assert.equal(refs.length, 8)
  assert.equal(new Set(refs.map(({ reference, blockIndex }) => `${blockIndex}:${reference.href}`)).size, 8)
  assert.ok(!allBlocks(chapter10En).some((block) => block.type === 'para' && /^See Chapter/i.test(block.text)))

  for (const { reference, sectionId, blockIndex } of refs) {
    const destination = new URL(reference.href, 'https://rop.local')
    assert.equal(destination.searchParams.get('lang'), 'en')
    const enriched = new URL(readerXrefHref(reference.href, 'chapter-10', false, `p-${sectionId}-${blockIndex}`, 'en'), 'https://rop.local')
    assert.equal(enriched.searchParams.get('xrefBack'), `/lecture/chapitre-10?lang=en#p-${sectionId}-${blockIndex}`)
    assert.equal(enriched.searchParams.get('xrefBackLabel'), 'Back to Chapter 10')
  }
})

test('Chapter 10 English deck mirrors all eighteen canonical logical slides and nineteen anchors', () => {
  assert.equal(chapter10Slides.length, 18)
  assert.equal(chapter10SlidesEn.length, 18)
  assert.equal(chapter10SlideAnchors.length, 19)
  assert.equal(chapter10SlideAnchorsEn.length, 19)
  assert.equal(chapter10SlidesEn[12].src, '/chapter-10/EN/Images/NCH 10 EN IMG 14 V2.png')
  assert.equal(chapter10SlidesEn[13].src, '/chapter-10/EN/Images/NCH 10 EN IMG 13 V2.png')
  assert.deepEqual(chapter10SlidesEn.slice(14).map((slide) => slide.src), [
    '/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d1-d3.png',
    '/chapter-10/EN/Cartography/figure-10-cartography-sphincter-of-oddi.png',
    '/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d4-oesophageal-hiatus.png',
    '/chapter-10/EN/Cartography/figure-10-cartography-duodenojejunal-junction.png',
  ])
  assert.deepEqual(chapter10SlideAnchorsEn, chapter10SlideAnchors)
  assert.deepEqual(chapter10HalfBreaks, [{ sectionId: 'relations-viscero-emotionnelles', blockIndex: -1 }])
  assert.equal(chapter10SlideAnchorsEn.filter((anchor) => anchor.slide === 13).length, 2)
  assert.equal(chapter10SlideAnchorsEn[13].gapBefore, 'half')
  assert.ok(chapter10SlideAnchorsEn.slice(15).every((anchor) => anchor.end?.blockIndex === anchor.blockIndex))
  for (const slide of chapter10SlidesEn) assert.ok(existsSync(join(root, 'public', slide.src.slice(1))), slide.src)
})

test('Chapter 10 runtime integration does not append duplicate photos, slides, anchors or references', () => {
  const runtime = getChapter('chapter-10', 'en').chapter
  const reflex = runtime.sections.find((section) => section.id === reflexId)!
  assert.equal(reflex.blocks.filter((block) => block.type === 'figure').length, 4)
  assert.equal(references(runtime).length, 8)

  const before = reflex.blocks.length
  integrateEnglishReflexPhotos(runtime)
  assert.equal(reflex.blocks.length, before)

  const integrated = integrateEnglishReflexDeck(runtime, chapter10SlidesEn, chapter10SlideAnchorsEn)
  assert.equal(integrated.slides.length, 18)
  assert.equal(integrated.anchors.length, 19)
  assert.equal(new Set(integrated.slides.map((slide) => slide.src.toLowerCase())).size, 18)
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-10'].map((pair) => pair.cartography), chapter10SlidesEn.slice(14).map((slide) => slide.src))
})
