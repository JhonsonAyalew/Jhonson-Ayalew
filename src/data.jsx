import { Bot, Building2, Layers, Mail, RadioTower, Workflow } from 'lucide-react'
import { GROQ_API_KEY, GROQ_MODEL, GROQ_URL } from './config/groq.js'
import { KNOWLEDGE_BASE } from './data/knowledgeBase.js'

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'AI Agents', href: '#agents' },
  { label: 'Contact', href: '#contact' },
]

export const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/JhonsonAyalew',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/johnson-ayalew',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v1.5" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: 'Upwork',
    href: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
        <path d="M18.56 4.16C15.86 2.75 12.54 4.04 10.7 7.07c-.84 1.39-1.55 2.62-2.22 3.79l-.42.72-1.11.26C4.66 12.5 3 14.3 3 16.77 3 19.9 5.54 22 8.42 22c3.7 0 6.27-2.91 6.27-6.98 0-1.3-.2-2.52-.59-3.63l1.02-1.76c1.56 1.34 3.6 1.88 5.47 1.34l.73-.2-.44-1.7c-.89-.23-1.7-.72-2.32-1.4 1.26-2.4 1.13-4.43.19-5.7l-.79-.78zm-1.98 10.09c.18.86.28 1.76.28 2.78 0 3.06-1.56 5.1-4.35 5.1-2.06 0-3.42-1.34-3.42-3.19 0-1.77 1.29-3.05 3.08-3.05.3 0 .62.03.94.1l.77-1.77c-.46-.13-.94-.2-1.44-.2-1.77 0-3.4.91-4.38 2.33-.7-2.11.3-4.72 2.55-5.49l.55-.19.39-.68c.66-1.15 1.36-2.37 2.18-3.73 1.33-2.2 3.5-3.17 5.05-2.3.76.42 1.2 1.24 1.2 2.25 0 1.4-.7 3.08-2.28 4.63l-.78 1.7.35.88z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:JhonsonAyalew21@gmail.com',
    icon: <Mail size={20} strokeWidth={1.5} aria-hidden="true" />,
  },
]

export const aboutFacts = [
  {
    label: 'Location',
    value: 'Addis Ababa, Ethiopia',
    sub: 'Working globally / remote',
  },
  {
    label: 'Experience',
    value: '2+ years in production',
  },
  {
    label: 'Education',
    value: 'BSc Computer Science',
    sub: 'Ambo University · CGPA 3.68/4.0',
  },
  {
    label: 'Certification',
    value: 'Scientific Computing with Python',
    sub: 'freeCodeCamp · 2024–2025',
  },
]

