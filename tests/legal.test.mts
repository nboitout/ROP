// The two legal pages are the only content on the site that exists in six
// languages *and* has to say the same thing in each. TypeScript pins the shape
// of the content modules but not the length of their arrays, so a translation
// can silently lose a paragraph — an article of the terms, a cookie, a
// sub-processor. These tests close that gap. Run with: npm test

import assert from 'node:assert/strict'
import { test } from 'node:test'
import { cgv } from '@/app/cgv/content'
import { privacy } from '@/app/confidentialite/content'

const LANGS = ['fr', 'en', 'de', 'es', 'it', 'th'] as const
type Lang = (typeof LANGS)[number]

/** Every string in a content object, however deeply nested. */
function strings(value: unknown, path = ''): [string, string][] {
  if (typeof value === 'string') return [[path, value]]
  if (Array.isArray(value)) return value.flatMap((v, i) => strings(v, `${path}[${i}]`))
  if (value && typeof value === 'object') {
    return Object.entries(value).flatMap(([k, v]) => strings(v, path ? `${path}.${k}` : k))
  }
  return []
}

/** Array lengths, keyed by path — the shape TypeScript does not check. */
function shape(value: unknown, path = ''): Record<string, number> {
  const out: Record<string, number> = {}
  if (Array.isArray(value)) {
    out[path] = value.length
    value.forEach((v, i) => Object.assign(out, shape(v, `${path}[${i}]`)))
  } else if (value && typeof value === 'object') {
    for (const [k, v] of Object.entries(value)) {
      Object.assign(out, shape(v, path ? `${path}.${k}` : k))
    }
  }
  return out
}

/** The only substitution markers any locale may contain, and where. */
const TOKENS: [string, string][] = [['a1[0]', '{site}'], ['a13p2', '{link}']]

for (const [name, content] of [['terms of sale', cgv], ['privacy policy', privacy]] as const) {
  test(`${name}: every language carries every paragraph`, () => {
    const reference = shape(content.fr)
    for (const lang of LANGS) {
      assert.deepEqual(
        shape(content[lang as Lang]),
        reference,
        `${lang} does not have the same list lengths as fr — a paragraph, cookie or recipient was dropped or added`,
      )
    }
  })

  test(`${name}: no substitution marker survives to the reader`, () => {
    // `{site}` and `{link}` are replaced by the page; `**` marks emphasis and
    // is consumed while rendering. A stray one reaches the reader as literal
    // punctuation in a contract, which is exactly the kind of thing nobody
    // notices in a language they do not read.
    const ALLOWED = new Set(TOKENS.map(([path, token]) => `${path}:${token}`))
    for (const lang of LANGS) {
      for (const [path, text] of strings(content[lang as Lang])) {
        for (const token of text.match(/\{[a-z]+\}/g) ?? []) {
          assert.ok(ALLOWED.has(`${path}:${token}`), `${lang} ${path} has an unexpected token ${token}`)
        }
        assert.equal(
          (text.match(/\*\*/g) ?? []).length % 2,
          0,
          `${lang} ${path} has an unclosed ** emphasis marker`,
        )
      }
    }
  })

  test(`${name}: the tokens the page substitutes are still there`, () => {
    // Dropping `{link}` in translation does not break the build: it silently
    // removes the link to the privacy policy from that language's terms.
    for (const lang of LANGS) {
      const flat = Object.fromEntries(strings(content[lang as Lang]))
      for (const [path, token] of TOKENS) {
        if (flat[path] === undefined) continue
        assert.ok(flat[path].includes(token), `${lang} ${path} lost its ${token} placeholder`)
      }
    }
  })
}

test('every non-French version says the French text prevails', () => {
  for (const content of [cgv, privacy]) {
    for (const lang of LANGS) {
      const note = content[lang as Lang].translationNote
      assert.ok(note.length > 0, `${lang} has no translation note`)
      if (lang !== 'fr') {
        // Not a string match — the note is written in each language. What must
        // hold is that a reader is told which text governs, and the French one
        // is named in a form they can recognise.
        assert.match(note, /fran|fren|ฝรั่งเศส/i, `${lang} note does not name the French version`)
      }
    }
  }
})
