import './VirtualTour.css';

const VirtualTour = ({ room }) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <div className="grid gap-0 md:grid-cols-[1.1fr,.9fr]">
        <img alt={room.name + ' virtual tour'} className="h-64 w-full object-cover md:h-full" src={room.image} />
        <div className="p-6 md:p-8">
          <p className="eyebrow text-champagne/75">360° Immersive Tour</p>
          <h2 className="display-heading mt-4 text-3xl text-ivory md:text-4xl">Explore before arrival.</h2>
          <p className="mt-3 text-sm leading-7 text-white/72">Guests can preview every zone of the residence with a guided virtual walkthrough designed for confidence and anticipation.</p>
          <button className="mt-6 rounded-full border border-champagne/30 px-5 py-3 text-xs uppercase tracking-[0.22em] text-champagne" type="button">Launch Virtual Tour</button>
        </div>
      </div>
    </section>
  );
};

export default VirtualTour;
