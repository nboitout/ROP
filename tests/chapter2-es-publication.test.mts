import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'
import { chapter2Es } from '../content/chapter2.es'
import { chapter2Fr } from '../content/chapter2.fr'
import { chapter2SlidesEs, chapter2SlideAnchorsEs } from '../content/chapter2.es.slidesync'
import { getChapter } from '../content/registry'
import { getBookSlideSearchIndex } from '../content/slidesyncRegistry'

test('cleaned Spanish Chapter 2 retains the complete structure, callouts and bibliography', () => {
  assert.deepEqual(chapter2Es.sections.map(s=>s.id),chapter2Fr.sections.map(s=>s.id))
  assert.equal(chapter2Es.sections.length,13)
  const blocks=chapter2Es.sections.flatMap(s=>s.blocks)
  const notes=blocks.filter(b=>b.type==='note')
  assert.equal(notes.length,5)
  assert.ok(notes.every(b=>b.type==='note' && b.body.length>0))
  assert.equal(chapter2Es.sections.at(-1)?.blocks.length,7)
  assert.match(JSON.stringify(chapter2Es),/Véase el capítulo 5/)
  assert.ok(blocks.every(b=>b.type!=='xref' && !b.xrefs?.length))
  assert.ok(blocks.every(b=>b.type!=='figure'))
})

test('Spanish slides and all anchor ranges resolve without French fallback', () => {
  assert.deepEqual(getChapter('chapter-2','es').chapter.slideDeck,chapter2SlidesEs)
  assert.equal(chapter2SlidesEs.length,15)
  for(const slide of chapter2SlidesEs) {
    assert.match(slide.src,/^\/chapter-2\/ES\/Images\//)
    assert.ok(existsSync(new URL(`../public${slide.src}`,import.meta.url)))
  }
  const position=(sectionId:string,blockIndex:number)=>{
    const sectionIndex=chapter2Es.sections.findIndex(s=>s.id===sectionId)
    assert.ok(sectionIndex>=0)
    assert.ok(blockIndex>=-1 && blockIndex<chapter2Es.sections[sectionIndex].blocks.length)
    return sectionIndex*1000+blockIndex
  }
  for(const anchor of chapter2SlideAnchorsEs) {
    const start=position(anchor.sectionId,anchor.blockIndex)
    assert.ok(anchor.slide>=1 && anchor.slide<=15)
    assert.ok(anchor.end)
    assert.ok(position(anchor.end.sectionId,anchor.end.blockIndex)>start)
  }
  assert.equal(new Set(chapter2SlideAnchorsEs.map(a=>a.slide)).size,15)
  assert.match(chapter2SlidesEs[9].src,/S09b_ES/)
  assert.match(chapter2SlidesEs[13].src,/S14_ES/)
  assert.match(chapter2SlidesEs[14].src,/S13_ES/)
  assert.equal(getBookSlideSearchIndex('es').filter(r=>r.chapterKey==='chapter-2').length,15)
})
