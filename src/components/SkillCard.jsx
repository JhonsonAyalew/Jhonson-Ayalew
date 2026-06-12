import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cardItem } from '../utils/animationVariants.js';
import { ChevronRight } from 'lucide-react';

export default function SkillCard({ skill, onClick }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref} variants={cardItem}
      onClick={() => onClick(skill)}
      className="glass-card teal-glow-border"
      data-cursor
      style={{ padding: '16px 18px', cursor: 'none', borderRadius: '12px' }}
      whileHover={{ y: -2 }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--primary-teal)', boxShadow: '0 0 8px var(--primary-teal)', flexShrink: 0 }} />
          <span style={{ fontFamily: 'Inter', fontWeight: '500', fontSize: '0.78rem', color: 'var(--text-light)', letterSpacing: '0.02em' }}>
            {skill.name}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontFamily: 'Outfit', fontWeight: '700', fontSize: '0.95rem', color: 'var(--primary-teal)' }}>
            {skill.level}%
          </span>
          <ChevronRight size={12} color="var(--text-muted)" strokeWidth={2} />
        </div>
      </div>

      <div style={{ fontSize: '0.52rem', color: 'var(--text-muted)', marginBottom: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'Inter' }}>
        {skill.category}
      </div>

      <div className="proficiency-bar">
        <motion.div
          className="proficiency-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        />
      </div>
    </motion.div>
  );
}
