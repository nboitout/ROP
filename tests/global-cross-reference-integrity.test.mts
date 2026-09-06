import assert from 'node:assert/strict'
import test from 'node:test'
import { chapterKeyFromHref } from '../lib/access'
import { readerXrefHref } from '../lib/access'
import { englishCrossReferenceSyncIssues, getChapterTranslations } from '../content/registry'
import {
  destinationChapter,
  destinationIdExists,
  expectedReaderPath,
  inventoryRenderedCrossReferences,
  semanticTarget,
  type RenderedCrossReference,
} from './helpers/crossReferenceInventory.mts'

const inventory = inventoryRenderedCrossReferences()

function context(entry: RenderedCrossReference) {
  return `${entry.chapterKey}:${entry.lang}:${entry.sectionId}:${entry.blockIndex}:${entry.placement}`
}

function counts(values: string[]) {
  const result = new Map<string, number>()
  for (const value of values) result.set(value, (result.get(value) ?? 0) + 1)
  return result
}

test('the exhaustive rendered inventory contains all 400 bilingual references', () => {
  assert.equal(inventory.length, 400)
  assert.equal(inventory.filter(({ lang }) => lang === 'fr').length, 200)
  assert.equal(inventory.filter(({ lang }) => lang === 'en').length, 200)
  assert.deepEqual(englishCrossReferenceSyncIssues, [])
})

test('every rendered reference has a real source and an exact authoritative return', () => {
  for (const entry of inventory) {
    const message = context(entry)
    const source = getChapterTranslations(entry.chapterKey)[entry.lang]
    assert.ok(source, `${message}: source chapter is absent`)
    const section = source.sections.find(({ id }) => id === entry.sectionId)
    assert.ok(section, `${message}: source section is absent`)
    assert.ok(entry.blockIndex < section.blocks.length, `${message}: source block is absent`)
    assert.equal(section.blocks[entry.blockIndex].type, entry.sourceBlockType, `${message}: source block changed during inventory`)

    // Current references are block-level. A reference attached to a list is
    // anchored to the list root; no current schema stores a reference on an
    // individual item without an item DOM id.
    assert.equal(entry.sourceAnchorId, `p-${entry.sectionId}-${entry.blockIndex}`)

    const url = new URL(entry.renderedHref, 'https://rop.test')
    const expectedBack = `${expectedReaderPath(entry.chapterKey)}?lang=${entry.lang}#${entry.sourceAnchorId}`
    const chapterNumber = entry.chapterKey.match(/^chapter-(\d+)$/)?.[1]
    const expectedLabel = entry.lang === 'en'
      ? (chapterNumber ? `Back to Chapter ${chapterNumber}` : 'Back to the reference')
      : (chapterNumber ? `Retour au chapitre ${chapterNumber}` : 'Retour à la référence')
    assert.equal(url.searchParams.get('xrefBack'), expectedBack, `${message}: stale return origin`)
    assert.equal(url.searchParams.get('xrefBackLabel'), expectedLabel, `${message}: wrong localized return label`)
    assert.equal(url.searchParams.getAll('xrefBack').length, 1, `${message}: duplicate xrefBack`)
    assert.equal(url.searchParams.getAll('xrefBackLabel').length, 1, `${message}: duplicate xrefBackLabel`)

    const returnUrl = new URL(url.searchParams.get('xrefBack')!, 'https://rop.test')
    assert.equal(returnUrl.pathname, expectedReaderPath(entry.chapterKey), `${message}: return route changed`)
    assert.equal(returnUrl.searchParams.get('lang'), entry.lang, `${message}: return language changed`)
    assert.equal(returnUrl.hash, `#${entry.sourceAnchorId}`, `${message}: return fragment changed`)
  }
})

