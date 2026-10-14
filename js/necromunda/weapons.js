/* ==================================================
   CATÁLOGO DE ARMAS Y EQUIPO
   ================================================== */

// ---------- CATEGORÍAS DE ARMAS ----------
const WEAPON_CATEGORIES = {
  'redemption-weapons': { label: 'Redención',       short: 'Redención', icon: '' },
  h2h:         { label: 'Cuerpo a Cuerpo',  short: 'H2H',         icon: '' },
  pistol:      { label: 'Pistolas',         short: 'Pistola',     icon: '' },
  basic:       { label: 'Armas Básicas',    short: 'Básica',      icon: '' },
  special:     { label: 'Armas Especiales', short: 'Especial',    icon: '' },
  heavy:       { label: 'Armas Pesadas',    short: 'Pesada',      icon: '' },
  grenade:     { label: 'Granadas',         short: 'Granada',     icon: '' },
  ammo:        { label: 'Municiones',       short: 'Munición',    icon: '' },
  sights:      { label: 'Miras',            short: 'Mira',        icon: '' },
  tools:       { label: 'Herramientas',     short: 'Herramienta', icon: '' },
  bionics:     { label: 'Biónicos',         short: 'Biónico',     icon: '' },
  armor:       { label: 'Armaduras',        short: 'Armadura',    icon: '' },
  misc:        { label: 'Varios',           short: 'Varios',      icon: '' }
};

// ---------- RAREZAS ----------
const RARITIES = {
  common:    'COMÚN',
  uncommon:  'POCO COMÚN',
  rare:      'RARA',
  veryRare:  'MUY RARA',
  unique:    'ÚNICA'
};

