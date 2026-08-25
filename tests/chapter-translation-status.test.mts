import assert from 'node:assert/strict'
import test from 'node:test'

import { getChapterLangs } from '../content/registry'

test('the admin chapter board reports English live for translated chapters through 15', () => {
  for (const chapterNumber of [...Array.from({ length: 13 }, (_, index) => index + 1), 14, 15]) {
    assert.ok(
      getChapterLangs(`chapter-${chapterNumber}`).includes('en'),
      `chapter-${chapterNumber} should expose a live English edition`,
    )
  }
})
