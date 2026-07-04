import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { canReadDraftChapter } from '@/lib/access'
import type { Metadata } from 'next'
import SlideSyncReader from '@/components/SlideSyncReader'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import type { Lang } from '@/app/i18n/translations'
// Frozen snapshot of the interactive reflex-zone atlas version of chapter 14.
// This prototype is intentionally isolated from the live book: it has its own
// content copy (content/prototype/*), its own tracking slug
// ('chapter-14-prototype'), and is reachable only from the admin "Research"
// menu. Editing the book's chapter 14 does not affect it.
import { chapter14Fr } from '@/content/prototype/chapter14.fr'
import { chapter14En } from '@/content/prototype/chapter14.en'
import { chapter14De } from '@/content/prototype/chapter14.de'
import { chapter14Es } from '@/content/prototype/chapter14.es'
import { chapter14It } from '@/content/prototype/chapter14.it'
import {
  chapter14Slides, chapter14SlidesEn, chapter14SlidesDe, chapter14SlidesEs, chapter14SlidesIt,
  chapter14SlideAnchors, chapter14SlideAnchorsFr,
} from '@/content/prototype/chapter14.slidesync'

const CHAPTERS: Record<Lang, typeof chapter14Fr> = {
  fr: chapter14Fr, en: chapter14En, de: chapter14De, es: chapter14Es, it: chapter14It,
}
const DECKS: Record<Lang, typeof chapter14Slides> = {
  fr: chapter14Slides, en: chapter14SlidesEn, de: chapter14SlidesDe, es: chapter14SlidesEs, it: chapter14SlidesIt,
}
const ANCHORS: Record<Lang, typeof chapter14SlideAnchors> = {
  fr: chapter14SlideAnchorsFr,
  en: chapter14SlideAnchors, de: chapter14SlideAnchors,
  es: chapter14SlideAnchors, it: chapter14SlideAnchors,
}

export const metadata: Metadata = {
  title: 'Prototype — Chapitre 14 · Atlas des zones réflexes · R.O.P.',
  description: 'Prototype de recherche : version du chapitre 14 avec l’atlas interactif des zones réflexes podales. Isolé du livre.',
  robots: { index: false, follow: false },
}

export default async function PrototypeChapitre14Page({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  // Research prototype: admin only (the admin session cookie also satisfies the
  // chapter-14 image-asset gate in the middleware, so the figures load).
  const cookieStore = await cookies()
  if (!canReadDraftChapter(cookieStore)) {
    redirect('/admin/login')
  }

  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  return (
    <SlideSyncReader
      chapter={CHAPTERS[lang]}
      bookTitle={translations[lang].reader.bookTitle}
      slides={DECKS[lang]}
      anchors={ANCHORS[lang]}
      backHref="/admin/chapitres"
    />
  )
}
