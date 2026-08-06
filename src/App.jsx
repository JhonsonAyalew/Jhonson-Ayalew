import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Skills from './components/Skills.jsx'
import Agents from './components/Agents.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div id="top" className="bg-base text-ink">
      <div
        aria-hidden="true"
        className="grain-overlay pointer-events-none fixed inset-0 z-[60] opacity-[0.04]"
      />
      <Header />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Agents />
      <Contact />
      <Footer />
    </div>
  )
}
