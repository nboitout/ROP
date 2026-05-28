'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function VisitTracker() {
  const { lang } = useLanguage()

  useEffect(() => {
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, page: window.location.pathname }),
      keepalive: true,
    }).catch(() => {})
  }, [lang])

  return null
}
