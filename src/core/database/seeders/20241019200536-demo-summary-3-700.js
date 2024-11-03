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
      { summary_2_id: 71, code: '700', description: 'LAS ARTES' },
      { summary_2_id: 71, code: '701', description: 'FILOSOFÍA Y TEORÍA' },
      { summary_2_id: 71, code: '702', description: 'MISCELEÁNEA' },
      {
        summary_2_id: 71,
        code: '703',
        description: 'DICCIONARIOS Y ENCICLOPEDIAS',
      },
      { summary_2_id: 71, code: '704', description: 'TEMAS ESPECIALES' },
      {
        summary_2_id: 71,
        code: '705',
        description: 'PUBLICACIONES EN SERIE',
      },
      {
        summary_2_id: 71,
        code: '706',
        description: 'ORGANIZACIONES Y ADMINISTRACIÓN',
      },
      {
        summary_2_id: 71,
        code: '707',
        description: 'EDUCACIÓN, INVESTIGACIÓN, TEMAS RELACIONADOS',
      },
      {
        summary_2_id: 71,
        code: '708',
        description: 'GALERÍAS, MUSEOS, COLECCIONES PRIVADAS',
      },
      {
        summary_2_id: 71,
        code: '709',
        description: 'TRATAMIENTO HISTÓRICO, GEOGRÁFICO, PERSONAS',
      },
      {
        summary_2_id: 72,
        code: '710',
        description: 'URBANISMO & ARTE DEL PAISAJE',
      },
      {
        summary_2_id: 72,
        code: '711',
        description: 'PLANIFICACIÓN DEL ESPACIO (URBANISMO)',
      },
      {
        summary_2_id: 72,
        code: '712',
        description: 'ARQUITECTURA DEL PAISAJE',
      },
      {
        summary_2_id: 72,
        code: '713',
        description: 'ARQUITECTURA DEL PAISAJE DE LAS VÍAS DE TRÁNSITO',
      },
      { summary_2_id: 72, code: '714', description: 'AGUAS ORNAMENTALES' },
      { summary_2_id: 72, code: '715', description: 'PLANTAS LEÑOSAS' },
      { summary_2_id: 72, code: '716', description: 'PLANTAS HERBÁCEAS' },
      { summary_2_id: 72, code: '717', description: 'ESTRUCTURAS' },
      {
        summary_2_id: 72,
        code: '718',
        description: 'DISEÑO DE PAISAJE DE CEMENTERIOS',
      },
      { summary_2_id: 72, code: '719', description: 'PAISAJES NATURALES' },
      {
        summary_2_id: 73,
        code: '720',
        description: 'ARQUITECTURA',
      },
      {
        summary_2_id: 73,
        code: '721',
        description: 'ESTRUCTURA ARQUITECTÓNICA',
      },
      {
        summary_2_id: 73,
        code: '722',
        description: 'ARQUITECTURA ANTIGUA HASTA CA. 300',
      },
      {
        summary_2_id: 73,
        code: '723',
        description: 'ARQUITECTURA DESDE CA. 300 HASTA 1399',
      },
      {
        summary_2_id: 73,
        code: '724',
        description: 'ARQUITECTURA DESDE 1400',
      },
      { summary_2_id: 73, code: '725', description: 'ESTRUCTURAS PÚBLICAS' },
      {
        summary_2_id: 73,
        code: '726',
        description: 'EDIFICIOS PARA PROPÓSITOS RELIGIOSOS',
      },
      {
        summary_2_id: 73,
        code: '727',
        description: 'EDIFICIOS PARA EDUCACIÓN E INVESTIGACIÓN',
      },
      {
        summary_2_id: 73,
        code: '728',
        description: 'EDIFICIOS RESIDENCIALES Y RELACIONADOS',
      },
      { summary_2_id: 73, code: '729', description: 'DISEÑO Y DECORACIÓN' },
      {
        summary_2_id: 74,
        code: '730',
        description: 'ARTES PLÁSTICAS; ESCULTURA',
      },
      {
        summary_2_id: 74,
        code: '731',
        description: 'PROCESOS, FORMAS, TEMAS DE LA ESCULTURA',
      },
      {
        summary_2_id: 74,
        code: '732',
        description: 'LA ESCULTURA HASTA CA. 500',
      },
      {
        summary_2_id: 74,
        code: '733',
        description: 'ESCULTURA GRIEGA, ETRUSCA, ROMANA',
      },
      {
        summary_2_id: 74,
        code: '734',
        description: 'ESCULTURA DESDE CA. 500 HASTA 1399',
      },
      { summary_2_id: 74, code: '735', description: 'ESCULTURA DESDE 1400' },
      { summary_2_id: 74, code: '736', description: 'TALLA Y TALLADO' },
      {
        summary_2_id: 74,
        code: '737',
        description: 'NUMISMÁTICA Y SIGILOGRAFÍA',
      },
      { summary_2_id: 74, code: '738', description: 'ARTES CERÁMICAS' },
      { summary_2_id: 74, code: '739', description: 'ARTE EN METAL' },
      {
        summary_2_id: 75,
        code: '740',
        description: 'DIBUJO Y ARTES DECORATIVAS',
      },
      { summary_2_id: 75, code: '741', description: 'DIBUJO Y DIBUJOS' },
      { summary_2_id: 75, code: '742', description: 'PERSPECTIVA' },
      {
        summary_2_id: 75,
        code: '743',
        description: 'DIBUJO Y DIBUJOS POR TEMA',
      },
      { summary_2_id: 75, code: '744', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 75, code: '745', description: 'ARTES DECORATIVAS' },
      { summary_2_id: 75, code: '746', description: 'ARTES TEXTILES' },
      {
        summary_2_id: 75,
        code: '747',
        description: 'DECORACIÓN DE INTERIORES',
      },
      { summary_2_id: 75, code: '748', description: 'VIDRIO' },
      { summary_2_id: 75, code: '749', description: 'MUEBLES Y ACCESORIOS' },
      {
        summary_2_id: 76,
        code: '750',
        description: 'PINTURA Y PINTURAS',
      },
      {
        summary_2_id: 76,
        code: '751',
        description: 'TÉCNICAS, EQUIPO, FORMAS',
      },
      { summary_2_id: 76, code: '752', description: 'COLOR' },
      {
        summary_2_id: 76,
        code: '753',
        description: 'SIMBOLISMO, ALEGORÍA, MITOLOGÍA, LEYENDA',
      },
      { summary_2_id: 76, code: '754', description: 'PINTURAS DE GÉNERO' },
      {
        summary_2_id: 76,
        code: '755',
        description: 'RELIGIÓN Y SIMBOLISMO RELIGIOSOS',
      },
      { summary_2_id: 76, code: '756', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 76,
        code: '757',
        description: 'FIGURAS HUMANAS Y SUS PARTES',
      },
      { summary_2_id: 76, code: '758', description: 'OTROS TEMAS' },
      {
        summary_2_id: 76,
        code: '759',
        description: 'TRATAMIENTO HISTÓRICO, GEOGRÁFICO, DE PERSONAS',
      },
      {
        summary_2_id: 77,
        code: '760',
        description: 'ARTES GRÁFICAS, ARTE DE GRABAR & GRABADOS',
      },
      {
        summary_2_id: 77,
        code: '761',
        description: 'PROCESOS EN RELIEVE (GRABADO EN BLOQUE)',
      },
      { summary_2_id: 77, code: '762', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 77,
        code: '763',
        description: 'PROCESOS LITOGRÁFICOS (PLANOGRÁFICOS)',
      },
      {
        summary_2_id: 77,
        code: '764',
        description: 'CROMOLITOGRAFÍA Y SERIGRAFÍA',
      },
      { summary_2_id: 77, code: '765', description: 'GRABADO EN METAL' },
      {
        summary_2_id: 77,
        code: '766',
        description: 'MEDIA TINTA Y PROCESOS RELACIONADOS',
      },
      {
        summary_2_id: 77,
        code: '767',
        description: 'AGUAFUERTE Y GRABADO A BURIL',
      },
      { summary_2_id: 77, code: '768', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 77, code: '769', description: 'GRABADOS' },
      {
        summary_2_id: 78,
        code: '770',
        description: 'FOTOGRAFÍA & FOTOGRAFÍAS',
      },
      {
        summary_2_id: 78,
        code: '771',
        description: 'TÉCNICAS, EQUIPO, MATERIALES',
      },
      {
        summary_2_id: 78,
        code: '772',
        description: 'PROCESOS CON SALES METÁLICAS',
      },
      {
        summary_2_id: 78,
        code: '773',
        description: 'PROCESOS DE PIGMENTACIÓN DE LA IMPRESIÓN',
      },
      { summary_2_id: 78, code: '774', description: 'HOLOGRAFÍA' },
      { summary_2_id: 78, code: '775', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 78, code: '776', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 78, code: '777', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 78,
        code: '778',
        description: 'CAMPOS Y CLASES DE FOTOGRAFÍA',
      },
      { summary_2_id: 78, code: '779', description: 'FOTOGRAFÍA' },
      {
        summary_2_id: 79,
        code: '780',
        description: 'MÚSICA',
      },
      {
        summary_2_id: 79,
        code: '781',
        description: 'PRINCIPIOS GENERALES Y FORMAS MUSICALES',
      },
      { summary_2_id: 79, code: '782', description: 'MÚSICA VOCAL' },
      {
        summary_2_id: 79,
        code: '783',
        description: 'MÚSICA PARA VOCES INDIVIDUALES, LA VOZ',
      },
      {
        summary_2_id: 79,
        code: '784',
        description: 'INSTRUMENTOS Y CONJUNTOS INSTRUMENTALES',
      },
      {
        summary_2_id: 79,
        code: '785',
        description: 'CONJUNTOS CON UN SOLO INSTRUMENTO POR PARTE',
      },
      {
        summary_2_id: 79,
        code: '786',
        description: 'INSTRUMENTOS DE PERCUSIÓN Y OTROS INSTRUMENTOS',
      },
      {
        summary_2_id: 79,
        code: '787',
        description: 'INSTRUMENTOS DE CUERDA (CORDÓFONOS)',
      },
      {
        summary_2_id: 79,
        code: '788',
        description: 'INSTRUMENTOS DE VIENTO (AERÓFONOS)',
      },
      { summary_2_id: 79, code: '789', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 80,
        code: '790',
        description: 'ARTES RECREATIVAS & DE LA ACTUACIÓN',
      },
      {
        summary_2_id: 80,
        code: '791',
        description: 'REPRESENTACIONES PÚBLICAS',
      },
      {
        summary_2_id: 80,
        code: '792',
        description: 'REPRESENTACIONES ESCÉNICAS',
      },
      {
        summary_2_id: 80,
        code: '793',
        description: 'JUEGOS Y PASATIEMPOS BAJO TECHO',
      },
      {
        summary_2_id: 80,
        code: '794',
        description: 'JUEGOS DE DESTREZA BAJO TECHO',
      },
      { summary_2_id: 80, code: '795', description: 'JUEGOS DE SUERTE' },
      {
        summary_2_id: 80,
        code: '796',
        description: 'DEPORTES Y JUEGOS ATLÉTICOS Y AL AIRE LIBRE',
      },
      {
        summary_2_id: 80,
        code: '797',
        description: 'DEPORTES ACUÁTICOS Y AÉREOS',
      },
      { summary_2_id: 80, code: '798', description: 'DEPORTES ECUESTRES' },
      { summary_2_id: 80, code: '799', description: 'PESCA, CAZA, TIRO' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
