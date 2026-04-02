const database = require('../config/database');
const Payment = require('../models/Payment');
const { createPaymentIntentPayload } = require('../config/stripe');

const createPaymentIntent = (req, res) => {
  const payment = new Payment({
    bookingId: req.body.bookingId,
    amount: req.body.amount,
    currency: req.body.currency,
    status: 'requires_capture'
  });
  database.payments.push(payment);
  res.status(201).json({ success: true, data: payment, intent: createPaymentIntentPayload({ totalAmount: payment.amount, currency: payment.currency, paymentOption: req.body.paymentOption }) });
};

const listPayments = (req, res) => {
  res.json({ success: true, data: database.payments });
};

module.exports = {
  createPaymentIntent,
  listPayments
};
