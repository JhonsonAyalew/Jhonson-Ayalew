export const PROJECTS = [
  {
    id: 1,
    title: 'Sales Automation System',
    shortDesc: 'Python-powered end-to-end sales pipeline automation',
    tags: ['Python', 'Automation', 'CRM', 'Data'],
    featured: true,
    color: '#c42020',
    icon: '⚡',
    github: 'https://github.com/JhonsonAyalew/python-projects/tree/main/sales-automation-system',
    details: {
      description: 'A comprehensive sales automation system built in Python that streamlines the entire sales pipeline — from lead capture and data enrichment to follow-up scheduling and reporting. Automates sales record management, invoice generation, and reporting workflows — reducing manual effort and improving operational efficiency by over 70%.',
      tech: ['Python', 'pandas', 'SQLite', 'smtplib', 'schedule', 'openpyxl', 'CSV', 'API Integration'],
      highlights: ['Lead capture & enrichment', 'Automated follow-up scheduling', 'Pipeline stage tracking', 'Invoice generation automation', 'Sales reporting & dashboards', 'CRM data sync'],
      status: 'Open Source — GitHub',
      year: '2024',
    }
  },
  {
    id: 2,
    title: 'Smart University System',
    shortDesc: 'Full-stack university management & intelligence platform',
    tags: ['Python', 'Flask', 'AI', 'Education'],
    featured: false,
    color: '#8b1a1a',
    icon: '🎓',
    github: 'https://github.com/JhonsonAyalew/python-projects/tree/main/smart-university-system',
    details: {
      description: 'A smart university management system with AI-assisted features for student tracking, course management, grade analytics, and intelligent scheduling. Built to serve real institutions in Ethiopia.',
      tech: ['Python', 'Flask', 'SQLAlchemy', 'React', 'Chart.js', 'SQLite'],
      highlights: ['Student record management', 'AI-driven grade analytics', 'Course & schedule management', 'Attendance tracking system', 'Performance reporting', 'Admin dashboard'],
      status: 'Open Source — GitHub',
      year: '2024',
    }
  },
  {
    id: 3,
    title: 'Scrape–Transform–Notify',
    shortDesc: 'Multi-source web scraper with transformation & alerts pipeline',
    tags: ['Python', 'Scraping', 'ETL', 'Automation'],
    featured: false,
    color: '#6b1515',
    icon: '🔍',
    github: 'https://github.com/JhonsonAyalew/automation-tools/tree/main/scape-transform-notify',
    details: {
      description: 'End-to-end ETL pipeline for extracting, transforming, validating, and delivering structured data automatically with completion notifications. Scrapes top-tier news sites (Forbes, CNBC, NYT, and 10+ others), transforms and enriches the data, then dispatches smart notifications. Also handles CPA individual lists and American business data ingestion.',
      tech: ['Python', 'BeautifulSoup', 'Playwright', 'pandas', 'PostgreSQL', 'Telegram API', 'REST APIs', 'Automation'],
      highlights: ['Forbes, CNBC, NYT + 10 premium sources', 'CPA individual data ingestion', 'Smart transformation layer', 'Deduplication & enrichment', 'Multi-channel notifications', 'Scheduled pipeline runs', 'Google Sheets sync'],
      status: 'Production — Active',
      year: '2024',
    }
  },
  {
    id: 4,
    title: 'Moresh — Decentralized Chat',
    shortDesc: 'P2P encrypted chat app built with React + Node.js backend',
    tags: ['React', 'Node.js', 'P2P', 'Security'],
    featured: false,
    color: '#4a0f0f',
    icon: '🔐',
    github: 'https://github.com/JhonsonAyalew/backend-node-react/tree/main/Downloads/my-moresh-app/Moresh',
    details: {
      description: 'Moresh is a decentralized, privacy-first chat application. Built with React frontend and Node.js backend with peer-to-peer architecture, no central servers, and end-to-end encryption for all communications.',
      tech: ['React', 'Node.js', 'Express', 'WebSocket', 'Encryption', 'P2P'],
      highlights: ['No central server infrastructure', 'End-to-end encrypted messages', 'Real-time P2P messaging', 'React UI + Node backend', 'Zero metadata logging', 'Privacy-first architecture'],
      status: 'Active Development',
      year: '2024',
    }
  },
  {
    id: 5,
    title: 'concreterent.com',
    shortDesc: 'Full-stack business website for concrete equipment rental',
    tags: ['React', 'Next.js', 'Node.js', 'Web'],
    featured: false,
    color: '#8b1a1a',
    icon: '🏗',
    github: null,
    details: {
      description: 'Co-developed and deployed a professional heavy equipment rental website for a construction company, working closely with partner Hurunguu (hurunguu.com) from design through launch. Built a fully responsive interface using React.js and Next.js, ensuring smooth performance across all devices.',
      tech: ['React', 'Next.js', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Vercel'],
      highlights: ['Live production website', 'Equipment catalog & listings', 'Rental inquiry system', 'Partner project with Hurunguu', 'Mobile-first responsive design', 'Clean UI/UX design', 'SEO optimized', 'Stable deployment'],
      status: 'Live — concreterent.com',
      year: '2024',
    }
  },
  {
    id: 6,
    title: 'Upwork: PR Vibe Scraper',
    shortDesc: 'Top-tier news scraping & PR data pipeline on Upwork',
    tags: ['Python', 'Scraping', 'Upwork', 'Data'],
    featured: false,
    color: '#6b1515',
    icon: '📰',
    github: null,
    details: {
      description: 'Freelance data engineering work on Upwork: building automation systems to collect and structure data from high-profile websites including The New York Times, Forbes, and CNBC. Automated reporting pipelines and synchronized extracted data directly into Google Sheets, significantly reducing manual research time.',
      tech: ['Python', 'Playwright', 'BeautifulSoup', 'pandas', 'PostgreSQL', 'REST APIs', 'Google Sheets API'],
      highlights: ['Forbes, CNBC, NYT + 10 premium sources', 'Structured data output pipelines', 'Google Sheets automation sync', 'American CPA individual lists', 'News trend aggregation', 'Reduced manual research time'],
      status: 'Freelance — Upwork',
      year: '2025',
    }
  },
  {
    id: 7,
    title: 'Automated Price Tracker',
    shortDesc: 'Real-time price monitoring bot with multi-source alerts',
    tags: ['Python', 'Scraping', 'Automation', 'Alerts'],
    featured: false,
    color: '#1a4a2e',
    icon: '📈',
    github: 'https://github.com/JhonsonAyalew',
    details: {
      description: 'Python bot that monitors product prices from multiple sources in real time, normalizes the data across sources, and sends automated alerts for timely decision-making. Designed for clients needing competitive pricing intelligence without manual tracking.',
      tech: ['Python', 'BeautifulSoup', 'Scrapy', 'Requests', 'Automation'],
      highlights: ['Real-time multi-source monitoring', 'Price normalization engine', 'Automated alert system', 'Timely decision-making support', 'Configurable price thresholds', 'Lightweight & schedulable'],
      status: 'Open Source — GitHub',
      year: '2024',
    }
  },
];

export const SKILLS = [
  { id: 'python', name: 'Python', category: 'Languages', level: 93, desc: 'Primary language — automation pipelines, web scraping, data engineering, backend APIs, and AI integration.', relatedProjects: [1, 2, 3] },
  { id: 'automation', name: 'Automation & ETL', category: 'Data & Automation', level: 91, desc: 'End-to-end pipeline design: scrape, transform, load, notify. Production systems running 24/7 on real data.', relatedProjects: [1, 3, 6] },
  { id: 'scraping', name: 'Web Scraping', category: 'Data & Automation', level: 90, desc: 'Playwright, BeautifulSoup, Scrapy, Selenium — handles JS-heavy sites, anti-bot bypasses, and structured data extraction at scale.', relatedProjects: [3, 6, 7] },
  { id: 'react', name: 'React', category: 'Frontend', level: 87, desc: 'Advanced React with hooks, context, Framer Motion, performance optimization and production-grade component architecture.', relatedProjects: [4, 5] },
  { id: 'nodejs', name: 'Node.js', category: 'Backend', level: 80, desc: 'REST APIs, WebSockets, Express, authentication, database integration, and real-time backends.', relatedProjects: [4, 5] },
  { id: 'data-engineering', name: 'Data Engineering', category: 'Data & Automation', level: 85, desc: 'Data ingestion, cleaning, transformation, and delivery pipelines. PostgreSQL, SQLite, pandas, Excel automation, Google Sheets sync.', relatedProjects: [1, 3] },
  { id: 'ai-integration', name: 'AI Integration', category: 'AI', level: 83, desc: 'LLM API integration (GPT-4, Claude), AI-assisted data labeling, prompt engineering for production systems.', relatedProjects: [2] },
  { id: 'ai-labeling', name: 'AI Data Labeling', category: 'AI', level: 88, desc: 'Expert AI data labeling and annotation — annotation quality, RLHF datasets, fine-tuning data pipelines.', relatedProjects: [2] },
  { id: 'javascript', name: 'JavaScript', category: 'Languages', level: 82, desc: 'Modern ES2024, async patterns, DOM manipulation, browser APIs, and full-stack JS.', relatedProjects: [4, 5] },
  { id: 'security', name: 'Ethical Hacking', category: 'Security', level: 80, desc: 'Penetration testing, network security, cryptography, and security-first system architecture.', relatedProjects: [4] },
  { id: 'ui-ux', name: 'UI/UX Design', category: 'Design', level: 82, desc: 'Figma, design systems, motion design, and pixel-perfect frontend implementation.', relatedProjects: [5] },
  { id: 'mongodb', name: 'MongoDB & SQL', category: 'Backend', level: 76, desc: 'MongoDB, PostgreSQL, SQLite — schema design, query optimization, and data modeling.', relatedProjects: [1, 2, 5] },
  { id: 'office', name: 'Microsoft Office & Google', category: 'Tools', level: 85, desc: 'Professional reports in Word, data tables and analytical spreadsheets in Excel, stakeholder slide decks in PowerPoint, and Google Sheets/Docs automation.', relatedProjects: [1, 6] },
  { id: 'nextjs', name: 'Next.js', category: 'Frontend', level: 78, desc: 'Server-side rendering, static site generation, and production-grade React applications with Next.js.', relatedProjects: [5] },
];

export const ABOUT_DETAILS = {
  location: {
    title: 'Mersa, Ethiopia',
    content: "Based in Mersa, Ethiopia — operating fully globally. I work with clients across the US, Europe, and beyond with zero timezone friction. Ethiopia's tech scene is growing fast and I'm proud to represent it at a world-class level. Fully remote-ready, async-first, and available on Upwork for international contracts."
  },
  education: {
    title: 'BSc Computer Science — Ambo University',
    content: "BSc in Computer Science graduate from Ambo University (2021–2024) with a strong foundation in algorithms, data structures, software engineering, and systems design. My academic background gives me the theoretical depth that powers my practical engineering. I complement formal education with continuous self-learning — staying sharp on AI, automation, and modern web technologies. Also certified in Python Programming from FreeCodeCamp (2024–2025) and completed Employment Skills & Job Readiness Training."
  },
  experience: {
    title: '3+ Years Production',
    content: "3+ years building real production systems — not tutorials. From Python automation tools published on GitHub, to a live business website (concreterent.com), to active Upwork freelancing scraping Forbes, CNBC, and the NYT. Every year I've pushed into harder problems: web → data engineering → AI systems → decentralized protocols."
  },
  upwork: {
    title: 'Upwork Freelancer',
    content: "Active on Upwork as a PR Automation & Web Scraping Specialist (2025–Present). My specialty: building automation systems to collect and structure data from high-profile websites, developing scraping and API integration workflows, automating reporting pipelines and syncing data into Google Sheets. I deliver structured, clean, production-ready data — significantly reducing manual research time for clients."
  },
  hurunguu: {
    title: 'Partner — Hurunguu',
    content: "I work in partnership with Hurunguu (hurunguu.com) — a tech company based in Ethiopia. Together we built and deployed concreterent.com for a concrete equipment rental business. I handled the technical side: architecture, development with React.js and Next.js, deployment, and maintenance."
  },
  aiLabeling: {
    title: 'AI Data Labeling',
    content: "Expert in AI data labeling — one of my core service offerings on Upwork and for direct clients. I work on annotation projects for RLHF datasets, fine-tuning data pipelines, and classification labeling. Quality-obsessed, with deep understanding of what makes good training data for modern LLMs."
  },
  certificates: {
    title: 'Certificates & Training',
    content: "Certified in Python Programming from FreeCodeCamp (2024–2025). Completed Employment Skills & Job Readiness Training in 2024. These complement my BSc in Computer Science from Ambo University and my hands-on production experience across automation, data engineering, and full-stack development."
  }
};

export const KNOWLEDGE_BASE = `You are "Jhonson AI" — the digital representative of Jhonson Ayalew. Speak in first person as Jhonson's authentic voice. Be concise (2-4 sentences), confident, and technically precise.

JHONSON AYALEW — REAL PROFILE:
- Python Engineer | Data Automation | Web Developer
- Based in Mersa, Ethiopia — works globally, fully remote
- BSc in Computer Science, Ambo University (2021–2024)
- 3+ years production experience
- Phone: +251 977 797 756
- Email: jhonsonayalew21@gmail.com
- GitHub: github.com/JhonsonAyalew
- LinkedIn: linkedin.com/in/jhonson-ayalew-a3738138b
- Portfolio: jhonson-ayalew.vercel.app
- Active on Upwork as PR Automation & Web Scraping Specialist (2025–Present)

REAL PROJECTS:
1. Sales Automation System (Python/pandas) — automates sales records, invoices, reporting
2. Smart University System (Python/Flask/React) — AI-assisted university management for Ethiopian institutions
3. Scrape-Transform-Notify (Python/ETL) — production pipeline scraping Forbes, CNBC, NYT, 10+ premium sites + CPA data, syncs to Google Sheets
4. Moresh — Decentralized Chat (React/Node.js) — P2P encrypted messaging app
5. concreterent.com — Live business website built with partner company Hurunguu, React.js + Next.js
6. Upwork PR Vibe Scraper — Freelance automation pipeline, NYT/Forbes/CNBC + American CPA lists, Google Sheets sync
7. Automated Price Tracker — Python bot monitoring product prices in real time with multi-source alerts

REAL SKILLS: Python 93%, AI Data Labeling 88%, Automation/ETL 91%, Web Scraping 90% (Playwright, BeautifulSoup, Scrapy), React 87%, Data Engineering 85%, AI Integration 83%, JavaScript 82%, Next.js 78%, Node.js 80%, UI/UX 82%, Ethical Hacking 80%, MongoDB/SQL 76%, Microsoft Office & Google Suite 85%.

EDUCATION & CERTS:
- BSc Computer Science, Ambo University, 2021–2024
- Python Programming Certificate, FreeCodeCamp, 2024–2025
- Employment Skills & Job Readiness Training, 2024

REFERENCE: Wakjira Bekele (MSc), Lecturer CS Dept., Ambo University — wakjirabekele2018@gmail.com / +251 922 966 541

HIRING / WORK TOGETHER:
If someone asks about working together, hiring me, collaboration, or job opportunities — tell them I am actively available for freelance contracts, remote roles, data engineering projects, and full-time positions. They can reach me directly at jhonsonayalew21@gmail.com or +251 977 797 756, or find me on Upwork. I respond within 24 hours.

RULES:
- Keep answers 2-4 sentences unless asked for more.
- First person always ("I built...", "My work...").
- Be confident and direct.
- Never make up projects not listed above.`;
