'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();

    const joseph = {
      surnames: 'GONZALES GUTIERREZ',
      names: 'BRANDON JOSEPH',
      nacionality: 'PE',
      document: '70452182',
      telephone: '957035661',
      gender: 'M',
      date: '2002-03-27',
      address: 'Victor Raul Mz 06 Lt 04',
    };

    const paulo = {
      surnames: 'ALIAGA CARBAJAL',
      names: 'PAULO ADRIAN',
      nacionality: 'PE',
      document: '70582843',
      telephone: '942233662',
      gender: 'M',
      date: '2002-06-01',
      address: 'Pablo Tuch 570',
    };

    try {
      await queryInterface.bulkInsert(
        {
          schema: 'sistemas',
          tableName: 'people',
        },
        [joseph, paulo],
      );

      const salt = bcrypt.genSaltSync(10);
      const password1 = bcrypt.hashSync(joseph.document, salt);
      const password2 = bcrypt.hashSync(paulo.document, salt);

      const newUser1 = {
        username: joseph.document,
        password: password1,
        person_id: 1,
        role_id: 1,
      };

      const newUser2 = {
        username: paulo.document,
        password: password2,
        person_id: 2,
        role_id: 1,
      };

      await queryInterface.bulkInsert(
        {
          schema: 'sistemas',
          tableName: 'users',
        },
        [newUser1, newUser2],
      );

      await t.commit();
    } catch (error) {
      await t.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.people_id_seq RESTART WITH 1;',
    );
    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.people CASCADE;',
    );

    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.users_id_seq RESTART WITH 1;',
    );

    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.users CASCADE;',
    );
  },
};
