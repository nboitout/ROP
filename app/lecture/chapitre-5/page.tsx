import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter5Slides, chapter5SlidesEn, chapter5SlidesDe, chapter5SlidesEs, chapter5SlidesIt,
  chapter5SlideAnchors,
} from '@/content/chapter5.slidesync'

// Synthesis deck per language (all five available for chapter 5).
const DECKS: Record<Lang, typeof chapter5Slides> = {
  fr: chapter5Slides, en: chapter5SlidesEn, de: chapter5SlidesDe, es: chapter5SlidesEs, it: chapter5SlidesIt,
}

export const metadata: Metadata = {
  title: 'Chapitre 5 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 5 et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre5SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const hasAdminSession = !!cookieStore.get('admin_session')
  const hasPaidAccess = !!cookieStore.get('paid_access')

  if (!hasAdminSession && !hasPaidAccess) {
    redirect('/#acheter')
  }

  // The synthesis deck exists in all five languages for chapter 5; serve the
  // reader's language.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-5', lang)
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter5SlideAnchors}
      backHref="/"
      classicHref="/chapitre-5"
    />
  )
}
