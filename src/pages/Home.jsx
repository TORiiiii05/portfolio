import { Link } from 'react-router-dom'
import Blob from '../components/Blob'
import styles from './Home.module.css'

const sections = [
  { num: '01 —', label: 'À propos', to: '/about', desc: 'Parcours, compétences, curiosités' },
  { num: '02 —', label: 'Projets IUT', to: '/projects/iut', desc: 'Visualisation de données, Power BI' },
  { num: '03 —', label: 'Site musical', to: '/projects/music', desc: 'Projet web musical personnel' },
  { num: '04 —', label: 'Expériences', to: '/experience', desc: 'Orange France · Statistique Canada' },
  { num: '05 —', label: 'Contact', to: '/contact', desc: 'Me joindre, collaborer' },
]

export default function Home() {
  return (
    <div className={styles.page}>
      <Blob num={1} size={420} style={{ top: '-80px', right: '-80px' }} />
      <Blob num={4} size={250} style={{ bottom: '-60px', left: '-60px' }} />
      <Blob num={6} size={180} style={{ bottom: '-45px', left: '50%', transform: 'translateX(-50%)' }} />

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
