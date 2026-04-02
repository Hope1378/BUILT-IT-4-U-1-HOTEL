import './BookingConfirmation.css';

const BookingConfirmation = ({ confirmation }) => {
  return (
    <div className="rounded-[2rem] border border-champagne/30 bg-champagne/10 p-6 md:p-8">
      <p className="eyebrow text-champagne">Reservation Confirmed</p>
      <h3 className="display-heading mt-4 text-4xl text-ivory">Booking reference {confirmation?.id}</h3>
      <p className="mt-3 text-sm leading-7 text-white/75">Your request has been received and prioritized by our reservations team. A personalized pre-arrival planning email will follow shortly.</p>
    </div>
  );
};

export default BookingConfirmation;
