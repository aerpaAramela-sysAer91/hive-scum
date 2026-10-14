/* ==================================================
   OUTLAW TRADING POST
   Mercado exclusivo para bandas proscritas (Outlanders)
   ================================================== */

window.OUTLAW_MARKET = {
  // ==================================================
  // TABLA DE PRECIOS Y RAREZAS
  // ==================================================
  // Estructura: { weaponId: { cost, costVariable?, rarity } }
  // - cost: coste base
  // - costVariable: (opcional) tirada adicional ej. "3D6"
  // - rarity: 'common' | 'rare'
  //
  // Los precios vienen directamente del PDF oficial del Outlaw TP.
  // ==================================================
  prices: {
    // ─── CUERPO A CUERPO ───
    'chain-flail':          { cost: 10,  rarity: 'common' },
    'chainsword':           { cost: 25,  rarity: 'common' },
    'club-maul-bludgeon':   { cost: 10,  rarity: 'common' },
    'knife':                { cost: 5,   rarity: 'common' },
    'massive-weapon':       { cost: 15,  rarity: 'common' },
    'shock-maul':           { cost: 35,  costVariable: '3D6', rarity: 'rare' },
    'sword':                { cost: 15,  rarity: 'common' },

    // ─── PISTOLAS ───
    'autopistol':           { cost: 15,  rarity: 'common' },
    'bolt-pistol':          { cost: 25,  rarity: 'common' },
    'hand-flamer':          { cost: 25,  rarity: 'common' },
    'laspistol':            { cost: 15,  rarity: 'common' },
    'plasma-pistol':        { cost: 30,  rarity: 'common' },
    'stub-gun':             { cost: 10,  rarity: 'common' },

    // ─── BÁSICAS ───
    'autogun':              { cost: 20,  rarity: 'common' },
    'shotgun':              { cost: 20,  rarity: 'common' },
    'hunting-rifle':        { cost: 25,  rarity: 'common' },
    'lasgun':               { cost: 25,  rarity: 'common' },
    'boltgun':              { cost: 35,  rarity: 'common' },

    // ─── ESPECIALES ───
    'autoslugger':          { cost: 45,  rarity: 'common' },
    'flamer':               { cost: 40,  rarity: 'common' },
    'grenade-launcher':     { cost: 60,  rarity: 'common' },
    'meltagun':             { cost: 95,  rarity: 'common' },
    'plasma-gun':           { cost: 80,  rarity: 'common' },

    // ─── PESADAS ───
    'autocannon':           { cost: 260, rarity: 'common' },
    'heavy-bolter':         { cost: 180, rarity: 'common' },
    'heavy-flamer':         { cost: 80,  rarity: 'common' },
    'heavy-plasma':         { cost: 240, rarity: 'common' },
    'heavy-stubber':        { cost: 120, rarity: 'common' },
    'lascannon':            { cost: 300, rarity: 'common' },
    'missile-launcher':     { cost: 140, rarity: 'common' },

    // ─── MISILES ───
    'missile-frag':         { cost: 35,  rarity: 'common' },
    'missile-krak':         { cost: 50,  rarity: 'common' },

    // ─── GRANADAS ───
    'choke':                { cost: 15,  costVariable: '2D6', rarity: 'rare' },
    'frag-grenade':         { cost: 25,  rarity: 'common' },
    'hallucinogen':         { cost: 40,  costVariable: '4D6', rarity: 'rare' },
    'krak-grenade':         { cost: 40,  rarity: 'common' },
    'melta-bombs':          { cost: 40,  costVariable: '3D6', rarity: 'rare' },
    'photon-flares':        { cost: 20,  costVariable: '2D6', rarity: 'rare' },
    'plasma-grenade':       { cost: 35,  costVariable: '3D6', rarity: 'rare' },
    'scare':                { cost: 20,  costVariable: '2D6', rarity: 'rare' },
    'smoke-bombs':          { cost: 10,  costVariable: '3D6', rarity: 'rare' },

    // ─── MUNICIONES ───
    'shotgun-bolt':         { cost: 15,  rarity: 'common' },
    'stub-gun-dumdum':      { cost: 5,   rarity: 'common' },
    'hellfire-bolt':        { cost: 20,  costVariable: '3D6', rarity: 'rare' },
    'shotgun-hotshot':      { cost: 5,   rarity: 'common' },
    'laser-hotshot-pack':   { cost: 15,  costVariable: '2D6', rarity: 'rare' },
    'shotgun-manstopper':   { cost: 5,   rarity: 'common' },

    // ─── MIRAS ───
    'mira-infrarroja':      { cost: 30,  costVariable: '3D6', rarity: 'rare' },
    'mono-visor':           { cost: 40,  costVariable: '3D6', rarity: 'rare' },
    'mira-punto-rojo':      { cost: 40,  costVariable: '3D6', rarity: 'rare' },
    'mira-telescopica':     { cost: 20,  costVariable: '3D6', rarity: 'rare' },

    // ─── ARMADURAS ───
    'carapace-armour':      { cost: 60,  costVariable: '3D6', rarity: 'rare' },
    'flak-armour':          { cost: 10,  costVariable: '2D6', rarity: 'rare' },
    'mesh-armour':          { cost: 25,  costVariable: '2D6', rarity: 'rare' },

    // ─── MISCELÁNEO ───
    'archeotech':           { cost: 0,   costVariable: 'D6x10', rarity: 'rare' },
    'berserker-chip':       { cost: 25,  costVariable: '3D6', rarity: 'rare' },
    'blade-venom':          { cost: 10,  costVariable: 'D6',  rarity: 'rare' },
    'blindsnake-pouch':     { cost: 30,  costVariable: '2D6', rarity: 'rare' },
    'bottle-wildsnake':     { cost: 10,  costVariable: 'D6',  rarity: 'rare' },
    'clip-harness':         { cost: 10,  rarity: 'common' },
    'concealed-blade':      { cost: 10,  costVariable: 'D6',  rarity: 'rare' },
    'drum-magazine':        { cost: 15,  costVariable: '2D6', rarity: 'rare' },
    'filter-plugs':         { cost: 10,  rarity: 'common' },
    'grapnel':              { cost: 30,  costVariable: '4D6', rarity: 'rare' },
    'icrotic-slime':        { cost: 50,  costVariable: '3D6', rarity: 'rare' },
    'infra-red-goggles':    { cost: 30,  costVariable: '3D6', rarity: 'rare' },
    'kalma':                { cost: 5,   costVariable: 'D6',  rarity: 'rare' },
    'lobo-chip':            { cost: 20,  rarity: 'common' },
    'mung-vase':            { cost: 0,   costVariable: 'D6x10', rarity: 'rare' },
    'photo-contacts':       { cost: 15,  rarity: 'common' },
    'photo-visor':          { cost: 25,  costVariable: '2D6', rarity: 'rare' },
    'rad-counter':          { cost: 10,  costVariable: '3D6', rarity: 'rare' },
    'ratskin-map':          { cost: 0,   costVariable: 'D6x10', rarity: 'rare' },
    'respirator':           { cost: 15,  costVariable: '2D6', rarity: 'rare' },
    'screamers':            { cost: 10,  costVariable: 'D6',  rarity: 'rare' },
    'silencer':             { cost: 10,  costVariable: '2D6', rarity: 'rare' },
    'slaught':              { cost: 5,   costVariable: '3D6', rarity: 'rare' },
    'spook':                { cost: 15,  costVariable: '3D6', rarity: 'rare' },
    'spur':                 { cost: 5,   costVariable: '3D6', rarity: 'rare' },
    'stinger-mould-patch':  { cost: 20,  costVariable: '4D6', rarity: 'rare' },
    'stinger-pouch':        { cost: 10,  costVariable: '3D6', rarity: 'rare' },
    'stummers':             { cost: 10,  costVariable: '3D6', rarity: 'rare' },
    'sump-dynamo':          { cost: 40,  costVariable: '4D6', rarity: 'rare' },
    'weapon-reload':        { cost: 0,   costVariable: 'weapon-div-2', rarity: 'common' },
    'one-in-a-million':     { cost: 0,   costVariable: 'weaponx2', rarity: 'unique' }
  },
};

