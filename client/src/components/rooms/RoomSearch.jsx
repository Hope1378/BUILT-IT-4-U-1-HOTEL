import './RoomSearch.css';

const RoomSearch = ({ query, setQuery }) => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
      <label className="block space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Search residences
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => setQuery(event.target.value)} placeholder="Ocean view, family, butler, skyline..." type="text" value={query} />
      </label>
    </div>
  );
};

export default RoomSearch;
