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
      {
        summary_2_id: 41,
        code: '400',
        description: 'LENGUA',
      },
      { summary_2_id: 41, code: '401', description: 'FILOSOFÍA Y TEORÍA' },
      { summary_2_id: 41, code: '402', description: 'MISCELÁNEA' },
      {
        summary_2_id: 41,
        code: '403',
        description: 'DICCIONARIOS Y ENCICLOPEDIAS',
      },
      { summary_2_id: 41, code: '404', description: 'TEMAS ESPECIALES' },
      {
        summary_2_id: 41,
        code: '405',
        description: 'PUBLICACIONES EN SERIE',
      },
      {
        summary_2_id: 41,
        code: '406',
        description: 'ORGANIZACIONES Y ADMINISTRACIÓN',
      },
      {
        summary_2_id: 41,
        code: '407',
        description: 'EDUCACIÓN, INVESTIGACIÓN, TEMAS RELACIONADOS',
      },
      {
        summary_2_id: 41,
        code: '408',
        description: 'EN RELACIÓN CON CLASES DE PERSONAS',
      },
      {
        summary_2_id: 41,
        code: '409',
        description: 'TRATAMIENTO GEOGRÁFICO Y DE PERSONAS',
      },
      {
        summary_2_id: 42,
        code: '410',
        description: 'LINGÜÍSTICA',
      },
      { summary_2_id: 42, code: '411', description: 'SISTEMAS DE ESCRITURA' },
      { summary_2_id: 42, code: '412', description: 'ETIMOLOGÍA' },
      { summary_2_id: 42, code: '413', description: 'DICCIONARIOS' },
      { summary_2_id: 42, code: '414', description: 'FONOLOGÍA' },
      {
        summary_2_id: 42,
        code: '415',
        description: 'SISTEMAS ESTRUCTURALES (GRAMÁTICA)',
      },
      { summary_2_id: 42, code: '416', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 42,
        code: '417',
        description: 'DIALECTOLOGÍA Y LINGÜÍSTICA HISTÓRICA',
      },
      {
        summary_2_id: 42,
        code: '418',
        description: 'USO ESTÁNDAR, LINGÜÍSTICA APLICADA',
      },
      {
        summary_2_id: 42,
        code: '419',
        description: 'LENGUAJES VERBALES NO HABLADOS NI ESCRITOS',
      },
      {
        summary_2_id: 43,
        code: '420',
        description: 'INGLES & INGLÉS ANTIGUO',
      },
      {
        summary_2_id: 43,
        code: '421',
        description: 'SISTEMA DE ESCRITURA Y FONOLOGÍA INGLESA',
      },
      { summary_2_id: 43, code: '422', description: 'ETIMOLOGÍA INGLESA' },
      {
        summary_2_id: 43,
        code: '423',
        description: 'DICCIONARIOS DE INGLÉS',
      },
      { summary_2_id: 43, code: '424', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 43, code: '425', description: 'GRAMÁTICA INGLESA' },
      { summary_2_id: 43, code: '426', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 43,
        code: '427',
        description: 'VARIACIONES DE LA LENGUA INGLESA',
      },
      {
        summary_2_id: 43,
        code: '428',
        description: 'USO DEL INGLÉS ESTÁNDAR',
      },
      {
        summary_2_id: 43,
        code: '429',
        description: 'INGLÉS ANTIGUO (ANGLOSAJÓN)',
      },
      {
        summary_2_id: 44,
        code: '430',
        description: 'LENGUAS GERMÁNICAS, ALEMÁN',
      },
      {
        summary_2_id: 44,
        code: '431',
        description: 'SISTEMAS DE ESCRITURA Y FONOLOGÍA ALEMANA',
      },
      { summary_2_id: 44, code: '432', description: 'ETIMOLOGÍA ALEMANA' },
      { summary_2_id: 44, code: '433', description: 'DICCIONARIO DE ALEMÁN' },
      { summary_2_id: 44, code: '434', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 44, code: '435', description: 'GRAMÁTICA ALEMANA' },
      { summary_2_id: 44, code: '436', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 44,
        code: '437',
        description: 'VARIACIONES DE LA LENGUA ALEMANA',
      },
      {
        summary_2_id: 44,
        code: '438',
        description: 'USO DEL ALEMÁN ESTÁNDAR',
      },
      {
        summary_2_id: 44,
        code: '439',
        description: 'OTRAS LENGUAS GERMÁNICAS',
      },
      {
        summary_2_id: 45,
        code: '440',
        description: 'LENGUAS ROMANCES, FRANCÉS',
      },
      {
        summary_2_id: 45,
        code: '441',
        description: 'SISTEMA DE ESCRITURA Y FONOLOGÍA FRANCESAS',
      },
      { summary_2_id: 45, code: '442', description: 'ETIMOLOGÍA FRANCESA' },
      {
        summary_2_id: 45,
        code: '443',
        description: 'DICCIONARIO DE FRANCÉS',
      },
      { summary_2_id: 45, code: '444', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 45, code: '445', description: 'GRAMÁTICA FRANCESA' },
      { summary_2_id: 45, code: '446', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 45,
        code: '447',
        description: 'VARIACIONES DEL FRANCÉS',
      },
      {
        summary_2_id: 45,
        code: '448',
        description: 'USO DEL FRANCÉS ESTÁNDAR',
      },
      { summary_2_id: 45, code: '449', description: 'PROVENZAL Y CATALÁN' },
      {
        summary_2_id: 46,
        code: '450',
        description: 'ITALIANO, RUMANO, RETORROMANO',
      },
      {
        summary_2_id: 46,
        code: '451',
        description: 'SISTEMA DE ESCRITURA Y FONOLOGÍA ITALIANOS',
      },
      { summary_2_id: 46, code: '452', description: 'ETIMOLOGÍA ITALIANA' },
      {
        summary_2_id: 46,
        code: '453',
        description: 'DICCIONARIOS DE ITALIANO',
      },
      { summary_2_id: 46, code: '454', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 46, code: '455', description: 'GRAMÁTICA ITALIANA' },
      { summary_2_id: 46, code: '456', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 46,
        code: '457',
        description: 'VARIACIONES DEL ITALIANO',
      },
      {
        summary_2_id: 46,
        code: '458',
        description: 'USO DEL ITALIANO ESTÁNDAR',
      },
      { summary_2_id: 46, code: '459', description: 'RUMANO Y RETORROMANO' },
      {
        summary_2_id: 47,
        code: '460',
        description: 'LENGUAS ESPAÑOLA & PORTUGUESA',
      },
      {
        summary_2_id: 47,
        code: '461',
        description: 'SISTEMA DE ESCRITURA Y FONOLOGÍA',
      },
      { summary_2_id: 47, code: '462', description: 'ETIMOLOGÍA ESPAÑOLA' },
      {
        summary_2_id: 47,
        code: '463',
        description: 'DICCIONARIOS DE ESPAÑOL',
      },
      { summary_2_id: 47, code: '464', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 47, code: '465', description: 'GRAMÁTICA ESPAÑOLA' },
      { summary_2_id: 47, code: '466', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 47,
        code: '467',
        description: 'VARIACIONES DEL ESPAÑOL',
      },
      {
        summary_2_id: 47,
        code: '468',
        description: 'USO DEL ESPAÑOL ESTÁNDAR',
      },
      { summary_2_id: 47, code: '469', description: 'PORTUGUÉS' },
      {
        summary_2_id: 48,
        code: '470',
        description: 'LENGUAS ITÁLICAS, LATÍN',
      },
      {
        summary_2_id: 48,
        code: '471',
        description: 'ESCRITURA Y FONOLOGÍA LATINAS CLÁSICAS',
      },
      {
        summary_2_id: 48,
        code: '472',
        description: 'ETIMOLOGÍA LATINA CLÁSICA',
      },
      {
        summary_2_id: 48,
        code: '473',
        description: 'DICCIONARIOS DE LATÍN CLÁSICO',
      },
      { summary_2_id: 48, code: '474', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 48,
        code: '475',
        description: 'GRAMÁTICA LATINA CLÁSICA',
      },
      { summary_2_id: 48, code: '476', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 48,
        code: '477',
        description: 'LATÍN ARCAICO, POSTCLÁSICO, VULGAR',
      },
      { summary_2_id: 48, code: '478', description: 'USO DEL LATÍN CLÁSICO' },
      {
        summary_2_id: 48,
        code: '479',
        description: 'OTRAS LENGUAS ITÁLICAS',
      },
      {
        summary_2_id: 49,
        code: '480',
        description: 'LENGUAS HELÉNICAS, GRIEGO CLÁSICO',
      },
      {
        summary_2_id: 49,
        code: '481',
        description: 'ESCRITURA Y FONOLOGÍA GRIEGAS CLÁSICAS',
      },
      {
        summary_2_id: 49,
        code: '482',
        description: 'ETIMOLOGÍA GRIEGA CLÁSICA',
      },
      {
        summary_2_id: 49,
        code: '483',
        description: 'DICCIONARIOS DE GRIEGO CLÁSICO',
      },
      { summary_2_id: 49, code: '484', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 49,
        code: '485',
        description: 'GRAMÁTICA GRIEGA CLÁSICA',
      },
      { summary_2_id: 49, code: '486', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 49,
        code: '487',
        description: 'GRIEGO PRECLÁSICO Y POSTCLÁSICO',
      },
      {
        summary_2_id: 49,
        code: '488',
        description: 'USO DEL GRIEGO CLÁSICO',
      },
      {
        summary_2_id: 49,
        code: '489',
        description: 'OTRAS LENGUAS HELÉNICAS',
      },
      {
        summary_2_id: 50,
        code: '490',
        description: 'OTRAS LENGUAS',
      },
      {
        summary_2_id: 50,
        code: '491',
        description: 'LENGUAS INDOEUROPEAS ORIENTALES Y CELTAS',
      },
      {
        summary_2_id: 50,
        code: '492',
        description: 'LENGUAS AFROASIÁTICAS, SEMÍTICAS',
      },
      {
        summary_2_id: 50,
        code: '493',
        description: 'LENGUAS AFROASIÁTICAS, NO SEMÍTICAS',
      },
      {
        summary_2_id: 50,
        code: '494',
        description: 'LENGUAS URALALTAICAS, PALEOSIBERIANAS, DRAVÍDICAS',
      },
      {
        summary_2_id: 50,
        code: '495',
        description: 'LENGUAS DEL ORIENTE Y SUDORIENTE DE ASIA',
      },
      { summary_2_id: 50, code: '496', description: 'LENGUAS AFRICANAS' },
      {
        summary_2_id: 50,
        code: '497',
        description: 'LENGUAS NATIVAS DE AMÉRICA DEL NORTE',
      },
      {
        summary_2_id: 50,
        code: '498',
        description: 'LENGUAS NATIVAS DE AMÉRICA DEL SUR',
      },
      { summary_2_id: 50, code: '499', description: 'LENGUAS VARIAS' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
