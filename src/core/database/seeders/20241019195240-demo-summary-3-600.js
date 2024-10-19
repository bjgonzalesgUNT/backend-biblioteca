'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      { schema: 'biblioteca', tableName: 'summary_3' },
      [
        { summary_2_id: 61, code: '601', description: 'Filosofía y teoría' },
        { summary_2_id: 61, code: '602', description: 'Miscelánea' },
        {
          summary_2_id: 61,
          code: '603',
          description: 'Diccionarios y enciclopedias',
        },
        { summary_2_id: 61, code: '604', description: 'Temas especiales' },
        {
          summary_2_id: 61,
          code: '605',
          description: 'Publicaciones en serie',
        },
        { summary_2_id: 61, code: '606', description: 'Organizaciones' },
        {
          summary_2_id: 61,
          code: '607',
          description: 'Educación, investigación, temas relacionados',
        },
        { summary_2_id: 61, code: '608', description: 'Inventos y patentes' },
        {
          summary_2_id: 61,
          code: '609',
          description: 'Tratamiento histórico, geográfico, de personas',
        },
        {
          summary_2_id: 62,
          code: '611',
          description: 'Anatomía humana, citología, histología',
        },
        { summary_2_id: 62, code: '612', description: 'Fisiología humana' },
        { summary_2_id: 62, code: '613', description: 'Promoción de salud' },
        {
          summary_2_id: 62,
          code: '614',
          description: 'Incidencia y prevención de la enfermedad',
        },
        {
          summary_2_id: 62,
          code: '615',
          description: 'Farmacología y terapéutica',
        },
        { summary_2_id: 62, code: '616', description: 'Enfermedades' },
        {
          summary_2_id: 62,
          code: '617',
          description: 'Varias ramas de la medicina, Cirugía',
        },
        {
          summary_2_id: 62,
          code: '618',
          description: 'Ginecología y otras especialidades médicas',
        },
        { summary_2_id: 62, code: '619', description: 'Medicina experimental' },
        { summary_2_id: 63, code: '621', description: 'Física aplicada' },
        {
          summary_2_id: 63,
          code: '622',
          description: 'Minería y operaciones relacionadas',
        },
        {
          summary_2_id: 63,
          code: '623',
          description: 'Ingeniería militar y naval',
        },
        { summary_2_id: 63, code: '624', description: 'Ingeniería civil' },
        {
          summary_2_id: 63,
          code: '625',
          description: 'Ingeniería de ferrocarriles, de caminos',
        },
        { summary_2_id: 63, code: '626', description: '(No especificado)' },
        { summary_2_id: 63, code: '627', description: 'Ingeniería hidráulica' },
        {
          summary_2_id: 63,
          code: '628',
          description: 'Ingeniería sanitaria y municipal',
        },
        {
          summary_2_id: 63,
          code: '629',
          description: 'Otras ramas de la ingeniería',
        },
        {
          summary_2_id: 64,
          code: '631',
          description: 'Técnicas, equipo, materiales',
        },
        {
          summary_2_id: 64,
          code: '632',
          description: 'Lesiones, enfermedades, plagas de las plantas',
        },
        {
          summary_2_id: 64,
          code: '633',
          description: 'Cultivos de campo y plantaciones',
        },
        {
          summary_2_id: 64,
          code: '634',
          description: 'Huertos, frutas, silvicultura',
        },
        {
          summary_2_id: 64,
          code: '635',
          description: 'Cultivos hortícolas (Horticultura)',
        },
        {
          summary_2_id: 64,
          code: '636',
          description: 'Producción animal (Zootecnia)',
        },
        {
          summary_2_id: 64,
          code: '637',
          description: 'Procedimiento lechero y productos relacionados',
        },
        { summary_2_id: 64, code: '638', description: 'Cultivo de insectos' },
        {
          summary_2_id: 64,
          code: '639',
          description: 'Caza, pesca, conservación',
        },
        { summary_2_id: 65, code: '641', description: 'Alimentos y bebidas' },
        {
          summary_2_id: 65,
          code: '642',
          description: 'Comidas y servicio a la mesa',
        },
        {
          summary_2_id: 65,
          code: '643',
          description: 'Vivienda y equipo de la casa',
        },
        { summary_2_id: 65, code: '644', description: 'Servicios de la casa' },
        { summary_2_id: 65, code: '645', description: 'Dotación de la casa' },
        {
          summary_2_id: 65,
          code: '646',
          description: 'Costura, vestuario, vida personal',
        },
        {
          summary_2_id: 65,
          code: '647',
          description: 'Administración de viviendas públicas',
        },
        { summary_2_id: 65, code: '648', description: 'Manejo de la casa' },
        {
          summary_2_id: 65,
          code: '649',
          description: 'Puericultura y atención domiciliaria del enfermo',
        },
        { summary_2_id: 66, code: '651', description: 'Servicios de oficina' },
        {
          summary_2_id: 66,
          code: '652',
          description: 'Procesos de comunicación escrita',
        },
        { summary_2_id: 66, code: '653', description: 'Taquigrafía' },
        { summary_2_id: 66, code: '654', description: '(No especificado)' },
        { summary_2_id: 66, code: '655', description: '(No especificado)' },
        { summary_2_id: 66, code: '656', description: '(No especificado)' },
        { summary_2_id: 66, code: '657', description: 'Contabilidad' },
        {
          summary_2_id: 66,
          code: '658',
          description: 'Administración general',
        },
        {
          summary_2_id: 66,
          code: '659',
          description: 'Publicidad y relaciones públicas',
        },
        {
          summary_2_id: 67,
          code: '661',
          description: 'Tecnología química industrial',
        },
        {
          summary_2_id: 67,
          code: '662',
          description: 'Tecnología de explosivos y combustibles',
        },
        {
          summary_2_id: 67,
          code: '663',
          description: 'Tecnología de las bebidas',
        },
        {
          summary_2_id: 67,
          code: '664',
          description: 'Tecnología de los alimentos',
        },
        {
          summary_2_id: 67,
          code: '665',
          description: 'Aceites industriales, grasas, ceras, gases',
        },
        {
          summary_2_id: 67,
          code: '666',
          description: 'Cerámica y tecnologías afines',
        },
        {
          summary_2_id: 67,
          code: '667',
          description: 'Limpieza, color, tecnologías relacionadas',
        },
        {
          summary_2_id: 67,
          code: '668',
          description: 'Tecnología de otros productos orgánicos',
        },
        { summary_2_id: 67, code: '669', description: 'Metalurgia' },
        {
          summary_2_id: 68,
          code: '671',
          description: 'Metalistería y productos metálicos',
        },
        {
          summary_2_id: 68,
          code: '672',
          description: 'Hierro, acero, otras aleaciones ferrosas',
        },
        { summary_2_id: 68, code: '673', description: 'Metales no ferrosos' },
        {
          summary_2_id: 68,
          code: '674',
          description:
            'Procesamiento de madera aserrada, productos de madera, corcho',
        },
        {
          summary_2_id: 68,
          code: '675',
          description: 'Procesamiento del cuero y piel',
        },
        {
          summary_2_id: 68,
          code: '676',
          description: 'Tecnología de la pulpa y del papel',
        },
        { summary_2_id: 68, code: '677', description: 'Textiles' },
        {
          summary_2_id: 68,
          code: '678',
          description: 'Elastómeros y productos del elastómero',
        },
        {
          summary_2_id: 68,
          code: '679',
          description: 'Otros productos de materiales específicos',
        },
        {
          summary_2_id: 69,
          code: '681',
          description: 'Instrumentos de precisión y otros dispositivos',
        },
        {
          summary_2_id: 69,
          code: '682',
          description: 'Trabajo de forja pequeña (Herrería)',
        },
        {
          summary_2_id: 69,
          code: '683',
          description: 'Ferretería y aparatos de la casa',
        },
        {
          summary_2_id: 69,
          code: '684',
          description: 'Muebles y talleres de hogar',
        },
        {
          summary_2_id: 69,
          code: '685',
          description: 'Productos de cuero, piel, relacionados',
        },
        {
          summary_2_id: 69,
          code: '686',
          description: 'Imprentas y actividades relacionadas',
        },
        { summary_2_id: 69, code: '687', description: 'Vestuario' },
        {
          summary_2_id: 69,
          code: '688',
          description: 'Otros productos acabados, empaques',
        },
        { summary_2_id: 69, code: '689', description: '(No especificado)' },
        {
          summary_2_id: 70,
          code: '691',
          description: 'Materiales de construcción',
        },
        {
          summary_2_id: 70,
          code: '692',
          description: 'Prácticas auxiliares de la construcción',
        },
        {
          summary_2_id: 70,
          code: '693',
          description: 'Materiales y propósitos específicos',
        },
        {
          summary_2_id: 70,
          code: '694',
          description: 'Construcción en madera, Carpintería',
        },
        { summary_2_id: 70, code: '695', description: 'Cubiertas (techos)' },
        { summary_2_id: 70, code: '696', description: 'Servicios públicos' },
        {
          summary_2_id: 70,
          code: '697',
          description: 'Calefacción, ventilación, aire acondicionado',
        },
        { summary_2_id: 70, code: '698', description: 'Detalles de acabado' },
        { summary_2_id: 70, code: '699', description: '(No especificado)' },
      ],
    );
  },

  async down(queryInterface, Sequelize) {},
};
