'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    //* Create "personas" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'personas',
      },
      {
        per_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        per_ape_pat: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_ape_mat: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_nombres: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_nacionalidad: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_num_doc: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          unique: true,
        },

        per_num_tel: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_genero: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        per_fec_nac: {
          type: Sequelize.DataTypes.STRING,
        },

        per_domicilio: {
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
        tableName: 'usuarios',
      },
      {
        usu_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        usu_email: {
          type: Sequelize.DataTypes.STRING,
          unique: true,
          allowNull: false,
        },

        usu_password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        usu_per_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'personas',
            key: 'per_id',
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

    //* Create "roles" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'roles',
      },
      {
        rol_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        rol_nombre: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        rol_descripcion: {
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

    //* Create "paginas" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'paginas',
      },
      {
        pag_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        pag_rut_nom: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        pag_rut_des: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        pag_ruta: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
        },

        pag_icono: {
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
        tableName: 'roles_paginas',
      },
      {
        rol_pag_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        rol_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'rol_id',
          },
        },

        pag_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'paginas',
            key: 'pag_id',
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

    //* Create "usuarios_roles" table
    await queryInterface.createTable(
      {
        schema: 'sistemas',
        tableName: 'usuarios_roles',
      },
      {
        usr_id: {
          type: Sequelize.DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },

        usr_usu_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'usuarios',
            key: 'usu_id',
          },
        },

        usr_rol_id: {
          type: Sequelize.DataTypes.INTEGER,
          allowNull: false,
          references: {
            model: 'roles',
            key: 'rol_id',
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
      tableName: 'usuarios_roles',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'roles_paginas',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'paginas',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'roles',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'usuarios',
    });

    await queryInterface.dropTable({
      schema: 'sistemas',
      tableName: 'personas',
    });
  },
};
