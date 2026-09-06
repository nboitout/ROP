import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter17En } from '../content/chapter17.en'
import { chapter17Fr } from '../content/chapter17.fr'
import { chapter18En } from '../content/chapter18.en'
import { chapter18Fr } from '../content/chapter18.fr'
import { chapter21En } from '../content/chapter21.en'
import { chapter21Fr } from '../content/chapter21.fr'
import { getChapterKeys, getChapterTranslations } from '../content/registry'
import type { Block, Chapter, CrossReference } from '../content/types'
import { readerXrefHref } from '../lib/access'
import { retiredChapterRedirectUrl } from '../lib/retiredChapterRedirect'

const root = join(import.meta.dirname, '..')

function references(chapter: Chapter) {
  return chapter.sections.flatMap((section) => section.blocks.flatMap((block, blockIndex) => [
    ...(block.type === 'xref' ? [{ reference: block, sectionId: section.id, blockIndex }] : []),
    ...(block.xrefs ?? []).map((reference) => ({ reference, sectionId: section.id, blockIndex })),
  ]))
}

function hashForText(chapter: Chapter, text: string): string {
  const match = references(chapter).find(({ reference }) => reference.text === text)
  assert.ok(match, `missing reference ${text}`)
  return new URL(match.reference.href, 'https://rop.test').hash
}

