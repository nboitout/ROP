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
  // Admin-only prototype: visible to Guy and the site owner (shared admin session).
  if (!cookieStore.get('admin_session')) {
    redirect('/admin/login')
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
