import './Step5GuestInfo.css';

const Step5GuestInfo = ({ form, updateField }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Full Name
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => updateField('guestName', event.target.value)} placeholder="Guest name" type="text" value={form.guestName} />
      </label>
      <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
        Email
        <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => updateField('guestEmail', event.target.value)} placeholder="name@email.com" type="email" value={form.guestEmail} />
      </label>
    </div>
  );
};

export default Step5GuestInfo;
