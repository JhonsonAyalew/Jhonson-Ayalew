import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer, cardItem, dataStream } from '../utils/animationVariants.js';

const STATS = [
  { num: '6+', label: 'Live Projects', accent: true },
  { num: '3yr', label: 'Experience', accent: false },
  { num: '10+', label: 'Tech Stack', accent: false },
  { num: '★', label: 'Upwork', accent: false },
];

export default function HeroSection({ onSuggest }) {
  return (
    <motion.div
      variants={pageTransition}
      initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 16px', position: 'relative' }}
    >
      {/* Ambient radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '30%',
        transform: 'translate(-50%,-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(0,180,255,0.06), transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="hero-grid section-pad" style={{ maxWidth: '980px', width: '100%', position: 'relative', zIndex: 1 }}>
        {/* Left col */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">

          {/* Top classified badge */}
          <motion.div variants={fadeInUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <div style={{ fontSize: '0.42rem', color: 'var(--cyan-dim)', letterSpacing: '0.3em', fontFamily: 'Orbitron', border: '1px solid rgba(0,180,255,0.2)', padding: '4px 10px', background: 'rgba(0,180,255,0.04)' }}>
              FILE: JA-001 / OPERATIVE PROFILE
            </div>
            <div className="status-dot" style={{ width: '5px', height: '5px' }} />
          </motion.div>

          <motion.div variants={fadeInUp} className="section-label" style={{ marginBottom: '16px' }}>
            Data &amp; Automation Engineer
          </motion.div>

          <motion.h1 variants={fadeInUp} style={{
            fontFamily: 'Orbitron',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem,8vw,6rem)',
            lineHeight: '0.95', letterSpacing: '-0.01em',
            marginBottom: '18px', position: 'relative', zIndex: 2,
          }}>
            <span className="glitch-container" data-text="JHONSON" style={{ display: 'block', color: 'var(--text-primary)' }}>JHONSON</span>
            <span style={{ display: 'block', color: 'var(--cyan)', textShadow: '0 0 30px rgba(0,212,255,0.5)' }}>AYALEW</span>
          </motion.h1>

          <motion.p variants={fadeInUp} style={{
            fontFamily: 'Rajdhani', fontStyle: 'normal', fontWeight: 300,
            fontSize: 'clamp(0.9rem,2.2vw,1.15rem)',
            color: 'var(--text-secondary)', marginBottom: '14px', lineHeight: '1.6',
            letterSpacing: '0.04em',
          }}>
            Python · React · Node.js · AI Data Labeling
          </motion.p>

          <motion.p variants={fadeInUp} style={{
            fontFamily: 'Share Tech Mono', fontSize: '0.62rem',
            color: 'var(--text-muted)', marginBottom: '24px', lineHeight: '1.9',
            maxWidth: '400px',
            borderLeft: '2px solid rgba(0,180,255,0.2)', paddingLeft: '12px',
          }}>
            Building automation systems, data pipelines, and web products from Addis Ababa, Ethiopia — for clients worldwide.
          </motion.p>

          <motion.div variants={fadeInUp} style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button className="btn-primary" onClick={() => onSuggest('Show me your projects')} data-cursor>
              View Projects →
            </button>
            <button className="btn-ghost" onClick={() => onSuggest('How can I hire Jhonson?')} data-cursor>
              Hire Me
            </button>
          </motion.div>

          {/* Links */}
          <motion.div variants={fadeInUp} style={{ marginTop: '22px', display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            {[
              { label: 'GitHub', url: 'https://github.com/JhonsonAyalew' },
              { label: 'LinkedIn', url: 'https://linkedin.com/in/jhonson-ayalew-a3738138b' },
              { label: 'Portfolio', url: 'https://portfolio-chi-seven-11.vercel.app' },
            ].map(l => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" data-cursor
                style={{
                  fontSize: '0.5rem', letterSpacing: '0.16em', color: 'var(--text-muted)',
                  textDecoration: 'none', textTransform: 'uppercase', fontFamily: 'Orbitron',
                  transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '5px',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--cyan)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <span style={{ width: '12px', height: '1px', background: 'currentColor', display: 'inline-block' }} />
                {l.label}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right col: Stats */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate="visible"
          className="stats-col"
        >
          {/* Mobile: horizontal row; Desktop: vertical stack */}
          <div className="stats-row">
            {STATS.map((stat, i) => (
              <motion.div key={stat.label} variants={dataStream}
                className="glass-card tactical-frame"
                style={{
                  padding: '14px 16px',
                  background: stat.accent ? 'rgba(0,180,255,0.05)' : 'rgba(7,13,24,0.88)',
                  borderColor: stat.accent ? 'rgba(0,180,255,0.2)' : 'var(--border-subtle)',
                }}>
                <div className="stat-number" style={{ color: stat.accent ? 'var(--cyan)' : 'var(--text-primary)', textShadow: stat.accent ? '0 0 20px rgba(0,212,255,0.4)' : 'none' }}>
                  {stat.num}
                </div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Corner coords */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{ position: 'absolute', bottom: '20px', left: '16px', fontFamily: 'Share Tech Mono', fontSize: '0.44rem', color: 'var(--text-dim)', letterSpacing: '0.14em' }}>
        9°N 38°E / ADDIS ABABA / ETH
      </motion.div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '20px', right: '16px', fontFamily: 'Share Tech Mono', fontSize: '0.44rem', color: 'var(--text-dim)', letterSpacing: '0.14em' }}>
        ↓ QUERY BELOW
      </motion.div>

      <style>{`
        @media(max-width:899px){
          .stats-col { width:100%; }
          .stats-row { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media(min-width:900px){
          .stats-col { display:flex; flex-direction:column; gap:0; }
          .stats-row { display:flex; flex-direction:column; gap:4px; }
        }
      `}</style>
    </motion.div>
  );
}
