import assert from 'node:assert/strict'
import { createHash } from 'node:crypto'
import { existsSync, readFileSync } from 'node:fs'
import test from 'node:test'
import { classicSlideDecks } from '../content/classicSlideDecks'
import { chapter12En } from '../content/chapter12.en'
import { chapter12Fr } from '../content/chapter12.fr'
import {
  chapter12SlideAnchors,
  chapter12SlideAnchorsEn,
  chapter12Slides,
  chapter12SlidesEn,
} from '../content/chapter12.slidesync'
import { getChapterTranslations } from '../content/registry'
import type { Block, Chapter, CrossReference } from '../content/types'
import { integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import { isRopInterestSection } from '../components/SlideSyncReader'

type LocatedReference = CrossReference & { sectionId: string; blockIndex: number }

const contentBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.filter((block) => block.type !== 'xref'),
)

const references = (chapter: Chapter): LocatedReference[] => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block, blockIndex) => [
    ...(block.type === 'xref' ? [{ ...block, sectionId: section.id, blockIndex }] : []),
    ...(block.xrefs ?? []).map((xref) => ({ ...xref, sectionId: section.id, blockIndex })),
  ]),
)

const publicPath = (src: string) => `public${decodeURIComponent(src.split(/[?#]/, 1)[0])}`
const routeChapterKey = (pathname: string) => {
  const match = pathname.match(/^\/lecture\/chapitre-(\d+)$/)
  return match ? `chapter-${Number(match[1])}` : undefined
}

function assertAnchorResolves(chapter: Chapter, sectionId: string, blockIndex: number) {
  const section = chapter.sections.find((candidate) => candidate.id === sectionId)
  assert.ok(section, `unknown section ${sectionId}`)
  assert.ok(blockIndex >= -1 && blockIndex < section.blocks.length, `invalid anchor ${sectionId}:${blockIndex}`)
}

const renderedHeadingShape = (chapter: Chapter) => chapter.sections.flatMap((section) => [
  ...(!isRopInterestSection(section) ? [`h2:${section.id}`] : []),
  ...section.blocks.flatMap((block, blockIndex) => block.type === 'sub' ? [`h3:${section.id}:${blockIndex}`] : []),
])