// ---------- CATÁLOGO DE ARMAS ----------
const WEAPONS = [
  // ==================================================
  // ARMAS ESPECIALES / GRATIS
  // ==================================================
  {
    id: 'pandillero-knife',
    name: 'Cuchillo de Pandillero',
    image: 'assets/img/weapons/pandillero-knife.jpg',
    category: 'h2h',
    cost: 0,
    free: true,
    removable: false,
    purchasable: false,
    rarity: null,
    profiles: [
      { label: 'Normal', F: 'U', PA: '-', D: '1', rules: '' }
    ]
  },

  // ==================================================
  // PISTOLAS
  // ==================================================
  {
    id: 'stub-gun',
    name: 'Pistola Corriente',
    image: 'assets/img/weapons/stub-gun.jpg',
    category: 'pistol',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: '' }
    ]
  },
  {
    id: 'autopistol',
    name: 'Autopistola',
    image: 'assets/img/weapons/autopistol.jpg',
    category: 'pistol',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: '' }
    ]
  },
  {
    id: 'laspistol',
    name: 'Pistola Láser',
    image: 'assets/img/weapons/laspistol.jpg',
    category: 'pistol',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '2+', rules: '' }
    ]
  },
  {
    id: 'hand-flamer',
    name: 'Lanzallamas de Mano',
    image: 'assets/img/weapons/hand-flamer.jpg',
    category: 'pistol',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Plantilla', rangeShort: '-', rangeLong: '-', hitShort: '-', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-1', ammoRoll: '5+', rules: 'Lanzallamas, Tirada de Munición, Fuego (5+)' }
    ]
  },
  {
    id: 'bolt-pistol',
    name: 'Pistola Bólter',
    image: 'assets/img/weapons/bolt-pistol.jpg',
    category: 'pistol',
    cost: 35,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: '' }
    ]
  },
  {
    id: 'plasma-pistol',
    name: 'Pistola de Plasma',
    image: 'assets/img/weapons/plasma-pistol.jpg',
    category: 'pistol',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Baja', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+1', hitLong: '-', F: '4', PA: '-1', D: '1', saveMod: '-1', ammoRoll: '4+', rules: '' },
      { label: 'Alta', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '5', PA: '-', D: '1', saveMod: '-2', ammoRoll: '6+', rules: 'Se Calienta' }
    ]
  },
  {
    id: 'needle-pistol',
    name: 'Pistola de Agujas',
    image: 'assets/img/weapons/needle-pistol.jpg',
    category: 'pistol',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: 'Dardo Tóxico, Heridas, Silenciosa' }
    ]
  },
  {
    id: 'web-pistol',
    name: 'Pistola de Red',
    image: 'assets/img/weapons/web-pistol.jpg',
    category: 'pistol',
    cost: 60,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Pistola', rangeShort: '0-6', rangeLong: '6-9', hitShort: '-', hitLong: '-1', F: '-', PA: '-', D: '-', saveMod: '-', ammoRoll: '6+', rules: 'Objetivos Enredados, Disolvente, Capturar' }
    ]
  },

  // ==================================================
  // ARMAS BÁSICAS
  // ==================================================
  {
    id: 'autogun',
    name: 'Rifle Automático',
    image: 'assets/img/weapons/autogun.jpg',
    category: 'basic',
    cost: 20,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Básica', rangeShort: '0-12', rangeLong: '12-24', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: '' }
    ]
  },
  {
    id: 'shotgun',
    name: 'Escopeta',
    image: 'assets/img/weapons/shotgun.jpg',
    category: 'basic',
    cost: 20,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Cartucho Sólido', rangeShort: '0-4', rangeLong: '4-18', hitShort: '+1', hitLong: '-1', F: '4', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: 'Retroceso' },
      { label: 'Perdigones', rangeShort: '0-4', rangeLong: '4-18', hitShort: '+1', hitLong: '-1', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: 'Perdigones' }
    ]
  },
  {
    id: 'hunting-rifle',
    name: 'Rifle de Caza',
    image: 'assets/img/weapons/hunting-rifle.jpg',
    category: 'basic',
    cost: 20,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Básica', rangeShort: '0-8', rangeLong: '8-32', hitShort: '-1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: 'Disparo Crítico' }
    ]
  },
  {
    id: 'lasgun',
    name: 'Rifle Láser',
    image: 'assets/img/weapons/lasgun.jpg',
    category: 'basic',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Básica', rangeShort: '0-8', rangeLong: '8-24', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '2+', rules: '' }
    ]
  },
  {
    id: 'boltgun',
    name: 'Bólter',
    image: 'assets/img/weapons/boltgun.jpg',
    category: 'basic',
    cost: 35,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Básica', rangeShort: '0-12', rangeLong: '12-24', hitShort: '+1', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: '' }
    ]
  },

  // ==================================================
  // ARMAS ESPECIALES
  // ==================================================
  {
    id: 'autoslugger',
    name: 'Autoslugger',
    image: 'assets/img/weapons/autoslugger.jpg',
    category: 'special',
    cost: 45,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Especial', rangeShort: '0-12', rangeLong: '12-24', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-', ammoRoll: '5+', rules: 'Fuego Sostenido (1)' }
    ]
  },
  {
    id: 'flamer',
    name: 'Lanzallamas',
    image: 'assets/img/weapons/flamer.jpg',
    category: 'special',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Plantilla', rangeShort: '-', rangeLong: '-', hitShort: '-', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-2', ammoRoll: '4+', rules: 'Lanzallamas, Tirada de Munición, Fuego (4+)' }
    ]
  },
  {
    id: 'grenade-launcher',
    name: 'Lanzagranadas',
    image: 'assets/img/weapons/grenade-launcher.jpg',
    category: 'special',
    cost: 60,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Sin perfil propio', rangeShort: '0-14', rangeLong: '14-28', hitShort: '-', hitLong: '-1', F: '-', PA: '-', D: '-', saveMod: '-', ammoRoll: '6+', rules: 'Perfil según munición cargada' }
    ]
  },
  {
    id: 'plasma-gun',
    name: 'Fusil de Plasma',
    image: 'assets/img/weapons/plasma-gun.jpg',
    category: 'special',
    cost: 70,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Baja', rangeShort: '0-8', rangeLong: '8-24', hitShort: '+1', hitLong: '-', F: '5', PA: '-', D: '1', saveMod: '-2', ammoRoll: '4+', rules: '' },
      { label: 'Alta', rangeShort: '0-12', rangeLong: '12-24', hitShort: '+1', hitLong: '-', F: '6', PA: '-', D: '1', saveMod: '-3', ammoRoll: '6+', rules: 'Fuego Sostenido (1), Se Calienta' }
    ]
  },
  {
    id: 'meltagun',
    name: 'Fusor de Fusión',
    image: 'assets/img/weapons/meltagun.jpg',
    category: 'special',
    cost: 95,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Especial', rangeShort: '0-6', rangeLong: '6-12', hitShort: '+1', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '4+', rules: 'Alto Impacto' }
    ]
  },
  {
    id: 'needle-rifle',
    name: 'Rifle de Agujas',
    image: 'assets/img/weapons/needle-rifle.jpg',
    category: 'special',
    cost: 90,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Especial', rangeShort: '0-16', rangeLong: '16-32', hitShort: '+1', hitLong: '-', F: '3', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: 'Dardo Tóxico, Heridas, Silenciosa' }
    ]
  },

  // ==================================================
  // ARMAS PESADAS
  // ==================================================
  {
    id: 'heavy-flamer',
    name: 'Lanzallamas Pesado',
    image: 'assets/img/weapons/heavy-flamer.jpg',
    category: 'heavy',
    cost: 80,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Plantilla', rangeShort: '-', rangeLong: '-', hitShort: '-', hitLong: '-', F: '5', PA: '-', D: 'D3', saveMod: '-3', ammoRoll: '3+', rules: 'Lanzallamas, Tirada de Munición, Fuego (3+), Fuego en Área' }
    ]
  },
  {
    id: 'heavy-stubber',
    name: 'Ametralladora Pesada',
    image: 'assets/img/weapons/heavy-stubber.jpg',
    category: 'heavy',
    cost: 120,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-40', hitShort: '-', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-1', ammoRoll: '4+', rules: 'Fuego Sostenido (2)' }
    ]
  },
  {
    id: 'heavy-bolter',
    name: 'Bólter Pesado',
    image: 'assets/img/weapons/heavy-bolter.jpg',
    category: 'heavy',
    cost: 180,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-40', hitShort: '-', hitLong: '-', F: '5', PA: '-', D: 'D3', saveMod: '-2', ammoRoll: '6+', rules: 'Fuego Sostenido (2)' }
    ]
  },
  {
    id: 'missile-launcher',
    name: 'Lanzamisiles',
    image: 'assets/img/weapons/missile-launcher.jpg',
    category: 'heavy',
    cost: 130,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Sin perfil propio', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '-', PA: '-', D: '-', saveMod: '-', ammoRoll: '6+', rules: 'Perfil según munición cargada' }
    ]
  },
  {
    id: 'heavy-plasma',
    name: 'Fusil de Plasma Pesado',
    image: 'assets/img/weapons/heavy-plasma.jpg',
    category: 'heavy',
    cost: 200,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'veryRare',
    profiles: [
      { label: 'Baja', rangeShort: '0-20', rangeLong: '20-40', hitShort: '-', hitLong: '-', F: '7', PA: '-', D: 'D3', saveMod: '-4', ammoRoll: '4+', rules: 'Explosión, Alto Impacto' },
      { label: 'Alta', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '6+', rules: 'Nube de Gas, Alto Impacto' }
    ]
  },
  {
    id: 'autocannon',
    name: 'Cañón Automático',
    image: 'assets/img/weapons/autocannon.jpg',
    category: 'heavy',
    cost: 250,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'veryRare',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '4+', rules: 'Fuego Sostenido (1), Alto Impacto' }
    ]
  },
  {
    id: 'lascannon',
    name: 'Cañón Láser',
    image: 'assets/img/weapons/lascannon.jpg',
    category: 'heavy',
    cost: 400,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'veryRare',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-60', hitShort: '-', hitLong: '-', F: '9', PA: '-', D: '2D6', saveMod: '-6', ammoRoll: '2+', rules: 'Alto Impacto, Fuerza Terrorífica' }
    ]
  },

  // ==================================================
  // CUERPO A CUERPO
  // ==================================================
  {
    id: 'knife',
    name: 'Cuchillo',
    image: 'assets/img/weapons/knife.jpg',
    category: 'h2h',
    cost: 5,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: 'U', PA: '-', D: '1', saveMod: '-', rules: '' }
    ]
  },
  {
    id: 'chain-flail',
    name: 'Mangual o Látigo',
    image: 'assets/img/weapons/chain-flail.jpg',
    category: 'h2h',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: 'U+1', PA: '-', D: '1', saveMod: '-', rules: 'Anular, Torpe' }
    ]
  },
  {
    id: 'club-maul-bludgeon',
    name: 'Garrote, Mazo o Porra',
    image: 'assets/img/weapons/club-maul-bludgeon.jpg',
    category: 'h2h',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: 'U+1', PA: '-', D: '1', saveMod: '-', rules: '' }
    ]
  },
  {
    id: 'massive-weapon',
    name: 'Arma Masiva (Hacha, Espada o Garrote)',
    image: 'assets/img/weapons/massive-weapon.jpg',
    category: 'h2h',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Dos Manos', F: 'U+2', PA: '-', D: '1', saveMod: '-', rules: 'Dos Manos, Desenvainar, Golpe Masivo' }
    ]
  },
  {
    id: 'sword',
    name: 'Espada',
    image: 'assets/img/weapons/sword.jpg',
    category: 'h2h',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: 'U', PA: '-', D: '1', saveMod: '-', rules: 'Parada' }
    ]
  },
  {
    id: 'chainsword',
    name: 'Espada Sierra',
    image: 'assets/img/weapons/chainsword.jpg',
    category: 'h2h',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-', D: '1', saveMod: '-2', rules: 'Parada, Ruidoso' }
    ]
  },
  {
    id: 'power-axe',
    name: 'Hacha de Energía',
    image: 'assets/img/weapons/power-axe.jpg',
    category: 'h2h',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Normal', F: 'U+3', PA: '-', D: '1', saveMod: '-', rules: 'Doble Filo' }
    ]
  },
  {
    id: 'shock-maul',
    name: 'Mazo Eléctrico',
    image: 'assets/img/weapons/shock-maul.jpg',
    category: 'h2h',
    cost: 45,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Normal', F: '5', PA: '-', D: '1', saveMod: '-2', rules: 'Fuera de Combate, Heridas' }
    ]
  },
  {
    id: 'power-sword',
    name: 'Espada de Energía',
    image: 'assets/img/weapons/power-sword.jpg',
    category: 'h2h',
    cost: 50,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Normal', F: 'U+2', PA: '-', D: '1', saveMod: '-', rules: 'Parada' }
    ]
  },
    {
    id: 'power-fist',
    name: 'Puño de Energía',
    image: 'assets/img/weapons/power-fist.jpg',
    category: 'h2h',
    cost: 60,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Normal', F: 'U+5', PA: '-', D: 'D3', saveMod: '-', rules: '' }
    ]
  },
  {
    id: 'eviscerator',
    name: 'Eviscerator',
    image: 'assets/img/weapons/eviscerator.jpg',
    category: 'redemption-weapons',
    cost: 30,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'redemptionists',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '6', PA: '-', D: '1', saveMod: '-4', rules: 'Dos Manos, Imposible de Parar, Golpe Masivo, Desenvainar, Ruidoso' }
    ]
  },

  // ==================================================
  // MUNICIONES
  // ==================================================
  {
    id: 'shotgun-manstopper',
    name: 'Cartuchos Manstopper',
    image: 'assets/img/weapons/shotgun-manstopper.jpg',
    category: 'ammo',
    cost: 5,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'shotgun',
    profiles: [
      { label: 'Manstopper', rangeShort: '0-4', rangeLong: '4-18', hitShort: '+1', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-', ammoRoll: '4+', rules: 'Retroceso' }
    ]
  },
  {
    id: 'shotgun-hotshot',
    name: 'Cartuchos Hot Shot',
    image: 'assets/img/weapons/shotgun-hotshot.jpg',
    category: 'ammo',
    cost: 5,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'shotgun',
    profiles: [
      { label: 'Hot Shot', rangeShort: '0-4', rangeLong: '4-18', hitShort: '+1', hitLong: '-1', F: '4', PA: '-', D: '1', saveMod: '-', ammoRoll: '6+', rules: 'Retroceso, Fuego (5+)' }
    ]
  },
  {
    id: 'shotgun-bolt',
    name: 'Cartuchos Bólter',
    image: 'assets/img/weapons/shotgun-bolt.jpg',
    category: 'ammo',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'shotgun',
    profiles: [
      { label: 'Bólter', rangeShort: '0-4', rangeLong: '4-24', hitShort: '+1', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: '' }
    ]
  },
  {
    id: 'missile-frag',
    name: 'Misil Frag',
    image: 'assets/img/weapons/missile-frag.jpg',
    category: 'ammo',
    cost: 35,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'missile-launcher',
    profiles: [
      { label: 'Frag', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-2', ammoRoll: '6+', rules: 'Nube de Gas' }
    ]
  },
  {
    id: 'missile-krak',
    name: 'Misil Krak',
    image: 'assets/img/weapons/missile-krak.jpg',
    category: 'ammo',
    cost: 50,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'missile-launcher',
    profiles: [
      { label: 'Krak', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '6+', rules: 'Alto Impacto' }
    ]
  },
  {
    id: 'stub-gun-dumdum',
    name: 'Balas Dum-dum',
    image: 'assets/img/weapons/stub-gun-dumdum.jpg',
    category: 'ammo',
    cost: 5,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    armaCompatible: 'Pistola Corriente (Stub Gun)',
    propiedades: [
      { nombre: 'Efecto', valor: '+1 Fuerza (Fuerza 4 en lugar de 3)' },
      { nombre: 'Riesgo', valor: 'Al fallar tirada de Munición, el arma explota automáticamente' },
      { nombre: 'Instalación', valor: 'Pistola Corriente' }
    ],
    descripcion: 'Una pistola corriente puede cargarse con balas dum-dum. Un suministro de estas poderosas balas hechas a mano cuesta extra, pero son más efectivas que la munición estándar añadiendo +1 a la Fuerza de cualquier impacto (Fuerza 4 en lugar de 3).\n\nSin embargo, si se falla una tirada de Munición al disparar balas dum-dum, el arma explota automáticamente. Las balas dum-dum siguen las reglas habituales de munición explicadas en la sección de Munición y Miras.',
    profiles: []
  },
  {
    id: 'grenade-launcher-frag',
    name: 'Granada Frag (munición)',
    image: 'assets/img/weapons/grenade-launcher-frag.jpg',
    category: 'ammo',
    cost: 30,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'grenade-launcher',
    profiles: [
      { label: 'Frag', F: '3', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: 'Nube de Gas' }
    ]
  },
  {
    id: 'grenade-launcher-krak',
    name: 'Granada Krak (munición)',
    image: 'assets/img/weapons/grenade-launcher-krak.jpg',
    category: 'ammo',
    cost: 50,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    forWeapon: 'grenade-launcher',
    profiles: [
      { label: 'Krak', F: '6', PA: '-', D: 'D6', saveMod: '-3', ammoRoll: '6+', rules: '-1 Impacto, Demolición' }
    ]
  },
  {
    id: 'grenade-launcher-plasma',
    name: 'Granada Plasma (munición)',
    image: 'assets/img/weapons/grenade-launcher-plasma.jpg',
    category: 'ammo',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'rare',
    forWeapon: 'grenade-launcher',
    profiles: [
      { label: 'Plasma', F: '5', PA: '-', D: '1', saveMod: '-2', ammoRoll: '6+', rules: 'Explosión, Bola de Plasma' }
    ]
  },
  {
    id: 'grenade-launcher-melta',
    name: 'Bomba Melta (munición)',
    image: 'assets/img/weapons/grenade-launcher-melta.jpg',
    category: 'ammo',
    cost: 60,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'rare',
    forWeapon: 'grenade-launcher',
    profiles: [
      { label: 'Melta', F: '8', PA: '-', D: '2D6', saveMod: '-5', ammoRoll: '6+', rules: 'Demolición' }
    ]
  },

  // ==================================================
  // GRANADAS
  // ==================================================
  {
    id: 'frag-grenade',
    name: 'Granada Fragmentaria',
    image: 'assets/img/weapons/frag-grenade.jpg',
    category: 'grenade',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '3', PA: '-', D: '1', saveMod: '-1', rules: 'Nube de Gas' }
    ]
  },
  {
    id: 'krak-grenade',
    name: 'Granada Krak',
    image: 'assets/img/weapons/krak-grenade.jpg',
    category: 'grenade',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '6', PA: '-', D: 'D6', saveMod: '-3', rules: '-1 Impacto, Demolición' }
    ]
  },
  {
    id: 'smoke-bombs',
    name: 'Bombas de Humo',
    image: 'assets/img/weapons/smoke-bombs.jpg',
    category: 'grenade',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Humo' }
    ]
  },
  {
    id: 'choke',
    name: 'Granada Asfixiante',
    image: 'assets/img/weapons/choke.jpg',
    category: 'grenade',
    cost: 20,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Asfixia' }
    ]
  },
  {
    id: 'scare',
    name: 'Granada de Terror',
    image: 'assets/img/weapons/scare.jpg',
    category: 'grenade',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Terror' }
    ]
  },
  {
    id: 'photon-flares',
    name: 'Bengalas Fotónicas',
    image: 'assets/img/weapons/photon-flares.jpg',
    category: 'grenade',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Explosión, Cegar' }
    ]
  },
  {
    id: 'plasma-grenade',
    name: 'Granada de Plasma',
    image: 'assets/img/weapons/plasma-grenade.jpg',
    category: 'grenade',
    cost: 40,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '5', PA: '-', D: '1', saveMod: '-2', rules: 'Explosión, Bola de Plasma' }
    ]
  },
  {
    id: 'melta-bombs',
    name: 'Bombas de Fusión',
    image: 'assets/img/weapons/melta-bombs.jpg',
    category: 'grenade',
    cost: 60,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '8', PA: '-', D: '2D6', saveMod: '-5', rules: 'Demolición' }
    ]
  },
  {
     id: 'exterminator',
    name: 'Exterminator',
    image: 'assets/img/weapons/exterminator.jpg',
    category: 'redemption-weapons',
    cost: 5,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'redemptionists',
    rarity: 'common',
    propiedades: [
      { nombre: 'Tipo', valor: 'Extensión de lanzallamas para arma básica o Eviscerator' },
      { nombre: 'Uso', valor: 'Ataque único de lanzallamas a corta distancia' },
      { nombre: 'Instalación', valor: 'Arma básica o Eviscerator' },
      { nombre: 'Riesgo', valor: 'Si el exterminator o el arma explota, ninguna de las dos puede usarse el resto de la partida' }
    ],
    descripcion: 'Solo los fanáticos de la Redención usan exterminators, particularmente para sus hermanos inexpertos cuyas habilidades de disparo son más entusiastas que precisas. Un exterminator no es realmente un arma como tal, es más como una boquilla de lanzallamas unida a un pequeño bote de combustible. Se engancha debajo de un arma básica real, como un rifle automático o una escopeta, para dar al luchador que lo lleva una única ráfaga de producto químico en llamas, una sustancia pegajosa inestable que se enciende al contacto con el aire. Usado a distancias cortas es casi imposible fallar y se pueden cobrar varias víctimas.\n\nUnderslung: Un exterminator debe estar adherido a un arma básica o a un eviscerator. Si el exterminator o el arma a la que está adherido explota, ninguna de las dos armas puede volver a usarse en esa partida.',
    profiles: []
  },
  {
    id: 'hallucinogen',
    name: 'Granada Alucinógena',
    image: 'assets/img/weapons/hallucinogen.jpg',
    category: 'grenade',
    cost: 70,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Alucinógeno' }
    ]
  },

  // ==================================================
  // HERRAMIENTAS
  // ==================================================
  {
    id: 'clip-harness',
    name: 'Arnés de Clip',
    image: 'assets/img/weapons/clip-harness.jpg',
    category: 'tools',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    propiedades: [
      { nombre: 'Uso', valor: 'Se abrocha si no te mueves en la fase de movimiento' },
      { nombre: 'Efecto', valor: 'Evita la prueba de caída si el portador queda fijado o derribado a menos de 1" de un borde' },
      { nombre: 'Duración', valor: 'Se desabrocha automáticamente al moverse o entrar en combate cuerpo a cuerpo' }
    ],
    descripcion: 'Los luchadores que deben escalar constantemente las ruinas escarpadas y la superestructura en ruinas del Subcolmena a menudo eligen usar un arnés con clip para evitar caer. El arnés no es más que una línea de seguridad que se ajusta alrededor del cuerpo, con un clip de acero fuerte o un broche magnético que puede fijarse a un objeto cercano. Si el portador cayera, el arnés lo salvaría y le permitiría trepar hasta ponerse a salvo.\n\nEl extremo de la línea de seguridad debe estar sujeto para que funcione. Un modelo puede abrocharse un arnés si no se mueve en su fase de movimiento. El luchador todavía puede realizar otras acciones además de abrocharse el arnés, como disparar o colocarse en vigilancia. El arnés se desabrocha automáticamente cuando el modelo se mueve o entra en combate cuerpo a cuerpo.\n\nSi el modelo queda fijado o derribado a menos de 1" de un borde, no tiene que hacer la prueba de caída. El arnés sujeto evita que caiga, como si hubiera superado la prueba de Iniciativa.',
    profiles: []
  },
  {
    id: 'filter-plugs',
    name: 'Tapones Filtrantes',
    image: 'assets/img/weapons/filter-plugs.jpg',
    category: 'tools',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    propiedades: [
      { nombre: 'Efecto', valor: 'Permite repetir una prueba de Resistencia fallida contra gases peligrosos' },
      { nombre: 'Cubre', valor: 'Asfixia, Alucinógeno, Terror' }
    ],
    descripcion: 'Los tapones filtrantes, o "flugs", son filtros simples que los habitantes de la colmena se colocan firmemente en las fosas nasales para purificar el aire que respiran. Baratos y desechables, se utilizan por millones en las regiones bajas de la Ciudad Colmena y en el Subcolmena, donde el smog, las nubes de contaminantes y los gases tóxicos son peligros constantes.\n\nUn luchador que lleva flugs puede repetir una prueba de Resistencia fallida contra gases peligrosos incluyendo Asfixia, Alucinógeno y Terror.',
    profiles: []
  },
  {
    id: 'medi-pack',
    name: 'Botiquín Médico',
    image: 'assets/img/weapons/medi-pack.jpg',
    category: 'tools',
    cost: 80,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'En un aliado derribado en contacto de base' },
      { nombre: 'Efecto', valor: 'Tabla de lesiones: 1-4 recupera a herida superficial, 5 sigue derribado, 6 fuera de acción' }
    ],
    descripcion: 'El botiquín médico es una computadora médica diagnóstica que puede aliviar los principales síntomas de las heridas mediante impulsos electroquímicos.\n\nUn luchador que lleva un botiquín puede usarlo en un aliado que esté derribado y en contacto de base. El luchador debe moverse de base a base, no correr, y luego pasar el resto del turno atendiendo a su camarada. No puede disparar, pelear cuerpo a cuerpo ni hacer nada más. Al final del turno, en la fase de recuperación, se realiza una tirada de lesión para el modelo derribado como de costumbre, excepto que un resultado de 1-4 recupera al combatiente herido a una herida superficial, un 5 lo mantiene derribado y un 6 lo elimina de acción.\n\nNota: un combatiente no puede usar un botiquín en sí mismo, ni otra persona puede usar el botiquín una vez que su dueño está herido o incapacitado.',
    profiles: []
  },
  {
    id: 'grapnel',
    name: 'Garfio',
    image: 'assets/img/weapons/grapnel.jpg',
    category: 'tools',
    cost: 30,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Se dispara en la fase de disparo (objetivo pequeño)' },
      { nombre: 'Efecto', valor: 'Si acierta, el modelo puede izarse hasta el punto marcado en su siguiente fase de movimiento' },
      { nombre: 'Limitación', valor: 'No puede hacer nada más ese turno mientras se iza' },
      { nombre: 'Tirada de munición', valor: 'Sí, como un arma normal' }
    ],
    descripcion: 'El garfio consiste en un garfio magnético unido a un cable largo que se dispara desde un pequeño lanzador.\n\nUn luchador puede disparar el garfio en la fase de disparo en lugar de disparar con un arma. Elige el lugar al que deseas apuntar, contándolo como un objetivo pequeño, y lanza para acertar como con el fuego de armas. Si fallas el objetivo, entonces el garfio no se engancha y se retrae listo para el siguiente disparo. Si aciertas, el garfio magnético se adhiere al punto indicado y esto puede marcarse con un marcador adecuado. En su siguiente fase de movimiento, el modelo puede izarse hasta la posición del marcador. Si el luchador elige hacer esto, entonces no puede hacer nada más ese turno. Si se ve obligado a moverse antes de izarse (por ejemplo, si se rompe), entonces el garfio se retrae automáticamente. Un garfio puede apuntarse al borde de un nivel desde abajo, permitiendo así que el modelo trepe hasta un saliente superior.\n\nEl garfio no es realmente un arma, pero lo más probable es que alguien quiera usarlo como tal. También se realiza una tirada de munición de la manera habitual para las armas.',
    profiles: []
  },
  {
    id: 'grav-chute',
    name: 'Paracaídas Gravítico',
    image: 'assets/img/weapons/grav-chute.jpg',
    category: 'tools',
    cost: 40,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'No sufre daño al caer (incluso desde más de 10")' },
      { nombre: 'Efecto', valor: 'Puede saltar desde cualquier altura y aterriza de forma segura automáticamente' },
      { nombre: 'Limitación', valor: 'Debe tener movimiento suficiente para cubrir la caída' }
    ],
    descripcion: 'El canal gravitatorio es un repelente gravitacional pasivo que reduce la fuerza de atracción de la gravedad a una fracción de su intensidad normal. Permite al usuario flotar desde grandes alturas y aterrizar suavemente.\n\nUn luchador que lleva un paracaídas gravitacional no sufre daño al caer, incluso desde alturas mayores a 10", pero todavía puede ser inmovilizado por la caída.\n\nAdemás, ya no está restringido a saltar desde alturas de no más de 3"; en cambio, puede saltar desde cualquier altura y se asume que automáticamente pasa la prueba de Iniciativa para ver si aterriza de manera segura. Cabe señalar que todavía debe tener suficiente movimiento para cubrir la caída al saltar.',
    profiles: []
  },
  {
    id: 'bio-scanner',
    name: 'Bio-escáner',
    image: 'assets/img/weapons/bio-scanner.jpg',
    category: 'tools',
    cost: 50,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso 1 (centinela)', valor: 'Activa la alarma con 4+ si hay enemigo a menos de 16"' },
      { nombre: 'Uso 2 (fase de disparo)', valor: 'Detecta enemigos ocultos a 16"' }
    ],
    descripcion: 'Un bioescáner detecta signos de vida en la proximidad del usuario. El dispositivo es pequeño, aproximadamente del tamaño de una pistola, y se puede llevar en el cinturón o alrededor del cuello del propietario. Un combatiente que lleve un dispositivo así mejora sus posibilidades de detectar intrusos enemigos.\n\nUn bioescáner se utiliza de una de dos maneras.\n\nSi el combatiente es un centinela (por ejemplo, en el escenario de La Redada o Rescate) y la alarma aún no se ha activado, entonces existe la posibilidad de que detecte a cualquier intruso en el bioescáner. Si al final del turno del centinela hay algún modelo enemigo a menos de 16" de él, entonces activará la alarma con una tirada de 4 o más.\n\nDe lo contrario, un combatiente equipado con un bio-escáner puede usarlo durante su fase de disparo. No debe haber corrido ni cargado y en su lugar disparará normalmente. Si se utiliza el bio-escáner, detectará automáticamente a cualquier enemigo oculto en un rango de 16".',
    profiles: []
  },
  {
    id: 'bio-booster',
    name: 'Bio-potenciador',
    image: 'assets/img/weapons/bio-booster.jpg',
    category: 'tools',
    cost: 40,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'En la tabla de lesiones, un resultado de 1-4 cuenta como herida superficial' },
      { nombre: 'Uso', valor: 'Solo la primera tirada de Lesión durante la fase de recuperación' },
      { nombre: 'Consumible', valor: 'Se descarga tras usarse (no vuelve a funcionar)' }
    ],
    descripcion: 'Un bio-potenciador es una pequeña carga química que se ajusta en una pulsera o similar. El bio-sensor del potenciador se activa cuando el usuario resulta herido, administrando una inyección del químico potenciador en el torrente sanguíneo mediante un difusor de presión. El bio-potenciador se administra automáticamente y de manera completamente autónoma.\n\nSi un luchador que lleva un potenciador biológico debe tirar en la tabla de lesiones durante su fase de recuperación, entonces un resultado de 1-4 cuenta como una herida superficial.\n\nEsto solo se aplica a la primera tirada de Lesión del luchador durante su fase de recuperación, es decir, no a tiradas de Lesión posteriores. Si un luchador se recupera y luego resulta herido por segunda vez, su bio-estimulador no tendrá ningún efecto adicional ya que se ha descargado.',
    profiles: []
  },

  // ==================================================
  // BIONICOS (implantes + chips)
  // ==================================================
  {
    id: 'lobo-chip',
    name: 'Chip Lobo',
    image: 'assets/img/weapons/lobo-chip.jpg',
    category: 'bionics',
    cost: 20,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    propiedades: [
      { nombre: 'Beneficio', valor: 'Inmune a estupidez, frenesí, odio y pruebas de nervios' },
      { nombre: 'Penalización', valor: 'Iniciativa reducida a 1 (no modificable)' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    inicializa: { I: 1 },
    descripcion: 'El chip de lobotomía es similar en función general a un chip de cráneo estándar. Su efecto es anestesiar parte del cerebro, reduciendo la sensibilidad del portador y frenando el comportamiento excesivo y violento.\n\nUn luchador equipado con un chip lobo es inmune a los efectos de la estupidez, el frenesí y el odio, así como a las pruebas de nervios. Sin embargo, la Iniciativa del modelo se reduce a 1 y no puede modificarse de ninguna manera.\n\nBionic: Un lobo-chip es un biónico, por lo que no se puede retirar una vez implantado en un luchador.',
    profiles: []
  },
  {
    id: 'photo-contacts',
    name: 'Fotocontactos',
    image: 'assets/img/weapons/photo-contacts.jpg',
    category: 'bionics',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: true,
    rarity: 'common',
    propiedades: [
      { nombre: 'Efecto', valor: 'El portador no puede ser cegado por bengalas fotónicas; en su lugar solo queda deslumbrado' },
      { nombre: 'Protección', valor: 'Lentes fotocromáticas contra destellos brillantes repentinos' }
    ],
    descripcion: 'Los fotocontactos son lentes de plástico multicapa que se llevan sobre los ojos para mejorar la visión en condiciones de poca luz. También incorporan una capa fotocromática que protege la vista del portador contra destellos brillantes repentinos.\n\nUn luchador que lleva fotocontactos no puede ser cegado por una bengala fotónica; en su lugar, siempre queda únicamente deslumbrado.',
    profiles: []
  },
  {
    id: 'bionic-eye',
    name: 'Ojo Biónico',
    image: 'assets/img/weapons/bionic-eye.jpg',
    category: 'bionics',
    cost: 50,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Cuenta como llevar fotovisor y gafas infrarrojas' },
      { nombre: 'Requiere', valor: 'Haber sufrido Ceguera en un Ojo' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    descripcion: 'Las células fotosensibles de un ojo biónico ofrecen protección contra bengalas fotónicas y permiten al luchador ver en la oscuridad y a través del humo.\n\nUn luchador que haya sufrido Ceguera en un Ojo puede recibir un implante de ojo biónico, en cuyo caso la herida grave en el ojo elegido se elimina de la lista de la banda.\n\nUn luchador con un ojo biónico implantado cuenta como si llevara un fotovisor y gafas infrarrojas.',
    profiles: []
  },
  {
    id: 'bionic-arm',
    name: 'Brazo Biónico',
    image: 'assets/img/weapons/bionic-arm.jpg',
    category: 'bionics',
    cost: 80,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: '+2 Fuerza' },
      { nombre: 'Efecto (combate)', valor: '+2 Iniciativa en combate cuerpo a cuerpo o al caer de un borde' },
      { nombre: 'Requiere', valor: 'Haber sufrido Herida en Brazo o Lesión en Mano' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    bonificaciones: { F: 2 },
    descripcion: 'Un brazo biónico es un dispositivo particularmente caro que ofrece fuerza, agarre y destreza enormemente amplificados en comparación con un brazo normal.\n\nUn luchador que sufra una Herida en Brazo o Lesión en Mano puede recibir un implante de brazo biónico, en cuyo caso todas las heridas en el brazo o lesiones en la mano del brazo elegido se eliminan de la lista de la banda.\n\nUn luchador con un brazo biónico implantado recibe un bonificador de +2 a su Fuerza. También recibe un bonificador de +2 a la Iniciativa durante el combate cuerpo a cuerpo o al hacer pruebas para ver si cae de un borde.',
    profiles: []
  },
  {
    id: 'bionic-leg',
    name: 'Pierna Biónica',
    image: 'assets/img/weapons/bionic-leg.jpg',
    category: 'bionics',
    cost: 80,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: '+1 Movimiento, +1 Ataques' },
      { nombre: 'Requiere', valor: 'Haber sufrido Herida en Pierna' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    bonificaciones: { M: 1, A: 1 },
    descripcion: 'Una pierna biónica es mucho más fuerte que una pierna normal y ofrece al luchador la oportunidad de realizar un devastador ataque de patada.\n\nUn luchador que sufra una Herida en Pierna puede recibir un implante de pierna biónica, en cuyo caso todas las heridas en la pierna elegida se eliminan de la lista de la banda.\n\nUn luchador con una pierna biónica implantada gana +1 a sus características de Movimiento y Ataques.',
    profiles: []
  },
  {
    id: 'bionic-chest',
    name: 'Pecho Biónico',
    image: 'assets/img/weapons/bionic-chest.jpg',
    category: 'bionics',
    cost: 50,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Cuenta como llevar respirador' },
      { nombre: 'Salvación de Armadura', valor: '6+' },
      { nombre: 'Requiere', valor: 'Haber sufrido Herida en el Pecho' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    armourSave: '6+',
    descripcion: 'Un pecho biónico es una membrana endurecida que envuelve el esternón y la caja torácica frontal. El material absorbe el trauma de los impactos y distribuye la energía por toda la membrana, reduciendo así la probabilidad de penetración.\n\nUn luchador que sufra una Herida en el Pecho puede recibir un implante de pecho biónico, en cuyo caso todas sus heridas en el pecho se eliminan de la lista de la banda.\n\nUn luchador con un pecho biónico implantado cuenta como si llevara un respirador y también recibe una tirada de salvación de armadura de 6+.',
    profiles: []
  },
  {
    id: 'skull-chip',
    name: 'Chip Calavera',
    image: 'assets/img/weapons/skull-chip.jpg',
    category: 'bionics',
    cost: 30,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Repetir cualquier prueba de Iniciativa fallida' },
      { nombre: 'Riesgo', valor: 'Si la repetición falla, el efecto se agota hasta el final de la partida' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    descripcion: 'Este es un pequeño bio-chip que parece una diminuta placa de metal cubierta de circuitos. Está adherido al cráneo mediante un fino pasador en forma de aguja que se fija directamente en el cerebro. El chip se fusiona con la mente del portador, mejorando su tiempo de reacción y las funciones de memoria.\n\nUn luchador con un chip calavera puede repetir cualquier prueba de Iniciativa fallida, como al intentar evitar quedar fijado o al comprobar si el modelo cae de un borde. Sin embargo, si la tirada repetida falla, el efecto del chip se agota y ya no tendrá ningún efecto por el resto de la partida.\n\nBionic: Un chip calavera es un biónico, por lo que no se puede retirar una vez implantado en un luchador.',
    profiles: []
  },

  // ==================================================
  // ARMADURAS
  // ==================================================
  {
    id: 'mesh-armour',
    name: 'Armadura de Malla',
    image: 'assets/img/weapons/mesh-armour.jpg',
    category: 'armor',
    cost: 25,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Salvación de Armadura', valor: '5+' }
    ],
    descripcion: 'La armadura de malla es un material similar a un tejido hecho de pequeñas celdas de termoplás unidas. La malla resultante es ligera pero muy fuerte, y puede confeccionarse como prenda o usarse como forro protector. La malla absorbe golpes físicos o energía térmica volviéndose momentáneamente sólida, absorbiendo efectivamente la energía de un ataque al cambiar de un estado mófico a otro. Los golpes repetidos en la misma zona tienden a erosionar este efecto y reducir el valor protector de la malla.\n\nSalvación de Armadura: Un luchador que lleva armadura de malla recibe una tirada de salvación de armadura de 5+.',
    armourSave: '5+',
    profiles: []
  },
  {
    id: 'flak-armour',
    name: 'Armadura Flak',
    image: 'assets/img/weapons/flak-armour.jpg',
    category: 'armor',
    cost: 10,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Salvación de Armadura', valor: '6+ (5+ contra plantillas)' }
    ],
    descripcion: 'La armadura flak está hecha de tela acolchada de alta tensión, normalmente en forma de chaleco sin mangas que cubre la parte superior del torso. La flak es bastante incómoda y no especialmente popular a pesar de su bajo coste. Ofrece una protección mínima contra armas de baja potencia y es más útil contra explosiones e impactos explosivos de casi-fallos.\n\nSalvación de Armadura: Un luchador que lleva armadura flak tiene una tirada básica de salvación con D6 de 6 contra una herida. Esto se incrementa a 5 o 6 contra armas que usan plantilla, ya que generalmente son las armas de baja velocidad contra las cuales la flak es más eficaz: lanzallamas, armas de explosión y granadas de fragmentación, por ejemplo. Los modificadores de salvación para estas armas pueden reducir o anular esta salvación en muchos casos.',
    armourSave: '6+',
    armourSaveTemplate: '5+',
    profiles: []
  },
  {
    id: 'carapace-armour',
    name: 'Armadura de Caparazón',
    image: 'assets/img/weapons/carapace-armour.jpg',
    category: 'armor',
    cost: 60,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Salvación de Armadura', valor: '4+' },
      { nombre: 'Iniciativa', valor: '-1 (por el peso)' }
    ],
    penalizaciones: { I: -1 },
    descripcion: 'La armadura de caparazón está hecha de placas rígidas de armaplás moldeadas para ajustarse a partes del cuerpo. Un traje típico de caparazón cubre la región vital del pecho, con placas separadas para brazos y piernas. Las placas de armaplás ofrecen una protección bastante buena contra armamento de baja potencia, pero son bastante pesadas.\n\nSalvación de Armadura: Un luchador que lleva armadura de caparazón recibe una tirada de salvación de armadura de 4+.\n\nIniciativa: Debido a su peso incómodo, un luchador que lleva armadura de caparazón sufre una penalización de -1 a la característica de Iniciativa.',
    armourSave: '4+',
    profiles: []
  },
  {
    id: 'force-field',
    name: 'Campo de Fuerza',
    image: 'assets/img/weapons/force-field.jpg',
    category: 'armor',
    cost: 100,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Ataques a distancia', valor: '-1 Fuerza y -1 Modificador de Salvación contra el portador' },
      { nombre: 'Combate cuerpo a cuerpo', valor: 'No ofrece protección' }
    ],
    descripcion: 'Los campos de fuerza son la forma más simple y común de escudo de energía protector usado en todo el Imperium. Sin embargo, los campos de fuerza personales son una rareza costosa en el Subcolmena y solo las bandas con las conexiones adecuadas pueden esperar poseer uno.\n\nTodos los ataques a distancia realizados contra un luchador protegido por un campo de fuerza sufren una penalización de -1 a su Fuerza y Modificador de Salvación. Nota: un campo de fuerza no ofrece protección contra golpes en combate cuerpo a cuerpo.',
    profiles: []
  },

  // ==================================================
  // MIRAS
  // ==================================================
  {
    id: 'mira-infrarroja',
    name: 'Mira Infrarroja',
    image: 'assets/img/weapons/mira-infrarroja.jpg',
    category: 'sights',
    cost: 30,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Arma básica',
    propiedades: [
      { nombre: 'Instalación', valor: 'Arma básica' },
      { nombre: 'Requiere estacionario', valor: 'Sí' },
      { nombre: 'Cobertura parcial', valor: 'Ignorada' },
      { nombre: 'Cobertura total', valor: '-1' },
      { nombre: 'Nubes de humo', valor: 'Inmune' }
    ],
    descripcion: 'Se puede instalar un visor infrarrojo en un arma básica. Un combatiente estacionario que use un arma con visor infrarrojo reduce la penalización por precisión al disparar a un modelo en cobertura en 1. Por lo tanto, la cobertura parcial se ignora y la cobertura total cuenta como -1.\n\nAdemás, el combatiente es inmune a los efectos de las nubes de humo al disparar.',
    profiles: []
  },
  {
    id: 'mono-visor',
    name: 'Mono Visor',
    image: 'assets/img/weapons/mono-visor.jpg',
    category: 'sights',
    cost: 40,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Arma básica, especial o pesada',
    propiedades: [
      { nombre: 'Instalación', valor: 'Arma básica, especial o pesada' },
      { nombre: 'Requiere estacionario', valor: 'Sí' },
      { nombre: 'Bonificación', valor: '+1 al ataque' }
    ],
    descripcion: 'Se puede colocar una mira monocular en un arma básica, especial o pesada. Un combatiente estacionario que use un arma con mira monocular recibe un bono de +1 al ataque.',
    profiles: []
  },
  {
    id: 'mira-punto-rojo',
    name: 'Mira Láser de Punto Rojo',
    image: 'assets/img/weapons/mira-punto-rojo.jpg',
    category: 'sights',
    cost: 40,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Pistola, arma básica o especial',
    propiedades: [
      { nombre: 'Instalación', valor: 'Pistola, arma básica o especial' },
      { nombre: 'Bonificación', valor: '+1 al impacto' },
      { nombre: 'Salvación del objetivo', valor: '6+ si detecta el punto rojo' },
      { nombre: 'Alerta', valor: 'El centinela se alarma si detecta el punto' }
    ],
    descripcion: 'Se puede colocar una mira de punto rojo en una pistola, arma básica o arma especial. Un combatiente que use un arma con mira de punto rojo recibe un bono de +1 al impacto.\n\nUn combatiente golpeado por un arma con mira de punto rojo tiene la posibilidad de detectar el punto rojo y agacharse. Si el tirador está dentro del arco de visión del objetivo, entonces este recibe una salvación especial de 6+. Si el objetivo es un centinela y detecta el punto, también se dará la alarma.',
    profiles: []
  },
  {
    id: 'mira-telescopica',
    name: 'Mira Telescópica',
    image: 'assets/img/weapons/mira-telescopica.jpg',
    category: 'sights',
    cost: 20,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Arma básica',
    propiedades: [
      { nombre: 'Instalación', valor: 'Arma básica' },
      { nombre: 'Requiere estacionario', valor: 'Sí' },
      { nombre: 'Efecto en alcance', valor: 'Alcance Largo aumenta en un valor igual al Alcance Corto' }
    ],
    descripcion: 'Se puede montar una mira telescópica en un arma básica. Un combatiente estacionario que utilice un arma con mira telescópica aumenta el Alcance Largo del arma en un número de pulgadas igual a su Alcance Corto.\n\nPor ejemplo, el alcance máximo de un fusil láser se convierte en 32".',
    profiles: []
  },
  
  // ==================================================
  // VARIOS (MISC)
  // ==================================================
  {
    id: 'auto-repairer',
    name: 'Auto-reparador',
    image: 'assets/img/weapons/auto-repairer.jpg',
    category: 'misc',
    cost: 80,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Ubicación', valor: 'Escondite de la banda (no se lleva encima)' },
      { nombre: 'Requiere', valor: 'Un Heavy + un Pandillero, ninguno fuera de acción' },
      { nombre: 'Efecto', valor: 'Ignora tirada de Munición fallida con 4+ (y explosiones)' }
    ],
    descripcion: 'Un reparador de autos es un dispositivo grande que se mantiene en el escondite de la banda o en uno de sus talleres. La máquina es utilizada por el miembro más fuerte de la banda para revisar y reparar equipos, escanear en busca de debilidades estructurales ocultas y probar baterías, acumuladores de energía y generadores internos.\n\nSi una pandilla tiene un reparador de autos, entonces se puede usar entre peleas para revisar las armas de la pandilla. La pandilla debe incluir un Pesado para hacer esto y debes asignar un Pandillero para ayudarlo. Ambos luchadores no deben haber salido de acción en el juego anterior y el Pandillero no puede recolectar ingresos de territorios ni buscar bienes comerciales raros.\n\nEn el próximo juego, cualquier arma que falle su tirada de munición puede lanzar un D6 y ignorar la tirada de munición fallida con un resultado de 4 o más. Las armas que automáticamente fallan una tirada de munición todavía pueden ignorarla con un resultado de 4 o más. Además, cualquier arma que explote también puede ignorar la explosión con una tirada de D6 de 4 o más.',
    profiles: []
  },
  {
    id: 'berserker-chip',
    name: 'Chip Berserker',
    image: 'assets/img/weapons/berserker-chip.jpg',
    category: 'bionics',
    cost: 25,
    costVariable: '3D6',
    free: false,
    removable: false,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Una vez por partida, al inicio de un turno' },
      { nombre: 'Efecto activo', valor: '+2 Movimiento, +2 Fuerza y Frenesí' },
      { nombre: 'Duración', valor: 'Hasta el inicio del siguiente turno del luchador' },
      { nombre: 'Penalización', valor: 'Al terminar el efecto, Iniciativa reducida a 1 el resto de la partida' },
      { nombre: 'Biónico', valor: 'No se puede retirar una vez implantado' }
    ],
    descripcion: 'Los chips berserker son pequeñas bio-placas que se adhieren al cráneo mediante un fino pasador en forma de aguja que se introduce directamente en el cerebro. La circuitería del chip se fusiona con la mente del portador y, a comando, puede inundar el cuerpo con adrenalina y otras sustancias químicas.\n\nUna vez por partida, un luchador con un chip berserker implantado puede activarlo al inicio de cualquiera de sus turnos. Si el chip se activa, el modelo gana un bonificador de +2 a sus características de Movimiento y Fuerza y sigue las reglas de frenesí. Los efectos del chip duran hasta el inicio del siguiente turno del luchador. Sin embargo, el uso del chip es agotador, por lo que una vez que sus efectos desaparecen, la Iniciativa del modelo se reduce a 1 durante el resto de la partida.',
    profiles: []
  },
  {
    id: 'blindsnake-pouch',
    name: 'Bolsa de Serpiente Ciega',
    image: 'assets/img/weapons/blindsnake-pouch.jpg',
    category: 'misc',
    cost: 30,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Salvación especial de 4+ contra disparos de vigilancia' }
    ],
    descripcion: 'Los Ratskins extraen veneno de la serpiente ciega albina, mezclan la toxina con ciertos hongos secretos y colocan la pasta resultante en una pequeña bolsa de cuero que se lleva alrededor del cuello. Se dice que el espíritu de la serpiente ciega protege contra los espíritus malignos y guía a su dueño en la oscuridad. La mezcla en la bolsa de cuero es absorbida por la piel del combatiente y mejora su sensibilidad psíquica natural, otorgándole una especie de sexto sentido rudimentario.\n\nUn luchador que lleva una bolsa de serpiente ciega puede detectar cuando un enemigo está esperando para dispararle. Si un luchador recibe un disparo desde vigilancia y es alcanzado, tiene la oportunidad de agacharse o esquivar para evitar el disparo. El modelo recibe un salvamento especial de 4+ contra disparos de vigilancia.',
    profiles: []
  },
  {
    id: 'concealed-blade',
    name: 'Hoja Oculta',
    image: 'assets/img/weapons/concealed-blade.jpg',
    category: 'misc',
    cost: 10,
    costVariable: 'D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Solo cuando el combatiente es capturado' },
      { nombre: 'Efecto', valor: 'Tira D6: 1 muerto, 2 recapturado, 3 escapa sin equipo, 4-6 escapa con equipo' },
      { nombre: 'Consumible', valor: 'Sirve solo para un intento de escape' }
    ],
    descripcion: 'Aunque es posible ocultar cualquier hoja pequeña en tu persona, la hoja oculta es algo un poco diferente. Esta diminuta hoja está astutamente escondida en el talón de una bota especialmente diseñada, o dentro de un pequeño biocompartimento bajo la piel del propietario. La hoja no se utiliza a menos que el dueño sea capturado, en cuyo caso puede usarla para intentar escapar.\n\nUn combatiente capturado puede intentar escapar si tiene una daga oculta. Lanza un D6:\n\n1: El luchador es asesinado mientras intenta escapar. La banda que lo captura se queda con su equipo.\n2: El combatiente es recapturado inmediatamente.\n3: El luchador escapa, pero pierde todas sus armas y equipo ante la banda que lo captura.\n4-6: El combatiente escapa junto con sus armas y equipo.\n\nUna hoja oculta solo sirve para un intento de escape.',
    profiles: []
  },
  {
    id: 'drum-magazine',
    name: 'Cargador de Tambor',
    image: 'assets/img/weapons/drum-magazine.jpg',
    category: 'ammo',
    cost: 15,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Autopistola, Rifle Automático o Autoslugger',
    propiedades: [
      { nombre: 'Se instala en', valor: 'Autopistola, Rifle Automático, Autoslugger' },
      { nombre: 'Efecto', valor: '+1 a impactar si se usa la capacidad completa, pero siempre causa tirada de Munición' }
    ],
    descripcion: 'Muchos armeros del Subnido tienen la experiencia para modificar los mecanismos de disparo de un autogun para usar cargadores de munición más grandes. Tales armas comúnmente usan cargadores tipo "tambor" capaces de suministrar una gran cantidad de munición.\n\nCualquier autopistola, autogun y autoslugger puede ser modificada y equipada con un cargador tambor. Antes de que el combatiente dispare, puedes elegir usar todas las capacidades de la modificación del arma. Si decides hacerlo, el modelo recibe un bono de +1 para impactar. Sin embargo, el disparo siempre requerirá una tirada de munición, incluso si la tirada para impactar no resultó en un 6.',
    profiles: []
  },
  {
    id: 'infra-red-goggles',
    name: 'Gafas Infrarrojas',
    image: 'assets/img/weapons/infra-red-goggles.jpg',
    category: 'tools',
    cost: 30,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Detecta enemigos ocultos a Iniciativa x3' },
      { nombre: 'Efecto (centinela)', valor: 'Detecta enemigos en cobertura como si estuvieran al descubierto' },
      { nombre: 'Inmunidad', valor: 'Nubes de humo' }
    ],
    descripcion: 'Estos toman la forma de un par de gafas o visera que permiten a un combatiente ver las imágenes térmicas de los enemigos. Esto permite al usuario ver enemigos que se esconden o están parcialmente ocultos detrás de una cobertura.\n\nUn luchador que lleva gafas infrarrojas puede detectar enemigos ocultos a tres veces su distancia normal, es decir, su Iniciativa x3. Sin embargo, debe poder ver el modelo del enemigo oculto. Los centinelas que llevan gafas también detectarán a los luchadores en cobertura como si estuvieran al descubierto. Además, cualquier luchador que use gafas es inmune a los efectos de las nubes de humo.',
    profiles: []
  },
  {
    id: 'isotropic-fuel-rod',
    name: 'Barra de Combustible Isotrópico',
    image: 'assets/img/weapons/isotropic-fuel-rod.jpg',
    category: 'misc',
    cost: 50,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Una sola vez' },
      { nombre: 'Efecto', valor: 'Convierte cualquier territorio en Asentamiento' }
    ],
    descripcion: 'Las barras de combustible isotrópico se usan para proporcionar energía a casi todo en el Subcolmena. Si una banda tiene una barra de combustible puede convertir cualquier territorio en un Asentamiento al inicio de la secuencia posterior a la partida.\n\nLa barra de combustible solo se puede usar una vez y se guarda en el alijo de la banda, por lo que su valor no se incluye en el valor de banda.\n\nNota: las bandas proscritas que usan una barra de combustible establecen un Asentamiento Proscrito en su lugar. Este se comporta como un Asentamiento normal excepto que los proscritos generan los 30 créditos completos.',
    profiles: []
  },
  {
    id: 'mung-vase',
    name: 'Jarrón Mung',
    image: 'assets/img/weapons/mung-vase.jpg',
    category: 'misc',
    cost: 0,
    costVariable: 'D6x10',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Al venderlo, tira D6 para ver cuánto te ofrecen' },
      { nombre: 'Portador', valor: 'Guardado por el Líder (si muere, se pierde)' },
      { nombre: 'Valor', valor: 'No cuenta para el Gang Rating' }
    ],
    descripcion: 'El jarrón Mung es un tipo de arqueotecnología muy buscado y extremadamente raro. Los jarrones auténticos son muy apreciados por los coleccionistas entre las casas nobles de toda Necromunda y se dice que los ejemplares de primera clase cambian de dueño por millones de créditos.\n\nPero por cada jarrón recién descubierto y genuino que se encuentra en los páramos de la zona muerta, se hacen mil réplicas en los barrios marginales del Subnido. Si te ofrecen un jarrón Mung, lo más probable es que sea una copia sin valor o un ejemplar dañado con solo un valor simbólico.\n\nPuedes comprar el jarrón si te sientes con suerte. Debes comprometerte a comprar el jarrón antes de establecer el costo. Si decides venderlo, tira un D6 para ver qué te ofrecen.',
    profiles: []
  },
  {
    id: 'one-in-a-million',
    name: 'Arma Única en un Millón',
    image: 'assets/img/weapons/one-in-a-million.jpg',
    category: 'misc',
    cost: 0,
    costVariable: 'weaponx2',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'unique',
    propiedades: [
      { nombre: 'Efecto', valor: 'El arma pasa automáticamente cualquier tirada de Munición' },
      { nombre: 'Tipo', valor: 'Tira D6: 1-2 pistola, 3-4 básica, 5 especial, 6 pesada' },
      { nombre: 'Coste', valor: 'Doble del coste base del arma elegida' }
    ],
    descripcion: 'El Arma Única en un Millón es un raro ejemplo del arte de los armeros, fabricada con los mejores materiales según los estándares más finos y las tolerancias más exigentes. Tales armas son apreciadas más allá del mero dinero. Hombres han luchado y muerto por poseer un arma como esta.\n\nEl arma es normal para su tipo pero pasa automáticamente cualquier tirada de Munición que deba hacer. Tira un D6 para descubrir qué tipo de arma se te ha ofrecido: 1-2 pistola, 3-4 básica, 5 especial, 6 pesada. Puedes elegir cualquier arma de la categoría sacada.\n\nNota: solo se usa el coste base del arma para determinar su coste. El coste de tipos de munición adicionales no se duplica.',
    profiles: []
  },
  {
    id: 'photo-visor',
    name: 'Fotovisor',
    image: 'assets/img/weapons/photo-visor.jpg',
    category: 'tools',
    cost: 25,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Inmune a Cegar (Bengalas Fotónicas y similares)' }
    ],
    descripcion: 'Visor que protege contra destellos luminosos. El portador es inmune o ignora los efectos de Photon Flash Flares y equipos similares que ciegan.',
    profiles: []
  },
  {
    id: 'ratskin-map',
    name: 'Mapa Ratskin',
    image: 'assets/img/weapons/ratskin-map.jpg',
    category: 'misc',
    cost: 0,
    costVariable: 'D6x10',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Al comprarlo, tira D6 para ver su calidad' },
      { nombre: 'Portador', valor: 'Debe llevarlo el Líder de la banda' },
      { nombre: 'Uso', valor: 'Modifica la tirada de Tabla de Escenarios según calidad' },
      { nombre: 'Fade', valor: 'Si se usa mucho, puede desgastarse' }
    ],
    descripcion: 'Se supone comúnmente que el Subcolmena contiene enormes cantidades de tesoros: túneles derrumbados que conducen a minas no explotadas, cavernas con montones de gemas y cúpulas perdidas hace mucho tiempo repletas de arqueotecnología. También es de conocimiento común que los Ratskins conocen muchos de estos lugares, así como caminos a través y debajo de la colmena que ningún hombre común ha recorrido jamás. Igualmente es de conocimiento común que cualquiera que intente venderte un antiguo mapa del tesoro Ratskin inevitablemente está intentando estafarte.\n\nSi decides comprar el mapa, tira para ver qué tan exacto es antes de jugar tu próxima partida. Según el resultado, el mapa te dará ventajas al modificar la Tabla de Escenarios. El mapa puede desvanecerse si se usa demasiado.',
    profiles: []
  },
  {
    id: 'respirator',
    name: 'Respirador',
    image: 'assets/img/weapons/respirator.jpg',
    category: 'tools',
    cost: 15,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto', valor: 'Inmune a gases peligrosos: Asfixia, Alucinógeno, Terror' }
    ],
    descripcion: 'Los respiradores son un artículo esencial en las regiones bajas de la colmena, donde el smog, las nubes de contaminantes y el polvo tóxico son peligros cotidianos. Los respiradores eliminan la peor parte de la contaminación, incluyendo las sustancias más dañinas.\n\nUn luchador que lleva un respirador es inmune a los efectos de gases peligrosos, incluyendo Asfixia, Alucinógeno y Terror.',
    profiles: []
  },
  {
    id: 'screamers',
    name: 'Screamers',
    image: 'assets/img/weapons/screamers.jpg',
    category: 'misc',
    cost: 10,
    costVariable: 'D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Solo una partida (se consumen)' },
      { nombre: 'Efecto', valor: 'Alerta contra intrusos. En Incursión y Rescate, tira D6 por cada intruso que se mueva; con 6, se activa la alarma.' },
      { nombre: 'Portador', valor: 'No lo lleva ningún modelo específico (no cuenta para Gang Rating)' }
    ],
    descripcion: 'Los Screamers son pequeñas alarmas de proximidad utilizadas para proteger el escondite de una banda. Los screamers individuales son diminutos, pero el ruido que producen es horrendo. Una banda dispersará docenas alrededor del perímetro de su escondite para advertir sobre intrusos que se acerquen.\n\nLos Screamers solo pueden usarse en una partida, después de la cual se consumen. El precio en el Puesto de Comercio compra suficiente para durar una partida. No son llevados por ningún modelo en particular, por lo que su valor no se incluye en el valor de banda.',
    profiles: []
  },
  {
    id: 'silencer',
    name: 'Silenciador',
    image: 'assets/img/weapons/silencer.jpg',
    category: 'ammo',
    cost: 10,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    armaCompatible: 'Autopistola, Pistola Corriente, Rifle Automático, Rifle de Caza o Autoslugger',
    propiedades: [
      { nombre: 'Se instala en', valor: 'Autopistola, Pistola Corriente, Rifle Automático, Rifle de Caza o Autoslugger' },
      { nombre: 'Efecto', valor: 'El arma se vuelve efectivamente silenciosa' }
    ],
    descripcion: 'Un silenciador amortigua el sonido de los disparos así como cualquier destello del cañón que delate la posición. Un arma equipada con silenciador se vuelve efectivamente silenciosa, un factor útil en algunos escenarios.',
    profiles: []
  },
  {
    id: 'stinger-pouch',
    name: 'Bolsa de Aguijón',
    image: 'assets/img/weapons/stinger-pouch.jpg',
    category: 'misc',
    cost: 10,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Un solo uso' },
      { nombre: 'Efecto 1', valor: 'Si el portador queda fuera de combate por 4-6, se recupera totalmente' },
      { nombre: 'Efecto 2', valor: 'Puede curar una Vieja Herida de Batalla con 4+' }
    ],
    descripcion: 'Las flores de moho del aguijón curativo son hongos tan raros que los comerciantes comúnmente dividen su stock y lo combinan con otras sustancias para maximizar sus ganancias. Se venden en pequeñas bolsas para que puedan ser fácilmente almacenadas y transportadas.\n\nSi un luchador equipado con una bolsa de aguijón termina el juego derribado y queda fuera de acción debido a sacar un 4-6, puede usar la pasta curativa de aguijón en sus heridas. Un modelo que use la bolsa de esta manera no sufre una herida grave, en su lugar se asume automáticamente que se ha obtenido un resultado de Recuperación Total.\n\nAlternativamente, se puede usar una bolsa de aguijón para intentar curar la Antigua Herida de Batalla de un combatiente. Tira un D6. Con un resultado de 4 o más, la herida se cura completamente y se elimina del registro.\n\nUna bolsa de aguijón es un artículo de un solo uso.',
    profiles: []
  },
  {
    id: 'stummers',
    name: 'Stummers',
    image: 'assets/img/weapons/stummers.jpg',
    category: 'misc',
    cost: 10,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Solo una partida (se consumen)' },
      { nombre: 'Efecto', valor: 'Reduce -1 todas las probabilidades de activar la alarma en Incursión y Rescate. Anula Screamers.' },
      { nombre: 'Portador', valor: 'No lo lleva ningún modelo específico (no cuenta para Gang Rating)' }
    ],
    descripcion: 'Los Stummers se parecen a los Screamers, pero son dispersados por los intrusos a medida que se mueven. Mientras que los Screamers producen un ruido fuerte, los Stummers detienen el sonido por completo. Una vez activados, todo sonido en unos pocos metros se amortigua momentáneamente.\n\nSi la pandilla intrusa tiene Stummers, entonces reduce en -1 todas las probabilidades de activar la alarma al lanzar los dados. Si algún atacante dispara o utiliza un arma ruidosa, entonces la Fuerza del arma también se reduce a la mitad a efectos de activar la alarma. Nota: los Stummers anulan completamente a los Screamers y la decisión de usar Stummers se toma después de que tu oponente decida si usar o no Screamers.',
    profiles: []
  },
  {
    id: 'suspensor',
    name: 'Suspensor',
    image: 'assets/img/weapons/suspensor.jpg',
    category: 'misc',
    cost: 50,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Se instala en', valor: 'Cualquier arma pesada' },
      { nombre: 'Efecto', valor: 'Ignora la restricción Mover o Disparar. Si se mueve, -1 a impactar.' }
    ],
    descripcion: 'Los suspensores son dispositivos sofisticados capaces de manipular campos magnéticos. Se usan extensamente en los talleres industriales de la Ciudad Colmena para reducir los efectos de la gravedad sobre cargas pesadas.\n\nCualquier arma pesada puede ser equipada con un suspensor, en cuyo caso ignorará la restricción normal de Mover o Disparar que usualmente tienen todas las armas pesadas. Esto permite que pueda dispararse incluso si la miniatura se movió durante su fase de movimiento. Sin embargo, si se mueve, sufrirá una penalización de -1 al impactar al disparar el arma pesada.',
    profiles: []
  },
  {
    id: 'weapon-reload',
    name: 'Recarga de Arma',
    image: 'assets/img/weapons/weapon-reload.jpg',
    category: 'ammo',
    cost: 0,
    costVariable: 'weapon-div-2',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    propiedades: [
      { nombre: 'Efecto', valor: 'Recarga el arma objetivo' },
      { nombre: 'Coste', valor: 'Mitad del coste del arma base' }
    ],
    descripcion: 'Una recarga de arma permite recargar un arma cuyo cargador se ha agotado. El coste de la recarga es siempre la mitad del coste base del arma objetivo.',
    profiles: []
  },
];

