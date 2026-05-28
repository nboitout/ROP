'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function VisitTracker() {
  const { lang } = useLanguage()
  const pathname = usePathname()

  // Mutable refs — never trigger re-renders
  const langRef = useRef(lang)
  const prevPathname = useRef(pathname)
  const activeMs = useRef(0)
  const lastVisible = useRef<number | null>(null)

  useEffect(() => { langRef.current = lang }, [lang])

  // Set up visibility + pagehide handlers once on mount
  useEffect(() => {
    lastVisible.current = document.visibilityState === 'visible' ? Date.now() : null

    function onVisibility() {
      if (document.visibilityState === 'visible') {
        lastVisible.current = Date.now()
      } else if (lastVisible.current !== null) {
        activeMs.current += Date.now() - lastVisible.current
        lastVisible.current = null
      }
    }

    function sendLeave(page: string) {
      if (lastVisible.current !== null) {
        activeMs.current += Date.now() - lastVisible.current
        lastVisible.current = null
      }
      const seconds = Math.round(activeMs.current / 1000)
      activeMs.current = 0
      if (seconds < 1) return
      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'page_leave', lang: langRef.current, page, duration_seconds: seconds }),
        keepalive: true,
      }).catch(() => {})
    }

    function onPageHide() { sendLeave(prevPathname.current) }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [])

  // On SPA navigation: flush dwell time for the page being left, reset timer
  useEffect(() => {
    const prev = prevPathname.current
    if (prev === pathname) return
    prevPathname.current = pathname

    if (lastVisible.current !== null) {
      activeMs.current += Date.now() - lastVisible.current
      lastVisible.current = null
    }
    const seconds = Math.round(activeMs.current / 1000)
    activeMs.current = 0
    lastVisible.current = document.visibilityState === 'visible' ? Date.now() : null

    if (seconds >= 1) {
      fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ event: 'page_leave', lang: langRef.current, page: prev, duration_seconds: seconds }),
        keepalive: true,
      }).catch(() => {})
    }
  }, [pathname])

  // Fire page_visit on mount and when lang or page changes
  useEffect(() => {
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, page: pathname }),
      keepalive: true,
    }).catch(() => {})
  }, [lang, pathname])

  return null
}
