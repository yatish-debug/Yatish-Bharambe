import SectionWrapper from '../components/SectionWrapper'
import { experiences } from '../data/experience'
import { Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Experience() {
  return (
    <SectionWrapper
      id="experience"
      badge="FIELD MISSIONS"
      title="Experience & Operations"
      subtitle="Operational history in blue team leadership, managed detection response, and red team engagements"
    >
      <div className="relative max-w-4xl mx-auto">
        {/* Central glowing timeline line */}
        <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-cyan-500 via-emerald-500 to-transparent opacity-30"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0
            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot with Pulse */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 w-5 h-5 rounded-full bg-[#06090e] border-2 border-cyan-400 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(0,240,255,0.6)]">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                </div>

                {/* Content Box */}
                <div className="w-full pl-12 md:pl-0 md:w-1/2 md:px-8">
                  <div className="bg-[#09111c] border border-[#18283d] hover:border-cyan-500/40 rounded-xl p-6 shadow-xl transition-all duration-300 space-y-4">
                    
                    {/* Header: Call sign & Status */}
                    <div className="flex items-center justify-between border-b border-[#152336] pb-3 text-xs font-mono">
                      <span className="text-cyan-400 font-bold tracking-wider">
                        [{exp.callsign}]
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider ${
                          exp.status === 'CURRENT MISSION'
                            ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30'
                            : 'bg-gray-800 text-gray-400 border border-gray-700'
                        }`}
                      >
                        {exp.status}
                      </span>
                    </div>

                    {/* Role & Company */}
                    <div>
                      <h3 className="text-lg font-bold text-white font-sans">{exp.role}</h3>
                      <div className="text-cyan-300 font-mono text-xs font-semibold mt-0.5">
                        {exp.company} <span className="text-gray-500">//</span> {exp.division}
                      </div>
                      <div className="flex flex-wrap items-center gap-3 text-gray-400 text-xs font-mono mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-500" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Operational Directives */}
                    <ul className="space-y-2 text-xs text-gray-300 leading-relaxed font-sans">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-cyan-400 font-mono mt-0.5">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Highlighted Accomplishments */}
                    {exp.achievements && exp.achievements.length > 0 && (
                      <div className="bg-[#05080e] p-3 rounded-lg border border-[#142233] space-y-1.5">
                        <div className="text-[11px] font-mono text-emerald-400 font-semibold uppercase flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          Mission Milestones:
                        </div>
                        {exp.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="text-gray-400 text-xs font-sans pl-2 border-l border-emerald-500/30">
                            {ach}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Deployed Tech Stack */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {exp.stack.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded bg-[#0d1624] border border-[#1a2f47] text-[10px] font-mono text-gray-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}