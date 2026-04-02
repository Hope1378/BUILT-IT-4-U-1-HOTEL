import { useEffect, useState } from 'react';
import { localMedia } from '../../utils/localMedia';
import './VideoHero.css';

const mobileObjectPositions = ['center 30%', 'center 26%', 'center 24%'];

const VideoHero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % localMedia.heroSlides.length);
    }, 7000);

    return () => {
      window.clearInterval(timerId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {localMedia.heroSlides.map((image, index) => (
        <img
          alt="Aurelia Grand hero scene"
          className={[
            'videohero-image absolute inset-0 h-full w-full object-cover transition-opacity duration-[2200ms]',
            index === activeIndex ? 'opacity-50' : 'opacity-0'
          ].join(' ')}
          key={image}
          src={image}
          style={{ '--mobile-object-position': mobileObjectPositions[index] }}
        />
      ))}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-x-0 bottom-0 top-0 bg-[radial-gradient(circle_at_20%_20%,rgba(231,216,174,.2),transparent_22%),radial-gradient(circle_at_76%_32%,rgba(34,75,73,.26),transparent_26%)]" />
    </div>
  );
};

export default VideoHero;
