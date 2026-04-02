const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const normalizeOrigin = (value) => {
  if (!value) {
    return null;
  }

  const trimmed = value.trim().replace(/\/$/, '');

  if (!trimmed) {
    return null;
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return 'https://' + trimmed;
};

const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.VERCEL_URL,
  process.env.VERCEL_BRANCH_URL,
  process.env.VERCEL_PROJECT_PRODUCTION_URL,
  ...(process.env.ALLOWED_ORIGINS || '').split(',')
]
  .map(normalizeOrigin)
  .filter(Boolean);

const environment = {
  nodeEnv: process.env.NODE_ENV || 'development',
  port: Number(process.env.PORT || 5000),
  clientUrl: process.env.CLIENT_URL || 'http://localhost:3000',
  allowedOrigins: [...new Set(allowedOrigins)],
  stripePublicKey: process.env.STRIPE_PUBLIC_KEY || 'pk_test_luxury_template',
  stripeSecretKey: process.env.STRIPE_SECRET_KEY || 'sk_test_luxury_template',
  redisUrl: process.env.REDIS_URL || 'redis://localhost:6379',
  databaseUrl: process.env.DATABASE_URL || 'memory://luxury-hotel-template',
  emailFrom: process.env.EMAIL_FROM || 'reservations@aureliagrand.com'
};

module.exports = environment;