function assertDestinationExists(reference: CrossReference) {
  const url = new URL(reference.href, 'https://rop.test')
  const chapterMatch = url.pathname.match(/^\/lecture\/chapitre-(\d+)$/)
  if (!chapterMatch || !url.hash) return
  const target = getChapterTranslations(`chapter-${Number(chapterMatch[1])}`).en
  assert.ok(target, `missing English target chapter for ${reference.href}`)
  if (url.hash.startsWith('#sec-')) {
    assert.ok(target.sections.some(({ id }) => `#sec-${id}` === url.hash), `missing DOM id ${url.hash}`)
    return
  }
  const paragraph = url.hash.match(/^#p-(.+)-(\d+)$/)
  assert.ok(paragraph, `unsupported destination id ${url.hash}`)
  const section = target.sections.find(({ id }) => id === paragraph[1])
  assert.ok(section, `missing DOM section for ${url.hash}`)
  assert.ok(Number(paragraph[2]) < section.blocks.length, `missing DOM id ${url.hash}`)
}

test('canonical foundation links use the implemented route', () => {
  const chapter3 = readFileSync(join(root, 'content/chapter3-rework.fr.ts'), 'utf8')
  const chapter4 = readFileSync(join(root, 'content/chapter4-rework.fr.ts'), 'utf8')
  const source = `${chapter3}\n${chapter4}`
  assert.doesNotMatch(source, /\/lecture\/fondements-neuro-anatomiques/)
  assert.equal(source.match(/\/fondements-neuro-anatomiques\?lang=fr/g)?.length, 5)
  assert.ok(existsSync(join(root, 'app/fondements-neuro-anatomiques/page.tsx')))
})

test('effective canonical references never use retired chapter routes', () => {
  for (const key of getChapterKeys()) {
    for (const chapter of Object.values(getChapterTranslations(key))) {
      if (!chapter) continue
      for (const { reference } of references(chapter)) {
        assert.doesNotMatch(new URL(reference.href, 'https://rop.test').pathname, /chapitre-[345]-rework$/)
      }
    }
  }
})

test('Chapter 17 English references preserve exact canonical destination paragraphs', () => {
  const pairs = [
    'SNC, Cerveau, limbique ou émotionnel',
    'SNC, Cortex préfrontal et orbito-nasal',
  ]
  const english = [
    'CNS, Brain, Limbic or Emotional',
    'CNS, Prefrontal and Orbital-Nasal Cortex',
  ]
  english.forEach((text, index) => assert.equal(hashForText(chapter17En, text), hashForText(chapter17Fr, pairs[index])))
  references(chapter17En).filter(({ reference }) => english.includes(reference.text ?? '')).forEach(({ reference, blockIndex }) => {
    assert.equal(new URL(reference.href, 'https://rop.test').searchParams.get('xrefBack'), `/lecture/chapitre-17?lang=en#p-innervation-${blockIndex}`)
    assertDestinationExists(reference)
  })
})

test('Chapter 18 English references preserve exact translated destination paragraphs', () => {
  const expected = new Map([
    ['Stress mechanisms', '#p-le-syndrome-general-d-adaptation-un-modele-pedagogique-4'],
    ['Pelvic cavity', '#p-physiologie-0'],
    ['Menstrual cycle', '#p-uterus-physiologie-6'],
  ])
  for (const { reference, sectionId, blockIndex } of references(chapter18En)) {
    const expectedHash = expected.get(reference.text ?? '')
    if (!expectedHash) continue
    assert.equal(new URL(reference.href, 'https://rop.test').hash, expectedHash)
    const rendered = new URL(readerXrefHref(reference.href, 'chapter-18', false, `p-${sectionId}-${blockIndex}`, 'en'), 'https://rop.test')
    assert.equal(rendered.searchParams.get('xrefBack'), `/lecture/chapitre-18?lang=en#p-${sectionId}-${blockIndex}`)
    assert.equal(rendered.searchParams.get('xrefBackLabel'), 'Back to Chapter 18')
    assertDestinationExists({ ...reference, href: rendered.pathname + rendered.search + rendered.hash })
  }
  assert.equal(hashForText(chapter18Fr, 'Cavité pelvienne'), '#p-physiologie-0')
  assert.equal(hashForText(chapter18Fr, 'Cycle menstruel'), '#p-uterus-physiologie-6')
})

test('Chapter 21 corrected English references use current routes, exact hashes, and exact returns', () => {
  const corrected = references(chapter21En).filter(({ reference }) => /See Chapter [34] —/.test(reference.label))
  assert.deepEqual(corrected.map(({ reference }) => {
    const url = new URL(reference.href, 'https://rop.test')
    return `${url.pathname}${url.hash}`
  }), [
    '/lecture/chapitre-3#sec-zones-reflexes-rop',
    '/lecture/chapitre-4#sec-zones-reflexes-podales',
    '/lecture/chapitre-3#sec-zones-reflexes-rop',
  ])
  for (const { reference, sectionId, blockIndex } of corrected) {
    const renderedHref = readerXrefHref(reference.href, 'chapter-21', false, `p-${sectionId}-${blockIndex}`, 'en')
    const rendered = new URL(renderedHref, 'https://rop.test')
    assert.equal(rendered.searchParams.get('xrefBack'), `/lecture/chapitre-21?lang=en#p-${sectionId}-${blockIndex}`)
    assert.equal(rendered.searchParams.get('xrefBackLabel'), 'Back to Chapter 21')
    assertDestinationExists({ ...reference, href: renderedHref })
  }
  const french = references(chapter21Fr).filter(({ reference }) => /chapitre [34] —/.test(reference.label))
  assert.deepEqual(corrected.map(({ reference }) => new URL(reference.href, 'https://rop.test').hash), french.map(({ reference, sectionId, blockIndex }) => new URL(readerXrefHref(reference.href, 'chapter-21', false, `p-${sectionId}-${blockIndex}`, 'fr'), 'https://rop.test').hash))
})

test('retired chapter redirects preserve every query value and leave fragments inheritable', () => {
  const target = retiredChapterRedirectUrl(4, {
    lang: 'en',
    xrefBack: '/lecture/chapitre-21?lang=en#p-zones-reflexes-podales-8',
    xrefBackLabel: 'Back to Chapter 21',
    tag: ['one', 'two'],
  })
  const url = new URL(target, 'https://rop.test')
  assert.equal(url.pathname, '/lecture/chapitre-4')
  assert.equal(url.searchParams.get('lang'), 'en')
  assert.equal(url.searchParams.get('xrefBack'), '/lecture/chapitre-21?lang=en#p-zones-reflexes-podales-8')
  assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 21')
  assert.deepEqual(url.searchParams.getAll('tag'), ['one', 'two'])
  assert.equal(url.hash, '')
})
