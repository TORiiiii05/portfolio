const projets = [
  {
    slug: 'lelievre-paysage',
    categorie: 'web',
    titre: 'LELIÈVRE PAYSAGE — SITE VITRINE',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'statimusic',
    categorie: 'web',
    titre: 'STATIMUSIC',
    tags: [],
    contexte: 'Projet phare · 2025',
    resume: "Projet personnel ambitieux à l'intersection de la data, du web et de la musique.",
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
        titre: 'Défis & Apprentissages',
        colonnes: [
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
          {
            titre: 'DÉVELOPPEMENT SOLO',
            paragraphes: [
              "Ce projet a été intégralement conçu et développé seul, de la maquette Figma au déploiement en production. Environ cent heures de travail étalées sur plusieurs mois. Je n'avais jamais fait d'appel API, jamais utilisé une base de données en production, jamais déployé un site. Ce dont je suis le plus fier, c'est que le site existe vraiment — il est public, fonctionnel, et n'importe qui peut importer son historique Deezer et obtenir une analyse que nulle autre plateforme ne propose gratuitement.",
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
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'communication',
    categorie: 'web',
    titre: 'COMMUNICATION — STRATÉGIE & IDENTITÉ DE MARQUE',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'affiche-soleil',
    categorie: 'data',
    titre: 'AFFICHE « SOLEIL » — MES ALBUMS EN DÉGRADÉ',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'epsm-charcot',
    categorie: 'data',
    titre: 'VISUALISATION DE DONNÉES — EPSM CHARCOT',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'joueurs-fifa',
    categorie: 'data',
    titre: 'ANALYSE ET CLASSIFICATION DE JOUEURS FIFA',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'accidents-route',
    categorie: 'data',
    titre: 'TABLEAU DE BORD DES ACCIDENTS DE LA ROUTE',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'sondage-quebec',
    categorie: 'data',
    titre: 'SONDAGE SPATIAL — INVENTAIRES FORESTIERS DU QUÉBEC',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'meteo-australie',
    categorie: 'data',
    titre: 'CLASSIFICATION SUPERVISÉE — MÉTÉO AUSTRALIENNE',
    tags: [],
    contexte: '',
    resume: '',
    aDetail: true,
    lienExterne: null,
    sections: [],
    legendes: {},
  },
  {
    slug: 'challenge-dataviz',
    categorie: 'data',
    titre: 'CHALLENGE DATAVIZ NATIONAL',
    tags: [],
    contexte: '',
    resume: '',
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
