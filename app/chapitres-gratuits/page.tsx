import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Chapitres gratuits · R.O.P. · Guy Boitout',
  description: 'Chapitres complets gratuits du troisième ouvrage de Guy Boitout sur la Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

const BOOK_TITLE = 'Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne'

type FreeChapter = {
  href: string
  eyebrow: string
  title: string
  description: string
  meta: string
}

const FREE_CHAPTERS: FreeChapter[] = [
  {
    href: '/introduction',
    eyebrow: 'Ouverture',
    title: 'Introduction',
    description: 'Le cadre du troisième tome : viscéral abdomino-pelvien, système nerveux autonome et mécanisme du stress. Notre parti-pris, la terminologie et le plan-type des chapitres.',
    meta: '~5 min de lecture',
  },
  {
    href: '/chapitre-5',
    eyebrow: 'Chapitre 5',
    title: 'Mécanisme de stress',
    description: 'Le syndrome général d’adaptation de Selye — alarme, recouvrement, adaptation-résistance, épuisement — et son intérêt en R.O.P., illustré par cinq planches anatomiques.',
    meta: '~15 min · 5 illustrations',
  },
]

export default async function ChapitresGratuitsPage() {
  const cookieStore = await cookies()
  if (!cookieStore.get('free_chapters_access')) {
    redirect('/?gate=free#acces-libre')
  }

  return (
    <div className="cg-root">
      <div className="cg-topbar">
        <Link href="/" className="cg-home">← Accueil</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Chapitres complets</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{BOOK_TITLE}</span>
        </div>
      </div>

      <main className="cg-main">
        <div className="cg-hero">
          <h1 className="cg-hero-title">Trois chapitres complets du troisième ouvrage</h1>
          <p className="cg-hero-body">Choisissez votre point d’entrée — l’ordre du livre est suggéré, mais chaque texte se lit seul.</p>
        </div>

        <ul className="cg-grid">
          {FREE_CHAPTERS.map((c) => (
            <li key={c.href} className="cg-card">
              <Link href={c.href} className="cg-card-link" aria-label={`Lire : ${c.title}`}>
                <p className="cg-card-eyebrow">{c.eyebrow}</p>
                <h2 className="cg-card-title">{c.title}</h2>
                <p className="cg-card-desc">{c.description}</p>
                <p className="cg-card-meta">{c.meta}</p>
                <span className="cg-card-cta">Lire →</span>
              </Link>
            </li>
          ))}
          <li className="cg-card cg-card-coming">
            <p className="cg-card-eyebrow">Chapitre 3</p>
            <h2 className="cg-card-title">Système nerveux central</h2>
            <p className="cg-card-desc">Disponible prochainement.</p>
          </li>
        </ul>

        <div className="cg-foot">
          <p>Le livre complet est en préparation.</p>
        </div>
      </main>
    </div>
  )
}
