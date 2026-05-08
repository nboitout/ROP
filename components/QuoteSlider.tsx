'use client'

import { useState } from 'react'

const quotes = [
  {
    text: '"La mobilité viscérale est rendue possible par quatre grands moteurs : le système nerveux somatique, le système nerveux autonome, la motilité intrinsèque et les biorythmes. Leur interaction définit le terrain clinique du praticien."',
    source: 'Chapitre 1 — Généralités',
  },
  {
    text: '"Force et trituration sont proscrites : on perd la lecture fine, les repères osseux deviennent moins nets, et on crée un stress tissulaire inutile. Le geste juste, c\'est la pression progressive, brève, orientée."',
    source: 'Chapitre 2 — Protocole R.O.P.',
  },
  {
    text: '"Notre rôle en R.O.P. est de favoriser la régulation du nerf vague. Ce qui se passe dans le corps peut influencer et s\'accompagner de variations de notre état mental et émotionnel."',
    source: 'Chapitre 6 — Théorie polyvagale',
  },
]

export default function QuoteSlider() {
  const [index, setIndex] = useState(0)

  function prev() { setIndex((i) => (i - 1 + quotes.length) % quotes.length) }
  function next() { setIndex((i) => (i + 1) % quotes.length) }

  return (
    <div className="qt-wrap">
      <div className="qt-stage">
        <div className="qt-row">
          {quotes.map((q, i) => (
            <div key={i} className={`qt${i === index ? ' active' : ''}`} aria-hidden={i !== index}>
              <p className="qt-t">{q.text}</p>
              <span className="qt-s">{q.source}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="qt-controls" aria-label="Navigation des citations">
        <div className="qt-nav">
          <button className="qt-btn" type="button" onClick={prev} aria-label="Citation précédente">←</button>
          <button className="qt-btn" type="button" onClick={next} aria-label="Citation suivante">→</button>
        </div>
        <div className="qt-dots" aria-label="Sélection des citations">
          {quotes.map((_, i) => (
            <button
              key={i}
              className={`qt-dot${i === index ? ' active' : ''}`}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Citation ${i + 1}`}
              aria-current={i === index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
