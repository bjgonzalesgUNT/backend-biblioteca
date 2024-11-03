'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'biblioteca', tableName: 'authors' },
      [
        {
          surnames: 'GARCÍA MÁRQUEZ',
          names: 'GABRIEL',
          nationality: 'COLOMBIANA',
          gender: 'M',
          alias: 'GABO',
          image_url: 'https://example.com/images/authors/gabo.jpg',
        },
        {
          surnames: 'KING',
          names: 'STEPHEN',
          nationality: 'ESTADOUNIDENSE',
          gender: 'M',
          alias: 'STEPHEN KING',
          image_url: 'https://example.com/images/authors/stephen_king.jpg',
        },
        {
          surnames: 'ROWLING',
          names: 'J.K.',
          nationality: 'BRITÁNICA',
          gender: 'F',
          alias: 'J.K. ROWLING',
          image_url: 'https://example.com/images/authors/jk_rowling.jpg',
        },
        {
          surnames: 'ALLENDE',
          names: 'ISABEL',
          nationality: 'CHILENA',
          gender: 'F',
          alias: 'ISABEL ALLENDE',
          image_url: 'https://example.com/images/authors/isabel_allende.jpg',
        },
        {
          surnames: 'MURAKAMI',
          names: 'HARUKI',
          nationality: 'JAPONESA',
          gender: 'M',
          alias: 'HARUKI MURAKAMI',
          image_url: 'https://example.com/images/authors/haruki_murakami.jpg',
        },
        {
          surnames: 'COELHO',
          names: 'PAULO',
          nationality: 'BRASILEÑA',
          gender: 'M',
          alias: 'PAULO COELHO',
          image_url: 'https://example.com/images/authors/paulo_coelho.jpg',
        },
        {
          surnames: 'AUSTEN',
          names: 'JANE',
          nationality: 'BRITÁNICA',
          gender: 'F',
          alias: 'JANE AUSTEN',
          image_url: 'https://example.com/images/authors/jane_austen.jpg',
        },
        {
          surnames: 'HEMINGWAY',
          names: 'ERNEST',
          nationality: 'ESTADOUNIDENSE',
          gender: 'M',
          alias: 'ERNEST HEMINGWAY',
          image_url: 'https://example.com/images/authors/ernest_hemingway.jpg',
        },
        {
          surnames: 'NERUDA',
          names: 'PABLO',
          nationality: 'CHILENA',
          gender: 'M',
          alias: 'PABLO NERUDA',
          image_url: 'https://example.com/images/authors/pablo_neruda.jpg',
        },
        {
          surnames: 'DICKENS',
          names: 'CHARLES',
          nationality: 'BRITÁNICA',
          gender: 'M',
          alias: 'CHARLES DICKENS',
          image_url: 'https://example.com/images/authors/charles_dickens.jpg',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca.authors_id_seq RESTART WITH 1;',
    );

    await queryInterface.bulkDelete(
      { schema: 'biblioteca', tableName: 'authors' },
      null,
      {},
    );
  },
};
