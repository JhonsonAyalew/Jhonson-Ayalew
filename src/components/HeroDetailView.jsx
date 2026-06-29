import { motion } from 'framer-motion';
import { slideLeft, slideRight, pageTransition } from '../utils/animationVariants.js';
import TypingText from './TypingText.jsx';

const HERO_DETAILS = {
  stats: { title: '5+ Projects / 2yr / 12+ Tech', content: "These are real deployed projects — MediaWire's AI press intelligence platform, an Ethiopian jobs Telegram bot running 24/7, a 5-stage ETL pipeline processing 100,000+ records, and a live production website. 2 years of shipping real things." },
  tagline: { title: 'AI Automation Engineer', content: "My core identity: a Python-first engineer who builds AI-powered automation systems. That means taking messy raw data from the web, scoring it with LLMs like Claude and Groq, and delivering clean structured outputs to dashboards, sheets, or chat." },
  intro: { title: 'Who is Johnson Ayalew?', content: "AI Automation Engineer and Python developer from Addis Ababa, Ethiopia building production-grade automation and AI systems for global clients. Active on Upwork and open to full-time, remote, and sponsored roles." },
};

export default function HeroDetailView({ detailType = 'intro', aiContent, onBack }) {
  const detail = HERO_DETAILS[detailType] || HERO_DETAILS.intro;
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', padding: '36px 5% 40px' }}>
      <div className="detail-grid section-pad" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div variants={slideLeft}>
          <div className="section-label" style={{ marginBottom: '18px' }}>Hero Detail</div>
          <h1 style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: 'clamp(1.6rem,3.5vw,2.6rem)', lineHeight: '1.1', color: 'var(--text-light)', marginBottom: '18px' }}>{detail.title}</h1>
          <div className="glass-card" style={{ padding: '24px', borderRadius: '14px' }}>
            <p style={{ fontFamily: 'Inter', fontStyle: 'italic', fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{detail.content}</p>
          </div>
          <button onClick={onBack} data-cursor
            style={{ marginTop: '16px', background: 'none', border: '1px solid var(--border-subtle)', borderRadius: '30px', color: 'var(--text-muted)', fontFamily: 'Inter', fontSize: '0.7rem', letterSpacing: '0.1em', padding: '8px 18px', cursor: 'none', transition: 'all 0.25s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--border-glow)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
          >← Back to Hero</button>
        </motion.div>

        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding: '26px', maxHeight: '360px', overflowY: 'auto', borderRadius: '14px' }}>
            <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--primary-white),var(--primary-mid))', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: '700', color: 'var(--bg-deep)' }}>AI</div>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Johnson AI — Detail</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '6px', padding: '8px 0' }}>
                {[0, 200, 400].map(d => (
                  <div key={d} style={{ width: '6px', height: '6px', background: 'var(--primary-white)', borderRadius: '50%', animation: `typeBounce 1.2s infinite ${d}ms` }} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