test('every rendered destination is implemented, localized, and resolves to a reader DOM id', () => {
  for (const entry of inventory) {
    const message = context(entry)
    const url = new URL(entry.renderedHref, 'https://rop.test')
    assert.doesNotMatch(url.pathname, /-rework(?:\/|$)/, `${message}: retired route`)
    assert.notEqual(url.pathname, '/lecture/fondements-neuro-anatomiques', `${message}: retired foundation route`)
    assert.equal(url.searchParams.get('lang') ?? 'fr', entry.lang, `${message}: destination language changed`)

    const targetKey = chapterKeyFromHref(entry.renderedHref)
    if (!targetKey) {
      assert.equal(url.pathname, '/fondements-neuro-anatomiques', `${message}: unimplemented destination route`)
      assert.equal(url.hash, '', `${message}: foundation fragment is not rendered`)
      continue
    }

    const target = destinationChapter(entry)
    assert.ok(target, `${message}: destination chapter/language is absent`)
    assert.ok(destinationIdExists(target, url.hash), `${message}: destination id ${url.hash} is absent`)
    if (targetKey === 'chapter-5') {
      assert.doesNotMatch(url.hash, /^#(?:sec|p)-(?:sga|zones-reflexes-podales)(?:-|$)/, `${message}: removed Chapter 5 destination`)
    }
  }
})

test('French and English inventories retain paired semantic destinations', () => {
  const chapterKeys = new Set(inventory.map(({ chapterKey }) => chapterKey))
  for (const chapterKey of chapterKeys) {
    const french = inventory.filter((entry) => entry.chapterKey === chapterKey && entry.lang === 'fr')
    const english = inventory.filter((entry) => entry.chapterKey === chapterKey && entry.lang === 'en')
    assert.equal(english.length, french.length, `${chapterKey}: bilingual reference count differs`)

    const frenchRoutes = counts(french.map((entry) => new URL(entry.renderedHref, 'https://rop.test').pathname))
    const englishRoutes = counts(english.map((entry) => new URL(entry.renderedHref, 'https://rop.test').pathname))
    assert.deepEqual(englishRoutes, frenchRoutes, `${chapterKey}: bilingual target routes differ`)

    const englishSemanticTargets = counts(english.map(semanticTarget))
    for (const target of french.map(semanticTarget).filter((value) => value.includes('#'))) {
      const remaining = englishSemanticTargets.get(target) ?? 0
      assert.ok(remaining > 0, `${chapterKey}: English lost canonical passage ${target}`)
      englishSemanticTargets.set(target, remaining - 1)
    }
  }
})

test('return enrichment preserves destination and unrelated query/hash data', () => {
  const source = inventory.find(({ lang }) => lang === 'fr')!
  const authored = new URL(source.reference.href, 'https://rop.test')
  const rendered = new URL(source.renderedHref, 'https://rop.test')
  assert.equal(rendered.pathname, authored.pathname)
  assert.equal(rendered.hash, authored.hash)
  for (const [key, value] of authored.searchParams) {
    if (key !== 'xrefBack' && key !== 'xrefBackLabel') {
      assert.ok(rendered.searchParams.getAll(key).includes(value), `lost query ${key}=${value}`)
    }
  }
})

test('all 400 references derive the same exact passage in classic and synchronized modes', () => {
  for (const entry of inventory) {
    const classicPath = entry.chapterKey === 'introduction'
      ? '/introduction'
      : `/${entry.chapterKey.replace(/^chapter-/, 'chapitre-')}`
    const synchronizedPath = expectedReaderPath(entry.chapterKey)
    for (const sourcePath of [classicPath, synchronizedPath]) {
      const rendered = new URL(
        readerXrefHref(
          entry.reference.href,
          entry.chapterKey,
          false,
          entry.sourceAnchorId,
          entry.lang,
          sourcePath,
        ),
        'https://rop.test',
      )
      assert.equal(
        rendered.searchParams.get('xrefBack'),
        `${sourcePath}?lang=${entry.lang}#${entry.sourceAnchorId}`,
        `${context(entry)}: ${sourcePath} return differs`,
      )
    }
  }
})
