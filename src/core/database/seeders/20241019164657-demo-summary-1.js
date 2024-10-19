'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
        schema: 'biblioteca',
        tableName: 'summary_1',
      },
      [
        { code: '000', description: 'Generalidades' },
        { code: '100', description: 'Filosofía & psicología' },
        { code: '200', description: 'Religión' },
        { code: '300', description: 'Ciencias sociales' },
        { code: '400', description: 'Lenguas' },
        { code: '500', description: 'Ciencias naturales & matemáticas' },
        { code: '600', description: 'Tecnología (Ciencias aplicadas)' },
        { code: '700', description: 'Las artes' },
        { code: '800', description: 'Literatura & retórica' },
        { code: '900', description: 'Geografía & historia' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca."summary_1_id_seq" RESTART WITH 1;',
    );

    await queryInterface.bulkDelete(
      {
        schema: 'biblioteca',
        tableName: 'summary_1',
      },
      null,
      {},
    );
  },
};
