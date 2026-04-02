import { useState } from 'react';
import { requestAvailability } from '../services/bookingService';

const useAvailability = () => {
  const [result, setResult] = useState(null);

  const checkAvailability = async (payload) => {
    const data = await requestAvailability(payload);
    setResult(data);
  };

  return { result, checkAvailability };
};

export default useAvailability;
