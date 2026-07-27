'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'
import { bookVisualTotals, chapterMetaSnapshot } from '@/lib/chapterMetaSnapshot'

const ROMAN = ['I', 'II', 'III', 'IV', 'V']

/* Table-of-contents card number → key of the generated visual snapshot. */
function snapshotKey(num: string): string {
  return num === '00' ? 'introduction' : `chapter-${Number(num)}`
}

/* Chapter number → index of the corresponding part in t.architecture.flow */
function stageOf(num: string): number {
  const n = parseInt(num, 10)
  if (n <= 2) return 0
  if (n <= 4) return 1
  if (n <= 6) return 2
  if (n <= 15) return 3
  return 4
}

export default function BookJourney() {
  const { t, lang } = useLanguage()
  const [open, setOpen] = useState<string | null>(null)

  function track(cta: string) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: 'home', event: 'cta_click', data: { cta }, lang, sessionId: getSessionId() }),
      keepalive: true,
    }).catch(() => {})
  }

  function toggle(num: string) {
    setOpen((cur) => {
      const next = cur === num ? null : num
      if (next) track(`toc_open_${num}`)
      return next
    })
  }

  return (
    <section id="chapitres">
      <div className="jn-hd">
        <div>
          <div className="lbl">{t.chapters.lbl}</div>
          <h2>{t.architecture.h2.before}<em>{t.architecture.h2.em}</em>{t.architecture.h2.after}</h2>
        </div>
        <div>
          <p className="jn-desc">{t.architecture.desc}</p>
          <div className="jn-stats">
            {t.journey.stats.map((s) => <span key={s} className="jn-stat">{s}</span>)}
          </div>
          <div className="jn-visuals">
            <p className="jn-visuals-hd">
              <span className="jn-visuals-n">{bookVisualTotals.visualCount}</span>
              <span className="jn-visuals-lbl">{t.visuals.lbl}</span>
            </p>
            <div className="jn-visuals-parts">
              <span className="jn-visuals-part">{t.visuals.photos(bookVisualTotals.photoCount)}</span>
              <span className="jn-visuals-part">{t.visuals.slides(bookVisualTotals.slideCount)}</span>
              <span className="jn-visuals-part">{t.visuals.maps(bookVisualTotals.cartographyCount)}</span>
            </div>
          </div>
          <p className="jn-hint">{t.journey.hint}</p>
        </div>
      </div>

      <div className="jn-flow">
        {t.architecture.flow.map((stage, i) => {
          const rows = t.chapters.cards.filter((c) => stageOf(c.num) === i)
          return (
            <div key={stage.t} className="jn-part">
              <div className="jn-side">
                <div className="jn-side-in">
                  <div className="jn-node">{stage.icon}</div>
                  <div className="jn-plbl">{t.journey.part} {ROMAN[i]}</div>
                  <h3 className="jn-part-t">{stage.t}</h3>
                  <p className="jn-part-s">{stage.s}</p>
                  <span className="jn-count">{t.journey.count(rows.length)}</span>
                </div>
              </div>
              <div className="jn-list">
                {rows.map((card) => {
                  const isFree = card.variant === 'free'
                  const isOpen = open === card.num
                  const visuals = chapterMetaSnapshot[snapshotKey(card.num)]
                  const metrics = visuals
                    ? [
                      t.visuals.read(visuals.readingMinutes),
                      visuals.photoCount > 0 ? t.visuals.photos(visuals.photoCount) : null,
                      visuals.slideCount > 0 ? t.visuals.slides(visuals.slideCount) : null,
                      visuals.cartographyCount > 0 ? t.visuals.maps(visuals.cartographyCount) : null,
                    ].filter((m): m is string => !!m)
                    : []
                  const meta = metrics.length > 0
                    ? null
                    : ('meta' in card ? (card as { meta?: string }).meta : undefined)
                  return (
                    <div key={card.num} className={`jn-row${isFree ? ' free' : ''}${isOpen ? ' open' : ''}`}>
                      <button
                        type="button"
                        className="jn-row-btn"
                        aria-expanded={isOpen}
                        aria-controls={`jn-body-${card.num}`}
                        onClick={() => toggle(card.num)}
                      >
                        <span className="jn-num">{card.num}</span>
                        <span className="jn-row-main">
                          <span className="jn-row-lbl">{card.label}</span>
                          <span className="jn-row-title">{card.title}</span>
                        </span>
                        {visuals && visuals.visualCount > 0 && (
                          <span className="jn-row-vis">{t.visuals.chip(visuals.visualCount)}</span>
                        )}
                        {isFree && <span className="jn-free-b">{t.chapters.freeBadge}</span>}
                        <span className="jn-x" aria-hidden="true" />
                      </button>
                      <div id={`jn-body-${card.num}`} className="jn-body">
                        <div className="jn-body-in">
                          <div className="jn-body-ct">
                            <p className="jn-txt">{card.body}</p>
                            <div className="jn-tags">
                              {card.tags.map((tag) => <span key={tag} className="jn-tag">{tag}</span>)}
                            </div>
                            <div className="jn-body-ft">
                              {metrics.length > 0 && (
                                <div className="jn-metrics">
                                  {metrics.map((metric) => (
                                    <span key={metric} className="jn-metric">{metric}</span>
                                  ))}
                                </div>
                              )}
                              {meta && <span className="jn-meta">{meta}</span>}
                              {isFree && (
                                <a href="/chapitres-gratuits" className="jn-read" onClick={() => track(`toc_read_${card.num}`)}>
                                  {t.chapters.freeBtnLabel}
                                </a>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      <div className="jn-foot">
        <a href="#acheter" className="btn b-gold" onClick={() => track('chapters_buy')}>{t.chapters.cta}</a>
        <a href="/chapitres-gratuits" className="btn b-out" onClick={() => track('chapters_free')}>{t.pricing.readFirst.cta}</a>
      </div>
    </section>
  )
}
