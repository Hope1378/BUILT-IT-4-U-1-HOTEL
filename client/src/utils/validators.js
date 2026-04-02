export const isEmailValid = (value) => /\S+@\S+\.\S+/.test(value);

export const isPhoneValid = (value) => /^[ds+()-]{7,}$/.test(value || '');

export const validateBookingDates = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) {
    return false;
  }

  return new Date(checkOut).getTime() > new Date(checkIn).getTime();
};
