import { useEffect, useState } from 'react';
import { getPaymentOptions } from '../services/paymentService';

const usePayment = () => {
  const [methods, setMethods] = useState([]);

  useEffect(() => {
    getPaymentOptions().then(setMethods);
  }, []);

  return methods;
};

export default usePayment;
