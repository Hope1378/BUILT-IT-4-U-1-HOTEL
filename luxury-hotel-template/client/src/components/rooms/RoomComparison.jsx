import './RoomComparison.css';

const RoomComparison = ({ rooms }) => {
  const comparisonGridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3'
  };

  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <div className="flex items-center justify-between gap-4">
        <h2 className="display-heading text-3xl text-ivory md:text-4xl">Room Comparison</h2>
        <span className="text-xs uppercase tracking-[0.2em] text-white/45">{rooms.length}/3 selected</span>
      </div>
      {rooms.length ? (
        <div className="mt-6 overflow-x-auto">
          <div className={['grid min-w-[42rem] gap-4', comparisonGridClass[rooms.length]].join(' ')}>
            {rooms.map((room) => (
              <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5" key={room.id}>
                <h3 className="text-lg font-semibold text-ivory">{room.name}</h3>
                <div className="mt-4 space-y-2 text-sm text-white/72">
                  <p>Rate: ${room.price}</p>
                  <p>Size: {room.size}</p>
                  <p>Occupancy: {room.occupancy}</p>
                  <p>View: {room.view}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : <p className="mt-4 text-sm text-white/65">Select residences from the grid to compare rate, size, and positioning side by side.</p>}
    </div>
  );
};

export default RoomComparison;
