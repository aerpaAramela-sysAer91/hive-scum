/* ==================================================
   CASA CAWDOR - Datos completos
   ================================================== */

window.HOUSE_DATA_CAWDOR = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'cawdor',
  name: 'Casa Cawdor',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'autoslugger', leaderOnly: true },
    { weaponId: 'boltgun', leaderOnly: true },
    { weaponId: 'chainsword', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
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
    { weaponId: 'flamer' },
    { weaponId: 'grenade-launcher' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-flamer' },
    { weaponId: 'heavy-stubber' },
    { weaponId: 'heavy-bolter' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  weaponOverrides: [],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    juve:   ['combat', 'ferocity'],
    ganger: ['agility', 'combat', 'ferocity'],
    heavy:  ['ferocity', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES
  // ==================================================
  specialRules: []
};