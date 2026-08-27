'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'

/**
 * Always on screen while the sales preview is active.
 *
 * The whole point of the preview is that the site behaves exactly as it will
 * once it launches — which is precisely why it needs saying out loud that this
 * is not the live shop, and which card to use.
 */
export default function SalesPreviewBanner() {
  const { lang } = useLanguage()
  const [leaving, setLeaving] = useState(false)

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
    <div className="sales-preview-bar" role="status">
      <span className="sales-preview-dot" aria-hidden="true" />
      <span className="sales-preview-text">
        <strong>Aperçu ventes</strong>{' — la boutique n’est ouverte que pour vous. Carte de test\u00a0: '}
        <code>4242 4242 4242 4242</code>
        {', date future, CVC au choix.'}
      </span>
      <Link href={localizedHref('/apercu-ventes', lang)} className="sales-preview-link">Guide</Link>
      <button type="button" className="sales-preview-exit" onClick={leave} disabled={leaving}>
        {leaving ? 'Sortie…' : 'Quitter'}
      </button>
    </div>
  )
}
