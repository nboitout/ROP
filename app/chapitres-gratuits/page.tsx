import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { getChapter } from '@/content/registry'
import { chapterMeta } from '@/lib/chapterStats'

const HREF_TO_SLUG: Record<string, string> = {
  '/introduction': 'introduction',
  '/chapitre-2': 'chapter-2',
  '/lecture/traitement-rop': 'chapter-2',
  '/chapitre-14': 'chapter-14',
  '/lecture/chapitre-14': 'chapter-14',
}

// Chapters that have a synthesis deck: free readers start in the synchronized
// reading experience (text + slides) by default, in the languages for which a
// deck exists. Other languages keep the classic reader.
const SYNC: Record<string, { href: string; langs: Set<string> }> = {
  '/chapitre-2': { href: '/lecture/traitement-rop', langs: new Set(['fr', 'en', 'de', 'es', 'it']) },
  '/chapitre-14': { href: '/lecture/chapitre-14', langs: new Set(['fr', 'en', 'de', 'es', 'it']) },
}

export const metadata: Metadata = {
  title: 'Chapitres gratuits · R.O.P. · Guy Boitout',
  description: 'Chapitres complets gratuits du troisième ouvrage de Guy Boitout sur la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

export default async function ChapitresGratuitsPage() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  const lang = await getServerLang()
  const t = translations[lang]
  const p = t.chaptersPage

  const chapters = p.chapters.map((c) => {
    const slug = HREF_TO_SLUG[c.href]
    const meta = slug ? chapterMeta(getChapter(slug, lang).chapter, lang) : c.meta
    // Default readers into the synchronized experience where a deck exists in
    // their language.
    const sync = SYNC[c.href]
    const href = sync && sync.langs.has(lang) ? sync.href : c.href
    return { ...c, href, meta }
  })

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href="/" className="cg-home">{p.back}</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">{p.eyebrow}</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="cg-main">
        <div className="cg-hero">
          <h1 className="cg-hero-title">{p.h1}</h1>
          <p className="cg-hero-body">{p.body}</p>
        </div>

        <ul className="cg-grid">
          {chapters.map((c) => (
            <li key={c.href} className="cg-card">
              <Link href={c.href} className="cg-card-link" aria-label={p.readLabel(c.title)}>
                <p className="cg-card-eyebrow">{c.eyebrow}</p>
                <h2 className="cg-card-title">{c.title}</h2>
                <p className="cg-card-desc">{c.description}</p>
                <p className="cg-card-meta">{c.meta}</p>
                <span className="cg-card-cta">{p.readCta}</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="cg-foot">
          <p>{p.footNote}</p>
        </div>
      </main>
    </div>
  )
}
