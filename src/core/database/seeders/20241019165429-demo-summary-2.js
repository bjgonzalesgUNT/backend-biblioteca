'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
      schema: 'biblioteca',
      tableName: 'summary_2',
      },
      [
      { summary_1_id: 1, code: '000', description: 'GENERALIDADES' },
      { summary_1_id: 1, code: '010', description: 'BIBLIOGRAFÍA' },
      {
        summary_1_id: 1,
        code: '020',
        description: 'BIBLIOTECOLÓGÍA Y CIENCIAS DE LA INFORMACIÓN',
      },
      {
        summary_1_id: 1,
        code: '030',
        description: 'OBRAS ENCICLOPÉDICAS GENERALES',
      },
      { summary_1_id: 1, code: '040', description: '-' },
      {
        summary_1_id: 1,
        code: '050',
        description: 'PUBLICACIONES EN SERIE GENERALES',
      },
      {
        summary_1_id: 1,
        code: '060',
        description: 'ORGANIZACIONES GENERALES & MUSEOLOGÍA',
      },
      {
        summary_1_id: 1,
        code: '070',
        description: 'MEDIOS NOTICIOSOS, PERIODISMO, PUBLICACIÓN',
      },
      { summary_1_id: 1, code: '080', description: 'COLECCIONES GENERALES' },
      {
        summary_1_id: 1,
        code: '090',
        description: 'MANUSCRITOS & LIBROS RAROS',
      },
      {
        summary_1_id: 2,
        code: '100',
        description: 'FILOSOFÍA & PSICOLOGÍA',
      },
      { summary_1_id: 2, code: '110', description: 'META-FÍSICA' },
      {
        summary_1_id: 2,
        code: '120',
        description: 'EPISTEMOLOGÍA, CAUSALIDAD, GÉNERO HUMANO',
      },
      { summary_1_id: 2, code: '130', description: 'FENÓMENOS PARANORMALES' },
      {
        summary_1_id: 2,
        code: '140',
        description: 'ESCUELAS FILOSÓFICAS ESPECÍFICAS',
      },
      { summary_1_id: 2, code: '150', description: 'PSICOLOGÍA' },
      { summary_1_id: 2, code: '160', description: 'LÓGICA' },
      {
        summary_1_id: 2,
        code: '170',
        description: 'ÉTICA (FILOSOFÍA MORAL)',
      },
      {
        summary_1_id: 2,
        code: '180',
        description: 'FILOSOFÍA ANTIGUA, MEDIEVAL, ORIENTAL',
      },
      {
        summary_1_id: 2,
        code: '190',
        description: 'FILOSOFÍA MODERNA OCCIDENTAL',
      },
      {
        summary_1_id: 3,
        code: '200',
        description: 'RELIGIÓN',
      },
      {
        summary_1_id: 3,
        code: '210',
        description: 'FILOSOFÍA Y TEOLOGÍA DE LA RELIGIÓN',
      },
      { summary_1_id: 3, code: '220', description: 'LA BIBLIA' },
      {
        summary_1_id: 3,
        code: '230',
        description: 'CRISTIANISMO; TEOLOGÍA CRISTIANA',
      },
      {
        summary_1_id: 3,
        code: '240',
        description: 'MORAL CRISTIANA & TEOLOGÍA PIADOSA',
      },
      {
        summary_1_id: 3,
        code: '250',
        description: 'ORDENES CRISTIANAS & IGLESIA LOCAL',
      },
      {
        summary_1_id: 3,
        code: '260',
        description: 'TEOLOGÍA SOCIAL Y ECCLESIÁSTICA',
      },
      {
        summary_1_id: 3,
        code: '270',
        description: 'HISTORIA DEL CRISTIANISMO Y DE LA IGLESIA CRISTIANA',
      },
      {
        summary_1_id: 3,
        code: '280',
        description: 'CONFESIONES & SECTAS CRISTIANAS',
      },
      {
        summary_1_id: 3,
        code: '290',
        description: 'RELIGIÓN COMPARADA Y OTRAS RELIGIONES',
      },
      {
        summary_1_id: 4,
        code: '300',
        description: 'CIENCIAS SOCIALES',
      },
      {
        summary_1_id: 4,
        code: '310',
        description: 'COLECS. DE ESTADÍSTICA GENERAL',
      },
      { summary_1_id: 4, code: '320', description: 'CIENCIA POLÍTICA' },
      { summary_1_id: 4, code: '330', description: 'ECONOMÍA' },
      { summary_1_id: 4, code: '340', description: 'DERECHO' },
      {
        summary_1_id: 4,
        code: '350',
        description: 'ADMINISTRACIÓN PÚBLICA Y CIENCIA MILITAR',
      },
      {
        summary_1_id: 4,
        code: '360',
        description: 'PROBLEMAS Y SERVICIOS SOCIALES; ASOCIACIONES',
      },
      { summary_1_id: 4, code: '370', description: 'EDUCACIÓN' },
      {
        summary_1_id: 4,
        code: '380',
        description: 'COMERCIO, COMUNICACIONES, TRANSPORTE',
      },
      {
        summary_1_id: 4,
        code: '390',
        description: 'COSTUMBRAS, ETIQUETA, FOLCLORE',
      },
      {
        summary_1_id: 5,
        code: '400',
        description: 'LENGUAS',
      },
      { summary_1_id: 5, code: '410', description: 'LINGÜÍSTICA' },
      {
        summary_1_id: 5,
        code: '420',
        description: 'INGLÉS E INGLÉS ANTIGUO',
      },
      {
        summary_1_id: 5,
        code: '430',
        description: 'LENGUAS GERMÁNICAS ALEMÁN',
      },
      {
        summary_1_id: 5,
        code: '440',
        description: 'LENGUAS ROMANCES FRANCÉS',
      },
      {
        summary_1_id: 5,
        code: '450',
        description: 'ITALIANO, RUMANO, RETORROMANO',
      },
      {
        summary_1_id: 5,
        code: '460',
        description: 'LENGUAS ESPAÑOLA Y PORTUGUESA',
      },
      { summary_1_id: 5, code: '470', description: 'LENGUAS ITÁLICAS LATÍN' },
      {
        summary_1_id: 5,
        code: '480',
        description: 'LENGUAS HELÉNICAS GRIEGO CLÁSICO',
      },
      { summary_1_id: 5, code: '490', description: 'OTRAS LENGUAS' },
      {
        summary_1_id: 6,
        code: '500',
        description: 'CIENCIAS NATURALES & MATEMÁTICAS',
      },
      { summary_1_id: 6, code: '510', description: 'MATEMÁTICAS' },
      {
        summary_1_id: 6,
        code: '520',
        description: 'ASTRONOMÍA Y CIENCIAS AFINES',
      },
      { summary_1_id: 6, code: '530', description: 'FÍSICA' },
      {
        summary_1_id: 6,
        code: '540',
        description: 'QUÍMICA Y CIENCIAS AFINES',
      },
      { summary_1_id: 6, code: '550', description: 'CIENCIAS DE LA TIERRA' },
      {
        summary_1_id: 6,
        code: '560',
        description: 'PALEONTOLOGÍA, PALEOZOOLOGÍA',
      },
      {
        summary_1_id: 6,
        code: '570',
        description: 'CIENCIAS DE LA VIDA. BIOLOGÍA',
      },
      {
        summary_1_id: 6,
        code: '580',
        description: 'CIENCIAS BOTÁNICAS. PLANTAS',
      },
      {
        summary_1_id: 6,
        code: '590',
        description: 'CIENCIAS ZOOLÓGICAS. ANIMALES',
      },
      {
        summary_1_id: 7,
        code: '600',
        description: 'TECNOLOGÍA',
      },
      {
        summary_1_id: 7,
        code: '610',
        description: 'CIENCIAS MÉDICAS MEDICINA',
      },
      {
        summary_1_id: 7,
        code: '620',
        description: 'INGENIERÍA & OPERACIONES AFINES',
      },
      {
        summary_1_id: 7,
        code: '630',
        description: 'AGRICULTURA Y TECNOLOGÍAS RELACIONADAS',
      },
      {
        summary_1_id: 7,
        code: '640',
        description: 'ECONOMÍA DOMÉSTICA & VIDA FAMILIAR',
      },
      {
        summary_1_id: 7,
        code: '650',
        description: 'GERENCIA Y SERVICIOS AUXILIARES',
      },
      { summary_1_id: 7, code: '660', description: 'INGENIERÍA QUÍMICA' },
      { summary_1_id: 7, code: '670', description: 'MANUFACTURA' },
      {
        summary_1_id: 7,
        code: '680',
        description: 'MANUFACTURA PARA USOS ESPECÍFICOS',
      },
      { summary_1_id: 7, code: '690', description: 'CONSTRUCCIÓN' },
      { summary_1_id: 8, code: '700', description: 'LAS ARTES' },
      {
        summary_1_id: 8,
        code: '710',
        description: 'URBANISMO & ARTE DEL PAISAJE',
      },
      { summary_1_id: 8, code: '720', description: 'ARQUITECTURA' },
      {
        summary_1_id: 8,
        code: '730',
        description: 'ARTES PLÁSTICAS, ESCULTURA',
      },
      {
        summary_1_id: 8,
        code: '740',
        description: 'DIBUJO & ARTES DECORATIVAS',
      },
      { summary_1_id: 8, code: '750', description: 'PINTURA & PINTURAS' },
      {
        summary_1_id: 8,
        code: '760',
        description: 'ARTES GRÁFICAS, ARTE DE GRABAR Y GRABADOS',
      },
      {
        summary_1_id: 8,
        code: '770',
        description: 'FOTOGRAFÍA & FOTOGRAFIAS',
      },
      { summary_1_id: 8, code: '780', description: 'MÚSICA' },
      {
        summary_1_id: 8,
        code: '790',
        description: 'ARTES RECREATIVAS Y DE LA ACTUACIÓN',
      },
      {
        summary_1_id: 9,
        code: '800',
        description: 'LITERATURA & RETÓRICA',
      },
      {
        summary_1_id: 9,
        code: '810',
        description: 'LITERATURA NORTEAMERICANA EN INGLÉS',
      },
      {
        summary_1_id: 9,
        code: '820',
        description: 'LITERATURA INGLESA E INGLESA ANTIGUA',
      },
      {
        summary_1_id: 9,
        code: '830',
        description: 'LITERATURA DE LAS LENGUAS GERMÁNICAS',
      },
      {
        summary_1_id: 9,
        code: '840',
        description: 'LITERATURAS DE LAS LENGUAS ROMANCES',
      },
      {
        summary_1_id: 9,
        code: '850',
        description: 'LITERATURAS ITALIANA, ROMANA, RETORROMANA',
      },
      {
        summary_1_id: 9,
        code: '860',
        description: 'LITERATURA ESPAÑOLA & PORTUGUESA',
      },
      {
        summary_1_id: 9,
        code: '870',
        description: 'LITERATURAS ITÁLICAS, LITERATURA LATINA',
      },
      {
        summary_1_id: 9,
        code: '880',
        description: 'LITERATURAS HELÉNICAS, LITERATURA GRIEGA CLÁSICA',
      },
      {
        summary_1_id: 9,
        code: '890',
        description: 'LITERATURA DE OTRAS LENGUAS',
      },
      {
        summary_1_id: 10,
        code: '900',
        description: 'GEOGRAFÍA & HISTORIA',
      },
      { summary_1_id: 10, code: '910', description: 'GEOGRAFÍA Y VIAJES' },
      {
        summary_1_id: 10,
        code: '920',
        description: 'BIOGRAFÍA, GENEALOGÍA, INSIGNIAS',
      },
      {
        summary_1_id: 10,
        code: '930',
        description: 'HISTORIA DEL MUNDO ANTIGUO',
      },
      {
        summary_1_id: 10,
        code: '940',
        description: 'HISTORIA GENERAL DE EUROPA',
      },
      {
        summary_1_id: 10,
        code: '950',
        description: 'HISTORIA GENERAL DE ASIA. LEJANO ORIENTE',
      },
      {
        summary_1_id: 10,
        code: '960',
        description: 'HISTORIA GENERAL DE ÁFRICA',
      },
      {
        summary_1_id: 10,
        code: '970',
        description: 'HISTORIA GENERAL DE AMÉRICA DEL NORTE',
      },
      {
        summary_1_id: 10,
        code: '980',
        description: 'HISTORIA GENERAL DE AMÉRICA DEL SUR',
      },
      {
        summary_1_id: 10,
        code: '990',
        description: 'HISTORIA GENERAL DE OTRAS ÁREAS',
      },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca."summary_2_id_seq" RESTART WITH 1;',
    );

    await queryInterface.bulkDelete(
      { schema: 'biblioteca', tableName: 'summary_2' },
      null,
      {},
    );
  },
};
