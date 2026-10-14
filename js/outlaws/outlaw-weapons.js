/* ==================================================
   OUTLAW WEAPONS
   Catálogo completo de armas para bandas proscritas
   (Outlanders)
   ==================================================
   Este fichero es INDEPENDIENTE del catálogo de Necromunda.
   Duplica los perfiles de las armas que aparecen en el
   Outlaw Trading Post oficial + las armas exclusivas de
   cada casa proscrita.
   ================================================== */

// ==================================================
// CATEGORÍAS DE ARMAS
// ==================================================
const OUTLAW_WEAPON_CATEGORIES = {
  'pit-slave': { label: 'Armas de Foso',    short: 'Foso',        icon: '⚙️' },
  h2h:         { label: 'Cuerpo a Cuerpo',  short: 'H2H',         icon: '🔪' },
  pistol:      { label: 'Pistolas',         short: 'Pistola',     icon: '🔫' },
  basic:       { label: 'Armas Básicas',    short: 'Básica',      icon: '🎯' },
  special:     { label: 'Armas Especiales', short: 'Especial',    icon: '💥' },
  heavy:       { label: 'Armas Pesadas',    short: 'Pesada',      icon: '🚀' },
  grenade:     { label: 'Granadas',         short: 'Granada',     icon: '💣' },
  ammo:        { label: 'Municiones',       short: 'Munición',    icon: '📦' },
  sights:      { label: 'Miras',            short: 'Mira',        icon: '🔭' },
  tools:       { label: 'Herramientas',     short: 'Herramienta', icon: '🔧' },
  bionics:     { label: 'Biónicos',         short: 'Biónico',     icon: '🦾' },
  armor:       { label: 'Armaduras',        short: 'Armadura',    icon: '🛡️' },
  drugs:       { label: 'Drogas',           short: 'Droga',       icon: '💉' },
  misc:        { label: 'Varios',           short: 'Varios',      icon: '🎒' }
};

// ==================================================
// CATÁLOGO DE ARMAS OUTLAW
// ==================================================
const OUTLAW_WEAPONS = [

  // ==================================================
  // CUERPO A CUERPO
  // ==================================================
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
    id: 'shock-maul',
    name: 'Mazo Eléctrico',
    image: 'assets/img/weapons/shock-maul.jpg',
    category: 'h2h',
    cost: 35,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Normal', F: '5', PA: '-', D: '1', saveMod: '-2', rules: 'Fuera de Combate, Heridas' }
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

  // ==================================================
  // PISTOLAS
  // ==================================================
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
    id: 'bolt-pistol',
    name: 'Pistola Bólter',
    image: 'assets/img/weapons/bolt-pistol.jpg',
    category: 'pistol',
    cost: 25,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pistola', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '4', PA: '-', D: '1', saveMod: '-1', ammoRoll: '6+', rules: '' }
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
    id: 'plasma-pistol',
    name: 'Pistola de Plasma',
    image: 'assets/img/weapons/plasma-pistol.jpg',
    category: 'pistol',
    cost: 30,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Baja', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+1', hitLong: '-', F: '4', PA: '-1', D: '1', saveMod: '-1', ammoRoll: '4+', rules: '' },
      { label: 'Alta', rangeShort: '0-8', rangeLong: '8-16', hitShort: '+2', hitLong: '-', F: '5', PA: '-', D: '1', saveMod: '-2', ammoRoll: '6+', rules: 'Se Calienta' }
    ]
  },
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
    cost: 25,
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
  }
