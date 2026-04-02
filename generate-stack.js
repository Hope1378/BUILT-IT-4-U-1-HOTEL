const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'luxury-hotel-template');

const ensureDir = (dirPath) => fs.mkdirSync(dirPath, { recursive: true });
const write = (relativePath, content) => {
  const fullPath = path.join(root, relativePath);
  ensureDir(path.dirname(fullPath));
  fs.writeFileSync(fullPath, content.replace(/\n/g, '\r\n'));
};
const writeBinaryStub = (relativePath) => {
  const fullPath = path.join(root, relativePath);
  ensureDir(path.dirname(fullPath));
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, '');
  }
};

const files = {
  'server/package.json': `{
  "name": "luxury-hotel-template-server",
  "version": "1.0.0",
  "private": true,
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "node --watch index.js",
    "check": "node --check index.js"
  },
  "dependencies": {
    "compression": "^1.8.1",
    "cors": "^2.8.5",
    "dotenv": "^16.6.1",
    "express": "^4.21.2",
    "express-rate-limit": "^7.5.0",
    "helmet": "^7.2.0",
    "morgan": "^1.10.0"
  }
}
`,
  'server/config/environment.js': `const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const environment = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  stripePublicKey: process.env.STRIPE_PUBLIC_KEY || 'pk_test_luxury_template',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_luxury_template',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  databaseUrl: process.env.DATABASE_URL || 'memory://luxury-hotel-template',
  emailFrom: process.env.EMAIL_FROM || 'reservations@aureliagrand.com'
};

module.exports = environment;
`,
  'server/config/database.js': `const { roomSeed } = require('../models/Room');
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
`,
  'server/config/stripe.js': `const environment = require('./environment');

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
`,
  'server/config/redis.js': `const environment = require('./environment');

const redis = {
  url: environment.redisUrl,
  enabled: environment.nodeEnv === 'production'
};

module.exports = redis;
`,
  'server/config/email.js': `const environment = require('./environment');

const emailConfig = {
  from: environment.emailFrom,
  transport: environment.nodeEnv === 'production' ? 'smtp' : 'console'
};

module.exports = emailConfig;
`,
  'server/models/Room.js': `class Room {
  constructor(payload) {
    Object.assign(this, payload);
  }
}

const roomSeed = [
  new Room({
    id: 'presidential-suite',
    name: 'Presidential Horizon Suite',
    category: 'Signature Stay',
    occupancy: 4,
    baseRate: 3400,
    squareMeters: 240,
    view: 'Panoramic ocean',
    beds: '2 king beds',
    status: 'available',
    amenities: ['Private butler', 'Cinema lounge', 'Spa bath', 'Sunrise terrace'],
    minimumStay: 2
  }),
  new Room({
    id: 'royal-suite',
    name: 'Royal Aurelia Suite',
    category: 'Royal Collection',
    occupancy: 3,
    baseRate: 2100,
    squareMeters: 168,
    view: 'Skyline and gardens',
    beds: '1 king bed',
    status: 'available',
    amenities: ['Club access', 'Arrival ritual', 'Dressing gallery'],
    minimumStay: 2
  }),
  new Room({
    id: 'deluxe-ocean-view',
    name: 'Deluxe Ocean View Room',
    category: 'Resort Escape',
    occupancy: 2,
    baseRate: 980,
    squareMeters: 72,
    view: 'Oceanfront',
    beds: '1 king bed',
    status: 'available',
    amenities: ['Breakfast atelier', 'Balcony daybed', 'Turndown ritual'],
    minimumStay: 1
  }),
  new Room({
    id: 'luxury-family-suite',
    name: 'Luxury Family Residence',
    category: 'Intergenerational',
    occupancy: 5,
    baseRate: 1650,
    squareMeters: 190,
    view: 'Lagoon gardens',
    beds: '2 king beds + twins',
    status: 'available',
    amenities: ['Family concierge', 'Game alcove', 'Kitchenette'],
    minimumStay: 3
  })
];

module.exports = {
  Room,
  roomSeed
};
`,
  'server/models/Booking.js': `const { randomUUID } = require('crypto');

class Booking {
  constructor(payload) {
    this.id = payload.id || randomUUID().slice(0, 10);
    this.checkIn = payload.checkIn;
    this.checkOut = payload.checkOut;
    this.guests = Number(payload.guests || 2);
    this.rooms = Number(payload.rooms || 1);
    this.selectedRoomId = payload.selectedRoomId;
    this.extras = payload.extras || [];
    this.guest = payload.guest || {};
    this.currency = payload.currency || 'USD';
    this.paymentOption = payload.paymentOption || 'deposit';
    this.totalAmount = Number(payload.totalAmount || 0);
    this.status = payload.status || 'pending';
    this.createdAt = payload.createdAt || new Date().toISOString();
  }
}

module.exports = Booking;
`,
  'server/models/Payment.js': `const { randomUUID } = require('crypto');

class Payment {
  constructor(payload) {
    this.id = payload.id || randomUUID().slice(0, 10);
    this.bookingId = payload.bookingId;
    this.amount = payload.amount;
    this.currency = payload.currency || 'USD';
    this.status = payload.status || 'requires_action';
    this.provider = payload.provider || 'stripe';
    this.createdAt = payload.createdAt || new Date().toISOString();
  }
}

module.exports = Payment;
`,
  'server/models/Review.js': `class Review {
  constructor(payload) {
    Object.assign(this, payload);
  }
}

const reviewSeed = [
  new Review({ id: 'r1', guest: 'Eleanor Vance', rating: 5, title: 'Effortless excellence', quote: 'The digital experience feels as refined as the property itself.', approved: true }),
  new Review({ id: 'r2', guest: 'Ryo Nakamura', rating: 5, title: 'Beautifully restrained', quote: 'The booking flow and service framing are exceptional.', approved: true })
];

module.exports = {
  Review,
  reviewSeed
};
`,
  'server/models/Newsletter.js': `const { randomUUID } = require('crypto');

class Newsletter {
  constructor(payload) {
    this.id = payload.id || randomUUID().slice(0, 8);
    this.email = payload.email;
    this.segment = payload.segment || 'general';
    this.createdAt = payload.createdAt || new Date().toISOString();
  }
}

module.exports = Newsletter;
`,
  'server/models/Contact.js': `const { randomUUID } = require('crypto');

class Contact {
  constructor(payload) {
    this.id = payload.id || randomUUID().slice(0, 8);
    this.name = payload.name;
    this.email = payload.email;
    this.phone = payload.phone || '';
    this.topic = payload.topic || 'general';
    this.message = payload.message;
    this.createdAt = payload.createdAt || new Date().toISOString();
  }
}

module.exports = Contact;
`,
  'server/models/Availability.js': `class Availability {
  constructor(payload) {
    this.roomId = payload.roomId;
    this.checkIn = payload.checkIn;
    this.checkOut = payload.checkOut;
    this.available = payload.available;
    this.minimumStay = payload.minimumStay;
    this.recommendedRate = payload.recommendedRate;
  }
}

module.exports = Availability;
`,
  'server/utils/availabilityChecker.js': `const Availability = require('../models/Availability');
const { seasonalPricing } = require('../../shared/pricingTiers');

const countNights = (checkIn, checkOut) => Math.max(0, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000));

const getSeasonMultiplier = (dateValue) => {
  const month = new Date(dateValue).getUTCMonth() + 1;
  if (month >= 6 && month <= 8) {
    return seasonalPricing.peak.multiplier;
  }
  if (month === 12 || month <= 1) {
    return seasonalPricing.festive.multiplier;
  }
  return seasonalPricing.signature.multiplier;
};

const buildAvailabilityResponse = (room, payload) => {
  const nights = countNights(payload.checkIn, payload.checkOut);
  const multiplier = getSeasonMultiplier(payload.checkIn);
  const recommendedRate = Math.round(room.baseRate * multiplier);
  return new Availability({
    roomId: room.id,
    checkIn: payload.checkIn,
    checkOut: payload.checkOut,
    available: nights >= room.minimumStay,
    minimumStay: room.minimumStay,
    recommendedRate
  });
};

module.exports = {
  countNights,
  buildAvailabilityResponse
};
`,
  'server/utils/emailTemplates.js': `const buildBookingConfirmationTemplate = (booking) => ({
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
`,
  'server/utils/invoiceGenerator.js': `const buildInvoice = (booking) => ({
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
`,
  'server/middleware/errorHandler.js': `const errorHandler = (error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    message: error.message || 'Unexpected server error'
  });
};

module.exports = errorHandler;
`,
  'server/middleware/rateLimiter.js': `const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 250,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please try again shortly.'
  }
});

module.exports = {
  apiLimiter
};
`,
  'server/middleware/cache.js': `const cacheControl = (seconds = 120) => (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=' + seconds);
  next();
};

module.exports = {
  cacheControl
};
`,
  'server/middleware/security.js': `const helmet = require('helmet');
const cors = require('cors');
const environment = require('../config/environment');

const securityHeaders = helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
});

const corsPolicy = cors({
  origin: [environment.clientUrl],
  credentials: true
});

module.exports = {
  securityHeaders,
  corsPolicy
};
`,
  'server/middleware/validation.js': `const { validateBookingPayload, validateContactPayload, validateNewsletterPayload } = require('../../shared/validation');

const validateBody = (validator) => (req, res, next) => {
  const result = validator(req.body || {});

  if (!result.valid) {
    return res.status(400).json({ success: false, errors: result.errors });
  }

  req.validatedBody = result.data;
  return next();
};

module.exports = {
  validateBookingBody: validateBody(validateBookingPayload),
  validateContactBody: validateBody(validateContactPayload),
  validateNewsletterBody: validateBody(validateNewsletterPayload)
};
`,
  'shared/constants.js': `const supportedCurrencies = ['USD', 'EUR', 'GBP', 'AED', 'JPY'];
const supportedLanguages = ['en', 'es', 'fr', 'de', 'it', 'pt', 'ar', 'zh', 'ja', 'ko', 'ru', 'nl'];
const paymentMethods = ['card', 'apple_pay', 'google_pay', 'paypal', 'alipay', 'wechat_pay'];

module.exports = {
  supportedCurrencies,
  supportedLanguages,
  paymentMethods
};
`,
  'shared/validation.js': `const isEmail = (value) => /\\S+@\\S+\\.\\S+/.test(value || '');
const isDate = (value) => !Number.isNaN(new Date(value).getTime());

const validateBookingPayload = (payload) => {
  const errors = [];
  if (!payload.selectedRoomId) errors.push('selectedRoomId is required');
  if (!isDate(payload.checkIn)) errors.push('checkIn must be a valid date');
  if (!isDate(payload.checkOut)) errors.push('checkOut must be a valid date');
  if (!payload.guest || !payload.guest.name) errors.push('guest.name is required');
  if (!payload.guest || !isEmail(payload.guest.email)) errors.push('guest.email must be valid');
  return { valid: errors.length === 0, errors, data: payload };
};

const validateContactPayload = (payload) => {
  const errors = [];
  if (!payload.name) errors.push('name is required');
  if (!isEmail(payload.email)) errors.push('email must be valid');
  if (!payload.message) errors.push('message is required');
  return { valid: errors.length === 0, errors, data: payload };
};

const validateNewsletterPayload = (payload) => {
  const errors = [];
  if (!isEmail(payload.email)) errors.push('email must be valid');
  return { valid: errors.length === 0, errors, data: payload };
};

module.exports = {
  validateBookingPayload,
  validateContactPayload,
  validateNewsletterPayload
};
`,
  'shared/roomTypes.js': `module.exports = [
  'Presidential Horizon Suite',
  'Royal Aurelia Suite',
  'Deluxe Ocean View Room',
  'Luxury Family Residence'
];
`,
  'shared/amenities.js': `module.exports = [
  'Private butler',
  'Michelin-level dining',
  'Destination spa',
  'Airport limousine',
  'Private yacht charter',
  'Children concierge',
  'Accessibility support'
];
`,
  'shared/pricingTiers.js': `const seasonalPricing = {
  peak: { multiplier: 1.28 },
  festive: { multiplier: 1.42 },
  signature: { multiplier: 1.08 }
};

module.exports = {
  seasonalPricing
};
`,
  'server/controllers/roomController.js': `const database = require('../config/database');

const listRooms = (req, res) => {
  res.json({ success: true, data: database.rooms });
};

const getRoomById = (req, res) => {
  const room = database.rooms.find((item) => item.id === req.params.roomId);
  if (!room) {
    return res.status(404).json({ success: false, message: 'Room not found' });
  }
  return res.json({ success: true, data: room });
};

module.exports = {
  listRooms,
  getRoomById
};
`,
  'server/controllers/availabilityController.js': `const database = require('../config/database');
const { buildAvailabilityResponse } = require('../utils/availabilityChecker');

const checkAvailability = (req, res) => {
  const room = database.rooms.find((item) => item.id === req.body.selectedRoomId) || database.rooms[0];
  const availability = buildAvailabilityResponse(room, req.body);
  database.availability.push(availability);
  res.json({ success: true, data: availability });
};

module.exports = {
  checkAvailability
};
`,
  'server/controllers/bookingController.js': `const database = require('../config/database');
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
`,
  'server/controllers/paymentController.js': `const database = require('../config/database');
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
`,
  'server/controllers/reviewController.js': `const database = require('../config/database');

const listReviews = (req, res) => {
  const approved = database.reviews.filter((review) => review.approved);
  res.json({ success: true, data: approved });
};

module.exports = {
  listReviews
};
`,
  'server/controllers/newsletterController.js': `const database = require('../config/database');
const Newsletter = require('../models/Newsletter');

const subscribe = (req, res) => {
  const entry = new Newsletter(req.validatedBody);
  database.newsletter.push(entry);
  res.status(201).json({ success: true, data: entry });
};

module.exports = {
  subscribe
};
`,
  'server/controllers/contactController.js': `const database = require('../config/database');
const Contact = require('../models/Contact');
const { buildContactTemplate } = require('../utils/emailTemplates');

const submitContact = (req, res) => {
  const contact = new Contact(req.validatedBody);
  database.contacts.push(contact);
  res.status(201).json({ success: true, data: contact, email: buildContactTemplate(contact) });
};

module.exports = {
  submitContact
};
`,
  'server/controllers/analyticsController.js': `const database = require('../config/database');

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
`,
  'server/routes/rooms.js': `const express = require('express');
const { listRooms, getRoomById } = require('../controllers/roomController');
const { cacheControl } = require('../middleware/cache');

const router = express.Router();

router.get('/', cacheControl(300), listRooms);
router.get('/:roomId', cacheControl(300), getRoomById);

module.exports = router;
`,
  'server/routes/availability.js': `const express = require('express');
const { checkAvailability } = require('../controllers/availabilityController');

const router = express.Router();

router.post('/check', checkAvailability);

module.exports = router;
`,
  'server/routes/bookings.js': `const express = require('express');
const { createBooking, listBookings } = require('../controllers/bookingController');
const { validateBookingBody } = require('../middleware/validation');

const router = express.Router();

router.get('/', listBookings);
router.post('/', validateBookingBody, createBooking);

module.exports = router;
`,
  'server/routes/payments.js': `const express = require('express');
const { createPaymentIntent, listPayments } = require('../controllers/paymentController');

const router = express.Router();

router.get('/', listPayments);
router.post('/intent', createPaymentIntent);

module.exports = router;
`,
  'server/routes/reviews.js': `const express = require('express');
const { listReviews } = require('../controllers/reviewController');

const router = express.Router();

router.get('/', listReviews);

module.exports = router;
`,
  'server/routes/newsletter.js': `const express = require('express');
const { subscribe } = require('../controllers/newsletterController');
const { validateNewsletterBody } = require('../middleware/validation');

const router = express.Router();

router.post('/', validateNewsletterBody, subscribe);

module.exports = router;
`,
  'server/routes/contact.js': `const express = require('express');
const { submitContact } = require('../controllers/contactController');
const { validateContactBody } = require('../middleware/validation');

const router = express.Router();

router.post('/', validateContactBody, submitContact);

module.exports = router;
`,
  'server/index.js': `const express = require('express');
const compression = require('compression');
const morgan = require('morgan');
const environment = require('./config/environment');
const { apiLimiter } = require('./middleware/rateLimiter');
const { securityHeaders, corsPolicy } = require('./middleware/security');
const errorHandler = require('./middleware/errorHandler');
const bookingsRouter = require('./routes/bookings');
const paymentsRouter = require('./routes/payments');
const roomsRouter = require('./routes/rooms');
const availabilityRouter = require('./routes/availability');
const reviewsRouter = require('./routes/reviews');
const newsletterRouter = require('./routes/newsletter');
const contactRouter = require('./routes/contact');
const { getDashboard } = require('./controllers/analyticsController');

const app = express();

app.use(securityHeaders);
app.use(corsPolicy);
app.use(compression());
app.use(express.json({ limit: '1mb' }));
app.use(morgan(environment.nodeEnv === 'production' ? 'combined' : 'dev'));
app.use('/api', apiLimiter);

app.get('/api/health', (req, res) => {
  res.json({ success: true, status: 'ok', environment: environment.nodeEnv });
});

app.get('/api/analytics/dashboard', getDashboard);
app.use('/api/bookings', bookingsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/rooms', roomsRouter);
app.use('/api/availability', availabilityRouter);
app.use('/api/reviews', reviewsRouter);
app.use('/api/newsletter', newsletterRouter);
app.use('/api/contact', contactRouter);

app.use(errorHandler);

app.listen(environment.port, () => {
  console.log('Aurelia server listening on port ' + environment.port);
});
`,
  'documentation/README.md': `# Aurelia Grand Luxury Hotel Template

A premium React and Node full-stack hotel template designed for ultra-luxury hospitality brands. The project includes a cinematic frontend, structured booking APIs, shared validation, and deployment-ready baseline configuration.

## Included

- React client with Tailwind, Framer Motion, and GSAP-ready architecture
- Express API for rooms, availability, bookings, payments, newsletter, contact, and analytics
- Shared validation and domain constants
- Docker and local environment configuration
- Documentation for installation, customization, API usage, and deployment
`,
  'documentation/INSTALLATION.md': `# Installation

## Prerequisites

- Node.js 20+
- npm 10+

## Client

1. Open the client directory.
2. Run npm install.
3. Run npm start for local development.

## Server

1. Open the server directory.
2. Run npm install.
3. Copy .env.example to .env if needed.
4. Run npm start.
`,
  'documentation/CUSTOMIZATION.md': `# Customization

## Brand Layer

Update the visual identity in client/public/images/brand and the typography/color system in client/src/styles.

## Content Layer

The current room, testimonial, and experience content lives in client/src/utils/roomData.js and server/models/Room.js.

## API Layer

Replace the in-memory data store in server/config/database.js with a persistent database adapter when moving into production.
`,
  'documentation/API.md': `# API

## Endpoints

- GET /api/health
- GET /api/analytics/dashboard
- GET /api/rooms
- GET /api/rooms/:roomId
- POST /api/availability/check
- GET /api/bookings
- POST /api/bookings
- GET /api/payments
- POST /api/payments/intent
- GET /api/reviews
- POST /api/newsletter
- POST /api/contact

## Example Booking Payload

{
  "selectedRoomId": "presidential-suite",
  "checkIn": "2026-06-14",
  "checkOut": "2026-06-17",
  "guests": 2,
  "rooms": 1,
  "guest": {
    "name": "Isabella Hart",
    "email": "isabella@example.com"
  },
  "currency": "USD",
  "paymentOption": "deposit",
  "totalAmount": 6400
}
`,
  'documentation/DEPLOYMENT.md': `# Deployment

## Client

Build the frontend with npm run build in client and serve the build directory through a CDN or edge platform.

## Server

Run the Express server behind a reverse proxy and set CLIENT_URL, DATABASE_URL, REDIS_URL, and Stripe/email credentials through environment variables.

## Docker

Use the provided Dockerfile and docker-compose.yml as the baseline for containerized local development.
`,
  '.env.example': `NODE_ENV=development
PORT=5000
CLIENT_URL=http://localhost:3000
DATABASE_URL=memory://luxury-hotel-template
REDIS_URL=redis://localhost:6379
STRIPE_PUBLIC_KEY=pk_test_luxury_template
STRIPE_SECRET_KEY=sk_test_luxury_template
EMAIL_FROM=reservations@aureliagrand.com
REACT_APP_API_URL=http://localhost:5000/api
`,
  '.gitignore': `node_modules/
client/node_modules/
server/node_modules/
client/build/
.env
.DS_Store
npm-debug.log*
`,
  '.eslintrc.js': `module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: ['client/build/', 'client/node_modules/', 'server/node_modules/']
};
`,
  '.prettierrc': `{
  "singleQuote": true,
  "trailingComma": "es5",
  "semi": true
}
`,
  'Dockerfile': `FROM node:20-alpine
WORKDIR /app
COPY . .
RUN cd client && npm install && npm run build
RUN cd server && npm install
EXPOSE 5000
CMD ["sh", "-c", "cd server && npm start"]
`,
  'docker-compose.yml': `version: '3.9'
services:
  server:
    build: .
    command: sh -c "cd server && npm start"
    ports:
      - '5000:5000'
    env_file:
      - .env.example
  client:
    image: node:20-alpine
    working_dir: /app/client
    volumes:
      - ./:/app
    command: sh -c "npm install && npm start"
    ports:
      - '3000:3000'
    depends_on:
      - server
`,
  'LICENSE': `MIT License

Copyright (c) 2026 Built-It-4-U

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`
};

