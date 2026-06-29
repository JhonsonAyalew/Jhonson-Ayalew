import { motion } from 'framer-motion';
import { pageTransition, staggerContainer, fadeInUp } from '../utils/animationVariants.js';
import { PROJECTS } from '../data/knowledgeBase.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsGrid({ onSelectProject }) {
  return (
    <motion.div
      variants={pageTransition} initial="hidden" animate="visible" exit="exit"
      style={{ width: '100%', padding: '36px 5% 40px' }}
    >
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        <motion.div variants={fadeInUp} initial="hidden" animate="visible" className="section-label" style={{ marginBottom: '10px' }}>
          Case Studies
        </motion.div>
        <motion.h2 variants={fadeInUp} initial="hidden" animate="visible" transition={{ delay: 0.1 }}
          style={{ fontFamily: 'Outfit', fontWeight: '800', fontSize: 'clamp(1.8rem,4vw,3rem)', color: 'var(--text-light)', marginBottom: '24px', lineHeight: 1 }}>
          What I've <span className="gradient-text">Built</span>
        </motion.h2>

        <motion.div variants={staggerContainer} initial="hidden" animate="visible">
          <div style={{ marginBottom: '14px' }}>
            <ProjectCard project={PROJECTS[0]} onClick={onSelectProject} />
          </div>
          <div className="projects-grid-layout">
            {PROJECTS.slice(1).map(project => (
              <ProjectCard key={project.id} project={project} onClick={onSelectProject} compact />
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
