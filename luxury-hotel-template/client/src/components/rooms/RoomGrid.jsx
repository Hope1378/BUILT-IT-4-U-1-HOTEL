import RoomCard from './RoomCard';
import './RoomGrid.css';

const RoomGrid = ({ rooms, compareIds, toggleCompare }) => {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">{rooms.length} residences available</p>
        <p className="text-xs uppercase tracking-[0.2em] text-white/45">Compare up to 3</p>
      </div>
      <div className="grid gap-6 xl:grid-cols-2">
        {rooms.map((room) => (
          <div key={room.id} className="space-y-3">
            <RoomCard room={room} />
            <button className={['rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition', compareIds.includes(room.id) ? 'border-champagne bg-champagne/10 text-champagne' : 'border-white/15 text-white/70 hover:border-white/35'].join(' ')} onClick={() => toggleCompare(room.id)} type="button">
              {compareIds.includes(room.id) ? 'Selected For Compare' : 'Add To Compare'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomGrid;
