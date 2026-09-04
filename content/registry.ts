import type { Lang } from '@/app/i18n/translations'
import type { Chapter } from './types'
import { classicSlideDecks } from './classicSlideDecks'
import { introductionFr } from './introduction.fr'
import { introductionEn } from './introduction.en'
import { introductionDe } from './introduction.de'
import { introductionEs } from './introduction.es'
import { introductionIt } from './introduction.it'
import { introductionPt } from './introduction.pt'
import { chapter1Fr } from './chapter1.fr'
import { chapter1En } from './chapter1.en'
import { chapter1Es } from './chapter1.es'
import { chapter3ReworkFr } from './chapter3-rework.fr'
import { chapter3En } from './chapter3.en'
import { chapter6Fr } from './chapter6.fr'
import { chapter6En } from './chapter6.en'
import { chapter7Fr } from './chapter7.fr'
import { chapter7En } from './chapter7.en'
import { chapter8En } from './chapter8.en'
import { chapter9En } from './chapter9.en'
import { chapter2Fr } from './chapter2.fr'
import { chapter2En } from './chapter2.en'
import { chapter2De } from './chapter2.de'
import { chapter2Es } from './chapter2.es'
import { chapter2It } from './chapter2.it'
import { chapter4ReworkFr } from './chapter4-rework.fr'
import { chapter4En } from './chapter4.en'
import { chapter5ReworkFr } from './chapter5-rework.fr'
import { chapter5En } from './chapter5.en'
import { chapter8Fr } from './chapter8.fr'
import { chapter9Fr } from './chapter9.fr'
import { chapter10Fr } from './chapter10.fr'
import { chapter10En } from './chapter10.en'
import { chapter11En } from './chapter11.en'
import { chapter12En } from './chapter12.en'
import { chapter13En } from './chapter13.en'
import { chapter11Fr } from './chapter11.fr'
import { chapter12Fr } from './chapter12.fr'
import { chapter13Fr } from './chapter13.fr'
import { chapter14Fr } from './chapter14.fr'
import { chapter14En } from './chapter14.en'
import { chapter15Fr } from './chapter15.fr'
import { chapter15En } from './chapter15.en'
import { chapter15De } from './chapter15.de'
import { chapter15Es } from './chapter15.es'
import { chapter15It } from './chapter15.it'
import { chapter16Fr } from './chapter16.fr'
import { chapter16En } from './chapter16.en'
import { chapter16De } from './chapter16.de'
import { chapter16Es } from './chapter16.es'
import { chapter16It } from './chapter16.it'
import { chapter17Fr } from './chapter17.fr'
import { chapter17En } from './chapter17.en'
import { chapter17De } from './chapter17.de'
import { chapter17Es } from './chapter17.es'
import { chapter17It } from './chapter17.it'
import { chapter18Fr } from './chapter18.fr'
import { chapter18En } from './chapter18.en'
import { chapter18De } from './chapter18.de'
import { chapter18Es } from './chapter18.es'
import { chapter18It } from './chapter18.it'
import { chapter19Fr } from './chapter19.fr'
import { chapter19En } from './chapter19.en'
import { chapter19De } from './chapter19.de'
import { chapter19Es } from './chapter19.es'
import { chapter19It } from './chapter19.it'
import { chapter20Fr } from './chapter20.fr'
import { chapter20En } from './chapter20.en'
import { chapter20De } from './chapter20.de'
import { chapter20Es } from './chapter20.es'
import { chapter20It } from './chapter20.it'
import { chapter21Fr } from './chapter21.fr'
import { chapter21En } from './chapter21.en'
import { chapter21De } from './chapter21.de'
import { chapter21Es } from './chapter21.es'
import { chapter21It } from './chapter21.it'
import { integrateEnglishReflexPhotos } from '@/lib/englishReflexMedia'

// The former reworked editions are now the canonical French Chapters 3–5.
chapter3ReworkFr.slug = 'chapter-3'
chapter4ReworkFr.slug = 'chapter-4'
chapter5ReworkFr.slug = 'chapter-5'

// Normalize references created while Chapters 3–5 lived under private
// /rework routes. Saved legacy URLs still redirect at the route level.
for (const chapter of [chapter3ReworkFr, chapter4ReworkFr, chapter5ReworkFr, chapter7Fr, chapter8Fr, chapter9Fr, chapter10Fr, chapter11Fr, chapter12Fr, chapter13Fr, chapter14Fr, chapter15Fr, chapter16Fr, chapter17Fr, chapter18Fr, chapter19Fr, chapter20Fr, chapter21Fr]) {
  for (const section of chapter.sections) {
    for (const block of section.blocks) {
      if (block.type !== 'xref') continue
      block.href = block.href
        .replace('/lecture/chapitre-3-rework', '/lecture/chapitre-3')
        .replace('/lecture/chapitre-4-rework', '/lecture/chapitre-4')
        .replace('/lecture/chapitre-5-rework', '/lecture/chapitre-5')
    }
  }
}

