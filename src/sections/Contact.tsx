import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import { socialLinks, contactInfo } from '../data/contact'
import {
  Mail,
  MapPin,
  Send,
  Key,
  Copy,
  Check,
  Terminal,
  Clock,
  ShieldCheck,
  ExternalLink,
  Sparkles,
} from 'lucide-react'
import { LinkedInIcon } from '../components/Icons'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    classification: 'standard',
    message: '',
  })

  const [redirectMode, setRedirectMode] = useState<'gmail' | 'client'>('gmail')
  const [copiedKey, setCopiedKey] = useState(false)
  const [copiedPayload, setCopiedPayload] = useState(false)
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [transmitted, setTransmitted] = useState(false)
  const [lastDispatchedUrls, setLastDispatchedUrls] = useState({ mailto: '', gmail: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTransmitting(true)

    const subjectText = `[${formData.classification.toUpperCase()}] ${formData.subject.trim() || 'Security Consultation'}`
    const bodyText = `Operator: ${formData.name}\nReturn Email: ${formData.email}\nClassification: ${formData.classification}\n\nMessage Payload:\n${formData.message}`

    const mailtoUrl = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`

    setLastDispatchedUrls({ mailto: mailtoUrl, gmail: gmailUrl })

    // Direct background relay to FormSubmit so inquiry lands directly into yhbharmbe26@gmail.com inbox
    try {
      fetch(`https://formsubmit.co/ajax/${contactInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: subjectText,
          classification: formData.classification,
          message: formData.message,
          _replyto: formData.email,
          _captcha: 'false',
          _template: 'table',
        }),
      }).catch((err) => {
        console.warn('Direct gateway relay notice:', err)
      })
    } catch {
      // Background catch
    }

    setTimeout(() => {
      setIsTransmitting(false)
      setTransmitted(true)

      // Direct redirection to the operator email yhbharmbe26@gmail.com
      if (redirectMode === 'gmail') {
        window.open(gmailUrl, '_blank', 'noopener,noreferrer')
      } else {
        window.location.href = mailtoUrl
      }
    }, 700)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const copyPgpKey = () => {
    navigator.clipboard.writeText(contactInfo.pgpFingerprint)
    setCopiedKey(true)
    setTimeout(() => setCopiedKey(false), 2000)
  }

  const copyMessagePayload = () => {
    const payload = `Recipient: ${contactInfo.email}\nOperator: ${formData.name || 'Anonymous Recruiter'}\nEmail: ${formData.email || 'N/A'}\nSubject: ${formData.subject || 'Security Engagement'}\nClassification: ${formData.classification}\n\nMessage:\n${formData.message || 'Ready to discuss security role.'}`
    navigator.clipboard.writeText(payload)
    setCopiedPayload(true)
    setTimeout(() => setCopiedPayload(false), 2000)
  }

  return (
    <SectionWrapper
      id="contact"
      badge="ENCRYPTED CHANNEL // DIRECT COMMS"
      title="Secure Communications"
      subtitle="Establish contact for ethical hacking, penetration testing, vulnerability assessment, or security operations"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
        {/* Left Column: Comms & PGP Channel */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Fast-Track Interview Screen Box */}
          <div className="bg-gradient-to-r from-cyan-950/40 via-[#0d1c2e] to-emerald-950/30 border border-cyan-500/40 rounded-xl p-5 space-y-3 font-mono text-xs shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-cyan-400 font-bold tracking-widest uppercase">
                FAST-TRACK INTERVIEW
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/30 font-semibold">
                AVAILABLE NOW
              </span>
            </div>
            <h4 className="text-white text-sm font-bold font-sans">
              Looking to Hire or Schedule a Technical Screen?
            </h4>
            <p className="text-gray-300 text-xs font-sans leading-relaxed">
              Open for Penetration Testing, SOC Analyst, Red Team & Security Engineering positions (Full-Time, Contract & Hybrid).
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=Interview%20Invitation%20-%20Security%20Role&body=Hi%20Yatish,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20schedule%20a%20technical%20screen.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Web Gmail</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}?subject=Interview%20Invitation%20-%20Security%20Role&body=Hi%20Yatish,%20we%20reviewed%20your%20portfolio%20and%20would%20like%20to%20schedule%20a%20technical%20screen.`}
                className="px-3 py-1.5 rounded-lg bg-[#0e1929] hover:bg-[#142338] text-cyan-300 border border-cyan-500/30 text-xs flex items-center gap-1.5 transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Mail App</span>
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#0e1929] hover:bg-[#142338] text-cyan-300 border border-cyan-500/30 text-xs flex items-center gap-1.5 transition-all"
              >
                <LinkedInIcon className="w-3.5 h-3.5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#09111c] border border-[#18283d] rounded-xl p-6 space-y-4 font-mono text-xs shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-950/50 border border-cyan-500/30 rounded-lg text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Direct Primary Email</p>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors font-semibold flex items-center gap-1.5"
                >
                  <span>{contactInfo.email}</span>
                  <ExternalLink className="w-3 h-3 text-cyan-400 inline" />
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Direct Comms Channel</p>
                <a
                  href={contactInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                >
                  LinkedIn InMail / Direct Message
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-950/50 border border-purple-500/30 rounded-lg text-purple-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Location</p>
                <p className="text-white font-semibold">{contactInfo.location}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-950/50 border border-cyan-500/30 rounded-lg text-cyan-400">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Response SLA</p>
                <p className="text-emerald-400 font-semibold">&lt; 12 Hours // High Priority</p>
              </div>
            </div>
          </div>

          {/* PGP Fingerprint Card */}
          <div className="bg-[#070c14] border border-[#18283d] rounded-xl p-5 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-cyan-400">
                <Key className="w-4 h-4" />
                <span className="font-bold">PGP_FINGERPRINT</span>
              </div>
              <button
                onClick={copyPgpKey}
                className="flex items-center gap-1 text-[11px] text-cyan-400 hover:text-cyan-300 cursor-pointer"
                aria-label="Copy PGP Fingerprint"
              >
                {copiedKey ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedKey ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>
            <div className="p-3 bg-[#04060a] border border-[#142233] rounded text-[11px] text-gray-300 break-all leading-relaxed select-all">
              {contactInfo.pgpFingerprint}
            </div>
            <div className="text-[10px] text-gray-500">Key ID: {contactInfo.pgpKeyId} (4096R)</div>
          </div>

          {/* Social Profiles */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400">
              Direct External Radios
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#09111c] border border-[#18283d] hover:border-cyan-500/40 rounded-lg flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all font-mono text-xs"
                    aria-label={social.name}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{social.name}</span>
                  </a>
                )
              })}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Encrypted Transmission Terminal Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="bg-[#09111c] border border-[#18283d] rounded-2xl p-6 sm:p-8 shadow-2xl font-mono text-xs space-y-6 relative overflow-hidden">
            {/* Top scanning accent */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-400 to-purple-500"></div>

            <div className="flex items-center justify-between border-b border-[#18283d] pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>COMMS_TRANSMIT_CONSOLE.exe</span>
              </div>
              <span className="text-[10px] text-emerald-400 flex items-center gap-1 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                CHANNEL READY
              </span>
            </div>

            {/* Direct Routing Endpoint Banner */}
            <div className="flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg bg-[#05080e] border border-cyan-500/30 text-[11px]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-400">DIRECT ROUTING DESTINATION:</span>
                <span className="text-cyan-300 font-bold tracking-wide">{contactInfo.email}</span>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 font-semibold">
                INSTANT DISPATCH
              </span>
            </div>

            {transmitted ? (
              <div className="p-6 sm:p-8 space-y-5 bg-[#05080e] rounded-xl border border-emerald-500/40 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-white text-base font-bold font-sans">
                      Inquiry Dispatched Directly to {contactInfo.email}
                    </h4>
                    <p className="text-emerald-400 text-xs">
                      [✓] Transmission payload processed and routed to Yatish Bharambe.
                    </p>
                  </div>
                </div>

                <div className="p-3.5 bg-[#08101a] border border-[#18283d] rounded-lg space-y-2 text-[11px] text-gray-300">
                  <div className="flex justify-between border-b border-[#142338] pb-1.5">
                    <span className="text-gray-500">TARGET RECIPIENT:</span>
                    <span className="text-cyan-400 font-bold">{contactInfo.email}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#142338] pb-1.5">
                    <span className="text-gray-500">OPERATOR (SENDER):</span>
                    <span className="text-white">{formData.name || 'Visitor'} &lt;{formData.email}&gt;</span>
                  </div>
                  <div className="flex justify-between border-b border-[#142338] pb-1.5">
                    <span className="text-gray-500">MISSION SUBJECT:</span>
                    <span className="text-gray-200">{formData.subject}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">CLASSIFICATION:</span>
                    <span className="text-yellow-400 uppercase">{formData.classification}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed font-sans">
                  Your browser has initiated redirection to email <span className="text-cyan-300 font-mono">{contactInfo.email}</span>. If your composer did not launch automatically, click one of the direct action links below:
                </p>

                {/* Direct Action Links */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <a
                    href={lastDispatchedUrls.gmail}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-[0_0_15px_rgba(0,240,255,0.3)]"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open in Web Gmail (1-Click)</span>
                  </a>

                  <a
                    href={lastDispatchedUrls.mailto}
                    className="px-4 py-2.5 rounded-lg bg-[#0e1c2e] hover:bg-[#152a45] text-cyan-300 border border-cyan-500/40 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Launch System Mail App</span>
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#18283d]">
                  <button
                    onClick={copyMessagePayload}
                    className="px-3.5 py-2 rounded bg-[#0b1420] border border-cyan-500/30 text-cyan-300 text-xs cursor-pointer hover:bg-cyan-950/50 flex items-center gap-1.5"
                  >
                    {copiedPayload ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPayload ? 'PAYLOAD COPIED' : 'COPY INQUIRY PAYLOAD'}</span>
                  </button>

                  <button
                    onClick={() => {
                      setTransmitted(false)
                      setFormData({
                        name: '',
                        email: '',
                        subject: '',
                        classification: 'standard',
                        message: '',
                      })
                    }}
                    className="px-4 py-2 rounded bg-[#152438] hover:bg-[#1d324d] text-white font-semibold text-xs cursor-pointer transition-colors"
                  >
                    TRANSMIT ANOTHER INQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-gray-300 block">
                      OPERATOR_NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe / Security Team"
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-gray-300 block">
                      RETURN_ENDPOINT (EMAIL) *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. jdoe@enterprise.com"
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-gray-300 block">
                      MISSION_SUBJECT *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Pentest RFP / Job Opportunity"
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-classification" className="text-gray-300 block">
                      CLASSIFICATION_LEVEL
                    </label>
                    <select
                      id="contact-classification"
                      name="classification"
                      value={formData.classification}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none"
                    >
                      <option value="standard">UNCLASSIFIED // GENERAL INQUIRY</option>
                      <option value="confidential">CONFIDENTIAL // RED TEAM OP</option>
                      <option value="urgent">URGENT // IMMEDIATE RECRUITING</option>
                      <option value="contract">CONTRACT // VULN ASSESSMENT</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-gray-300 block">
                    TRANSMISSION_PAYLOAD *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter mission parameters, scope, target schedule, or recruiting opportunity..."
                    className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none resize-none font-mono"
                  ></textarea>
                </div>

                {/* Redirection Preference Toggle */}
                <div className="space-y-1.5 pt-1">
                  <span className="text-gray-300 block text-[11px]">
                    DIRECT REDIRECTION CHANNEL:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <button
                      type="button"
                      onClick={() => setRedirectMode('gmail')}
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between cursor-pointer transition-all ${
                        redirectMode === 'gmail'
                          ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                          : 'bg-[#05080e] border-[#18283d] text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <Mail className="w-3.5 h-3.5 text-cyan-400" />
                        <div>
                          <p className="font-semibold text-[11px] text-white">Direct Web Gmail</p>
                          <p className="text-[10px] text-gray-400">Opens compose window directly</p>
                        </div>
                      </div>
                      {redirectMode === 'gmail' && <Check className="w-3.5 h-3.5 text-cyan-400" />}
                    </button>

                    <button
                      type="button"
                      onClick={() => setRedirectMode('client')}
                      className={`p-2.5 rounded-lg border text-left flex items-center justify-between cursor-pointer transition-all ${
                        redirectMode === 'client'
                          ? 'bg-cyan-950/40 border-cyan-400 text-white shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                          : 'bg-[#05080e] border-[#18283d] text-gray-400 hover:border-gray-600'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <ExternalLink className="w-3.5 h-3.5 text-emerald-400" />
                        <div>
                          <p className="font-semibold text-[11px] text-white">Default Mail App</p>
                          <p className="text-[10px] text-gray-400">Triggers system mail client</p>
                        </div>
                      </div>
                      {redirectMode === 'client' && <Check className="w-3.5 h-3.5 text-emerald-400" />}
                    </button>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[10px] text-gray-400">
                    [!] Inquiry is dispatched and directly redirected to{' '}
                    <strong className="text-cyan-400">{contactInfo.email}</strong>.
                  </span>

                  <button
                    type="submit"
                    disabled={isTransmitting}
                    className="px-6 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs flex items-center gap-2 cursor-pointer shadow-[0_0_20px_rgba(0,240,255,0.4)] transition-all disabled:opacity-50"
                  >
                    {isTransmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-black border-t-transparent rounded-full animate-spin"></span>
                        <span>REDIRECTING & DISPATCHING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>DISPATCH TO {contactInfo.email.toUpperCase()}</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}