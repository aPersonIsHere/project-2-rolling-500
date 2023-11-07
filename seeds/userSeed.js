const { User } = require('../models');

const userData = [
  {
    username: "admin",
    email: "admin@rolling500.com",
    password: "password"
  },
  {
    username: "support",
    email: "support@rolling500.com",
    password: "password"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;