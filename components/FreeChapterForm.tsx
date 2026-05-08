'use client'

import { useState } from 'react'

type FieldErrors = { name?: string; email?: string }

export default function FreeChapterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [consent, setConsent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!name.trim()) errors.name = 'Veuillez renseigner votre prénom et nom.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) errors.email = 'Veuillez renseigner votre adresse e-mail.'
    else if (!emailRegex.test(email)) errors.email = 'Adresse e-mail invalide.'
    return errors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError('')
    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return
    if (!consent) {
      setServerError('Veuillez accepter la politique de confidentialité.')
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: name, email, profession, source: 'chapter-5-free' }),
      })
      if (!res.ok) throw new Error('server')
      setSuccess(true)
    } catch {
      setServerError("Une erreur est survenue. Veuillez réessayer.")
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="fsuccess on">
        <div className="fok">✓</div>
        <h3 style={{ color: 'var(--cream)', fontFamily: "'Cormorant Garamond',serif", fontSize: '1.38rem', fontWeight: 300, marginBottom: 7 }}>Merci !</h3>
        <p style={{ fontSize: '.85rem', color: 'rgba(245,240,232,.72)' }}>Le lien de téléchargement a été envoyé à votre adresse e-mail.</p>
        <p style={{ fontSize: '.67rem', color: 'rgba(245,240,232,.5)', marginTop: 12 }}>Vérifiez aussi votre dossier spam.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>Accès au chapitre gratuit</h3>
      <p className="fs">Mécanisme de stress — PDF · Accès immédiat après inscription</p>

      {serverError && <div className="ferror-banner on">{serverError}</div>}

      <div className={`fg${fieldErrors.name ? ' has-error' : ''}`}>
        <label htmlFor="fn">Prénom &amp; Nom</label>
        <input
          id="fn"
          type="text"
          placeholder="ex. Marie Dupont"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <span className="field-error">{fieldErrors.name}</span>
      </div>

      <div className={`fg${fieldErrors.email ? ' has-error' : ''}`}>
        <label htmlFor="fe">Adresse e-mail</label>
        <input
          id="fe"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <span className="field-error">{fieldErrors.email}</span>
      </div>

      <div className="fg">
        <label htmlFor="fj">Profession <span style={{ opacity: .4 }}>(optionnel)</span></label>
        <input
          id="fj"
          type="text"
          placeholder="ex. Réflexothérapeute, Ostéopathe, Kiné…"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>

      <div className="fg" style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginTop: 4 }}>
        <input
          id="fc"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ width: 'auto', marginTop: 2, flexShrink: 0 }}
        />
        <label htmlFor="fc" style={{ fontSize: '.72rem', lineHeight: 1.5, textTransform: 'none', letterSpacing: 0, opacity: 1 }}>
          J&apos;accepte la <a href="/confidentialite" style={{ color: 'var(--gold-l)' }}>politique de confidentialité</a> et consens à recevoir ce chapitre par e-mail.
        </label>
      </div>

      <button
        className="btn b-gold"
        type="submit"
        disabled={loading}
        style={{ width: '100%', marginTop: 8, padding: '13px', opacity: loading ? .7 : 1 }}
      >
        {loading ? 'Envoi en cours…' : 'Recevoir le chapitre →'}
      </button>
      <p className="fnote">Vos données ne seront jamais partagées avec des tiers. Désabonnement possible à tout moment.</p>
    </form>
  )
}
