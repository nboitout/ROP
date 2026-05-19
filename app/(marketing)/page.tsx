'use client'

import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import QuoteSlider from '@/components/QuoteSlider'
import FreeChapterForm from '@/components/FreeChapterForm'
import LanguageToggle from '@/components/LanguageToggle'
import { useLanguage } from '@/app/i18n/LanguageContext'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <main>
      {/* HEADER */}
      <header>
        <a className="h-logo" href="#">R.O.P. — Guy Boitout</a>
        <div className="h-right">
          <nav>
            <a href="#genese">{t.nav.genese}</a>
            <a href="#chapitres">{t.nav.sommaire}</a>
            <a href="#protocole">{t.nav.protocole}</a>
            <a href="#acheter">{t.nav.commander}</a>
            <a href="/chapitres-gratuits" className="n-cta">{t.nav.chapitreGratuit}</a>
          </nav>
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
              <a href="/chapitres-gratuits" className="btn b-gold">{t.hero.cta1}</a>
              <a href="#chapitres" className="btn b-ghost">{t.hero.cta2}</a>
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
                <div className="hero-gallery-kicker">{t.hero.galleryKicker}</div>
                <div className="hero-gallery-title">{t.hero.galleryTitle}</div>
              </div>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </section>

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
            <h5>{t.author.prevBooks}</h5>
            <div className="prev-r">
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-Guy-Boitout/dp/2294743814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre1.png" alt="Book 1 cover" width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap"><strong>Livre 1</strong>{t.author.viewOnAmazon}</div>
              </a>
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre2.png" alt="Book 2 cover" width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap"><strong>Livre 2</strong>{t.author.viewOnAmazon}</div>
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
            <a href="https://www.reflexo-occipitopodale.com" target="_blank" rel="noopener noreferrer" className="btn b-out">{t.author.btn1}</a>
            <a href="https://www.reflexo-occipitopodale.com/formations-réflexo-occipito-podale" target="_blank" rel="noopener noreferrer" className="btn b-out">{t.author.btn2}</a>
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

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="arch-intro">
          <div>
            <div className="lbl">{t.architecture.lbl}</div>
            <h2>{t.architecture.h2.before}<em>{t.architecture.h2.em}</em>{t.architecture.h2.after}</h2>
          </div>
          <p className="arch-desc">{t.architecture.desc}</p>
        </div>
        <div className="flow">
          {t.architecture.flow.map((fc) => (
            <div key={fc.t} className="fc">
              <div className={`fc-icon${fc.icon === '🫁' ? ' go' : ''}`}>{fc.icon}</div>
              <div className="fc-t">{fc.t}</div>
              <div className="fc-s">{fc.s}</div>
              <div className="fc-chs">
                {fc.chs.map(([label, cls]) => (
                  <span key={label} className={`fch${cls ? ` ${cls}` : ''}`}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CHAPITRES */}
      <section id="chapitres">
        <div className="ch-hd">
          <div>
            <div className="lbl">{t.chapters.lbl}</div>
            <h2>{t.chapters.h2.before}<em>{t.chapters.h2.em}</em>{t.chapters.h2.after}</h2>
          </div>
          <p className="ch-hd-d">{t.chapters.desc}</p>
        </div>
        <div className="ch-grid">
          {t.chapters.cards.map((card) => (
            <ChapterCard
              key={card.num}
              num={card.num}
              badge={
                card.variant === 'intro'
                  ? <span className="badge bi">{card.badgeLabel}</span>
                  : card.variant === 'fr'
                  ? <span className="badge bf">{card.badgeLabel}</span>
                  : <span className="badge bp">{card.badgeLabel}</span>
              }
              variant={card.variant}
              label={card.label}
              title={card.title}
              tags={card.tags}
              btnClass={card.btnClass}
              btnLabel={card.btnLabel ?? t.chapters.defaultBtn}
              included={t.chapters.included}
              includedSub={t.chapters.includedSub}
            >
              {card.body}
            </ChapterCard>
          ))}
        </div>
      </section>

      {/* PROTOCOLE */}
      <section id="protocole">
        <div className="lbl c">{t.protocole.lbl}</div>
        <h2 className="on-dk">
          {t.protocole.h2.before}<em>{t.protocole.h2.em}</em>{t.protocole.h2.after}
        </h2>
        <p style={{ fontSize: '.93rem', color: 'rgba(245,240,232,.74)', maxWidth: 580, lineHeight: 1.8, marginTop: -6 }}>
          {t.protocole.p}
        </p>
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
                  <>
                    <div key={step} className="hier-step">
                      <div className="hier-step-n">{t.protocole.hierarchy.stepOrdinals[i]}</div>
                      <div className="hier-step-t">{step}</div>
                    </div>
                    {i < 2 && <div key={`arr-${i}`} className="hier-arr">→</div>}
                  </>
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

      {/* CITATIONS */}
      <section id="citations">
        <div className="lbl c ctr">{t.citations.lbl}</div>
        <h2 className="on-dk" style={{ textAlign: 'center' }}>
          {t.citations.h2.before}<em>{t.citations.h2.em}</em>
        </h2>
        <QuoteSlider />
      </section>

      {/* PRICING */}
      <section id="acheter">
        <div className="lbl ctr">{t.pricing.lbl}</div>
        <h2 style={{ textAlign: 'center' }}>
          {t.pricing.h2.before}<em>{t.pricing.h2.em}</em>{t.pricing.h2.after}
        </h2>
        <p>{t.pricing.p}</p>
        <div className="pg">
          <div className="pc star" data-badge={t.pricing.recommended}>
            <div className="pc-n">{t.pricing.plan1.name}</div>
            <p className="pc-d">{t.pricing.plan1.desc}</p>
            <div className="pc-a"><span className="pc-c">€</span>{t.pricing.plan1.price}</div>
            <div className="pc-s">{t.pricing.plan1.sub}</div>
            <ul className="pc-l">
              {t.pricing.plan1.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#acheter" className="btn b-gold" style={{ width: '100%', textAlign: 'center' }}>{t.pricing.plan1.cta}</a>
          </div>
          <div className="pc">
            <div className="pc-n">{t.pricing.plan2.name}</div>
            <p className="pc-d">{t.pricing.plan2.desc}</p>
            <div className="pc-a"><span className="pc-c">€</span>{t.pricing.plan2.price}</div>
            <div className="pc-s">{t.pricing.plan2.sub}</div>
            <ul className="pc-l">
              {t.pricing.plan2.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <a href="#acheter" className="btn b-out" style={{ width: '100%', textAlign: 'center' }}>{t.pricing.plan2.cta}</a>
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

/* ── Shared chapter card component ── */
function ChapterCard({
  num, badge, variant, label, title, tags, btnClass = 'b-gold', btnLabel = 'Voir le livre →',
  included, includedSub, children,
}: {
  num: string
  badge: React.ReactNode
  variant?: 'intro' | 'fr'
  label: string
  title: string
  tags: string[]
  btnClass?: string
  btnLabel?: string
  included: string
  includedSub: string
  children: React.ReactNode
}) {
  return (
    <div className={`cc${variant ? ` ${variant}` : ''}`}>
      <div className="cc-top">
        <div className="cc-n">{num}</div>
        {badge}
      </div>
      <div className="cc-body">
        <div className="cc-lbl">{label}</div>
        <h3 className="cc-title">{title}</h3>
        <p className="cc-txt">{children}</p>
        <div className="cc-tags">
          {tags.map((tag) => <span key={tag} className="ct">{tag}</span>)}
        </div>
      </div>
      <div className="cc-ft">
        <div className="cc-pr">{included}<small>{includedSub}</small></div>
        <a href="#acheter" className={`btn ${btnClass}`} style={{ padding: '8px 18px', fontSize: '.67rem' }}>{btnLabel}</a>
      </div>
    </div>
  )
}
