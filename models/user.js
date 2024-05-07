// models/user.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const bcrypt = require('bcrypt');
const User = sequelize.define("user", {
  name: {type: DataTypes.STRING,},
  email: { type: DataTypes.STRING, required: true, unique: true },
  password: { type: DataTypes.STRING, required: true },

});
User.prototype.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

module.exports = User;
