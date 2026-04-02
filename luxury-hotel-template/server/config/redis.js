const environment = require('./environment');

const redis = {
  url: environment.redisUrl,
  enabled: environment.nodeEnv === 'production'
};

module.exports = redis;
