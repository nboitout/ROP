'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/**
 * "Already bought the book?" — sends a fresh access link to the buyer's address.
 *
 * `initialEmail` is for the one place that already knows it: the checkout step,
 * when the address turns out to own the book already. Retyping an address you
 * just typed is a small insult.
 */
export default function AccessLinkForm({ initialEmail = '' }: { initialEmail?: string }) {
  const { t, lang } = useLanguage()
  const [email, setEmail] = useState(initialEmail)
  const [state, setState] = useState<'idle' | 'sending' | 'done' | 'invalid'>('idle')

  async function submit(event: React.FormEvent) {
    event.preventDefault()
    if (state === 'sending') return

    if (!EMAIL_PATTERN.test(email.trim())) {
      setState('invalid')
      return
    }

    setState('sending')
    try {
      await fetch('/api/auth/request-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), lang }),
      })
    } catch {
      // The response is intentionally opaque, so a network hiccup shows the
      // same confirmation: the reader can simply try again.
    }
    setState('done')
  }

  return (
    <div className="access-recover">
      <p className="access-recover-title">{t.checkout.recover.title}</p>
      <p className="access-recover-body">{t.checkout.recover.body}</p>

      {state === 'done' ? (
        <p className="access-recover-done">{t.checkout.recover.done}</p>
      ) : (
        <form className="access-recover-form" onSubmit={submit} noValidate>
          <label className="sr-only" htmlFor="access-recover-email">{t.checkout.recover.placeholder}</label>
          <input
            id="access-recover-email"
            name="email"
            type="email"
            inputMode="email"
            autoCapitalize="none"
            spellCheck={false}
            placeholder={t.checkout.recover.placeholder}
            value={email}
            onChange={(e) => { setEmail(e.target.value); if (state === 'invalid') setState('idle') }}
            aria-invalid={state === 'invalid'}
          />
          <button type="submit" className="btn b-gold" disabled={state === 'sending'}>
            {state === 'sending' ? t.checkout.recover.submitting : t.checkout.recover.submit}
          </button>
        </form>
      )}

      {state === 'invalid' && <p className="access-recover-error">{t.checkout.recover.invalid}</p>}
    </div>
  )
}
