import assert from 'node:assert/strict'
import test from 'node:test'

import { getChapterLangs } from '../content/registry'

test('the admin chapter board reports English live for the rebuilt English editions', () => {
  for (const chapterNumber of Array.from({ length: 21 }, (_, index) => index + 1)) {
    assert.ok(
      getChapterLangs(`chapter-${chapterNumber}`).includes('en'),
      `chapter-${chapterNumber} should expose a live English edition`,
    )
  }
})
