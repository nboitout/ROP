import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import { chapter19Slides, chapter19SlideAnchors } from '@/content/chapter19.slidesync'

const DECKS: Record<Lang, typeof chapter19Slides> = {
  fr: chapter19Slides,
  en: chapter19Slides,
  de: chapter19Slides,
  es: chapter19Slides,
  it: chapter19Slides,
  th: chapter19Slides,
}

export const metadata: Metadata = {
  title: 'Chapitre 19 — Organes génitaux féminins · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 19 : utérus, ovaires, trompes, physiologie, pathologies courantes et zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre19LecturePage({
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
  const { chapter } = getChapter('chapter-19', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter19SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
