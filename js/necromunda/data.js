/* ==================================================
   DATOS: CASAS Y TIPOS DE LUCHADOR
   ================================================== */

// ---------- TIPOS DE LUCHADOR (compartidos por las 6 casas grandes) ----------
const FIGHTER_TYPES = [
  {
    id: 'leader',
    name: 'Líder',
    cost: 120,
    stats: { M: 4, HA: 4, HB: 4, F: 3, R: 3, H: 1, I: 4, A: 1, Ld: 8 },
    max: 1,
    special: ['Independiente', 'Líder']
  },
  {
    id: 'heavy',
    name: 'Heavy',
    cost: 60,
    stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
    max: 2,
    special: []
  },
  {
    id: 'ganger',
    name: 'Ganger',
    cost: 50,
    stats: { M: 4, HA: 3, HB: 3, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 7 },
    max: null,
    special: []
  },
  {
    id: 'juve',
    name: 'Juve',
    cost: 25,
    stats: { M: 4, HA: 2, HB: 2, F: 3, R: 3, H: 1, I: 3, A: 1, Ld: 6 },
    max: null,
    special: []
  }
];

// ---------- CASAS ----------
const HOUSES = [
  {
    id: 'orlock',
    name: 'Casa Orlock',
    org: 'El Sindicato de los Hierros',
    color: '#d97706',
    image: 'assets/img/houses/orlock.jpg',
    bigHouse: true,
    desc: 'El Sindicato de los Hierros es una empresa criminal organizada que controla el comercio de chatarra, escolta caravanas y cobra peajes a punta de pistola. Sus matones son leales, brutales y conocen cada rincón del Underhive.'
  },
  {
    id: 'escher',
    name: 'Casa Escher',
    org: 'El Cónclave de Químicos',
    color: '#a855f7',
    image: 'assets/img/houses/escher.jpg',
    bigHouse: true,
    desc: 'El Cónclave de Químicos es un cartel que trafica con drogas experimentales, venenos y estimulantes de combate. Sus guerreras son tan letales con una daga como con una jeringuilla, y su reputación precede a cualquier negociación.'
  },
  {
    id: 'goliath',
    name: 'Casa Goliath',
    org: 'La Horda de Forjados',
    color: '#dc2626',
    image: 'assets/img/houses/goliath.jpg',
    bigHouse: true,
    desc: 'La Horda de Forjados es una tribu de fanáticos que adoran la fuerza bruta, se automutilan en rituales de acero y desprecian toda tecnología que no sea un arma o una armadura. Para ellos, la única ley es la del más fuerte.'
  },
  {
    id: 'vansaar',
    name: 'Casa Van Saar',
    org: 'El Cónclave Tecnológico',
    color: '#06b6d4',
    image: 'assets/img/houses/vansaar.jpg',
    bigHouse: true,
    desc: 'El Cónclave Tecnológico es una secta de tecnófilos que veneran un STC corrupto y buscan la trascendencia a través de la fusión hombre-máquina. Sus artesanos son los mejores del Underhive, pero también los más peligrosos.'
  },
  {
    id: 'delaque',
    name: 'Casa Delaque',
    org: 'La Red de Espías',
    color: '#6b21a8',
    image: 'assets/img/houses/delaque.jpg',
    bigHouse: true,
    desc: 'La Red de Espías es una agencia de inteligencia clandestina que vende secretos, elimina objetivos y manipula a todas las demás facciones desde la oscuridad. Nadie sabe realmente quién está en su nómina.'
  },
  {
    id: 'cawdor',
    name: 'Casa Cawdor',
    org: 'La Congregación de Cawdor',
    color: '#991b1b',
    image: 'assets/img/houses/cawdor.jpg',
    bigHouse: true,
    desc: 'La Congregación de Cawdor es una comunidad de fieles que sobrevive en la miseria más absoluta, convencida de que la pobreza es la única forma de alcanzar la salvación. Sus miembros recorren el Underhive recogiendo chatarra, predicando la palabra del Emperador y castigando a los que consideran pecadores.'
  },
  {
    id: 'redemptionists',
    name: 'Redencionistas',
    org: 'La Cruzada de Redencionistas',
    color: '#f59e0b',
    image: 'assets/img/houses/redemptionists.jpg',
    bigHouse: false,
    desc: 'La Cruzada de Redencionistas es una turba sagrada que quema herejes, mutantes y pecadores en nombre del Emperador. No buscan riquezas ni territorio, solo la purificación por el fuego.'
  },
  {
    id: 'scavvies',
    name: 'Carroñeros',
    org: 'El Enjambre de Scavvies',
    color: '#65a30d',
    image: 'assets/img/houses/scavvies.jpg',
    bigHouse: false,
    desc: 'El Enjambre de Scavvies es una horda de mutantes caníbales que veneran al Abuelo Nurgle y se multiplican como una plaga. Sobreviven en los rincones más pestilentes del Underhive, devorando todo lo que encuentran.'
  },
  {
    id: 'ratskins',
    name: 'Renegados Ratskin',
    org: 'La Tribu Renegada',
    color: '#a16207',
    image: 'assets/img/houses/ratskins.jpg',
    bigHouse: false,
    desc: 'La Tribu Renegada es un culto vengativo que invoca espíritus del Underhive, maldice a los invasores y libra una guerra santa contra toda civilización. Conocen la colmena mejor que nadie y no perdonan a quien la profana.'
  },
  {
    id: 'pitslaves',
    name: 'Esclavos del Foso',
    org: 'La Revuelta de Esclavos',
    color: '#0891b2',
    image: 'assets/img/houses/pitslaves.jpg',
    bigHouse: false,
    desc: 'La Revuelta de Esclavos es un ejército de gladiadores cibernéticos que buscan venganza contra sus antiguos amos y liberar a todos los oprimidos del Underhive. Sus cadenas rotas son su estandarte.'
  },
  {
    id: 'spyrers',
    name: 'Cazadores Spyrers',
    org: 'El Aquelarre de Spyrers',
    color: '#7c3aed',
    image: 'assets/img/houses/spyrers.jpg',
    bigHouse: false,
    desc: 'El Aquelarre de Spyrers es una partida de nobles corruptos que han perdido toda humanidad, cazando a los habitantes del Underhive por deporte mientras sus trajes los consumen desde dentro. Para ellos, la caza nunca termina.'
  },
  {
    id: 'enforcers',
    name: 'Enforcers',
    org: 'El Escuadrón de la Muerte',
    color: '#1e40af',
    image: 'assets/img/houses/enforcers.jpg',
    bigHouse: false,
    desc: 'El Escuadrón de la Muerte es un grupo de vigilantes despiadados que aplican la "justicia" sin juicio, ejecutando a cualquiera que consideren culpable. La ley es su excusa; el poder, su objetivo.'
  },
  {
    id: 'genestealer',
    name: 'Cultos Genestealer',
    org: 'El Culto Genestealer',
    color: '#7e22ce',
    image: 'assets/img/houses/genestealer.jpg',
    bigHouse: false,
    desc: 'El Culto Genestealer es una célula durmiente que conspira para la llegada de los Dioses Estelares. Sus miembros parecen ciudadanos ejemplares, pero bajo la piel son tan alienígenas como el Patriarca que los engendró.'
  },
  {
    id: 'chaos',
    name: 'Cultos del Caos',
    org: 'El Culto del Caos',
    color: '#7f1d1d',
    image: 'assets/img/houses/chaos.jpg',
    bigHouse: false,
    desc: 'El Culto del Caos es una secta fanática que venera a uno de los cuatro Dioses Ruinosos. Sus miembros han renunciado a su humanidad a cambio de poder, y su único propósito es sembrar la corrupción y la destrucción.'
  },
  {
    id: 'nomads',
    name: 'Nómadas del Yermo',
    org: 'La Horda Nómada',
    color: '#78716c',
    image: 'assets/img/houses/nomads.jpg',
    bigHouse: false,
    desc: 'La Horda Nómada es una tribu de saqueadores que devora todo a su paso, adorando a los espíritus de la tormenta de ceniza y considerando a todos los demás como simples presas. El desierto es suyo, y quien lo cruce sin permiso, muere.'
  }
];

// ---------- REPUTACIÓN (de momento solo desconocido) ----------
const REPUTATION_LEVELS = [
  { min: 0, name: 'Desconocido' }
];

// ---------- CONSTANTES DE CAMPAÑA ----------
const STARTING_CREDITS = 1000;
const MIN_FIGHTERS = 3;

// ---------- HELPERS ----------
function getHouseById(id) {
  return HOUSES.find(h => h.id === id);
}

function getFighterTypeById(id, houseId) {
  // Si nos pasan casa, buscamos primero ahí (tipos propios)
  if (houseId) {
    const houseData = getHouseData(houseId);
    if (houseData && houseData.fighterTypes) {
      const own = houseData.fighterTypes.find(t => t.id === id);
      if (own) return own;
    }
  }
  // Fallback: tipos comunes
  return FIGHTER_TYPES.find(t => t.id === id);
}

function getReputationName(points) {
  let current = REPUTATION_LEVELS[0];
  for (const level of REPUTATION_LEVELS) {
    if (points >= level.min) current = level;
  }
  return current.name;
}

