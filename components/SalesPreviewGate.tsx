'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { localizedHref } from '@/app/i18n/locale'

const STEPS: Array<{ title: string; body: string; href?: string }> = [
  {
    title: '1 · La page de vente',
    body: 'Le bouton « Ajouter au panier » remplace « Être informé de la parution » — sur la page d’accueil, en fin de chapitre gratuit et sur les renvois vers le livre complet.',
    href: '/#acheter',
  },
  {
    title: '2 · Le panier',
    body: 'Le livre, son prix, la mention de TVA, et de quoi le retirer. Rechargez la page : le panier doit être toujours là.',
    href: '/panier',
  },
  {
    title: '3 · La validation',
    body: 'Récapitulatif, adresse e-mail, et la case de renonciation au droit de rétractation. Essayez de valider sans e-mail, puis sans cocher la case.',
    href: '/panier/validation',
  },
  {
    title: '4 · Le paiement',
    body: 'Page Stripe, en mode test. Carte 4242 4242 4242 4242, n’importe quelle date future, n’importe quel CVC. Aucun argent ne change de main.',
  },
  {
    title: '5 · L’après-achat',
    body: 'Retour sur la page de remerciement, e-mail contenant le lien d’accès, ouverture du livre. Le panier se vide une fois le paiement confirmé.',
  },
  {
    title: '6 · Les conditions de vente',
    body: 'Les CGV que la case à cocher engage. Les passages surlignés en jaune sont les informations qu’il nous manque.',
    href: '/cgv',
  },
]

export default function SalesPreviewGate({
  unlocked,
  missingConfig,
  live,
}: {
  unlocked: boolean
  /** Environment variables still missing before a payment can be taken. */
  missingConfig: string[]
  live: boolean
}) {
  const configured = missingConfig.length === 0
  const { lang } = useLanguage()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (loading) return
    setError('')
    setLoading(true)
    try {
      const res = await fetch('/api/sales-preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      if (!res.ok) {
        setError(res.status === 401 ? 'Mot de passe incorrect.' : 'Le serveur n’est pas configuré pour l’aperçu.')
        setLoading(false)
        return
      }
      // Full reload: the layout must re-read the cookie to open the shop.
      window.location.reload()
    } catch {
      setError('Erreur réseau. Merci de réessayer.')
      setLoading(false)
    }
  }

  return (
    <div className="cg-root">
      <main className="legal-main">
        <div className="legal-header">
          <p className="legal-eyebrow">Accès réservé</p>
          <h1>Aperçu du parcours d’achat</h1>
          <p className="legal-updated">
            {unlocked
              ? 'La boutique est ouverte pour ce navigateur uniquement.'
              : 'Le parcours complet, tel qu’il sera à la parution.'}
          </p>
        </div>

        {!unlocked && (
          <form className="preview-gate" onSubmit={submit} noValidate>
            <p className="preview-gate-lead">
              Cet aperçu ouvre le panier, la validation et le paiement pour votre navigateur seul.
              Les autres visiteurs continuent de voir le formulaire « être averti de la parution ».
            </p>
            <label className="cart-field-label" htmlFor="preview-password">Mot de passe</label>
            <input
              id="preview-password"
              type="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError('') }}
              aria-invalid={!!error}
              required
            />
            {error && <p className="cart-error">{error}</p>}
            <div className="buy-actions">
              <button type="submit" className="btn b-gold" disabled={loading}>
                {loading ? 'Ouverture…' : 'Ouvrir l’aperçu'}
              </button>
            </div>
          </form>
        )}

        {unlocked && !configured && (
          <div className="preview-warning">
            <p>
              <strong>La configuration Stripe est incomplète.</strong> Le panier reste donc fermé,
              même avec l’aperçu actif. Corrigez ces variables d’environnement, puis redéployez :
            </p>
            <ul className="preview-missing">
              {missingConfig.map((name) => <li key={name}><code>{name}</code></li>)}
            </ul>
            <p>
              Utilisez des clés Stripe de <strong>test</strong> (<code>sk_test_…</code> et un
              identifiant de tarif de test) : avec des clés réelles, la carte du relecteur est
              réellement débitée.
            </p>
          </div>
        )}

        {unlocked && configured && (
          <>
            <div className={live ? 'preview-warning' : 'preview-note'}>
              {live ? (
                <p>
                  <strong>Attention : la boutique est ouverte au public.</strong> Les paiements sont
                  réels si les clés Stripe le sont. N’utilisez pas de vraie carte pour un test.
                </p>
              ) : (
                <p>
                  Le parcours ci-dessous est le parcours réel. Avec des clés Stripe de test, aucun
                  paiement n’est encaissé — utilisez la carte <code>4242 4242 4242 4242</code>, une
                  date future et n’importe quel CVC.
                </p>
              )}
            </div>

            <ol className="preview-steps">
              {STEPS.map((step) => (
                <li key={step.title} className="preview-step">
                  <p className="preview-step-title">{step.title}</p>
                  <p className="preview-step-body">{step.body}</p>
                  {step.href && (
                    <Link href={localizedHref(step.href, lang)} className="preview-step-link">
                      Ouvrir →
                    </Link>
                  )}
                </li>
              ))}
            </ol>

            <div className="preview-note">
              <p>
                <strong>Un achat d’essai laisse une trace.</strong> Il crée un client, une commande
                et un accès dans la base, et envoie un vrai e-mail. Ce sont des données de test à
                supprimer avant l’ouverture des ventes.
              </p>
            </div>

            <div className="buy-actions">
              <Link href={localizedHref('/#acheter', lang)} className="btn b-gold">Commencer le parcours</Link>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
