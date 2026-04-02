const express = require('express');
const { createBooking, listBookings } = require('../controllers/bookingController');
const { validateBookingBody } = require('../middleware/validation');

const router = express.Router();

router.get('/', listBookings);
router.post('/', validateBookingBody, createBooking);

module.exports = router;
