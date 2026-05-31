import Blob from '../components/Blob'
import styles from './Projects.module.css'

const stack = [
  'Python', 'Flask', 'Gunicorn',
  'Pandas', 'PyArrow / Parquet',
  'Supabase', 'PostgreSQL',
  'Spotify API',
  'Plotly',
  'HTML', 'CSS', 'JavaScript',
  'Figma',
  'Render', 'OVHcloud',
]

export default function ProjectsMusic() {
  return (
    <div className={styles.page}>
      <Blob num={6} size={380} style={{ top: '-80px', right: '-80px' }} />
      <Blob num={1} size={200} style={{ bottom: '-30px', left: '-30px' }} />
      <Blob num={3} size={220} style={{ bottom: '-55px', left: '40%' }} />

      <section className={styles.hero}>
        <p className={styles.sectionNum}>003 —</p>
        <h1 className={styles.title}>Site d'analyse<br />d'écoute musicale</h1>
        <p className={styles.heroSub}>
          Projet personnel ambitieux à l'intersection de la data, du web et de la musique.
        </p>
      </section>

      <section className={styles.featuredBlock}>
        <div className={styles.featuredMeta}>
          <p className={styles.featuredLabel}>PROJET PHARE</p>
          <p className={styles.featuredYear}>2025</p>
        </div>
        <div className={styles.featuredContent}>
          <h2 className={styles.featuredTitle}>Statimusic</h2>
          <p className={styles.featuredTagline}>
            Vos écoutes musicales méritent mieux qu'un Wrapped annuel.
          </p>
          <div className={styles.featuredDesc}>
            <p>
              Statimusic est né d'une frustration simple : les plateformes de streaming ne donnent
              accès qu'à une infime partie de vos données d'écoute. Un classement de fin d'année,
              quelques chiffres — et c'est tout. L'idée était de construire quelque chose de plus
              complet, de plus personnel, et surtout d'accessible gratuitement à n'importe qui.
            </p>
            <p>
              Le principe est simple : l'utilisateur importe son historique d'écoute Deezer — un
              fichier Excel que la plateforme met à disposition sur demande — et le site génère
              automatiquement un dashboard personnalisé. On y retrouve ses indicateurs clés (heures
              totales, nombre d'écoutes, artistes découverts), un podium de ses artistes, titres et
              albums favoris avec leurs photos, et des pages détaillées pour chaque artiste, album
              ou titre : graphique d'évolution mensuelle, date de première écoute, mois le plus
              écouté, classement dans l'historique global. Une barre de recherche permet d'explorer
              l'intégralité de son historique en temps réel.
            </p>
            <p>
              Le site est déployé et accessible sur statimusic.fr.
            </p>
          </div>
          <div className={styles.featuredStack}>
            <p className={styles.stackLabel}>STACK</p>
            <ul className={styles.stackList}>
              {stack.map((s) => (
                <li key={s} className={styles.stackTag}>{s}</li>
              ))}
            </ul>
          </div>
          <div className={styles.featuredActions}>
            <a href="https://statimusic.fr" className={styles.featuredCta} target="_blank" rel="noreferrer">
              Voir le projet →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.contextSection}>
        <p className={styles.sectionNum}>003.1 —</p>
        <h2 className={styles.sectionTitle}>Défis & Apprentissages</h2>
        <div className={styles.contextGrid}>
          <div className={styles.contextBlock}>
            <p className={styles.contextBlockLabel}>LE DÉFI PRINCIPAL</p>
            <p className={styles.contextText}>
              Le défi principal n'était pas de faire fonctionner le site — c'était de le faire
              fonctionner correctement à l'échelle. Un historique complet représente 140 000 lignes
              de données. Charger, filtrer et calculer des statistiques sur ce volume à chaque
              requête consommait trop de mémoire pour le serveur : les pages crashaient
              systématiquement.
            </p>
          </div>
          <div className={styles.contextBlock}>
            <p className={styles.contextBlockLabel}>DÉCISIONS D'ARCHITECTURE</p>
            <p className={styles.contextText}>
              La solution a été une série de décisions progressives — stocker les données en format
              Parquet plutôt qu'en JSON (75 % de RAM en moins à la lecture), ne lire que les
              colonnes strictement nécessaires, construire un index de recherche pré-calculé plutôt
              que de scanner le dataset à chaque frappe. J'ai aussi appris à gérer les limites des
              API externes : timeouts Spotify, rate limiting, résolution d'identifiants entre deux
              systèmes (ISRC Deezer vs Spotify ID).
            </p>
          </div>
          <div className={styles.contextBlock}>
            <p className={styles.contextBlockLabel}>DÉVELOPPEMENT SOLO</p>
            <p className={styles.contextText}>
              Ce projet a été intégralement conçu et développé seul, de la maquette Figma au
              déploiement en production. Environ cent heures de travail étalées sur plusieurs mois.
              Je n'avais jamais fait d'appel API, jamais utilisé une base de données en production,
              jamais déployé un site. Ce dont je suis le plus fier, c'est que le site existe
              vraiment — il est public, fonctionnel, et n'importe qui peut importer son historique
              Deezer et obtenir une analyse que nulle autre plateforme ne propose gratuitement.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
