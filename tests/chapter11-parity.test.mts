import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter11En } from '../content/chapter11.en'
import { chapter11Fr } from '../content/chapter11.fr'
import { chapter11SlideAnchorsEn, chapter11Slides, chapter11SlidesEn } from '../content/chapter11.slidesync'
import { getChapter } from '../content/registry'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'
import { isRopInterestSection } from '../lib/ropInterestSection'
import { assertVisibleHeadingParity } from './helpers/headingParity.mts'

const root = join(import.meta.dirname, '..')
const reflexId = 'zones-reflexes-podales-du-foie-et-des-voies-biliaires'
const blocks = (chapter: typeof chapter11En) => chapter.sections.flatMap((section) => section.blocks)
const contentBlocks = (chapter: typeof chapter11En) => blocks(chapter).filter((block) => block.type !== 'xref')
const references = (chapter: typeof chapter11En) => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block) => block.type === 'xref' ? [{ section, block, index: section.blocks.indexOf(block) }] : []),
)

test('Chapter 11 has the canonical 22-section inventory and exact block structure', () => {
  assert.equal(chapter11Fr.sections.length, 22)
  assert.deepEqual(chapter11En.sections.map((section) => section.id), chapter11Fr.sections.map((section) => section.id))
  assert.ok(!chapter11En.sections.some((section) => section.id === 'rapports'))
  for (let index = 0; index < chapter11Fr.sections.length; index += 1) {
    assert.deepEqual(
      chapter11En.sections[index].blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      chapter11Fr.sections[index].blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      chapter11Fr.sections[index].id,
    )
  }
  assert.equal(contentBlocks(chapter11En).length, contentBlocks(chapter11Fr).length)
  for (const id of ['interet-en-rop', 'interet-en-rop-2', 'interet-en-rop-3', 'interet-en-rop-4', 'interet-en-rop-5', 'circulation-lymphatique', 'interet-en-rop-6', 'interet-en-rop-7', 'interet-en-rop-8']) {
    assert.ok(chapter11En.sections.some((section) => section.id === id), id)
  }
})

test('Chapter 11 renders an equivalent H2 and H3 heading hierarchy', () => {
  const renderedHeadingInventory = (chapter: typeof chapter11En) => ({
    h2: chapter.sections.filter((section) => !isRopInterestSection(section)).map((section) => section.id),
    h3: chapter.sections.flatMap((section) => section.blocks.flatMap((block, index) =>
      block.type === 'sub' ? [`${section.id}:${index}`] : [],
    )),
  })

  const fr = renderedHeadingInventory(chapter11Fr)
  const en = renderedHeadingInventory(chapter11En)
  assert.deepEqual(en, fr)
  assert.equal(fr.h2.length, 18)
  assert.equal(fr.h3.length, 37)
  assert.equal(fr.h2.length + fr.h3.length, 55)
  assert.deepEqual(
    chapter11En.sections.filter((section) => isRopInterestSection(section)).map((section) => section.id),
    ['interet-en-rop', 'interet-en-rop-5', 'interet-en-rop-7', 'interet-en-rop-8'],
  )
})

test('Chapter 11 preserves exact visible heading numbering, hierarchy, rail behavior and translated wording', () => {
  assertVisibleHeadingParity(chapter11Fr, chapter11En, 55, '260b53d1f4defa9c1fd01c4a7675588a320b495729661a3d0e89c1d33de8c164')
})

