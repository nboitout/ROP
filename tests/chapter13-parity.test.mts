import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter13En } from '../content/chapter13.en'
import { chapter13Fr } from '../content/chapter13.fr'
import {
  chapter13SlideAnchors,
  chapter13SlideAnchorsEn,
  chapter13Slides,
  chapter13SlidesEn,
} from '../content/chapter13.slidesync'
import { getChapterTranslations } from '../content/registry'
import type { Block, Chapter, CrossReference } from '../content/types'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root = join(import.meta.dirname, '..')
type LocatedReference = CrossReference & { sectionId: string; blockIndex: number }

const blocks = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks)
const nonReferences = (chapter: Chapter) => blocks(chapter).filter((block) => block.type !== 'xref')
const figures = (chapter: Chapter) => blocks(chapter).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
const references = (chapter: Chapter): LocatedReference[] => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => [
    ...(block.type === 'xref' ? [{ ...block, sectionId: section.id, blockIndex }] : []),
    ...(block.xrefs ?? []).map((xref) => ({ ...xref, sectionId: section.id, blockIndex })),
  ]),
)
const publicPath = (src: string) => join(root, 'public', decodeURIComponent(src.split(/[?#]/, 1)[0]).replace(/^\//, ''))

function indexedLength(block: Block): number | undefined {
  if (block.type === 'bullets' || block.type === 'numbered') return block.items.length
  if (block.type === 'leadBullets') return block.items.length
  if (block.type === 'note' || block.type === 'rop') return block.body.length
  if (block.type === 'table') return block.rows.length
  return undefined
}

function assertPoint(chapter: Chapter, point: { sectionId: string; blockIndex: number; itemIndex?: number }) {
  const section = chapter.sections.find(({ id }) => id === point.sectionId)
  assert.ok(section, `unknown section ${point.sectionId}`)
  assert.ok(point.blockIndex >= -1 && point.blockIndex < section.blocks.length, `invalid block ${point.sectionId}:${point.blockIndex}`)
  if (point.itemIndex !== undefined) {
    assert.ok(point.blockIndex >= 0, `item cannot target a section heading: ${point.sectionId}`)
    const length = indexedLength(section.blocks[point.blockIndex])
    assert.notEqual(length, undefined, `item target is not indexed: ${point.sectionId}:${point.blockIndex}`)
    assert.ok(point.itemIndex >= 0 && point.itemIndex < length!, `invalid item ${point.sectionId}:${point.blockIndex}:${point.itemIndex}`)
  }
}

function assertTargetResolves(reference: LocatedReference) {
  const url = new URL(reference.href, 'https://rop.local')
  assert.equal(url.searchParams.get('lang'), 'en', reference.href)
  const match = url.pathname.match(/^\/lecture\/chapitre-(\d+)$/)
  assert.ok(match, `unrecognised target ${reference.href}`)
  const target = getChapterTranslations(`chapter-${Number(match![1])}`).en
  assert.ok(target, `missing English target chapter ${match![1]}`)
  if (url.hash.startsWith('#sec-')) {
    assert.ok(target!.sections.some(({ id }) => id === url.hash.slice(5)), `missing target ${url.hash}`)
  } else {
    const paragraph = url.hash.match(/^#p-(.*)-(\d+)$/)
    assert.ok(paragraph, `reference lacks an exact target: ${reference.href}`)
    assertPoint(target!, { sectionId: paragraph![1], blockIndex: Number(paragraph![2]) })
  }
}

test('Chapter 13 English mirrors the final French runtime structure and content granularity', () => {
  assert.deepEqual(chapter13En.sections.map(({ id }) => id), chapter13Fr.sections.map(({ id }) => id))
  assert.equal(chapter13Fr.sections.length, 12)
  assert.equal(chapter13En.sections.length, 12)
  assert.equal(blocks(chapter13Fr).length, 86)
  assert.equal(blocks(chapter13En).length, 86)
  assert.equal(nonReferences(chapter13Fr).length, 79)
  assert.equal(nonReferences(chapter13En).length, 79)

  chapter13Fr.sections.forEach((section, index) => {
    const english = chapter13En.sections[index]
    assert.deepEqual(english.blocks.map(({ type }) => type), section.blocks.map(({ type }) => type), section.id)
    section.blocks.forEach((block, blockIndex) => {
      assert.equal(indexedLength(english.blocks[blockIndex]), indexedLength(block), `${section.id}:${blockIndex}`)
    })
  })

  const text = JSON.stringify(chapter13En)
  for (const fact of [/150 g/, /10–12 cm/, /T6–T9/, /T9–T11/, /coeliac plexus/i, /portal vein/i, /Epstein–Barr/, /splenic rupture/i, /left fifth metatarsal/i]) {
    assert.match(text, fact)
  }
})

test('Chapter 13 owns the canonical English figures and clinical case', () => {
  assert.equal(figures(chapter13Fr).length, 2)
  assert.deepEqual(figures(chapter13En).map(({ src }) => src), [
    '/chapter-13/EN/Cartography/figure-13-04.png',
    '/chapter-13/EN/Cartography/figure-13-02.png',
  ])
  assert.deepEqual(
    chapter13En.sections.flatMap((section) => section.blocks.flatMap((block, index) => block.type === 'figure' ? [`${section.id}:${index}`] : [])),
    chapter13Fr.sections.flatMap((section) => section.blocks.flatMap((block, index) => block.type === 'figure' ? [`${section.id}:${index}`] : [])),
  )
  for (const figure of figures(chapter13En)) assert.ok(existsSync(publicPath(figure.src)), figure.src)
  assert.ok(chapter13En.clinicalCase)
  assert.ok(existsSync(publicPath(chapter13En.clinicalCase!.src)), chapter13En.clinicalCase!.src)
  assert.doesNotMatch(chapter13En.clinicalCase!.src, /\/FR\//)
})

test('Chapter 13 exposes seven resolving English references with exact return passages', () => {
  assert.equal(references(chapter13Fr).length, 7)
  const english = references(chapter13En)
  assert.equal(english.length, 7)
  assert.equal(new Set(english.map(({ href }) => href)).size, 7)
  const expectedReturns = [
    'relations-viscero-emotionnelles:1',
    'zones-reflexes-podales:6',
    'zones-reflexes-podales:11',
    'zones-reflexes-podales:12',
    'zones-reflexes-podales:16',
    'zones-reflexes-podales:24',
    'zones-reflexes-podales:25',
  ]
  english.forEach((reference, index) => {
    assertTargetResolves(reference)
    const url = new URL(reference.href, 'https://rop.local')
    const back = new URL(url.searchParams.get('xrefBack') ?? '', 'https://rop.local')
    assert.equal(back.pathname, '/lecture/chapitre-13')
    assert.equal(back.searchParams.get('lang'), 'en')
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 13')
    const match = back.hash.match(/^#p-(.*)-(\d+)$/)
    assert.ok(match, `invalid return path ${reference.href}`)
    assert.equal(`${match![1]}:${match![2]}`, expectedReturns[index])
    assertPoint(chapter13En, { sectionId: match![1], blockIndex: Number(match![2]) })
  })
})

test('Chapter 13 has the canonical raw and effective 21-slide inventory and anchors', () => {
  assert.equal(chapter13Slides.length, 21)
  assert.equal(chapter13SlidesEn.length, 21)
  assert.equal(chapter13SlideAnchors.length, 21)
  assert.equal(chapter13SlideAnchorsEn.length, 21)
  assert.deepEqual(chapter13SlideAnchorsEn, chapter13SlideAnchors)
  assert.equal(classicSlideDecks['chapter-13'].en?.length, 21)
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-13'], [])

  const expectedTitles = [
    'Chapter 13 — The Spleen', 'The Spleen: Identity and Essential Functions', 'The Spleen: Organization and Function',
    'Topographic Location of the Spleen', 'External Morphology: Surfaces, Borders, and Poles', 'Structure of the Spleen Parenchyma',
    'Fixation of the Spleen', 'Means of Fixation of the Spleen', 'Anatomical Relations of the Spleen', 'Vascular Supply of the Spleen',
    'Autonomic Innervation and ROP Listening Zone', 'Spleen Parenchyma Physiology', 'Splenomegaly: Warning Signs and Medical Guidance',
    'Splenic Trauma: Mechanisms and Signs of Urgency', 'Infectious Mononucleosis: Splenomegaly and Precautions',
    'Functional Indications in ROP — Principle of Caution', 'Viscero-Somatic Relationships of the Spleen',
    'Viscero-emotional Relationships', 'ROP Synthesis: Assessment of the Spleen', 'Cartography: Costovertebral Joints', 'Cartography: Spleen',
  ]
  assert.deepEqual(chapter13SlidesEn.map(({ title }) => title), expectedTitles)

  const hashes = new Set<string>()
  for (const slide of chapter13SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), slide.src)
    const hash = createHash('sha256').update(readFileSync(publicPath(slide.src))).digest('hex')
    assert.ok(!hashes.has(hash), `unexpected duplicate slide asset ${slide.src}`)
    hashes.add(hash)
  }
  for (const anchor of chapter13SlideAnchorsEn) {
    assertPoint(chapter13En, anchor)
    if (anchor.end) assertPoint(chapter13En, anchor.end)
    for (const slide of Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]) {
      assert.ok(slide >= 1 && slide <= chapter13SlidesEn.length, `invalid slide ${slide}`)
    }
  }

  const before = figures(chapter13En).length
  integrateEnglishReflexPhotos(chapter13En)
  assert.equal(figures(chapter13En).length, before)
  const effective = integrateEnglishReflexDeck(chapter13En, chapter13SlidesEn, chapter13SlideAnchorsEn)
  assert.deepEqual(effective.slides, chapter13SlidesEn)
  assert.deepEqual(effective.anchors, chapter13SlideAnchorsEn)
})
