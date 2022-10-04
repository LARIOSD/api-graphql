'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class country extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.countries.hasMany(models.contactInfos, {foreignKey: 'countryId'})
    }
  }
  country.init({
    id: {
      type          : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey    : true
    },
    countryCode: {
      type      : DataTypes.STRING(4),
      allowNull : false,
      unique    : true
    },
    countryName: {
      type      : DataTypes.STRING(100),
      allowNull : false,
      unique    : true
    },
  }, {
    sequelize,
    timestamps      : false,
    freezeTableName : true,
    modelName       : 'countries',
  });
  return country;
};