export const PROJECTS = [
  {
    id: 1,
    title: 'MediaWire — AI Press Intelligence Desk',
    shortDesc: 'Full-stack AI journalist database and PR outreach platform',
    tags: ['Python', 'Flask', 'React', 'Claude API', 'AI'],
    featured: true,
    icon: RadioTower,
    image: null,
    github: 'https://github.com/JhonsonAyalew/MediaWire-Press-Intelligence-Desk',
    details: {
      description:
        'Full-stack journalist database and AI-powered PR outreach platform. Scrapes journalist contact data from CNBC, WIRED, AP News, and CNET using BeautifulSoup. Scores and ranks each journalist using Claude AI based on relevance. Auto-generates personalized pitch emails for each contact. Includes a built-in conversational AI assistant for PR teams — all delivered inside a dark-themed React dashboard.',
      tech: ['Python', 'Flask', 'React', 'Vite', 'Claude API', 'SQLite', 'BeautifulSoup', 'JavaScript'],
      highlights: [
        'Scrapes CNBC, WIRED, AP News & CNET',
        'Claude AI journalist scoring & ranking',
        'Auto-generates personalized pitch emails',
        'Built-in AI assistant for PR teams',
        'Dark-themed React + Flask dashboard',
        'Modular outlet scraping engine',
      ],
      status: 'Open Source — GitHub',
      year: '2024',
    },
  },
  {
    id: 2,
    title: 'Media Intelligence Suite',
    shortDesc: '6 enterprise desktop tools for media intelligence & PR outreach',
    tags: ['Python', 'Tkinter', 'Google Sheets', 'Automation', 'SMTP'],
    featured: false,
    icon: Layers,
    image: null,
    github: 'https://github.com/JhonsonAyalew/media-intelligence-suite',
    details: {
      description:
        'Six enterprise-grade Tkinter desktop applications for media intelligence and PR outreach automation. Each app scrapes journalist contacts, decodes Cloudflare-protected emails, deduplicates contacts, scores them for relevance, syncs all data to Google Sheets in real time, and sends personalized outreach emails via SMTP.',
      tech: ['Python', 'Tkinter', 'BeautifulSoup', 'Google Sheets API', 'Pandas', 'SMTP', 'Requests'],
      highlights: [
        'Covers 6 major media outlets',
        'Cloudflare email protection decoder',
        'Google Sheets real-time sync',
        'Multi-level contact deduplication',
        'Relevance scoring engine',
        'Bulk personalized SMTP email outreach',
      ],
      status: 'Open Source — GitHub',
      year: '2024',
    },
  },
  {
    id: 3,
    title: 'CPA Data Ingestion Pipeline',
    shortDesc: 'Enterprise 5-stage ETL system for 100,000+ CPA license records',
    tags: ['Python', 'PostgreSQL', 'ETL', 'Data Engineering', 'Pandas'],
    featured: false,
    icon: Workflow,
    image: null,
    github: 'https://github.com/JhonsonAyalew/cpa-data-ingestion-pipeline',
    details: {
      description:
        'End-to-end 5-stage ETL system for processing NASBA CPA license data. File parsing and normalization, chunked data streaming into PostgreSQL optimized for low-RAM servers, fuzzy-match deduplication using Jaro-Winkler distance and bigram similarity, full audit logging with SHA-256 file verification, and clean export delivered via a Tkinter GUI.',
      tech: ['Python', 'PostgreSQL', 'Pandas', 'Tkinter', 'Jaro-Winkler', 'SHA-256', 'Bigram Similarity'],
      highlights: [
        'Processes 100,000+ records with zero data loss',
        'Jaro-Winkler + bigram fuzzy deduplication',
        'SHA-256 audit verification',
        'Chunked streaming for low-RAM servers',
        '5-stage pipeline architecture',
        'Desktop GUI for non-technical users',
      ],
      status: 'Open Source — GitHub',
      year: '2024',
    },
  },
  {
    id: 4,
    title: 'Ethiopian Jobs Aggregator Bot',
    shortDesc: 'AI-powered job scraper with automated Telegram channel posting',
    tags: ['Python', 'Groq AI', 'Telegram', 'Supabase', 'Automation'],
    featured: false,
    icon: Bot,
    image: null,
    github: 'https://github.com/JhonsonAyalew/ethiopian-jobs-bot',
    details: {
      description:
        'Fully automated job aggregation bot built for the Ethiopian job market. Scrapes multiple Ethiopian job platforms on a scheduled cycle, uses Groq AI to extract required qualifications from raw listings, applies multi-level fingerprint deduplication to prevent duplicates, stores everything in Supabase, and posts curated listings to a Telegram channel automatically.',
      tech: ['Python', 'Groq AI', 'Supabase', 'Telegram Bot API', 'BeautifulSoup', 'Requests'],
      highlights: [
        'Multi-platform job scraping on schedule',
        'Groq AI qualification extraction',
        'Multi-level fingerprint deduplication',
        'Supabase cloud storage',
        'Telegram Bot API auto-posting',
        'Fully autonomous — runs 24/7',
      ],
      status: 'Live & Running',
      year: '2024',
    },
  },
  {
    id: 5,
    title: 'ConcreteRent.com',
    shortDesc: 'Full-stack concrete equipment rental platform — live in production',
    tags: ['React', 'Flask', 'Python', 'PostgreSQL', 'Full-Stack'],
    featured: false,
    icon: Building2,
    image: null,
    github: null,
    url: 'https://concreterent.com',
    details: {
      description:
        'Full-stack concrete equipment rental website designed and delivered end-to-end for a client. Built the complete React frontend including equipment catalog, booking and inquiry flow, and fully mobile-responsive UI, plus a Python/Flask backend with full REST API, database integration, and business logic. Managed the entire project independently from requirements to deployment.',
      tech: ['React', 'Flask', 'Python', 'JavaScript', 'PostgreSQL', 'REST API', 'Vite'],
      highlights: [
        'Live production website at concreterent.com',
        'Full React frontend — catalog & booking',
        'Python/Flask backend with REST API',
        'Mobile-responsive design',
        'Complete end-to-end solo delivery',
        'Real users served daily',
      ],
      status: 'Live — concreterent.com',
      year: '2024',
    },
  },
]

