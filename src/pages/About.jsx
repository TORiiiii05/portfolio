import { Link } from 'react-router-dom'
import Doodle from '../components/Doodle'
import usePageMeta from '../hooks/usePageMeta'
import vignetteLelievre from '../assets/projets/lelievre-paysage/02_accueil_long.webp'
import styles from './About.module.css'

// Première capture du dossier Statimusic, si elle existe (sinon un bloc noir la remplace).
const capturesStatimusic = import.meta.glob('../assets/projets/statimusic/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})
const vignetteStatimusic = Object.keys(capturesStatimusic)
  .sort((a, b) => a.localeCompare(b, 'fr', { numeric: true }))
  .map((chemin) => capturesStatimusic[chemin])[0]

const apercu = [
  {
    sousTitre: 'EXPÉRIENCES',
    cartes: [
      {
        titre: 'ORANGE FRANCE',
        meta: 'Data scientist · 2026 · 3 mois',
        lien: '/experience#orange-france',
      },
      {
        titre: 'STATISTIQUE CANADA',
        meta: 'Statisticien méthodologiste · 2025 · 3 mois',
        lien: '/experience#statistique-canada',
      },
    ],
  },
  {
    sousTitre: 'PROJETS PHARES',
    cartes: [
      {
        titre: 'LELIÈVRE PAYSAGE',
        meta: 'Site vitrine WordPress · Projet client',
        lien: '/projets/lelievre-paysage',
        vignette: vignetteLelievre,
      },
      {
        titre: 'STATIMUSIC',
        meta: 'Application web · Projet personnel',
        lien: '/projets/statimusic',
        vignette: vignetteStatimusic,
        vignetteTexte: 'STATIMUSIC',
        badge: 'EN RECONSTRUCTION',
      },
    ],
  },
]

// En haut de la carte : la vignette du projet, un bloc noir à son nom si le projet
// n'a pas encore de capture, ou une fine bande noire pour les expériences.
function HautDeCarte({ vignette, vignetteTexte }) {
  if (vignette) {
    return <img src={vignette} alt="" className={styles.carteVignette} loading="lazy" decoding="async" />
  }
  if (vignetteTexte) {
    return (
      <span className={styles.carteBande} aria-hidden="true">
        <span className={styles.carteBandeNom}>{vignetteTexte}</span>
      </span>
    )
  }
  return <span className={styles.carteFineBande} aria-hidden="true" />
}

function CarteApercu({ titre, meta, lien, vignette, vignetteTexte, badge }) {
  return (
    <Link
      to={lien}
      // Vers Expériences : « a-propos » fait apparaître le bouton Retour sur cette page.
      state={{ from: lien.startsWith('/experience') ? 'a-propos' : '/about' }}
      className={styles.carte}
    >
      <HautDeCarte vignette={vignette} vignetteTexte={vignetteTexte} />
      <span className={styles.carteCorps}>
        <span className={styles.carteTitre}>{titre}</span>
        <span className={styles.carteMeta}>{meta}</span>
        {badge && <span className={styles.carteBadge}>{badge}</span>}
        <span className={styles.cartePlus}>EN SAVOIR PLUS →</span>
      </span>
    </Link>
  )
}

const skills = [
  {
    cat: 'WEB',
    items: [
      'HTML',
      'CSS',
      'Responsive design',
      'SEO',
      'Accessibilité',
      'Création no-code',
      'Hébergement & mise en ligne',
    ],
  },
  {
    cat: 'DESIGN & COM',
    items: ['UI/UX', 'Rédaction web', 'Stratégie de communication', 'Veille'],
  },
  {
    cat: 'DATA',
    items: [
      'Python',
      'R',
      'SQL',
      'Bases de données',
      'Statistiques & modélisation',
      'Machine learning',
    ],
  },
  {
    cat: 'OUTILS',
    items: [
      'WordPress',
      'Figma',
      'Illustrator',
      'Canva',
      'Power BI',
      'Git',
      'VS Code',
      'Microsoft 365',
      'IA générative',
    ],
  },
]

const interests = [
  { label: 'Volley-ball', detail: 'Compétition régionale depuis plusieurs années, vice-champion de la Coupe de Bretagne.' },
  { label: 'Musculation', detail: 'Pratique depuis trois ans, pour la santé, la force et le dépassement de soi.' },
  { label: 'Musique', detail: 'Auditeur passionné et curieux, de l\'écoute aux interviews d\'artistes. La musique est aussi à l\'origine de mon projet web le plus ambitieux.' },
  { label: 'Création web', detail: 'La création de sites est pour moi un terrain de jeu créatif autant que technique, à l\'intersection du design et du code.' },
  { label: 'Dessin', detail: 'Je dessine depuis toujours — des petits personnages simples, un geste spontané qui ne m\'a jamais quitté.' },
  { label: 'IA', detail: 'Passionné par ce domaine en constante évolution, je suis de près les actualités et j\'expérimente régulièrement les nouveaux outils.' },
]

export default function About() {
  usePageMeta('À propos', "Parcours, formation, compétences et centres d'intérêt de Jules Del Frate, étudiant web & communication.")

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Doodle
          numero={1}
          taille={120}
          top="20px"
          right="8%"
          mobile={{ taille: 64, top: '8px', right: '16px' }}
        />
        <p className={styles.sectionNum}>01 —</p>
        <h1 className={styles.title}>À propos</h1>
      </section>

      <div className={styles.ligneProfil}>
        <section className={styles.bio}>
          <p className={styles.blockLabel}>PROFIL</p>
          <p className={styles.bioText}>
            En licence professionnelle de conception de sites web, j'arrive avec un bagage peu
            commun : un BUT Science des Données et deux stages, chez Statistique Canada à Ottawa
            puis chez Orange. J'y ai appris à travailler sur des données réelles, en équipe et en
            autonomie.
          </p>
          <p className={styles.bioText}>
            Côté création, j'ai développé un site d'analyse d'écoutes musicales, réalisé le site
            vitrine d'un paysagiste et conçu une application de visualisation de données.
          </p>
          <p className={styles.bioText}>
            Mon objectif : créer des sites clairs et utiles, dont je sais aussi mesurer
            l'efficacité.
          </p>
        </section>

        <section className={styles.apercu}>
          <p className={styles.blockLabel}>APERÇU RAPIDE</p>
          {apercu.map(({ sousTitre, cartes }) => (
            <div key={sousTitre} className={styles.apercuGroupe}>
              <h2 className={styles.apercuSousTitre}>{sousTitre}</h2>
              <ul className={styles.apercuCartes}>
                {cartes.map((carte) => (
                  <li key={carte.titre}>
                    <CarteApercu {...carte} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>
      </div>

      <div className={styles.ligneInfos}>
        <div className={`${styles.infoBlock} ${styles.formation}`}>
          <p className={styles.blockLabel}>FORMATION</p>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>Licence Pro Conception, rédaction et réalisation de site web</p>
                <p className={styles.infoSub}>Institut de la Communication et des Médias, Échirolles · 2026 — 2027</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>BUT Science des Données</p>
                <p className={styles.infoSub}>IUT Vannes · 2023 — 2026</p>
                <p className={styles.infoSub}>Spécialisation : Étude et Modélisation Statistique · Option Mathématiques</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>Baccalauréat Général</p>
                <p className={styles.infoSub}>Lycée René Cassin · 2020 — 2023</p>
                <p className={styles.infoSub}>Spécialités : Mathématiques et SES · Mention Bien</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={`${styles.infoBlock} ${styles.langues}`}>
          <p className={styles.blockLabel}>LANGUES</p>
          <ul className={styles.infoList}>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>Français</p>
                <p className={styles.infoSub}>Langue maternelle</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>Anglais</p>
                <p className={styles.infoSub}>C1 (955 TOEIC)</p>
              </div>
            </li>
            <li className={styles.infoItem}>
              <span className={styles.infoDot}>—</span>
              <div>
                <p className={styles.infoTitle}>Italien</p>
                <p className={styles.infoSub}>Débutant, en cours d'apprentissage</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section className={styles.skillsSection}>
        <Doodle numero={14} taille={72} top="14px" right="2rem" />
        <h2 className={styles.sectionTitle}>Compétences</h2>
        <div className={styles.skillsGrid}>
          {skills.map(({ cat, items }) => (
            <div key={cat} className={styles.skillBlock}>
              <p className={styles.skillCat}>{cat}</p>
              <ul className={styles.skillList}>
                {items.map((s) => (
                  <li key={s} className={styles.skillTag}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.interestsSection}>
        <h2 className={styles.sectionTitle}>Centres d'intérêt</h2>
        <ul className={styles.interestList}>
          {interests.map(({ label, detail }) => (
            <li key={label} className={styles.interestItem}>
              <span className={styles.interestLabel}>{label}</span>
              <span className={styles.interestDetail}>{detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
