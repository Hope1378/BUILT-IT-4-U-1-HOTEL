const environment = require('./environment');

const emailConfig = {
  from: environment.emailFrom,
  transport: environment.nodeEnv === 'production' ? 'smtp' : 'console'
};

module.exports = emailConfig;
