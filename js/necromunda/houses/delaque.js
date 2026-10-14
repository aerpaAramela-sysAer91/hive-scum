/* ==================================================
   CASA DELAQUE - Datos completos
   ================================================== */

window.HOUSE_DATA_DELAQUE = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'delaque',
  name: 'Casa Delaque',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'grenade-launcher', leaderOnly: true },
    { weaponId: 'hand-flamer', leaderOnly: true },
    { weaponId: 'sword', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'knife' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
    { weaponId: 'bolt-pistol' },
    { weaponId: 'laspistol' },
    { weaponId: 'plasma-pistol' },
    { weaponId: 'stub-gun' },

    // ---- Armas Básicas ----
    { weaponId: 'autogun' },
    { weaponId: 'boltgun' },
    { weaponId: 'hunting-rifle' },
    { weaponId: 'lasgun' },
    { weaponId: 'shotgun' },

    // ---- Armas Especiales ----
    { weaponId: 'flamer' },
    { weaponId: 'meltagun' },
    { weaponId: 'plasma-gun' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-plasma' },
    { weaponId: 'heavy-stubber' },
    { weaponId: 'lascannon' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  weaponOverrides: [
  { weaponId: 'bolt-pistol',     rarity: 'common', cost: 25 },
  { weaponId: 'plasma-pistol',   rarity: 'common', cost: 30 },
  { weaponId: 'hunting-rifle',   rarity: 'common', cost: 25 },
  { weaponId: 'plasma-gun',      rarity: 'common', cost: 80 },
  { weaponId: 'heavy-plasma',    rarity: 'common', cost: 240 },
  { weaponId: 'lascannon',       rarity: 'common', cost: 300 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    juve:   ['shooting', 'stealth'],
    ganger: ['agility', 'shooting', 'stealth'],
    heavy:  ['muscle', 'shooting', 'stealth'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'stealth', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES
  // ==================================================
  specialRules: []
};