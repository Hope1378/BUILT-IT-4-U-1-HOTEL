import './RoomFilters.css';

const RoomFilters = ({ viewFilter, setViewFilter, occupancyFilter, setOccupancyFilter }) => {
  return (
    <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:grid-cols-2">
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        View type
        <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => setViewFilter(event.target.value)} value={viewFilter}>
          <option value="all">All views</option>
          <option value="ocean">Ocean</option>
          <option value="skyline">Skyline</option>
          <option value="garden">Garden</option>
          <option value="lagoon">Lagoon</option>
        </select>
      </label>
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Minimum occupancy
        <select className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => setOccupancyFilter(event.target.value)} value={occupancyFilter}>
          <option value="all">Any</option>
          <option value="2">2 guests</option>
          <option value="3">3 guests</option>
          <option value="4">4 guests</option>
          <option value="5">5 guests</option>
        </select>
      </label>
    </div>
  );
};

export default RoomFilters;