,
 
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
    id: 'meltagun',
    name: 'Fusor de Fusión',
    image: 'assets/img/weapons/meltagun.jpg',
    category: 'special',
    cost: 95,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Especial', rangeShort: '0-6', rangeLong: '6-12', hitShort: '+1', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '4+', rules: 'Alto Impacto' }
    ]
  },
  {
    id: 'plasma-gun',
    name: 'Fusil de Plasma',
    image: 'assets/img/weapons/plasma-gun.jpg',
    category: 'special',
    cost: 80,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Baja', rangeShort: '0-8', rangeLong: '8-24', hitShort: '+1', hitLong: '-', F: '5', PA: '-', D: '1', saveMod: '-2', ammoRoll: '4+', rules: '' },
      { label: 'Alta', rangeShort: '0-12', rangeLong: '12-24', hitShort: '+1', hitLong: '-', F: '6', PA: '-', D: '1', saveMod: '-3', ammoRoll: '6+', rules: 'Fuego Sostenido (1), Se Calienta' }
    ]
  },

  // ==================================================
  // ARMAS PESADAS
  // ==================================================
  {
    id: 'autocannon',
    name: 'Cañón Automático',
    image: 'assets/img/weapons/autocannon.jpg',
    category: 'heavy',
    cost: 260,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '4+', rules: 'Fuego Sostenido (1), Alto Impacto' }
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
    id: 'heavy-plasma',
    name: 'Fusil de Plasma Pesado',
    image: 'assets/img/weapons/heavy-plasma.jpg',
    category: 'heavy',
    cost: 240,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Baja', rangeShort: '0-20', rangeLong: '20-40', hitShort: '-', hitLong: '-', F: '7', PA: '-', D: 'D3', saveMod: '-4', ammoRoll: '4+', rules: 'Explosión, Alto Impacto' },
      { label: 'Alta', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '8', PA: '-', D: 'D6', saveMod: '-5', ammoRoll: '6+', rules: 'Nube de Gas, Alto Impacto' }
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
    id: 'lascannon',
    name: 'Cañón Láser',
    image: 'assets/img/weapons/lascannon.jpg',
    category: 'heavy',
    cost: 300,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Pesada', rangeShort: '0-20', rangeLong: '20-60', hitShort: '-', hitLong: '-', F: '9', PA: '-', D: '2D6', saveMod: '-6', ammoRoll: '2+', rules: 'Alto Impacto, Fuerza Terrorífica' }
    ]
  },
  {
    id: 'missile-launcher',
    name: 'Lanzamisiles',
    image: 'assets/img/weapons/missile-launcher.jpg',
    category: 'heavy',
    cost: 140,
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'common',
    profiles: [
      { label: 'Sin perfil propio', rangeShort: '0-20', rangeLong: '20-72', hitShort: '-', hitLong: '-', F: '-', PA: '-', D: '-', saveMod: '-', ammoRoll: '6+', rules: 'Perfil según munición cargada' }
    ]
  },

  // ==================================================
  // MISILES
  // ==================================================
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

  // ==================================================
  // GRANADAS
  // ==================================================
  {
    id: 'choke',
    name: 'Granada Asfixiante',
    image: 'assets/img/weapons/choke.jpg',
    category: 'grenade',
    cost: 15,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Asfixia' }
    ]
  },
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
    id: 'hallucinogen',
    name: 'Granada Alucinógena',
    image: 'assets/img/weapons/hallucinogen.jpg',
    category: 'grenade',
    cost: 40,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Alucinógeno' }
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
    id: 'melta-bombs',
    name: 'Bombas de Fusión',
    image: 'assets/img/weapons/melta-bombs.jpg',
    category: 'grenade',
    cost: 40,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '8', PA: '-', D: '2D6', saveMod: '-5', rules: 'Demolición' }
    ]
  },
  {
    id: 'photon-flares',
    name: 'Bengalas Fotónicas',
    image: 'assets/img/weapons/photon-flares.jpg',
    category: 'grenade',
    cost: 20,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Explosión, Cegar' }
    ]
  },
  {
    id: 'plasma-grenade',
    name: 'Granada de Plasma',
    image: 'assets/img/weapons/plasma-grenade.jpg',
    category: 'grenade',
    cost: 35,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '5', PA: '-', D: '1', saveMod: '-2', rules: 'Explosión, Bola de Plasma' }
    ]
  },
  {
    id: 'scare',
    name: 'Granada de Terror',
    image: 'assets/img/weapons/scare.jpg',
    category: 'grenade',
    cost: 20,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Terror' }
    ]
  },
  {
    id: 'smoke-bombs',
    name: 'Bombas de Humo',
    image: 'assets/img/weapons/smoke-bombs.jpg',
    category: 'grenade',
    cost: 10,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    profiles: [
      { label: 'Granada', F: '-', PA: '-', D: '-', saveMod: '-', rules: 'Nube de Gas, Humo' }
    ]
  }
,
// ==================================================
  // MUNICIONES
  // ==================================================
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
    id: 'hellfire-bolt',
    name: 'Cargadores Hellfire',
    image: 'assets/img/weapons/hellfire-bolt.jpg',
    category: 'ammo',
    cost: 20,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: false,
    rarity: 'rare',
    armaCompatible: 'Pistola Bólter / Bólter',
    propiedades: [
      { nombre: 'Efecto', valor: 'Los impactos infligen D3 de Daño' },
      { nombre: 'Riesgo', valor: 'El arma explota con tiradas de Munición de 1, 2 o 3 (en vez de solo 1)' },
      { nombre: 'Instalación', valor: 'Pistola Bólter, Bólter' }
    ],
    descripcion: 'El núcleo de los proyectiles hellfire contiene ácidos altamente corrosivos que infligen heridas horrendas en carne sin protección. Los proyectiles hellfire mal mantenidos son notoriamente explosivos, ya que cualquier fuga de ácido puede corroer las entrañas del arma bólter.\n\nUn impacto de pistola bólter o bólter disparando proyectiles hellfire inflige D3 de Daño. Sin embargo, un arma que dispare proyectiles hellfire debe comprobar si explota con una tirada de Munición de 1, 2 o 3 en lugar de solo con un 1.',
    profiles: []
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
    id: 'laser-hotshot-pack',
    name: 'Cargadores Hotshot Láser',
    image: 'assets/img/weapons/laser-hotshot-pack.jpg',
    category: 'ammo',
    cost: 15,
    costVariable: '2D6',
    free: false,
    removable: true,
    purchasable: true,
    basicEquipment: false,
    rarity: 'rare',
    armaCompatible: 'Pistola Láser / Rifle Láser',
    propiedades: [
      { nombre: 'Efecto', valor: '+1 Fuerza a disparos de pistola o rifle láser' },
      { nombre: 'Efecto secundario', valor: 'Si el objetivo es impactado, prenderá fuego con un 6+' },
      { nombre: 'Penalización', valor: 'La tirada de Munición del arma se reduce a 5+' },
      { nombre: 'Instalación', valor: 'Pistola Láser, Rifle Láser' }
    ],
    descripcion: 'El pack hotshot utiliza una matriz de energía más cara y menos robusta, con la ventaja de que puede forzar más energía a través de un arma láser estándar. Sin embargo, el riesgo de quemar el arma o agotar el pack es mucho mayor.\n\nUna pistola o rifle láser disparando packs hotshot recibe un bonificador de +1 a la Fuerza. Además, si el objetivo es impactado, prenderá fuego con un resultado de 6+. Sin embargo, la tirada de Munición del arma se reduce a 5+ si se dispara un pack hotshot.',
    profiles: []
  },
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
  // ARMADURAS
  // ==================================================
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
  }
