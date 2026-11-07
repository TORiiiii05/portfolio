import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE = 'https://portfolio-jules-del-frate.vercel.app'
const TITRE_ACCUEIL = 'Jules Del Frate — Web & communication'

// Sans titre, on utilise celui de l'accueil.
export default function usePageMeta(titre, description) {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titre ? `${titre} — Jules Del Frate` : TITRE_ACCUEIL
    document.querySelector('meta[name="description"]')?.setAttribute('content', description)
    // Chaque page se déclare comme sa propre adresse de référence, pas comme l'accueil.
    document.querySelector('link[rel="canonical"]')?.setAttribute('href', `${SITE}${pathname}`)
  }, [titre, description, pathname])
}
