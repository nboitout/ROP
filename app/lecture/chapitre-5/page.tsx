import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getChapter } from '@/content/registry'
import { chapter5Slides, chapter5SlideAnchors } from '@/content/chapter5.slidesync'

export const metadata: Metadata = {
  title: 'Chapitre 5 — Lecture synchronisée · R.O.P. · Guy Boitout',
  description: 'Prototype de lecture combinée : le texte du chapitre 5 et les diapositives de synthèse affichés ensemble, synchronisés au fil de la lecture.',
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function Chapitre5SyncPage() {
  const cookieStore = await cookies()
  // Open to free-chapter readers (synchronized is now the default entry from
  // /chapitres-gratuits) and to admins.
  if (!cookieStore.get('free_chapters_access') && !cookieStore.get('admin_session')) {
    redirect('/?gate=free#acces-libre')
  }

  // The synthesis deck is French; the prototype pins the French text to it.
  const { chapter } = getChapter('chapter-5', 'fr')
  return (
    <SlideSyncReader
      chapter={chapter}
      bookTitle={BOOK_TITLE}
      slides={chapter5Slides}
      anchors={chapter5SlideAnchors}
      backHref="/chapitre-5"
    />
  )
}
