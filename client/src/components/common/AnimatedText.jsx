import { motion } from 'framer-motion';
import { fadeUp } from '../../utils/animationVariants';
import './AnimatedText.css';

const AnimatedText = ({ children, className = '' }) => {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.4 }} className={className}>{children}</motion.div>;
};

export default AnimatedText;
