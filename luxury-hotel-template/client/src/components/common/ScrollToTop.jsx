import { useEffect } from 'react';
import { restoreScrollPosition, persistScrollPosition } from '../../utils/helpers';
import './ScrollToTop.css';

const ScrollToTop = () => {
  useEffect(() => {
    restoreScrollPosition();
    const onScroll = () => persistScrollPosition();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return null;
};

export default ScrollToTop;
