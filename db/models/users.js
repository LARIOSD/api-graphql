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
    }
  }
  user.init({
    user_id: {
      type       : DataTypes.STRING(10),
      allowNull  : false,
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
    name: {
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
      unique    : true,
    },
    updated_at : DataTypes.DATE,
    created_at : DataTypes.DATE,
  },{
      timestamps      : false,
      freezeTableName : true,
      tableName       : 'users'
  });
  return user;
};