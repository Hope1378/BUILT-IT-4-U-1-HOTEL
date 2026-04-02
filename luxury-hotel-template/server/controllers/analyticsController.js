const database = require('../config/database');

const getDashboard = (req, res) => {
  res.json({
    success: true,
    data: {
      ...database.analytics,
      activeBookings: database.bookings.length,
      activePayments: database.payments.length,
      subscribers: database.newsletter.length,
      enquiries: database.contacts.length
    }
  });
};

module.exports = {
  getDashboard
};
