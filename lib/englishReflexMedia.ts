import type { Block, Chapter } from "@/content/types";

type Pair = {
  cartography: string;
  photo?: string;
  label: string;
  orientation?: "landscape" | "portrait";
};

const numberedPairs = (
  chapter: number,
  labels: string[],
  options: { suffix?: string; photoNumbers?: Array<number | null> } = {},
): Pair[] =>
  labels.map((label, index) => {
    const cartographyNumber = index * 2 + 1;
    const photoNumber =
      options.photoNumbers && index < options.photoNumbers.length
        ? options.photoNumbers[index]
        : cartographyNumber + 1;
    const suffix = options.suffix ?? "";
    const path = (number: number) =>
      `/chapter-${chapter}/EN/Cartography/figure-${chapter}-${String(number).padStart(2, "0")}${suffix}.png`;
    return {
      cartography: path(cartographyNumber),
      photo: photoNumber === null ? undefined : path(photoNumber),
      label,
    };
  });

export const ENGLISH_REFLEX_MEDIA: Record<string, Pair[]> = {
  // Chapter 7 owns its canonical figures and 19-slide bilingual deck.
  "chapter-7": [],
  // Chapter 8 owns its canonical figures and 24-slide deck explicitly.  An
  // empty entry documents that it must never use the generic append strategy.
  "chapter-8": [],
  "chapter-9": numberedPairs(
    9,
    [
      "Oesophageal hiatus and right and left vagus nerves",
      "Stomach and lesser curvature",
      "Limbic brain–stomach relationship",
    ],
    { photoNumbers: [2, 4, null] },
  ),
  "chapter-10": [
    {
      cartography:
        "/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d1-d3.png",
      photo: "/chapter-10/EN/Cartography/figure-10-d2.png",
      label: "Duodenum D1–D3",
    },
    {
      cartography:
        "/chapter-10/EN/Cartography/figure-10-cartography-sphincter-of-oddi.png",
      photo: "/chapter-10/EN/Cartography/figure-10-sphincter-of-oddi.png",
      label: "Sphincter of Oddi",
    },
    {
      cartography:
        "/chapter-10/EN/Cartography/figure-10-cartography-duodenum-d4-oesophageal-hiatus.png",
      photo: "/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png",
      label: "Duodenum D4 and oesophageal hiatus",
    },
    {
      cartography:
        "/chapter-10/EN/Cartography/figure-10-cartography-duodenojejunal-junction.png",
      photo: "/chapter-10/EN/Cartography/figure-10-duodenojejunal-junction.png",
      label: "Duodenojejunal junction",
    },
  ],
  // Chapter 11 owns its seven canonical inline figures and complete 18-slide
  // deck explicitly; the former generic five-pair mapping was obsolete.
  "chapter-11": [],
  // Chapter 12 owns its two treatment photos and complete 16-slide deck
  // explicitly. Generic pairing would duplicate both prose figures and slides.
  "chapter-12": [],
  // Chapter 13 owns its two treatment figures and complete 21-slide deck.
  // Generic pairing would append duplicate figures, slides and anchors.
  "chapter-13": [],
  // Chapter 14 owns its five canonical inline figures and 23-slide deck explicitly.
  "chapter-14": [],
  "chapter-15": numberedPairs(15, [
    "Ascending colon",
    "Transverse colon",
    "Descending colon",
    "Sigmoid colon",
    "Rectum",
  ]),
  // Chapter 16 owns its five canonical treatment figures and complete
  // 28-slide deck explicitly. Generic pairing would duplicate its media.
  "chapter-16": [],
  // Chapter 17 owns its six treatment figures and complete 25-slide deck.
  "chapter-17": [],
  // Chapter 18 owns its seven treatment figures and complete 30-slide deck.
  "chapter-18": [],
  "chapter-19": [
    ...numberedPairs(19, [
      "Left kidney",
      "Left adrenal gland",
      "Greater sciatic foramen",
      "Lesser sciatic foramen",
      "Obturator foramen",
      "Pelvic ligaments",
      "Ovary",
      "Inguinal ligament and canal",
      "Perineal centre",
      "Pelvic ligament landmark",
      "Uterine tube",
    ]),
    {
      cartography:
        "/chapter-19/EN/Cartography/Chapter19 Cartography and Photos - 1.png",
      photo:
        "/chapter-19/EN/Cartography/Chapter19 Cartography and Photos - 2.png",
      label: "Bladder trigone, uterus and inferior hypogastric plexus",
    },
  ],
  "chapter-20": numberedPairs(
    20,
    [
      "Lumbar sympathetic chain and diaphragmatic crura",
      "Left kidney",
      "Left adrenal gland",
      "Greater sciatic foramen",
      "Greater and lesser sciatic foramina",
      "Obturator foramen",
      "Pelvic ligaments",
      "Testis",
      "Inguinal ligament and canal",
      "Prostate and bladder trigone",
    ],
    { suffix: "-EN" },
  ),
  // Chapter 21 owns its five inline treatment figures and complete 17-slide
  // deck explicitly. Generic augmentation would duplicate both inventories.
  "chapter-21": [],
};

function reflexSection(chapter: Chapter) {
  return (
    chapter.sections.find((section) =>
      /(?:zones?-reflexes?|reflex-zones?)/i.test(section.id),
    ) ??
    (chapter.slug === "chapter-14"
      ? chapter.sections.find((section) => section.id === "rop")
      : undefined)
  );
}

