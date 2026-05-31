import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp } from '../utils/animationVariants.js';
import { PROJECTS } from '../data/knowledgeBase.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsGrid({ onSelectProject }) {
  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width:'100%', height:'100%', display:'flex', alignItems:'flex-start', justifyContent:'center', padding:'0 16px', overflowY:'auto' }}
    >
      <div style={{ width:'100%', maxWidth:'980px', paddingBottom:'16px' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'10px' }}>
          <div style={{ fontSize:'0.42rem', color:'var(--cyan-dim)', letterSpacing:'0.3em', fontFamily:'Orbitron', border:'1px solid rgba(0,180,255,0.2)', padding:'4px 10px', background:'rgba(0,180,255,0.04)' }}>
            ARCHIVE: DEPLOYMENTS / ACTIVE
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom:'10px' }}>
          Projects
        </motion.div>
        <motion.h2
          variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay:0.1 }}
          style={{ fontFamily:'Orbitron', fontWeight:'900', fontSize:'clamp(1.6rem,4vw,2.8rem)', color:'var(--text-primary)', marginBottom:'20px', lineHeight:1 }}
        >
          What I've <span style={{color:'var(--cyan)', textShadow:'0 0 20px rgba(0,212,255,0.4)'}}>Built</span>
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          {/* Featured */}
          <div style={{ marginBottom:'10px' }}>
            <ProjectCard project={PROJECTS[0]} onClick={onSelectProject} />
          </div>
          {/* Grid */}
          <div className="projects-grid-layout">
            {PROJECTS.slice(1).map(project => (
              <ProjectCard key={project.id} project={project} onClick={onSelectProject} />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
