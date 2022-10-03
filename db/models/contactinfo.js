'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contactInfo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.contactInfos.belongsTo(models.user, { foreignKey: 'id' })
      models.contactInfos.belongsTo(models.countries, { foreignKey: 'id' })

    }
  }
  contactInfo.init({
    id: {
      type          : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey    : true
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    address: {
      type      : DataTypes.STRING(60),
      allowNull : false,
      unique    : true
    },
    countryId: {
      type: DataTypes.INTEGER,
    },
    city: {
      type      : DataTypes.STRING(50),
      allowNull : false,
    },
    phone: {
      type      : DataTypes.STRING(20),
      allowNull : false,
    },
    celPhone: {
      type      : DataTypes.STRING(20),
      allowNull : false,
    },
    emergencyName: {
      type      : DataTypes.STRING(100),
      allowNull : false,
    },
    emergencyPhone: {
      type      : DataTypes.STRING(20),
      allowNull : false,
    },

  }, {
    sequelize,
    timestamps      : false,
    freezeTableName : true,
    modelName       : 'contactInfos',
  });
  return contactInfo;
};