import assert from 'node:assert/strict'
import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { test } from 'node:test'
import { readerXrefHref } from '../lib/access'
import '../content/registry'
import { chapter4ReworkFr } from '../content/chapter4-rework.fr'
import {
  chapter4ReworkHalfBreaks,
  chapter4ReworkSlideAnchors,
  chapter4ReworkSlideAnchorsEn,
  chapter4ReworkSlides,
  chapter4ReworkSlidesEn,
} from '../content/chapter4-rework.slidesync'
import { chapter4En } from '../content/chapter4.en'
import type { Block, Chapter, CrossReference } from '../content/types'

const contentBlocks = (chapter: Chapter) => chapter.sections.flatMap((section) =>
  section.blocks.filter((block) => block.type !== 'xref'),
)

const figures = (chapter: Chapter) => contentBlocks(chapter).filter(
  (block): block is Extract<Block, { type: 'figure' }> => block.type === 'figure',
)

const references = (chapter: Chapter): CrossReference[] => chapter.sections.flatMap((section) =>
  section.blocks.flatMap((block) => [
    ...(block.type === 'xref' ? [block] : []),
    ...(block.xrefs ?? []),
  ]),
)

const publicPath = (src: string) => `public${decodeURIComponent(src.split('?', 1)[0])}`

function assertExactCase(path: string) {
  const segments = resolve(path).split(/[\\/]/)
  let current = `${segments.shift()}${process.platform === 'win32' ? '\\' : '/'}`
  for (const segment of segments) {
    assert.ok(readdirSync(current).includes(segment), `path casing mismatch at ${current}${segment}`)
    current = resolve(current, segment)
  }
}

const bibliography = [
  '1. Standring S, ed. Gray’s Anatomy: The Anatomical Basis of Clinical Practice. 42nd ed. Elsevier; 2020.',
  '2. Jänig W. Neurobiology of visceral afferent neurons: neuroanatomy, functions, organ regulations and sensations. Biol Psychol. 1996;42(1-2):29-51.',
  '3. Sato A, Sato Y, Schmidt RF. The impact of somatosensory input on autonomic functions. Rev Physiol Biochem Pharmacol. 1997;130:1-328.',
  '4. Fowler CJ, Griffiths D, de Groat WC. The neural control of micturition. Nat Rev Neurosci. 2008;9(6):453-466.',
  '5. de Groat WC, Vizzard MA, Araki I, Roppolo JR. Spinal interneurons and preganglionic neurons in sacral autonomic reflex pathways. Prog Brain Res. 1996;107:97-111.',
  '6. Brierley SM, Hibberd TJ, Spencer NJ. Spinal afferent innervation of the colon and rectum. Front Cell Neurosci. 2018;12:467.',
  '7. Spencer NJ, Hu H. Enteric nervous system: sensory transduction, neural circuits and gastrointestinal motility. Nat Rev Gastroenterol Hepatol. 2020;17(6):338-351.',
  '8. Tobaldini E, Costantino G, Solbiati M, et al. Sleep, sleep deprivation, autonomic nervous system and cardiovascular diseases. Neurosci Biobehav Rev. 2017;74(Pt B):321-329.',
  '9. Bellesi M, de Vivo L, Chini M, et al. Sleep Loss Promotes Astrocytic Phagocytosis and Microglial Activation in Mouse Cerebral Cortex. J Neurosci. 2017;37(21):5263-5273.',
]

test('Chapter 4 English has strict structural parity with canonical French', () => {
  assert.deepEqual(chapter4En.sections.map(({ id }) => id), chapter4ReworkFr.sections.map(({ id }) => id))
  assert.equal(contentBlocks(chapter4ReworkFr).length, 203)
  assert.equal(contentBlocks(chapter4En).length, 203)

  for (const [index, frenchSection] of chapter4ReworkFr.sections.entries()) {
    const englishSection = chapter4En.sections[index]
    assert.deepEqual(
      englishSection.blocks.map((block) => block.type),
      frenchSection.blocks.filter((block) => block.type !== 'xref').map((block) => block.type),
      `non-xref block sequence differs in ${frenchSection.id}`,
    )
  }

  assert.equal(chapter4En.sections.find(({ id }) => id === 'a-retenir')?.title, 'Key Points')
  const sources = chapter4En.sections.find(({ id }) => id === 'bibliographie-selective')
  assert.equal(sources?.title, 'Selected Bibliography')
  assert.deepEqual(sources?.blocks.map((block) => block.type === 'para' ? block.text : ''), bibliography)
})

