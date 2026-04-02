const database = require('../config/database');
const Booking = require('../models/Booking');
const { buildInvoice } = require('../utils/invoiceGenerator');
const { buildBookingConfirmationTemplate } = require('../utils/emailTemplates');

const createBooking = (req, res) => {
  const booking = new Booking({
    ...req.validatedBody,
    status: 'confirmed',
    totalAmount: req.body.totalAmount || 2400
  });
  database.bookings.push(booking);
  const invoice = buildInvoice(booking);
  const email = buildBookingConfirmationTemplate(booking);
  res.status(201).json({ success: true, data: booking, meta: { invoice, email } });
};

const listBookings = (req, res) => {
  res.json({ success: true, data: database.bookings });
};

module.exports = {
  createBooking,
  listBookings
};
