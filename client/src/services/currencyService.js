const exchange = {
  USD: 1,
  EUR: 0.91,
  GBP: 0.78,
  AED: 3.67,
  JPY: 152
};

export const convertPrice = (amount, currency) => Math.round(amount * (exchange[currency] || 1));
