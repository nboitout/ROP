'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

type FieldErrors = { firstName?: string; lastName?: string; email?: string; profession?: string; consent?: string }

// Submit-error handling walks this list top-to-bottom and brings the first
// invalid control into view — on a phone the failing field is usually above
// the submit button, outside the viewport.
const FIELD_IDS: [keyof FieldErrors, string][] = [
  ['firstName', 'ffn'],
  ['lastName', 'fln'],
  ['email', 'fe'],
  ['profession', 'fj'],
  ['consent', 'fc'],
]

export default function FreeChapterForm() {
  const { t, lang } = useLanguage()
  const router = useRouter()
  const f = t.form

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [professionSelect, setProfessionSelect] = useState('')
  const [professionOtherText, setProfessionOtherText] = useState('')
  const [consent, setConsent] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({})
  const [serverError, setServerError] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  // A server error appears above the fields, off-screen when the visitor just
  // tapped submit at the bottom of the form — bring it into view.
  useEffect(() => {
    if (serverError) bannerRef.current?.scrollIntoView({ block: 'center' })
  }, [serverError])

  const profession = professionSelect === f.professionOther ? professionOtherText.trim() : professionSelect

  function validate(): FieldErrors {
    const errors: FieldErrors = {}
    if (!firstName.trim()) errors.firstName = f.errorName
    if (!lastName.trim()) errors.lastName = f.errorName
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) errors.email = f.errorEmail
    else if (!emailRegex.test(email)) errors.email = f.errorEmailInvalid
    if (!professionSelect) errors.profession = f.errorProfession
    if (!consent) errors.consent = f.errorConsent
    return errors
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setServerError('')
    const errors = validate()
    setFieldErrors(errors)
    const firstInvalid = FIELD_IDS.find(([key]) => errors[key])
    if (firstInvalid) {
      const el = document.getElementById(firstInvalid[1])
      el?.focus({ preventScroll: true })
      el?.scrollIntoView({ block: 'center' })
      return
    }

    setLoading(true)
    try {
      const res = await fetch('/api/free-chapter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName.trim(), lastName: lastName.trim(), fullName: `${firstName.trim()} ${lastName.trim()}`.trim(), email, profession, source: 'free-chapters', lang, sessionId: getSessionId() }),
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

      {serverError && <div ref={bannerRef} className="ferror-banner on">{serverError}</div>}

      <div className="fg-row">
        <div className={`fg${fieldErrors.firstName ? ' has-error' : ''}`}>
          <label htmlFor="ffn">{f.firstNameLbl}</label>
          <input
            id="ffn"
            name="firstName"
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
            name="lastName"
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
          name="email"
          type="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
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
          name="profession"
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
            name="professionOther"
            placeholder={f.professionOtherPlaceholder}
            value={professionOtherText}
            onChange={(e) => setProfessionOtherText(e.target.value)}
            style={{ marginTop: 8 }}
          />
        )}
        <span className="field-error">{fieldErrors.profession}</span>
      </div>

      <div className={`fg${fieldErrors.consent ? ' has-error' : ''}`} style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'flex-start', marginTop: 4 }}>
        <input
          id="fc"
          name="consent"
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ width: 18, height: 18, marginTop: 2, flexShrink: 0 }}
        />
        <label htmlFor="fc" style={{ flex: 1, minWidth: 0, fontSize: '.72rem', lineHeight: 1.5, textTransform: 'none', letterSpacing: 0, opacity: 1 }}>
          {f.consentText.split(f.privacyLink).map((part, i, arr) =>
            i < arr.length - 1
              ? [part, <a key={i} href="/confidentialite" style={{ color: 'var(--gold-l)' }}>{f.privacyLink}</a>]
              : part
          )}
        </label>
        <span className="field-error" style={{ width: '100%', marginTop: 0 }}>{fieldErrors.consent}</span>
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
