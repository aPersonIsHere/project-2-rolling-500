const { Ratings } = require('../models');

const ratingData = [
  {
    user_id: 1,
    album_id: 1,
    rating: 5
  },
  {
    user_id: 1,
    album_id: 2,
    rating: 3
  },
  {
    user_id: 1,
    album_id: 3,
    rating: 2
  },
  {
    user_id: 1,
    album_id: 4,
    rating: 4
  },
]

const seedRatings = () => Ratings.bulkCreate(ratingData);

module.exports = seedRatings;