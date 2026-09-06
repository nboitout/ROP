import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter16En } from '../content/chapter16.en'
import { chapter16Fr } from '../content/chapter16.fr'
import { chapter16SlideAnchors, chapter16SlideAnchorsEn, chapter16Slides, chapter16SlidesEn } from '../content/chapter16.slidesync'
import { getChapter } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import { assertVisibleHeadingParity } from './helpers/headingParity.mts'

const root = join(import.meta.dirname, '..')
const content = (chapter: typeof chapter16En) => chapter.sections.flatMap(section => section.blocks.filter(block => block.type !== 'xref'))
const figures = (chapter: typeof chapter16En) => chapter.sections.flatMap(section => section.blocks.filter(block => block.type !== 'xref').map((block, index) => ({ section, block, index }))).filter(item => item.block.type === 'figure')
const refs = (chapter: typeof chapter16En) => chapter.sections.flatMap(section => section.blocks.flatMap((block: any) => block.xrefs ?? []))
const nestedCardinality = (block: any) => block.items?.length ?? block.body?.length ?? block.figures?.length ?? null
const sectionText = (id: string) => JSON.stringify(chapter16En.sections.find(section => section.id === id)?.blocks ?? [])

function normalisedAnchorCoordinates(chapter: typeof chapter16En, anchors: typeof chapter16SlideAnchors) {
  const coordinate = (sectionId: string, blockIndex: number, itemIndex?: number) => {
    if (blockIndex < 0) return { sectionId, blockIndex, ...(itemIndex === undefined ? {} : { itemIndex }) }
    const section = chapter.sections.find(candidate => candidate.id === sectionId)!
    const block = section.blocks[blockIndex]
    assert.notEqual(block?.type, 'xref', `anchor points to cross-reference block ${sectionId}:${blockIndex}`)
    const normalisedIndex = section.blocks.slice(0, blockIndex).filter(candidate => candidate.type !== 'xref').length
    return { sectionId, blockIndex: normalisedIndex, ...(itemIndex === undefined ? {} : { itemIndex }) }
  }

  return anchors.map(anchor => ({
    ...coordinate(anchor.sectionId, anchor.blockIndex, anchor.itemIndex),
    slide: anchor.slide,
    ...(anchor.end ? { end: coordinate(anchor.end.sectionId, anchor.end.blockIndex, anchor.end.itemIndex) } : {}),
  }))
}

