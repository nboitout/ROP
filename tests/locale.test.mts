import assert from 'node:assert/strict'
import { test } from 'node:test'
import { languageAlternates, localizedHref, resolveLang } from '../app/i18n/locale'

test('an explicit supported locale wins over a persisted preference', () => {
  assert.equal(resolveLang('en', 'fr'), 'en')
  assert.equal(resolveLang('fr', 'en'), 'fr')
})

test('an invalid explicit locale falls back to French instead of a stale cookie', () => {
  assert.equal(resolveLang('xyz', 'en'), 'fr')
  assert.equal(resolveLang(undefined, 'en'), 'en')
  assert.equal(resolveLang(undefined, 'xyz'), 'fr')
})

test('localized links preserve paths, parameters, and fragments', () => {
  assert.equal(localizedHref('/equipe', 'en'), '/equipe?lang=en')
  assert.equal(localizedHref('/?gate=free#acces-libre', 'en'), '/?gate=free&lang=en#acces-libre')
  assert.equal(localizedHref('/equipe?lang=fr', 'en'), '/equipe?lang=en')
  assert.equal(localizedHref('#chapitres', 'en'), '#chapitres')
  assert.equal(localizedHref('https://example.com/page', 'en'), 'https://example.com/page')
})

test('SEO alternates expose canonical language URLs and an x-default', () => {
  const alternates = languageAlternates('/equipe')
  assert.match(alternates.en, /\/equipe\?lang=en$/)
  assert.match(alternates.fr, /\/equipe\?lang=fr$/)
  assert.equal(alternates['x-default'], alternates.fr)
})
