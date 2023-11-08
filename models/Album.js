const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection')

class Album extends Model {}

Album.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    Number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    Album: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Artist: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Genre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Subgenre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rating_group: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    album_art: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    // underscored: true,
    modelName: 'album',
  }
);

module.exports = Album;