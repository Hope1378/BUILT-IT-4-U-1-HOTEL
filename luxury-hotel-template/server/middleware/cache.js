const cacheControl = (seconds = 120) => (req, res, next) => {
  res.setHeader('Cache-Control', 'public, max-age=' + seconds);
  next();
};

module.exports = {
  cacheControl
};
