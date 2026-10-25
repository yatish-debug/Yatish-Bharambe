export interface Experience {
  id: number
  role: string
  callsign: string
  company: string
  division: string
  location: string
  period: string
  status: 'CURRENT MISSION' | 'COMPLETED'
  description: string[]
  achievements: string[]
  stack: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Penetration Tester',
    callsign: 'OP: SECUTRONIX ASSESS',
    company: 'Securonix Networks',
    division: 'Offensive Security & Network Testing',
    location: 'Hybrid',
    period: 'Oct 2025 – Mar 2026',
    status: 'CURRENT MISSION',
    description: [
      'Conducted rigorous network and web application penetration testing to identify exploitable vulnerabilities across enterprise target ranges.',
      'Performed vulnerability validation, exploitation, and post-assessment security verification to eliminate false positives.',
      'Assessed enterprise security posture against MITRE ATT&CK techniques and provided risk-based remediation recommendations.',
      'Prepared detailed penetration testing reports aligned with industry best practices, CVSS scoring, and regulatory security frameworks.',
    ],
    achievements: [
      'Delivered end-to-end vulnerability validation with zero critical post-release regressions',
      'Assessed high-risk web application logic flaws and Active Directory privilege escalation paths',
      'Standardized risk prioritization matrices mapped to NIST CSF and OWASP Top 10 guidelines',
    ],
    stack: ['Burp Suite', 'Metasploit', 'Nmap', 'BloodHound', 'OWASP Top 10', 'Python', 'Bash', 'CVSS'],
  },
  {
    id: 2,
    role: 'Cyber Security Intern',
    callsign: 'OP: PRODIGY DEFENSE',
    company: 'Prodigy InfoTech',
    division: 'Threat Analysis & Vulnerability Assessment',
    location: 'Remote',
    period: 'Jul 2025 – Sep 2025',
    status: 'COMPLETED',
    description: [
      'Performed vulnerability assessments and security analysis across simulated enterprise infrastructure environments.',
      'Conducted network scanning, deep packet traffic analysis, and baseline incident investigation activities.',
      'Leveraged industry-standard toolsets including Nmap, Wireshark, Burp Suite, and OWASP ZAP for automated and manual security testing.',
      'Assisted in documenting comprehensive security findings and directly mapping identified vulnerabilities to measurable business risks.',
    ],
    achievements: [
      'Triaged network packet captures to isolate suspicious anomalies and unauthorized scans',
      'Engineered automated scanning workflows that accelerated reconnaissance timeframes',
      'Produced granular documentation translating technical vulnerabilities into executive risk scores',
    ],
    stack: ['Nmap', 'Wireshark', 'Burp Suite', 'OWASP ZAP', 'Linux', 'Traffic Analysis', 'TCP/IP'],
  },
  {
    id: 3,
    role: 'Ethical Hacker Intern',
    callsign: 'OP: SECONIZE SCOUT',
    company: 'Seconize Technologies',
    division: 'Ethical Hacking & Reconnaissance Operations',
    location: 'Remote',
    period: 'Jan 2025 – Jun 2025',
    status: 'COMPLETED',
    description: [
      'Conducted systematic passive and active reconnaissance and vulnerability assessments across web and network environments.',
      'Performed hands-on penetration testing activities and assisted senior analysts in identifying critical security weaknesses.',
      'Utilized industry-standard security tools for service enumeration, banner scanning, and proof-of-concept exploitation validation.',
      'Prepared detailed technical reports featuring step-by-step remediation recommendations based on discovered vulnerabilities.',
    ],
    achievements: [
      'Successfully identified and documented critical misconfigurations in test client web assets',
      'Authored clear remediation roadmaps utilized by development teams to patch vulnerabilities',
      'Executed systematic service enumeration across complex network ranges',
    ],
    stack: ['Kali Linux', 'Burp Suite', 'Metasploit', 'Nmap', 'Gobuster', 'Hydra', 'Vulnerability Assessment'],
  },
]