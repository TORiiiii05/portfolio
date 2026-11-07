import Doodle from '../components/Doodle'
import usePageMeta from '../hooks/usePageMeta'
import styles from './About.module.css'

const skills = [
  {
    cat: 'WEB',
    items: [
      'HTML',
      'CSS',
      'Responsive design',
      'SEO',
      'Accessibilité',
      'Création no-code',
      'Hébergement & mise en ligne',
    ],
  },
  {
    cat: 'DESIGN & COM',
    items: ['UI/UX', 'Rédaction web', 'Stratégie de communication', 'Veille'],
  },
  {
    cat: 'DATA',
    items: [
      'Python',
      'R',
      'SQL',
      'Bases de données',
      'Statistiques & modélisation',
      'Machine learning',
    ],
  },
  {
    cat: 'OUTILS',
    items: [
      'WordPress',
      'Figma',
      'Illustrator',
      'Canva',
      'Power BI',
      'Git',
      'VS Code',
      'Microsoft 365',
      'IA générative',
    ],
  },
]

const interests = [
  { label: 'Volley-ball', detail: 'Compétition régionale depuis plusieurs années, vice-champion de la Coupe de Bretagne.' },
  { label: 'Musculation', detail: 'Pratique depuis trois ans, pour la santé, la force et le dépassement de soi.' },
  { label: 'Musique', detail: 'Auditeur passionné et curieux, de l\'écoute aux interviews d\'artistes. La musique est aussi à l\'origine de mon projet web le plus ambitieux.' },
  { label: 'Création web', detail: 'La création de sites est pour moi un terrain de jeu créatif autant que technique, à l\'intersection du design et du code.' },
  { label: 'Dessin', detail: 'Je dessine depuis toujours — des petits personnages simples, un geste spontané qui ne m\'a jamais quitté.' },
  { label: 'IA', detail: 'Passionné par ce domaine en constante évolution, je suis de près les actualités et j\'expérimente régulièrement les nouveaux outils.' },
]

export default function About() {
  usePageMeta('À propos', "Parcours, formation, compétences et centres d'intérêt de Jules Del Frate, étudiant web & communication.")

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Doodle
          numero={1}
          taille={120}
          top="20px"
          right="8%"
          mobile={{ taille: 64, top: '8px', right: '16px' }}
        />
        <p className={styles.sectionNum}>01 —</p>
        <h1 className={styles.title}>À propos</h1>
      </section>

      <div className={styles.grid}>
        <section className={styles.bio}>
          <p className={styles.blockLabel}>PROFIL</p>
          <p className={styles.bioText}>
            Diplômé d'un BUT Science des Données à l'IUT de Vannes, je suis aujourd'hui en licence
            professionnelle Conception, rédaction et réalisation de site web. Mes projets m'ont fait
            découvrir une autre facette du numérique : en concevant le front-end d'une application
            pour l'EPSM Charcot, puis en créant Statimusic de A à Z, j'ai pris goût à la création —
            la mise en page, les couleurs, l'identité d'un projet. Le web me permet aujourd'hui de
            réunir les deux : l'analyse et la création.
          </p>
        </section>

        <aside className={styles.aside}>
          <div className={styles.infoBlock}>
            <p className={styles.blockLabel}>FORMATION</p>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>Licence Pro Conception, rédaction et réalisation de site web</p>
                  <p className={styles.infoSub}>Institut de la Communication et des Médias, Échirolles · 2026 — 2027</p>
                </div>
              </li>
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
                  <p className={styles.infoTitle}>Anglais</p>
                  <p className={styles.infoSub}>C1 (955 TOEIC)</p>
                </div>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoDot}>—</span>
                <div>
                  <p className={styles.infoTitle}>Italien</p>
                  <p className={styles.infoSub}>Débutant, en cours d'apprentissage</p>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </div>

      <section className={styles.skillsSection}>
        <Doodle numero={14} taille={72} top="14px" right="2rem" />
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
