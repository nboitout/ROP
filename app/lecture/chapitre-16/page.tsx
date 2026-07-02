import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter16Slides, chapter16SlidesEn, chapter16SlidesDe, chapter16SlidesEs, chapter16SlidesIt,
  chapter16SlideAnchors,
} from '@/content/chapter16.slidesync'

const DECKS: Record<Lang, typeof chapter16Slides> = {
  fr: chapter16Slides,
  en: chapter16SlidesEn,
  de: chapter16SlidesDe,
  es: chapter16SlidesEs,
  it: chapter16SlidesIt,
}

export const metadata: Metadata = {
  title: 'Chapitre 16 — Reins · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 16 : anatomie, physiologie, pathologies courantes et zones réflexes podales des reins en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre16LecturePage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!canReadPaidChapter(cookieStore)) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-16', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter16SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
