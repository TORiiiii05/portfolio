import { Link } from 'react-router-dom'
import BoutonRetour from '../components/BoutonRetour'
import usePageMeta from '../hooks/usePageMeta'
import photo from '../assets/cv/photo.png'
import styles from './Cv.module.css'
import projets from './Projects.module.css'
import './cv.css'

// Icônes de l'en-tête, reprises telles quelles du CV source.
const icone = {
  width: 11,
  height: 11,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2.2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
  focusable: false,
}

// Page /cv : le CV en HTML, fidèle à cv-source/cv.html (sans numéro de téléphone).
export default function Cv() {
  usePageMeta('CV', 'Le CV de Jules Del Frate, étudiant en conception de sites web, à consulter en ligne ou à télécharger en PDF.')

  return (
    <div className={styles.ecran}>
      <div className={styles.barre}>
        <BoutonRetour secours="/" />
        <a href="/cv_jules_del_frate.pdf" download="CV_Jules_Del_Frate.pdf" className={`${projets.cta} ${styles.telecharger}`}>
          Télécharger le PDF
        </a>
      </div>

      <article className="cv-page">
        <div className="wrap">
          <div className="side">
            <div className="phw"><img className="ph" src={photo} alt="Photo de Jules Del Frate" /></div>
            <section>
              <h2>PROFIL</h2>
              <p className="acc">En licence pro web, j’arrive avec un parcours peu commun : un BUT Science des Données et deux stages, chez Statistique Canada puis chez Orange.</p>
              <p className="acc" style={{ marginTop: '1.5mm' }}>Aujourd’hui, je réunis les deux : des sites pensés pour leurs utilisateurs, appuyés sur la rigueur de la data.</p>
            </section>
            <section>
              <h2>FORMATION</h2>
              <div className="it"><div className="t">Licence pro Conception, Rédaction et Réalisation web</div><div className="sub">ICM, Échirolles</div><div className="meta" style={{ color: 'var(--ink)' }}>2026 – 2027</div></div>
              <div className="it"><div className="t">BUT Science des Données</div><div className="sub">IUT de Vannes</div><div className="meta" style={{ color: 'var(--ink)' }}>2023 – 2026</div><div className="x">Parcours Études et Modélisation Statistique</div></div>
              <div className="it"><div className="t">Baccalauréat général</div><div className="sub">Lycée René Cassin</div><div className="meta" style={{ color: 'var(--ink)' }}>2023</div><div className="x">Maths et SES · Mention bien</div></div>
            </section>
            <section>
              <h2>LANGUES</h2>
              <div className="lg"><b>Français</b><span className="sub">Langue maternelle</span></div>
              <div className="lg"><b>Anglais</b><span className="sub">C1 · TOEIC 955/990</span></div>
              <div className="lg"><b>Italien</b><span className="sub">Débutant, en cours d’apprentissage</span></div>
            </section>
            <section>
              <h2>INTÉRÊTS</h2>
              <div className="in"><b>Musique</b><span>Auditeur passionné, à l’origine de Statimusic</span></div>
              <div className="in"><b>Volley-ball</b><span>Compétition régionale, vice-champion de la Coupe de Bretagne</span></div>
              <div className="in"><b>Intelligence artificielle</b><span>Suivi de l’actualité</span></div>
              <div className="in"><b>Musculation</b><span>Pratique depuis trois ans</span></div>
              <div className="in"><b>Dessin</b><span>De petits personnages, depuis toujours</span></div>
            </section>
          </div>

          <div className="main">
            {/* En-tête : séparé du reste pour que la colonne grise se glisse dessous sur mobile. */}
            <div className="cv-entete">
              <h1 className="anton">JULES DEL FRATE</h1>
              <div className="title">Étudiant en conception de sites web</div>
              <div className="ct">
                <span>
                  <svg {...icone}><path d="M12 22s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="12" cy="10" r="2.6" /></svg>
                  Grenoble · Rennes
                </span>
                <a href="mailto:jules.delfrate@gmail.com">
                  <svg {...icone}><rect x="3" y="5" width="18" height="14" rx="1" /><path d="M3 6l9 7 9-7" /></svg>
                  jules.delfrate@gmail.com
                </a>
                <a href="https://www.julesdelfrate.fr">
                  <svg {...icone}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.8 3.8 5.8 3.8 9s-1.2 6.2-3.8 9c-2.6-2.8-3.8-5.8-3.8-9S9.4 5.8 12 3z" /></svg>
                  julesdelfrate.fr
                </a>
                <a href="https://www.linkedin.com/in/jules-del-frate-372723329" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 640 640" fill="currentColor" aria-hidden="true" focusable="false">
                    {/* Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc. */}
                    <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z" />
                  </svg>
                  LinkedIn
                  <span className="sr-only"> (nouvel onglet)</span>
                </a>
              </div>
              <span className="badge">Recherche un stage de 3 mois à partir d’avril 2027</span>
            </div>

            <div className="cv-corps">
              <section>
                <h2>PROJETS PHARES</h2>
                <Link to="/projets/lelievre-paysage" state={{ from: '/cv' }} className="card">
                  <div className="row" style={{ alignItems: 'center' }}><span className="pn">LELIÈVRE PAYSAGE</span><span className="badge">Client réel · Licence pro</span></div>
                  <div className="sub" style={{ marginTop: '.6mm' }}>Site vitrine WordPress · <span className="meta">Sept. – Oct. 2026</span></div>
                  <div className="pd">Refonte complète, seul, du site d’une entreprise de paysagisme.</div>
                  <ul><li>Architecture, direction graphique tirée du logo, grille bento</li><li>Rédaction de tous les contenus et référencement (SEO)</li><li>Formulaire de devis, conformité RGPD et accessibilité</li></ul>
                  <div className="chips" style={{ marginTop: '1.6mm' }}><span className="chip">WordPress</span><span className="chip">Kadence</span><span className="chip">UX/UI</span><span className="chip">SEO</span><span className="chip">Rédaction web</span></div>
                </Link>
                <Link to="/projets/statimusic" state={{ from: '/cv' }} className="card">
                  <div className="row" style={{ alignItems: 'center' }}><span className="pn">STATIMUSIC</span><span className="badge">Projet personnel</span></div>
                  <div className="sub" style={{ marginTop: '.6mm' }}>Site web d’analyse d’écoutes musicales · <span className="meta">2025 – 2026</span></div>
                  <div className="pd">Conçu et développé seul, de la maquette à la mise en ligne.</div>
                  <ul><li>Tableau de bord personnel à partir de l’historique Deezer ou Spotify</li><li>Une page par artiste, album et titre, recherche dans tout l’historique</li><li>Pochettes et infos des artistes récupérées via l’API Spotify</li></ul>
                  <div className="chips" style={{ marginTop: '1.6mm' }}><span className="chip">Figma</span><span className="chip">HTML/CSS</span><span className="chip">Python</span><span className="chip">Supabase</span></div>
                </Link>
              </section>

              <section>
                <h2>EXPÉRIENCES</h2>
                <Link to="/experience#orange-france" state={{ from: 'cv' }} className="xp">
                  <div className="row"><span className="xr">Data scientist</span><span className="meta">Fév. – Mai 2026</span></div>
                  <div className="sub" style={{ margin: '.3mm 0 .8mm', color: 'var(--ink)' }}>Orange France · Rennes</div>
                  <div>Création de trois scores prédictifs pour aider les équipes commerciales à cibler prospects et clients, sur 1,5 million de clients professionnels.</div>
                </Link>
                <Link to="/experience#statistique-canada" state={{ from: 'cv' }} className="xp">
                  <div className="row"><span className="xr">Statisticien en méthodologie</span><span className="meta">Avr. – Juin 2025</span></div>
                  <div className="sub" style={{ margin: '.3mm 0 .8mm', color: 'var(--ink)' }}>Statistique Canada · Ottawa</div>
                  <div>Couplage de bases de données nationales sans identifiant commun, conversion de programmes SAS vers Python. Environnement bilingue.</div>
                </Link>
                <div className="subh">Jobs étudiants</div>
                <div className="jg">
                  <div className="jb"><b>Opérateur de production</b> · Celvia Dinde<div className="meta">Fin déc. 2025</div></div>
                  <div className="jb"><b>Hôte de caisse</b> · Carrefour<div className="sub">Week-ends · <span className="meta">Oct. – Déc. 2025</span></div></div>
                  <div className="jb"><b>Opérateur de production</b> · Elixance<div className="meta">Août 2024</div></div>
                  <div className="jb"><b>Préparateur de commandes</b> · Mix Buffet<div className="meta">Étés 2023 et 2024</div></div>
                </div>
              </section>

              <section>
                <h2>COMPÉTENCES</h2>
                <div className="skg">
                  <div><div className="k">Web</div><div className="chips"><span className="chip">HTML</span><span className="chip">CSS</span><span className="chip">Responsive design</span><span className="chip">SEO</span><span className="chip">Accessibilité</span><span className="chip">Création no-code</span><span className="chip">Hébergement &amp; mise en ligne</span></div></div>
                  <div><div className="k">Design &amp; Com</div><div className="chips"><span className="chip">UX/UI</span><span className="chip">Rédaction web</span><span className="chip">Stratégie de communication</span><span className="chip">Veille</span></div></div>
                  <div><div className="k">Data</div><div className="chips"><span className="chip">Python</span><span className="chip">R</span><span className="chip">SQL</span><span className="chip">Bases de données</span><span className="chip">Statistiques &amp; modélisation</span><span className="chip">Machine learning</span></div></div>
                  <div><div className="k">Outils</div><div className="chips"><span className="chip">WordPress</span><span className="chip">Figma</span><span className="chip">Illustrator</span><span className="chip">Canva</span><span className="chip">Power BI</span><span className="chip">Git</span><span className="chip">VS Code</span><span className="chip">Microsoft 365</span><span className="chip">IA générative</span></div></div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </article>
    </div>
  )
}
