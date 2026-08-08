import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import ChapterReader from '@/components/ChapterReader'
import ClassicModeGuard from '@/components/ClassicModeGuard'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter14ReworkFr } from '@/content/chapter14-rework.fr'
import { DRAFT_KEY, draftBackHref } from '@/app/lecture/chapitre-14-rework/access'

export const metadata: Metadata = {
  title: 'Chapitre 14 — Nouvelle édition — Lecture classique — R.O.P.',
  description: 'Version privée du chapitre 14 reconstruite pour la nouvelle édition.',
  robots: { index: false, follow: false },
}

export default async function Chapter14ReworkClassicPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const cookieStore = await cookies()
  const grant = await readDraftGrant(cookieStore, DRAFT_KEY)
  const isAdmin = canReadDraftChapter(cookieStore)
  if (!grant && !isAdmin) redirect('/admin/login')

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const syncHref = `/lecture/chapitre-14-rework?lang=${lang}`

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
        chapter={chapter14ReworkFr}
        bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition`}
        contentLang="fr"
        backHref={draftBackHref(isAdmin)}
        syncHref={syncHref}
      />
    </>
  )
}
