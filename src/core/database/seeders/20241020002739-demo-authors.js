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
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL3i1NG0Z9kx_ix0MOPa-RHHsSWtxKOJQoCQ&s',
        },
        {
          surnames: 'KING',
          names: 'STEPHEN',
          nationality: 'ESTADOUNIDENSE',
          gender: 'M',
          alias: 'STEPHEN KING',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY4c0DAw7ZxDZeFA-0G6gfcZ-emJxTWPQjyw&s',
        },
        {
          surnames: 'ROWLING',
          names: 'J.K.',
          nationality: 'BRITÁNICA',
          gender: 'F',
          alias: 'J.K. ROWLING',
          image_url:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzafloXl0vxl70MV-YQcA9Nc0kyFa_bx0kUg&s',
        },
        {
          surnames: 'ALLENDE',
          names: 'ISABEL',
          nationality: 'CHILENA',
          gender: 'F',
          alias: 'ISABEL ALLENDE',
          image_url:
            'https://upload.wikimedia.org/wikipedia/commons/d/d0/Isabel_Allende_Frankfurter_Buchmesse_2015_%28cropped%29.JPG',
        },
        {
          surnames: 'MURAKAMI',
          names: 'HARUKI',
          nationality: 'JAPONESA',
          gender: 'M',
          alias: 'HARUKI MURAKAMI',
          image_url:
            'https://upload.wikimedia.org/wikipedia/commons/5/51/Conversatorio_Haruki_Murakami_%2812_de_12%29_%2845747009452%29_%28cropped%29.jpg',
        },
        {
          surnames: 'COELHO',
          names: 'PAULO',
          nationality: 'BRASILEÑA',
          gender: 'M',
          alias: 'PAULO COELHO',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShXISu1H13cz5QcR3pHQCcNU6D_2v4sCJE-Q&s',
        },
        {
          surnames: 'AUSTEN',
          names: 'JANE',
          nationality: 'BRITÁNICA',
          gender: 'F',
          alias: 'JANE AUSTEN',
          image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsNGpyFKjOSKZ451ESd0JH9m1cE1gIVy_ZVw&s',
        },
        {
          surnames: 'HEMINGWAY',
          names: 'ERNEST',
          nationality: 'ESTADOUNIDENSE',
          gender: 'M',
          alias: 'ERNEST HEMINGWAY',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/ErnestHemingway.jpg/1200px-ErnestHemingway.jpg',
        },
        {
          surnames: 'NERUDA',
          names: 'PABLO',
          nationality: 'CHILENA',
          gender: 'M',
          alias: 'PABLO NERUDA',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Pablo_Neruda_1963.jpg/220px-Pablo_Neruda_1963.jpg',
        },
        {
          surnames: 'DICKENS',
          names: 'CHARLES',
          nationality: 'BRITÁNICA',
          gender: 'M',
          alias: 'CHARLES DICKENS',
          image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/640px-Dickens_Gurney_head.jpg',
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
