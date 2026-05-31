import { motion } from 'framer-motion';
import { cardItem } from '../utils/animationVariants.js';

export default function ProjectCard({ project, onClick, compact = false }) {
  return (
    <motion.div
      variants={cardItem}
      onClick={() => onClick(project)}
      className="glass-card cyan-border"
      data-cursor
      style={{ padding: compact ? '14px' : '20px', cursor: 'none', position: 'relative', overflow: 'hidden' }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Color accent top bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
        opacity: 0.9,
      }} />

      {/* Corner brackets */}
      <div style={{ position: 'absolute', top: '6px', left: '6px', width: '10px', height: '10px', borderTop: '1px solid var(--cyan-dim)', borderLeft: '1px solid var(--cyan-dim)', opacity: 0.6 }} />
      <div style={{ position: 'absolute', bottom: '6px', right: '6px', width: '10px', height: '10px', borderBottom: '1px solid var(--cyan-dim)', borderRight: '1px solid var(--cyan-dim)', opacity: 0.6 }} />

      {/* Header row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{
            width: compact ? '28px' : '34px', height: compact ? '28px' : '34px',
            background: 'rgba(0,180,255,0.08)',
            border: '1px solid rgba(0,180,255,0.18)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: compact ? '0.9rem' : '1.1rem', flexShrink: 0,
          }}>{project.icon}</div>
          <div>
            <div style={{
              fontFamily: 'Orbitron',
              fontSize: compact ? '0.7rem' : '0.82rem',
              fontWeight: '700',
              letterSpacing: '0.04em', color: 'var(--text-primary)', lineHeight: '1.2',
            }}>{project.title}</div>
            {project.details?.status && (
              <div style={{ fontSize: '0.44rem', color: 'var(--teal)', letterSpacing: '0.12em', marginTop: '2px', fontFamily: 'Share Tech Mono' }}>
                {project.details.status}
              </div>
            )}
          </div>
        </div>
        <div style={{ fontFamily: 'Orbitron', fontSize: '0.9rem', color: 'rgba(0,180,255,0.15)', lineHeight: 1, fontWeight: '700' }}>
          {String(project.id).padStart(2, '0')}
        </div>
      </div>

      {!compact && (
        <p style={{ fontSize: '0.58rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: '12px', fontFamily: 'Share Tech Mono' }}>
          {project.shortDesc}
        </p>
      )}

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', alignItems: 'center' }}>
        {project.tags.slice(0, compact ? 2 : project.tags.length).map(tag => (
          <span key={tag} style={{
            padding: '3px 8px',
            background: 'rgba(0,180,255,0.06)', border: '1px solid rgba(0,180,255,0.14)',
            fontSize: '0.44rem', letterSpacing: '0.08em', color: 'var(--text-muted)',
            fontFamily: 'Share Tech Mono',
          }}>{tag}</span>
        ))}
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()} data-cursor
            style={{
              marginLeft: 'auto', padding: '3px 9px',
              border: '1px solid rgba(0,180,255,0.25)',
              fontSize: '0.44rem', color: 'var(--cyan)',
              textDecoration: 'none', letterSpacing: '0.08em',
              transition: 'all 0.2s', fontFamily: 'Orbitron',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,180,255,0.1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >GH ↗</a>
        )}
      </div>
    </motion.div>
  );
}
