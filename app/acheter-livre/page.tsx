import type { Metadata } from 'next'
import Link from 'next/link'
import AddToCartButton from '@/components/AddToCartButton'
import { chapterKeyFromHref, isFreeChapterHref } from '@/lib/access'
import { getChapter } from '@/content/registry'
import { getServerLang } from '@/app/i18n/serverLang'
import { translations } from '@/app/i18n/translations'
import { cookies } from 'next/headers'
import { paymentsOpenFor } from '@/lib/payments'

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
  const onSale = await paymentsOpenFor(await cookies())

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
          <h1>{onSale ? 'Accédez au livre complet' : 'Le livre complet est en préparation'}</h1>
          <p className="buy-lead">
            {onSale
              ? 'Ce renvoi approfondit le chapitre gratuit avec une section de l’ouvrage intégral.'
              : 'Ce renvoi approfondit le chapitre gratuit avec une section qui sera disponible dans l’ouvrage intégral.'}
            {chapterTitle ? ` Il pointe vers : ${chapterTitle}.` : ''}
          </p>
          <div className="buy-actions">
            {/* Before launch this renders the waitlist link, after launch the
                add-to-cart button — the same switch as the pricing card. */}
            <AddToCartButton className="btn b-gold" source="acheter-livre" notifyHref="/#notify" />
            <Link href={returnHref} className="btn b-out">Retour à la lecture</Link>
          </div>
        </section>
      </main>
    </div>
  )
}
