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
          summary_2_id: 81,
          code: '800',
          description: 'LITERATURA & RETÓRICAS',
        },
        { summary_2_id: 81, code: '801', description: 'FILOSOFÍA Y RETÓRICA' },
        { summary_2_id: 81, code: '802', description: 'MISCELÁNEA' },
        {
          summary_2_id: 81,
          code: '803',
          description: 'DICCIONARIOS Y ENCICLOPEDIAS',
        },
        { summary_2_id: 81, code: '804', description: '(NO ESPECIFICADO)' },
        {
          summary_2_id: 81,
          code: '805',
          description: 'PUBLICACIONES EN SERIE',
        },
        { summary_2_id: 81, code: '806', description: 'ORGANIZACIONES' },
        {
          summary_2_id: 81,
          code: '807',
          description: 'EDUCACIÓN, INVESTIGACIÓN, TEMAS RELACIONADOS',
        },
        {
          summary_2_id: 81,
          code: '808',
          description: 'RETÓRICA Y COLECCIONES DE LITERATURA',
        },
        {
          summary_2_id: 81,
          code: '809',
          description: 'HISTORIA Y CRÍTICA LITERARIA',
        },
        {
          summary_2_id: 82,
          code: '810',
          description: 'LITERATURA AMERICANA EN INGLÉS',
        },
        { summary_2_id: 82, code: '811', description: 'POESÍA' },
        { summary_2_id: 82, code: '812', description: 'TEATRO' },
        { summary_2_id: 82, code: '813', description: 'NOVELA' },
        { summary_2_id: 82, code: '814', description: 'ENSAYO' },
        { summary_2_id: 82, code: '815', description: 'ORATORIA' },
        { summary_2_id: 82, code: '816', description: 'CARTAS' },
        { summary_2_id: 82, code: '817', description: 'SÁTIRA Y HUMOR' },
        { summary_2_id: 82, code: '818', description: 'ESCRITOS VARIOS' },
        { summary_2_id: 82, code: '819', description: '(NO ESPECIFICADO)' },
        {
          summary_2_id: 83,
          code: '820',
          description: 'LITERATURA INGLESA & INGLESA ANTIGUA',
        },
        { summary_2_id: 83, code: '821', description: 'POESÍA INGLESA' },
        { summary_2_id: 83, code: '822', description: 'TEATRO INGLÉS' },
        { summary_2_id: 83, code: '823', description: 'NOVELA INGLESA' },
        { summary_2_id: 83, code: '824', description: 'ENSAYOS INGLESES' },
        { summary_2_id: 83, code: '825', description: 'ORATORIA INGLESA' },
        { summary_2_id: 83, code: '826', description: 'CARTAS INGLESAS' },
        { summary_2_id: 83, code: '827', description: 'SÁTIRA Y HUMOR INGLÉS' },
        {
          summary_2_id: 83,
          code: '828',
          description: 'ESCRITOS VARIOS INGLESES',
        },
        {
          summary_2_id: 83,
          code: '829',
          description: 'LITERATURA INGLESA ANTIGUA (ANGLOSAJONA)',
        },
        {
          summary_2_id: 84,
          code: '830',
          description: 'LITERATURA DE LENGUAS GERMÁNICAS',
        },
        { summary_2_id: 84, code: '831', description: 'POESÍA ALEMANA' },
        { summary_2_id: 84, code: '832', description: 'TEATRO ALEMÁN' },
        { summary_2_id: 84, code: '833', description: 'NOVELA ALEMANA' },
        { summary_2_id: 84, code: '834', description: 'ENSAYOS ALEMANES' },
        { summary_2_id: 84, code: '835', description: 'ORATORIA ALEMANA' },
        { summary_2_id: 84, code: '836', description: 'CARTAS ALEMANAS' },
        { summary_2_id: 84, code: '837', description: 'SÁTIRA Y HUMOR ALEMÁN' },
        {
          summary_2_id: 84,
          code: '838',
          description: 'ESCRITOS VARIOS ALEMANES',
        },
        {
          summary_2_id: 84,
          code: '839',
          description: 'OTRAS LITERATURAS GERMÁNICAS',
        },
        {
          summary_2_id: 85,
          code: '840',
          description: 'LITERATURAS DE LENGUAS ROMANCES',
        },
        { summary_2_id: 85, code: '841', description: 'POESÍA FRANCESA' },
        { summary_2_id: 85, code: '842', description: 'TEATRO FRANCÉS' },
        { summary_2_id: 85, code: '843', description: 'NOVELA FRANCESA' },
        { summary_2_id: 85, code: '844', description: 'ENSAYOS FRANCESES' },
        { summary_2_id: 85, code: '845', description: 'ORATORIA FRANCESA' },
        { summary_2_id: 85, code: '846', description: 'CARTAS FRANCESAS' },
        {
          summary_2_id: 85,
          code: '847',
          description: 'SÁTIRA Y HUMOR FRANCÉS',
        },
        {
          summary_2_id: 85,
          code: '848',
          description: 'ESCRITOS VARIOS FRANCESES',
        },
        { summary_2_id: 85, code: '849', description: 'PROVENZAL Y CATALÁN' },
        {
          summary_2_id: 86,
          code: '850',
          description: 'LITERATURAS ITALIANA, RUMANA, RETORROMANA',
        },
        { summary_2_id: 86, code: '851', description: 'POESÍA ITALIANA' },
        { summary_2_id: 86, code: '852', description: 'TEATRO ITALIANO' },
        { summary_2_id: 86, code: '853', description: 'NOVELA ITALIANA' },
        { summary_2_id: 86, code: '854', description: 'ENSAYOS ITALIANOS' },
        { summary_2_id: 86, code: '855', description: 'ORATORIA ITALIANA' },
        { summary_2_id: 86, code: '856', description: 'CARTAS ITALIANAS' },
        {
          summary_2_id: 86,
          code: '857',
          description: 'SÁTIRA Y HUMOR ITALIANOS',
        },
        {
          summary_2_id: 86,
          code: '858',
          description: 'ESCRITOS VARIOS ITALIANOS',
        },
        { summary_2_id: 86, code: '859', description: 'ROMANO Y RETORROMANO' },
        {
          summary_2_id: 87,
          code: '860',
          description: 'LITERATURA ESPAÑOLA Y PORTUGUESA',
        },
        { summary_2_id: 87, code: '861', description: 'POESÍA ESPAÑOLA' },
        { summary_2_id: 87, code: '862', description: 'TEATRO ESPAÑOL' },
        { summary_2_id: 87, code: '863', description: 'NOVELA ESPAÑOLA' },
        { summary_2_id: 87, code: '864', description: 'ENSAYOS ESPAÑOLES' },
        { summary_2_id: 87, code: '865', description: 'ORATORIA ESPAÑOLA' },
        { summary_2_id: 87, code: '866', description: 'CARTAS ESPAÑOLAS' },
        {
          summary_2_id: 87,
          code: '867',
          description: 'SÁTIRA Y HUMOR ESPAÑOLES',
        },
        {
          summary_2_id: 87,
          code: '868',
          description: 'ESCRITOS VARIOS ESPAÑOLES',
        },
        { summary_2_id: 87, code: '869', description: 'LITERATURA PORTUGUESA' },
        {
          summary_2_id: 88,
          code: '870',
          description: 'LITERATURAS ITÁLICAS , LITERATURA ITALIANA',
        },
        { summary_2_id: 88, code: '871', description: 'POESÍA LATINA' },
        {
          summary_2_id: 88,
          code: '872',
          description: 'POESÍA DRAMÁTICA Y TEATRO LATINOS',
        },
        {
          summary_2_id: 88,
          code: '873',
          description: 'POESÍA ÉPICA Y NOVELÍSTICA LATINAS',
        },
        { summary_2_id: 88, code: '874', description: 'POESÍA LÍRICA LATINA' },
        { summary_2_id: 88, code: '875', description: 'ORATORIA LATINA' },
        { summary_2_id: 88, code: '876', description: 'CARTAS LATINAS' },
        {
          summary_2_id: 88,
          code: '877',
          description: 'SÁTIRA Y HUMOR LATINOS',
        },
        {
          summary_2_id: 88,
          code: '878',
          description: 'ESCRITOS VARIOS LATINOS',
        },
        {
          summary_2_id: 88,
          code: '879',
          description: 'LITERATURAS DE OTRAS LENGUAS ITÁLICAS',
        },
        {
          summary_2_id: 89,
          code: '880',
          description: 'LITERATURAS HELÉNICA, GRIEGA CLÁSICA',
        },
        { summary_2_id: 89, code: '881', description: 'POESÍA GRIEGA CLÁSICA' },
        { summary_2_id: 89, code: '882', description: 'TEATRO GRIEGO CLÁSICO' },
        {
          summary_2_id: 89,
          code: '883',
          description: 'POESÍA ÉPICA Y NOVELÍSTICA GRIEGA CLÁSICA',
        },
        {
          summary_2_id: 89,
          code: '884',
          description: 'POESÍA LÍRICA GRIEGA CLÁSICA',
        },
        {
          summary_2_id: 89,
          code: '885',
          description: 'ORATORIA GRIEGA CLÁSICA',
        },
        {
          summary_2_id: 89,
          code: '886',
          description: 'CARTAS GRIEGAS CLÁSICAS',
        },
        {
          summary_2_id: 89,
          code: '887',
          description: 'SÁTIRA Y HUMOR GRIEGOS CLÁSICOS',
        },
        {
          summary_2_id: 89,
          code: '888',
          description: 'ESCRITOS VARIOS GRIEGOS CLÁSICOS',
        },
        {
          summary_2_id: 89,
          code: '889',
          description: 'LITERATURA GRIEGA MODERNA',
        },
        {
          summary_2_id: 90,
          code: '890',
          description: 'LITERATURAS DE OTRAS LENGUAS',
        },
        {
          summary_2_id: 90,
          code: '891',
          description: 'INDOEUROPEAS, ORIENTALES Y CÉLTICAS',
        },
        {
          summary_2_id: 90,
          code: '892',
          description: 'AFROASIÁTICAS, SEMÍTICAS',
        },
        {
          summary_2_id: 90,
          code: '893',
          description: 'AFROASIÁTICAS NO SEMÍTICAS',
        },
        {
          summary_2_id: 90,
          code: '894',
          description: 'URALALTAICAS, PALEOSIBERIANAS Y DRAVÍDICAS',
        },
        {
          summary_2_id: 90,
          code: '895',
          description: 'DEL ORIENTE Y SUDORIENTE DE ASIA',
        },
        { summary_2_id: 90, code: '896', description: '(NO ESPECIFICADO)' },
        {
          summary_2_id: 90,
          code: '897',
          description: 'NATIVAS DE AMÉRICA DEL NORTE',
        },
        {
          summary_2_id: 90,
          code: '898',
          description: 'NATIVAS DE AMÉRICA DEL SUR',
        },
        { summary_2_id: 90, code: '899', description: 'OTRAS LENGUAS' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
