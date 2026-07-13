import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Globe, MapPin, ArrowRight, ArrowDown, X } from 'lucide-react';
import { pageTransition, fadeInUp, staggerContainer, cardItem } from '../utils/animationVariants.js';

const ROLES = [
  'AI Automation Engineer',
  'Python Developer',
  'Data Engineer',
  'Web Scraping Expert',
  'Full-Stack Builder',
];

const STATS = [
  { num: '5+', label: 'Live Projects' },
  { num: '2yr', label: 'Experience' },
  { num: '12+', label: 'Tech Stack' },
  { num: '3.68', label: 'CGPA' },
];

const SOCIAL = [
  { label: 'GitHub', url: 'https://github.com/JhonsonAyalew', Icon: Github },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/johnson-ayalew/', Icon: Linkedin },
  { label: 'Upwork', url: 'https://www.upwork.com/freelancers/~011fb9ce9920513a41', Icon: Globe },
];

const TECH_PILLS = ['Python', 'Claude API', 'Flask', 'React', 'PostgreSQL', 'Groq AI', 'ETL', 'BeautifulSoup'];

// ── Enhanced Node Data with technologies ──
const NODE_DATA = [
  { id: 'python', label: 'Python Core', tech: 'Python 3.11+', icon: '🐍', x: 270, y: 90, color: '#3776AB' },
  { id: 'claude', label: 'Claude API', tech: 'LLM Integration', icon: '🧠', x: 295, y: 190, color: '#8B5CF6' },
  { id: 'flask', label: 'Flask API', tech: 'RESTful Services', icon: '🌶️', x: 245, y: 270, color: '#000000' },
  { id: 'react', label: 'React Frontend', tech: 'Interactive UI', icon: '⚛️', x: 140, y: 285, color: '#61DAFB' },
  { id: 'postgres', label: 'PostgreSQL', tech: 'Data Storage', icon: '🐘', x: 45, y: 210, color: '#336791' },
  { id: 'groq', label: 'Groq AI', tech: 'Fast LLM Inference', icon: '⚡', x: 65, y: 95, color: '#FF6B6B' },
  { id: 'beautifulsoup', label: 'BeautifulSoup', tech: 'Web Scraping', icon: '🕸️', x: 190, y: 135, color: '#4CAF50' },
  { id: 'pandas', label: 'Pandas', tech: 'Data Analysis', icon: '📊', x: 220, y: 210, color: '#150458' },
  { id: 'docker', label: 'Docker', tech: 'Containerization', icon: '🐳', x: 100, y: 155, color: '#2496ED' },
];

const CONNECTIONS = [
  { from: 'python', to: 'claude' },
  { from: 'python', to: 'flask' },
  { from: 'python', to: 'react' },
  { from: 'python', to: 'postgres' },
  { from: 'python', to: 'groq' },
  { from: 'python', to: 'beautifulsoup' },
  { from: 'python', to: 'pandas' },
  { from: 'python', to: 'docker' },
  { from: 'claude', to: 'flask' },
  { from: 'claude', to: 'groq' },
  { from: 'flask', to: 'react' },
  { from: 'flask', to: 'postgres' },
  { from: 'flask', to: 'docker' },
  { from: 'react', to: 'postgres' },
  { from: 'react', to: 'docker' },
  { from: 'postgres', to: 'pandas' },
  { from: 'beautifulsoup', to: 'pandas' },
  { from: 'pandas', to: 'postgres' },
  { from: 'groq', to: 'claude' },
  { from: 'docker', to: 'postgres' },
];

