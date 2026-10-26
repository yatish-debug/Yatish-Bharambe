import { useEffect } from 'react'
import type { Project } from '../data/projects'
import {
  X,
  Terminal,
  Shield,
  Layers,
  Cpu,
  Zap,
  ExternalLink,
  ChevronRight,
  GitBranch,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (project) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-[#080d16] border border-cyan-500/40 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.2)] overflow-hidden max-h-[90vh] flex flex-col font-sans z-10"
        >
          {/* Top Titlebar */}
          <div className="bg-[#0c1524] px-6 py-4 border-b border-[#182a40] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold">
                    SYSTEM BLUEPRINT // {project.category.toUpperCase()}
                  </span>
                  <span className="px-2 py-0.2 rounded text-[10px] font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    OPERATIONAL
                  </span>
                </div>
                <h2 className="text-lg sm:text-xl font-bold text-white font-sans">{project.title}</h2>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-[#111f33] hover:bg-red-950/60 text-gray-400 hover:text-red-400 border border-[#1d334e] hover:border-red-500/40 transition-colors cursor-pointer"
              aria-label="Close architecture modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="p-6 space-y-6 overflow-y-auto scrollbar-thin text-xs sm:text-sm">
            {/* Tagline & Core Summary */}
            <div className="bg-[#0b1422] border border-[#16273d] p-4 rounded-xl space-y-2">
              <div className="text-cyan-300 font-mono font-semibold text-xs">{project.tagline}</div>
              <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{project.description}</p>
            </div>

            {/* Architecture Pipeline Flow */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                <Cpu className="w-4 h-4" />
                <span>Ingestion & Execution Pipeline</span>
              </div>

              <div className="bg-[#050912] p-4 rounded-xl border border-[#16263b] space-y-3 font-mono">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                  {project.architecture.pipeline.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-[#0b1524] border border-cyan-500/20 p-2.5 rounded-lg flex flex-col justify-between text-center relative group hover:border-cyan-400 transition-colors"
                    >
                      <div className="text-[10px] text-cyan-400/80 font-bold mb-1">0{idx + 1}.</div>
                      <div className="text-[11px] text-gray-200 font-medium leading-tight">{step}</div>
                      {idx < project.architecture.pipeline.length - 1 && (
                        <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10 text-cyan-500">
                          <ChevronRight className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <p className="text-gray-400 text-xs font-sans mt-2 pt-2 border-t border-[#132338]">
                  {project.architecture.description}
                </p>
              </div>
            </div>

            {/* Attack Vector vs Defense Countermeasure */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-950/20 border border-red-500/30 p-4 rounded-xl space-y-2">
                <div className="text-red-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  <span>Adversary Attack Vector</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed font-sans">
                  {project.attackDefenseFlow.adversaryVector}
                </p>
              </div>

              <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-2">
                <div className="text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Engineered Countermeasure</span>
                </div>
                <p className="text-gray-300 text-xs leading-relaxed font-sans">
                  {project.attackDefenseFlow.countermeasure}
                </p>
              </div>
            </div>

            {/* Live CLI Snippet & Real Output Logs */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
                <Terminal className="w-4 h-4" />
                <span>Simulated CLI Execution & Verification Log</span>
              </div>

              <div className="bg-[#040810] border border-[#142236] rounded-xl p-4 font-mono text-xs text-gray-300 space-y-2 shadow-inner">
                <div className="flex items-center gap-2 text-cyan-400 border-b border-[#122033] pb-2">
                  <span className="text-emerald-400">$</span>
                  <span className="font-bold">{project.cliSnippet.command}</span>
                </div>
                <div className="space-y-1 text-[11px] text-gray-300 pt-1">
                  {project.cliSnippet.sampleOutput.map((line, lIdx) => (
                    <div
                      key={lIdx}
                      className={
                        line.startsWith('[VULN') || line.startsWith('[ALERT')
                          ? 'text-red-400 font-semibold'
                          : line.startsWith('[+]') || line.startsWith('[SUCCESS]')
                          ? 'text-emerald-400'
                          : line.startsWith('[INFO]') || line.startsWith('[PATH]')
                          ? 'text-cyan-300'
                          : 'text-gray-400'
                      }
                    >
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* MITRE ATT&CK & Technology Pills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  MITRE ATT&CK Matrix Alignment:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.mitreTactics.map((tactic, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded bg-[#0b1626] border border-cyan-500/30 text-cyan-300 text-[11px] font-mono"
                    >
                      {tactic}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                  Production Tooling & Stack:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded bg-[#09111c] border border-[#18283d] text-gray-300 text-[11px] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="bg-[#0a121e] px-6 py-4 border-t border-[#182a40] flex items-center justify-between">
            <span className="text-[11px] font-mono text-gray-400 flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
              <span>Full Repository & CI/CD Pipeline</span>
            </span>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-[#111e30] hover:bg-[#182a42] text-gray-300 text-xs font-mono border border-[#1c324e] transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold flex items-center gap-2 shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all"
              >
                <span>View GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
