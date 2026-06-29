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
      }}
    >
      {/* Decorative grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
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
                fontSize: 'clamp(2.6rem, 7vw, 4.8rem)',
                lineHeight: '0.95', letterSpacing: '-0.03em', color: '#ffffff',
              }}>
                <span style={{ display: 'block' }} className="glitch-container" data-text="JOHNSON">JOHNSON</span>
                <span className="gradient-text" style={{ display: 'block' }}>AYALEW</span>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} style={{ marginBottom: '20px', minHeight: '32px', display: 'flex', alignItems: 'center' }}>
              <div style={{ fontFamily: 'Space Mono', fontSize: 'clamp(0.85rem, 2vw, 1.1rem)', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '4px' }}>
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
