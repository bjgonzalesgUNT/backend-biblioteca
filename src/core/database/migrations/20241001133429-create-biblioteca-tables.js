'use strict';

const sequelize = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const schema = 'biblioteca';

    const timestamp = {
      createdAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },

      deletedAt: {
        type: Sequelize.DataTypes.DATE,
      },
    };

    // *Create table authors
    await queryInterface.createTable(
      {
        schema,
        tableName: 'authors',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        person_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema: 'sistemas',
              tableName: 'people',
            },
            key: 'id',
          },
        },
        alias: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        image_url: {
          type: Sequelize.STRING,
        },
        ...timestamp,
      },
    );

    // *Create table editorial
    await queryInterface.createTable(
      {
        schema,
        tableName: 'editorial',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        ...timestamp,
      },
    );

    // *Summary 1
    await queryInterface.createTable(
      {
        schema,
        tableName: 'summary_1',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...timestamp,
      },
    );

    // *Summary 2
    await queryInterface.createTable(
      {
        schema,
        tableName: 'summary_2',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        summary_1_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'summary_1',
            },
            key: 'id',
          },
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...timestamp,
      },
    );

    // *Summary 3
    await queryInterface.createTable(
      {
        schema,
        tableName: 'summary_3',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        summary_2_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'summary_2',
            },
            key: 'id',
          },
        },
        code: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...timestamp,
      },
    );

    // *Create table books
    await queryInterface.createTable(
      {
        schema,
        tableName: 'books',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        deway_id: {
          type: sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'summary_3',
            },
            key: 'id',
          },
        },
        author_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'authors',
            },
            key: 'id',
          },
        },
        editorial_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'editorial',
            },
            key: 'id',
          },
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        pages: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        edition: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        path: {
          type: Sequelize.STRING,
        },
        image_url: {
          type: Sequelize.STRING,
        },
        published_at: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ...timestamp,
      },
    );

    // *Create table co-authorship
    await queryInterface.createTable(
      {
        schema,
        tableName: 'co_authorship',
      },
      {
        book_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: {
              schema,
              tableName: 'books',
            },
            key: 'id',
          },
        },
        author_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: {
              schema,
              tableName: 'authors',
            },
            key: 'id',
          },
        },
        ...timestamp,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    const schema = 'biblioteca';

    await queryInterface.dropTable({
      schema,
      tableName: 'summary_3',
    });

    await queryInterface.dropTable({
      schema,
      tableName: 'summary_2',
    });

    await queryInterface.dropTable({
      schema,
      tableName: 'summary_1',
    });

    await queryInterface.dropTable({
      schema,
      tableName: 'editorial',
    });

    await queryInterface.dropTable({
      schema,
      tableName: 'authors',
    });
  },
};
