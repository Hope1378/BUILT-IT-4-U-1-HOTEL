const database = require('../config/database');
const { buildAvailabilityResponse } = require('../utils/availabilityChecker');

const checkAvailability = (req, res) => {
  const room = database.rooms.find((item) => item.id === req.body.selectedRoomId) || database.rooms[0];
  const availability = buildAvailabilityResponse(room, req.body);
  database.availability.push(availability);
  res.json({ success: true, data: availability });
};

module.exports = {
  checkAvailability
};
