import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter4ReworkFr } from '@/content/chapter4-rework.fr'
import { chapter4ReworkHalfBreaks, chapter4ReworkSlides, chapter4ReworkSlideAnchors } from '@/content/chapter4-rework.slidesync'
import { DRAFT_KEY, draftBackHref } from './access'

export const metadata: Metadata = { title: 'Chapitre 4 — Nouvelle édition privée — R.O.P.', description: 'Version privée allégée du chapitre 4 sur le système nerveux autonome.', robots: { index: false, follow: false } }

export default async function Chapter4ReworkPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const cookieStore = await cookies()
  const grant = await readDraftGrant(cookieStore, DRAFT_KEY)
  const isAdmin = canReadDraftChapter(cookieStore)
  if (!grant && !isAdmin) redirect('/admin/login')
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  if (grant) recordServerEvent({ chapter: DRAFT_KEY, event: 'draft_grant_open', data: { grant, mode: 'sync' }, lang, headers: await headers() })
  return <SlideSyncReader chapter={chapter4ReworkFr} bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition privée`} slides={chapter4ReworkSlides} anchors={chapter4ReworkSlideAnchors} halfBreaks={chapter4ReworkHalfBreaks} backHref={draftBackHref(isAdmin)} classicHref={`/chapitre-4-rework?lang=${lang}`} />
}