, 
// ==================================================
  // VARIOS (MISC)
  // ==================================================
  {
    id: 'archeotech',
    name: 'Archeotech',
    image: 'assets/img/weapons/archeotech.jpg',
    category: 'misc',
    cost: 0,
    costVariable: 'D6x10',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Tipo', valor: 'Tecnología antigua de propósito desconocido' },
      { nombre: 'Valor', valor: 'Igual al D66 de la tabla de Archeotech × 2' },
      { nombre: 'Tabla', valor: 'Tira en la Archeotech Table para descubrir su función' }
    ],
    descripcion: 'Todo tipo de tecnología antigua aparece en el Underhive, desde chatarra corroída sacada de charcas contaminantes hasta artefactos brillantes desenterrados en cúpulas del tesoro olvidadas que datan de la primera colonización. Por ley, todo arqueotech debe venderse al Gremio de Mercaderes tan pronto como se descubra, pero algunas piezas llegan a los puestos proscritos para ser vendidas ilegalmente.\n\nEl problema de comprar arqueotech es que todos los artefactos reconocibles son arrebatados mucho antes de llegar al mercado abierto. El resto es imposible de entender sin mucha examinación y experimentación. A menudo el arqueotech será un cofre sellado o una esfera cromada enigmática, una misteriosa caja negra o una oblea de cristal cambiante. La mayoría no se atreve a trastear con estas cosas, por lo que se venden relativamente baratas, pero no sabes si estás consiguiendo un buen ejemplo de tecnología perdida o un pisapapeles interesante.\n\nSi decides comprar una pieza de arqueotech, tira en la Tabla de Arqueotech para ver qué puede hacer el milagroso dispositivo. Una vez que se descubre el verdadero propósito del arqueotech, también es considerablemente más fácil venderlo.',
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
    descripcion: 'Los chips berserker son pequeñas bio-placas que se adhieren al cráneo mediante un fino pasador en forma de aguja que se introduce directamente en el cerebro. La circuitería del chip se fusiona con la mente del portador y, a comando, puede inundar el cuerpo con adrenalina y otras sustancias químicas.\n\nUna vez por partida, un luchador con un chip berserker implantado puede activarlo al inicio de cualquiera de sus turnos. Si el chip se activa, el modelo gana un bonificador de +2 a sus características de Movimiento y Fuerza y sigue las reglas de frenesí. Los efectos del chip duran hasta el inicio del siguiente turno del luchador. Sin embargo, el uso del chip es agotador, por lo que una vez que sus efectos desaparecen, la Iniciativa del modelo se reduce a 1 durante el resto de la partida.\n\nBionic: Un chip berserker es un biónico, por lo que no se puede retirar una vez implantado en un luchador.',
    profiles: []
  },
  {
    id: 'blade-venom',
    name: 'Blade Venom',
    image: 'assets/img/weapons/blade-venom.jpg',
    category: 'misc',
    cost: 10,
    costVariable: 'D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Una dosis envenera un arma durante una partida' },
      { nombre: 'Armas compatibles', valor: 'Cuchillos, Cadenas/Látigos, Garrotes/Mazos, Armas Masivas, Espadas' },
      { nombre: 'Efecto', valor: 'Los impactos causan D3 heridas en lugar de 1, cuenta como alto impacto' },
      { nombre: 'Riesgo', valor: 'El portador sufre un impacto de F1 por cada pifia' }
    ],
    descripcion: 'Muchas cepas de hongos mutantes que se encuentran en el fondo de la colmena son mortales, como Widowmaker, Scarlet Feng y Grey Lattice. Algunas, como la notoria Black Death, han desarrollado incluso recubrimientos letales al tacto.\n\nEl veneno de hoja se elabora a partir de una variedad de venenos naturales para producir una sustancia púrpura viscosa que matará a un hombre en segundos. Los Ratskins son expertos en su uso.\n\nLas dosis de veneno de hoja se guardan en el alijo de la banda y se distribuyen antes del inicio de una partida a los luchadores que las usarán. Una dosis envenera un arma durante una partida, tras lo cual el veneno pierde su potencia.\n\nEl veneno de hoja solo puede aplicarse útilmente a cuchillos, cadenas o látigos, garrotes, mazos o porras, armas masivas y espadas. Cualquier impacto infligido por un arma recubierta de veneno de hoja causa D3 heridas en lugar de 1 y cuenta como alto impacto. Sin embargo, el modelo sufre un impacto de F1 por cada pifia que saque, que también cuenta como alto impacto. Nota: estos beneficios solo se aplican contra objetivos vivos, no al atacar terreno.',
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
    id: 'bottle-wildsnake',
    name: 'Bottle of Wild Snake',
    image: 'assets/img/weapons/bottle-wildsnake.jpg',
    category: 'misc',
    cost: 10,
    costVariable: 'D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Se consume antes de una partida' },
      { nombre: 'Efecto', valor: 'Toda la banda puede repetir pruebas de nervios y tiradas de Botella fallidas' },
      { nombre: 'Penalización', valor: '-2 Iniciativa a toda la banda durante la partida' },
      { nombre: 'Obligatorio', valor: 'Si sale en búsqueda rara, hay que comprarla si hay créditos' }
    ],
    descripcion: 'Wildsnake es un licor raro y potente elaborado en las badzones, donde tiene un precio a juego. Si pueden encontrarlo, es común que una banda proscrita se emborracha de Wildsnake antes de una pelea — "Coraje de Serpiente", como se llama.\n\nSi envías gangers a buscar objetos raros y sale una botella de Wildsnake, tienes que comprarla (asumiendo que tienes suficientes créditos en el alijo de la banda); los gangers no pueden resistirse al buen licor.\n\nAfortunadamente, un líder astuto todavía puede usar el Wildsnake para instilar un poco de "Coraje de Serpiente" en su banda dándoselo a beber antes de una partida. La botella de Wildsnake se consume y toda la banda puede repetir cualquier prueba de nervios fallida y tiradas de Botella. Lamentablemente, su embriaguez también reduce su característica de Iniciativa en -2. Una vez terminada la partida, las características de la banda vuelven a la normalidad con las correspondientes resacas atroces.',
    profiles: []
  },
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
    descripcion: 'Aunque es posible ocultar cualquier hoja pequeña en tu persona, la hoja oculta es algo un poco diferente. Esta diminuta hoja está astutamente escondida en el talón de una bota especialmente diseñada, o dentro de un pequeño biocompartimento bajo la piel del propietario. La hoja no se utiliza a menos que el dueño sea capturado, en cuyo caso puede usarla para intentar escapar.\n\nUn combatiente capturado puede intentar escapar si tiene una daga oculta. Lanza un D6:\n\n• 1: El luchador es asesinado mientras intenta escapar. La banda que lo captura se queda con su equipo.\n• 2: El combatiente es recapturado inmediatamente.\n• 3: El luchador escapa, pero pierde todas sus armas y equipo ante la banda que lo captura.\n• 4-6: El combatiente escapa junto con sus armas y equipo.\n\nUna hoja oculta solo sirve para un intento de escape.',
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
    id: 'grapnel',
    name: 'Garfio',
    image: 'assets/img/weapons/grapnel.jpg',
    category: 'misc',
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
    id: 'icrotic-slime',
    name: 'Icrotic Slime',
    image: 'assets/img/weapons/icrotic-slime.jpg',
    category: 'drugs',
    cost: 50,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Una sola dosis' },
      { nombre: 'Efecto', valor: 'Al inicio de la partida, tira D6 por cada característica excepto H y Ld' },
      { nombre: 'Tabla D6', valor: '1: sin cambio · 2-3: +1 · 4-5: +2 · 6: +3' },
      { nombre: 'Heridas y Liderazgo', valor: 'Se duplican, máximo 10 cada uno' },
      { nombre: 'Inmunidad', valor: 'Nunca queda fijado por impactos' },
      { nombre: 'Duración', valor: 'Toda la partida' },
      { nombre: 'Efectos secundarios', valor: 'Tira 2D6 al final: 2 = muere; 3-11 = se retira; 12 = se retira y cura heridas graves' }
    ],
    descripcion: 'El icratic slime es un organismo raro y peligroso del Underhive: una bloba transparente viviente del tamaño de un puño. Una bloba madura busca una criatura viviente y se coloca sobre su cabeza, donde es absorbida lentamente a través de la carne hasta el cerebro del huésped.\n\nEfecto: El icratic slime tiene un efecto potente sobre el usuario: los químicos que libera lo hacen más fuerte, más ágil, mejoran sus reflejos y anulan los efectos del shock y el trauma, para que pueda luchar y sobrevivir heridas terribles.\n\nSi un luchador usa el icratic slime, al inicio de la partida tira un D6 en la tabla para cada una de las características del usuario excepto Heridas y Liderazgo:\n\n1: La característica no se ve afectada.\n2-3: Aumenta la característica en +1 punto.\n4-5: Aumenta la característica en +2 puntos.\n6: Aumenta la característica en +3 puntos.\n\nLas características de Heridas y Liderazgo del modelo se duplican, hasta un máximo de 10 cada una. Además, el personaje está tan trastornado por el slime que nunca queda fijado por ningún impacto.\n\nDuración: el icratic slime tiene efecto durante toda la partida, después de lo cual debe retirarse o el receptor morirá. El slime se destruye al retirarse, por lo que solo puede usarse una vez.\n\nEfectos secundarios: Tira 2D6 al final de la partida. Si la tirada es 2, el icratic slime se enquistó antes de que sus camaradas pudieran retirarlo: muere gritando de agonía. Como lado positivo, conservas su equipo y todos estos valiosos bebés icrotic son recogidos y vendidos por 4D6 créditos. Con 3-11 el slime se retira con éxito. Con 12 el slime se retira más el luchador obtuvo algún beneficio: todas sus heridas graves se curan (solo resultados 21-36 y 64-65). Si no tenía heridas, obtiene una tirada gratis en la Tabla de Avance.\n\nUn solo uso: el icratic slime se guarda en el alijo hasta que se usa, tras lo cual se tacha de la hoja.',
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
    id: 'kalma',
    name: 'Kalma',
    image: 'assets/img/weapons/kalma.jpg',
    category: 'drugs',
    cost: 5,
    costVariable: 'D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Fixer', valor: 'Kalma pasa a ser "common" en futuras sesiones de comercio' },
      { nombre: 'Efecto 1', valor: 'Un luchador derribado aumenta la franja de herida leve a 1-3, pero queda fuera de combate al terminar' },
      { nombre: 'Efecto 2', valor: 'Un cautivo tratado como derribado todo el escenario' },
      { nombre: 'Penalización', valor: 'Iniciativa reducida a 1 y reglas de estupidez hasta que termine' },
      { nombre: 'Duración', valor: 'Tira 2D6 + R en cada fase de recuperación. >12 termina' },
      { nombre: 'Uso', valor: 'Una sola dosis' }
    ],
    descripcion: 'Kalma es el nombre que recibe en la colmena un grupo general de sedantes eufóricos que reducen el estado de conciencia e inducen una sensación de bienestar. Estas drogas suelen triturarse y usarse en pequeñas cantidades en la comida. Una tableta de kalma vuelve al individuo dócil y obediente. Un personaje "kalmed" puede ser llevado de aquí para allá y permanecerá pasivo si se le deja solo.\n\nFixer: El resultado "Kalma" en la tabla de Comercio Raro Proscrito indica que has contactado con un individuo que puede suministrarte kalma siempre que comercies a partir de ahora. Esto significa que aunque el kalma aparezca como objeto raro en la tabla de precios, ahora lo tratas como "common".\n\nEfecto: El kalma se puede usar de dos maneras:\n\n1. Un luchador derribado equipado con kalma lo consume: cuando tenga que tirar en la tabla de Heridas, la franja de Herida Leve se aumenta a 1-3. Sin embargo, una vez que los efectos del kalma desaparecen, la sobrecarga repentina de dolor significa que queda automáticamente fuera de combate.\n\n2. Si se alimenta a un cautivo, se le trata igual que un modelo derribado durante todo el escenario (boca abajo, solo 2" por turno), aunque no hace tiradas de recuperación.\n\nEn cualquier caso, los efectos sedantes del kalma significan que un luchador que lo consume tiene su Iniciativa reducida a 1 y sigue las reglas de estupidez hasta que sus efectos desaparezcan.\n\nDuración: Tira 2D6 en cada fase de recuperación y suma la Resistencia del modelo. Si el total es mayor que 12, los efectos del kalma desaparecen; si el total es 12 o menos, el luchador sigue afectado.\n\nEfectos secundarios: No hay efectos secundarios a largo plazo.\n\nUn solo uso: una vez usada una dosis de kalma, se tacha de la hoja de banda.',
    profiles: []
  },
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
    id: 'rad-counter',
    name: 'Rad Counter',
    image: 'assets/img/weapons/rad-counter.jpg',
    category: 'misc',
    cost: 10,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Efecto 1', valor: '+1D6 extra al forrajear en los yermos' },
      { nombre: 'Efecto 2', valor: 'Repetir tirada de ingresos en Rad Zone y solo envenenarse con doble 1' }
    ],
    descripcion: 'Un rad counter es una pieza de tecnología que a menudo se encuentra en forma de amuleto o brazalete. Advierte de emisiones peligrosas de radiación, que normalmente serían invisibles e indetectables, con un cambio de color o un fuerte chasquido.\n\nUn luchador equipado con un rad counter puede moverse por el Underhive con mayor seguridad y explorar sus áreas más contaminadas usando el rad counter para advertirle de los puntos calientes radiactivos.\n\nUn luchador equipado con un rad counter puede tirar un +1D6 extra al forrajear en los yermos. Si un ganger con un rad counter trabaja un territorio Rad Zone, puede repetir los dados de la cantidad de ingresos que recoge y solo sufrirá envenenamiento por radiación con una tirada de doble 1.',
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
    id: 'slaught',
    name: "'Slaught",
    image: 'assets/img/weapons/slaught.jpg',
    category: 'drugs',
    cost: 5,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Fixer', valor: "Tira D6 por sesión: 2+ está disponible el 'slaught" },
      { nombre: 'Efecto', valor: '+D3 Iniciativa y +D3 Habilidad de Arma (HB no se ve afectada)' },
      { nombre: 'Duración', valor: 'Tira 2D6 + R en cada fase de recuperación. >12 termina' },
      { nombre: 'Adicción', valor: 'Con doble 1 en la tirada de duración, el modelo se vuelve dependiente' },
      { nombre: 'Uso', valor: 'Una sola dosis por partida' }
    ],
    descripcion: "'Slaught se conoce oficialmente como Onslaught y es una droga de combate cruda hecha de una peligrosa combinación de glándulas de rata mutante y varios compuestos de adrenalina sintética. 'Slaught mejora las habilidades de lucha del individuo: aumenta la alerta y la velocidad, aparentemente ralentizando el mundo al aumentar la conciencia mental de una persona. Si no fuera por sus desafortunados efectos secundarios, sería una droga de combate ideal.\n\nFixer: Como el kalma, el resultado \"'Slaught\" en la tabla de Comercio Raro Proscrito indica que has contactado con un individuo que puede suministrarte 'slaught siempre que comercies a partir de ahora. Tira un D6 en cada sesión de comercio: con 2+ el 'slaught está disponible, con cualquier otro resultado no.\n\nEfecto: Un modelo puede tomar una dosis de 'slaught antes del inicio de una partida. 'Slaught aumenta la Iniciativa y la Habilidad de Arma del usuario en D3 puntos cada una; la Habilidad Ballística no se ve afectada. Cuando los efectos desaparecen, las habilidades de lucha vuelven a la normalidad.\n\nDuración: Tira 2D6 en cada fase de recuperación y suma la Resistencia del modelo. Si el total es 12 o menos, el modelo sigue afectado por la dosis. Si el total es mayor que 12, la dosis desaparece, el modelo se derrumba, cuenta como fijado y ya no está bajo la influencia de la droga.\n\nEfectos secundarios: Cada vez que se hace la tirada de 2D6 para la duración hay una posibilidad de que el modelo se vuelva adicto. Con un doble 1, el modelo se ha vuelto dependiente. Un personaje dependiente ya no obtiene ningún beneficio de la droga pero debe seguir tomándola en el futuro o sufrirá efectos perjudiciales.\n\nUn solo uso: el 'slaught se guarda en el alijo de la banda hasta que se usa, tras lo cual se tacha de la hoja.",
    profiles: []
  },
  {
    id: 'spook',
    name: 'Spook',
    image: 'assets/img/weapons/spook.jpg',
    category: 'drugs',
    cost: 15,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Una sola dosis' },
      { nombre: 'Efecto', valor: 'Otorga temporalmente un poder Wyrd menor' },
      { nombre: 'Generación', valor: 'Tira D66 en la tabla de Poderes Menores Wyrd' },
      { nombre: 'Duración', valor: 'Toda la partida' },
      { nombre: 'Riesgo', valor: 'Tira Perils of the Warp con cualquier doble' }
    ],
    descripcion: 'El Spook se extrae de ciertos depósitos de synθidiet descompuestos o "raw spook". El synθidiet descompuesto fue arrojado hace miles de años y ocasionalmente se descubren alijos en el Underhive o en los yermos de ceniza por carroñeros y ratskins. El synθidiet original probablemente fue reciclado de los cuerpos de hivers muertos en tiempos de escasez de comida.\n\nEfecto: Una dosis de spook otorgará temporalmente a un modelo un poder Wyrd menor. Genera el poder tirando D66 en la tabla de Poderes Menores Wyrd al inicio de la partida. Esto puede resultar en un poder inútil por sí solo, o de hecho ningún poder en absoluto. Si se tira un resultado de Poder Primario Extra, puedes elegir en qué tabla de Poderes Primarios tirar, o controlar D3 mascotas siguiendo las reglas habituales de Beastmaster. Tomar spook no es lo que llamarías ciencia exacta. Incluso si el mismo modelo toma spook dos veces seguidas, no obtendrá el mismo poder.\n\nDuración: Una sola dosis de spook dura toda la partida.\n\nEfectos secundarios: Igual que los Wyrds, los ataques demoníacos pueden ocurrir cada vez que el consumidor usa su poder siguiendo las reglas de Perils of the Warp. Sin embargo, para reflejar que el consumidor no tiene defensas mentales inherentes, al intentar usar el poder debe tirar por Perils of the Warp si saca cualquier doble.\n\nUn solo uso: el spook se guarda en el alijo de la banda hasta que se usa. Una vez usada la dosis, se tacha de la hoja de banda.',
    profiles: []
  },
  {
    id: 'spur',
    name: 'Spur',
    image: 'assets/img/weapons/spur.jpg',
    category: 'drugs',
    cost: 5,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Fixer', valor: 'Tira D6 por sesión: 4+ está disponible el spur' },
      { nombre: 'Efecto', valor: 'Tira D6 en la tabla de Spur para determinar efectos' },
      { nombre: 'Tabla D6', valor: '1: sin efecto · 2-3: +D3 M e I · 4-5: +3 M e I, -1 R · 6: +D6 I y HA, +D3 HB y M' },
      { nombre: 'Duración', valor: 'Tira 2D6 + R en cada fase de recuperación. >12 termina' },
      { nombre: 'Uso', valor: 'Una sola dosis por partida' }
    ],
    descripcion: 'El nombre spur se da a varios estimulantes similares. Spur tiene algunos efectos secundarios inusuales que desaniman a la mayoría de los individuos a usarlo. Tomar spur implica riesgos adicionales porque no todo el spur es igual, y la potencia de cualquier efecto secundario no puede juzgarse con precisión.\n\nFixer: Como el kalma, el resultado "Spur" en la tabla de Comercio Raro Proscrito indica que has contactado con un individuo que puede suministrarte spur ocasionalmente siempre que comercies a partir de ahora. Tira un D6 en cada sesión: con 4+ el spur está disponible, con cualquier otro resultado no.\n\nEfecto: Un modelo puede tomar una dosis de spur antes del inicio de una partida. Tira un D6 en la tabla para determinar sus efectos:\n\n1: El lote es viejo o malo y no tiene efecto.\n2-3: Aumenta Movimiento e Iniciativa en +D3.\n4-5: Aumenta Movimiento e Iniciativa en +3 puntos, pero sensibiliza el sistema nervioso del personaje, de modo que un shock físico repentino puede dejarlo inconsciente. Para representar esto, la Resistencia del modelo se reduce en -1 punto mientras dure el spur.\n6: Aumenta la Iniciativa y la Habilidad de Arma del personaje en +D6 puntos cada una, Habilidad Ballística y Movimiento en +D3 puntos cada una. Como resultado de la condición nerviosa hiperactiva del personaje, cae derribado durante un turno entero tan pronto como la droga desaparece, tras lo cual se recupera automáticamente.\n\nDuración: Tira 2D6 en cada fase de recuperación y suma la Resistencia del modelo. Si el total es 12 o menos, el modelo sigue afectado por la dosis. Si es mayor que 12, la dosis desaparece.\n\nEfectos secundarios: No hay efectos secundarios a largo plazo.\n\nUn solo uso: el spur se guarda en el alijo hasta que se usa, tras lo cual se tacha de la hoja.',
    profiles: []
  },
  {
    id: 'stinger-mould-patch',
    name: 'Stinger Mould Patch',
    image: 'assets/img/weapons/stinger-mould-patch.jpg',
    category: 'misc',
    cost: 20,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Un solo uso' },
      { nombre: 'Efecto 1', valor: 'Repetir un resultado "Muerto" en la tabla de Heridas Graves' },
      { nombre: 'Efecto 2', valor: 'Curar una herida grave existente (resultados 21-36 y 64-65)' }
    ],
    descripcion: 'El stinger mould es un hongo raro y precioso que solo se encuentra en áreas donde los residuos radiactivos se mezclan con aguas residuales orgánicas a cierta temperatura. El moho florece en cuestión de horas, se hincha y luego explota esparciendo sus peligrosas esporas venenosas en las corrientes de aire. El moho luego se marchita y muere. Si el moho se cosecha antes de que madure, sus esporas pueden convertirse en una pasta curativa que estimula enormemente la tasa de curación del cuerpo.\n\nUn parche de stinger mould se puede usar de dos maneras:\n\n1. Repetir un resultado "Muerto" en la Tabla de Heridas Graves.\n2. Curar una herida grave existente, aunque solo son aplicables los resultados de herida grave entre 21-36 y 64-65 (ej. Heridas en la Pierna).\n\nEl stinger mould se guarda en el alijo de la banda hasta que se usa, tras lo cual se tacha de la hoja de banda.',
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
    id: 'sump-dynamo',
    name: 'Sump Dynamo',
    image: 'assets/img/weapons/sump-dynamo.jpg',
    category: 'misc',
    cost: 40,
    costVariable: '4D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Uso', valor: 'Activar al inicio de la secuencia post-partida' },
      { nombre: 'Efecto', valor: 'Tira D6 en la tabla de Sump Dynamo' },
      { nombre: 'Resultado 1', valor: 'Explota: el escondite pasa a ser Scrofulous Wastes' },
      { nombre: 'Resultado 2', valor: 'El escondite pasa a ser Power Cable Tap' },
      { nombre: 'Resultado 3-5', valor: 'El escondite pasa a ser Outpost' },
      { nombre: 'Resultado 6', valor: 'El escondite pasa a ser Outlaw Settlement (30 créditos al trabajarlo)' }
    ],
    descripcion: 'El sump dynamo cubre una variedad de cachivaches destartalados diseñados para producir un suministro limitado de energía transmutando desechos. Desafortunadamente, sus diseños crudos no son una ciencia exacta, así que una banda nunca puede estar segura de su fiabilidad.\n\nUna banda puede activar el sump dynamo al inicio de la secuencia post-partida. Si se activa, tira un D6:\n\n1: El artefacto explota esparciendo efluentes. El escondite de la banda ahora son Scrofulous Wastes.\n2: El escondite de la banda ahora es un Power Cable Tap.\n3-5: El escondite de la banda ahora es un Outpost.\n6: La banda establece un Outlaw Settlement. Este se comporta como un Asentamiento normal, pero los proscritos generan los 30 créditos completos si se trabaja.\n\nLos sump dynamos se guardan en el alijo de la banda hasta que se usan. Una vez usado, debe tacharse de la hoja de banda.',
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


  // ==================================================
  // PIT SLAVE WEAPONS (exclusivas)
  // ==================================================
  {
    id: 'buzz-saw',
    name: 'Sierra Circular',
    image: 'assets/img/weapons/buzz-saw.jpg',
    category: 'pit-slave',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '5', PA: '-3', D: '1', saveMod: '-', rules: 'Ruidoso' }
    ]
  },
  {
    id: 'chainsaw',
    name: 'Motosierra',
    image: 'assets/img/weapons/chainsaw.jpg',
    category: 'pit-slave',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-1', D: '1', saveMod: '-', rules: 'Parada, Ruidoso' }
    ]
  },
  {
    id: 'claw',
    name: 'Garra',
    image: 'assets/img/weapons/claw.jpg',
    category: 'pit-slave',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-1', D: '1', saveMod: '-', rules: 'Arrojar' }
    ]
  },
  {
    id: 'hammer',
    name: 'Martillo',
    image: 'assets/img/weapons/hammer.jpg',
    category: 'pit-slave',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-1', D: '1', saveMod: '-', rules: 'Rompehuesos' }
    ]
  },
  {
    id: 'rock-drill',
    name: 'Taladro',
    image: 'assets/img/weapons/rock-drill.jpg',
    category: 'pit-slave',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-3', D: '1', saveMod: '-', rules: 'Perforación Continua' }
    ]
  },
  {
    id: 'shears',
    name: 'Cizallas',
    image: 'assets/img/weapons/shears.jpg',
    category: 'pit-slave',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    profiles: [
      { label: 'Normal', F: '4', PA: '-1', D: '1', saveMod: '-', rules: 'Decapitar' }
    ]
  },
  {
    id: 'armour-plates',
    name: 'Placas de Armadura',
    image: 'assets/img/weapons/armour-plates.jpg',
    category: 'armor',
    cost: 10,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    armourSave: '6+',
    armourPlates: true,
    armourPlatesMax: 3,
    armourPlatesStack: ['6+', '5+', '4+'],
    penalizaciones: { I: -1 },
    propiedades: [
      { nombre: 'Salvación de Armadura', valor: '6+ con 1 placa, 5+ con 2 placas, 4+ con 3 placas' },
      { nombre: 'Iniciativa', valor: '-1 por placa (mínimo 1)' },
      { nombre: 'Limitación', valor: 'No se combina con malla, flak o caparazón' }
    ],
    descripcion: 'Los esclavos del foso a menudo fabrican toscas placas de armadura a partir de restos de chatarra. Ofrecen una protección efectiva pero son pesadas y difíciles de llevar. Los miembros de una banda de Esclavos del Foso pueden llevar hasta tres placas de armadura. Cada placa adicional mejora la salvación de armadura: 1 placa otorga 6+, 2 placas otorgan 5+ y 3 placas otorgan 4+. Sin embargo, cada placa reduce la Iniciativa del Esclavo del Foso en -1, hasta un mínimo de 1. Las placas de armadura no pueden combinarse con armadura flak, malla o caparazón.',
    profiles: []
  },
  {
    id: 'tool-upgrade',
    name: 'Mejora de Herramienta',
    image: 'assets/img/weapons/tool-upgrade.jpg',
    category: 'ammo',
    cost: 15,
    free: false,
    removable: true,
    purchasable: true,
    exclusiveTo: 'pitslaves',
    rarity: 'common',
    propiedades: [
      { nombre: 'Efecto', valor: '+1 Fuerza y +1 Modificador de Salvación al arma de foso que se aplique' },
      { nombre: 'Acumulable', valor: 'Cualquier número por arma' },
      { nombre: 'Reasignable', valor: 'Se puede mover entre armas tras la partida' }
    ],
    descripcion: 'Los esclavos del foso a menudo canibalizan maquinaria para mejorar sus armas cibernéticas. Las puntas de las herramientas se reemplazan por versiones más grandes y destructivas, o se aumentan con motores sobrealimentados. Las armas de foso pueden equiparse con cualquier número de mejoras de herramienta, cada una otorgando un bonificador de +1 a su Fuerza y Modificador de Salvación. Las mejoras de herramienta pueden reasignarse libremente entre armas durante la secuencia posterior a la partida como cualquier otro objeto.',
    profiles: []
  }
];

