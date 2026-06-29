export const PROJECTS = [
  {
    id: 1,
    title: 'MediaWire — AI Press Intelligence Desk',
    shortDesc: 'Full-stack AI journalist database and PR outreach platform',
    tags: ['Python', 'Flask', 'React', 'Claude API', 'AI'],
    featured: true,
    icon: '📡',
    github: 'https://github.com/JhonsonAyalew/MediaWire-Press-Intelligence-Desk',
    details: {
      description: 'Full-stack journalist database and AI-powered PR outreach platform. Scrapes journalist contact data from CNBC, WIRED, AP News, and CNET using BeautifulSoup. Scores and ranks each journalist using Claude AI based on relevance. Auto-generates personalized pitch emails for each contact. Includes a built-in conversational AI assistant for PR teams — all delivered inside a dark-themed React dashboard.',
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
    }
  },
  {
    id: 2,
    title: 'Media Intelligence Suite',
    shortDesc: '6 enterprise desktop tools for media intelligence & PR outreach',
    tags: ['Python', 'Tkinter', 'Google Sheets', 'Automation', 'SMTP'],
    featured: false,
    icon: '🗞️',
    github: 'https://github.com/JhonsonAyalew/media-intelligence-suite',
    details: {
      description: 'Six enterprise-grade Tkinter desktop applications for media intelligence and PR outreach automation. Covers CNBC, Business Insider, AP News, CNET, The Verge, and WIRED. Each app scrapes journalist contacts, decodes Cloudflare-protected emails, deduplicates contacts, scores them for relevance, syncs all data to Google Sheets in real time, and sends personalized outreach emails via SMTP — all from a polished desktop GUI.',
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
    }
  },
  {
    id: 3,
    title: 'CPA Data Ingestion Pipeline',
    shortDesc: 'Enterprise 5-stage ETL system for 100,000+ CPA license records',
    tags: ['Python', 'PostgreSQL', 'ETL', 'Data Engineering', 'Pandas'],
    featured: false,
    icon: '🔧',
    github: 'https://github.com/JhonsonAyalew/cpa-data-ingestion-pipeline',
    details: {
      description: 'End-to-end 5-stage ETL system for processing NASBA CPA license data. Stage 1: file parsing and normalization. Stage 2: chunked data streaming into PostgreSQL optimized for low-RAM servers. Stage 3: fuzzy-match deduplication using Jaro-Winkler distance and bigram similarity. Stage 4: full audit logging with SHA-256 file verification for data integrity. Stage 5: clean export and reporting delivered via Tkinter GUI.',
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
    }
  },
  {
    id: 4,
    title: 'Ethiopian Jobs Aggregator Bot',
    shortDesc: 'AI-powered job scraper with automated Telegram channel posting',
    tags: ['Python', 'Groq AI', 'Telegram', 'Supabase', 'Automation'],
    featured: false,
    icon: '🤖',
    github: 'https://github.com/JhonsonAyalew/ethiopian-jobs-bot',
    details: {
      description: 'Fully automated job aggregation bot built for the Ethiopian job market. Scrapes multiple Ethiopian job platforms on a scheduled cycle. Uses Groq AI to intelligently extract required qualifications and job details from raw listings. Applies multi-level fingerprint deduplication to prevent duplicate posts. Stores all data in Supabase and posts curated listings to a Telegram channel automatically — runs 24/7 with zero human intervention.',
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
    }
  },
  {
    id: 5,
    title: 'ConcreteRent.com',
    shortDesc: 'Full-stack concrete equipment rental platform — live in production',
    tags: ['React', 'Flask', 'Python', 'PostgreSQL', 'Full-Stack'],
    featured: false,
    icon: '🏗️',
    github: null,
    details: {
      description: 'Full-stack concrete equipment rental website designed and delivered end-to-end for a client. Built the complete React frontend including equipment catalog, booking and inquiry flow, and fully mobile-responsive UI. Built the Python/Flask backend with full REST API, database integration, and business logic. Managed the entire project independently from requirements to deployment. Live at concreterent.com.',
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
    }
  },
];

