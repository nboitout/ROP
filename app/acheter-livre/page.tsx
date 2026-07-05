import type { Metadata } from 'next'
import Link from 'next/link'
import { chapterKeyFromHref, isFreeChapterHref } from '@/lib/access'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'

export const metadata: Metadata = {
  title: 'Accès au livre complet · R.O.P. · Guy Boitout',
  description: 'Invitation à accéder au livre complet de Réflexothérapie Occipito-Podale.',
  robots: { index: false, follow: false },
}

function safeInternalHref(value: string | undefined, fallback = '/chapitres-gratuits') {
  if (!value || !value.startsWith('/') || value.startsWith('//')) return fallback
  return value
}

function returnHrefFromTarget(target: string) {
  try {
    const url = new URL(target, 'https://local.test')
    return safeInternalHref(url.searchParams.get('xrefBack') ?? undefined)
  } catch {
    return '/chapitres-gratuits'
  }
}

export default async function AcheterLivrePage({
  searchParams,
}: {
  searchParams: Promise<{ target?: string }>
}) {
  const { target } = await searchParams
  const targetHref = safeInternalHref(target, '')
  const targetKey = targetHref && !isFreeChapterHref(targetHref) ? chapterKeyFromHref(targetHref) : null
  const lang = await getServerLang()
  const t = translations[lang]
  let chapterTitle: string | null = null
  if (targetKey) {
    try {
      chapterTitle = getChapter(targetKey as Parameters<typeof getChapter>[0], lang).chapter.title
    } catch {
      chapterTitle = null
    }
  }
  const returnHref = targetHref ? returnHrefFromTarget(targetHref) : '/chapitres-gratuits'

  return (
    <div className="cg-root buy-root">
      <div className="cg-topbar">
        <Link href={returnHref} className="cg-home">← Retour</Link>
        <div className="cg-topbar-title">
          <span className="cg-eyebrow">Livre complet</span>
          <span className="cg-sep">·</span>
          <span className="cg-bookname">{t.footer.title}</span>
        </div>
      </div>

      <main className="buy-main">
        <section className="buy-panel">
          <p className="buy-eyebrow">Renvoi réservé au livre complet</p>
          <h1>Continuez avec l’ouvrage intégral</h1>
          <p className="buy-lead">
            Ce lien approfondit le chapitre gratuit avec une section réservée aux lecteurs du livre complet.
            {chapterTitle ? ` Il pointe vers : ${chapterTitle}.` : ''}
          </p>
          <div className="buy-actions">
            <Link href="/#acheter" className="btn b-gold">Voir les options d’achat</Link>
            <Link href={returnHref} className="btn b-out">Retour à la lecture</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
