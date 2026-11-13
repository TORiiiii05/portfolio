import { Link, useNavigate } from 'react-router-dom'
import styles from '../pages/Projects.module.css'

// « ← RETOUR » : revient toujours à la page précédente du site (navigate(-1)), à la même position.
// Garde-fou : si la page a été ouverte directement, sans historique dans le site
// (lien depuis LinkedIn, le PDF du CV…), le lien mène à `secours` au lieu de faire sortir du site.
// `sansGardeFou` le désactive, pour une page qui n'affiche ce bouton qu'en venant d'une page du site.
export default function BoutonRetour({ secours = '/', sansGardeFou = false }) {
  const navigate = useNavigate()

  function retourner(e) {
    // React Router numérote les entrées d'historique du site : 0 (ou rien) = première page visitée.
    const position = window.history.state?.idx
    if (!position && !sansGardeFou) return
    e.preventDefault()
    navigate(-1)
  }

  return (
    <Link to={secours} onClick={retourner} className={styles.backLink}>
      ← RETOUR
    </Link>
  )
}
