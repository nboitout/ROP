/* eslint-disable @next/next/no-img-element */
'use client'

import { useState } from 'react'

const showcaseSlides = Array.from({ length: 10 }, (_, index) => {
  const number = String(index + 1).padStart(2, '0')
  return {
    src: `/assets/homepage-beauties/beauty-${number}.jpg`,
    key: `beauty-${number}`,
  }
})

export default function HomepageVisualShowcase() {
  const [paused, setPaused] = useState(false)
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
        <p className="visual-showcase-eyebrow">Atlas visuel</p>
        <h2 id="visual-showcase-title">
          Plus de 400 visuels pour relier l’anatomie, la clinique et le geste.
        </h2>
        <p className="visual-showcase-body">
          Une sélection de planches issues des chapitres donne un aperçu de la richesse graphique du livre:
          cartes réflexes, schémas anatomiques, synthèses cliniques et repères thérapeutiques.
        </p>
        <span className="visual-showcase-control">
          {paused ? 'Carousel en pause' : 'Cliquer pour mettre en pause'}
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
