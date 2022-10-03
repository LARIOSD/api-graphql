'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull     : false,
        autoIncrement : true,
        primaryKey    : true,
        type          : Sequelize.INTEGER
      },
      isMilitary: {
        type      : Sequelize.BOOLEAN,
        allowNull : false,
      },
      isTemporal: {
        type      : Sequelize.BOOLEAN,
        allowNull : false,
      },
      name: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
      lastName: {
        type      : Sequelize.STRING(20),
        allowNull : false,
      },
      email: {
        type      : Sequelize.STRING(32),
        allowNull : false,
        unique    : true,
      },
      password: {
        type      : Sequelize.STRING(64),
        allowNull : false,
        unique    : true,
      },
      createdAt: {
        allowNull : false,
        type      : Sequelize.DATE
      },
      updatedAt: {
        allowNull : false,
        type      : Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};