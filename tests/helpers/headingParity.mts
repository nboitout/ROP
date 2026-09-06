import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import type { Chapter } from '../../content/types'
import {
  extractRenderedHeadingInventory,
  extractSectionRailInventory,
  stripHeadingNumberPrefix,
} from '../../lib/renderedHeadingInventory'

export function assertVisibleHeadingParity(
  french: Chapter,
  english: Chapter,
  expectedHeadingCount: number,
  expectedEnglishWordingHash: string,
) {
  const frHeadings = extractRenderedHeadingInventory(french)
  const enHeadings = extractRenderedHeadingInventory(english)

  assert.equal(frHeadings.length, expectedHeadingCount)
  assert.equal(enHeadings.length, expectedHeadingCount)
  assert.deepEqual(
    enHeadings.map(({ level, sectionId }) => [level, sectionId]),
    frHeadings.map(({ level, sectionId }) => [level, sectionId]),
    'rendered H2/H3 hierarchy or ordering differs',
  )
  assert.deepEqual(
    enHeadings.map(({ numberPrefix }) => numberPrefix),
    frHeadings.map(({ numberPrefix }) => numberPrefix),
    'visible heading numbering differs',
  )

  const frRail = extractSectionRailInventory(french)
  const enRail = extractSectionRailInventory(english)
  assert.deepEqual(
    enRail.map(({ sectionId, sectionIndex }) => [sectionId, sectionIndex]),
    frRail.map(({ sectionId, sectionIndex }) => [sectionId, sectionIndex]),
    'section-rail visibility or ordering differs',
  )
  assert.deepEqual(
    enRail.map(({ numberPrefix }) => numberPrefix),
    frRail.map(({ numberPrefix }) => numberPrefix),
    'section-rail numbering differs',
  )

  const englishWordingSnapshot = JSON.stringify({
    headings: enHeadings.map(({ level, sectionId, title }) => [level, sectionId, stripHeadingNumberPrefix(title)]),
    rail: enRail.map(({ sectionId, title }) => [sectionId, stripHeadingNumberPrefix(title)]),
  })
  assert.equal(
    createHash('sha256').update(englishWordingSnapshot).digest('hex'),
    expectedEnglishWordingHash,
    'translated nonnumeric heading or rail wording changed',
  )
}
