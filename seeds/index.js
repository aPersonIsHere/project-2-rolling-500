const sequelize = require('../config/connection');
const seedAlbum = require('./masterSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAlbum();

  process.exit(0);
};

seedAll();