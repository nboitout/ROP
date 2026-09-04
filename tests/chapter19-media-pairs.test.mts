import assert from 'node:assert/strict'
import test from 'node:test'
import { chapter19Fr } from '../content/chapter19.fr'
import { chapter19SlideAnchors, chapter19Slides } from '../content/chapter19.slidesync'
import type { Block } from '../content/types'

const pairs = [
  ['figure-19-01.png', 'figure-19-02.png'],
  ['figure-19-03.png', 'figure-19-04.png'],
  ['figure-19-05.png', 'figure-19-06.png'],
  ['figure-19-07.png', 'figure-19-08.png'],
  ['figure-19-09.png', 'figure-19-10.png'],
  ['figure-19-11.png', 'figure-19-12.png'],
  ['figure-19-13.png', 'figure-19-14.png'],
  ['figure-19-15.png', 'figure-19-16.png'],
  ['figure-19-17.png', 'figure-19-18.png'],
  ['figure-19-19.png', 'figure-19-20.png'],
  ['figure-19-21.png', 'figure-19-22.png'],
  ['Chapter19 Cartographie et Photos -1.png', 'Chapter19 Cartographie et Photos - 2.png'],
] as const

test('Chapter 19 cartographies stay synchronized with their paired text photos', () => {
  const section = chapter19Fr.sections.find(({ id }) => id === 'zones-reflexes-podales')
  assert.ok(section, 'zones-reflexes-podales section is missing')

  for (const [cartography, photo] of pairs) {
    const slide = chapter19Slides.findIndex(({ src }) => src.endsWith(`/${cartography}`)) + 1
    assert.ok(slide > 0, `cartography is missing from the slide deck: ${cartography}`)

    const anchor = chapter19SlideAnchors.find(({ slide: value }) =>
      Array.isArray(value) ? value.includes(slide) : value === slide,
    )
    assert.ok(anchor, `cartography has no text anchor: ${cartography}`)
    assert.equal(anchor.sectionId, 'zones-reflexes-podales')

    const block: Block | undefined = section.blocks[anchor.blockIndex]
    assert.equal(block?.type, 'figure', `cartography is not anchored beside a photo: ${cartography}`)
    assert.ok(block?.type === 'figure' && block.src.endsWith(`/${photo}`),
      `${cartography} is paired with the wrong photo`)
    assert.deepEqual(anchor.end, {
      sectionId: 'zones-reflexes-podales',
      blockIndex: anchor.blockIndex,
    })
  }
})
