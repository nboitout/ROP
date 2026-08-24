import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { SITE_URL } from '@/lib/site'

export const metadata: Metadata = {
  title: "L'équipe · R.O.P.",
  description: "Découvrez l'équipe qui porte la Réflexothérapie Occipito-Podale : pédagogie, technologie, relation clients et développement.",
  alternates: { canonical: `${SITE_URL}/equipe` },
  openGraph: {
    title: "L'équipe · R.O.P.",
    description: 'Trois expertises réunies pour transmettre, développer et rendre accessible la méthode R.O.P.',
    url: `${SITE_URL}/equipe`,
    type: 'website',
  },
}

type TeamMember = {
  initials: string
  name: string
  role: string
  body: ReactNode[]
  photo?: string
}

const team: TeamMember[] = [
  {
    initials: 'GB',
    name: 'Guy Boitout',
    role: 'Créateur de la méthode · Responsable pédagogique',
    body: ["Guy est le créateur de la Réflexothérapie Occipito-Podale. Il en porte la vision clinique et la transmission : il structure les contenus, dirige les formations et veille à ce que la méthode reste fidèle à ses fondements, à l’anatomie et à l’expérience du praticien."],
  },
  {
    initials: 'NB',
    name: 'Nicolas Boitout',
    role: 'Direction technologique · Imagerie scientifique',
    body: ["Nicolas conçoit et pilote l’environnement numérique de la R.O.P. Il est également responsable de la production des figures anatomiques, élaborées au moyen d’un processus complexe assisté par l’IA qui associe génération, vérifications croisées et corrections afin de limiter au maximum les erreurs dans les schémas. Il partage enfin la responsabilité de la revue de la littérature neuro-anatomique, pour relier les contenus de la méthode aux données scientifiques disponibles."],
    photo: '/assets/Team/Nicolas.jpeg',
  },
  {
    initials: 'M',
    name: 'Matei Boitout',
    role: 'Relation clients · Marketing',
    body: [
      "Matei est en charge de la relation avec les lecteurs et les praticiens. Il accompagne leurs premiers échanges avec l’équipe, répond à leurs questions et contribue à les orienter vers les contenus, ressources ou formations les plus adaptés à leurs besoins.",
      "Il participe également au développement et à la mise en œuvre des actions marketing : communication autour des publications et des formations, campagnes de sensibilisation, suivi des contacts et animation de la relation avec la communauté.",
      <>À l’écoute des retours du terrain, Matei joue enfin un rôle de relais entre les utilisateurs et l’équipe. Il recueille les attentes, les questions et les suggestions afin d’améliorer en permanence l’expérience proposée et de veiller à ce que chaque interaction reste <strong>claire, humaine, réactive et utile</strong>.</>,
    ],
  },
]

export default function TeamPage() {
  return (
    <main className="team-page">
      <header className="team-header">
        <Link className="h-logo" href="/">Guy Boitout</Link>
        <Link className="team-home" href="/">← Retour à l’accueil</Link>
      </header>

      <section className="team-hero" aria-labelledby="team-title">
        <div className="lbl g">L’équipe R.O.P.</div>
        <h1 id="team-title">Trois expertises,<br /><em>une même exigence.</em></h1>
        <p>
          Faire vivre la R.O.P., c’est réunir la transmission d’une méthode construite sur plus de
          cinquante ans de pratique, une expérience numérique solide et un accompagnement attentif.
          Chacun intervient dans son domaine, au service d’un même projet : rendre la méthode claire,
          accessible et durable.
        </p>
      </section>

      <section className="team-members" aria-label="Membres de l’équipe">
        {team.map((member, index) => (
          <article className="team-card" key={member.name}>
            <div className={`team-portrait${member.photo ? ' team-portrait--photo' : ''}`}>
              {member.photo ? (
                <Image
                  src={member.photo}
                  alt={`Portrait de ${member.name}`}
                  fill
                  sizes="(max-width:640px) calc(100vw - 40px), (max-width:960px) 36vw, 33vw"
                  style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
                />
              ) : (
                <>
                  <span>{member.initials}</span>
                  <small>Portrait à venir</small>
                </>
              )}
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
        ))}
      </section>

      <section className="team-cta">
        <p>Découvrir le travail porté par l’équipe.</p>
        <div>
          <Link href="/#chapitres" className="btn b-gold">Explorer l’ouvrage</Link>
          <Link href="/#protocole" className="btn b-ghost">Découvrir la méthode</Link>
        </div>
      </section>
    </main>
  )
}
