/* ==================================================
   CASA PIT SLAVES (Esclavos del Foso) - Datos completos
   ================================================== */

window.HOUSE_DATA_PITSLAVES = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'pitslaves',
  name: 'Esclavos del Foso',

  // ==================================================
  // OUTLANDER
  // ==================================================
  // Los Pit Slaves son Outlanders (proscritos) por defecto.
  // Aplican las reglas de proscritos.
  isOutlander: true,

  // ==================================================
  // MÁXIMOS DE CARACTERÍSTICAS PROPIOS
  // ==================================================
  // Los Pit Slaves tienen máximos distintos a las 6 casas grandes.
  // Estos valores SOBREESCRIBEN los máximos globales para esta casa.
  statMaximums: {
    M: 4,
    HA: 6,
    HB: 6,
    F: 5,     // +1 respecto a las grandes
    R: 5,     // +1 respecto a las grandes
    H: 4,     // +1 respecto a las grandes
    I: 5,     // -1 respecto a las grandes
    A: 4,     // +1 respecto a las grandes
    Ld: 9
  },

  // ==================================================
  // TIPOS DE LUCHADOR PROPIOS
  // ==================================================
  // Los Pit Slaves no usan los tipos comunes (leader/heavy/ganger/juve).
  // Tienen sus propios tipos.
  fighterTypes: [
    {
      id: 'chief',
      name: 'Jefe Esclavo',
      cost: 140,
      stats: { M: 4, HA: 4, HB: 4, F: 3, R: 3, H: 1, I: 4, A: 1, Ld: 8 },
      max: 1,
      special: ['Independiente', 'Líder'],
      initialXP: 'fixed-plus-d6',  // 60 + 1D6
      initialXPBase: 60
    },
    {
      id: 'techno',
      name: 'Techno',
      cost: 80,
      stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
      max: 2,
      special: [],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 40
    },
    {
      id: 'pit-fighter',
      name: 'Pit Fighter',
      cost: 60,
      stats: { M: 4, HA: 4, HB: null, F: 3, R: 3, H: 1, I: 4, A: 1, Ld: 7 },
      max: null,
      special: [],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 40,
      noBallisticSkill: true
    },
    {
      id: 'pit-slave',
      name: 'Pit Slave',
      cost: 60,
      stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
      max: null,
      special: [],
      initialXP: 'fixed-plus-d6',
      initialXPBase: 20
    }
    
  ],

    // ==================================================
  // REGLAS DE "CUENTA COMO GANGER"
  // ==================================================
  // A efectos de reglas que mencionan "Gangers" (trabajar territorios,
  // buscar objetos raros, forrajear...), el tipo 'pit-slave' cuenta como Ganger.
  countsAsGanger: ['pit-slave'],
  
  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder ----
    { weaponId: 'bolt-pistol', leaderOnly: true },
    { weaponId: 'shotgun-bolt', leaderOnly: true },   // Bolt Shells
    { weaponId: 'boltgun', leaderOnly: true },
    { weaponId: 'chainsword', leaderOnly: true },
    { weaponId: 'hand-flamer', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'chain-flail' },
    { weaponId: 'club-maul-bludgeon' },
    { weaponId: 'knife' },
    { weaponId: 'sword' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
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
    { weaponId: 'plasma-gun' },

    // ---- Armas de Foso (exclusivas) ----
    { weaponId: 'buzz-saw' },
    { weaponId: 'chainsaw' },
    { weaponId: 'claw' },
    { weaponId: 'hammer' },
    { weaponId: 'rock-drill' },
    { weaponId: 'shears' },

    // ---- Extras ----
    { weaponId: 'armour-plates' },
    { weaponId: 'tool-upgrade' },
    { weaponId: 'frag-grenade' },
    { weaponId: 'krak-grenade' },
    { weaponId: 'stub-gun-dumdum' },
    { weaponId: 'shotgun-hotshot' },
    { weaponId: 'shotgun-manstopper' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
    weaponOverrides: [
    // Bolt Pistol: en la lista oficial de Pit Slaves cuesta 25c (catálogo: 35c)
    { weaponId: 'bolt-pistol', rarity: 'common', cost: 25 },

    // Plasma Gun: en la lista oficial cuesta 80c (catálogo: 70c)
    { weaponId: 'plasma-gun', rarity: 'common', cost: 80 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  // Las armas de foso, Placas de Armadura y Tool Upgrade
  // ya están marcadas en el catálogo con exclusiveTo: 'pitslaves'.
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    'pit-slave':   ['combat', 'ferocity', 'muscle'],
    'pit-fighter': ['agility', 'combat', 'ferocity', 'muscle'],
    'techno':      ['ferocity', 'muscle', 'shooting', 'techno'],
    'chief':       ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'techno']
  },

  // ==================================================
  // RESTRICCIONES ESPECIALES DE AVANCE
  // ==================================================
  // Reglas específicas de esta casa sobre qué habilidades pueden ganar.
  advanceRestrictions: {
    'pit-fighter': {
      cannotTakeTables: ['shooting', 'techno'],
      rerollIfBallisticSkill: true    // Si saca avance de HA, se repite todo
    },
    'pit-slave': {
      cannotTakeSkills: ['gunfighter']
    }
  },

  // ==================================================
  // REGLAS ESPECIALES DE LA CASA
  // ==================================================
  specialRules: [
    {
      id: 'outlanders',
      name: 'Outlanders',
      desc: 'Los Esclavos del Foso son Outlanders, por lo que todas las reglas de proscritos se aplican a menos que se indique lo contrario. No tienen precio de Gremio, así que no pueden pagar para dejar de ser proscritos. Empiezan la campaña con un territorio generado en la Tabla de Territorios Proscritos.'
    },
    {
      id: 'foraging',
      name: 'Forrajeo',
      desc: 'Debido a sus armas cibernéticas industriales, los esclavos del foso son mejores explotando materiales valiosos encontrados en los páramos. Los miembros reciben un bonificador de +1 crédito al forrajear.'
    },
    {
      id: 'capture',
      name: 'Captura',
      desc: 'Su experiencia huyendo significa que todos los miembros de la banda de Esclavos del Foso tienen la habilidad Artista del Escape.'
    },
    {
      id: 'experienced',
      name: 'Experimentados',
      desc: 'Los esclavos del foso ya son combatientes endurecidos que han luchado antes y durante su encarcelamiento. Todos los miembros empiezan con un avance de experiencia aleatorio ya determinado.'
    },
    {
      id: 'guilder-loathing',
      name: 'Odio al Gremio',
      desc: 'Los esclavos del foso están unidos por su amarga enemistad hacia el Gremio de Mercaderes. Siguen las reglas de odio contra todos los miembros de bandas de Vigilantes y cualquier defensor en el escenario de Caravana.'
    },
    {
      id: 'bionics',
      name: 'Biónicos',
      desc: 'Los esclavos del foso no comparten la aversión a los implantes cibernéticos que tienen otros habitantes de la colmena. Pueden implantar y retirar chips biónicos libremente, como los chips de calavera, y pueden injertar biónicos a modelos que no han sufrido una herida grave en esa parte. Si los esclavos capturan luchadores enemigos con biónicos que no son rescatados, pueden retirar cualquier biónico antes de venderlos a los trenes nocturnos.'
    },
    {
      id: 'pit-slave-weapons',
      name: 'Armas de Foso',
      desc: 'Los Gremios aumentan a sus esclavos con una variedad de herramientas biomecánicas. Un arma de foso reemplaza el brazo entero del luchador, por lo que solo puede ser reemplazada por otra arma de foso. Un arma de foso no puede sostener ni usar un arma normal. Si un arma de foso sufre una Herida en Mano o Herida en Brazo, la tirada se trata como Recuperación Total. Las armas de foso deben hacer prueba para sonar la alarma cuando se usan en escenarios como El Asalto.'
    },
    {
      id: 'gangers',
      name: 'Pandilleros',
      desc: 'A efectos de reglas que hacen referencia específica a Pandilleros, como trabajar un territorio, el tipo de luchador Pit Slave cuenta como Pandillero.'
    }
  ]
};