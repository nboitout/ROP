import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter18ReworkFr } from '@/content/chapter18-rework.fr'
import { chapter18ReworkSlides, chapter18ReworkSlideAnchors } from '@/content/chapter18-rework.slidesync'
import { DRAFT_KEY, draftBackHref } from './access'

export const metadata: Metadata = {
  title: 'Chapitre 18 — Nouvelle édition — R.O.P.',
  description: 'Version privée du chapitre 18 reconstruite pour la nouvelle édition.',
  robots: { index: false, follow: false },
}

export default async function Chapter18ReworkPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const cookieStore = await cookies()
  const grant = await readDraftGrant(cookieStore, DRAFT_KEY)
  const isAdmin = canReadDraftChapter(cookieStore)
  if (!grant && !isAdmin) redirect('/admin/login')

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  if (grant) {
    recordServerEvent({ chapter: DRAFT_KEY, event: 'draft_grant_open', data: { grant, mode: 'sync' }, lang, headers: await headers() })
  }

  return (
    <SlideSyncReader
      chapter={chapter18ReworkFr}
      bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition`}
      slides={chapter18ReworkSlides}
      anchors={chapter18ReworkSlideAnchors}
      backHref={draftBackHref(isAdmin)}
      classicHref={`/chapitre-18-rework?lang=${lang}`}
    />
  )
}
