class Availability {
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
