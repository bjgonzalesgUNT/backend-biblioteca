'use strict';

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

    // *Create table categories
    await queryInterface.createTable(
      {
        schema,
        tableName: 'categories',
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
        description: {
          type: Sequelize.STRING,
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

    // *Create table books_categories
    await queryInterface.createTable(
      {
        schema,
        tableName: 'books_categories',
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
        category_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          references: {
            model: {
              schema,
              tableName: 'categories',
            },
            key: 'id',
          },
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

    // *Drop table co-authorship
    await queryInterface.dropTable({
      schema,
      tableName: 'co_authorship',
    });

    // *Drop table books_categories
    await queryInterface.dropTable({
      schema,
      tableName: 'books_categories',
    });

    // *Drop table books
    await queryInterface.dropTable({
      schema,
      tableName: 'books',
    });

    // *Drop table categories
    await queryInterface.dropTable({
      schema,
      tableName: 'categories',
    });

    // *Drop table editorial
    await queryInterface.dropTable({
      schema,
      tableName: 'editorial',
    });

    // *Drop table authors
    await queryInterface.dropTable({
      schema,
      tableName: 'authors',
    });
  },
};
