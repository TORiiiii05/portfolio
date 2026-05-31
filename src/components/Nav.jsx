import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { to: '/', label: 'Accueil', short: '00' },
  { to: '/about', label: 'À propos', short: '01' },
  { to: '/projects/iut', label: 'Projets IUT', short: '02' },
  { to: '/projects/music', label: 'Site musical', short: '03' },
  { to: '/experience', label: 'Expériences', short: '04' },
  { to: '/contact', label: 'Contact', short: '05' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.brand} onClick={() => setOpen(false)}>
        <span className={styles.brandName}>JDF</span>
        <span className={styles.brandSub}>Jules Del Frate</span>
      </NavLink>

      <button
        className={styles.burger}
        onClick={() => setOpen((o) => !o)}
        aria-label="Menu"
        aria-expanded={open}
      >
        <span className={open ? styles.burgerLineOpen : styles.burgerLine} />
        <span className={open ? styles.burgerLineMidOpen : styles.burgerLine} />
        <span className={open ? styles.burgerLineOpen : styles.burgerLine} />
      </button>

      <nav className={`${styles.nav} ${open ? styles.navOpen : ''}`}>
        {links.map(({ to, label, short }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `${styles.link} ${isActive ? styles.linkActive : ''}`
            }
            onClick={() => setOpen(false)}
          >
            <span className={styles.linkNum}>{short}</span>
            <span className={styles.linkLabel}>{label}</span>
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
