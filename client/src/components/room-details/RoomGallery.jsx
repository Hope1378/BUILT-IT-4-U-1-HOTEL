import { motion } from 'framer-motion';
import useTouchGallery from '../../hooks/useTouchGallery';
import './RoomGallery.css';

const RoomGallery = ({ room }) => {
  const images = room.gallery.length ? room.gallery : [room.image];
  const {
    activeIndex,
    activeImage,
    zoom,
    offset,
    next,
    previous,
    goTo,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    resetGestureState
  } = useTouchGallery(images);

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 md:p-8">
      <div className="mb-5 flex items-center justify-between gap-4">
        <h2 className="display-heading text-3xl text-ivory md:text-4xl">Immersive Gallery</h2>
        <p className="text-xs uppercase tracking-[0.22em] text-white/45">Swipe on mobile • Pinch to zoom</p>
      </div>
      <div className="gallery-stage relative overflow-hidden rounded-[1.5rem] bg-obsidian/70">
        <motion.img
          animate={{ scale: zoom, x: offset.x, y: offset.y }}
          alt={room.name + ' gallery'}
          className="h-[19rem] w-full select-none object-cover md:h-[28rem]"
          onDoubleClick={resetGestureState}
          onTouchEnd={onTouchEnd}
          onTouchMove={onTouchMove}
          onTouchStart={onTouchStart}
          src={activeImage}
          transition={{ type: 'spring', stiffness: 220, damping: 26 }}
        />
        <button aria-label="Previous image" className="gallery-nav left-3" onClick={previous} type="button">Prev</button>
        <button aria-label="Next image" className="gallery-nav right-3" onClick={next} type="button">Next</button>
      </div>
      <div className="mt-5 grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            aria-label={room.name + ' image ' + (index + 1)}
            className={[
              'overflow-hidden rounded-xl border transition',
              index === activeIndex ? 'border-champagne' : 'border-white/10 hover:border-white/35'
            ].join(' ')}
            key={image + index}
            onClick={() => goTo(index)}
            type="button"
          >
            <img alt={room.name + ' preview'} className="h-20 w-full object-cover" src={image} />
          </button>
        ))}
      </div>
    </section>
  );
};

export default RoomGallery;
