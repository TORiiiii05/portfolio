import { Link } from 'react-router-dom'
import Doodle from '../components/Doodle'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Home.module.css'

const sections = [
  { num: '01 —', label: 'À PROPOS', to: '/about', desc: 'Parcours, compétences, curiosités' },
  { num: '02 —', label: 'WEB & COM', to: '/web', desc: 'Sites, interfaces et communication' },
  { num: '03 —', label: 'DATA', to: '/data', desc: 'Analyse, modélisation, visualisation' },
  { num: '04 —', label: 'EXPÉRIENCES', to: '/experience', desc: 'Orange France · Statistique Canada' },
  { num: '05 —', label: 'CONTACT', to: '/contact', desc: 'Me joindre, collaborer' },
]

export default function Home() {
  usePageMeta(null, 'Étudiant web & communication — Web · Com · Data. Du design au code.')

  return (
    <div className={styles.page}>
      <Doodle
        numero={17}
        taille={140}
        top="calc(130px - 10rem / 3)"
        left="calc(5rem + 3.7 * clamp(5rem, 14vw, 11rem))"
        mobile={{ taille: 72, top: '8px', right: '30px' }}
      />
      <Doodle numero={9} taille={90} top="44px" right="8%" />
      <Doodle numero={18} taille={72} top="480px" right="14%" />

      <section className={styles.hero}>
        <p className={styles.heroLabel}>PORTFOLIO — 2026</p>
        <h1 className={styles.heroName}>Jules<br />Del Frate</h1>
        <p className={styles.heroTitle}>Étudiant web & communication<br />— Web · Com · Data</p>
        <p className={styles.heroCatch}>
          Du design au code. Curieux, créatif, et toujours en train de construire quelque chose.
        </p>
        <div className={styles.heroActions}>
          <Link to="/about" className={styles.heroCta}>
            <span>Découvrir →</span>
          </Link>
          <Link to="/cv" className={`${styles.heroCta} ${styles.heroCtaSecondaire}`}>
            <span>Voir mon CV</span>
          </Link>
        </div>
      </section>

      <section className={styles.index}>
        <p className={styles.indexLabel}>SOMMAIRE</p>
        <ul className={styles.indexList}>
          {sections.map(({ num, label, to, desc }) => (
            <li key={to} className={styles.indexItem}>
              <Link to={to} className={styles.indexLink}>
                <span className={styles.indexNum}>{num}</span>
                <span className={styles.indexTitle}>{label}</span>
                <span className={styles.indexDesc}>{desc}</span>
                <span className={styles.indexArrow}>→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
