'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of DataTypes lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.user.hasOne(models.contactInfos, {foreignKey: 'id'})
    }
  }
  user.init({
    id: {
      type       : DataTypes.INTEGER,
      unique     : true,
      primaryKey : true,
    },
    isMilitary: {
      type      : DataTypes.BOOLEAN,
      allowNull : false,
    },
    isTemporal: {
      type      : DataTypes.BOOLEAN,
      allowNull : false,
    },
    username: {
      type      : DataTypes.STRING(20),
      allowNull : false,
    },
    lastName: {
      type      : DataTypes.STRING(20),
      allowNull : false,
    },
    email: {
      type      : DataTypes.STRING(32),
      allowNull : false,
      unique    : true,
    },
    password: {
      type      : DataTypes.STRING(64),
      allowNull : false,
    },
    createdAt : DataTypes.DATE,
    updatedAt : DataTypes.DATE,
  },{
      sequelize,
      timestamps      : true,
      freezeTableName : true,
      tableName       : 'users'
  });
  return user;
};