const { validationResult } = require("express-validator");

const validatorMiddleware = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.send({ errors: errors.array() });
  }
  next();
};

module.exports = validatorMiddleware;
