import { chapter1Slides, chapter1SlideAnchors } from './chapter1.slidesync'
import { chapter2Slides, chapter2SlideAnchorsFr } from './chapter2.slidesync'
import { chapter3Slides, chapter3SlideAnchors } from './chapter3.slidesync'
import { chapter5Slides, chapter5SlideAnchors } from './chapter5.slidesync'
import { chapter6Slides, chapter6SlideAnchors } from './chapter6.slidesync'
import { chapter7Slides, chapter7SlideAnchors } from './chapter7.slidesync'
import { chapter8Slides, chapter8SlideAnchors } from './chapter8.slidesync'
import { chapter9Slides, chapter9SlideAnchors } from './chapter9.slidesync'
import { chapter10Slides, chapter10SlideAnchors } from './chapter10.slidesync'
import { chapter11Slides, chapter11SlideAnchors } from './chapter11.slidesync'
import { chapter12Slides, chapter12SlideAnchors } from './chapter12.slidesync'
import { chapter13Slides, chapter13SlideAnchors } from './chapter13.slidesync'
import { chapter14Slides, chapter14SlideAnchorsFr } from './chapter14.slidesync'
import { chapter15Slides, chapter15SlideAnchors } from './chapter15.slidesync'
import { chapter16Slides, chapter16SlideAnchors } from './chapter16.slidesync'

type SyncSlideLike = { title: string }
type SyncAnchorLike = { sectionId: string; slide: number | number[] }

type SlideVisualSource = {
  slides: readonly SyncSlideLike[]
  anchors: readonly SyncAnchorLike[]
}

const slideVisualSources: Record<string, SlideVisualSource> = {
  'chapter-1': { slides: chapter1Slides, anchors: chapter1SlideAnchors },
  'chapter-2': { slides: chapter2Slides, anchors: chapter2SlideAnchorsFr },
  'chapter-3': { slides: chapter3Slides, anchors: chapter3SlideAnchors },
  'chapter-5': { slides: chapter5Slides, anchors: chapter5SlideAnchors },
  'chapter-6': { slides: chapter6Slides, anchors: chapter6SlideAnchors },
  'chapter-7': { slides: chapter7Slides, anchors: chapter7SlideAnchors },
  'chapter-8': { slides: chapter8Slides, anchors: chapter8SlideAnchors },
  'chapter-9': { slides: chapter9Slides, anchors: chapter9SlideAnchors },
  'chapter-10': { slides: chapter10Slides, anchors: chapter10SlideAnchors },
  'chapter-11': { slides: chapter11Slides, anchors: chapter11SlideAnchors },
  'chapter-12': { slides: chapter12Slides, anchors: chapter12SlideAnchors },
  'chapter-13': { slides: chapter13Slides, anchors: chapter13SlideAnchors },
  'chapter-14': { slides: chapter14Slides, anchors: chapter14SlideAnchorsFr },
  'chapter-15': { slides: chapter15Slides, anchors: chapter15SlideAnchors },
  'chapter-16': { slides: chapter16Slides, anchors: chapter16SlideAnchors },
}

function normalizeForSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u00df/g, 'ss')
    .toLowerCase()
}

function isPodalReflexText(value: string): boolean {
  const normalized = normalizeForSearch(value)
  const hasReflex = /reflex|reflej|rifless/.test(normalized)
  const hasPodal = /podal|plantar|plantaire|foot|feet|pied|fuss/.test(normalized)
  return hasReflex && hasPodal
}

function isPodalAnchorSection(sectionId: string): boolean {
  const normalized = normalizeForSearch(sectionId)
  return isPodalReflexText(sectionId) || normalized.includes('zones-reflexes')
}

function slideNumbers(slide: number | number[]): number[] {
  return Array.isArray(slide) ? slide : [slide]
}

export function getChapterSlideVisuals(key: string): { slideCount: number; podalZoneSlideCount: number } {
  const source = slideVisualSources[key]
  if (!source) return { slideCount: 0, podalZoneSlideCount: 0 }

  const podalSlides = new Set<number>()
  source.anchors.forEach((anchor) => {
    if (!isPodalAnchorSection(anchor.sectionId)) return
    slideNumbers(anchor.slide).forEach((slide) => podalSlides.add(slide))
  })

  source.slides.forEach((slide, index) => {
    if (isPodalReflexText(slide.title)) podalSlides.add(index + 1)
  })

  return {
    slideCount: source.slides.length,
    podalZoneSlideCount: podalSlides.size,
  }
}
