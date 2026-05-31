import Blob from '../components/Blob'
import styles from './About.module.css'

const skills = [
  {
    cat: 'Data & Statistiques',
    items: [
      'Statistiques descriptives & inférentielles',
      'Modélisation statistique',
      'Réduction de dimension (ACP)',
      'Clustering',
      'Séries temporelles',
    ],
  },
  {
    cat: 'Bases de données',
    items: ['SQL', 'NoSQL', 'Modélisation relationnelle', 'Big Data', 'Couplage probabiliste'],
  },
  {
    cat: 'Langages',
    items: ['Python', 'R', 'JavaScript', 'HTML', 'CSS', 'VBA', 'SQL'],
  },
  {
    cat: 'Outils',
    items: ['Power BI', 'Figma', 'Excel', 'Canva', 'SAS', 'Git', 'Jupyter', 'Google Cloud Platform', 'VS Code'],
  },
]

const interests = [
  { label: 'Volley-ball', detail: 'Compétition régionale depuis plusieurs années, vice-champion de la Coupe de Bretagne.' },
  { label: 'Musculation', detail: 'Pratique régulière depuis deux ans, pour la santé, la force et le dépassement de soi.' },
  { label: 'Musique', detail: 'Auditeur passionné et curieux, de l\'écoute aux interviews d\'artistes. La musique est aussi à l\'origine de mon projet web le plus ambitieux.' },
  { label: 'Création web', detail: 'La création de sites est pour moi un terrain de jeu créatif autant que technique, à l\'intersection du design et du code.' },
  { label: 'Dessin', detail: 'Je dessine depuis toujours — des petits personnages simples, un geste spontané qui ne m\'a jamais quitté.' },
  { label: 'IA', detail: 'Passionné par ce domaine en constante évolution, je suis de près les actualités et j\'expérimente régulièrement les nouveaux outils.' },
]

export default function About() {
  return (
    <div className={styles.page}>
      <Blob num={3} size={300} style={{ top: '-60px', right: '-60px' }} />
      <Blob num={2} size={200} style={{ top: '52%', left: '-40px' }} />

      <section className={styles.hero}>
        <p className={styles.sectionNum}>001 —</p>
        <h1 className={styles.title}>À propos</h1>
      </section>

      <div className={styles.grid}>
        <section className={styles.bio}>
          <p className={styles.blockLabel}>PROFIL</p>
          <p className={styles.bioText}>
            Actuellement en troisième année de BUT Science des Données à l'IUT de Vannes,
            je me spécialise en étude et modélisation statistique. Au fil de mes projets
            et de mes deux stages — chez Statistique Canada puis chez Orange — j'ai développé
            une vraie appétence pour la création numérique : concevoir des interfaces,
            raconter des histoires avec des données, construire des outils utiles et bien pensés.
          </p>
        </section>

        <aside className={styles.aside}>
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>FORMATION</p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>BUT Science des Données</p>
                  <p className={styles.infoSub}>IUT Vannes · 2023 — 2026</p>
                  <p className={styles.infoSub}>Spécialisation : Étude et Modélisation Statistique · Option Mathématiques</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>Baccalauréat Général</p>
                  <p className={styles.infoSub}>Lycée René Cassin · 2020 — 2023</p>
                  <p className={styles.infoSub}>Spécialités : Mathématiques et SES · Mention Bien</p>
                </div>
              </li>
            </ul>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>LANGUES</p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>Français</p>
                  <p className={styles.infoSub}>Langue maternelle</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>Anglais C1</p>
                  <p className={styles.infoSub}>955 TOEIC</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section className={styles.skillsSection}>
        <p className={styles.sectionNum}>002 —</p>
        <h2 className={styles.sectionTitle}>Compétences</h2>
        <div className={styles.skillsGrid}>
          {skills.map(({ cat, items }) => (
            <div key={cat} className={styles.skillBlock}>
              <p className={styles.skillCat}>{cat}</p>
              <ul className={styles.skillList}>
                {items.map((s) => (
                  <li key={s} className={styles.skillTag}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.interestsSection}>
        <p className={styles.sectionNum}>003 —</p>
        <h2 className={styles.sectionTitle}>Centres d'intérêt</h2>
        <ul className={styles.interestList}>
          {interests.map(({ label, detail }) => (
            <li key={label} className={styles.interestItem}>
              <span className={styles.interestLabel}>{label}</span>
              <span className={styles.interestDetail}>{detail}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
