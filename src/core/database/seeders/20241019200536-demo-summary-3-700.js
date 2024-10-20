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
        { summary_2_id: 71, code: '700', description: 'Las artes' },
        { summary_2_id: 71, code: '701', description: 'Filosofía y teoría' },
        { summary_2_id: 71, code: '702', description: 'Miscelánea' },
        {
          summary_2_id: 71,
          code: '703',
          description: 'Diccionarios y enciclopedias',
        },
        { summary_2_id: 71, code: '704', description: 'Temas especiales' },
        {
          summary_2_id: 71,
          code: '705',
          description: 'Publicaciones en serie',
        },
        {
          summary_2_id: 71,
          code: '706',
          description: 'Organizaciones y administración',
        },
        {
          summary_2_id: 71,
          code: '707',
          description: 'Educación, investigación, temas relacionados',
        },
        {
          summary_2_id: 71,
          code: '708',
          description: 'Galerías, museos, colecciones privadas',
        },
        {
          summary_2_id: 71,
          code: '709',
          description: 'Tratamiento histórico, geográfico, personas',
        },
        {
          summary_2_id: 72,
          code: '710',
          description: 'Urbanismo & arte del paisaje',
        },
        {
          summary_2_id: 72,
          code: '711',
          description: 'Planificación del espacio (Urbanismo)',
        },
        {
          summary_2_id: 72,
          code: '712',
          description: 'Arquitectura del paisaje',
        },
        {
          summary_2_id: 72,
          code: '713',
          description: 'Arquitectura del paisaje de las vías de tránsito',
        },
        { summary_2_id: 72, code: '714', description: 'Aguas ornamentales' },
        { summary_2_id: 72, code: '715', description: 'Plantas leñosas' },
        { summary_2_id: 72, code: '716', description: 'Plantas herbáceas' },
        { summary_2_id: 72, code: '717', description: 'Estructuras' },
        {
          summary_2_id: 72,
          code: '718',
          description: 'Diseño de paisaje de cementerios',
        },
        { summary_2_id: 72, code: '719', description: 'Paisajes naturales' },
        {
          summary_2_id: 73,
          code: '720',
          description: 'Arquitectura',
        },
        {
          summary_2_id: 73,
          code: '721',
          description: 'Estructura arquitectónica',
        },
        {
          summary_2_id: 73,
          code: '722',
          description: 'Arquitectura antigua hasta ca. 300',
        },
        {
          summary_2_id: 73,
          code: '723',
          description: 'Arquitectura desde ca. 300 hasta 1399',
        },
        {
          summary_2_id: 73,
          code: '724',
          description: 'Arquitectura desde 1400',
        },
        { summary_2_id: 73, code: '725', description: 'Estructuras públicas' },
        {
          summary_2_id: 73,
          code: '726',
          description: 'Edificios para propósitos religiosos',
        },
        {
          summary_2_id: 73,
          code: '727',
          description: 'Edificios para educación e investigación',
        },
        {
          summary_2_id: 73,
          code: '728',
          description: 'Edificios residenciales y relacionados',
        },
        { summary_2_id: 73, code: '729', description: 'Diseño y decoración' },
        {
          summary_2_id: 74,
          code: '730',
          description: 'Artes plásticas; escultura',
        },
        {
          summary_2_id: 74,
          code: '731',
          description: 'Procesos, formas, temas de la escultura',
        },
        {
          summary_2_id: 74,
          code: '732',
          description: 'La escultura hasta ca. 500',
        },
        {
          summary_2_id: 74,
          code: '733',
          description: 'Escultura griega, etrusca, romana',
        },
        {
          summary_2_id: 74,
          code: '734',
          description: 'Escultura desde ca. 500 hasta 1399',
        },
        { summary_2_id: 74, code: '735', description: 'Escultura desde 1400' },
        { summary_2_id: 74, code: '736', description: 'Talla y tallado' },
        {
          summary_2_id: 74,
          code: '737',
          description: 'Numismática y sigilografía',
        },
        { summary_2_id: 74, code: '738', description: 'Artes cerámicas' },
        { summary_2_id: 74, code: '739', description: 'Arte en metal' },
        {
          summary_2_id: 75,
          code: '740',
          description: 'Dibujo y artes decorativas',
        },
        { summary_2_id: 75, code: '741', description: 'Dibujo y dibujos' },
        { summary_2_id: 75, code: '742', description: 'Perspectiva' },
        {
          summary_2_id: 75,
          code: '743',
          description: 'Dibujo y dibujos por tema',
        },
        { summary_2_id: 75, code: '744', description: '(No especificado)' },
        { summary_2_id: 75, code: '745', description: 'Artes decorativas' },
        { summary_2_id: 75, code: '746', description: 'Artes textiles' },
        {
          summary_2_id: 75,
          code: '747',
          description: 'Decoración de interiores',
        },
        { summary_2_id: 75, code: '748', description: 'Vidrio' },
        { summary_2_id: 75, code: '749', description: 'Muebles y accesorios' },
        {
          summary_2_id: 76,
          code: '750',
          description: 'Pintura y pinturas',
        },
        {
          summary_2_id: 76,
          code: '751',
          description: 'Técnicas, equipo, formas',
        },
        { summary_2_id: 76, code: '752', description: 'Color' },
        {
          summary_2_id: 76,
          code: '753',
          description: 'Simbolismo, alegoría, mitología, leyenda',
        },
        { summary_2_id: 76, code: '754', description: 'Pinturas de género' },
        {
          summary_2_id: 76,
          code: '755',
          description: 'Religión y simbolismo religiosos',
        },
        { summary_2_id: 76, code: '756', description: '(No especificado)' },
        {
          summary_2_id: 76,
          code: '757',
          description: 'Figuras humanas y sus partes',
        },
        { summary_2_id: 76, code: '758', description: 'Otros temas' },
        {
          summary_2_id: 76,
          code: '759',
          description: 'Tratamiento histórico, geográfico, de personas',
        },
        {
          summary_2_id: 77,
          code: '760',
          description: 'Artes gráficas, Arte de grabar & grabados',
        },
        {
          summary_2_id: 77,
          code: '761',
          description: 'Procesos en relieve (Grabado en bloque)',
        },
        { summary_2_id: 77, code: '762', description: '(No especificado)' },
        {
          summary_2_id: 77,
          code: '763',
          description: 'Procesos litográficos (Planográficos)',
        },
        {
          summary_2_id: 77,
          code: '764',
          description: 'Cromolitografía y serigrafía',
        },
        { summary_2_id: 77, code: '765', description: 'Grabado en metal' },
        {
          summary_2_id: 77,
          code: '766',
          description: 'Media tinta y procesos relacionados',
        },
        {
          summary_2_id: 77,
          code: '767',
          description: 'Aguafuerte y grabado a buril',
        },
        { summary_2_id: 77, code: '768', description: '(No especificado)' },
        { summary_2_id: 77, code: '769', description: 'Grabados' },
        {
          summary_2_id: 78,
          code: '770',
          description: 'Fotografía & fotografías',
        },
        {
          summary_2_id: 78,
          code: '771',
          description: 'Técnicas, equipo, materiales',
        },
        {
          summary_2_id: 78,
          code: '772',
          description: 'Procesos con sales metálicas',
        },
        {
          summary_2_id: 78,
          code: '773',
          description: 'Procesos de pigmentación de la impresión',
        },
        { summary_2_id: 78, code: '774', description: 'Holografía' },
        { summary_2_id: 78, code: '775', description: '(No especificado)' },
        { summary_2_id: 78, code: '776', description: '(No especificado)' },
        { summary_2_id: 78, code: '777', description: '(No especificado)' },
        {
          summary_2_id: 78,
          code: '778',
          description: 'Campos y clases de fotografía',
        },
        { summary_2_id: 78, code: '779', description: 'Fotografía' },
        {
          summary_2_id: 79,
          code: '780',
          description: 'Música',
        },
        {
          summary_2_id: 79,
          code: '781',
          description: 'Principios generales y formas musicales',
        },
        { summary_2_id: 79, code: '782', description: 'Música vocal' },
        {
          summary_2_id: 79,
          code: '783',
          description: 'Música para voces individuales, la voz',
        },
        {
          summary_2_id: 79,
          code: '784',
          description: 'Instrumentos y conjuntos instrumentales',
        },
        {
          summary_2_id: 79,
          code: '785',
          description: 'Conjuntos con un solo instrumento por parte',
        },
        {
          summary_2_id: 79,
          code: '786',
          description: 'Instrumentos de percusión y otros instrumentos',
        },
        {
          summary_2_id: 79,
          code: '787',
          description: 'Instrumentos de cuerda (Cordófonos)',
        },
        {
          summary_2_id: 79,
          code: '788',
          description: 'Instrumentos de viento (Aerófonos)',
        },
        { summary_2_id: 79, code: '789', description: '(No especificado)' },
        {
          summary_2_id: 80,
          code: '790',
          description: 'Artes recreativas & de la actuación',
        },
        {
          summary_2_id: 80,
          code: '791',
          description: 'Representaciones públicas',
        },
        {
          summary_2_id: 80,
          code: '792',
          description: 'Representaciones escénicas',
        },
        {
          summary_2_id: 80,
          code: '793',
          description: 'Juegos y pasatiempos bajo techo',
        },
        {
          summary_2_id: 80,
          code: '794',
          description: 'Juegos de destreza bajo techo',
        },
        { summary_2_id: 80, code: '795', description: 'Juegos de suerte' },
        {
          summary_2_id: 80,
          code: '796',
          description: 'Deportes y juegos atléticos y al aire libre',
        },
        {
          summary_2_id: 80,
          code: '797',
          description: 'Deportes acuáticos y aéreos',
        },
        { summary_2_id: 80, code: '798', description: 'Deportes ecuestres' },
        { summary_2_id: 80, code: '799', description: 'Pesca, caza, tiro' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
