import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import test from 'node:test'
import { chapter14Es } from '../content/chapter14.es'
import { chapter14SlidesEs, chapter14SlideAnchorsEs } from '../content/chapter14.es.slidesync'
import { getChapter } from '../content/registry'
import { getBookSlideSearchIndex } from '../content/slidesyncRegistry'

test('Chapter 14 ES uses reviewed content and plain cross references',()=>{
  const chapter=getChapter('chapter-14','es').chapter
  assert.equal(chapter.title,'Intestino delgado')
  assert.equal(chapter.sections.length,11)
  const blocks=chapter.sections.flatMap(s=>s.blocks)
  assert.equal(blocks.filter(b=>b.type==='para' && b.text.startsWith('Referencia cruzada:')).length,8)
  assert.ok(blocks.every(b=>b.type!=='xref' && !b.xrefs?.length))
  const text=JSON.stringify(chapter14Es)
  assert.match(text,/3,8 × 10¹³/)
  assert.match(text,/no debe presentarse como una indicación funcional ordinaria/)
  assert.match(text,/Secuencia orientativa para este caso/)
  assert.doesNotMatch(text,/38 000 millones|proteínas de cadena larga|Comenzar siempre|8\.4\.3\./)
})
test('all Chapter 14 ES visual files and synchronization targets exist',()=>{
  assert.equal(chapter14SlidesEs.length,31)
  assert.deepEqual(getChapter('chapter-14','es').chapter.slideDeck,chapter14SlidesEs)
  for(const slide of chapter14SlidesEs){
    assert.match(slide.src,/^\/chapter-14\/ES\//)
    assert.ok(existsSync(new URL(`../public${slide.src}`,import.meta.url)))
  }
  for(const anchor of chapter14SlideAnchorsEs){
    const s=chapter14Es.sections.find(s=>s.id===anchor.sectionId)
    assert.ok(s)
    assert.ok(anchor.blockIndex>=-1 && anchor.blockIndex<s.blocks.length)
    assert.ok(anchor.slide>=1 && anchor.slide<=31)
  }
  const figures=chapter14Es.sections.flatMap(s=>s.blocks).filter(b=>b.type==='figure')
  assert.equal(figures.length,5)
  for(const b of figures) if(b.type==='figure') assert.ok(existsSync(new URL(`../public${b.src}`,import.meta.url)))
  assert.equal(getBookSlideSearchIndex('es').filter(r=>r.chapterKey==='chapter-14').length,31)
})
