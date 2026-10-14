/* ==================================================
   CASA VAN SAAR - Datos completos
   ================================================== */

window.HOUSE_DATA_VANSAAR = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'vansaar',
  name: 'Casa Van Saar',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'sword', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'chainsword' },
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
    { weaponId: 'grenade-launcher' },
    { weaponId: 'meltagun' },
    { weaponId: 'plasma-gun' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-bolter' },
    { weaponId: 'heavy-plasma' },
    { weaponId: 'heavy-stubber' },
    { weaponId: 'lascannon' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  weaponOverrides: [
  { weaponId: 'bolt-pistol',   rarity: 'common', cost: 25 },
  { weaponId: 'plasma-pistol', rarity: 'common', cost: 30 },
  { weaponId: 'hunting-rifle', rarity: 'common', cost: 25 },
  { weaponId: 'plasma-gun',    rarity: 'common', cost: 80 },
  { weaponId: 'heavy-plasma',  rarity: 'common', cost: 240 },
  { weaponId: 'lascannon',     rarity: 'common', cost: 300 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    juve:   ['combat', 'shooting'],
    ganger: ['combat', 'shooting', 'techno'],
    heavy:  ['combat', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES
  // ==================================================
  specialRules: []
};