// ==================================================
// HELPERS
// ==================================================

/**
 * Devuelve un arma del catálogo Outlaw por su ID.
 * @param {string} id - ID del arma
 * @returns {object|null} el arma o null si no existe
 */
function getOutlawWeaponById(id) {
  return OUTLAW_WEAPONS.find(w => w.id === id);
}

/**
 * Devuelve todas las armas Outlaw de una categoría.
 */
function getOutlawWeaponsByCat(catId) {
  return OUTLAW_WEAPONS.filter(w => w.category === catId);
}

/**
 * Devuelve todas las armas Outlaw comprables.
 */
function getOutlawWeaponsPurchasable() {
  return OUTLAW_WEAPONS.filter(w => w.purchasable);
}

/**
 * Devuelve el label de categoría Outlaw.
 */
function getOutlawWeaponCategoryLabel(catId) {
  return OUTLAW_WEAPON_CATEGORIES[catId]?.label || catId;
}

/**
 * Devuelve el icono de categoría Outlaw.
 */
function getOutlawWeaponCategoryIcon(catId) {
  return OUTLAW_WEAPON_CATEGORIES[catId]?.icon || '❓';
}

/**
 * Formatea el coste de un arma Outlaw.
 */
function formatOutlawWeaponCost(weapon) {
  if (weapon.free) return 'Gratis';
  if (weapon.costVariable) return `${weapon.cost} + ${weapon.costVariable}`;
  return `${weapon.cost} créditos`;
}

