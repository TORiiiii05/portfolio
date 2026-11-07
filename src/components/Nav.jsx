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
    </header>
  )
}
