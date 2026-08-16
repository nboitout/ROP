import type { Metadata } from 'next'
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

const team = [
  {
    initials: 'GB',
    name: 'Guy Boitout',
    role: 'Créateur de la méthode · Responsable pédagogique',
    body: "Guy est le créateur de la Réflexothérapie Occipito-Podale. Il en porte la vision clinique et la transmission : il structure les contenus, dirige les formations et veille à ce que la méthode reste fidèle à ses fondements, à l’anatomie et à l’expérience du praticien.",
  },
  {
    initials: 'NB',
    name: 'Nicolas Boitout',
    role: 'Direction technologique',
    body: "Nicolas conçoit et pilote l’environnement numérique de la R.O.P. Il transforme les contenus et les besoins de l’Institut en outils simples, fiables et accessibles — de l’expérience de lecture à l’infrastructure qui accompagne le développement du projet.",
  },
  {
    initials: 'M',
    name: 'Matei',
    role: 'Relation clients · Marketing',
    body: "Matei accompagne les lecteurs, les praticiens et les futurs participants aux formations. Il coordonne la relation clients et le marketing, recueille les besoins du terrain et veille à ce que chaque échange avec l’équipe soit clair, humain et utile.",
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
            <div className="team-portrait" aria-hidden="true">
              <span>{member.initials}</span>
              <small>Portrait à venir</small>
            </div>
            <div className="team-card-copy">
              <span className="team-number">0{index + 1}</span>
              <h2>{member.name}</h2>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.body}</p>
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