export const SKILLS = [
  { id: 'python',           name: 'Python',              category: 'Languages',          level: 93, desc: 'Primary language — automation pipelines, web scraping, data engineering, backend APIs, and AI integration.', relatedProjects: [1, 2, 3] },
  { id: 'automation',       name: 'Automation & ETL',    category: 'Data & Automation',  level: 92, desc: 'End-to-end pipeline design: scrape, transform, load, notify. Production systems running 24/7 on real data.', relatedProjects: [2, 3, 4] },
  { id: 'scraping',         name: 'Web Scraping',        category: 'Data & Automation',  level: 91, desc: 'BeautifulSoup, Requests, Playwright — handles JS-heavy sites, Cloudflare bypasses, and structured data extraction at scale.', relatedProjects: [1, 2, 4] },
  { id: 'ai-integration',   name: 'AI Integration',      category: 'AI',                 level: 88, desc: 'LLM API integration — Claude API (Anthropic) and Groq AI for scoring, ranking, extraction, and personalized content generation.', relatedProjects: [1, 4] },
  { id: 'data-engineering', name: 'Data Engineering',    category: 'Data & Automation',  level: 87, desc: 'Data ingestion, cleaning, fuzzy deduplication, ETL pipeline design, and PostgreSQL. SHA-256 audit logging and chunked streaming.', relatedProjects: [3] },
  { id: 'flask',            name: 'Flask',               category: 'Backend',            level: 85, desc: 'REST API design, database integration, server-side business logic, and backend architecture for production applications.', relatedProjects: [1, 5] },
  { id: 'react',            name: 'React',               category: 'Frontend',           level: 85, desc: 'Advanced React with hooks, context, Framer Motion, and production-grade component architecture.', relatedProjects: [1, 5] },
  { id: 'llm-prompting',    name: 'LLM Prompt Engineering', category: 'AI',              level: 84, desc: 'Crafting precise prompts for Claude API and Groq to reliably extract, score, and generate structured content in production systems.', relatedProjects: [1, 4] },
  { id: 'telegram-bots',    name: 'Telegram Bot API',    category: 'Automation & Bots',  level: 86, desc: 'Building fully automated Telegram bots for scheduled content delivery, job posting, and notification workflows.', relatedProjects: [4] },
  { id: 'postgresql',       name: 'PostgreSQL & SQLite', category: 'Databases',          level: 82, desc: 'Schema design, query optimization, chunked imports, and data modeling for production ETL pipelines and web applications.', relatedProjects: [3, 5] },
  { id: 'supabase',         name: 'Supabase',            category: 'Databases',          level: 80, desc: 'Cloud PostgreSQL via Supabase for bot storage, real-time syncing, and serverless backend data management.', relatedProjects: [4] },
  { id: 'pandas',           name: 'Pandas',              category: 'Data & Automation',  level: 88, desc: 'Data transformation, cleaning, analysis, and export pipelines for large structured datasets.', relatedProjects: [2, 3] },
  { id: 'javascript',       name: 'JavaScript',          category: 'Languages',          level: 82, desc: 'Modern ES2024, async patterns, DOM manipulation, and full-stack JS for React frontends and REST integrations.', relatedProjects: [1, 5] },
  { id: 'google-sheets',    name: 'Google Sheets API',   category: 'Tools',              level: 85, desc: 'Real-time data sync from automation pipelines directly into Google Sheets for client reporting and data delivery.', relatedProjects: [2] },
  { id: 'tkinter',          name: 'Tkinter GUI',         category: 'Frontend',           level: 83, desc: 'Building polished desktop GUI applications for enterprise data tools that non-technical users can operate.', relatedProjects: [2, 3] },
  { id: 'sql',              name: 'SQL',                 category: 'Languages',          level: 84, desc: 'Complex queries, schema design, joins, indexing, and database optimization for relational data systems.', relatedProjects: [3, 5] },
  { id: 'git',              name: 'Git & GitHub',        category: 'Tools',              level: 88, desc: 'Version control, branching strategies, open-source project management, and collaborative development workflows.', relatedProjects: [1, 2, 3, 4, 5] },
];

