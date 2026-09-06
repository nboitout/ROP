import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import test from "node:test";
import { chapter15En } from "../content/chapter15.en";
import { chapter15Fr } from "../content/chapter15.fr";
import {
  chapter15HalfBreaks,
  chapter15SlideAnchors,
  chapter15SlideAnchorsEn,
  chapter15Slides,
  chapter15SlidesEn,
} from "../content/chapter15.slidesync";
import { classicSlideDecks } from "../content/classicSlideDecks";
import {
  englishCrossReferenceSyncIssues,
  getChapterTranslations,
} from "../content/registry";
import {
  integrateEnglishReflexDeck,
  integrateEnglishReflexPhotos,
} from "../lib/englishReflexMedia";

const root = join(import.meta.dirname, "..");
const nonXrefs = (section: (typeof chapter15Fr.sections)[number]) =>
  section.blocks.filter((block) => block.type !== "xref");
const figures = (chapter: typeof chapter15En) =>
  chapter.sections.flatMap((section) =>
    section.blocks
      .map((block, index) => ({ block, index, sectionId: section.id }))
      .filter(({ block }) => block.type === "figure"),
  );
const references = (chapter: typeof chapter15En) =>
  chapter.sections.flatMap((section) =>
    section.blocks.flatMap((block, blockIndex) => [
      ...(block.type === "xref"
        ? [{ reference: block, sectionId: section.id, blockIndex }]
        : []),
      ...(block.xrefs ?? []).map((reference) => ({
        reference,
        sectionId: section.id,
        blockIndex,
      })),
    ]),
  );

test("Chapter 15 has strict FR/EN non-reference block parity", () => {
  assert.deepEqual(
    chapter15En.sections.map(({ id }) => id),
    chapter15Fr.sections.map(({ id }) => id),
  );
  assert.equal(chapter15Fr.sections.length, 13);
  assert.equal(chapter15En.sections.length, 13);

  chapter15Fr.sections.forEach((section, sectionIndex) => {
    const french = nonXrefs(section);
    const english = chapter15En.sections[sectionIndex].blocks;
    assert.equal(english.length, french.length, section.id);
    assert.deepEqual(
      english.map(({ type }) => type),
      french.map(({ type }) => type),
      section.id,
    );
  });

  assert.equal(
    chapter15En.sections.reduce(
      (sum, section) => sum + section.blocks.length,
      0,
    ),
    134,
  );
});

