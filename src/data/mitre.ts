export interface MitreTechnique {
  id: string
  name: string
  tactic: string
  tacticCode: string
  description: string
  toolsUsed: string[]
  proficiency: 'Expert' | 'Advanced' | 'Mastery'
  offensiveScenario: string
  defensiveMitigation: string
}

export interface MitreTactic {
  code: string
  name: string
  description: string
  techniques: MitreTechnique[]
}

export const mitreTactics: MitreTactic[] = [
  {
    code: 'TA0001',
    name: 'Initial Access',
    description: 'Techniques used to gain an initial foothold on a target enterprise network.',
    techniques: [
      {
        id: 'T1190',
        name: 'Exploit Public-Facing Application',
        tactic: 'Initial Access',
        tacticCode: 'TA0001',
        description: 'Exploiting web applications, APIs, or DMZ boundary devices using zero-day and n-day vulnerabilities.',
        toolsUsed: ['Burp Suite Pro', 'SQLMap', 'ffuf', 'Metasploit', 'Custom Python PoCs'],
        proficiency: 'Mastery',
        offensiveScenario: 'Identified SQL injection and broken access control in client facing portal to achieve remote code execution.',
        defensiveMitigation: 'Deploy WAF with rate-limiting, parameterized queries, and hardened API gateway token validation.',
      },
      {
        id: 'T1078',
        name: 'Valid Accounts',
        tactic: 'Initial Access',
        tacticCode: 'TA0001',
        description: 'Gaining access through stolen, default, or compromised legitimate administrative credentials.',
        toolsUsed: ['Hydra', 'NetExec (CrackMapExec)', 'Hashcat', 'Dehashed'],
        proficiency: 'Advanced',
        offensiveScenario: 'Password spraying against single sign-on (SSO) portals without multi-factor authentication (MFA).',
        defensiveMitigation: 'Enforce phishing-resistant FIDO2 MFA, conditional access policies, and risky sign-in detection.',
      },
    ],
  },
  {
    code: 'TA0004',
    name: 'Privilege Escalation',
    description: 'Techniques adversaries use to gain higher-level permissions on a system or domain.',
    techniques: [
      {
        id: 'T1548',
        name: 'Abuse Elevation Control Mechanism',
        tactic: 'Privilege Escalation',
        tacticCode: 'TA0004',
        description: 'Bypassing User Account Control (UAC) or abusing Linux sudo permissions and SUID binaries.',
        toolsUsed: ['LinPEAS', 'WinPEAS', 'GTFOBins', 'UACME'],
        proficiency: 'Mastery',
        offensiveScenario: 'Exploited misconfigured SUID capabilities on custom system binaries to escalate from www-data to root.',
        defensiveMitigation: 'Regularly audit SUID/SGID bits, enforce strict sudoers files with `NOEXEC`, and deploy SELinux/AppArmor.',
      },
      {
        id: 'T1068',
        name: 'Exploitation for Privilege Escalation',
        tactic: 'Privilege Escalation',
        tacticCode: 'TA0004',
        description: 'Leveraging software or kernel flaws to execute code in the context of SYSTEM or root.',
        toolsUsed: ['Linux Exploit Suggester', 'Metasploit', 'GDB', 'Custom C Exploits'],
        proficiency: 'Advanced',
        offensiveScenario: 'Compiled and executed local kernel exploit on unpatched enterprise Linux server to gain root shell.',
        defensiveMitigation: 'Automated live-patching kernels, disabling unprivileged user namespaces, and enforcing CIS benchmarks.',
      },
    ],
  },
  {
    code: 'TA0006',
    name: 'Credential Access',
    description: 'Techniques for stealing credentials such as passwords, hashes, and Kerberos tickets.',
    techniques: [
      {
        id: 'T1558',
        name: 'Steal or Forge Kerberos Tickets',
        tactic: 'Credential Access',
        tacticCode: 'TA0006',
        description: 'Kerberoasting, AS-REP Roasting, and Golden/Silver ticket creation to harvest Active Directory hashes.',
        toolsUsed: ['Rubeus', 'Impacket (GetUserSPNs.py)', 'BloodHound', 'Hashcat'],
        proficiency: 'Mastery',
        offensiveScenario: 'Extracted Kerberos TGS tickets for domain service accounts using RC4 encryption and cracked offline.',
        defensiveMitigation: 'Enforce AES-256 for Kerberos, set 30+ character random service account passwords, and use gMSAs.',
      },
      {
        id: 'T1003',
        name: 'OS Credential Dumping',
        tactic: 'Credential Access',
        tacticCode: 'TA0006',
        description: 'Dumping plaintext credentials and NTLM hashes from LSASS memory, SAM database, or /etc/shadow.',
        toolsUsed: ['Mimikatz', 'Procdump', 'Secretsdump.py', 'Pypykatz'],
        proficiency: 'Mastery',
        offensiveScenario: 'Extracted cached domain admin credentials from LSASS memory using process mini-dumping techniques.',
        defensiveMitigation: 'Enable LSA RunAsPPL (Protected Process Light), Windows Defender Credential Guard, and disable WDigest.',
      },
    ],
  },
  {
    code: 'TA0008',
    name: 'Lateral Movement',
    description: 'Techniques used to extend access to other high-value systems across the enterprise.',
    techniques: [
      {
        id: 'T1550',
        name: 'Use Alternate Authentication Material',
        tactic: 'Lateral Movement',
        tacticCode: 'TA0008',
        description: 'Pass-the-Hash (PtH), Pass-the-Ticket (PtT), and token impersonation to traverse network segments.',
        toolsUsed: ['Impacket (psexec.py, wmiexec.py)', 'Evil-WinRM', 'BloodHound', 'Cobalt Strike'],
        proficiency: 'Mastery',
        offensiveScenario: 'Used harvested NTLM hash of local administrator to pivot across 12 workstations without knowing password.',
        defensiveMitigation: 'Deploy Microsoft LAPS (Local Administrator Password Solution) to enforce unique passwords per host.',
      },
      {
        id: 'T1021',
        name: 'Remote Services (WMI & WinRM)',
        tactic: 'Lateral Movement',
        tacticCode: 'TA0008',
        description: 'Executing remote commands via Windows Management Instrumentation and Windows Remote Management.',
        toolsUsed: ['wmiexec.py', 'Evil-WinRM', 'PowerShell Remoting', 'Chisel'],
        proficiency: 'Advanced',
        offensiveScenario: 'Established covert SOCKS5 proxy via Chisel to route remote WMI execution through internal subnets.',
        defensiveMitigation: 'Segment internal networks with host-based firewalls blocking workstation-to-workstation RPC/WinRM.',
      },
    ],
  },
]
