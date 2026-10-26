import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { achievements, achievementStats, type AchievementItem } from '../data/achievements'
import { vdpCaseStudies, type VdpCaseStudy } from '../data/vdpCaseStudies'
import {
  Trophy,
  Award,
  Medal,
  Terminal,
  ShieldCheck,
  Rocket,
  CheckCircle2,
  ExternalLink,
  Crown,
  Sparkles,
  ArrowUpRight,
  ShieldAlert,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import VdpCaseStudyModal from '../components/VdpCaseStudyModal'

export default function Achievements() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<VdpCaseStudy | null>(null)

  const categories = [
    { id: 'all', label: 'All Honors & VDP', count: achievements.length + vdpCaseStudies.length },
    {
      id: 'vdp',
      label: 'NASA & VDP Reports',
      count: vdpCaseStudies.length,
    },
    {
      id: 'ctf',
      label: 'CTFs & Wargames',
      count: achievements.filter((a) => a.category === 'ctf').length,
    },
    {
      id: 'competitive-coding',
      label: 'Code & Shellcraft',
      count: achievements.filter((a) => a.category === 'competitive-coding').length,
    },
    {
      id: 'hackathon',
      label: 'Hackathons',
      count: achievements.filter((a) => a.category === 'hackathon').length,
    },
  ]

  const filteredAchievements =
    activeCategory === 'all'
      ? achievements
      : achievements.filter((item) => item.category === activeCategory)

  const showVdpStudies = activeCategory === 'all' || activeCategory === 'vdp'

  const getCategoryIcon = (category: AchievementItem['category']) => {
    switch (category) {
      case 'hall-of-fame':
        return Rocket
      case 'ctf':
        return Trophy
      case 'competitive-coding':
        return Terminal
      case 'hackathon':
        return Award
      default:
        return Medal
    }
  }

  return (
    <SectionWrapper
      id="achievements"
      badge="COMBAT RECORD // HONORS & VDP"
      title="Honors & VDP Disclosures"
      subtitle="NASA Hall of Fame induction, responsible vulnerability disclosure case studies, international CTF victories, and world-class shellcraft rankings."
    >
      {/* 1. Tactical HUD Summary Metrics Bar */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
      >
        {achievementStats.map((stat, idx) => (
          <div
            key={idx}
            className="bg-[#09121f] border border-[#18283d] hover:border-cyan-500/40 rounded-xl p-4 sm:p-5 relative overflow-hidden group transition-all duration-300"
          >
            <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-cyan-500/10 to-transparent pointer-events-none"></div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] font-mono text-gray-400 uppercase tracking-wider">
                {stat.label}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping"></span>
            </div>
            <div className="text-xl sm:text-2xl font-bold font-sans text-white group-hover:text-cyan-300 transition-colors">
              {stat.value}
            </div>
            <div className="text-xs font-mono text-cyan-400/80 mt-1 flex items-center gap-1.5">
              <span className="text-emerald-400 font-bold">›</span>
              {stat.subtext}
            </div>
          </div>
        ))}
      </motion.div>

      {/* 2. Interactive Category Filter Switcher */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all duration-200 flex items-center gap-2 border cursor-pointer ${
                isActive
                  ? 'bg-cyan-950/60 text-cyan-300 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.25)]'
                  : 'bg-[#09111c] text-gray-400 border-[#18283d] hover:border-gray-600 hover:text-gray-200'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? 'bg-cyan-500/20 text-cyan-300' : 'bg-gray-800 text-gray-400'
                }`}
              >
                {cat.count}
              </span>
            </button>
          )
        })}
      </div>

      {/* 3. VDP Disclosures & Technical Reports Spotlight */}
      {showVdpStudies && (
        <div className="mb-10 space-y-4">
          <div className="flex items-center justify-between border-b border-[#142336] pb-3">
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold">
              <ShieldAlert className="w-4 h-4 text-sky-400" />
              <span>Vulnerability Disclosures & Responsible Research Reports</span>
            </div>
            <span className="text-[11px] font-mono text-gray-400">
              Coordinated VDP & Hall of Fame
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {vdpCaseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: idx * 0.08 }}
                className={`bg-[#09111c] border rounded-xl p-5 sm:p-6 flex flex-col justify-between group shadow-xl relative overflow-hidden transition-all duration-300 ${
                  study.featured
                    ? 'border-sky-500/50 hover:border-sky-400 bg-gradient-to-b from-[#091424] to-[#070e1a]'
                    : 'border-[#18283d] hover:border-cyan-500/40'
                }`}
              >
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 rounded-full pointer-events-none opacity-20 blur-xl group-hover:opacity-35 transition-opacity"
                  style={{ backgroundColor: study.badgeColor }}
                ></div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-[#142336] pb-2.5 text-xs font-mono">
                    <span
                      className="px-2 py-0.5 rounded font-bold tracking-wider uppercase border text-[10px]"
                      style={{
                        backgroundColor: `${study.badgeColor}15`,
                        color: study.badgeColor,
                        borderColor: `${study.badgeColor}40`,
                      }}
                    >
                      {study.badge}
                    </span>

                    <span className="text-amber-400 font-bold bg-amber-950/40 border border-amber-500/30 px-2 py-0.5 rounded text-[10px]">
                      CVSS {study.cvssScore}
                    </span>
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-white font-sans group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                      <span>{study.title}</span>
                      {study.featured && (
                        <Sparkles className="w-3.5 h-3.5 text-sky-400 shrink-0 inline" />
                      )}
                    </h4>
                    <p className="text-gray-400 text-[11px] font-mono mt-0.5">
                      Target: <span className="text-gray-200">{study.targetOrganization}</span>
                    </p>
                  </div>

                  <p className="text-gray-300 text-xs leading-relaxed font-sans line-clamp-3">
                    {study.summary}
                  </p>

                  <div className="bg-[#05080e] p-2.5 rounded-lg border border-[#142233]">
                    <div className="text-[10px] font-mono text-gray-500 uppercase">Vuln Class:</div>
                    <div className="text-[11px] font-mono text-cyan-300 font-semibold truncate">
                      {study.vulnerabilityClass}
                    </div>
                  </div>
                </div>

                <div className="pt-3 mt-4 border-t border-[#142336] flex items-center justify-between">
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    <span>{study.status.split('//')[0]}</span>
                  </span>

                  <button
                    onClick={() => setSelectedCaseStudy(study)}
                    className="px-2.5 py-1 rounded bg-cyan-950/60 hover:bg-cyan-500 hover:text-black border border-cyan-500/40 text-cyan-300 text-[11px] font-mono flex items-center gap-1 transition-all cursor-pointer shadow-[0_0_10px_rgba(0,240,255,0.15)]"
                  >
                    <span>Read Full PoC</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Competitive CTF & Coding Achievements Grid */}
      {filteredAchievements.length > 0 && activeCategory !== 'vdp' && (
        <div className="space-y-4">
          {activeCategory === 'all' && (
            <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-bold border-b border-[#142336] pb-3">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>International CTF Titles & Competitive Leaderboards</span>
            </div>
          )}

          <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <AnimatePresence>
              {filteredAchievements.map((item, index) => {
                const IconComponent = getCategoryIcon(item.category)
                return (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.94 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    className="bg-[#09111c] border border-[#18283d] hover:border-cyan-500/50 rounded-xl p-6 sm:p-7 shadow-xl flex flex-col justify-between group relative overflow-hidden transition-all duration-300"
                  >
                    {/* Tactical Accent Corner Glow */}
                    <div
                      className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-20 blur-2xl transition-opacity group-hover:opacity-40"
                      style={{ backgroundColor: item.accentColor }}
                    ></div>

                    {/* Top Info Bar */}
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#142336] pb-3">
                        <div className="flex items-center gap-2">
                          <span
                            className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold tracking-wider uppercase border ${item.badgeBg} ${item.badgeText} ${item.badgeBorder}`}
                          >
                            {item.rankBadge}
                          </span>
                          <span className="text-[11px] font-mono text-gray-400">
                            {item.year}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 bg-emerald-950/30 border border-emerald-500/20 px-2 py-0.5 rounded">
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>VERIFIED RECORD</span>
                        </div>
                      </div>

                      {/* Title & Organization Header */}
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                              {item.title}
                              {item.featured && (
                                <Sparkles className="w-4 h-4 text-amber-400 inline shrink-0" />
                              )}
                            </h3>
                            <p className="text-gray-400 text-xs sm:text-sm font-mono mt-1">
                              Authority: <span className="text-gray-200 font-medium">{item.organization}</span>
                            </p>
                          </div>

                          <div
                            className="w-12 h-12 rounded-xl flex items-center justify-center border shrink-0 group-hover:scale-105 transition-transform"
                            style={{
                              backgroundColor: `${item.accentColor}12`,
                              borderColor: `${item.accentColor}40`,
                              color: item.accentColor,
                            }}
                          >
                            <IconComponent className="w-6 h-6" />
                          </div>
                        </div>

                        {/* Key Ranking Callout Banner */}
                        <div
                          className="mt-4 p-3 rounded-lg border flex items-center gap-3 text-xs sm:text-sm font-mono font-bold"
                          style={{
                            backgroundColor: `${item.accentColor}0a`,
                            borderColor: `${item.accentColor}30`,
                            color: item.accentColor,
                          }}
                        >
                          <Crown className="w-4 h-4 shrink-0" />
                          <span>{item.rankHighlight}</span>
                        </div>
                      </div>

                      {/* Narrative Description */}
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-sans">
                        {item.description}
                      </p>

                      {/* Special Sub-Ranks Breakdown (HackerRank) */}
                      {item.subRanks && item.subRanks.length > 0 && (
                        <div className="mt-3 bg-[#05080e] p-3.5 rounded-lg border border-[#142338] space-y-2">
                          <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold flex items-center gap-1.5">
                            <Terminal className="w-3.5 h-3.5" />
                            Leaderboard Dispatches by Domain:
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {item.subRanks.map((sub, sIdx) => (
                              <div
                                key={sIdx}
                                className="bg-[#0b1420] border border-[#192b42] p-2 rounded flex items-center justify-between text-xs font-mono"
                              >
                                <span className="text-gray-300">{sub.domain}</span>
                                <span className="text-cyan-300 font-bold bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                                  {sub.rank}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Operational Highlights */}
                      <div className="space-y-2 pt-1">
                        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                          Operational Highlights & Mission Scope:
                        </span>
                        <ul className="space-y-1.5 text-xs text-gray-300 font-sans">
                          {item.highlights.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-mono mt-0.5 shrink-0">▹</span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Telemetry Metrics Pills */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
                        {item.metrics.map((m, mIdx) => (
                          <div
                            key={mIdx}
                            className="bg-[#060a12] border border-[#142133] px-3 py-2 rounded-lg text-center font-mono"
                          >
                            <div className="text-[10px] text-gray-400 uppercase tracking-wider">{m.label}</div>
                            <div className="text-xs font-bold text-white mt-0.5 truncate">{m.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer / Proof Acknowledgment */}
                    <div className="pt-4 mt-5 border-t border-[#142336] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                      <div className="text-gray-400 text-[11px] flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>Audit Proof: <span className="text-gray-300 font-sans">{item.proofType}</span></span>
                      </div>

                      {item.verificationLink ? (
                        <a
                          href={item.verificationLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 transition-colors bg-cyan-950/40 hover:bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30"
                          aria-label={`Verify ${item.title}`}
                        >
                          <span>Verify Live Proof</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 group-hover:text-cyan-300">
                          <span>Rank Acknowledged</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      )}
                    </div>
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      )}

      {/* VDP Case Study Modal */}
      <VdpCaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />
    </SectionWrapper>
  )
}
