import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import ScrollToTop from './ScrollToTop'
import styles from './Layout.module.css'

export default function Layout() {
  return (
    <div className={styles.root}>
      <ScrollToTop />
      <div className={styles.sidebar} aria-hidden="true" />
      <div className={styles.inner}>
        <Nav />
        <main className={styles.main}>
          <Outlet />
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerMono}>© 2026 Jules Del Frate</span>
          <span className={styles.footerMono}>PORTFOLIO — v1.0</span>
        </footer>
      </div>
    </div>
  )
}
