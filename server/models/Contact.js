const { randomUUID } = require('crypto');

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