/**
 * Devuelve los tipos de luchador disponibles para una casa.
 * - Las 6 casas grandes usan los tipos comunes (FIGHTER_TYPES)
 * - Las casas no grandes pueden tener tipos propios (en houseData.fighterTypes)
 */
function getFighterTypesForHouse(houseId) {
  const houseData = getHouseData(houseId);

  // Si la casa tiene tipos propios definidos, los usamos
  if (houseData && houseData.fighterTypes && houseData.fighterTypes.length > 0) {
    return houseData.fighterTypes;
  }

  // Si no, usamos los tipos comunes (6 grandes)
  const house = getHouseById(houseId);
  if (!house) return [];
  return house.bigHouse ? FIGHTER_TYPES : [];
}

// ---------- TABLA DE EXPERIENCIA / TÍTULOS ----------
const XP_LEVELS = [
  { level: 1,  min: 0,   max: 5,    title: 'Juvenil Verde' },
  { level: 2,  min: 6,   max: 10,   title: 'Juvenil' },
  { level: 3,  min: 11,  max: 15,   title: 'Juvenil' },
  { level: 4,  min: 16,  max: 20,   title: 'Juvenil Experto' },
  { level: 5,  min: 21,  max: 30,   title: 'Pandillero Novato' },
  { level: 6,  min: 31,  max: 40,   title: 'Pandillero' },
  { level: 7,  min: 41,  max: 50,   title: 'Pandillero' },
  { level: 8,  min: 51,  max: 60,   title: 'Pandillero' },
  { level: 9,  min: 61,  max: 80,   title: 'Campeón de la Banda' },
  { level: 10, min: 81,  max: 100,  title: 'Campeón de la Banda' },
  { level: 11, min: 101, max: 120,  title: 'Campeón de la Banda' },
  { level: 12, min: 121, max: 140,  title: 'Campeón de la Banda' },
  { level: 13, min: 141, max: 160,  title: 'Campeón de la Banda' },
  { level: 14, min: 161, max: 180,  title: 'Campeón de la Banda' },
  { level: 15, min: 181, max: 200,  title: 'Campeón de la Banda' },
  { level: 16, min: 201, max: 240,  title: 'Héroe de la Banda' },
  { level: 17, min: 241, max: 280,  title: 'Héroe de la Banda' },
  { level: 18, min: 281, max: 320,  title: 'Héroe de la Banda' },
  { level: 19, min: 321, max: 360,  title: 'Héroe de la Banda' },
  { level: 20, min: 361, max: 400,  title: 'Héroe de la Banda' },
  { level: 21, min: 401, max: 9999, title: 'Pandillero Poderoso' }
];


// ---------- HELPERS DE EXPERIENCIA ----------

/**
 * Devuelve el título correspondiente a un valor de PX
 */
function getXPTitle(xp) {
  const level = XP_LEVELS.find(l => xp >= l.min && xp <= l.max);
  return level ? level.title : XP_LEVELS[XP_LEVELS.length - 1].title;
}

/**
 * Comprueba si el luchador ha alcanzado el máximo (401+ PX)
 */
function isMaxLevel(xp) {
  return xp >= 401;
}

/**
 * Devuelve el número de nivel (1-21) según el PX.
 */
function getLevelNumber(xp) {
  const level = XP_LEVELS.find(l => xp >= l.min && xp <= l.max);
  return level ? level.level : XP_LEVELS[XP_LEVELS.length - 1].level;
}

/**
 * Cuenta cuántos avances ha ganado un luchador desde su PX inicial.
 * Cada NIVEL superado (desde initialXP hasta xp) = 1 avance.
 */
function getTotalAdvancesEarned(currentXP, initialXP) {
  const startLevel = getLevelNumber(initialXP || 0);
  const currentLevel = getLevelNumber(currentXP || 0);
  return Math.max(0, currentLevel - startLevel);
}

/**
 * Cuántos avances ya ha gastado el luchador
 */
function getAdvancesTaken(fighter) {
  return fighter.advancesTaken || 0;
}

/**
 * Avances pendientes = ganados - gastados
 */
function getPendingAdvances(fighter) {
  const earned = getTotalAdvancesEarned(fighter.xp || 0, fighter.initialXP || 0);
  const taken = getAdvancesTaken(fighter);
  return Math.max(0, earned - taken);
}

/**
 * Devuelve cuántos PX faltan para el siguiente cambio de nivel.
 */
function getXPToNextAdvance(xp) {
  const current = XP_LEVELS.find(l => xp >= l.min && xp <= l.max);
  if (!current) return null;
  const next = XP_LEVELS.find(l => l.level === current.level + 1);
  return next ? next.min - xp : null;
}
// ==================================================
// MÁXIMOS DE CARACTERÍSTICAS (iguales para todas las casas)
// ==================================================
const STAT_MAXIMUMS = {
  M: 4,
  HA: 6,
  HB: 6,
  F: 4,
  R: 4,
  H: 3,
  I: 6,
  A: 3,
  Ld: 9
};

// Nombres completos para mostrar en pantalla
const STAT_NAMES = {
  M: 'Movimiento',
  HA: 'Habilidad Arma',
  HB: 'Habilidad Ballística',
  F: 'Fuerza',
  R: 'Resistencia',
  H: 'Heridas',
  I: 'Iniciativa',
  A: 'Ataques',
  Ld: 'Liderazgo'
};

// ==================================================
// TABLAS DE HABILIDADES (7 tablas × 6 habilidades)
// ==================================================
const SKILL_TABLES = {
  agility: {
    name: 'Agilidad',
    skills: [
      { id: 'catfall', name: 'Caída Felina' },
      { id: 'dodge', name: 'Esquiva' },
      { id: 'jump-back', name: 'Salto Atrás' },
      { id: 'leap', name: 'Salto' },
      { id: 'quick-witted', name: 'Ingenio Rápido' },
      { id: 'sprint', name: 'Esprint' }
    ]
  },
  combat: {
    name: 'Combate',
    skills: [
      { id: 'combat-master', name: 'Maestro del Combate' },
      { id: 'disarm', name: 'Desarme' },
      { id: 'feint', name: 'Finta' },
      { id: 'deflect', name: 'Desvío' },
      { id: 'counter-attack', name: 'Contraataque' },
      { id: 'step-aside', name: 'Apartarse' }
    ]
  },
  ferocity: {
    name: 'Ferocidad',
    skills: [
      { id: 'berserk-charge', name: 'Carga Berserker' },
      { id: 'impetuous', name: 'Impetuoso' },
      { id: 'iron-will', name: 'Voluntad de Hierro' },
      { id: 'killer-reputation', name: 'Reputación de Asesino' },
      { id: 'nerves-of-steel', name: 'Nervios de Acero' },
      { id: 'true-grit', name: 'Agallas Verdaderas' }
    ]
  },
  muscle: {
    name: 'Músculo',
    skills: [
      { id: 'body-slam', name: 'Embestida Corporal' },
      { id: 'bulging-biceps', name: 'Bíceps Abultados' },
      { id: 'hard-as-nails', name: 'Duro como Clavos' },
      { id: 'juggernaut', name: 'Coloso' },
      { id: 'hurl-opponent', name: 'Lanzar Oponente' },
      { id: 'iron-jaw', name: 'Mandíbula de Hierro' }
    ]
  },
  shooting: {
    name: 'Disparo',
    skills: [
      { id: 'crack-shot', name: 'Tirador Experto' },
      { id: 'fast-shot', name: 'Disparo Rápido' },
      { id: 'gunfighter', name: 'Pistolero' },
      { id: 'hip-shooting', name: 'Disparo a la Cadera' },
      { id: 'marksman', name: 'Francotirador' },
      { id: 'rapid-fire', name: 'Fuego Rápido' }
    ]
  },
  stealth: {
    name: 'Sigilo',
    skills: [
      { id: 'ambush', name: 'Emboscada' },
      { id: 'dive', name: 'Zambullida' },
      { id: 'escape-artist', name: 'Artista del Escape' },
      { id: 'evade', name: 'Evasión' },
      { id: 'infiltration', name: 'Infiltración' },
      { id: 'sneak-up', name: 'Acercamiento Sigiloso' }
    ]
  },
  techno: {
    name: 'Tecnología',
    skills: [
      { id: 'armourer', name: 'Armero' },
      { id: 'fixer', name: 'Arreglador' },
      { id: 'inventor', name: 'Inventor' },
      { id: 'medic', name: 'Médico' },
      { id: 'specialist', name: 'Especialista' },
      { id: 'weaponsmith', name: 'Herrero de Armas' }
    ]
  }
};

