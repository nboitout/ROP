import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { existsSync, readFileSync } from "node:fs";
import test from "node:test";
import { classicSlideDecks } from "../content/classicSlideDecks";
import { chapter20En } from "../content/chapter20.en";
import { chapter20Fr } from "../content/chapter20.fr";
import {
  chapter20SlideAnchors,
  chapter20SlideAnchorsEn,
  chapter20Slides,
  chapter20SlidesEn,
} from "../content/chapter20.slidesync";
import type { Block, Chapter } from "../content/types";
import {
  integrateEnglishReflexDeck,
  integrateEnglishReflexPhotos,
} from "../lib/englishReflexMedia";

const contentBlocks = (chapter: Chapter) =>
  chapter.sections.flatMap((section) =>
    section.blocks.filter((block) => block.type !== "xref"),
  );
const references = (chapter: Chapter) =>
  chapter.sections.flatMap((section) =>
    section.blocks.flatMap((block) => [
      ...(block.type === "xref" ? [block] : []),
      ...(block.xrefs ?? []).map((xref) => ({
        type: "xref" as const,
        ...xref,
      })),
    ]),
  );
const publicPath = (src: string) =>
  `public${decodeURIComponent(src.split("?", 1)[0])}`;
const listItems = (block: Block) =>
  block.type === "bullets" || block.type === "numbered"
    ? block.items.length
    : block.type === "leadBullets"
      ? block.items.length
      : block.type === "note" || block.type === "rop"
        ? block.body.length
        : undefined;

