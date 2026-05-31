import { motion } from 'framer-motion';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';
import TypingText from './TypingText.jsx';

const TRAITS = [
  'Data Engineer','AI Data Labeling','Web Scraping',
  'Python-First','Remote-Ready','Upwork Freelancer',
  'Addis Ababa ET','Global Reach',
];

const TERMINAL_LINES = [
  { type:'prompt', text:'whoami' },
  { type:'output', text:'jhonson-ayalew — Data & Automation Engineer' },
  { type:'prompt', text:'cat focus.txt' },
  { type:'output', text:'Python · Automation · Scraping · React · Node.js · AI Labeling' },
  { type:'prompt', text:'echo $WORK' },
  { type:'highlight', text:'Upwork + Direct Clients — AVAILABLE NOW' },
];

export default function AboutSection({ aiContent }) {
  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 16px' }}
    >
      <div className="about-grid section-pad" style={{ maxWidth:'980px', width:'100%' }}>
        {/* Left */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'14px' }}>
            <div style={{ fontSize:'0.42rem', color:'var(--cyan-dim)', letterSpacing:'0.3em', fontFamily:'Orbitron', border:'1px solid rgba(0,180,255,0.2)', padding:'4px 10px', background:'rgba(0,180,255,0.04)' }}>
              FILE: JA-ABOUT / BACKGROUND INTEL
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="section-label" style={{ marginBottom:'14px' }}>About Me</motion.div>

          <motion.h2 variants={fadeInUp} style={{
            fontFamily:'Orbitron', fontWeight:'900',
            fontSize:'clamp(1.6rem,4vw,3rem)',
            lineHeight:'0.95', color:'var(--text-primary)', marginBottom:'16px',
          }}>
            Building From<br /><span style={{color:'var(--cyan)', textShadow:'0 0 20px rgba(0,212,255,0.4)'}}>Ethiopia,</span><br />For The World
          </motion.h2>

          <motion.div variants={fadeInUp} style={{ marginBottom:'16px' }}>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot" style={{background:'var(--red-alert)'}} />
                <div className="terminal-dot" style={{background:'var(--amber)'}} />
                <div className="terminal-dot" style={{background:'var(--teal)'}} />
                <span style={{ marginLeft:'8px', fontSize:'0.46rem', color:'var(--text-muted)', letterSpacing:'0.14em', fontFamily:'Share Tech Mono' }}>
                  jhonson@intel-node ~ zsh
                </span>
                <div style={{ marginLeft:'auto', fontSize:'0.4rem', color:'var(--cyan-dim)', fontFamily:'Orbitron', letterSpacing:'0.1em' }}>SECURE</div>
              </div>
              <div className="terminal-body">
                {TERMINAL_LINES.map((line, i) => (
                  <div key={i} style={{marginBottom:'3px'}}>
                    {line.type==='prompt' && <div className="terminal-prompt">{line.text}</div>}
                    {line.type==='output' && <div className="terminal-output">{line.text}</div>}
                    {line.type==='highlight' && <div className="terminal-output terminal-highlight">{line.text}</div>}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={staggerContainer} style={{ display:'flex', flexWrap:'wrap', gap:'6px' }}>
            {TRAITS.map(t => (
              <motion.span key={t} variants={cardItem} className="pill-tag">{t}</motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <div className="glass-card tactical-frame" style={{ padding:'22px', marginBottom:'10px' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{
                width:'26px', height:'26px',
                background:'transparent',
                border:'1px solid var(--cyan-dim)',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'0.7rem', color:'var(--cyan)',
                boxShadow:'0 0 10px rgba(0,180,255,0.25)',
                fontFamily:'Orbitron',
              }}>◈</div>
              <span style={{ fontSize:'0.5rem', letterSpacing:'0.22em', color:'var(--cyan-dim)', fontFamily:'Orbitron' }}>JHONSON AI</span>
              <div className="status-dot" style={{ marginLeft:'auto', width:'5px', height:'5px' }} />
            </div>
            {aiContent ? (
              <p style={{ fontFamily:'Share Tech Mono', fontSize:'0.64rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </p>
            ) : (
              <p style={{ fontFamily:'Rajdhani', fontWeight:300, fontSize:'1rem', lineHeight:'1.7', color:'var(--text-secondary)', letterSpacing:'0.02em' }}>
                CS graduate turned data & automation engineer. I specialize in Python automation pipelines, web scraping at scale, and AI data labeling — with real projects deployed and active on Upwork serving global clients.
              </p>
            )}
          </div>

          {/* Data readout grid */}
          <div style={{ border:'1px solid var(--border-subtle)', background:'rgba(7,13,24,0.8)' }}>
            <div style={{ padding:'8px 14px', borderBottom:'1px solid var(--border-subtle)', fontSize:'0.42rem', color:'var(--cyan-dim)', letterSpacing:'0.22em', fontFamily:'Orbitron' }}>
              FIELD DATA
            </div>
            {[
              {label:'LOCATION',value:'Addis Ababa, ET'},
              {label:'FOCUS',value:'Data & Automation'},
              {label:'UPWORK',value:'Active Freelancer'},
              {label:'PARTNER',value:'Hurunguu.com'},
            ].map((f, i, arr) => (
              <div key={f.label} className="data-line" style={{ padding:'9px 14px', borderBottom: i < arr.length - 1 ? '1px solid var(--border-subtle)' : 'none', margin: 0 }}>
                <span className="data-line-label">{f.label}</span>
                <span style={{ width:'1px', height:'12px', background:'var(--border-subtle)', flexShrink:0 }} />
                <span className="data-line-value" style={{ fontFamily:'Share Tech Mono', fontSize:'0.62rem' }}>{f.value}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
