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
  title: 'Chapitre 2 — Traitement par la R.O.P. · Guy Boitout',
  description: 'Technique, modalités, hiérarchisation des traitements, indications et contre-indications de la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

// Classic single-column reading. The synchronized reader at /lecture/traitement-rop is
// the default entry; this route is reachable from its large-screen mode switch.
export default async function Chapitre2ClassicPage({
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
  const { chapter, contentLang } = getChapter('chapter-2', lang)
  const syncHref = `/lecture/traitement-rop?lang=${lang}`

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
