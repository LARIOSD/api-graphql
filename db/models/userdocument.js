'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  userDocument.init({
    username : DataTypes.STRING,
    status   : DataTypes.CHAR
  }, {
    sequelize,
    modelName: 'userDocuments',
  });
  return userDocument;
};