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
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center', padding:'0 5%', overflowY:'auto' }}
    >
      <div style={{ width:'100%', maxWidth:'1000px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>Technical Arsenal</motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Outfit', fontWeight:'800', fontSize:'clamp(1.8rem,4vw,3rem)', color:'var(--text-light)', marginBottom:'22px', lineHeight:1 }}>
          Core <span className="gradient-text">Expertise</span>
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {Object.entries(grouped).map(([category, skills]) => (
            <motion.div key={category} style={{ marginBottom:'20px' }}>
              <div style={{
                fontSize:'0.55rem', letterSpacing:'0.22em', color:'var(--text-muted)',
                textTransform:'uppercase', marginBottom:'10px',
                borderLeft:'2px solid var(--primary-teal)', paddingLeft:'10px',
                fontFamily:'Inter', fontWeight:'500',
              }}>{category}</div>
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
