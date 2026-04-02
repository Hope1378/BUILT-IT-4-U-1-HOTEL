import { motion, useReducedMotion } from 'framer-motion';
import './Section.css';

const Section = ({ children, className = '', id }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.section
      animate={{ opacity: 1, y: 0 }}
      id={id}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={['section-padding', className].join(' ')}
    >
      {children}
    </motion.section>
  );
};

export default Section;