/**
 * Equipa un arma Outlaw a un luchador.
 * Usa la misma lógica que equipWeapon pero con el catálogo Outlaw.
 */
function equipOutlawWeapon(fighter, weaponId) {
  if (!fighter.equipment) fighter.equipment = [];
  const weapon = getOutlawWeaponById(weaponId);
  if (!weapon) return false;

  // ¿Es una armadura FÍSICA (no placa) y ya hay otra puesta?
  if (weapon.category === 'armor' && weapon.armourSave && !weapon.armourPlates) {
    const hasPhysicalArmour = fighter.equipment.some(eq => {
      const w = getOutlawWeaponById(eq.weaponId);
      return w && w.category === 'armor' && w.armourSave && !w.armourPlates;
    });
    if (hasPhysicalArmour) return false;
  }

  // ¿Es una placa de armadura (acumulable)?
  if (weapon.armourPlates) {
    const plateCount = fighter.equipment.filter(eq => {
      const w = getOutlawWeaponById(eq.weaponId);
      return w && w.armourPlates;
    }).length;

    if (plateCount >= 3) return false;

    const hasPhysicalArmour = fighter.equipment.some(eq => {
      const w = getOutlawWeaponById(eq.weaponId);
      return w && w.category === 'armor' && w.armourSave && !w.armourPlates;
    });
    if (hasPhysicalArmour) return false;
  }

  // ¿Queremos meter armadura física y ya hay placas?
  if (weapon.category === 'armor' && weapon.armourSave && !weapon.armourPlates) {
    const hasPlates = fighter.equipment.some(eq => {
      const w = getOutlawWeaponById(eq.weaponId);
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

// ==================================================
// FUSIÓN CON EL CATÁLOGO DE NECROMUNDA?
// ==================================================
// NO se fusiona. Este catálogo es independiente.