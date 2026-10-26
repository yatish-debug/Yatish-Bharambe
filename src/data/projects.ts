export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  category: 'threat-intel' | 'offensive' | 'defensive' | 'tooling'
  technologies: string[]
  metrics: { label: string; value: string }[]
  mitreTactics: string[]
  github: string
  featured?: boolean
  architecture: {
    pipeline: string[]
    description: string
  }
  attackDefenseFlow: {
    adversaryVector: string
    countermeasure: string
  }
  cliSnippet: {
    command: string
    sampleOutput: string[]
  }
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
    featured: true,
    architecture: {
      pipeline: [
        'Threat Feeds (AlienVault, MISP, AbuseIPDB)',
        'Kafka Streaming Ingestion Buffer',
        'Neo4j Knowledge Graph IOC Correlation',
        'FastAPI Threat Scoring Engine (ML Ensemble)',
        'Automated SOAR Playbook Trigger & SIEM Sync',
      ],
      description: 'Zero-loss streaming pipeline processing unstructured threat indicators into bidirectional entity relationship graphs, eliminating manual alert triage lag.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Covert multi-stage beaconing through rotating fast-flux DNS nodes and modular C2 endpoints.',
      countermeasure: 'Automated graph node traversal detects temporal domain clustering and enforces firewall blackhole routes in < 45 seconds.',
    },
    cliSnippet: {
      command: 'aegis-cli triage --feed misp-feed-04 --depth full --score-threshold 80',
      sampleOutput: [
        '[*] Connecting to Neo4j graph cluster at neo4j://10.240.0.15:7687... CONNECTED',
        '[+] Ingested 14,820 IOC records from MISP & AlienVault OTX in 1.42s',
        '[!] High confidence correlation found: IOC: 185.220.101.5 -> Linked to APT29 C2 infra',
        '[+] Generated STIX v2.1 bundle: aegis-incident-9821.json (Threat Score: 94/100)',
        '[SUCCESS] SOAR action triggered: Null-route pushed to Palo Alto perimeter firewalls',
      ],
    },
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
    featured: true,
    architecture: {
      pipeline: [
        'Linux Kernel eBPF Hook (AF_XDP Zero-Copy)',
        'Ring Buffer High-Speed Packet Demux',
        'C++ Feature Vector Extraction Engine',
        'ONNX Quantized Neural Autoencoder Inference',
        'Real-time Alert Dispatch & Suricata Rule Gen',
      ],
      description: 'Zero-copy kernel eBPF packet ring bypasses kernel-to-userspace copying overhead, enabling line-rate 40 Gbps deep protocol inspection.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Encrypted DNS tunneling carrying exfiltrated Active Directory credentials disguised inside high-frequency subdomains.',
      countermeasure: 'Autoencoder reconstructs entropy features and flags anomalous Shannon entropy score spikes above 7.82, dropping sessions instantly.',
    },
    cliSnippet: {
      command: 'spectre-agent --interface eth0 --model quantized-autoencoder-v3.onnx --ebpf',
      sampleOutput: [
        '[INFO] eBPF XDP filter loaded into kernel ring buffer on dev: eth0',
        '[*] Listening on line-rate interface: 40 Gbps max throughput',
        '[ALERT] [T1048] Anomaly Detected on Session #890412 (10.0.4.82:53 -> 198.51.100.24)',
        '  - Protocol: DNS Tunneling Query Flood (Shannon Entropy: 7.94 / Normal: 3.2)',
        '  - Reconstruction Error: 0.892 (Threshold: 0.150) -> Zero-Day Confidence: 99.4%',
        '[ACTION] Kernel XDP_DROP rule injected in 0.18ms. Packet payload quarantined.',
      ],
    },
  },
  {
    id: 3,
    title: 'Valkyrie - Cloud & Web Vulnerability Engine',
    tagline: 'Headless Dynamic Application Security Testing & Cloud IAM Auditing',
    description: 'Custom headless vulnerability scanner designed for CI/CD DevSecOps pipelines. Performs automated DAST audits, SSRF detection, OAuth misconfigurations, JWT forgery checks, and AWS IAM privilege escalation paths.',
    category: 'offensive',
    technologies: ['Go', 'Chromium DevTools', 'GraphQL', 'AWS SDK', 'Docker'],
    metrics: [
      { label: 'Vuln Classes Tested', value: '48+ OWASP' },
      { label: 'Scan Concurrency', value: '250 workers' },
      { label: 'CVEs Identified', value: '7 Disclosed' },
    ],
    mitreTactics: ['TA0004 Privilege Escalation', 'T1190 Exploit Public App', 'T1552 Unsecured Creds'],
    github: 'https://github.com/yatish-debug/valkyrie-scanner',
    featured: true,
    architecture: {
      pipeline: [
        'Headless Chromium Crawler (DOM & SPA Execution)',
        'Stateful Parameter Fuzzer (OAST / Out-of-Band Callback)',
        'JWT & Authorization Matrix Mutation Engine',
        'Cloud IAM Policy Graph Evaluator (AWS/GCP)',
        'SARIF / Markdown Executive Pentest Report Engine',
      ],
      description: 'Full-spectrum dynamic crawler executing client-side Single Page Applications (SPAs) while simultaneously evaluating cloud privilege paths.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Blind Server-Side Request Forgery (SSRF) hitting cloud metadata endpoint 169.254.169.254 to harvest EC2 instance profile tokens.',
      countermeasure: 'OAST callback listener verifies blind requests, validates IMDSv2 token mandates, and drafts developer remediation patches.',
    },
    cliSnippet: {
      command: 'valkyrie-scan --target https://staging-api.internal --modules ssrf,jwt,iam --workers 50',
      sampleOutput: [
        '[+] Crawling target application DOM (Discovered 142 endpoints, 38 forms)',
        '[TESTING] Fuzzing header injection and JWT algorithm confusion vulnerabilities...',
        '[VULN FOUND] CRITICAL: Blind SSRF in /api/v2/webhook/dispatcher (CVSS: 9.1)',
        '  - Payload: http://169.254.169.254/latest/meta-data/iam/security-credentials/',
        '  - Callback received at unique token oast-listener.valkyrie-internal:443',
        '[REPORT] Written SARIF format report to ./reports/valkyrie-scan-2026.sarif',
      ],
    },
  },
  {
    id: 4,
    title: 'ZeroVault - Kernel Malware Sandbox & Heuristics',
    tagline: 'Isolated Hypervisor Detonation Chamber with Memory Forensics',
    description: 'Bare-metal virtualization harness for executing untrusted PE binaries and ransomware samples. Automatically records API hooks, registry diffs, memory dumps, and extracts un-obfuscated YARA signatures.',
    category: 'tooling',
    technologies: ['Rust', 'Python', 'QEMU/KVM', 'Volatility 3', 'YARA', 'GDB'],
    metrics: [
      { label: 'Detonation Time', value: '180s sandbox' },
      { label: 'Anti-VM Bypass', value: 'Level 4' },
      { label: 'Memory Artifacts', value: '100% Volatility' },
    ],
    mitreTactics: ['TA0005 Defense Evasion', 'T1055 Process Injection', 'T1486 Data Encrypted'],
    github: 'https://github.com/yatish-debug/zerovault-sandbox',
    architecture: {
      pipeline: [
        'Bare-Metal KVM Hypervisor with Custom ACPI Cloaking',
        'Guest Windows 11 VM Snapshot Instant Restore (50ms)',
        'Kernel SSDT & In-line Function Hook Monitor',
        'Physical Memory Dumper & Volatility 3 Plugin Runner',
        'Automatic YARA & Sigma Rule Generation',
      ],
      description: 'Hardened hypervisor environment with spoofed CPUID instructions and thermal sensors to defeat aggressive anti-analysis malware checks.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Process hollowing into svchost.exe accompanied by RDTSC timing attacks to detect virtualized analysis sandbox chambers.',
      countermeasure: 'Hardware-assisted hypervisor trap intercepts RDTSC tick counts, normalizes clocks, and dumps injected payload memory segments.',
    },
    cliSnippet: {
      command: 'zerovault-detonate --sample ./samples/ransomware_variant.bin --timeout 180 --volatility',
      sampleOutput: [
        '[+] Restored pristine VM snapshot: Win11_x64_Clean in 48ms',
        '[*] Executing sample with kernel API telemetry enabled...',
        '[BEHAVIOR] Anti-Analysis Detected: RDTSC timing check caught & normalized',
        '[BEHAVIOR] Process Injection: NtUnmapViewOfSection called on svchost.exe (PID: 4120)',
        '[FORENSICS] Memory dumped to ./dumps/mem_4120.dmp -> Volatility 3 malfind analysis',
        '[RULE] Generated YARA signature matching decrypted beacon payload: rule_ransomware_gen.yar',
      ],
    },
  },
  {
    id: 5,
    title: 'RedRelay - Active Directory Attack Simulator',
    tagline: 'Kerberos & NTLM Coercion Testing Framework for Red Teams',
    description: 'Automated lateral movement simulator that maps Active Directory domain trust paths, detects Kerberoasting vulnerabilities, and validates zero-trust boundary segmentation in enterprise forests.',
    category: 'offensive',
    technologies: ['PowerShell', 'Python', 'Impacket', 'BloodHound', 'LDAP'],
    metrics: [
      { label: 'Graph Paths Mapped', value: '10,000+ nodes' },
      { label: 'Kerberoast Audit', value: 'Sub-minute' },
    ],
    mitreTactics: ['TA0006 Credential Access', 'T1558 Steal Kerberos Tickets'],
    github: 'https://github.com/yatish-debug/redrelay-ad',
    architecture: {
      pipeline: [
        'LDAP & Kerberos Pre-Authentication Enumerator',
        'BloodHound CE Graph Path Generator',
        'MS-RPRN / PetitPotam Coercion Validator',
        'Service Principal Name (SPN) Ticket Harvester',
        'Hardening Playbook & Group Policy Template Generator',
      ],
      description: 'Audits multi-tier enterprise Active Directory forests without triggering honeypot service alarms or enterprise EDR rate limits.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Unconstrained delegation escalation combining PetitPotam NTLM relay into Active Directory Certificate Services (AD CS).',
      countermeasure: 'Flags misconfigured ESC1/ESC8 templates, disables NTLM fallback protocols, and generates PowerShell Group Policy hardening scripts.',
    },
    cliSnippet: {
      command: 'python redrelay.py --domain CORP.LOCAL --target dc01.corp.local --audit-mode safe',
      sampleOutput: [
        '[+] Authenticated via LDAP with standard domain user credentials',
        '[+] Extracted 84 SPNs for Kerberoasting analysis (3 using legacy RC4 encryption)',
        '[CRITICAL] AD CS Vulnerability Identified: ESC1 Template "WebServerCustom" allows SAN impersonation',
        '[PATH] Attack Path: Domain Users -> GenericWrite -> TargetGroup -> Domain Admin (3 hops)',
        '[REMEDIATION] Generated defensive GPO script: ./harden_corp_domain.ps1',
      ],
    },
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
    architecture: {
      pipeline: [
        'Lightweight Container Decoy Nodes (Go microservices)',
        'Encrypted WireGuard Mesh Network Telemetry Tunnel',
        'Central TimescaleDB Ingestion Cluster',
        'Geo-IP / ASN Threat Attribution Mapper',
        'Grafana Real-time SOC Dashboard & IoC Export',
      ],
      description: 'Distributed deception network capturing brute-force dictionaries, SSH credential pairs, and zero-day scan probes across 24 edge regions.',
    },
    attackDefenseFlow: {
      adversaryVector: 'Automated mass-scanning botnets searching for unauthenticated Redis and vulnerable OpenSSH daemons.',
      countermeasure: 'Decoys simulate realistic responses, capturing credential payloads and generating live IP blacklists for perimeter firewalls.',
    },
    cliSnippet: {
      command: 'shadowmesh-node --cluster ap-south-1 --services ssh,redis,rdp --log-json',
      sampleOutput: [
        '[+] Node initialized in region: ap-south-1 (Mumbai Decoy Cluster)',
        '[*] WireGuard tunnel connected to collector at 10.100.0.1:51820',
        '[PROBE CAPTURED] SSH Brute-Force from 194.26.29.112 (ASN: AS49505)',
        '  - Attempted User: root | Password: [REDACTED_PASSWORD_123]',
        '  - Threat Actor Category: Mirai Variant Automated Botnet',
        '[BROADCAST] IP 194.26.29.112 added to central threat intel blocklist in 12ms',
      ],
    },
  },
]