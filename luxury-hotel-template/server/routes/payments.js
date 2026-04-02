const express = require('express');
const { createPaymentIntent, listPayments } = require('../controllers/paymentController');

const router = express.Router();

router.get('/', listPayments);
router.post('/intent', createPaymentIntent);

module.exports = router;
