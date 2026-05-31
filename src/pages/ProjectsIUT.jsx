import Blob from '../components/Blob'
import styles from './Projects.module.css'

const projects = [
  {
    num: '01',
    title: 'Visualisation de données — EPSM Charcot',
    type: 'Projet universitaire · Groupe de 7',
    stack: ['R Shiny', 'Données confidentielles'],
    year: '2023-2024',
    desc: 'Développement d\'une application d\'aide à la décision pour l\'EPSM Charcot, un établissement psychiatrique, dans le cadre d\'un projet de six mois en première année de BUT. Les données étant sensibles et anonymisées, l\'application se concentrait sur des statistiques globales, des profils types selon l\'âge et le genre, ainsi que les durées de séjour. Je me suis principalement occupé du front-end — conception des pages, choix des couleurs, mise en page — une expérience qui a révélé mon goût pour le design d\'interface.',
    link: null,
    repo: null,
    highlight: true,
  },
  {
    num: '02',
    title: 'Challenge Dataviz National',
    type: 'Challenge national IUT · Groupe de 4',
    stack: ['Power BI', 'Visualisation de données'],
    year: '2024',
    desc: 'Participation au Challenge Dataviz, compétition nationale regroupant tous les IUT Science des Données de France. En une journée, notre équipe a analysé une base de données Météo France pour répondre à la problématique : "Comment la météo affecte-t-elle la pollution ?" J\'ai pris en charge la définition de la problématique, la gestion de Power BI et la coordination de l\'équipe.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '03',
    title: 'Analyse des émissions de CO₂ des véhicules',
    type: 'Projet universitaire · Binôme',
    stack: ['R', 'Analyse statistique'],
    year: '2025',
    desc: 'Analyse statistique d\'un jeu de données de 55 000 véhicules issues de data.gouv.fr. Après nettoyage et recodage des données, nous avons réalisé des analyses descriptives et des premières modélisations par régression linéaire pour identifier les facteurs influençant les émissions de CO₂.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '04',
    title: 'Analyse et classification de joueurs FIFA',
    type: 'Projet universitaire · IUT Vannes',
    stack: ['R Shiny', 'Outil décisionnel'],
    year: '2024-2025',
    desc: 'Application Shiny d\'exploration d\'une base de données de joueurs FIFA. L\'outil intègre un moteur de recherche permettant de filtrer et visualiser les profils de joueurs, combiné à des méthodes d\'analyse multivariée — ACP et clustering — pour regrouper les joueurs selon leurs caractéristiques statistiques et identifier des profils types.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '05',
    title: 'Analyse critique d\'un article de Statistique Canada',
    type: 'Projet universitaire · Groupe de 4',
    stack: ['Analyse statistique'],
    year: '2024-2025',
    desc: 'Analyse critique d\'un article de Statistique Canada portant sur la qualité des données dans les échantillons non probabilistes en ligne. Le travail consistait à synthétiser la méthodologie de benchmarking utilisée, identifier ses forces et limites, et proposer des pistes d\'amélioration. Un exercice de recul analytique sur des enjeux concrets : représentativité, biais de réponse et fiabilité des enquêtes.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '06',
    title: 'Tableau de bord des accidents de la route',
    type: 'Projet universitaire · IUT Vannes',
    stack: ['Power BI', 'Visualisation de données'],
    year: '2024-2025',
    desc: 'Conception d\'un tableau de bord interactif Power BI autour des accidents corporels de la circulation en France, à partir des données open data de l\'ONISR. Le dashboard décline plusieurs axes d\'analyse : répartition géographique des accidents, profil des usagers impliqués, types de véhicules et conditions de l\'accident.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '07',
    title: 'Sondage spatial — inventaires forestiers du Québec',
    type: 'Projet universitaire · Groupe de 4',
    stack: ['Statistique', 'Échantillonnage'],
    year: '2025-2026',
    desc: 'Synthèse et poster scientifique réalisés à partir de l\'article de Vallée et al. (2015), portant sur un plan de sondage à deux degrés pour l\'inventaire des forêts québécoises. Le poster a été présenté lors du 14e Colloque Francophone International sur les Sondages, organisé par l\'Université Bretagne Sud sur le site de l\'IUT de Vannes — une expérience rare pour des étudiants de BUT, face à un public de chercheurs et de statisticiens.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '08',
    title: 'Classification supervisée — météo australienne',
    type: 'Projet universitaire · IUT Vannes',
    stack: ['Python', 'Machine Learning'],
    year: '2025-2026',
    desc: 'Classification supervisée appliquée à des données météorologiques australiennes, avec pour objectif de prédire le niveau de pluie du lendemain en trois classes. Deux algorithmes ont été comparés — K plus proches voisins et classifieur bayésien naïf — en évaluant leurs performances respectives. Un projet de data mining complet, de l\'exploration des variables à l\'analyse critique des modèles.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '09',
    title: 'Segmentation clients bancaires',
    type: 'Projet universitaire · IUT Vannes',
    stack: ['Tanagra', 'Marketing'],
    year: '2025-2026',
    desc: 'Segmentation de clients bancaires autour de deux axes : une segmentation multicanale basée sur les comportements de connexion via K-means et CAH, et une segmentation par portefeuille de contrats. Les clusters obtenus ont servi de base à la construction d\'un plan d\'actions marketing différencié avec allocation budgétaire par segment.',
    link: null,
    repo: null,
    highlight: false,
  },
  {
    num: '10',
    title: 'Analyse statistique de données bancaires',
    type: 'Projet universitaire · IUT Vannes',
    stack: ['SAS', 'Statistiques'],
    year: '2025-2026',
    desc: 'Analyse complète d\'une base de données bancaires de 602 clients à l\'aide du logiciel SAS. Le projet couvrait la préparation des données, l\'étude univariée, des tests statistiques variés — Khi-deux, corrélation de Pearson, tests t de Student — ainsi qu\'une régression linéaire. Un projet transversal mobilisant l\'ensemble des procédures SAS vues en formation.',
    link: null,
    repo: null,
    highlight: false,
  },
]

export default function ProjectsIUT() {
  return (
    <div className={styles.page}>
      <Blob num={5} size={260} style={{ top: '42%', right: '-30px' }} />

      <section className={styles.hero}>
        <p className={styles.sectionNum}>002 —</p>
        <h1 className={styles.title}>Projets IUT</h1>
        <p className={styles.heroSub}>
          Projets réalisés dans le cadre du BUT Science des Données —
          analyse, visualisation, business intelligence.
        </p>
      </section>

      <ul className={styles.projectList}>
        {projects.map((p) => (
          <li key={p.num} className={`${styles.projectItem} ${p.highlight ? styles.projectHighlight : ''}`}>
            <div className={styles.projectMeta}>
              <span className={styles.projectNum}>{p.num}</span>
              <span className={styles.projectYear}>{p.year}</span>
            </div>
            <div className={styles.projectBody}>
              <div className={styles.projectHeader}>
                <h2 className={styles.projectTitle}>{p.title}</h2>
                <span className={styles.projectType}>{p.type}</span>
              </div>
              <p className={styles.projectDesc}>{p.desc}</p>
              <div className={styles.projectFooter}>
                <ul className={styles.stackList}>
                  {p.stack.map((s) => (
                    <li key={s} className={styles.stackTag}>{s}</li>
                  ))}
                </ul>
                <div className={styles.projectLinks}>
                  {p.repo && <a href={p.repo} className={styles.projectLink} target="_blank" rel="noreferrer">GitHub →</a>}
                  {p.link && <a href={p.link} className={styles.projectLink} target="_blank" rel="noreferrer">Voir →</a>}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
