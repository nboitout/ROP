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
  const expected = [
    ...Array.from({ length: 18 }, (_, index) => {
      const number = index + 1
      return `/chapter-18/EN/Images/NCH 18 EN IMG ${number}${number === 14 || number === 15 ? ' V2' : ''}.png?v=20260826-en`
    }),
    '/chapter-18/EN/Images/NCH 18 EN VISCEROSOMATIC RELATIONSHIPS V2.png?v=20260826-en',
    '/chapter-18/EN/Images/NCH 18 EN IMG 19.png?v=20260826-en',
    '/chapter-18/EN/Images/NCH 18 EN IMG 20.png?v=20260826-en',
    '/chapter-18/EN/Images/NCH 18 EN IMG 21 V2.png?v=20260826-en',
    '/chapter-18/EN/Images/NCH 18 EN IMG 22 V2.png?v=20260826-en',
    ...[9, 11, 13, 1, 3, 5, 7].map(number => `/chapter-18/EN/Cartography/figure-18-${String(number).padStart(2, '0')}.png?v=20260826-en`),
  ]

  assert.deepEqual(slides.map(slide => slide.src), expected)
})
