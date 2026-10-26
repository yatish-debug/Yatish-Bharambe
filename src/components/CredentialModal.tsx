import { useEffect } from 'react'
import type { Certification } from '../data/certifications'
import {
  X,
  ShieldCheck,
  ExternalLink,
  Lock,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface CredentialModalProps {
  cert: Certification | null
  onClose: () => void
}

export default function CredentialModal({ cert, onClose }: CredentialModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (cert) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [cert, onClose])

  if (!cert) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-2xl bg-[#09111c] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden font-sans z-10 space-y-6 p-6 sm:p-8"
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-[#18283d] pb-4">
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center border font-mono font-bold text-sm"
                style={{
                  backgroundColor: `${cert.badgeColor}15`,
                  borderColor: `${cert.badgeColor}40`,
                  color: cert.badgeColor,
                }}
              >
                {cert.code}
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-400 tracking-wider">
                  VERIFIED INDUSTRY ACCREDITATION
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">{cert.name}</h3>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#111f33] hover:bg-red-950/60 text-gray-400 hover:text-red-400 border border-[#1d334e] hover:border-red-500/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Audit Dossier Body */}
          <div className="space-y-4 text-xs sm:text-sm">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
              <div className="bg-[#050912] border border-[#16273c] p-3 rounded-lg">
                <div className="text-[10px] text-gray-500 uppercase">Issuing Authority:</div>
                <div className="text-white font-bold mt-0.5">{cert.issuer}</div>
              </div>

              <div className="bg-[#050912] border border-[#16273c] p-3 rounded-lg">
                <div className="text-[10px] text-gray-500 uppercase">Credential ID:</div>
                <div className="text-cyan-400 font-bold mt-0.5 select-all">{cert.credentialId}</div>
              </div>

              <div className="bg-[#050912] border border-[#16273c] p-3 rounded-lg col-span-2 sm:col-span-1">
                <div className="text-[10px] text-gray-500 uppercase">Status & Validity:</div>
                <div className="text-emerald-400 font-bold mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>ACTIVE // {cert.expires || 'Permanent'}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="bg-[#05080e] border border-[#152438] p-4 rounded-xl space-y-2">
              <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
                Examination & Competency Standard:
              </div>
              <p className="text-gray-300 leading-relaxed font-sans text-xs sm:text-sm">
                {cert.description}
              </p>
            </div>

            {/* Skills Tested */}
            <div className="space-y-2">
              <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                Validated Offensive & Defensive Competencies:
              </span>
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {cert.skillsCovered.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded bg-[#0e1929] border border-cyan-500/30 text-cyan-300"
                  >
                    ✓ {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-[#18283d] flex items-center justify-between">
            <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Cryptographically Validated</span>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#111e30] hover:bg-[#182a42] text-gray-300 text-xs font-mono border border-[#1c324e] cursor-pointer"
              >
                Close
              </button>
              <a
                href={cert.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,240,255,0.35)] transition-all"
              >
                <span>External Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
