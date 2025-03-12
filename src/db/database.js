const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "mydb",
  process.env.DB_USER || "postgres",
  process.env.DB_PASSWORD || "1234",
  {
    host: process.env.DB_HOST || "db",
    dialect: "postgres",
    port: process.env.DB_PORT || 5432,
    logging: false,
  }
);

module.exports = sequelize;
