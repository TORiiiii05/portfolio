import Doodle from '../components/Doodle'
import ProjectList from '../components/ProjectList'
import { projetsData } from '../data/projects'

export default function Data() {
  return (
    <ProjectList
      numero="03 —"
      titre="Data"
      intro="Analyse, modélisation, visualisation : mes projets data, universitaires comme personnels."
      projets={projetsData}
      from="/data"
    >
      <Doodle
        numero={10}
        taille={110}
        top="6px"
        right="18%"
        mobile={{ taille: 60, top: '8px', right: '20px' }}
      />
      <Doodle numero={3} taille={75} bottom="20px" right="4%" />
    </ProjectList>
  )
}
