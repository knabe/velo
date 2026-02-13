import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Logos } from './components/Logos'
import { Features } from './components/Features'
import { Speed } from './components/Speed'
import { AiSection } from './components/AiSection'
import { Security } from './components/Security'
import { Experience } from './components/Experience'
import { CtaFooter } from './components/CtaFooter'
import { Blobs } from './components/Blobs'
import './App.css'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <div className="relative min-h-screen">
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <div className="section-divider max-w-5xl mx-auto" />
        <Features />
        <div className="section-divider max-w-5xl mx-auto" />
        <Speed />
        <div className="section-divider max-w-5xl mx-auto" />
        <AiSection />
        <div className="section-divider max-w-5xl mx-auto" />
        <Security />
        <div className="section-divider max-w-5xl mx-auto" />
        <Experience />
        <CtaFooter />
      </main>
    </div>
  )
}

export default App
