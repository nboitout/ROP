import Scorecard from '@/components/admin/Scorecard'

// Observatoire PELVIS-ROP — aperçu admin de la future page publique de
// résultats du registre (voir dépôt SuiviPatient). Contenu volontairement
// STATIQUE et ILLUSTRATIF : aucune donnée réelle de patient n'est branchée ici.
// La page publique définitive vivra dans l'app SuiviPatient et n'affichera que
// des résultats agrégés, anonymisés et masqués sous n = 5.

export const metadata = {
  title: 'Observatoire PELVIS-ROP — Admin',
}

const cream = 'var(--adm-cream)'
const muted = 'rgba(245,240,232,.55)'
const track = 'rgba(245,240,232,.06)'
const trackBorder = '1px solid rgba(245,240,232,.1)'
const sage = '#8faa78'
const offTarget = 'rgba(245,240,232,.24)'
const brick = '#cb7a69'

function Bar({
  label,
  value,
  width,
  color,
  dark = false,
}: {
  label: string
  value: string
  width: number
  color: string
  dark?: boolean
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: 12, alignItems: 'center', margin: '10px 0' }}>
      <span style={{ fontSize: 13, color: muted }}>{label}</span>
      <div style={{ background: track, border: trackBorder, borderRadius: 5, height: 30, overflow: 'hidden' }}>
        <div
          style={{
            width: `${width}%`,
            height: '100%',
            background: color,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: 9,
            fontSize: 12.5,
            fontWeight: 600,
            fontVariantNumeric: 'tabular-nums',
            color: dark ? '#1b1712' : cream,
            minWidth: 34,
          }}
        >
          {value}
        </div>
      </div>
    </div>
  )
}