test("Chapter 15 has five canonical inline figures at corresponding passages", () => {
  const french = figures(chapter15Fr);
  const english = figures(chapter15En);
  assert.equal(french.length, 5);
  assert.equal(english.length, 5);
  assert.deepEqual(
    english.map(({ sectionId }) => sectionId),
    french.map(({ sectionId }) => sectionId),
  );
  assert.deepEqual(
    english.map(({ index }) => index),
    [3, 20, 24, 25, 28],
  );
  assert.deepEqual(
    english.map(({ block }) => (block.type === "figure" ? block.src : "")),
    [2, 4, 6, 8, 10].map(
      (number) =>
        `/chapter-15/EN/Cartography/figure-15-${String(number).padStart(2, "0")}.png`,
    ),
  );
  assert.deepEqual(
    english.map(({ block }) => (block.type === "figure" ? block.caption : "")),
    [
      "Photo: Ascending Colon and Transverse Colon",
      "Photo: Ileocecal Valve",
      "Photo: Transverse Mesocolon Root — First Segment",
      "Photo: Transverse Mesocolon Root — Second Segment",
      "Photo: Mesosigmoid Roots",
    ],
  );
  english.forEach(({ block }) => {
    if (block.type === "figure") {
      assert.match(block.src, /^\/chapter-15\/EN\/Cartography\//);
      assert.ok(
        existsSync(join(root, "public", block.src.slice(1))),
        block.src,
      );
      assert.ok(block.alt.length > 20, block.src);
    }
  });
});

test("Chapter 15 exposes seven localized references with exact return routes", () => {
  const runtime = getChapterTranslations("chapter-15").en!;
  const refs = references(runtime);
  assert.deepEqual(
    englishCrossReferenceSyncIssues.filter(
      ({ chapterKey }) => chapterKey === "chapter-15",
    ),
    [],
  );
  assert.equal(refs.length, 7);
  assert.equal(new Set(refs.map(({ reference }) => reference.href)).size, 7);

  refs.forEach(({ reference, sectionId, blockIndex }) => {
    const url = new URL(reference.href, "https://rop.local");
    assert.equal(url.searchParams.get("lang"), "en");
    assert.equal(
      url.searchParams.get("xrefBack"),
      `/lecture/chapitre-15?lang=en#p-${sectionId}-${blockIndex}`,
    );
    assert.equal(url.searchParams.get("xrefBackLabel"), "Back to Chapter 15");
    const target = url.pathname.match(/^\/lecture\/chapitre-(\d+)$/)?.[1];
    assert.ok(target, reference.href);
    assert.ok(getChapterTranslations(`chapter-${target}`).en, reference.href);
  });
});

test("Chapter 15 exposes the canonical 33-slide FR and EN inventories", () => {
  assert.equal(chapter15Slides.length, 33);
  assert.equal(chapter15SlidesEn.length, 33);
  assert.equal(classicSlideDecks["chapter-15"].fr?.length, 33);
  assert.equal(classicSlideDecks["chapter-15"].en?.length, 33);
  assert.equal(new Set(chapter15SlidesEn.map(({ src }) => src)).size, 33);
  assert.deepEqual(
    chapter15SlidesEn.slice(14, 27).map(({ src }) => src),
    Array.from(
      { length: 13 },
      (_, index) =>
        `/chapter-15/EN/Images/NCH 15 EN PATHOLOGY IMG ${index + 15} V3.png`,
    ),
  );
  assert.equal(
    chapter15SlidesEn[27].title,
    "Colon — Viscero-Somatic Relations",
  );
  assert.deepEqual(
    chapter15SlidesEn.slice(28).map(({ src }) => src),
    [1, 3, 5, 7, 9].map(
      (number) =>
        `/chapter-15/EN/Cartography/figure-15-${String(number).padStart(2, "0")}.png`,
    ),
  );
  chapter15SlidesEn.forEach(({ src }) => {
    assert.doesNotMatch(src, /\/FR\//);
    assert.ok(existsSync(join(root, "public", src.slice(1))), src);
  });
});

test("Chapter 15 exposes every canonical selector in both languages", () => {
  const pageSource = readFileSync(
    join(root, "app", "lecture", "chapitre-15", "page.tsx"),
    "utf8",
  );
  assert.doesNotMatch(pageSource, /HIDDEN_DOT_SLIDES/);
  assert.doesNotMatch(pageSource, /hiddenDotSlides=/);
  assert.deepEqual(
    chapter15Slides.slice(28).map((_, index) => index + 29),
    [29, 30, 31, 32, 33],
  );
  assert.deepEqual(
    chapter15SlidesEn.slice(28).map((_, index) => index + 29),
    [29, 30, 31, 32, 33],
  );
});

test("Chapter 15 slide anchors preserve scope, break and exact cartography pairs", () => {
  assert.equal(chapter15SlideAnchors.length, 33);
  assert.equal(chapter15SlideAnchorsEn.length, 33);
  const sectionIds = new Set(chapter15En.sections.map(({ id }) => id));
  chapter15SlideAnchorsEn.forEach((anchor) => {
    assert.ok(sectionIds.has(anchor.sectionId), anchor.sectionId);
    const section = chapter15En.sections.find(
      ({ id }) => id === anchor.sectionId,
    )!;
    assert.ok(
      anchor.blockIndex >= -1 && anchor.blockIndex < section.blocks.length,
    );
    if (anchor.end) {
      assert.ok(sectionIds.has(anchor.end.sectionId), anchor.end.sectionId);
      const endSection = chapter15En.sections.find(
        ({ id }) => id === anchor.end!.sectionId,
      )!;
      assert.ok(
        anchor.end.blockIndex >= -1 &&
          anchor.end.blockIndex < endSection.blocks.length,
      );
    }
  });
  assert.deepEqual(chapter15SlideAnchorsEn[27].end, {
    sectionId: "relations-viscero-emotionnelles",
    blockIndex: -1,
  });
  assert.deepEqual(chapter15HalfBreaks, [
    {
      sectionId: "relations-viscero-emotionnelles",
      blockIndex: -1,
    },
  ]);
  assert.deepEqual(
    chapter15SlideAnchors
      .slice(28)
      .map(({ slide, blockIndex, end }) => ({ slide, blockIndex, end })),
    [3, 22, 27, 28, 31].map((blockIndex, index) => ({
      slide: index + 29,
      blockIndex,
      end: { sectionId: "zones-reflexes-podales", blockIndex },
    })),
  );
  chapter15SlideAnchors.slice(28).forEach((anchor) => {
    const section = chapter15Fr.sections.find(
      ({ id }) => id === anchor.sectionId,
    )!;
    assert.equal(section.blocks[anchor.blockIndex].type, "figure");
  });
  assert.deepEqual(
    chapter15SlideAnchorsEn
      .slice(28)
      .map(({ slide, blockIndex, end }) => ({ slide, blockIndex, end })),
    [3, 20, 24, 25, 28].map((blockIndex, index) => ({
      slide: index + 29,
      blockIndex,
      end: { sectionId: "zones-reflexes-podales", blockIndex },
    })),
  );
  chapter15SlideAnchorsEn.slice(28).forEach((anchor) => {
    const section = chapter15En.sections.find(
      ({ id }) => id === anchor.sectionId,
    )!;
    assert.equal(section.blocks[anchor.blockIndex].type, "figure");
  });
});

test("Chapter 15 runtime integration adds no figure, slide or anchor duplicates", () => {
  const figureCount = figures(chapter15En).length;
  integrateEnglishReflexPhotos(chapter15En);
  assert.equal(figures(chapter15En).length, figureCount);
  const effective = integrateEnglishReflexDeck(
    chapter15En,
    chapter15SlidesEn,
    chapter15SlideAnchorsEn,
  );
  assert.equal(effective.slides.length, 33);
  assert.equal(effective.anchors.length, 33);
  assert.deepEqual(effective.slides, chapter15SlidesEn);
  assert.deepEqual(effective.anchors, chapter15SlideAnchorsEn);
});
