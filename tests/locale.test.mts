import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  DEFAULT_LANG,
  languageAlternates,
  LOCALE_CONFIG,
  localizedHref,
  localizedSiteMetadata,
  resolveLang,
  SUPPORTED_LANGS,
} from '../app/i18n/locale'

for (const lang of SUPPORTED_LANGS) {
  test(`${lang}: an explicit locale wins over every persisted preference`, () => {
    for (const persisted of SUPPORTED_LANGS) assert.equal(resolveLang(lang, persisted), lang)
  })

  test(`${lang}: localized links preserve the selected locale`, () => {
    assert.equal(localizedHref('/equipe', lang), `/equipe?lang=${lang}`)
    assert.equal(localizedHref('/?gate=free#acces-libre', lang), `/?gate=free&lang=${lang}#acces-libre`)
    assert.equal(localizedHref('/equipe?lang=fr', lang), `/equipe?lang=${lang}`)
  })

  test(`${lang}: metadata and hreflang are configured`, () => {
    const metadata = localizedSiteMetadata(lang)
    const alternates = languageAlternates('/equipe')
    assert.ok(metadata.title.length > 0)
    assert.ok(metadata.description.length > 0)
    assert.match(LOCALE_CONFIG[lang].openGraphLocale, /^[a-z]{2}_[A-Z]{2}$/)
    assert.match(alternates[lang], new RegExp(`/equipe\\?lang=${lang}$`))
  })
}

test('an invalid explicit locale falls back to French instead of a stale cookie', () => {
  for (const persisted of SUPPORTED_LANGS) assert.equal(resolveLang('xyz', persisted), DEFAULT_LANG)
  assert.equal(resolveLang(undefined, 'xyz'), DEFAULT_LANG)
})

test('localized links leave same-page fragments and external URLs unchanged', () => {
  assert.equal(localizedHref('#chapitres', 'en'), '#chapitres')
  assert.equal(localizedHref('https://example.com/page', 'en'), 'https://example.com/page')
})

test('SEO alternates expose all six locales and an x-default', () => {
  const alternates = languageAlternates('/equipe')
  assert.deepEqual(Object.keys(alternates), [...SUPPORTED_LANGS, 'x-default'])
  assert.equal(alternates['x-default'], alternates[DEFAULT_LANG])
})