export const ABOUT_DETAILS = {
  location: {
    title: 'Addis Ababa, Ethiopia',
    content: "Based in Addis Ababa, Ethiopia — operating fully globally. I work with clients across the US, Europe, and beyond with zero timezone friction. I'm open to full-time remote roles, sponsored positions in Europe, and international freelance contracts. Fully async-first and available on Upwork."
  },
  education: {
    title: 'BSc Computer Science — Ambo University',
    content: "BSc in Computer Science graduate from Ambo University (2021–2024) with a CGPA of 3.68/4.0. Strong foundation in algorithms, data structures, software engineering, and database systems. I complement formal education with continuous self-learning — staying sharp on AI APIs, automation, and modern web technologies. Also certified in Scientific Computing with Python from freeCodeCamp (2024–2025)."
  },
  experience: {
    title: '2+ Years Production Experience',
    content: "2+ years building real production systems — not tutorials. From AI-powered press intelligence platforms to enterprise ETL pipelines processing 100,000+ records, to live client websites and Telegram bots running 24/7. Active on Upwork for international freelance contracts. Open to sponsored roles in Europe and full-time remote positions."
  },
  upwork: {
    title: 'Upwork Freelancer',
    content: "Active on Upwork as a Python Automation & Web Scraping Specialist. Delivering automation systems, ETL pipelines, web scraping, and AI API integration services to international clients. I respond within 24 hours and deliver clean, documented, production-ready code."
  },
  mediawire: {
    title: 'MediaWire — AI Press Intelligence',
    content: "Built MediaWire — a full-stack press intelligence platform that scrapes journalist data from CNBC, WIRED, AP News, and CNET, scores them with Claude AI, and auto-generates personalized pitch emails. Includes a conversational AI assistant for PR teams. This is my most complex project — real Flask + React + LLM production system."
  },
  aiIntegration: {
    title: 'AI & LLM Integration',
    content: "I integrate Claude API (Anthropic) and Groq AI into production automation tools for intelligent scoring, qualification extraction, and personalized content generation. Every LLM integration I build ships with structured outputs, error handling, and real production data — not demos."
  },
  certificates: {
    title: 'Certificates & Training',
    content: "Certified in Scientific Computing with Python from freeCodeCamp (2024–2025). Completed Employment Skills & Job Readiness Training (2024). BSc Computer Science from Ambo University — CGPA 3.68."
  }
};

export const KNOWLEDGE_BASE = `You are "Johnson AI" — the digital representative of Johnson Ayalew. Speak in first person as Johnson's authentic voice. Be concise (2-4 sentences), confident, and technically precise.

JOHNSON AYALEW — REAL PROFILE:
- AI Automation Engineer | Python Developer | Full-Stack Developer
- Based in Addis Ababa, Ethiopia — works globally, fully remote
- BSc Computer Science, Ambo University (2021–2024), CGPA 3.68
- 2+ years production experience
- Email: JhonsonAyalew21@gmail.com
- GitHub: github.com/JhonsonAyalew
- LinkedIn: linkedin.com/in/johnson-ayalew
- Upwork: upwork.com/freelancers/~011fb9ce9920513a41
- Open to full-time, sponsored, and remote positions

REAL PROJECTS:
1. MediaWire — AI Press Intelligence Desk (Python/Flask/React/Claude API) — scrapes journalists from CNBC, WIRED, AP News & CNET, scores with Claude AI, generates pitch emails
2. Media Intelligence Suite (Python/Tkinter) — 6 enterprise desktop tools for PR outreach across 6 major outlets, Google Sheets sync, Cloudflare email decoding
3. CPA Data Ingestion Pipeline (Python/PostgreSQL/Pandas) — 5-stage ETL for 100,000+ records, Jaro-Winkler fuzzy dedup, SHA-256 audit logging
4. Ethiopian Jobs Aggregator Bot (Python/Groq AI/Supabase/Telegram) — fully automated, runs 24/7, posts curated jobs to Telegram
5. ConcreteRent.com (React/Flask/Python) — full-stack equipment rental website, live in production

REAL SKILLS: Python 93%, Automation/ETL 92%, Web Scraping 91%, AI Integration 88%, Data Engineering 87%, Flask 85%, React 85%, Telegram Bots 86%, LLM Prompt Engineering 84%, PostgreSQL/SQLite 82%, Supabase 80%, Pandas 88%, JavaScript 82%, Google Sheets API 85%, Tkinter GUI 83%, SQL 84%, Git 88%.

EDUCATION & CERTS:
- BSc Computer Science, Ambo University, 2021–2024, CGPA 3.68
- Scientific Computing with Python, freeCodeCamp, 2024–2025
- Employment Skills & Job Readiness Training, 2024

HIRING / WORK TOGETHER:
If someone asks about working together, hiring, collaboration, or job opportunities — tell them I am actively available for freelance contracts, remote roles, data engineering projects, and full-time sponsored positions. They can reach me at JhonsonAyalew21@gmail.com, or find me on Upwork. I respond within 24 hours.

RULES:
- Keep answers 2-4 sentences unless asked for more.
- First person always ("I built...", "My work...").
- Be confident and direct.
- Never make up projects not listed above.
- Always mention GitHub when discussing projects.`;
