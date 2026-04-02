const isEmail = (value) => /\S+@\S+\.\S+/.test(value || '');
const isDate = (value) => !Number.isNaN(new Date(value).getTime());

const validateBookingPayload = (payload) => {
  const errors = [];
  if (!payload.selectedRoomId) errors.push('selectedRoomId is required');
  if (!isDate(payload.checkIn)) errors.push('checkIn must be a valid date');
  if (!isDate(payload.checkOut)) errors.push('checkOut must be a valid date');
  if (!payload.guest || !payload.guest.name) errors.push('guest.name is required');
  if (!payload.guest || !isEmail(payload.guest.email)) errors.push('guest.email must be valid');
  return { valid: errors.length === 0, errors, data: payload };
};

const validateContactPayload = (payload) => {
  const errors = [];
  if (!payload.name) errors.push('name is required');
  if (!isEmail(payload.email)) errors.push('email must be valid');
  if (!payload.message) errors.push('message is required');
  return { valid: errors.length === 0, errors, data: payload };
};

const validateNewsletterPayload = (payload) => {
  const errors = [];
  if (!isEmail(payload.email)) errors.push('email must be valid');
  return { valid: errors.length === 0, errors, data: payload };
};

module.exports = {
  validateBookingPayload,
  validateContactPayload,
  validateNewsletterPayload
};
