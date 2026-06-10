'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId, getSessionUtm } from '@/lib/session'

// The email gate renders on the homepage at /?gate=free, but usePathname()
// drops the query string so it would be indistinguishable from a plain
// homepage visit. Record the gate as its own page so dwell on the sign-up
// wall is reported separately from genuine homepage browsing.
function pageId(pathname: string): string {
  if (pathname === '/' && typeof window !== 'undefined') {
    if (new URLSearchParams(window.location.search).get('gate') === 'free') return '/?gate=free'
  }
  return pathname
}

export default function VisitTracker() {
  const { lang } = useLanguage()
  const pathname = usePathname()

  // Mutable refs — never trigger re-renders
  const langRef = useRef(lang)
  const prevPage = useRef(pageId(pathname))
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
      if (page.startsWith('/admin')) return
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
        body: JSON.stringify({ event: 'page_leave', lang: langRef.current, page, duration_seconds: seconds, sessionId: getSessionId() }),
        keepalive: true,
      }).catch(() => {})
    }

    function onPageHide() { sendLeave(prevPage.current) }

    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pagehide', onPageHide)
    return () => {
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pagehide', onPageHide)
    }
  }, [])

  // On SPA navigation: flush dwell time for the page being left, reset timer
  useEffect(() => {
    const current = pageId(pathname)
    const prev = prevPage.current
    if (prev === current) return
    prevPage.current = current

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

  // Fire page_visit on mount and when lang or page changes — skip admin pages
  useEffect(() => {
    if (pathname.startsWith('/admin')) return
    fetch('/api/visit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ lang, page: pageId(pathname), sessionId: getSessionId(), utm: getSessionUtm() }),
      keepalive: true,
    }).catch(() => {})
  }, [lang, pathname])

  return null
}
