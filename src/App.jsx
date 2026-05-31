import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ProjectsIUT from './pages/ProjectsIUT'
import ProjectsMusic from './pages/ProjectsMusic'
import Experience from './pages/Experience'
import Contact from './pages/Contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects/iut" element={<ProjectsIUT />} />
        <Route path="/projects/music" element={<ProjectsMusic />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}
