import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
// import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
// import Skills from './pages/Skills.jsx'
import Projects from './pages/Projects.jsx'
import Achievements from './pages/Achievements.jsx'
import Certificates from './pages/Certificates.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
          <Route path="/about" element={<div className="compact"><About /></div>} />
          <Route path="/projects" element={<div className="compact"><Projects /></div>} />
          <Route path="/achievements" element={<div className="compact"><Achievements /></div>} />
          <Route path="/certificates" element={<div className="compact"><Certificates /></div>} />
          <Route path="/contact" element={<div className="compact"><Contact /></div>} />
          <Route path="*" element={<div className="compact"><NotFound /></div>} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  )
}
