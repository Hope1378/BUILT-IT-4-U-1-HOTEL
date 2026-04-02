import './Step2Guests.css';

const Step2Guests = ({ form, updateField }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Guests
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" min="1" onChange={(event) => updateField('guests', event.target.value)} type="number" value={form.guests} />
      </label>
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Rooms
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" min="1" onChange={(event) => updateField('rooms', event.target.value)} type="number" value={form.rooms} />
      </label>
    </div>
  );
};

export default Step2Guests;
