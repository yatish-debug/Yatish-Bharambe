import { Terminal, Shield, ArrowUp } from 'lucide-react'
import { socialLinks, contactInfo } from '../data/contact'

const CURRENT_YEAR = 2026

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#18283d] bg-[#070b12] relative overflow-hidden">
      {/* Subtle top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Callout */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-lg font-bold">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span>yatish.bharambe // sec_ops</span>
            </div>
            <p className="text-gray-400 text-sm max-w-md leading-relaxed">
              Cybersecurity professional with 15 months of hands-on experience in ethical hacking, penetration testing, vulnerability assessment, and security operations through remote and hybrid industry engagements.
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-3 py-1.5 rounded w-fit">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>DEFCON 5 // SYSTEM STATUS: NOMINAL</span>
            </div>
          </div>

          {/* Security Telemetry */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300 flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Security Comms</span>
            </h4>
            <div className="space-y-2 text-xs font-mono text-gray-400">
              <p>PGP ID: <span className="text-cyan-400">{contactInfo.pgpKeyId}</span></p>
              <p className="truncate text-[11px] text-gray-500">{contactInfo.pgpFingerprint}</p>
              <p className="text-gray-400">Location: <span className="text-emerald-400">{contactInfo.location}</span></p>
            </div>
          </div>

          {/* Socials & Comms */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-gray-300">
              Encrypted Channels
            </h4>
            <div className="flex flex-col space-y-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors group"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                    <span>{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#18283d] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {CURRENT_YEAR} Yatish Hemant Bharambe. All cryptographic rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-gray-600">// zero_trust_enforced</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}