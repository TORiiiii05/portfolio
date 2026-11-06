import { Link } from 'react-router-dom'
import styles from './Projects.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <section className={styles.notFound}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.heroSub}>Cette page n'existe pas.</p>
        <Link to="/" className={styles.cta}>← RETOUR À L'ACCUEIL</Link>
      </section>
    </div>
  )
}
