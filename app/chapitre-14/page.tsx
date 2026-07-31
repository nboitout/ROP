import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadFreeChapter, canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import ClassicModeGuard from '@/components/ClassicModeGuard'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Intestin grêle · R.O.P. · Guy Boitout',
  description: `Chapitre complet gratuit du troisième ouvrage de Guy Boitout : anatomie, physiologie et zones réflexes de l'intestin grêle en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

// Classic single-column reading. The synchronized reader at /lecture/chapitre-14 is
// the default entry; this route is reachable from its large-screen mode switch.
export default async function Chapitre14ClassicPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!canReadFreeChapter(cookieStore)) {
    redirect('/?gate=free#acces-libre')
  }
  const restrictPaidXrefs = !(await canReadPaidChapter(cookieStore))

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('chapter-14', lang)
  const syncHref = `/lecture/chapitre-14?lang=${lang}`

  return (
    <>
      <ClassicModeGuard syncHref={syncHref} />
      <ChapterReader
        chapter={chapter}
        bookTitle={translations[lang].reader.bookTitle}
        contentLang={contentLang}
        restrictPaidXrefs={restrictPaidXrefs}
        syncHref={syncHref}
      />
    </>
  )
}
