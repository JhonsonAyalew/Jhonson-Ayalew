import { motion, AnimatePresence } from 'framer-motion';
import { pageTransition, slideLeft, slideRight } from '../utils/animationVariants.js';
import { PROJECTS } from '../data/knowledgeBase.js';
import ProjectCard from './ProjectCard.jsx';
import TypingText from './TypingText.jsx';
import { Sparkles, ChevronLeft } from 'lucide-react';

export default function ProjectDetailView({ projectId, aiContent, onBack }) {
  const project = PROJECTS.find(p => p.id === projectId) || PROJECTS[0];
  return (
    <motion.div variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 5%' }}>
      <div className="detail-grid section-pad" style={{ maxWidth: '1000px' }}>
        <AnimatePresence mode="wait">
          <motion.div key={project.id} variants={slideLeft} initial="hidden" animate="visible" exit="exit">
            <div className="section-label" style={{ marginBottom: '14px' }}>Project Detail</div>
            <ProjectCard project={project} onClick={() => {}} />
            <div className="glass-card" style={{ padding: '16px', marginTop: '10px', borderRadius: '12px' }}>
              <div style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', fontFamily: 'Inter' }}>Tech Stack</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {project.details.tech.map(t => (
                  <span key={t} style={{ padding: '4px 12px', borderRadius: '20px', background: 'rgba(45,212,191,0.1)', border: '1px solid rgba(45,212,191,0.25)', fontSize: '0.6rem', color: 'var(--primary-teal)', letterSpacing: '0.04em', fontFamily: 'Inter' }}>{t}</span>
                ))}
              </div>
            </div>
            <button onClick={onBack} data-cursor
              style={{ marginTop: '12px', background: 'none', border: '1px solid var(--border-subtle)', borderRadius: '30px', color: 'var(--text-muted)', fontFamily: 'Inter', fontSize: '0.7rem', letterSpacing: '0.1em', padding: '8px 18px', cursor: 'none', transition: 'all 0.25s', display: 'flex', alignItems: 'center', gap: '6px' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-teal)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-muted)'; }}
            >
              <ChevronLeft size={13} strokeWidth={2} /> All Projects
            </button>
          </motion.div>
        </AnimatePresence>

        <motion.div variants={slideRight}>
          <div className="glass-card" style={{ padding: '26px', maxHeight: '460px', overflowY: 'auto', borderRadius: '14px' }}>
            <div style={{ marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '8px', background: 'linear-gradient(135deg,var(--primary-teal),var(--primary-emerald))', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sparkles size={13} color="var(--bg-deep)" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '0.55rem', letterSpacing: '0.18em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Jhonson AI — {project.title}</span>
            </div>
            {aiContent ? (
              <div>
                <div style={{ fontFamily: 'Inter', fontSize: '0.78rem', lineHeight: '1.9', color: 'var(--text-secondary)' }}>
                  <TypingText text={aiContent} speed={14} />
                </div>
                <div style={{ marginTop: '18px', paddingTop: '14px', borderTop: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', fontFamily: 'Inter' }}>Highlights</div>
                  {project.details.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '5px 0', fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: 'Inter' }}>
                      <span style={{ color: 'var(--primary-emerald)', flexShrink: 0, marginTop: '1px' }}>→</span>{h}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', gap: '6px', marginBottom: '18px' }}>
                  {[0, 200, 400].map(d => (
                    <div key={d} style={{ width: '6px', height: '6px', background: 'var(--primary-teal)', borderRadius: '50%', animation: `typeBounce 1.2s infinite ${d}ms` }} />
                  ))}
                </div>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.2em', color: 'var(--text-muted)', marginBottom: '10px', textTransform: 'uppercase', fontFamily: 'Inter' }}>Key Highlights</div>
                {project.details.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', padding: '8px 0', borderBottom: '1px solid var(--border-subtle)', fontSize: '0.72rem', color: 'var(--text-secondary)', fontFamily: 'Inter' }}>
                    <span style={{ color: 'var(--primary-teal)', flexShrink: 0 }}>→</span>{h}
                  </div>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
