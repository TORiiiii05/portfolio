import Doodle from '../components/Doodle'
import usePageMeta from '../hooks/usePageMeta'
import styles from './Experience.module.css'

const experiences = [
  {
    num: '01',
    id: 'orange-france',
    company: 'Orange France',
    role: 'Data Scientist — Ciblage Marketing Pro/PME',
    period: 'Février – Mai 2026 · 3 mois',
    location: 'Rennes',
    type: 'Stage',
    context: 'Stage de troisième année au sein de l\'équipe Data Analytics Pro PME d\'Orange France, travaillant sur l\'ensemble des problématiques data du marché des professionnels et PME. Encadrement par Maël Lanoë, data scientist avec plus de 20 ans d\'expérience.',
    enClair: 'mon rôle était d\'aider les équipes commerciales à savoir quels prospects et quels clients contacter en priorité. À partir des données d\'environ 1,5 million de clients professionnels, j\'ai construit des outils de prédiction qui estiment le potentiel d\'une entreprise et ses chances de devenir cliente. J\'ai travaillé en autonomie, avec un point quotidien, au sein d\'une équipe d\'une dizaine de personnes réparties entre Rennes et Paris.',
    missions: [
      'Construction d\'une usine à score marketing : conception et entraînement de trois indicateurs de machine learning destinés aux équipes commerciales — estimation du chiffre d\'affaires potentiel d\'un prospect, score de probabilité de conversion, et prévision du chiffre d\'affaires futur sur 6 mois.',
      'Modélisation sur données à grande échelle : travail sur des jeux de données atteignant 10 millions de lignes et près de 1 000 variables. Choix et justification des modèles (forêts aléatoires), feature engineering élaboré (agrégats temporels, variables de dynamique, indicateurs de stabilité).',
      'Résolution d\'un problème de biais mathématique : transformation de la variable cible via log ratio pour le score de CA futur, corrigée par l\'application du coefficient de smearing de Duan — implémentée et validée empiriquement.',
      'Gestion des contraintes big data : conversion de fichiers CSV volumineux en Parquet pour traiter 16 millions de lignes en moins de 8 minutes sur Dataiku. Solution présentée à l\'équipe.',
    ],
    stack: ['Python', 'Pandas', 'Scikit-learn', 'PyArrow', 'Dataiku', 'Google Cloud Platform', 'SQL', 'Jupyter Notebook', 'VS Code'],
    highlight: true,
  },
  {
    num: '02',
    id: 'statistique-canada',
    company: 'Statistique Canada',
    role: 'Stagiaire en Méthodologie Statistique — Couplage Probabiliste',
    period: 'Avril – Juin 2025 · 3 mois',
    location: 'Ottawa',
    type: 'Stage',
    context: 'Stage de deuxième année au sein de la Division des Méthodes d\'Intégration Statistique (DMIS), dans le cadre d\'un partenariat avec l\'IUT de Vannes. Environnement bilingue, travail sur des données confidentielles réelles dans un cadre sécurisé strict.',
    enClair: 'Statistique Canada produit les statistiques officielles du pays. Mon équipe relie entre elles des bases de données qui n\'ont pas d\'identifiant commun, par exemple pour retrouver une même personne dans deux fichiers à partir de son nom et de sa date de naissance, afin d\'enrichir les enquêtes nationales. Trois mois à Ottawa, en français et en anglais.',
    missions: [
      'Montée en compétence sur le couplage probabiliste : découverte complète de la méthode de Fellegi et Sunter (1969), formation via le G-Link User Guide et suivi d\'un cours structuré de 10 séances animé par les méthodologistes de l\'unité.',
      'Couplage probabiliste sur le Registre d\'Assurance Sociale (RAS) : participation à un projet réel de mise à jour d\'une base interne. Prétraitement des données, création des pseudo-clés, validation de paires ambiguës via requêtes SQL.',
      'Conversion SAS → Python : rédaction de spécifications fonctionnelles pour des programmes de repondération statistique, puis conversion en Python. Résolution d\'un problème de mémoire via conversion de fichiers CSV en Parquet — solution présentée à la section.',
      'Résolution d\'égalité : arbitrage entre réviseurs sur des paires de couplage en désaccord, selon un protocole documenté.',
    ],
    stack: ['Python', 'Pandas', 'PyArrow', 'SAS', 'SAS Enterprise Guide', 'G-COUP', 'SQL', 'Jupyter Notebook', 'Azure Virtual Desktop'],
    highlight: false,
  },
]

export default function Experience() {
  usePageMeta('Expériences', "Deux stages en environnement professionnel — en France et à l'international.")

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Doodle
          numero={16}
          taille={110}
          top="40px"
          right="8%"
          mobile={{ taille: 40, top: '0px', right: '16px' }}
        />
        <p className={styles.sectionNum}>04 —</p>
        <h1 className={styles.title}>Expériences</h1>
        <p className={styles.heroSub}>
          Deux stages en environnement professionnel —
          en France et à l'international.
        </p>
      </section>

      <ul className={styles.expList}>
        {experiences.map((exp) => (
          <li key={exp.num} id={exp.id} className={`${styles.expItem} ${exp.highlight ? styles.expHighlight : ''}`}>
            <div className={styles.expSide}>
              <span className={styles.expNum}>{exp.num}</span>
              <span className={styles.expType}>{exp.type}</span>
            </div>
            <div className={styles.expBody}>
              <div className={styles.expHeader}>
                <h2 className={styles.expCompany}>{exp.company}</h2>
                <div className={styles.expMeta}>
                  <span className={styles.expRole}>{exp.role}</span>
                  <span className={styles.expPeriod}>{exp.period} · {exp.location}</span>
                </div>
              </div>

              <div className={styles.contextText}>
                <p className={styles.missionText}>{exp.context}</p>
                <p className={styles.missionText}>
                  <strong>En clair :</strong> {exp.enClair}
                </p>
              </div>

              <ul className={styles.missionList}>
                {exp.missions.map((m, i) => (
                  <li key={i} className={styles.missionItem}>
                    <span className={styles.missionDash}>—</span>
                    <p className={styles.missionText}>{m}</p>
                  </li>
                ))}
              </ul>

              <div className={styles.expFooter}>
                <ul className={styles.stackList}>
                  {exp.stack.map((s) => (
                    <li key={s} className={styles.stackTag}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
