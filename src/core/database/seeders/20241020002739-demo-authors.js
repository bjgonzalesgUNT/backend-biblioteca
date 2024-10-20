'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'biblioteca', tableName: 'authors' },
      [
        {
          surnames: 'García Márquez',
          names: 'Gabriel',
          nationality: 'Colombiana',
          gender: 'M',
          alias: 'Gabo',
          image_url: 'https://example.com/images/authors/gabo.jpg',
        },
        {
          surnames: 'King',
          names: 'Stephen',
          nationality: 'Estadounidense',
          gender: 'M',
          alias: 'Stephen King',
          image_url: 'https://example.com/images/authors/stephen_king.jpg',
        },
        {
          surnames: 'Rowling',
          names: 'J.K.',
          nationality: 'Británica',
          gender: 'F',
          alias: 'J.K. Rowling',
          image_url: 'https://example.com/images/authors/jk_rowling.jpg',
        },
        {
          surnames: 'Allende',
          names: 'Isabel',
          nationality: 'Chilena',
          gender: 'F',
          alias: 'Isabel Allende',
          image_url: 'https://example.com/images/authors/isabel_allende.jpg',
        },
        {
          surnames: 'Murakami',
          names: 'Haruki',
          nationality: 'Japonesa',
          gender: 'M',
          alias: 'Haruki Murakami',
          image_url: 'https://example.com/images/authors/haruki_murakami.jpg',
        },
        {
          surnames: 'Coelho',
          names: 'Paulo',
          nationality: 'Brasileña',
          gender: 'M',
          alias: 'Paulo Coelho',
          image_url: 'https://example.com/images/authors/paulo_coelho.jpg',
        },
        {
          surnames: 'Austen',
          names: 'Jane',
          nationality: 'Británica',
          gender: 'F',
          alias: 'Jane Austen',
          image_url: 'https://example.com/images/authors/jane_austen.jpg',
        },
        {
          surnames: 'Hemingway',
          names: 'Ernest',
          nationality: 'Estadounidense',
          gender: 'M',
          alias: 'Ernest Hemingway',
          image_url: 'https://example.com/images/authors/ernest_hemingway.jpg',
        },
        {
          surnames: 'Neruda',
          names: 'Pablo',
          nationality: 'Chilena',
          gender: 'M',
          alias: 'Pablo Neruda',
          image_url: 'https://example.com/images/authors/pablo_neruda.jpg',
        },
        {
          surnames: 'Dickens',
          names: 'Charles',
          nationality: 'Británica',
          gender: 'M',
          alias: 'Charles Dickens',
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
