import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp } from '../utils/animationVariants.js';
import { SKILLS } from '../data/knowledgeBase.js';
import SkillCard from './SkillCard.jsx';

const CATEGORIES = ['Languages','Data & Automation','AI','Frontend','Backend','Security','Design'];

export default function SkillsGrid({ onSelectSkill }) {
  const grouped = CATEGORIES.reduce((acc, cat) => {
    const skills = SKILLS.filter(s => s.category === cat);
    if (skills.length) acc[cat] = skills;
    return acc;
  }, {});

  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'0 16px', overflowY:'auto' }}
    >
      <div style={{ width:'100%', maxWidth:'980px', paddingBottom:'16px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
          <div style={{ fontSize:'0.42rem', color:'var(--cyan-dim)', letterSpacing:'0.3em', fontFamily:'Orbitron', border:'1px solid rgba(0,180,255,0.2)', padding:'4px 10px', background:'rgba(0,180,255,0.04)' }}>
            SPEC SHEET: TECHNICAL CAPABILITIES
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>Skills</motion.div>
        <motion.h2
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Orbitron', fontWeight:'900', fontSize:'clamp(1.6rem,4vw,2.8rem)', color:'var(--text-primary)', marginBottom:'20px', lineHeight:1 }}
        >
          Tech <span style={{color:'var(--cyan)', textShadow:'0 0 20px rgba(0,212,255,0.4)'}}>Arsenal</span>
        </motion.h2>
        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {Object.entries(grouped).map(([category, skills]) => (
            <motion.div key={category} style={{ marginBottom:'16px' }}>
              <div style={{
                fontSize:'0.46rem', letterSpacing:'0.26em', color:'var(--cyan-dim)',
                textTransform:'uppercase', marginBottom:'8px',
                display:'flex', alignItems:'center', gap:'8px',
                fontFamily:'Orbitron',
              }}>
                <div style={{ width:'2px', height:'12px', background:'var(--cyan)', boxShadow:'0 0 6px var(--cyan)' }} />
                {category}
              </div>
              <div className="skills-grid-layout">
                {skills.map(skill => (
                  <SkillCard key={skill.id} skill={skill} onClick={onSelectSkill} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
