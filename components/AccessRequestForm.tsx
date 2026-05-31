'use client'

import { useState } from 'react'

// Returning-buyer form: enter the purchase email, receive a fresh magic link.
export default function AccessRequestForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Adresse e-mail invalide.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/access/request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('server')
      setSent(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  if (sent) {
    return (
      <p className="cr-notify-success">
        ✓ Si un achat est associé à cette adresse, un lien d&rsquo;accès vient de vous être envoyé. Pensez à vérifier vos spams.
      </p>
    )
  }

  return (
    <form className="cr-notify" onSubmit={handleSubmit} noValidate>
      <label htmlFor="acces-email" className="cr-notify-label">Votre adresse e-mail d&rsquo;achat</label>
      <div className="cr-notify-row">
        <input
          id="acces-email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-invalid={!!error}
        />
        <button type="submit" className="btn b-gold" disabled={loading}>
          {loading ? 'Envoi…' : 'Recevoir mon lien'}
        </button>
      </div>
      {error && <p className="cr-notify-error">{error}</p>}
      <p className="cr-notify-note">Aucun mot de passe : vous recevez un lien d&rsquo;accès par e-mail.</p>
    </form>
  )
}
