import { useState, useEffect, useMemo } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { Key, ShieldCheck, Copy, Check, Lock, RefreshCw } from 'lucide-react'

export default function CyberSandbox() {
  const [activeTab, setActiveTab] = useState<'hasher' | 'entropy' | 'portscan'>('hasher')

  // Hash Generator State
  const [inputText, setInputText] = useState('SecurePassw0rd!2026')
  const [sha256Hash, setSha256Hash] = useState('')
  const [copiedHash, setCopiedHash] = useState(false)

  // Password Entropy State
  const [passwordInput, setPasswordInput] = useState('CyberSec_ProMax#99!')

  // Port Scan Simulation State
  const [scanning, setScanning] = useState(false)
  const scanResults = [
    { port: 22, service: 'SSH', status: 'FILTERED', banner: 'OpenSSH_9.2p1 (Hardened/Key-Only)' },
    { port: 80, service: 'HTTP', status: 'REDIRECT', banner: '301 Moved Permanently -> HTTPS' },
    { port: 443, service: 'HTTPS', status: 'SECURED', banner: 'TLS 1.3 / ChaCha20-Poly1305' },
    { port: 3389, service: 'RDP', status: 'CLOSED', banner: 'Access Denied / Zero-Trust Mesh' },
    { port: 5432, service: 'PostgreSQL', status: 'BLOCKED', banner: 'Internal VPC Only' },
    { port: 8080, service: 'Alt-HTTP', status: 'CLOSED', banner: 'Unmapped Endpoint' },
  ]

  // Real SHA-256 calculation via Web Crypto API
  useEffect(() => {
    async function calculateHash() {
      if (!inputText) {
        setSha256Hash('')
        return
      }
      try {
        const msgBuffer = new TextEncoder().encode(inputText)
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)
        const hashArray = Array.from(new Uint8Array(hashBuffer))
        const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('')
        setSha256Hash(hashHex)
      } catch {
        setSha256Hash('Error computing hash')
      }
    }
    calculateHash()
  }, [inputText])

  // Derive Entropy calculation during render (optimal React pattern)
  const entropy = useMemo(() => {
    const pwd = passwordInput
    if (!pwd) {
      return { score: 0, bits: 0, crackTime: '0 seconds', status: 'Empty' }
    }

    let pool = 0
    if (/[a-z]/.test(pwd)) pool += 26
    if (/[A-Z]/.test(pwd)) pool += 26
    if (/[0-9]/.test(pwd)) pool += 10
    if (/[^a-zA-Z0-9]/.test(pwd)) pool += 33

    const bits = Math.round(pwd.length * (pool > 0 ? Math.log2(pool) : 0))
    let score = 1
    let status = 'Weak'
    let crackTime = '< 1 millisecond'

    if (bits > 80) {
      score = 4
      status = 'Enterprise Grade'
      crackTime = 'Centuries (10^12+ years)'
    } else if (bits > 60) {
      score = 3
      status = 'Strong'
      crackTime = 'Decades (100+ years)'
    } else if (bits > 40) {
      score = 2
      status = 'Moderate'
      crackTime = 'Several months to a year'
    }

    return { score, bits, crackTime, status }
  }, [passwordInput])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopiedHash(true)
    setTimeout(() => setCopiedHash(false), 2000)
  }

  const handleSimulateScan = () => {
    setScanning(true)
    setTimeout(() => {
      setScanning(false)
    }, 1200)
  }

  return (
    <SectionWrapper
      id="sandbox"
      badge="LIVE DEFENSE LAB // INTERACTIVE SANDBOX"
      title="Cyber Sandbox & Defense Lab"
      subtitle="Interact with live security utilities: real-time cryptanalytic hashing, entropy modeling, and firewall posture testing before initializing secure comms."
    >
      <div className="max-w-4xl mx-auto bg-[#080e18] border border-[#18283d] rounded-2xl overflow-hidden shadow-2xl font-mono">
        {/* Lab Header Tabs */}
        <div className="flex border-b border-[#18283d] bg-[#0c1522] overflow-x-auto">
          <button
            onClick={() => setActiveTab('hasher')}
            className={`px-5 py-3.5 text-xs font-semibold tracking-wider flex items-center gap-2 border-r border-[#18283d] transition-colors cursor-pointer ${
              activeTab === 'hasher'
                ? 'bg-[#080e18] text-cyan-400 border-b-2 border-b-cyan-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Key className="w-3.5 h-3.5" />
            <span>01. SHA-256 HASH ENGINE</span>
          </button>

          <button
            onClick={() => setActiveTab('entropy')}
            className={`px-5 py-3.5 text-xs font-semibold tracking-wider flex items-center gap-2 border-r border-[#18283d] transition-colors cursor-pointer ${
              activeTab === 'entropy'
                ? 'bg-[#080e18] text-cyan-400 border-b-2 border-b-cyan-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Lock className="w-3.5 h-3.5" />
            <span>02. ENTROPY ANALYZER</span>
          </button>

          <button
            onClick={() => setActiveTab('portscan')}
            className={`px-5 py-3.5 text-xs font-semibold tracking-wider flex items-center gap-2 transition-colors cursor-pointer ${
              activeTab === 'portscan'
                ? 'bg-[#080e18] text-cyan-400 border-b-2 border-b-cyan-400'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>03. PERIMETER AUDIT</span>
          </button>
        </div>

        {/* Tab 1: SHA-256 Hasher */}
        {activeTab === 'hasher' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-white text-base font-bold font-sans">Cryptographic Hash Digest Generator</h3>
              <p className="text-gray-400 text-xs font-sans">
                Real-time SHA-256 execution computed client-side via hardware-accelerated WebCrypto API.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="hash-input" className="text-xs text-gray-300 block">
                Plaintext String Input:
              </label>
              <input
                id="hash-input"
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Enter string to hash..."
                className="w-full px-4 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-sm text-white focus:outline-none"
              />
            </div>

            <div className="space-y-2 bg-[#05080e] p-4 rounded-lg border border-[#142233]">
              <div className="flex items-center justify-between text-xs text-gray-400">
                <span>Computed SHA-256 Digest (256-bit Hex):</span>
                <button
                  onClick={() => copyToClipboard(sha256Hash)}
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 cursor-pointer"
                  aria-label="Copy hash value"
                >
                  {copiedHash ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedHash ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>
              <div className="text-cyan-300 text-xs sm:text-sm break-all font-mono select-all bg-[#080d16] p-3 rounded border border-[#1a2f47]">
                {sha256Hash || 'Waiting for input...'}
              </div>
            </div>

            <div className="text-[11px] text-gray-500 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Zero-knowledge client-side execution // No plaintext sent across network</span>
            </div>
          </div>
        )}

        {/* Tab 2: Password Entropy */}
        {activeTab === 'entropy' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="space-y-1">
              <h3 className="text-white text-base font-bold font-sans">Password Entropy & Brute-Force Evaluator</h3>
              <p className="text-gray-400 text-xs font-sans">
                Evaluates character space size, Shannon entropy, and computational cracking resistance.
              </p>
            </div>

            <div className="space-y-2">
              <label htmlFor="entropy-input" className="text-xs text-gray-300 block">
                Test Credential String:
              </label>
              <input
                id="entropy-input"
                type="text"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="Enter password..."
                className="w-full px-4 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-sm text-white focus:outline-none"
              />
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#05080e] p-3.5 rounded border border-[#142233] text-center">
                <div className="text-gray-400 text-xs">Shannon Entropy</div>
                <div className="text-xl font-bold text-cyan-400 mt-1">{entropy.bits} Bits</div>
              </div>
              <div className="bg-[#05080e] p-3.5 rounded border border-[#142233] text-center">
                <div className="text-gray-400 text-xs">Security Rating</div>
                <div className="text-xl font-bold text-emerald-400 mt-1">{entropy.status}</div>
              </div>
              <div className="bg-[#05080e] p-3.5 rounded border border-[#142233] text-center">
                <div className="text-gray-400 text-xs">Offline Crack Time</div>
                <div className="text-xs sm:text-sm font-bold text-purple-400 mt-2">{entropy.crackTime}</div>
              </div>
            </div>

            {/* Visual Indicator */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Resistance Gauge:</span>
                <span>{entropy.bits >= 80 ? 'RESILIENT AGAINST GPU CLUSTERS' : 'UPGRADE RECOMMENDED'}</span>
              </div>
              <div className="w-full h-2 bg-[#05080e] rounded-full overflow-hidden border border-[#142233]">
                <div
                  className={`h-full transition-all duration-300 ${
                    entropy.score === 4
                      ? 'bg-emerald-400 w-full'
                      : entropy.score === 3
                      ? 'bg-cyan-400 w-3/4'
                      : entropy.score === 2
                      ? 'bg-amber-400 w-1/2'
                      : 'bg-red-400 w-1/4'
                  }`}
                ></div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Port Scan Simulator */}
        {activeTab === 'portscan' && (
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-white text-base font-bold font-sans">Perimeter Port Defense Audit</h3>
                <p className="text-gray-400 text-xs font-sans">
                  Simulating Nmap reconnaissance across hardened bastion endpoints.
                </p>
              </div>
              <button
                onClick={handleSimulateScan}
                disabled={scanning}
                className="px-4 py-2 rounded bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs tracking-wider flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${scanning ? 'animate-spin' : ''}`} />
                <span>{scanning ? 'SCANNING...' : 'EXECUTE NMAP PROBE'}</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead className="bg-[#0c1624] text-gray-400 border-b border-[#18283d]">
                  <tr>
                    <th className="py-2.5 px-3">PORT</th>
                    <th className="py-2.5 px-3">SERVICE</th>
                    <th className="py-2.5 px-3">STATE</th>
                    <th className="py-2.5 px-3">BANNER / DEFENSE CONFIG</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#142233]">
                  {scanResults.map((row) => (
                    <tr key={row.port} className="hover:bg-[#0c1522] transition-colors">
                      <td className="py-2.5 px-3 text-cyan-400 font-bold">{row.port}/TCP</td>
                      <td className="py-2.5 px-3 text-gray-200">{row.service}</td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                            row.status === 'SECURED'
                              ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
                              : row.status === 'FILTERED'
                              ? 'bg-cyan-950 text-cyan-400 border border-cyan-500/30'
                              : row.status === 'REDIRECT'
                              ? 'bg-amber-950 text-amber-400 border border-amber-500/30'
                              : 'bg-red-950 text-red-400 border border-red-500/30'
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 text-gray-400">{row.banner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  )
}
