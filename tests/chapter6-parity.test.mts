import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter6En } from '../content/chapter6.en'
import { chapter6Fr } from '../content/chapter6.fr'
import { chapter6SlideAnchors, chapter6SlideAnchorsEn, chapter6Slides, chapter6SlidesEn } from '../content/chapter6.slidesync'
import { assertVisibleHeadingParity } from './helpers/headingParity.mts'

const root = join(import.meta.dirname, '..')
const figures = (chapter: typeof chapter6En) => chapter.sections.flatMap((section) => section.blocks.filter((block) => block.type === 'figure'))

test('Chapter 6 English mirrors the canonical French runtime structure', () => {
  assert.deepEqual(chapter6En.sections.map((section) => section.id), chapter6Fr.sections.map((section) => section.id))
  assert.equal(chapter6En.sections.reduce((sum, section) => sum + section.blocks.length, 0), 31)
  chapter6Fr.sections.forEach((section, index) => assert.deepEqual(
    chapter6En.sections[index].blocks.map((block) => block.type),
    section.blocks.map((block) => block.type),
    section.id,
  ))
  assert.equal(figures(chapter6En).length, 0)
  assert.equal(figures(chapter6Fr).length, 0)
})

test('Chapter 6 preserves exact visible heading numbering, hierarchy, rail behavior and translated wording', () => {
  assertVisibleHeadingParity(chapter6Fr, chapter6En, 11, '5f1a48231c7f331fb5d88ebb937f58ce9b3ebd4385e2d928978d7bf4746ffc4b')
})

test('Chapter 6 preserves the canonical quantitative, neuroception, cranial-nerve, and intermediate-level propositions', () => {
  const presentation = chapter6En.sections.find(({ id }) => id === 'presentation-generale')!
  assert.deepEqual(presentation.blocks[2], {
    type: 'para',
    text: 'It explores the role of the autonomic nervous system (ANS) in social and emotional behaviour. Approximately 80% of the visceral afferents transmitted to the brain come from the vagus nerve. What happens in the body can influence variations in mental and emotional state. This is why our role in ROP is to promote regulation of the vagus nerve.',
  })

  const engagement = chapter6En.sections.find(({ id }) => id === 'engagement-social')!.blocks[1]
  assert.equal(engagement.type, 'bullets')
  if (engagement.type === 'bullets') assert.deepEqual(engagement.items.slice(-2), [
    'sucking and suckling, followed by mastication and swallowing (glossopharyngeal nerve, CN IX), during suckling and later during shared meals that foster social interaction;',
    'vocalisation through the hypoglossal nerve, CN XII.',
  ])

  const neuroception = chapter6En.sections.find(({ id }) => id === 'neuroception')!
  assert.deepEqual(neuroception.blocks[0], { type: 'para', text: 'It is the state we are in, our capacity to probe our inner state:' })
  assert.doesNotMatch(JSON.stringify(neuroception), /automatic evaluation of safety|life threat without conscious awareness/i)

  const intermediate = chapter6En.sections.find(({ id }) => id === 'application-clinique-rop')!.blocks[3]
  assert.deepEqual(intermediate, {
    type: 'lead',
    label: '8.3. Intermediate level: sympathetic system',
    text: 'Sympathetic system: sympathoadrenal medullary (SAM) axis and hypothalamic–pituitary–adrenal (HPA) axis',
  })
})

test('Chapter 6 has 18 localized slides with matching semantic anchors', () => {
  assert.equal(chapter6Slides.length, 18)
  assert.equal(chapter6SlidesEn.length, 18)
  assert.deepEqual(chapter6SlideAnchorsEn, chapter6SlideAnchors)
  chapter6SlidesEn.forEach((slide) => assert.ok(existsSync(join(root, 'public', slide.src.slice(1))), slide.src))
  const sections = new Map(chapter6En.sections.map((section) => [section.id, section]))
  chapter6SlideAnchorsEn.forEach((anchor) => {
    const section = sections.get(anchor.sectionId)
    assert.ok(section)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < section.blocks.length)
    const slides = Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]
    slides.forEach((slide) => assert.ok(slide >= 1 && slide <= chapter6SlidesEn.length))
  })
})
