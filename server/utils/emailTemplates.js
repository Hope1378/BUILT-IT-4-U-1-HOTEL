const buildBookingConfirmationTemplate = (booking) => ({
  subject: 'Your Aurelia Grand reservation request',
  html: '<h1>Reservation received</h1><p>Booking reference: ' + booking.id + '</p><p>Status: ' + booking.status + '</p>'
});

const buildContactTemplate = (contact) => ({
  subject: 'New contact enquiry from ' + contact.name,
  html: '<p>Topic: ' + contact.topic + '</p><p>' + contact.message + '</p>'
});

module.exports = {
  buildBookingConfirmationTemplate,
  buildContactTemplate
};
