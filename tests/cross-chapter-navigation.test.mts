import assert from 'node:assert/strict'
import test from 'node:test'
import { chapterKeyFromHref, readerXrefHref } from '../lib/access'
import {
  englishCrossReferenceSyncIssues,
  getChapterKeys,
  getChapterTranslations,
} from '../content/registry'
import type { Block, Chapter, CrossReference } from '../content/types'

type LocatedReference = {
  reference: CrossReference
  sectionId: string
  blockIndex: number
}

function referencesIn(chapter: Chapter): LocatedReference[] {
  return chapter.sections.flatMap((section) => section.blocks.flatMap((block, blockIndex) => {
    const references = [
      ...(block.type === 'xref' ? [block] : []),
      ...(block.xrefs ?? []),
    ]
    return references.map((reference) => ({ reference, sectionId: section.id, blockIndex }))
  }))
}

function expectedReturnPath(chapterKey: string) {
  if (chapterKey === 'introduction') return '/introduction'
  if (chapterKey === 'chapter-2') return '/lecture/traitement-rop'
  return `/lecture/${chapterKey.replace(/^chapter-/, 'chapitre-')}`
}

function assertTargetAnchor(chapter: Chapter, hash: string, context: string) {
  if (!hash) return
  if (hash.startsWith('#sec-')) {
    const sectionId = hash.slice(5)
    assert.ok(chapter.sections.some((section) => section.id === sectionId), `${context}: missing section ${hash}`)
    return
  }
  const paragraph = hash.match(/^#p-(.*)-(\d+)$/)
  assert.ok(paragraph, `${context}: unsupported target anchor ${hash}`)
  const [, sectionId, rawIndex] = paragraph
  const section = chapter.sections.find((candidate) => candidate.id === sectionId)
  assert.ok(section, `${context}: missing target section ${sectionId}`)
  assert.ok(Number(rawIndex) < section.blocks.length, `${context}: missing target paragraph ${hash}`)
}

test('English cross-chapter references match the canonical French inventory', () => {
  assert.deepEqual(englishCrossReferenceSyncIssues, [])

  for (const chapterKey of getChapterKeys()) {
    if (chapterKey === 'chapter-5') continue // Two existing EN-only links await the agreed editorial decision.
    const { fr, en } = getChapterTranslations(chapterKey)
    if (!fr || !en) continue
    assert.equal(
      referencesIn(en).length,
      referencesIn(fr).length,
      `${chapterKey}: FR/EN cross-reference count differs`,
    )
  }
})

test('every English cross-reference keeps English, resolves, and returns to its source passage', () => {
  for (const chapterKey of getChapterKeys()) {
    const english = getChapterTranslations(chapterKey).en
    if (!english) continue

    for (const { reference, sectionId, blockIndex } of referencesIn(english)) {
      const context = `${chapterKey}:${sectionId}:${blockIndex}`
      const destination = new URL(reference.href, 'https://rop.test')
      assert.equal(destination.searchParams.get('lang'), 'en', `${context}: destination language is not EN`)

      const targetKey = chapterKeyFromHref(reference.href)
      if (targetKey) {
        const target = getChapterTranslations(targetKey).en
        assert.ok(target, `${context}: target ${targetKey} has no English edition`)
        assertTargetAnchor(target, destination.hash, context)
      } else {
        assert.equal(destination.pathname, '/fondements-neuro-anatomiques', `${context}: unknown internal target`)
      }

      const sourceAnchor = `p-${sectionId}-${blockIndex}`
      const enriched = new URL(
        readerXrefHref(reference.href, chapterKey, false, sourceAnchor, 'en'),
        'https://rop.test',
      )
      assert.equal(
        enriched.searchParams.get('xrefBack'),
        `${expectedReturnPath(chapterKey)}?lang=en#${sourceAnchor}`,
        `${context}: incorrect return passage`,
      )
      const chapterNumber = chapterKey.match(/^chapter-(\d+)$/)?.[1]
      assert.equal(
        enriched.searchParams.get('xrefBackLabel'),
        chapterNumber ? `Back to Chapter ${chapterNumber}` : 'Back to the reference',
        `${context}: incorrect English return label`,
      )
    }
  }
})
