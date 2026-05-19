'use client'

import { useState } from 'react'

export type BookNotifyLabels = {
  label: string
  placeholder: string
  submit: string
  submitting: string
  note: string
  success: string
  invalid: string
  serverError: string
}

const DEFAULT_LABELS: BookNotifyLabels = {
  label: 'Être notifié·e de la parution',
  placeholder: 'votre@email.com',
  submit: 'M’avertir',
  submitting: 'Envoi…',
  note: 'Une seule adresse, une seule notification à la parution.',
  success: '✓ Merci, vous serez informé·e dès la parution.',
  invalid: 'Adresse e-mail invalide.',
  serverError: 'Une erreur est survenue. Veuillez réessayer.',
}

type Props = {
  labels?: Partial<BookNotifyLabels>
  source?: string
}

export default function BookNotifyForm({ labels, source = 'book-notify' }: Props = {}) {
  const l = { ...DEFAULT_LABELS, ...labels }
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError(l.invalid)
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: 'notify', email, source }),
      })
      if (!res.ok) throw new Error('server')
      setSuccess(true)
    } catch {
      setError(l.serverError)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <p className="cr-notify-success">
        {l.success}
      </p>
    )
  }

  return (
    <form className="cr-notify" onSubmit={handleSubmit} noValidate>
      <label htmlFor="cr-notify-email" className="cr-notify-label">{l.label}</label>
      <div className="cr-notify-row">
        <input
          id="cr-notify-email"
          type="email"
          placeholder={l.placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          aria-invalid={!!error}
        />
        <button type="submit" className="btn b-sage" disabled={loading}>
          {loading ? l.submitting : l.submit}
        </button>
      </div>
      {error && <p className="cr-notify-error">{error}</p>}
      <p className="cr-notify-note">{l.note}</p>
    </form>
  )
}
