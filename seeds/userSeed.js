// User Seeds

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
  },
  {
    username: "kev",
    email: "kevin@me.com",
    password: "password"
  },
  {
    username: "mike",
    email: "mike@me.com",
    password: "password"
  },
  {
    username: "ozi",
    email: "ozi@me.com",
    password: "password"
  }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;