// ---------- HELPERS ----------
function getWeaponById(id) {
  return WEAPONS.find(w => w.id === id);
}

function getWeaponsByCategory(cat) {
  return WEAPONS.filter(w => w.category === cat);
}

function getWeaponsPurchasable() {
  return WEAPONS.filter(w => w.purchasable);
}

function getWeaponCategoryLabel(catId) {
  return WEAPON_CATEGORIES[catId]?.label || catId;
}

function getWeaponCategoryIcon(catId) {
  return WEAPON_CATEGORIES[catId]?.icon || '❓';
}

function formatWeaponCost(weapon) {
  if (weapon.free) return 'Gratis';
  return `${weapon.cost} créditos`;
}

function formatWeaponRarity(weapon) {
  if (!weapon.rarity) return '—';
  return RARITIES[weapon.rarity] || weapon.rarity;
}

// ---------- HELPERS DE EQUIPAMIENTO EN LUCHADOR ----------
function equipWeapon(fighter, weaponId) {
  if (!fighter.equipment) fighter.equipment = [];
  const weapon = getWeaponForFighter(fighter, weaponId);
  if (!weapon) return false;

  if (weapon.category === 'armor' && weapon.armourSave && !weapon.armourPlates) {
    const hasPhysicalArmour = fighter.equipment.some(eq => {
      const w = getWeaponForFighter(fighter, eq.weaponId);
      return w && w.category === 'armor' && w.armourSave && !w.armourPlates;
    });
    if (hasPhysicalArmour) return false;
  }

  if (weapon.armourPlates) {
    const plateCount = fighter.equipment.filter(eq => {
      const w = getWeaponForFighter(fighter, eq.weaponId);
      return w && w.armourPlates;
    }).length;

    if (plateCount >= 3) return false;

    const hasPhysicalArmour = fighter.equipment.some(eq => {
      const w = getWeaponForFighter(fighter, eq.weaponId);
      return w && w.category === 'armor' && w.armourSave && !w.armourPlates;
    });
    if (hasPhysicalArmour) return false;
  }

  if (weapon.category === 'armor' && weapon.armourSave && !weapon.armourPlates) {
    const hasPlates = fighter.equipment.some(eq => {
      const w = getWeaponForFighter(fighter, eq.weaponId);
      return w && w.armourPlates;
    });
    if (hasPlates) return false;
  }

  fighter.equipment.push({
    id: 'eq_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    weaponId: weaponId,
    acquiredAt: Date.now()
  });
  return true;
}