// ==================================================
// HELPERS
// ==================================================

function isOutlawWeapon(weaponId) {
  return !!window.OUTLAW_MARKET.prices[weaponId];
}

function getOutlawWeapon(weaponId, houseId = null) {
  const base = getOutlawWeaponById(weaponId);
  if (!base) return null;

  // 1) ¿Está en el Outlaw TP compartido?
  const outlaw = window.OUTLAW_MARKET.prices[weaponId];
  if (outlaw) {
    return {
      ...base,
      effectiveCost: outlaw.cost,
      effectiveCostVariable: outlaw.costVariable || null,
      effectiveAvailability: outlaw.rarity || 'common',
      effectiveLeaderOnly: false,
      hasOverride: true,
      isOutlawWeapon: true
    };
  }

  // 2) ¿Es exclusiva de la casa que consulta?
  if (houseId && base.exclusiveTo === houseId) {
    return {
      ...base,
      effectiveCost: base.cost,
      effectiveCostVariable: base.costVariable || null,
      effectiveAvailability: base.rarity || 'common',
      effectiveLeaderOnly: false,
      hasOverride: false,
      isExclusive: true
    };
  }

  // 3) No está disponible
  return null;
}

function getOutlawWeaponsByCategory(catId, onlyCommon = true, houseId = null) {
  // 1) Armas COMPARTIDAS del Outlaw TP
  const outlawWeapons = OUTLAW_WEAPONS
    .filter(w => w.category === catId)
    .filter(w => w.purchasable !== false)
    .filter(w => window.OUTLAW_MARKET.prices[w.id])
    .map(w => getOutlawWeapon(w.id))
    .filter(w => w && (onlyCommon ? w.effectiveAvailability === 'common' : true));

  // 2) Armas EXCLUSIVAS de esta casa (del catálogo Outlaw)
  let exclusiveWeapons = [];
  if (houseId) {
    exclusiveWeapons = OUTLAW_WEAPONS
      .filter(w => w.category === catId)
      .filter(w => w.purchasable !== false)
      .filter(w => w.exclusiveTo === houseId)
      .map(w => getOutlawWeapon(w.id, houseId))
      .filter(w => w);
  }

  // 3) Armas EXCLUSIVAS de esta casa que están en el catálogo COMÚN
  // (ej: Redencionistas, que usan el TP normal aunque sean proscritos)
  let commonExclusiveWeapons = [];
  if (houseId && typeof WEAPONS !== 'undefined') {
    commonExclusiveWeapons = WEAPONS
      .filter(w => w.category === catId)
      .filter(w => w.purchasable !== false)
      .filter(w => w.exclusiveTo === houseId)
      .map(w => ({
        ...w,
        effectiveCost: w.cost,
        effectiveCostVariable: w.costVariable || null,
        effectiveAvailability: w.rarity || 'common',
        effectiveLeaderOnly: false,
        hasOverride: false,
        isExclusive: true
      }));
  }

  // 4) Fusionar sin duplicados
  const seen = new Set();
  return [...outlawWeapons, ...exclusiveWeapons, ...commonExclusiveWeapons].filter(w => {
    if (seen.has(w.id)) return false;
    seen.add(w.id);
    return true;
  });
}

function getRandomOutlawRareWeapon() {
  const rareIds = Object.keys(window.OUTLAW_MARKET.prices).filter(id => {
    const entry = window.OUTLAW_MARKET.prices[id];
    if (entry.rarity !== 'rare' && entry.rarity !== 'unique') return false;
    const weapon = getOutlawWeaponById(id);
    return weapon && weapon.purchasable !== false;
  });

  if (rareIds.length === 0) return null;
  const randomId = rareIds[Math.floor(Math.random() * rareIds.length)];
  return getOutlawWeapon(randomId);
}

function isGangOutlander(gang) {
  if (!gang) return false;
  const houseData = getHouseData(gang.houseId);
  return !!(houseData && houseData.isOutlander);
}