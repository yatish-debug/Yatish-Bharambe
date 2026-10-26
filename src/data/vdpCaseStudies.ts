export interface VdpTimelineEvent {
  phase: string
  date: string
  description: string
  status: 'completed' | 'verified' | 'acknowledged'
}

export interface VdpCaseStudy {
  id: string
  title: string
  targetOrganization: string
  badge: string
  badgeColor: string
  vulnerabilityClass: string
  cvssScore: string
  cvssVector: string
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM'
  status: string
  summary: string
  technicalDetails: {
    discoveryMethod: string
    attackVector: string
    remediationGuidance: string[]
  }
  timeline: VdpTimelineEvent[]
  officialProof: string
  featured?: boolean
}

export const vdpCaseStudies: VdpCaseStudy[] = [
  {
    id: 'nasa-vdp-case-study',
    title: 'NASA VDP: Sensitive Infrastructure Exposure & Authorization Flaw',
    targetOrganization: 'NASA - National Aeronautics and Space Administration',
    badge: 'NASA HALL OF FAME',
    badgeColor: '#38bdf8',
    vulnerabilityClass: 'Insecure Direct Object Reference (IDOR) & Sensitive Config Exposure',
    cvssScore: '7.5 (HIGH)',
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:N/A:N',
    severity: 'HIGH',
    status: 'RESOLVED // INDUCTED TO HALL OF FAME',
    summary:
      'Discovered and responsibly disclosed an authorization bypass and configuration exposure across NASA-hosted public assets under the NASA Vulnerability Disclosure Policy. Earned official induction into the NASA Hall of Fame.',
    technicalDetails: {
      discoveryMethod:
        'Passive endpoint enumeration and systematic parameter fuzzing using custom headless tools revealed an unauthenticated internal debugging endpoint leaking sensitive system parameters.',
      attackVector:
        'An exposed internal telemetry handler permitted unauthenticated enumeration of server-side object IDs without verifying requesting session access tokens.',
      remediationGuidance: [
        'Enforced robust role-based access control (RBAC) and OAuth2 bearer token verification on all backend endpoints.',
        'Disabled development diagnostic endpoints across production cluster ingress nodes.',
        'Configured reverse-proxy header sanitation and automated parameter integrity checks.',
      ],
    },
    timeline: [
      { phase: 'Discovery & Recon', date: 'T+0 Days', description: 'Identified anomalous API response during scheduled reconnaissance.', status: 'completed' },
      { phase: 'Safe PoC Verification', date: 'T+1 Day', description: 'Validated impact within non-destructive testing boundaries of NASA VDP.', status: 'completed' },
      { phase: 'Coordinated Disclosure', date: 'T+2 Days', description: 'Submitted comprehensive security advisory with reproducible reproduction steps.', status: 'completed' },
      { phase: 'Triaged & Verified', date: 'T+5 Days', description: 'NASA Security Operations Team triaged and confirmed vulnerability validity.', status: 'acknowledged' },
      { phase: 'Remediation Verified', date: 'T+14 Days', description: 'Patched deployed and re-tested; vulnerability eradicated.', status: 'verified' },
      { phase: 'Hall of Fame Induction', date: 'T+21 Days', description: 'Formally acknowledged and inducted into official NASA VDP Hall of Fame roster.', status: 'verified' },
    ],
    officialProof: 'NASA Vulnerability Disclosure Policy Official Acknowledgment & Hall of Fame',
    featured: true,
  },
  {
    id: 'ad-kerberos-coercion',
    title: 'Enterprise AD: Unconstrained Delegation to Domain Compromise',
    targetOrganization: 'Enterprise Hybrid Infrastructure // Red Team Mission',
    badge: 'RED TEAM ENGAGEMENT',
    badgeColor: '#ff3366',
    vulnerabilityClass: 'Kerberos Unconstrained Delegation & MS-RPRN Coercion',
    cvssScore: '8.8 (HIGH)',
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:L/UI:N/S:C/C:H/I:H/A:N',
    severity: 'HIGH',
    status: 'REMEDIATED // BLUEPRINT HARDENED',
    summary:
      'Mapped and exploited an unconstrained Kerberos delegation chain across enterprise Active Directory forests, demonstrating how a low-privilege service account could coerce a Domain Controller into surrendering TGT tickets.',
    technicalDetails: {
      discoveryMethod:
        'BloodHound CE graph query identified a computer account with `TRUSTED_FOR_DELEGATION` flag configured on a non-tier-0 asset.',
      attackVector:
        'Triggered RPC MS-RPRN print spooler coercion back to attacker-controlled listener machine, capturing Domain Controller machine account TGT.',
      remediationGuidance: [
        'Migrated all legacy unconstrained delegation targets to Resource-Based Constrained Delegation (RBCD).',
        'Added high-value administrative accounts to the "Protected Users" security group.',
        'Disabled the Print Spooler service on all Domain Controllers via enterprise Group Policy (GPO).',
      ],
    },
    timeline: [
      { phase: 'BloodHound Graph Audit', date: 'Stage 1', description: 'Discovered hidden delegation attack path in 10,000+ node forest.', status: 'completed' },
      { phase: 'Coercion Proof-of-Concept', date: 'Stage 2', description: 'Demonstrated benign NTLM/Kerberos capture without service impact.', status: 'completed' },
      { phase: 'Executive Briefing', date: 'Stage 3', description: 'Presented attack chain to CISO & Tier-3 Infrastructure engineering lead.', status: 'acknowledged' },
      { phase: 'GPO Hardening & Retest', date: 'Stage 4', description: 'Applied GPO hardening policy and verified complete attack chain neutralization.', status: 'verified' },
    ],
    officialProof: 'Enterprise Red Team Debrief & Security Remediation Sign-off',
  },
  {
    id: 'blind-ssrf-cloud-metadata',
    title: 'SaaS Platform: Blind SSRF with Cloud IMDS Exfiltration',
    targetOrganization: 'Multi-Tenant Cloud Infrastructure // Bug Bounty',
    badge: 'BUG BOUNTY DISCLOSURE',
    badgeColor: '#a855f7',
    vulnerabilityClass: 'Server-Side Request Forgery (SSRF) & AWS IMDSv1 Misconfiguration',
    cvssScore: '9.1 (CRITICAL)',
    cvssVector: 'CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:C/C:H/I:H/A:N',
    severity: 'CRITICAL',
    status: 'PATCHED & REWARDED',
    summary:
      'Uncovered a blind SSRF vulnerability in a webhook notification dispatcher that allowed crafting requests to the AWS EC2 metadata service (169.254.169.254), risking IAM role credentials exfiltration.',
    technicalDetails: {
      discoveryMethod:
        'Out-of-band Application Security Testing (OAST) using DNS interaction callbacks when validating user-supplied webhook URLs.',
      attackVector:
        'Webhook URL validator used weak regex that could be bypassed using decimal IP representation and HTTP redirection to hit AWS metadata.',
      remediationGuidance: [
        'Mandated AWS IMDSv2 token enforcement (PUT request requirement with X-aws-ec2-metadata-token-ttl-seconds: 1).',
        'Implemented strict socket-level IP resolution blocking non-routable, private (RFC 1918), and link-local ranges.',
        'Isolated egress webhook dispatchers inside a dedicated unprivileged VPC subnet.',
      ],
    },
    timeline: [
      { phase: 'OAST Trigger', date: 'Hour 0', description: 'Received DNS pingback from internal cloud worker node.', status: 'completed' },
      { phase: 'Filter Bypass PoC', date: 'Hour 3', description: 'Proved internal metadata reachability without exfiltrating sensitive tokens.', status: 'completed' },
      { phase: 'Responsible Report', date: 'Hour 6', description: 'Submitted through coordinated disclosure platform with CVSS 9.1 calculation.', status: 'acknowledged' },
      { phase: 'Hotfix Deployment', date: 'Hour 24', description: 'Engineering team deployed IMDSv2 mandate and network egress filter.', status: 'verified' },
    ],
    officialProof: 'Bug Bounty Coordinated Security Advisory & Reward Confirmation',
  },
]
