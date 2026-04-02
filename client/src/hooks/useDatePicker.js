import { useMemo, useState } from 'react';

const useDatePicker = () => {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const nights = useMemo(() => {
    if (!checkIn || !checkOut) {
      return 0;
    }

    return Math.max(0, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000));
  }, [checkIn, checkOut]);

  return { checkIn, checkOut, setCheckIn, setCheckOut, nights };
};

export default useDatePicker;