export const SKILLS = [
  { id: 'python', name: 'Python', category: 'Languages', level: 93, relatedProjects: [1, 2, 3, 4, 5], desc: 'Primary language — automation pipelines, web scraping, data engineering, backend APIs, and AI integration.' },
  { id: 'automation', name: 'Automation & ETL', category: 'Data & Automation', level: 92, relatedProjects: [1, 2, 3, 4], desc: 'End-to-end pipeline design: scrape, transform, load, notify. Production systems running 24/7 on real data.' },
  { id: 'scraping', name: 'Web Scraping', category: 'Data & Automation', level: 91, relatedProjects: [1, 2, 4], desc: 'BeautifulSoup, Requests, Playwright — handles JS-heavy sites, Cloudflare bypasses, and structured data extraction at scale.' },
  { id: 'ai-integration', name: 'AI Integration', category: 'AI', level: 88, relatedProjects: [1, 4], desc: 'LLM API integration — Claude API (Anthropic) and Groq AI for scoring, ranking, extraction, and personalized content generation.' },
  { id: 'data-engineering', name: 'Data Engineering', category: 'Data & Automation', level: 87, relatedProjects: [1, 3], desc: 'Data ingestion, cleaning, fuzzy deduplication, ETL pipeline design, and PostgreSQL. SHA-256 audit logging and chunked streaming.' },
  { id: 'flask', name: 'Flask', category: 'Backend', level: 85, relatedProjects: [1, 5], desc: 'REST API design, database integration, server-side business logic, and backend architecture for production applications.' },
  { id: 'react', name: 'React', category: 'Frontend', level: 85, relatedProjects: [1, 5], desc: 'Advanced React with hooks, context, Framer Motion, and production-grade component architecture.' },
  { id: 'llm-prompting', name: 'LLM Prompt Engineering', category: 'AI', level: 84, relatedProjects: [1, 4], desc: 'Crafting precise prompts for Claude API and Groq to reliably extract, score, and generate structured content in production systems.' },
  { id: 'telegram-bots', name: 'Telegram Bot API', category: 'Automation & Bots', level: 86, relatedProjects: [4], desc: 'Building fully automated Telegram bots for scheduled content delivery, job posting, and notification workflows.' },
  { id: 'postgresql', name: 'PostgreSQL & SQLite', category: 'Databases', level: 82, relatedProjects: [3, 5], desc: 'Schema design, query optimization, chunked imports, and data modeling for production ETL pipelines and web applications.' },
  { id: 'supabase', name: 'Supabase', category: 'Databases', level: 80, relatedProjects: [4], desc: 'Cloud PostgreSQL via Supabase for bot storage, real-time syncing, and serverless backend data management.' },
  { id: 'pandas', name: 'Pandas', category: 'Data & Automation', level: 88, relatedProjects: [2, 3], desc: 'Data transformation, cleaning, analysis, and export pipelines for large structured datasets.' },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', level: 82, relatedProjects: [1, 5], desc: 'Modern ES2024, async patterns, DOM manipulation, and full-stack JS for React frontends and REST integrations.' },
  { id: 'google-sheets', name: 'Google Sheets API', category: 'Tools', level: 85, relatedProjects: [2], desc: 'Real-time data sync from automation pipelines directly into Google Sheets for client reporting and data delivery.' },
  { id: 'tkinter', name: 'Tkinter GUI', category: 'Frontend', level: 83, relatedProjects: [2, 3], desc: 'Building polished desktop GUI applications for enterprise data tools that non-technical users can operate.' },
  { id: 'sql', name: 'SQL', category: 'Languages', level: 84, relatedProjects: [3, 5], desc: 'Complex queries, schema design, joins, indexing, and database optimization for relational data systems.' },
  { id: 'git', name: 'Git & GitHub', category: 'Tools', level: 88, relatedProjects: [1, 2, 3, 4, 5], desc: 'Version control, branching strategies, open-source project management, and collaborative development workflows.' },
]

