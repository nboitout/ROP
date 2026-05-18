import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { introductionFr } from '@/content/introduction.fr'

export const metadata: Metadata = {
  title: 'Introduction · R.O.P. · Guy Boitout',
  description: 'Extrait gratuit du troisième ouvrage de Guy Boitout : introduction au viscéral abdomino-pelvien, au système nerveux autonome et au mécanisme du stress.',
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

export default async function IntroductionPage() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  return <ChapterReader chapter={introductionFr} bookTitle={BOOK_TITLE} />
}
