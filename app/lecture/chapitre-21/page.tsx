import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import { chapter21Slides, chapter21SlideAnchors } from '@/content/chapter21.slidesync'

const DECKS: Record<Lang, typeof chapter21Slides> = {
  fr: chapter21Slides,
  en: chapter21Slides,
  de: chapter21Slides,
  es: chapter21Slides,
  it: chapter21Slides,
  th: chapter21Slides,
}

export const metadata: Metadata = {
  title: 'Chapitre 21 - Systeme erectile masculin et feminin - R.O.P. - Guy Boitout',
  description: 'Lecture du chapitre 21 : organes érectiles, innervation, physiologie, pathologies courantes et zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre21LecturePage({
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
  const { chapter } = getChapter('chapter-21', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter21SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
