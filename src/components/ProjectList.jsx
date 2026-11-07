import ProjectCard from './ProjectCard'
import usePageMeta from '../hooks/usePageMeta'
import styles from '../pages/Projects.module.css'

export default function ProjectList({ numero, titre, intro, projets, from, children }) {
  usePageMeta(titre, intro)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        {children}
        <p className={styles.sectionNum}>{numero}</p>
        <h1 className={styles.title}>{titre}</h1>
        {intro && <p className={styles.heroSub}>{intro}</p>}
      </section>

      <ul className={styles.projectList}>
        {projets.map((projet, index) => (
          <ProjectCard
            key={projet.slug}
            projet={projet}
            numero={String(index + 1).padStart(2, '0')}
            from={from}
          />
        ))}
      </ul>
    </div>
  )
}
