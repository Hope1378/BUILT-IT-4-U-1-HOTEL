const express = require('express');
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

app.set('trust proxy', 1);

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

module.exports = app;