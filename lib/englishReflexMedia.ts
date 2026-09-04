import type { Block, Chapter } from '@/content/types'

type Pair = {
  cartography: string
  photo?: string
  label: string
  orientation?: 'landscape' | 'portrait'
}

const numberedPairs = (
  chapter: number,
  labels: string[],
  options: { suffix?: string; photoNumbers?: Array<number | null> } = {},
): Pair[] => labels.map((label, index) => {
  const cartographyNumber = index * 2 + 1
  const photoNumber = options.photoNumbers && index < options.photoNumbers.length
    ? options.photoNumbers[index]
    : cartographyNumber + 1
  const suffix = options.suffix ?? ''
  const path = (number: number) => `/chapter-${chapter}/EN/Cartography/figure-${chapter}-${String(number).padStart(2, '0')}${suffix}.png`
  return { cartography: path(cartographyNumber), photo: photoNumber === null ? undefined : path(photoNumber), label }
})

export const ENGLISH_REFLEX_MEDIA: Record<string, Pair[]> = {
  'chapter-8': [
    ...numberedPairs(8, ['Right diaphragmatic dome', 'Left diaphragmatic dome', 'Oesophagus', 'Gastric cardia']),
    { cartography: '/chapter-8/EN/Cartography/figure-8-09.png', photo: '/chapter-8/EN/Cartography/figure-8-10.png', label: 'Stomach' },
    { cartography: '/chapter-8/EN/Cartography/figure-8-12.png', photo: '/chapter-8/EN/Cartography/figure-8-11.png', label: 'Pylorus' },
    { cartography: '/chapter-8/EN/Cartography/figure-8-14.png', photo: '/chapter-8/EN/Cartography/figure-8-13.png', label: 'Greater omentum' },
    { cartography: '/chapter-8/EN/Cartography/figure-8-16.png', photo: '/chapter-8/EN/Cartography/figure-8-15.png', label: 'Lesser omentum' },
  ],
  'chapter-9': numberedPairs(9, ['Stomach', 'Pylorus', 'Gastric autonomic regulation'], { photoNumbers: [2, 4, null] }),
  'chapter-10': [
    { cartography: '/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d1-d3.png', photo: '/chapter-10/EN/Cartography/figure-10-d2.png', label: 'Duodenum D1–D3' },
    { cartography: '/chapter-10/EN/Cartography/figure-10-cartography-sphincter-of-oddi.png', photo: '/chapter-10/EN/Cartography/figure-10-sphincter-of-oddi.png', label: 'Sphincter of Oddi' },
    { cartography: '/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d4-oesophageal-hiatus.png', photo: '/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png', label: 'Duodenum D4 and oesophageal hiatus' },
    { cartography: '/chapter-10/EN/Cartography/figure-10-cartography-duodenojejunal-junction.png', photo: '/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png', label: 'Duodenojejunal junction' },
  ],
  'chapter-11': numberedPairs(11, ['Liver — inferior surface and right lobe', 'Gallbladder', 'Biliary tract', 'Left hepatic lobe', 'Phrenic nerve'], { suffix: '_EN' }),
  // This chapter's published asset directory is lowercase; preserve the exact
  // casing so the URLs also resolve on Linux deployments.
  'chapter-12': numberedPairs(12, ['Pancreas — head and neck', 'Pancreas — body and tail']).map((pair) => ({
    ...pair,
    cartography: pair.cartography.replace('/Cartography/', '/cartography/'),
    photo: pair.photo?.replace('/Cartography/', '/cartography/'),
  })),
  'chapter-13': numberedPairs(13, ['Spleen', 'Splenic neurovascular relations']),
  'chapter-14': numberedPairs(14, ['Mesenteric root — duodenojejunal junction to umbilicus', 'Mesenteric root — ileocecal valve to umbilicus', 'Jejunum'], { suffix: '_EN' }),
  'chapter-15': numberedPairs(15, ['Ascending colon', 'Transverse colon', 'Descending colon', 'Sigmoid colon', 'Rectum']),
  'chapter-16': numberedPairs(16, ['Right kidney and adrenal gland', 'Left kidney', 'Left adrenal gland', 'Combined kidney manoeuvre', 'Lumbar plexus and renal region'], { suffix: '-EN' }),
  'chapter-17': numberedPairs(17, ['Greater sciatic foramen and piriformis', 'Lesser sciatic foramen and obturators', 'Obturator foramen', 'Pudendal nerve', 'Pelvic ligaments', 'Craniosacral landmarks']),
  'chapter-18': numberedPairs(18, ['Greater sciatic foramen and piriformis', 'Lesser sciatic foramen and obturators', 'Obturator foramen', 'Pelvic ligaments', 'Pubovesical ligament', 'Bladder trigone', 'Perineal centre']),
  'chapter-19': [
    ...numberedPairs(19, ['Left kidney', 'Left adrenal gland', 'Greater sciatic foramen', 'Lesser sciatic foramen', 'Obturator foramen', 'Pelvic ligaments', 'Ovary', 'Inguinal ligament and canal', 'Perineal centre', 'Pelvic ligament landmark', 'Uterine tube']),
    { cartography: '/chapter-19/EN/Cartography/Chapter19 Cartography and Photos - 1.png', photo: '/chapter-19/EN/Cartography/Chapter19 Cartography and Photos - 2.png', label: 'Bladder trigone, uterus and inferior hypogastric plexus' },
  ],
  'chapter-20': numberedPairs(20, ['Lumbar sympathetic chain and diaphragmatic crura', 'Left kidney', 'Left adrenal gland', 'Greater sciatic foramen', 'Greater and lesser sciatic foramina', 'Obturator foramen', 'Pelvic ligaments', 'Testis', 'Inguinal ligament and canal', 'Prostate and bladder trigone'], { suffix: '-EN' }),
  'chapter-21': numberedPairs(21, ['Greater sciatic foramen', 'Lesser sciatic foramen', 'Pelvic ligaments', 'Inguinal ligament and canal', 'Pudendal nerve and erectile organs', 'Olfactory nerve I'], { photoNumbers: [2, 4, 6, 8, 10, null] }),
}

