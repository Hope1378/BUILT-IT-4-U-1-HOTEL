import { createContext, useMemo, useState } from 'react';
import { initialBookingState } from './bookingLogic';

export const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [bookingState, setBookingState] = useState(initialBookingState);

  const value = useMemo(() => ({ bookingState, setBookingState }), [bookingState]);

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
};
