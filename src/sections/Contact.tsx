import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import Button from '../components/Button'
import { socialLinks, contactInfo } from '../data/contact'
import { Mail, MapPin, Send, Key, Copy, Check, ShieldCheck, Terminal, Phone } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    classification: 'standard',
    message: '',
  })

  const [copiedKey, setCopiedKey] = useState(false)
  const [isTransmitting, setIsTransmitting] = useState(false)
  const [transmitted, setTransmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsTransmitting(true)

    setTimeout(() => {
      setIsTransmitting(false)
      setTransmitted(true)

      // Open email client with prepared data
      const mailtoUrl = `mailto:${contactInfo.email}?subject=[${formData.classification.toUpperCase()}] ${encodeURIComponent(formData.subject || 'Security Consultation')}&body=${encodeURIComponent(
        `Operator: ${formData.name}\nEmail: ${formData.email}\nClassification: ${formData.classification}\n\nMessage Payload:\n${formData.message}`
      )}`
      window.location.href = mailtoUrl
    }, 1200)
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

  return (
    <SectionWrapper
      id="contact"
      badge="ENCRYPTED CHANNEL"
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
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-white font-sans">Initialize Comms</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Available for penetration testing, vulnerability assessment, incident response, and security operations roles. Sensitive communications can be encrypted using my PGP public key.
            </p>
          </div>

          {/* Contact Details Card */}
          <div className="bg-[#09111c] border border-[#18283d] rounded-xl p-6 space-y-4 font-mono text-xs shadow-xl">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-cyan-950/50 border border-cyan-500/30 rounded-lg text-cyan-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Primary Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-emerald-950/50 border border-emerald-500/30 rounded-lg text-emerald-400">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Direct Comms (Phone)</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-cyan-400 transition-colors font-semibold"
                >
                  {contactInfo.phone}
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
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="text-gray-400 text-[11px]">Response SLA</p>
                <p className="text-emerald-400 font-semibold">&lt; 12 Hours // Security Incidents</p>
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

            {transmitted ? (
              <div className="p-8 text-center space-y-4 bg-[#05080e] rounded-xl border border-emerald-500/40">
                <div className="w-12 h-12 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-white text-base font-bold font-sans">
                  Transmission Prepared & Dispatched
                </h4>
                <p className="text-gray-300 text-xs max-w-sm mx-auto leading-relaxed font-sans">
                  Your mail client has been opened with the structured payload. Alternatively, email directly to <span className="text-cyan-400 font-mono">{contactInfo.email}</span>.
                </p>
                <button
                  onClick={() => setTransmitted(false)}
                  className="px-4 py-2 rounded bg-cyan-500 text-black font-semibold text-xs cursor-pointer hover:bg-cyan-400"
                >
                  TRANSMIT ANOTHER MESSAGE
                </button>
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
                      placeholder="e.g. Red Team Assessment Request"
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="contact-classification" className="text-gray-300 block">
                      CLASSIFICATION_TIER
                    </label>
                    <select
                      id="contact-classification"
                      name="classification"
                      value={formData.classification}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none cursor-pointer"
                    >
                      <option value="standard">STANDARD // GENERAL CONSULT</option>
                      <option value="confidential">CONFIDENTIAL // RED TEAM OP</option>
                      <option value="critical">CRITICAL // ZERO-DAY DISCLOSURE</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-gray-300 block">
                    PAYLOAD_BODY (MESSAGE) *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Provide scope, targets, or inquiry details..."
                    className="w-full px-3.5 py-2.5 bg-[#05080e] border border-[#1b2f48] focus:border-cyan-400 rounded text-white text-xs focus:outline-none resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full justify-center text-xs tracking-wider"
                  disabled={isTransmitting}
                >
                  <Send className={`w-4 h-4 ${isTransmitting ? 'animate-bounce' : ''}`} />
                  <span>
                    {isTransmitting
                      ? 'COMPUTING HANDSHAKE & TRANSMITTING...'
                      : 'DISPATCH SECURE TRANSMISSION'}
                  </span>
                </Button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}