'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

type FieldErrors = { name?: string; email?: string; profession?: string }

export default function FreeChapterForm() {
  const { t, lang } = useLanguage()
  const router = useRouter()
  const f = t.form

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [professionSelect, setProfessionSelect] = useState('')
  const [professionOtherText, setProfessionOtherText] = useState('')
  const [consent, setConsent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const profession = professionSelect === f.professionOther ? professionOtherText.trim() : professionSelect

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!name.trim()) errors.name = f.errorName
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) errors.email = f.errorEmail
    else if (!emailRegex.test(email)) errors.email = f.errorEmailInvalid
    if (!professionSelect) errors.profession = f.errorProfession
    else if (professionSelect === f.professionOther && !professionOtherText.trim()) errors.profession = f.errorProfession
    return errors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError('')
    const errors = validate()
    setFieldErrors(errors)
    if (Object.keys(errors).length > 0) return
    if (!consent) {
      setServerError(f.errorConsent)
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName: name, email, profession, source: 'chapter-5-free', lang, sessionId: getSessionId() }),
      })
      if (!res.ok) throw new Error('server')
      setSuccess(true)
      // The API has now set the free_chapters_access cookie — send the reader
      // into the unlocked chapters, fulfilling the "Nous ouvrons vos chapitres…"
      // message rather than leaving them on a dead-end success screen.
      setTimeout(() => router.push('/chapitres-gratuits'), 1200)
    } catch {
      setServerError(f.errorServer)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="fsuccess on">
        <div className="fok">✓</div>
        <h3 style={{ color: 'var(--cream)', fontFamily: "'Cormorant Garamond',serif", fontSize: '1.38rem', fontWeight: 300, marginBottom: 7 }}>{f.successTitle}</h3>
        <p style={{ fontSize: '.85rem', color: 'rgba(245,240,232,.72)' }}>{f.successMsg}</p>
        <p style={{ fontSize: '.67rem', color: 'rgba(245,240,232,.5)', marginTop: 12 }}>{f.successSpam}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>{f.title}</h3>
      <p className="fs">{f.subtitle}</p>

      {serverError && <div className="ferror-banner on">{serverError}</div>}

      <div className={`fg${fieldErrors.name ? ' has-error' : ''}`}>
        <label htmlFor="fn">{f.nameLbl}</label>
        <input
          id="fn"
          type="text"
          placeholder={f.namePlaceholder}
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="name"
        />
        <span className="field-error">{fieldErrors.name}</span>
      </div>

      <div className={`fg${fieldErrors.email ? ' has-error' : ''}`}>
        <label htmlFor="fe">{f.emailLbl}</label>
        <input
          id="fe"
          type="email"
          placeholder={f.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
        />
        <span className="field-error">{fieldErrors.email}</span>
      </div>

      <div className={`fg${fieldErrors.profession ? ' has-error' : ''}`}>
        <label htmlFor="fj">{f.professionLbl}</label>
        <select
          id="fj"
          className="fselect"
          value={professionSelect}
          onChange={(e) => { setProfessionSelect(e.target.value); setProfessionOtherText('') }}
        >
          <option value="" disabled>{f.professionSelectPlaceholder}</option>
          {f.professionOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
          <option value={f.professionOther}>{f.professionOther}</option>
        </select>
        {professionSelect === f.professionOther && (
          <input
            type="text"
            placeholder={f.professionOtherPlaceholder}
            value={professionOtherText}
            onChange={(e) => setProfessionOtherText(e.target.value)}
            style={{ marginTop: 8 }}
          />
        )}
        <span className="field-error">{fieldErrors.profession}</span>
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
          {f.consentText.split(f.privacyLink).map((part, i, arr) =>
            i < arr.length - 1
              ? [part, <a key={i} href="/confidentialite" style={{ color: 'var(--gold-l)' }}>{f.privacyLink}</a>]
              : part
          )}
        </label>
      </div>

      <button
        className="btn b-gold"
        type="submit"
        disabled={loading}
        style={{ width: '100%', marginTop: 8, padding: '13px', opacity: loading ? .7 : 1 }}
      >
        {loading ? f.submitting : f.submit}
      </button>
      <p className="fnote">{f.note}</p>
    </form>
  )
}
