import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { skillCategories, quickStats } from '../data/skills'
import { Search, Grid, Target } from 'lucide-react'
import { motion } from 'framer-motion'
import MitreNavigator from '../components/MitreNavigator'

export default function Skills() {
  const [activeView, setActiveView] = useState<'matrix' | 'mitre'>('matrix')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCategories = skillCategories.map((category) => ({
    ...category,
    skills: category.skills.filter(
      (skill) =>
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.category.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((cat) => cat.skills.length > 0)

  return (
    <SectionWrapper
      id="skills"
      badge="TACTICAL CAPABILITIES // THREAT MATRIX"
      title="Skills & Matrix"
      subtitle="Defensive, offensive, and forensic toolkit engineered through real adversary engagements"
    >
      {/* Quick Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {quickStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#09111c] border border-[#18283d] p-5 rounded-xl text-center font-mono space-y-1 shadow-lg relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent"></div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">{stat.value}</div>
            <div className="text-gray-400 text-xs">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* View Switcher Bar */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
        <button
          onClick={() => setActiveView('matrix')}
          className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 border transition-all cursor-pointer ${
            activeView === 'matrix'
              ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
              : 'bg-[#09111c] text-gray-400 border-[#18283d] hover:text-white'
          }`}
        >
          <Grid className="w-3.5 h-3.5" />
          <span>Operational Toolset Matrix</span>
        </button>

        <button
          onClick={() => setActiveView('mitre')}
          className={`px-4 py-2 rounded-lg font-mono text-xs flex items-center gap-2 border transition-all cursor-pointer ${
            activeView === 'mitre'
              ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
              : 'bg-[#09111c] text-gray-400 border-[#18283d] hover:text-white'
          }`}
        >
          <Target className="w-3.5 h-3.5 text-red-400" />
          <span>MITRE ATT&CK® Enterprise Navigator</span>
        </button>
      </div>

      {activeView === 'matrix' ? (
        <>
          {/* Filter / Search Bar */}
          <div className="max-w-md mx-auto mb-10 relative">
            <div className="relative">
              <Search className="w-4 h-4 text-gray-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools, techniques (e.g., Splunk, Burp, AWS, eBPF)..."
                className="w-full pl-10 pr-4 py-2.5 bg-[#0a121c] border border-[#18283d] focus:border-cyan-500/60 rounded-lg text-sm font-mono text-white placeholder-gray-500 focus:outline-none transition-colors"
                aria-label="Filter skills and tools"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500 hover:text-white cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-[#09111c] border border-[#18283d] rounded-xl p-6 hover:border-cyan-500/40 transition-all duration-300 shadow-xl space-y-5"
                >
                  {/* Category Header */}
                  <div className="flex items-start gap-3">
                    <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white font-sans">{category.title}</h3>
                      <p className="text-gray-400 text-xs font-mono mt-0.5">{category.subtitle}</p>
                    </div>
                  </div>

                  {/* Skills List with Proficiency Meters */}
                  <div className="space-y-3.5 pt-1">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5 font-mono text-xs">
                        <div className="flex items-center justify-between text-gray-300">
                          <span className="flex items-center gap-1.5">
                            <span className="text-cyan-400">▹</span>
                            <span className="font-medium text-white">{skill.name}</span>
                          </span>
                          <div className="flex items-center gap-1.5">
                            {skill.badge && (
                              <span className="px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 text-[10px] border border-cyan-500/30">
                                {skill.badge}
                              </span>
                            )}
                            <span className="text-gray-500 text-[11px]">{skill.level}%</span>
                          </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="h-1.5 bg-[#05080e] rounded-full overflow-hidden border border-[#162538]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </>
      ) : (
        <MitreNavigator />
      )}
    </SectionWrapper>
  )
}