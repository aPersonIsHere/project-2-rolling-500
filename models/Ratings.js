const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Ratings extends Model {}

Ratings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      },
    },
    album_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "album",
        key: "id",
      },
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
        len: [0,5],
      },
    },
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