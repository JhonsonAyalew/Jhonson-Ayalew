import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Github, Linkedin, Globe, MapPin, Zap, ArrowRight,
  Code2, Cpu, Users, Briefcase, Award, Clock
} from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';

const ROLES = [
  'AI Automation Engineer',
  'Python Developer',
  'Data Engineer',
  'Web Scraping Expert',
  'Full-Stack Builder',
];

const STATS = [
  { num: '5+', label: 'Live Projects', icon: Briefcase },
  { num: '2yr', label: 'Experience', icon: Clock },
  { num: '12+', label: 'Tech Stack', icon: Cpu },
  { num: '3.68', label: 'CGPA', icon: Award },
];

const SOCIAL = [
  { label: 'GitHub', url: 'https://github.com/JhonsonAyalew', Icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/johnson-ayalew/', Icon: Linkedin },
  { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41', Icon: Globe },
];

const TECH_PILLS = ['Python', 'Claude API', 'Flask', 'React', 'PostgreSQL', 'Groq AI', 'ETL', 'BeautifulSoup'];

export default function HeroSection({ onSuggest }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const target = ROLES[roleIndex];
    let timeout;
    if (phase === 'typing') {
      if (displayed.length < target.length) {
        timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setPhase('waiting'), 1800);
      }
    } else if (phase === 'waiting') {
      timeout = setTimeout(() => setPhase('erasing'), 400);
    } else if (phase === 'erasing') {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(d => d.slice(0, -1)), 32);
      } else {
        setRoleIndex(i => (i + 1) % ROLES.length);
        setPhase('typing');
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, phase, roleIndex]);

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        width: '100%',
        minHeight: '100vh',
        paddingTop: '80px',
        paddingBottom: '40px',
        paddingLeft: '5%',
        paddingRight: '5%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Subtle radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '600px',
        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{
        width: '100%',
        maxWidth: '1100px',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* ── TOP: Location & Status ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: isMobile ? '20px' : '32px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <MapPin size={isMobile ? 10 : 12} color="#999999" strokeWidth={1.5} />
            <span style={{
              fontFamily: 'Inter',
              fontSize: isMobile ? '0.55rem' : '0.65rem',
              color: '#888888',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}>
              Addis Ababa, Ethiopia
            </span>
          </div>
          <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#ffffff',
              boxShadow: '0 0 12px rgba(255,255,255,0.3)',
              animation: 'statusBlink 2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: 'Inter',
              fontSize: isMobile ? '0.55rem' : '0.65rem',
              color: '#cccccc',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: '500',
            }}>
              Open to Work
            </span>
          </div>
          <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.06)' }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{
              fontFamily: 'Inter',
              fontSize: isMobile ? '0.5rem' : '0.6rem',
              color: '#666666',
              letterSpacing: '0.08em',
            }}>
              ETH · 9.0250°N 38.7469°E
            </span>
          </div>
        </motion.div>

        {/* ── MAIN CONTENT ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
          gap: isMobile ? '32px' : '60px',
          alignItems: 'center',
        }}>

          {/* LEFT COLUMN */}
          <motion.div variants={staggerContainer} initial="hidden" animate="visible">

            {/* Name */}
            <motion.div variants={fadeInUp} style={{ marginBottom: isMobile ? '12px' : '20px' }}>
              <div style={{
                fontFamily: 'Outfit',
                fontWeight: '800',
                fontSize: isMobile ? 'clamp(2.8rem, 12vw, 4.2rem)' : 'clamp(4rem, 8vw, 6.5rem)',
                lineHeight: '0.9',
                letterSpacing: '-0.03em',
                color: '#ffffff',
                position: 'relative',
              }}>
                <span style={{ display: 'block' }} className="glitch-container" data-text="JOHNSON">JOHNSON</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, #ffffff, #888888)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>AYALEW</span>
              </div>
            </motion.div>

            {/* Typewriter role */}
            <motion.div variants={fadeInUp} style={{
              marginBottom: isMobile ? '16px' : '24px',
              minHeight: isMobile ? '28px' : '38px',
              display: 'flex',
              alignItems: 'center',
            }}>
              <div style={{
                fontFamily: 'Space Mono',
                fontSize: isMobile ? 'clamp(0.75rem, 2vw, 0.95rem)' : 'clamp(1rem, 2.2vw, 1.25rem)',
                color: '#cccccc',
                letterSpacing: '0.02em',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <span style={{ color: '#666666', marginRight: '4px', opacity: 0.7 }}>&gt;</span>
                {displayed}
                <span className="typing-cursor" />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p variants={fadeInUp} style={{
              fontFamily: 'Inter',
              fontSize: isMobile ? '0.8rem' : '0.95rem',
              color: '#888888',
              marginBottom: isMobile ? '20px' : '28px',
              lineHeight: '1.8',
              maxWidth: isMobile ? '100%' : '520px',
            }}>
              {isMobile ? (
                <>
                  I build AI-powered automation systems that eliminate hours of manual work —
                  scraping thousands of records, scoring them with LLMs, and pushing results
                  to dashboards, email, or Telegram.
                </>
              ) : (
                <>
                  I build AI-powered automation systems that eliminate hours of manual work —
                  scraping thousands of records, scoring them with LLMs, and pushing results
                  to dashboards, email, or Telegram. Every project ships with real data and zero wasted clicks.
                </>
              )}
            </motion.p>

            {/* CTA buttons */}
            <motion.div variants={fadeInUp} style={{
              display: 'flex',
              gap: isMobile ? '10px' : '14px',
              flexWrap: 'wrap',
              marginBottom: isMobile ? '20px' : '28px',
            }}>
              <button
                className="btn-white"
                onClick={() => onSuggest('Show me your projects')}
                data-cursor
                style={{
                  padding: isMobile ? '10px 20px' : '12px 30px',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                View Projects
                <ArrowRight size={isMobile ? 12 : 14} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => onSuggest('How can I hire Johnson?')}
                data-cursor
                style={{
                  padding: isMobile ? '10px 18px' : '12px 26px',
                  background: 'transparent',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '30px',
                  color: '#888888',
                  fontFamily: 'Inter',
                  fontSize: isMobile ? '0.7rem' : '0.8rem',
                  fontWeight: '500',
                  cursor: 'none',
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                  e.currentTarget.style.color = '#888888';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                Hire Me
              </button>
            </motion.div>

            {/* Tech stack pills */}
            <motion.div variants={fadeInUp} style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: isMobile ? '5px' : '8px',
              marginBottom: isMobile ? '18px' : '28px',
            }}>
              {TECH_PILLS.map((t, i) => (
                <span key={t} style={{
                  padding: isMobile ? '3px 10px' : '4px 14px',
                  borderRadius: '20px',
                  background: i < 2 ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${i < 2 ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)'}`,
                  fontSize: isMobile ? '0.5rem' : '0.6rem',
                  letterSpacing: '0.06em',
                  color: i < 2 ? '#cccccc' : '#666666',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                  transition: 'all 0.25s',
                }}>{t}</span>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div variants={fadeInUp} style={{
              display: 'flex',
              gap: isMobile ? '16px' : '20px',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}>
              {SOCIAL.map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor
                  title={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: isMobile ? '0.6rem' : '0.7rem',
                    letterSpacing: '0.06em',
                    color: '#666666',
                    textDecoration: 'none',
                    transition: 'all 0.25s',
                    padding: '4px 0',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = '#666666';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <Icon size={isMobile ? 14 : 16} strokeWidth={1.5} />
                  {label}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN — Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr',
              gap: isMobile ? '10px' : '14px',
              alignContent: 'center',
            }}
          >
            {STATS.map(({ num, label, icon: Icon }) => (
              <motion.div
                key={label}
                variants={cardItem}
                style={{
                  padding: isMobile ? '16px 14px' : '22px 20px',
                  borderRadius: '14px',
                  background: 'rgba(255,255,255,0.02)',
                  border: '1px solid rgba(255,255,255,0.04)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
                whileHover={{
                  y: -4,
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: 'rgba(255,255,255,0.08)',
                  transition: { duration: 0.2 }
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: isMobile ? '6px' : '8px',
                }}>
                  <div style={{
                    width: isMobile ? '32px' : '40px',
                    height: isMobile ? '32px' : '40px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.04)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={isMobile ? 16 : 20} color="#999999" strokeWidth={1.5} />
                  </div>
                </div>
                <div style={{
                  fontFamily: 'Outfit',
                  fontWeight: '800',
                  fontSize: isMobile ? '1.6rem' : '2.4rem',
                  lineHeight: '1',
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                }}>
                  {num}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.45rem' : '0.5rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#666666',
                  marginTop: '4px',
                  fontFamily: 'Inter',
                  fontWeight: '500',
                }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── BOTTOM BAR ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          style={{
            marginTop: isMobile ? '28px' : '40px',
            paddingTop: isMobile ? '14px' : '20px',
            borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <span style={{
            fontFamily: 'Space Mono',
            fontSize: isMobile ? '0.45rem' : '0.55rem',
            color: '#555555',
            letterSpacing: '0.12em',
          }}>
            ETH · 9.0250°N 38.7469°E · ADDIS ABABA — OPEN TO SPONSORED ROLES
          </span>
          <span style={{
            fontFamily: 'Inter',
            fontSize: isMobile ? '0.45rem' : '0.55rem',
            color: '#555555',
            letterSpacing: '0.1em',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}>
            <div style={{
              width: '4px',
              height: '4px',
              borderRadius: '50%',
              background: '#666666',
            }} />
            ASK THE AI ANYTHING BELOW
          </span>
        </motion.div>
      </div>

      <style>{`
        @keyframes statusBlink {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.3; transform: scale(0.8); }
        }
        
        @media (max-width: 480px) {
          .glitch-container::before,
          .glitch-container::after {
            display: none;
          }
        }
      `}</style>
    </motion.div>
  );
}
