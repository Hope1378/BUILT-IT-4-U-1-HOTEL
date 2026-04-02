import GlassCard from '../common/GlassCard';
import Button from '../common/Button';
import useBooking from '../../hooks/useBooking';
import { formatDateRange } from '../../utils/formatters';
import './BookingWidget.css';

const BookingWidget = () => {
  const { bookingState, setBookingState } = useBooking();

  return (
    <GlassCard className="space-y-5 lg:ml-auto">
      <div>
        <p className="eyebrow text-champagne/80">Instant Availability</p>
        <h3 className="display-heading mt-3 text-4xl text-ivory">Reserve with confidence.</h3>
      </div>
      <div className="grid gap-4 text-sm text-white/75">
        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/45">Arrival</span>
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" name="checkIn" onChange={(event) => setBookingState((current) => ({ ...current, checkIn: event.target.value }))} type="date" value={bookingState.checkIn} />
        </label>
        <label className="space-y-2">
          <span className="uppercase tracking-[0.2em] text-white/45">Departure</span>
          <input className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none" name="checkOut" onChange={(event) => setBookingState((current) => ({ ...current, checkOut: event.target.value }))} type="date" value={bookingState.checkOut} />
        </label>
        <div className="rounded-2xl border border-champagne/20 bg-white/5 px-4 py-4">
          <p className="text-xs uppercase tracking-[0.24em] text-champagne/80">Selected stay</p>
          <p className="mt-2 text-lg text-ivory">{formatDateRange(bookingState.checkIn, bookingState.checkOut)}</p>
        </div>
      </div>
      <Button href="/booking">Continue Booking</Button>
    </GlassCard>
  );
};

export default BookingWidget;
