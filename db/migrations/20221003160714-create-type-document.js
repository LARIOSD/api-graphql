'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('typeDocuments', {
      id: {
        type          : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey    : true,
        allowNull     : false
      },
      nameTypeDocument: {
        type      : Sequelize.STRING(50),
        allowNull : false,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('typeDocuments');
  }
};