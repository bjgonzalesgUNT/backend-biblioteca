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
        { summary_2_id: 1, code: '000', description: 'GENERALIDADES' },
        { summary_2_id: 1, code: '001', description: 'CONOCIMIENTO' },
        { summary_2_id: 1, code: '002', description: 'EL LIBRO' },
        { summary_2_id: 1, code: '003', description: 'SISTEMAS' },
        {
          summary_2_id: 1,
          code: '004',
          description: 'PROCESAMIENTO DE DATOS. CIENCIA DE LOS COMPUTADORES',
        },
        {
          summary_2_id: 1,
          code: '005',
          description: 'PROGRAMACIÓN, PROGRAMAS, DATOS DE COMPUTACIÓN',
        },
        {
          summary_2_id: 1,
          code: '006',
          description: 'MÉTODOS ESPECIALES DE COMPUTACIÓN',
        },
        { summary_2_id: 1, code: '007', description: '-' },
        { summary_2_id: 1, code: '008', description: '-' },
        { summary_2_id: 1, code: '009', description: '-' },
        { summary_2_id: 2, code: '010', description: 'BIBLIOGRAFÍA' },
        { summary_2_id: 2, code: '011', description: 'BIBLIOGRAFÍAS' },
        { summary_2_id: 2, code: '012', description: 'DE INDIVIDUOS' },
        {
          summary_2_id: 2,
          code: '013',
          description: 'DE OBRAS POR CLASES ESPECÍFICAS DE AUTORES',
        },
        {
          summary_2_id: 2,
          code: '014',
          description: 'DE OBRAS ANÓNIMAS & SEUDÓNIMAS',
        },
        {
          summary_2_id: 2,
          code: '015',
          description: 'DE OBRAS DE LUGARES ESPECÍFICOS',
        },
        {
          summary_2_id: 2,
          code: '016',
          description: 'DE OBRAS SOBRE TEMAS ESPECÍFICOS',
        },
        {
          summary_2_id: 2,
          code: '017',
          description: 'CATÁLOGOS GENERALES POR MATERIA',
        },
        {
          summary_2_id: 2,
          code: '018',
          description: 'CATÁLOGOS ORDENADOS POR AUTOR, FECHA, ETC.',
        },
        { summary_2_id: 2, code: '019', description: 'CATÁLOGOS DICCIONARIO' },
        {
          summary_2_id: 3,
          code: '020',
          description: 'BIBLIOTECOLÓGIA & CIENCIAS DE LA INFORMACIÓN',
        },
        {
          summary_2_id: 3,
          code: '021',
          description: 'RELACIONES BIBLIOTECARIAS',
        },
        {
          summary_2_id: 3,
          code: '022',
          description: 'ADMINISTRACIÓN DE LA PLANTA FÍSICA',
        },
        {
          summary_2_id: 3,
          code: '023',
          description: 'ADMINISTRACIÓN DE PERSONAL',
        },
        { summary_2_id: 3, code: '024', description: '-' },
        {
          summary_2_id: 3,
          code: '025',
          description: 'OPERACIONES BIBLIOTECARIAS',
        },
        {
          summary_2_id: 3,
          code: '026',
          description: 'BIBLIOTECAS PARA TEMAS ESPECÍFICOS',
        },
        { summary_2_id: 3, code: '027', description: 'BIBLIOTECAS GENERALES' },
        {
          summary_2_id: 3,
          code: '028',
          description: 'LECTURA, USO DE OTROS MEDIOS DE INFORMACIÓN',
        },
        { summary_2_id: 3, code: '029', description: '-' },
        {
          summary_2_id: 4,
          code: '030',
          description: 'OBRAS ENCICLOPÉDICAS GENERALES',
        },
        { summary_2_id: 4, code: '031', description: 'NORTEAMERICANAS' },
        { summary_2_id: 4, code: '032', description: 'EN INGLÉS' },
        {
          summary_2_id: 4,
          code: '033',
          description: 'EN OTRAS LENGUAS GERMÁNICAS',
        },
        {
          summary_2_id: 4,
          code: '034',
          description: 'EN FRANCÉS, PROVENZAL, CATALÁN',
        },
        {
          summary_2_id: 4,
          code: '035',
          description: 'EN ITALIANO, RUMANO, RETORROMANO',
        },
        { summary_2_id: 4, code: '036', description: 'EN ESPAÑOL & PORTUGUÉS' },
        { summary_2_id: 4, code: '037', description: 'EN LENGUAS ESLAVAS' },
        {
          summary_2_id: 4,
          code: '038',
          description: 'EN LENGUAS ESCANDINAVAS',
        },
        { summary_2_id: 4, code: '039', description: 'EN OTRAS LENGUAS' },
        {
          summary_2_id: 6,
          code: '050',
          description: 'PUBLICACIONES EN SERIE GENERALES',
        },
        { summary_2_id: 6, code: '051', description: 'NORTEAMERICANAS' },
        { summary_2_id: 6, code: '052', description: 'EN INGLÉS' },
        {
          summary_2_id: 6,
          code: '053',
          description: 'EN OTRAS LENGUAS GERMÁNICAS',
        },
        {
          summary_2_id: 6,
          code: '054',
          description: 'EN FRANCÉS, PROVENZAL, CATALÁN',
        },
        {
          summary_2_id: 6,
          code: '055',
          description: 'EN ITALIANO, RUMANO, RETORROMANO',
        },
        { summary_2_id: 6, code: '056', description: 'EN ESPAÑOL & PORTUGUÉS' },
        { summary_2_id: 6, code: '057', description: 'EN LENGUAS ESLAVAS' },
        {
          summary_2_id: 6,
          code: '058',
          description: 'EN LENGUAS ESCANDINAVAS',
        },
        { summary_2_id: 6, code: '059', description: 'EN OTRAS LENGUAS' },
        {
          summary_2_id: 7,
          code: '060',
          description: 'CLASIFICACIONES GENERALES & MUSEOLOGÍA',
        },
        { summary_2_id: 7, code: '061', description: 'EN AMÉRICA DEL NORTE' },
        {
          summary_2_id: 7,
          code: '062',
          description: 'EN LAS ISLAS BRITÁNICAS. EN INGLATERRA',
        },
        {
          summary_2_id: 7,
          code: '063',
          description: 'EN EUROPA CENTRAL. EN ALEMANIA',
        },
        { summary_2_id: 7, code: '064', description: 'EN FRANCIA & MÓNACO' },
        {
          summary_2_id: 7,
          code: '065',
          description: 'EN ITALIA & TERRITORIOS ADYACENTES',
        },
        {
          summary_2_id: 7,
          code: '066',
          description: 'EN LA PENÍNSULA IBÉRICA & ISLAS ADYACENTES',
        },
        {
          summary_2_id: 7,
          code: '067',
          description: 'EN EUROPA ORIENTAL RUSIA',
        },
        { summary_2_id: 7, code: '068', description: 'EN OTRAS ÁREAS' },
        {
          summary_2_id: 7,
          code: '069',
          description: 'MUSEOLOGÍA (CIENCIA DE LOS MUSEOS)',
        },
        {
          summary_2_id: 8,
          code: '070',
          description: 'MEDIOS NOTICIOSOS, PERIODISMO, PUBLICACIÓN',
        },
        { summary_2_id: 8, code: '071', description: 'EN AMÉRICA DEL NORTE' },
        {
          summary_2_id: 8,
          code: '072',
          description: 'EN LAS ISLAS BRITÁNICAS. EN INGLATERRA',
        },
        {
          summary_2_id: 8,
          code: '073',
          description: 'EN EUROPA CENTRAL. EN ALEMANIA',
        },
        { summary_2_id: 8, code: '074', description: 'EN FRANCIA Y MÓNACO' },
        {
          summary_2_id: 8,
          code: '075',
          description: 'EN ASIA Y TERRITORIOS ADYACENTES',
        },
        {
          summary_2_id: 8,
          code: '076',
          description: 'EN LA PENÍNSULA IBÉRICA & ISLAS ADYACENTES',
        },
        {
          summary_2_id: 8,
          code: '077',
          description: 'EN EUROPA ORIENTAL. EN RUSIA',
        },
        { summary_2_id: 8, code: '078', description: 'EN ESCANDINAVIA' },
        {
          summary_2_id: 8,
          code: '079',
          description: 'EN OTRAS ÁREAS GEOGRÁFICAS',
        },
        { summary_2_id: 9, code: '080', description: 'COLECCIONES GENERALES' },
        { summary_2_id: 9, code: '081', description: 'NORTEAMERICANAS' },
        { summary_2_id: 9, code: '082', description: 'EN INGLÉS' },
        {
          summary_2_id: 9,
          code: '083',
          description: 'EN OTRAS LENGUAS GERMÁNICAS',
        },
        {
          summary_2_id: 9,
          code: '084',
          description: 'EN FRANCÉS, PROVENZAL, CATALÁN',
        },
        {
          summary_2_id: 9,
          code: '085',
          description: 'EN ITALIANO, RUMANO, RETORROMANO',
        },
        { summary_2_id: 9, code: '086', description: 'EN ESPAÑOL & PORTUGUÉS' },
        { summary_2_id: 9, code: '087', description: 'EN LENGUAS ESLAVAS' },
        {
          summary_2_id: 9,
          code: '088',
          description: 'EN LENGUAS ESCANDINAVAS',
        },
        { summary_2_id: 9, code: '089', description: 'EN OTRAS LENGUAS' },
        {
          summary_2_id: 10,
          code: '090',
          description: 'MANUSCRITOS & LIBROS RAROS',
        },
        { summary_2_id: 10, code: '091', description: 'MANUSCRITOS' },
        { summary_2_id: 10, code: '092', description: 'LIBROS XILOGRÁFICOS' },
        { summary_2_id: 10, code: '093', description: 'INCUNABLES' },
        { summary_2_id: 10, code: '094', description: 'LIBROS IMPRESOS' },
        {
          summary_2_id: 10,
          code: '095',
          description: 'LIBROS NOTABLES POR SU ENCUADERNACIÓN',
        },
        {
          summary_2_id: 10,
          code: '096',
          description: 'LIBROS NOTABLES POR LAS ILUSTRACIONES',
        },
        {
          summary_2_id: 10,
          code: '097',
          description: 'LIBROS NOTABLES POR SU PROPIETARIO U ORIGEN',
        },
        {
          summary_2_id: 10,
          code: '098',
          description: 'OBRAS PROHIBIDAS, FALSIFICACIONES, IMPOSTURAS',
        },
        {
          summary_2_id: 10,
          code: '099',
          description: 'LIBROS NOTABLES POR SU FORMATO',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca.summary_3_id_seq RESTART WITH 1',
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
