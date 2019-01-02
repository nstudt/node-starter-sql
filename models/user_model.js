const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const User = sequelize.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  created: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  userName: { unique: true, type: Sequelize.STRING},
  email: { unique: true, type: Sequelize.STRING},
  password: { type: Sequelize.STRING},
  profilePic: { type: Sequelize.STRING}
});

module.exports = User;