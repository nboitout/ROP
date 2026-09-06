import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter17En } from '../content/chapter17.en'
import { chapter17Fr } from '../content/chapter17.fr'
import { chapter17SlideAnchors, chapter17SlideAnchorsEn, chapter17Slides, chapter17SlidesEn } from '../content/chapter17.slidesync'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root = join(import.meta.dirname, '..')
const content = (chapter: typeof chapter17En) => chapter.sections.flatMap(section => section.blocks.filter(block => block.type !== 'xref'))
const figures = (chapter: typeof chapter17En) => chapter.sections.flatMap(section => section.blocks.map((block, index) => ({ section, block, index }))).filter(item => item.block.type === 'figure')
const references = (chapter: typeof chapter17En) => chapter.sections.flatMap(section => section.blocks.flatMap((block: any) => block.type === 'xref' ? [block] : (block.xrefs ?? [])))

test('Chapter 17 has strict bilingual section and block parity', () => {
  assert.deepEqual(chapter17En.sections.map(section => section.id), chapter17Fr.sections.map(section => section.id))
  assert.equal(chapter17En.sections.length, 8)
  assert.equal(content(chapter17Fr).length, 94)
  assert.equal(content(chapter17En).length, 94)
  chapter17Fr.sections.forEach((section, index) => assert.deepEqual(
    chapter17En.sections[index].blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.blocks.filter(block => block.type !== 'xref').map(block => block.type),
    section.id,
  ))
})

test('Chapter 17 owns six aligned English treatment figures', () => {
  const fr = figures(chapter17Fr)
  const en = figures(chapter17En)
  assert.equal(fr.length, 6)
  assert.equal(en.length, 6)
  assert.deepEqual(en.map(item => [item.section.id, item.index]), fr.map(item => [item.section.id, item.index]))
  assert.deepEqual(en.map(item => item.block.type === 'figure' ? item.block.src : ''), [2, 4, 6, 8, 10, 12].map(number => `/chapter-17/EN/Cartography/figure-17-${String(number).padStart(2, '0')}.png`))
  en.forEach(item => { if (item.block.type === 'figure') assert.ok(existsSync(join(root, 'public', item.block.src.slice(1))), item.block.src) })
})

test('Chapter 17 exposes eleven bidirectional English references', () => {
  const refs = references(chapter17En)
  assert.equal(refs.length, 11)
  refs.forEach(reference => {
    const url = new URL(reference.href, 'https://rop.local')
    assert.equal(url.searchParams.get('lang'), 'en')
    assert.match(url.searchParams.get('xrefBack') ?? '', /^\/lecture\/chapitre-17\?lang=en#p-/)
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 17')
  })
})

test('Chapter 17 owns its complete 25-slide deck and canonical anchors', () => {
  assert.equal(chapter17Slides.length, 25)
  assert.equal(chapter17SlidesEn.length, 25)
  assert.equal(chapter17SlideAnchors.length, 25)
  assert.deepEqual(chapter17SlideAnchorsEn, chapter17SlideAnchors)
  chapter17SlidesEn.forEach(slide => assert.ok(existsSync(join(root, 'public', slide.src.slice(1))), slide.src))
  const hashes = chapter17SlidesEn.map(slide => createHash('sha256').update(readFileSync(join(root, 'public', slide.src.slice(1)))).digest('hex'))
  assert.equal(new Set(hashes).size, 25)
  assert.ok(chapter17SlidesEn.every(slide => !slide.src.includes('/FR/')))
})

test('Chapter 17 generic English reflex integration is inert', () => {
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-17'], [])
  const before = figures(chapter17En).length
  integrateEnglishReflexPhotos(chapter17En)
  assert.equal(figures(chapter17En).length, before)
  const effective = integrateEnglishReflexDeck(chapter17En, chapter17SlidesEn, chapter17SlideAnchorsEn)
  assert.deepEqual(effective.slides, chapter17SlidesEn)
  assert.deepEqual(effective.anchors, chapter17SlideAnchorsEn)
})
