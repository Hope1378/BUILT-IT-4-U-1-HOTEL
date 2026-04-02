import './RoomHero.css';

const RoomHero = ({ room }) => {
  return (
    <section className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]">
      <div className="relative h-[22rem] md:h-[30rem]">
        <img alt={room.name} className="h-full w-full object-cover" src={room.image} />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <p className="eyebrow text-champagne/80">{room.tag}</p>
          <h1 className="display-heading mt-4 text-4xl text-ivory md:text-6xl">{room.name}</h1>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-white/78 md:text-base">{room.description}</p>
        </div>
      </div>
      <div className="grid gap-4 border-t border-white/10 p-6 text-xs uppercase tracking-[0.2em] text-white/55 sm:grid-cols-3 md:p-8">
        <div>{room.size}</div>
        <div>{room.occupancy}</div>
        <div>{room.view}</div>
      </div>
    </section>
  );
};

export default RoomHero;
