const Album = require('./Album');
const User = require('./User');
const Ratings = require('./Ratings');

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


module.exports = { Album, User, Ratings };