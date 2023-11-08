const sequelize = require('../config/connection');
const seedAlbum = require('./masterSeed');
const seedUser = require('./userSeed');
const seedRatings = require('./ratingsSeed');

const seedAll = async () => {
  await sequelize.sync({ force: false });

  await seedUser();
  await seedAlbum();
  await seedRatings();

  process.exit(0);
};

seedAll();