import './Step1Dates.css';

const Step1Dates = ({ form, updateField }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Arrival
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => updateField('checkIn', event.target.value)} type="date" value={form.checkIn} />
      </label>
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Departure
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => updateField('checkOut', event.target.value)} type="date" value={form.checkOut} />
      </label>
    </div>
  );
};

export default Step1Dates;
