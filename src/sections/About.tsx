import SectionWrapper from '../components/SectionWrapper'
import { Shield, Target, Lock, Terminal, GraduationCap } from 'lucide-react'
import { motion } from 'framer-motion'
import { educationList } from '../data/skills'
import profileImg from '../assets/profile.png'

export default function About() {
  const pillars = [
    {
      icon: Target,
      title: 'Penetration Testing & Exploitation',
      description: 'Web application security testing, network pentesting, service enumeration, vulnerability assessment, and post-exploitation analysis across enterprise environments.',
      color: 'text-red-400',
      border: 'border-red-500/20 hover:border-red-500/40',
      bg: 'bg-red-950/10',
    },
    {
      icon: Lock,
      title: 'Active Directory & Web Security',
      description: 'OWASP Top 10 vulnerabilities, Burp Suite, SQL injection, XSS, BloodHound graph analysis, Kerberoasting, Pass-the-Hash, and privilege escalation.',
      color: 'text-cyan-400',
      border: 'border-cyan-500/20 hover:border-cyan-500/40',
      bg: 'bg-cyan-950/10',
    },
    {
      icon: Shield,
      title: 'SOC & Digital Forensics',
      description: 'Incident response, SIEM log correlation, threat hunting, Wireshark packet analysis, memory/disk forensics, and MITRE ATT&CK / NIST CSF framework alignment.',
      color: 'text-emerald-400',
      border: 'border-emerald-500/20 hover:border-emerald-500/40',
      bg: 'bg-emerald-950/10',
    },
  ]

  const telemetryBadges = [
    { label: 'Operator Name', value: 'Yatish Hemant Bharambe' },
    { label: 'Location', value: 'Jalgaon, Maharashtra, India' },
    { label: 'Primary Focus', value: 'Ethical Hacking & Pentesting' },
    { label: 'MIT Diploma GPA', value: '3.968 / 4.0' },
    { label: 'B.Tech Program', value: 'Cybersecurity Engineering' },
    { label: 'Core Frameworks', value: 'MITRE ATT&CK, NIST CSF, OWASP' },
    { label: 'Spoken Languages', value: 'English, Hindi, Marathi, Japanese' },
  ]

  return (
    <SectionWrapper
      id="about"
      badge="OPERATOR DOSSIER"
      title="About Me"
      subtitle="Cybersecurity professional with 15 months of hands-on experience in ethical hacking, penetration testing, and security operations"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Tactical Holographic Card with Profile Photo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5"
        >
          <div className="relative group">
            {/* Ambient aura */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500"></div>

            <div className="relative bg-[#09101a] border border-[#18283d] rounded-xl p-6 shadow-2xl font-mono text-xs space-y-5">
              {/* Header bar */}
              <div className="flex items-center justify-between border-b border-[#18283d] pb-3">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Terminal className="w-4 h-4" />
                  <span className="font-bold text-sm">SECURITY_PROFILE.json</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 text-[10px] border border-emerald-500/30">
                  VERIFIED OPERATOR
                </span>
              </div>

              {/* Holographic Avatar Box with Actual Photo */}
              <div className="relative h-56 rounded-lg bg-[#05080e] border border-[#1b2b40] flex flex-col items-center justify-center p-4 overflow-hidden">
                {/* Subtle scanning line animation */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent h-12 w-full animate-pulse pointer-events-none z-10"></div>
                
                {/* Profile Image with Cyber Border */}
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_20px_rgba(0,240,255,0.35)] mb-3 z-0">
                  <img
                    src={profileImg}
                    alt="Yatish Hemant Bharambe"
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                      // Fallback to /profile.png if bundled import has path mismatch
                      ;(e.target as HTMLImageElement).src = '/profile.png'
                    }}
                  />
                </div>

                <div className="text-white font-bold text-sm text-center">Yatish Hemant Bharambe</div>
                <div className="text-gray-400 text-[11px] mt-0.5 text-center">Ethical Hacker & Penetration Tester</div>
                <div className="text-emerald-400 text-[10px] mt-1 flex items-center gap-1 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Active Operations // Securonix Networks
                </div>
              </div>

              {/* Operator details list */}
              <div className="space-y-2 text-gray-300">
                {telemetryBadges.map((badge, idx) => (
                  <div key={idx} className="flex items-center justify-between py-1 border-b border-[#132030] text-[11px]">
                    <span className="text-gray-400">{badge.label}:</span>
                    <span className="text-cyan-300 font-semibold">{badge.value}</span>
                  </div>
                ))}
              </div>

              {/* Status footer */}
              <div className="pt-2 flex items-center justify-between text-[10px] text-gray-500">
                <span>ENCRYPTION: AES-256-GCM</span>
                <span className="text-emerald-400">INTEGRITY_CHECK: PASS</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Bio & Core Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              "Proactively identifying weaknesses before adversaries can exploit them."
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              I am a dedicated cybersecurity professional with 15 months of hands-on industry experience across remote and hybrid security roles at <strong>Securonix Networks</strong>, <strong>Prodigy InfoTech</strong>, and <strong>Seconize Technologies</strong>.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Currently pursuing a <strong>Bachelor of Technology in Computer Engineering (Cybersecurity)</strong> and a <strong>UG Diploma in Cybersecurity & Advanced Digital Forensics</strong> from Massachusetts Institute of Technology (GPA: 3.968/4). Skilled in applying the MITRE ATT&CK matrix, NIST Cybersecurity Framework, and OWASP Top 10 to identify, assess, prioritize, and remediate enterprise cyber risks.
            </p>
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-lg bg-[#0b1420] border ${pillar.border} transition-all duration-300 hover:shadow-lg`}
                >
                  <div className={`w-8 h-8 rounded flex items-center justify-center ${pillar.bg} ${pillar.color} mb-3`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="text-white font-semibold text-sm mb-1.5 font-sans">{pillar.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{pillar.description}</p>
                </div>
              )
            })}
          </div>

          {/* Education Pathway Callout */}
          <div className="bg-[#09111c] border border-[#18283d] rounded-xl p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <GraduationCap className="w-4 h-4" />
              <span>ACADEMIC FOUNDATION & DEGREES</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {educationList.map((edu, eIdx) => (
                <div key={eIdx} className="bg-[#05080e] p-3 rounded border border-[#142233] space-y-1">
                  <div className="text-white font-bold text-xs font-sans">{edu.degree}</div>
                  <div className="text-gray-400 text-[11px]">{edu.institution}</div>
                  <div className="flex items-center justify-between text-[10px] text-cyan-400 pt-1">
                    <span>{edu.period}</span>
                    <span className="text-emerald-400 font-semibold">{edu.grade}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}