Object.entries(files).forEach(([relativePath, content]) => write(relativePath, content));

const assetStubs = [
  'client/public/images/hero/hero-video.mp4',
  'client/public/images/hero/hero-poster.jpg',
  'client/public/images/hero/slide-1.webp',
  'client/public/images/hero/slide-2.webp',
  'client/public/images/hero/slide-3.webp',
  'client/public/images/rooms/presidential-suite/main.webp',
  'client/public/images/rooms/presidential-suite/gallery-1.webp',
  'client/public/images/rooms/presidential-suite/gallery-2.webp',
  'client/public/images/rooms/presidential-suite/gallery-3.webp',
  'client/public/images/rooms/presidential-suite/gallery-4.webp',
  'client/public/images/rooms/presidential-suite/virtual-tour.jpg',
  'client/public/images/rooms/royal-suite/main.webp',
  'client/public/images/rooms/royal-suite/gallery-1.webp',
  'client/public/images/rooms/royal-suite/gallery-2.webp',
  'client/public/images/rooms/royal-suite/gallery-3.webp',
  'client/public/images/rooms/deluxe-ocean-view/main.webp',
  'client/public/images/rooms/deluxe-ocean-view/gallery-1.webp',
  'client/public/images/rooms/deluxe-ocean-view/gallery-2.webp',
  'client/public/images/rooms/luxury-family-suite/main.webp',
  'client/public/images/rooms/luxury-family-suite/gallery-1.webp',
  'client/public/images/rooms/luxury-family-suite/gallery-2.webp',
  'client/public/images/dining/signature-restaurant.webp',
  'client/public/images/dining/rooftop-bar.webp',
  'client/public/images/dining/lounge.webp',
  'client/public/images/dining/private-dining.webp',
  'client/public/images/spa/treatment-rooms.webp',
  'client/public/images/spa/hammam.webp',
  'client/public/images/spa/yoga-studio.webp',
  'client/public/images/spa/infinity-pool.webp',
  'client/public/images/experiences/yacht.webp',
  'client/public/images/experiences/helicopter.webp',
  'client/public/images/experiences/private-chef.webp',
  'client/public/images/experiences/cultural-tours.webp',
  'client/public/images/events/ballroom.webp',
  'client/public/images/events/boardroom.webp',
  'client/public/images/events/garden-wedding.webp',
  'client/public/images/events/terrace.webp',
  'client/public/images/gallery/category-1/scene-1.webp',
  'client/public/images/gallery/category-1/scene-2.webp',
  'client/public/images/gallery/category-2/scene-1.webp',
  'client/public/images/gallery/category-2/scene-2.webp',
  'client/public/images/gallery/category-3/scene-1.webp',
  'client/public/images/gallery/category-3/scene-2.webp',
  'client/public/images/team/general-manager.webp',
  'client/public/images/team/executive-chef.webp',
  'client/public/images/team/spa-director.webp',
  'client/public/images/brand/favicon.ico',
  'client/public/images/brand/brand-guidelines.pdf'
];

