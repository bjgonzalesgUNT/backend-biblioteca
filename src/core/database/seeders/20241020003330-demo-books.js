'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
      schema: 'biblioteca',
      tableName: 'books',
      },
      [
      {
        title: 'INTRODUCCIÓN A LA FILOSOFÍA',
        deway_id: 82,
        author_id: 1,
        publisher_id: 1,
        description:
        'UN LIBRO QUE EXPLORA LOS CONCEPTOS BÁSICOS DE LA FILOSOFÍA.',
        pages: 320,
        edition: '3',
        path: '/books/introduccion_filosofia.pdf',
        image_url: 'https://www.cervantesvirtual.com/portadas/057/0579633/Cover.jpg',
        published_at: '2015-06-15',
      },
      {
        title: 'HISTORIA DEL CRISTIANISMO',
        deway_id: 261,
        author_id: 2,
        publisher_id: 2,
        description:
        'UN RECORRIDO POR LA HISTORIA DEL CRISTIANISMO DESDE SUS INICIOS HASTA LA ACTUALIDAD.',
        pages: 450,
        edition: '1',
        path: '/books/historia_cristianismo.pdf',
        image_url: 'https://images.cdn2.buscalibre.com/fit-in/360x360/3f/78/3f7893eb4493f1a2a124e5ae4c5d6229.jpg',
        published_at: '2018-09-10',
      },
      {
        title: 'CÁLCULO AVANZADO',
        deway_id: 506,
        author_id: 3,
        publisher_id: 3,
        description:
        'UN TEXTO COMPLETO SOBRE CÁLCULO AVANZADO Y SUS APLICACIONES.',
        pages: 600,
        edition: '2',
        path: '/books/calculo_avanzado.pdf',
        image_url: 'https://images-na.ssl-images-amazon.com/images/P/9587612396.01.LZZZZZZZ.jpg',
        published_at: '2020-01-20',
      },
      {
        title: 'QUÍMICA ORGÁNICA',
        deway_id: 538,
        author_id: 4,
        publisher_id: 4,
        description:
        'UNA GUÍA DETALLADA SOBRE LOS PRINCIPIOS DE LA QUÍMICA ORGÁNICA.',
        pages: 500,
        edition: '4',
        path: '/books/quimica_organica.pdf',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7L4DAcvwH2RgOcfFtOM4xZiGcff2az3fQAQ&s',
        published_at: '2017-03-05',
      },
      {
        title: 'HISTORIA DE EUROPA',
        deway_id: 931,
        author_id: 5,
        publisher_id: 5,
        description:
        'UN ANÁLISIS PROFUNDO DE LA HISTORIA EUROPEA DESDE LA EDAD MEDIA HASTA LA ACTUALIDAD.',
        pages: 700,
        edition: '5',
        path: '/books/historia_europa.pdf',
        image_url: 'https://images.cdn2.buscalibre.com/fit-in/360x360/d3/4b/d34bb37c1f626883df2432c6b9c4182c.jpg',
        published_at: '2019-11-25',
      },
      {
        title: 'PSICOLOGÍA DEL DESARROLLO',
        deway_id: 146,
        author_id: 6,
        publisher_id: 6,
        description: 'UN ESTUDIO SOBRE LAS ETAPAS DEL DESARROLLO HUMANO.',
        pages: 420,
        edition: '2',
        path: '/books/psicologia_desarrollo.pdf',
        image_url: 'https://images.cdn1.buscalibre.com/fit-in/360x360/83/e8/83e81530c5d2ed30544439f0d84b899e.jpg',
        published_at: '2016-08-30',
      },
      {
        title: 'DERECHO INTERNACIONAL',
        deway_id: 332,
        author_id: 7,
        publisher_id: 7,
        description:
        'UNA REVISIÓN EXHAUSTIVA DE LAS LEYES Y NORMAS INTERNACIONALES.',
        pages: 550,
        edition: '3',
        path: '/books/derecho_internacional.pdf',
        image_url: 'https://images.cdn3.buscalibre.com/fit-in/360x360/67/74/67742e5b8943fd877f9dd4b5447ae86d.jpg',
        published_at: '2021-04-15',
      },
      {
        title: 'INGENIERÍA CIVIL MODERNA',
        deway_id: 615,
        author_id: 8,
        publisher_id: 8,
        description:
        'UN COMPENDIO DE TÉCNICAS Y PRÁCTICAS EN LA INGENIERÍA CIVIL MODERNA.',
        pages: 480,
        edition: '1',
        path: '/books/ingenieria_civil_moderna.pdf',
        image_url: 'https://static.bookscovers.es/imagenes/9788433/978843385977.JPG',
        published_at: '2019-07-22',
      },
      {
        title: 'LITERATURA ESPAÑOLA CONTEMPORÁNEA',
        deway_id: 851,
        author_id: 9,
        publisher_id: 9,
        description:
        'UN ANÁLISIS DE LAS OBRAS Y AUTORES MÁS INFLUYENTES DE LA LITERATURA ESPAÑOLA CONTEMPORÁNEA.',
        pages: 350,
        edition: '2',
        path: '/books/literatura_espanola_contemporanea.pdf',
        image_url:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1xHwsEMqOuQa4uxEUdXkbEU80R7bKBpqAzA&s',
        published_at: '2017-12-10',
      },
      {
        title: 'BIOLOGÍA MOLECULAR',
        deway_id: 565,
        author_id: 10,
        publisher_id: 10,
        description:
        'UN ESTUDIO DETALLADO DE LOS PROCESOS MOLECULARES EN LOS ORGANISMOS VIVOS.',
        pages: 530,
        edition: '4',
        path: '/books/biologia_molecular.pdf',
        image_url: 'https://images.cdn2.buscalibre.com/fit-in/360x360/f5/00/f5002a0b2262a281be36aa9ef366f5b0.jpg',
        published_at: '2022-02-18',
      },
      {
        title: 'CIEN AÑOS DE SOLEDAD',
        deway_id: 854,
        author_id: 1,
        publisher_id: 1,
        description:
        'UNA OBRA MAESTRA DE GABRIEL GARCÍA MÁRQUEZ QUE NARRA LA HISTORIA DE LA FAMILIA BUENDÍA.',
        pages: 417,
        edition: '1',
        path: '/books/cien_anos_de_soledad.pdf',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7dXoJiY12g6g1U7TdRx44MQ3BT8KW2DA18A&s',
        published_at: '1967-05-30',
      },
      {
        title: 'EL RESPLANDECIOM',
        deway_id: 804,
        author_id: 2,
        publisher_id: 2,
        description:
        'UNA NOVELA DE TERROR ESCRITA POR STEPHEN KING SOBRE UNA FAMILIA EN UN HOTEL EMBRUJADO.',
        pages: 447,
        edition: '1',
        path: '/books/el_resplandecimiento.pdf',
        image_url: 'https://simehbucket.s3.amazonaws.com/images/3012e4fbe03f911b804ed3e00d720983-large.jpg',
        published_at: '1977-01-28',
      },
      {
        title: 'HARRY POTTER Y LA PIEDRA FILOSOFAL',
        deway_id: 814,
        author_id: 3,
        publisher_id: 3,
        description:
        'EL PRIMER LIBRO DE LA SERIE HARRY POTTER, DONDE HARRY DESCUBRE QUE ES UN MAGO.',
        pages: 223,
        edition: '1',
        path: '/books/harry_potter_piedra_filosofal.pdf',
        image_url:
        'https://www.mrbooks.com/mrbooks/portadas/9789585234048.webp',
        published_at: '1997-06-26',
      },
      {
        title: 'LA CASA DE LOS ESPÍRITUS',
        deway_id: 854,
        author_id: 4,
        publisher_id: 4,
        description:
        'UNA NOVELA DE ISABEL ALLENDE QUE SIGUE LA VIDA DE LA FAMILIA TRUEBA A LO LARGO DE VARIAS GENERACIONES.',
        pages: 368,
        edition: '1',
        path: '/books/la_casa_de_los_espiritus.pdf',
        image_url: 'https://www.mrbooks.com/mrbooks/portadas/9789588611778.webp',
        published_at: '1982-10-15',
      },
      {
        title: 'KAFKA EN LA ORILLA',
        deway_id: 886,
        author_id: 5,
        publisher_id: 5,
        description:
        'UNA NOVELA DE HARUKI MURAKAMI QUE MEZCLA REALISMO MÁGICO Y SURREALISMO.',
        pages: 505,
        edition: '1',
        path: '/books/kafka_en_la_orilla.pdf',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwASed6zmASidCSYGVothCPKoVxCUDd-CddA&s',
        published_at: '2002-09-12',
      },
      {
        title: 'EL ALQUIMISTA',
        deway_id: 860,
        author_id: 6,
        publisher_id: 6,
        description:
        'UNA NOVELA DE PAULO COELHO SOBRE UN JOVEN PASTOR EN BUSCA DE UN TESORO EN EGIPTO.',
        pages: 208,
        edition: '1',
        path: '/books/el_alquimista.pdf',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxoERl_fQgRTT8qziR6SA8UbR-ZFxGO5XkUg&s',
        published_at: '1988-05-01',
      },
      {
        title: 'ORGULLO Y PREJUICIO',
        deway_id: 814,
        author_id: 7,
        publisher_id: 7,
        description:
        'UNA NOVELA DE JANE AUSTEN QUE EXPLORA LAS COSTUMBRES Y RELACIONES DE LA SOCIEDAD INGLESA DEL SIGLO XIX.',
        pages: 279,
        edition: '1',
        path: '/books/orgullo_y_prejuicio.pdf',
        image_url: 'https://www.mrbooks.com/mrbooks/portadas/9789588925738.webp',
        published_at: '1813-01-28',
      },
      {
        title: 'EL VIEJO Y EL MAR',
        deway_id: 804,
        author_id: 8,
        publisher_id: 8,
        description:
        'UNA NOVELA DE ERNEST HEMINGWAY SOBRE LA LUCHA DE UN VIEJO PESCADOR CON UN GRAN PEZ.',
        pages: 127,
        edition: '1',
        path: '/books/el_viejo_y_el_mar.pdf',
        image_url: 'https://www.mrbooks.com/mrbooks/portadas/9786287513099.webp',
        published_at: '1952-09-01',
      },
      {
        title: 'VEINTE POEMAS DE AMOR Y UNA CANCIÓN DESESPERADA',
        deway_id: 852,
        author_id: 9,
        publisher_id: 9,
        description:
        'UNA COLECCIÓN DE POEMAS DE AMOR ESCRITA POR PABLO NERUDA.',
        pages: 64,
        edition: '1',
        path: '/books/veinte_poemas_de_amor.pdf',
        image_url: 'https://www.mrbooks.com/mrbooks/portadas/9788418395796.webp',
        published_at: '1924-06-01',
      },
      {
        title: 'HISTORIA DE DOS CIUDADES',
        deway_id: 814,
        author_id: 10,
        publisher_id: 10,
        description:
        'UNA NOVELA DE CHARLES DICKENS AMBIENTADA EN LONDRES Y PARÍS DURANTE LA REVOLUCIÓN FRANCESA.',
        pages: 341,
        edition: '1',
        path: '/books/historia_de_dos_ciudades.pdf',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4iLs4LZ4jYRc2oJ15l8PpBl4a-F6ZUmYcMw&s',
        published_at: '1859-04-30',
      },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE biblioteca.books_id_seq RESTART WITH 1;',
    );

    await queryInterface.bulkDelete({
      schema: 'biblioteca',
      tableName: 'books',
    });
  },
};
