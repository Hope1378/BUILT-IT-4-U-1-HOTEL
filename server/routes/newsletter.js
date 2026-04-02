const express = require('express');
const { subscribe } = require('../controllers/newsletterController');
const { validateNewsletterBody } = require('../middleware/validation');

const router = express.Router();

router.post('/', validateNewsletterBody, subscribe);

module.exports = router;
