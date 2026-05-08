'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const slides = [
  { src: '/assets/Guy1.jpeg', alt: 'Guy Boitout photo 1' },
  { src: '/assets/Guy2.jpeg', alt: 'Guy Boitout photo 2' },
  { src: '/assets/Guy3.jpeg', alt: 'Guy Boitout en formation' },
  { src: '/assets/Guy4.jpeg', alt: 'Guy Boitout photo 4' },
]

export default function HeroCarousel() {
  const [active, setActive] = useState(2)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const reducedMotion =
    typeof window !== 'undefined'
      ? matchMedia('(prefers-reduced-motion: reduce)').matches
      : false

  function startCarousel(from: number) {
    if (timerRef.current) clearInterval(timerRef.current)
    if (reducedMotion) return
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length)
    }, 4200)
    void from
  }

  useEffect(() => {
    startCarousel(active)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  function goTo(index: number) {
    setActive(index)
    startCarousel(index)
  }

  return (
    <div className="hero-carousel">
      <div className="hero-main">
        {slides.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="(max-width:960px) 100vw, 46vw"
            className={i === active ? 'active' : ''}
            priority={i === 2}
          />
        ))}
      </div>
      <div className="hero-thumbs">
        {slides.map((slide, i) => (
          <button
            key={slide.src}
            className={`hero-thumb${i === active ? ' is-active' : ''}`}
            type="button"
            aria-label={`Afficher photo ${i + 1}`}
            onClick={() => goTo(i)}
          >
            <div className="hero-thumb-frame">
              <Image src={slide.src} alt="" fill sizes="120px" />
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