// ==================================================
// RESTRICCIONES DE HABILIDADES POR CASA Y TIPO
// ==================================================
const HOUSE_SKILL_ACCESS = {
  cawdor: {
    juve:   ['ferocity', 'muscle'],
    ganger: ['agility', 'combat', 'ferocity'],
    heavy:  ['ferocity', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'stealth', 'techno']
  },
  escher: {
    juve:   ['agility', 'combat'],
    ganger: ['agility', 'combat', 'stealth'],
    heavy:  ['agility', 'muscle', 'shooting', 'stealth', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  },
  delaque: {
    juve:   ['shooting', 'stealth'],
    ganger: ['agility', 'shooting', 'stealth'],
    heavy:  ['muscle', 'shooting', 'stealth'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'stealth', 'techno']
  },
  goliath: {
    juve:   ['ferocity', 'muscle'],
    ganger: ['combat', 'ferocity', 'muscle'],
    heavy:  ['combat', 'muscle'],
    leader: ['agility', 'combat', 'ferocity', 'muscle', 'shooting', 'stealth', 'techno']
  },
  orlock: {
    juve:   ['ferocity', 'shooting'],
    ganger: ['combat', 'ferocity', 'shooting'],
    heavy:  ['combat', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  },
  vansaar: {
    juve:   ['combat', 'shooting'],
    ganger: ['combat', 'shooting', 'techno'],
    heavy:  ['combat', 'muscle', 'shooting', 'techno'],
    leader: ['agility', 'combat', 'ferocity', 'shooting', 'stealth', 'techno']
  }
};

// ==================================================
// HELPERS DE HABILIDADES
// ==================================================

/**
/**
 * Devuelve las tablas de habilidad permitidas para un luchador.
 * Lee de window.HOUSE_DATA_* (el sistema actual), no de la lista antigua.
 * @param {string} houseId  - id de la casa (ej: 'goliath', 'pitslaves')
 * @param {string} typeId   - tipo de luchador (juve/ganger/heavy/leader/chief/techno/pit-slave/pit-fighter)
 * @returns {string[]} array de ids de tablas permitidas
 */
function getAvailableSkillTables(houseId, typeId) {
  const access = getHouseSkillAccess(houseId);
  return access[typeId] || [];
}

/**
 * Devuelve todas las tablas (para tiradas de 2 o 12, sin restricciones)
 */
function getAllSkillTables() {
  return Object.keys(SKILL_TABLES);
}

/**
 * Devuelve una habilidad concreta por tabla e id
 */
function getSkillById(tableId, skillId) {
  const table = SKILL_TABLES[tableId];
  if (!table) return null;
  return table.skills.find(s => s.id === skillId) || null;
}

/**
 * Devuelve el nombre de una tabla de habilidad
 */
function getSkillTableName(tableId) {
  return SKILL_TABLES[tableId]?.name || tableId;
}

// ==================================================
// TABLA DE AVANCE (2D6)
// ==================================================
// type: 'skill-any' | 'skill-restricted' | 'characteristic'
const ADVANCE_TABLE = [
  { roll: 2,  type: 'skill-any' },         // 2: habilidad de cualquier tabla
  { roll: 3,  type: 'skill-restricted' },  // 3-4: habilidad restringida
  { roll: 4,  type: 'skill-restricted' },
  { roll: 5,  type: 'characteristic', options: ['F', 'A'] },
  { roll: 6,  type: 'characteristic', options: ['HA', 'HB'] },
  { roll: 7,  type: 'characteristic', options: ['I', 'Ld'] },
  { roll: 8,  type: 'characteristic', options: ['HA', 'HB'] },
  { roll: 9,  type: 'characteristic', options: ['H', 'R'] },
  { roll: 10, type: 'skill-restricted' },  // 10-11: habilidad restringida
  { roll: 11, type: 'skill-restricted' },
  { roll: 12, type: 'skill-any' }          // 12: habilidad de cualquier tabla
];

/**
 * Devuelve la entrada de la tabla de avance según el resultado de 2D6
 */
function getAdvanceResult(total) {
  return ADVANCE_TABLE.find(a => a.roll === total);
}
// ==================================================
// DESCRIPCIONES DE HABILIDADES
// ==================================================
const SKILL_DESCRIPTIONS = {
  // ---------- AGILIDAD ----------
  'catfall': 'Si el luchador cae, puede hacer una prueba de Iniciativa. Si la pasa, aterriza sin daño y no sufre impacto por la caída. Tampoco tiene restricción para saltar desde alturas: puede hacerlo desde cualquier altura siempre que tenga movimiento para cubrir la caída.',
  'dodge': 'El luchador obtiene una salvación especial de 6+ contra impactos de disparos o combate cuerpo a cuerpo.',
  'jump-back': 'Al inicio de su turno, el luchador puede zafarse de cualquier combate cuerpo a cuerpo saltando hacia atrás hasta 2". Los enemigos se quedan atrás.',
  'leap': 'El luchador puede saltar D6" adicionales durante su fase de movimiento si corre o carga. Se puede tirar el D6 antes de decidir dónde moverse, pero hay que comprometerse a la carga antes de tirar.',
  'quick-witted': 'Antes del primer turno del juego, el luchador puede hacer un movimiento extra como si fuera su fase de movimiento: correr, cargar, esconderse, ponerse en vigilancia... No se puede usar en escenarios que no permitan despliegues especiales.',
  'sprint': 'El luchador puede triplicar su movimiento al correr o cargar, en lugar de duplicarlo como es habitual.',

  // ---------- COMBATE ----------
  'combat-master': 'Si el luchador es atacado por varios enemigos cuerpo a cuerpo, puede usar su número en su contra. Los enemigos no obtienen los bonificadores habituales de dados de Ataque y Puntuación de Combate en combate múltiple; en su lugar, los obtiene el Maestro del Combate.',
  'disarm': 'El luchador puede usar esta habilidad contra un oponente al inicio de la fase de cuerpo a cuerpo. Debe pasar una prueba de Iniciativa. Si la pasa, desarma al oponente y este debe luchar el resto del turno solo con un cuchillo. Recupera sus armas para el siguiente turno.',
  'feint': 'En cada combate cuerpo a cuerpo, el primer fallo del luchador se trata como un impacto crítico: recibe +1 a su Puntuación de Combate en lugar de su oponente.',
  'deflect': 'El luchador desvía los golpes con las manos y el mango de sus armas. En cada combate cuerpo a cuerpo puede obligar a su oponente a repetir uno de sus dados de Ataque.',
  'counter-attack': 'El luchador convierte la defensa en ataque. En cada combate cuerpo a cuerpo puede repetir uno de sus dados de Ataque.',
  'step-aside': 'El luchador tiene una habilidad sobrenatural para esquivar golpes. Obtiene una salvación especial de 4+ contra cualquier impacto recibido en combate cuerpo a cuerpo.',

  // ---------- FEROCIDAD ----------
  'berserk-charge': 'Si el luchador carga, tira +D3 dados de Ataque durante cualquier combate cuerpo a cuerpo en ese turno.',
  'impetuous': 'Normalmente un luchador fijado, derribado o en movimiento de persecución solo puede moverse hasta 2". Sin embargo, un luchador con esta habilidad puede moverse hasta 4".',
  'iron-will': 'El luchador puede repetir cualquier prueba de nervios fallida. Además, si su Liderazgo se usa para la tirada de Desbandada y falla, puede repetirla.',
  'killer-reputation': 'El luchador tiene tal reputación de asesino depravado que causa miedo.',
  'nerves-of-steel': 'El luchador puede hacer prueba para zafarse del fijado antes de tiempo incluso si no hay aliados a 2". Si ya podía hacerlo, puede repetir la prueba de Iniciativa si falla.',
  'true-grit': 'Puedes tratar un resultado de 1-2 como herida leve al tirar las consecuencias de las heridas. Si se usa una tabla de heridas especial (ej: pistola de agujas), suma 1 a la banda de resultado más baja del mismo modo.',

  // ---------- MÚSCULO ----------
  'body-slam': 'Si el luchador cargó ese turno, puede hacer una prueba de Fuerza al inicio de la fase de cuerpo a cuerpo. Si la pasa, la Habilidad de Arma del oponente se reduce a 1 durante el turno.',
  'bulging-biceps': 'Los inmensos músculos del luchador le dan un bonificador de +1 a su Fuerza.',
  'hard-as-nails': 'Si el luchador queda fuera de combate y el impacto no fue de alto impacto, tira un D6. Con 5+ no tira en la tabla de heridas graves: se considera automáticamente Recuperación Total.',
  'juggernaut': 'Si el luchador corre o carga y le impacta un disparo desde vigilancia que no es de alto impacto, puede hacer una prueba de Fuerza. Si la pasa, ignora el ataque sin sufrir impacto, como si hubiera tirado una salvación especial.',
  'hurl-opponent': 'Una vez por turno, durante la fase de cuerpo a cuerpo, puede usar esta habilidad antes o después de luchar. Prueba de Fuerza. Si la pasa, el oponente es lanzado en la dirección que elijas hasta D6". El lanzado no sufre daño pero queda fijado. Si es lanzado contra otro enemigo, ambos quedan fijados en el punto de impacto.',
  'iron-jaw': 'Si un luchador con esta habilidad recibe un impacto en combate cuerpo a cuerpo o de un disparo desde dentro de 12", reduce la Fuerza de cada impacto en 1 punto.',

  // ---------- DISPARO ----------
  'crack-shot': 'Si el luchador inflige daño con un ataque a distancia y debe tirar en la tabla de heridas, el enemigo queda fuera de combate con un 5 o 6 en vez de solo con 6. Con tablas especiales (ej: pistola de agujas o alto impacto), suma 1 a la banda más alta del mismo modo. Solo aplica a la tirada inicial de heridas, no a las de la fase de recuperación.',
  'fast-shot': 'El luchador puede ponerse en vigilancia incluso si se movió en el turno. No puede si corrió o cargó.',
  'gunfighter': 'El luchador puede apuntar y disparar una pistola con cada mano. Puede hacer un ataque a distancia extra siguiendo las reglas normales si dispara dos pistolas. Hay que elegir disparar la segunda pistola inmediatamente después de resolver la primera, o no dispararla.',
  'hip-shooting': 'El luchador puede disparar una pistola o arma básica incluso si corrió en el turno. Sin embargo, sufre -1 a impactar con pistola, o -2 con arma básica.',
  'marksman': 'Si el luchador pasa una prueba de Liderazgo, puede ignorar la restricción normal que obliga a disparar al objetivo más cercano y elegir cualquier objetivo visible.',
  'rapid-fire': 'Si el luchador no se mueve en la fase de movimiento, puede repetir cualquier dado de impactar fallido al disparar. Solo aplica a pistolas y armas básicas.',

  // ---------- SIGILO ----------
  'ambush': 'Si el luchador se pone en vigilancia, también puede esconderse. Normalmente gastaría todo el turno en vigilancia, pero con esta habilidad puede hacer ambas cosas.',
  'dive': 'El luchador puede correr y esconderse en el mismo turno. Normalmente quien corre no puede esconderse en el mismo turno, pero con esta habilidad sí.',
  'escape-artist': 'Si el luchador es capturado (por herida grave o cazarrecompensas), escapará automáticamente y se trata como una herida grave con resultado de Recuperación Total.',
  'evade': 'El luchador esquiva y se agacha, siendo muy difícil de impactar. Los enemigos que disparan a corta distancia sufren -2 a impactar; a larga distancia, -1. Solo aplica si el luchador no se está beneficiando de cobertura.',
  'infiltration': 'El luchador puede desplegarse en cualquier punto del campo al final del primer turno, pero no a menos de 8" de un enemigo.',
  'sneak-up': 'Si el luchador es objetivo de vigilancia y cuenta como objetivo huidizo, la Iniciativa del tirador se reduce a 1 al hacer la prueba para reaccionar a tiempo.',

  // ---------- TECNOLOGÍA ----------
  'armourer': 'Si el luchador no quedó fuera de combate en la última partida, ignora la primera tirada de Munición durante una batalla, como si la banda tuviera un Taller.',
  'fixer': 'Si el luchador no quedó fuera de combate en la última partida y a la banda se le ofrece un objeto raro, puede repetir la tirada de rareza de un objeto y quedarse con el valor más bajo.',
  'inventor': 'Si el luchador no quedó fuera de combate, tira un D6 tras cada batalla. Con un 6, ¡ha inventado algo! Tira en la tabla de Comercio Raro para ver qué ha inventado.',
  'medic': 'Si el luchador no quedó fuera de combate, puedes repetir un resultado en la tabla de Heridas Graves de otro luchador tras la batalla. Debe decidirse en cuanto se tira la herida, y un Médico no puede curarse a sí mismo.',
  'specialist': 'Esta habilidad solo puede tomarla un luchador sin acceso a armas especiales. Le permite usar armas especiales además de las básicas, si no las tenía ya.',
  'weaponsmith': 'El luchador puede ignorar tiradas de Munición fallidas y explosiones de armas con un resultado de 4+ en un D6.',

  // ---------- HABILIDADES NATIVAS DE LUCHADORES ----------
  'Independiente': 'El Líder puede luchar eficazmente incluso en solitario. Siempre cuenta como si tuviera un aliado a 2" sin importar si es cierto o no. Esto significa que siempre puede hacer prueba para zafarse de ser fijado antes de tiempo.',
  'Líder': 'Cualquier luchador a 6" del Líder puede usar su Liderazgo para pruebas de nervios. Además, cualquiera a 6" del Líder puede usar su Iniciativa para zafarse de ser fijado al inicio del turno. Si el Líder está derribado o roto, no puede conceder estos beneficios.'
};

/**
 * Devuelve la descripción de una habilidad por su id o nombre.
 */
function getSkillDescription(skillId) {
  return SKILL_DESCRIPTIONS[skillId] || null;
}
// ==================================================
// LISTAS DE EQUIPO INICIAL POR CASA (RONDA 1)
// ==================================================
// Estructura: { weaponId, leaderOnly }
// - weaponId: id del arma en el catálogo (WEAPONS)
// - leaderOnly: true si solo puede llevarla el Líder
//
// En Ronda 1, el Trading Post solo muestra estas armas.
// En Ronda 2+, se abre el catálogo completo.
//
// Los precios son los del catálogo (los overrides los haremos más adelante).
// ==================================================
// LISTAS DE EXCEPCIÓN DE CASAS (HOUSE OVERRIDES)
// ==================================================
// Cada casa tiene una lista de armas con overrides de rareza y coste.
// - weaponId: id del arma en el catálogo (WEAPONS)
// - overrideAvailability: rareza DENTRO DE LA CASA (common, rare, veryRare)
// - overrideCost: (opcional) coste alternativo dentro de la casa
// - leaderOnly: (opcional) true si solo puede llevarla el Líder
const HOUSE_OVERRIDES = {
  // ==================================================
  // CAWDOR
  // ==================================================
  cawdor: [
    // Solo Líder
    { weaponId: 'autoslugger', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'boltgun', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'chainsword', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'chain-flail', overrideAvailability: 'common' },
    { weaponId: 'club-maul-bludgeon', overrideAvailability: 'common' },
    { weaponId: 'knife', overrideAvailability: 'common' },
    { weaponId: 'massive-weapon', overrideAvailability: 'common' },
    { weaponId: 'sword', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'hand-flamer', overrideAvailability: 'common' },
    { weaponId: 'laspistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'lasgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'flamer', overrideAvailability: 'common' },
    { weaponId: 'grenade-launcher', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'heavy-flamer', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' },
    { weaponId: 'heavy-bolter', overrideAvailability: 'common' }
  ],

  // ==================================================
  // GOLIATH
  // ==================================================
  goliath: [
    // Solo Líder
    { weaponId: 'chainsword', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'hand-flamer', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'meltagun', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'chain-flail', overrideAvailability: 'common' },
    { weaponId: 'club-maul-bludgeon', overrideAvailability: 'common' },
    { weaponId: 'knife', overrideAvailability: 'common' },
    { weaponId: 'massive-weapon', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'bolt-pistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'boltgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'autoslugger', overrideAvailability: 'common' },
    { weaponId: 'grenade-launcher', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'autocannon', overrideAvailability: 'common' },
    { weaponId: 'heavy-bolter', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' }
  ],

  // ==================================================
  // DELAQUE
  // ==================================================
  delaque: [
    // Solo Líder
    { weaponId: 'grenade-launcher', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'hand-flamer', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'sword', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'knife', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'bolt-pistol', overrideAvailability: 'common' },
    { weaponId: 'laspistol', overrideAvailability: 'common' },
    { weaponId: 'plasma-pistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'boltgun', overrideAvailability: 'common' },
    { weaponId: 'hunting-rifle', overrideAvailability: 'common' },
    { weaponId: 'lasgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'flamer', overrideAvailability: 'common' },
    { weaponId: 'meltagun', overrideAvailability: 'common' },
    { weaponId: 'plasma-gun', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'heavy-plasma', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' },
    { weaponId: 'lascannon', overrideAvailability: 'common' }
  ],

  // ==================================================
  // ESCHER
  // ==================================================
  escher: [
    // Solo Líder
    { weaponId: 'boltgun', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'chainsword', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'meltagun', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'chain-flail', overrideAvailability: 'common' },
    { weaponId: 'club-maul-bludgeon', overrideAvailability: 'common' },
    { weaponId: 'knife', overrideAvailability: 'common' },
    { weaponId: 'sword', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'laspistol', overrideAvailability: 'common' },
    { weaponId: 'plasma-pistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'lasgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'flamer', overrideAvailability: 'common' },
    { weaponId: 'plasma-gun', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'heavy-flamer', overrideAvailability: 'common' },
    { weaponId: 'heavy-plasma', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' }
  ],

  // ==================================================
  // VAN SAAR
  // ==================================================
  vansaar: [
    // Solo Líder
    { weaponId: 'sword', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'chainsword', overrideAvailability: 'common' },
    { weaponId: 'knife', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'bolt-pistol', overrideAvailability: 'common' },
    { weaponId: 'laspistol', overrideAvailability: 'common' },
    { weaponId: 'plasma-pistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'boltgun', overrideAvailability: 'common' },
    { weaponId: 'hunting-rifle', overrideAvailability: 'common' },
    { weaponId: 'lasgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'grenade-launcher', overrideAvailability: 'common' },
    { weaponId: 'meltagun', overrideAvailability: 'common' },
    { weaponId: 'plasma-gun', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'heavy-bolter', overrideAvailability: 'common' },
    { weaponId: 'heavy-plasma', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' },
    { weaponId: 'lascannon', overrideAvailability: 'common' }
  ],

  // ==================================================
  // ORLOCK
  // ==================================================
  orlock: [
    // Solo Líder
    { weaponId: 'boltgun', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'chainsword', overrideAvailability: 'common', leaderOnly: true },
    { weaponId: 'grenade-launcher', overrideAvailability: 'common', leaderOnly: true },
    // H2H
    { weaponId: 'chain-flail', overrideAvailability: 'common' },
    { weaponId: 'club-maul-bludgeon', overrideAvailability: 'common' },
    { weaponId: 'knife', overrideAvailability: 'common' },
    { weaponId: 'sword', overrideAvailability: 'common' },
    // Pistolas
    { weaponId: 'autopistol', overrideAvailability: 'common' },
    { weaponId: 'bolt-pistol', overrideAvailability: 'common' },
    { weaponId: 'laspistol', overrideAvailability: 'common' },
    { weaponId: 'plasma-pistol', overrideAvailability: 'common' },
    { weaponId: 'stub-gun', overrideAvailability: 'common' },
    // Básicas
    { weaponId: 'autogun', overrideAvailability: 'common' },
    { weaponId: 'lasgun', overrideAvailability: 'common' },
    { weaponId: 'shotgun', overrideAvailability: 'common' },
    // Especiales
    { weaponId: 'autoslugger', overrideAvailability: 'common' },
    { weaponId: 'flamer', overrideAvailability: 'common' },
    // Pesadas
    { weaponId: 'heavy-bolter', overrideAvailability: 'common' },
    { weaponId: 'heavy-stubber', overrideAvailability: 'common' },
    { weaponId: 'missile-launcher', overrideAvailability: 'common' }
  ]
};

// ==================================================
// HELPERS DE CASAS Y OVERRIDES
// ==================================================

/**
 * Devuelve true si la banda está en fase de creación (Ronda 1).
 */
function isInCreationPhase(gang) {
  if (!gang) return false;
  const round = gang.currentRound || 1;
  return round === 1;
}

/**
 * Devuelve la lista de overrides de una casa.
 */
function getHouseOverrides(houseId) {
  return HOUSE_OVERRIDES[houseId] || [];
}

/**
 * Busca un override específico para una casa y arma.
 * Devuelve {weaponId, overrideAvailability, overrideCost, leaderOnly} o null.
 */
function getHouseOverride(houseId, weaponId) {
  const list = getHouseOverrides(houseId);
  return list.find(o => o.weaponId === weaponId) || null;
}

/**
 * Comprueba si un arma está permitida en la fase de creación para una casa.
 * @param {string} houseId
 * @param {string} weaponId
 * @param {string} fighterTypeId
 * @returns {object|false} - El override si está permitida, o false
 */
function isWeaponAllowedInCreation(houseId, weaponId, fighterTypeId) {
  const override = getHouseOverride(houseId, weaponId);
  if (!override) return false;
  if (override.leaderOnly && fighterTypeId !== 'leader') return false;
  return override;
}

/**
 * Devuelve el objeto "arma" con la rareza y coste efectivos para una casa.
 * Si la casa tiene override, se aplica. Si no, se devuelve la rareza del catálogo.
 * @param {string} houseId
 * @param {string} weaponId
 * @returns {object} - El arma con .effectiveAvailability y .effectiveCost
 */
function getWeaponForHouse(houseId, weaponId) {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return null;

  const override = getHouseOverride(houseId, weaponId);

  return {
    ...weapon,
    effectiveAvailability: override ? override.overrideAvailability : weapon.rarity,
    effectiveCost: override && override.overrideCost !== undefined ? override.overrideCost : weapon.cost,
    effectiveLeaderOnly: override ? !!override.leaderOnly : false
  };
}

// ==================================================
// EQUIPO BÁSICO GLOBAL (común a todas las casas)
// ==================================================
// Disponible desde Ronda 1 para TODAS las bandas
// (se suma a la lista inicial de cada casa).
const BASIC_EQUIPMENT_IDS = [
  // Granadas
  'frag-grenade',
  'krak-grenade',
  // Misiles
  'missile-frag',
  'missile-krak',
  // Municiones
  'shotgun-bolt',
  'stub-gun-dumdum',
  'shotgun-hotshot',
  'shotgun-manstopper',
  // Misceláneo
  'clip-harness',
  'filter-plugs',
  'lobo-chip',
  'photo-contacts'
];
/**
 * Devuelve true si el arma está disponible como equipo básico
 * para cualquier banda no-outlaw.
 */
function isBasicEquipment(weaponId) {
  return BASIC_EQUIPMENT_IDS.includes(weaponId);
}
// ==================================================
// LISTA DE HERIDAS GRAVES
// ==================================================
const INJURIES = [
  {
    id: 'dead',
    name: 'Muerto',
    roll: '11-15',
    severity: 'critical',
    desc: 'El luchador muere en acción. Su cuerpo es abandonado a las ratas mutantes. Todas sus armas y equipo se pierden.',
    penalizaciones: {},
    special: 'kills'  // Elimina al luchador de la banda
  },

  {
    id: 'infected-wound',
    name: 'Herida Infectada',
    roll: '21',
    severity: 'major',
    desc: 'El luchador se recupera pero tarda tiempo. Debe perderse los siguientes D3 partidos.',
    penalizaciones: {},
    special: 'miss_games'
  },
  {
    id: 'chest-wound',
    name: 'Herida en el Pecho',
    roll: '22',
    severity: 'major',
    desc: 'El luchador ha sido gravemente herido en el pecho. Se recupera pero su Resistencia se reduce en -1.',
    penalizaciones: { R: -1 }
  },
  {
    id: 'leg-wound',
    name: 'Herida en la Pierna',
    roll: '23',
    severity: 'major',
    desc: 'El luchador se ha roto una pierna. Su Movimiento se reduce en -1. Determina aleatoriamente qué pierna.',
    penalizaciones: { M: -1 }
  },
  {
    id: 'arm-wound',
    name: 'Herida en el Brazo',
    roll: '24',
    severity: 'major',
    desc: 'El luchador se ha roto un brazo. Su Fuerza se reduce en -1. Determina aleatoriamente qué brazo.',
    penalizaciones: { F: -1 }
  },
  {
    id: 'head-wound',
    name: 'Herida en la Cabeza',
    roll: '25',
    severity: 'major',
    desc: 'Una herida grave en la cabeza deja al luchador desequilibrado. Al inicio de cada partida, tira D6 por cada Herida en la Cabeza. Con 1-3 sigue reglas de estupidez. Con 4-6 sigue reglas de frenesí.',
    penalizaciones: {},
    special: 'head'
  },
  {
    id: 'blinded-eye',
    name: 'Cegado de un Ojo',
    roll: '26',
    severity: 'major',
    desc: 'El luchador es herido en un ojo aleatorio. Con solo un ojo bueno, su Habilidad Ballística se reduce en -1. Si se hiere en un ojo ya herido → Recuperación Total. Si es cegado en ambos ojos → Muerto.',
    penalizaciones: { HB: -1 }
  },
  {
    id: 'partially-deafened',
    name: 'Parcialmente Sordo',
    roll: '31',
    severity: 'minor',
    desc: 'El luchador sobrevive pero queda parcialmente sordo. Su Iniciativa se reduce en -1.',
    penalizaciones: { I: -1 }
  },
  {
    id: 'shell-shock',
    name: 'Shock de Combate',
    roll: '32',
    severity: 'minor',
    desc: 'El luchador sobrevive pero queda extremadamente nervioso. Su Liderazgo se reduce en -1.',
    penalizaciones: { Ld: -1 }
  },
  {
    id: 'hand-injury',
    name: 'Herida en la Mano',
    roll: '33',
    severity: 'minor',
    desc: 'El luchador se hiere gravemente una mano. Su Habilidad de Arma se reduce en -1. Determina aleatoriamente qué mano.',
    penalizaciones: { HA: -1 }
  },
  {
    id: 'old-battle-wound',
    name: 'Vieja Herida de Batalla',
    roll: '34-36',
    severity: 'minor',
    desc: 'El luchador se recupera pero su vieja herida a veces afecta su salud. Antes de cada partida, tira D6 por cada Vieja Herida. Con un 1, el luchador no puede participar en la batalla.',
    penalizaciones: {},
    special: 'old_wound'
  },

  {
    id: 'bitter-enmity',
    name: 'Enemistad Amarga',
    roll: '56',
    severity: 'minor',
    desc: 'Aunque se recupera físicamente, el luchador queda marcado mentalmente. Desarrolla una enemistad amarga hacia la banda responsable de su herida.',
    penalizaciones: {},
    special: 'enmity'
  },
  {
    id: 'captured',
    name: 'Capturado',
    roll: '61-63',
    severity: 'major',
    desc: 'El luchador es capturado. Las bandas intercambian prisioneros uno a uno o se paga un rescate. Si no se rescata, se vende a los esclavistas por D6×5 créditos.',
    penalizaciones: {},
    special: 'captured'
  },
  {
    id: 'horrible-scars',
    name: 'Cicatrices Horribles',
    roll: '64',
    severity: 'minor',
    desc: 'El luchador se recupera pero queda horriblemente desfigurado. Sus cicatrices hacen que cause miedo.',
    penalizaciones: {},
    special: 'fear'
  },
  {
    id: 'impressive-scars',
    name: 'Cicatrices Impresionantes',
    roll: '65',
    severity: 'good',
    desc: 'El luchador se recupera con impresionantes cicatrices como testamento de su valentía. Recibe +1 Liderazgo. Este bonificador solo se aplica una vez.',
    bonificaciones: { Ld: 1 }
  },
  {
    id: 'survives-against-odds',
    name: 'Sobrevive contra todo pronóstico',
    roll: '66',
    severity: 'good',
    desc: 'El luchador recupera el conocimiento solo en la oscuridad, dado por muerto por sus compañeros. Se recupera completamente y su supervivencia sobrenatural le otorga +2D6 PX.',
    penalizaciones: {},
    special: 'bonus_xp'
  },
      {
    id: 'spore-sickness',
    name: 'Enfermedad de Esporas',
    roll: '—',
    severity: 'major',
    desc: 'El luchador ha contraído la Enfermedad de Esporas. Hongos rechonchos y coloridos brotan por todo su cuerpo. No es letal y la recuperación es automática, pero el ganger no podrá participar en futuras batallas hasta que se recupere sacando un 4, 5 o 6 al inicio de una partida. Una vez recuperado, puede luchar con normalidad.',
    penalizaciones: {},
    special: 'spore-sickness'
  },
];

// ---------- HELPERS DE HERIDAS ----------
function getInjuryById(id) {
  return INJURIES.find(i => i.id === id);
}
/**
 * Devuelve un arma aleatoria del catálogo que sea "rara" 
 * (rare, veryRare, unique según el catálogo).
 * Excluye armas que sean excepción de la casa.
 */
function getRandomRareWeapon(houseId) {
  const houseData = getHouseData(houseId);
  
  // Recolectar los IDs de armas que son COMUNES para esta casa
  const commonIdsForHouse = new Set();
  
  if (houseData) {
    // Armas de startingWeapons
    (houseData.startingWeapons || []).forEach(sw => {
      commonIdsForHouse.add(sw.weaponId);
    });
    
    // Armas con override de rarity 'common'
    (houseData.weaponOverrides || []).forEach(ov => {
      if (ov.rarity === 'common') {
        commonIdsForHouse.add(ov.weaponId);
      }
    });
  }
  
  const rareWeapons = WEAPONS.filter(w => {
    // Solo raras
    if (w.rarity !== 'rare' && w.rarity !== 'veryRare' && w.rarity !== 'unique') return false;
    
    // Excluir si YA es común para esta casa
    if (commonIdsForHouse.has(w.id)) return false;
    
    // Excluir si tiene override (nuevo sistema - por si hay algún override raro)
    const override = getHouseOverrideNew(houseId, w.id);
    if (override) return false;
    
    // Excluir armas no comprables
    if (!w.purchasable) return false;
    
    return true;
  });

  if (rareWeapons.length === 0) return null;
  return rareWeapons[Math.floor(Math.random() * rareWeapons.length)];
}

/**
 * Tira 1D3 (1-3).
 */
function rollD3() {
  return Math.floor(Math.random() * 3) + 1;
}

 /**
 * Tira una cantidad de dados según el formato de coste variable.
 * Soporta:
 *   - "4D6" → tira 4 dados de 6
 *   - "2D6" → tira 2 dados de 6
 *   - "D6"  → tira 1 dado de 6
 *   - "D6x10" o "D6×10" → tira 1 dado y multiplica por 10
 *   - "80 + 4D6" → base 80 + tirada de 4D6
 * Devuelve el número total.
 */
function rollCostVariable(variableStr) {
  if (!variableStr) return 0;
  const s = variableStr.trim().toUpperCase().replace('×', 'X');

  // "D6X10"
  if (s === 'D6X10') {
    return (Math.floor(Math.random() * 6) + 1) * 10;
  }

  // "X + YD6" (ej: "80 + 4D6")
  const plusMatch = s.match(/(\d+)\s*\+\s*(\d*)D6/);
  if (plusMatch) {
    const base = parseInt(plusMatch[1], 10);
    const diceCount = plusMatch[2] ? parseInt(plusMatch[2], 10) : 1;
    let total = base;
    for (let i = 0; i < diceCount; i++) {
      total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
  }

  // "XD6" sin base
  const diceMatch = s.match(/^(\d*)D6$/);
  if (diceMatch) {
    const count = diceMatch[1] ? parseInt(diceMatch[1], 10) : 1;
    let total = 0;
    for (let i = 0; i < count; i++) {
      total += Math.floor(Math.random() * 6) + 1;
    }
    return total;
  }

  // "WEAPONX2" → no soportado
  return 0;
}
// ==================================================
// HELPERS DE CASAS (basados en archivos por casa)
// ==================================================
// Cada casa tiene su archivo en js/houses/{houseId}.js
// que define window.HOUSE_DATA_{HOUSEID}
// Ejemplo: js/houses/orlock.js → window.HOUSE_DATA_ORLOCK
// ==================================================

/**
 * Devuelve el objeto completo de datos de una casa.
 * Busca en window.HOUSE_DATA_{HOUSEID_EN_MAYUSCULAS}.
 * Si no existe, devuelve un objeto vacío por defecto.
 */
function getHouseData(houseId) {
  if (!houseId) return null;
  const key = 'HOUSE_DATA_' + houseId.toUpperCase();
  return window[key] || null;
}

/**
 * Devuelve la lista de equipo inicial de una casa.
 */
function getHouseStartingWeapons(houseId) {
  const data = getHouseData(houseId);
  return data ? (data.startingWeapons || []) : [];
}

/**
 * Devuelve la lista de overrides de una casa.
 */
function getHouseWeaponOverrides(houseId) {
  const data = getHouseData(houseId);
  return data ? (data.weaponOverrides || []) : [];
}

/**
 * Devuelve el acceso a tablas de habilidad de una casa.
 */
function getHouseSkillAccess(houseId) {
  const data = getHouseData(houseId);
  return data ? (data.skillAccess || {}) : {};
}

/**
 * Devuelve las armas exclusivas de una casa.
 */
function getHouseExclusiveWeapons(houseId) {
  const data = getHouseData(houseId);
  return data ? (data.exclusiveWeapons || []) : [];
}

/**
 * Devuelve las reglas especiales de una casa.
 */
function getHouseSpecialRules(houseId) {
  const data = getHouseData(houseId);
  return data ? (data.specialRules || []) : [];
}

/**
 * Busca un override específico para una casa y arma.
 * Combina los overrides de la casa con los de startingWeapons.
 * Devuelve un objeto con: {weaponId, rarity, cost, leaderOnly} o null.
 */
function getHouseOverrideNew(houseId, weaponId) {
  const data = getHouseData(houseId);
  if (!data) return null;

  // 1) Buscar en startingWeapons (tiene leaderOnly)
  const starting = (data.startingWeapons || []).find(w => w.weaponId === weaponId);

  // 2) Buscar en weaponOverrides (tiene rarity y cost)
  const override = (data.weaponOverrides || []).find(w => w.weaponId === weaponId);

  // 3) Combinar
  if (!starting && !override) return null;

  const result = {
    weaponId: weaponId,
    rarity: override ? override.rarity : 'common',       // Por defecto common
    cost: override && override.cost !== undefined ? override.cost : null,  // null = usa el del catálogo
    leaderOnly: starting ? !!starting.leaderOnly : false
  };

  return result;
}

/**
 * Devuelve el objeto arma con rareza y coste efectivos para una casa.
 * Usa los overrides de la casa si existen, si no, usa los del catálogo.
 */
function getWeaponForHouseNew(houseId, weaponId) {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return null;

  const override = getHouseOverrideNew(houseId, weaponId);

  return {
    ...weapon,
    effectiveAvailability: override ? override.rarity : weapon.rarity,
    effectiveCost: override && override.cost !== null ? override.cost : weapon.cost,
    effectiveLeaderOnly: override ? override.leaderOnly : false,
    hasOverride: !!override
  };
}

/**
 * Devuelve todas las armas disponibles para una casa en Ronda 1.
 */
function getStartingWeaponsForHouseNew(houseId) {
  const starting = getHouseStartingWeapons(houseId);
  return starting.map(s => getWeaponForHouseNew(houseId, s.weaponId)).filter(w => w);
}

/**
 * Comprueba si un arma está disponible en Ronda 1 para una casa.
 * Devuelve el override (con leaderOnly) o null.
 */
function isWeaponAllowedInCreationNew(houseId, weaponId, fighterTypeId) {
  const override = getHouseOverrideNew(houseId, weaponId);
  if (!override) return false;
  if (override.leaderOnly && fighterTypeId !== 'leader') return false;
  return override;
}
// ==================================================
// HELPERS DE VISUALIZACIÓN
// ==================================================

/**
 * Extrae el número "final" de un rango tipo "0-12", "12-24", "6-9".
 * Devuelve solo el segundo número. Si no hay guion, devuelve el string tal cual.
 * Ejemplos:
 *   "0-12"  → "12"
 *   "12-24" → "24"
 *   "6-9"   → "9"
 *   "-"     → "-"
 *   "20-72" → "72"
 */
function extractRangeEnd(range) {
  if (!range || range === '-') return '—';
  const str = String(range);
  if (str.includes('-')) {
    const parts = str.split('-');
    return parts[1] || '—';
  }
  return str;
}
// ==================================================
// REGLAS DE ARMAS
// ==================================================
// Cada regla tiene:
// - id: identificador único (slug)
// - name: nombre traducido para mostrar
// - description: descripción del reglamento
// ==================================================
const WEAPON_RULES = {
  // ---------- ARMAS DE FUEGO ----------
  'sustained-fire-1': {
    name: 'Fuego Sostenido (1)',
    description: 'Fuego Sostenido (1): tira 1 dado adicional al disparar. Nota: solo se puede usar Fuego Sostenido cuando se dispara a máxima potencia.'
  },
  'sustained-fire-2': {
    name: 'Fuego Sostenido (2)',
    description: 'Fuego Sostenido (2): tira 2 dados adicionales al disparar. Nota: solo se puede usar Fuego Sostenido cuando se dispara a máxima potencia.'
  },
  'knock-back': {
    name: 'Retroceso',
    description: 'El alto impacto de una escopeta es capaz de desequilibrar a un hombre o incluso tirarlo al suelo. Para representarlo, un objetivo que tire para caer por un borde como resultado de un impacto de escopeta con cartucho sólido, manstopper o hot shot cuenta su Iniciativa con una penalización de -1. Por ejemplo, si su I es 3, caerá con un resultado de 3-6 en lugar de 4-6.'
  },
  'pellets': {
    name: 'Perdigones',
    description: 'Al disparar perdigones, ignora cualquier modificador de cobertura para impactar al objetivo: los cientos de perdigones saturan el área y pueden alcanzar a objetivos parcialmente ocultos como si estuvieran al descubierto. Además, si el disparo impacta, tira un dado por cualquier otro modelo en contacto de base con el modelo objetivo. Dichos modelos son impactados con un 4+, de forma similar a las armas de explosión. Resuelve los impactos normalmente.'
  },
  'catch-fire-3': {
    name: 'Fuego (3+)',
    description: 'Cualquier modelo impactado por esta arma prende fuego con un resultado de 3 o más en 1D6. Nota: si la descripción pertenece a un arma de mano (como un lanzallamas de mano), esta no puede prender fuego a oponentes en combate cuerpo a cuerpo.'
  },
  'catch-fire-4': {
    name: 'Fuego (4+)',
    description: 'Cualquier modelo impactado por esta arma prende fuego con un resultado de 4 o más en 1D6.'
  },
  'catch-fire-5': {
    name: 'Fuego (5+)',
    description: 'Cualquier modelo impactado por esta arma prende fuego con un resultado de 5 o más en 1D6. Nota: si la descripción pertenece a un arma de mano (como un lanzallamas de mano), esta no puede prender fuego a oponentes en combate cuerpo a cuerpo.'
  },
  'flamer': {
    name: 'Lanzallamas',
    description: 'El disparo del lanzallamas se representa con la plantilla de lanzallamas. Se usa como se describe en la sección de Disparo.'
  },
  'high-impact': {
    name: 'Alto Impacto',
    description: 'Algunos ataques infligen impactos con tal fuerza devastadora que cualquier luchador alcanzado por ellos probablemente quedará gravemente herido. Todos los ataques con una Fuerza de 7 o más se conocen como impactos de alto impacto.\n\nCuando un luchador es alcanzado por un ataque de alto impacto, quedará fuera de combate con un resultado de 5 o 6 en la tabla de heridas en lugar del 6 habitual. Además, si se saca un 5 o 6, anótalo especialmente en la hoja de banda, ya que hay mayor probabilidad de que el impacto cause heridas fatales.\n\nNota: estas reglas solo se aplican a las tiradas iniciales de heridas. Las tiradas de heridas realizadas durante la fase de recuperación siguen todas las reglas normales descritas en el párrafo de Derribado.'
  },
  'blast': {
    name: 'Explosión',
    description: 'El disparo envuelve un área entera con una descarga abrasadora, por lo que usa la plantilla de explosión.'
  },
  'gas-cloud': {
    name: 'Nube de Gas',
    description: 'El disparo usa la plantilla de nube de gas en lugar de la plantilla de explosión. Las nubes de gas pueden durar varios turnos, disiparse lentamente o desplazarse. Comprueba al inicio del turno de ambos jugadores. Al inicio de cada turno, tira 1D6. Nota: si una nube se disipa, todavía afecta a los modelos dentro de ella al inicio del turno. Si una nube se desplaza, afecta a todos los modelos "alcanzados" por el gas mientras se desplaza.'
  },
  'ammo-roll': {
    name: 'Tirada de Munición',
    description: 'El arma debe hacer una tirada de Munición cada vez que dispara, excepto durante el combate cuerpo a cuerpo.'
  },
  'demolition': {
    name: 'Demolición',
    description: 'Esta arma puede fijarse a cualquier estructura estacionaria como se explica en la parte de Atacar Terreno de la sección de Reglas Avanzadas.'
  },
  'plasma-ball': {
    name: 'Bola de Plasma',
    description: 'Descripción próximamente.'
  },
  'critical-shot': {
    name: 'Disparo Crítico',
    description: 'Si un luchador que dispara un rifle de caza permaneció estacionario ese turno y sacó un resultado de 6 al herir, esa herida infligirá D3 de Daño.'
  },
  'toxic-dart': {
    name: 'Dardo Tóxico',
    description: 'Descripción próximamente.'
  },
  'injuries': {
    name: 'Heridas',
    description: 'Descripción próximamente.'
  },
  'silent': {
    name: 'Silenciosa',
    description: 'Esta arma no emite ningún ruido, por lo que al disparar no hace prueba para sonar la alarma en escenarios como El Asalto.'
  },
  'webbed-targets': {
    name: 'Objetivos Enredados',
    description: 'Una vez que una pistola de red ha impactado a su objetivo, la víctima queda automáticamente enredada: no hay tirada de heridas ni se permite tirada de salvación por armadura. Esto también se aplica en combate cuerpo a cuerpo: cualquier impacto adicional que deba asignarse a la pistola se pierde.\n\nUn objetivo enredado no puede moverse ni hacer nada más que intentar liberarse al inicio de su turno. Si el luchador desea intentar liberarse, tira 1D6 y suma la Fuerza del modelo. Si el total es 9 o más, la víctima se libera, pero no puede hacer nada durante el resto del turno. Si el total es menor que 9, sufre automáticamente 1 herida, aunque puede intentar una tirada de salvación por armadura.\n\nSi un modelo enredado está involucrado en combate cuerpo a cuerpo, se le trata como si estuviera derribado. Los luchadores aliados en contacto de base con un modelo enredado al inicio de su turno pueden ayudar a cortar la red de acero. El modelo no puede hacer nada más ese turno. Si el luchador ayuda de esta manera, su característica de Fuerza se suma al resultado del 1D6.'
  },
  'solvent': {
    name: 'Disolvente',
    description: 'Todas las pistolas de red incorporan un espray disolvente para eliminar el material de la red. Cualquier modelo que tenga una pistola de red puede liberar automáticamente a un luchador enredado al inicio del turno si está en contacto de base y no hace nada más ese turno. Sin embargo, un modelo nunca puede liberarse a sí mismo de una red usando una pistola de red, ya que los filamentos son demasiado tensos para que el luchador alcance su espray disolvente.'
  },
  'capture': {
    name: 'Capturar',
    description: 'Si un luchador que lleva una pistola de red deja fuera de combate a un modelo enemigo en combate cuerpo a cuerpo, y la pistola no se ha quedado sin munición, tira 1D6. Con un resultado de 4+ el luchador enemigo ha sido capturado. El modelo enemigo no tira en la tabla de Heridas Graves; en su lugar, se asume automáticamente que se ha sacado un resultado de Capturado.'
  },
  'minus-1-hit': {
    name: '-1 Impacto',
    description: 'Esta granada es pesada y voluminosa, con una explosión concentrada. Por ello, es más difícil impactar a un objetivo con ella que con otras granadas, por lo que se aplica una penalización de -1 a impactar al lanzarla. Nota: esta penalización no se aplica a las granadas de este tipo lanzadas desde un lanzagranadas.'
  },
  'terrifying-force': {
    name: 'Fuerza Terrorífica',
    description: 'Los efectos del impacto de un cañón láser sobre un objetivo vivo son horripilantes de contemplar. Normalmente, si un pandillero queda derribado o fuera de combate, los luchadores aliados en un radio de 2" deben hacer una prueba de nervios; sin embargo, este radio se extiende a 6" cuando es alcanzado por un cañón láser.'
  },
  'move-and-fire': {
    name: 'Mover y Disparar',
    description: 'A diferencia de otras armas pesadas, el lanzallamas pesado no tiene retroceso y requiere poca puntería, por lo que un luchador puede moverse y dispararlo como un arma normal.'
  },

  // ---------- GASES ESPECÍFICOS (asociados a granadas) ----------
  'choke-effect': {
    name: 'Asfixia',
    description: 'Los luchadores afectados por Asfixia caen al suelo y quedan indefensos mientras permanezcan en la nube. Los modelos pueden arrastrarse 2" e intentar salir de la nube, pero no pueden disparar ni hacer nada más si están dentro de la nube al inicio de su turno. Los modelos afectados en combate cuerpo a cuerpo se tratan como derribados, por lo que pueden quedar fuera de combate. Una vez que se han arrastrado fuera del gas o este se ha disipado, se recuperan al final del turno.'
  },
  'scare-effect': {
    name: 'Terror',
    description: 'Un luchador afectado por el gas de terror es presa de un pánico irracional y queda inmediatamente roto, como si hubiera fallado una prueba de nervios. El efecto del gas desaparece una vez que logra recuperar los nervios.'
  },
  'hallucinogen-effect': {
    name: 'Alucinógeno',
    description: 'Los luchadores afectados por este peligroso gas alucinógeno quedan sujetos a todo tipo de extrañas ilusiones y pueden comportarse de forma extraordinaria. Si un modelo afectado está dentro de la nube de gas al inicio de su turno, tira 1D6 y consulta la tabla correspondiente. Nota: si una nube de alucinógeno se disipa, todavía afecta a los modelos dentro de ella al inicio del turno, y si una nube se desplaza, afecta a todos los modelos "alcanzados" por el gas mientras se desplaza. Si un modelo falla la prueba de Resistencia original al ser alcanzado por la granada, queda automáticamente afectado por el gas al inicio del turno.'
  },

  // ---------- ARMAS CUERPO A CUERPO ----------
    'parry': {
    name: 'Parada',
    description: 'Puedes parar con esta arma, como se describe en las reglas del juego.'
  },
  'unparryable': {
    name: 'Imposible de Parar',
    description: 'Este arma es tan pesada y sus dientes tan feroces que es imposible pararla.'
  },
  'noisy': {
    name: 'Ruidoso',
    description: 'Esta arma emite un sonido fuerte y distintivo, por lo que debe hacer prueba para sonar la alarma cuando se usa en escenarios como El Asalto.'
  },
  'two-hand': {
    name: 'Dos Manos',
    description: 'Requiere dos manos para blandir un arma masiva, por lo que nunca puede usarse junto con otra arma.'
  },
  'draw': {
    name: 'Desenvainar',
    description: 'Debido al lento y pesado balanceo necesario para blandir esta arma, es probable que tu oponente te pille en el movimiento ascendente. Si el combate termina en empate, la Iniciativa del modelo se reduce a la mitad al determinar qué luchador gana.'
  },
  'massive-blow': {
    name: 'Golpe Masivo',
    description: 'La pura masa de un arma masiva combinada con el impulso de una carga dificulta la represalia. Si el luchador cargó al combate ese turno, el oponente tira un dado de Ataque menos durante ese turno (hasta un mínimo de 1).'
  },
  'nullify': {
    name: 'Anular',
    description: 'Cada mangual cancela la parada de un oponente. Nota: las paradas que se anulan mutuamente tienen prioridad. Por ejemplo, un luchador que use un mangual y una espada no puede parar contra un oponente que use una espada.'
  },
  'clumsy': {
    name: 'Torpe',
    description: 'Cada mangual duplica uno de tus fallos. Por ejemplo, si un luchador usa dos manguales, los dos primeros fallos que saque añadirán cada uno +2 a la Puntuación de Combate de su oponente.'
  },
  'dual-banded': {
    name: 'Doble Filo',
    description: 'Descripción próximamente.'
  },
  'out-of-action': {
    name: 'Fuera de Combate',
    description: 'Descripción próximamente.'
  },
  'injury': {
    name: 'Heridas (cuerpo a cuerpo)',
    description: 'Descripción próximamente.'
  },
  'hurl': {
    name: 'Arrojar',
    description: 'Descripción próximamente.'
  },
  'bonebreaker': {
    name: 'Rompehuesos',
    description: 'Descripción próximamente.'
  },
  'continuous-drill': {
    name: 'Perforación Continua',
    description: 'Descripción próximamente.'
  },
  'decapitate': {
    name: 'Decapitar',
    description: 'Descripción próximamente.'
  }
};

// ==================================================
// HELPERS DE REGLAS DE ARMAS
// ==================================================

/**
 * Busca una regla por su nombre (para cuando vienen del campo rules como texto).
 * Devuelve el id o null.
 */
function findWeaponRuleIdByName(ruleName) {
  // Normalizar (trim, quitar espacios extra)
  const target = ruleName.trim().toLowerCase();
  for (const id in WEAPON_RULES) {
    if (WEAPON_RULES[id].name.toLowerCase() === target) {
      return id;
    }
  }
  return null;
}

/**
 * Devuelve el objeto de una regla por id.
 */
function getWeaponRuleById(ruleId) {
  return WEAPON_RULES[ruleId] || null;
}

/**
 * Parsea el string de reglas de un perfil (separado por comas) y devuelve
 * un array de objetos { id, name } de reglas encontradas.
 * Ej: "Parada, Ruidoso" → [{id: 'parry', name: 'Parada'}, {id: 'noisy', name: 'Ruidoso'}]
 * Si una regla no se encuentra, devuelve { id: null, name: <texto original> }
 */
function parseWeaponRules(rulesString) {
  if (!rulesString || rulesString.trim() === '' || rulesString === '—') return [];

  return rulesString
    .split(',')
    .map(r => r.trim())
    .filter(r => r !== '')
    .map(ruleName => {
      const id = findWeaponRuleIdByName(ruleName);
      return {
        id: id,
        name: ruleName
      };
    });
}
/**
 * Devuelve los máximos de características para una casa.
 * Si la casa tiene máximos propios (houseData.statMaximums), los usa.
 * Si no, usa los máximos globales (STAT_MAXIMUMS).
 */
function getHouseStatMaximums(houseId) {
  const houseData = getHouseData(houseId);
  if (houseData && houseData.statMaximums) {
    return houseData.statMaximums;
  }
  return STAT_MAXIMUMS;
}
/**
 * Comprueba si un arma es exclusiva de una casa específica.
 * @param {object} weapon
 * @param {string} houseId
 * @returns {boolean} - true si es exclusiva Y la casa coincide
 */
function isWeaponAvailableForHouse(weapon, houseId) {
  if (!weapon) return false;
  if (!weapon.exclusiveTo) return true;  // no es exclusiva
  return weapon.exclusiveTo === houseId;
}

/**
 * Filtra un array de armas dejando solo las disponibles para una casa.
 */
function filterWeaponsForHouse(weapons, houseId) {
  return weapons.filter(w => isWeaponAvailableForHouse(w, houseId));
}
/**
 * Devuelve la lista de typeIds que cuentan como "Ganger" para una casa.
 * Por defecto es ['ganger']. Cada casa puede sobrescribirlo
 * con houseData.countsAsGanger (array de typeIds).
 */
function getGangerTypeIdsForHouse(houseId) {
  const houseData = getHouseData(houseId);
  if (houseData && Array.isArray(houseData.countsAsGanger)) {
    return houseData.countsAsGanger;
  }
  return ['ganger']; // fallback para casas grandes
}

/**
 * Comprueba si un luchador cuenta como "Ganger" para las reglas
 * (trabajar territorios, buscar objetos raros, forrajear, etc.).
 */
function isFighterGanger(fighter, houseId) {
  if (!fighter) return false;
  const gangerIds = getGangerTypeIdsForHouse(houseId);
  return gangerIds.includes(fighter.typeId);
}

/**
 * Cuenta cuántos luchadores de una banda cuentan como "Ganger".
 */
function countGangersInGang(gang) {
  if (!gang) return 0;
  const gangerIds = getGangerTypeIdsForHouse(gang.houseId);
  return (gang.fighters || []).filter(f => gangerIds.includes(f.typeId)).length;
}

/**
 * Devuelve el array de luchadores que cuentan como "Ganger".
 */
function getGangersInGang(gang) {
  if (!gang) return [];
  const gangerIds = getGangerTypeIdsForHouse(gang.houseId);
  return (gang.fighters || []).filter(f => gangerIds.includes(f.typeId));
}

function isGangOutlaw(gang) {
  if (!gang) return false;
  const houseData = getHouseData(gang.houseId);
  return !!(houseData && houseData.isOutlander);
}
/**
 * Devuelve las restricciones de avance de un luchador según su casa y tipo.
 * Estructura: { cannotTakeTables, cannotTakeSkills, rerollIfBallisticSkill }
 */
function getAdvanceRestrictions(houseId, typeId) {
  const houseData = getHouseData(houseId);
  if (!houseData || !houseData.advanceRestrictions) return null;
  return houseData.advanceRestrictions[typeId] || null;
}
/**
 * Comprueba si una casa tiene la regla de "avance inicial aleatorio".
 */
function hasInitialRandomAdvance(houseId) {
  const houseData = getHouseData(houseId);
  return !!(houseData && houseData.id === 'pitslaves');
}