test("Chapter 20 English content preserves canonical French structure and media order", () => {
  assert.equal(chapter20En.sections.length, 11);
  assert.equal(contentBlocks(chapter20En).length, 165);
  assert.deepEqual(
    chapter20En.sections.map(({ id }) => id),
    chapter20Fr.sections.map(({ id }) => id),
  );
  assert.equal(
    contentBlocks(chapter20En).length,
    contentBlocks(chapter20Fr).length,
  );
  for (const [index, frenchSection] of chapter20Fr.sections.entries()) {
    assert.deepEqual(
      chapter20En.sections[index].blocks
        .filter((block) => block.type !== "xref")
        .map((block) => block.type),
      frenchSection.blocks
        .filter((block) => block.type !== "xref")
        .map((block) => block.type),
      `non-xref block sequence differs in ${frenchSection.id}`,
    );
    for (const [blockIndex, frenchBlock] of frenchSection.blocks.entries()) {
      assert.equal(
        listItems(chapter20En.sections[index].blocks[blockIndex]),
        listItems(frenchBlock),
        `nested item cardinality differs at ${frenchSection.id}[${blockIndex}]`,
      );
    }
  }

  const figures = contentBlocks(chapter20En).filter(
    (block): block is Extract<Block, { type: "figure" }> =>
      block.type === "figure",
  );
  assert.equal(figures.length, 10);
  assert.deepEqual(
    contentBlocks(chapter20En).flatMap((block, index) =>
      block.type === "figure" ? [index] : [],
    ),
    contentBlocks(chapter20Fr).flatMap((block, index) =>
      block.type === "figure" ? [index] : [],
    ),
  );
  assert.deepEqual(
    figures.map(({ src }) => src.split("/").at(-1)),
    [
      "figure-20-02-EN.png",
      "figure-20-16-EN.png",
      "figure-20-18-EN.png",
      "figure-20-08-EN.png",
      "figure-20-10-EN.png",
      "figure-20-12-EN.png",
      "figure-20-14-EN.png",
      "figure-20-20-EN.png",
      "figure-20-04-EN.png",
      "figure-20-06-EN.png",
    ],
  );
  for (const figure of figures) {
    assert.match(figure.src, /^\/chapter-20\/EN\/Cartography\//);
    assert.ok(
      existsSync(publicPath(figure.src)),
      `missing figure ${figure.src}`,
    );
  }

  const xrefs = references(chapter20En);
  assert.equal(xrefs.length, 11);
  assert.ok(xrefs.every(({ href }) => href.includes("lang=en")));
});

test("Chapter 20 prostate-cancer treatment and diagnostic propositions remain a translation of canonical French", () => {
  const blocks = chapter20En.sections.find(
    ({ id }) => id === "pathologies-courantes",
  )!.blocks;
  const diagnosis = blocks[12];
  const treatment = blocks[13];
  assert.equal(diagnosis.type, "bullets");
  assert.equal(diagnosis.type === "bullets" ? diagnosis.items.length : 0, 3);
  assert.match(
    diagnosis.type === "bullets" ? diagnosis.items[0] : "",
    /below 4 ng\/mL.*free PSA to total PSA.*Biopsy confirms/s,
  );
  assert.match(
    diagnosis.type === "bullets" ? diagnosis.items[1] : "",
    /PSA is a useful marker.*Age over 50.*African American.*dietary and lifestyle/s,
  );
  assert.match(
    diagnosis.type === "bullets" ? diagnosis.items[2] : "",
    /diagnosed late.*median lobe.*acute low-back pain and sciatica.*at night/s,
  );
  assert.equal(
    treatment.type === "para" ? treatment.text : "",
    "ROP can do very little for these patients. Medical treatment is based on androgen blockade (chemotherapy and hormone therapy) and morphine.",
  );

  const passage = [
    ...(diagnosis.type === "bullets" ? diagnosis.items : []),
    treatment.type === "para" ? treatment.text : "",
  ].join(" ");
  for (const modernization of [
    "magnetic resonance imaging",
    "active surveillance",
    "radiotherapy",
    "other systemic anticancer treatments",
    "current guidance",
  ])
    assert.doesNotMatch(passage, new RegExp(modernization, "i"));
});

test("Chapter 20 exposes the complete canonical 25-slide English deck without runtime augmentation", () => {
  assert.equal(chapter20Slides.length, 25);
  assert.equal(chapter20SlidesEn.length, 25);
  assert.equal(classicSlideDecks["chapter-20"].en?.length, 25);
  assert.deepEqual(
    chapter20SlidesEn.slice(15).map(({ src }) => src.split("/").at(-1)),
    [
      "figure-20-01-EN.png",
      "figure-20-03-EN.png",
      "figure-20-05-EN.png",
      "figure-20-07-EN.png",
      "figure-20-09-EN.png",
      "figure-20-11-EN.png",
      "figure-20-13-EN.png",
      "figure-20-15-EN.png",
      "figure-20-17-EN.png",
      "figure-20-19-EN.png",
    ],
  );
  for (const slide of chapter20SlidesEn) {
    assert.doesNotMatch(slide.src, /\/FR\//);
    assert.ok(existsSync(publicPath(slide.src)), `missing slide ${slide.src}`);
  }

  const beforeFigures = contentBlocks(chapter20En).filter(
    ({ type }) => type === "figure",
  ).length;
  integrateEnglishReflexPhotos(chapter20En);
  assert.equal(
    contentBlocks(chapter20En).filter(({ type }) => type === "figure").length,
    beforeFigures,
  );
  const integrated = integrateEnglishReflexDeck(
    chapter20En,
    chapter20SlidesEn,
    chapter20SlideAnchorsEn,
  );
  assert.equal(integrated.slides.length, 25);
  assert.deepEqual(integrated.anchors, chapter20SlideAnchorsEn);
});

test("Chapter 20 duplicated kidney/adrenal cartography is labelled honestly and never used under conflicting meanings", () => {
  const combinedFr =
    "Cartographie ROP : rein et surrénale gauches (voie antérieure)";
  const combinedEn =
    "ROP Cartography: Left Kidney and Adrenal Gland (Anterior Approach)";
  assert.deepEqual(
    chapter20Slides.slice(16, 18).map(({ title }) => title),
    [combinedFr, combinedFr],
  );
  assert.deepEqual(
    chapter20SlidesEn.slice(16, 18).map(({ title }) => title),
    [combinedEn, combinedEn],
  );

  const titlesByHash = new Map<
    string,
    { count: number; titles: Set<string> }
  >();
  for (const slide of chapter20Slides) {
    const hash = createHash("sha256")
      .update(readFileSync(publicPath(slide.src)))
      .digest("hex");
    const group = titlesByHash.get(hash) ?? {
      count: 0,
      titles: new Set<string>(),
    };
    group.count += 1;
    group.titles.add(slide.title);
    titlesByHash.set(hash, group);
  }
  assert.ok(
    [...titlesByHash.values()].some(({ count }) => count === 2),
    "the documented duplicate must remain detectable",
  );
  assert.ok(
    [...titlesByHash.values()].every(({ titles }) => titles.size === 1),
    "byte-identical assets must not claim conflicting meanings",
  );
});

test("Chapter 20 English anchors preserve canonical placement, including non-sequential cartographies", () => {
  assert.equal(chapter20SlideAnchorsEn.length, 25);
  assert.deepEqual(chapter20SlideAnchorsEn, chapter20SlideAnchors);
  assert.deepEqual(chapter20SlideAnchorsEn[1], {
    sectionId: "presentation",
    blockIndex: 0,
    itemIndex: 4,
    slide: 2,
  });
  assert.deepEqual(
    chapter20SlideAnchorsEn
      .slice(15)
      .map(({ blockIndex, slide }) => ({ blockIndex, slide })),
    [
      { blockIndex: 9, slide: 16 },
      { blockIndex: 14, slide: 23 },
      { blockIndex: 15, slide: 24 },
      { blockIndex: 22, slide: 19 },
      { blockIndex: 23, slide: 20 },
      { blockIndex: 24, slide: 21 },
      { blockIndex: 25, slide: 22 },
      { blockIndex: 43, slide: 25 },
      { blockIndex: 53, slide: 17 },
      { blockIndex: 54, slide: 18 },
    ],
  );

  const sections = new Map(
    chapter20En.sections.map((section) => [section.id, section.blocks]),
  );
  for (const anchor of chapter20SlideAnchorsEn) {
    const blocks = sections.get(anchor.sectionId);
    assert.ok(blocks, `unknown anchor section ${anchor.sectionId}`);
    assert.ok(
      anchor.blockIndex >= -1 && anchor.blockIndex < blocks.length,
      `invalid anchor ${JSON.stringify(anchor.slide)}`,
    );
    if (anchor.itemIndex !== undefined) {
      const block = blocks[anchor.blockIndex];
      assert.equal(block?.type, "bullets");
      assert.ok(
        block.type === "bullets" && anchor.itemIndex < block.items.length,
      );
    }
    if (anchor.end)
      assert.deepEqual(anchor.end, {
        sectionId: anchor.sectionId,
        blockIndex: anchor.blockIndex,
      });
  }
});
