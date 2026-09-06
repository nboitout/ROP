import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { chapter9En } from '../content/chapter9.en'
import { chapter9Fr } from '../content/chapter9.fr'
import {
  chapter9SlideAnchorsEn,
  chapter9Slides,
  chapter9SlidesEn,
} from '../content/chapter9.slidesync'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { getChapter } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck } from '../lib/englishReflexMedia'
import type { Block, Chapter, CrossReference } from '../content/types'

const contentBlocks = (chapter: Chapter) => chapter.sections.map((section) => ({
  id: section.id,
  types: section.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
}))

const figures = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => block.type === 'figure'
    ? [{ sectionId: section.id, blockIndex, block }]
    : []),
)

const references = (chapter: Chapter): CrossReference[] => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block) => [
    ...(block.type === 'xref' ? [block] : []),
    ...(block.xrefs ?? []),
  ]),
)

const publicPath = (src: string) => resolve('public', decodeURIComponent(src.split(/[?#]/, 1)[0].slice(1)))

test('Chapter 9 English content mirrors the authoritative French block structure', () => {
  assert.deepEqual(chapter9En.sections.map((section) => section.id), chapter9Fr.sections.map((section) => section.id))
  assert.deepEqual(contentBlocks(chapter9En), contentBlocks(chapter9Fr))

  const frFigures = figures(chapter9Fr)
  const enFigures = figures(chapter9En)
  assert.equal(frFigures.length, 2)
  assert.equal(enFigures.length, 2)
  assert.deepEqual(enFigures.map(({ sectionId }) => sectionId), frFigures.map(({ sectionId }) => sectionId))
  assert.deepEqual(enFigures.map(({ block }) => block.caption), [
    'Photo: Oesophageal hiatus and right and left vagus nerves',
    'Photo: Lesser curvature of the stomach',
  ])
  assert.deepEqual(enFigures.map(({ block }) => block.alt), [
    'Foot treatment landmark for the oesophageal hiatus with the right and left vagus nerves',
    'Foot treatment landmark for the lesser curvature of the stomach between the cardia and pylorus',
  ])
  assert.ok(enFigures[0].block.src.endsWith('/figure-9-02.png'))
  assert.ok(enFigures[1].block.src.endsWith('/figure-9-04.png'))
  assert.ok(enFigures.every(({ block }) => block.src.includes('/EN/Cartography/') && existsSync(publicPath(block.src))))
  assert.ok(enFigures.every(({ block }) => !/pylorus/i.test(block.caption)))
})

test('Chapter 9 keeps eight exact English cross-references without changing block indices', () => {
  const { chapter } = getChapter('chapter-9', 'en')
  const frReferences = references(chapter9Fr)
  const enReferences = references(chapter)
  assert.equal(frReferences.length, 8)
  assert.equal(enReferences.length, 8)
  for (const reference of enReferences) {
    const url = new URL(reference.href, 'https://rop.test')
    assert.equal(url.searchParams.get('lang'), 'en')
  }
})

test('Chapter 9 exposes the canonical 23-slide English deck in raw, classic and synchronized modes', () => {
  assert.equal(chapter9Slides.length, 23)
  assert.equal(chapter9SlidesEn.length, 23)
  assert.equal(classicSlideDecks['chapter-9'].en?.length, 23)
  assert.deepEqual(integrateEnglishReflexDeck(chapter9En, chapter9SlidesEn, chapter9SlideAnchorsEn), {
    slides: chapter9SlidesEn,
    anchors: chapter9SlideAnchorsEn,
  })
  assert.equal(chapter9SlidesEn[4].title, 'Sphincters: Gatekeepers of Transit')
  assert.equal(chapter9SlidesEn[5].title, 'Anatomical Relationships')
  assert.deepEqual(chapter9SlidesEn.slice(10, 20).map((slide) => slide.title), [
    'Matrix of Chemical and Hormonal Digestion',
    'Gastric Emptying: the Pyloric Sieve',
    'Gastric Pathological Continuum',
    'Red Flags: Diagnoses of Exclusion',
    'Functional Pathology Matrix',
    'Pathological Cascade: Hypochlorhydria and Iron',
    'Stomach: Viscerosomatic Relationships',
    'Visceral–Emotional Relationships: Stomach',
    'ROP Therapeutic Dashboard',
    'ROP Cartography: Reflex Targets',
  ])
  assert.deepEqual(chapter9SlidesEn.slice(20).map((slide) => slide.title), [
    'Oesophageal Hiatus and Right/Left Vagus Nerves',
    'Plantar Cartography of the Stomach',
    'Limbic Brain–Stomach Relationship',
  ])
  assert.ok(chapter9SlidesEn.every((slide) => existsSync(publicPath(slide.src))))
})

test('Chapter 9 anchors cover all slides and end the reflex slides at their semantic targets', () => {
  assert.deepEqual(chapter9SlideAnchorsEn.map((anchor) => anchor.slide), Array.from({ length: 23 }, (_, index) => index + 1))
  for (const anchor of chapter9SlideAnchorsEn) {
    const section = chapter9En.sections.find((candidate) => candidate.id === anchor.sectionId)
    assert.ok(section, `missing section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex === -1 || anchor.blockIndex < section.blocks.length, `invalid anchor ${anchor.slide}`)
    if (anchor.end) {
      const endSection = chapter9En.sections.find((candidate) => candidate.id === anchor.end?.sectionId)
      assert.ok(endSection && anchor.end.blockIndex < endSection.blocks.length, `invalid end anchor ${anchor.slide}`)
    }
  }
  const zones = chapter9En.sections.find((section) => section.id === 'zones-reflexes-podales')!
  const slide21 = chapter9SlideAnchorsEn.find((anchor) => anchor.slide === 21)!
  const slide22 = chapter9SlideAnchorsEn.find((anchor) => anchor.slide === 22)!
  const slide23 = chapter9SlideAnchorsEn.find((anchor) => anchor.slide === 23)!
  assert.equal(zones.blocks[slide21.end!.blockIndex].type, 'figure')
  assert.equal(zones.blocks[slide22.end!.blockIndex].type, 'figure')
  assert.equal(slide23.gapBefore, 'half')
  assert.deepEqual(slide23, {
    sectionId: 'zones-reflexes-podales', blockIndex: 21, slide: 23, gapBefore: 'half',
    end: { sectionId: 'zones-reflexes-podales', blockIndex: 22 },
  })
  assert.match(JSON.stringify(zones.blocks[21]), /Limbic brain–stomach balance/)
  assert.match(JSON.stringify(zones.blocks[22]), /does not describe a direct anatomical connection/)
  assert.match(JSON.stringify(zones.blocks[23]), /13\.6\. Associated support areas/)
  assert.doesNotMatch(JSON.stringify(zones.blocks.slice(slide23.blockIndex, slide23.end!.blockIndex + 1)), /Associated support areas|Clinical interpretation|Safety principle/)
  assert.equal(chapter9SlideAnchorsEn.filter(({ slide }) => slide === 23).length, 1)
  assert.match(chapter9SlidesEn[22].src, /figure-9-05\.png$/)
})

test('Chapter 9 reflex-media metadata keeps the canonical three subjects and creates no runtime duplicates', () => {
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-9'].map((pair) => pair.label), [
    'Oesophageal hiatus and right and left vagus nerves',
    'Stomach and lesser curvature',
    'Limbic brain–stomach relationship',
  ])
  assert.equal(figures(getChapter('chapter-9', 'en').chapter).length, 2)
})
