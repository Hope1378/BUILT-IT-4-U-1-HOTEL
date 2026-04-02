import './RoomAmenitiesList.css';

const RoomAmenitiesList = ({ room }) => {
  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="display-heading text-3xl text-ivory md:text-4xl">Included Amenities</h2>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {room.amenities.map((amenity) => (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75" key={amenity}>
            {amenity}
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoomAmenitiesList;
