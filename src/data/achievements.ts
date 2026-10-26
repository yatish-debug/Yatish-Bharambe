export interface SubRank {
  domain: string
  rank: string
  percentile?: string
  iconName?: string
}

export interface AchievementItem {
  id: string
  title: string
  subtitle: string
  organization: string
  year: string
  category: 'hall-of-fame' | 'ctf' | 'competitive-coding' | 'hackathon'
  categoryLabel: string
  rankBadge: string
  rankHighlight: string
  metrics: { label: string; value: string }[]
  description: string
  highlights: string[]
  proofType: string
  verificationLink?: string
  accentColor: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  featured?: boolean
  subRanks?: SubRank[]
}

export const achievementStats = [
  { label: 'NASA Hall of Fame', value: 'VDP Inducted', subtext: 'Responsible Disclosure' },
  { label: 'Major CTF Titles', value: '2x Champion', subtext: 'MIT Boston & IIT Bombay' },
  { label: 'Global Shellcraft', value: 'Rank #2 World', subtext: 'HackerRank Bash & Shell' },
  { label: 'Elite Global Percentile', value: 'Top 0.5%', subtext: 'TryHackMe & HTB #14' },
]

export const achievements: AchievementItem[] = [
  {
    id: 'nasa-vdp-hof',
    title: 'NASA Hall of Fame Inductee',
    subtitle: 'Vulnerability Disclosure Policy (VDP)',
    organization: 'NASA - National Aeronautics and Space Administration',
    year: '2025 - 2026',
    category: 'hall-of-fame',
    categoryLabel: 'VDP & Hall of Fame',
    rankBadge: 'OFFICIAL HALL OF FAME',
    rankHighlight: 'Inducted into NASA VDP Hall of Fame',
    metrics: [
      { label: 'Recognition', value: 'Official Hall of Fame' },
      { label: 'Target Scope', value: 'NASA Digital Infrastructure' },
      { label: 'Disclosure Standard', value: 'Coordinated VDP Protocol' },
    ],
    description:
      'Officially acknowledged and inducted into the NASA Hall of Fame under the NASA Vulnerability Disclosure Policy for discovering, documenting, and responsibly reporting security vulnerabilities across space agency web infrastructure.',
    highlights: [
      'Identified security vulnerabilities impacting NASA digital infrastructure',
      'Followed strict Coordinated Vulnerability Disclosure (CVD) timelines and ethical guidelines',
      'Secured formal Hall of Fame listing on official NASA acknowledgment roster',
    ],
    proofType: 'NASA VDP Security Hall of Fame Acknowledgment',
    verificationLink: 'https://www.nasa.gov/vulnerability-disclosure-policy/',
    accentColor: '#38bdf8',
    badgeBg: 'bg-sky-950/40',
    badgeText: 'text-sky-300',
    badgeBorder: 'border-sky-500/40',
    featured: true,
  },
  {
    id: 'mit-flaghunt-2026',
    title: 'MIT Boston FLAGHUNT 2026',
    subtitle: 'Winner & Global Rank Individual Team Lead #3',
    organization: 'Massachusetts Institute of Technology (MIT Boston)',
    year: '2026',
    category: 'ctf',
    categoryLabel: 'International Wargames',
    rankBadge: '1ST PLACE & LEAD #3',
    rankHighlight: 'Winner & Global Individual Team Lead Rank #3',
    metrics: [
      { label: 'Tournament Standing', value: 'Overall Winner 🏆' },
      { label: 'Team Lead Standing', value: 'Global Rank #3' },
      { label: 'Format', value: 'Live International Cyber Wargames' },
    ],
    description:
      'Crowned overall Winner of MIT Boston FLAGHUNT 2026 while securing Global Rank #3 as Individual Team Lead, spearheading rapid binary exploitation, defensive persistence, and high-tempo flag capture operations.',
    highlights: [
      'Captured 1st Place overall in high-stakes competitive wargame hosted by MIT Boston',
      'Ranked #3 worldwide in individual tactical leadership and objective orchestration',
      'Engineered speed-exploits across memory corruption, web pwn, and cryptographic challenges',
    ],
    proofType: 'MIT Boston FLAGHUNT 2026 Official Leaderboard',
    verificationLink: 'https://flaghunt.mit.edu',
    accentColor: '#a855f7',
    badgeBg: 'bg-purple-950/40',
    badgeText: 'text-purple-300',
    badgeBorder: 'border-purple-500/40',
    featured: true,
  },
  {
    id: 'htb-cyber-apocalypse-2026',
    title: "HTB Cyber Apocalypse CTF 2026",
    subtitle: 'Global Team Rank #14 & Best Team Leader Rank #3 Worldwide',
    organization: 'Hack The Box (HTB)',
    year: '2026',
    category: 'ctf',
    categoryLabel: 'Offensive Security CTF',
    rankBadge: 'TEAM #14 // LEAD #3',
    rankHighlight: 'Global Team Rank #14 | Team Leader Rank #3 Worldwide',
    metrics: [
      { label: 'Global Team Rank', value: 'Rank #14' },
      { label: 'Best Team Leader', value: 'Rank #3 Worldwide' },
      { label: 'Scale', value: 'Thousands of Global Teams' },
    ],
    description:
      "Commanded elite offensive security operations in Hack The Box's premier Cyber Apocalypse CTF 2026, driving the squad to Global Team Rank #14 out of thousands of teams and achieving #3 Best Team Leader across the globe.",
    highlights: [
      'Led squad to 14th place globally in the largest annual CTF in the cybersecurity industry',
      'Recognized as #3 Best Team Leader internationally for strategic challenge distribution',
      'Conquered advanced binary exploitation, reverse engineering, web security, and blockchain challenges',
    ],
    proofType: 'Hack The Box Global Leaderboard & Team Stats',
    verificationLink: 'https://app.hackthebox.com',
    accentColor: '#00ff66',
    badgeBg: 'bg-emerald-950/40',
    badgeText: 'text-emerald-300',
    badgeBorder: 'border-emerald-500/40',
    featured: true,
  },
  {
    id: 'hackconquest-iit-bombay-2025',
    title: 'HackConquest CTF 2025 — IIT Bombay',
    subtitle: '1st Place Champion & Tournament Winner',
    organization: 'IIT Bombay (Indian Institute of Technology Bombay)',
    year: '2025',
    category: 'ctf',
    categoryLabel: 'Premier Institute CTF',
    rankBadge: '1ST PLACE CHAMPION',
    rankHighlight: '1st Place / Tournament Champion',
    metrics: [
      { label: 'Placement', value: '1st Place Winner 🏆' },
      { label: 'Host Institute', value: 'IIT Bombay' },
      { label: 'Disciplines', value: 'Reverse Eng, Crypto, Web, Forensics' },
    ],
    description:
      'Secured 1st Place victory at HackConquest CTF 2025 organized by IIT Bombay, dominating rigorous real-world attack simulations encompassing web exploitation, custom cryptographic breaks, memory corruption, and digital forensics.',
    highlights: [
      '1st Place overall champion among premier engineering and cybersecurity participants',
      'First-blood captures on complex multi-tiered web exploitation and kernel pwn puzzles',
      'Demonstrated elite lateral movement and digital forensic artifact extraction',
    ],
    proofType: 'IIT Bombay HackConquest Official Result & Citation',
    verificationLink: 'https://techfest.org',
    accentColor: '#fbbf24',
    badgeBg: 'bg-amber-950/40',
    badgeText: 'text-amber-300',
    badgeBorder: 'border-amber-500/40',
    featured: true,
  },
  {
    id: 'tryhackme-global-165',
    title: 'TryHackMe Global Leaderboard',
    subtitle: 'Global Ranking #165 & Top 0.5% Worldwide',
    organization: 'TryHackMe',
    year: '2025 - 2026',
    category: 'ctf',
    categoryLabel: 'Hands-on Cyber Range',
    rankBadge: 'GLOBAL #165 // TOP 0.5%',
    rankHighlight: 'Global Rank #165 & Top 0.5% Worldwide',
    metrics: [
      { label: 'Worldwide Position', value: 'Rank #165' },
      { label: 'User Percentile', value: 'Top 0.5% Worldwide' },
      { label: 'Community Base', value: '3M+ Security Researchers' },
    ],
    description:
      'Attained Global Rank #165 on TryHackMe, placing in the elite top 0.5% among millions of cybersecurity practitioners worldwide through rigorous hands-on lab pwning, Active Directory domain compromise, and post-exploitation tradecraft.',
    highlights: [
      'Consistently ranked within top 0.5% globally out of millions of active users',
      'Mastered dozens of "Insane" and "Hard" rated machines across Linux & Windows environments',
      'Advanced hands-on expertise in BloodHound, Kerberoasting, and multi-host pivoting',
    ],
    proofType: 'TryHackMe Verified Public Profile & Rank Metrics',
    verificationLink: 'https://tryhackme.com',
    accentColor: '#ff3366',
    badgeBg: 'bg-rose-950/40',
    badgeText: 'text-rose-300',
    badgeBorder: 'border-rose-500/40',
    featured: false,
  },
  {
    id: 'hackerrank-elite-leaderboards',
    title: 'HackerRank Multi-Domain Global Ranks',
    subtitle: 'Bash #2, C++ #7, C #12, Python #16 Worldwide',
    organization: 'HackerRank',
    year: '2025 - 2026',
    category: 'competitive-coding',
    categoryLabel: 'Systems & Shellcraft',
    rankBadge: 'BASH #2 // C++ #7 // C #12',
    rankHighlight: 'Global Rank #2 in Bash & Shell Scripting',
    metrics: [
      { label: 'Bash & Shell', value: 'Global Rank #2' },
      { label: 'C++ Systems', value: 'Global Rank #7' },
      { label: 'C Programming', value: 'Global Rank #12' },
      { label: 'Python Scripting', value: 'Global Rank #16' },
    ],
    subRanks: [
      { domain: 'Bash & Unix Shell', rank: 'Global Rank #2', percentile: 'Top 0.01%' },
      { domain: 'C++ (Advanced Systems)', rank: 'Global Rank #7', percentile: 'Top 0.05%' },
      { domain: 'C (Low-Level Systems)', rank: 'Global Rank #12', percentile: 'Top 0.08%' },
      { domain: 'Python (Scripting & Algo)', rank: 'Global Rank #16', percentile: 'Top 0.1%' },
    ],
    description:
      'Secured world-class rankings across 4 competitive programming disciplines on HackerRank, highlighted by Global Rank #2 in Unix Shell/Bash scripting, #7 in C++, #12 in C, and #16 in Python, demonstrating extreme low-level systems and automation mastery.',
    highlights: [
      'World Rank #2 in Unix Shell scripting and automated terminal pipelines',
      'World Rank #7 in modern C++ object and memory management algorithms',
      'Core foundation enabling custom exploit compilation and fast payload creation',
    ],
    proofType: 'HackerRank Verified Domain Leaderboards',
    verificationLink: 'https://www.hackerrank.com',
    accentColor: '#00f0ff',
    badgeBg: 'bg-cyan-950/40',
    badgeText: 'text-cyan-300',
    badgeBorder: 'border-cyan-500/40',
    featured: true,
  },
  {
    id: 'leetcode-dsa-cpp',
    title: 'LeetCode DSA Global Ranking',
    subtitle: 'Global Rank #16,523 in Data Structures & Algorithms (C++)',
    organization: 'LeetCode',
    year: '2025 - 2026',
    category: 'competitive-coding',
    categoryLabel: 'Algorithmic Engineering',
    rankBadge: 'GLOBAL RANK #16,523',
    rankHighlight: 'Global Rank #16,523 in DSA (C++)',
    metrics: [
      { label: 'Global Ranking', value: 'Rank #16,523' },
      { label: 'Primary Language', value: 'Modern C++ (STL)' },
      { label: 'Domain', value: 'Data Structures & Algorithms' },
    ],
    description:
      'Achieved global rank #16,523 on LeetCode competing in Data Structures and Algorithms with high-performance C++, demonstrating disciplined algorithmic reasoning, computational complexity optimization, and memory efficiency.',
    highlights: [
      'Rigorous execution of dynamic programming, graph traversal, and bit manipulation algorithms',
      'Strong algorithmic foundations directly applied to security tooling and packet analysis',
      'High-velocity problem solving under strict computational constraints',
    ],
    proofType: 'LeetCode Public Competitive Profile',
    verificationLink: 'https://leetcode.com',
    accentColor: '#f97316',
    badgeBg: 'bg-orange-950/40',
    badgeText: 'text-orange-300',
    badgeBorder: 'border-orange-500/40',
    featured: false,
  },
  {
    id: 'adobe-india-hackathon-2024',
    title: 'Adobe India Hackathon 2024',
    subtitle: 'Runner Up (2nd Place Nationwide)',
    organization: 'Adobe India',
    year: '2024',
    category: 'hackathon',
    categoryLabel: 'Industry Hackathon',
    rankBadge: 'NATIONAL RUNNER UP',
    rankHighlight: 'Runner Up / 2nd Place Nationwide',
    metrics: [
      { label: 'Placement', value: 'Runner Up (2nd Place)' },
      { label: 'Competition Scope', value: 'Nationwide Engineering Hackathon' },
      { label: 'Judging Focus', value: 'Innovation & Secure Architecture' },
    ],
    description:
      'Awarded Runner Up at the Adobe India Hackathon 2024 for developing high-impact software solutions evaluated by industry engineering leaders, demonstrating rapid architectural prototyping, secure system design, and defensive durability.',
    highlights: [
      'Secured 2nd place nationwide among premier collegiate and developer engineering teams',
      'Engineered production-grade security and automation within 36-hour sprint constraint',
      'Commended by Adobe engineering panel for robust threat modeling and clean implementation',
    ],
    proofType: 'Adobe India Hackathon 2024 Certificate of Placement',
    verificationLink: 'https://www.adobe.com',
    accentColor: '#f43f5e',
    badgeBg: 'bg-rose-950/40',
    badgeText: 'text-rose-300',
    badgeBorder: 'border-rose-500/40',
    featured: false,
  },
]
