import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter3ReworkFr } from '@/content/chapter3-rework.fr'
import { chapter3ReworkSlides, chapter3ReworkSlideAnchors } from '@/content/chapter3-rework.slidesync'
import { DRAFT_KEY, draftBackHref } from './access'

export const metadata: Metadata = {
  title: 'Chapitre 3 — Nouvelle édition privée — R.O.P.',
  description: 'Version privée reconstruite du chapitre 3 sur le système nerveux central.',
  robots: { index: false, follow: false },
}

export default async function Chapter3ReworkPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
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
      chapter={chapter3ReworkFr}
      bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition privée`}
      slides={chapter3ReworkSlides}
      anchors={chapter3ReworkSlideAnchors}
      backHref={draftBackHref(isAdmin)}
      classicHref={`/chapitre-3-rework?lang=${lang}`}
    />
  )
}
