import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter8En } from '../content/chapter8.en'
import { chapter8Fr } from '../content/chapter8.fr'
import { chapter8SlideAnchors, chapter8SlideAnchorsEn, chapter8Slides, chapter8SlidesEn } from '../content/chapter8.slidesync'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root=join(import.meta.dirname,'..')
const content=(chapter: typeof chapter8En)=>chapter.sections.flatMap(section=>section.blocks.filter(block=>block.type!=='xref'))
const refs=(chapter: typeof chapter8En)=>chapter.sections.flatMap(section=>section.blocks.flatMap(block=>block.type==='xref'?[block]:block.xrefs??[]))

test('Chapter 8 has strict editorial and figure parity',()=>{
  assert.deepEqual(chapter8En.sections.map(s=>s.id),chapter8Fr.sections.map(s=>s.id))
  for(let i=0;i<chapter8Fr.sections.length;i++) assert.deepEqual(
    chapter8En.sections[i].blocks.filter(b=>b.type!=='xref').map(b=>b.type),
    chapter8Fr.sections[i].blocks.filter(b=>b.type!=='xref').map(b=>b.type),
  )
  const figures=content(chapter8En).filter(b=>b.type==='figure')
  assert.equal(figures.length,8)
  assert.deepEqual(figures.map(f=>f.caption),['Obliquity of the central tendon','Phrenic nerve (C3–C4–C5)','Phrenic nerve (Sedillot triangle)','Oesophageal hiatus and cardia','Marfran and Larrey hiatuses','Azygos–caval junction','Costovertebral joints','Hyrtl intercostobrachial nerve'])
  for(const figure of figures) if(figure.type==='figure') {
    assert.match(figure.src,/\/EN\//); assert.ok(existsSync(join(root,'public',figure.src.replace(/^\//,''))))
  }
})

test('Chapter 8 restores the canonical clinical subsection and removes the added collateral-pathway proposition',()=>{
  const vascular=chapter8En.sections.find(s=>s.id==='vascularisation')!
  assert.deepEqual(vascular.blocks.slice(11).map(block=>block.type),['sub','para','para'])
  assert.deepEqual(vascular.blocks.slice(11).map(block=>'text' in block?block.text:''),[
    '5.3. Clinical relevance',
    'The azygos system is of considerable clinical relevance.',
    'It contributes to the portocaval system.',
  ])
  assert.equal(vascular.blocks[13].xrefs?.[0].href,'/lecture/chapitre-11?lang=en&xrefBack=%2Flecture%2Fchapitre-8%3Flang%3Den%23p-vascularisation-13&xrefBackLabel=Back%20to%20Chapter%208#p-vascularisation-13')
  assert.doesNotMatch(JSON.stringify(chapter8En),/important collateral pathway between the superior and inferior venae cavae/i)
})

test('Chapter 8 pairs all eight figures by semantic placement, orientation, and accessible description',()=>{
  const inventory=(chapter:typeof chapter8En)=>chapter.sections.flatMap(section=>section.blocks.filter(block=>block.type!=='xref').flatMap((block,index)=>block.type==='figure'?[{sectionId:section.id,index,figure:block}]:[]))
  const fr=inventory(chapter8Fr); const en=inventory(chapter8En)
  assert.deepEqual(en.map(({sectionId,index})=>({sectionId,index})),fr.map(({sectionId,index})=>({sectionId,index})))
  assert.deepEqual(en.map(({figure})=>figure.orientation),fr.map(({figure})=>figure.orientation))
  assert.deepEqual(en.map(({figure})=>figure.alt),[
    'Obliquity of the central tendon and asymmetric plantar projection',
    'Photograph of the plantar landmark for the phrenic nerve at cervical level',
    'Photograph of the plantar landmark for the phrenic nerve at the Sedillot triangle',
    'Photograph of the plantar landmarks for the oesophageal hiatus and cardia',
    'Photograph of the plantar landmarks for the Marfran and Larrey hiatuses',
    'Photograph of the plantar landmark for the azygos–caval junction',
    'Photograph of the plantar landmarks for the costovertebral joints',
    'Photograph of the plantar landmark for the Hyrtl intercostobrachial nerve',
  ])
  for(const {figure} of en) assert.notEqual(figure.alt.toLocaleLowerCase(),figure.caption.toLocaleLowerCase())
})

test('Chapter 8 references are attached, unique and return to their source blocks',()=>{
  const references=refs(chapter8En); assert.equal(references.length,13)
  assert.equal(new Set(references.map(r=>r.href)).size,13)
  for(const section of chapter8En.sections) section.blocks.forEach((block,index)=>block.xrefs?.forEach(reference=>{
    assert.match(reference.href,/lang=en/)
    assert.ok(reference.href.includes(encodeURIComponent(`/lecture/chapitre-8?lang=en#p-${section.id}-${index}`)))
  }))
})

test('Chapter 8 exports one explicit 24-slide English deck with valid anchors',()=>{
  assert.equal(chapter8Slides.length,24); assert.equal(chapter8SlidesEn.length,24); assert.equal(chapter8SlideAnchorsEn.length,24)
  for(const slide of chapter8SlidesEn) assert.ok(existsSync(join(root,'public',slide.src.replace(/^\//,''))),slide.src)
  for(const anchor of chapter8SlideAnchorsEn){
    const section=chapter8En.sections.find(s=>s.id===anchor.sectionId); assert.ok(section); assert.ok(anchor.blockIndex<section.blocks.length)
    if(anchor.end){const end=chapter8En.sections.find(s=>s.id===anchor.end!.sectionId); assert.ok(end); assert.ok(anchor.end.blockIndex<end.blocks.length)}
  }
  assert.equal(chapter8SlideAnchorsEn[8].gapBefore,'half')
  assert.deepEqual(chapter8SlideAnchorsEn[1],chapter8SlideAnchors[1])
  const before=content(chapter8En).length; integrateEnglishReflexPhotos(chapter8En); assert.equal(content(chapter8En).length,before)
  const integrated=integrateEnglishReflexDeck(chapter8En,chapter8SlidesEn,chapter8SlideAnchorsEn); assert.equal(integrated.slides.length,24); assert.equal(integrated.anchors.length,24)
  assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-8'],[])
  assert.doesNotMatch(JSON.stringify(ENGLISH_REFLEX_MEDIA['chapter-8']),/stomach|pylorus|omentum/i)
})
