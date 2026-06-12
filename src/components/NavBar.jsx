import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Radio } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home',     mode: 'HERO' },
  { label: 'About',    mode: 'ABOUT' },
  { label: 'Projects', mode: 'PROJECTS_GRID' },
  { label: 'Skills',   mode: 'SKILLS_GRID' },
  { label: 'Contact',  mode: 'CONTACT' },
];

export default function NavBar({ currentMode, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (item) =>
    currentMode === item.mode ||
    (item.mode === 'PROJECTS_GRID' && currentMode === 'PROJECT_DETAIL') ||
    (item.mode === 'SKILLS_GRID'   && currentMode === 'SKILL_DETAIL')   ||
    (item.mode === 'ABOUT'         && currentMode === 'ABOUT_DETAIL')   ||
    (item.mode === 'HERO'          && currentMode === 'HERO_DETAIL');

  const handleNav = (mode) => { onNavigate(mode); setMenuOpen(false); };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
          padding: '0 5%', height: '60px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'rgba(10,25,40,0.88)',
          backdropFilter: 'blur(20px)',
        }}
      >
        {/* Logo */}
        <button onClick={() => handleNav('HERO')} data-cursor
          style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
        >
          <div style={{
            width: '34px', height: '34px',
            background: 'linear-gradient(135deg, var(--primary-teal), var(--primary-emerald))',
            borderRadius: '9px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '0.85rem', fontFamily: 'Outfit', fontWeight: '800', color: 'var(--bg-deep)',
            boxShadow: '0 4px 16px rgba(45,212,191,0.3)',
          }}>JA</div>
          <span style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.05rem', letterSpacing: '0.04em', color: 'var(--text-light)' }}>
            Auto<span className="gradient-text">Dev.</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div style={{ display: 'flex', gap: '28px', alignItems: 'center' }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <button key={item.mode} onClick={() => handleNav(item.mode)} data-cursor
              style={{
                background: 'none', border: 'none',
                color: isActive(item) ? 'var(--primary-teal)' : 'var(--text-muted)',
                fontFamily: 'Inter', fontSize: '0.85rem', fontWeight: '500',
                letterSpacing: '0.04em',
                cursor: 'none', transition: 'color 0.25s',
                position: 'relative', padding: '4px 0',
              }}
            >
              {item.label}
              {isActive(item) && (
                <motion.div layoutId="nav-ul" style={{
                  position: 'absolute', bottom: '-4px', left: 0, right: 0,
                  height: '2px', borderRadius: '2px',
                  background: 'linear-gradient(90deg, var(--primary-teal), var(--primary-emerald))',
                  boxShadow: '0 0 8px var(--primary-teal)',
                }} />
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.62rem', color: 'var(--text-muted)', letterSpacing: '0.12em' }} className="available-label">
            <Radio size={11} color="var(--primary-teal)" strokeWidth={2} style={{ animation: 'statusBlink 2s ease-in-out infinite' }} />
            AVAILABLE
          </div>
          <button onClick={() => handleNav('CONTACT')} className="btn-teal" data-cursor
            style={{ padding: '7px 18px', fontSize: '0.7rem' }}>
            Let's Talk
          </button>
          <button onClick={() => setMenuOpen(v => !v)} data-cursor
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'none', padding: '4px', display: 'flex', alignItems: 'center' }}
            className="hamburger-btn">
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed', top: '60px', left: 0, right: 0, zIndex: 99,
              background: 'rgba(10,25,40,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid var(--border-subtle)',
              padding: '8px 5% 16px',
            }}>
            {NAV_ITEMS.map(item => (
              <button key={item.mode} onClick={() => handleNav(item.mode)}
                style={{
                  display: 'block', width: '100%', background: 'none', border: 'none',
                  color: isActive(item) ? 'var(--primary-teal)' : 'var(--text-secondary)',
                  fontFamily: 'Inter', fontSize: '0.9rem', fontWeight: '500',
                  cursor: 'pointer', textAlign: 'left',
                  padding: '12px 0',
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'color 0.2s',
                }}>
                {isActive(item) ? '→ ' : '  '}{item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(min-width: 601px) { .hamburger-btn { display: none !important; } }
        @media(max-width: 600px) { .desktop-nav { display: none !important; } .available-label { display: none !important; } }
      `}</style>
    </>
  );
}
