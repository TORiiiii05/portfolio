const projets = [
  {
    slug: 'lelievre-paysage',
    categorie: 'web',
    titre: 'LELIÈVRE PAYSAGE — SITE VITRINE',
    tags: ['WordPress', 'SEO', 'Rédaction web'],
    contexte: 'Projet client · 2026 · Solo',
    statut: 'MISE EN LIGNE PROCHAINEMENT',
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
    legendes: {
      '01_avant':
        "Avant : le site créé par le client lui-même, sans identité visuelle claire, sans politique de confidentialité et peu adapté à l'accessibilité.",
      '02_accueil_long':
        `Après : la nouvelle page d'accueil. Une accroche locale et un bouton "Devis gratuit" dès l'arrivée, les deux grands métiers (entretien, création et aménagement), l'article de Ouest-France et les avis Google pour rassurer, puis les derniers conseils du blog.`,
      '03_prestations':
        "La grille des prestations d'entretien en bento box, construite à la main : taille de haies, remise en état, tonte et petit élagage, avec une carte qui renvoie vers les chantiers du client sur Instagram.",
      '04_prestation_detail':
        "Une page de prestation : un texte rédigé pour répondre aux questions des clients, deux appels à l'action (réalisations sur Instagram et devis), puis le détail de ce qui est compris.",
      '05_contact':
        "La page contact : coordonnées et horaires d'un côté, formulaire Forminator de l'autre, avec consentement et lien vers la politique de confidentialité.",
      '06_mobile':
        'La version mobile : le bouton de devis reste en tête de page, à côté du menu.',
    },
  },
  {
    slug: 'statimusic',
    categorie: 'web',
    titre: 'STATIMUSIC',
    tags: ['Python', 'Flask', 'Supabase'],
    contexte: 'Projet personnel · 2025-2026 · Solo',
    statut: 'EN RECONSTRUCTION',
    resume:
      "Un site d'analyse d'écoutes musicales : on importe son historique Deezer et on obtient un tableau de bord complet, gratuit et personnel.",
    mentionData: 'À la croisée du web et de la data',
    aDetail: true,
    // Masqué pendant la reconstruction. Pour le remettre, remplacer la ligne null par :
    // lienExterne: { label: 'statimusic.fr', url: 'https://statimusic.fr' },
    lienExterne: null,
    noteCaptures:
      'Statimusic est en cours de reconstruction : les captures de la nouvelle version arriveront avec sa mise en ligne.',
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
          'Le site sera de nouveau accessible sur statimusic.fr après sa reconstruction.',
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
    contexte: 'Projets personnels et universitaires · 2024 — 2026',
    resume:
      'Deux landing pages pour deux étapes de mon apprentissage du web : une maquette Figma, puis un mini-site codé en HTML et CSS.',
    aDetail: true,
    plusieursProjets: true,
    lienExterne: null,
    sections: [
      {
        titre: "Vinyles pour seniors libres d'esprit — Figma",
        sousTitre: 'Projet personnel · Challenge en 2 heures · 2024',
        images: 'vinyles',
        paragraphes: [
          "Inspiré par un challenge vu sur YouTube, avant même de commencer mes études de web. Le défi : trouver un sujet et le concevoir en deux heures. J'ai choisi la vente de vinyles avec une cible très précise, des seniors cool et libres d'esprit, pour donner au site une identité visuelle marquée. Wireframe, palette, typographie, puis landing page complète, sur un outil que je n'avais jamais utilisé.",
        ],
      },
      {
        titre: 'Kinésiologue et magnétiseur — HTML & CSS',
        sousTitre: 'Projet universitaire · Licence Pro · 2026',
        images: 'kine',
        paragraphes: [
          "Un mini-site pour un kinésiologue et magnétiseur fictif, réalisé pour apprendre l'intégration web. Une landing page qui présente le métier, avec le choix des couleurs, de la typographie et de la mise en page, et une petite FAQ interactive en JavaScript. Il ne manquerait que les pages de prestations et de contact pour en faire un site complet.",
        ],
      },
    ],
    legendes: {
      '01_landing_long_vinyles':
        "La maquette de la page d'accueil, pour une boutique de vinyles qui s'adresse à des seniors libres d'esprit : une palette brune et chaleureuse, des typographies à empattements et des visuels qui jouent l'humour.",
      '01_landing_long_kine':
        'Le mini-site complet, intégré en HTML et CSS : présentation des soins, philosophie, symptômes traités, témoignages, portrait, infos pratiques et FAQ.',
      '02_faq_kine':
        'La FAQ interactive : les questions s\'ouvrent au clic grâce à un peu de JavaScript.',
    },
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
    plusieursProjets: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le Magasin — CNAC Grenoble',
        sousTitre: 'Exercice en agence fictive · Groupe de 3 · Septembre – Octobre 2026',
        images: 'cnac',
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
        images: 'pasteine',
        liste: [
          "L'analyse de marché : étude d'un produit existant (Barilla Protein+), de ses arguments et de ses limites (prix doublé, format de 400 g).",
          "La veille Instagram : l'analyse de neuf réels sur les pâtes et les pâtes protéinées (accroches, légendes, hashtags, audio), puis une synthèse rédigée seul sur les codes visuels et sémantiques de cette niche, entre gourmandise et nutrition sportive.",
          "Les personas : Gaëtan, 25 ans, jeune actif sportif et débordé, et Léa, 30 ans, micro-influenceuse vegan. Pour chacun, nous avons défini les attentes, les freins à l'achat et les intentions de recherche.",
          `La marque : nom, logo, signature ("+ grosse quantité = + de muscle") et positionnement : un meilleur rapport qualité-prix, plus de protéines, un format plus généreux. Le packaging a été imaginé jusqu'au prototype.`,
        ],
      },
    ],
    legendes: {
      '01_cible_cnac':
        "Définition des cibles : le cœur de cible retenu, complété par une cible principale et une cible secondaire, pour savoir à qui parler en priorité et avec quels messages.",
      '02_personna_cnac':
        "Le persona tiré du cœur de cible : un visiteur type avec ses habitudes, ses envies et ses freins, qui sert de référence pour choisir le ton et les canaux.",
      '03_moodboard1_pasteine':
        "Direction retenue — l'univers de Gaëtan : des bruns chaleureux et gourmands, un beige simple et naturel, une typographie grosse et énergique, et un packaging en carton pratique et rapide, entre sport et nouveauté.",
      '04_moodboard2_pasteine':
        "Direction écartée — l'univers de Léa : un vert écologique et apaisant associé à l'orange de l'énergie, une typographie moderne et cosy, pour une version plus végane et inspirée du pilates.",
    },
  },
  {
    slug: 'affiche-soleil',
    categorie: 'data',
    titre: 'AFFICHE « SOLEIL » — MES ALBUMS EN DÉGRADÉ',
    tags: ['Python', 'Data visualisation', 'Projet personnel'],
    contexte: 'Projet personnel · 2026 · Solo',
    resume:
      "Une affiche imprimable de mes 339 albums les plus écoutés, classés par temps d'écoute et disposés en disque selon leur couleur dominante.",
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
              'Une affiche A2 en 300 dpi, avec 339 albums affichés sur plus de 550 pochettes disponibles.',
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
    capturesDetourees: ['01_affiche'],
    legendes: {
      '01_affiche':
        "L'affiche finale : 339 albums disposés en soleil, du centre clair aux bords sombres, avec le top 10 en grand format.",
      '02_atelier_pochettes':
        "L'Atelier, vue Pochettes : à gauche les réglages (nombre d'albums, part maximale de pochettes neutres, couleur retenue pour chaque pochette), au centre l'aperçu en direct, à droite l'inspection d'un album, dont on peut choisir la couleur et la taille à la main.",
      '03_atelier_couleurs':
        'Vue Couleurs : chaque pochette est remplacée par sa couleur retenue, pour vérifier le dégradé du disque avant le rendu final en haute définition.',
    },
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
      {
        noteItalique:
          "Seules les données patient par patient étaient confidentielles. Les données globales sur l'EPSM présentées ici ne le sont pas.",
      },
    ],
    legendes: {
      '01_accueil':
        "Page d'accueil : un menu latéral pour naviguer entre les trois parties, des onglets Hospitalisation / Ambulatoire, puis les indicateurs clés en cartes et les premiers graphiques (répartition par sexe et par tranche d'âge).",
      '02_hospitalisation':
        "Page Hospitalisation : un bloc de filtres (secteur, établissement, unité, période, tranche d'âge), puis le profil des patients, la durée moyenne des séjours et les principaux diagnostics, en données agrégées uniquement.",
      '03_ambulatoire':
        "Page Ambulatoire : le suivi par pôle de soins, avec une palette de bleus reprise sur l'ensemble de l'application pour garder une lecture cohérente d'une page à l'autre.",
    },
  },
  {
    slug: 'joueurs-fifa',
    categorie: 'data',
    titre: 'ANALYSE ET CLASSIFICATION DE JOUEURS FIFA',
    tags: ['R Shiny', 'Outil décisionnel'],
    contexte: 'Projet universitaire · 2024-2025 · IUT Vannes',
    resume:
      "Un outil d'aide au recrutement pour sélectionneurs : filtrer une base de joueurs FIFA et trouver des profils proches d'un joueur donné.",
    aDetail: true,
    lienExterne: null,
    sections: [
      {
        titre: 'Le projet',
        paragraphes: [
          "Une application R Shiny pensée pour un sélectionneur à la recherche de joueurs pour son équipe. Il peut filtrer toute la base selon ses critères (poste, âge, potentiel, notes techniques et physiques, pied préféré, valeur marchande), consulter le profil détaillé d'un joueur, puis obtenir des recommandations : à partir d'un joueur de référence, l'outil propose les profils les plus similaires grâce à une analyse en composantes principales (ACP) et à la méthode des k plus proches voisins.",
        ],
      },
    ],
    legendes: {
      '01_filtres':
        'Page Analyse des données : des filtres sur les notes globales, les compétences, le poste et la valeur du joueur pour réduire la base aux profils recherchés.',
      '02_profil_joueur':
        "Page Profil du joueur : recherche par nom, fiche détaillée, carte du joueur et statistiques de jeu comparées. La photo du joueur ne s'affiche plus aujourd'hui, car l'adresse des images utilisée à l'époque a changé depuis.",
    },
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
          "Conception d'un tableau de bord interactif Power BI autour d'une question : quels sont les effets de la surface de la route (sèche ou mouillée) sur les accidents corporels en France ? Les données open data de l'ONISR sont présentées sur deux pages, avec des filtres pour croiser les critères.",
        ],
      },
    ],
    legendes: {
      '01_generale':
        "Vue générale : âge moyen des accidentés, répartition hommes-femmes et taux de mortalité, puis la part des accidents selon la surface de la route, la vitesse maximale autorisée et la gravité. Filtres par usager, genre, âge et vitesse.",
      '02_precise':
        "Vue précise : accidents de jour et de nuit, selon la luminosité, le type d'intersection et la catégorie de véhicule. Filtres par type de trajet et luminosité.",
    },
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
    legendes: {
      '01_poster_long':
        "Le poster présenté au 14e Colloque francophone international sur les sondages. Il suit la démarche de l'article : l'immensité du territoire (600 000 km², 150 unités de gestion) et les contraintes d'accès, la sélection des tuiles puis des parcelles par échantillonnage équilibré, et enfin la comparaison par simulation de seize plans de sondage. Le plan à deux degrés équilibré atteint une précision proche du plan de référence, tout en réduisant les coûts de terrain.",
    },
  },
  {
    slug: 'meteo-australie',
    categorie: 'data',
    titre: 'CLASSIFICATION SUPERVISÉE — MÉTÉO AUSTRALIENNE',
    tags: ['Python', 'Machine Learning'],
    contexte: 'Projet universitaire · 2025-2026 · Solo',
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
    galerieEtapes: 'LE DÉROULÉ, ÉTAPE PAR ÉTAPE',
    legendes: {
      '01_cible':
        `Étape 1 — Comprendre la question. Il faut prédire la pluie du lendemain en trois classes, et elles sont très déséquilibrées : près de 80 % des jours sont sans pluie. Ce constat guide tout le projet, car un modèle qui répondrait toujours "pas de pluie" aurait déjà 80 % de bonnes réponses.`,
      '02_distributions':
        "Étape 2 — Explorer les données. Les températures suivent une forme proche de la loi normale, mais l'évaporation et le vent sont très asymétriques, avec des valeurs extrêmes. Pour préparer les données, j'ai aussi regroupé les 16 directions de vent en 8, fusionné les mesures de 9 h et 15 h en moyennes journalières pour éviter les doublons d'information, et complété les valeurs manquantes par la moyenne des trois jours précédents dans la même ville.",
      '03_winsorisation':
        "Étape 3 — Traiter les valeurs extrêmes. Plutôt que de supprimer des lignes, les valeurs situées au-delà des moustaches du boxplot sont ramenées à ces bornes (winsorisation). On garde toutes les observations tout en limitant l'effet des extrêmes, ce qui compte pour la méthode des k plus proches voisins, très sensible aux distances.",
      '04_bivariee':
        "Étape 4 — Repérer les variables qui comptent. Plus la pluie du lendemain est forte, moins la journée a été ensoleillée et plus elle a été humide. Les tests de Fisher et du Khi² confirment que l'ensoleillement, l'humidité, la nébulosité et la pluie du jour sont les facteurs les plus explicatifs.",
      '05_villes':
        'La ville joue aussi : Alice Springs, en plein désert, compte 92 % de jours secs, contre 69 % à Norfolk Island. Ce lien est significatif mais bien plus faible que celui de la pluie du jour, c\'est pourquoi la ville n\'a pas été retenue dans le modèle final.',
      '06_choix_k':
        "Étape 5 — Régler le modèle. Avec un seul voisin, le modèle apprend par cœur l'échantillon d'apprentissage (100 %) mais généralise mal (78 % en test). En augmentant le nombre de voisins, les deux courbes se rejoignent : le surapprentissage disparaît. Un balayage plus fin a permis de retenir 57 voisins.",
      '07_resultats':
        "Étape 6 — Évaluer avec un regard critique. Le modèle final (57 voisins, 4 variables) atteint 81,5 % de bonnes réponses en test, contre 66 % pour le modèle témoin (pluie demain = pluie aujourd'hui) et 75 % pour le classifieur bayésien naïf, avec des scores proches entre apprentissage et test. Mais le score global est trompeur : la pluie légère n'est presque jamais détectée (rappel de 1 %) et la pluie forte une fois sur trois. Les pistes suivantes : rééquilibrer les classes et utiliser une validation croisée.",
    },
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
  'meteo-australie',
  'accidents-route',
  'sondage-quebec',
  'joueurs-fifa',
  'challenge-dataviz',
])

export function trouverProjetDetaille(slug) {
  return projets.find((projet) => projet.slug === slug && projet.aDetail) ?? null
}

export function pageDuProjet(projet, from) {
  return from === '/web' || from === '/data' ? from : `/${projet.categorie}`
}
