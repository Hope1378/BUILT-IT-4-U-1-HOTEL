const buildInvoice = (booking) => ({
  invoiceNumber: 'INV-' + booking.id,
  issuedAt: new Date().toISOString(),
  amount: booking.totalAmount,
  currency: booking.currency,
  lineItems: [
    { label: 'Accommodation', amount: booking.totalAmount },
    { label: 'Reservation status', amount: 0, note: booking.status }
  ]
});

module.exports = {
  buildInvoice
};
