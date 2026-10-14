/* ==================================================
   CASA ORLOCK - Datos completos
   ==================================================
   Este archivo contiene TODOS los datos específicos de Orlock:
   - Lista de equipo inicial (Ronda 1)
   - Overrides de rareza/coste respecto al catálogo general
   - Armas exclusivas (si las tiene)
   - Acceso a tablas de habilidades
   - Reglas especiales de la casa
   ================================================== */

window.HOUSE_DATA_ORLOCK = {
  // ==================================================
  // IDENTIDAD
  // ==================================================
  id: 'orlock',
  name: 'Casa Orlock',

  // ==================================================
  // LISTA DE EQUIPO INICIAL (RONDA 1)
  // ==================================================
  // Estas son las únicas armas que se pueden comprar en Ronda 1.
  // Las que tienen leaderOnly: true solo las puede comprar el Líder.
  startingWeapons: [
    // ---- Solo Líder (máx 2 por Líder, solo Ronda 1) ----
    { weaponId: 'boltgun', leaderOnly: true },
    { weaponId: 'chainsword', leaderOnly: true },
    { weaponId: 'grenade-launcher', leaderOnly: true },

    // ---- Cuerpo a Cuerpo ----
    { weaponId: 'chain-flail' },
    { weaponId: 'club-maul-bludgeon' },
    { weaponId: 'knife' },
    { weaponId: 'sword' },

    // ---- Pistolas ----
    { weaponId: 'autopistol' },
    { weaponId: 'bolt-pistol' },
    { weaponId: 'laspistol' },
    { weaponId: 'plasma-pistol' },
    { weaponId: 'stub-gun' },

    // ---- Armas Básicas ----
    { weaponId: 'autogun' },
    { weaponId: 'lasgun' },
    { weaponId: 'shotgun' },

    // ---- Armas Especiales ----
    { weaponId: 'autoslugger' },
    { weaponId: 'flamer' },

    // ---- Armas Pesadas ----
    { weaponId: 'heavy-bolter' },
    { weaponId: 'heavy-stubber' },
    { weaponId: 'missile-launcher' }
  ],

  // ==================================================
  // OVERRIDES DE RAREZA Y COSTE
  // ==================================================
  // Solo se especifican los cambios respecto al catálogo general.
  // Todo lo que no esté aquí se trata como 'common' con el coste del catálogo.
  weaponOverrides: [
  { weaponId: 'bolt-pistol',      rarity: 'common', cost: 25 },
  { weaponId: 'plasma-pistol',    rarity: 'common', cost: 30 },
  { weaponId: 'missile-launcher', rarity: 'common', cost: 140 }
  ],

  // ==================================================
  // ARMAS EXCLUSIVAS DE LA CASA
  // ==================================================
  // Armas que solo Orlock puede comprar (no están en el catálogo general).
  // Por ahora vacío.
  exclusiveWeapons: [],

  // ==================================================
  // ACCESO A TABLAS DE HABILIDAD
  // ==================================================
  // Cada tipo de luchador puede aprender habilidades de ciertas tablas.
  skillAccess: {
    juve:   ['ferocity', 'shooting'],
    ganger: ['combat', 'ferocity', 'shooting'],
    heavy:  ['combat', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  },

  // ==================================================
  // REGLAS ESPECIALES DE LA CASA
  // ==================================================
  // Reglas exclusivas de Orlock (por ahora ninguna).
  specialRules: []
};