assetStubs.forEach(writeBinaryStub);

const svgIcons = {
  'client/public/images/icons/wifi.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M32 49a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-12c-6 0-11.7 2.3-16 6.4l4.3 4.5a16.5 16.5 0 0 1 23.5 0l4.3-4.5A22.6 22.6 0 0 0 32 37Zm0-14c-10.2 0-19.6 4-26.6 11.1l4.2 4.4C15.4 32.4 23.4 29 32 29s16.6 3.4 22.4 9.5l4.2-4.4A37.4 37.4 0 0 0 32 23Z"/></svg>',
  'client/public/images/icons/parking.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M18 10h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H26v12h-8V10Zm8 24h8c4.4 0 8-3.6 8-8s-3.6-8-8-8h-8v16Z"/></svg>',
  'client/public/images/icons/pool.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M14 24a8 8 0 1 1 8-8 8 8 0 0 1-8 8Zm36 4V10h-8v18h-8l-7 12H16v8h16l8-12h10v10h8V28Z"/></svg>',
  'client/public/images/icons/gym.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M10 24h8v16h-8zm12-6h8v28h-8zm12 6h8v16h-8zm12-10h8v36h-8z"/></svg>',
  'client/public/images/icons/spa-icon.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M32 10c6 8 10 13 10 20a10 10 0 0 1-20 0c0-7 4-12 10-20Zm-16 24c5 3 8 8 8 12a8 8 0 0 1-16 0c0-4 3-9 8-12Zm32 0c5 3 8 8 8 12a8 8 0 0 1-16 0c0-4 3-9 8-12Z"/></svg>',
  'client/public/images/icons/restaurant.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M18 8h4v20a6 6 0 0 1-4 5.6V56h-6V33.6A6 6 0 0 1 8 28V8h4v14h2V8h4v14h2V8Zm22 0h10a6 6 0 0 1 6 6v42h-6V36h-8v20h-6V8h4Z"/></svg>',
  'client/public/images/icons/bar.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M14 10h36l-6 18H34v20h8v6H22v-6h8V28H20l-6-18Z"/></svg>',
  'client/public/images/icons/concierge.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M32 12a10 10 0 0 1 10 10h10a6 6 0 0 1 6 6v14H6V28a6 6 0 0 1 6-6h10a10 10 0 0 1 10-10Zm0 6a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4Zm-20 30h40v8H12Z"/></svg>',
  'client/public/images/icons/butler.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M20 16a12 12 0 1 1 24 0v8h6a8 8 0 0 1 8 8v22h-8V34H14v20H6V32a8 8 0 0 1 8-8h6v-8Z"/></svg>',
  'client/public/images/icons/limousine.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M10 24h30l8 8h6a4 4 0 0 1 4 4v10h-6a6 6 0 0 1-12 0H24a6 6 0 0 1-12 0H6V28a4 4 0 0 1 4-4Z"/></svg>',
  'client/public/images/icons/babysitting.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M22 18a6 6 0 1 1 12 0 6 6 0 0 1-12 0Zm20 8a8 8 0 0 1 8 8v16h-8V36h-8v14h-8V34a8 8 0 0 1 8-8Zm-24 4a8 8 0 0 1 8 8v12h-8V38h-6v12H4V38a8 8 0 0 1 8-8Z"/></svg>',
  'client/public/images/icons/pet-friendly.svg': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path fill="#E7D8AE" d="M18 28a6 6 0 1 0-6-6 6 6 0 0 0 6 6Zm28 0a6 6 0 1 0-6-6 6 6 0 0 0 6 6ZM28 20a6 6 0 1 0-6-6 6 6 0 0 0 6 6Zm8 0a6 6 0 1 0-6-6 6 6 0 0 0 6 6Zm-4 12c-10 0-18 6.4-18 14a8 8 0 0 0 8 8h20a8 8 0 0 0 8-8c0-7.6-8-14-18-14Z"/></svg>'
};

Object.entries(svgIcons).forEach(([relativePath, content]) => write(relativePath, content));

console.log('Generated backend, shared files, docs, and asset stubs.');