function unequipWeapon(fighter, equipmentId) {
  if (!fighter.equipment) return false;
  const idx = fighter.equipment.findIndex(e => e.id === equipmentId);
  if (idx === -1) return false;

  const eq = fighter.equipment[idx];
  const weapon = getWeaponForFighter(fighter, eq.weaponId);
  if (weapon && !weapon.removable) return false;

  fighter.equipment.splice(idx, 1);
  return true;
}

function getWeaponFromEquipment(equipmentEntry) {
  return getWeaponById(equipmentEntry.weaponId);
}
/**
 /**
 * Genera la tabla HTML de perfiles de un arma.
 * Elimina columnas vacías y muestra reglas debajo.
 */
function renderWeaponProfilesTable(weapon) {
  if (!weapon || !weapon.profiles || weapon.profiles.length === 0) {
    return '';
  }

  const profiles = weapon.profiles;

  // Comprobar qué columnas tienen algún valor
  const hasRangeShort = profiles.some(p => p.rangeShort && p.rangeShort !== '-');
  const hasRangeLong = profiles.some(p => p.rangeLong && p.rangeLong !== '-');
  const hasHitShort = profiles.some(p => p.hitShort && p.hitShort !== '-');
  const hasHitLong = profiles.some(p => p.hitLong && p.hitLong !== '-');
  const hasPA = profiles.some(p => p.PA && p.PA !== '-');
  const hasAmmo = profiles.some(p => p.ammoRoll && p.ammoRoll !== '-');

  // Cabecera
  let thead = '<thead><tr>';
  thead += '<th>Perfil</th>';
  if (hasRangeShort) thead += '<th>C</th>';
  if (hasRangeLong) thead += '<th>L</th>';
  if (hasHitShort) thead += '<th>C</th>';
  if (hasHitLong) thead += '<th>L</th>';
  thead += '<th>F</th>';
  if (hasPA) thead += '<th>PA</th>';
  thead += '<th>D</th>';
  if (hasAmmo) thead += '<th>Mn</th>';
  thead += '</tr></thead>';

  // Cuerpo
  let tbody = '<tbody>';
  profiles.forEach(profile => {
    tbody += '<tr>';
    tbody += `<td>${profile.label || '—'}</td>`;
    if (hasRangeShort) tbody += `<td>${extractRangeEnd(profile.rangeShort)}</td>`;
    if (hasRangeLong) tbody += `<td>${extractRangeEnd(profile.rangeLong)}</td>`;
    if (hasHitShort) tbody += `<td>${profile.hitShort || '—'}</td>`;
    if (hasHitLong) tbody += `<td>${profile.hitLong || '—'}</td>`;
    tbody += `<td>${profile.F || '—'}</td>`;
    if (hasPA) tbody += `<td>${profile.PA || '—'}</td>`;
    tbody += `<td>${profile.D || '—'}</td>`;
    if (hasAmmo) tbody += `<td>${profile.ammoRoll || '—'}</td>`;
    tbody += '</tr>';
  });
  tbody += '</tbody>';

  // Tabla
  let html = `<table class="weapon-profile-table">${thead}${tbody}</table>`;

  // Reglas debajo (solo perfiles con reglas)
  const profilesWithRules = profiles.filter(p => p.rules && p.rules.trim() !== '');
  if (profilesWithRules.length > 0) {
    html += `<div class="weapon-profile-rules">`;
    html += `<div class="weapon-profile-rules-title">Reglas:</div>`;
    profilesWithRules.forEach(p => {
      html += `
        <div class="weapon-profile-rules-row">
          <span class="weapon-profile-rules-label">${escapeHTML(p.label || '—')}:</span>
          <span class="weapon-profile-rules-value">${renderWeaponRulesTags(p.rules)}</span>
        </div>
      `;
    });
    html += `</div>`;
  }

  return html;
}