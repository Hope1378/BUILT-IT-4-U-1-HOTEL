import { useMemo } from 'react';
import Step1Dates from './Step1Dates';
import Step2Guests from './Step2Guests';
import Step3RoomSelection from './Step3RoomSelection';
import Step4Extras from './Step4Extras';
import Step5GuestInfo from './Step5GuestInfo';
import Step6Payment from './Step6Payment';
import BookingConfirmation from './BookingConfirmation';
import useBookingWizard from '../../hooks/useBookingWizard';
import usePayment from '../../hooks/usePayment';
import { roomCollection } from '../../utils/roomData';
import './BookingWizard.css';

const BookingWizard = () => {
  const {
    step,
    form,
    error,
    submitting,
    confirmation,
    updateField,
    toggleExtra,
    next,
    previous,
    submit
  } = useBookingWizard();
  const paymentMethods = usePayment();
  const progressClass = {
    1: 'w-[14.285%]',
    2: 'w-[28.57%]',
    3: 'w-[42.855%]',
    4: 'w-[57.14%]',
    5: 'w-[71.425%]',
    6: 'w-[85.71%]',
    7: 'w-full'
  };

  const selectedRoom = useMemo(
    () => roomCollection.find((room) => room.id === form.selectedRoomId) || roomCollection[0],
    [form.selectedRoomId]
  );

  const totalAmount = useMemo(() => {
    const base = selectedRoom.price;
    const extrasTotal = form.extras.length * 120;
    const multiplier = form.paymentOption === 'deposit' ? 0.3 : 1;
    return Math.round((base + extrasTotal) * multiplier);
  }, [form.extras.length, form.paymentOption, selectedRoom.price]);

  const renderStep = () => {
    if (step === 1) return <Step1Dates form={form} updateField={updateField} />;
    if (step === 2) return <Step2Guests form={form} updateField={updateField} />;
    if (step === 3) return <Step3RoomSelection form={form} updateField={updateField} />;
    if (step === 4) return <Step4Extras form={form} toggleExtra={toggleExtra} />;
    if (step === 5) return <Step5GuestInfo form={form} updateField={updateField} />;
    if (step === 6) return <Step6Payment form={form} paymentMethods={paymentMethods} updateField={updateField} />;
    return <BookingConfirmation confirmation={confirmation} />;
  };

  return (
    <section className="grid gap-6 lg:grid-cols-[1fr,20rem]">
      <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8">
        <div className="mb-6">
          <p className="eyebrow text-champagne/75">Step {step} of 7</p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
            <div className={['h-full rounded-full bg-champagne transition-all duration-300', progressClass[step]].join(' ')} />
          </div>
        </div>
        {renderStep()}
        {error ? <p className="mt-5 text-sm text-red-300">{error}</p> : null}
        <div className="mt-7 flex flex-wrap gap-3">
          {step > 1 && step < 7 ? <button className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.22em] text-white" onClick={previous} type="button">Back</button> : null}
          {step < 6 ? <button className="rounded-full bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian" onClick={next} type="button">Continue</button> : null}
          {step === 6 ? <button className="rounded-full bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-obsidian" disabled={submitting} onClick={() => submit(totalAmount)} type="button">{submitting ? 'Processing...' : 'Confirm Booking'}</button> : null}
        </div>
      </div>
      <aside className="sticky top-24 h-fit rounded-[2rem] border border-white/10 bg-white/[0.03] p-6">
        <p className="eyebrow text-champagne/75">Booking Summary</p>
        <h3 className="mt-3 text-xl font-semibold text-ivory">{selectedRoom.name}</h3>
        <div className="mt-4 space-y-2 text-sm text-white/72">
          <p>Stay: {form.checkIn || 'Arrival'} - {form.checkOut || 'Departure'}</p>
          <p>Guests: {form.guests} · Rooms: {form.rooms}</p>
          <p>Extras: {form.extras.length}</p>
          <p>Payment: {form.paymentOption === 'deposit' ? '30% deposit' : 'Full payment'}</p>
        </div>
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="text-xs uppercase tracking-[0.2em] text-white/45">Amount due now</p>
          <p className="display-heading mt-2 text-4xl text-ivory">${totalAmount}</p>
        </div>
      </aside>
    </section>
  );
};

export default BookingWizard;
