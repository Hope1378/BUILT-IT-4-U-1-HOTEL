const helmet = require('helmet');
const cors = require('cors');
const environment = require('../config/environment');

const securityHeaders = helmet({
  crossOriginResourcePolicy: { policy: 'cross-origin' }
});

const normalizeOrigin = (value) => value.replace(/\/$/, '').toLowerCase();

const allowedOrigins = new Set(
  [environment.clientUrl, ...environment.allowedOrigins].filter(Boolean).map(normalizeOrigin)
);

const isAllowedOrigin = (origin) => {
  if (!origin) {
    return true;
  }

  const normalizedOrigin = normalizeOrigin(origin);

  if (allowedOrigins.has(normalizedOrigin)) {
    return true;
  }

  return normalizedOrigin.endsWith('.vercel.app');
};

const corsPolicy = cors({
  origin: (origin, callback) => {
    if (isAllowedOrigin(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('Origin not allowed by CORS'));
  },
  credentials: true
});

module.exports = {
  securityHeaders,
  corsPolicy
};
