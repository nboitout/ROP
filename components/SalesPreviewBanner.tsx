'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'

/**
 * Always on screen while a sales-preview grant is held.
 *
 * Two jobs. When the shop is open for this browser, say out loud that this is
 * not the live shop and which card to use. When it cannot open — the
 * deployment has no Stripe keys yet — say *that*, because otherwise unlocking
 * the preview appears to do nothing at all.
 */
export default function SalesPreviewBanner({ missingConfig = [] }: { missingConfig?: string[] }) {
  const { lang } = useLanguage()
  const [leaving, setLeaving] = useState(false)
  const blocked = missingConfig.length > 0

  async function leave() {
    setLeaving(true)
    try {
      await fetch('/api/sales-preview', { method: 'DELETE' })
    } catch {
      // Reloading anyway: if the cookie survived, the banner comes back.
    }
    window.location.reload()
  }

  return (
    <div className={`sales-preview-bar${blocked ? ' is-blocked' : ''}`} role="status">
      <span className="sales-preview-dot" aria-hidden="true" />
      <span className="sales-preview-text">
        {blocked ? (
          <>
            <strong>{'Aperçu ventes actif, mais le panier reste fermé : '}</strong>
            {'Configuration incomplète : '}
            <code>{missingConfig.join(', ')}</code>
          </>
        ) : (
          <>
            <strong>Aperçu ventes</strong>
            {' — la boutique n’est ouverte que pour vous. Carte de test : '}
            <code>4242 4242 4242 4242</code>
            {', date future, CVC au choix.'}
          </>
        )}
      </span>
      <Link href={localizedHref('/apercu-ventes', lang)} className="sales-preview-link">Guide</Link>
      <button type="button" className="sales-preview-exit" onClick={leave} disabled={leaving}>
        {leaving ? 'Sortie…' : 'Quitter'}
      </button>
    </div>
  )
}