/** Add the treatment photos to English prose; cartographies stay in the synchronized rail. */
export function integrateEnglishReflexPhotos(chapter: Chapter): void {
  // These chapters own their canonical treatment figures explicitly so their
  // semantic placement remains identical to the French edition.
  if (
    chapter.slug === "chapter-7" ||
    chapter.slug === "chapter-8" ||
    chapter.slug === "chapter-9" ||
    chapter.slug === "chapter-11" ||
    chapter.slug === "chapter-12" ||
    chapter.slug === "chapter-13" ||
    chapter.slug === "chapter-14" ||
    chapter.slug === "chapter-15" ||
    chapter.slug === "chapter-16" ||
    chapter.slug === "chapter-17" ||
    chapter.slug === "chapter-18" ||
    chapter.slug === "chapter-19" ||
    chapter.slug === "chapter-20" ||
    chapter.slug === "chapter-21"
  )
    return;
  const pairs = ENGLISH_REFLEX_MEDIA[chapter.slug];
  const section = pairs && reflexSection(chapter);
  if (!pairs || !section) return;

  const existing = new Set(
    section.blocks.flatMap((block) =>
      block.type === "figure" ? [block.src.toLowerCase()] : [],
    ),
  );
  for (const pair of pairs) {
    if (!pair.photo || existing.has(pair.photo.toLowerCase())) continue;
    const figure: Block = {
      type: "figure",
      src: pair.photo,
      caption: `Photo: ${pair.label}`,
      alt: `ROP reflex-zone treatment landmark — ${pair.label}`,
      orientation: pair.orientation ?? "landscape",
    };
    section.blocks.push(figure);
    existing.add(pair.photo.toLowerCase());
  }
}

type Slide = { src: string; title: string; orientation?: "portrait" };
type AnchorPoint = {
  sectionId: string;
  blockIndex: number;
  itemIndex?: number;
};
type Anchor = AnchorPoint & {
  slide: number | number[];
  gapBefore?: "half";
  end?: AnchorPoint;
};

/** Mirror the French side-by-side cartography/photo mode for the English deck. */
export function integrateEnglishReflexDeck(
  chapter: Chapter,
  slides: Slide[],
  anchors: Anchor[],
) {
  // These chapters export their complete decks and anchors directly.
  if (
    chapter.slug === "chapter-7" ||
    chapter.slug === "chapter-8" ||
    chapter.slug === "chapter-9" ||
    chapter.slug === "chapter-11" ||
    chapter.slug === "chapter-12" ||
    chapter.slug === "chapter-13" ||
    chapter.slug === "chapter-14" ||
    chapter.slug === "chapter-16" ||
    chapter.slug === "chapter-17" ||
    chapter.slug === "chapter-18" ||
    chapter.slug === "chapter-19" ||
    chapter.slug === "chapter-20" ||
    chapter.slug === "chapter-21"
  )
    return { slides, anchors };
  const pairs = ENGLISH_REFLEX_MEDIA[chapter.slug];
  const section = pairs && reflexSection(chapter);
  if (!pairs || !section) return { slides, anchors };

  const nextSlides = [...slides];
  const nextAnchors = [...anchors];

  // A chapter-owned deck may already contain every configured cartography and
  // its semantic anchor.  Return it unchanged before matching repeated photo
  // sources (for example Chapter 10's intentional D4/junction reuse).
  const explicitSlideNumbers = pairs.map(
    (pair) =>
      nextSlides.findIndex(
        (slide) =>
          slide.src.split(/[?#]/, 1)[0].toLowerCase() ===
          pair.cartography.toLowerCase(),
      ) + 1,
  );
  const hasCompleteExplicitDeck = explicitSlideNumbers.every(
    (slideNumber) =>
      slideNumber > 0 &&
      nextAnchors.some((anchor) =>
        Array.isArray(anchor.slide)
          ? anchor.slide.includes(slideNumber)
          : anchor.slide === slideNumber,
      ),
  );
  if (hasCompleteExplicitDeck)
    return { slides: nextSlides, anchors: nextAnchors };

  for (const pair of pairs) {
    const cleanCartography = pair.cartography.toLowerCase();
    let slideIndex = nextSlides.findIndex(
      (slide) =>
        slide.src.split(/[?#]/, 1)[0].toLowerCase() === cleanCartography,
    );
    if (slideIndex < 0) {
      nextSlides.push({
        src: pair.cartography,
        title: `Cartography: ${pair.label}`,
      });
      slideIndex = nextSlides.length - 1;
    }

    const photoIndex = pair.photo
      ? section.blocks.findIndex(
          (block) =>
            block.type === "figure" &&
            block.src.toLowerCase() === pair.photo?.toLowerCase(),
        )
      : section.blocks.length - 1;
    const blockIndex = Math.max(0, photoIndex);
    const slideNumber = slideIndex + 1;
    if (
      !nextAnchors.some(
        (anchor) =>
          anchor.sectionId === section.id &&
          anchor.blockIndex === blockIndex &&
          (Array.isArray(anchor.slide)
            ? anchor.slide.includes(slideNumber)
            : anchor.slide === slideNumber),
      )
    ) {
      nextAnchors.push({
        sectionId: section.id,
        blockIndex,
        slide: slideNumber,
        end: { sectionId: section.id, blockIndex },
      });
    }
  }

  return { slides: nextSlides, anchors: nextAnchors };
}
