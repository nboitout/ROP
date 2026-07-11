'use client'

// Prototype "lecture synchronisée" : the synthesis slides stay pinned next to
// the chapter text, and the visible slide follows the reading position.
// Navigating the slides (arrows / dots) scrolls the text to the matching
// passage, so the two media stay in step in both directions.

import { Fragment, type MouseEvent, type ReactNode, type TouchEvent as ReactTouchEvent, useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import type { Chapter, Block, Section } from '@/content/types'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'
import { currentTopAnchorId, saveReadingPosition, loadReadingPosition, restoreToAnchor } from '@/lib/readingPosition'
import ReflexZoneAtlas from '@/components/ReflexZoneAtlas'
import { readerXrefHref } from '@/lib/access'

type SyncSlide = { src: string; title: string; orientation?: 'portrait' }
type SyncAnchorPoint = { sectionId: string; blockIndex: number; itemIndex?: number }
type SyncAnchor = SyncAnchorPoint & {
  slide: number | number[]
  gapBefore?: 'half'
  end?: SyncAnchorPoint
}
type LightboxItem = {
  src: string
  alt: string
  caption: string
  orientation?: 'portrait' | 'landscape'
  kind?: 'slide' | 'figure'
}
type LightboxState = LightboxItem & {
  gallery?: LightboxItem[]
  galleryIndex?: number
  alignY?: 'top' | 'bottom'
}

type Props = {
  chapter: Chapter
  bookTitle: string
  slides: SyncSlide[]
  anchors: SyncAnchor[]
  // "Tous les chapitres" link target (the free-chapters list).
  backHref?: string
  sectionRail?: boolean
  showClinicalCaseResource?: boolean
  restrictPaidXrefs?: boolean
}

type XrefReturn = { href: string; label: string } | null

function isRopInterestSection(section: Section) {
  return /^int[ée]r[êe]t en r\.?o\.?p\.?$/i.test(section.title.trim()) &&
    section.blocks[0]?.type === 'rop'
}

function getSafeXrefReturn(params: { get(name: string): string | null } | null): XrefReturn {
  if (!params) return null
  const href = params.get('xrefBack')
  if (!href || !href.startsWith('/') || href.startsWith('//')) return null
  return {
    href,
    label: params.get('xrefBackLabel') || 'Retour a la reference',
  }
}

// The synchronized reader is shown in the languages with a synthesis deck, so
// its chrome is localized here.
const SS_UI: Record<string, {
  eyebrow: string; slides: string; prev: string; next: string
  enlarge: (n: number, t: string) => string; goTo: (n: number, t: string) => string
  enlargeShort: string; marker: (n: number, t: string) => string
  caption: (n: number, t: string) => string; jumpLabel: string
  jumpTitle: (s: string) => string; enlargeFigure: (c: string) => string
  endMarker: (slides: number[]) => string
  rotateHint: string
  hideSlides: string; showSlides: string
}> = {
  fr: {
    eyebrow: 'Synthèse visuelle — suit votre lecture',
    slides: 'Diapositives',
    prev: 'Diapositive précédente',
    next: 'Diapositive suivante',
    enlarge: (n: number, title: string) => `Agrandir la diapositive ${n} : ${title}`,
    goTo: (n: number, title: string) => `Aller à la diapositive ${n} : ${title}`,
    enlargeShort: 'Agrandir la diapositive',
    marker: (n: number, title: string) => `Diapositive ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositive ${n} — ${title}`,
    jumpLabel: 'Accès direct — zones réflexes',
    jumpTitle: (s: string) => `Aller directement à : ${s}`,
    enlargeFigure: (caption: string) => `Agrandir : ${caption}`,
    endMarker: (slides: number[]) => slides.length > 1 ? `Fin diapos ${slides.join(', ')}` : `Fin diapo ${slides[0]}`,
    rotateHint: 'Tournez votre téléphone pour afficher cette diapositive en plein format.',
    hideSlides: 'Masquer les diapositives',
    showSlides: 'Afficher les diapositives',
  },
  en: {
    eyebrow: 'Visual synthesis — follows your reading',
    slides: 'Slides',
    prev: 'Previous slide',
    next: 'Next slide',
    enlarge: (n: number, title: string) => `Enlarge slide ${n}: ${title}`,
    goTo: (n: number, title: string) => `Go to slide ${n}: ${title}`,
    enlargeShort: 'Enlarge slide',
    marker: (n: number, title: string) => `Slide ${n} · ${title}`,
    caption: (n: number, title: string) => `Slide ${n} — ${title}`,
    jumpLabel: 'Direct access — reflex zones',
    jumpTitle: (s: string) => `Go directly to: ${s}`,
    enlargeFigure: (caption: string) => `Enlarge: ${caption}`,
    endMarker: (slides: number[]) => slides.length > 1 ? `End slides ${slides.join(', ')}` : `End slide ${slides[0]}`,
    rotateHint: 'Rotate your phone to view this slide at full size.',
    hideSlides: 'Hide the slides',
    showSlides: 'Show the slides',
  },
  de: {
    eyebrow: 'Visuelle Synthese — folgt Ihrer Lektüre',
    slides: 'Folien',
    prev: 'Vorherige Folie',
    next: 'Nächste Folie',
    enlarge: (n: number, title: string) => `Folie ${n} vergrößern: ${title}`,
    goTo: (n: number, title: string) => `Zu Folie ${n} springen: ${title}`,
    enlargeShort: 'Folie vergrößern',
    marker: (n: number, title: string) => `Folie ${n} · ${title}`,
    caption: (n: number, title: string) => `Folie ${n} — ${title}`,
    jumpLabel: 'Direktzugang — Reflexzonen',
    jumpTitle: (s: string) => `Direkt springen zu: ${s}`,
    enlargeFigure: (caption: string) => `Vergrößern: ${caption}`,
    endMarker: (slides: number[]) => slides.length > 1 ? `Ende Folien ${slides.join(', ')}` : `Ende Folie ${slides[0]}`,
    rotateHint: 'Drehen Sie Ihr Telefon, um diese Folie in voller Größe anzuzeigen.',
    hideSlides: 'Folien ausblenden',
    showSlides: 'Folien einblenden',
  },
  es: {
    eyebrow: 'Síntesis visual — sigue su lectura',
    slides: 'Diapositivas',
    prev: 'Diapositiva anterior',
    next: 'Diapositiva siguiente',
    enlarge: (n: number, title: string) => `Ampliar la diapositiva ${n}: ${title}`,
    goTo: (n: number, title: string) => `Ir a la diapositiva ${n}: ${title}`,
    enlargeShort: 'Ampliar la diapositiva',
    marker: (n: number, title: string) => `Diapositiva ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositiva ${n} — ${title}`,
    jumpLabel: 'Acceso directo — zonas reflejas',
    jumpTitle: (s: string) => `Ir directamente a: ${s}`,
    enlargeFigure: (caption: string) => `Ampliar: ${caption}`,
    endMarker: (slides: number[]) => slides.length > 1 ? `Fin diapositivas ${slides.join(', ')}` : `Fin diapositiva ${slides[0]}`,
    rotateHint: 'Gire el teléfono para ver esta diapositiva a tamaño completo.',
    hideSlides: 'Ocultar las diapositivas',
    showSlides: 'Mostrar las diapositivas',
  },
  it: {
    eyebrow: 'Sintesi visiva — segue la lettura',
    slides: 'Diapositive',
    prev: 'Diapositiva precedente',
    next: 'Diapositiva successiva',
    enlarge: (n: number, title: string) => `Ingrandisci la diapositiva ${n}: ${title}`,
    goTo: (n: number, title: string) => `Vai alla diapositiva ${n}: ${title}`,
    enlargeShort: 'Ingrandisci la diapositiva',
    marker: (n: number, title: string) => `Diapositiva ${n} · ${title}`,
    caption: (n: number, title: string) => `Diapositiva ${n} — ${title}`,
    jumpLabel: 'Accesso diretto — zone riflesse',
    jumpTitle: (s: string) => `Vai direttamente a: ${s}`,
    enlargeFigure: (caption: string) => `Ingrandisci: ${caption}`,
    endMarker: (slides: number[]) => slides.length > 1 ? `Fine diapositive ${slides.join(', ')}` : `Fine diapositiva ${slides[0]}`,
    rotateHint: 'Ruota il telefono per visualizzare questa diapositiva a pieno formato.',
    hideSlides: 'Nascondi le diapositive',
    showSlides: 'Mostra le diapositive',
  },
}

// Section ids that get a "page break" — a tall blank gap the reader scrolls
// through before the section heading, à la Word page break.
const PAGE_BREAK_BEFORE = new Set<string>(['anatomie', 'zones-reflexes-podales'])
const SHOW_SYNC_END_ANCHORS = process.env.NEXT_PUBLIC_SHOW_SLIDE_END_ANCHORS !== '0'

function normalizeSectionLabel(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function isReflexZoneSectionId(value: string) {
  const normalized = normalizeSectionLabel(value)
  return normalized === 'rop' || (normalized.includes('zone') && normalized.includes('reflex'))
}

function isRopShortcutLabel(value: string) {
  const normalized = normalizeSectionLabel(value).replace(/[^a-z0-9]+/g, ' ').trim()
  const words = normalized.split(/\s+/)
  return normalized === 'rop' ||
    normalized.startsWith('rop ') ||
    words.includes('rop') ||
    (normalized.includes('zone') && normalized.includes('reflex'))
}

function isZoneReflexLabel(value: string) {
  const normalized = normalizeSectionLabel(value).replace(/[^a-z0-9]+/g, ' ').trim()
  return normalized === 'rop' ||
    normalized.startsWith('rop ') ||
    (normalized.includes('zone') && normalized.includes('reflex'))
}

function blockShortcutText(block: Block) {
  if (block.type === 'para' || block.type === 'sub') return block.text
  if (block.type === 'lead') return `${block.label} ${block.text}`
  if (block.type === 'bullets' || block.type === 'numbered') return block.items.join(' ')
  if (block.type === 'leadBullets') return block.items.map((item) => `${item.label} ${item.text}`).join(' ')
  if (block.type === 'table') return `${block.caption ?? ''} ${block.headers.join(' ')} ${block.rows.flat().join(' ')}`
  if (block.type === 'figure') return `${block.caption} ${block.alt}`
  if (block.type === 'xref') return `${block.label} ${block.text ?? ''}`
  if (block.type === 'rop') return block.body.join(' ')
  return ''
}

function ropShortcutBlockIndex(section: Section) {
  const atlasIndex = section.blocks.findIndex((block) => block.type === 'reflexAtlas')
  if (atlasIndex >= 0) return atlasIndex
  const ropIndex = section.blocks.findIndex((block) => block.type === 'rop')
  if (ropIndex >= 0) return ropIndex
  const zoneTextIndex = section.blocks.findIndex((block) => isRopShortcutLabel(blockShortcutText(block)))
  return zoneTextIndex >= 0 ? zoneTextIndex : null
}

function hasRopShortcutBlock(section: Section) {
  return section.blocks.some((block) =>
    block.type === 'reflexAtlas' ||
    block.type === 'rop' ||
    isZoneReflexLabel(blockShortcutText(block))
  )
}

function asSlideList(slide: number | number[] | undefined) {
  if (typeof slide === 'number') return [slide]
  return slide ?? []
}

function pointKey(sectionId: string, blockIndex: number, itemIndex?: number) {
  return itemIndex === undefined ? `${sectionId}:${blockIndex}` : `${sectionId}:${blockIndex}:${itemIndex}`
}

function anchorPointKey(point: SyncAnchorPoint) {
  return pointKey(point.sectionId, point.blockIndex, point.itemIndex)
}

function uniqueSlides(values: number[]) {
  const seen = new Set<number>()
  return values.filter((value) => {
    if (!Number.isFinite(value) || seen.has(value)) return false
    seen.add(value)
    return true
  })
}

function slidesFromAnchors(anchors: SyncAnchor[] | undefined) {
  return uniqueSlides((anchors ?? []).flatMap((anchor) => asSlideList(anchor.slide)))
}

function parseSlideList(value: string | undefined) {
  if (!value) return []
  return uniqueSlides(
    value
      .split(/[\s,]+/)
      .map((item) => Number(item))
      .filter((item) => Number.isFinite(item))
  )
}

const slidePreloadCache = new Set<string>()

function preloadSlideImage(src: string | undefined) {
  if (!src || typeof window === 'undefined' || slidePreloadCache.has(src)) return
  slidePreloadCache.add(src)
  const img = new Image()
  img.decoding = 'async'
  img.src = src
}

export default function SlideSyncReader({ chapter, bookTitle, slides, anchors, backHref = '/chapitres-gratuits', sectionRail = true, showClinicalCaseResource = false, restrictPaidXrefs = false }: Props) {
  const { lang, t } = useLanguage()
  const searchParams = useSearchParams()
  const ui = SS_UI[lang] ?? SS_UI.fr
  const closeToReadingLabel = {
    fr: 'Retour a la lecture',
    en: 'Back to reading',
    de: 'Zuruck zur Lekture',
    es: 'Volver a la lectura',
    it: 'Torna alla lettura',
    th: 'กลับไปอ่าน',
  }[lang] ?? 'Back to reading'
  const [sessionId] = useState<string>(() =>
    typeof window !== 'undefined' ? getSessionId() : ''
  )
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState<number | null>(() => slides.length > 0 ? 1 : null)
  const [activeSectionId, setActiveSectionId] = useState(chapter.sections[0]?.id ?? '')
  const [railHoverIndex, setRailHoverIndex] = useState<number | null>(null)
  const [lightbox, setLightbox] = useState<LightboxState | null>(null)
  const [lightboxZoom, setLightboxZoom] = useState(1)
  const [isPhonePortrait, setIsPhonePortrait] = useState(false)
  // Distraction-free reading: collapse the pinned slide stage to a slim
  // restore chip. The choice is remembered across chapters and visits.
  const [slidesHidden, setSlidesHidden] = useState(false)
  const xrefReturn = getSafeXrefReturn(searchParams)
  const articleRef = useRef<HTMLElement>(null)
  const sectionRailRef = useRef<HTMLElement>(null)
  const lightboxScrollRef = useRef<HTMLDivElement>(null)
  // Start point of a touch gesture on the lightbox, for swipe navigation.
  const lightboxTouch = useRef<{ x: number; y: number } | null>(null)
  const resourceOpenedAt = useRef<number | null>(null)
  const resourceNameRef = useRef<string | null>(null)
  // While a slide-driven scroll is in flight, the scroll handler must not
  // fight the manually selected slide.
  const suppressSyncUntil = useRef(0)
  // Handle for the in-flight slide-navigation animation, so it can be
  // cancelled (manual scroll, a newer click, or unmount).
  const navAnim = useRef<{ raf: number; cleanup: () => void } | null>(null)
  // Throttle for persisting the reading position.
  const lastPosSave = useRef(0)

  function track(event: string, data?: Record<string, unknown>) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: chapter.slug, event, lang, sessionId, ...(data ? { data } : {}) }),
      keepalive: true,
    }).catch(() => {})
  }

  const anchorBySlide = useMemo(() => {
    const m = new Map<string, SyncAnchor>()
    for (const a of anchors) m.set(anchorPointKey(a), a)
    return m
  }, [anchors])

  const anchorsByPoint = useMemo(() => {
    const m = new Map<string, SyncAnchor[]>()
    for (const anchor of anchors) {
      const key = anchorPointKey(anchor)
      m.set(key, [...(m.get(key) ?? []), anchor])
    }
    return m
  }, [anchors])

  const endSlidesByPoint = useMemo(() => {
    const m = new Map<string, number[]>()
    for (const anchor of anchors) {
      if (!anchor.end) continue
      const key = anchorPointKey(anchor.end)
      m.set(key, uniqueSlides([...(m.get(key) ?? []), ...asSlideList(anchor.slide)]))
    }
    return m
  }, [anchors])

  const eagerFigurePoints = useMemo(() => {
    const points = new Set<string>()
    for (const anchor of anchors) {
      if (anchor.itemIndex !== undefined) continue
      points.add(pointKey(anchor.sectionId, anchor.blockIndex))
      points.add(pointKey(anchor.sectionId, anchor.blockIndex + 1))
    }
    return points
  }, [anchors])

  // The chapter's ROP section (reflex-zone maps in the feet) — readers spend a
  // lot of time here, so the pinned stage offers a one-tap jump to it.
  const ropSection = useMemo(
    () => chapter.sections.find((section) =>
      isZoneReflexLabel(section.id) ||
      isZoneReflexLabel(section.title) ||
      section.blocks.some((block) => block.type === 'reflexAtlas')
    ) ??
      chapter.sections.find(hasRopShortcutBlock) ??
      chapter.sections.find((section) => isRopShortcutLabel(section.id) || isRopShortcutLabel(section.title)),
    [chapter.sections]
  )
  const ropJumpBlockIndex = useMemo(
    () => ropSection ? ropShortcutBlockIndex(ropSection) : null,
    [ropSection]
  )

  // Slide the jump lands on: page-break sections can intentionally use a
  // heading anchor; otherwise prefer the interactive reflex-zone atlas block
  // or the section's earliest content-block anchor.
  const ropJumpSlide = useMemo(() => {
    if (!ropSection) return null
    if (PAGE_BREAK_BEFORE.has(ropSection.id)) {
      const headingSlide = asSlideList(anchorBySlide.get(`${ropSection.id}:-1`)?.slide)[0]
      if (headingSlide) return headingSlide
      const gatewaySlide = asSlideList(anchors.find((anchor) =>
        anchor.end?.sectionId === ropSection.id && anchor.end.blockIndex === -1
      )?.slide)[0]
      if (gatewaySlide) return gatewaySlide
    }
    const atlasIndex = ropSection.blocks.findIndex((b) => b.type === 'reflexAtlas')
    if (atlasIndex >= 0) {
      const atlasSlide = asSlideList(anchorBySlide.get(`${ropSection.id}:${atlasIndex}`)?.slide)[0]
      if (atlasSlide) return atlasSlide
    }
    if (ropJumpBlockIndex !== null) {
      const blockSlide = asSlideList(anchorBySlide.get(`${ropSection.id}:${ropJumpBlockIndex}`)?.slide)[0]
      if (blockSlide) return blockSlide
      const blockAnchor = anchors.find((anchor) =>
        anchor.sectionId === ropSection.id && anchor.blockIndex >= ropJumpBlockIndex
      )
      const anchoredSlide = asSlideList(blockAnchor?.slide)[0]
      if (anchoredSlide) return anchoredSlide
    }
    const inSection = anchors.filter((a) => a.sectionId === ropSection.id)
    if (inSection.length === 0) return null
    const blocks = inSection.filter((a) => a.blockIndex >= 0)
    const pick = (blocks.length ? blocks : inSection).reduce((lo, a) =>
      a.blockIndex < lo.blockIndex ? a : lo
    )
    return asSlideList(pick.slide)[0] ?? null
  }, [anchors, ropSection, ropJumpBlockIndex, anchorBySlide])

  useEffect(() => {
    track('sync_reader_open')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapter.slug])

  // Applied after mount (not as the initial state) so server and first client
  // render stay identical.
  useEffect(() => {
    let raf = 0
    try {
      if (localStorage.getItem('rop_slides_hidden') === '1') {
        raf = requestAnimationFrame(() => setSlidesHidden(true))
      }
    } catch {}
    return () => cancelAnimationFrame(raf)
  }, [])

  function setSlidesVisibility(visible: boolean) {
    setSlidesHidden(!visible)
    try { localStorage.setItem('rop_slides_hidden', visible ? '0' : '1') } catch {}
    track(visible ? 'sync_slides_shown' : 'sync_slides_hidden', { slide: active })
  }

  useEffect(() => {
    const activeIndex = (active ?? 1) - 1
    for (let index = activeIndex - 3; index <= activeIndex + 6; index += 1) {
      preloadSlideImage(slides[index]?.src)
    }
  }, [active, slides])

  useEffect(() => {
    if (typeof window === 'undefined') return
    let cancelled = false
    let index = 0
    let handle: { type: 'idle' | 'timer'; id: number } | undefined
    const schedule = (callback: () => void) => {
      if (typeof window.requestIdleCallback === 'function') {
        return { type: 'idle' as const, id: window.requestIdleCallback(callback, { timeout: 1500 }) }
      }
      return { type: 'timer' as const, id: window.setTimeout(callback, 400) }
    }
    const cancel = (pending: { type: 'idle' | 'timer'; id: number }) => {
      if (pending.type === 'idle' && typeof window.cancelIdleCallback === 'function') {
        window.cancelIdleCallback(pending.id)
      } else {
        window.clearTimeout(pending.id)
      }
    }
    const warmNextBatch = () => {
      if (cancelled) return
      let warmed = 0
      while (index < slides.length && warmed < 2) {
        preloadSlideImage(slides[index]?.src)
        index += 1
        warmed += 1
      }
      if (index < slides.length) handle = schedule(warmNextBatch)
    }
    handle = schedule(warmNextBatch)
    return () => {
      cancelled = true
      if (handle) cancel(handle)
    }
  }, [slides])

  // Restore reading position on return.
  useEffect(() => {
    if (window.location.hash) return
    const id = loadReadingPosition(chapter.slug)
    if (id) restoreToAnchor(id)
  }, [chapter.slug])

  useEffect(() => {
    function onScroll() {
      const el = articleRef.current
      if (!el) return
      const top = el.getBoundingClientRect().top
      const total = el.scrollHeight - window.innerHeight
      const scrolled = Math.min(Math.max(-top, 0), total)
      setProgress(total > 0 ? scrolled / total : 0)

      // Remember reading position (throttled), even while slide-sync is
      // suppressed, so leaving and returning resumes where the reader was.
      const now = Date.now()
      if (now - lastPosSave.current > 250) {
        lastPosSave.current = now
        const anchorId = currentTopAnchorId()
        if (anchorId) saveReadingPosition(chapter.slug, anchorId)
      }

      if (Date.now() < suppressSyncUntil.current) return
      // Active slide = the latest start anchor that has crossed the reading
      // cursor, unless its explicit end anchor has crossed too. Recomputing
      // from geometry makes the same boundary work in both scroll directions.
      const threshold = window.innerHeight * 0.45
      const events: {
        top: number
        kind: 'end' | 'start'
        slide: number
        order: number
      }[] = []
      el.querySelectorAll<HTMLElement>('[data-slide-anchor], [data-slide-end-anchor]').forEach((a, order) => {
        const top = a.getBoundingClientRect().top
        const startSlide = Number(a.dataset.slideAnchor)
        if (Number.isFinite(startSlide) && startSlide > 0) {
          events.push({ top, kind: 'start', slide: startSlide, order })
        }
        parseSlideList(a.dataset.slideEndAnchor).forEach((slide) => {
          events.push({ top, kind: 'end', slide, order })
        })
      })
      events.sort((a, b) => {
        const topDiff = a.top - b.top
        if (topDiff !== 0) return topDiff
        if (a.kind !== b.kind) return a.kind === 'end' ? -1 : 1
        return a.order - b.order || a.slide - b.slide
      })

      let current: number | null = slides.length > 0 ? 1 : null
      for (const event of events) {
        if (event.top > threshold) break
        if (event.kind === 'start') {
          current = event.slide
        } else if (current === event.slide) {
          current = null
        }
      }
      setActive(current)

      const sectionThreshold = window.innerHeight * 0.36
      let currentSection = chapter.sections[0]?.id ?? ''
      chapter.sections.forEach((section) => {
        const sectionEl = document.getElementById(`sec-${section.id}`)
        if (sectionEl && sectionEl.getBoundingClientRect().top <= sectionThreshold) {
          currentSection = section.id
        }
      })
      setActiveSectionId(currentSection)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelNav()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!lightbox) return
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowRight') {
        e.preventDefault()
        moveLightboxGallery(1)
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        moveLightboxGallery(-1)
      }
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [lightbox])

  useEffect(() => {
    const query = window.matchMedia('(max-width: 760px) and (orientation: portrait)')
    const update = () => setIsPhonePortrait(query.matches)
    update()
    query.addEventListener('change', update)
    window.addEventListener('resize', update)
    window.addEventListener('orientationchange', update)
    window.visualViewport?.addEventListener('resize', update)
    return () => {
      query.removeEventListener('change', update)
      window.removeEventListener('resize', update)
      window.removeEventListener('orientationchange', update)
      window.visualViewport?.removeEventListener('resize', update)
    }
  }, [])

  function openResource(name: string, img: { src: string; alt: string; caption: string }) {
    resourceOpenedAt.current = Date.now()
    resourceNameRef.current = name
    setLightbox({ ...img, orientation: 'landscape', kind: 'figure', alignY: 'top' })
    track('resource_open', { resource: name })
  }

  function closeLightbox() {
    if (resourceNameRef.current && resourceOpenedAt.current) {
      const seconds = Math.round((Date.now() - resourceOpenedAt.current) / 1000)
      track('resource_close', { resource: resourceNameRef.current, duration_seconds: seconds })
    }
    resourceNameRef.current = null
    resourceOpenedAt.current = null
    setLightbox(null)
    setLightboxZoom(1)
  }

  function alignLightboxViewport() {
    if (!lightbox) return
    const scrollEl = lightboxScrollRef.current
    if (!scrollEl) return
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        scrollEl.scrollTop = lightbox.alignY === 'bottom'
          ? Math.max(0, scrollEl.scrollHeight - scrollEl.clientHeight)
          : 0
        scrollEl.scrollLeft = Math.max(0, (scrollEl.scrollWidth - scrollEl.clientWidth) / 2)
      })
    })
  }

  function setLightboxItem(item: LightboxItem, gallery?: LightboxItem[], galleryIndex = 0) {
    setLightbox({
      ...item,
      gallery,
      galleryIndex,
      alignY: item.kind === 'slide' ? 'bottom' : 'top',
    })
  }

  function moveLightboxGallery(delta: number) {
    setLightbox((current) => {
      const gallery = current?.gallery
      if (!current || !gallery || gallery.length < 2) return current
      const nextIndex = (current.galleryIndex ?? 0) + delta
      const wrapped = (nextIndex + gallery.length) % gallery.length
      const nextItem = gallery[wrapped]
      return {
        ...nextItem,
        gallery,
        galleryIndex: wrapped,
        alignY: nextItem.kind === 'slide' ? 'bottom' : 'top',
      }
    })
  }

  function onLightboxTouchStart(e: ReactTouchEvent<HTMLDivElement>) {
    lightboxTouch.current = e.touches.length === 1
      ? { x: e.touches[0].clientX, y: e.touches[0].clientY }
      : null
  }

  function onLightboxTouchEnd(e: ReactTouchEvent<HTMLDivElement>) {
    const start = lightboxTouch.current
    lightboxTouch.current = null
    if (!start || (lightbox?.gallery?.length ?? 0) < 2) return
    // A zoomed image pans with the finger; don't hijack that gesture.
    if (lightboxZoom > 1) return
    const touch = e.changedTouches[0]
    if (!touch) return
    const dx = touch.clientX - start.x
    const dy = touch.clientY - start.y
    const horizontal = Math.abs(dx) >= 40 && Math.abs(dx) > Math.abs(dy) * 1.2
    const vertical = Math.abs(dy) >= 40 && Math.abs(dy) > Math.abs(dx) * 1.2
    // When a landscape slide is auto-rotated on a portrait phone, its reading
    // axis runs vertically on screen — a flick up is the spontaneous "next"
    // there, so both axes navigate. Unrotated views keep vertical for
    // scrolling and only navigate horizontally.
    let delta = 0
    if (horizontal) delta = dx < 0 ? 1 : -1
    else if (vertical && rotateLandscapeLightbox) delta = dy < 0 ? 1 : -1
    if (delta === 0) return
    track('lightbox_swipe_nav', { direction: delta > 0 ? 'next' : 'prev', axis: horizontal ? 'x' : 'y' })
    moveLightboxGallery(delta)
  }

  function cancelNav() {
    if (navAnim.current) {
      cancelAnimationFrame(navAnim.current.raf)
      navAnim.current.cleanup()
      navAnim.current = null
    }
  }

  // Animate the page to a target element. The position is re-read every frame
  // from the live element, so lazy-loaded figures growing mid-scroll can't
  // strand the animation short of the destination. Sync stays suppressed until
  // arrival (however long a far jump takes); a manual scroll cancels it.
  function animateTo(getEl: () => HTMLElement | null, targetOffset = 96) {
    cancelNav()
    suppressSyncUntil.current = Infinity

    // The site sets html{scroll-behavior:smooth}; force instant positioning so
    // our per-frame easing isn't fought by the browser's own animation.
    const root = document.documentElement
    const prevBehavior = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'

    // A wheel/touch/key gesture means the reader took over: stop animating.
    const onUserScroll = () => cancelNav()
    window.addEventListener('wheel', onUserScroll, { passive: true })
    window.addEventListener('touchmove', onUserScroll, { passive: true })
    window.addEventListener('keydown', onUserScroll)
    const cleanup = () => {
      window.removeEventListener('wheel', onUserScroll)
      window.removeEventListener('touchmove', onUserScroll)
      window.removeEventListener('keydown', onUserScroll)
      root.style.scrollBehavior = prevBehavior
      // Brief tail so momentum settles before the scroll handler resumes.
      suppressSyncUntil.current = Date.now() + 200
    }

    const start = performance.now()
    let settled = 0
    const step = (now: number) => {
      const el = getEl()
      if (!el) { cleanup(); navAnim.current = null; return }
      const desired = el.getBoundingClientRect().top + window.scrollY - targetOffset
      const dist = desired - window.scrollY
      settled = Math.abs(dist) < 2 ? settled + 1 : 0
      // Ease toward the live target; recomputed each frame.
      window.scrollTo(0, window.scrollY + dist * 0.2)
      if (settled >= 3 || now - start > 5000) {
        window.scrollTo(0, desired)
        cleanup(); navAnim.current = null; return
      }
      navAnim.current = { raf: requestAnimationFrame(step), cleanup }
    }
    navAnim.current = { raf: requestAnimationFrame(step), cleanup }
  }

  function goToSlide(n: number) {
    const slide = Math.min(slides.length, Math.max(1, n))
    setActive(slide)
    track('sync_slide_nav', { slide })
    animateTo(
      () => articleRef.current?.querySelector<HTMLElement>(`[data-slide-anchor="${slide}"]`) ?? null,
      window.innerHeight * 0.42
    )
  }

  function slideForSection(sectionId: string) {
    const inSection = anchors.filter((a) => a.sectionId === sectionId)
    if (inSection.length > 0) {
      const blocks = inSection.filter((a) => a.blockIndex >= 0)
      const pick = (blocks.length ? blocks : inSection).reduce((lo, a) =>
        a.blockIndex < lo.blockIndex ? a : lo
      )
      return asSlideList(pick.slide)[0] ?? null
    }

    const sectionEl = document.getElementById(`sec-${sectionId}`)
    if (!sectionEl) return null
    const sectionTop = sectionEl.offsetTop
    let current = 1
    articleRef.current?.querySelectorAll<HTMLElement>('[data-slide-anchor]').forEach((anchorEl) => {
      if (anchorEl.offsetTop <= sectionTop) {
        current = Number(anchorEl.dataset.slideAnchor) || current
      }
    })
    return current
  }

  // Jump to the reflex-zone (ROP) section by landing on its first reflex-zone
  // section anchor. Some chapters reuse a slide number before the ROP section,
  // so targeting the slide marker can land on the earlier occurrence instead.
  function goToReflexZones() {
    if (!ropSection || !ropJumpSlide) return
    track('sync_jump_section', { section: ropSection?.id, slide: ropJumpSlide })
    setActive(ropJumpSlide)
    setActiveSectionId(ropSection.id)
    animateTo(() => {
      if (PAGE_BREAK_BEFORE.has(ropSection.id)) {
        return document.getElementById(`sec-${ropSection.id}`)
      }
      return ropJumpBlockIndex !== null
        ? document.getElementById(`p-${ropSection.id}-${ropJumpBlockIndex}`)
        : document.getElementById(`sec-${ropSection.id}`)
    })
  }

  function goToSection(sectionId: string) {
    const sectionSlide = slideForSection(sectionId)
    if (sectionSlide) setActive(sectionSlide)
    track('sync_section_nav', { section: sectionId, slide: sectionSlide })
    setActiveSectionId(sectionId)
    animateTo(() => document.getElementById(`sec-${sectionId}`))
  }

  function handleSectionRailMove(e: MouseEvent<HTMLElement>) {
    const buttons = Array.from(sectionRailRef.current?.querySelectorAll<HTMLElement>('.ss-section-pin') ?? [])
    if (buttons.length === 0) return
    const closest = buttons.reduce((best, button, index) => {
      const rect = button.getBoundingClientRect()
      const distance = Math.abs(e.clientY - (rect.top + rect.height / 2))
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Infinity })
    setRailHoverIndex((current) => current === closest.index ? current : closest.index)
  }

  function sectionRailTickWidth(index: number, isActive: boolean) {
    const base = isActive ? 30 : 9
    if (railHoverIndex === null) return base
    const distance = Math.abs(index - railHoverIndex)
    const hoverWidth = [34, 25, 17, 12][distance] ?? 9
    return Math.max(base, hoverWidth)
  }

  function slideLightboxItem(n: number): LightboxItem | null {
    const s = slides[n - 1]
    if (!s) return null
    return {
      src: s.src,
      alt: s.title,
      caption: ui.caption(n, s.title),
      orientation: s.orientation === 'portrait' ? 'portrait' : 'landscape',
      kind: 'slide',
    }
  }

  function figureLightboxItem(block: Block): LightboxItem | null {
    if (block.type !== 'figure' || block.syncHide) return null
    return {
      src: block.src,
      alt: block.alt,
      caption: block.caption,
      orientation: block.orientation === 'portrait' || block.orientation === 'narrow' ? 'portrait' : 'landscape',
      kind: 'figure',
    }
  }

  function anchorForSlide(n: number) {
    return anchors.find((anchor) => isReflexZoneSectionId(anchor.sectionId) && asSlideList(anchor.slide).includes(n)) ??
      anchors.find((anchor) => asSlideList(anchor.slide).includes(n)) ??
      null
  }

  function reflexAnchorBlockRange(anchor: SyncAnchor) {
    if (!isReflexZoneSectionId(anchor.sectionId)) return null
    const section = chapter.sections.find((s) => s.id === anchor.sectionId)
    if (!section) return null
    const start = Math.max(0, anchor.blockIndex)
    const endBlock = anchor.end?.sectionId === anchor.sectionId ? anchor.end.blockIndex : start + 1
    const endExclusive = Math.min(section.blocks.length, Math.max(start + 1, endBlock))
    return { section, start, endExclusive }
  }

  function reflexAnchorForBlock(sectionId: string, blockIndex: number) {
    if (!isReflexZoneSectionId(sectionId)) return null
    const matches = anchors.filter((anchor) => {
      if (anchor.sectionId !== sectionId) return false
      const range = reflexAnchorBlockRange(anchor)
      return !!range && blockIndex >= range.start && blockIndex < range.endExclusive
    })
    return matches.find((anchor) => Math.max(0, anchor.blockIndex) === blockIndex) ?? matches[0] ?? null
  }

  function firstFigureInAnchorRange(anchor: SyncAnchor) {
    const range = reflexAnchorBlockRange(anchor)
    if (!range) return null
    for (let i = range.start; i < range.endExclusive; i += 1) {
      const item = figureLightboxItem(range.section.blocks[i])
      if (item) return item
    }
    return null
  }

  function reflexGalleryForSlide(n: number) {
    const slideItem = slideLightboxItem(n)
    const anchor = anchorForSlide(n)
    if (!slideItem || !anchor || !isReflexZoneSectionId(anchor.sectionId)) {
      return slideItem ? [slideItem] : []
    }
    const items = asSlideList(anchor.slide)
      .map((slideNumber) => slideLightboxItem(slideNumber))
      .filter((item): item is LightboxItem => !!item)
    const figureItem = firstFigureInAnchorRange(anchor)
    if (figureItem) items.push(figureItem)
    return items.length > 0 ? items : [slideItem]
  }

  function reflexGalleryForFigure(sectionId: string, blockIndex: number, image: LightboxItem) {
    const anchor = reflexAnchorForBlock(sectionId, blockIndex)
    if (!anchor) return [image]
    const slideItems = asSlideList(anchor.slide)
      .map((slideNumber) => slideLightboxItem(slideNumber))
      .filter((item): item is LightboxItem => !!item)
    return [...slideItems, image]
  }

  function allSlidesGallery() {
    return slides
      .map((_, index) => slideLightboxItem(index + 1))
      .filter((item): item is LightboxItem => !!item)
  }

  function openSlideLightbox(n: number) {
    // Reflex-zone slides keep their curated slide+figure pairing; any other
    // slide opens into the full deck so the reader can browse every slide
    // (arrows, swipe) without dropping back to the text.
    const reflexGallery = reflexGalleryForSlide(n)
    const gallery = reflexGallery.length > 1 ? reflexGallery : allSlidesGallery()
    const current = gallery.findIndex((item) => item.kind === 'slide' && item.src === slides[n - 1]?.src)
    const index = current >= 0 ? current : 0
    const item = gallery[index]
    if (!item) return
    setLightboxItem(item, gallery.length > 1 ? gallery : undefined, index)
  }

  function openFigureLightbox(image: LightboxItem, sectionId: string, blockIndex: number) {
    const figureItem = { ...image, kind: 'figure' as const }
    const gallery = reflexGalleryForFigure(sectionId, blockIndex, figureItem)
    const current = gallery.findIndex((item) => item.kind === 'figure' && item.src === figureItem.src)
    const index = current >= 0 ? current : 0
    setLightboxItem(figureItem, gallery.length > 1 ? gallery : undefined, index)
  }

  const rotateLandscapeLightbox = lightbox?.orientation === 'landscape' && isPhonePortrait

  useEffect(() => {
    alignLightboxViewport()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox?.src, lightboxZoom, rotateLandscapeLightbox])

  // Warm the neighbours of the current lightbox item so swiping through the
  // deck shows the next slide instantly.
  useEffect(() => {
    const gallery = lightbox?.gallery
    if (!gallery || gallery.length < 2) return
    const index = lightbox?.galleryIndex ?? 0
    for (const delta of [1, -1, 2]) {
      preloadSlideImage(gallery[(index + delta + gallery.length) % gallery.length]?.src)
    }
  }, [lightbox])

  const activeSlideNumber = active ?? 0
  const activeSlide = active ? slides[active - 1] : undefined
  const activeSlideIsPortrait = activeSlide?.orientation === 'portrait'
  const showRopJump = !!ropSection && !!ropJumpSlide
  const renderedSlideIndexes = useMemo(() => {
    if (!active) return []
    const indexes = new Set([active - 3, active - 2, active - 1, active, active + 1])
    return Array.from(indexes)
      .filter((index) => index >= 0 && index < slides.length)
      .sort((a, b) => a - b)
  }, [active, slides.length])
  const lightboxGalleryCount = lightbox?.gallery?.length ?? 0
  const lightboxGalleryIndex = lightbox?.galleryIndex ?? 0

  function slidesAtPoint(sectionId: string, blockIndex: number, itemIndex?: number) {
    return slidesFromAnchors(anchorsByPoint.get(pointKey(sectionId, blockIndex, itemIndex)))
  }

  function hasHalfGapBefore(sectionId: string, blockIndex: number) {
    return (anchorsByPoint.get(pointKey(sectionId, blockIndex)) ?? [])
      .some((anchor) => anchor.gapBefore === 'half')
  }

  function renderEndSentinel(sectionId: string, blockIndex: number, itemIndex?: number) {
    const endSlides = endSlidesByPoint.get(pointKey(sectionId, blockIndex, itemIndex))
    if (!endSlides?.length) return null
    return (
      <span
        className={`ss-end-anchor${SHOW_SYNC_END_ANCHORS ? ' ss-end-anchor--visible' : ''}`}
        data-slide-end-anchor={endSlides.join(' ')}
        aria-hidden={!SHOW_SYNC_END_ANCHORS}
      >
        {SHOW_SYNC_END_ANCHORS && (
          <>
            <span className="ss-end-anchor-line" aria-hidden />
            <span className="ss-end-anchor-label">{ui.endMarker(endSlides)}</span>
          </>
        )}
      </span>
    )
  }

  function renderSlideAnchors(sectionId: string, blockIndex: number, itemIndex?: number) {
    const slideList = slidesAtPoint(sectionId, blockIndex, itemIndex)
    if (slideList.length === 0) return null
    return (
      <>
        {slideList.map((slide) => (
          <div key={slide} className="ss-anchor" data-slide-anchor={slide}>
            <button
              type="button"
              className="ss-marker"
              onClick={() => openSlideLightbox(slide)}
              title={ui.enlargeShort}
            >
              <span className="ss-marker-dot" aria-hidden />
              {ui.marker(slide, slides[slide - 1]?.title ?? '')}
            </button>
          </div>
        ))}
      </>
    )
  }

  return (
    <div className="cr-root">
      <div className="cr-progress" aria-hidden><div className="cr-progress-bar" style={{ transform: `scaleX(${progress})` }} /></div>

      {sectionRail && (
        <nav
          ref={sectionRailRef}
          className="ss-section-rail"
          aria-label="Navigation du chapitre"
          onMouseMove={handleSectionRailMove}
          onMouseLeave={() => setRailHoverIndex(null)}
        >
          {chapter.sections.map((section, index) => {
            const isActive = activeSectionId === section.id
            return (
              <button
                key={section.id}
                type="button"
                className={`ss-section-pin${isActive ? ' is-active' : ''}`}
                onClick={() => goToSection(section.id)}
                aria-current={isActive ? 'location' : undefined}
              >
                <span className="ss-section-tick" style={{ width: `${sectionRailTickWidth(index, isActive)}px` }} aria-hidden />
                <span className="ss-section-card">
                  <span className="ss-section-num">{String(index + 1).padStart(2, '0')}</span>
                  <span className="ss-section-title">{section.title}</span>
                </span>
              </button>
            )
          })}
        </nav>
      )}

      <div className="cr-topbar">
        <Link href={backHref} className="cr-home">{t.reader.back}</Link>
        <div className="cr-topbar-title">
          <span className="cr-chap">{t.reader.chapterPrefix} {chapter.number}</span>
          <span className="cr-sep">·</span>
          <span className="cr-bookname">{bookTitle}</span>
        </div>
      </div>

      {xrefReturn && (
        <Link href={xrefReturn.href} className="cr-xref-return">
          <span aria-hidden>←</span>
          {xrefReturn.label}
        </Link>
      )}

      <div className="ss-layout">
        <div className="ss-stagecol">
          <div className={`ss-stage${activeSlideIsPortrait ? ' ss-stage--portrait' : ''}`}>
            {slidesHidden ? (
            <>
            <button
              type="button"
              className="ss-stage-restore"
              onClick={() => setSlidesVisibility(true)}
              title={ui.showSlides}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="M21 15l-5-5L5 21" />
              </svg>
              <span className="ss-stage-restore-label">{ui.showSlides}</span>
              {active !== null && <span className="ss-stage-restore-count">{active} / {slides.length}</span>}
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {showRopJump && (
              <button
                type="button"
                className="ss-jump"
                onClick={goToReflexZones}
                title={ui.jumpTitle(ropSection.title)}
              >
                <span className="ss-jump-icon" aria-hidden>⌖</span>
                <span className="ss-jump-text">
                  <span className="ss-jump-label">{ui.jumpLabel}</span>
                  <span className="ss-jump-section">{ropSection.title}</span>
                </span>
                <span className="ss-jump-arrow" aria-hidden>↓</span>
              </button>
            )}
            </>
            ) : (
            <>
            <div className="ss-stage-row">
              <div className="ss-dots" role="tablist" aria-label={ui.slides}>
                {slides.map((s, i) => (
                  <button
                    key={s.src}
                    className={`ss-dot${i + 1 === active ? ' is-active' : ''}`}
                    onClick={() => goToSlide(i + 1)}
                    title={`${i + 1}. ${s.title}`}
                    aria-label={ui.goTo(i + 1, s.title)}
                  />
                ))}
              </div>
              <div className="ss-stage-main">
            {activeSlide && (
              <>
                <button
                  type="button"
                  className={`ss-frame${activeSlideIsPortrait ? ' ss-frame--portrait' : ''}`}
                  onClick={() => { if (active) openSlideLightbox(active) }}
                  aria-label={active ? ui.enlarge(active, activeSlide.title) : ui.slides}
                >
                  {renderedSlideIndexes.map((i) => {
                    const s = slides[i]
                    return (
                      <img
                        key={s.src}
                        src={s.src}
                        alt={s.title}
                        className={`ss-slide${i + 1 === activeSlideNumber ? ' is-active' : ''}`}
                        loading={Math.abs(i + 1 - activeSlideNumber) <= 1 ? 'eager' : 'lazy'}
                        fetchPriority={i + 1 === activeSlideNumber ? 'high' : 'low'}
                        decoding="async"
                        aria-hidden={i + 1 !== activeSlideNumber}
                      />
                    )
                  })}
                  <span className="cr-fig-zoom ss-frame-zoom" aria-hidden>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 3h6v6" />
                      <path d="M21 3l-7 7" />
                      <path d="M9 21H3v-6" />
                      <path d="M3 21l7-7" />
                    </svg>
                  </span>
                </button>
                <div className="ss-stage-bar">
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => { if (active) goToSlide(active - 1) }}
                    disabled={!active || active <= 1}
                    aria-label={ui.prev}
                  >‹</button>
                  <div className="ss-stage-meta">
                    <span className="ss-stage-count">{active} / {slides.length}</span>
                    <span className="ss-stage-title">{activeSlide.title}</span>
                  </div>
                  <button
                    className="cr-viewer-nav-btn"
                    onClick={() => { if (active) goToSlide(active + 1) }}
                    disabled={!active || active >= slides.length}
                    aria-label={ui.next}
                  >›</button>
                  <button
                    type="button"
                    className="ss-stage-hide"
                    onClick={() => setSlidesVisibility(false)}
                    aria-label={ui.hideSlides}
                    title={ui.hideSlides}
                  >
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                      <path d="M14.12 14.12a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  </button>
                </div>
              </>
            )}
            {showRopJump && (
              <button
                type="button"
                className="ss-jump"
                onClick={goToReflexZones}
                title={ui.jumpTitle(ropSection.title)}
              >
                <span className="ss-jump-icon" aria-hidden>⌖</span>
                <span className="ss-jump-text">
                  <span className="ss-jump-label">{ui.jumpLabel}</span>
                  <span className="ss-jump-section">{ropSection.title}</span>
                </span>
                <span className="ss-jump-arrow" aria-hidden>↓</span>
              </button>
            )}
              </div>
            </div>
            {showClinicalCaseResource && chapter.clinicalCase && (
              <button
                type="button"
                className="ss-case-chip"
                onClick={() => openResource('clinical_case', chapter.clinicalCase!)}
                aria-label={t.reader.clinicalCase}
                title={t.reader.clinicalCase}
              >
                <span className="ss-case-chip-icon" aria-hidden>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 4h8" />
                    <path d="M9 2h6a1 1 0 0 1 1 1v2H8V3a1 1 0 0 1 1-1Z" />
                    <path d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
                    <path d="M8 11h8" />
                    <path d="M8 15h5" />
                  </svg>
                </span>
                <span className="ss-case-chip-label">{t.reader.clinicalCase}</span>
              </button>
            )}
            </>
            )}
          </div>
        </div>

        <article ref={articleRef} className="ss-article" data-chapter={chapter.slug}>
          <div className="cr-hero">
            <p className="cr-hero-eyebrow">{t.reader.chapterPrefix} {chapter.number}</p>
            <h1 className="cr-hero-title">{chapter.title}</h1>
            <p className="cr-hero-book"><em>{bookTitle}</em></p>
            <p className="cr-hero-author">Guy Boitout</p>
          </div>

          {chapter.sections.map((section) => {
            const headingSlides = slidesAtPoint(section.id, -1)
            const hasPageBreak = PAGE_BREAK_BEFORE.has(section.id)
            return (
            <Fragment key={section.id}>
            {hasPageBreak && (
              <div className={`ss-pagebreak${headingSlides.length > 0 ? ' ss-pagebreak--anchored' : ''}`}>
                {headingSlides.length > 0 && (
                  <div className="ss-anchor ss-anchor-pagebreak">
                    {headingSlides.map((slide) => (
                      <div key={slide} data-slide-anchor={slide}>
                        <button
                          type="button"
                          className="ss-marker"
                          onClick={() => openSlideLightbox(slide)}
                          title={ui.enlargeShort}
                        >
                          <span className="ss-marker-dot" aria-hidden />
                          {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            <section id={`sec-${section.id}`} className="cr-section">
              {renderEndSentinel(section.id, -1)}
              {!hasPageBreak && headingSlides.length > 0 && (
                <div className="ss-anchor ss-anchor-heading">
                  {headingSlides.map((slide) => (
                    <div key={slide} data-slide-anchor={slide}>
                      <button
                        type="button"
                        className="ss-marker"
                        onClick={() => openSlideLightbox(slide)}
                        title={ui.enlargeShort}
                      >
                        <span className="ss-marker-dot" aria-hidden />
                        {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                      </button>
                    </div>
                  ))}
                </div>
              )}
              {!isRopInterestSection(section) && <h2 className="cr-h2">{section.title}</h2>}
              {section.blocks.map((b, i) => {
                const slideList = slidesAtPoint(section.id, i)
                const endSentinel = renderEndSentinel(section.id, i)
                const posId = `p-${section.id}-${i}`
                const view = (
                  <BlockView
                    block={b}
                    onOpenImage={(image) => openFigureLightbox(image, section.id, i)}
                    ui={ui}
                    eagerImage={eagerFigurePoints.has(pointKey(section.id, i))}
                    renderSlideAnchorsForItem={(itemIndex) => renderSlideAnchors(section.id, i, itemIndex)}
                    renderEndSentinelForItem={(itemIndex) => renderEndSentinel(section.id, i, itemIndex)}
                    sourceChapterKey={chapter.slug}
                    restrictPaidXrefs={restrictPaidXrefs}
                  />
                )
                if (view === null && slideList.length === 0 && !endSentinel) return null
                if (slideList.length === 0) {
                  return (
                    <div
                      key={i}
                      id={posId}
                      data-pos-anchor=""
                    >
                      {endSentinel}
                      {view}
                    </div>
                  )
                }
                return (
                  <div
                    key={i}
                    id={posId}
                    data-pos-anchor=""
                    className={`ss-anchor${hasHalfGapBefore(section.id, i) ? ' ss-anchor-halfbreak' : ''}`}
                  >
                    {endSentinel}
                    {slideList.map((slide) => (
                      <div key={slide} data-slide-anchor={slide}>
                        <button
                          type="button"
                          className="ss-marker"
                          onClick={() => openSlideLightbox(slide)}
                          title={ui.enlargeShort}
                        >
                          <span className="ss-marker-dot" aria-hidden />
                          {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                        </button>
                      </div>
                    ))}
                    {view}
                  </div>
                )
              })}
              {(() => {
                const trailingIndex = section.blocks.length
                const slideList = slidesAtPoint(section.id, trailingIndex)
                const endSentinel = renderEndSentinel(section.id, trailingIndex)
                if (slideList.length === 0 && !endSentinel) return null
                return (
                  <div
                    id={`p-${section.id}-${trailingIndex}`}
                    data-pos-anchor=""
                    className={slideList.length > 0 ? `ss-anchor${hasHalfGapBefore(section.id, trailingIndex) ? ' ss-anchor-halfbreak' : ''}` : undefined}
                  >
                    {endSentinel}
                    {slideList.map((slide) => (
                      <div key={slide} data-slide-anchor={slide}>
                        <button
                          type="button"
                          className="ss-marker"
                          onClick={() => openSlideLightbox(slide)}
                          title={ui.enlargeShort}
                        >
                          <span className="ss-marker-dot" aria-hidden />
                          {ui.marker(slide, slides[slide - 1]?.title ?? '')}
                        </button>
                      </div>
                    ))}
                  </div>
                )
              })()}
            </section>
            </Fragment>
            )
          })}
        </article>
      </div>

      {lightbox && (
        <div
          className={`cr-lightbox${lightbox.orientation ? ` cr-lightbox--${lightbox.orientation}` : ''}${rotateLandscapeLightbox ? ' cr-lightbox--auto-rotated' : ''}`}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div className="cr-lightbox-bar" onClick={(e) => e.stopPropagation()}>
            <span className="cr-lightbox-caption">{lightbox.caption}</span>
            <div className="cr-lightbox-controls">
              {lightboxGalleryCount > 1 && (
                <>
                  <button className="cr-viewer-nav-btn" onClick={() => moveLightboxGallery(-1)} aria-label="Image précédente">‹</button>
                  <span className="cr-viewer-nav-count">{lightboxGalleryIndex + 1} / {lightboxGalleryCount}</span>
                  <button className="cr-viewer-nav-btn" onClick={() => moveLightboxGallery(1)} aria-label="Image suivante">›</button>
                </>
              )}
              <button className="cr-viewer-nav-btn" onClick={() => setLightboxZoom(z => Math.max(0.5, +(z - 0.25).toFixed(2)))} disabled={lightboxZoom <= 0.5} aria-label="Dézoomer">−</button>
              <button className="cr-viewer-zoom-reset" onClick={() => setLightboxZoom(1)} title="Réinitialiser">{Math.round(lightboxZoom * 100)}%</button>
              <button className="cr-viewer-nav-btn" onClick={() => setLightboxZoom(z => Math.min(4, +(z + 0.25).toFixed(2)))} disabled={lightboxZoom >= 4} aria-label="Zoomer">+</button>
              <button className="cr-lightbox-close" onClick={closeLightbox} aria-label="Fermer">×</button>
            </div>
          </div>
          <div
            ref={lightboxScrollRef}
            className="cr-lightbox-scroll"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onLightboxTouchStart}
            onTouchEnd={onLightboxTouchEnd}
          >
            <figure className="cr-lightbox-fig">
              {lightbox.orientation === 'landscape' && (
                <p className="cr-lightbox-rotate-hint">{ui.rotateHint}</p>
              )}
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                onLoad={alignLightboxViewport}
                style={{
                  transform: `${rotateLandscapeLightbox ? 'rotate(90deg) ' : ''}scale(${lightboxZoom})`,
                  transformOrigin: rotateLandscapeLightbox ? 'center center' : 'top center',
                }}
              />
              <figcaption>{lightbox.caption}</figcaption>
            </figure>
          </div>
          {/* YouTube-Music-style collapse control: a compact corner icon
              instead of the old full-width pill, so the slide keeps the
              screen. Corners pointing inward = back to the half-screen
              text+slide reading view. */}
          <button
            type="button"
            className="cr-lightbox-return"
            onClick={closeLightbox}
            aria-label={closeToReadingLabel}
            title={closeToReadingLabel}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M9 3v4a2 2 0 0 1-2 2H3" />
              <path d="M15 3v4a2 2 0 0 0 2 2h4" />
              <path d="M9 21v-4a2 2 0 0 0-2-2H3" />
              <path d="M15 21v-4a2 2 0 0 1 2-2h4" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

function BlockView({
  block,
  onOpenImage,
  ui,
  eagerImage = false,
  renderSlideAnchorsForItem,
  renderEndSentinelForItem,
  sourceChapterKey,
  restrictPaidXrefs,
}: {
  block: Block
  onOpenImage: (b: LightboxItem) => void
  ui: typeof SS_UI.fr
  eagerImage?: boolean
  renderSlideAnchorsForItem?: (itemIndex: number) => ReactNode
  renderEndSentinelForItem?: (itemIndex: number) => ReactNode
  sourceChapterKey: string
  restrictPaidXrefs: boolean
}) {
  const { t } = useLanguage()
  switch (block.type) {
    case 'para':
      return <p className="cr-p">{block.text}</p>
    case 'lead':
      return (
        <p className="cr-p cr-lead">
          <strong className="cr-lead-label">{block.label}{block.text ? ' —' : ''}</strong>
          {block.text ? ' ' + block.text : ''}
        </p>
      )
    case 'sub':
      return <h3 className="cr-h3">{block.text}</h3>
    case 'bullets':
      return (
        <ul className="cr-ul">
          {block.items.map((it, i) => (
            <li key={i}>
              {renderSlideAnchorsForItem?.(i)}
              {it}
            </li>
          ))}
        </ul>
      )
    case 'numbered':
      return (
        <ol className="cr-ol">
          {block.items.map((it, i) => (
            <li key={i}>
              {renderSlideAnchorsForItem?.(i)}
              {it}
            </li>
          ))}
        </ol>
      )
    case 'leadBullets': {
      const [intro, ...items] = block.items
      const hasReflexZoneIntro = !!intro?.text && normalizeSectionLabel(intro.label) === 'zones reflexes podales'
      const visibleItems = hasReflexZoneIntro ? items : block.items
      return (
        <>
          {hasReflexZoneIntro && (
            <p className="cr-p">
              {intro.label} — {intro.text}
            </p>
          )}
          <ul className="cr-ul cr-ul-lead">
            {visibleItems.map((it, i) => {
              const itemIndex = hasReflexZoneIntro ? i + 1 : i
              return (
                <li key={itemIndex}>
                  <strong className="cr-lead-label">{it.label}{it.text ? ' —' : ''}</strong>
                  {it.text ? ' ' + it.text : ''}
                  {renderEndSentinelForItem?.(itemIndex)}
                </li>
              )
            })}
          </ul>
        </>
      )
    }
    case 'table':
      return (
        <figure className="cr-table-figure">
          <div className="cr-table-scroll">
            <table className="cr-table">
              <thead>
                <tr>
                  {block.headers.map((header, i) => <th key={i}>{header}</th>)}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, i) => (
                  <tr key={i}>
                    {block.headers.map((_, j) => <td key={j}>{row[j] ?? ''}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.caption && <figcaption>{block.caption}</figcaption>}
        </figure>
      )
    case 'figure':
      if (block.syncHide) return null
      return (
        <figure className={`cr-fig cr-fig-${block.orientation} ss-fig`}>
          <button
            type="button"
            className="cr-fig-btn"
            onClick={() => onOpenImage({
              src: block.src,
              alt: block.alt,
              caption: block.caption,
              orientation: block.orientation === 'portrait' || block.orientation === 'narrow' ? 'portrait' : 'landscape',
              kind: 'figure',
            })}
            aria-label={ui.enlargeFigure(block.caption)}
          >
            <img src={block.src} alt={block.alt} loading={eagerImage ? 'eager' : 'lazy'} />
            <span className="cr-fig-zoom" aria-hidden>⌕</span>
          </button>
          <figcaption>{block.caption}</figcaption>
        </figure>
      )
    case 'xref':
      return (
        <p className="cr-xref">
          <Link href={readerXrefHref(block.href, sourceChapterKey, restrictPaidXrefs)} className="cr-xref-link">
            <span className="cr-xref-kicker">{block.label}</span>
            {block.text && <span className="cr-xref-title">{block.text}</span>}
            <span className="cr-xref-arrow" aria-hidden>→</span>
          </Link>
        </p>
      )
    case 'rop':
      return (
        <aside className="cr-rop">
          <p className="cr-rop-title">{t.reader.ropTitle}</p>
          {block.body.map((p, i) => (
            <Fragment key={i}>
              {renderSlideAnchorsForItem?.(i)}
              <p className="cr-rop-p">{p}</p>
            </Fragment>
          ))}
          {renderSlideAnchorsForItem?.(block.body.length)}
        </aside>
      )
    case 'reflexAtlas':
      return <ReflexZoneAtlas />
  }
}
