const { validateBookingPayload, validateContactPayload, validateNewsletterPayload } = require('../../shared/validation');

const validateBody = (validator) => (req, res, next) => {
  const result = validator(req.body || {});

  if (!result.valid) {
    return res.status(400).json({ success: false, errors: result.errors });
  }

  req.validatedBody = result.data;
  return next();
};

module.exports = {
  validateBookingBody: validateBody(validateBookingPayload),
  validateContactBody: validateBody(validateContactPayload),
  validateNewsletterBody: validateBody(validateNewsletterPayload)
};
