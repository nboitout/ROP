import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter1En } from '../content/chapter1.en'
import { chapter1Fr } from '../content/chapter1.fr'
import {
  chapter1SlideAnchors,
  chapter1SlideAnchorsEn,
  chapter1Slides,
  chapter1SlidesEn,
  type SyncAnchor,
} from '../content/chapter1.slidesync'
import type { Chapter } from '../content/types'

const countBlocks = (chapter: Chapter) => chapter.sections.reduce((total, section) => total + section.blocks.length, 0)

const validateAnchors = (chapter: Chapter, anchors: SyncAnchor[], slideCount: number) => {
  const sections = new Map(chapter.sections.map((section) => [section.id, section.blocks]))

  for (const anchor of anchors) {
    const blocks = sections.get(anchor.sectionId)
    assert.ok(blocks, `unknown anchor section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length, `invalid anchor ${JSON.stringify(anchor)}`)

    const slideNumbers = Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]
    assert.ok(slideNumbers.every((slide) => slide >= 1 && slide <= slideCount), `invalid slide number ${JSON.stringify(anchor.slide)}`)

    if (anchor.itemIndex !== undefined) {
      const block = blocks[anchor.blockIndex]
      assert.ok(block && 'items' in block && anchor.itemIndex >= 0 && anchor.itemIndex < block.items.length)
    }

    if (anchor.end) {
      const endBlocks = sections.get(anchor.end.sectionId)
      assert.ok(endBlocks, `unknown end section ${anchor.end.sectionId}`)
      assert.ok(anchor.end.blockIndex >= -1 && anchor.end.blockIndex < endBlocks.length, `invalid anchor end ${JSON.stringify(anchor.end)}`)
      if (anchor.end.itemIndex !== undefined) {
        const block = endBlocks[anchor.end.blockIndex]
        assert.ok(block && 'items' in block && anchor.end.itemIndex >= 0 && anchor.end.itemIndex < block.items.length)
      }
    }
  }
}

test('Chapter 1 English prose mirrors the authoritative French structure', () => {
  assert.equal(chapter1En.sections.length, 8)
  assert.equal(chapter1En.sections.length, chapter1Fr.sections.length)
  assert.equal(countBlocks(chapter1En), 82)
  assert.equal(countBlocks(chapter1En), countBlocks(chapter1Fr))
  assert.deepEqual(chapter1En.sections.map(({ id }) => id), chapter1Fr.sections.map(({ id }) => id))

  for (const [index, frenchSection] of chapter1Fr.sections.entries()) {
    const englishSection = chapter1En.sections[index]
    assert.equal(englishSection.blocks.length, frenchSection.blocks.length, `block count differs in ${frenchSection.id}`)
    assert.deepEqual(
      englishSection.blocks.map(({ type }) => type),
      frenchSection.blocks.map(({ type }) => type),
      `block sequence differs in ${frenchSection.id}`,
    )
  }
})

test('Chapter 1 exposes complete 19-slide French and English decks with local assets', () => {
  assert.equal(chapter1Slides.length, 19)
  assert.equal(chapter1SlidesEn.length, 19)
  assert.equal(classicSlideDecks['chapter-1'].fr?.length, 19)
  assert.equal(classicSlideDecks['chapter-1'].en?.length, 19)

  for (const slide of [...chapter1Slides, ...chapter1SlidesEn]) {
    const assetPath = resolve('public', decodeURIComponent(slide.src).replace(/^\//, ''))
    assert.ok(existsSync(assetPath), `missing slide ${slide.src}`)
  }

  assert.deepEqual(chapter1SlidesEn.slice(-2).map(({ title }) => title), [
    'The ROP Clinical Approach: Return to Balance',
    'Practical Summary',
  ])
})

test('Chapter 1 French and English anchors resolve and cover all 19 slides', () => {
  validateAnchors(chapter1Fr, chapter1SlideAnchors, chapter1Slides.length)
  validateAnchors(chapter1En, chapter1SlideAnchorsEn, chapter1SlidesEn.length)

  const covered = (anchors: SyncAnchor[]) => anchors.flatMap(({ slide }) => Array.isArray(slide) ? slide : [slide])
  assert.deepEqual(covered(chapter1SlideAnchors), Array.from({ length: 19 }, (_, index) => index + 1))
  assert.deepEqual(covered(chapter1SlideAnchorsEn), Array.from({ length: 19 }, (_, index) => index + 1))
  assert.deepEqual(chapter1SlideAnchors.at(-1)?.end, { sectionId: 'synthese-operationnelle', blockIndex: 0 })
  assert.deepEqual(chapter1SlideAnchorsEn.at(-1)?.end, { sectionId: 'synthese-operationnelle', blockIndex: 0 })
})

test('Chapter 1 selectors 6–12 preserve artwork, subject, passage boundaries and adjacent sequence', () => {
  const expected = [
    { slide: 6, fr: /Régulation neurovégétative/, en: /autonomic nervous system/i, asset: 7, start: ['mobilite-viscerale', 11], end: ['mobilite-viscerale', 13], phrase: /autonomic nervous system/i },
    { slide: 7, fr: /mobilité automatique.*cardiaque/i, en: /cardiac motion/i, asset: 6, start: ['mobilite-viscerale', 13], end: ['mobilite-viscerale', 17], phrase: /Cardiac movement/i },
    { slide: 8, fr: /motilité/i, en: /Motility/i, asset: 8, start: ['mobilite-viscerale', 17], end: ['mobilite-viscerale', 22], phrase: /Motility: intrinsic movement/i },
    { slide: 9, fr: /Biorythmes/i, en: /Biorhythms/i, asset: 9, start: ['mobilite-viscerale', 22], end: ['mrp', -1], phrase: /Biological rhythms/i },
    { slide: 10, fr: /articulations.*viscérales/i, en: /Visceral.*Joints/i, asset: 10, start: ['articulations-viscerales', -1], end: ['articulations-viscerales', 3], phrase: /Visceral “articulations”/i },
    { slide: 11, fr: /Interstitium.*séreuses/i, en: /Serous Membranes and Interstitium/i, asset: 11, start: ['articulations-viscerales', 3], end: ['articulations-viscerales', 9], phrase: /Serous membranes: gliding and pressures/i },
    { slide: 12, fr: /moyens d’union/i, en: /Means of Attachment/i, asset: 12, start: ['articulations-viscerales', 9], end: ['articulations-viscerales', 13], phrase: /Visceral attachments/i },
  ] as const

  const anchorFor = (anchors: SyncAnchor[], slide: number) => anchors.find((anchor) => anchor.slide === slide)!
  const subjectAt = (chapter: Chapter, sectionId: string, blockIndex: number) => {
    const section = chapter.sections.find((candidate) => candidate.id === sectionId)!
    return blockIndex === -1 ? section.title : JSON.stringify(section.blocks[blockIndex])
  }

  for (const item of expected) {
    const frSlide = chapter1Slides[item.slide - 1]
    const enSlide = chapter1SlidesEn[item.slide - 1]
    assert.match(frSlide.title, item.fr, `FR slide ${item.slide} title`)
    assert.match(enSlide.title, item.en, `EN slide ${item.slide} title`)
    assert.match(decodeURIComponent(frSlide.src), new RegExp(`slide-0?${item.asset}\\.png$`))
    assert.match(decodeURIComponent(enSlide.src), new RegExp(`IMG ${item.asset}(?: V2)?\\.png$`))

    for (const [chapter, anchors] of [[chapter1Fr, chapter1SlideAnchors], [chapter1En, chapter1SlideAnchorsEn]] as const) {
      const anchor = anchorFor(anchors, item.slide)
      assert.deepEqual([anchor.sectionId, anchor.blockIndex], item.start, `slide ${item.slide} start`)
      assert.deepEqual([anchor.end?.sectionId, anchor.end?.blockIndex], item.end, `slide ${item.slide} end`)
    }
    assert.match(subjectAt(chapter1En, item.start[0], item.start[1]), item.phrase, `EN slide ${item.slide} semantic owner`)
  }

  assert.match(chapter1SlidesEn[4].title, /Somatic mobility/i)
  assert.match(chapter1SlidesEn[12].title, /Lesser omentum/i)
  assert.equal(new Set(chapter1SlidesEn.map(({ src }) => src)).size, 19)
  assert.equal(new Set(chapter1SlideAnchorsEn.flatMap(({ slide }) => Array.isArray(slide) ? slide : [slide])).size, 19)
})
