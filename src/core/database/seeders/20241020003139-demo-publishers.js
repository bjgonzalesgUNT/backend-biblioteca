'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
        schema: 'biblioteca',
        tableName: 'publishers',
      },
      [
        { name: 'EDITORIAL PLANETA' },
        { name: 'PENGUIN RANDOM HOUSE' },
        { name: 'HARPERCOLLINS' },
        { name: 'SIMON & SCHUSTER' },
        { name: 'MACMILLAN PUBLISHERS' },
        { name: 'HACHETTE LIVRE' },
        { name: 'SCHOLASTIC' },
        { name: 'BLOOMSBURY' },
        { name: 'ALFAGUARA' },
        { name: 'ANAGRAMA' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca.publishers_id_seq RESTART WITH 1;',
    );

    await queryInterface.bulkDelete(
      {
        schema: 'biblioteca',
        tableName: 'publishers',
      },
      null,
      {},
    );
  },
};
