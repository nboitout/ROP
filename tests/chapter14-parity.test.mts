import assert from 'node:assert/strict'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import test from 'node:test'
import { chapter14En } from '../content/chapter14.en'
import { chapter14Fr } from '../content/chapter14.fr'
import { chapter14SlideAnchors, chapter14SlideAnchorsFr, chapter14Slides, chapter14SlidesEn } from '../content/chapter14.slidesync'
import { ENGLISH_REFLEX_MEDIA, integrateEnglishReflexDeck, integrateEnglishReflexPhotos } from '../lib/englishReflexMedia'

const root=join(import.meta.dirname,'..')
const types=(section:typeof chapter14En.sections[number])=>section.blocks.map(block=>block.type)
const figures=(chapter:typeof chapter14En)=>chapter.sections.flatMap(s=>s.blocks).filter(b=>b.type==='figure')
const refs=(chapter:typeof chapter14En)=>chapter.sections.flatMap((section)=>section.blocks.flatMap((block)=>[
 ...(block.type==='xref'?[block]:[]),
 ...(block.xrefs??[]),
]))

const assertValidAnchorTable=(chapter:typeof chapter14En,anchors:typeof chapter14SlideAnchors,slideCount:number)=>{
 const sectionOrder=new Map(chapter.sections.map((section,index)=>[section.id,index]))
 const pointPosition=(point:{sectionId:string;blockIndex:number;itemIndex?:number})=>{
  const sectionIndex=sectionOrder.get(point.sectionId)
  assert.notEqual(sectionIndex,undefined,`unknown anchor section ${point.sectionId}`)
  const section=chapter.sections[sectionIndex!]
  assert.ok(point.blockIndex>=-1 && point.blockIndex<section.blocks.length,`invalid anchor block ${point.sectionId}:${point.blockIndex}`)
  if(point.itemIndex!==undefined){
   assert.ok(point.blockIndex>=0,`item index cannot target a section heading: ${point.sectionId}:${point.blockIndex}`)
   const block=section.blocks[point.blockIndex] as {items?:unknown[];body?:unknown[]}
   const indexedContent=block.items??block.body
   assert.ok(Array.isArray(indexedContent),`item anchor targets a block without indexed content: ${point.sectionId}:${point.blockIndex}`)
   assert.ok(point.itemIndex>=0 && point.itemIndex<indexedContent.length,`invalid item anchor ${point.sectionId}:${point.blockIndex}:${point.itemIndex}`)
  }
  return sectionIndex!*10000+(point.blockIndex+1)*100+(point.itemIndex??0)
 }
 anchors.forEach((anchor)=>{
  assert.ok(Number.isInteger(anchor.slide) && anchor.slide>=1 && anchor.slide<=slideCount,`invalid slide ${anchor.slide}`)
  const start=pointPosition(anchor)
  if(anchor.end) assert.ok(pointPosition(anchor.end)>=start,`inverted anchor range for slide ${anchor.slide}`)
 })
}

const canonicalEnglishSlideTitles = [
 'Small Intestine',
 'Jejunum–Ileum Within the Colonic Frame',
 'Mesentery: Root and Suspension of the Small Intestine',
 'Vascular Supply of the Small Intestine',
 'Lymphatic Network of the Small Intestine',
 'Dual Innervation of the Peritoneum',
 'Vagus Nerve and Sympathetic System',
 'The Second Brain: Enteric Nervous System',
 'Motility of the Small Intestine',
 'The Intestinal Ecosystem: A Biological Boundary',
 'The Dual Route of Micronutrient Absorption',
 'Microanatomy: The Intestinal Barrier',
 'Hyperpermeability and Dysbiosis: A Reciprocal Association',
 'Intestinal Hyperpermeability',
 'Dysbiosis and the Brain–Gut Axis',
 'ROP Indications and Medical-Referral Criteria',
 'Crohn’s Disease',
 'Small Intestine — Viscerosomatic Relationships',
 'Clinical ROP Protocol: Small Intestine',
 'Cartography: Root of the Mesentery — Duodenojejunal Junction to Umbilicus',
 'Cartography: Root of the Mesentery — Ileocaecal Valve to Umbilicus',
 'Cartography: Jejunum',
 'Viscero-emotional Relationships',
]

test('Chapter 14 mirrors the final canonical French runtime structure',()=>{
 assert.deepEqual(chapter14En.sections.map(s=>s.id),chapter14Fr.sections.map(s=>s.id))
 assert.equal(chapter14En.sections.length,10)
 assert.equal(chapter14En.sections.reduce((n,s)=>n+s.blocks.length,0),107)
 chapter14Fr.sections.forEach((section,index)=>assert.deepEqual(types(chapter14En.sections[index]),types(section),section.id))
 assert.equal(chapter14En.sections.find(s=>s.id==='rop')?.blocks.length,38)
})