export const categoryOrder = [
  'Languages',
  'Data & Automation',
  'AI',
  'Backend',
  'Frontend',
  'Automation & Bots',
  'Databases',
  'Tools',
]

export const experience = [
  {
    year: '2021',
    type: 'Education',
    title: 'BSc Computer Science — Ambo University',
    desc: 'Started the Computer Science journey — building a strong foundation in algorithms, data structures, software engineering, and database systems.',
    tags: ['Algorithms', 'Data Structures', 'Databases'],
  },
  {
    year: '2024',
    type: 'Education',
    title: 'Graduated — CGPA 3.68/4.0',
    desc: 'Graduated with a strong academic record while building production tools on the side and preparing to work globally.',
    tags: ['Software Engineering', 'Top 5% of class'],
  },
  {
    year: '2024',
    type: 'Freelance',
    title: 'Upwork — Python Automation Specialist',
    desc: 'Launched on Upwork as a Python Automation & Web Scraping Specialist, delivering automation, ETL, and scraping systems to international clients.',
    tags: ['Automation', 'Web Scraping', 'ETL'],
  },
  {
    year: '2024–2025',
    type: 'Production',
    title: 'AI Automation Engineer',
    desc: 'Shipped MediaWire, the CPA Data Pipeline, the Ethiopian Jobs Bot, and client production websites — automation and AI systems running 24/7 on real data.',
    tags: ['AI Systems', 'Live 24/7', 'Client Work'],
  },
]

export const statusCards = [
  {
    label: 'Current',
    value: 'AI Automation Engineer',
    sub: 'Python · Full-Stack · AI Systems',
  },
  {
    label: 'Freelance',
    value: 'Upwork Specialist',
    sub: 'Automation & Web Scraping',
  },
  {
    label: 'Education',
    value: 'BSc Computer Science',
    sub: 'Ambo University · CGPA 3.68',
  },
]

export const suggestedQuestions = [
  'What kind of projects do you build?',
  "What's your tech stack?",
  'How do you approach a scraping project?',
  'How can I hire you?',
]

export const agentWelcome =
  "Hi, I'm Jhonson's AI agent. Ask me anything about his work, skills, projects, or how to hire him — I'll answer right here."

export async function askAgent(prompt, conversationHistory = []) {
  const messages = [
    ...conversationHistory.slice(-6).map((m) => ({
      role: m.role,
      content: m.content,
    })),
    { role: 'user', content: prompt },
  ]

  const response = await fetch(GROQ_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GROQ_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: [
        { role: 'system', content: KNOWLEDGE_BASE },
        ...messages,
      ],
      max_tokens: 300,
      temperature: 0.7,
    }),
  })

  if (!response.ok) {
    const errData = await response.json()
    throw new Error(errData.error?.message || `HTTP ${response.status}`)
  }

  const data = await response.json()
  return data.choices[0].message.content
}
