'use strict';

const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const t = await queryInterface.sequelize.transaction();

    const person = {
      surnames: 'GONZALES GUTIERREZ',
      names: 'BRANDON JOSEPH',
      nacionality: 'PE',
      document: '70452182',
      telephone: '957035661',
      gender: 'M',
      date: '2002-03-27',
      address: 'Victor Raul Mz 06 Lt 04',
    };

    try {
      await queryInterface.bulkInsert(
        {
          schema: 'sistemas',
          tableName: 'people',
        },
        [person],
      );

      const salt = bcrypt.genSaltSync(10);
      const password = bcrypt.hashSync(person.document, salt);

      const newUser = {
        username: person.document,
        password,
        person_id: 1,
        role_id: 1,
      };

      await queryInterface.bulkInsert(
        {
          schema: 'sistemas',
          tableName: 'users',
        },
        [newUser],
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
