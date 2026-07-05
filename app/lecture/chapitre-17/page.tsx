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
  chapter17Slides, chapter17SlidesEn, chapter17SlidesDe, chapter17SlidesEs, chapter17SlidesIt,
  chapter17SlideAnchors,
} from '@/content/chapter17.slidesync'

const DECKS: Record<Lang, typeof chapter17Slides> = {
  fr: chapter17Slides,
  en: chapter17SlidesEn,
  de: chapter17SlidesDe,
  es: chapter17SlidesEs,
  it: chapter17SlidesIt,
  th: chapter17SlidesEn,
}

export const metadata: Metadata = {
  title: 'Chapitre 17 — Cavité pelvienne · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 17 : anatomie, innervation, pathologies courantes et zones réflexes podales de la cavité pelvienne en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre17LecturePage({
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
  const { chapter } = getChapter('chapter-17', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter17SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
