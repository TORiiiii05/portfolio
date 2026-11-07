import { Link } from 'react-router-dom'
import Doodle from '../components/Doodle'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Projects.module.css'

export default function NotFound() {
  usePageMeta('Page introuvable', "Cette page n'existe pas.")

  return (
    <div className={styles.page}>
      <section className={styles.notFound}>
        <div className={styles.notFoundHead}>
          <h1 className={styles.notFoundTitle}>404</h1>
          <Doodle
            numero={21}
            taille={140}
            top="20%"
            left="calc(100% + 2.5rem)"
            mobile={{ taille: 80, top: '24px', left: 'calc(100% + 1.5rem)' }}
          />
        </div>
        <p className={styles.heroSub}>Cette page n'existe pas.</p>
        <Link to="/" className={styles.cta}>← RETOUR À L'ACCUEIL</Link>
      </section>
    </div>
  )
}
