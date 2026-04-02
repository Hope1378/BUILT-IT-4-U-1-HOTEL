import './ReservationForm.css';

const ReservationForm = () => {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h3 className="display-heading text-3xl text-ivory">Reserve A Table</h3>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" placeholder="Guest name" type="text" />
        <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" placeholder="Email" type="email" />
        <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" type="date" />
        <input className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" min="1" placeholder="Guests" type="number" />
      </div>
      <button className="mt-5 rounded-full bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian" type="button">Request Reservation</button>
    </div>
  );
};

export default ReservationForm;
