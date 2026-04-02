import { createContext, useMemo, useState } from 'react';
import { defaultCurrency } from './currencyLogic';

export const CurrencyContext = createContext(null);

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState(defaultCurrency);
  const value = useMemo(() => ({ currency, setCurrency }), [currency]);
  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};
