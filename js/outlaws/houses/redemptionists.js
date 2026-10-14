/* ==================================================
   CASA REDENCIONISTAS (Redemptionists) - Datos completos
   ================================================== */

window.HOUSE_DATA_REDEMPTIONISTS = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'redemptionists',
  name: 'Redencionistas',

  // ==================================================
  // OUTLANDER
  // ==================================================
  isOutlander: true,

  // ==================================================
  // MÁXIMOS DE CARACTERÍSTICAS
  // ==================================================
  statMaximums: {
    M: 4,
    HA: 6,
    HB: 6,
    F: 4,
    R: 4,
    H: 3,
    I: 6,
    A: 3,
    Ld: 10
  },

  // ==================================================
  // TIPOS DE LUCHADOR PROPIOS
  // ==================================================
  fighterTypes: [
    {
      id: 'redemptor-priest',
      name: 'Redemptor Priest',
      cost: 120,
      stats: { M: 4, HA: 4, HB: 4, F: 3, R: 3, H: 1, I: 4, A: 1, Ld: 8 },
      max: 1,
      special: ['Independiente', 'Líder'],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 60
    },
    {
      id: 'deacon',
      name: 'Deacon',
      cost: 80,
      stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 8 },
      max: 2,
      special: [],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 40
    },
    {
      id: 'brother',
      name: 'Brother',
      cost: 50,
      stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
      max: null,
      special: [],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 20
    },
    {
  id: 'novice',
  name: 'Novice',
  cost: 25,
  stats: { M: 4, HA: 2, HB: 2, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 6 },
  max: null,
  special: [],
  initialXP: 0
},
    {
      id: 'zealot',
      name: 'Zealot',
      cost: 60,
      stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
      max: null,
      special: ['Frenesí'],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 20
    }
  ],

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder ----
    { weaponId: 'bolt-pistol', leaderOnly: true },
    { weaponId: 'boltgun', leaderOnly: true },
    { weaponId: 'chainsword', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'eviscerator' },
    { weaponId: 'chain-flail' },
    { weaponId: 'club-maul-bludgeon' },
    { weaponId: 'knife' },
    { weaponId: 'massive-weapon' },
    { weaponId: 'sword' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
    { weaponId: 'hand-flamer' },
    { weaponId: 'laspistol' },
    { weaponId: 'stub-gun' },

    // ---- Armas Básicas ----
    { weaponId: 'autogun' },
    { weaponId: 'lasgun' },
    { weaponId: 'shotgun' },

    // ---- Armas Especiales ----
    { weaponId: 'autoslugger' },
    { weaponId: 'flamer' },
    { weaponId: 'grenade-launcher' },
    { weaponId: 'meltagun' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-flamer' },

    // ---- Extras ----
    { weaponId: 'shotgun-bolt' },
    { weaponId: 'stub-gun-dumdum' },
    { weaponId: 'exterminator' },
    { weaponId: 'frag-grenade' },
    { weaponId: 'shotgun-hotshot' },
    { weaponId: 'krak-grenade' },
    { weaponId: 'shotgun-manstopper' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  weaponOverrides: [],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: ['eviscerator', 'exterminator'],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    'novice':          ['ferocity'],
    'brother':         ['ferocity', 'shooting'],
    'zealot':          ['combat', 'ferocity', 'muscle'],
    'deacon':          ['ferocity', 'shooting', 'techno'],
    'redemptor-priest': ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'techno']
  },

  // ==================================================
  // REGLAS DE "CUENTA COMO"
  // ==================================================
  countsAsGanger: ['brother'],
  countsAsJuve: ['novice'],

  // ==================================================
  // ASCENSO AUTOMÁTICO
  // ==================================================
  ascension: {
    'novice': { ascendsTo: 'brother', atXP: 21 }
  },

  // ==================================================
  // REGLAS ESPECIALES DE LA CASA
  // ==================================================
  specialRules: [
    {
      id: 'outlanders',
      name: 'Outlanders',
      desc: 'Los Redencionistas son Outlanders, por lo que todas las reglas de proscritos se aplican a menos que se indique lo contrario. No tienen precio de Gremio, así que nunca pueden pagar para dejar de ser proscritos.'
    },
    {
      id: 'territory',
      name: 'Territorio',
      desc: 'Los Redencionistas empiezan con un territorio generado en la Tabla de Territorios de Redención. El territorio capturado adicional se saquea y se quema. Los Redencionistas se mueven tras cada partida, predicando la palabra de la rectitud y peregrinando a otro lugar. Tras recoger cualquier ingreso del territorio que dejan atrás, la Cruzada tira en la Tabla de Territorios de Redención para ver a dónde les lleva su camino en la siguiente partida. Nota: cualquier ingreso recogido de territorios NO se reduce a la mitad como ocurre con los proscritos ordinarios al trabajar territorios no proscritos.\n\nLos Redencionistas NO pueden usar Sump Dynamos ni Barras de Combustible Isotrópico.'
    },
    {
      id: 'trading',
      name: 'Comercio',
      desc: 'El armamento de la Cruzada suele ser buscado por hivers aparentemente inofensivos que apoyan en secreto a la Redención. Los Redencionistas usan el Puesto de Comercio NORMAL, NO el Puesto Proscrito.'
    },
    {
      id: 'hired-guns',
      name: 'Hired Guns',
      desc: 'Los Redencionistas nunca pagarían a pecadores para hacer el trabajo de salvación, por lo que NO pueden usar Hired Guns de ningún tipo.'
    },
    {
      id: 'capture',
      name: 'Captura',
      desc: 'Los luchadores capturados por los Redencionistas tienen dos opciones: arrepentirse o morir. Las bandas pueden recuperar a sus miembros capturados jugando un Rescate, y los luchadores aún se intercambiarán si ambas bandas tienen modelos capturados, pero los Redencionistas NUNCA pagarán ni pedirán rescate a herejes. Si la banda enemiga no intenta un rescate o falla, el Redemptor Priest puede intentar convertir al prisionero. Si un prisionero no se arrepiente o no puede ser redimido, es quemado junto con su equipo contaminado.'
    },
    {
      id: 'redeem',
      name: 'Redimir',
      desc: 'Si la Cruzada captura a algún luchador enemigo que no sea un Wyrd, Chamán Ratskin o miembro de banda Scavvy, el Redemptor Priest puede intentar convertirlo a la causa de la Redención. El jugador Redencionista tira 2D6 y suma el Liderazgo del Priest; el jugador oponente tira 2D6 y suma el Liderazgo del modelo capturado.\n\nSi el Redemptor saca la puntuación más alta, el prisionero se convierte en un fiel converso. Copia su perfil de características, habilidades, experiencia, coste y heridas en la hoja de banda Redencionista. Nota: el luchador ahora se clasifica como Brother, o como Novice si tiene menos de 21 puntos de Experiencia. Esto significa que puede perder acceso a algunos conjuntos de habilidades, armamento y habilidades especiales que solía tener.\n\nTodo el equipo del converso también se destruye para limpiar su nuevo camino iluminado, pero conservará el equipo biónico implantado, como los lobo-chips.'
    },
    {
      id: 'inspire-hatred',
      name: 'Inspirar Odio',
      desc: 'Los Redencionistas creen que los mutantes y las brujas son engendros del mal, tanto que su sola visión puede provocar un odio furibundo. Los Redencionistas están sujetos a las reglas de odio contra Wyrds, Chamanes Ratskin y todos los miembros de bandas Scavvy.'
    },
    {
      id: 'gangers-juves',
      name: 'Gangers & Juves',
      desc: 'A efectos de reglas que hacen referencia específica a Gangers, como trabajar un territorio o buscar objetos raros, el tipo Brother cuenta como Ganger. Asimismo, los Novices cuentan como Juves.'
    }
  ]
};