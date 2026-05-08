import Image from 'next/image'
import HeroCarousel from '@/components/HeroCarousel'
import QuoteSlider from '@/components/QuoteSlider'
import FreeChapterForm from '@/components/FreeChapterForm'

export default function HomePage() {
  return (
    <main>
      {/* HEADER */}
      <header>
        <a className="h-logo" href="#">R.O.P. — Guy Boitout</a>
        <nav>
          <a href="#genese">Genèse</a>
          <a href="#chapitres">Sommaire</a>
          <a href="#protocole">Protocole</a>
          <a href="#acces-libre">Accès libre</a>
          <a href="#acheter">Commander</a>
          <a href="#acces-libre" className="n-cta">Chapitre gratuit</a>
        </nav>
      </header>

      {/* HERO */}
      <section id="hero">
        <div className="hl">
          <div className="hl-orb" />
          <div className="hl-copy">
            <span className="hl-badge">3ᵉ ouvrage · Institut R.O.P. · Guy Boitout</span>
            <h1>
              Réflexothérapie occipito-podale et viscères des cavités{' '}
              <em>abdominale</em> et pelvienne
            </h1>
            <p className="hl-sub">
              Système nerveux, viscères &amp; stress — une lecture clinique en Réflexologie Occipito-Podale
            </p>
            <div className="hl-tags">
              {['Mobilité viscérale','Système nerveux central','Système nerveux autonome','Mécanisme de stress','Diaphragme · Estomac · Duodénum','Protocole R.O.P.'].map((t) => (
                <span key={t} className="hl-tag">{t}</span>
              ))}
            </div>
            <div className="hero-ctas">
              <a href="#acces-libre" className="btn b-gold">Lire un chapitre gratuit</a>
              <a href="#chapitres" className="btn b-ghost">Voir le sommaire</a>
            </div>
            <div className="hl-author">
              <div className="hl-name">Guy Boitout</div>
              <div className="hl-role">Réflexothérapeute · Ostéopathe · Fondateur de la R.O.P.</div>
            </div>
          </div>
        </div>
        <div className="hr">
          <div className="hero-gallery">
            <div className="hero-gallery-top">
              <div>
                <div className="hero-gallery-kicker">Galerie de l&apos;auteur</div>
                <div className="hero-gallery-title">Guy Boitout en formation, en transmission et en pratique.</div>
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
              alt="Guy Boitout présentant la Réflexothérapie Occipito-Podale"
              fill
              sizes="(max-width:960px) 100vw, 360px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
            <div className="ap-b" />
          </div>
          <div className="prev">
            <h5>Ouvrages précédents</h5>
            <div className="prev-r">
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-Guy-Boitout/dp/2294743814"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre1.png" alt="Couverture du Livre 1 de Guy Boitout" width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap"><strong>Livre 1</strong>Voir sur Amazon</div>
              </a>
              <a
                className="pb"
                href="https://www.amazon.fr/-/en/R%C3%A9flexoth%C3%A9rapie-occipito-podale-syst%C3%A8me-neuro-m%C3%A9ning%C3%A9-Boitout/dp/2294775791"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src="/Livre2.png" alt="Couverture du Livre 2 de Guy Boitout" width={200} height={267} style={{ width: '100%', height: 'auto' }} />
                <div className="pb-cap"><strong>Livre 2</strong>Voir sur Amazon</div>
              </a>
            </div>
          </div>
        </div>
        <div className="ab">
          <div className="lbl">L&apos;auteur</div>
          <h2>Guy <em>Boitout</em></h2>
          <div className="chips">
            {['Réflexothérapeute','Ostéopathe','Fondateur R.O.P.','Formateur certifié'].map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
          <p>
            Guy Boitout est le fondateur de la Réflexologie Occipito-Podale (R.O.P.), une technique de massage basée sur la représentation tridimensionnelle du corps sur le pied et l&apos;occiput. Depuis plus de trente ans, il enseigne et diffuse cette approche à travers l&apos;Institut de Formation R.O.P., basé à Sully-sur-Loire.
          </p>
          <p>
            Kinésithérapeute de formation, il découvre la réflexologie (méthode Ingham) en 1978, puis l&apos;ostéopathie viscérale avec Jean-Pierre Barral — deux étapes décisives qui l&apos;amèneront, avec Jean-Pierre Vadala, à créer la cartographie réflexe R.O.P. en 3D, publiée aux Éditions Elsevier-Masson.
          </p>
          <p>
            Ses formations sont agréées pour la formation continue (numéro d&apos;agrément 24450434645, préfecture du Centre-Val de Loire) et s&apos;adressent aux réflexothérapeutes, ostéopathes, kinésithérapeutes et professionnels de santé.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 14 }}>
            <a href="https://www.reflexo-occipitopodale.com" target="_blank" rel="noopener noreferrer" className="btn b-out">Site de l&apos;Institut R.O.P. →</a>
            <a href="https://www.reflexo-occipitopodale.com/formations-réflexo-occipito-podale" target="_blank" rel="noopener noreferrer" className="btn b-out">Les formations →</a>
          </div>
        </div>
      </section>

      {/* GENÈSE */}
      <section id="genese">
        <div className="gen-text">
          <div className="lbl c">Genèse de l&apos;ouvrage</div>
          <h2 className="on-dk">Un parcours de <em>trente ans</em></h2>
          <p>Ce troisième volume s&apos;inscrit dans la continuité de ce qui fait l&apos;originalité de la Réflexothérapie Occipito-Podale : une représentation globale du corps en 3D sous la forme d&apos;un bébé en position fœtale dans les pieds, les zones réflexes occipitales, et une référence constante à l&apos;anatomie et à la physiologie.</p>
          <p>Après un premier livre consacré au système ostéo-musculo-articulaire et un deuxième centré sur les nerfs somatiques spinaux et crâniens, cet ouvrage aborde le système nerveux autonome, le mécanisme de stress et les viscères abdominaux — le cœur invisible de la régulation du corps.</p>
          <div className="gen-timeline">
            {[
              { yr: '1978', lbl: 'Première rencontre', desc: "Découverte de la réflexologie (méthode Ingham) — première étape décisive pour comprendre les troubles fonctionnels reliant le rachis et le système nerveux." },
              { yr: '1980s', lbl: "L'ostéopathie viscérale", desc: "Jean-Pierre Barral montre que le système viscéral est non seulement manipulable, mais qu'en lui rendant sa mobilité primitive, on peut restaurer la mobilité de la colonne vertébrale." },
              { yr: 'R.O.P.', lbl: 'Création de la méthode', desc: "Avec Jean-Pierre Vadala, Guy Boitout synthétise réflexologie et ostéopathie viscérale en une cartographie réflexe originale en 3D, publiée aux Éditions Elsevier-Masson." },
            ].map((e) => (
              <div key={e.yr} className="gen-evt">
                <div className="gen-yr">{e.yr}</div>
                <div className="gen-lbl">{e.lbl}</div>
                <div className="gen-desc">{e.desc}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="gen-quote">
          <blockquote>&ldquo;Il ne pouvait en être autrement en réflexologie. Comme en ostéopathie viscérale, le système neurovégétatif est au cœur de tout : c&apos;est lui qui gouverne, régule et restaure — et c&apos;est lui que la R.O.P. cherche à atteindre en priorité.&rdquo;</blockquote>
          <cite>— Guy Boitout · Préface du 3ᵉ ouvrage</cite>
        </div>
      </section>

      {/* STATS */}
      <section id="stats">
        <div className="stats-row">
          {[
            { n: '3', l: 'Livres publiés\naux Éd. Elsevier-Masson' },
            { n: '12', l: 'Chapitres\nprésentés sur ce site' },
            { n: '20+', l: 'Chapitres\ndans l\'ouvrage complet' },
            { n: '1978', l: 'Début du parcours\nréflexologique' },
          ].map((s) => (
            <div key={s.n} className="stat">
              <div className="stat-n">{s.n}</div>
              <div className="stat-l">{s.l.split('\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section id="architecture">
        <div className="arch-intro">
          <div>
            <div className="lbl">Architecture de l&apos;ouvrage</div>
            <h2>Un fil conducteur <em>progressif</em></h2>
          </div>
          <p className="arch-desc">De la préface personnelle aux viscères abdominaux, l&apos;ouvrage construit une progression logique en quatre grandes parties. Chaque couche s&apos;appuie sur la précédente pour offrir au praticien une compréhension clinique complète et opérationnelle.</p>
        </div>
        <div className="flow">
          {[
            { icon: '✍️', t: 'Introduction', s: 'Genèse de la méthode, trajectoire personnelle et ADN de la R.O.P.', chs: [['Ch. 0 · Préface',''],['Ch. 1 · Généralités',''],['Ch. 2 · Protocole','']] },
            { icon: '🧠', t: 'Systèmes nerveux', s: 'SNC (trois cerveaux, tronc cérébral) et SNA (parasympathique, sympathique, nerf vague).', chs: [['Ch. 3 · SNC',''],['Ch. 4 · SNA','']] },
            { icon: '⚖️', t: 'Stress & Régulation', s: 'Mécanisme de stress, théorie polyvagale et régulation neuro-végétative.', chs: [['Ch. 5 · Stress ✦','fr'],['Ch. 6 · Polyvagale','']] },
            { icon: '🫁', t: 'Viscères', s: 'Cavités, diaphragme, estomac, duodénum, intestin grêle — anatomie et cartographies R.O.P.', chs: [['Ch. 7',''],['Ch. 8',''],['Ch. 9',''],['Ch. 10',''],['Ch. 14','']] },
          ].map((fc) => (
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
            <div className="lbl">Extraits du sommaire</div>
            <h2>Douze chapitres <em>présentés</em></h2>
          </div>
          <p className="ch-hd-d">
            De la préface personnelle de l&apos;auteur aux viscères abdominaux — ces extraits présentent le contenu du livre. L&apos;accès se fait désormais par format complet : <em>Livre en ligne</em> ou <em>Livre en ligne + Livre imprimé</em>.
          </p>
        </div>
        <div className="ch-grid">
          <ChapterCard num="00" badge={<span className="badge bi">Préface</span>} variant="intro" label="Introduction" title="Genèse de la méthode R.O.P." tags={['Parcours de l\'auteur','Méthode Ingham','Ostéopathie viscérale','ADN R.O.P.']} btnClass="b-gold" btnLabel="Voir les formats →">
            La voix de l&apos;auteur : de la kinésithérapie à la réflexologie (méthode Ingham, 1978), puis à l&apos;ostéopathie viscérale (J.-P. Barral) jusqu&apos;à la création de la R.O.P. avec Jean-Pierre Vadala. L&apos;ADN de la méthode en quelques pages denses et personnelles.
          </ChapterCard>
          <ChapterCard num="01" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 1" title="Généralités — Mobilité viscérale" tags={['Mobilité viscérale','Turgor','Séreuses','Biorythmes','Diaphragme','MRP']}>
            Le cadre mécanique et neurophysiologique du praticien : mobilité vs motilité, quatre moteurs viscéraux (somatique, autonome, motilité intrinsèque, biorythmes), turgor, pressions intra-cavitaires et glissement des séreuses.
          </ChapterCard>
          <ChapterCard num="02" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 2" title="Traitement par la R.O.P." tags={['Technique manuelle','Dosage textural','3 temps de séance','Mécanorécepteurs','Hiérarchisation']}>
            Le protocole clinique complet : technique gestuelle (pulpe du pouce), dosage textural (peau de tambour), les 3 temps d&apos;une séance, et la hiérarchisation du traitement — Syndrome général → Loco-régional → Limbique. Bases neurophysiologiques.
          </ChapterCard>
          <ChapterCard num="03" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 3" title="Système nerveux central" tags={['Cerveau reptilien','Tronc cérébral','Système limbique','Neurotransmetteurs','Zones réflexes']}>
            Des trois cerveaux de MacLean à la formation réticulaire : tronc cérébral, cervelet, système limbique et cortex, ganglions de la base et neurotransmetteurs. Zones réflexes podales et occipitales pour chaque structure cérébrale.
          </ChapterCard>
          <ChapterCard num="04" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 4" title="Système nerveux autonome" tags={['Parasympathique','Sympathique','Nerf vague','SNE','Homéostasie']}>
            Parasympathique et Sympathique : fonctions, homéostasie, relation SNA-sommeil, système nerveux entérique. Le nerf vague — 70 à 80 % de fibres sensitives afférentes — et son rôle anti-inflammatoire. Cadre clinique des déséquilibres neurovégétatifs en R.O.P.
          </ChapterCard>
          <ChapterCard num="05" badge={<span className="badge bf">Inclus livre</span>} variant="fr" label="Chapitre 5" title="Mécanisme de stress" tags={['Homéostasie','Allostasie','Cortisol','Distress / Eustress','Axe HPA']} btnClass="b-sage">
            De l&apos;homéostasie de Walter Cannon au syndrome général d&apos;adaptation de Hans Selye : distress, eustress, stresseurs physiques, biochimiques et émotionnels. Rôle central du SNA et du système limbique — et interventions R.O.P.
          </ChapterCard>
          <ChapterCard num="06" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 6" title="Théorie polyvagale" tags={['Vagal ancien/nouveau','Engagement social','Malaise vagal','Phylogénèse']}>
            Le Dr Stephen Porges : trois niveaux phylogénétiques du SNA — immobilisation (vagal ancien), mobilisation (sympathique), engagement social (vagal nouveau). Implications cliniques pour la régulation du nerf vague en R.O.P.
          </ChapterCard>
          <ChapterCard num="07" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 7" title="Cavités abdominale et péritonéale" tags={['Péritoine','Mésos','Fascias','Espaces abdominaux','Pressions cavitaires']}>
            Architecture complète de la cavité abdominale : péritoine, espaces intra-, rétro- et sous-péritonéaux, fascias et mésos. Influence des variations de pression thoracique sur les viscères. Lecture clinique R.O.P. des contraintes mécaniques fasciales.
          </ChapterCard>
          <ChapterCard num="08" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 8" title="Diaphragme" tags={['Motricité respiratoire','Hiatus œsophagien','Retour veineux','Cohésion viscérale','Fascias']}>
            Le diaphragme comme moteur respiratoire (~16/min, dizaines de milliers de cycles/24h), viscéral et veino-lymphatique. Attaches diaphragmatiques, hiatus œsophagien, gradient de pression et retour veineux. Applications R.O.P.
          </ChapterCard>
          <ChapterCard num="09" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 9" title="Estomac" tags={['Cardia / Pylore','SIO','Fundus','pH gastrique','Stress & digestion','Zones réflexes']}>
            Anatomie complète de l&apos;estomac (forme en J, quatre segments, SIO, cardia, fundus, pylore), physiologie de la digestion en milieu acide, impact du stress sur la sécrétion gastrique, et composante émotionnelle de l&apos;organe en R.O.P.
          </ChapterCard>
          <ChapterCard num="10" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 10" title="Duodénum" tags={['D1–D4','Sphincter d\'Oddi','Papille duodénale','Bile & pancréas','Zones réflexes']}>
            Le duodénum en U (≈ 25 cm) : quatre segments D1 à D4, papilles duodénales, sphincter d&apos;Oddi, abouchement bilio-pancréatique. Conflit aorto-mésentérique, impact du stress sur la muqueuse, et protocole R.O.P. pour la motricité duodénale.
          </ChapterCard>
          <ChapterCard num="14" badge={<span className="badge bp">Inclus livre</span>} label="Chapitre 14" title="Intestin grêle" tags={['Jéjunum-iléum','Mésentère','Microbiote','Axe intestin-cerveau','Cartographie R.O.P.']}>
            Anatomie du jéjunum-iléum et du mésentère avec lecture R.O.P. : racine mésentérique comme zone hautement réflexogène, nutcracker syndrome, axe intestin-cerveau, microbiote et immunité. Cartographies réflexes incluses.
          </ChapterCard>
        </div>
      </section>

      {/* PROTOCOLE */}
      <section id="protocole">
        <div className="lbl c">Chapitre 2 — Mise en lumière</div>
        <h2 className="on-dk">Le protocole clinique <em>R.O.P.</em> en détail</h2>
        <p style={{ fontSize: '.93rem', color: 'rgba(245,240,232,.74)', maxWidth: 580, lineHeight: 1.8, marginTop: -6 }}>
          Le Chapitre 2 est le cœur opérationnel de l&apos;ouvrage : il décrit précisément le geste, le dosage textural, et la logique de traitement hiérarchisée.
        </p>
        <div className="prot-grid">
          <div>
            {[
              { n: 1, t: 'Diagnostic textural', d: 'Repérer les zones réflexes par la modification de texture de la peau : "peau de tambour", densification, rugosité, perte de glissement. Échelle 0–3 pour objectiver l\'évolution entre séances.' },
              { n: 2, t: 'Temps thérapeutique', d: 'Outil : pulpe du pouce (prioritaire). Pression progressive, brève, orientée — sans force ni trituration. La qualité de la stimulation prime sur la quantité. Douleur vive = surdosage.' },
              { n: 3, t: 'Temps de latence', d: 'L\'organisme a besoin de temps pour intégrer les adaptations neuro-végétatives. Espacer les séances de 2 à 3 semaines. Si pas d\'évolution nette après 3 séances : changer de stratégie.' },
            ].map((s) => (
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
              <div className="prot-card-t">Bases neurophysiologiques</div>
              <ul className="prot-card-items">
                <li><strong style={{ color: 'rgba(245,240,232,.8)' }}>Corpuscules de Meissner</strong> — sensibilité fine (pression légère), peau glabre.</li>
                <li><strong style={{ color: 'rgba(245,240,232,.8)' }}>Disques de Merkel</strong> — pression douce et statique, à la base de l&apos;épiderme.</li>
                <li>Ces afférences rapides moduleraient la transmission nociceptive (modèle gate control), éclairant l&apos;effet antalgique R.O.P.</li>
              </ul>
            </div>
            <div className="prot-card">
              <div className="prot-card-t">Hiérarchisation du traitement</div>
              <p style={{ fontSize: '.79rem', color: 'rgba(245,240,232,.66)', marginBottom: 12, lineHeight: 1.5 }}>Traiter d&apos;abord le terrain, puis la zone symptomatique, puis si nécessaire la composante limbique.</p>
              <div className="hier-row">
                {['Syndrome général','Loco-régional','Limbique'].map((step, i) => (
                  <>
                    <div key={step} className="hier-step">
                      <div className="hier-step-n">{i === 0 ? '1er' : `${i + 1}e`}</div>
                      <div className="hier-step-t">{step}</div>
                    </div>
                    {i < 2 && <div key={`arr-${i}`} className="hier-arr">→</div>}
                  </>
                ))}
              </div>
            </div>
            <div className="prot-card">
              <div className="prot-card-t">Erreurs à éviter</div>
              <ul className="prot-card-items">
                <li>Appuyer fort pour &ldquo;sentir&rdquo; — on perd la lecture fine du tissu.</li>
                <li>Chercher la douleur comme preuve d&apos;efficacité — artefact de surdosage.</li>
                <li>Traiter trop longtemps la même zone — stimulations courtes, ré-évaluées.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PÉDAGOGIE */}
      <section id="pedagogie">
        <div className="lbl">Pédagogie de l&apos;ouvrage</div>
        <h2>Un manuel <em>clinique</em>, pas un traité théorique</h2>
        <div className="ped-grid">
          {[
            { ico: '🔬', t: 'Ancrage scientifique', d: 'Chaque notion est référencée : anatomie classique, neurophysiologie, ostéopathie viscérale. Les bases sont solides pour permettre l\'adaptation clinique.', tags: ['Bibliographie','Références','Anatomie'] },
            { ico: '🗺️', t: 'Cartographies R.O.P.', d: 'Schémas originaux intégrant la représentation 3D du corps en position fœtale dans les pieds et les zones réflexes occipitales. Support visuel pour chaque organe.', tags: ['Schémas','3D','Zones podales','Zones occipitales'] },
            { ico: '⚕️', t: 'Protocoles applicables', d: 'Du diagnostic textural à la hiérarchisation du traitement, chaque chapitre viscéral se conclut par des indications pratiques directement transposables en séance.', tags: ['Protocole','Diagnostic','Application directe'] },
          ].map((c) => (
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
          <div className="lbl g">Chapitre offert</div>
          <h2 className="on-dk">Lire le Chapitre 5<br /><em>gratuitement</em></h2>
          <p>Le chapitre sur le mécanisme de stress est mis en accès libre pour découvrir la rigueur pédagogique et la profondeur clinique de cet ouvrage.</p>
          <p>Il couvre l&apos;intégralité du parcours stress : de l&apos;homéostasie à l&apos;allostasie, des stresseurs physiques aux stresseurs biochimiques, et les interventions concrètes en R.O.P.</p>
          <span className="fl-note">Chapitre 5 · PDF · 30+ pages · Références bibliographiques incluses</span>
        </div>
        <div className="fcard">
          <FreeChapterForm />
        </div>
      </section>

      {/* CITATIONS */}
      <section id="citations">
        <div className="lbl c ctr">Extraits de l&apos;ouvrage</div>
        <h2 className="on-dk" style={{ textAlign: 'center' }}>La voix de l&apos;<em>auteur</em></h2>
        <QuoteSlider />
      </section>

      {/* PRICING */}
      <section id="acheter">
        <div className="lbl ctr">Commander</div>
        <h2 style={{ textAlign: 'center' }}>Livre en ligne <em>ou</em> Livre en ligne + Livre imprimé</h2>
        <p>Deux formats d&apos;accès à l&apos;ouvrage complet : lecture en ligne immédiate, ou formule combinée numérique + imprimée.</p>
        <div className="pg">
          <div className="pc star">
            <div className="pc-n">Livre en ligne</div>
            <p className="pc-d">Accès immédiat à l&apos;ouvrage complet en format numérique, avec consultation permanente.</p>
            <div className="pc-a"><span className="pc-c">€</span>79</div>
            <div className="pc-s">accès en ligne immédiat</div>
            <ul className="pc-l">
              {['Ouvrage complet en ligne','Tous les chapitres inclus','Cartographies R.O.P. complètes','Index clinique','Accès permanent'].map((f) => <li key={f}>{f}</li>)}
            </ul>
            {/* TODO: replace with Stripe Checkout link */}
            <a href="#acheter" className="btn b-gold" style={{ width: '100%', textAlign: 'center' }}>Commander Livre en ligne</a>
          </div>
          <div className="pc">
            <div className="pc-n">Livre en ligne + Livre imprimé</div>
            <p className="pc-d">La formule complète avec accès numérique immédiat et version imprimée du livre.</p>
            <div className="pc-a"><span className="pc-c">€</span>99</div>
            <div className="pc-s">numérique + livre imprimé</div>
            <ul className="pc-l">
              {['Livre en ligne inclus','Livre imprimé','Lecture immédiate','Expédition du format papier','Bibliographie et schémas inclus'].map((f) => <li key={f}>{f}</li>)}
            </ul>
            {/* TODO: replace with Stripe Checkout link */}
            <a href="#acheter" className="btn b-out" style={{ width: '100%', textAlign: 'center' }}>Commander Livre en ligne + Livre imprimé</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div>
          <div className="f-br">Réflexothérapie occipito-podale et viscères des cavités abdominale et pelvienne</div>
          <p>3ᵉ ouvrage de Guy Boitout sur la Réflexologie Occipito-Podale. Système nerveux, viscères abdominaux, stress et protocole clinique complet — au service du praticien.</p>
        </div>
        <div className="f-bot">
          <span>© 2026 Guy Boitout · Institut R.O.P. · Sully-sur-Loire</span>
          <span>17 rue du Coq · 45600 Sully-sur-Loire · 06 10 35 78 22</span>
        </div>
      </footer>
    </main>
  )
}

/* ── Shared chapter card component ── */
function ChapterCard({
  num, badge, variant, label, title, tags, btnClass = 'b-gold', btnLabel = 'Voir le livre →', children,
}: {
  num: string
  badge: React.ReactNode
  variant?: 'intro' | 'fr'
  label: string
  title: string
  tags: string[]
  btnClass?: string
  btnLabel?: string
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
          {tags.map((t) => <span key={t} className="ct">{t}</span>)}
        </div>
      </div>
      <div className="cc-ft">
        <div className="cc-pr">Inclus<small>Dans le Livre en ligne</small></div>
        <a href="#acheter" className={`btn ${btnClass}`} style={{ padding: '8px 18px', fontSize: '.67rem' }}>{btnLabel}</a>
      </div>
    </div>
  )
}
