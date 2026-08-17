import assert from 'node:assert/strict'
import test from 'node:test'
import { chapter15Fr } from '../content/chapter15.fr'

test('Chapter 15 reflex cartographies remain immediately paired with their photos', () => {
  const section = chapter15Fr.sections.find(({ id }) => id === 'zones-reflexes-podales')
  assert.ok(section, 'zones-reflexes-podales section is missing')

  const figureEntries = section.blocks
    .map((block, index) => ({ block, index }))
    .filter((entry) => entry.block.type === 'figure')
  const figures = figureEntries.map(({ block }) => block.type === 'figure' && block.src)

  assert.deepEqual(
    figures,
    Array.from(
      { length: 10 },
      (_, index) => `/chapter-15/cartographie/figure-15-${String(index + 1).padStart(2, '0')}.png`,
    ),
  )

  for (let pair = 0; pair < figureEntries.length; pair += 2) {
    assert.equal(
      figureEntries[pair + 1].index,
      figureEntries[pair].index + 1,
      `figure pair ${pair + 1}-${pair + 2} must be adjacent`,
    )
  }
})
