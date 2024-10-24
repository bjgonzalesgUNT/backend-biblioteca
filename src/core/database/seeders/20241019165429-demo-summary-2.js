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
        { summary_1_id: 1, code: '000', description: 'Generalidades' },
        { summary_1_id: 1, code: '010', description: 'Bibliografía' },
        {
          summary_1_id: 1,
          code: '020',
          description: 'Bibliotecología y ciencias de la información',
        },
        {
          summary_1_id: 1,
          code: '030',
          description: 'Obras enciclopédicas generales',
        },
        { summary_1_id: 1, code: '040', description: '-' },
        {
          summary_1_id: 1,
          code: '050',
          description: 'Publicaciones en serie generales',
        },
        {
          summary_1_id: 1,
          code: '060',
          description: 'Organizaciones generales & museología',
        },
        {
          summary_1_id: 1,
          code: '070',
          description: 'Medios noticiosos, periodismo, publicación',
        },
        { summary_1_id: 1, code: '080', description: 'Colecciones generales' },
        {
          summary_1_id: 1,
          code: '090',
          description: 'Manuscritos & libros raros',
        },
        {
          summary_1_id: 2,
          code: '100',
          description: 'Filosofía & psicología',
        },
        { summary_1_id: 2, code: '110', description: 'Metafísica' },
        {
          summary_1_id: 2,
          code: '120',
          description: 'Epistemología, causalidad, género humano',
        },
        { summary_1_id: 2, code: '130', description: 'Fenómenos paranormales' },
        {
          summary_1_id: 2,
          code: '140',
          description: 'Escuelas filosóficas específicas',
        },
        { summary_1_id: 2, code: '150', description: 'Psicología' },
        { summary_1_id: 2, code: '160', description: 'Lógica' },
        {
          summary_1_id: 2,
          code: '170',
          description: 'Ética (filosofía moral)',
        },
        {
          summary_1_id: 2,
          code: '180',
          description: 'Filosofía antigua, medieval, oriental',
        },
        {
          summary_1_id: 2,
          code: '190',
          description: 'Filosofía moderna occidental',
        },
        {
          summary_1_id: 3,
          code: '200',
          description: 'Religión',
        },
        {
          summary_1_id: 3,
          code: '210',
          description: 'Filosofía y teología de la religión',
        },
        { summary_1_id: 3, code: '220', description: 'La Biblia' },
        {
          summary_1_id: 3,
          code: '230',
          description: 'Cristianismo; Teología cristiana',
        },
        {
          summary_1_id: 3,
          code: '240',
          description: 'Moral cristiana & teología piadosa',
        },
        {
          summary_1_id: 3,
          code: '250',
          description: 'Ordenes cristianas & iglesia local',
        },
        {
          summary_1_id: 3,
          code: '260',
          description: 'Teología social y eclesiástica',
        },
        {
          summary_1_id: 3,
          code: '270',
          description: 'Historia del cristianismo y de la iglesia cristiana',
        },
        {
          summary_1_id: 3,
          code: '280',
          description: 'Confesiones & sectas cristianas',
        },
        {
          summary_1_id: 3,
          code: '290',
          description: 'Religión comparada y otras religiones',
        },
        {
          summary_1_id: 4,
          code: '300',
          description: 'Ciencias sociales',
        },
        {
          summary_1_id: 4,
          code: '310',
          description: 'Colecs. de estadística general',
        },
        { summary_1_id: 4, code: '320', description: 'Ciencia política' },
        { summary_1_id: 4, code: '330', description: 'Economía' },
        { summary_1_id: 4, code: '340', description: 'Derecho' },
        {
          summary_1_id: 4,
          code: '350',
          description: 'Administración pública y ciencia militar',
        },
        {
          summary_1_id: 4,
          code: '360',
          description: 'Problemas y servicios sociales; asociaciones',
        },
        { summary_1_id: 4, code: '370', description: 'Educación' },
        {
          summary_1_id: 4,
          code: '380',
          description: 'Comercio, comunicaciones, transporte',
        },
        {
          summary_1_id: 4,
          code: '390',
          description: 'Costumbres, etiqueta, folclor',
        },
        {
          summary_1_id: 5,
          code: '400',
          description: 'Lenguas',
        },
        { summary_1_id: 5, code: '410', description: 'Lingüística' },
        {
          summary_1_id: 5,
          code: '420',
          description: 'Inglés e inglés antiguo',
        },
        {
          summary_1_id: 5,
          code: '430',
          description: 'Lenguas germánicas Alemán',
        },
        {
          summary_1_id: 5,
          code: '440',
          description: 'Lenguas romances Francés',
        },
        {
          summary_1_id: 5,
          code: '450',
          description: 'Italiano, rumano, retorromano',
        },
        {
          summary_1_id: 5,
          code: '460',
          description: 'Lenguas española y portuguesa',
        },
        { summary_1_id: 5, code: '470', description: 'Lenguas itálicas Latín' },
        {
          summary_1_id: 5,
          code: '480',
          description: 'Lenguas helénicas Griego clásico',
        },
        { summary_1_id: 5, code: '490', description: 'Otras lenguas' },
        {
          summary_1_id: 6,
          code: '500',
          description: 'Ciencias naturales & matemáticas',
        },
        { summary_1_id: 6, code: '510', description: 'Matemáticas' },
        {
          summary_1_id: 6,
          code: '520',
          description: 'Astronomía y ciencias afines',
        },
        { summary_1_id: 6, code: '530', description: 'Física' },
        {
          summary_1_id: 6,
          code: '540',
          description: 'Química y ciencias afines',
        },
        { summary_1_id: 6, code: '550', description: 'Ciencias de la tierra' },
        {
          summary_1_id: 6,
          code: '560',
          description: 'Paleontología, Paleozoología',
        },
        {
          summary_1_id: 6,
          code: '570',
          description: 'Ciencias de la vida. Biología',
        },
        {
          summary_1_id: 6,
          code: '580',
          description: 'Ciencias botánicas. Plantas',
        },
        {
          summary_1_id: 6,
          code: '590',
          description: 'Ciencias zoológicas. Animales',
        },
        {
          summary_1_id: 7,
          code: '600',
          description: 'Tecnología',
        },
        {
          summary_1_id: 7,
          code: '610',
          description: 'Ciencias médicas Medicina',
        },
        {
          summary_1_id: 7,
          code: '620',
          description: 'Ingeniería & operaciones afines',
        },
        {
          summary_1_id: 7,
          code: '630',
          description: 'Agricultura y tecnologías relacionadas',
        },
        {
          summary_1_id: 7,
          code: '640',
          description: 'Economía doméstica & vida familiar',
        },
        {
          summary_1_id: 7,
          code: '650',
          description: 'Gerencia y servicios auxiliares',
        },
        { summary_1_id: 7, code: '660', description: 'Ingeniería Química' },
        { summary_1_id: 7, code: '670', description: 'Manufactura' },
        {
          summary_1_id: 7,
          code: '680',
          description: 'Manufactura para usos específicos',
        },
        { summary_1_id: 7, code: '690', description: 'Construcción' },
        { summary_1_id: 8, code: '700', description: 'Las artes' },
        {
          summary_1_id: 8,
          code: '710',
          description: 'Urbanismo & arte del paisaje',
        },
        { summary_1_id: 8, code: '720', description: 'Arquitectura' },
        {
          summary_1_id: 8,
          code: '730',
          description: 'Artes plásticas, Escultura',
        },
        {
          summary_1_id: 8,
          code: '740',
          description: 'Dibujo & artes decorativas',
        },
        { summary_1_id: 8, code: '750', description: 'Pintura & pinturas' },
        {
          summary_1_id: 8,
          code: '760',
          description: 'Artes gráficas, Arte de grabar y grabados',
        },
        {
          summary_1_id: 8,
          code: '770',
          description: 'Fotografía & fotografías',
        },
        { summary_1_id: 8, code: '780', description: 'Música' },
        {
          summary_1_id: 8,
          code: '790',
          description: 'Artes recreativas y de la actuación',
        },
        {
          summary_1_id: 9,
          code: '800',
          description: 'Literatura & retórica',
        },
        {
          summary_1_id: 9,
          code: '810',
          description: 'Literatura norteamericana en inglés',
        },
        {
          summary_1_id: 9,
          code: '820',
          description: 'Literatura inglesa e inglesa antigua',
        },
        {
          summary_1_id: 9,
          code: '830',
          description: 'Literatura de las lenguas germánicas',
        },
        {
          summary_1_id: 9,
          code: '840',
          description: 'Literaturas de las lenguas romances',
        },
        {
          summary_1_id: 9,
          code: '850',
          description: 'Literaturas italiana, rumana, retorromana',
        },
        {
          summary_1_id: 9,
          code: '860',
          description: 'Literatura española & portuguesa',
        },
        {
          summary_1_id: 9,
          code: '870',
          description: 'Literaturas itálicas, Literatura latina',
        },
        {
          summary_1_id: 9,
          code: '880',
          description: 'Literaturas helénicas, Literatura griega clásica',
        },
        {
          summary_1_id: 9,
          code: '890',
          description: 'Literatura de otras lenguas',
        },
        {
          summary_1_id: 10,
          code: '900',
          description: 'Geografía & historia',
        },
        { summary_1_id: 10, code: '910', description: 'Geografía y viajes' },
        {
          summary_1_id: 10,
          code: '920',
          description: 'Biografía, genealogía, insignias',
        },
        {
          summary_1_id: 10,
          code: '930',
          description: 'Historia del mundo antiguo',
        },
        {
          summary_1_id: 10,
          code: '940',
          description: 'Historia general de Europa',
        },
        {
          summary_1_id: 10,
          code: '950',
          description: 'Historia general de Asia. Lejano Oriente',
        },
        {
          summary_1_id: 10,
          code: '960',
          description: 'Historia general de África',
        },
        {
          summary_1_id: 10,
          code: '970',
          description: 'Historia general de América del Norte',
        },
        {
          summary_1_id: 10,
          code: '980',
          description: 'Historia general de América del Sur',
        },
        {
          summary_1_id: 10,
          code: '990',
          description: 'Historia general de otras áreas',
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
