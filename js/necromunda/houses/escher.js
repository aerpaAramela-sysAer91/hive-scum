/* ==================================================
   CASA ESCHER - Datos completos
   ================================================== */

window.HOUSE_DATA_ESCHER = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'escher',
  name: 'Casa Escher',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'boltgun', leaderOnly: true },
    { weaponId: 'chainsword', leaderOnly: true },
    { weaponId: 'meltagun', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'chain-flail' },
    { weaponId: 'club-maul-bludgeon' },
    { weaponId: 'knife' },
    { weaponId: 'sword' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
    { weaponId: 'laspistol' },
    { weaponId: 'plasma-pistol' },
    { weaponId: 'stub-gun' },

    // ---- Armas Básicas ----
    { weaponId: 'autogun' },
    { weaponId: 'lasgun' },
    { weaponId: 'shotgun' },

    // ---- Armas Especiales ----
    { weaponId: 'flamer' },
    { weaponId: 'plasma-gun' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-flamer' },
    { weaponId: 'heavy-plasma' },
    { weaponId: 'heavy-stubber' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
 weaponOverrides: [
  { weaponId: 'plasma-pistol', rarity: 'common', cost: 30 },
  { weaponId: 'plasma-gun',    rarity: 'common', cost: 80 },
  { weaponId: 'heavy-plasma',  rarity: 'common', cost: 240 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS
  // ==================================================
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  skillAccess: {
    juve:   ['agility', 'combat'],
    ganger: ['agility', 'combat', 'stealth'],
    heavy:  ['agility', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES
  // ==================================================
  specialRules: []
};