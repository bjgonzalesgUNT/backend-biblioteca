'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'sistemas', tableName: 'roles' },
      [
        {
          rol_nombre: 'user'.toUpperCase(),
          rol_descripcion: 'usuario'.toUpperCase(),
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      { schema: 'sistemas', tableName: 'roles' },
      null,
      {},
    );
  },
};
