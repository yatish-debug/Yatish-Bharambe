export interface Certification {
  id: number
  code: string
  name: string
  issuer: string
  date: string
  expires?: string
  credentialId: string
  verificationUrl: string
  badgeColor: string
  skillsCovered: string[]
  description: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    code: 'OSCP',
    name: 'OffSec Certified Professional (OSCP)',
    issuer: 'OffSec',
    date: '2025',
    expires: 'Lifetime',
    credentialId: 'OS-101-YB8975',
    verificationUrl: 'https://www.offsec.com/verify',
    badgeColor: '#ff3366',
    skillsCovered: ['Active Directory Attacks', 'Buffer Overflows', 'Privilege Escalation', 'Client-side Attacks', 'Network Exploitation'],
    description: 'Gold-standard 24-hour practical penetration testing examination demonstrating real-world compromise of unknown target machines in an isolated proctored network.',
  },
  {
    id: 2,
    code: 'CEH',
    name: 'Certified Ethical Hacker (CEH)',
    issuer: 'EC-Council',
    date: '2025',
    expires: '2028',
    credentialId: 'ECC-YB9875512',
    verificationUrl: 'https://aspen.eccouncil.org/Verify',
    badgeColor: '#00f0ff',
    skillsCovered: ['System Hacking', 'Network Sniffing', 'Social Engineering', 'Web Application Security', 'Malware Threats'],
    description: 'Comprehensive certification demonstrating deep theoretical and practical understanding of adversary attack vectors and counter-defenses.',
  },
  {
    id: 3,
    code: 'eWPT',
    name: 'eLearnSecurity Web Application Penetration Tester (eWPT)',
    issuer: 'INE Security / eLearnSecurity',
    date: '2025',
    expires: 'Lifetime',
    credentialId: 'EWPT-78241',
    verificationUrl: 'https://ine.com',
    badgeColor: '#a855f7',
    skillsCovered: ['OWASP Top 10', 'SQLi / XSS Exploitation', 'Session Hijacking', 'Authentication Bypass', 'Business Logic Flaws'],
    description: '100% practical, multi-day hands-on exam assessing live enterprise web applications, finding vulnerabilities, and delivering executive-grade reports.',
  },
  {
    id: 4,
    code: 'eJPT',
    name: 'eLearnSecurity Junior Penetration Tester (eJPT)',
    issuer: 'INE Security / eLearnSecurity',
    date: '2025',
    expires: 'Lifetime',
    credentialId: 'EJPT-64192',
    verificationUrl: 'https://ine.com',
    badgeColor: '#00ff66',
    skillsCovered: ['Assessment Methodologies', 'Host & Network Auditing', 'Host & Network Penetration Testing', 'Web App Pentesting'],
    description: 'Hands-on practical exam that evaluates hands-on skills in network recon, service exploitation, and pivot vulnerability assessment.',
  },
  {
    id: 5,
    code: 'CCNA',
    name: 'Cisco Certified Network Associate (CCNA)',
    issuer: 'Cisco',
    date: '2024',
    expires: '2027',
    credentialId: 'CSCO-14892015',
    verificationUrl: 'https://www.cisco.com/go/verifycertificates',
    badgeColor: '#00f0ff',
    skillsCovered: ['Network Fundamentals', 'Network Access (VLANs, Trunking)', 'IP Connectivity (Routing)', 'IP Services (DHCP, DNS)', 'Security Fundamentals'],
    description: 'Industry-standard credential validating mastery of network architecture, switching, routing, firewalls, and enterprise network defense.',
  },
  {
    id: 6,
    code: 'ISC2 CC',
    name: 'ISC2 Certified in Cybersecurity (CC)',
    issuer: 'ISC2',
    date: '2024',
    expires: '2027',
    credentialId: 'ISC2-CC-89755',
    verificationUrl: 'https://www.isc2.org',
    badgeColor: '#ffaa00',
    skillsCovered: ['Security Principles', 'BCP / DR Concepts', 'Access Controls', 'Network Security', 'Security Operations'],
    description: 'Global benchmark validating core foundational cybersecurity concepts, risk management, and operational security governance.',
  },
  {
    id: 7,
    code: 'Google Cyber',
    name: 'Google Cybersecurity Professional Certificate',
    issuer: 'Google',
    date: '2024',
    expires: 'Lifetime',
    credentialId: 'GOOGLE-SEC-YB26',
    verificationUrl: 'https://coursera.org/verify/professional-cert',
    badgeColor: '#00ff66',
    skillsCovered: ['SIEM Tools (Splunk, Chronicle)', 'Python Automation', 'Linux Command Line', 'IDS/IPS Rules', 'Incident Response Playbooks'],
    description: 'Rigorous 8-course professional credential validating hands-on SOC analysis, incident detection, digital forensics, and security automation.',
  },
]