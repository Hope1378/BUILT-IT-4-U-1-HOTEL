const { randomUUID } = require('crypto');

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
