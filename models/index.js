// Importing all models
const Album = require('./Album');
const User = require('./User');
const Ratings = require('./Ratings');

// Relationships
User.hasMany(Ratings, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Ratings.belongsTo(User, {
  foreignKey: 'user_id',
});

Album.hasMany(Ratings, {
  foreignKey: 'album_id',
});

Ratings.belongsTo(Album, {
  foreignKey: 'album_id',
});

// Exports
module.exports = { Album, User, Ratings };