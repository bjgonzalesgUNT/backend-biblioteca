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
        description: 'CIENCIAS SOCIALES',
      },
      {
        summary_2_id: 31,
        code: '301',
        description: 'SOCIOLOGÍA Y ANTROPOLOGÍA',
      },
      { summary_2_id: 31, code: '302', description: 'INTERACCIÓN SOCIAL' },
      { summary_2_id: 31, code: '303', description: 'PROCESOS SOCIALES' },
      {
        summary_2_id: 31,
        code: '304',
        description: 'FACTORES QUE AFECTAN EL COMPORTAMIENTO SOCIAL',
      },
      { summary_2_id: 31, code: '305', description: 'GRUPOS SOCIALES' },
      {
        summary_2_id: 31,
        code: '306',
        description: 'CULTURA E INSTITUCIONES',
      },
      { summary_2_id: 31, code: '307', description: 'COMUNIDADES' },
      { summary_2_id: 31, code: '308', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 31, code: '309', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 32, code: '310', description: 'ESTADÍSTICA GENERAL' },
      { summary_2_id: 32, code: '311', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 32, code: '312', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 32, code: '313', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 32, code: '314', description: 'DE EUROPA' },
      { summary_2_id: 32, code: '315', description: 'DE ASIA' },
      { summary_2_id: 32, code: '316', description: 'DE ÁFRICA' },
      { summary_2_id: 32, code: '317', description: 'DE AMÉRICA DEL NORTE' },
      { summary_2_id: 32, code: '318', description: 'DE AMÉRICA DEL SUR' },
      {
        summary_2_id: 32,
        code: '319',
        description: 'DE OTRAS PARTES DEL MUNDO',
      },
      {
        summary_2_id: 33,
        code: '320',
        description: 'CIENCIA POLÍTICA',
      },
      {
        summary_2_id: 33,
        code: '321',
        description: 'SISTEMAS DE GOBIERNO Y ESTADOS',
      },
      {
        summary_2_id: 33,
        code: '322',
        description: 'RELACIONES DEL ESTADO CON GRUPOS ORGANIZADOS',
      },
      {
        summary_2_id: 33,
        code: '323',
        description: 'DERECHOS CIVILES Y POLÍTICOS',
      },
      { summary_2_id: 33, code: '324', description: 'EL PROCESO POLÍTICO' },
      {
        summary_2_id: 33,
        code: '325',
        description: 'MIGRACIÓN Y COLONIZACIÓN INTERNACIONALES',
      },
      {
        summary_2_id: 33,
        code: '326',
        description: 'ESCLAVITUD Y EMANCIPACIÓN',
      },
      {
        summary_2_id: 33,
        code: '327',
        description: 'RELACIONES INTERNACIONALES',
      },
      {
        summary_2_id: 33,
        code: '328',
        description: 'EL PROCESO LEGISLATIVO',
      },
      { summary_2_id: 33, code: '329', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 34,
        code: '330',
        description: 'ECONOMÍA',
      },
      { summary_2_id: 34, code: '331', description: 'ECONOMÍA LABORAL' },
      { summary_2_id: 34, code: '332', description: 'ECONOMÍA FINANCIERA' },
      { summary_2_id: 34, code: '333', description: 'ECONOMÍA DE LA TIERRA' },
      { summary_2_id: 34, code: '334', description: 'COOPERATIVAS' },
      {
        summary_2_id: 34,
        code: '335',
        description: 'SOCIALISMO Y SISTEMAS RELACIONADOS',
      },
      { summary_2_id: 34, code: '336', description: 'FINANZAS PÚBLICAS' },
      {
        summary_2_id: 34,
        code: '337',
        description: 'ECONOMÍA INTERNACIONAL',
      },
      { summary_2_id: 34, code: '338', description: 'PRODUCCIÓN' },
      {
        summary_2_id: 34,
        code: '339',
        description: 'MACROECONOMÍA Y TEMAS RELACIONADOS',
      },
      {
        summary_2_id: 35,
        code: '340',
        description: 'DERECHO',
      },
      { summary_2_id: 35, code: '341', description: 'DERECHO INTERNACIONAL' },
      {
        summary_2_id: 35,
        code: '342',
        description: 'DERECHO CONSTITUCIONAL Y ADMINISTRATIVO',
      },
      {
        summary_2_id: 35,
        code: '343',
        description: 'DERECHO MILITAR, TRIBUTARIO, MERCANTIL, INDUSTRIAL',
      },
      {
        summary_2_id: 35,
        code: '344',
        description:
        'DERECHO SOCIAL, LABORAL, DE BIENESTAR SOCIAL Y RELACIONADOS',
      },
      { summary_2_id: 35, code: '345', description: 'DERECHO PENAL' },
      { summary_2_id: 35, code: '346', description: 'DERECHO PRIVADO' },
      {
        summary_2_id: 35,
        code: '347',
        description: 'PROCEDIMIENTO Y TRIBUNALES CIVILES',
      },
      {
        summary_2_id: 35,
        code: '348',
        description: 'LEYES (ESTATUTOS), REGLAMENTACIONES, JURISPRUDENCIA',
      },
      {
        summary_2_id: 35,
        code: '349',
        description: 'DERECHO DE JURISPRUDENCIA Y ÁREAS ESPECÍFICAS',
      },
      {
        summary_2_id: 36,
        code: '350',
        description: 'ADMINISTRACIÓN PÚBLICA',
      },
      {
        summary_2_id: 36,
        code: '351',
        description: 'DE GOBIERNOS CENTRALES',
      },
      { summary_2_id: 36, code: '352', description: 'DE GOBIERNOS LOCALES' },
      {
        summary_2_id: 36,
        code: '353',
        description: 'DE GOBIERNOS FEDERALES Y ESTATALES DE ESTADOS UNIDOS',
      },
      {
        summary_2_id: 36,
        code: '354',
        description: 'DE GOBIERNOS CENTRALES ESPECÍFICOS',
      },
      { summary_2_id: 36, code: '355', description: 'CIENCIA MILITAR' },
      {
        summary_2_id: 36,
        code: '356',
        description: 'FUERZA Y GUERRA DE INFANTERÍA',
      },
      {
        summary_2_id: 36,
        code: '357',
        description: 'FUERZA Y GUERRA MONTADA',
      },
      {
        summary_2_id: 36,
        code: '358',
        description: 'OTRAS FUERZAS Y SERVICIOS ESPECIALIZADOS',
      },
      {
        summary_2_id: 36,
        code: '359',
        description: 'FUERZAS DE GUERRA MARÍTIMAS (NAVALLES)',
      },
      {
        summary_2_id: 37,
        code: '360',
        description: 'SERVICIOS SOCIALES; ASOCIACIONES',
      },
      {
        summary_2_id: 37,
        code: '361',
        description: 'PROBLEMAS SOCIALES Y BIENESTAR SOCIAL EN GENERAL',
      },
      {
        summary_2_id: 37,
        code: '362',
        description: 'PROBLEMAS Y SERVICIOS DE BIENESTAR SOCIAL',
      },
      {
        summary_2_id: 37,
        code: '363',
        description: 'OTROS PROBLEMAS Y SERVICIOS SOCIALES',
      },
      { summary_2_id: 37, code: '364', description: 'CRIMINOLOGÍA' },
      {
        summary_2_id: 37,
        code: '365',
        description: 'INSTITUCIONES PENALES Y RELACIONADAS',
      },
      { summary_2_id: 37, code: '366', description: 'ASOCIACIONES' },
      {
        summary_2_id: 37,
        code: '367',
        description: 'CLUBES DE CARÁCTER GENERAL',
      },
      { summary_2_id: 37, code: '368', description: 'SEGUROS' },
      {
        summary_2_id: 37,
        code: '369',
        description: 'VARIAS CLASES DE ASOCIACIONES',
      },
      {
        summary_2_id: 38,
        code: '370',
        description: 'EDUCACIÓN',
      },
      {
        summary_2_id: 38,
        code: '371',
        description: 'ADMINISTRACIÓN ESCOLAR; EDUCACIÓN ESPECIAL',
      },
      { summary_2_id: 38, code: '372', description: 'EDUCACIÓN PRIMARIA' },
      { summary_2_id: 38, code: '373', description: 'EDUCACIÓN SECUNDARIA' },
      { summary_2_id: 38, code: '374', description: 'EDUCACIÓN DE ADULTOS' },
      { summary_2_id: 38, code: '375', description: 'CURRÍCULOS' },
      {
        summary_2_id: 38,
        code: '376',
        description: 'EDUCACIÓN DE LAS MUJERES',
      },
      { summary_2_id: 38, code: '377', description: 'ESCUELAS Y RELIGIÓN' },
      { summary_2_id: 38, code: '378', description: 'EDUCACIÓN SUPERIOR' },
      {
        summary_2_id: 38,
        code: '379',
        description: 'REGLAMENTACIÓN, CONTROL, APOYO GUBERNAMENTALES',
      },
      {
        summary_2_id: 39,
        code: '380',
        description: 'COMERCIO, COMUNICACIONES, TRANSPORTE',
      },
      {
        summary_2_id: 39,
        code: '381',
        description: 'COMERCIO INTERNO (COMERCIO DOMÉSTICO)',
      },
      {
        summary_2_id: 39,
        code: '382',
        description: 'COMERCIO INTERNACIONAL (COMERCIO EXTERIOR)',
      },
      {
        summary_2_id: 39,
        code: '383',
        description: 'COMUNICACIÓN POSTAL (CORREOS)',
      },
      {
        summary_2_id: 39,
        code: '384',
        description: 'COMUNICACIONES, TELECOMUNICACIONES',
      },
      {
        summary_2_id: 39,
        code: '385',
        description: 'TRANSPORTE FERROVIARIO',
      },
      {
        summary_2_id: 39,
        code: '386',
        description:
        'TRANSPORTE POR VÍA ACUÁTICA INTERIOR Y EN TRANSBORDADOR',
      },
      {
        summary_2_id: 39,
        code: '387',
        description: 'TRANSPORTE ACUÁTICO, AÉREO, ESPACIAL',
      },
      {
        summary_2_id: 39,
        code: '388',
        description: 'TRANSPORTE, TRANSPORTE TERRESTRE',
      },
      {
        summary_2_id: 39,
        code: '389',
        description: 'METROLOGÍA Y NORMALIZACIÓN',
      },
      {
        summary_2_id: 40,
        code: '390',
        description: 'COSTUMBRES, ETIQUETA, FOLCLORE',
      },
      {
        summary_2_id: 40,
        code: '391',
        description: 'TRAJE Y APARIENCIA PERSONAL',
      },
      {
        summary_2_id: 40,
        code: '392',
        description: 'COSTUMBRES DEL CICLO DE VIDA Y DE LA VIDA DOMÉSTICA',
      },
      { summary_2_id: 40, code: '393', description: 'COSTUMBRES MORTUORIAS' },
      { summary_2_id: 40, code: '394', description: 'COSTUMBRES GENERALES' },
      { summary_2_id: 40, code: '395', description: 'ETIQUETA (MODALES)' },
      { summary_2_id: 40, code: '396', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 40, code: '397', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 40, code: '398', description: 'FOLCLORE' },
      {
        summary_2_id: 40,
        code: '399',
        description: 'COSTUMBRES DE GUERRA Y DIPLOMACIA',
      },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
