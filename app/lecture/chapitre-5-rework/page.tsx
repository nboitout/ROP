import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter5ReworkFr } from '@/content/chapter5-rework.fr'
import { chapter5ReworkSlides, chapter5ReworkSlideAnchors } from '@/content/chapter5-rework.slidesync'
import { DRAFT_KEY, draftBackHref } from './access'

export const metadata: Metadata = {
  title: 'Chapitre 5 rework - Lecture synchronisee - R.O.P.',
  description: 'Page de relecture dediee au rework du chapitre 5 : mecanisme de stress, allostasie et approche ROP.',
  robots: { index: false, follow: false },
}

export default async function Chapitre5ReworkPage({
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

  // One row per open, for grant holders only — admin reviews stay out of the
  // sheet the same way admin traffic does everywhere else.
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
      chapter={chapter5ReworkFr}
      bookTitle={translations[lang].reader.bookTitle}
      slides={chapter5ReworkSlides}
      anchors={chapter5ReworkSlideAnchors}
      backHref={draftBackHref(isAdmin)}
      classicHref={`/chapitre-5-rework?lang=${lang}`}
    />
  )
}
