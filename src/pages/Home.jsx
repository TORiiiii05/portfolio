import { Link } from 'react-router-dom'
import styles from './Home.module.css'

const sections = [
  { num: '01 —', label: 'À PROPOS', to: '/about', desc: 'Parcours, compétences, curiosités' },
  { num: '02 —', label: 'WEB & COM', to: '/web', desc: 'Sites, interfaces et communication' },
  { num: '03 —', label: 'DATA', to: '/data', desc: 'Analyse, modélisation, visualisation' },
  { num: '04 —', label: 'EXPÉRIENCES', to: '/experience', desc: 'Orange France · Statistique Canada' },
  { num: '05 —', label: 'CONTACT', to: '/contact', desc: 'Me joindre, collaborer' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.heroLabel}>PORTFOLIO — 2026</p>
        <h1 className={styles.heroName}>Jules<br />Del Frate</h1>
        <p className={styles.heroTitle}>Étudiant en Science des Données<br />— Data · IA · Web</p>
        <p className={styles.heroCatch}>
          Étudiant en science des données. Curieux, créatif,
          et toujours en train de construire quelque chose.
        </p>
        <Link to="/about" className={styles.heroCta}>
          <span>Découvrir →</span>
        </Link>
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
