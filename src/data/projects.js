const projets = [
  {
    slug: 'lelievre-paysage',
    categorie: 'web',
    titre: 'LELIÈVRE PAYSAGE — SITE VITRINE',
    tags: ['WordPress', 'SEO', 'Rédaction web'],
    contexte: 'Projet client · 2026 · Solo',
    resume:
      "Refonte complète du site vitrine d'une entreprise de paysagisme : nouvelle identité visuelle, contenus optimisés pour le référencement, formulaire de demande de devis et mise en conformité RGPD.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le besoin',
        paragraphes: [
          "Alric Lelièvre, fondateur de Lelièvre Paysage, avait créé son site lui-même. Vieillissant et sans identité visuelle claire, il ne respectait ni les normes d'accessibilité ni la réglementation sur les données personnelles, et n'attirait pas assez de clients. Dans le cadre d'un projet de licence consacré à WordPress, je lui ai proposé de le refaire entièrement.",
        ],
      },
      {
        titre: "Ce que j'ai fait",
        liste: [
          'Architecture : accueil, prestations avec une page détaillée par service, présentation, blog, contact, ainsi que les pages légales (confidentialité, cookies) et une page de confirmation après envoi du formulaire.',
          'Direction graphique : une palette tirée de son logo, un vert évident pour le paysagisme associé à un beige naturel pour le contraste, avec le thème Kadence.',
          "Contenus : rédaction de tous les textes, adaptés au ton de l'entreprise et optimisés pour le référencement. Toutes les photos sont celles de ses propres chantiers.",
          'Référencement : mots-clés, hiérarchie des titres et méta-descriptions.',
          "Conformité : politique de confidentialité, gestion des cookies et respect des normes d'accessibilité.",
          'Formulaire : réalisé avec Forminator (nom, e-mail, message, consentement), les demandes arrivent directement sur sa boîte professionnelle.',
        ],
      },
      {
        ligne: [
          {
            titre: 'Le défi',
            paragraphes: ['Construire à la main la grille en bento box qui présente les prestations.'],
          },
          {
            titre: 'Outils',
            paragraphes: ['WordPress · Kadence · Forminator'],
          },
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'statimusic',
    categorie: 'web',
    titre: 'STATIMUSIC',
    tags: ['Python', 'Flask', 'Supabase'],
    contexte: 'Projet personnel · 2025-2026 · Solo',
    resume:
      "Un site d'analyse d'écoutes musicales : on importe son historique Deezer et on obtient un tableau de bord complet, gratuit et personnel.",
    mentionData: 'À la croisée du web et de la data',
    aDetail: true,
    lienExterne: { label: 'statimusic.fr', url: 'https://statimusic.fr' },
    sections: [
      {
        variante: 'accroche',
        paragraphes: ["Vos écoutes musicales méritent mieux qu'un Wrapped annuel."],
      },
      {
        titre: "Site d'analyse d'écoute musicale",
        paragraphes: [
          "Statimusic est né d'une frustration simple : les plateformes de streaming ne donnent accès qu'à une infime partie de vos données d'écoute. Un classement de fin d'année, quelques chiffres — et c'est tout. L'idée était de construire quelque chose de plus complet, de plus personnel, et surtout d'accessible gratuitement à n'importe qui.",
          "Le principe est simple : l'utilisateur importe son historique d'écoute Deezer — un fichier Excel que la plateforme met à disposition sur demande — et le site génère automatiquement un dashboard personnalisé. On y retrouve ses indicateurs clés (heures totales, nombre d'écoutes, artistes découverts), un podium de ses artistes, titres et albums favoris avec leurs photos, et des pages détaillées pour chaque artiste, album ou titre : graphique d'évolution mensuelle, date de première écoute, mois le plus écouté, classement dans l'historique global. Une barre de recherche permet d'explorer l'intégralité de son historique en temps réel.",
          'Le site est déployé et accessible sur statimusic.fr.',
        ],
      },
      {
        titre: 'Stack',
        variante: 'tags',
        liste: [
          'Python',
          'Flask',
          'Gunicorn',
          'Pandas',
          'PyArrow / Parquet',
          'Supabase',
          'PostgreSQL',
          'Spotify API',
          'Plotly',
          'HTML',
          'CSS',
          'JavaScript',
          'Figma',
          'Render',
          'OVHcloud',
        ],
      },
      {
        titre: 'Défis & apprentissages',
        colonnes: [
          {
            titre: 'DÉVELOPPEMENT SOLO',
            paragraphes: [
              "Ce projet a été intégralement conçu et développé seul, de la maquette Figma au déploiement en production. Environ cent heures de travail étalées sur plusieurs mois. Je n'avais jamais fait d'appel API, jamais utilisé une base de données en production, jamais déployé un site. Ce dont je suis le plus fier, c'est que le site existe vraiment — il est public, fonctionnel, et n'importe qui peut importer son historique Deezer et obtenir une analyse que nulle autre plateforme ne propose gratuitement.",
            ],
          },
          {
            titre: 'LE DÉFI PRINCIPAL',
            paragraphes: [
              "Le défi principal n'était pas de faire fonctionner le site — c'était de le faire fonctionner correctement à l'échelle. Un historique complet représente 140 000 lignes de données. Charger, filtrer et calculer des statistiques sur ce volume à chaque requête consommait trop de mémoire pour le serveur : les pages crashaient systématiquement.",
            ],
          },
          {
            titre: "DÉCISIONS D'ARCHITECTURE",
            paragraphes: [
              "La solution a été une série de décisions progressives — stocker les données en format Parquet plutôt qu'en JSON (75 % de RAM en moins à la lecture), ne lire que les colonnes strictement nécessaires, construire un index de recherche pré-calculé plutôt que de scanner le dataset à chaque frappe. J'ai aussi appris à gérer les limites des API externes : timeouts Spotify, rate limiting, résolution d'identifiants entre deux systèmes (ISRC Deezer vs Spotify ID).",
            ],
          },
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'landing-pages',
    categorie: 'web',
    titre: 'LANDING PAGES — DE LA MAQUETTE AU CODE',
    tags: ['Figma', 'HTML', 'CSS'],
    contexte: 'Projets perso et universitaire · 2024 — 2026',
    resume:
      'Deux landing pages pour deux étapes de mon apprentissage du web : une maquette Figma, puis un mini-site codé en HTML et CSS.',
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: "Vinyles pour seniors libres d'esprit — Figma",
        sousTitre: 'Projet perso · Challenge en 2 heures · 2024',
        paragraphes: [
          "Inspiré par un challenge vu sur YouTube, avant même de commencer mes études de web. Le défi : trouver un sujet et le concevoir en deux heures. J'ai choisi la vente de vinyles avec une cible très précise, des seniors cool et libres d'esprit, pour donner au site une identité visuelle marquée. Wireframe, palette, typographie, puis landing page complète, sur un outil que je n'avais jamais utilisé.",
        ],
      },
      {
        titre: 'Kinésiologue et magnétiseur — HTML & CSS',
        sousTitre: 'Projet universitaire · Licence Pro · 2026',
        paragraphes: [
          "Un mini-site pour un kinésiologue et magnétiseur fictif, réalisé pour apprendre l'intégration web. Une landing page qui présente le métier, avec le choix des couleurs, de la typographie et de la mise en page, et une petite FAQ interactive en JavaScript. Il ne manquerait que les pages de prestations et de contact pour en faire un site complet.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'communication',
    categorie: 'web',
    titre: 'COMMUNICATION — STRATÉGIE & IDENTITÉ DE MARQUE',
    tags: ['Stratégie de com', 'Veille', 'Persona'],
    contexte: 'Projets universitaires · Licence Pro · 2026 · En groupe',
    resume:
      "Deux exercices en agence fictive : une stratégie de communication pour un centre d'art contemporain, puis la création d'une marque de pâtes protéinées.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le Magasin — CNAC Grenoble',
        sousTitre: 'Exercice en agence fictive · Groupe de 3 · Septembre – Octobre 2026',
        liste: [
          `Le constat : une image vieillissante, un site difficile à parcourir et une faible visibilité auprès des jeunes, avec l'idée reçue que l'art contemporain n'est "pas pour tout le monde". Pourtant le lieu, son architecture et son histoire méritent d'être connus.`,
          "La veille : une visite du centre et un échange avec l'équipe, l'analyse de sa communication actuelle (site, réseaux, brochures), puis un tour des autres centres d'art, nationaux et régionaux, et des tendances du secteur.",
          "La cible : un persona de jeune actif ou en fin d'études, curieux, toujours à la recherche de nouvelles sorties, avec un budget loisirs.",
          "L'objectif : augmenter la fréquentation sur place.",
          'Les canaux : Instagram et affichage. Publications en cours de réalisation.',
        ],
        noteItalique:
          "Ce que j'en retiens : ma première stratégie de communication, construite avec des camarades qui en avaient déjà fait et m'ont appris la méthode.",
      },
      {
        titre: 'Pasteine — pâtes protéinées',
        sousTitre: 'Exercice en agence fictive · Groupe de 5 · Septembre – Octobre 2026',
        liste: [
          "L'analyse de marché : étude d'un produit existant (Barilla Protein+), de ses arguments et de ses limites (prix doublé, format de 400 g).",
          "La veille Instagram : l'analyse de neuf réels sur les pâtes et les pâtes protéinées (accroches, légendes, hashtags, audio), puis une synthèse rédigée seul sur les codes visuels et sémantiques de cette niche, entre gourmandise et nutrition sportive.",
          "Les personas : Gaëtan, 25 ans, jeune actif sportif et débordé, et Léa, 30 ans, micro-influenceuse vegan. Pour chacun, nous avons défini les attentes, les freins à l'achat et les intentions de recherche.",
          `La marque : nom, logo, signature ("+ grosse quantité = + de muscle") et positionnement : un meilleur rapport qualité-prix, plus de protéines, un format plus généreux. Le packaging a été imaginé jusqu'au prototype.`,
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'affiche-soleil',
    categorie: 'data',
    titre: 'AFFICHE « SOLEIL » — MES ALBUMS EN DÉGRADÉ',
    tags: ['Python', 'Data visualisation', 'Projet perso'],
    contexte: 'Projet personnel · 2026 · Solo',
    resume:
      "Une affiche imprimable de mes 300 albums les plus écoutés, classés par temps d'écoute et disposés en disque selon leur couleur dominante.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          `Transformer huit ans d'écoute en objet visuel. Mes historiques Deezer et Spotify, de 2018 à 2026, fusionnés : 166 281 écoutes, soit 5 844 heures. Les albums sont classés par temps d'écoute, puis leurs pochettes forment un disque "soleil" : la teinte suit l'angle, la luminosité va du centre clair au bord sombre, et le top 10 apparaît en grand format.`,
        ],
      },
      {
        titre: 'La démarche',
        liste: [
          "Les données : fusion des deux historiques, nettoyage des noms d'albums, regroupement des albums éclatés par les featurings. Les écoutes de moins de 30 secondes et les singles sont exclus.",
          "Les pochettes : récupérées via l'API Spotify, avec un système de cache pour reprendre là où le traitement s'était arrêté.",
          'La couleur dominante : extraite de chaque pochette avec un algorithme de regroupement (k-means) dans un espace de couleur proche de la perception humaine.',
          "La disposition : chaque pochette est placée là où sa couleur se rapproche le plus de la couleur attendue (algorithme d'affectation optimale), et le nombre d'albums s'ajuste pour garder un disque symétrique.",
          "L'Atelier : un éditeur dans le navigateur pour régler les paramètres avec un aperçu en direct, corriger une couleur à la main, retirer un album et comparer des versions.",
        ],
      },
      {
        ligne: [
          {
            titre: 'Le défi',
            paragraphes: [
              "Ajuster les nombreux paramètres pour obtenir un rendu vraiment agréable à l'œil. Chaque choix change le résultat. Par exemple, retenir la plus grande zone de couleur donnait 71 % de pochettes grises ou noires, contre 44 % en retenant la couleur la plus vive. Huit formes ont été testées avant de retenir le soleil.",
            ],
          },
          {
            titre: 'Le résultat',
            paragraphes: [
              'Une affiche A2 en 300 dpi, avec environ 300 albums affichés sur plus de 550 pochettes disponibles.',
            ],
          },
          {
            titre: 'Outils',
            paragraphes: ['Python · Pandas · Pillow · scikit-learn · API Spotify · Flask'],
          },
        ],
      },
      {
        noteItalique: "Développé avec l'IA comme assistant, sur le même principe que Statimusic.",
      },
    ],
    legendes: {},
  },
  {
    slug: 'epsm-charcot',
    categorie: 'data',
    titre: 'VISUALISATION DE DONNÉES — EPSM CHARCOT',
    tags: ['R Shiny', 'Données confidentielles'],
    contexte: 'Projet universitaire · 2023-2024 · Groupe de 7',
    resume:
      "Une application R Shiny d'aide à la décision pour un établissement psychiatrique, dont j'ai conçu le front-end.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Développement d'une application d'aide à la décision pour l'EPSM Charcot, un établissement psychiatrique, dans le cadre d'un projet de six mois en première année de BUT. Les données étant sensibles et anonymisées, l'application se concentrait sur des statistiques globales, des profils types selon l'âge et le genre, ainsi que les durées de séjour — sans jamais exposer de données individuelles. Je me suis principalement occupé du front-end — conception des pages, choix des couleurs, mise en page — une expérience qui a révélé mon goût pour le design d'interface.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'joueurs-fifa',
    categorie: 'data',
    titre: 'ANALYSE ET CLASSIFICATION DE JOUEURS FIFA',
    tags: ['R Shiny', 'Outil décisionnel'],
    contexte: 'Projet universitaire · 2024-2025 · IUT Vannes',
    resume:
      'Une application Shiny pour explorer une base de joueurs FIFA et regrouper les profils par ACP et clustering.',
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Application Shiny d'exploration d'une base de données de joueurs FIFA. L'outil intègre un moteur de recherche permettant de filtrer et visualiser les profils de joueurs, combiné à des méthodes d'analyse multivariée — ACP et clustering — pour regrouper les joueurs selon leurs caractéristiques statistiques et identifier des profils types.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'accidents-route',
    categorie: 'data',
    titre: 'TABLEAU DE BORD DES ACCIDENTS DE LA ROUTE',
    tags: ['Power BI', 'Visualisation de données'],
    contexte: 'Projet universitaire · 2024-2025 · IUT Vannes',
    resume:
      "Un tableau de bord Power BI sur les accidents corporels de la route en France, à partir des données ouvertes de l'ONISR.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Conception d'un tableau de bord interactif Power BI autour des accidents corporels de la circulation en France, à partir des données open data de l'ONISR. Le rapport s'organise en deux pages : une vue générale (âge des usagers, répartition hommes-femmes, taux de mortalité, gravité des accidents, état de la chaussée et vitesse autorisée) et une vue précise (accidents de jour et de nuit, route sèche ou mouillée, luminosité, catégories de véhicules et types d'intersection), avec des filtres pour croiser les critères.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'sondage-quebec',
    categorie: 'data',
    titre: 'SONDAGE SPATIAL — INVENTAIRES FORESTIERS DU QUÉBEC',
    tags: ['Statistique', 'Échantillonnage'],
    contexte: 'Projet universitaire · 2025-2026 · Groupe de 4',
    resume:
      "Un poster scientifique sur l'échantillonnage des forêts québécoises, présenté à un colloque international de statisticiens.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Synthèse et poster scientifique réalisés à partir de l'article de Vallée et al. (2015), portant sur un plan de sondage à deux degrés pour l'inventaire des forêts québécoises. Le poster a été présenté lors du 14e Colloque Francophone International sur les Sondages, organisé par l'Université Bretagne Sud sur le site de l'IUT de Vannes — une expérience rare pour des étudiants de BUT, face à un public de chercheurs et de statisticiens.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'meteo-australie',
    categorie: 'data',
    titre: 'CLASSIFICATION SUPERVISÉE — MÉTÉO AUSTRALIENNE',
    tags: ['Python', 'Machine Learning'],
    contexte: 'Projet universitaire · 2025-2026 · IUT Vannes',
    resume: 'Prédire la pluie du lendemain en Australie : deux algorithmes de classification comparés.',
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Classification supervisée appliquée à des données météorologiques australiennes, avec pour objectif de prédire le niveau de pluie du lendemain en trois classes. Deux algorithmes ont été comparés — K plus proches voisins et classifieur bayésien naïf — en évaluant leurs performances respectives. Un projet de data mining complet, de l'exploration des variables à l'analyse critique des modèles.",
        ],
      },
    ],
    legendes: {},
  },
  {
    slug: 'challenge-dataviz',
    categorie: 'data',
    titre: 'CHALLENGE DATAVIZ NATIONAL',
    tags: ['Power BI', 'Visualisation de données'],
    contexte: 'Challenge national IUT · 2024 · Groupe de 4',
    resume: `Participation au Challenge Dataviz, compétition nationale regroupant tous les IUT Science des Données de France. En une journée, notre équipe a analysé une base de données Météo France pour répondre à la problématique : "Comment la météo affecte-t-elle la pollution ?" J'ai pris en charge la définition de la problématique, la gestion de Power BI et la coordination de l'équipe.`,
    aDetail: false,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
]

function selectionner(slugs) {
  return slugs.map((slug) => projets.find((projet) => projet.slug === slug))
}

export const projetsWeb = selectionner([
  'lelievre-paysage',
  'statimusic',
  'landing-pages',
  'communication',
])

export const projetsData = selectionner([
  'statimusic',
  'affiche-soleil',
  'epsm-charcot',
  'joueurs-fifa',
  'accidents-route',
  'sondage-quebec',
  'meteo-australie',
  'challenge-dataviz',
])

export function trouverProjetDetaille(slug) {
  return projets.find((projet) => projet.slug === slug && projet.aDetail) ?? null
}

export function pageDuProjet(projet, from) {
  return from === '/web' || from === '/data' ? from : `/${projet.categorie}`
}
