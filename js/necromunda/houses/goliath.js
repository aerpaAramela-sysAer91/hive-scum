/* ==================================================
   CASA GOLIATH - Datos completos
   ================================================== */

window.HOUSE_DATA_GOLIATH = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'goliath',
  name: 'Casa Goliath',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'chainsword', leaderOnly: true },
    { weaponId: 'hand-flamer', leaderOnly: true },
    { weaponId: 'meltagun', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'chain-flail' },
    { weaponId: 'club-maul-bludgeon' },
    { weaponId: 'knife' },
    { weaponId: 'massive-weapon' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
    { weaponId: 'bolt-pistol' },
    { weaponId: 'stub-gun' },

    // ---- Armas Básicas ----
    { weaponId: 'autogun' },
    { weaponId: 'boltgun' },
    { weaponId: 'shotgun' },

    // ---- Armas Especiales ----
    { weaponId: 'autoslugger' },
    { weaponId: 'grenade-launcher' },

    // ---- Armas Pesadas ----
    { weaponId: 'autocannon' },
    { weaponId: 'heavy-bolter' },
    { weaponId: 'heavy-stubber' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  weaponOverrides: [
  { weaponId: 'bolt-pistol', rarity: 'common', cost: 25 },
  { weaponId: 'autocannon',  rarity: 'common', cost: 260 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    juve:   ['ferocity', 'muscle'],
    ganger: ['combat', 'ferocity', 'muscle'],
    heavy:  ['combat', 'muscle'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES
  // ==================================================
  specialRules: []
};