import ProjectList from '../components/ProjectList'
import { projetsWeb } from '../data/projects'

export default function Web() {
  return <ProjectList numero="002 —" titre="Web & Com" intro="" projets={projetsWeb} from="/web" />
}
