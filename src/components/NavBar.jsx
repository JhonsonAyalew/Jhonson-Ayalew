import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Radio, Sparkles } from 'lucide-react';

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
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: '0 5%',
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255,255,255,0.04)',
          background: 'rgba(10,10,10,0.92)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 4px 30px rgba(0,0,0,0.4)',
        }}
      >
        {/* Logo */}
        <button 
          onClick={() => handleNav('HERO')} 
          data-cursor
          style={{
            background: 'none',
            border: 'none',
            cursor: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '4px 8px',
            borderRadius: '12px',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'none';
          }}
        >
          <div style={{
            width: '38px',
            height: '38px',
            background: 'linear-gradient(135deg, #ffffff, #888888)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.9rem',
            fontFamily: 'Outfit',
            fontWeight: '800',
            color: '#0a0a0a',
            boxShadow: '0 4px 20px rgba(255,255,255,0.12)',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
          }}>
            <span style={{ position: 'relative', zIndex: 1 }}>JA</span>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), transparent)',
              pointerEvents: 'none',
            }} />
          </div>
          <span style={{
            fontFamily: 'Outfit',
            fontWeight: '800',
            fontSize: '1.1rem',
            letterSpacing: '0.02em',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}>
            Johnson<span style={{
              background: 'linear-gradient(135deg, #ffffff, #999999)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>AI.</span>
          </span>
        </button>

        {/* Desktop nav links */}
        <div style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center',
        }} className="desktop-nav">
          {NAV_ITEMS.map(item => (
            <button
              key={item.mode}
              onClick={() => handleNav(item.mode)}
              data-cursor
              style={{
                background: 'none',
                border: 'none',
                color: isActive(item) ? '#ffffff' : '#888888',
                fontFamily: 'Inter',
                fontSize: '0.82rem',
                fontWeight: isActive(item) ? '600' : '400',
                letterSpacing: '0.04em',
                cursor: 'none',
                transition: 'all 0.3s ease',
                position: 'relative',
                padding: '6px 0',
              }}
              onMouseEnter={(e) => {
                if (!isActive(item)) {
                  e.currentTarget.style.color = '#cccccc';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item)) {
                  e.currentTarget.style.color = '#888888';
                }
              }}
            >
              {item.label}
              {isActive(item) && (
                <motion.div
                  layoutId="nav-ul"
                  style={{
                    position: 'absolute',
                    bottom: '-2px',
                    left: 0,
                    right: 0,
                    height: '2px',
                    borderRadius: '2px',
                    background: 'linear-gradient(90deg, #ffffff, #666666)',
                    boxShadow: '0 0 12px rgba(255,255,255,0.15)',
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
        }}>
          {/* Status indicator */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            borderRadius: '20px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
          }} className="available-label">
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 0 12px rgba(255,255,255,0.4)',
              animation: 'statusBlink 2s ease-in-out infinite',
            }} />
            <span style={{
              fontSize: '0.6rem',
              color: '#999999',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: '500',
            }}>
              Open to Work
            </span>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => handleNav('CONTACT')}
            data-cursor
            style={{
              padding: '8px 22px',
              background: '#ffffff',
              color: '#0a0a0a',
              fontFamily: 'Inter',
              fontSize: '0.7rem',
              fontWeight: '600',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'none',
              borderRadius: '30px',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(255,255,255,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(255,255,255,0.1)';
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Let's Talk</span>
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              transform: 'translateX(-100%)',
              transition: 'transform 0.6s',
              pointerEvents: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(-100%)';
            }} />
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            data-cursor
            style={{
              background: 'none',
              border: 'none',
              color: '#888888',
              cursor: 'none',
              padding: '6px',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
            }}
            className="hamburger-btn"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'none';
              e.currentTarget.style.color = '#888888';
            }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              top: '68px',
              left: 0,
              right: 0,
              zIndex: 99,
              background: 'rgba(10,10,10,0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              borderBottom: '1px solid rgba(255,255,255,0.04)',
              padding: '8px 5% 20px',
              boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
            }}
          >
            {NAV_ITEMS.map((item, index) => (
              <motion.button
                key={item.mode}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => handleNav(item.mode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  background: 'none',
                  border: 'none',
                  color: isActive(item) ? '#ffffff' : '#888888',
                  fontFamily: 'Inter',
                  fontSize: '0.95rem',
                  fontWeight: isActive(item) ? '600' : '400',
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '14px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)',
                  transition: 'all 0.2s ease',
                  gap: '12px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.paddingLeft = '8px';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item)) {
                    e.currentTarget.style.color = '#888888';
                  }
                  e.currentTarget.style.paddingLeft = '0';
                }}
              >
                {isActive(item) && (
                  <span style={{
                    color: '#ffffff',
                    fontSize: '0.8rem',
                  }}>▸</span>
                )}
                {!isActive(item) && <span style={{ width: '20px' }} />}
                {item.label}
                {isActive(item) && (
                  <span style={{
                    marginLeft: 'auto',
                    fontSize: '0.6rem',
                    color: '#666666',
                    letterSpacing: '0.1em',
                  }}>●</span>
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes statusBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        
        @media(min-width: 769px) {
          .hamburger-btn { display: none !important; }
        }
        @media(max-width: 768px) {
          .desktop-nav { display: none !important; }
          .available-label { display: none !important; }
        }
        
        /* Glow pulse for logo on hover */
        .logo-glow {
          animation: logoPulse 3s ease-in-out infinite;
        }
        
        @keyframes logoPulse {
          0%, 100% { box-shadow: 0 4px 20px rgba(255,255,255,0.08); }
          50% { box-shadow: 0 4px 30px rgba(255,255,255,0.18); }
        }
      `}</style>
    </>
  );
}
