const database = require('../config/database');
const Newsletter = require('../models/Newsletter');

const subscribe = (req, res) => {
  const entry = new Newsletter(req.validatedBody);
  database.newsletter.push(entry);
  res.status(201).json({ success: true, data: entry });
};

module.exports = {
  subscribe
};
