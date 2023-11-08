const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Ratings = require('./Ratings');

class Album extends Model {

  //----testing section----//
  static async calculateAverageRating(albumId) {
    const ratings = await Ratings.findAll({
      where: {
        album_id: albumId,
      },
    });

    if (ratings.length > 0) {
      const totalRating = ratings.reduce((sum, rating) => sum + rating.rating, 0);
      const averageRating = totalRating / ratings.length;
      const truncatedAverageRating = Math.trunc(averageRating); // Truncate the decimal part

      await Album.update({ rating_group: truncatedAverageRating }, { where: { id: albumId } });
    } else {
      await Album.update({ rating_group: null }, { where: { id: albumId } });
    }
  }
    //----testing section----//
}

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