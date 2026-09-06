import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter5En } from '../content/chapter5.en'
import { chapter5ReworkFr } from '../content/chapter5-rework.fr'
import { chapter5ReworkSlideAnchors, chapter5ReworkSlides } from '../content/chapter5-rework.slidesync'
import { chapter5SlideAnchorsEn, chapter5SlidesEn } from '../content/chapter5.slidesync'
import type { Block, Chapter, CrossReference } from '../content/types'
import { integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root = join(import.meta.dirname, '..')
const blocks = (chapter: Chapter) => chapter.sections.flatMap((section) => section.blocks)
const figures = (chapter: Chapter) => blocks(chapter).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
const references = (chapter: Chapter): CrossReference[] => chapter.sections.flatMap((section) => section.blocks.flatMap((block) => [
  ...(block.type === 'xref' ? [block] : []),
  ...(block.xrefs ?? []),
]))
const publicPath = (src: string) => join(root, 'public', decodeURIComponent(src.split(/[?#]/, 1)[0]).replace(/^\//, ''))

function indexedLength(block: Block): number | undefined {
  if (block.type === 'bullets' || block.type === 'numbered' || block.type === 'leadBullets') return block.items.length
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

test('Chapter 5 English mirrors the authoritative final French runtime structure', () => {
  assert.deepEqual(chapter5En.sections.map(({ id }) => id), chapter5ReworkFr.sections.map(({ id }) => id))
  assert.equal(chapter5ReworkFr.sections.length, 20)
  assert.equal(chapter5En.sections.length, 20)
  assert.equal(blocks(chapter5ReworkFr).length, 135)
  assert.equal(blocks(chapter5En).length, 135)

  chapter5ReworkFr.sections.forEach((section, sectionIndex) => {
    const english = chapter5En.sections[sectionIndex]
    assert.deepEqual(english.blocks.map(({ type }) => type), section.blocks.map(({ type }) => type), section.id)
    section.blocks.forEach((block, blockIndex) => {
      assert.equal(indexedLength(english.blocks[blockIndex]), indexedLength(block), `${section.id}:${blockIndex}`)
    })
  })

  const text = JSON.stringify(chapter5En)
  for (const fact of [/allostatic load/i, /SAM axis/i, /HPA axis/i, /interoception/i, /four complementary levels/i, /occipital zones/i, /fibromyalgia/i, /recovery kinetics/i]) assert.match(text, fact)
  assert.doesNotMatch(text, /"id":"annexe-/)
})

test('Chapter 5 preserves the complete canonical title, synthetic sequence, and conclusion', () => {
  assert.equal(chapter5En.title, 'Stress Mechanism — Physiology of Adaptation, Allostatic Cost, and the ROP Approach')

  const sequence = chapter5En.sections.find(({ id }) => id === 'les-quatre-niveaux-rop-appliques-au-stress')?.blocks[5]
  assert.deepEqual(sequence, {
    type: 'note',
    label: 'SYNTHETIC SEQUENCE',
    body: ['Reduce the persistence of the alarm signal → Reduce mobilisation that has become unnecessary → Release regional constraints and allow the function to return → Integrate its somatic and emotional expression.'],
  })

  const conclusion = chapter5En.sections.find(({ id }) => id === 'conclusion')
  assert.ok(conclusion)
  assert.equal(conclusion.title, '19. Conclusion')
  assert.deepEqual(conclusion.blocks.map(({ type }) => type), ['para', 'para', 'para', 'para', 'sub', 'bullets'])
  const conclusionText = JSON.stringify(conclusion)
  for (const proposition of [
    /physical, emotional, and biochemical stressors accumulate/,
    /do not support claims that ROP acts directly on mitochondria, ATP, or ageing/,
    /integration of its somatic and emotional expressions/,
    /avoid remaining locked in its reaction/,
    /specific effects remain to be tested in comparative protocols/,
  ]) assert.match(conclusionText, proposition)
})

test('Chapter 5 bibliography, clinical case, figures, and references have exact parity', () => {
  const frBibliography = chapter5ReworkFr.sections.at(-1)?.blocks[0]
  const enBibliography = chapter5En.sections.at(-1)?.blocks[0]
  assert.equal(frBibliography?.type, 'bullets')
  assert.equal(enBibliography?.type, 'bullets')
  assert.deepEqual(enBibliography, frBibliography)
  assert.equal((enBibliography as Extract<Block, { type: 'bullets' }>).items.length, 10)

  assert.equal(figures(chapter5ReworkFr).length, 0)
  assert.equal(figures(chapter5En).length, 0)
  assert.equal(references(chapter5ReworkFr).length, 0)
  assert.equal(references(chapter5En).length, 0)
  assert.ok(chapter5ReworkFr.clinicalCase)
  assert.ok(chapter5En.clinicalCase)
  assert.ok(existsSync(publicPath(chapter5ReworkFr.clinicalCase!.src)))
  assert.ok(existsSync(publicPath(chapter5En.clinicalCase!.src)))
  assert.doesNotMatch(chapter5En.clinicalCase!.src, /\/FR\//)
})

test('Chapter 5 has the canonical raw and effective 30-slide inventory with complete semantic anchors', () => {
  assert.equal(chapter5ReworkSlides.length, 30)
  assert.equal(chapter5SlidesEn.length, 30)
  assert.equal(chapter5ReworkSlideAnchors.length, 27)
  assert.equal(chapter5SlideAnchorsEn.length, 27)
  assert.deepEqual(chapter5SlideAnchorsEn, chapter5ReworkSlideAnchors)
  assert.equal(classicSlideDecks['chapter-5'].fr?.length, 30)
  assert.equal(classicSlideDecks['chapter-5'].en?.length, 30)

  assert.deepEqual(chapter5SlidesEn.slice(20).map(({ title }) => title), [
    'The ROP Clinical Sequence: A Four-Level Progression',
    'Level 1 — Regulation of Higher Centres',
    'Level 2 — Autonomic regulation and adaptation',
    'Level 3 — Locoregional Regulation',
    'Level 4 — Visceral or functional target and integration',
    'Fibromyalgia and Allostatic Load',
    'Research directions: measuring recovery kinetics',
    'ROP Cartography — Occipital Zones',
    'Stress Mechanism: Neurological Response (SAM)',
    'Stress mechanism: hormonal axis (HPA)',
  ])

  const hashes = new Set<string>()
  for (const slide of chapter5SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), slide.src)
    const hash = createHash('sha256').update(readFileSync(publicPath(slide.src))).digest('hex')
    assert.ok(!hashes.has(hash), `unexpected duplicate slide asset ${slide.src}`)
    hashes.add(hash)
  }
  for (const anchor of chapter5SlideAnchorsEn) {
    assertPoint(chapter5En, anchor)
    if (anchor.end) assertPoint(chapter5En, anchor.end)
    for (const slide of Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]) {
      assert.ok(slide >= 1 && slide <= chapter5SlidesEn.length, `invalid slide ${slide}`)
    }
  }

  const covered = chapter5SlideAnchorsEn.flatMap(({ slide }) => Array.isArray(slide) ? slide : [slide]).sort((a, b) => a - b)
  assert.deepEqual(covered, Array.from({ length: 30 }, (_, index) => index + 1))

  for (const [anchors, chapter] of [[chapter5ReworkSlideAnchors, chapter5ReworkFr], [chapter5SlideAnchorsEn, chapter5En]] as const) {
    const sam = anchors.find(({ slide }) => slide === 29)!
    const hpa = anchors.find(({ slide }) => slide === 30)!
    assert.deepEqual(sam, {
      sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 0, slide: 29,
      end: { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 3 },
    })
    assert.deepEqual(hpa, {
      sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 3, slide: 30,
      end: { sectionId: 'la-double-reponse-au-stresseur-urgence-et-soutien', blockIndex: 7 },
    })
    const section = chapter.sections.find(({ id }) => id === sam.sectionId)!
    const samText = JSON.stringify(section.blocks.slice(sam.blockIndex, sam.end!.blockIndex))
    const hpaText = JSON.stringify(section.blocks.slice(hpa.blockIndex, hpa.end!.blockIndex))
    assert.match(samText, /SAM/i)
    assert.doesNotMatch(samText, /HPA|HHS/i)
    assert.match(hpaText, /HPA|HHS/i)
    assert.doesNotMatch(hpaText, /5\.3\.|termination of the response|clôture de la réponse/i)
  }

  const figureCount = figures(chapter5En).length
  integrateEnglishReflexPhotos(chapter5En)
  assert.equal(figures(chapter5En).length, figureCount)
  const effective = integrateEnglishReflexDeck(chapter5En, chapter5SlidesEn, chapter5SlideAnchorsEn)
  assert.deepEqual(effective.slides, chapter5SlidesEn)
  assert.deepEqual(effective.anchors, chapter5SlideAnchorsEn)
})
