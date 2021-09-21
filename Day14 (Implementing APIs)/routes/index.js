var express = require('express');
const register = require('../controllers/register');
var router = express.Router();
var registerInitialChecks = require('../middlewares/registerChecks')

/* GET home page. */
router.get('/', function(req, res, next) {
  const sess = req.session;
  sess.username = "anand";
  res.send(req.session);
  console.log(sess);
  res.render('index', { title: 'Express' });
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

router.post('/register', registerInitialChecks, register)

module.exports = router;