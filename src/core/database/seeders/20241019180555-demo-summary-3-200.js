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
        code: '200',
        description: 'RELIGIÓN',
      },
      {
        summary_2_id: 21,
        code: '201',
        description: 'FILOSOFÍA DEL CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '202',
        description: 'MISCELÁNEA DEL CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '203',
        description: 'DICCIONARIOS DEL CRISTIANISMO',
      },
      { summary_2_id: 21, code: '204', description: 'TEMAS ESPECIALES' },
      {
        summary_2_id: 21,
        code: '205',
        description: 'PUBLICACIONES EN SERIE DEL CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '206',
        description: 'ORGANIZACIONES DEL CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '207',
        description: 'EDUCACIÓN, INVESTIGACIÓN EN CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '208',
        description: 'CLASES DE PERSONAS EN EL CRISTIANISMO',
      },
      {
        summary_2_id: 21,
        code: '209',
        description: 'HISTORIA Y GEOGRAFÍA DEL CRISTIANISMO',
      },
      {
        summary_2_id: 22,
        code: '210',
        description: 'TEOLOGÍA NATURAL',
      },
      { summary_2_id: 22, code: '211', description: 'CONCEPTOS DE DIOS' },
      {
        summary_2_id: 22,
        code: '212',
        description: 'EXISTENCIA Y ATRIBUTOS DE DIOS',
      },
      { summary_2_id: 22, code: '213', description: 'CREACIÓN' },
      { summary_2_id: 22, code: '214', description: 'TEODICEA' },
      { summary_2_id: 22, code: '215', description: 'CIENCIAS Y RELIGIÓN' },
      { summary_2_id: 22, code: '216', description: 'EL BIEN Y EL MAL' },
      { summary_2_id: 22, code: '217', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 22, code: '218', description: 'EL HOMBRE' },
      { summary_2_id: 22, code: '219', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 23,
        code: '220',
        description: 'LA BIBLIA',
      },
      { summary_2_id: 23, code: '221', description: 'ANTIGUO TESTAMENTO' },
      {
        summary_2_id: 23,
        code: '222',
        description: 'LIBROS HISTÓRICOS DEL ANTIGUO TESTAMENTO',
      },
      {
        summary_2_id: 23,
        code: '223',
        description: 'LIBROS POÉTICOS DEL ANTIGUO TESTAMENTO',
      },
      {
        summary_2_id: 23,
        code: '224',
        description: 'LIBROS PROFÉTICOS DEL ANTIGUO TESTAMENTO',
      },
      { summary_2_id: 23, code: '225', description: 'NUEVO TESTAMENTO' },
      {
        summary_2_id: 23,
        code: '226',
        description: 'EVANGELIOS Y HECHOS DE LOS APÓSTOLES',
      },
      { summary_2_id: 23, code: '227', description: 'EPÍSTOLAS' },
      {
        summary_2_id: 23,
        code: '228',
        description: 'REVELACIÓN (APOCALIPSIS DE JUAN)',
      },
      {
        summary_2_id: 23,
        code: '229',
        description: 'APÓCRIFOS Y SEUDOEPÍGRAFES',
      },
      {
        summary_2_id: 24,
        code: '230',
        description: 'TEOLOGÍA CRISTIANA',
      },
      { summary_2_id: 24, code: '231', description: 'DIOS' },
      {
        summary_2_id: 24,
        code: '232',
        description: 'JESUCRISTO Y SU FAMILIA',
      },
      { summary_2_id: 24, code: '233', description: 'EL HOMBRE' },
      {
        summary_2_id: 24,
        code: '234',
        description: 'SALVACIÓN (SOTERIOLÓGIA) Y GRACIA',
      },
      { summary_2_id: 24, code: '235', description: 'SERES ESPIRITUALES' },
      { summary_2_id: 24, code: '236', description: 'ESCATOLOGÍA' },
      { summary_2_id: 24, code: '237', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 24, code: '238', description: 'CREDOS Y CATECISMOS' },
      {
        summary_2_id: 24,
        code: '239',
        description: 'APOLOGÉTICA Y POLEMICA',
      },
      {
        summary_2_id: 25,
        code: '240',
        description: 'MORAL CRISTIANA & TEOLOGÍA PIADOSA',
      },
      { summary_2_id: 25, code: '241', description: 'TEOLOGÍA MORAL' },
      { summary_2_id: 25, code: '242', description: 'LITERATURA PIADOSA' },
      {
        summary_2_id: 25,
        code: '243',
        description: 'ESCRITOS EVANGELIZADORES PARA INDIVIDUOS',
      },
      { summary_2_id: 25, code: '244', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 25, code: '245', description: 'TEXTOS DE HIMNOS' },
      {
        summary_2_id: 25,
        code: '246',
        description: 'USO DEL ARTE EN EL CRISTIANISMO',
      },
      {
        summary_2_id: 25,
        code: '247',
        description: 'MOBILIARIO Y ARTÍCULOS ECLESIÁSTICOS',
      },
      {
        summary_2_id: 25,
        code: '248',
        description: 'EXPERIENCIA, PRÁCTICA, VIDA CRISTIANAS',
      },
      {
        summary_2_id: 25,
        code: '249',
        description: 'OBSERVANCIAS CRISTIANAS EN LA VIDA FAMILIAR',
      },
      {
        summary_2_id: 26,
        code: '250',
        description: 'ORDENES CRISTIANAS & IGLESIA LOCAL',
      },
      {
        summary_2_id: 26,
        code: '251',
        description: 'PRECADACIÓN (HOMILÉTICA)',
      },
      { summary_2_id: 26, code: '252', description: 'TEXTOS DE SERMONES' },
      {
        summary_2_id: 26,
        code: '253',
        description: 'OFICIO PASTORAL (TEOLOGÍA PASTORAL)',
      },
      {
        summary_2_id: 26,
        code: '254',
        description: 'GOBIERNO Y ADMINISTRACIÓN DE LA PARROQUIA',
      },
      {
        summary_2_id: 26,
        code: '255',
        description: 'CONGREGACIONES Y ÓRDENES RELIGIOSAS',
      },
      { summary_2_id: 26, code: '256', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 26, code: '257', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 26, code: '258', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 26,
        code: '259',
        description: 'ACTIVIDADES DE LA IGLESIA LOCAL',
      },
      {
        summary_2_id: 27,
        code: '260',
        description: 'TEOLOGÍA SOCIAL CRISTIANA',
      },
      { summary_2_id: 27, code: '261', description: 'TEOLOGÍA SOCIAL' },
      { summary_2_id: 27, code: '262', description: 'ECLSESIOLOGÍA' },
      {
        summary_2_id: 27,
        code: '263',
        description: 'TIEMPOS, LUGARES DE OBSERVANCIA RELIGIOSA',
      },
      { summary_2_id: 27, code: '264', description: 'CULTO PÚBLICO' },
      {
        summary_2_id: 27,
        code: '265',
        description: 'SACRAMENTOS, OTROS RITOS Y ACTOS',
      },
      { summary_2_id: 27, code: '266', description: 'MISIONES' },
      {
        summary_2_id: 27,
        code: '267',
        description: 'ASOCIACIONES PARA TRABAJO RELIGIOSO',
      },
      { summary_2_id: 27, code: '268', description: 'EDUCACIÓN RELIGIOSA' },
      { summary_2_id: 27, code: '269', description: 'RENOVACIÓN ESPIRITUAL' },
      {
        summary_2_id: 28,
        code: '270',
        description: 'HISTORIA DE LA IGLESIA CRISTIANA',
      },
      {
        summary_2_id: 28,
        code: '271',
        description: 'ÓRDENES RELIGIOSAS EN LA HISTORIA DE LA IGLESIA',
      },
      {
        summary_2_id: 28,
        code: '272',
        description: 'PERSECUCIONES EN LA HISTORIA DE LA IGLESIA',
      },
      {
        summary_2_id: 28,
        code: '273',
        description: 'HEREJÍAS EN LA HISTORIA DE LA IGLESIA',
      },
      {
        summary_2_id: 28,
        code: '274',
        description: 'IGLESIA CRISTIANA EN EUROPA',
      },
      {
        summary_2_id: 28,
        code: '275',
        description: 'IGLESIA CRISTIANA EN ASIA',
      },
      {
        summary_2_id: 28,
        code: '276',
        description: 'IGLESIA CRISTIANA EN ÁFRICA',
      },
      {
        summary_2_id: 28,
        code: '277',
        description: 'IGLESIA CRISTIANA EN AMÉRICA DEL NORTE',
      },
      {
        summary_2_id: 28,
        code: '278',
        description: 'IGLESIA CRISTIANA EN AMÉRICA DEL SUR',
      },
      {
        summary_2_id: 28,
        code: '279',
        description: 'IGLESIA CRISTIANA EN OTRAS ÁREAS',
      },
      {
        summary_2_id: 29,
        code: '280',
        description: 'DENOMINACIONES Y SECTAS CRISTIANAS',
      },
      {
        summary_2_id: 29,
        code: '281',
        description: 'IGLESIA PRIMITIVA Y IGLESIA ORIENTAL',
      },
      {
        summary_2_id: 29,
        code: '282',
        description: 'IGLESIA CATÓLICA ROMANA',
      },
      { summary_2_id: 29, code: '283', description: 'IGLESIAS ANGLICANAS' },
      {
        summary_2_id: 29,
        code: '284',
        description: 'PROTESTANTES DE ORIGEN CONTINENTAL',
      },
      {
        summary_2_id: 29,
        code: '285',
        description:
        'IGLESIAS PRESBITERIANAS, REFORMADAS, CONGREGACIONALES',
      },
      {
        summary_2_id: 29,
        code: '286',
        description:
        'IGLESIAS BATISTAS, DE LOS DISCÍPULOS DE CRISTO, ADVENTISTAS',
      },
      {
        summary_2_id: 29,
        code: '287',
        description: 'IGLESIA METODISTA Y RELACIONADAS',
      },
      { summary_2_id: 29, code: '288', description: '(NO ESPECIFICADO)' },
      {
        summary_2_id: 29,
        code: '289',
        description: 'OTRAS DENOMINACIONES Y SECTAS',
      },
      {
        summary_2_id: 30,
        code: '290',
        description: 'OTRAS & RELIGIÓN COMPARADA',
      },
      { summary_2_id: 30, code: '291', description: 'RELIGIÓN COMPARADA' },
      {
        summary_2_id: 30,
        code: '292',
        description: 'RELIGIÓN CLÁSICA (GRIEGA Y ROMANA)',
      },
      { summary_2_id: 30, code: '293', description: 'RELIGIÓN GERMÁNICA' },
      {
        summary_2_id: 30,
        code: '294',
        description: 'RELIGIONES DE ORIGEN HINDÚ',
      },
      {
        summary_2_id: 30,
        code: '295',
        description: 'ZOROASTRISMO (MAZDEISMO, PARSISMO)',
      },
      { summary_2_id: 30, code: '296', description: 'JUDAÍSMO' },
      {
        summary_2_id: 30,
        code: '297',
        description: 'ISLAMISMO Y RELIGIONES ORIGINADAS EN ÉL',
      },
      { summary_2_id: 30, code: '298', description: '(NO ESPECIFICADO)' },
      { summary_2_id: 30, code: '299', description: 'OTRAS RELIGIONES' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
