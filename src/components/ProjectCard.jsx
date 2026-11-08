import { Link } from 'react-router-dom'
import styles from '../pages/Projects.module.css'

export default function ProjectCard({ projet, numero, from }) {
  const { slug, titre, contexte, statut, resume, tags, aDetail, plusieursProjets, mentionData } = projet

  return (
    <li className={styles.projectItem}>
      <div className={styles.projectMeta}>
        <span className={styles.projectNum}>{numero}</span>
      </div>
      <div className={styles.projectBody}>
        <div className={styles.projectHeader}>
          <h2 className={styles.projectTitle}>{titre}</h2>
          {contexte && <span className={styles.projectType}>{contexte}</span>}
        </div>
        {from === '/data' && mentionData && (
          <p className={styles.projectMention}>{mentionData}</p>
        )}
        {resume && <p className={styles.projectDesc}>{resume}</p>}
        {(tags.length > 0 || statut || aDetail) && (
          <div className={styles.projectFooter}>
            {(tags.length > 0 || statut) && (
              <ul className={styles.stackList}>
                {statut && <li className={`${styles.stackTag} ${styles.tagStatut}`}>{statut}</li>}
                {tags.map((tag) => (
                  <li key={tag} className={styles.stackTag}>{tag}</li>
                ))}
              </ul>
            )}
            {aDetail && (
              <Link to={`/projets/${slug}`} state={{ from }} className={styles.cta}>
                {plusieursProjets ? 'VOIR LES PROJETS →' : 'VOIR LE PROJET →'}
              </Link>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
