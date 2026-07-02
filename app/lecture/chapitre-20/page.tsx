import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import { chapter20Slides, chapter20SlideAnchors } from '@/content/chapter20.slidesync'

const DECKS: Record<Lang, typeof chapter20Slides> = {
  fr: chapter20Slides,
  en: chapter20Slides,
  de: chapter20Slides,
  es: chapter20Slides,
  it: chapter20Slides,
}

export const metadata: Metadata = {
  title: 'Chapitre 20 — Organes génitaux masculins · R.O.P. · Guy Boitout',
  description: 'Lecture du chapitre 20 : testicules, prostate, vésicules séminales, physiologie, pathologies courantes et zones réflexes podales en R.O.P.',
  robots: { index: false, follow: false },
}

export default async function Chapitre20LecturePage({
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
  const { chapter } = getChapter('chapter-20', lang)

  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={chapter20SlideAnchors}
      backHref="/chapitres-gratuits"
    />
  )
}