function validateAnchors(chapter: typeof chapter16En, anchors: typeof chapter16SlideAnchors, slideCount: number) {
  for (const anchor of anchors) {
    const section = chapter.sections.find(candidate => candidate.id === anchor.sectionId)
    assert.ok(section, `unknown section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < section.blocks.length, `${anchor.sectionId}:${anchor.blockIndex}`)
    const numbers = Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]
    numbers.forEach(number => assert.ok(number >= 1 && number <= slideCount, `slide ${number}`))
    if (anchor.itemIndex !== undefined || anchor.end?.itemIndex !== undefined) {
      const point = anchor.end ?? anchor
      const targetSection = chapter.sections.find(candidate => candidate.id === point.sectionId)!
      const block: any = targetSection.blocks[point.blockIndex]
      const indexed = block.items ?? block.body
      assert.ok(Array.isArray(indexed), `item target ${point.sectionId}:${point.blockIndex}`)
      assert.ok(point.itemIndex! >= 0 && point.itemIndex! <= indexed.length)
    }
  }
}

test('Chapter 16 has canonical bilingual block parity', () => {
  assert.deepEqual(chapter16En.sections.map(section => section.id), chapter16Fr.sections.map(section => section.id))
  assert.equal(chapter16En.sections.length, 13)
  assert.equal(content(chapter16Fr).length, 123)
  assert.equal(content(chapter16En).length, 123)
  chapter16Fr.sections.forEach((section, index) => assert.deepEqual(
    chapter16En.sections[index].blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.id,
  ))
})

test('Chapter 16 preserves nested cardinality for every paired canonical block', () => {
  chapter16Fr.sections.forEach((frSection, sectionIndex) => {
    const enSection = chapter16En.sections[sectionIndex]
    const frBlocks = frSection.blocks.filter(block => block.type !== 'xref')
    const enBlocks = enSection.blocks.filter(block => block.type !== 'xref')
    assert.deepEqual(
      enBlocks.map(nestedCardinality),
      frBlocks.map(nestedCardinality),
      `${frSection.id}: nested list, note, ROP, or figure cardinality differs`,
    )
  })
  assert.equal((chapter16En.sections.find(section => section.id === 'physiologie')!.blocks[4] as any).items.length, 15)
  assert.equal((chapter16En.sections.find(section => section.id === 'indications-troubles-fonctionnels')!.blocks[0] as any).items.length, 45)
})

test('Chapter 16 retains every major physiology and renal-ptosis subject', () => {
  const physiology = sectionText('physiologie')
  for (const topic of [
    /1,700 L of blood/, /170 L of plasma/, /Tubular reabsorption/, /blood osmolarity/,
    /aldosterone/, /blood volume/, /renin–angiotensin–aldosterone system/,
    /baroreceptors/, /antidiuretic hormone/, /diabetes insipidus/, /glycosuria/,
    /acid–base balance/, /hydrogen ions/, /bicarbonate ions/,
  ]) assert.match(physiology, topic)

  const indications = sectionText('indications-troubles-fonctionnels')
  for (const topic of [
    /Renal ptosis/, /Congenital \(or ectopic\) ptosis/, /Acquired ptosis/,
    /Anterior fixations/, /First degree/, /Second degree/, /Third degree/,
    /twelfth intercostal nerve/, /iliohypogastric/, /ilioinguinal/,
    /lateral femoral cutaneous/, /Knee pain/, /Psoas spasm/,
    /Urinary infections/, /ureter becomes kinked/, /Colonic or uterine irritation/,
    /Posterior fixations/, /perirenal fat becomes fibrotic/,
  ]) assert.match(indications, topic)

  assert.doesNotMatch(physiology, /medical condition that requires investigation/)
  assert.doesNotMatch(indications, /associated findings may include/)
})

test('Chapter 16 preserves exact visible heading numbering, hierarchy, rail behavior and translated wording', () => {
  assertVisibleHeadingParity(chapter16Fr, chapter16En, 51, '5bb0ef569fa0cef1c02fae0a3ead15aa330a70a5a7e92e9dfe649308fab87e10')
})

test('Chapter 16 owns five semantically aligned English treatment figures', () => {
  const fr = figures(chapter16Fr)
  const en = figures(chapter16En)
  assert.equal(fr.length, 5)
  assert.equal(en.length, 5)
  assert.deepEqual(en.map(item => [item.section.id, item.index]), fr.map(item => [item.section.id, item.index]))
  assert.deepEqual(en.map(item => item.block.type === 'figure' ? item.block.src : ''), [2, 4, 6, 8, 10].map(number => `/chapter-16/EN/Cartography/figure-16-${String(number).padStart(2, '0')}-EN.png`))
  en.forEach(item => { if (item.block.type === 'figure') assert.ok(existsSync(join(root, 'public', item.block.src.slice(1))), item.block.src) })
})

test('Chapter 16 exposes nine bidirectional English references', () => {
  const runtime = getChapter('chapter-16', 'en').chapter
  const references = refs(runtime)
  assert.equal(references.length, 9)
  assert.equal(new Set(references.map(reference => reference.href)).size, 9)
  assert.deepEqual(references.map(reference => {
    const url = new URL(reference.href, 'https://rop.local')
    return [url.pathname + url.hash, url.searchParams.get('xrefBack')]
  }), [
    ['/lecture/chapitre-1#p-articulations-viscerales-3', '/lecture/chapitre-16?lang=en#p-anatomie-8'],
    ['/lecture/chapitre-10#p-anatomie-figure-10-1-16', '/lecture/chapitre-16?lang=en#p-vascularisation-5'],
    ['/lecture/chapitre-19#p-ovaires-trompes-presentation-0', '/lecture/chapitre-16?lang=en#p-indications-troubles-fonctionnels-0'],
    ['/lecture/chapitre-20#p-presentation-0', '/lecture/chapitre-16?lang=en#p-indications-troubles-fonctionnels-0'],
    ['/lecture/chapitre-3', '/lecture/chapitre-16?lang=en#p-zones-reflexes-podales-1'],
    ['/lecture/chapitre-4', '/lecture/chapitre-16?lang=en#p-zones-reflexes-podales-12'],
    ['/lecture/chapitre-8', '/lecture/chapitre-16?lang=en#p-zones-reflexes-podales-12'],
    ['/lecture/chapitre-3', '/lecture/chapitre-16?lang=en#p-zones-reflexes-podales-42'],
    ['/lecture/chapitre-5', '/lecture/chapitre-16?lang=en#p-zones-reflexes-podales-42'],
  ])
  for (const reference of references) {
    const url = new URL(reference.href, 'https://rop.local')
    assert.equal(url.searchParams.get('lang'), 'en')
    assert.match(url.searchParams.get('xrefBack') ?? '', /^\/lecture\/chapitre-16\?lang=en#p-/)
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 16')
    const target = url.pathname.match(/^\/lecture\/chapitre-(\d+)/)
    if (target) assert.ok(getChapter(`chapter-${Number(target[1])}` as any, 'en').chapter)
    const back = new URL(url.searchParams.get('xrefBack')!, 'https://rop.local')
    const match = back.hash.match(/^#p-(.*)-(\d+)$/)
    assert.ok(match)
    const sourceSection = runtime.sections.find(section => section.id === match![1])
    assert.ok(sourceSection && Number(match![2]) < sourceSection.blocks.length)
  }
})

test('Chapter 16 owns the complete 28-slide deck and canonical 26 anchors', () => {
  assert.equal(chapter16Slides.length, 28)
  assert.equal(chapter16SlidesEn.length, 28)
  assert.equal(chapter16SlideAnchors.length, 26)
  assert.equal(chapter16SlideAnchorsEn.length, 26)
  assert.deepEqual(
    normalisedAnchorCoordinates(chapter16En, chapter16SlideAnchorsEn),
    normalisedAnchorCoordinates(chapter16Fr, chapter16SlideAnchors),
    'English anchors must target the same semantic block and item boundaries as French anchors',
  )
  assert.deepEqual(chapter16SlideAnchorsEn[15], { sectionId: 'indications-troubles-fonctionnels', blockIndex: 0, slide: [16, 17, 18] })
  assert.deepEqual(chapter16SlideAnchorsEn[19], { sectionId: 'conseils', blockIndex: 0, slide: 22, end: { sectionId: 'conseils', blockIndex: 0, itemIndex: 4 } })
  validateAnchors(chapter16Fr, chapter16SlideAnchors, 28)
  validateAnchors(chapter16En, chapter16SlideAnchorsEn, 28)
  chapter16SlidesEn.forEach(slide => assert.ok(existsSync(join(root, 'public', slide.src.slice(1))), slide.src))
  const hashes = chapter16SlidesEn.map(slide => createHash('sha256').update(readFileSync(join(root, 'public', slide.src.slice(1)))).digest('hex'))
  assert.equal(new Set(hashes).size, 28)
  assert.ok(chapter16SlidesEn.every(slide => !slide.src.includes('/FR/')))
  assert.deepEqual(chapter16SlidesEn.slice(23).map(slide => slide.src), [1, 3, 5, 7, 9].map(number => `/chapter-16/EN/Cartography/figure-16-${String(number).padStart(2, '0')}-EN.png`))
})

test('Chapter 16 generic English reflex integration is inert', () => {
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-16'], [])
  const before = figures(chapter16En).length
  integrateEnglishReflexPhotos(chapter16En)
  assert.equal(figures(chapter16En).length, before)
  const effective = integrateEnglishReflexDeck(chapter16En, chapter16SlidesEn, chapter16SlideAnchorsEn)
  assert.equal(effective.slides.length, 28)
  assert.equal(effective.anchors.length, 26)
  assert.deepEqual(effective.slides, chapter16SlidesEn)
  assert.deepEqual(effective.anchors, chapter16SlideAnchorsEn)
})
