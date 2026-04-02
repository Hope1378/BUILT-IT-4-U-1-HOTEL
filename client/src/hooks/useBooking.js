import { useContext } from 'react';
import { BookingContext } from '../context/BookingContext';

const useBooking = () => useContext(BookingContext);

export default useBooking;
