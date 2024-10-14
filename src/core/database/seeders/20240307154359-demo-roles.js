'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const roles = [
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
    ];

    const pages = [
      {
        name: 'Dashboard',
        description: 'Dashboard',
        path: '/dashboard',
      },
      {
        name: 'Usuarios',
        description: 'users',
        path: '/dashboard/users',
      },
    ];

    const adminPages = [
      {
        role_id: 1,
        page_id: 1,
      },
      {
        role_id: 1,
        page_id: 2,
      },
    ];

    const usersPages = [
      {
        role_id: 2,
        page_id: 1,
      },
    ];

    const librarianPages = [
      {
        role_id: 3,
        page_id: 1,
      },
    ];

    await queryInterface.bulkInsert(
      { schema: 'sistemas', tableName: 'roles' },
      roles,
    );

    await queryInterface.bulkInsert(
      { schema: 'sistemas', tableName: 'pages' },
      pages,
    );

    await queryInterface.bulkInsert(
      {
        schema: 'sistemas',
        tableName: 'roles_pages',
      },
      [...adminPages, ...usersPages, ...librarianPages],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.roles_id_seq RESTART WITH 1;',
    );

    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.roles CASCADE;',
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.pages_id_seq RESTART WITH 1;',
    );

    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.pages CASCADE;',
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.roles_pages_id_seq RESTART WITH 1;',
    );

    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.roles_pages CASCADE;',
    );
  },
};