test('Chapter 4 figures have matching positions and resolvable language-specific assets', () => {
  assert.equal(figures(chapter4ReworkFr).length, 14)
  assert.equal(figures(chapter4En).length, 14)

  for (const chapter of [chapter4ReworkFr, chapter4En]) {
    for (const figure of figures(chapter)) assert.ok(existsSync(publicPath(figure.src)), `missing ${figure.src}`)
  }
  for (const figure of figures(chapter4En)) {
    assert.match(figure.src, /^\/chapter-4\/EN\/IMAGES\/.* V3\.png$/)
    assert.doesNotMatch(figure.src, /\/FR\//)
    assertExactCase(publicPath(figure.src))
  }

  for (const [sectionIndex, frenchSection] of chapter4ReworkFr.sections.entries()) {
    const frenchPositions = frenchSection.blocks.filter((block) => block.type !== 'xref').flatMap((block, index) => block.type === 'figure' ? [index] : [])
    const englishPositions = chapter4En.sections[sectionIndex].blocks.flatMap((block, index) => block.type === 'figure' ? [index] : [])
    assert.deepEqual(englishPositions, frenchPositions, `figure positions differ in ${frenchSection.id}`)
  }
})

test('Chapter 4 retains all 41 localized cross-references and exact return passages', () => {
  assert.equal(references(chapter4ReworkFr).length, 41)
  assert.equal(references(chapter4En).length, 41)
  for (const section of chapter4En.sections) {
    section.blocks.forEach((block, blockIndex) => {
      for (const reference of block.xrefs ?? []) {
        assert.doesNotMatch(reference.href, /lang=fr|\/FR\//)
        const sourceAnchor = `p-${section.id}-${blockIndex}`
        const href = new URL(readerXrefHref(reference.href, 'chapter-4', false, sourceAnchor, 'en'), 'https://rop.test')
        assert.equal(href.searchParams.get('xrefBack'), `/lecture/chapitre-4?lang=en#${sourceAnchor}`)
        assert.equal(href.searchParams.get('xrefBackLabel'), 'Back to Chapter 4')
      }
    })
  }
})

test('Chapter 4 exposes 48 matched slides with valid identical anchors and breaks', () => {
  assert.equal(chapter4ReworkSlides.length, 48)
  assert.equal(chapter4ReworkSlidesEn.length, 48)
  assert.deepEqual(chapter4ReworkSlideAnchorsEn.map(({ slide }) => slide), Array.from({ length: 48 }, (_, i) => i + 1))
  assert.deepEqual(
    chapter4ReworkSlideAnchorsEn.map(({ slide, gapBefore }) => ({ slide, gapBefore })),
    chapter4ReworkSlideAnchors.map(({ slide, gapBefore }) => ({ slide, gapBefore })),
  )

  for (const slide of chapter4ReworkSlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//)
    assert.ok(existsSync(publicPath(slide.src)), `missing ${slide.src}`)
    assertExactCase(publicPath(slide.src))
  }
  assert.deepEqual(chapter4ReworkSlidesEn.slice(32).map(({ src }) => src), Array.from(
    { length: 16 }, (_, i) => `/chapter-4/EN/IMAGES/NCH 4 EN IMG ${i + 33} V3.png`,
  ))

  const blocksBySection = new Map(chapter4En.sections.map((section) => [section.id, section.blocks]))
  for (const anchor of chapter4ReworkSlideAnchorsEn) {
    const blocks = blocksBySection.get(anchor.sectionId)
    assert.ok(blocks, `unknown section ${anchor.sectionId}`)
    assert.ok(anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length, `invalid start for slide ${anchor.slide}`)
    if (anchor.end) {
      const endBlocks = blocksBySection.get(anchor.end.sectionId)
      assert.ok(endBlocks, `unknown end section ${anchor.end.sectionId}`)
      assert.ok(anchor.end.blockIndex >= -1 && anchor.end.blockIndex < endBlocks.length, `invalid end for slide ${anchor.slide}`)
    }
  }
  assert.equal(chapter4ReworkSlideAnchorsEn.find(({ slide }) => slide === 7)?.gapBefore, 'half')
  assert.equal(chapter4ReworkSlideAnchorsEn.find(({ slide }) => slide === 13)?.gapBefore, 'half')
  assert.deepEqual(chapter4ReworkHalfBreaks, [
    { sectionId: 'chaine-plexique-prevertebrale-ou-pre-aortique', blockIndex: -1 },
    { sectionId: 'zones-reflexes-podales', blockIndex: 0 },
  ])
})

test('Chapter 4 contains no stale private reflex asset URL', () => {
  assert.doesNotMatch(JSON.stringify(chapter4ReworkFr), /\/chapter-4\/rework-reflex\//)
})
