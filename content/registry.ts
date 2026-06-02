import type { Lang } from '@/app/i18n/translations'
import type { Chapter } from './types'
import { introductionFr } from './introduction.fr'
import { chapter2Fr } from './chapter2.fr'
import { chapter2En } from './chapter2.en'
import { chapter2De } from './chapter2.de'
import { chapter2Es } from './chapter2.es'
import { chapter2It } from './chapter2.it'
import { chapter5Fr } from './chapter5.fr'
import { chapter14Fr } from './chapter14.fr'

/**
 * Per-chapter, per-language content. French is the canonical fallback.
 *
 * As chapters are progressively translated, add the locale entry alongside
 * the existing `fr` one, e.g.:
 *   introduction: { fr: introductionFr, en: introductionEn },
 */
const registry: Record<string, Partial<Record<Lang, Chapter>>> = {
  introduction: { fr: introductionFr },
  'chapter-2': { fr: chapter2Fr, en: chapter2En, de: chapter2De, es: chapter2Es, it: chapter2It },
  'chapter-5': { fr: chapter5Fr },
  'chapter-14': { fr: chapter14Fr },
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
