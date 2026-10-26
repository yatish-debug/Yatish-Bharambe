import { useState } from 'react'
import { mitreTactics, type MitreTechnique } from '../data/mitre'
import { Shield, Zap, Wrench, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function MitreNavigator() {
  const [activeTacticCode, setActiveTacticCode] = useState<string>(mitreTactics[0].code)
  const [selectedTechnique, setSelectedTechnique] = useState<MitreTechnique>(
    mitreTactics[0].techniques[0]
  )

  const activeTactic = mitreTactics.find((t) => t.code === activeTacticCode) || mitreTactics[0]

  return (
    <div className="bg-[#070d17] border border-[#16273c] rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#142336] pb-5">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              FRAMEWORK INTEGRATION // ADVERSARY EMULATION
            </span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-sans mt-1">
            MITRE ATT&CK® Enterprise Matrix
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm font-sans mt-1">
            Interactive mapping of hands-on offensive exploitation techniques and engineered defensive mitigations.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-[#0c1524] px-3 py-1.5 rounded-lg border border-[#1b314d] text-cyan-300">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          <span>Vetted & Field-Tested</span>
        </div>
      </div>

      {/* Tactic Pills Selection Bar */}
      <div className="flex flex-wrap gap-2">
        {mitreTactics.map((tactic) => {
          const isActive = activeTacticCode === tactic.code
          return (
            <button
              key={tactic.code}
              onClick={() => {
                setActiveTacticCode(tactic.code)
                setSelectedTechnique(tactic.techniques[0])
              }}
              className={`px-3.5 py-2 rounded-lg font-mono text-xs transition-all cursor-pointer flex items-center gap-2 border ${
                isActive
                  ? 'bg-cyan-500 text-black font-bold border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                  : 'bg-[#0a121f] text-gray-400 border-[#152336] hover:text-white hover:border-gray-600'
              }`}
            >
              <span className={isActive ? 'text-black/80 font-normal' : 'text-cyan-500/70'}>
                [{tactic.code}]
              </span>
              <span>{tactic.name}</span>
            </button>
          )
        })}
      </div>

      {/* Main Grid: Techniques in Tactic + Deep Dive Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Technique Cards List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-gray-400 uppercase tracking-wider mb-1">
            Tactical Sub-Techniques in {activeTactic.name}:
          </div>
          {activeTactic.techniques.map((tech) => {
            const isSelected = selectedTechnique.id === tech.id
            return (
              <div
                key={tech.id}
                onClick={() => setSelectedTechnique(tech)}
                className={`p-4 rounded-xl border transition-all cursor-pointer space-y-2 ${
                  isSelected
                    ? 'bg-[#0f1d30] border-cyan-500/60 shadow-[0_0_20px_rgba(0,240,255,0.15)]'
                    : 'bg-[#08101a] border-[#142338] hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-cyan-400 font-bold">
                    {tech.id}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                    {tech.proficiency}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-sans">{tech.name}</h4>
                <p className="text-gray-400 text-xs line-clamp-2 font-sans">{tech.description}</p>
              </div>
            )
          })}
        </div>

        {/* Right Column: Deep Dive Analysis */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTechnique.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-[#050912] border border-[#18283d] rounded-xl p-6 space-y-5"
            >
              {/* Header */}
              <div className="border-b border-[#142336] pb-4">
                <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-1">
                  <span>MITRE ID: {selectedTechnique.id}</span>
                  <span>//</span>
                  <span>{selectedTechnique.tactic.toUpperCase()}</span>
                </div>
                <h3 className="text-xl font-bold text-white font-sans">
                  {selectedTechnique.name}
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm mt-2 leading-relaxed">
                  {selectedTechnique.description}
                </p>
              </div>

              {/* Tools Deployed */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 uppercase tracking-wider">
                  <Wrench className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Arsenal & Execution Tooling:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedTechnique.toolsUsed.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-1 rounded bg-[#0b1626] border border-cyan-500/30 text-cyan-300 font-mono text-xs"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Offensive Scenario vs Defensive Mitigation */}
              <div className="space-y-3 pt-1">
                <div className="bg-red-950/20 border border-red-500/30 p-4 rounded-xl space-y-1.5">
                  <div className="text-xs font-mono font-bold text-red-400 uppercase tracking-wider flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Offensive Engagement Application</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedTechnique.offensiveScenario}
                  </p>
                </div>

                <div className="bg-emerald-950/20 border border-emerald-500/30 p-4 rounded-xl space-y-1.5">
                  <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Defensive Countermeasure & Hardening</span>
                  </div>
                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                    {selectedTechnique.defensiveMitigation}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
