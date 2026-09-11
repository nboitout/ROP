import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'
import { introductionEs } from '../content/introduction.es'
import { introductionFr } from '../content/introduction.fr'
import { chapter0SlidesEs, chapter0SlideAnchorsEs } from '../content/chapter0.es.slidesync'
import { getChapter } from '../content/registry'
import { getBookSlideSearchIndex } from '../content/slidesyncRegistry'

test('Spanish introduction publishes the complete current structure and Spanish assets', () => {
  assert.deepEqual(introductionEs.sections.map(s => s.id), introductionFr.sections.map(s => s.id))
  assert.equal(introductionEs.sections.length, 17)
  assert.equal(getChapter('introduction', 'es').contentLang, 'es')
  assert.deepEqual(getChapter('introduction', 'es').chapter.slideDeck, chapter0SlidesEs)
  assert.equal(chapter0SlidesEs.length, 6)
  for (const slide of chapter0SlidesEs) {
    assert.match(slide.src, /^\/chapter-0\/ES\/Images\//)
    assert.ok(existsSync(new URL(`../public${slide.src}`, import.meta.url)))
  }
  for (const anchor of chapter0SlideAnchorsEs) {
    const block = introductionEs.sections.find(s => s.id === anchor.sectionId)?.blocks[anchor.blockIndex]
    assert.equal(block?.type, 'figure')
    if (block?.type === 'figure') assert.equal(block.src, chapter0SlidesEs[Number(anchor.slide)-1].src)
  }
  assert.equal(getBookSlideSearchIndex('es').filter(r => r.chapterKey === 'introduction').length, 6)
})

test('Spanish introduction retains bibliography, table and references without cross-chapter links', () => {
  const blocks = introductionEs.sections.flatMap(s => s.blocks)
  assert.equal(blocks.filter(b => b.type === 'table').length, 1)
  const table = blocks.find(b => b.type === 'table')
  if (table?.type === 'table') assert.equal(table.rows.length, 4)
  const bibliography = JSON.stringify(introductionEs.sections.at(-1))
  assert.match(bibliography, /18\. Ohsawa/)
  assert.match(bibliography, /1\. Standring/)
  assert.match(JSON.stringify(introductionEs), /El capítulo 2 desarrolla/)
  assert.ok(blocks.every(b => b.type !== 'xref' && !b.xrefs?.length))
})
