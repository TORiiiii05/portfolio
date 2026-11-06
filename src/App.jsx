import { Navigate, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Web from './pages/Web'
import Data from './pages/Data'
import ProjectDetail from './pages/ProjectDetail'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web" element={<Web />} />
        <Route path="/data" element={<Data />} />
        <Route path="/projets/:slug" element={<ProjectDetail />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/projects/iut" element={<Navigate to="/data" replace />} />
        <Route path="/projects/music" element={<Navigate to="/projets/statimusic" replace />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
