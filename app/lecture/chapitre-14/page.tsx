import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter14Slides, chapter14SlidesEn, chapter14SlideAnchors } from '@/content/chapter14.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 14 (intestin grêle) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

export default async function Chapitre14SyncPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  // Open to free-chapter readers (synchronized is now the default entry from
  // /chapitres-gratuits) and to admins.
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  // The synthesis deck exists in French and English; pick the reader's
  // language, falling back to French for any other.
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const deckLang = lang === 'en' ? 'en' : 'fr'
  const { chapter } = getChapter('chapter-14', deckLang)
  const slides = deckLang === 'en' ? chapter14SlidesEn : chapter14Slides
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={translations[deckLang].reader.bookTitle}
      slides={slides}
      anchors={chapter14SlideAnchors}
      backHref="/chapitres-gratuits"
      classicHref="/chapitre-14"
    />
  )
}
