// Reflex-zone classification and slide counting shared by the admin chapter
// dashboard, the slide search index and scripts/sync-chapter-meta.ts.
//
// Kept free of `@/` imports and of runtime dependencies so the Node-based
// snapshot script (`node --experimental-strip-types`) can import it directly.

export type SlideVisualSlide = { title: string }
export type SlideVisualAnchor = { sectionId: string; slide: number | number[] }

export type SlideVisualSource = {
  slides: readonly SlideVisualSlide[]
  anchors: readonly SlideVisualAnchor[]
}

export type SlideVisualCounts = {
  /** Every slide of the reading deck, cartographies included. */
  slideCount: number
  /** Slides that map reflex zones on the foot / occiput. */
  podalZoneSlideCount: number
}

export function normalizeForSearch(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\u00df/g, 'ss')
    .toLowerCase()
}

export function isPodalReflexText(value: string): boolean {
  const normalized = normalizeForSearch(value)
  const hasReflex = /reflex|reflej|rifless/.test(normalized)
  const hasPodal = /podal|plantar|plantaire|foot|feet|pied|fuss/.test(normalized)
  return hasReflex && hasPodal
}

export function isRopClinicalApplicationText(value: string): boolean {
  const normalized = normalizeForSearch(value)
  return /\brop\b/.test(normalized) && /(application clinique|approche clinique|clinical application|clinical approach)/.test(normalized)
}

export function isPodalAnchorSection(sectionId: string): boolean {
  const normalized = normalizeForSearch(sectionId)
  return isPodalReflexText(sectionId) || normalized.includes('zones-reflexes') || isRopClinicalApplicationText(sectionId)
}

export function slideNumbers(slide: number | number[]): number[] {
  return Array.isArray(slide) ? slide : [slide]
}

export function computeSlideVisuals(source: SlideVisualSource | undefined): SlideVisualCounts {
  if (!source) return { slideCount: 0, podalZoneSlideCount: 0 }

  const podalSlides = new Set<number>()
  source.anchors.forEach((anchor) => {
    if (!isPodalAnchorSection(anchor.sectionId)) return
    slideNumbers(anchor.slide).forEach((slide) => podalSlides.add(slide))
  })

  source.slides.forEach((slide, index) => {
    if (isPodalReflexText(slide.title) || isRopClinicalApplicationText(slide.title)) {
      podalSlides.add(index + 1)
    }
  })

  return {
    slideCount: source.slides.length,
    podalZoneSlideCount: podalSlides.size,
  }
}
