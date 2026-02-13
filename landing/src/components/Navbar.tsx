import { useState, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Mail, Menu, X, Github, Star } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Speed', href: '#speed' },
  { label: 'AI', href: '#ai' },
  { label: 'Security', href: '#security' },
  { label: 'Experience', href: '#experience' },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50)
  })

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }, [])

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 text-text-primary no-underline">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-dark to-accent-violet flex items-center justify-center">
            <Mail size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Velo</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/avihaymenahem/velo"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-button !text-sm !py-2 !px-4"
          >
            <Github size={15} />
            <Star size={13} />
            Star
          </a>
          <a
            href="https://github.com/avihaymenahem/velo/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-button text-sm !py-2.5 !px-5"
          >
            Download
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          className="md:hidden nav-blur border-t border-border px-6 py-4"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-text-secondary hover:text-text-primary transition-colors py-1 no-underline"
              >
                {link.label}
              </a>
            ))}
            <a href="https://github.com/avihaymenahem/velo" target="_blank" rel="noopener noreferrer" className="ghost-button text-sm !py-2.5 mt-2 justify-center">
              <Github size={16} />
              Star on GitHub
            </a>
            <a href="https://github.com/avihaymenahem/velo/releases" target="_blank" rel="noopener noreferrer" className="glow-button text-sm !py-2.5 justify-center">
              Download
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
