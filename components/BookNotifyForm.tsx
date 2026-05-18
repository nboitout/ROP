'use client'

import { useState } from 'react'

export default function BookNotifyForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

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
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: 'notify', email, source: 'book-notify' }),
      })
      if (!res.ok) throw new Error('server')
      setSuccess(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <p className="cr-notify-success">
        ✓ Merci, vous serez informé·e dès la parution.
      </p>
    )
  }

  return (
    <form className="cr-notify" onSubmit={handleSubmit} noValidate>
      <label htmlFor="cr-notify-email" className="cr-notify-label">Être notifié·e de la parution</label>
      <div className="cr-notify-row">
        <input
          id="cr-notify-email"
          type="email"
          placeholder="votre@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-invalid={!!error}
        />
        <button type="submit" className="btn b-sage" disabled={loading}>
          {loading ? 'Envoi…' : 'M’avertir'}
        </button>
      </div>
      {error && <p className="cr-notify-error">{error}</p>}
      <p className="cr-notify-note">Une seule adresse, une seule notification à la parution.</p>
    </form>
  )
}