/**
 * Per-chapter, per-language content. French is the canonical fallback.
 *
 * As chapters are progressively translated, add the locale entry alongside
 * the existing `fr` one, e.g.:
 *   introduction: { fr: introductionFr, en: introductionEn },
 */
const registry: Record<string, Partial<Record<Lang, Chapter>>> = {
  introduction: { fr: introductionFr, en: introductionEn, de: introductionDe, es: introductionEs, it: introductionIt, pt: introductionPt },
  'chapter-1': { fr: chapter1Fr, en: chapter1En, es: chapter1Es },
  'chapter-3': { fr: chapter3ReworkFr, en: chapter3En },
  'chapter-6': { fr: chapter6Fr, en: chapter6En },
  'chapter-7': { fr: chapter7Fr, en: chapter7En },
  'chapter-2': { fr: chapter2Fr, en: chapter2En, de: chapter2De, es: chapter2Es, it: chapter2It },
  'chapter-4': { fr: chapter4ReworkFr, en: chapter4En },
  'chapter-5': { fr: chapter5ReworkFr, en: chapter5En },
  'chapter-8': { fr: chapter8Fr, en: chapter8En },
  'chapter-9': { fr: chapter9Fr, en: chapter9En },
  'chapter-10': { fr: chapter10Fr, en: chapter10En },
  'chapter-11': { fr: chapter11Fr, en: chapter11En },
  'chapter-12': { fr: chapter12Fr, en: chapter12En },
  'chapter-13': { fr: chapter13Fr, en: chapter13En },
  'chapter-14': { fr: chapter14Fr, en: chapter14En },
  'chapter-15': { fr: chapter15Fr, en: chapter15En, de: chapter15De, es: chapter15Es, it: chapter15It },
  'chapter-16': { fr: chapter16Fr, en: chapter16En, de: chapter16De, es: chapter16Es, it: chapter16It },
  'chapter-17': { fr: chapter17Fr, en: chapter17En, de: chapter17De, es: chapter17Es, it: chapter17It },
  'chapter-18': { fr: chapter18Fr, en: chapter18En, de: chapter18De, es: chapter18Es, it: chapter18It },
  'chapter-19': { fr: chapter19Fr, en: chapter19En, de: chapter19De, es: chapter19Es, it: chapter19It },
  'chapter-20': { fr: chapter20Fr, en: chapter20En, de: chapter20De, es: chapter20Es, it: chapter20It },
  'chapter-21': { fr: chapter21Fr, en: chapter21En, de: chapter21De, es: chapter21Es, it: chapter21It },
}

// English cartography exports use the same paired presentation as the French
// reflex-zone sections: the treatment photo lives in the prose and its map is
// shown alongside it by the synchronized reader.
for (const translations of Object.values(registry)) {
  if (translations.en) integrateEnglishReflexPhotos(translations.en)
}

// Classic reading uses the same current image deck as synchronized reading.
// Apply it to every available translation so every chapter exposes a deck and
// no classic route depends on a stale or deleted PDF export.
for (const [chapterKey, translations] of Object.entries(registry)) {
  const slideDecks = classicSlideDecks[chapterKey]
  if (!slideDecks) continue
  for (const [lang, chapter] of Object.entries(translations)) {
    const slideDeck = slideDecks[lang as Lang] ?? slideDecks.fr
    if (chapter && slideDeck?.length) chapter.slideDeck = slideDeck
  }
}

export type ChapterKey = keyof typeof registry

export function getChapterKeys(): ChapterKey[] {
  return Object.keys(registry) as ChapterKey[]
}

/**
 * Returns the chapter in the requested language when available, otherwise the
 * French version. `contentLang` reports which language was actually returned so
 * the reader can show a fallback notice when it differs from the request.
 */
export function getChapter(
  key: ChapterKey,
  lang: Lang
): { chapter: Chapter; contentLang: Lang } {
  const byLang = registry[key]
  const localized = byLang[lang]
  if (localized) return { chapter: localized, contentLang: lang }
  return { chapter: byLang.fr as Chapter, contentLang: 'fr' }
}

/**
 * Lists the languages for which a chapter has its own translated content
 * (i.e. not a French fallback). Returns an empty array for unknown keys.
 * Used by the admin preparation board to show per-language status.
 */
export function getChapterLangs(key: string): Lang[] {
  const byLang = registry[key]
  return byLang ? (Object.keys(byLang) as Lang[]) : []
}

export function getChapterTranslations(key: string): Partial<Record<Lang, Chapter>> {
  return registry[key] ?? {}
}
