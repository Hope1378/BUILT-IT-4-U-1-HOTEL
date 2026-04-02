import { roomCollection } from '../../utils/roomData';
import './Step3RoomSelection.css';

const Step3RoomSelection = ({ form, updateField }) => {
  return (
    <div className="grid gap-3">
      {roomCollection.map((room) => (
        <button
          className={[
            'rounded-2xl border px-4 py-4 text-left transition',
            form.selectedRoomId === room.id ? 'border-champagne bg-champagne/10' : 'border-white/10 bg-white/[0.03] hover:border-white/35'
          ].join(' ')}
          key={room.id}
          onClick={() => updateField('selectedRoomId', room.id)}
          type="button"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/45">{room.tag}</p>
          <h4 className="mt-2 text-lg font-semibold text-ivory">{room.name}</h4>
          <p className="mt-2 text-sm text-white/68">{room.description}</p>
        </button>
      ))}
    </div>
  );
};

export default Step3RoomSelection;
