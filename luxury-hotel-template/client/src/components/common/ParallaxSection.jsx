import './ParallaxSection.css';

const ParallaxSection = ({ children, className = '' }) => {
  return <div className={['relative overflow-hidden', className].join(' ')}>{children}</div>;
};

export default ParallaxSection;
