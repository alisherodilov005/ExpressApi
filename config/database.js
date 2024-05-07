// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodejs', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
