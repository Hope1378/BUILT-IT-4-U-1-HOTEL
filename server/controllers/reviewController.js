const database = require('../config/database');

const listReviews = (req, res) => {
  const approved = database.reviews.filter((review) => review.approved);
  res.json({ success: true, data: approved });
};

module.exports = {
  listReviews
};
