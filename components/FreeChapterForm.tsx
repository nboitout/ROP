'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

type FieldErrors = { firstName?: string; lastName?: string; email?: string; profession?: string }

export default function FreeChapterForm() {
  const { t, lang } = useLanguage()
  const f = t.form

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [profession, setProfession] = useState('')
  const [professionOther, setProfessionOther] = useState('')
  const [consent, setConsent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const isOther = profession === '__other__'

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!firstName.trim()) errors.firstName = f.errorName
    if (!lastName.trim()) errors.lastName = f.errorName
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) errors.email = f.errorEmail
    else if (!emailRegex.test(email)) errors.email = f.errorEmailInvalid
    if (!profession) errors.profession = f.errorProfession
    else if (profession === '__other__' && !professionOther.trim()) errors.profession = f.errorProfession
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

    const finalProfession = isOther ? professionOther.trim() : profession

    setLoading(true)
    try {
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          fullName: `${firstName.trim()} ${lastName.trim()}`,
          email,
          profession: finalProfession,
          source: 'chapter-5-free',
          lang,
          sessionId: getSessionId(),
        }),
      })
      if (!res.ok) throw new Error('server')
      const data = await res.json().catch(() => ({}))
      setSuccess(true)
      if (data && typeof data.redirect === 'string') {
        setTimeout(() => { window.location.href = data.redirect }, 900)
      }
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
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h3>{f.title}</h3>
      <p className="fs">{f.subtitle}</p>

      {serverError && <div className="ferror-banner on">{serverError}</div>}

      <div className="fg-row">
        <div className={`fg${fieldErrors.firstName ? ' has-error' : ''}`}>
          <label htmlFor="ffn">{f.firstNameLbl}</label>
          <input
            id="ffn"
            type="text"
            placeholder={f.firstNamePlaceholder}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            autoComplete="given-name"
          />
          <span className="field-error">{fieldErrors.firstName}</span>
        </div>

        <div className={`fg${fieldErrors.lastName ? ' has-error' : ''}`}>
          <label htmlFor="fln">{f.lastNameLbl}</label>
          <input
            id="fln"
            type="text"
            placeholder={f.lastNamePlaceholder}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            autoComplete="family-name"
          />
          <span className="field-error">{fieldErrors.lastName}</span>
        </div>
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
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="fselect"
        >
          <option value="">{f.professionSelectPlaceholder}</option>
          {f.professionOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
          <option value="__other__">{f.professionOther}</option>
        </select>
        {!isOther && <span className="field-error">{fieldErrors.profession}</span>}
      </div>

      {isOther && (
        <div className={`fg${fieldErrors.profession ? ' has-error' : ''}`}>
          <input
            type="text"
            placeholder={f.professionOtherPlaceholder}
            value={professionOther}
            onChange={(e) => setProfessionOther(e.target.value)}
            autoComplete="off"
          />
          <span className="field-error">{fieldErrors.profession}</span>
        </div>
      )}

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
