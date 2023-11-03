const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Ratings extends Model {}

Ratings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
    },
    album_id: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "album",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  },
  {
  sequelize,
  timestamps: true,
  freezeTableName: true,
  // underscored: true,
  modelName: 'ratings',
  }
);

module.exports = Ratings;