import { 
  Terminal, 
  ShieldCheck, 
  Code, 
  Cloud, 
  Binary, 
  FileSearch
} from 'lucide-react'

export interface SkillCategory {
  title: string
  subtitle: string
  icon: any
  color: string
  skills: {
    name: string
    level: number
    category: string
    badge?: string
  }[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Penetration Testing & Ethical Hacking',
    subtitle: 'Vulnerability assessment, network & web app security testing',
    icon: Terminal,
    color: 'cyber-cyan',
    skills: [
      { name: 'Web Application Pentesting', level: 95, category: 'AppSec', badge: 'eWPT' },
      { name: 'Network Penetration Testing', level: 92, category: 'Network', badge: 'OSCP' },
      { name: 'Vulnerability Assessment (Nmap, Nessus)', level: 94, category: 'Assessment' },
      { name: 'Exploitation & Post-Exploitation', level: 90, category: 'Red Team' },
      { name: 'Metasploit Framework', level: 88, category: 'Exploit' },
      { name: 'Password Cracking (Hashcat, John)', level: 90, category: 'Cracking' },
      { name: 'Gobuster & Hydra Enumeration', level: 92, category: 'Recon' },
    ],
  },
  {
    title: 'Web & Active Directory Security',
    subtitle: 'OWASP Top 10, Kerberoasting, BloodHound & lateral movement',
    icon: ShieldCheck,
    color: 'cyber-green',
    skills: [
      { name: 'Burp Suite Professional', level: 96, category: 'WebSec', badge: 'Core' },
      { name: 'OWASP Top 10 Exploitation', level: 95, category: 'AppSec' },
      { name: 'SQL Injection (SQLi) & XSS', level: 94, category: 'Injection' },
      { name: 'BloodHound Graph Analysis', level: 90, category: 'Active Directory', badge: 'AD Sec' },
      { name: 'Kerberoasting & Pass-the-Hash', level: 89, category: 'AD Sec' },
      { name: 'Privilege Escalation & Lateral Move', level: 91, category: 'Offensive' },
      { name: 'Authentication & Session Testing', level: 92, category: 'Web' },
    ],
  },
  {
    title: 'Security Operations & SOC',
    subtitle: 'Threat analysis, SIEM log correlation & incident response',
    icon: FileSearch,
    color: 'cyber-purple',
    skills: [
      { name: 'Incident Response & Triage', level: 92, category: 'SOC Lead' },
      { name: 'SIEM Log Analysis & Correlation', level: 90, category: 'SIEM', badge: 'Google Cert' },
      { name: 'Threat Hunting & Alert Triage', level: 88, category: 'Blue Team' },
      { name: 'Traffic Analysis (Wireshark)', level: 95, category: 'Network' },
      { name: 'Firewall & IDS/IPS Configuration', level: 86, category: 'Perimeter' },
      { name: 'Threat Intelligence & Risk Prioritization', level: 89, category: 'Risk' },
    ],
  },
  {
    title: 'Network & Infrastructure Security',
    subtitle: 'Cisco networking, VLANs, VPNs, routing, and switching',
    icon: Cloud,
    color: 'cyber-cyan',
    skills: [
      { name: 'TCP/IP & OSI Model Architecture', level: 96, category: 'Core Net', badge: 'CCNA' },
      { name: 'Routing & Switching Protocols', level: 92, category: 'Cisco' },
      { name: 'VLANs, Subnetting & Network Access', level: 94, category: 'Infrastructure' },
      { name: 'DNS, DHCP & IP Services', level: 90, category: 'Protocols' },
      { name: 'VPN Technologies & Secure Tunnels', level: 88, category: 'Crypto' },
      { name: 'OpenVAS & Nessus Vulnerability Scans', level: 91, category: 'Scanner' },
    ],
  },
  {
    title: 'Digital Forensics & Security Frameworks',
    subtitle: 'Artifact preservation, MITRE ATT&CK, NIST CSF & Kill Chain',
    icon: Binary,
    color: 'cyber-purple',
    skills: [
      { name: 'MITRE ATT&CK Framework', level: 94, category: 'Framework', badge: 'Specialist' },
      { name: 'NIST Cybersecurity Framework (CSF)', level: 92, category: 'Compliance' },
      { name: 'Cyber Kill Chain Methodology', level: 93, category: 'Adversary' },
      { name: 'Memory, Disk & Network Forensics', level: 90, category: 'DFIR', badge: 'MIT UG Dip' },
      { name: 'Evidence Collection & Preservation', level: 91, category: 'Forensics' },
      { name: 'Basic Malware Analysis', level: 84, category: 'Reverse Eng' },
    ],
  },
  {
    title: 'Programming & Security Automation',
    subtitle: 'Custom tooling, offensive scripting & security automation',
    icon: Code,
    color: 'cyber-green',
    skills: [
      { name: 'Python (Security Scripting)', level: 94, category: 'Primary Lang', badge: 'Core' },
      { name: 'Bash Shell Scripting (Linux)', level: 92, category: 'Automation' },
      { name: 'PowerShell Security Scripting', level: 88, category: 'Windows' },
      { name: 'Kali Linux, Parrot OS & Ubuntu', level: 96, category: 'OS Mastery' },
      { name: 'Basic JavaScript & Web Protocols', level: 82, category: 'Web' },
      { name: 'CVSS Risk Scoring & Technical Reporting', level: 95, category: 'Reporting' },
    ],
  },
]

export const quickStats = [
  { label: 'Hands-on Security Experience', value: '15+ Mos' },
  { label: 'Global Industry Certifications', value: '7' },
  { label: 'Industry Security Roles', value: '3' },
  { label: 'MIT UG Diploma GPA', value: '3.968' },
]

export const educationList = [
  {
    institution: 'Massachusetts Institute of Technology',
    degree: 'UG Diploma in Cybersecurity and Advance Digital Forensics',
    period: 'Oct 2024 – Nov 2029',
    grade: 'GPA: 3.968 / 4.0',
    location: 'Cambridge, MA',
  },
  {
    institution: 'Godavari College of Engineering',
    degree: 'Bachelor of Technology in Computer Engineering (Cybersecurity)',
    period: 'Aug 2024 – Dec 2028',
    grade: 'CGPA: 7.1 / 10',
    location: 'Jalgaon, Maharashtra',
  },
  {
    institution: 'Dhanaji Nana Chaudhari Vidya Prabodhini',
    degree: 'Higher Secondary Certificate (PCM)',
    period: '2022 – 2024',
    grade: '65.83%',
    location: 'Jalgaon, Maharashtra',
  },
  {
    institution: 'Raosaheb Rupchand Vidyalaya',
    degree: 'Secondary School Certificate (SSC)',
    period: '2020 – 2022',
    grade: '70.40%',
    location: 'Jalgaon, Maharashtra',
  },
]