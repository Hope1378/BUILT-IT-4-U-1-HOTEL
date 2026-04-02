const environment = require('./environment');

const createPaymentIntentPayload = (booking) => ({
  provider: 'stripe',
  publishableKey: environment.stripePublicKey,
  amount: booking.totalAmount,
  currency: booking.currency || 'USD',
  captureMethod: booking.paymentOption === 'deposit' ? 'manual' : 'automatic',
  paymentMethods: ['card', 'apple_pay', 'google_pay', 'paypal', 'alipay', 'wechat_pay']
});

module.exports = {
  createPaymentIntentPayload
};
