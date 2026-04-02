import './RoomFeatures.css';

const RoomFeatures = ({ room }) => {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="display-heading text-3xl text-ivory md:text-4xl">Residence Highlights</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Signature View</p>
          <p className="mt-3 text-lg text-ivory">{room.view}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Residence Size</p>
          <p className="mt-3 text-lg text-ivory">{room.size}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Guest Capacity</p>
          <p className="mt-3 text-lg text-ivory">{room.occupancy}</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Positioning</p>
          <p className="mt-3 text-lg text-ivory">{room.tag}</p>
        </div>
      </div>
    </section>
  );
};

export default RoomFeatures;
