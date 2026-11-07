import usePageMeta from '../hooks/usePageMeta'
import styles from '../pages/Projects.module.css'

export default function PageLegale({ titre, titrePage, description, sections }) {
  usePageMeta(titrePage, description)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1 className={styles.detailTitle}>{titre}</h1>
      </section>

      {sections.map(({ titre: titreSection, contenu }) => (
        <section key={titreSection} className={styles.detailSection}>
          <h2 className={styles.ligneTitle}>{titreSection}</h2>
          <p className={styles.contextText}>{contenu}</p>
        </section>
      ))}
    </div>
  )
}
