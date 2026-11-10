import { useEffect, useLayoutEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

// Position de défilement de chaque entrée de l'historique, pour la retrouver au retour.
const positions = new Map()

function mouvementReduit() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// Les images peuvent agrandir la page après coup : on réessaie quelques images
// tant que la position voulue n'est pas atteinte.
function restaurer(top) {
  let essais = 0
  function essayer() {
    window.scrollTo({ top, left: 0, behavior: 'instant' })
    if (Math.abs(window.scrollY - top) > 1 && essais++ < 30) requestAnimationFrame(essayer)
  }
  essayer()
}

export default function ScrollToTop() {
  const { pathname, hash, key } = useLocation()
  const typeNavigation = useNavigationType()
  const cleActuelle = useRef(key)
  const cheminPrecedent = useRef(null)

  // Le site gère lui-même le défilement lors des retours en arrière.
  useEffect(() => {
    if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual'
    const memoriser = () => positions.set(cleActuelle.current, window.scrollY)
    window.addEventListener('scroll', memoriser, { passive: true })
    return () => window.removeEventListener('scroll', memoriser)
  }, [])

  useLayoutEffect(() => {
    cleActuelle.current = key
    const changementDePage = cheminPrecedent.current !== pathname
    cheminPrecedent.current = pathname

    // Retour en arrière (bouton du navigateur ou « ← RETOUR ») : on reprend la position mémorisée.
    if (typeNavigation === 'POP' && positions.has(key)) {
      restaurer(positions.get(key))
      return
    }

    // Adresse avec ancre : on part du haut de la nouvelle page et on défile jusqu'au bloc concerné.
    if (hash) {
      const cible = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (cible) {
        if (changementDePage) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        cible.scrollIntoView({ behavior: mouvementReduit() ? 'instant' : 'smooth', block: 'start' })
        return
      }
    }

    if (changementDePage) window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [key, pathname, hash, typeNavigation])

  return null
}
