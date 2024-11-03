'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'biblioteca', tableName: 'summary_3' },
      [
        {
          summary_2_id: 61,
          code: '600',
          description: 'TECNOLOGÍA (CIENCIAS APLICADAS)',
        },
        { summary_2_id: 61, code: '601', description: 'FILOSOFÍA Y TEORÍA' },
        { summary_2_id: 61, code: '602', description: 'MISCELÁNEA' },
        {
          summary_2_id: 61,
          code: '603',
          description: 'DICCIONARIOS Y ENCICLOPEDIAS',
        },
        { summary_2_id: 61, code: '604', description: 'TEMAS ESPECIALES' },
        {
          summary_2_id: 61,
          code: '605',
          description: 'PUBLICACIONES EN SERIE',
        },
        { summary_2_id: 61, code: '606', description: 'ORGANIZACIONES' },
        {
          summary_2_id: 61,
          code: '607',
          description: 'EDUCACIÓN, INVESTIGACIÓN, TEMAS RELACIONADOS',
        },
        { summary_2_id: 61, code: '608', description: 'INVENTOS Y PATENTES' },
        {
          summary_2_id: 61,
          code: '609',
          description: 'TRATAMIENTO HISTÓRICO, GEOGRÁFICO, DE PERSONAS',
        },
        {
          summary_2_id: 62,
          code: '610',
          description: 'CIENCIAS MÉDICAS, MEDICINA',
        },
        {
          summary_2_id: 62,
          code: '611',
          description: 'ANATOMÍA HUMANA, CITOLOGÍA, HISTOLOGÍA',
        },
        { summary_2_id: 62, code: '612', description: 'FISIOLOGÍA HUMANA' },
        { summary_2_id: 62, code: '613', description: 'PROMOCIÓN DE SALUD' },
        {
          summary_2_id: 62,
          code: '614',
          description: 'INCIDENCIA Y PREVENCIÓN DE LA ENFERMEDAD',
        },
        {
          summary_2_id: 62,
          code: '615',
          description: 'FARMACOLOGÍA Y TERAPÉUTICA',
        },
        { summary_2_id: 62, code: '616', description: 'ENFERMEDADES' },
        {
          summary_2_id: 62,
          code: '617',
          description: 'VARIAS RAMAS DE LA MEDICINA, CIRUGÍA',
        },
        {
          summary_2_id: 62,
          code: '618',
          description: 'GINECOLOGÍA Y OTRAS ESPECIALIDADES MÉDICAS',
        },
        { summary_2_id: 62, code: '619', description: 'MEDICINA EXPERIMENTAL' },
        {
          summary_2_id: 63,
          code: '620',
          description: 'INGENIERÍA Y OPERACIONES AFINES',
        },
        { summary_2_id: 63, code: '621', description: 'FÍSICA APLICADA' },
        {
          summary_2_id: 63,
          code: '622',
          description: 'MINERÍA Y OPERACIONES RELACIONADAS',
        },
        {
          summary_2_id: 63,
          code: '623',
          description: 'INGENIERÍA MILITAR Y NAVAL',
        },
        { summary_2_id: 63, code: '624', description: 'INGENIERÍA CIVIL' },
        {
          summary_2_id: 63,
          code: '625',
          description: 'INGENIERÍA DE FERROCARRILES, DE CAMINOS',
        },
        { summary_2_id: 63, code: '626', description: '(NO ESPECIFICADO)' },
        { summary_2_id: 63, code: '627', description: 'INGENIERÍA HIDRÁULICA' },
        {
          summary_2_id: 63,
          code: '628',
          description: 'INGENIERÍA SANITARIA Y MUNICIPAL',
        },
        {
          summary_2_id: 63,
          code: '629',
          description: 'OTRAS RAMAS DE LA INGENIERÍA',
        },
        {
          summary_2_id: 64,
          code: '630',
          description: 'AGRICULTURA',
        },
        {
          summary_2_id: 64,
          code: '631',
          description: 'TÉCNICAS, EQUIPO, MATERIALES',
        },
        {
          summary_2_id: 64,
          code: '632',
          description: 'LESIONES, ENFERMEDADES, PLAGAS DE LAS PLANTAS',
        },
        {
          summary_2_id: 64,
          code: '633',
          description: 'CULTIVOS DE CAMPO Y PLANTACIONES',
        },
        {
          summary_2_id: 64,
          code: '634',
          description: 'HUERTOS, FRUTAS, SILVICULTURA',
        },
        {
          summary_2_id: 64,
          code: '635',
          description: 'CULTIVOS HORTÍCOLAS (HORTICULTURA)',
        },
        {
          summary_2_id: 64,
          code: '636',
          description: 'PRODUCCIÓN ANIMAL (ZOOTECNIAS)',
        },
        {
          summary_2_id: 64,
          code: '637',
          description: 'PROCEDIMIENTO LECHERO Y PRODUCTOS RELACIONADOS',
        },
        { summary_2_id: 64, code: '638', description: 'CULTIVO DE INSECTOS' },
        {
          summary_2_id: 64,
          code: '639',
          description: 'CAZA, PESCA, CONSERVACIÓN',
        },
        {
          summary_2_id: 65,
          code: '640',
          description: 'ECONOMÍA DOMÉSTICA Y VIDA FAMILIAR',
        },
        { summary_2_id: 65, code: '641', description: 'ALIMENTOS Y BEBIDAS' },
        {
          summary_2_id: 65,
          code: '642',
          description: 'COMIDAS Y SERVICIO A LA MESA',
        },
        {
          summary_2_id: 65,
          code: '643',
          description: 'VIVIENDA Y EQUIPO DE LA CASA',
        },
        { summary_2_id: 65, code: '644', description: 'SERVICIOS DE LA CASA' },
        { summary_2_id: 65, code: '645', description: 'DOTACIÓN DE LA CASA' },
        {
          summary_2_id: 65,
          code: '646',
          description: 'COSTURA, VESTUARIO, VIDA PERSONAL',
        },
        {
          summary_2_id: 65,
          code: '647',
          description: 'ADMINISTRACIÓN DE VIVIENDAS PÚBLICAS',
        },
        { summary_2_id: 65, code: '648', description: 'MANEJO DE LA CASA' },
        {
          summary_2_id: 65,
          code: '649',
          description: 'PUERICULTURA Y ATENCIÓN DOMICILIARIA DEL ENFERMO',
        },
        {
          summary_2_id: 66,
          code: '650',
          description: 'ADMINISTRACIÓN & SERVICIOS AUXILIARES',
        },
        { summary_2_id: 66, code: '651', description: 'SERVICIOS DE OFICINA' },
        {
          summary_2_id: 66,
          code: '652',
          description: 'PROCESOS DE COMUNICACIÓN ESCRITA',
        },
        { summary_2_id: 66, code: '653', description: 'TAQUIGRAFÍA' },
        { summary_2_id: 66, code: '654', description: '(NO ESPECIFICADO)' },
        { summary_2_id: 66, code: '655', description: '(NO ESPECIFICADO)' },
        { summary_2_id: 66, code: '656', description: '(NO ESPECIFICADO)' },
        { summary_2_id: 66, code: '657', description: 'CONTABILIDAD' },
        {
          summary_2_id: 66,
          code: '658',
          description: 'ADMINISTRACIÓN GENERAL',
        },
        {
          summary_2_id: 66,
          code: '659',
          description: 'PUBLICIDAD Y RELACIONES PÚBLICAS',
        },
        {
          summary_2_id: 67,
          code: '660',
          description: 'INGENIERÍA QUÍMICA',
        },
        {
          summary_2_id: 67,
          code: '661',
          description: 'TECNOLOGÍA QUÍMICA INDUSTRIAL',
        },
        {
          summary_2_id: 67,
          code: '662',
          description: 'TECNOLOGÍA DE EXPLOSIVOS Y COMBUSTIBLES',
        },
        {
          summary_2_id: 67,
          code: '663',
          description: 'TECNOLOGÍA DE LAS BEBIDAS',
        },
        {
          summary_2_id: 67,
          code: '664',
          description: 'TECNOLOGÍA DE LOS ALIMENTOS',
        },
        {
          summary_2_id: 67,
          code: '665',
          description: 'ACEITES INDUSTRIALES, GRASAS, CERAS, GASES',
        },
        {
          summary_2_id: 67,
          code: '666',
          description: 'CERÁMICA Y TECNOLOGÍAS AFINES',
        },
        {
          summary_2_id: 67,
          code: '667',
          description: 'LIMPIEZA, COLOR, TECNOLOGÍAS RELACIONADAS',
        },
        {
          summary_2_id: 67,
          code: '668',
          description: 'TECNOLOGÍA DE OTROS PRODUCTOS ORGÁNICOS',
        },
        { summary_2_id: 67, code: '669', description: 'METALURGÍA' },
        {
          summary_2_id: 67,
          code: '670',
          description: 'MANUFACTURA',
        },
        {
          summary_2_id: 68,
          code: '671',
          description: 'METALISTERÍA Y PRODUCTOS METÁLICOS',
        },
        {
          summary_2_id: 68,
          code: '672',
          description: 'HIERRO, ACERO, OTRAS ALEACIONES FERROSAS',
        },
        { summary_2_id: 68, code: '673', description: 'METALES NO FERROSOS' },
        {
          summary_2_id: 68,
          code: '674',
          description:
            'PROCESAMIENTO DE MADERA ASERRADA, PRODUCTOS DE MADERA, CORCHO',
        },
        {
          summary_2_id: 68,
          code: '675',
          description: 'PROCESAMIENTO DEL CUERO Y PIEL',
        },
        {
          summary_2_id: 68,
          code: '676',
          description: 'TECNOLOGÍA DE LA PULPA Y DEL PAPEL',
        },
        { summary_2_id: 68, code: '677', description: 'TEXTILES' },
        {
          summary_2_id: 68,
          code: '678',
          description: 'ELASTÓMEROS Y PRODUCTOS DEL ELASTÓMERO',
        },
        {
          summary_2_id: 68,
          code: '679',
          description: 'OTROS PRODUCTOS DE MATERIALES ESPECÍFICOS',
        },
        {
          summary_2_id: 69,
          code: '680',
          description: 'MANUFACTURA PARA USOS ESPECÍFICOS',
        },
        {
          summary_2_id: 69,
          code: '681',
          description: 'INSTRUMENTOS DE PRECISIÓN Y OTROS DISPOSITIVOS',
        },
        {
          summary_2_id: 69,
          code: '682',
          description: 'TRABAJO DE FORJA PEQUEÑA (HERRERÍA)',
        },
        {
          summary_2_id: 69,
          code: '683',
          description: 'FERRETERÍA Y APARATOS DE LA CASA',
        },
        {
          summary_2_id: 69,
          code: '684',
          description: 'MUEBLES Y TALLERES DE HOGAR',
        },
        {
          summary_2_id: 69,
          code: '685',
          description: 'PRODUCTOS DE CUERO, PIEL, RELACIONADOS',
        },
        {
          summary_2_id: 69,
          code: '686',
          description: 'IMPRENTAS Y ACTIVIDADES RELACIONADAS',
        },
        { summary_2_id: 69, code: '687', description: 'VESTUARIO' },
        {
          summary_2_id: 69,
          code: '688',
          description: 'OTROS PRODUCTOS ACABADOS, EMPAQUES',
        },
        { summary_2_id: 69, code: '689', description: '(NO ESPECIFICADO)' },
        {
          summary_2_id: 70,
          code: '690',
          description: 'CONSTRUCCIÓN',
        },
        {
          summary_2_id: 70,
          code: '691',
          description: 'MATERIALES DE CONSTRUCCIÓN',
        },
        {
          summary_2_id: 70,
          code: '692',
          description: 'PRÁCTICAS AUXILIARES DE LA CONSTRUCCIÓN',
        },
        {
          summary_2_id: 70,
          code: '693',
          description: 'MATERIALES Y PROPÓSITOS ESPECÍFICOS',
        },
        {
          summary_2_id: 70,
          code: '694',
          description: 'CONSTRUCCIÓN EN MADERA, CARPINTERÍA',
        },
        { summary_2_id: 70, code: '695', description: 'CUBIERTAS (TECHOS)' },
        { summary_2_id: 70, code: '696', description: 'SERVICIOS PÚBLICOS' },
        {
          summary_2_id: 70,
          code: '697',
          description: 'CALEFACCIÓN, VENTILACIÓN, AIRE ACONDICIONADO',
        },
        { summary_2_id: 70, code: '698', description: 'DETALLES DE ACABADO' },
        { summary_2_id: 70, code: '699', description: '(NO ESPECIFICADO)' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
