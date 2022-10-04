'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type          : Sequelize.INTEGER,
        autoIncrement : true,
        primaryKey    : true,
        allowNull     : false,
      },
      isMilitary: {
        type      : Sequelize.BOOLEAN,
        allowNull : false,
      },
      isTemporal: {
        type      : Sequelize.BOOLEAN,
        allowNull : false,
      },
      username: {
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
      },
      createdAt : Sequelize.DATE,
      updatedAt : Sequelize.DATE,
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};