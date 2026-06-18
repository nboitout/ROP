import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
import {
  chapter2Slides, chapter2SlidesEn, chapter2SlidesDe, chapter2SlidesEs, chapter2SlidesIt,
  chapter2SlideAnchors, chapter2SlideAnchorsFr,
} from '@/content/chapter2.slidesync'

const DECKS: Record<Lang, typeof chapter2Slides> = {
  fr: chapter2Slides,
  en: chapter2SlidesEn,
  de: chapter2SlidesDe,
  es: chapter2SlidesEs,
  it: chapter2SlidesIt,
}

const ANCHORS: Record<Lang, typeof chapter2SlideAnchors> = {
  fr: chapter2SlideAnchorsFr,
  en: chapter2SlideAnchors,
  de: chapter2SlideAnchors,
  es: chapter2SlideAnchors,
  it: chapter2SlideAnchors,
}

export const metadata: Metadata = {
  title: 'Chapitre 2 — Traitement par la R.O.P. · Guy Boitout',
  description: 'Technique, modalités, hiérarchisation des traitements, indications et contre-indications de la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

export default async function TraitementRopPage({
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

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter } = getChapter('chapter-2', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      backHref="/admin/chapitres"
      classicHref="/chapitre-2"
    />
  )
}
