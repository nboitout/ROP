'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function QuoteSlider() {
  const { t } = useLanguage()
  const [index, setIndex] = useState(0)

  function prev() { setIndex((i) => (i - 1 + t.quotes.length) % t.quotes.length) }
  function next() { setIndex((i) => (i + 1) % t.quotes.length) }

  return (
    <div className="qt-wrap">
      <div className="qt-stage">
        <div className="qt-row">
          {t.quotes.map((q, i) => (
            <div key={i} className={`qt${i === index ? ' active' : ''}`} aria-hidden={i !== index}>
              <p className="qt-t">{q.text}</p>
              <span className="qt-s">{q.source}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="qt-controls" aria-label={t.quoteNav.label}>
        <div className="qt-nav">
          <button className="qt-btn" type="button" onClick={prev} aria-label={t.quoteNav.prev}>←</button>
          <button className="qt-btn" type="button" onClick={next} aria-label={t.quoteNav.next}>→</button>
        </div>
        <div className="qt-dots" aria-label={t.quoteNav.dotsLabel}>
          {t.quotes.map((_, i) => (
            <button
              key={i}
              className={`qt-dot${i === index ? ' active' : ''}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={t.quoteNav.dot(i)}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
