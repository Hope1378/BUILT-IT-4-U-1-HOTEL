import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const useAnimation = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(ref.current, { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' });
    }
  }, []);

  return ref;
};

export default useAnimation;
