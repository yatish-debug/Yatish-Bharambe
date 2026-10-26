import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { certifications, type Certification } from '../data/certifications'
import { ShieldCheck, ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import CredentialModal from '../components/CredentialModal'

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null)

  return (
    <SectionWrapper
      id="certifications"
      badge="CREDENTIAL VAULT // ACCREDITATIONS"
      title="Certifications & Accreditations"
      subtitle="Industry-standard security credentials validating offensive tradecraft and defensive architecture"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.06 }}
            className="cyber-card bg-[#09111c] border border-[#18283d] hover:border-cyan-500/50 rounded-xl p-6 shadow-xl flex flex-col justify-between group space-y-4 relative overflow-hidden"
          >
            {/* Corner Badge Accent */}
            <div
              className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10"
              style={{
                background: `radial-gradient(circle at top right, ${cert.badgeColor}, transparent 70%)`,
              }}
            ></div>

            <div className="space-y-3">
              {/* Header: Issuer & Code Pill */}
              <div className="flex items-center justify-between">
                <span
                  className="px-2.5 py-1 rounded text-xs font-mono font-bold tracking-wider uppercase border"
                  style={{
                    color: cert.badgeColor,
                    borderColor: `${cert.badgeColor}40`,
                    backgroundColor: `${cert.badgeColor}15`,
                  }}
                >
                  {cert.code}
                </span>

                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>VERIFIED</span>
                </div>
              </div>

              {/* Title & Issuer */}
              <div>
                <h3 className="text-lg font-bold text-white font-sans group-hover:text-cyan-400 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-400 text-xs font-mono mt-0.5">
                  Authority: <span className="text-gray-200 font-medium">{cert.issuer}</span>
                </p>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-xs leading-relaxed font-sans line-clamp-3">
                {cert.description}
              </p>

              {/* Skills Validated Chips */}
              <div className="space-y-1.5 pt-1">
                <span className="text-[10px] font-mono text-gray-500 uppercase">Core Competencies:</span>
                <div className="flex flex-wrap gap-1">
                  {cert.skillsCovered.slice(0, 3).map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded bg-[#05080e] border border-[#152438] text-[10px] font-mono text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skillsCovered.length > 3 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-cyan-400">
                      +{cert.skillsCovered.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Credential ID & Action Buttons */}
            <div className="pt-3 border-t border-[#152336] flex items-center justify-between text-xs font-mono">
              <div className="text-gray-500 text-[11px]">
                ID: <span className="text-gray-300">{cert.credentialId}</span>
              </div>

              <button
                onClick={() => setSelectedCert(cert)}
                className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer bg-cyan-950/40 hover:bg-cyan-950/80 px-2.5 py-1 rounded border border-cyan-500/30"
                aria-label={`Inspect ${cert.name} verified credentials`}
              >
                <span>Audit Dossier</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Credential Modal */}
      <CredentialModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </SectionWrapper>
  )
}