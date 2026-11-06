import { Link, useLocation, useParams } from 'react-router-dom'
import { pageDuProjet, trouverProjetDetaille } from '../data/projects'
import NotFound from './NotFound'
import styles from './Projects.module.css'

const images = import.meta.glob('../assets/projets/*/*.{webp,png,jpg,jpeg}', {
  eager: true,
  import: 'default',
})

function capturesDuProjet(slug) {
  const prefixe = `../assets/projets/${slug}/`
  return Object.entries(images)
    .filter(([chemin]) => chemin.startsWith(prefixe))
    .map(([chemin, src]) => ({ nom: chemin.slice(prefixe.length), src }))
    .sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { numeric: true }))
}

function Paragraphes({ textes = [] }) {
  return textes.map((texte) => (
    <p key={texte} className={styles.contextText}>{texte}</p>
  ))
}

function Section({ section }) {
  const { titre, paragraphes, liste, colonnes, variante } = section

  if (variante === 'accroche') {
    return (
      <section className={styles.detailSection}>
        {paragraphes.map((texte) => (
          <p key={texte} className={styles.tagline}>{texte}</p>
        ))}
      </section>
    )
  }

  return (
    <section className={styles.detailSection}>
      {titre && <h2 className={styles.sectionTitle}>{titre}</h2>}
      <div className={styles.detailText}>
        <Paragraphes textes={paragraphes} />
      </div>
      {liste && (
        <ul className={variante === 'tags' ? styles.stackList : styles.detailList}>
          {liste.map((element) =>
            variante === 'tags' ? (
              <li key={element} className={styles.stackTag}>{element}</li>
            ) : (
              <li key={element} className={styles.detailListItem}>
                <span aria-hidden="true">—</span>
                <span className={styles.contextText}>{element}</span>
              </li>
            ),
          )}
        </ul>
      )}
      {colonnes && (
        <div className={styles.contextGrid}>
          {colonnes.map((colonne) => (
            <div key={colonne.titre} className={styles.contextBlock}>
              <h3 className={styles.contextBlockLabel}>{colonne.titre}</h3>
              <Paragraphes textes={colonne.paragraphes} />
            </div>
          ))}
        </div>
      )}
    </section>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const location = useLocation()
  const projet = trouverProjetDetaille(slug)

  if (!projet) return <NotFound />

  const { titre, contexte, tags, lienExterne, sections, legendes } = projet
  const captures = capturesDuProjet(slug)

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Link to={pageDuProjet(projet, location.state?.from)} className={styles.backLink}>
          ← RETOUR
        </Link>
        <h1 className={styles.detailTitle}>{titre}</h1>
        {contexte && <p className={styles.heroSub}>{contexte}</p>}
        {tags.length > 0 && (
          <ul className={styles.stackList}>
            {tags.map((tag) => (
              <li key={tag} className={styles.stackTag}>{tag}</li>
            ))}
          </ul>
        )}
        {lienExterne && (
          <a
            href={lienExterne.url}
            className={styles.cta}
            target="_blank"
            rel="noopener noreferrer"
          >
            {lienExterne.label} →
          </a>
        )}
      </section>

      {sections.map((section, index) => (
        <Section key={section.titre ?? index} section={section} />
      ))}

      {captures.length > 0 && (
        <section className={styles.gallery}>
          {captures.map(({ nom, src }) => (
            <figure key={nom} className={styles.figure}>
              <img src={src} alt={legendes[nom] ?? `Capture du projet ${titre}`} />
              {legendes[nom] && (
                <figcaption className={styles.figcaption}>{legendes[nom]}</figcaption>
              )}
            </figure>
          ))}
        </section>
      )}
    </div>
  )
}
