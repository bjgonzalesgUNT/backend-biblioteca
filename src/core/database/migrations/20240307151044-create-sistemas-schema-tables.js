'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //* Create "personas" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'people',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        surnames: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        names: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        nacionality: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        document: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        telephone: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        gender: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        date: {
          type: Sequelize.DataTypes.DATEONLY,
        },

        address: {
          type: Sequelize.DataTypes.STRING,
        },

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
      },
    );

    //* Create "roles" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'roles',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        description: {
          type: Sequelize.DataTypes.STRING,
        },

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
      },
    );

    //* Create "usuarios" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'users',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        username: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },

        password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        person_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          unique: true,
          references: {
            model: 'people',
            key: 'id',
          },
        },

        role_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },

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
      },
    );

    //* Create "paginas" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'pages',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        name: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        description: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        path: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        icon: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

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
      },
    );

    //* Create "roles_paginas" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'roles_pages',
      },
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        role_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'id',
          },
        },

        page_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'pages',
            key: 'id',
          },
        },

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
      },
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'roles_pages',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'pages',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'users',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'roles',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'people',
    });
  },
};
