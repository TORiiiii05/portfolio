import { useState } from 'react'
import styles from './Doodle.module.css'

// Réaction au clic de chaque doodle, par nom de fichier.
const REACTIONS = {
  saut: ['doodle-04', 'doodle-09', 'doodle-11', 'doodle-15', 'doodle-21'],
  ondulation: ['doodle-06', 'doodle-12', 'doodle-18', 'doodle-20'],
  flottement: ['doodle-02', 'doodle-03', 'doodle-13'],
  tremblement: ['doodle-01', 'doodle-10'],
  non: ['doodle-08', 'doodle-14', 'doodle-17'],
  trepignement: ['doodle-07', 'doodle-16', 'doodle-19'],
  etirement: ['doodle-05'],
}

const fichiers = import.meta.glob('../assets/doodles/*.svg', {
  eager: true,
  import: 'default',
})

function rotation(numero) {
  return ((numero * 7 + 3) % 25) - 12
}

function reactionDuDoodle(nom) {
  return Object.keys(REACTIONS).find((reaction) => REACTIONS[reaction].includes(nom))
}

export default function Doodle({ numero, taille, top, right, bottom, left, mobile }) {
  const [enCours, setEnCours] = useState(false)
  // Après un clic, pas de frémissement tant que le pointeur n'est pas sorti du doodle.
  const [calme, setCalme] = useState(false)

  const nom = `doodle-${String(numero).padStart(2, '0')}`
  const src = fichiers[`../assets/doodles/${nom}.svg`]
  const reaction = reactionDuDoodle(nom)
  const position = `${styles.doodle} ${mobile ? styles.doodleMobile : ''}`
  const style = {
    '--taille': `${taille}px`,
    '--rot': `${rotation(numero)}deg`,
    '--top': top,
    '--right': right,
    '--bottom': bottom,
    '--left': left,
    '--taille-mobile': mobile && `${mobile.taille}px`,
    '--top-mobile': mobile?.top,
    '--right-mobile': mobile?.right,
    '--left-mobile': mobile?.left,
  }

  function reagir() {
    if (enCours) return
    setEnCours(true)
    setCalme(true)
  }

  return (
    <>
      {/* Zone de clic invisible : le doodle visible reste derrière le texte,
          où les blocs de la page intercepteraient les clics. */}
      <img
        src={src}
        alt=""
        aria-hidden="true"
        draggable={false}
        className={`${position} ${styles.zone}`}
        style={style}
        onClick={reagir}
        onPointerLeave={() => setCalme(false)}
      />
      <img
        src={src}
        alt=""
        aria-hidden="true"
        className={[
          position,
          styles.visible,
          calme ? styles.calme : '',
          enCours && reaction ? styles[reaction] : '',
        ].join(' ')}
        style={style}
        onAnimationEnd={() => setEnCours(false)}
      />
    </>
  )
}
