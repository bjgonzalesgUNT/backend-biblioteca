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
          summary_2_id: 21,
          code: '201',
          description: 'Filosofía del cristianismo',
        },
        {
          summary_2_id: 21,
          code: '202',
          description: 'Miscelánea del cristianismo',
        },
        {
          summary_2_id: 21,
          code: '203',
          description: 'Diccionarios del cristianismo',
        },
        { summary_2_id: 21, code: '204', description: 'Temas especiales' },
        {
          summary_2_id: 21,
          code: '205',
          description: 'Publicaciones en serie del cristianismo',
        },
        {
          summary_2_id: 21,
          code: '206',
          description: 'Organizaciones del cristianismo',
        },
        {
          summary_2_id: 21,
          code: '207',
          description: 'Educación, investigación en cristianismo',
        },
        {
          summary_2_id: 21,
          code: '208',
          description: 'Clases de personas en el cristianismo',
        },
        {
          summary_2_id: 21,
          code: '209',
          description: 'Historia y geografía del cristianismo',
        },
        { summary_2_id: 22, code: '211', description: 'Conceptos de Dios' },
        {
          summary_2_id: 22,
          code: '212',
          description: 'Existencia y atributos de Dios',
        },
        { summary_2_id: 22, code: '213', description: 'Creación' },
        { summary_2_id: 22, code: '214', description: 'Teodicea' },
        { summary_2_id: 22, code: '215', description: 'Ciencias y religión' },
        { summary_2_id: 22, code: '216', description: 'El bien y el mal' },
        { summary_2_id: 22, code: '217', description: '(No especificado)' },
        { summary_2_id: 22, code: '218', description: 'El Hombre' },
        { summary_2_id: 22, code: '219', description: '(No especificado)' },
        { summary_2_id: 23, code: '221', description: 'Antiguo Testamento' },
        {
          summary_2_id: 23,
          code: '222',
          description: 'Libros históricos del Antiguo Testamento',
        },
        {
          summary_2_id: 23,
          code: '223',
          description: 'Libros poéticos del Antiguo Testamento',
        },
        {
          summary_2_id: 23,
          code: '224',
          description: 'Libros proféticos del Antiguo Testamento',
        },
        { summary_2_id: 23, code: '225', description: 'Nuevo Testamento' },
        {
          summary_2_id: 23,
          code: '226',
          description: 'Evangelios y Hechos de los Apóstoles',
        },
        { summary_2_id: 23, code: '227', description: 'Epístolas' },
        {
          summary_2_id: 23,
          code: '228',
          description: 'Revelación (Apocalipsis de Juan)',
        },
        {
          summary_2_id: 23,
          code: '229',
          description: 'Apócrifos y seudoepígrafes',
        },
        { summary_2_id: 24, code: '231', description: 'Dios' },
        {
          summary_2_id: 24,
          code: '232',
          description: 'Jesucristo y su familia',
        },
        { summary_2_id: 24, code: '233', description: 'El hombre' },
        {
          summary_2_id: 24,
          code: '234',
          description: 'Salvación (Soteriología) y gracia',
        },
        { summary_2_id: 24, code: '235', description: 'Seres espirituales' },
        { summary_2_id: 24, code: '236', description: 'Escatología' },
        { summary_2_id: 24, code: '237', description: '(No especificado)' },
        { summary_2_id: 24, code: '238', description: 'Credos y catecismos' },
        {
          summary_2_id: 24,
          code: '239',
          description: 'Apologética y polémica',
        },
        { summary_2_id: 25, code: '241', description: 'Teología moral' },
        { summary_2_id: 25, code: '242', description: 'Literatura piadosa' },
        {
          summary_2_id: 25,
          code: '243',
          description: 'Escritos evangelizadores para individuos',
        },
        { summary_2_id: 25, code: '244', description: '(No especificado)' },
        { summary_2_id: 25, code: '245', description: 'Textos de himnos' },
        {
          summary_2_id: 25,
          code: '246',
          description: 'Uso del arte en el cristianismo',
        },
        {
          summary_2_id: 25,
          code: '247',
          description: 'Mobiliario y artículos eclesiásticos',
        },
        {
          summary_2_id: 25,
          code: '248',
          description: 'Experiencia, práctica, vida cristianas',
        },
        {
          summary_2_id: 25,
          code: '249',
          description: 'Observancias cristianas en la vida familiar',
        },
        {
          summary_2_id: 26,
          code: '251',
          description: 'Predicación (Homilética)',
        },
        { summary_2_id: 26, code: '252', description: 'Textos de sermones' },
        {
          summary_2_id: 26,
          code: '253',
          description: 'Oficio pastoral (Teología pastoral)',
        },
        {
          summary_2_id: 26,
          code: '254',
          description: 'Gobierno y administración de la parroquia',
        },
        {
          summary_2_id: 26,
          code: '255',
          description: 'Congregaciones y órdenes religiosas',
        },
        { summary_2_id: 26, code: '256', description: '(No especificado)' },
        { summary_2_id: 26, code: '257', description: '(No especificado)' },
        { summary_2_id: 26, code: '258', description: '(No especificado)' },
        {
          summary_2_id: 26,
          code: '259',
          description: 'Actividades de la iglesia local',
        },
        { summary_2_id: 27, code: '261', description: 'Teología social' },
        { summary_2_id: 27, code: '262', description: 'Eclesiología' },
        {
          summary_2_id: 27,
          code: '263',
          description: 'Tiempos, lugares de observancia religiosa',
        },
        { summary_2_id: 27, code: '264', description: 'Culto público' },
        {
          summary_2_id: 27,
          code: '265',
          description: 'Sacramentos, otros ritos y actos',
        },
        { summary_2_id: 27, code: '266', description: 'Misiones' },
        {
          summary_2_id: 27,
          code: '267',
          description: 'Asociaciones para trabajo religioso',
        },
        { summary_2_id: 27, code: '268', description: 'Educación religiosa' },
        { summary_2_id: 27, code: '269', description: 'Renovación espiritual' },
        {
          summary_2_id: 28,
          code: '271',
          description: 'Órdenes religiosas en la historia de la iglesia',
        },
        {
          summary_2_id: 28,
          code: '272',
          description: 'Persecuciones en la historia de la iglesia',
        },
        {
          summary_2_id: 28,
          code: '273',
          description: 'Herejías en la historia de la iglesia',
        },
        {
          summary_2_id: 28,
          code: '274',
          description: 'Iglesia cristiana en Europa',
        },
        {
          summary_2_id: 28,
          code: '275',
          description: 'Iglesia cristiana en Asia',
        },
        {
          summary_2_id: 28,
          code: '276',
          description: 'Iglesia cristiana en África',
        },
        {
          summary_2_id: 28,
          code: '277',
          description: 'Iglesia cristiana en América del Norte',
        },
        {
          summary_2_id: 28,
          code: '278',
          description: 'Iglesia cristiana en América del Sur',
        },
        {
          summary_2_id: 28,
          code: '279',
          description: 'Iglesia cristiana en otras áreas',
        },
        {
          summary_2_id: 29,
          code: '281',
          description: 'Iglesia primitiva y iglesia oriental',
        },
        {
          summary_2_id: 29,
          code: '282',
          description: 'Iglesia Católica Romana',
        },
        { summary_2_id: 29, code: '283', description: 'Iglesias anglicanas' },
        {
          summary_2_id: 29,
          code: '284',
          description: 'Protestantes de origen continental',
        },
        {
          summary_2_id: 29,
          code: '285',
          description: 'Iglesias Presbiterianas, reformadas, congregacionales',
        },
        {
          summary_2_id: 29,
          code: '286',
          description:
            'Iglesias bautistas, de los Discípulos de Cristo, adventistas',
        },
        {
          summary_2_id: 29,
          code: '287',
          description: 'Iglesia Metodista y relacionadas',
        },
        { summary_2_id: 29, code: '288', description: '(No especificado)' },
        {
          summary_2_id: 29,
          code: '289',
          description: 'Otras denominaciones y sectas',
        },
        { summary_2_id: 30, code: '291', description: 'Religión comparada' },
        {
          summary_2_id: 30,
          code: '292',
          description: 'Religión clásica (griega y romana)',
        },
        { summary_2_id: 30, code: '293', description: 'Religión germánica' },
        {
          summary_2_id: 30,
          code: '294',
          description: 'Religiones de origen hindú',
        },
        {
          summary_2_id: 30,
          code: '295',
          description: 'Zoroastrismo (Mazdeismo, Parsismo)',
        },
        { summary_2_id: 30, code: '296', description: 'Judaísmo' },
        {
          summary_2_id: 30,
          code: '297',
          description: 'Islamismo y religiones originadas en él',
        },
        { summary_2_id: 30, code: '298', description: '(No especificado)' },
        { summary_2_id: 30, code: '299', description: 'Otras religiones' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
