'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `create or replace function sistemas.fn_get_user_by_username(_username varchar)
      returns table (
        id int4, 
        username varchar,
        names varchar,
        surnames varchar,
        role varchar,
        status boolean
      )
      as $$
      begin
        return query
        select 
          u.id as id,
          u.username as username,
          p.names as names,
          p.surnames as surnames,
          r."name" as role,
          case	
            when u."deletedAt" is null then true
            else false
          end as status
        from sistemas.users u
        inner join sistemas.roles r 
        on u.role_id = r.id
        inner join sistemas.people p 
        on u.person_id = p.id
        where u.username = _username;
      end;
      $$ language plpgsql;
      
      create or replace function sistemas.fn_get_users_paginate(_limit int4, _offset int4)
      returns table (data json)
      as $$
      begin
        return query
        select json_build_object(
          'count', (select count(*) from sistemas.users),
          'rows', (
            select json_agg(subquery) from (
              select 
                u.id as id,
                u.username as username,
                p.names as names,
                p.surnames as surnames,
                r."name" as role,
                case	
                  when u."deletedAt" is null then true
                  else false
                end as status
              from sistemas.users u
              inner join sistemas.roles r 
              on u.role_id = r.id
              inner join sistemas.people p 
              on u.person_id = p.id
              order by u."createdAt" desc
            ) as subquery
          ) 
        );
      end;
      $$ language plpgsql;

      `,
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      `
      drop function sistemas.fn_get_user_by_username(_username varchar);
      drop function sistemas.fn_get_users_paginate(_limit int4, _offset int4);
      `,
    );
  },
};
