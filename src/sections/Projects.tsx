import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { projects, type Project } from '../data/projects'
import { ArrowUpRight, Cpu } from 'lucide-react'
import { GitHubIcon } from '../components/Icons'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectModal from '../components/ProjectModal'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const categories = [
    { id: 'all', label: 'All Arsenal' },
    { id: 'threat-intel', label: 'Threat Intel' },
    { id: 'offensive', label: 'Offensive Sec' },
    { id: 'defensive', label: 'Defensive Ops' },
    { id: 'tooling', label: 'Security Tooling' },
  ]

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory)

  return (
    <SectionWrapper
      id="projects"
      badge="SECURITY ARSENAL // PRODUCTION TOOLS"
      title="Featured Projects"
      subtitle="Production-grade threat intelligence platforms, low-level offensive automation, and machine learning detection engines"
    >
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded font-mono text-xs tracking-wider transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-cyan-500 text-black font-semibold shadow-[0_0_15px_rgba(0,240,255,0.35)]'
                : 'bg-[#0a121d] border border-[#18283d] text-gray-300 hover:text-cyan-300 hover:border-cyan-500/40'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="cyber-card bg-[#09111c] border border-[#18283d] hover:border-cyan-500/50 rounded-xl overflow-hidden flex flex-col justify-between group shadow-xl"
            >
              {/* Card Header & Content */}
              <div className="p-6 sm:p-7 space-y-4">
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="px-2.5 py-1 rounded bg-[#0f1b2b] text-cyan-400 border border-cyan-500/30 font-medium">
                    {project.category.toUpperCase()}
                  </span>
                  {project.featured && (
                    <span className="flex items-center gap-1 text-emerald-400 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      FEATURED SYSTEM
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-cyan-400 transition-colors flex items-center justify-between">
                    <span>{project.title}</span>
                  </h3>
                  <p className="text-cyan-400 text-xs font-mono mt-1">
                    // {project.tagline}
                  </p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metrics Banner */}
                {project.metrics && project.metrics.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-[#05080e] rounded-lg border border-[#142233]">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="text-center font-mono">
                        <div className="text-cyan-300 font-bold text-xs sm:text-sm">{metric.value}</div>
                        <div className="text-gray-500 text-[10px] truncate">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* MITRE ATT&CK Badges */}
                {project.mitreTactics && project.mitreTactics.length > 0 && (
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-wider block">
                      MITRE ATT&CK Matrix Alignment:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.mitreTactics.map((tactic, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-red-950/30 border border-red-500/30 text-red-300 text-[10px] font-mono"
                        >
                          {tactic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technology Tags */}
                <div className="pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-[#0d1624] border border-[#1d314a] rounded text-[11px] font-mono text-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#060c14] border-t border-[#18283d] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-gray-300 hover:text-cyan-400 transition-colors"
                      aria-label={`${project.title} Source Code on GitHub`}
                    >
                      <GitHubIcon className="w-4 h-4" />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-3 py-1.5 rounded-lg bg-cyan-950/60 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 text-cyan-300 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Inspect Blueprint</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Interactive Blueprint Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </SectionWrapper>
  )
}