export default function AdminObservatoirePage() {
  return (
    <main className="adm-page">
      <div className="adm-page-header">
        <div>
          <p className="adm-page-eyebrow">Recherche · Registre PELVIS-ROP</p>
          <h1 className="adm-page-title">Observatoire pelvien</h1>
          <p className="adm-page-sub">Aperçu de la future page publique de résultats · lecteurs du tome 3</p>
        </div>
      </div>

      {/* Bandeau maquette */}
      <div
        style={{
          background: 'rgba(200,164,97,.14)',
          border: '1px solid rgba(200,164,97,.4)',
          borderLeft: '3px solid #c8a461',
          borderRadius: 3,
          padding: '12px 16px',
          marginBottom: 24,
        }}
      >
        <p style={{ color: cream, fontWeight: 600, fontSize: '.82rem', letterSpacing: '.04em', textTransform: 'uppercase', margin: 0 }}>
          Maquette — données illustratives
        </p>
        <p style={{ color: muted, fontSize: '.85rem', lineHeight: 1.6, margin: '6px 0 0' }}>
          Les chiffres ci-dessous sont fictifs et servent à visualiser la mise en forme. La page définitive vivra dans l&apos;application SuiviPatient
          et n&apos;affichera que des résultats agrégés, anonymisés et masqués sous n&nbsp;=&nbsp;5, une fois la taille cible pré-enregistrée atteinte.
        </p>
      </div>

      {/* Cadrage honnêteté */}
      <div
        style={{
          background: 'rgba(143,170,120,.08)',
          border: '1px solid rgba(143,170,120,.24)',
          borderLeft: '3px solid #8faa78',
          borderRadius: 3,
          padding: '14px 18px',
          marginBottom: 28,
        }}
      >
        <p style={{ color: 'rgba(245,240,232,.82)', fontSize: '.9rem', lineHeight: 1.65, margin: 0 }}>
          <strong style={{ color: cream }}>Registre observationnel.</strong> Il documente ce qui est observé en pratique, sans groupe tiré au sort. Il met donc
          en évidence des <strong style={{ color: cream }}>associations</strong> et un <strong style={{ color: cream }}>signal clinique</strong> — non une preuve
          d&apos;efficacité supérieure au placebo. Le plan d&apos;analyse et la taille d&apos;échantillon sont fixés <strong style={{ color: cream }}>avant</strong> le recueil.
        </p>
      </div>

      <div className="adm-scorecards">
        <Scorecard label="Patients inclus" value="214" subtitle="cible N* = 200 atteinte" />
        <Scorecard label="Répondeurs à J30" value="58%" subtitle="IC 95% : 51 – 65%" />
        <Scorecard label="Effet vessie (ICIQ-UI SF)" value="−4,4" subtitle="MCID −2,5" />
        <Scorecard label="Événements graves" value="0" subtitle="tolérance à ce jour" />
      </div>

      <p className="adm-section-title">Spécificité régionale — le résultat le plus discriminant</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <p className="adm-chart-title">Variation moyenne du score à J30 (échelle 0–10, baisse = amélioration)</p>
        <p className="adm-page-sub" style={{ marginTop: -12, marginBottom: 16 }}>
          Zone traitée : territoires pelviens de niveau 3 · comparaison cible / hors-cible chez les mêmes patients
        </p>
        <Bar label="Pelvis (cible)" value="−4,4" width={88} color={sage} />
        <Bar label="Digestif haut (hors cible)" value="−0,5" width={11} color={offTarget} />
        <Bar label="Locomoteur (hors cible)" value="−0,4" width={8} color={offTarget} />
        <p style={{ color: muted, fontSize: '.85rem', lineHeight: 1.6, margin: '16px 0 0' }}>
          L&apos;amélioration est concentrée sur le pelvis et quasi nulle hors cible — un profil difficile à expliquer par un simple effet général d&apos;attente.
          C&apos;est la traduction directe du gradient de ciblage (niveau 3 spécifique <em>vs</em> niveau 1 diffus).
        </p>
      </div>

      <div className="adm-charts-grid">
        <div className="adm-chart-card">
          <p className="adm-chart-title">Relation dose-réponse</p>
          <p className="adm-page-sub" style={{ marginTop: -12, marginBottom: 16 }}>
            Taux de répondeurs à J30 selon le nombre de séances reçues
          </p>
          <svg viewBox="0 0 320 190" width="100%" height="auto" role="img" aria-label="Le taux de répondeurs croît avec le nombre de séances : 22% pour 1 séance, 34% pour 2, 49% pour 3, 63% pour 4 et plus.">
            <g fontSize="10" fill={muted}>
              <line x1="38" y1="14" x2="38" y2="158" stroke="rgba(245,240,232,.14)" />
              <line x1="38" y1="158" x2="312" y2="158" stroke="rgba(245,240,232,.14)" />
              <text x="30" y="20" textAnchor="end">70%</text>
              <text x="30" y="90" textAnchor="end">35%</text>
              <text x="30" y="161" textAnchor="end">0</text>
            </g>
            <polyline points="70,131 150,105 230,80 292,55" fill="none" stroke={sage} strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" />
            <g fill={sage}>
              <circle cx="70" cy="131" r="4.5" />
              <circle cx="150" cy="105" r="4.5" />
              <circle cx="230" cy="80" r="4.5" />
              <circle cx="292" cy="55" r="5.5" />
            </g>
            <g fontSize="10.5" fill="rgba(245,240,232,.85)" fontWeight="600" textAnchor="middle">
              <text x="70" y="123">22%</text>
              <text x="150" y="97">34%</text>
              <text x="230" y="72">49%</text>
              <text x="292" y="46">63%</text>
            </g>
            <g fontSize="10" fill={muted} textAnchor="middle">
              <text x="70" y="174">1 séance</text>
              <text x="150" y="174">2</text>
              <text x="230" y="174">3</text>
              <text x="292" y="174">4 +</text>
            </g>
          </svg>
        </div>

        <div className="adm-chart-card">
          <p className="adm-chart-title">Ampleur d&apos;effet — vessie (ICIQ-UI SF)</p>
          <p className="adm-page-sub" style={{ marginTop: -12, marginBottom: 16 }}>
            Score moyen, inclusion → J30 · plus bas = moins de symptômes
          </p>
          <Bar label="Inclusion" value="11,2" width={72} color={offTarget} />
          <Bar label="J30" value="6,8" width={44} color={sage} />
          <p style={{ color: muted, fontSize: '.85rem', lineHeight: 1.6, margin: '16px 0 0' }}>
            Variation moyenne <strong style={{ color: cream }}>−4,4</strong> (IC 95% −5,3 à −3,5). Seuil cliniquement pertinent : −2,5.
          </p>
        </div>
      </div>

      <p className="adm-section-title">Sécurité</p>
      <div className="adm-chart-card" style={{ marginBottom: 24 }}>
        <div className="adm-table-wrap">
          <table className="adm-table">
            <thead>
              <tr>
                <th>Observation</th>
                <th>Patients</th>
                <th>Gravité</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Réaction locale transitoire (&lt; 72 h)</td>
                <td>17</td>
                <td className="muted">Bénin</td>
              </tr>
              <tr>
                <td>Fatigue passagère post-séance</td>
                <td>9</td>
                <td className="muted">Bénin</td>
              </tr>
              <tr>
                <td>Réaction retardée (&gt; 72 h) signalée</td>
                <td>6</td>
                <td className="muted">Bénin, résolu</td>
              </tr>
              <tr>
                <td>Événement indésirable grave</td>
                <td>0</td>
                <td className="muted">Aucun</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="adm-section-title">Engagement d&apos;honnêteté</p>
      <div className="adm-chart-card" style={{ borderLeft: `3px solid ${brick}`, marginBottom: 24 }}>
        <p className="adm-chart-title">Ce qui aurait compté comme résultat négatif</p>
        <p style={{ color: 'rgba(245,240,232,.82)', fontSize: '.9rem', lineHeight: 1.65, margin: '0 0 10px' }}>
          Défini <strong style={{ color: cream }}>avant</strong> le recueil, affiché quel que soit le résultat. Le registre aurait conclu à l&apos;absence de signal si :
        </p>
        <ul style={{ color: muted, fontSize: '.9rem', lineHeight: 1.7, margin: 0, paddingLeft: 20 }}>
          <li>le taux de répondeurs à J30 n&apos;avait pas dépassé nettement l&apos;évolution spontanée ;</li>
          <li>l&apos;amélioration s&apos;était révélée aussi forte hors cible que sur le pelvis (effet diffus) ;</li>
          <li>aucune relation dose-réponse n&apos;était apparue.</li>
        </ul>
      </div>

      <p className="adm-page-sub" style={{ lineHeight: 1.7 }}>
        Documents de référence :{' '}
        <a href="https://github.com/nboitout/SuiviPatient/blob/main/docs/protocole-pelvis-rop.md" target="_blank" rel="noopener noreferrer" style={{ color: '#c8a461' }}>
          protocole clinique
        </a>{' '}·{' '}
        <a href="https://github.com/nboitout/SuiviPatient/blob/main/docs/architecture-technique.md" target="_blank" rel="noopener noreferrer" style={{ color: '#c8a461' }}>
          architecture technique
        </a>
      </p>
    </main>
  )
}
