import Doodle from '../components/Doodle'
import ProjectList from '../components/ProjectList'
import { projetsWeb } from '../data/projects'

export default function Web() {
  return (
    <ProjectList
      numero="02 —"
      titre="Web & Com"
      intro="Des sites conçus de A à Z, de la maquette à la mise en ligne, et des stratégies de communication pensées pour leur public."
      projets={projetsWeb}
      from="/web"
    >
      <Doodle
        numero={7}
        taille={110}
        top="40px"
        right="18%"
        mobile={{ taille: 60, top: '14px', right: '8px' }}
      />
      <Doodle numero={20} taille={70} bottom="24px" right="4%" />
    </ProjectList>
  )
}
