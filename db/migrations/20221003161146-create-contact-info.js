'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('contactInfos', {
      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
      },
      address: {
        type      : Sequelize.STRING(60),
        allowNull : false,
        unique    : true
      },
      countryId: {
        type: Sequelize.INTEGER,
      },
      city: {
        type      : Sequelize.STRING(50),
        allowNull : false,
      },
      phone: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
      celPhone: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
      emergencyName: {
        type      : Sequelize.STRING(100),
        allowNull : false,
      },
      emergencyPhone: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
    }, {
      timestamps      : false,
      freezeTableName : true,
      modelName       : 'contactInfos',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('contactInfos');
  }
};