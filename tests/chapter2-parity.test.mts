import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter2En } from '../content/chapter2.en'
import { chapter2Fr } from '../content/chapter2.fr'
import { chapter2SlideAnchorsEn, chapter2SlideAnchorsFr, chapter2Slides, chapter2SlidesEn } from '../content/chapter2.slidesync'
import { extractRenderedHeadingInventory } from '../lib/renderedHeadingInventory'
import { assertVisibleHeadingParity } from './helpers/headingParity.mts'

const root = join(import.meta.dirname, '..')

test('Chapter 2 English mirrors the canonical French runtime structure', () => {
  assert.deepEqual(chapter2En.sections.map((section) => section.id), chapter2Fr.sections.map((section) => section.id))
  assert.equal(chapter2En.sections.length, 13)
  assert.equal(chapter2En.sections.reduce((sum, section) => sum + section.blocks.length, 0), 109)
  chapter2Fr.sections.forEach((section, index) => {
    assert.deepEqual(
      chapter2En.sections[index].blocks.map((block) => block.type),
      section.blocks.map((block) => block.type),
      section.id,
    )
  })
})

test('Chapter 2 preserves exact visible heading numbering, hierarchy, rail behavior and translated wording', () => {
  assertVisibleHeadingParity(chapter2Fr, chapter2En, 35, 'ddf8456dee48d236b2cbf878d61ee9d0c97c5fe85b9f0dc7ba11209209113558')

  const visibleTitles = new Set(extractRenderedHeadingInventory(chapter2En).map(({ title }) => title))
  const notes = chapter2En.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'note'))
  assert.equal(notes.length, 5)
  for (const note of notes) {
    assert.ok(!visibleTitles.has(note.label), `note label was treated as H2/H3: ${note.label}`)
  }
})

test('Chapter 2 preserves the four explanatory note label/body pairs', () => {
  const expected = [
    ['technique', 'Relevance to ROP', [
      'Force and vigorous rubbing during reflex massage must be avoided. The greater the pressure, the more the practitioner perceives their own fingers at the expense of the bony landmarks and textural changes that guide the search for reflex zones.',
      'Even when properly performed, a session constitutes a stimulus for the body. It must take account of the patient’s vitality and adaptive capacity.',
    ]],
    ['modalites', 'How should the term “vitality” be interpreted?', [
      'In this chapter, vitality denotes a clinical and functional assessment: energy level, fatigability, sleep quality, ability to resume activities, course of the main symptom, and overall subjective state.',
      'It does not correspond to a single biological variable. To be useful, it must be compared with the patient’s baseline and monitored using simple, reproducible questions.',
    ]],
    ['reactions', 'Contribute to ROP feedback with SuiviPatient', [
      'The chronology and reactions described in this chapter are based mainly on practitioners’ clinical experience. To document them more effectively, the SuiviPatient application can collect, at regular intervals, simple indicators compared with baseline: main symptom, pain or discomfort, vitality, sleep, visceral functions, functional capacity, and unusual reactions.',
      'Practitioners reading this book who wish to join the ROP community and use the SuiviPatient application free of charge with their patients are invited to contact us. This process must respect patient consent and the confidentiality of the information collected.',
    ]],
    ['conseils', 'Practical summary', [
      'Before the session: define the main symptom and its baseline level.',
      'After the session: observe reactions and document progress.',
      'On days 3–4: decide whether to stop, provide another session, or reassess.',
      'After three sessions without improvement: reconsider the indication and, if necessary, refer the patient.',
    ]],
  ] as const

  const frPairs = chapter2Fr.sections.flatMap((section) => section.blocks.flatMap((block) => block.type === 'note'
    ? [{ sectionId: section.id, bodyLength: block.body.length }]
    : []))
  const enPairs = chapter2En.sections.flatMap((section) => section.blocks.flatMap((block) => block.type === 'note'
    ? [{ sectionId: section.id, bodyLength: block.body.length }]
    : []))
  assert.deepEqual(enPairs, frPairs)

  for (const [sectionId, label, body] of expected) {
    const note = chapter2En.sections.find((section) => section.id === sectionId)?.blocks.find((block) => block.type === 'note')
    assert.ok(note && note.type === 'note', sectionId)
    assert.equal(note.label, label)
    assert.deepEqual(note.body, body)
    assert.doesNotMatch(note.label, /\n|\.(?:\s|$)/u)
  }
})

test('Chapter 2 preserves the canonical bibliography', () => {
  const fr = chapter2Fr.sections.find((section) => section.id === 'references-bibliographiques')!.blocks[0]
  const en = chapter2En.sections.find((section) => section.id === 'references-bibliographiques')!.blocks[0]
  assert.equal(fr.type, 'numbered')
  assert.equal(en.type, 'numbered')
  if (fr.type === 'numbered' && en.type === 'numbered') assert.deepEqual(en.items, fr.items)
})

test('Chapter 2 exposes the same 15 logical slides and semantic anchor ranges', () => {
  assert.equal(chapter2Slides.length, 15)
  assert.equal(chapter2SlidesEn.length, 15)
  assert.equal(chapter2SlideAnchorsFr.length, 16)
  assert.deepEqual(chapter2SlideAnchorsEn, chapter2SlideAnchorsFr)
  assert.match(chapter2SlidesEn[13].title, /Contraindications/)
  assert.match(chapter2SlidesEn[14].title, /Indications/)
  chapter2SlidesEn.forEach((slide) => assert.ok(existsSync(join(root, 'public', slide.src.slice(1))), slide.src))

  const sections = new Map(chapter2En.sections.map((section) => [section.id, section]))
  for (const anchor of chapter2SlideAnchorsEn) {
    const section = sections.get(anchor.sectionId)
    assert.ok(section, anchor.sectionId)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < section.blocks.length)
    assert.ok(anchor.slide >= 1 && anchor.slide <= chapter2SlidesEn.length)
    if (anchor.end) {
      const endSection = sections.get(anchor.end.sectionId)
      assert.ok(endSection, anchor.end.sectionId)
      assert.ok(anchor.end.blockIndex >= -1 && anchor.end.blockIndex < endSection.blocks.length)
    }
  }
})
