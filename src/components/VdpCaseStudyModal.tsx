import { useEffect } from 'react'
import type { VdpCaseStudy } from '../data/vdpCaseStudies'
import {
  X,
  ShieldCheck,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Lock,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface VdpCaseStudyModalProps {
  caseStudy: VdpCaseStudy | null
  onClose: () => void
}

export default function VdpCaseStudyModal({ caseStudy, onClose }: VdpCaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (caseStudy) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [caseStudy, onClose])

  if (!caseStudy) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#080d16] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.25)] overflow-hidden max-h-[90vh] flex flex-col font-sans z-10"
        >
          {/* Header */}
          <div className="bg-[#0b1422] px-6 py-4 border-b border-[#182a40] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center border font-mono font-bold text-sm"
                style={{
                  backgroundColor: `${caseStudy.badgeColor}18`,
                  borderColor: `${caseStudy.badgeColor}40`,
                  color: caseStudy.badgeColor,
                }}
              >
                VDP
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest font-bold px-2 py-0.5 rounded border"
                    style={{
                      backgroundColor: `${caseStudy.badgeColor}15`,
                      color: caseStudy.badgeColor,
                      borderColor: `${caseStudy.badgeColor}40`,
                    }}
                  >
                    {caseStudy.badge}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>COORDINATED DISCLOSURE</span>
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white font-sans mt-0.5">
                  {caseStudy.title}
                </h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#111f33] hover:bg-red-950/60 text-gray-400 hover:text-red-400 border border-[#1d334e] hover:border-red-500/40 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content - Scrollable */}
          <div className="p-6 space-y-6 overflow-y-auto scrollbar-thin text-xs sm:text-sm">
            {/* Target & CVSS Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#0b1524] border border-[#172b44] p-3.5 rounded-xl font-mono">
                <div className="text-[10px] text-gray-400 uppercase">Target Organization:</div>
                <div className="text-white font-bold text-xs mt-1 truncate">
                  {caseStudy.targetOrganization}
                </div>
              </div>

              <div className="bg-[#0b1524] border border-[#172b44] p-3.5 rounded-xl font-mono">
                <div className="text-[10px] text-gray-400 uppercase">CVSS 3.1 Severity:</div>
                <div className="text-amber-400 font-bold text-xs mt-1 flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5" />
                  <span>{caseStudy.cvssScore}</span>
                </div>
              </div>

              <div className="bg-[#0b1524] border border-[#172b44] p-3.5 rounded-xl font-mono">
                <div className="text-[10px] text-gray-400 uppercase">Audit Status:</div>
                <div className="text-emerald-400 font-bold text-xs mt-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{caseStudy.status}</span>
                </div>
              </div>
            </div>

            {/* CVSS Vector String Banner */}
            <div className="bg-[#050912] border border-[#132238] p-3 rounded-lg font-mono text-xs text-gray-300 flex items-center justify-between">
              <span className="text-gray-500 text-[11px]">Vector String:</span>
              <span className="text-cyan-400 font-semibold text-[11px] select-all">
                {caseStudy.cvssVector}
              </span>
            </div>

            {/* Executive Summary */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                Executive Threat Summary:
              </h4>
              <p className="text-gray-300 leading-relaxed font-sans text-xs sm:text-sm bg-[#09111c] border border-[#152438] p-4 rounded-xl">
                {caseStudy.summary}
              </p>
            </div>

            {/* Technical Discovery & Attack Vector */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0a1422] border border-[#172b44] p-4 rounded-xl space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                  Reconnaissance & Discovery Method:
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed font-sans">
                  {caseStudy.technicalDetails.discoveryMethod}
                </p>
              </div>

              <div className="bg-[#0a1422] border border-[#172b44] p-4 rounded-xl space-y-2">
                <h4 className="font-mono text-xs uppercase tracking-wider text-red-300 font-bold">
                  Vulnerability Mechanism:
                </h4>
                <p className="text-gray-300 text-xs leading-relaxed font-sans">
                  {caseStudy.technicalDetails.attackVector}
                </p>
              </div>
            </div>

            {/* Remediation Recommendations */}
            <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-2">
              <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Delivered Remediation Blueprint:</span>
              </h4>
              <ul className="space-y-1.5 text-xs text-gray-300 font-sans">
                {caseStudy.technicalDetails.remediationGuidance.map((rec, rIdx) => (
                  <li key={rIdx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-mono mt-0.5">▹</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinated Disclosure Timeline */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Coordinated Vulnerability Disclosure (CVD) Timeline:</span>
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 font-mono text-xs">
                {caseStudy.timeline.map((event, eIdx) => (
                  <div
                    key={eIdx}
                    className="bg-[#050912] border border-[#15263d] p-3 rounded-lg space-y-1 relative"
                  >
                    <div className="flex items-center justify-between text-[10px] text-cyan-400">
                      <span className="font-bold">{event.phase}</span>
                      <span className="text-gray-500">{event.date}</span>
                    </div>
                    <p className="text-gray-300 text-[11px] font-sans leading-tight">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#0a121e] px-6 py-4 border-t border-[#182a40] flex items-center justify-between">
            <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Audit Proof: <span className="text-white">{caseStudy.officialProof}</span></span>
            </span>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold transition-all cursor-pointer"
            >
              Close Case Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
