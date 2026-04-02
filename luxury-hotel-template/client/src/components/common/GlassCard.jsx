import './GlassCard.css';

const GlassCard = ({ children, className = '' }) => {
  return <div className={['glass-panel rounded-[2rem] p-6 md:p-8', className].join(' ')}>{children}</div>;
};

export default GlassCard;