test('Chapter 11 publishes seven corresponding inline figures in canonical positions', () => {
  const fr = blocks(chapter11Fr).filter((block) => block.type === 'figure')
  const en = blocks(chapter11En).filter((block) => block.type === 'figure')
  assert.equal(fr.length, 7)
  assert.equal(en.length, 7)
  assert.deepEqual(en.map((figure) => figure.type === 'figure' ? figure.caption : ''), [
    'Photo: Liver — Left Lobe',
    'Photo: Liver — Inferior Surface and Right Lobe',
    'Photo: Gallbladder',
    'Photo: Biliary Tract',
    'Photo: Phrenic Nerve C3–C4–C5',
    'Photo: Phrenic Nerve — Sedillot Triangle',
    'Photo: Limbic Brain–Liver/Gallbladder Balance',
  ])
  for (const figure of [...fr, ...en]) if (figure.type === 'figure') {
    assert.ok(existsSync(join(root, 'public', figure.src.replace(/^\//, ''))), figure.src)
  }
  assert.ok(en.every((figure) => figure.type === 'figure' && /\/EN\/Cartography\//.test(figure.src)))
  const reflex = chapter11En.sections.find((section) => section.id === reflexId)!
  assert.deepEqual(reflex.blocks.flatMap((block, index) => block.type === 'figure' ? [index] : []), [15, 17, 19, 21, 26, 27, 29])
})

test('Chapter 11 retains exactly nine English references with exact return routes', () => {
  const fr = references(chapter11Fr)
  const en = references(chapter11En)
  assert.equal(fr.length, 9)
  assert.equal(en.length, 9)
  assert.equal(new Set(en.map(({ block }) => block.href)).size, 9)
  for (const { section, block, index } of en) {
    const url = new URL(block.href, 'https://rop.local')
    assert.equal(url.searchParams.get('lang'), 'en')
    assert.equal(url.searchParams.get('xrefBack'), `/lecture/chapitre-11?lang=en#p-${section.id}-${index}`)
    assert.equal(url.searchParams.get('xrefBackLabel'), 'Back to Chapter 11')
    const targetKey = url.pathname.match(/^\/lecture\/chapitre-(\d+)/)?.[1]
    assert.ok(targetKey && getChapter(`chapter-${Number(targetKey)}` as Parameters<typeof getChapter>[0], 'en').chapter)
  }
})

test('Chapter 11 exposes one explicit canonical 18-slide English deck', () => {
  assert.equal(chapter11Slides.length, 18)
  assert.equal(chapter11SlidesEn.length, 18)
  assert.equal(chapter11SlideAnchorsEn.length, 18)
  assert.deepEqual(chapter11SlidesEn.slice(12, 14).map((slide) => slide.title), ['Viscero-Emotional Profiles', 'Clinical Summary and Lifestyle Hygiene'])
  assert.deepEqual(chapter11SlidesEn.slice(14).map((slide) => slide.title), [
    'Cartography: Liver — Left Lobe',
    'Cartography: Liver — Right Lobe',
    'Cartography: Phrenic Nerve C3–C4–C5',
    'Cartography: Phrenic Nerve — Sedillot Triangle',
  ])
  assert.ok(!chapter11SlidesEn.some((slide) => /viscero-somatic referred projections/i.test(slide.title)))
  for (const slide of chapter11SlidesEn) assert.ok(existsSync(join(root, 'public', slide.src.replace(/^\//, ''))), slide.src)
  for (const anchor of chapter11SlideAnchorsEn) {
    const section = chapter11En.sections.find((candidate) => candidate.id === anchor.sectionId)
    assert.ok(section && anchor.blockIndex < section.blocks.length, `${anchor.sectionId}:${anchor.blockIndex}`)
    if (anchor.end) {
      const end = chapter11En.sections.find((candidate) => candidate.id === anchor.end!.sectionId)
      assert.ok(end && anchor.end.blockIndex < end.blocks.length)
    }
  }
  assert.deepEqual(chapter11SlideAnchorsEn[3].end, { sectionId: 'vascularisation', blockIndex: 0 })
  assert.ok(chapter11SlideAnchorsEn.slice(14).every((anchor) => anchor.end?.sectionId === reflexId && anchor.end.blockIndex === anchor.blockIndex))
})

test('Chapter 11 runtime integration does not append obsolete or duplicate media', () => {
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-11'], [])
  const before = contentBlocks(chapter11En).length
  integrateEnglishReflexPhotos(chapter11En)
  assert.equal(contentBlocks(chapter11En).length, before)
  const integrated = integrateEnglishReflexDeck(chapter11En, chapter11SlidesEn, chapter11SlideAnchorsEn)
  assert.equal(integrated.slides.length, 18)
  assert.equal(integrated.anchors.length, 18)
  assert.equal(chapter11En.slideDeck?.length, 18)
})
