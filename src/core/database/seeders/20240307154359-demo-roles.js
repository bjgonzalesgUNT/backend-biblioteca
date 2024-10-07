'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'sistemas', tableName: 'roles' },
      [
        {
          name: 'admin',
          description: 'admin',
        },
        {
          name: 'user',
          description: 'user',
        },
        {
          name: 'librarian',
          description: 'librarian',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.roles_id_seq RESTART WITH 1;',
    );

    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.roles CASCADE;',
    );
  },
};