function reflexSection(chapter: Chapter) {
  return chapter.sections.find((section) => /(?:zones?-reflexes?|reflex-zones?)/i.test(section.id))
    ?? (chapter.slug === 'chapter-14' ? chapter.sections.find((section) => section.id === 'rop') : undefined)
}

/** Add the treatment photos to English prose; cartographies stay in the synchronized rail. */
export function integrateEnglishReflexPhotos(chapter: Chapter): void {
  const pairs = ENGLISH_REFLEX_MEDIA[chapter.slug]
  const section = pairs && reflexSection(chapter)
  if (!pairs || !section) return

  const existing = new Set(section.blocks.flatMap((block) => block.type === 'figure' ? [block.src.toLowerCase()] : []))
  for (const pair of pairs) {
    if (!pair.photo || existing.has(pair.photo.toLowerCase())) continue
    const figure: Block = {
      type: 'figure',
      src: pair.photo,
      caption: `Photo: ${pair.label}`,
      alt: `ROP reflex-zone treatment landmark — ${pair.label}`,
      orientation: pair.orientation ?? 'landscape',
    }
    section.blocks.push(figure)
    existing.add(pair.photo.toLowerCase())
  }
}

type Slide = { src: string; title: string; orientation?: 'portrait' }
type AnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
type Anchor = AnchorPoint & { slide: number | number[]; gapBefore?: 'half'; end?: AnchorPoint }

/** Mirror the French side-by-side cartography/photo mode for the English deck. */
export function integrateEnglishReflexDeck(chapter: Chapter, slides: Slide[], anchors: Anchor[]) {
  const pairs = ENGLISH_REFLEX_MEDIA[chapter.slug]
  const section = pairs && reflexSection(chapter)
  if (!pairs || !section) return { slides, anchors }

  const nextSlides = [...slides]
  const nextAnchors = [...anchors]

  for (const pair of pairs) {
    const cleanCartography = pair.cartography.toLowerCase()
    let slideIndex = nextSlides.findIndex((slide) => slide.src.split(/[?#]/, 1)[0].toLowerCase() === cleanCartography)
    if (slideIndex < 0) {
      nextSlides.push({ src: pair.cartography, title: `Cartography: ${pair.label}` })
      slideIndex = nextSlides.length - 1
    }

    const photoIndex = pair.photo
      ? section.blocks.findIndex((block) => block.type === 'figure' && block.src.toLowerCase() === pair.photo?.toLowerCase())
      : section.blocks.length - 1
    const blockIndex = Math.max(0, photoIndex)
    const slideNumber = slideIndex + 1
    if (!nextAnchors.some((anchor) => anchor.sectionId === section.id && anchor.blockIndex === blockIndex && (Array.isArray(anchor.slide) ? anchor.slide.includes(slideNumber) : anchor.slide === slideNumber))) {
      nextAnchors.push({ sectionId: section.id, blockIndex, slide: slideNumber, end: { sectionId: section.id, blockIndex } })
    }
  }

  return { slides: nextSlides, anchors: nextAnchors }
}
