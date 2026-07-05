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
  chapter18Slides, chapter18SlidesEn, chapter18SlidesDe, chapter18SlidesEs, chapter18SlidesIt,
  chapter18SlideAnchors,
} from '@/content/chapter18.slidesync'

const DECKS: Record<Lang, typeof chapter18Slides> = {
  fr: chapter18Slides,
  en: chapter18SlidesEn,
  de: chapter18SlidesDe,
  es: chapter18SlidesEs,
  it: chapter18SlidesIt,
  th: chapter18SlidesEn,
}

export const metadata: Metadata = {
  title: 'Chapitre 18 — Vessie · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 18 : anatomie, physiologie, pathologies courantes et zones réflexes podales de la vessie en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre18LecturePage({
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
  const { chapter } = getChapter('chapter-18', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter18SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
