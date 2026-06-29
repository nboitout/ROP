import type { Lang } from '@/app/i18n/translations'
import type { Chapter } from './types'
import { introductionFr } from './introduction.fr'
import { introductionEn } from './introduction.en'
import { introductionDe } from './introduction.de'
import { introductionEs } from './introduction.es'
import { introductionIt } from './introduction.it'
import { chapter1Fr } from './chapter1.fr'
import { chapter3Fr } from './chapter3.fr'
import { chapter6Fr } from './chapter6.fr'
import { chapter7Fr } from './chapter7.fr'
import { chapter2Fr } from './chapter2.fr'
import { chapter2En } from './chapter2.en'
import { chapter2De } from './chapter2.de'
import { chapter2Es } from './chapter2.es'
import { chapter2It } from './chapter2.it'
import { chapter4Fr } from './chapter4.fr'
import { chapter4En } from './chapter4.en'
import { chapter5Fr } from './chapter5.fr'
import { chapter5En } from './chapter5.en'
import { chapter5De } from './chapter5.de'
import { chapter5Es } from './chapter5.es'
import { chapter5It } from './chapter5.it'
import { chapter8Fr } from './chapter8.fr'
import { chapter9Fr } from './chapter9.fr'
import { chapter10Fr } from './chapter10.fr'
import { chapter11Fr } from './chapter11.fr'
import { chapter12Fr } from './chapter12.fr'
import { chapter13Fr } from './chapter13.fr'
import { chapter14Fr } from './chapter14.fr'
import { chapter14En } from './chapter14.en'
import { chapter14De } from './chapter14.de'
import { chapter14Es } from './chapter14.es'
import { chapter14It } from './chapter14.it'
import { chapter15Fr } from './chapter15.fr'
import { chapter16Fr } from './chapter16.fr'
import { chapter17Fr } from './chapter17.fr'
import { chapter18Fr } from './chapter18.fr'
import { chapter19Fr } from './chapter19.fr'
import { chapter20Fr } from './chapter20.fr'
import { chapter21Fr } from './chapter21.fr'

/**
 * Per-chapter, per-language content. French is the canonical fallback.
 *
 * As chapters are progressively translated, add the locale entry alongside
 * the existing `fr` one, e.g.:
 *   introduction: { fr: introductionFr, en: introductionEn },
 */
const registry: Record<string, Partial<Record<Lang, Chapter>>> = {
  introduction: { fr: introductionFr, en: introductionEn, de: introductionDe, es: introductionEs, it: introductionIt },
  'chapter-1': { fr: chapter1Fr },
  'chapter-3': { fr: chapter3Fr },
  'chapter-6': { fr: chapter6Fr },
  'chapter-7': { fr: chapter7Fr },
  'chapter-2': { fr: chapter2Fr, en: chapter2En, de: chapter2De, es: chapter2Es, it: chapter2It },
  'chapter-4': { fr: chapter4Fr, en: chapter4En },
  'chapter-5': { fr: chapter5Fr, en: chapter5En, de: chapter5De, es: chapter5Es, it: chapter5It },
  'chapter-8': { fr: chapter8Fr },
  'chapter-9': { fr: chapter9Fr },
  'chapter-10': { fr: chapter10Fr },
  'chapter-11': { fr: chapter11Fr },
  'chapter-12': { fr: chapter12Fr },
  'chapter-13': { fr: chapter13Fr },
  'chapter-14': { fr: chapter14Fr, en: chapter14En, de: chapter14De, es: chapter14Es, it: chapter14It },
  'chapter-15': { fr: chapter15Fr },
  'chapter-16': { fr: chapter16Fr },
  'chapter-17': { fr: chapter17Fr },
  'chapter-18': { fr: chapter18Fr },
  'chapter-19': { fr: chapter19Fr },
  'chapter-20': { fr: chapter20Fr },
  'chapter-21': { fr: chapter21Fr },
}

/**
 * Returns the chapter in the requested language when available, otherwise the
 * French version. `contentLang` reports which language was actually returned so
 * the reader can show a fallback notice when it differs from the request.
 */
export function getChapter(
  key: keyof typeof registry,
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
