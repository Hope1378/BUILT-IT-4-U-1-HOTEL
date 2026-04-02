export const formatCurrency = (value, currency = 'USD') => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency,
  maximumFractionDigits: 0
}).format(value);

export const formatDateRange = (checkIn, checkOut) => {
  if (!checkIn || !checkOut) {
    return 'Select dates';
  }

  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(new Date(checkIn)) + ' - ' + new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric'
  }).format(new Date(checkOut));
};
