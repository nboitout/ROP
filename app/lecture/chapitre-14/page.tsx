import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { chapter14Slides, chapter14SlideAnchors } from '@/content/chapter14.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 14 (intestin grêle) et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function Chapitre14SyncPage() {
  const cookieStore = await cookies()
  // Open to free-chapter readers (synchronized is now the default entry from
  // /chapitres-gratuits) and to admins.
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  // The synthesis deck is French; the prototype pins the French text to it.
  const { chapter } = getChapter('chapter-14', 'fr')
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={BOOK_TITLE}
      slides={chapter14Slides}
      anchors={chapter14SlideAnchors}
      backHref="/chapitre-14"
    />
  )
}