export default function HeroSection({ onSuggest }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [phase, setPhase] = useState('typing');
  const [selectedNode, setSelectedNode] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0, data: null });
  const [globeRotation, setGlobeRotation] = useState(0);
  const globeRef = useRef(null);

  // Role typewriter effect
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

  // Auto-rotate globe
  useEffect(() => {
    const interval = setInterval(() => {
      setGlobeRotation(prev => (prev + 0.3) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const handleNodeClick = (node, event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setSelectedNode(node);
    setTooltip({
      visible: true,
      x: rect.left + rect.width / 2,
      y: rect.top - 80,
      data: node
    });
    setTimeout(() => setTooltip(prev => ({ ...prev, visible: false })), 3000);
  };

  const getConnectionPath = (from, to) => {
    const fromNode = NODE_DATA.find(n => n.id === from);
    const toNode = NODE_DATA.find(n => n.id === to);
    if (!fromNode || !toNode) return '';
    const dx = toNode.x - fromNode.x;
    const dy = toNode.y - fromNode.y;
    const midX = (fromNode.x + toNode.x) / 2;
    const midY = (fromNode.y + toNode.y) / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const curve = dist * 0.4;
    return `M${fromNode.x},${fromNode.y} Q${midX + (dy / dist) * curve},${midY - (dx / dist) * curve} ${toNode.x},${toNode.y}`;
  };

  return (
    <motion.div
      variants={pageTransition}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        width: '100%',
        paddingTop: '36px',
        paddingBottom: '40px',
        paddingLeft: '5%',
        paddingRight: '5%',
        position: 'relative',
        overflow: 'hidden',
        background: '#0a0b0d',
        minHeight: '100vh',
      }}
    >
      <style>{`
        :root{
          --void:#0a0b0d;
          --surface:#131519;
          --ink:#f6f4ef;
          --muted:#8b8f94;
          --amber:#ffab5e;
          --cyan:#6fd6ff;
          --ok:#7ee8a0;
        }

        .hero-grid{
          display:grid;
          grid-template-columns: 1.15fr 0.85fr;
          column-gap:64px;
          row-gap:0;
          grid-template-areas:
            "eyebrow  eyebrow"
            "headline globe"
            "cli      globe"
            "copy     globe"
            "actions  globe"
            "pills    stats"
            "social   stats";
        }
        @media (max-width:900px){
          .hero-grid{
            grid-template-columns:1fr;
            row-gap:26px;
            grid-template-areas:
              "eyebrow"
              "headline"
              "cli"
              "globe"
              "copy"
              "actions"
              "pills"
              "stats"
              "social";
          }
        }
        .area-eyebrow{ grid-area:eyebrow; }
        .area-headline{ grid-area:headline; }
        .area-cli{ grid-area:cli; }
        .area-globe{ grid-area:globe; }
        .area-copy{ grid-area:copy; }
        .area-actions{ grid-area:actions; }
        .area-pills{ grid-area:pills; }
        .area-stats{ grid-area:stats; }
        .area-social{ grid-area:social; }

        .gradient-text{
          background: linear-gradient(135deg, var(--ink) 0%, var(--cyan) 40%, var(--amber) 75%, var(--ink) 100%);
          background-size:220% auto;
          -webkit-background-clip:text;
          background-clip:text;
          color:transparent;
          animation: heroGradientShift 8s ease-in-out infinite;
        }
        @keyframes heroGradientShift{
          0%,100%{ background-position:0% 50%; }
          50%{ background-position:100% 50%; }
        }

        .glitch-container{ position:relative; display:inline-block; }
        .glitch-container::before,
        .glitch-container::after{
          content:attr(data-text);
          position:absolute; left:0; top:0; width:100%; height:100%;
          opacity:0; pointer-events:none; mix-blend-mode:screen;
        }
        .glitch-container:hover::before{
          opacity:0.75; color:var(--cyan); transform:translate(-2px,-1px);
          animation:heroGlitchA 0.5s steps(2,end) infinite;
        }
        .glitch-container:hover::after{
          opacity:0.75; color:var(--amber); transform:translate(2px,1px);
          animation:heroGlitchB 0.5s steps(2,end) infinite;
        }
        @keyframes heroGlitchA{
          0%{ clip-path:inset(0 0 62% 0); } 50%{ clip-path:inset(38% 0 18% 0); } 100%{ clip-path:inset(0 0 62% 0); }
        }
        @keyframes heroGlitchB{
          0%{ clip-path:inset(62% 0 0 0); } 50%{ clip-path:inset(18% 0 38% 0); } 100%{ clip-path:inset(62% 0 0 0); }
        }

        .typing-cursor{
          display:inline-block; width:2px; height:1.1em; margin-left:3px;
          background:var(--amber); vertical-align:middle;
          animation: heroCursorBlink 0.9s step-end infinite;
        }
        @keyframes heroCursorBlink{ 0%,100%{ opacity:1; } 50%{ opacity:0; } }

        @keyframes statusBlink{
          0%,100%{ opacity:1; transform:scale(1); }
          50%{ opacity:0.4; transform:scale(0.75); }
        }

        /* ── Enhanced Globe ── */
        .globe-visual{
          position:relative;
          width:340px;
          max-width:100%;
          aspect-ratio:1/1;
          margin:0 auto;
          cursor: grab;
        }
        .globe-visual:active{ cursor: grabbing; }

        .globe-scene{
          position:absolute; inset:0;
          perspective:1200px;
        }

        .globe-core{
          position:absolute; inset:20px;
          border-radius:50%;
          background:
            radial-gradient(circle at 30% 25%, rgba(111,214,255,0.35), transparent 50%),
            radial-gradient(circle at 70% 80%, rgba(255,171,94,0.25), transparent 55%),
            radial-gradient(circle at 50% 50%, #1a1d24, #0a0b0d 82%);
          box-shadow: 
            0 0 100px rgba(111,214,255,0.12),
            0 0 60px rgba(255,171,94,0.08),
            inset 0 0 60px rgba(0,0,0,0.8),
            0 0 40px rgba(111,214,255,0.05);
        }

        .globe-wireframe{
          position:absolute; inset:20px;
          transform-style:preserve-3d;
          animation: globeSpin 30s linear infinite;
        }
        @keyframes globeSpin{
          from{ transform:rotateY(0deg); }
          to{ transform:rotateY(360deg); }
        }

        .meridian{
          position:absolute; inset:0;
          border-radius:50%;
          border:1.5px solid rgba(111,214,255,0.15);
          box-shadow: inset 0 0 20px rgba(111,214,255,0.02);
        }

        .latitude{
          position:absolute; left:50%; top:50%;
          border-radius:50%;
          border:1.5px solid rgba(255,171,94,0.08);
          box-shadow: inset 0 0 20px rgba(255,171,94,0.02);
        }

        .globe-orbits{
          position:absolute; inset:0;
          overflow:visible;
        }

        .orbit-ring{
          fill:none;
          stroke:rgba(255,255,255,0.06);
          stroke-width:1.5;
          stroke-dasharray:3 8;
        }

        .flow-line{
          fill:none;
          stroke-width:2;
          stroke-dasharray:6 10;
          opacity:0.3;
          animation:flowDash 3s linear infinite;
          filter: drop-shadow(0 0 6px rgba(111,214,255,0.1));
        }
        @keyframes flowDash{ to{ stroke-dashoffset:-160; } }

        .node-dot{
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .node-dot:hover{
          transform: scale(1.8);
          filter: drop-shadow(0 0 20px currentColor);
        }
        .node-dot:active{
          transform: scale(0.8);
        }

        .node-pulse{
          fill:none;
          stroke-width:2;
          opacity:0.5;
          transform-box:fill-box;
          transform-origin:center;
          animation:pulseRing 2.4s ease-out infinite;
        }
        @keyframes pulseRing{
          0%{ transform:scale(1); opacity:0.6; }
          100%{ transform:scale(3.6); opacity:0; }
        }

        .hub-dot{
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .hub-dot:hover{
          transform: scale(1.3);
          filter: drop-shadow(0 0 30px rgba(255,171,94,0.6));
        }

        .hub-pulse{
          fill:none;
          stroke-width:2.5;
          opacity:0.4;
          transform-box:fill-box;
          transform-origin:center;
          animation:pulseRing 2s ease-out infinite;
        }

        /* ── Tooltip ── */
        .tooltip-container{
          position: fixed;
          pointer-events: none;
          z-index: 1000;
          transform: translate(-50%, -100%);
          animation: tooltipFade 0.3s ease;
        }
        @keyframes tooltipFade{
          from{ opacity:0; transform: translate(-50%, -90%) scale(0.95); }
          to{ opacity:1; transform: translate(-50%, -100%) scale(1); }
        }

        .tooltip-content{
          background: rgba(19, 21, 25, 0.95);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 14px 20px;
          min-width: 160px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(111,214,255,0.05);
        }
        .tooltip-content .icon{ font-size: 24px; }
        .tooltip-content .label{ 
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 0.85rem;
          color: var(--ink);
          margin: 4px 0 2px;
        }
        .tooltip-content .tech{
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          color: var(--muted);
          letter-spacing: 0.04em;
        }
        .tooltip-arrow{
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 12px;
          height: 12px;
          background: rgba(19, 21, 25, 0.95);
          border-right: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          transform: translateX(-50%) rotate(45deg);
        }

        .globe-caption{
          text-align:center;
          font-family:'Space Mono', monospace;
          font-size:0.55rem;
          letter-spacing:0.14em;
          text-transform:uppercase;
          color:#666666;
          margin-top:14px;
        }
        .globe-caption b{ color:var(--amber); font-weight:600; }

        @media (prefers-reduced-motion: reduce){
          .globe-wireframe{ animation:none; }
          .node-pulse, .hub-pulse{ animation:none; }
          .flow-line{ animation:none; stroke-dasharray:none; }
        }

        .hero-stat-strip{ display:flex; justify-content:space-between; gap:10px; }
        .stat-block{ display:flex; flex-direction:column; gap:4px; }
        @media (max-width:480px){
          .hero-stat-strip{ display:grid; grid-template-columns:repeat(2,1fr); gap:18px 12px; }
        }

        .btn-white, .btn-outline{
          font-family:'Inter', sans-serif; font-size:0.8rem; font-weight:600;
          letter-spacing:0.02em; padding:13px 26px; border-radius:999px; cursor:pointer;
          transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease, border-color 0.25s ease;
        }
        .btn-white{ background:var(--amber); color:#1a1206; border:none; }
        .btn-white:hover{ transform:translateY(-2px); box-shadow:0 12px 28px rgba(255,171,94,0.28); }
        .btn-outline{ background:transparent; color:var(--ink); border:1px solid rgba(255,255,255,0.2); }
        .btn-outline:hover{
          border-color:rgba(255,255,255,0.55); background:rgba(255,255,255,0.05); transform:translateY(-2px);
        }

        .tech-pill-row{
          display:flex; gap:8px; flex-wrap:wrap;
        }
        @media (max-width:520px){
          .tech-pill-row{ flex-wrap:nowrap; overflow-x:auto; padding-bottom:4px; scrollbar-width:none; }
          .tech-pill-row::-webkit-scrollbar{ display:none; }
          .tech-pill-row span{ flex-shrink:0; }
        }

        @media (max-width:640px){
          .hero-bottom-bar{ flex-direction:column; align-items:flex-start !important; gap:6px; }
        }

        @media (prefers-reduced-motion: reduce){
          .gradient-text, .typing-cursor, .glitch-container::before, .glitch-container::after{
            animation:none !important;
          }
        }
      `}</style>

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%', width: '55%', height: '55%',
        background: 'radial-gradient(circle, rgba(111,214,255,0.07), transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(10px)',
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-8%', width: '40%', height: '45%',
        background: 'radial-gradient(circle, rgba(255,171,94,0.06), transparent 70%)',
        pointerEvents: 'none', zIndex: 0, filter: 'blur(10px)',
      }} />

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent 90%)',
        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 20%, black, transparent 90%)',
      }} />

      <div style={{ width: '100%', maxWidth: '1140px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        <div className="hero-grid">

          {/* ── Eyebrow ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-eyebrow"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <MapPin size={12} color="#999999" strokeWidth={1.5} />
              <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#888888', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Addis Ababa, Ethiopia
              </span>
            </div>
            <div style={{ width: '1px', height: '12px', background: 'rgba(255,255,255,0.06)' }} />
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--ok)', boxShadow: '0 0 12px rgba(126,232,160,0.4)', animation: 'statusBlink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: 'Inter', fontSize: '0.65rem', color: '#cccccc', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: '500' }}>
                Open to Work
              </span>
            </div>
          </motion.div>

          {/* ── Headline ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-headline" style={{ marginBottom: '10px' }}>
            <div style={{
              fontFamily: 'Outfit', fontWeight: '800',
              fontSize: 'clamp(2.4rem, 9vw, 4.8rem)',
              lineHeight: '0.95', letterSpacing: '-0.03em', color: 'var(--ink)',
            }}>
              <span style={{ display: 'block' }} className="glitch-container" data-text="JOHNSON">JOHNSON</span>
              <span className="gradient-text" style={{ display: 'block' }}>AYALEW</span>
            </div>
          </motion.div>

          {/* ── CLI ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-cli"
            style={{ marginBottom: '18px', minHeight: '32px', display: 'flex', alignItems: 'center' }}>
            <div style={{ fontFamily: 'Space Mono', fontSize: 'clamp(0.85rem, 2.6vw, 1.1rem)', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ color: 'var(--amber)', marginRight: '4px', opacity: 0.85 }}>&gt;</span>
              {displayed}
              <span className="typing-cursor" />
            </div>
          </motion.div>

          {/* ── Enhanced 3D Globe ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
            className="area-globe">
            <div style={{
              fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#666666', marginBottom: '12px', fontFamily: 'Inter', textAlign: 'center',
            }}>
              ⚡ 9 Technologies Connected
            </div>

            <div className="globe-visual" ref={globeRef}>
              <div className="globe-scene">
                <div className="globe-core" />
                <div className="globe-wireframe" style={{ transform: `rotateY(${globeRotation}deg)` }}>
                  {[0, 30, 60, 90, 120, 150].map(angle => (
                    <div key={angle} className="meridian" style={{ transform: `rotateY(${angle}deg)` }} />
                  ))}
                  {[58, 28, -28, -58].map(lat => {
                    const rad = (lat * Math.PI) / 180;
                    const ringR = 140 * Math.cos(rad);
                    const offset = 140 * Math.sin(rad);
                    return (
                      <div
                        key={lat}
                        className="latitude"
                        style={{
                          width: ringR * 2,
                          height: ringR * 2,
                          marginLeft: -ringR,
                          marginTop: -ringR,
                          transform: `rotateX(90deg) translateZ(${offset}px)`,
                        }}
                      />
                    );
                  })}
                </div>
              </div>

              <svg className="globe-orbits" viewBox="0 0 340 340">
                <defs>
                  <linearGradient id="lineGradient" x1="0" y1="0" x2="340" y2="340" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffab5e" />
                    <stop offset="100%" stopColor="#6fd6ff" />
                  </linearGradient>
                  <linearGradient id="hubGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffab5e" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#ff6b35" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="nodeglow" x="-150%" y="-150%" width="400%" height="400%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="hubglow" x="-200%" y="-200%" width="500%" height="500%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* Orbit rings with satellites */}
                <path id="orbitA" className="orbit-ring" d="M30,210 A150,55 -20 1,1 310,130 A150,55 -20 1,1 30,210" />
                <path id="orbitB" className="orbit-ring" d="M70,110 A120,45 30 1,1 270,230 A120,45 30 1,1 70,110" />
                <circle r="3.5" fill="#ffab5e" filter="url(#nodeglow)">
                  <animateMotion dur="12s" repeatCount="indefinite">
                    <mpath href="#orbitA" />
                  </animateMotion>
                </circle>
                <circle r="3" fill="#6fd6ff" filter="url(#nodeglow)">
                  <animateMotion dur="15s" begin="-6s" repeatCount="indefinite">
                    <mpath href="#orbitB" />
                  </animateMotion>
                </circle>

                {/* Connection lines with flowing data */}
                {CONNECTIONS.map((conn, i) => {
                  const path = getConnectionPath(conn.from, conn.to);
                  const fromNode = NODE_DATA.find(n => n.id === conn.from);
                  const toNode = NODE_DATA.find(n => n.id === conn.to);
                  if (!fromNode || !toNode) return null;
                  return (
                    <path
                      key={i}
                      d={path}
                      className="flow-line"
                      stroke={fromNode.color || '#6fd6ff'}
                      style={{ 
                        animationDelay: `${i * 0.2}s`,
                        opacity: 0.25 + (i / CONNECTIONS.length) * 0.25
                      }}
                    />
                  );
                })}

                {/* Enhanced Nodes with click handlers */}
                {NODE_DATA.map((node, i) => {
                  const isHub = node.id === 'python';
                  const radius = isHub ? 8 : 5;
                  return (
                    <g key={node.id}>
                      <circle 
                        cx={node.x} 
                        cy={node.y} 
                        r={isHub ? 14 : 10}
                        className="node-pulse" 
                        style={{ 
                          animationDelay: `${i * 0.25}s`,
                          stroke: isHub ? '#ffab5e' : node.color,
                        }} 
                      />
                      <circle 
                        cx={node.x} 
                        cy={node.y} 
                        r={radius}
                        className={isHub ? 'hub-dot' : 'node-dot'}
                        fill={isHub ? 'url(#hubGradient)' : node.color}
                        filter="url(#nodeglow)"
                        style={{ 
                          cursor: 'pointer',
                          transition: 'all 0.3s ease',
                        }}
                        onClick={(e) => handleNodeClick(node, e)}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.5)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      />
                      <text
                        x={node.x}
                        y={node.y + (isHub ? 22 : 18)}
                        textAnchor="middle"
                        fontSize={isHub ? 8 : 6}
                        fill={isHub ? '#ffab5e' : '#888888'}
                        fontFamily="'Inter', sans-serif"
                        fontWeight={isHub ? 700 : 400}
                        letterSpacing="0.04em"
                        style={{ pointerEvents: 'none' }}
                      >
                        {isHub ? 'PYTHON HUB' : node.label.split(' ')[0].toUpperCase()}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Tooltip */}
            {tooltip.visible && tooltip.data && (
              <div 
                className="tooltip-container"
                style={{ left: tooltip.x, top: tooltip.y }}
              >
                <div className="tooltip-content">
                  <div className="icon">{tooltip.data.icon}</div>
                  <div className="label">{tooltip.data.label}</div>
                  <div className="tech">{tooltip.data.tech}</div>
                  <div style={{ 
                    fontSize: '0.5rem', 
                    color: '#555555', 
                    marginTop: '4px',
                    fontFamily: 'monospace',
                    letterSpacing: '0.04em'
                  }}>
                    {tooltip.data.id.toUpperCase()}
                  </div>
                  <div className="tooltip-arrow" />
                </div>
              </div>
            )}

            <div className="globe-caption">
              <b>{NODE_DATA.length}</b> technologies · <b>{CONNECTIONS.length}</b> integrations · Click any node
            </div>
          </motion.div>

          {/* ── Copy ── */}
          <motion.p variants={fadeInUp} initial="hidden" animate="visible" className="area-copy" style={{
            fontFamily: 'Inter', fontSize: '0.92rem', lineHeight: '1.85', color: '#a8a8a8',
            maxWidth: '480px', marginBottom: '4px',
          }}>
            I build AI-powered automation systems that eliminate hours of manual work —
            scraping thousands of records, scoring them with LLMs, and pushing results
            to dashboards, email, or Telegram. Every project ships with real data and zero wasted clicks.
          </motion.p>

          {/* ── Actions ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-actions"
            style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', marginTop: '20px' }}>
            <button className="btn-white" data-cursor onClick={() => onSuggest?.('Show me your projects')}
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              View Projects <ArrowRight size={14} />
            </button>
            <button className="btn-outline" data-cursor onClick={() => onSuggest?.('How can I hire you?')}>
              Hire Me
            </button>
          </motion.div>

          {/* ── Tech Pills ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-pills tech-pill-row" style={{ marginTop: '6px' }}>
            {TECH_PILLS.map((t, i) => (
              <span key={t} style={{
                padding: '4px 14px', borderRadius: '20px',
                background: i < 2 ? 'rgba(255,171,94,0.09)' : 'rgba(255,255,255,0.03)',
                border: `1px solid ${i < 2 ? 'rgba(255,171,94,0.22)' : 'rgba(255,255,255,0.04)'}`,
                fontSize: '0.62rem', letterSpacing: '0.06em',
                color: i < 2 ? 'var(--amber)' : '#666666', fontFamily: 'Inter', fontWeight: '500',
                whiteSpace: 'nowrap',
                transition: 'background 0.25s ease, color 0.25s ease, border-color 0.25s ease',
              }}>{t}</span>
            ))}
          </motion.div>

          {/* ── Social ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-social"
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap', marginTop: '6px' }}>
            {SOCIAL.map(({ label, url, Icon }) => (
              <a key={label} href={url} target="_blank" rel="noreferrer" data-cursor title={label}
                style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', letterSpacing: '0.06em', color: '#777777', textDecoration: 'none', transition: 'all 0.25s', padding: '4px 0' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--ink)'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#777777'; e.currentTarget.style.transform = 'translateX(0)'; }}
              >
                <Icon size={16} strokeWidth={1.5} />
                {label}
              </a>
            ))}
          </motion.div>

          {/* ── Stats ── */}
          <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="area-stats hero-stat-strip"
            style={{ paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.05)', alignSelf: 'start' }}>
            {STATS.map(({ num, label }) => (
              <div key={label} className="stat-block">
                <div style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: '1.5rem', color: 'var(--ink)', letterSpacing: '-0.02em' }}>{num}</div>
                <div style={{ fontSize: '0.5rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#666666', fontFamily: 'Inter', fontWeight: '500' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom Bar ── */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="hero-bottom-bar"
          style={{
            marginTop: '36px', paddingTop: '18px', borderTop: '1px solid rgba(255,255,255,0.04)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px',
          }}>
          <span style={{ fontFamily: 'Space Mono', fontSize: '0.55rem', color: '#555555', letterSpacing: '0.12em' }}>
            ETH · 9.0250°N 38.7469°E · ADDIS ABABA — OPEN TO SPONSORED ROLES
          </span>
          <span style={{ fontFamily: 'Inter', fontSize: '0.55rem', color: '#555555', letterSpacing: '0.1em', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ArrowDown size={10} />
            ASK THE AI ANYTHING BELOW
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}
