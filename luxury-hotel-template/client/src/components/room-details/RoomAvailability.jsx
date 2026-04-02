import { useState } from 'react';
import { formatCurrency } from '../../utils/formatters';
import useAvailability from '../../hooks/useAvailability';
import useCurrency from '../../hooks/useCurrency';
import './RoomAvailability.css';

const RoomAvailability = ({ room }) => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const { result, checkAvailability } = useAvailability();
  const { currency } = useCurrency();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await checkAvailability({
      selectedRoomId: room.id,
      checkIn,
      checkOut
    });
  };

  return (
    <section className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
      <h2 className="display-heading text-3xl text-ivory md:text-4xl">Real-time Availability</h2>
      <form className="mt-6 grid gap-4 sm:grid-cols-2" onSubmit={handleSubmit}>
        <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
          Arrival
          <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => setCheckIn(event.target.value)} type="date" value={checkIn} />
        </label>
        <label className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/45">
          Departure
          <input className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-ivory outline-none" onChange={(event) => setCheckOut(event.target.value)} type="date" value={checkOut} />
        </label>
        <button className="rounded-full bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.24em] text-obsidian sm:col-span-2" type="submit">Check Availability</button>
      </form>
      {result?.data ? (
        <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-sm text-white/75">
          <p>Status: <span className="text-ivory">{result.data.available ? 'Available' : 'Minimum stay not met'}</span></p>
          <p className="mt-2">Recommended nightly rate: <span className="text-champagne">{formatCurrency(result.data.recommendedRate, currency)}</span></p>
        </div>
      ) : null}
    </section>
  );
};

export default RoomAvailability;