test('Chapter 14 has only the five canonical English inline figures',()=>{
 const en=figures(chapter14En)
 assert.deepEqual(en.map(f=>f.type==='figure'?f.src:''),[2,4,6,8,9].map(n=>`/chapter-14/EN/Cartography/figure-14-0${n}_EN.png`))
 en.forEach(f=>{if(f.type==='figure')assert.ok(existsSync(join(root,'public',f.src.slice(1))),f.src)})
 assert.equal(figures(chapter14Fr).length,5)
 assert.ok(chapter14En.clinicalCase && existsSync(join(root,'public',chapter14En.clinicalCase.src.slice(1))))
})

test('Chapter 14 exposes eight localized references with exact return routes',()=>{
 const en=refs(chapter14En)
 assert.equal(en.length,8)
 assert.equal(new Set(en.map((reference)=>reference.href)).size,8)
 en.forEach((reference)=>{const u=new URL(reference.href,'https://rop.local');assert.equal(u.searchParams.get('lang'),'en');assert.match(u.searchParams.get('xrefBack')??'',/^\/lecture\/chapitre-14\?lang=en#p-/);assert.equal(u.searchParams.get('xrefBackLabel'),'Back to Chapter 14')})
})

test('Chapter 14 uses the canonical 23-slide inventory and anchor events',()=>{
 assert.equal(chapter14Slides.length,23); assert.equal(chapter14SlidesEn.length,23)
 assert.deepEqual(chapter14SlidesEn.map((slide)=>slide.title),canonicalEnglishSlideTitles)
 assert.deepEqual(chapter14SlideAnchors,chapter14SlideAnchorsFr)
 assert.equal(chapter14SlideAnchors.length,24)
 assertValidAnchorTable(chapter14Fr,chapter14SlideAnchorsFr,chapter14Slides.length)
 assertValidAnchorTable(chapter14En,chapter14SlideAnchors,chapter14SlidesEn.length)
 assert.deepEqual(chapter14SlideAnchors.slice(2,5),[
  {sectionId:'anatomie',blockIndex:1,slide:3,end:{sectionId:'anatomie',blockIndex:6}},
  {sectionId:'vascularisation',blockIndex:0,slide:4,end:{sectionId:'vascularisation',blockIndex:3}},
  {sectionId:'vascularisation',blockIndex:4,slide:5,gapBefore:'half',end:{sectionId:'innervation',blockIndex:-1}},
 ])
 assert.deepEqual(chapter14SlideAnchors[7],{sectionId:'innervation',blockIndex:6,slide:8,end:{sectionId:'innervation',blockIndex:8}})
 assert.deepEqual(chapter14SlideAnchors[12],{sectionId:'physiologie',blockIndex:11,slide:10})
 assert.equal(chapter14SlideAnchors.filter(a=>a.slide===10).length,2)
 assert.deepEqual(chapter14SlidesEn.slice(19,22).map(s=>s.src),[1,3,5].map(n=>`/chapter-14/EN/Cartography/figure-14-0${n}_EN.png`))
 assert.deepEqual(chapter14SlidesEn.slice(0,19).filter((_,index)=>index!==1).map((slide)=>slide.src),[
  ...[1,3,4,5,6,7,8,9,10,11].map((n)=>`/chapter-14/EN/slides/slide-${String(n).padStart(2,'0')}_V3.png`),
  '/chapter-14/EN/slides/slide-12_V4.png',
  ...[13,14,15].map((n)=>`/chapter-14/EN/slides/slide-${String(n).padStart(2,'0')}_V3.png`),
  '/chapter-14/EN/slides/slide-16_V4.png',
  ...[17,18].map((n)=>`/chapter-14/EN/slides/slide-${String(n).padStart(2,'0')}_V3.png`),
  '/chapter-14/EN/slides/slide-21_V3.png',
 ])
 assert.equal(chapter14SlidesEn[22].src,'/chapter-14/EN/slides/slide-20_V3.png')
 assert.equal(new Set(chapter14SlidesEn.map(s=>s.src)).size,23)
 chapter14SlidesEn.forEach(s=>assert.ok(existsSync(join(root,'public',s.src.slice(1))),s.src))
})

test('Chapter 14 runtime media integration adds no duplicates',()=>{
 assert.deepEqual(ENGLISH_REFLEX_MEDIA['chapter-14'],[])
 const before=figures(chapter14En).length; integrateEnglishReflexPhotos(chapter14En); assert.equal(figures(chapter14En).length,before)
 const deck=integrateEnglishReflexDeck(chapter14En,chapter14SlidesEn,chapter14SlideAnchors)
 assert.equal(deck.slides.length,23); assert.equal(deck.anchors.length,24)
})
