import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, MapPin, ArrowRight, ArrowDown, Terminal } from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';

const ROLES = [
  'AI Automation Engineer',
  'Python Developer',
  'Data Engineer',
  'Web Scraping Expert',
  'Full-Stack Builder',
];

const STATS = [
  { num: '5+', label: 'Live Projects' },
  { num: '2yr', label: 'Experience' },
  { num: '12+', label: 'Tech Stack' },
  { num: '3.68', label: 'CGPA' },
];

const SOCIAL = [
  { label: 'GitHub', url: 'https://github.com/JhonsonAyalew', Icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/johnson-ayalew/', Icon: Linkedin },
  { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41', Icon: Globe },
];

const TECH_PILLS = ['Python', 'Claude API', 'Flask', 'React', 'PostgreSQL', 'Groq AI', 'ETL', 'BeautifulSoup'];

// The signature element: a live-looking terminal window running his actual
// production pipeline (scrape -> score -> deliver), because that's the
// realest, most characteristic artifact in his world — not a decorative card.
const LOG_LINES = [
  { type: 'cmd', text: 'scrape --source=web --pages=340' },
  { type: 'out', text: '1,204 records collected in 6.1s' },
  { type: 'cmd', text: 'score --model=claude-3.5-sonnet' },
  { type: 'out', text: '87 leads qualified · 72% match rate' },
  { type: 'cmd', text: 'deliver --to=sheets,telegram,email' },
  { type: 'ok', text: 'pipeline complete — 0 errors' },
];

export default function HeroSection({ onSuggest }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const [logCount, setLogCount] = useState(0);

  // Role typewriter (the command line under the name)
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1800);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('erasing'), 400);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 32);
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  // Terminal log — reveals one line at a time, holds, then re-runs the "job"
  useEffect(() => {
    let timeout;
    if (logCount < LOG_LINES.length) {
      timeout = setTimeout(() => setLogCount(c => c + 1), 620);
    } else {
      timeout = setTimeout(() => setLogCount(0), 2600);
    }
    return () => clearTimeout(timeout);
  }, [logCount]);

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        width: '100%',
        paddingTop: '36px',
        paddingBottom: '40px',
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0b0d',
      }}
    >
      <style>{`
        :root{
          --void:#0a0b0d;
          --surface:#131519;
          --ink:#f6f4ef;
          --muted:#8b8f94;
          --amber:#ffab5e;
          --cyan:#6fd6ff;
          --ok:#7ee8a0;
        }

        .hero-grid{
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          column-gap:64px;
          row-gap:0;
          grid-template-areas:
            "eyebrow  eyebrow"
            "headline terminal"
            "cli      terminal"
            "copy     terminal"
            "actions  terminal"
            "pills    stats"
            "social   stats";
        }
        @media (max-width:900px){
          .hero-grid{
            grid-template-columns:1fr;
            row-gap:26px;
            grid-template-areas:
              "eyebrow"
              "headline"
              "cli"
              "terminal"
              "copy"
              "actions"
              "pills"
              "stats"
              "social";
          }
        }
        .area-eyebrow{ grid-area:eyebrow; }
        .area-headline{ grid-area:headline; }
        .area-cli{ grid-area:cli; }
        .area-terminal{ grid-area:terminal; }
        .area-copy{ grid-area:copy; }
        .area-actions{ grid-area:actions; }
        .area-pills{ grid-area:pills; }
        .area-stats{ grid-area:stats; }
        .area-social{ grid-area:social; }

        .gradient-text{
          background: linear-gradient(135deg, var(--ink) 0%, var(--cyan) 40%, var(--amber) 75%, var(--ink) 100%);
          background-size:220% auto;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation: heroGradientShift 8s ease-in-out infinite;
        }
        @keyframes heroGradientShift{
          0%,100%{ background-position:0% 50%; }
          50%{ background-position:100% 50%; }
        }

        .glitch-container{ position:relative; display:inline-block; }
        .glitch-container::before,
        .glitch-container::after{
          content:attr(data-text);
          position:absolute; left:0; top:0; width:100%; height:100%;
          opacity:0; pointer-events:none; mix-blend-mode:screen;
        }
        .glitch-container:hover::before{
          opacity:0.75; color:var(--cyan); transform:translate(-2px,-1px);
          animation:heroGlitchA 0.5s steps(2,end) infinite;
        }
        .glitch-container:hover::after{
          opacity:0.75; color:var(--amber); transform:translate(2px,1px);
          animation:heroGlitchB 0.5s steps(2,end) infinite;
        }
        @keyframes heroGlitchA{
          0%{ clip-path:inset(0 0 62% 0); } 50%{ clip-path:inset(38% 0 18% 0); } 100%{ clip-path:inset(0 0 62% 0); }
        }
        @keyframes heroGlitchB{
          0%{ clip-path:inset(62% 0 0 0); } 50%{ clip-path:inset(18% 0 38% 0); } 100%{ clip-path:inset(62% 0 0 0); }
        }

        .typing-cursor{
          display:inline-block; width:2px; height:1.1em; margin-left:3px;
          background:var(--amber); vertical-align:middle;
          animation: heroCursorBlink 0.9s step-end infinite;
        }
        @keyframes heroCursorBlink{ 0%,100%{ opacity:1; } 50%{ opacity:0; } }

        @keyframes statusBlink{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.4; transform:scale(0.75); }
        }

        /* ── Terminal window: the signature element ── */
        .terminal-window{
          background: linear-gradient(180deg, var(--surface) 0%, #0e1013 100%);
          border:1px solid rgba(255,255,255,0.09);
          border-radius:14px;
          overflow:hidden;
          position:relative;
          box-shadow: 0 30px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02);
        }
        .terminal-window::after{
          content:'';
          position:absolute; inset:0; pointer-events:none;
          background: repeating-linear-gradient(
            to bottom, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px,
            transparent 1px, transparent 3px
          );
          mix-blend-mode:overlay;
        }
        .terminal-titlebar{
          display:flex; align-items:center; gap:8px;
          padding:12px 16px;
          border-bottom:1px solid rgba(255,255,255,0.06);
          background:rgba(255,255,255,0.015);
        }
        .terminal-dot{ width:9px; height:9px; border-radius:50%; }
        .terminal-label{
          margin-left:6px; font-family:'Space Mono', monospace; font-size:0.62rem;
          letter-spacing:0.08em; color:var(--muted); display:flex; align-items:center; gap:6px;
        }
        .terminal-body{
          padding:20px 18px 22px;
          font-family:'Space Mono', monospace;
          font-size:0.78rem;
          line-height:1.9;
          min-height:196px;
        }
        .term-line{ display:flex; gap:8px; align-items:baseline; }
        .term-prompt{ color:var(--amber); flex-shrink:0; }
        .term-cmd{ color:var(--ink); }
        .term-out{ color:var(--muted); padding-left:18px; }
        .term-ok{ color:var(--ok); padding-left:18px; }

        .hero-stat-strip{ display:flex; justify-content:space-between; gap:10px; }
        .stat-block{ display:flex; flex-direction:column; gap:4px; }
        @media (max-width:480px){
          .hero-stat-strip{ display:grid; grid-template-columns:repeat(2,1fr); gap:18px 12px; }
        }

        .btn-white, .btn-outline{
          font-family:'Inter', sans-serif; font-size:0.8rem; font-weight:600;
          letter-spacing:0.02em; padding:13px 26px; border-radius:999px; cursor:pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .btn-white{ background:var(--amber); color:#1a1206; border:none; }
        .btn-white:hover{ transform:translateY(-2px); box-shadow:0 12px 28px rgba(255,171,94,0.28); }
        .btn-outline{ background:transparent; color:var(--ink); border:1px solid rgba(255,255,255,0.2); }
        .btn-outline:hover{
          border-color:rgba(255,255,255,0.55); background:rgba(255,255,255,0.05); transform:translateY(-2px);
        }
        .btn-white:focus-visible, .btn-outline:focus-visible{
          outline:2px solid var(--cyan); outline-offset:3px;
        }

        .tech-pill-row{
          display:flex; gap:8px; flex-wrap:wrap;
        }
        @media (max-width:520px){
          .tech-pill-row{ flex-wrap:nowrap; overflow-x:auto; padding-bottom:4px; scrollbar-width:none; }
          .tech-pill-row::-webkit-scrollbar{ display:none; }
          .tech-pill-row span{ flex-shrink:0; }
        }

        @media (max-width:640px){
          .hero-bottom-bar{ flex-direction:column; align-items:flex-start !important; gap:6px; }
        }

        @media (prefers-reduced-motion: reduce){
          .gradient-text, .typing-cursor, .glitch-container::before, .glitch-container::after{
            animation:none !important;
          }
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%', width: '55%', height: '55%',
        background: 'radial-gradient(circle, rgba(111,214,255,0.07), transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(10px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%', width: '40%', height: '45%',
        background: 'radial-gradient(circle, rgba(255,171,94,0.06), transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(10px)',
      }} />

      {/* Decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent 90%)',
      }} />

      <div style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="hero-grid">

          {/* ── Eyebrow: location & status ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-eyebrow"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={12} color="#999999" strokeWidth={1.5} />
              <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#888888', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Addis Ababa, Ethiopia
              </span>
            </div>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ok)', boxShadow: '0 0 12px rgba(126,232,160,0.4)', animation: 'statusBlink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#cccccc', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '500' }}>
                Open to Work
              </span>
            </div>
          </motion.div>

          {/* ── Headline ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-headline" style={{ marginBottom: '10px' }}>
            <div style={{
              fontFamily: 'Outfit', fontWeight: '800',
              fontSize: 'clamp(2.4rem, 9vw, 4.8rem)',
              lineHeight: '0.95', letterSpacing: '-0.03em', color: 'var(--ink)',
            }}>
              <span style={{ display: 'block' }} className="glitch-container" data-text="JOHNSON">JOHNSON</span>
              <span className="gradient-text" style={{ display: 'block' }}>AYALEW</span>
            </div>
          </motion.div>

          {/* ── Command-line role ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-cli"
            style={{ marginBottom: '18px', minHeight: '32px', display: 'flex', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Space Mono', fontSize: 'clamp(0.85rem, 2.6vw, 1.1rem)', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: 'var(--amber)', marginRight: '4px', opacity: 0.85 }}>&gt;</span>
              {displayed}
              <span className="typing-cursor" />
            </div>
          </motion.div>

          {/* ── Signature element: live terminal window ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="area-terminal">
            <div style={{
              fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#666666', marginBottom: '8px', fontFamily: 'Inter',
            }}>
              What every project runs on
            </div>
            <div className="terminal-window">
              <div className="terminal-titlebar">
                <span className="terminal-dot" style={{ background: '#ff5f57' }} />
                <span className="terminal-dot" style={{ background: '#febc2e' }} />
                <span className="terminal-dot" style={{ background: '#28c840' }} />
                <span className="terminal-label">
                  <Terminal size={11} strokeWidth={1.5} />
                  automation.log
                </span>
              </div>
              <div className="terminal-body">
                {LOG_LINES.slice(0, logCount).map((line, i) => (
                  <div key={i} className="term-line">
                    {line.type === 'cmd' ? (
                      <>
                        <span className="term-prompt">$</span>
                        <span className="term-cmd">{line.text}</span>
                      </>
                    ) : (
                      <span className={line.type === 'ok' ? 'term-ok' : 'term-out'}>↳ {line.text}</span>
                    )}
                  </div>
                ))}
                {logCount < LOG_LINES.length && <span className="typing-cursor" style={{ marginLeft: logCount === 0 ? 0 : '18px' }} />}
              </div>
            </div>
          </motion.div>

          {/* ── Copy ── */}
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="area-copy" style={{
            fontFamily: 'Inter', fontSize: '0.92rem', lineHeight: '1.85', color: '#a8a8a8',
            maxWidth: '480px', marginBottom: '4px',
          }}>
            I build AI-powered automation systems that eliminate hours of manual work —
            scraping thousands of records, scoring them with LLMs, and pushing results
            to dashboards, email, or Telegram. Every project ships with real data and zero wasted clicks.
          </motion.p>

          {/* ── Actions, pills, socials ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-actions"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '20px' }}>
            <button className="btn-white" data-cursor onClick={() => onSuggest?.('Show me your projects')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              View Projects <ArrowRight size={14} />
            </button>
            <button className="btn-outline" data-cursor onClick={() => onSuggest?.('How can I hire you?')}>
              Hire Me
            </button>
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-pills tech-pill-row" style={{ marginTop: '6px' }}>
            {TECH_PILLS.map((t, i) => (
              <span key={t} style={{
                padding: '4px 14px', borderRadius: '20px',
                background: i < 2 ? 'rgba(255,171,94,0.09)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${i < 2 ? 'rgba(255,171,94,0.22)' : 'rgba(255,255,255,0.04)'}`,
                fontSize: '0.62rem', letterSpacing: '0.06em',
                color: i < 2 ? 'var(--amber)' : '#666666', fontFamily: 'Inter', fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}>{t}</span>
            ))}
          </motion.div>

          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-social"
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
            {SOCIAL.map(({ label, url, Icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" data-cursor title={label}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', letterSpacing: '0.06em', color: '#777777', textDecoration: 'none', transition: 'all 0.25s', padding: '4px 0' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#777777'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </motion.div>

          {/* ── Stat strip ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-stats hero-stat-strip"
            style={{ paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.05)', alignSelf: 'start' }}>
            {STATS.map(({ num, label }) => (
              <div key={label} className="stat-block">
                <div style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>{num}</div>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666666', fontFamily: 'Inter', fontWeight: '500' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom bar ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="hero-bottom-bar"
          style={{
            marginTop: '36px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px',
          }}>
          <span style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', color: '#555555', letterSpacing: '0.12em' }}>
            ETH · 9.0250°N 38.7469°E · ADDIS ABABA — OPEN TO SPONSORED ROLES
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.55rem', color: '#555555', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowDown size={10} />
            ASK THE AI ANYTHING BELOW
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
