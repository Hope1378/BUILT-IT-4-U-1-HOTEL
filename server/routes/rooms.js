const express = require('express');
const { listRooms, getRoomById } = require('../controllers/roomController');
const { cacheControl } = require('../middleware/cache');

const router = express.Router();

router.get('/', cacheControl(300), listRooms);
router.get('/:roomId', cacheControl(300), getRoomById);

module.exports = router;
