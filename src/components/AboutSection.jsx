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
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 5%' }}
    >
      <div className="about-grid section-pad" style={{ maxWidth:'1000px' }}>
        {/* Left */}
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <motion.div variants={fadeInUp} className="section-label" style={{ marginBottom:'18px' }}>About Me</motion.div>

          <motion.h2 variants={fadeInUp} style={{
            fontFamily:'Outfit', fontWeight:'800',
            fontSize:'clamp(1.8rem,4vw,3rem)',
            lineHeight:'1.05', color:'var(--text-light)', marginBottom:'20px',
          }}>
            Building From<br />
            <span className="gradient-text">Ethiopia,</span><br />
            For The World
          </motion.h2>

          <motion.div variants={fadeInUp} style={{ marginBottom:'20px' }}>
            <div className="terminal">
              <div className="terminal-header">
                <div className="terminal-dot" style={{background:'#c42020'}} />
                <div className="terminal-dot" style={{background:'#8b6914'}} />
                <div className="terminal-dot" style={{background:'#1a6b1a'}} />
                <span style={{ marginLeft:'8px', fontSize:'0.5rem', color:'var(--text-muted)', letterSpacing:'0.14em' }}>
                  jhonson@dev ~ zsh
                </span>
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

          <motion.div variants={staggerContainer} style={{ display:'flex', flexWrap:'wrap', gap:'8px' }}>
            {TRAITS.map(t => (
              <motion.span key={t} variants={cardItem} className="pill-tag">{t}</motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right */}
        <motion.div variants={fadeInUp} initial="hidden" animate="visible">
          <div className="glass-card" style={{ padding:'26px', marginBottom:'12px', borderRadius:'16px' }}>
            <div style={{ marginBottom:'14px', display:'flex', alignItems:'center', gap:'10px' }}>
              <div style={{
                width:'32px', height:'32px', borderRadius:'10px',
                background:'linear-gradient(135deg,var(--primary-teal),var(--primary-emerald))',
                display:'flex', alignItems:'center', justifyContent:'center',
                fontSize:'0.7rem', fontWeight:'700', color:'var(--bg-deep)',
              }}>AI</div>
              <span style={{ fontSize:'0.58rem', letterSpacing:'0.18em', color:'var(--text-muted)', textTransform:'uppercase' }}>Jhonson AI</span>
            </div>
            {aiContent ? (
              <p style={{ fontFamily:'Inter', fontSize:'0.8rem', lineHeight:'1.9', color:'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </p>
            ) : (
              <p style={{ fontFamily:'Inter', fontStyle:'italic', fontSize:'0.95rem', lineHeight:'1.7', color:'var(--text-secondary)' }}>
                CS graduate turned data & automation engineer. I specialize in Python automation pipelines, web scraping at scale, and AI data labeling — with real projects deployed and active on Upwork serving global clients.
              </p>
            )}
          </div>

          {/* Quick facts */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1px', background:'var(--border-subtle)', borderRadius:'12px', overflow:'hidden' }}>
            {[
              {label:'Location',value:'Addis Ababa, ET'},
              {label:'Focus',value:'Data & Automation'},
              {label:'Upwork',value:'Active Freelancer'},
              {label:'Partner',value:'Hurunguu.com'},
            ].map(f => (
              <div key={f.label} style={{ background:'var(--bg-surface)', padding:'14px 16px' }}>
                <div style={{ fontSize:'0.5rem', letterSpacing:'0.16em', color:'var(--text-muted)', marginBottom:'3px', textTransform:'uppercase' }}>{f.label}</div>
                <div style={{ fontSize:'0.75rem', color:'var(--text-light)', fontFamily:'Inter', fontWeight:'500' }}>{f.value}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
