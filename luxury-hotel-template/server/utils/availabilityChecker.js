const Availability = require('../models/Availability');
const { seasonalPricing } = require('../../shared/pricingTiers');

const countNights = (checkIn, checkOut) => Math.max(0, Math.ceil((new Date(checkOut) - new Date(checkIn)) / 86400000));

const getSeasonMultiplier = (dateValue) => {
  const month = new Date(dateValue).getUTCMonth() + 1;
  if (month >= 6 && month <= 8) {
    return seasonalPricing.peak.multiplier;
  }
  if (month === 12 || month <= 1) {
    return seasonalPricing.festive.multiplier;
  }
  return seasonalPricing.signature.multiplier;
};

const buildAvailabilityResponse = (room, payload) => {
  const nights = countNights(payload.checkIn, payload.checkOut);
  const multiplier = getSeasonMultiplier(payload.checkIn);
  const recommendedRate = Math.round(room.baseRate * multiplier);
  return new Availability({
    roomId: room.id,
    checkIn: payload.checkIn,
    checkOut: payload.checkOut,
    available: nights >= room.minimumStay,
    minimumStay: room.minimumStay,
    recommendedRate
  });
};

module.exports = {
  countNights,
  buildAvailabilityResponse
};
