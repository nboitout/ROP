import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter15Slides, chapter15SlidesEn, chapter15SlidesDe, chapter15SlidesEs, chapter15SlidesIt,
  chapter15SlideAnchors,
} from '@/content/chapter15.slidesync'

const DECKS: Record<Lang, typeof chapter15Slides> = {
  fr: chapter15Slides,
  en: chapter15SlidesEn,
  de: chapter15SlidesDe,
  es: chapter15SlidesEs,
  it: chapter15SlidesIt,
}

export const metadata: Metadata = {
  title: 'Chapitre 15 — Côlon et rectum · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 15 : anatomie, physiologie, pathologies courantes et zones réflexes podales du côlon et du rectum en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre15LecturePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-15', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter15SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
