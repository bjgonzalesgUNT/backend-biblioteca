'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
        schema: 'biblioteca',
        tableName: 'summary_3',
      },
      [
        { summary_2_id: 41, code: '401', description: 'Filosofía y teoría' },
        { summary_2_id: 41, code: '402', description: 'Miscelánea' },
        {
          summary_2_id: 41,
          code: '403',
          description: 'Diccionarios y enciclopedias',
        },
        { summary_2_id: 41, code: '404', description: 'Temas especiales' },
        {
          summary_2_id: 41,
          code: '405',
          description: 'Publicaciones en serie',
        },
        {
          summary_2_id: 41,
          code: '406',
          description: 'Organizaciones y administración',
        },
        {
          summary_2_id: 41,
          code: '407',
          description: 'Educación, investigación, temas relacionados',
        },
        {
          summary_2_id: 41,
          code: '408',
          description: 'En relación con clases de personas',
        },
        {
          summary_2_id: 41,
          code: '409',
          description: 'Tratamiento geográfico y de personas',
        },
        { summary_2_id: 42, code: '411', description: 'Sistemas de escritura' },
        { summary_2_id: 42, code: '412', description: 'Etimología' },
        { summary_2_id: 42, code: '413', description: 'Diccionarios' },
        { summary_2_id: 42, code: '414', description: 'Fonología' },
        {
          summary_2_id: 42,
          code: '415',
          description: 'Sistemas estructurales (Gramática)',
        },
        { summary_2_id: 42, code: '416', description: '(No especificado)' },
        {
          summary_2_id: 42,
          code: '417',
          description: 'Dialectología y lingüística histórica',
        },
        {
          summary_2_id: 42,
          code: '418',
          description: 'Uso estándar, Lingüística aplicada',
        },
        {
          summary_2_id: 42,
          code: '419',
          description: 'Lenguajes verbales no hablados ni escritos',
        },
        {
          summary_2_id: 43,
          code: '421',
          description: 'Sistema de escritura y fonología inglesa',
        },
        { summary_2_id: 43, code: '422', description: 'Etimología inglesa' },
        {
          summary_2_id: 43,
          code: '423',
          description: 'Diccionarios de inglés',
        },
        { summary_2_id: 43, code: '424', description: '(No especificado)' },
        { summary_2_id: 43, code: '425', description: 'Gramática inglesa' },
        { summary_2_id: 43, code: '426', description: '(No especificado)' },
        {
          summary_2_id: 43,
          code: '427',
          description: 'Variaciones de la lengua inglesa',
        },
        {
          summary_2_id: 43,
          code: '428',
          description: 'Uso del inglés estándar',
        },
        {
          summary_2_id: 43,
          code: '429',
          description: 'Inglés antiguo (Anglosajón)',
        },
        {
          summary_2_id: 44,
          code: '431',
          description: 'Sistemas de escritura y fonología alemana',
        },
        { summary_2_id: 44, code: '432', description: 'Etimología alemana' },
        { summary_2_id: 44, code: '433', description: 'Diccionario de alemán' },
        { summary_2_id: 44, code: '434', description: '(No especificado)' },
        { summary_2_id: 44, code: '435', description: 'Gramática alemana' },
        { summary_2_id: 44, code: '436', description: '(No especificado)' },
        {
          summary_2_id: 44,
          code: '437',
          description: 'Variaciones de la lengua alemana',
        },
        {
          summary_2_id: 44,
          code: '438',
          description: 'Uso del alemán estándar',
        },
        {
          summary_2_id: 44,
          code: '439',
          description: 'Otras lenguas germánicas',
        },
        {
          summary_2_id: 45,
          code: '441',
          description: 'Sistema de escritura y fonología franceses',
        },
        { summary_2_id: 45, code: '442', description: 'Etimología francesa' },
        {
          summary_2_id: 45,
          code: '443',
          description: 'Diccionario de francés',
        },
        { summary_2_id: 45, code: '444', description: '(No especificado)' },
        { summary_2_id: 45, code: '445', description: 'Gramática francesa' },
        { summary_2_id: 45, code: '446', description: '(No especificado)' },
        {
          summary_2_id: 45,
          code: '447',
          description: 'Variaciones del francés',
        },
        {
          summary_2_id: 45,
          code: '448',
          description: 'Uso del francés estándar',
        },
        { summary_2_id: 45, code: '449', description: 'Provenzal y catalán' },
        {
          summary_2_id: 46,
          code: '451',
          description: 'Sistema de escritura y fonología italianos',
        },
        { summary_2_id: 46, code: '452', description: 'Etimología italiana' },
        {
          summary_2_id: 46,
          code: '453',
          description: 'Diccionarios de italiano',
        },
        { summary_2_id: 46, code: '454', description: '(No especificado)' },
        { summary_2_id: 46, code: '455', description: 'Gramática italiana' },
        { summary_2_id: 46, code: '456', description: '(No especificado)' },
        {
          summary_2_id: 46,
          code: '457',
          description: 'Variaciones del italiano',
        },
        {
          summary_2_id: 46,
          code: '458',
          description: 'Uso del italiano estándar',
        },
        { summary_2_id: 46, code: '459', description: 'Rumano y retorromano' },
        {
          summary_2_id: 47,
          code: '461',
          description: 'Sistema de escritura y fonología',
        },
        { summary_2_id: 47, code: '462', description: 'Etimología española' },
        {
          summary_2_id: 47,
          code: '463',
          description: 'Diccionarios de español',
        },
        { summary_2_id: 47, code: '464', description: '(No especificado)' },
        { summary_2_id: 47, code: '465', description: 'Gramática española' },
        { summary_2_id: 47, code: '466', description: '(No especificado)' },
        {
          summary_2_id: 47,
          code: '467',
          description: 'Variaciones del español',
        },
        {
          summary_2_id: 47,
          code: '468',
          description: 'Uso del español estándar',
        },
        { summary_2_id: 47, code: '469', description: 'Portugués' },
        {
          summary_2_id: 48,
          code: '471',
          description: 'Escritura y fonología latinas clásicas',
        },
        {
          summary_2_id: 48,
          code: '472',
          description: 'Etimología latina clásica',
        },
        {
          summary_2_id: 48,
          code: '473',
          description: 'Diccionarios de latín clásico',
        },
        { summary_2_id: 48, code: '474', description: '(No especificado)' },
        {
          summary_2_id: 48,
          code: '475',
          description: 'Gramática latina clásica',
        },
        { summary_2_id: 48, code: '476', description: '(No especificado)' },
        {
          summary_2_id: 48,
          code: '477',
          description: 'Latín arcaico, postclásico, vulgar',
        },
        { summary_2_id: 48, code: '478', description: 'Uso del latín clásico' },
        {
          summary_2_id: 48,
          code: '479',
          description: 'Otras lenguas itálicas',
        },
        {
          summary_2_id: 49,
          code: '481',
          description: 'Escritura y fonología griegas clásicas',
        },
        {
          summary_2_id: 49,
          code: '482',
          description: 'Etimología griega clásica',
        },
        {
          summary_2_id: 49,
          code: '483',
          description: 'Diccionarios de griego clásico',
        },
        { summary_2_id: 49, code: '484', description: '(No especificado)' },
        {
          summary_2_id: 49,
          code: '485',
          description: 'Gramática griega clásica',
        },
        { summary_2_id: 49, code: '486', description: '(No especificado)' },
        {
          summary_2_id: 49,
          code: '487',
          description: 'Griego preclásico y postclásico',
        },
        {
          summary_2_id: 49,
          code: '488',
          description: 'Uso del griego clásico',
        },
        {
          summary_2_id: 49,
          code: '489',
          description: 'Otras lenguas helénicas',
        },
        {
          summary_2_id: 50,
          code: '491',
          description: 'Lenguas indoeuropeas orientales y celtas',
        },
        {
          summary_2_id: 50,
          code: '492',
          description: 'Lenguas afroasiáticas, Semíticas',
        },
        {
          summary_2_id: 50,
          code: '493',
          description: 'Lenguas afroasiáticas, no semíticas',
        },
        {
          summary_2_id: 50,
          code: '494',
          description: 'Lenguas uralaltaicas, paleosiberianas, dravídicas',
        },
        {
          summary_2_id: 50,
          code: '495',
          description: 'Lenguas del oriente y sudoriente de Asia',
        },
        { summary_2_id: 50, code: '496', description: 'Lenguas africanas' },
        {
          summary_2_id: 50,
          code: '497',
          description: 'Lenguas nativas de América del Norte',
        },
        {
          summary_2_id: 50,
          code: '498',
          description: 'Lenguas nativas de América del Sur',
        },
        { summary_2_id: 50, code: '499', description: 'Lenguas varias' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
