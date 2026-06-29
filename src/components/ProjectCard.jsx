import { motion } from 'framer-motion';
import { cardItem } from '../utils/animationVariants.js';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, onClick, compact = false }) {
  return (
    <motion.div
      variants={cardItem}
      onClick={() => onClick(project)}
      className="glass-card white-glow-border"
      data-cursor
      style={{
        padding: compact ? '18px' : '24px 26px',
        cursor: 'none',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: '16px',
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
    >
      {/* Corner number watermark */}
      <div style={{
        position: 'absolute', top: '14px', right: '18px',
        fontFamily: 'Outfit', fontWeight: '800',
        fontSize: compact ? '1.6rem' : '2.1rem',
        color: 'rgba(255,255,255,0.05)',
        lineHeight: 1, userSelect: 'none', letterSpacing: '-0.04em',
      }}>
        {String(project.id).padStart(2, '0')}
      </div>

      {/* Icon + title row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: compact ? '10px' : '14px' }}>
        <div style={{
          width: compact ? '40px' : '46px',
          height: compact ? '40px' : '46px',
          background: 'rgba(255,255,255,0.04)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '12px',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, fontSize: compact ? '1.05rem' : '1.3rem',
        }}>
          {project.icon}
        </div>
        <div style={{ minWidth: 0 }}>
          <div style={{
            fontFamily: 'Outfit', fontWeight: '700',
            fontSize: compact ? '0.92rem' : '1.08rem',
            letterSpacing: '0.01em', color: 'var(--text-light)', lineHeight: '1.2',
          }}>
            {project.title}
          </div>
          {project.details?.status && (
            <div style={{
              fontSize: '0.55rem', color: 'var(--text-muted)',
              letterSpacing: '0.12em', marginTop: '4px', textTransform: 'uppercase',
              fontFamily: 'Inter', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '5px',
            }}>
              <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary-light)', flexShrink: 0 }} />
              {project.details.status}
            </div>
          )}
        </div>
      </div>

      {/* Description */}
      {!compact && (
        <p style={{
          fontSize: '0.76rem', color: 'var(--text-muted)',
          lineHeight: '1.75', marginBottom: '16px', fontFamily: 'Inter', paddingRight: '12px',
        }}>
          {project.shortDesc}
        </p>
      )}

      {/* Tags + GitHub link */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
        {project.tags.slice(0, compact ? 2 : project.tags.length).map(tag => (
          <span key={tag} style={{
            padding: '3px 11px', borderRadius: '20px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border-subtle)',
            fontSize: '0.58rem', letterSpacing: '0.05em',
            color: 'var(--text-muted)', fontFamily: 'Inter',
          }}>{tag}</span>
        ))}
        {project.github ? (
          <a
            href={project.github} target="_blank" rel="noreferrer"
            onClick={e => e.stopPropagation()}
            data-cursor title="View on GitHub"
            style={{
              marginLeft: 'auto', padding: '5px 12px',
              display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
              borderRadius: '20px', border: '1px solid var(--border-subtle)',
              color: 'var(--text-secondary)', textDecoration: 'none',
              fontSize: '0.58rem', letterSpacing: '0.05em', transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.borderColor = 'var(--border-glow)'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; e.currentTarget.style.color = 'var(--text-secondary)'; }}
          >
            <Github size={11} strokeWidth={2} />
            <span>Code</span>
            <ArrowUpRight size={9} strokeWidth={2} />
          </a>
        ) : (
          <span style={{
            marginLeft: 'auto', padding: '5px 12px', flexShrink: 0,
            display: 'flex', alignItems: 'center', gap: '5px',
            borderRadius: '20px', border: '1px solid var(--border-subtle)',
            color: 'var(--text-dim)', fontSize: '0.58rem', letterSpacing: '0.05em',
          }}>
            <ExternalLink size={10} strokeWidth={2} /> Live
          </span>
        )}
      </div>
    </motion.div>
  );
}