test('Chapter 12 English content matches the canonical French structure', () => {
  assert.deepEqual(chapter12En.sections.map(({ id }) => id), chapter12Fr.sections.map(({ id }) => id))
  assert.equal(contentBlocks(chapter12Fr).length, 204)
  assert.equal(contentBlocks(chapter12En).length, 204)

  for (const [index, frenchSection] of chapter12Fr.sections.entries()) {
    assert.deepEqual(
      chapter12En.sections[index].blocks.filter(({ type }) => type !== 'xref').map(({ type }) => type),
      frenchSection.blocks.filter(({ type }) => type !== 'xref').map(({ type }) => type),
      `non-xref block sequence differs in ${frenchSection.id}`,
    )
  }

  const frenchHeadings = renderedHeadingShape(chapter12Fr)
  const englishHeadings = renderedHeadingShape(chapter12En)
  assert.equal(frenchHeadings.length, 71)
  assert.equal(englishHeadings.length, 71)
  assert.deepEqual(englishHeadings, frenchHeadings, 'rendered H2/H3 hierarchy differs from canonical French')
  assert.ok(isRopInterestSection(chapter12Fr.sections.find(({ id }) => id === 'interet-en-rop')!))
  assert.ok(isRopInterestSection(chapter12En.sections.find(({ id }) => id === 'interet-en-rop')!))

  const frenchFigures = contentBlocks(chapter12Fr).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
  const englishFigures = contentBlocks(chapter12En).filter((block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure')
  assert.equal(frenchFigures.length, 2)
  assert.equal(englishFigures.length, 2)
  assert.deepEqual(englishFigures.map(({ src }) => src.split('/').at(-1)), ['figure-12-02-V2.png', 'figure-12-04-V2.png'])
  assert.ok(englishFigures.every(({ src }) => src.startsWith('/chapter-12/EN/cartography/')))
  assert.ok(englishFigures.every(({ src }) => existsSync(publicPath(src))))

  const frenchPositions = chapter12Fr.sections.flatMap((section) => section.blocks.flatMap((block, index) => block.type === 'figure' ? [`${section.id}:${index}`] : []))
  const englishPositions = chapter12En.sections.flatMap((section) => section.blocks.flatMap((block, index) => block.type === 'figure' ? [`${section.id}:${index}`] : []))
  assert.deepEqual(englishPositions, frenchPositions)
})

test('Chapter 12 exposes exactly twelve valid English cross-references and return routes', () => {
  assert.equal(references(chapter12Fr).length, 12)
  const englishReferences = references(chapter12En)
  assert.equal(englishReferences.length, 12)

  for (const reference of englishReferences) {
    const url = new URL(reference.href, 'https://rop.local')
    assert.equal(url.searchParams.get('lang'), 'en', reference.href)
    const targetKey = routeChapterKey(url.pathname)
    assert.ok(targetKey, `unrecognised target route ${reference.href}`)
    const target = getChapterTranslations(targetKey!).en
    assert.ok(target, `missing English target ${targetKey}`)
    if (url.hash.startsWith('#sec-')) {
      assert.ok(target.sections.some(({ id }) => id === url.hash.slice(5)), `missing target ${url.hash}`)
    } else if (url.hash.startsWith('#p-')) {
      const match = url.hash.match(/^#p-(.*)-(\d+)$/)
      assert.ok(match, `invalid paragraph target ${url.hash}`)
      assertAnchorResolves(target, match![1], Number(match![2]))
    } else {
      assert.fail(`reference lacks a target passage: ${reference.href}`)
    }

    const back = new URL(url.searchParams.get('xrefBack') ?? '', 'https://rop.local')
    assert.equal(back.pathname, '/lecture/chapitre-12')
    assert.equal(back.searchParams.get('lang'), 'en')
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 12')
    const backMatch = back.hash.match(/^#p-(.*)-(\d+)$/)
    assert.ok(backMatch, `invalid xrefBack ${back}`)
    assert.equal(backMatch![1], reference.sectionId)
    assertAnchorResolves(chapter12En, backMatch![1], Number(backMatch![2]))
  }

  assert.equal(new Set(englishReferences.map(({ href }) => href)).size, 12)
})

test('Chapter 12 owns its canonical 16-slide deck and 17 anchor events', () => {
  assert.equal(chapter12Slides.length, 16)
  assert.equal(chapter12SlidesEn.length, 16)
  assert.equal(chapter12SlideAnchors.length, 17)
  assert.equal(chapter12SlideAnchorsEn.length, 17)
  assert.equal(classicSlideDecks['chapter-12'].en?.length, 16)

  const beforeFigures = contentBlocks(chapter12En).filter(({ type }) => type === 'figure').length
  integrateEnglishReflexPhotos(chapter12En)
  assert.equal(contentBlocks(chapter12En).filter(({ type }) => type === 'figure').length, beforeFigures)
  const effective = integrateEnglishReflexDeck(chapter12En, chapter12SlidesEn, chapter12SlideAnchorsEn)
  assert.equal(effective.slides.length, 16)
  assert.equal(effective.anchors.length, 17)
  assert.deepEqual(effective.slides, chapter12SlidesEn)
  assert.deepEqual(effective.anchors, chapter12SlideAnchorsEn)

  assert.deepEqual(chapter12SlideAnchorsEn, chapter12SlideAnchors)
  assert.match(chapter12SlidesEn[12].title, /Viscerosomatic/)
  assert.match(chapter12SlidesEn[13].title, /Viscero-emotional/)
  assert.deepEqual(chapter12SlidesEn.slice(14).map(({ src }) => src.split('/').at(-1)), [
    'figure-12-01-V2.png',
    'figure-12-03-V2.png',
  ])

  const hashes = new Set<string>()
  for (const slide of chapter12SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    const path = publicPath(slide.src)
    assert.ok(existsSync(path), `missing slide ${slide.src}`)
    const hash = createHash('sha256').update(readFileSync(path)).digest('hex')
    assert.ok(!hashes.has(hash), `unexpected duplicate slide asset ${slide.src}`)
    hashes.add(hash)
  }

  for (const anchor of chapter12SlideAnchorsEn) {
    assertAnchorResolves(chapter12En, anchor.sectionId, anchor.blockIndex)
    if (anchor.end) assertAnchorResolves(chapter12En, anchor.end.sectionId, anchor.end.blockIndex)
  }
})
