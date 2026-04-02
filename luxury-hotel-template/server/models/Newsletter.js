const { randomUUID } = require('crypto');

class Newsletter {
  constructor(payload) {
    this.id = payload.id || randomUUID().slice(0, 8);
    this.email = payload.email;
    this.segment = payload.segment || 'general';
    this.createdAt = payload.createdAt || new Date().toISOString();
  }
}

module.exports = Newsletter;
