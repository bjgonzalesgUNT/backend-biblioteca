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
          title: 'Introducción a la Filosofía',
          deway_id: 82,
          author_id: 1,
          publisher_id: 1,
          description:
            'Un libro que explora los conceptos básicos de la filosofía.',
          pages: 320,
          edition: '3',
          path: '/books/introduccion_filosofia.pdf',
          image_url: 'https://example.com/images/introduccion_filosofia.jpg',
          published_at: '2015-06-15',
        },
        {
          title: 'Historia del Cristianismo',
          deway_id: 261,
          author_id: 2,
          publisher_id: 2,
          description:
            'Un recorrido por la historia del cristianismo desde sus inicios hasta la actualidad.',
          pages: 450,
          edition: '1',
          path: '/books/historia_cristianismo.pdf',
          image_url: 'https://example.com/images/historia_cristianismo.jpg',
          published_at: '2018-09-10',
        },
        {
          title: 'Cálculo Avanzado',
          deway_id: 506,
          author_id: 3,
          publisher_id: 3,
          description:
            'Un texto completo sobre cálculo avanzado y sus aplicaciones.',
          pages: 600,
          edition: '2',
          path: '/books/calculo_avanzado.pdf',
          image_url: 'https://example.com/images/calculo_avanzado.jpg',
          published_at: '2020-01-20',
        },
        {
          title: 'Química Orgánica',
          deway_id: 538,
          author_id: 4,
          publisher_id: 4,
          description:
            'Una guía detallada sobre los principios de la química orgánica.',
          pages: 500,
          edition: '4',
          path: '/books/quimica_organica.pdf',
          image_url: 'https://example.com/images/quimica_organica.jpg',
          published_at: '2017-03-05',
        },
        {
          title: 'Historia de Europa',
          deway_id: 931,
          author_id: 5,
          publisher_id: 5,
          description:
            'Un análisis profundo de la historia europea desde la Edad Media hasta la actualidad.',
          pages: 700,
          edition: '5',
          path: '/books/historia_europa.pdf',
          image_url: 'https://example.com/images/historia_europa.jpg',
          published_at: '2019-11-25',
        },
        {
          title: 'Psicología del Desarrollo',
          deway_id: 146,
          author_id: 6,
          publisher_id: 6,
          description: 'Un estudio sobre las etapas del desarrollo humano.',
          pages: 420,
          edition: '2',
          path: '/books/psicologia_desarrollo.pdf',
          image_url: 'https://example.com/images/psicologia_desarrollo.jpg',
          published_at: '2016-08-30',
        },
        {
          title: 'Derecho Internacional',
          deway_id: 332,
          author_id: 7,
          publisher_id: 7,
          description:
            'Una revisión exhaustiva de las leyes y normas internacionales.',
          pages: 550,
          edition: '3',
          path: '/books/derecho_internacional.pdf',
          image_url: 'https://example.com/images/derecho_internacional.jpg',
          published_at: '2021-04-15',
        },
        {
          title: 'Ingeniería Civil Moderna',
          deway_id: 615,
          author_id: 8,
          publisher_id: 8,
          description:
            'Un compendio de técnicas y prácticas en la ingeniería civil moderna.',
          pages: 480,
          edition: '1',
          path: '/books/ingenieria_civil_moderna.pdf',
          image_url: 'https://example.com/images/ingenieria_civil_moderna.jpg',
          published_at: '2019-07-22',
        },
        {
          title: 'Literatura Española Contemporánea',
          deway_id: 851,
          author_id: 9,
          publisher_id: 9,
          description:
            'Un análisis de las obras y autores más influyentes de la literatura española contemporánea.',
          pages: 350,
          edition: '2',
          path: '/books/literatura_espanola_contemporanea.pdf',
          image_url:
            'https://example.com/images/literatura_espanola_contemporanea.jpg',
          published_at: '2017-12-10',
        },
        {
          title: 'Biología Molecular',
          deway_id: 565,
          author_id: 10,
          publisher_id: 10,
          description:
            'Un estudio detallado de los procesos moleculares en los organismos vivos.',
          pages: 530,
          edition: '4',
          path: '/books/biologia_molecular.pdf',
          image_url: 'https://example.com/images/biologia_molecular.jpg',
          published_at: '2022-02-18',
        },
        {
          title: 'Cien Años de Soledad',
          deway_id: 854,
          author_id: 1,
          publisher_id: 1,
          description:
            'Una obra maestra de Gabriel García Márquez que narra la historia de la familia Buendía.',
          pages: 417,
          edition: '1',
          path: '/books/cien_anos_de_soledad.pdf',
          image_url: 'https://example.com/images/cien_anos_de_soledad.jpg',
          published_at: '1967-05-30',
        },
        {
          title: 'El Resplandor',
          deway_id: 804,
          author_id: 2,
          publisher_id: 2,
          description:
            'Una novela de terror escrita por Stephen King sobre una familia en un hotel embrujado.',
          pages: 447,
          edition: '1',
          path: '/books/el_resplandor.pdf',
          image_url: 'https://example.com/images/el_resplandor.jpg',
          published_at: '1977-01-28',
        },
        {
          title: 'Harry Potter y la Piedra Filosofal',
          deway_id: 814,
          author_id: 3,
          publisher_id: 3,
          description:
            'El primer libro de la serie Harry Potter, donde Harry descubre que es un mago.',
          pages: 223,
          edition: '1',
          path: '/books/harry_potter_piedra_filosofal.pdf',
          image_url:
            'https://example.com/images/harry_potter_piedra_filosofal.jpg',
          published_at: '1997-06-26',
        },
        {
          title: 'La Casa de los Espíritus',
          deway_id: 854,
          author_id: 4,
          publisher_id: 4,
          description:
            'Una novela de Isabel Allende que sigue la vida de la familia Trueba a lo largo de varias generaciones.',
          pages: 368,
          edition: '1',
          path: '/books/la_casa_de_los_espiritus.pdf',
          image_url: 'https://example.com/images/la_casa_de_los_espiritus.jpg',
          published_at: '1982-10-15',
        },
        {
          title: 'Kafka en la Orilla',
          deway_id: 886,
          author_id: 5,
          publisher_id: 5,
          description:
            'Una novela de Haruki Murakami que mezcla realismo mágico y surrealismo.',
          pages: 505,
          edition: '1',
          path: '/books/kafka_en_la_orilla.pdf',
          image_url: 'https://example.com/images/kafka_en_la_orilla.jpg',
          published_at: '2002-09-12',
        },
        {
          title: 'El Alquimista',
          deway_id: 860,
          author_id: 6,
          publisher_id: 6,
          description:
            'Una novela de Paulo Coelho sobre un joven pastor en busca de un tesoro en Egipto.',
          pages: 208,
          edition: '1',
          path: '/books/el_alquimista.pdf',
          image_url: 'https://example.com/images/el_alquimista.jpg',
          published_at: '1988-05-01',
        },
        {
          title: 'Orgullo y Prejuicio',
          deway_id: 814,
          author_id: 7,
          publisher_id: 7,
          description:
            'Una novela de Jane Austen que explora las costumbres y relaciones de la sociedad inglesa del siglo XIX.',
          pages: 279,
          edition: '1',
          path: '/books/orgullo_y_prejuicio.pdf',
          image_url: 'https://example.com/images/orgullo_y_prejuicio.jpg',
          published_at: '1813-01-28',
        },
        {
          title: 'El Viejo y el Mar',
          deway_id: 804,
          author_id: 8,
          publisher_id: 8,
          description:
            'Una novela de Ernest Hemingway sobre la lucha de un viejo pescador con un gran pez.',
          pages: 127,
          edition: '1',
          path: '/books/el_viejo_y_el_mar.pdf',
          image_url: 'https://example.com/images/el_viejo_y_el_mar.jpg',
          published_at: '1952-09-01',
        },
        {
          title: 'Veinte Poemas de Amor y una Canción Desesperada',
          deway_id: 852,
          author_id: 9,
          publisher_id: 9,
          description:
            'Una colección de poemas de amor escrita por Pablo Neruda.',
          pages: 64,
          edition: '1',
          path: '/books/veinte_poemas_de_amor.pdf',
          image_url: 'https://example.com/images/veinte_poemas_de_amor.jpg',
          published_at: '1924-06-01',
        },
        {
          title: 'Historia de Dos Ciudades',
          deway_id: 814,
          author_id: 10,
          publisher_id: 10,
          description:
            'Una novela de Charles Dickens ambientada en Londres y París durante la Revolución Francesa.',
          pages: 341,
          edition: '1',
          path: '/books/historia_de_dos_ciudades.pdf',
          image_url: 'https://example.com/images/historia_de_dos_ciudades.jpg',
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
