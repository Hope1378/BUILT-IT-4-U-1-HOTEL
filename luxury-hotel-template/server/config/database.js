const { roomSeed } = require('../models/Room');
const { reviewSeed } = require('../models/Review');

const database = {
  bookings: [],
  payments: [],
  contacts: [],
  newsletter: [],
  availability: [],
  rooms: roomSeed,
  reviews: reviewSeed,
  analytics: {
    pageViews: 48720,
    conversionRate: 4.6,
    averageBookingValue: 2840,
    bookingRequestsToday: 16,
    revenueProjection: 182400
  }
};

module.exports = database;
