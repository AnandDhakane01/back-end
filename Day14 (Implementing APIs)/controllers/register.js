const User = require("../models/user");
const bcrypt = require("bcrypt");
/**
 *  check if email already exists
 *  password hash
 *  email -> lowercase
 *  save
 */

const saltRounds = 10;

const register = async (req, res) => {
  const { email, password } = req.body;
  //   check if email already exists
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    // hash the password and store it in the DB
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "CosmicBlisss",
      role: "user"
    });
    const savedUser = await newUser.save();
    res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

const registerSuperAdmin = async (req, res) => {
  const { email, password } = req.body;
  //   check if email already exists
  try {
    const alreadyExists = await User.findOne({ where: { email } });
    if (alreadyExists) {
      res.status(401).send("Email already exists");
    }

    // hash the password and store it in the DB
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);

    const newUser = new User({
      email: email.toLowerCase(),
      password: hash,
      fullName: "CosmicBlisss",
      role: "Super-admin",
    });
    const savedUser = await newUser.save();
    req.session.User = savedUser;
    res.status(201).send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
};

module.exports = { register, registerSuperAdmin };
