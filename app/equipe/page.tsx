import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import LanguageToggle from '@/components/LanguageToggle'
import { getServerLang } from '@/app/i18n/serverLang'
import { SITE_URL } from '@/lib/site'
import { alternateOpenGraphLocales, languageAlternates, localizedHref, OPEN_GRAPH_LOCALES } from '@/app/i18n/locale'
import { teamPageCopy } from './copy'

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}): Promise<Metadata> {
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const copy = (teamPageCopy[lang] ?? teamPageCopy.en).metadata
  const url = `${SITE_URL}${localizedHref('/equipe', lang)}`
  return {
    title: copy.title,
    description: copy.description,
    alternates: { canonical: url, languages: languageAlternates('/equipe') },
    openGraph: {
      title: copy.title,
      description: copy.description,
      url,
      locale: OPEN_GRAPH_LOCALES[lang],
      alternateLocale: alternateOpenGraphLocales(lang),
      type: 'website',
    },
  }
}

type TeamVisual = {
  photo: string
  photoPosition?: string
  photoContained?: boolean
}

const teamVisuals: TeamVisual[] = [
  { photo: '/assets/Team/Guy.jpg', photoPosition: 'center 10%' },
  { photo: '/assets/Team/Nicolas.jpeg' },
  { photo: '/assets/Team/Matei.jpeg', photoPosition: 'center 52%', photoContained: true },
]

export default async function TeamPage({
  searchParams,
}: {
  searchParams: Promise<{ lang?: string }>
}) {
  const { lang: langParam } = await searchParams
  const lang = await getServerLang(langParam)
  const copy = teamPageCopy[lang] ?? teamPageCopy.en
  const homeHref = `/?lang=${lang}`

  return (
    <main className="team-page" lang={lang}>
      <header className="team-header">
        <Link className="h-logo" href={homeHref}>Guy Boitout</Link>
        <div className="team-header-actions">
          <Link className="team-home" href={homeHref}>← {copy.home}</Link>
          <LanguageToggle />
        </div>
      </header>

      <section className="team-hero" aria-labelledby="team-title">
        <div className="lbl g">{copy.eyebrow}</div>
        <h1 id="team-title">{copy.titleBefore}<br className="team-title-break" /> <em>{copy.titleEmphasis}</em></h1>
        <p>{copy.intro}</p>
      </section>

      <section className="team-members" aria-label={copy.membersLabel}>
        {copy.members.map((member, index) => {
          const visual = teamVisuals[index]
          return (
          <article className="team-card" key={member.name}>
            <div className={`team-portrait team-portrait--photo${visual.photoContained ? ' team-portrait--contained' : ''}`}>
              <Image
                src={visual.photo}
                alt={copy.portraitAlt(member.name)}
                fill
                sizes="(max-width:640px) calc(100vw - 40px), (max-width:960px) 36vw, 33vw"
                style={{
                  objectFit: visual.photoContained ? 'contain' : 'cover',
                  objectPosition: visual.photoPosition ?? 'center 28%',
                  transform: visual.photoContained ? 'translateY(-12%) scale(1.3)' : undefined,
                }}
              />
            </div>
            <div className="team-card-copy">
              <span className="team-number">0{index + 1}</span>
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <div className="team-bio">
                {member.body.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          </article>
          )
        })}
      </section>

      <section className="team-cta">
        <p>{copy.cta}</p>
        <div>
          <Link href={`/?lang=${lang}#chapitres`} className="btn b-gold">{copy.exploreBook}</Link>
          <Link href={`/?lang=${lang}#protocole`} className="btn b-ghost">{copy.discoverMethod}</Link>
        </div>
      </section>
    </main>
  )
}
