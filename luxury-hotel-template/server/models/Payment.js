const { randomUUID } = require('crypto');

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
