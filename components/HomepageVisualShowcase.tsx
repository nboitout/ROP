/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'
import { useLanguage } from '@/app/i18n/LanguageContext'
import type { Lang } from '@/app/i18n/translations'

const showcaseFolders: Partial<Record<Lang, string>> = {
  en: '/assets/homepage-beauties/en',
  de: '/assets/homepage-beauties/de',
  es: '/assets/homepage-beauties/es',
  it: '/assets/homepage-beauties/it',
}

function getShowcaseSlides(lang: Lang) {
  const folder = showcaseFolders[lang] ?? '/assets/homepage-beauties'

  return Array.from({ length: 10 }, (_, index) => {
    const number = String(index + 1).padStart(2, '0')
    return {
      src: `${folder}/beauty-${number}.jpg`,
      key: `${lang}-beauty-${number}`,
    }
  })
}

export default function HomepageVisualShowcase() {
  const { t, lang } = useLanguage()
  const [paused, setPaused] = useState(false)
  const showcaseSlides = getShowcaseSlides(lang)
  const loopSlides = [...showcaseSlides, ...showcaseSlides]

  return (
    <section
      className={`visual-showcase${paused ? ' is-paused' : ''}`}
      aria-labelledby="visual-showcase-title"
      role="button"
      tabIndex={0}
      aria-pressed={paused}
      onClick={() => setPaused((value) => !value)}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault()
          setPaused((value) => !value)
        }
      }}
    >
      <div className="visual-showcase-copy">
        <p className="visual-showcase-eyebrow">{t.visualShowcase.eyebrow}</p>
        <h2 id="visual-showcase-title">
          {t.visualShowcase.title}
        </h2>
        <p className="visual-showcase-body">
          {t.visualShowcase.body}
        </p>
        <p className="visual-showcase-mobile-body">
          {t.visualShowcase.mobileBody}
        </p>
        <span className="visual-showcase-control">
          {paused ? t.visualShowcase.paused : t.visualShowcase.pause}
        </span>
      </div>

      <div className="visual-showcase-frame" aria-hidden="true">
        <div className="visual-showcase-track">
          {loopSlides.map((slide, index) => (
            <figure className="visual-showcase-slide" key={`${slide.key}-${index}`}>
              <img src={slide.src} alt="" loading="lazy" decoding="async" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
