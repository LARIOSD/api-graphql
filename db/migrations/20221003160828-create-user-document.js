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
      userId: {
        type       : Sequelize.INTEGER,
        allowNull  : false,
        references : {
          model : 'users',
          key   : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      typeDocumentId: {
        type       : Sequelize.INTEGER,
        allowNull  : false,
        references : {
          model : 'typeDocuments',
          key   : 'id'
        },
        onDelete : 'CASCADE',
        onUpdate : 'CASCADE'
      },
      document: {
        type      : Sequelize.STRING(20),
        allowNull : false,
        unique    : true
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