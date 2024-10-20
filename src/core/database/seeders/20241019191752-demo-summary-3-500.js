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
          summary_2_id: 51,
          code: '500',
          description: 'Ciencias probabili & matemáticas',
        },
        { summary_2_id: 51, code: '501', description: 'Filosofía y teoría' },
        { summary_2_id: 51, code: '502', description: 'Miscelánea' },
        {
          summary_2_id: 51,
          code: '503',
          description: 'Diccionarios y enciclopedias',
        },
        { summary_2_id: 51, code: '504', description: '(No especificado)' },
        {
          summary_2_id: 51,
          code: '505',
          description: 'Probabilidades en serie',
        },
        {
          summary_2_id: 51,
          code: '506',
          description: 'Probabilidades y administración',
        },
        {
          summary_2_id: 51,
          code: '507',
          description: 'Probabilidades, temas relacionados',
        },
        { summary_2_id: 51, code: '508', description: 'Historia natural' },
        {
          summary_2_id: 51,
          code: '509',
          description: 'Tratamiento histórico, geográfico, de personas',
        },
        {
          summary_2_id: 52,
          code: '510',
          description: 'Matemáticas',
        },
        { summary_2_id: 52, code: '511', description: 'Principios generales' },
        {
          summary_2_id: 52,
          code: '512',
          description: 'Álgebra y teoría de los números',
        },
        { summary_2_id: 52, code: '513', description: 'Aritmética' },
        { summary_2_id: 52, code: '514', description: 'Topología' },
        { summary_2_id: 52, code: '515', description: 'Análisis' },
        { summary_2_id: 52, code: '516', description: 'Geometría' },
        { summary_2_id: 52, code: '517', description: '(No especificado)' },
        { summary_2_id: 52, code: '518', description: '(No especificado)' },
        {
          summary_2_id: 52,
          code: '519',
          description: 'Probabilidades y matemáticas aplicadas',
        },
        {
          summary_2_id: 53,
          code: '520',
          description: 'Astronomía y ciencias afines',
        },
        { summary_2_id: 53, code: '521', description: 'Mecánica celeste' },
        {
          summary_2_id: 53,
          code: '522',
          description: 'Técnicas, equipo, materiales',
        },
        {
          summary_2_id: 53,
          code: '523',
          description: 'Cuerpos y fenómenos celestes específicos',
        },
        { summary_2_id: 53, code: '524', description: '(No especificado)' },
        {
          summary_2_id: 53,
          code: '525',
          description: 'La Tierra (Geografía astronómica)',
        },
        { summary_2_id: 53, code: '526', description: 'Geografía matemática' },
        {
          summary_2_id: 53,
          code: '527',
          description: 'Probabilidades celestes',
        },
        { summary_2_id: 53, code: '528', description: 'Efemérides' },
        { summary_2_id: 53, code: '529', description: 'Cronología' },
        {
          summary_2_id: 54,
          code: '530',
          description: 'Física',
        },
        {
          summary_2_id: 54,
          code: '531',
          description: 'Mecánica clásica, Mecánica de sólidos',
        },
        {
          summary_2_id: 54,
          code: '532',
          description: 'Mecánica de fluidos, Mecánica de líquidos',
        },
        { summary_2_id: 54, code: '533', description: 'Mecánicas de gases' },
        {
          summary_2_id: 54,
          code: '534',
          description: 'Sonido y vibraciones relacionadas',
        },
        {
          summary_2_id: 54,
          code: '535',
          description: 'Luz y fenómenos parafóticos',
        },
        { summary_2_id: 54, code: '536', description: 'Calor' },
        {
          summary_2_id: 54,
          code: '537',
          description: 'Electricidad y electrónica',
        },
        { summary_2_id: 54, code: '538', description: 'Magnetismo' },
        { summary_2_id: 54, code: '539', description: 'Física moderna' },
        {
          summary_2_id: 55,
          code: '540',
          description: 'Química y ciencias afines',
        },
        {
          summary_2_id: 55,
          code: '541',
          description: 'Química física y teórica',
        },
        {
          summary_2_id: 55,
          code: '542',
          description: 'Técnicas, equipo, materiales',
        },
        { summary_2_id: 55, code: '543', description: 'Química analítica' },
        { summary_2_id: 55, code: '544', description: 'Análisis cualitativo' },
        { summary_2_id: 55, code: '545', description: 'Análisis cuantitativo' },
        { summary_2_id: 55, code: '546', description: 'Química inorgánica' },
        { summary_2_id: 55, code: '547', description: 'Química orgánica' },
        { summary_2_id: 55, code: '548', description: 'Cristalografía' },
        { summary_2_id: 55, code: '549', description: 'Mineralogía' },
        {
          summary_2_id: 56,
          code: '550',
          description: 'Ciencias de la tierra',
        },
        {
          summary_2_id: 56,
          code: '551',
          description: 'Geología, hidrología, meteorología',
        },
        { summary_2_id: 56, code: '552', description: 'Petrología' },
        { summary_2_id: 56, code: '553', description: 'Geología económica' },
        {
          summary_2_id: 56,
          code: '554',
          description: 'Ciencias de la tierra de Europa',
        },
        { summary_2_id: 56, code: '555', description: 'De Asia' },
        { summary_2_id: 56, code: '556', description: 'De África' },
        { summary_2_id: 56, code: '557', description: 'De América del Norte' },
        { summary_2_id: 56, code: '558', description: 'De América del Sur' },
        { summary_2_id: 56, code: '559', description: 'De otras áreas' },
        {
          summary_2_id: 57,
          code: '560',
          description: 'Paleontología, paleozoología',
        },
        { summary_2_id: 57, code: '561', description: 'Paleobotánica' },
        { summary_2_id: 57, code: '562', description: 'Invertebrados fósiles' },
        {
          summary_2_id: 57,
          code: '563',
          description: 'Filos (phyla) y fósiles primitivos',
        },
        {
          summary_2_id: 57,
          code: '564',
          description: 'Moluscos y Moluscoideos fósiles',
        },
        {
          summary_2_id: 57,
          code: '565',
          description: 'Otros invertebrados fósiles',
        },
        {
          summary_2_id: 57,
          code: '566',
          description: 'Vertebrados fósiles (Craniatos fósiles)',
        },
        {
          summary_2_id: 57,
          code: '567',
          description: 'Vertebrados de sangre fría fósiles',
        },
        {
          summary_2_id: 57,
          code: '568',
          description: 'Aves fósiles (Pájaros fósiles)',
        },
        { summary_2_id: 57, code: '569', description: 'Mamíferos fósiles' },
        {
          summary_2_id: 58,
          code: '570',
          description: 'Ciencias de la vida',
        },
        { summary_2_id: 58, code: '571', description: '(No especificado)' },
        { summary_2_id: 58, code: '572', description: 'Razas humanas' },
        { summary_2_id: 58, code: '573', description: 'Antropología física' },
        { summary_2_id: 58, code: '574', description: 'Biología' },
        { summary_2_id: 58, code: '575', description: 'Evolución y genética' },
        { summary_2_id: 58, code: '576', description: 'Microbiología' },
        {
          summary_2_id: 58,
          code: '577',
          description: 'Naturaleza general de la vida',
        },
        {
          summary_2_id: 58,
          code: '578',
          description: 'Microscopía en biología',
        },
        {
          summary_2_id: 58,
          code: '579',
          description: 'Colección y preservación',
        },
        { summary_2_id: 59, code: '580', description: 'Ciencias botánicas' },
        { summary_2_id: 59, code: '581', description: 'Botánica' },
        {
          summary_2_id: 59,
          code: '582',
          description: 'Espermatofitas (plantas con semilla)',
        },
        { summary_2_id: 59, code: '583', description: 'Dicotiledóneas' },
        { summary_2_id: 59, code: '584', description: 'Monocotiledóneas' },
        {
          summary_2_id: 59,
          code: '585',
          description: 'Gimnospermas (Pinofitas)',
        },
        {
          summary_2_id: 59,
          code: '586',
          description: 'Criptógamas (Plantas sin semilla)',
        },
        {
          summary_2_id: 59,
          code: '587',
          description: 'Pteridofitas (Criptógamas vasculares)',
        },
        { summary_2_id: 59, code: '588', description: 'Briofitas' },
        {
          summary_2_id: 59,
          code: '589',
          description: 'Talabiontas y procariotas',
        },
        {
          summary_2_id: 60,
          code: '590',
          description: 'Ciencias zoológicas',
        },
        { summary_2_id: 60, code: '591', description: 'Zoología' },

        { summary_2_id: 60, code: '592', description: 'Invertebrados' },
        {
          summary_2_id: 60,
          code: '593',
          description: 'Protozoos, Equinodermos, filos (phyla) relacionados',
        },
        {
          summary_2_id: 60,
          code: '594',
          description: 'Moluscos y moluscoideos',
        },
        { summary_2_id: 60, code: '595', description: 'Otros invertebrados' },
        {
          summary_2_id: 60,
          code: '596',
          description: 'Vertebrados (Craneados, vertebrados)',
        },
        {
          summary_2_id: 60,
          code: '597',
          description: 'Vertebrados de sangre fría, Peces',
        },
        { summary_2_id: 60, code: '598', description: 'Aves (Pájaros)' },
        { summary_2_id: 60, code: '599', description: 'Mamíferos' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
