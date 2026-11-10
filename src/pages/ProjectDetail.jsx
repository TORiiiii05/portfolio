import { useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import Doodle from '../components/Doodle'
import LienExterne from '../components/LienExterne'
import usePageMeta from '../hooks/usePageMeta'
import { trouverProjetDetaille } from '../data/projects'
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
    .map(([chemin, src]) => ({
      nom: chemin.slice(prefixe.length).replace(/\.[^.]+$/, ''),
      src,
    }))
    .sort((a, b) => a.nom.localeCompare(b.nom, 'fr', { numeric: true }))
}

function correspondASuffixe(capture, suffixe) {
  return capture.nom.endsWith(`_${suffixe}`)
}

function Paragraphes({ textes = [] }) {
  return textes.map((texte) => (
    <p key={texte} className={styles.contextText}>{texte}</p>
  ))
}

function Section({ section, children }) {
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
        {children}
      </section>
    )
  }

  if (variante === 'accroche') {
    return (
      <section className={styles.detailSection}>
        {paragraphes.map((texte) => (
          <p key={texte} className={styles.tagline}>{texte}</p>
        ))}
        {children}
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
      {children}
    </section>
  )
}

// Réserve la place de l'image avant son chargement, puis adopte ses vraies proportions.
function Capture({ src, alt, prioritaire, proportionsInitiales = '16 / 10' }) {
  const [proportions, setProportions] = useState(proportionsInitiales)

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

// Met en gras le début de la légende, jusqu'au premier « : » ou « — » inclus.
function Legende({ texte }) {
  const positions = [texte.indexOf(':'), texte.indexOf('—')].filter((i) => i >= 0)
  if (positions.length === 0) return texte
  const fin = Math.min(...positions) + 1
  return (
    <>
      <strong>{texte.slice(0, fin)}</strong>
      {texte.slice(fin)}
    </>
  )
}

function CaptureLongue({ capture, legende, alt, prioritaire }) {
  // Le voile disparaît au premier clic, défilement ou focus, et ne revient pas.
  const [voileVisible, setVoileVisible] = useState(true)
  const masquerVoile = () => setVoileVisible(false)

  return (
    <figure className={`${styles.figure} ${styles.figureLongue}`}>
      <div className={styles.fenetreBarre}>
        <span className={styles.fenetrePoints} aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
        <LienExterne href={capture.src} className={styles.fenetreLien}>
          VOIR EN GRAND
        </LienExterne>
      </div>
      <div className={styles.fenetreZone}>
        <div
          className={styles.fenetreCadre}
          role="region"
          tabIndex={0}
          aria-label={alt}
          onClick={masquerVoile}
          onScroll={masquerVoile}
          onWheel={masquerVoile}
          onTouchMove={masquerVoile}
          onFocus={masquerVoile}
        >
          <Capture src={capture.src} alt={alt} prioritaire={prioritaire} />
        </div>
        <div
          className={`${styles.fenetreVoile} ${voileVisible ? '' : styles.fenetreVoileMasque}`}
          aria-hidden="true"
        >
          <span className={styles.fenetreMessage}>↕ FAITES DÉFILER POUR VOIR LA PAGE ENTIÈRE</span>
        </div>
      </div>
      {legende && (
        <figcaption className={styles.figcaption}>
          <Legende texte={legende} />
        </figcaption>
      )}
    </figure>
  )
}

function FiguresEtapes({ captures, legendes, titre, premiere }) {
  return captures.map((capture) => (
    <figure key={capture.src} className={`${styles.figure} ${styles.figureEtape}`}>
      <a href={capture.src} target="_blank" rel="noopener noreferrer" className={styles.etapeLien}>
        <Capture
          src={capture.src}
          alt={legendes[capture.nom] ?? `Capture du projet ${titre}`}
          prioritaire={capture === premiere}
          proportionsInitiales="2 / 1"
        />
        <span className="sr-only"> (ouvrir en grand dans un nouvel onglet)</span>
      </a>
      {legendes[capture.nom] && (
        <figcaption className={styles.figcaption}><Legende texte={legendes[capture.nom]} /></figcaption>
      )}
    </figure>
  ))
}

function Figures({ captures, legendes, titre, premiere, detourees }) {
  return captures.map((capture) => (
    capture.nom.includes('_long') ? (
      <CaptureLongue
        key={capture.src}
        capture={capture}
        legende={legendes[capture.nom]}
        alt={legendes[capture.nom] ?? `Capture du projet ${titre}`}
        prioritaire={capture === premiere}
      />
    ) : (
    <figure
      key={capture.src}
      className={[
        styles.figure,
        detourees.includes(capture.nom) && styles.figureDetouree,
        capture.nom.includes('_mobile') && styles.figureMobile,
      ].filter(Boolean).join(' ')}
    >
      <Capture
        src={capture.src}
        alt={legendes[capture.nom] ?? `Capture du projet ${titre}`}
        prioritaire={capture === premiere}
      />
      {legendes[capture.nom] && (
        <figcaption className={styles.figcaption}><Legende texte={legendes[capture.nom]} /></figcaption>
      )}
    </figure>
    )
  ))
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const projet = trouverProjetDetaille(slug)

  if (!projet) return <NotFound />

  return <Projet key={slug} projet={projet} />
}

function Projet({ projet }) {
  const location = useLocation()
  const navigate = useNavigate()
  const { slug, titre, contexte, statut, tags, resume, lienExterne, sections, legendes, capturesDetourees = [], galerieEtapes, noteCaptures } = projet
  const captures = capturesDuProjet(slug)
  const suffixes = sections.map((section) => section.images).filter(Boolean)
  const capturesGalerie = captures.filter(
    (capture) => !suffixes.some((suffixe) => correspondASuffixe(capture, suffixe)),
  )
  // La première capture affichée sur la page, quel que soit son nom de fichier.
  const premiere =
    suffixes.flatMap((suffixe) => captures.filter((c) => correspondASuffixe(c, suffixe)))[0] ??
    capturesGalerie[0]
  const proprietesFigures = { legendes, titre, premiere, detourees: capturesDetourees }

  usePageMeta(titre, resume)

  // Arrivé depuis une autre page du site : on y revient, à la même position.
  // Lien ouvert directement : le lien mène à la page de la catégorie du projet.
  function retourner(e) {
    if (location.key === 'default') return
    e.preventDefault()
    navigate(-1)
  }

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
        <Link to={`/${projet.categorie}`} onClick={retourner} className={styles.backLink}>
          ← RETOUR
        </Link>
        <h1 className={styles.detailTitle}>{titre}</h1>
        {contexte && <p className={styles.heroSub}>{contexte}</p>}
        {(tags.length > 0 || statut) && (
          <ul className={styles.stackList}>
            {statut && <li className={`${styles.stackTag} ${styles.tagStatut}`}>{statut}</li>}
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

      {sections.map((section, index) => {
        const capturesSection = section.images
          ? captures.filter((capture) => correspondASuffixe(capture, section.images))
          : []

        return (
          <Section key={section.titre ?? index} section={section}>
            {capturesSection.length > 0 && (
              <div className={styles.sectionCaptures}>
                <Figures captures={capturesSection} {...proprietesFigures} />
              </div>
            )}
          </Section>
        )
      })}

      {(capturesGalerie.length > 0 || noteCaptures) && (
        <section className={styles.gallery}>
          {noteCaptures && <p className={styles.detailNote}>{noteCaptures}</p>}
          {galerieEtapes ? (
            <>
              <h3 className={`${styles.ligneTitle} ${styles.etapesTitre}`}>{galerieEtapes}</h3>
              <FiguresEtapes captures={capturesGalerie} legendes={legendes} titre={titre} premiere={premiere} />
            </>
          ) : (
            <Figures captures={capturesGalerie} {...proprietesFigures} />
          )}
        </section>
      )}
    </div>
  )
}
