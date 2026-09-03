import assert from 'node:assert/strict'
import test from 'node:test'
import { chapter15Fr } from '../content/chapter15.fr'
import {
  chapter15HalfBreaks,
  chapter15SlideAnchors,
  chapter15Slides,
} from '../content/chapter15.slidesync'

test('Chapter 15 reflex cartographies stay synchronized with their paired text photos', () => {
  const section = chapter15Fr.sections.find(({ id }) => id === 'zones-reflexes-podales')
  assert.ok(section, 'zones-reflexes-podales section is missing')

  const photos = section.blocks
    .map((block, index) => ({ block, index }))
    .filter((entry) => entry.block.type === 'figure')
  const photoSources = photos.map(({ block }) => block.type === 'figure' && block.src)

  assert.deepEqual(
    photoSources,
    [2, 4, 6, 8, 10].map(
      (number) => `/chapter-15/FR/cartographie/figure-15-${String(number).padStart(2, '0')}.png`,
    ),
  )

  assert.deepEqual(
    chapter15Slides.slice(-5).map(({ src }) => src),
    [1, 3, 5, 7, 9].map(
      (number) => `/chapter-15/FR/cartographie/figure-15-${String(number).padStart(2, '0')}.png`,
    ),
  )
  assert.deepEqual(
    chapter15SlideAnchors.slice(-5).map(({ blockIndex, slide }) => ({ blockIndex, slide })),
    photos.map(({ index }, pair) => ({ blockIndex: index, slide: 29 + pair })),
  )
})

test('Chapter 15 ends slide 28 and inserts a half-page break before section 11', () => {
  const slide28 = chapter15SlideAnchors.find(({ slide }) => slide === 28)
  assert.deepEqual(slide28?.end, {
    sectionId: 'relations-viscero-emotionnelles',
    blockIndex: -1,
  })
  assert.deepEqual(chapter15HalfBreaks, [{
    sectionId: 'relations-viscero-emotionnelles',
    blockIndex: -1,
  }])
})
