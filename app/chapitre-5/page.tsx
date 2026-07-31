import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadPaidChapter } from '@/lib/access'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import ClassicModeGuard from '@/components/ClassicModeGuard'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Chapitre 5 — Mécanisme de stress · R.O.P. · Guy Boitout',
  description: `Chapitre complet du troisième ouvrage de Guy Boitout : le mécanisme de stress, le syndrome général d’adaptation et son intérêt en Réflexothérapie Occipito-Podale.`,
  robots: { index: false, follow: false },
}

// Classic single-column reading. The synchronized reader at /lecture/chapitre-5 is
// the default entry; this route is reachable from its large-screen mode switch.
export default async function Chapitre5ClassicPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  if (!(await canReadPaidChapter(cookieStore))) {
    redirect('/#acheter')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const { chapter, contentLang } = getChapter('chapter-5', lang)
  const syncHref = `/lecture/chapitre-5?lang=${lang}`

  return (
    <>
      <ClassicModeGuard syncHref={syncHref} />
      <ChapterReader
        chapter={chapter}
        bookTitle={translations[lang].reader.bookTitle}
        contentLang={contentLang}
        syncHref={syncHref}
      />
    </>
  )
}
