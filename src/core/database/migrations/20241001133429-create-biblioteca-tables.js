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
        available_copies: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        published_at: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        price: {
          type: Sequelize.DECIMAL(10, 2),
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

    // *Create loan estatus enums
    await queryInterface.sequelize.query(
      "CREATE TYPE LOAN_STATUS AS ENUM ('active', 'inactive')",
    );

    // *Create loaned status enum
    await queryInterface.sequelize.query(
      "CREATE TYPE LOANED_STATUS AS ENUM ('loaned', 'returned')",
    );

    // *Create table loans
    await queryInterface.createTable(
      {
        schema,
        tableName: 'loans',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        book_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'books',
            },
            key: 'id',
          },
        },
        user_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema: 'sistemas',
              tableName: 'users',
            },
            key: 'id',
          },
        },
        loaned_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        devolution_date: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        returned_at: {
          type: Sequelize.DATE,
        },
        loan_status: {
          type: 'LOAN_STATUS',
          allowNull: false,
        },
        loaned_status: {
          type: 'LOANED_STATUS',
          allowNull: false,
        },
        ...timestamp,
      },
    );

    // *Create table penalties
    await queryInterface.createTable(
      {
        schema,
        tableName: 'penalties',
      },
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        loan_id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: {
              schema,
              tableName: 'loans',
            },
            key: 'id',
          },
        },
        description: {
          type: Sequelize.STRING,
        },
        amount: {
          type: Sequelize.DECIMAL(10, 2),
          allowNull: false,
        },
        ...timestamp,
      },
    );
  },

  async down(queryInterface, Sequelize) {
    const schema = 'biblioteca';

    // *Drop table penalties
    await queryInterface.dropTable({
      schema,
      tableName: 'penalties',
    });

    // *Drop table loans
    await queryInterface.dropTable({
      schema,
      tableName: 'loans',
    });

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

    // *Drop loaned status enum
    await queryInterface.sequelize.query('DROP TYPE LOANED_STATUS');

    // *Drop loan estatus enums
    await queryInterface.sequelize.query('DROP TYPE LOAN_STATUS');
  },
};
