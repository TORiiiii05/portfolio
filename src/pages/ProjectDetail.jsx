import { useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Doodle from '../components/Doodle'
import LienExterne from '../components/LienExterne'
import usePageMeta from '../hooks/usePageMeta'
import { pageDuProjet, trouverProjetDetaille } from '../data/projects'
import NotFound from './NotFound'
import styles from './Projects.module.css'

const doodles = {
  'lelievre-paysage': 13,
  statimusic: 12,
  'landing-pages': 2,
  communication: 8,
  'affiche-soleil': 19,
  'epsm-charcot': 6,
  'joueurs-fifa': 15,
  'accidents-route': 5,
  'sondage-quebec': 11,
  'meteo-australie': 9,
}

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
  const { titre, sousTitre, paragraphes, liste, colonnes, ligne, noteItalique, variante } = section

  if (ligne) {
    return (
      <section className={styles.detailSection}>
        <div
          className={styles.ligneGrid}
          style={{ '--colonnes': ligne.length }}
        >
          {ligne.map((bloc) => (
            <div key={bloc.titre} className={styles.ligneBlock}>
              <h2 className={styles.ligneTitle}>{bloc.titre}</h2>
              <Paragraphes textes={bloc.paragraphes} />
            </div>
          ))}
        </div>
      </section>
    )
  }

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
      {sousTitre && <p className={styles.sectionSub}>{sousTitre}</p>}
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
      {noteItalique && <p className={styles.detailNote}>{noteItalique}</p>}
    </section>
  )
}

// Réserve la place de l'image avant son chargement, puis adopte ses vraies proportions.
function Capture({ src, alt, prioritaire }) {
  const [proportions, setProportions] = useState('16 / 10')

  return (
    <img
      src={src}
      alt={alt}
      loading={prioritaire ? undefined : 'lazy'}
      decoding={prioritaire ? undefined : 'async'}
      style={{ aspectRatio: proportions }}
      onLoad={(e) => setProportions(`${e.target.naturalWidth} / ${e.target.naturalHeight}`)}
    />
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const projet = trouverProjetDetaille(slug)

  if (!projet) return <NotFound />

  return <Projet key={slug} projet={projet} />
}

function Projet({ projet }) {
  const location = useLocation()
  const { slug, titre, contexte, tags, resume, lienExterne, sections, legendes } = projet
  const captures = capturesDuProjet(slug)

  usePageMeta(titre, resume)

  // Le doodle 05 est plus haut que les autres : on le remonte pour qu'il ne touche pas le titre.
  const doodleTop = slug === 'accidents-route' ? '30px' : '42px'

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Doodle
          numero={doodles[slug]}
          taille={60}
          top={doodleTop}
          right="2rem"
          mobile={{ taille: 60, top: doodleTop, right: '16px' }}
        />
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
          <LienExterne href={lienExterne.url} className={styles.cta}>
            {lienExterne.label}
          </LienExterne>
        )}
      </section>

      {sections.map((section, index) => (
        <Section key={section.titre ?? index} section={section} />
      ))}

      {captures.length > 0 && (
        <section className={styles.gallery}>
          {captures.map(({ nom, src }, index) => (
            <figure key={nom} className={styles.figure}>
              <Capture
                src={src}
                alt={legendes[nom] ?? `Capture du projet ${titre}`}
                prioritaire={index === 0}
              />
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
