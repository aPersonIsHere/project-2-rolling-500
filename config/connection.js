// Connecting to the DB
const Sequelize = require('sequelize');
require('dotenv').config();

sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3306
  }
);

// Exports
module.exports = sequelize;