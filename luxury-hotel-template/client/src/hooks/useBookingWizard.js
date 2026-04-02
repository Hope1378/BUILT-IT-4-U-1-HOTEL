import { useState } from 'react';
import { submitBooking } from '../services/bookingService';

const useBookingWizard = () => {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [confirmation, setConfirmation] = useState(null);

  const [form, setForm] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    rooms: 1,
    selectedRoomId: 'presidential-suite',
    extras: [],
    guestName: '',
    guestEmail: '',
    currency: 'USD',
    paymentOption: 'deposit'
  });

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const toggleExtra = (value) => {
    setForm((current) => {
      const hasExtra = current.extras.includes(value);
      return {
        ...current,
        extras: hasExtra ? current.extras.filter((item) => item !== value) : [...current.extras, value]
      };
    });
  };

  const next = () => {
    setError('');
    setStep((current) => Math.min(7, current + 1));
  };

  const previous = () => {
    setError('');
    setStep((current) => Math.max(1, current - 1));
  };

  const submit = async (totalAmount) => {
    setSubmitting(true);
    setError('');
    try {
      const payload = {
        selectedRoomId: form.selectedRoomId,
        checkIn: form.checkIn,
        checkOut: form.checkOut,
        guests: Number(form.guests),
        rooms: Number(form.rooms),
        extras: form.extras,
        guest: {
          name: form.guestName,
          email: form.guestEmail
        },
        currency: form.currency,
        paymentOption: form.paymentOption,
        totalAmount
      };

      const response = await submitBooking(payload);
      if (!response.success) {
        throw new Error('Booking request failed. Please review your details and try again.');
      }

      setConfirmation(response.data);
      setStep(7);
    } catch (requestError) {
      setError(requestError.message || 'Unable to complete booking right now.');
    } finally {
      setSubmitting(false);
    }
  };

  return {
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
  };
};

export default useBookingWizard;
