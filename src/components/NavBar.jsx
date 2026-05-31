import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Home', mode: 'HERO', short: 'HM' },
  { label: 'About', mode: 'ABOUT', short: 'AB' },
  { label: 'Projects', mode: 'PROJECTS_GRID', short: 'PR' },
  { label: 'Skills', mode: 'SKILLS_GRID', short: 'SK' },
  { label: 'Contact', mode: 'CONTACT', short: 'CT' },
];

export default function NavBar({ currentMode, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (item) =>
    currentMode === item.mode ||
    (item.mode === 'PROJECTS_GRID' && currentMode === 'PROJECT_DETAIL') ||
    (item.mode === 'SKILLS_GRID' && currentMode === 'SKILL_DETAIL') ||
    (item.mode === 'ABOUT' && currentMode === 'ABOUT_DETAIL') ||
    (item.mode === 'HERO' && currentMode === 'HERO_DETAIL');

  const handleNav = (mode) => { onNavigate(mode); setMenuOpen(false); };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 16px', height: '54px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(2,4,8,0.94)',
          backdropFilter: 'blur(24px)',
        }}
      >
        {/* Top accent line */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, var(--cyan-dim), transparent)', opacity: 0.7 }} />

        {/* Logo */}
        <button
          onClick={() => handleNav('HERO')}
          style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
          data-cursor
        >
          <div style={{
            width: '30px', height: '30px',
            background: 'transparent',
            border: '1px solid var(--cyan-dim)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.75rem', color: 'var(--cyan)',
            boxShadow: '0 0 12px rgba(0,180,255,0.3)',
            fontFamily: 'Orbitron',
          }}>◈</div>
          <div>
            <span style={{ fontFamily: 'Orbitron', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '0.12em', color: 'var(--text-primary)' }}>JA</span>
            <span style={{ fontFamily: 'Share Tech Mono', fontSize: '0.44rem', letterSpacing: '0.22em', color: 'var(--cyan-dim)', display: 'block', lineHeight: 1, marginTop: '1px' }}>OPERATIVE</span>
          </div>
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }} className="desktop-nav">
          {NAV_ITEMS.map((item, i) => (
            <button
              key={item.mode}
              onClick={() => handleNav(item.mode)}
              style={{
                background: isActive(item) ? 'rgba(0,180,255,0.07)' : 'none',
                border: isActive(item) ? '1px solid rgba(0,180,255,0.2)' : '1px solid transparent',
                color: isActive(item) ? 'var(--cyan)' : 'var(--text-muted)',
                fontFamily: 'Orbitron', fontSize: '0.5rem',
                letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'none', transition: 'all 0.2s',
                padding: '6px 12px',
                position: 'relative',
              }}
              data-cursor
              onMouseEnter={e => { if (!isActive(item)) { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-subtle)'; } }}
              onMouseLeave={e => { if (!isActive(item)) { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'transparent'; } }}
            >
              <span style={{ fontSize: '0.38rem', color: isActive(item) ? 'var(--cyan-dim)' : 'var(--text-dim)', marginRight: '5px' }}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {item.label}
            </button>
          ))}
        </div>

        {/* Right: status + hamburger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.46rem', color: 'var(--teal)', letterSpacing: '0.18em', fontFamily: 'Orbitron' }} className="available-label">
            <div className="status-dot" />
            <span>LIVE</span>
          </div>
          <button
            onClick={() => setMenuOpen(v => !v)}
            style={{ background: 'none', border: '1px solid var(--border-subtle)', color: 'var(--text-muted)', cursor: 'none', marginLeft: '4px', fontSize: '0.75rem', lineHeight: 1, padding: '6px 10px', fontFamily: 'Share Tech Mono' }}
            className="hamburger-btn"
            data-cursor
          >
            {menuOpen ? '✕' : '≡'}
          </button>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, clipPath: 'inset(0 0 100% 0)' }}
            animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }}
            exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: '54px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(2,4,8,0.98)',
              backdropFilter: 'blur(24px)',
              borderBottom: '1px solid var(--border-subtle)',
            }}
          >
            {/* Top scan line */}
            <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, var(--cyan-dim), transparent)' }} />
            <div style={{ padding: '12px 16px' }}>
              {NAV_ITEMS.map((item, i) => (
                <button
                  key={item.mode}
                  onClick={() => handleNav(item.mode)}
                  style={{
                    background: 'none', border: 'none',
                    color: isActive(item) ? 'var(--cyan)' : 'var(--text-secondary)',
                    fontFamily: 'Orbitron', fontSize: '0.62rem',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    cursor: 'pointer', textAlign: 'left',
                    padding: '14px 0',
                    borderBottom: '1px solid var(--border-subtle)',
                    display: 'flex', alignItems: 'center', gap: '12px',
                    width: '100%',
                    transition: 'color 0.2s',
                  }}
                >
                  <span style={{ fontSize: '0.42rem', color: 'var(--cyan-dim)', fontFamily: 'Share Tech Mono', minWidth: '24px' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {isActive(item) ? '▶ ' : ''}{item.label}
                  {isActive(item) && <div style={{ marginLeft: 'auto', width: '20px', height: '1px', background: 'var(--cyan)' }} />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width:601px){ .hamburger-btn{display:none!important} }
        @media(max-width:600px){ .desktop-nav{display:none!important} .available-label{display:none!important} }
      `}</style>
    </>
  );
}
