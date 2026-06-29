import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, MapPin, ArrowRight, ArrowDown } from 'lucide-react';
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

// The signature element: his actual production pipeline shape, rendered as a
// vertical rail on desktop and a horizontal scroller on mobile.
const PIPELINE = [
  { step: '01', label: 'Scrape', detail: 'Pull raw data from sites & APIs at scale' },
  { step: '02', label: 'Score', detail: 'Rank & qualify with Claude / Groq AI' },
  { step: '03', label: 'Deliver', detail: 'Push to dashboards, sheets, Telegram, email' },
];

export default function HeroSection({ onSuggest }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');

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
      }}
    >
      {/* Scoped styles — upgrades the existing classNames + adds responsive rules.
          Safe to merge into your global stylesheet instead if you prefer. */}
      <style>{`
        .hero-shell{
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap:64px;
          align-items:start;
        }
        @media (max-width:900px){
          .hero-shell{ grid-template-columns:1fr; gap:44px; }
        }

        .gradient-text{
          background: linear-gradient(135deg,#ffffff 0%, #c7d2fe 35%, #7dd3fc 65%, #ffffff 100%);
          background-size:200% auto;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation: heroGradientShift 7s ease-in-out infinite;
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
          opacity:0.75; color:#7dd3fc; transform:translate(-2px,-1px);
          animation:heroGlitchA 0.5s steps(2,end) infinite;
        }
        .glitch-container:hover::after{
          opacity:0.75; color:#f472b6; transform:translate(2px,1px);
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
          background:#ffffff; vertical-align:middle;
          animation: heroCursorBlink 0.9s step-end infinite;
        }
        @keyframes heroCursorBlink{ 0%,100%{ opacity:1; } 50%{ opacity:0; } }

        @keyframes statusBlink{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.4; transform:scale(0.75); }
        }

        .glass-card{
          background: linear-gradient(165deg, rgba(255,255,255,0.07), rgba(255,255,255,0.015));
          border:1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          position:relative;
          overflow:hidden;
          transition: border-color 0.3s ease, transform 0.3s ease;
        }
        .glass-card::before{
          content:'';
          position:absolute; inset:0;
          background: radial-gradient(circle at 25% -10%, rgba(125,211,252,0.12), transparent 55%);
          pointer-events:none;
        }
        .glass-card:hover{ border-color: rgba(255,255,255,0.16); }

        .pipeline-rail{ display:flex; flex-direction:column; position:relative; }
        .pipeline-node{
          display:flex; gap:16px; align-items:flex-start; position:relative;
          padding-bottom:28px;
        }
        .pipeline-node:last-child{ padding-bottom:0; }
        .pipeline-node-line{
          position:absolute; left:19px; top:40px; bottom:0; width:1px;
          background:linear-gradient(to bottom, rgba(255,255,255,0.2), rgba(255,255,255,0.02));
        }
        .pipeline-node:last-child .pipeline-node-line{ display:none; }
        .pipeline-dot{
          flex-shrink:0; width:38px; height:38px; border-radius:50%;
          display:flex; align-items:center; justify-content:center;
          font-family:'Space Mono', monospace; font-size:0.65rem; font-weight:700; color:#ffffff;
          background: linear-gradient(135deg, rgba(255,255,255,0.14), rgba(255,255,255,0.03));
          border:1px solid rgba(255,255,255,0.16);
          transition: all 0.3s ease;
        }
        .pipeline-node:hover .pipeline-dot{
          border-color:#7dd3fc;
          box-shadow:0 0 20px rgba(125,211,252,0.4);
          transform:scale(1.08);
        }
        .pipeline-node:hover .pipeline-node-line{
          background:linear-gradient(to bottom, rgba(125,211,252,0.4), rgba(255,255,255,0.02));
        }

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
        .btn-white{ background:#ffffff; color:#0a0a0a; border:none; }
        .btn-white:hover{ transform:translateY(-2px); box-shadow:0 10px 26px rgba(255,255,255,0.18); }
        .btn-outline{ background:transparent; color:#ffffff; border:1px solid rgba(255,255,255,0.2); }
        .btn-outline:hover{
          border-color:rgba(255,255,255,0.55); background:rgba(255,255,255,0.05); transform:translateY(-2px);
        }
        .btn-white:focus-visible, .btn-outline:focus-visible{
          outline:2px solid #7dd3fc; outline-offset:3px;
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

      {/* Ambient glow — quiet atmosphere behind the content, not a second signature */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%', width: '55%', height: '55%',
        background: 'radial-gradient(circle, rgba(125,211,252,0.08), transparent 70%)',
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

        {/* ── TOP: Location & Status ── */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible"
          style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={12} color="#999999" strokeWidth={1.5} />
            <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#888888', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
              Addis Ababa, Ethiopia
            </span>
          </div>
          <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ffffff', boxShadow: '0 0 12px rgba(255,255,255,0.3)', animation: 'statusBlink 2s ease-in-out infinite' }} />
            <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#cccccc', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '500' }}>
              Open to Work
            </span>
          </div>
        </motion.div>

        {/* ── MAIN: copy column + pipeline column ── */}
        <div className="hero-shell">

          {/* LEFT — identity & copy */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} style={{ marginBottom: '18px' }}>
              <div style={{
                fontFamily: 'Outfit', fontWeight: '800',
                fontSize: 'clamp(2.6rem, 8vw, 4.8rem)',
                lineHeight: '0.95', letterSpacing: '-0.03em', color: '#ffffff',
              }}>
                <span style={{ display: 'block' }} className="glitch-container" data-text="JOHNSON">JOHNSON</span>
                <span className="gradient-text" style={{ display: 'block' }}>AYALEW</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ marginBottom: '20px', minHeight: '32px', display: 'flex', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Space Mono', fontSize: 'clamp(0.85rem, 2.6vw, 1.1rem)', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ color: '#666666', marginRight: '4px', opacity: 0.7 }}>&gt;</span>
                {displayed}
                <span className="typing-cursor" />
              </div>
            </motion.div>

            <motion.p variants={fadeInUp} style={{
              fontFamily: 'Inter', fontSize: '0.92rem', lineHeight: '1.85', color: '#a8a8a8',
              maxWidth: '480px', marginBottom: '28px',
            }}>
              I build AI-powered automation systems that eliminate hours of manual work —
              scraping thousands of records, scoring them with LLMs, and pushing results
              to dashboards, email, or Telegram. Every project ships with real data and zero wasted clicks.
            </motion.p>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginBottom: '28px' }}>
              <button className="btn-white" data-cursor onClick={() => onSuggest?.('Show me your projects')}
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                View Projects <ArrowRight size={14} />
              </button>
              <button className="btn-outline" data-cursor onClick={() => onSuggest?.('How can I hire you?')}>
                Hire Me
              </button>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '26px' }}>
              {TECH_PILLS.map((t, i) => (
                <span key={t} style={{
                  padding: '4px 14px', borderRadius: '20px',
                  background: i < 2 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${i < 2 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)'}`,
                  fontSize: '0.62rem', letterSpacing: '0.06em',
                  color: i < 2 ? '#cccccc' : '#666666', fontFamily: 'Inter', fontWeight: '500',
                  transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
                }}>{t}</span>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              {SOCIAL.map(({ label, url, Icon }) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" data-cursor title={label}
                  style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', letterSpacing: '0.06em', color: '#777777', textDecoration: 'none', transition: 'all 0.25s', padding: '4px 0' }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = '#777777'; e.currentTarget.style.transform = 'translateX(0)'; }}
                >
                  <Icon size={16} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — signature pipeline visual */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">
            <motion.div variants={fadeInUp} style={{
              fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#666666', marginBottom: '4px', fontFamily: 'Inter',
            }}>
              What every project runs on
            </motion.div>
            <div className="glass-card" style={{ borderRadius: '18px', padding: '22px 22px 18px' }}>
              <div className="pipeline-rail">
                {PIPELINE.map((p, i) => (
                  <motion.div key={p.step} variants={cardItem} className="pipeline-node" data-cursor>
                    <div className="pipeline-node-line" />
                    <div className="pipeline-dot">{p.step}</div>
                    <div>
                      <div style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.95rem', color: '#ffffff', marginBottom: '3px' }}>
                        {p.label}
                      </div>
                      <div style={{ fontFamily: 'Inter', fontSize: '0.7rem', color: '#888888', lineHeight: '1.5', maxWidth: '230px' }}>
                        {p.detail}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stat strip beneath — supporting detail, not the headline */}
            <motion.div variants={fadeInUp} className="hero-stat-strip" style={{ marginTop: '20px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              {STATS.map(({ num, label }) => (
                <div key={label} className="stat-block">
                  <div style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em' }}>{num}</div>
                  <div style={{ fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666666', fontFamily: 'Inter', fontWeight: '500' }}>{label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── BOTTOM BAR ── */}
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
