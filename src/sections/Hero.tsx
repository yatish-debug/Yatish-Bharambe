import { useState, useRef, useEffect } from 'react'
import { Download, ShieldCheck, ChevronRight, Activity, Radio } from 'lucide-react'
import Button from '../components/Button'
import { motion } from 'framer-motion'

export default function Hero() {
  const [terminalInput, setTerminalInput] = useState('')
  const [terminalHistory, setTerminalHistory] = useState<Array<{ command: string; output: string | string[] }>>([
    {
      command: 'systemctl status yatishbharambe.service',
      output: [
        '● yatishbharambe.service - Ethical Hacker & Penetration Tester',
        '   Loaded: loaded (/etc/systemd/system/ethical_sec.service; enabled)',
        '   Active: active (operational) - 15 Months Industry Experience',
        '   Status: "Securing enterprise environments, web/network pentesting & incident response"',
      ],
    },
  ])
  const terminalContainerRef = useRef<HTMLDivElement>(null)

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase()
    let result: string | string[] = ''

    switch (trimmed) {
      case 'help':
        result = [
          'AVAILABLE PROTOCOLS:',
          '  whoami          - Operator dossier & academic background',
          '  skills          - Technical weapons & defense proficiencies',
          '  projects        - Featured security tools & research projects',
          '  certs           - Verified industry certifications (OSCP, CEH, CCNA, eWPT, etc.)',
          '  honours         - All 8 verified achievements & global rankings',
          '  contact         - Direct communication channels & endpoints',
          '  clear           - Purge terminal buffer',
          '  cat flag.txt    - CTF challenge inspection',
        ]
        break
      case 'whoami':
        result = [
          'OPERATOR: Yatish Hemant Bharambe',
          'ROLE: Ethical Hacker & Penetration Tester',
          'EXPERIENCE: 15 Months hands-on across remote and hybrid industry roles',
          'EDUCATION: B.Tech (Cybersecurity) | UG Diploma in Cybersecurity & Adv Digital Forensics (MIT)',
          'LOCATION: Jalgaon, Maharashtra, India',
          'GITHUB: https://github.com/yatish-debug',
          'LINKEDIN: https://linkedin.com/in/yatish-bharambe-050197330',
          'CONTACT: yhbharmbe26@gmail.com | +91-8975512610',
        ]
        break
      case 'honours':
      case 'honors':
      case 'achievements':
      case 'awards':
        result = [
          '==================== [ VERIFIED HONORS & ACCOLADES ] ====================',
          '1. [NASA] Hall Of Fame Under Vulnerability Disclosure Policy (VDP)',
          '2. [HTB] Cyber Apocalypse CTF 2026: Global Team Rank #14 & Best Team Leader Rank #3 Worldwide',
          '3. [TRYHACKME] Global Ranking #165 & Top 0.5% (Elite Practitioner)',
          '4. [LEETCODE] DSA (C++) Global Rank #16,523 Worldwide',
          '5. [HACKERRANK] C Global Rank #12, C++ Global Rank #7, Python #16, Bash & Shell Rank #2',
          '6. [ADOBE] Adobe India Hackathon Runner Up (2024)',
          '7. [IIT BOMBAY] HackConquest CTF 2025 - 1st Place Winner & Champion',
          '8. [MIT BOSTON] MIT Boston FLAGHUNT 2026 - Winner & Global Individual Lead Rank #3',
          '--------------------------------------------------------------------------',
          'Status: All 8 records verified. Scroll down to #achievements for full audit.',
        ]
        break
      case 'skills':
        result = [
          '[+] PENTESTING: Web App Pentesting, Network Pentesting, OWASP Top 10, Burp Suite Pro, Metasploit',
          '[+] ACTIVE DIRECTORY: BloodHound, Kerberoasting, Pass-the-Hash, Privilege Escalation',
          '[+] SOC & FORENSICS: Incident Response, SIEM Log Analysis, Wireshark, Memory & Disk Forensics',
          '[+] AUTOMATION: Python, Bash, PowerShell, Security Scripting, Basic JavaScript',
          '[+] FRAMEWORKS: MITRE ATT&CK, NIST CSF, Cyber Kill Chain',
        ]
        break
      case 'projects':
        result = [
          '1. AegisSOC       - Distributed Threat Intelligence & IOC Correlation',
          '2. SpectreNIDS    - ML-Driven Neural Deep Packet Inspection Engine',
          '3. Valkyrie       - Cloud IAM & Headless Vulnerability Scanner',
          '4. ZeroVault      - Bare-Metal Hypervisor Malware Detonation Sandbox',
          'Scroll down to the Security Arsenal section for architectural deep-dives.',
        ]
        break
      case 'certs':
        result = [
          '● OSCP - OffSec Certified Professional',
          '● CEH - Certified Ethical Hacker (EC-Council)',
          '● eWPT - eLearnSecurity Web Application Penetration Tester',
          '● eJPT - eLearnSecurity Junior Penetration Tester',
          '● CCNA - Cisco Certified Network Associate',
          '● ISC2 CC - Certified in Cybersecurity',
          '● Google Cybersecurity Professional Certificate',
        ]
        break
      case 'contact':
        result = [
          'EMAIL: yhbharmbe26@gmail.com',
          'PHONE: +91-8975512610',
          'GITHUB: https://github.com/yatish-debug',
          'LINKEDIN: https://www.linkedin.com/in/yatish-bharambe-050197330',
          'LOCATION: Jalgaon, Maharashtra, India',
          'PORTFOLIO: https://yatish-bharambe-sigma.vercel.app/',
          'AVAILABILITY: Open for Penetration Testing, SOC & Security Engineering Roles',
        ]
        break
      case 'cat flag.txt':
        result = 'FLAG{y4t1sh_bh4r4mb3_3th1c4l_h4ck3r_pr0}'
        break
      case 'clear':
        setTerminalHistory([])
        setTerminalInput('')
        return
      case '':
        return
      default:
        result = `Command not recognized: "${trimmed}". Type "help" for operator manual.`
    }

    setTerminalHistory((prev) => [...prev, { command: cmd, output: result }])
    setTerminalInput('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (terminalInput) {
      handleCommand(terminalInput)
    }
  }

  useEffect(() => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight
    }
  }, [terminalHistory])

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden cyber-grid-bg">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Dossier */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Mission Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-[#0a1420]/80 backdrop-blur-sm text-cyan-400 text-xs font-mono tracking-wider">
              <Radio className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>DEFCON 5 // ETHICAL HACKER & PENETRATION TESTER</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white font-sans leading-none">
                Hunting Threats.
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-purple-400 bg-clip-text text-transparent">
                  Hardening Frontiers.
                </span>
              </h1>
            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl font-sans">
              Hi, I'm <strong className="text-white font-semibold">Yatish Hemant Bharambe</strong>. Cybersecurity professional with 15 months of hands-on experience in ethical hacking, penetration testing, vulnerability assessment, and security operations through remote and hybrid industry roles.
            </p>

            {/* Quick telemetry indicators */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 py-2 max-w-xl">
              <div className="bg-[#0b1420] border border-sky-500/30 hover:border-sky-400 p-3 rounded-lg transition-colors">
                <div className="text-sky-300 font-mono font-bold text-sm sm:text-base">NASA HOF</div>
                <div className="text-gray-400 text-[11px] font-mono">VDP Inducted</div>
              </div>
              <div className="bg-[#0b1420] border border-cyan-500/30 hover:border-cyan-400 p-3 rounded-lg transition-colors">
                <div className="text-cyan-300 font-mono font-bold text-sm sm:text-base">Rank #2</div>
                <div className="text-gray-400 text-[11px] font-mono">World Shellcraft</div>
              </div>
              <div className="bg-[#0b1420] border border-emerald-500/30 hover:border-emerald-400 p-3 rounded-lg transition-colors">
                <div className="text-emerald-300 font-mono font-bold text-sm sm:text-base">2x Winner</div>
                <div className="text-gray-400 text-[11px] font-mono">MIT & IIT CTF</div>
              </div>
              <div className="bg-[#0b1420] border border-purple-500/30 hover:border-purple-400 p-3 rounded-lg transition-colors">
                <div className="text-purple-300 font-mono font-bold text-sm sm:text-base">Top 0.5%</div>
                <div className="text-gray-400 text-[11px] font-mono">TryHackMe & HTB</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Button href="#projects" variant="primary" size="md">
                <ShieldCheck className="w-4 h-4" />
                EXPLORE ARSENAL
              </Button>
              <Button href="#contact" variant="secondary" size="md">
                INITIALIZE COMMS
              </Button>
              <Button href="/resume.pdf" variant="ghost" size="md" download="Yatish_Bharambe_Resume.pdf">
                <Download className="w-4 h-4" />
                DOSSIER (PDF)
              </Button>
            </div>
          </motion.div>

          {/* Right Column: Interactive Terminal Sandbox */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="cyber-terminal-window bg-[#070c14] border border-[#18283d] rounded-lg overflow-hidden font-mono text-xs shadow-2xl">
              {/* Terminal Titlebar */}
              <div className="bg-[#0d1624] px-4 py-2.5 border-b border-[#18283d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                  <span className="text-gray-400 text-[11px] ml-2">pentester@yatish-terminal:~</span>
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-cyan-400 font-semibold uppercase">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span>ONLINE</span>
                </div>
              </div>

              {/* Terminal Output Body */}
              <div ref={terminalContainerRef} className="p-4 space-y-3 h-[320px] overflow-y-auto scrollbar-thin">
                <div className="text-gray-400 text-[11px] border-b border-gray-800/80 pb-2">
                  Type <span className="text-cyan-400 font-semibold cursor-pointer underline" onClick={() => handleCommand('help')}>help</span> to view available operations, or execute quick commands below.
                </div>

                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center gap-1.5 text-cyan-400">
                      <span className="text-emerald-400">root@yatishsec:~$</span>
                      <span>{item.command}</span>
                    </div>
                    {Array.isArray(item.output) ? (
                      <div className="space-y-0.5 text-gray-300 pl-3 border-l border-cyan-500/20 text-[11px]">
                        {item.output.map((line, lIdx) => (
                          <div key={lIdx} className="leading-relaxed">{line}</div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-emerald-300 pl-3 border-l border-emerald-500/20 text-[11px]">
                        {item.output}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Quick Prompt Chips */}
              <div className="bg-[#0a121c] px-3 py-2 border-t border-[#18283d] flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] text-gray-500 uppercase mr-1">Chips:</span>
                {['whoami', 'skills', 'projects', 'certs', 'honours', 'clear'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => handleCommand(chip)}
                    className="px-2 py-0.5 bg-[#101b2b] hover:bg-cyan-950/60 border border-[#1f344e] hover:border-cyan-500/50 rounded text-[10px] text-cyan-300 cursor-pointer transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Terminal Input Prompt */}
              <form onSubmit={handleSubmit} className="bg-[#070c14] px-4 py-2.5 border-t border-[#18283d] flex items-center gap-2">
                <span className="text-emerald-400 font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type command (e.g. whoami, honours, help)..."
                  className="w-full bg-transparent text-white focus:outline-none text-xs placeholder-gray-600 font-mono"
                  aria-label="Interactive terminal command prompt"
                />
                <button
                  type="submit"
                  className="p-1 rounded bg-cyan-950/50 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500 hover:text-black transition-colors"
                  aria-label="Send terminal command"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}