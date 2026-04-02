import './GuestSelector.css';

const GuestSelector = () => {
  return (
    <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 text-white/70">
      <h3 className="display-heading text-3xl text-ivory">Guest Selector</h3>
      <p className="mt-3 leading-7">Guest counts, child policies, and room distribution can be handled here when the booking journey needs more detailed occupancy control.</p>
    </div>
  );
};

export default GuestSelector;
