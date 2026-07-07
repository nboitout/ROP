'use client'

import { useState } from 'react'
import Image from 'next/image'
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
        <button
          type="button"
          className="visual-showcase-control"
          aria-pressed={paused}
          onClick={() => setPaused((value) => !value)}
        >
          {paused ? t.visualShowcase.paused : t.visualShowcase.pause}
        </button>
      </div>

      <div className="visual-showcase-frame" aria-hidden="true">
        <div className="visual-showcase-track">
          {loopSlides.map((slide, index) => (
            // Second copy exists only to make the drift loop seamless; under
            // prefers-reduced-motion the strip is swiped by hand and the
            // duplicates are hidden.
            <figure
              className={`visual-showcase-slide${index >= showcaseSlides.length ? ' visual-showcase-slide--dup' : ''}`}
              key={`${slide.key}-${index}`}
            >
              {/* Eager on purpose: the track drifts via a CSS transform, so
                  lazy loading fires too late and half-decoded slides scroll
                  into view. next/image keeps the eager cost small by serving
                  resized AVIF/WebP instead of the raw 1440px JPEGs. */}
              <Image
                src={slide.src}
                alt=""
                fill
                loading="eager"
                sizes="(max-width:720px) 82vw, (max-width:1545px) 22vw, 340px"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
