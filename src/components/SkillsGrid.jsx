import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { pageTransition, fadeInUp } from '../utils/animationVariants.js';
import { SKILLS } from '../data/knowledgeBase.js';

const CATEGORIES = ['Languages', 'Data & Automation', 'AI', 'Backend', 'Frontend', 'Databases', 'Automation & Bots', 'Tools'];

export default function SkillsGrid({ onSelectSkill }) {
  const available = CATEGORIES.filter(cat => SKILLS.some(s => s.category === cat));
  const [active, setActive] = useState(available[0]);
  const skills = SKILLS.filter(s => s.category === active);

  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', padding: '36px 5% 40px' }}
    >
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom: '10px' }}>
          Technical Arsenal
        </motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-light)', marginBottom: '8px', lineHeight: 1 }}>
          Core <span className="gradient-text">Expertise</span>
        </motion.h2>
        <p style={{ fontFamily: 'Inter', fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '28px', maxWidth: '520px' }}>
          17 tools across 8 categories — pick a category to see what I actually use it for in production.
        </p>

        <div className="skills-shell">
          {/* Category tabs */}
          <div className="skills-tab-list" data-cursor>
            {available.map(cat => (
              <button
                key={cat}
                className={`skills-tab ${cat === active ? 'active' : ''}`}
                onClick={() => setActive(cat)}
                data-cursor
              >
                {cat}
                <span style={{ marginLeft: '8px', fontSize: '0.6rem', color: 'var(--text-dim)' }}>
                  {SKILLS.filter(s => s.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Skill rows for active category */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="skills-row"
            >
              {skills.map(skill => (
                <div
                  key={skill.id}
                  className="skills-row-item white-glow-border"
                  onClick={() => onSelectSkill(skill)}
                  data-cursor
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  <div>
                    <div style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '2px' }}>
                      {skill.name}
                    </div>
                    <div style={{ fontFamily: 'Inter', fontSize: '0.66rem', color: 'var(--text-muted)', lineHeight: '1.5', maxWidth: '420px' }}>
                      {skill.desc}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.95rem', color: 'var(--text-light)' }}>{skill.level}%</span>
                    <ChevronRight size={14} color="var(--text-muted)" strokeWidth={2} />
                  </div>
                  <div className="proficiency-bar skills-row-bar">
                    <motion.div
                      className="proficiency-bar-fill"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}
