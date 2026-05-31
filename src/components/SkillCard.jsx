import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { cardItem } from '../utils/animationVariants.js';

export default function SkillCard({ skill, onClick, compact = false }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      variants={cardItem}
      onClick={() => onClick(skill)}
      className="glass-card cyan-border"
      data-cursor
      style={{ padding: compact ? '12px 14px' : '16px 18px', cursor: 'none', position: 'relative', overflow: 'hidden' }}
      whileHover={{ y: -2, borderColor: 'var(--border-glow)' }}
    >
      {/* Top corner accent */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '1px', background: 'var(--cyan-dim)', opacity: 0.5 }} />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '20px', background: 'var(--cyan-dim)', opacity: 0.5 }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
          <div style={{ width: '5px', height: '5px', background: 'var(--cyan)', boxShadow: '0 0 6px var(--cyan)', flexShrink: 0 }} />
          <span style={{
            fontFamily: 'Orbitron',
            fontSize: compact ? '0.58rem' : '0.65rem',
            fontWeight: '600',
            color: 'var(--text-primary)',
            letterSpacing: '0.03em',
          }}>
            {skill.name}
          </span>
        </div>
        <span style={{
          fontFamily: 'Orbitron', fontWeight: '700',
          fontSize: '0.82rem',
          color: 'var(--cyan)',
          textShadow: '0 0 10px rgba(0,212,255,0.4)',
        }}>
          {skill.level}
        </span>
      </div>

      {!compact && (
        <div style={{
          fontSize: '0.48rem', color: 'var(--text-muted)',
          marginBottom: '9px', letterSpacing: '0.12em',
          textTransform: 'uppercase', fontFamily: 'Share Tech Mono',
        }}>
          {skill.category}
        </div>
      )}

      <div className="proficiency-bar">
        <motion.div
          className="proficiency-bar-fill"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.level}%` : 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </motion.div>
  );
}
