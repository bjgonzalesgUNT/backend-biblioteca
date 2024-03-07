'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      create or replace function sistemas.fn_crear_usuario (email varchar, password varchar)
      returns table (data json)
      as $$
      declare
        new_usu_id int4;
        usu_rol_id int4;
      begin
        -- CREAR USUARIO Y RETORNAR SU ID	
        insert into sistemas.usuarios (usu_email, usu_password) 
        values (email, password) returning usu_id into new_usu_id;
      
        -- BUSCAR EL ROL POR DEFECTO (USUARIO)
        select r.rol_id into usu_rol_id
        from sistemas.roles r
        where r.rol_nombre = 'user';
      
        -- CREAR USUARIO CON ROL POR DEFECTO
        insert into sistemas.usuarios_roles (usr_rol_id, usr_usu_id)
        values (usu_rol_id, new_usu_id);
      
        return query select * from sistemas.fn_get_usuario(email);
      end
      $$ language plpgsql;
      
      
      create or replace function sistemas.fn_get_usuario (email varchar)
      returns table (data json)
      as $$
      begin 
        return query
        select json_build_object(
              'usu_id', user_id,
              'usu_email', user_email,
              'usu_password', user_password,
              'roles', user_roles
        )
        from (
            select
                u.usu_id as user_id,
                u.usu_email as user_email,
                u.usu_password as user_password,
                json_agg(
                    json_build_object(
                        'rol_id', r.rol_id,
                        'rol_nombre', r.rol_nombre
                    )
                ) as user_roles
            from sistemas.usuarios u
            inner join sistemas.usuarios_roles ur on ur.usr_usu_id = u.usu_id
            inner join sistemas.roles r on ur.usr_rol_id = r.rol_id
            where u.usu_email = email
            group by u.usu_id
        ) AS subquery1;
      end
      $$ language plpgsql;     
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(`
      drop function if exists sistemas.fn_get_usuario();
      drop function if exists sistemas.fn_crear_usuario();
    `);
  },
};
