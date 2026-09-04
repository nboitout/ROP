import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { test } from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'

function publicAssetPath(src: string): string {
  const pathname = src.split('?', 1)[0]
  return `public${decodeURIComponent(pathname)}`
}

test('every chapter has a distinct, complete English slide deck', () => {
  for (let chapterNumber = 1; chapterNumber <= 21; chapterNumber += 1) {
    const key = `chapter-${chapterNumber}`
    const decks = classicSlideDecks[key]
    const english = decks?.en ?? []
    const french = decks?.fr ?? []

    assert.ok(english.length > 0, `${key} has no English slide deck`)
    assert.notDeepEqual(
      english.map((slide) => slide.src),
      french.map((slide) => slide.src),
      `${key} reuses its French slide deck for English`,
    )

    for (const slide of english) {
      assert.ok(
        existsSync(publicAssetPath(slide.src)),
        `${key} is missing English slide asset ${slide.src}`,
      )
      assert.ok(
        !french.some((candidate) => candidate.src === slide.src),
        `${key} English slide URL also appears in the French deck: ${slide.src}`,
      )
    }
  }
})

test('Chapter 18 English slides use the dedicated English assets with a cache revision', () => {
  const slides = classicSlideDecks['chapter-18'].en ?? []
  const v2Slides = new Set([14, 21, 22])

  assert.equal(slides.length, 22)
  for (const [index, slide] of slides.entries()) {
    const slideNumber = index + 1
    const version = v2Slides.has(slideNumber) ? ' V2' : ''
    assert.equal(slide.src, `/chapter-18/EN/Images/NCH 18 EN IMG ${slideNumber}${version}.png?v=20260826-en`)
  }
})
