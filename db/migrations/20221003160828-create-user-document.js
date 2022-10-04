'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('userDocuments', {
      id: {
        type          : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey    : true,
        allowNull     : false
      },
      typeDocumentId: {
        type      : Sequelize.INTEGER,
        allowNull : false
      },
      Document: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
      placeExpedition: {
        allowNull : false,
        type      : Sequelize.STRING(60)
      },
      dateExpedition: {
        allowNull : false,
        type      : Sequelize.DATE,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('userDocuments');
  }
};