import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Certifications from './sections/Certifications'
import CyberSandbox from './sections/CyberSandbox'
import Contact from './sections/Contact'
import TacticalCursor from './components/TacticalCursor'

function App() {
  return (
    <div className="min-h-screen bg-[#06090e] text-gray-200 font-sans relative selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Modern tactical advance target cursor */}
      <TacticalCursor />

      {/* Background ambient decorative grid */}
      <div className="fixed inset-0 cyber-grid-bg opacity-40 pointer-events-none z-0"></div>

      <Navbar />
      <main className="relative z-10 space-y-12">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <CyberSandbox />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
