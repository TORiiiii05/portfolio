import { Link, matchPath, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { pageDuProjet, trouverProjetDetaille } from '../data/projects'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'ACCUEIL', short: '00' },
  { to: '/about', label: 'À PROPOS', short: '01' },
  { to: '/web', label: 'WEB & COM', short: '02' },
  { to: '/data', label: 'DATA', short: '03' },
  { to: '/experience', label: 'EXPÉRIENCES', short: '04' },
  { to: '/contact', label: 'CONTACT', short: '05' },
]

// Mode nuit : le thème est posé sur <html data-theme> (dès le chargement par index.html)
// et le choix du visiteur est mémorisé dans le navigateur.
function BoutonTheme() {
  const [sombre, setSombre] = useState(() => document.documentElement.dataset.theme === 'dark')

  function basculer() {
    const theme = sombre ? 'light' : 'dark'
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Stockage indisponible (navigation privée…) : le choix vaut pour cette visite.
    }
    setSombre(!sombre)
  }

  return (
    <button
      type="button"
      className={styles.theme}
      onClick={basculer}
      aria-pressed={sombre}
      aria-label="Mode nuit"
      title={sombre ? 'Passer en mode jour' : 'Passer en mode nuit'}
    >
      {sombre ? (
        // Soleil : revenir au mode jour.
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <g stroke="currentColor" strokeWidth="2" strokeLinecap="square">
            <path d="M12 1.5v3M12 19.5v3M1.5 12h3M19.5 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M4.6 19.4l2.1-2.1M17.3 6.7l2.1-2.1" />
          </g>
        </svg>
      ) : (
        // Lune : passer en mode nuit.
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path
            d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="miter"
          />
        </svg>
      )}
    </button>
  )
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const burger = useRef(null)
  const { pathname, state } = useLocation()
  const routeProjet = matchPath('/projets/:slug', pathname)
  const projet = routeProjet && trouverProjetDetaille(routeProjet.params.slug)
  const pageProjet = projet && pageDuProjet(projet, state?.from)
  const pageActive = pageProjet || pathname.replace(/(.)\/$/, '$1')

  useEffect(() => {
    if (!open) return undefined

    function fermerAvecEchap(e) {
      if (e.key === 'Escape') {
        setOpen(false)
        burger.current.focus()
      }
    }

    document.addEventListener('keydown', fermerAvecEchap)
    return () => document.removeEventListener('keydown', fermerAvecEchap)
  }, [open])

  return (
    <header className={styles.header}>
      <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
        <span className={styles.brandName}>JDF</span>
        <span className={styles.brandSub}>Jules Del Frate</span>
      </Link>

      <nav
        id="menu-principal"
        aria-label="Navigation principale"
        className={`${styles.nav} ${open ? styles.navOpen : ''}`}
      >
        {links.map(({ to, label, short }) => (
          <Link
            key={to}
            to={to}
            aria-current={to === pageActive ? 'page' : undefined}
            className={`${styles.link} ${to === pageActive ? styles.linkActive : ''}`}
            onClick={() => setOpen(false)}
          >
            <span className={styles.linkNum}>{short}</span>
            <span className={styles.linkLabel}>{label}</span>
          </Link>
        ))}
      </nav>

      <div className={styles.actions}>
        <BoutonTheme />
        <button
          ref={burger}
          type="button"
          className={styles.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="menu-principal"
        >
          <span className={open ? styles.burgerLineOpen : styles.burgerLine} />
          <span className={open ? styles.burgerLineMidOpen : styles.burgerLine} />
          <span className={open ? styles.burgerLineOpen : styles.burgerLine} />
        </button>
      </div>
    </header>
  )
}
