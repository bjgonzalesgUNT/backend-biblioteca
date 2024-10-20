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
        { name: 'Editorial Planeta' },
        { name: 'Penguin Random House' },
        { name: 'HarperCollins' },
        { name: 'Simon & Schuster' },
        { name: 'Macmillan Publishers' },
        { name: 'Hachette Livre' },
        { name: 'Scholastic' },
        { name: 'Bloomsbury' },
        { name: 'Alfaguara' },
        { name: 'Anagrama' },
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
