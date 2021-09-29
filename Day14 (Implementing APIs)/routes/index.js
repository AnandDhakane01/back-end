var express = require("express");
const { register, registerSuperAdmin } = require("../controllers/register");
var router = express.Router();
var registerInitialChecks = require("../middlewares/registerChecks");
const check = require("../middlewares/checkSuperAdmin")

/* GET home page. */
router.get("/", function (req, res, next) {
  // const sess = req.session;
  // sess.username = "anand";
  // console.log(sess);
  res.render("index", { title: "Express" });
});

/**
 * @requires -> { email, password, confirm password } - req.body
 * security, performance and edge cases
 *
 * @description
 *  email validation
 *  password validation
 *  password == confirm password
 *
 *  js, sql injection check
 *
 *  check if email already exists
 *  password hash
 *  email -> lowercase
 *  save
 */

router.post("/register", registerInitialChecks, register);
router.post("/register-super-admin", registerInitialChecks, registerSuperAdmin);
router.post("/super", check);

module.exports = router;
