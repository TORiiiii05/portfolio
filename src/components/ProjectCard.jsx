import { Link } from 'react-router-dom'
import styles from '../pages/Projects.module.css'

export default function ProjectCard({ projet, numero, from }) {
  const { slug, titre, contexte, resume, tags, aDetail, mentionData } = projet

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
        {(tags.length > 0 || aDetail) && (
          <div className={styles.projectFooter}>
            {tags.length > 0 && (
              <ul className={styles.stackList}>
                {tags.map((tag) => (
                  <li key={tag} className={styles.stackTag}>{tag}</li>
                ))}
              </ul>
            )}
            {aDetail && (
              <Link to={`/projets/${slug}`} state={{ from }} className={styles.cta}>
                VOIR LE PROJET →
              </Link>
            )}
          </div>
        )}
      </div>
    </li>
  )
}
