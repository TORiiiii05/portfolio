import { useRef } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Nav from './Nav'
import ScrollToTop from './ScrollToTop'
import styles from './Layout.module.css'

export default function Layout() {
  const contenu = useRef(null)

  function allerAuContenu(e) {
    e.preventDefault()
    contenu.current.focus()
  }

  return (
    <div className={styles.root}>
      <a href="#contenu" className={styles.evitement} onClick={allerAuContenu}>
        Aller au contenu
      </a>
      <ScrollToTop />
      <div className={styles.sidebar} aria-hidden="true" />
      <div className={styles.inner}>
        <Nav />
        <main id="contenu" ref={contenu} tabIndex={-1} className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerMono}>© 2026 Jules Del Frate</span>
          <nav className={styles.footerLinks} aria-label="Informations légales">
            <Link to="/mentions-legales" className="lien-texte">Mentions légales</Link>
            <span aria-hidden="true">·</span>
            <Link to="/confidentialite" className="lien-texte">Confidentialité</Link>
          </nav>
          <span className={styles.footerMono}>PORTFOLIO — v2.0</span>
        </footer>
      </div>
    </div>
  )
}
