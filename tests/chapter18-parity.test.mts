import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter18En } from '../content/chapter18.en'
import { chapter18Fr } from '../content/chapter18.fr'
import { chapter18SlideAnchors, chapter18SlideAnchorsEn, chapter18Slides, chapter18SlidesEn } from '../content/chapter18.slidesync'
import { getChapterTranslations } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root = join(import.meta.dirname, '..')
const content = (chapter: typeof chapter18En) => chapter.sections.flatMap(section => section.blocks.filter(block => block.type !== 'xref'))
const figures = (chapter: typeof chapter18En) => chapter.sections.flatMap(section => section.blocks.map((block, index) => ({ section, block, index }))).filter(item => item.block.type === 'figure')
const references = (chapter: typeof chapter18En) => chapter.sections.flatMap(section => section.blocks.flatMap((block: any) => block.type === 'xref' ? [block] : (block.xrefs ?? [])))

function validateAnchors(chapter: typeof chapter18En, anchors: typeof chapter18SlideAnchors, slideCount: number) {
  for (const anchor of anchors) {
    const points = [anchor, ...(anchor.end ? [anchor.end] : [])]
    const numbers = Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]
    numbers.forEach(number => assert.ok(number >= 1 && number <= slideCount, `slide ${number}`))
    points.forEach(point => {
      const section = chapter.sections.find(candidate => candidate.id === point.sectionId)
      assert.ok(section, point.sectionId)
      assert.ok(point.blockIndex >= -1 && point.blockIndex < section!.blocks.length, `${point.sectionId}:${point.blockIndex}`)
      if (point.itemIndex !== undefined) {
        const block: any = section!.blocks[point.blockIndex]
        const indexed = block.items ?? block.body
        assert.ok(Array.isArray(indexed), `item target ${point.sectionId}:${point.blockIndex}`)
        assert.ok(point.itemIndex >= 0 && point.itemIndex < indexed.length, `item ${point.itemIndex}`)
      }
    })
  }
}

test('Chapter 18 has strict bilingual section and block parity', () => {
  assert.deepEqual(chapter18En.sections.map(section => section.id), chapter18Fr.sections.map(section => section.id))
  assert.equal(chapter18En.sections.length, 13)
  assert.equal(content(chapter18Fr).length, 123)
  assert.equal(content(chapter18En).length, 123)
  chapter18Fr.sections.forEach((section, index) => assert.deepEqual(
    chapter18En.sections[index].blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.id,
  ))
})

test('Chapter 18 owns seven aligned English treatment figures', () => {
  const fr = figures(chapter18Fr)
  const en = figures(chapter18En)
  assert.equal(fr.length, 7)
  assert.equal(en.length, 7)
  assert.deepEqual(en.map(item => [item.section.id, item.index]), fr.map(item => [item.section.id, item.index]))
  assert.deepEqual(en.map(item => item.block.type === 'figure' ? item.block.src : ''), [10, 12, 14, 2, 4, 6, 8].map(number => `/chapter-18/EN/Cartography/figure-18-${String(number).padStart(2, '0')}.png`))
  en.forEach(item => { if (item.block.type === 'figure') assert.ok(existsSync(join(root, 'public', item.block.src.slice(1))), item.block.src) })
})

test('Chapter 18 exposes eight resolving bidirectional English references', () => {
  const refs = references(getChapterTranslations('chapter-18').en!)
  assert.equal(refs.length, 8)
  refs.forEach(reference => {
    const url = new URL(reference.href, 'https://rop.local')
    assert.equal(url.searchParams.get('lang'), 'en')
    assert.match(url.searchParams.get('xrefBack') ?? '', /^\/lecture\/chapitre-18\?lang=en#p-/)
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 18')
  })
})

test('Chapter 18 owns the canonical 30-slide deck and 28 anchor events', () => {
  assert.equal(chapter18Slides.length, 30)
  assert.equal(chapter18SlidesEn.length, 30)
  assert.equal(chapter18SlideAnchors.length, 28)
  assert.deepEqual(chapter18SlideAnchorsEn, chapter18SlideAnchors)
  validateAnchors(chapter18Fr, chapter18SlideAnchors, 30)
  validateAnchors(chapter18En, chapter18SlideAnchorsEn, 30)
  chapter18SlidesEn.forEach(slide => assert.ok(existsSync(join(root, 'public', slide.src.slice(1).split('?')[0])), slide.src))
  const hashes = chapter18SlidesEn.map(slide => createHash('sha256').update(readFileSync(join(root, 'public', slide.src.slice(1).split('?')[0]))).digest('hex'))
  assert.equal(new Set(hashes).size, 30)
  assert.ok(chapter18SlidesEn.every(slide => !slide.src.includes('/FR/')))
})

test('Chapter 18 generic English reflex integration is inert', () => {
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-18'], [])
  const before = figures(chapter18En).length
  integrateEnglishReflexPhotos(chapter18En)
  assert.equal(figures(chapter18En).length, before)
  const effective = integrateEnglishReflexDeck(chapter18En, chapter18SlidesEn, chapter18SlideAnchorsEn)
  assert.deepEqual(effective.slides, chapter18SlidesEn)
  assert.deepEqual(effective.anchors, chapter18SlideAnchorsEn)
})
