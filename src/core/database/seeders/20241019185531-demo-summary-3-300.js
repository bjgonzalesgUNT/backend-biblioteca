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
          summary_2_id: 31,
          code: '300',
          description: 'Ciencias sociales',
        },
        {
          summary_2_id: 31,
          code: '301',
          description: 'Sociología y antropología',
        },
        { summary_2_id: 31, code: '302', description: 'Interacción social' },
        { summary_2_id: 31, code: '303', description: 'Procesos sociales' },
        {
          summary_2_id: 31,
          code: '304',
          description: 'Factores que afectan el comportamiento social',
        },
        { summary_2_id: 31, code: '305', description: 'Grupos sociales' },
        {
          summary_2_id: 31,
          code: '306',
          description: 'Cultura e instituciones',
        },
        { summary_2_id: 31, code: '307', description: 'Comunidades' },
        { summary_2_id: 31, code: '308', description: '(No especificado)' },
        { summary_2_id: 31, code: '309', description: '(No especificado)' },
        { summary_2_id: 32, code: '310', description: 'Estadística general' },
        { summary_2_id: 32, code: '311', description: '(No especificado)' },
        { summary_2_id: 32, code: '312', description: '(No especificado)' },
        { summary_2_id: 32, code: '313', description: '(No especificado)' },
        { summary_2_id: 32, code: '314', description: 'De Europa' },
        { summary_2_id: 32, code: '315', description: 'De Asia' },
        { summary_2_id: 32, code: '316', description: 'De África' },
        { summary_2_id: 32, code: '317', description: 'De América del Norte' },
        { summary_2_id: 32, code: '318', description: 'De América del Sur' },
        {
          summary_2_id: 32,
          code: '319',
          description: 'De otras partes del mundo',
        },
        {
          summary_2_id: 33,
          code: '320',
          description: 'Ciencia política',
        },
        {
          summary_2_id: 33,
          code: '321',
          description: 'Sistemas de gobierno y estados',
        },
        {
          summary_2_id: 33,
          code: '322',
          description: 'Relaciones del Estado con grupos organizados',
        },
        {
          summary_2_id: 33,
          code: '323',
          description: 'Derechos civiles y políticos',
        },
        { summary_2_id: 33, code: '324', description: 'El proceso político' },
        {
          summary_2_id: 33,
          code: '325',
          description: 'Migración y colonización internacionales',
        },
        {
          summary_2_id: 33,
          code: '326',
          description: 'Esclavitud y emancipación',
        },
        {
          summary_2_id: 33,
          code: '327',
          description: 'Relaciones internacionales',
        },
        {
          summary_2_id: 33,
          code: '328',
          description: 'El proceso legislativo',
        },
        { summary_2_id: 33, code: '329', description: '(No especificado)' },
        {
          summary_2_id: 34,
          code: '330',
          description: 'Economía',
        },
        { summary_2_id: 34, code: '331', description: 'Economía laboral' },
        { summary_2_id: 34, code: '332', description: 'Economía financiera' },
        { summary_2_id: 34, code: '333', description: 'Economía de la tierra' },
        { summary_2_id: 34, code: '334', description: 'Cooperativas' },
        {
          summary_2_id: 34,
          code: '335',
          description: 'Socialismo y sistemas relacionados',
        },
        { summary_2_id: 34, code: '336', description: 'Finanzas públicas' },
        {
          summary_2_id: 34,
          code: '337',
          description: 'Economía internacional',
        },
        { summary_2_id: 34, code: '338', description: 'Producción' },
        {
          summary_2_id: 34,
          code: '339',
          description: 'Macroeconomía y temas relacionados',
        },
        {
          summary_2_id: 35,
          code: '340',
          description: 'Derecho',
        },
        { summary_2_id: 35, code: '341', description: 'Derecho internacional' },
        {
          summary_2_id: 35,
          code: '342',
          description: 'Derecho constitucional y administrativo',
        },
        {
          summary_2_id: 35,
          code: '343',
          description: 'Derecho militar, tributario, mercantil, industrial',
        },
        {
          summary_2_id: 35,
          code: '344',
          description:
            'Derecho social, laboral, de bienestar social y relacionados',
        },
        { summary_2_id: 35, code: '345', description: 'Derecho penal' },
        { summary_2_id: 35, code: '346', description: 'Derecho privado' },
        {
          summary_2_id: 35,
          code: '347',
          description: 'Procedimiento y tribunales civiles',
        },
        {
          summary_2_id: 35,
          code: '348',
          description: 'Leyes (Estatutos), reglamentaciones, jurisprudencia',
        },
        {
          summary_2_id: 35,
          code: '349',
          description: 'Derecho de jurisprudencia y áreas específicas',
        },
        {
          summary_2_id: 36,
          code: '350',
          description: 'Administración pública',
        },
        {
          summary_2_id: 36,
          code: '351',
          description: 'De gobiernos centrales',
        },
        { summary_2_id: 36, code: '352', description: 'De gobiernos locales' },
        {
          summary_2_id: 36,
          code: '353',
          description: 'De gobiernos federales y estatales de Estados Unidos',
        },
        {
          summary_2_id: 36,
          code: '354',
          description: 'De gobiernos centrales específicos',
        },
        { summary_2_id: 36, code: '355', description: 'Ciencia militar' },
        {
          summary_2_id: 36,
          code: '356',
          description: 'Fuerza y guerra de infantería',
        },
        {
          summary_2_id: 36,
          code: '357',
          description: 'Fuerza y guerra montada',
        },
        {
          summary_2_id: 36,
          code: '358',
          description: 'Otras fuerzas y servicios especializados',
        },
        {
          summary_2_id: 36,
          code: '359',
          description: 'Fuerzas de guerra marítimas (navales)',
        },
        {
          summary_2_id: 37,
          code: '360',
          description: 'Servicios sociales; asociaciones',
        },
        {
          summary_2_id: 37,
          code: '361',
          description: 'Problemas sociales y bienestar social en general',
        },
        {
          summary_2_id: 37,
          code: '362',
          description: 'Problemas y servicios de bienestar social',
        },
        {
          summary_2_id: 37,
          code: '363',
          description: 'Otros problemas y servicios sociales',
        },
        { summary_2_id: 37, code: '364', description: 'Criminología' },
        {
          summary_2_id: 37,
          code: '365',
          description: 'Instituciones penales y relacionadas',
        },
        { summary_2_id: 37, code: '366', description: 'Asociaciones' },
        {
          summary_2_id: 37,
          code: '367',
          description: 'Clubes de carácter general',
        },
        { summary_2_id: 37, code: '368', description: 'Seguros' },
        {
          summary_2_id: 37,
          code: '369',
          description: 'Varias clases de asociaciones',
        },
        {
          summary_2_id: 38,
          code: '370',
          description: 'Educación',
        },
        {
          summary_2_id: 38,
          code: '371',
          description: 'Administración escolar; educación especial',
        },
        { summary_2_id: 38, code: '372', description: 'Educación primaria' },
        { summary_2_id: 38, code: '373', description: 'Educación secundaria' },
        { summary_2_id: 38, code: '374', description: 'Educación de adultos' },
        { summary_2_id: 38, code: '375', description: 'Currículos' },
        {
          summary_2_id: 38,
          code: '376',
          description: 'Educación de las mujeres',
        },
        { summary_2_id: 38, code: '377', description: 'Escuelas y religión' },
        { summary_2_id: 38, code: '378', description: 'Educación superior' },
        {
          summary_2_id: 38,
          code: '379',
          description: 'Reglamentación, control, apoyo gubernamentales',
        },
        {
          summary_2_id: 39,
          code: '380',
          description: 'Comercio, comunicaciones, transporte',
        },
        {
          summary_2_id: 39,
          code: '381',
          description: 'Comercio interno (Comercio doméstico)',
        },
        {
          summary_2_id: 39,
          code: '382',
          description: 'Comercio internacional (Comercio exterior)',
        },
        {
          summary_2_id: 39,
          code: '383',
          description: 'Comunicación postal (Correos)',
        },
        {
          summary_2_id: 39,
          code: '384',
          description: 'Comunicaciones, Telecomunicaciones',
        },
        {
          summary_2_id: 39,
          code: '385',
          description: 'Transporte ferroviario',
        },
        {
          summary_2_id: 39,
          code: '386',
          description:
            'Transporte por vía acuática interior y en transbordador',
        },
        {
          summary_2_id: 39,
          code: '387',
          description: 'Transporte acuático, aéreo, espacial',
        },
        {
          summary_2_id: 39,
          code: '388',
          description: 'Transporte, Transporte terrestre',
        },
        {
          summary_2_id: 39,
          code: '389',
          description: 'Metrología y normalización',
        },
        {
          summary_2_id: 40,
          code: '390',
          description: 'Costumbres, etiqueta, folclor',
        },
        {
          summary_2_id: 40,
          code: '391',
          description: 'Traje y apariencia personal',
        },
        {
          summary_2_id: 40,
          code: '392',
          description: 'Costumbres del ciclo de vida y de la vida doméstica',
        },
        { summary_2_id: 40, code: '393', description: 'Costumbres mortuorias' },
        { summary_2_id: 40, code: '394', description: 'Costumbres generales' },
        { summary_2_id: 40, code: '395', description: 'Etiqueta (Modales)' },
        { summary_2_id: 40, code: '396', description: '(No especificado)' },
        { summary_2_id: 40, code: '397', description: '(No especificado)' },
        { summary_2_id: 40, code: '398', description: 'Folclor' },
        {
          summary_2_id: 40,
          code: '399',
          description: 'Costumbres de guerra y diplomacia',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
