import { useState, useEffect } from 'react'
import { Menu, X, Terminal, ShieldAlert, Cpu } from 'lucide-react'
import { navLinks } from '../data/nav'
import Button from './Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Update active section based on scroll position
      const sections = navLinks.map((l) => l.href.substring(1))
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06090e]/90 backdrop-blur-md border-b border-[#18283d] shadow-[0_4px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Callsign */}
          <a
            href="#home"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded p-1"
            aria-label="Yatish Bharambe Cybersecurity Portfolio Home"
          >
            <div className="w-10 h-10 rounded bg-[#0b1420] border border-cyan-500/40 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Terminal className="w-5 h-5 text-cyan-400" />
            </div>
            <div className="flex flex-col">
              <span className="font-mono font-bold text-white tracking-wider text-base group-hover:text-cyan-400 transition-colors">
                YATISH_BHARAMBE<span className="text-cyan-400 animate-cursor">_</span>
              </span>
              <span className="font-mono text-[10px] text-gray-400 tracking-widest uppercase flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                ETHICAL HACKER // PENTESTER
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-all duration-200 flex items-center gap-1.5 ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-800/40 border border-transparent'
                  }`}
                >
                  <span className="text-[10px] text-cyan-500/60 font-semibold">{link.code}.</span>
                  <span>{link.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Action: Defense Status & Contact CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1.5 rounded bg-[#0a111a] border border-[#18283d] text-[11px] font-mono text-gray-400">
              <Cpu className="w-3.5 h-3.5 text-cyan-400" />
              <span>SOC:</span>
              <span className="text-emerald-400 font-semibold">ACTIVE DEFENSE</span>
            </div>
            <Button
              href="#contact"
              variant="secondary"
              size="sm"
              className="text-xs tracking-wider"
            >
              <ShieldAlert className="w-3.5 h-3.5" />
              INTEL_DISPATCH
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded border border-[#18283d] bg-[#0a111a] text-gray-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#06090e]/98 backdrop-blur-xl border-b border-[#18283d] px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1)
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded text-sm font-mono tracking-wide transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/40'
                      : 'text-gray-300 hover:text-cyan-300 hover:bg-gray-800/40'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-500 text-xs">{link.code}.</span>
                    <span>{link.name}</span>
                  </div>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
                </a>
              )
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-[#18283d] flex flex-col gap-2">
            <Button
              href="#contact"
              variant="primary"
              size="md"
              className="w-full text-xs"
              onClick={() => setIsOpen(false)}
            >
              <ShieldAlert className="w-4 h-4" />
              INITIATE SECURE COMMS
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}