const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "fdsa1234", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync();

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection with DB established");
  } catch (err) {
    console.error("Unable to connect with DB");
  }
})();

module.exports = sequelize