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
        { code: '000', description: 'GENERALIDADES' },
        { code: '100', description: 'FILOSOFÍA & PSICOLOGÍA' },
        { code: '200', description: 'RELIGIÓN' },
        { code: '300', description: 'CIENCIAS SOCIALES' },
        { code: '400', description: 'LENGUAS' },
        { code: '500', description: 'CIENCIAS NATURALES & MATEMÁTICAS' },
        { code: '600', description: 'TECNOLOGÍA (CIENCIAS APLICADAS)' },
        { code: '700', description: 'LAS ARTES' },
        { code: '800', description: 'LITERATURA & RETÓRICA' },
        { code: '900', description: 'GEOGRAFÍA & HISTORIA' },
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
