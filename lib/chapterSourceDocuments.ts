import type { Lang } from '@/app/i18n/translations'
import { chapterSourceModifiedAt } from './chapterSourceDates.generated'

export function getChapterSourceModifiedAt(chapterKey: string, lang: Lang): string | null {
  return chapterSourceModifiedAt[chapterKey]?.[lang] ?? null
}
