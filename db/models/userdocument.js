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
      models.userDocuments.belongsTo(models.user, { foreignKey: 'id' })
      models.userDocuments.belongsTo(models.typeDocuments, { foreignKey: 'id' })
    }
  }
  userDocument.init({
    id: {
      type          : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey    : true,
    },
    userId: {
      type      : DataTypes.INTEGER,
      allowNull : false
    },
    typeDocumentId: {
      type      : DataTypes.INTEGER,
      allowNull : false
    },
    document: {
      type      : DataTypes.STRING(20),
      unique    : true,
      allowNull : false,
    },
    placeExpedition: {
      allowNull : false,
      type      : DataTypes.STRING(60)
    },
    dateExpedition: {
      allowNull : false,
      type      : DataTypes.DATE,
    }
  }, {
    sequelize,
    timestamps      : false,
    freezeTableName : true,
    modelName       : 'userDocuments',
  });
  return userDocument;
};