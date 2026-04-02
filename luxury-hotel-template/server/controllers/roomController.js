const database = require('../config/database');

const listRooms = (req, res) => {
  res.json({ success: true, data: database.rooms });
};

const getRoomById = (req, res) => {
  const room = database.rooms.find((item) => item.id === req.params.roomId);
  if (!room) {
    return res.status(404).json({ success: false, message: 'Room not found' });
  }
  return res.json({ success: true, data: room });
};

module.exports = {
  listRooms,
  getRoomById
};
