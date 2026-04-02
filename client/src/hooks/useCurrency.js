import { useContext } from 'react';
import { CurrencyContext } from '../context/CurrencyContext';

const useCurrency = () => useContext(CurrencyContext);

export default useCurrency;
