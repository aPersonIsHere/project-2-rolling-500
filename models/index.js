const Album = require('./Album');
const User = require('./User');
const Ratings = require('./Ratings');

// User.hasMany(Ratings, {
//   foreignKey: ''
// })

Ratings.belongsTo(User, {
  foreignKey: 'id' // might need to rename this
});

module.exports = { Album, User };