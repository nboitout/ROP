'use client'

import { Fragment } from 'react'
import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import HomepageVisualShowcase from '@/components/HomepageVisualShowcase'
import BookJourney from '@/components/BookJourney'
import QuoteSlider from '@/components/QuoteSlider'
import FreeChapterForm from '@/components/FreeChapterForm'
import BookNotifyForm from '@/components/BookNotifyForm'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/app/i18n/LanguageContext'
import { getSessionId } from '@/lib/session'

export default function HomePage() {
  const { t, lang } = useLanguage()

  function trackCta(cta: string) {
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chapter: 'home', event: 'cta_click', data: { cta }, lang, sessionId: getSessionId() }),
      keepalive: true,
    }).catch(() => {})
  }

  return (
    <main>
      {/* HEADER */}
      <header>
        <a className="h-logo" href="#">Guy Boitout</a>
        <div className="h-right">
          <nav>
            <a href="#genese">{t.nav.genese}</a>
            <a href="#chapitres">{t.nav.sommaire}</a>
            <a href="#protocole">{t.nav.protocole}</a>
            <a href="#acheter">{t.nav.commander}</a>
            <a href="/chapitres-gratuits" className="n-cta">{t.nav.chapitreGratuit}</a>
          </nav>
          <a href="/chapitres-gratuits" className="h-mobile-cta" onClick={() => trackCta('header_mobile_free_chapters')}>
            {t.nav.chapitreGratuit}
          </a>
          <LanguageToggle />
        </div>
      </header>

      {/* HERO */}
      <section id="hero">
        <div className="hl">
          <div className="hl-orb" />
          <div className="hl-copy">
            <span className="hl-badge">{t.hero.badge}</span>
            <h1>
              {t.hero.h1.before}{' '}
              <em>{t.hero.h1.em}</em>
              {t.hero.h1.after}
            </h1>
            <p className="hl-sub">{t.hero.sub}</p>
            <div className="hl-tags">
              {t.hero.tags.map((tag) => (
                <span key={tag} className="hl-tag">{tag}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="/chapitres-gratuits" className="btn b-gold" onClick={() => trackCta('hero_chapters')}>{t.hero.cta1}</a>
              <a href="#chapitres" className="btn b-ghost" onClick={() => trackCta('hero_summary')}>{t.hero.cta2}</a>
            </div>
            <div className="hl-author">
              <div className="hl-name">Guy Boitout</div>
              <div className="hl-role">{t.hero.role}</div>
            </div>
          </div>
        </div>
        <div className="hr">
          <div className="hero-gallery">
            <div className="hero-gallery-top">
              <div>
                <div className="hero-gallery-title">{t.hero.galleryTitle}</div>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

      <HomepageVisualShowcase />

      {/* AUTEUR */}
      <section id="auteur">
        <div>
          <div className="ap">
            <Image
              src="/assets/photo-guy.png"
              alt="Guy Boitout"
              fill
              sizes="(max-width:960px) 100vw, 360px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="ap-b" />
          </div>
          <div className="prev">
            <h5>{t.author.trilogyLbl}</h5>
            <div className="prev-r">
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-Guy-Boitout/dp/2294743814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre1.png" alt={t.author.books[0].title} width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap">
                  <strong>{t.author.books[0].label}</strong>
                  {t.author.books[0].title}
                  <span className="pb-pub">{t.author.books[0].publisher}</span>
                </div>
              </a>
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre2.png" alt={t.author.books[1].title} width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap">
                  <strong>{t.author.books[1].label}</strong>
                  {t.author.books[1].title}
                  <span className="pb-pub">{t.author.books[1].publisher}</span>
                </div>
              </a>
              <a className="pb" href="#acheter">
                <div className="pb-soon">{t.author.comingSoon}</div>
                <div className="pb-cap">
                  <strong>{t.author.books[2].label}</strong>
                  {t.author.books[2].title}
                  <span className="pb-pub">{t.author.books[2].publisher}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="ab">
          <div className="lbl">{t.author.lbl}</div>
          <h2>Guy <em>Boitout</em></h2>
          <div className="chips">
            {t.author.chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          {t.author.bio.map((p, i) => <p key={i}>{p}</p>)}
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }}>
            <a href="https://www.reflexo-occipitopodale.com/accueil" target="_blank" rel="noopener noreferrer" className="btn b-out" onClick={() => trackCta('author_institut')}>{t.author.btn1}</a>
            <a href="https://www.reflexo-occipitopodale.com/formations-réflexo-occipito-podale" target="_blank" rel="noopener noreferrer" className="btn b-out" onClick={() => trackCta('author_formations')}>{t.author.btn2}</a>
          </div>
        </div>
      </section>

      {/* GENÈSE */}
      <section id="genese">
        <div className="gen-text">
          <div className="lbl c">{t.genese.lbl}</div>
          <h2 className="on-dk">{t.genese.h2.before}<em>{t.genese.h2.em}</em></h2>
          <p>{t.genese.p1}</p>
          <p>{t.genese.p2}</p>
          <div className="gen-timeline">
            {t.genese.timeline.map((e) => (
              <div key={e.yr} className="gen-evt">
                <div className="gen-yr">{e.yr}</div>
                <div className="gen-lbl">{e.lbl}</div>
                <div className="gen-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="gen-quote">
          <blockquote>{t.genese.quote}</blockquote>
          <cite>{t.genese.cite}</cite>
        </div>
      </section>

      {/* STATS */}
      <section id="stats">
        <div className="stats-row">
          {t.stats.map((s) => (
            <div key={s.n} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">
                <span>{s.l[0]}</span><br /><span>{s.l[1]}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SOMMAIRE — FIL CONDUCTEUR */}
      <BookJourney />

      {/* PROTOCOLE */}
      <section id="protocole">
        <h2 className="on-dk">
          {t.protocole.h2.before}<em>{t.protocole.h2.em}</em>{t.protocole.h2.after}
        </h2>
        <div className="protocol-intro">
          <span>{t.protocole.p}</span>
          {' '}
          <a href="/lecture/traitement-rop" onClick={() => trackCta('protocol_free_chapter')}>{t.protocole.freeCta}</a>
        </div>
        <div className="protocol-links">
          <a href="https://www.reflexo-occipitopodale.com/accueil" target="_blank" rel="noopener noreferrer" className="btn b-out" onClick={() => trackCta('protocol_institut')}>{t.author.btn1}</a>
          <a href="https://www.reflexo-occipitopodale.com/formations-r%C3%A9flexo-occipito-podale" target="_blank" rel="noopener noreferrer" className="btn b-out" onClick={() => trackCta('protocol_formations')}>{t.author.btn2}</a>
        </div>
        <div className="prot-grid">
          <div>
            {t.protocole.steps.map((s) => (
              <div key={s.n} className="pstep">
                <div className="pstep-num">{s.n}</div>
                <div>
                  <div className="pstep-t">{s.t}</div>
                  <div className="pstep-d">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="prot-card">
              <div className="prot-card-t">{t.protocole.neurophysio.t}</div>
              <ul className="prot-card-items">
                {t.protocole.neurophysio.items.map((item, i) => {
                  const bold = t.protocole.neurophysio.boldItems[i]
                  if (bold && item.startsWith(bold)) {
                    return (
                      <li key={i}>
                        <strong style={{ color: 'rgba(245,240,232,.8)' }}>{bold}</strong>
                        {item.slice(bold.length)}
                      </li>
                    )
                  }
                  return <li key={i}>{item}</li>
                })}
              </ul>
            </div>
            <div className="prot-card">
              <div className="prot-card-t">{t.protocole.hierarchy.t}</div>
              <p style={{ fontSize: '.79rem', color: 'rgba(245,240,232,.66)', marginBottom: 12, lineHeight: 1.5 }}>
                {t.protocole.hierarchy.p}
              </p>
              <div className="hier-row">
                {t.protocole.hierarchy.steps.map((step, i) => (
                  <Fragment key={`${i}-${step}`}>
                    <div className="hier-step">
                      <div className="hier-step-n">{t.protocole.hierarchy.stepOrdinals[i]}</div>
                      <div className="hier-step-t">{step}</div>
                    </div>
                    {i < 2 && <div className="hier-arr">→</div>}
                  </Fragment>
                ))}
              </div>
            </div>
            <div className="prot-card">
              <div className="prot-card-t">{t.protocole.errors.t}</div>
              <ul className="prot-card-items">
                {t.protocole.errors.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PÉDAGOGIE */}
      <section id="pedagogie">
        <div className="lbl">{t.pedagogie.lbl}</div>
        <h2>{t.pedagogie.h2.before}<em>{t.pedagogie.h2.em}</em>{t.pedagogie.h2.after}</h2>
        <div className="ped-grid">
          {t.pedagogie.cards.map((c) => (
            <div key={c.t} className="ped-c">
              <div className="ped-ico">{c.ico}</div>
              <div className="ped-t">{c.t}</div>
              <p className="ped-d">{c.d}</p>
              <div className="ped-tags">
                {c.tags.map((tag) => <span key={tag} className="ped-tag">{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CITATIONS */}
      <section id="citations">
        <div className="lbl c ctr">{t.citations.lbl}</div>
        <h2 className="on-dk" style={{ textAlign: 'center' }}>
          {t.citations.h2.before}<em>{t.citations.h2.em}</em>
        </h2>
        <QuoteSlider />
      </section>

      {/* FREE CHAPTER FORM */}
      <section id="acces-libre">
        <div className="fl">
          <div className="lbl g">{t.freeChapter.lbl}</div>
          <h2 className="on-dk">
            {t.freeChapter.h2.before.split('\n').map((line, i) => (
              i === 0 ? <span key={i}>{line}<br /></span> : <em key={i}>{line || t.freeChapter.h2.em}</em>
            ))}
          </h2>
          <p>{t.freeChapter.p1}</p>
          <p>{t.freeChapter.p2}</p>
          <span className="fl-note">{t.freeChapter.note}</span>
        </div>
        <div className="fcard">
          <FreeChapterForm />
        </div>
      </section>

      {/* PRICING */}
      <section id="acheter">
        <div className="lbl ctr">{t.pricing.lbl}</div>
        <h2 style={{ textAlign: 'center' }}>
          {t.pricing.h2.before}<em>{t.pricing.h2.em}</em>{t.pricing.h2.after}
        </h2>
        <p>{t.pricing.p}</p>
        <div className="pricing-readfirst">
          <p className="pricing-readfirst-eyebrow">{t.pricing.readFirst.eyebrow}</p>
          <p className="pricing-readfirst-title">{t.pricing.readFirst.title}</p>
          <p className="pricing-readfirst-sub">{t.pricing.readFirst.sub}</p>
          <a href="/chapitres-gratuits" className="btn b-gold" style={{ display: 'inline-block' }} onClick={() => trackCta('pricing_readfirst')}>{t.pricing.readFirst.cta}</a>
        </div>
        <div className="pg">
          <div className="pc">
            <div className="pc-n">{t.pricing.plan1.name}</div>
            <p className="pc-d">{t.pricing.plan1.desc}</p>
            <div className="pc-a"><span className="pc-c">€</span>{t.pricing.plan1.price}</div>
            <div className="pc-s">{t.pricing.plan1.sub}</div>
            <ul className="pc-l">
              {t.pricing.plan1.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#notify" className="btn b-out" style={{ width: '100%', textAlign: 'center' }} onClick={() => trackCta('pricing_notify')}>{t.pricing.plan1.cta}</a>
          </div>
          <div className="pc star" data-badge={t.pricing.recommended}>
            <div className="pc-n">{t.pricing.plan2.name}</div>
            <p className="pc-d">{t.pricing.plan2.desc}</p>
            <div className="pc-a"><span className="pc-c">€</span>{t.pricing.plan2.price}</div>
            <div className="pc-s">{t.pricing.plan2.sub}</div>
            <ul className="pc-l">
              {t.pricing.plan2.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#notify" className="btn b-out" style={{ width: '100%', textAlign: 'center' }} onClick={() => trackCta('pricing_notify')}>{t.pricing.plan2.cta}</a>
          </div>
          <div className="pc">
            <div className="pc-n">{t.pricing.plan3.name}</div>
            <p className="pc-d">{t.pricing.plan3.desc}</p>
            <div className="pc-a"><span className="pc-c">€</span>{t.pricing.plan3.price}</div>
            <div className="pc-s">{t.pricing.plan3.sub}</div>
            <ul className="pc-l">
              {t.pricing.plan3.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#notify" className="btn b-out" style={{ width: '100%', textAlign: 'center' }} onClick={() => trackCta('pricing_notify')}>{t.pricing.plan3.cta}</a>
          </div>
        </div>

        <div id="notify" className="cr-end" style={{ marginTop: 28, paddingTop: 0, borderTop: 'none' }}>
          <div className="cr-end-card">
            <p className="cr-end-eyebrow">{t.pricing.notify.eyebrow}</p>
            <h3 className="cr-end-title">{t.pricing.notify.title}</h3>
            <p className="cr-end-book"><em>{t.pricing.notify.book}</em></p>
            <p className="cr-end-body">{t.pricing.notify.body}</p>
            <BookNotifyForm labels={t.pricing.notify.form} source="book-notify-pricing" />
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="f-br">{t.footer.title}</div>
          <p>{t.footer.p}</p>
        </div>
        <div className="f-bot">
          <span>{t.footer.copy}</span>
        </div>
      </footer>

    </main>
  )
}
