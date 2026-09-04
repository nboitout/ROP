import { existsSync } from 'node:fs'
import { join } from 'node:path'

type Block = { type: string; items?: unknown[]; figures?: unknown[]; src?: string; href?: string }
type Chapter = { sections: { id: string; blocks: Block[] }[] }
type AnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
type Anchor = AnchorPoint & { slide: number | number[]; end?: AnchorPoint }
type Slide = { src: string }

const root = process.cwd()
const errors: string[] = []

function exported<T>(module: Record<string, unknown>, names: string[]): T {
  for (const name of names) {
    if (name in module) return module[name] as T
  }
  throw new Error(`Missing export: ${names.join(' or ')}`)
}

function validatePoint(chapterNumber: number, chapter: Chapter, point: AnchorPoint, label: string) {
  const section = chapter.sections.find(({ id }) => id === point.sectionId)
  if (!section) {
    errors.push(`Chapter ${chapterNumber}: ${label} refers to missing section ${point.sectionId}`)
    return
  }
  if (point.blockIndex < -1 || point.blockIndex >= section.blocks.length) {
    errors.push(`Chapter ${chapterNumber}: ${label} block ${point.blockIndex} is outside ${point.sectionId} (length ${section.blocks.length})`)
    return
  }
  if (point.itemIndex !== undefined && point.blockIndex >= 0) {
    const block = section.blocks[point.blockIndex]
    const items = block.items ?? block.figures
    if (!items || point.itemIndex < 0 || point.itemIndex >= items.length) {
      errors.push(`Chapter ${chapterNumber}: ${label} item ${point.itemIndex} is outside ${point.sectionId}/${point.blockIndex}`)
    }
  }
}

async function main() {
for (let number = 1; number <= 21; number += 1) {
  const chapterModule = await import(`../content/chapter${number}.en.ts`)
  const syncModule = await import(`../content/chapter${number === 3 || number === 4 ? `${number}-rework` : number}.slidesync.ts`)
  const chapter = exported<Chapter>(chapterModule, [`chapter${number}En`])
  const slides = exported<Slide[]>(syncModule, [
    `chapter${number}SlidesEn`,
    `chapter${number}ReworkSlidesEn`,
  ])
  const anchors = exported<Anchor[]>(syncModule, [
    ...(number === 14 ? ['chapter14SlideAnchors'] : []),
    `chapter${number}SlideAnchorsEn`,
    `chapter${number}ReworkSlideAnchorsEn`,
  ])
  const covered = new Set<number>()

  slides.forEach((slide, index) => {
    const path = join(root, 'public', decodeURIComponent(slide.src.split(/[?#]/, 1)[0]).replace(/^\//, ''))
    if (!existsSync(path)) errors.push(`Chapter ${number}: missing slide/media file ${slide.src}`)
    if (!anchors.some(({ slide: value }) => Array.isArray(value) ? value.includes(index + 1) : value === index + 1)) {
      errors.push(`Chapter ${number}: slide ${index + 1} has no English text anchor`)
    }
  })

  for (const anchor of anchors) {
    validatePoint(number, chapter, anchor, `anchor for slide ${JSON.stringify(anchor.slide)}`)
    if (anchor.end) validatePoint(number, chapter, anchor.end, `end anchor for slide ${JSON.stringify(anchor.slide)}`)
    for (const slide of Array.isArray(anchor.slide) ? anchor.slide : [anchor.slide]) {
      covered.add(slide)
      if (slide < 1 || slide > slides.length) errors.push(`Chapter ${number}: anchor refers to missing slide ${slide}`)
    }
  }

  for (const section of chapter.sections) {
    for (const block of section.blocks) {
      if (block.src) {
        const path = join(root, 'public', decodeURIComponent(block.src.split(/[?#]/, 1)[0]).replace(/^\//, ''))
        if (!existsSync(path)) errors.push(`Chapter ${number}: missing inline media file ${block.src}`)
      }
      if (block.type === 'xref' && block.href && !block.href.includes('lang=en')) {
        errors.push(`Chapter ${number}: English cross-reference does not retain lang=en: ${block.href}`)
      }
    }
  }
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exitCode = 1
} else {
  console.log('English V2 publication audit passed for Chapters 1–21.')
}
}

void main()
