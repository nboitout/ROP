import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter6Fr } from '@/content/chapter6.fr'
import { chapter6Slides, chapter6SlideAnchors } from '@/content/chapter6.slidesync'
import { DRAFT_KEY, draftBackHref } from './access'

export const metadata: Metadata = {
  title: 'Chapitre 6 — Nouvelle édition — R.O.P.',
  description: 'Version privée du chapitre 6 conservée dans la nouvelle édition.',
  robots: { index: false, follow: false },
}

export default async function Chapter6ReworkPage({
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

  if (grant) {
    recordServerEvent({
      chapter: DRAFT_KEY,
      event: 'draft_grant_open',
      data: { grant, mode: 'sync' },
      lang,
      headers: await headers(),
    })
  }

  return (
    <SlideSyncReader
      chapter={chapter6Fr}
      bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition`}
      slides={chapter6Slides}
      anchors={chapter6SlideAnchors}
      backHref={draftBackHref(isAdmin)}
      classicHref={`/chapitre-6-rework?lang=${lang}`}
    />
  )
}
