import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, slideLeft, slideRight } from '../utils/animationVariants.js';
import { SKILLS, PROJECTS } from '../data/knowledgeBase.js';
import TypingText from './TypingText.jsx';
import { Sparkles, ChevronLeft } from 'lucide-react';

export default function SkillDetailView({ skillId, aiContent, onBack }) {
  const skill = SKILLS.find(s => s.id === skillId) || SKILLS[0];
  const relatedProjects = PROJECTS.filter(p => skill.relatedProjects?.includes(p.id));
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%' }}>
      <div className="detail-grid section-pad" style={{ maxWidth: '1000px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={skill.id} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom: '14px' }}>Skill Detail</div>
            <div className="glass-card" style={{ padding: '26px', marginBottom: '10px', borderRadius: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '50%', background: 'var(--primary-teal)', boxShadow: '0 0 12px var(--primary-teal)' }} />
                <h2 style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.9rem', color: 'var(--text-light)', letterSpacing: '0.02em' }}>{skill.name}</h2>
              </div>
              <div style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '16px', textTransform: 'uppercase', fontFamily: 'Inter' }}>{skill.category}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '14px' }}>
                <div style={{ position: 'relative', width: '70px', height: '70px', flexShrink: 0 }}>
                  <svg width="70" height="70" viewBox="0 0 70 70">
                    <circle cx="35" cy="35" r="28" fill="none" stroke="rgba(45,212,191,0.1)" strokeWidth="5" />
                    <motion.circle cx="35" cy="35" r="28" fill="none"
                      stroke="url(#tealGrad2)" strokeWidth="5" strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 28}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 28 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 28 * (1 - skill.level / 100) }}
                      transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
                      style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%', filter: 'drop-shadow(0 0 6px rgba(45,212,191,0.6))' }}
                    />
                    <defs>
                      <linearGradient id="tealGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2dd4bf" /><stop offset="100%" stopColor="#10b981" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Outfit', fontWeight: '700', fontSize: '1rem', color: 'var(--text-light)' }}>
                    {skill.level}%
                  </div>
                </div>
                <p style={{ fontFamily: 'Inter', fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>{skill.desc}</p>
              </div>
            </div>
            {relatedProjects.length > 0 && (
              <div className="glass-card" style={{ padding: '16px', marginBottom: '10px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '9px', textTransform: 'uppercase', fontFamily: 'Inter' }}>Used In</div>
                {relatedProjects.map(p => (
                  <div key={p.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                    <span style={{ color: 'var(--primary-teal)' }}>◆</span>{p.title}
                  </div>
                ))}
              </div>
            )}
            <button onClick={onBack} data-cursor
              style={{ background: 'none', border: '1px solid var(--border-subtle)', borderRadius: '30px', color: 'var(--text-muted)', fontFamily: 'Inter', fontSize: '0.7rem', letterSpacing: '0.1em', padding: '8px 18px', cursor: 'none', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-teal)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ChevronLeft size={13} strokeWidth={2} /> All Skills
            </button>
          </motion.div>
        </AnimatePresence>

        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding: '26px', maxHeight: '460px', overflowY: 'auto', borderRadius: '14px' }}>
            <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--primary-teal),var(--primary-emerald))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={13} color="var(--bg-deep)" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Jhonson AI — {skill.name}</span>
            </div>
            {aiContent ? (
              <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                <TypingText text={aiContent} speed={14} />
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '6px' }}>
                {[0, 200, 400].map(d => (
                  <div key={d} style={{ width: '6px', height: '6px', background: 'var(--primary-teal)', borderRadius: '50%', animation: `typeBounce 1.2s infinite ${d}ms` }} />
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
