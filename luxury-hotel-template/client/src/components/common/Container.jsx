import './Container.css';

const Container = ({ children, className = '' }) => {
  return <div className={['mx-auto w-[min(92vw,1440px)]', className].join(' ')}>{children}</div>;
};

export default Container;
