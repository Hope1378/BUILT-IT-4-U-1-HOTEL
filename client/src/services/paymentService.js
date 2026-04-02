import { apiGet } from './api';

export const getPaymentOptions = async () => [
  'Card', 'Apple Pay', 'Google Pay', 'PayPal', 'Alipay', 'WeChat Pay'
];

export const getPayments = async () => {
  const response = await apiGet('/payments');
  return response.data || [];
};
