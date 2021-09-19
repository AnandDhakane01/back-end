const { validateEmail, validatePassword } = require("../utils/validate");

/**
 *  email validation
 *  password validation
 *  password == confirm passwor
 */

const registerInitialChecks = (req, res, next) => {
  const { email, password, confirmPassword } = req.body;

  if (
    typeof email === "string" &&
    typeof password === "string" &&
    typeof confirmPassword === "string" &&
    email.length > 0 &&
    password.length > 7 &&
    confirmPassword == password &&
    validateEmail(email) &&
    validatePassword(password)
  ) {
    next();
  } else {
    res.status(401).send("Initial check failed");
  }
};

module.exports = registerInitialChecks;
