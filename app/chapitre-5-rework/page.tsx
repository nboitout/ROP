import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import type { Metadata } from 'next'
import ChapterReader from '@/components/ChapterReader'
import ClassicModeGuard from '@/components/ClassicModeGuard'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter5ReworkFr } from '@/content/chapter5-rework.fr'
import { DRAFT_KEY, draftBackHref } from '@/app/lecture/chapitre-5-rework/access'

export const metadata: Metadata = {
  title: 'Chapitre 5 rework - Lecture classique - R.O.P.',
  description: 'Page de relecture dediee au rework du chapitre 5 : mecanisme de stress, allostasie et approche ROP.',
  robots: { index: false, follow: false },
}

// Classic single-column reading of the rework draft. Same gate as the
// synchronized route; reachable from its large-screen mode switch.
export default async function Chapitre5ReworkClassicPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const grant = await readDraftGrant(cookieStore, DRAFT_KEY)
  const isAdmin = canReadDraftChapter(cookieStore)
  if (!grant && !isAdmin) {
    redirect('/admin/login')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const syncHref = `/lecture/chapitre-5-rework?lang=${lang}`

  if (grant) {
    recordServerEvent({
      chapter: DRAFT_KEY,
      event: 'draft_grant_open',
      data: { grant, mode: 'classic' },
      lang,
      headers: await headers(),
    })
  }

  return (
    <>
      <ClassicModeGuard syncHref={syncHref} />
      <ChapterReader
        chapter={chapter5ReworkFr}
        bookTitle={translations[lang].reader.bookTitle}
        contentLang="fr"
        backHref={draftBackHref(isAdmin)}
        syncHref={syncHref}
      />
    </>
  )
}
