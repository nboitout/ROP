import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Introduction · R.O.P. · Guy Boitout',
  description: 'Chapitre complet gratuit du troisième ouvrage de Guy Boitout : introduction au viscéral abdomino-pelvien, au système nerveux autonome et au mécanisme du stress.',
  robots: { index: false, follow: false },
}

export default async function IntroductionPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!canReadFreeChapter(cookieStore)) {
    redirect('/?gate=free#acces-libre')
  }
  const restrictPaidXrefs = !canReadPaidChapter(cookieStore)

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('introduction', lang)
  const bookTitle = translations[lang].reader.bookTitle
  return <ChapterReader chapter={chapter} bookTitle={bookTitle} contentLang={contentLang} restrictPaidXrefs={restrictPaidXrefs} />
}
