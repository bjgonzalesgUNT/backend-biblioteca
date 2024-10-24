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
        { summary_2_id: 1, code: '000', description: 'Generalidades' },
        { summary_2_id: 1, code: '001', description: 'Conocimiento' },
        { summary_2_id: 1, code: '002', description: 'El libro' },
        { summary_2_id: 1, code: '003', description: 'Sistemas' },
        {
          summary_2_id: 1,
          code: '004',
          description: 'Procesamiento de datos. Ciencia de los computadores',
        },
        {
          summary_2_id: 1,
          code: '005',
          description: 'Programación, programas, datos de computación',
        },
        {
          summary_2_id: 1,
          code: '006',
          description: 'Métodos especiales de computación',
        },
        { summary_2_id: 1, code: '007', description: '-' },
        { summary_2_id: 1, code: '008', description: '-' },
        { summary_2_id: 1, code: '009', description: '-' },
        { summary_2_id: 2, code: '010', description: 'Bibliografía' },
        { summary_2_id: 2, code: '011', description: 'Bibliografías' },
        { summary_2_id: 2, code: '012', description: 'De individuos' },
        {
          summary_2_id: 2,
          code: '013',
          description: 'De obras por clases específicas de autores',
        },
        {
          summary_2_id: 2,
          code: '014',
          description: 'De obras anónimas & seudónimas',
        },
        {
          summary_2_id: 2,
          code: '015',
          description: 'De obras de lugares específicos',
        },
        {
          summary_2_id: 2,
          code: '016',
          description: 'De obras sobre temas específicos',
        },
        {
          summary_2_id: 2,
          code: '017',
          description: 'Catálogos generales por materia',
        },
        {
          summary_2_id: 2,
          code: '018',
          description: 'Catálogos ordenados por autor, fecha, etc.',
        },
        { summary_2_id: 2, code: '019', description: 'Catálogos diccionario' },
        {
          summary_2_id: 3,
          code: '020',
          description: 'Bibliotecología & ciencias de la información',
        },
        {
          summary_2_id: 3,
          code: '021',
          description: 'Relaciones bibliotecarias',
        },
        {
          summary_2_id: 3,
          code: '022',
          description: 'Administración de la planta física',
        },
        {
          summary_2_id: 3,
          code: '023',
          description: 'Administración de personal',
        },
        { summary_2_id: 3, code: '024', description: '-' },
        {
          summary_2_id: 3,
          code: '025',
          description: 'Operaciones bibliotecarias',
        },
        {
          summary_2_id: 3,
          code: '026',
          description: 'Bibliotecas para temas específicos',
        },
        { summary_2_id: 3, code: '027', description: 'Bibliotecas generales' },
        {
          summary_2_id: 3,
          code: '028',
          description: 'Lectura, uso de otros medios de información',
        },
        { summary_2_id: 3, code: '029', description: '-' },
        {
          summary_2_id: 4,
          code: '030',
          description: 'Obras enciclopédicas generales',
        },
        { summary_2_id: 4, code: '031', description: 'Norteamericanas' },
        { summary_2_id: 4, code: '032', description: 'En inglés' },
        {
          summary_2_id: 4,
          code: '033',
          description: 'En otras lenguas germánicas',
        },
        {
          summary_2_id: 4,
          code: '034',
          description: 'En francés, provenzal, catalán',
        },
        {
          summary_2_id: 4,
          code: '035',
          description: 'En italiano, rumano, retorromano',
        },
        { summary_2_id: 4, code: '036', description: 'En español & portugués' },
        { summary_2_id: 4, code: '037', description: 'En lenguas eslavas' },
        {
          summary_2_id: 4,
          code: '038',
          description: 'En lenguas escandinavas',
        },
        { summary_2_id: 4, code: '039', description: 'En otras lenguas' },
        {
          summary_2_id: 6,
          code: '050',
          description: 'Publicaciones en serie generales',
        },
        { summary_2_id: 6, code: '051', description: 'Norteamericanas' },
        { summary_2_id: 6, code: '052', description: 'En inglés' },
        {
          summary_2_id: 6,
          code: '053',
          description: 'En otras lenguas germánicas',
        },
        {
          summary_2_id: 6,
          code: '054',
          description: 'En francés, provenzal, catalán',
        },
        {
          summary_2_id: 6,
          code: '055',
          description: 'En italiano, rumano, retorromano',
        },
        { summary_2_id: 6, code: '056', description: 'En español & portugués' },
        { summary_2_id: 6, code: '057', description: 'En lenguas eslavas' },
        {
          summary_2_id: 6,
          code: '058',
          description: 'En lenguas escandinavas',
        },
        { summary_2_id: 6, code: '059', description: 'En otras lenguas' },
        {
          summary_2_id: 7,
          code: '060',
          description: 'Clasificaciones generales & museología',
        },
        { summary_2_id: 7, code: '061', description: 'En América del Norte' },
        {
          summary_2_id: 7,
          code: '062',
          description: 'En las Islas Británicas. En Inglaterra',
        },
        {
          summary_2_id: 7,
          code: '063',
          description: 'En Europa central. En Alemania',
        },
        { summary_2_id: 7, code: '064', description: 'En Francia & Mónaco' },
        {
          summary_2_id: 7,
          code: '065',
          description: 'En Italia & territorios adyacentes',
        },
        {
          summary_2_id: 7,
          code: '066',
          description: 'En la Península Ibérica & islas adyacentes',
        },
        {
          summary_2_id: 7,
          code: '067',
          description: 'En Europa oriental Rusia',
        },
        { summary_2_id: 7, code: '068', description: 'En otras áreas' },
        {
          summary_2_id: 7,
          code: '069',
          description: 'Museología (Ciencia de los museos)',
        },
        {
          summary_2_id: 8,
          code: '070',
          description: 'Medios noticiosos, periodismo, publicación',
        },
        { summary_2_id: 8, code: '071', description: 'En América del Norte' },
        {
          summary_2_id: 8,
          code: '072',
          description: 'En las Islas Británicas. En Inglaterra',
        },
        {
          summary_2_id: 8,
          code: '073',
          description: 'En Europa central. En Alemania',
        },
        { summary_2_id: 8, code: '074', description: 'En Francia y Mónaco' },
        {
          summary_2_id: 8,
          code: '075',
          description: 'En Asia y territorios adyacentes',
        },
        {
          summary_2_id: 8,
          code: '076',
          description: 'En la Península Ibérica & islas adyacentes',
        },
        {
          summary_2_id: 8,
          code: '077',
          description: 'En Europa oriental. En Rusia',
        },
        { summary_2_id: 8, code: '078', description: 'En Escandinavia' },
        {
          summary_2_id: 8,
          code: '079',
          description: 'En otras áreas geográficas',
        },
        { summary_2_id: 9, code: '080', description: 'Colecciones generales' },
        { summary_2_id: 9, code: '081', description: 'Norteamericanas' },
        { summary_2_id: 9, code: '082', description: 'En inglés' },
        {
          summary_2_id: 9,
          code: '083',
          description: 'En otras lenguas germánicas',
        },
        {
          summary_2_id: 9,
          code: '084',
          description: 'En francés, provenzal, catalán',
        },
        {
          summary_2_id: 9,
          code: '085',
          description: 'En italiano, rumano, retorromano',
        },
        { summary_2_id: 9, code: '086', description: 'En español & portugués' },
        { summary_2_id: 9, code: '087', description: 'En lenguas eslavas' },
        {
          summary_2_id: 9,
          code: '088',
          description: 'En lenguas escandinavas',
        },
        { summary_2_id: 9, code: '089', description: 'En otras lenguas' },
        {
          summary_2_id: 10,
          code: '090',
          description: 'Manuscritos & libros raros',
        },
        { summary_2_id: 10, code: '091', description: 'Manuscritos' },
        { summary_2_id: 10, code: '092', description: 'Libros xilográficos' },
        { summary_2_id: 10, code: '093', description: 'Incunables' },
        { summary_2_id: 10, code: '094', description: 'Libros impresos' },
        {
          summary_2_id: 10,
          code: '095',
          description: 'Libros notables por su encuadernación',
        },
        {
          summary_2_id: 10,
          code: '096',
          description: 'Libros notables por las ilustraciones',
        },
        {
          summary_2_id: 10,
          code: '097',
          description: 'Libros notables por su propietario u origen',
        },
        {
          summary_2_id: 10,
          code: '098',
          description: 'Obras prohibidas, Falsificaciones, imposturas',
        },
        {
          summary_2_id: 10,
          code: '099',
          description: 'Libros notables por su formato',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      ';ALTER SEQUENCE biblioteca.summary_3_id_seq RESTART WITH 1',
    );

    await queryInterface.bulkDelete(
      {
        schema: 'biblioteca',
        tableName: 'summary_3',
      },
      null,
      {},
    );
  },
};
