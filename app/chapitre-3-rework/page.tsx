import { cookies, headers } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import { canReadDraftChapter, readDraftGrant } from '@/lib/access'
import { recordServerEvent } from '@/lib/serverEvents'
import ChapterReader from '@/components/ChapterReader'
import ClassicModeGuard from '@/components/ClassicModeGuard'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { chapter3ReworkFr } from '@/content/chapter3-rework.fr'
import { DRAFT_KEY, draftBackHref } from '@/app/lecture/chapitre-3-rework/access'

export const metadata: Metadata = { title: 'Chapitre 3 — Nouvelle édition privée — Lecture classique — R.O.P.', description: 'Version privée du chapitre 3 sur le système nerveux central.', robots: { index: false, follow: false } }

export default async function Chapter3ReworkClassicPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const cookieStore = await cookies()
  const grant = await readDraftGrant(cookieStore, DRAFT_KEY)
  const isAdmin = canReadDraftChapter(cookieStore)
  if (!grant && !isAdmin) redirect('/admin/login')
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const syncHref = `/lecture/chapitre-3-rework?lang=${lang}`
  if (grant) recordServerEvent({ chapter: DRAFT_KEY, event: 'draft_grant_open', data: { grant, mode: 'classic' }, lang, headers: await headers() })
  return <><ClassicModeGuard syncHref={syncHref} /><ChapterReader chapter={chapter3ReworkFr} bookTitle={`${translations[lang].reader.bookTitle} · Nouvelle édition privée`} contentLang="fr" backHref={draftBackHref(isAdmin)} syncHref={syncHref} /></>
}
