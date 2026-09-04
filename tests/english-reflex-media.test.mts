import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'
import { getChapter } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck } from '../lib/englishReflexMedia'

for (const [chapterKey, pairs] of Object.entries(ENGLISH_REFLEX_MEDIA)) {
  test(`${chapterKey} exposes its English cartography/photo pairs in the reflex-zone section`, () => {
    const { chapter } = getChapter(chapterKey as Parameters<typeof getChapter>[0], 'en')
    const section = chapter.sections.find((candidate) => /(?:zones?-reflexes?|reflex-zones?)/i.test(candidate.id))
      ?? (chapter.slug === 'chapter-14' ? chapter.sections.find((candidate) => candidate.id === 'rop') : undefined)
    assert.ok(section, `${chapterKey} has no reflex-zone section`)

    for (const pair of pairs) {
      assert.ok(existsSync(resolve('public', pair.cartography.slice(1))), `missing ${pair.cartography}`)
      if (pair.photo) {
        assert.ok(existsSync(resolve('public', pair.photo.slice(1))), `missing ${pair.photo}`)
        assert.ok(
          section.blocks.some((block) => block.type === 'figure' && block.src.toLowerCase() === pair.photo?.toLowerCase()),
          `${pair.photo} is not integrated into the English reflex-zone prose`,
        )
      }
    }

    const integrated = integrateEnglishReflexDeck(chapter, [], [])
    assert.equal(integrated.slides.length, pairs.length)
    assert.equal(integrated.anchors.length, pairs.length)
    assert.ok(integrated.anchors.every((anchor) => anchor.sectionId === section.id))
  })
}
