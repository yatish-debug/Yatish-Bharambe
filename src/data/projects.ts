export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  category: 'threat-intel' | 'offensive' | 'defensive' | 'tooling'
  technologies: string[]
  metrics: { label: string; value: string }[]
  mitreTactics: string[]
  github?: string
  demo?: string
  writeup?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'AegisSOC - Threat Intelligence Platform',
    tagline: 'Distributed IOC Correlation & Real-time Automated Threat Triage',
    description: 'Autonomous threat intelligence engine that aggregates 15+ threat feeds, correlates indicators of compromise (IOCs) with internal telemetry using graph databases, and generates STIX/TAXII compliant feeds with ML-driven threat scoring.',
    category: 'threat-intel',
    technologies: ['Python', 'FastAPI', 'React', 'Neo4j', 'Redis', 'MISP', 'Docker'],
    metrics: [
      { label: 'Event Processing', value: '1.2M logs/sec' },
      { label: 'False Positive Drop', value: '-62%' },
      { label: 'Mean Triage Time', value: '< 45s' },
    ],
    mitreTactics: ['TA0001 Initial Access', 'TA0011 Command & Control', 'T1071 App Layer Protocol'],
    github: 'https://github.com/yatish-debug/aegis-threat-intel',
    demo: 'https://aegis-soc-demo.cybersec.dev',
    writeup: 'https://blog.cybersec.dev/aegis-architecture',
    featured: true,
  },
  {
    id: 2,
    title: 'SpectreNIDS - ML Neural Intrusion Detection',
    tagline: 'Deep Packet Inspection with Self-Supervised Anomaly Detection',
    description: 'Hardware-accelerated packet capture pipeline with lightweight autoencoder models to detect zero-day lateral movement, covert C2 channels, and DNS tunneling without relying on brittle static signatures.',
    category: 'defensive',
    technologies: ['C++', 'Python', 'eBPF', 'PyTorch', 'Kafka', 'Elasticsearch'],
    metrics: [
      { label: 'Detection Accuracy', value: '99.4%' },
      { label: 'Packet Latency', value: '0.18ms' },
      { label: 'Bandwidth Tested', value: '40 Gbps' },
    ],
    mitreTactics: ['TA0008 Lateral Movement', 'TA0010 Exfiltration', 'T1048 Alt Protocol'],
    github: 'https://github.com/yatish-debug/spectre-nids',
    writeup: 'https://blog.cybersec.dev/ml-packet-inspection',
    featured: true,
  },
  {
    id: 3,
    title: 'Valkyrie - Cloud & Web Vulnerability Engine',
    tagline: 'Headless Dynamic Application Security Testing & Cloud IAM Auditing',
    description: 'Custom headless vulnerability scanner designed for CI/CD DevSecOps pipelines. Performs automated AST audits, SSRF detection, OAuth misconfigurations, JWT forgery checks, and AWS IAM privilege escalation paths.',
    category: 'offensive',
    technologies: ['Go', 'Chromium DevTools', 'GraphQL', 'AWS SDK', 'Docker'],
    metrics: [
      { label: 'Vuln Classes Tested', value: '48+ OWASP' },
      { label: 'Scan Concurrency', value: '250 workers' },
      { label: 'CVEs Identified', value: '7 Disclosed' },
    ],
    mitreTactics: ['TA0004 Privilege Escalation', 'T1190 Exploit Public App', 'T1552 Unsecured Creds'],
    github: 'https://github.com/yatish-debug/valkyrie-scanner',
    demo: 'https://valkyrie-preview.cybersec.dev',
    featured: true,
  },
  {
    id: 4,
    title: 'ZeroVault - Kernel Malware Sandbox & Heuristics',
    tagline: 'Isolated Hypervisor Detonation Chamber with Memory Forensics',
    description: 'Bare-metal virtualization harness for executing untrusted PE binaries and ransomware samples. Automatically records API hook hooks, registry diffs, memory dumps, and extracts un-obfuscated YARA signatures.',
    category: 'tooling',
    technologies: ['Rust', 'Python', 'QEMU/KVM', 'Volatility 3', 'YARA', 'GDB'],
    metrics: [
      { label: 'Detonation Time', value: '180s sandbox' },
      { label: 'Anti-VM Bypass', value: 'Level 4' },
      { label: 'Memory Artifacts', value: '100% Volatility' },
    ],
    mitreTactics: ['TA0005 Defense Evasion', 'T1055 Process Injection', 'T1486 Data Encrypted'],
    github: 'https://github.com/yatish-debug/zerovault-sandbox',
    writeup: 'https://blog.cybersec.dev/kernel-detonation-sandbox',
  },
  {
    id: 5,
    title: 'RedRelay - Active Directory Attack Simulator',
    tagline: 'Kerberos & NTLM Coercion Testing Framework for Red Teams',
    description: 'Automated lateral movement simulator that maps Active Directory domain trust paths, detects Kerberoasting vulnerabilities, and validates zero-trust boundary segmentation in enterprise enterprise forests.',
    category: 'offensive',
    technologies: ['PowerShell', 'Python', 'Impacket', 'BloodHound', 'LDAP'],
    metrics: [
      { label: 'Graph Paths Mapped', value: '10,000+ nodes' },
      { label: 'Kerberoast Audit', value: 'Sub-minute' },
    ],
    mitreTactics: ['TA0006 Credential Access', 'T1558 Steal Kerberos Tickets'],
    github: 'https://github.com/yatish-debug/redrelay-ad',
    writeup: 'https://blog.cybersec.dev/kerberos-attack-paths',
  },
  {
    id: 6,
    title: 'ShadowMesh - HoneyPot & Deception Grid',
    tagline: 'Low-Interaction Distributed Deception Nodes with Geo-IP Tracking',
    description: 'Lightweight decoy honeypot cluster mimicking vulnerable Redis, SSH, and RDP services. Gathers attacker telemetry, brute-force dictionaries, and publishes live feeds to threat intelligence communities.',
    category: 'defensive',
    technologies: ['Go', 'TimescaleDB', 'Grafana', 'WireGuard', 'Docker'],
    metrics: [
      { label: 'Decoy Nodes', value: '24 global regions' },
      { label: 'Probes Caught / Day', value: '85,000+' },
    ],
    mitreTactics: ['TA0007 Discovery', 'T1046 Network Service Scanning'],
    github: 'https://github.com/yatish-debug/shadowmesh-honeypot',
    demo: 'https://shadowmesh-live.cybersec.dev',
  },
]