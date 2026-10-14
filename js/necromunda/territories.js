/* ==================================================
   TERRITORIOS DE NECROMUNDA
   Sistema de territorios para casas grandes
   ================================================== */

// ==================================================
// TABLA DE TERRITORIOS (D66)
// ==================================================
const TERRITORIES = [
  {
    id: 'chem-pit',
    name: 'Chem Pit',
    d66Range: [11, 12],
    incomeType: '2D6',
    incomeLabel: '2D6',
    description: 'Un pozo químico altamente peligroso. El pozo es una fuente de productos químicos en constante cambio, depósitos sulfurosos y todo tipo de sustancias venenosas y corrosivas. Vender estos productos químicos te da 2D6 créditos.',
    specialNote: 'El trabajo es extremadamente peligroso. Si sacas un doble al calcular tus créditos, el ganger cae al pozo químico pero logra salir por sí mismo. Se arrastra de vuelta a la base horriblemente cicatrizado, con la piel cubierta de ampollas. Su apariencia es tan horrible que desde entonces causa miedo. No se recoge income.',
    effect: 'dangerous-chem'
  },
  {
    id: 'old-ruins',
    name: 'Old Ruins',
    d66Range: [13, 16],
    incomeType: 'fixed',
    incomeValue: 10,
    incomeLabel: '10',
    description: 'Hay una zona expuesta de ruinas antiguas no muy lejos de tu asentamiento. Si un ganger busca entre las ruinas puede encontrar chatarra de archeotech, trozos de metal viejo o curiosidades interesantes: suficiente para vender por 10 créditos.',
    effect: null
  },
  {
    id: 'slag',
    name: 'Slag',
    d66Range: [21, 24],
    incomeType: 'fixed',
    incomeValue: 15,
    incomeLabel: '15',
    description: 'Cerca de tu asentamiento hay una extensa red de túneles y madrigueras llenas de escoria de hierro y otros residuos químicos solidificados. Un ganger puede trabajar la escoria rompiéndola para venderla a los Gremios locales por 15 créditos.',
    effect: null
  },
  {
    id: 'water-still',
    name: 'Water Still',
    d66Range: [25, 26],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'La banda ha descubierto y renovado un viejo alambique de agua en los páramos. El alambique es trabajado por la familia o amigos de uno de los gangers. Los trenes de esclavos del Gremio llevan el agua a los colonos locales, dando a la banda una parte de los ingresos que asciende a D6x10 créditos.',
    effect: null
  },
  {
    id: 'settlement',
    name: 'Settlement',
    d66Range: [31, 34],
    incomeType: 'fixed',
    incomeValue: 30,
    incomeLabel: '30',
    description: 'Las familias de tus luchadores poseen agujeros o talleres dentro del asentamiento donde se basa la banda. Estas propiedades ayudan a mantener a la banda proporcionando comida, refugio y un vínculo vital con los comerciantes locales.',
    specialNote: 'Un ganger que visita a su familia recoge 30 créditos. Además, hay una posibilidad de que un joven familiar se una a tu banda. Tira D6 tras cada batalla. Con un 6 puedes reclutar un Juve gratis si quieres, que viene equipado con un cuchillo. Si la banda no tiene Juves (como los Pit Slaves), no se recluta ningún luchador gratis.',
    effect: 'settlement-recruit'
  },
  {
    id: 'mine-workings',
    name: 'Mine Workings',
    d66Range: [35, 36],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'En una ubicación secreta en los páramos, tu banda ha descubierto una mina. Las excavaciones producen gemas de carnotita u otros minerales valiosos. Amigos de los luchadores ya están trabajando a cambio de una parte de los beneficios. Puedes recoger D6x10 créditos como tu parte de los beneficios hasta la fecha.',
    specialNote: 'Si capturas a un luchador enemigo, puedes optar por ponerlo permanentemente a trabajar en tu mina en lugar de venderlo a esclavistas. Cada trabajador cautivo añade +1 a tu tirada de D6 por ingresos de la mina.',
    effect: 'mine-captives'
  },
  {
    id: 'tunnels',
    name: 'Tunnels',
    d66Range: [41, 42],
    incomeType: 'fixed',
    incomeValue: 10,
    incomeLabel: '10',
    description: 'Tu banda ha encontrado una entrada fortuita a un laberinto de antiguos conductos de servicio bajo el suelo de la cúpula.',
    specialNote: 'Cuando la banda luche una batalla, puede usar estos conductos para desplegar hasta tres luchadores en cualquier lugar del campo de batalla a nivel del suelo. Los modelos se colocan al final del primer turno del jugador y no pueden colocarse a menos de 8" de modelos enemigos. No más del 50% de los luchadores inicialmente desplegables de la banda pueden usar Tunnels y Vents.',
    effect: 'tunnels-deploy'
  },
  {
    id: 'vents',
    name: 'Vents',
    d66Range: [43, 44],
    incomeType: 'fixed',
    incomeValue: 10,
    incomeLabel: '10',
    description: 'La banda ha encontrado una entrada oculta a una red de antiguos pozos de ventilación.',
    specialNote: 'Cuando la banda luche, puede usar estos pozos para desplegar hasta tres luchadores en cualquier lugar del nivel superior de los edificios del campo de batalla. Los modelos se colocan al final del primer turno del jugador y no pueden colocarse a menos de 8" de modelos enemigos. No más del 50% de los luchadores inicialmente desplegables de la banda pueden usar Vents y Tunnels.',
    effect: 'vents-deploy'
  },
  {
    id: 'holestead',
    name: 'Holestead',
    d66Range: [45, 46],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'Uno de los gangers de la banda viene de un holestead en los páramos. El agujero produce una cosecha de limo nutritivo que el ganger puede ayudar a su familia a llevar al puesto comercial local a cambio de una parte de los beneficios de D6x10 créditos.',
    effect: null
  },
  {
    id: 'drinking-hole',
    name: 'Drinking Hole',
    d66Range: [51, 52],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'El líder de tu banda ha heredado un viejo agujero de bebida en pago de una deuda de juego pendiente. El agujero gana D6x10 si es visitado por un ganger y también proporciona a la banda una base conveniente en el asentamiento local.',
    specialNote: 'Además, tira D6 tras cada batalla. Con un 6, tus contactos escuchan rumores sobre las actividades de una banda rival. Puedes sumar o restar 1 a la tirada de la Tabla de Escenarios en la próxima partida.',
    effect: 'drinking-hole-rumors'
  },
  {
    id: 'workshop',
    name: 'Workshop',
    d66Range: [53, 54],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'La familia o amigos de uno de tus gangers dirige un taller en el asentamiento local. Puedes intercambiar trozos de chatarra por reparaciones baratas o dinero en efectivo. Visitar el taller te ganará D6x10 créditos.',
    specialNote: 'Gracias al cuidado meticuloso de tu taller, siempre ignoras la primera tirada de Munición durante una batalla. Se asume que pasas la tirada y no se tira ningún dado. Duplica los bonos de este tipo aplicables a tiradas de Munición posteriores en su lugar.',
    effect: 'workshop-ammo'
  },
  {
    id: 'guilder-contact',
    name: 'Guilder Contact',
    d66Range: [55, 56],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'Un Gremio local te ha ofrecido tarifas favorables a cambio de tu negocio. Como resultado, puedes aumentar tus ingresos sustancialmente. Si deseas tratar con tu contacto del Gremio, ganas un extra de D6x10 créditos.',
    specialNote: 'Si descubres botín durante cualquier escenario, puedes venderlo a un Contacto del Gremio. Cada contador de botín vale 5 créditos de ingreso adicionales.',
    effect: 'guilder-loot'
  },
  {
    id: 'mineral-outcrop',
    name: 'Mineral Outcrop',
    d66Range: [61, 61],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'En los páramos hay un afloramiento de desechos minerales donde un ganger puede recoger valiosas piedras de estrella, cristales de adonita, adamantorita ígnea o cualquiera de los muchos otros tipos de gemas minerales que se forman en el Underhive.',
    specialNote: 'Ganarás D6x10 créditos buscando piedras preciosas en el afloramiento. Si se saca un 6, se descubre una veta de gemas de alta calidad, añadiendo un D6x10 créditos extra a los ingresos de la banda.',
    effect: 'mineral-vein'
  },
  {
    id: 'friendly-doc',
    name: 'Friendly Doc',
    d66Range: [62, 62],
    incomeType: 'D6x10',
    incomeLabel: 'D6x10',
    description: 'Uno de los médicos locales se ha ofrecido a curar a tus luchadores heridos a tarifas favorables a cambio de sangre y donaciones de tejido de tus gangers. Si un ganger quiere participar con unas pocas pinta de sangre o algún otro tejido renovable, ganas D6x10 créditos.',
    specialNote: 'Si un luchador saca un resultado de Muerto en la tabla de Heridas Graves, el Doc puede intentar curarlo. Esta decisión debe tomarse tan pronto como se tira la herida, y un Doc solo puede hacer un único intento por batalla. Si es enviado al Doc, tira D6. Con 5+, la tirada de herida se trata como un resultado de Heridas Múltiples en su lugar.',
    effect: 'friendly-doc-heal'
  },
  {
    id: 'gambling-den',
    name: 'Gambling Den',
    d66Range: [63, 63],
    incomeType: '2D6x10',
    incomeLabel: '2D6x10',
    description: 'Tu banda dirige un antro de juego en un viejo agujero en desuso de tu asentamiento. Aunque los ingresos por dirigir un juego son buenos, es un negocio arriesgado porque los Underhivers son tramposos notorios y malos perdedores.',
    specialNote: 'Si decides dirigir una sesión de juego, recibes 2D6x10 créditos. Sin embargo, si sacas un doble, pierdes esa cantidad de créditos de los ingresos de ese turno en su lugar. Las pérdidas se deducen antes de aplicar los costes de mantenimiento básicos. Si una banda no puede pagar las deudas de juego, la diferencia debe cubrirse de su alijo. Si aún no es suficiente para cubrir las deudas de la banda, deben venderse armas o equipo.',
    effect: 'gambling-double'
  },
  {
    id: 'spore-cave',
    name: 'Spore Cave',
    d66Range: [64, 64],
    incomeType: '2D6x10',
    incomeLabel: '2D6x10',
    description: 'Tu banda ha descubierto una cueva oculta donde crecen muchos tipos de hongos raros, como perla esporada y moho de hierro. Un ganger puede cosechar los hongos y venderlos a comerciantes locales por 2D6x10 créditos.',
    specialNote: 'Si sacas doble 1 al cosechar hongos, el ganger que recoge ha contraído la Enfermedad de Esporas. Esta es una enfermedad fúngica en la que hongos rechonchos y coloridos brotan por todo el cuerpo de la víctima. La Enfermedad de Esporas no es letal y la recuperación es automática, pero el ganger no podrá participar en futuras batallas hasta que se recupere sacando un 4, 5 o 6 al inicio de una partida. Una vez recuperado, puede luchar con normalidad.',
    effect: 'spore-sickness'
  },
  {
    id: 'archeotech-hoard',
    name: 'Archeotech Hoard',
    d66Range: [65, 65],
    incomeType: '2D6x10',
    incomeLabel: '2D6x10',
    description: 'Tu banda ha descubierto una entrada oculta a una pequeña cúpula sin explorar llena de restos de dispositivos tecnológicos antiguos que pueden venderse por 2D6x10 créditos.',
    specialNote: 'Siempre que tu banda tenga cuidado de no vender demasiados objetos a la vez, nadie sospechará que has descubierto una nueva cúpula. No se incurre en riesgo al recoger 2D6x10 créditos. Sin embargo, si quieres trabajar la cúpula más intensamente puedes hacerlo. Un ganger puede recoger 3D6x10, 4D6x10, 5D6x10 o incluso 6D6x10 del hoard, pero si saca algún doble entonces ha sido descubierto entrando en la cúpula. Aún recoges el ingreso tirado pero el hoard ya no es un secreto y se queda vacío a manos de cazadores de tesoros. El territorio se convierte en Old Ruins.',
    effect: 'archeotech-deplete'
  },
  {
    id: 'green-hivers',
    name: 'Green Hivers',
    d66Range: [66, 66],
    incomeType: 'choose',
    incomeLabel: 'Elige',
    description: 'Te haces amigo de un grupo de colonos que han emigrado de Hive City al Underhive para empezar una nueva vida. Posiblemente tu banda se haya topado con los colonos perdidos o agonizantes en los páramos. Quizás sean parientes o amigos de uno de tus luchadores que los han buscado deliberadamente. Gracias a tus contactos e influencia puedes dar a los verdes hivers un buen comienzo, y naturalmente están agradecidos por tu ayuda y encantados de ayudar en el futuro.',
    specialNote: 'Puedes elegir cualquier tipo de territorio de la tabla. El territorio representa la vocación de los colonos o un descubrimiento que han hecho en su viaje al Underhive.',
    effect: 'choose-territory'
  }
];

// ==================================================
// TABLA DE PROFIT
// ==================================================
// Ingresos brutos × Número de modelos en la banda
// Devuelve el profit neto
const PROFIT_TABLE = [
  // [incomeMin, incomeMax, [1-3, 4-6, 7-9, 10-12, 13-15, 16-18, 19+]]
  [0,   29,  [15, 10,  5,  0,  0,  0,  0]],
  [30,  49,  [25, 20, 15,  5,  0,  0,  0]],
  [50,  79,  [35, 30, 25, 15,  5,  0,  0]],
  [80,  119, [50, 45, 40, 30, 20,  5,  0]],
  [120, 169, [65, 60, 55, 45, 35, 15,  0]],
  [170, 229, [85, 80, 75, 65, 55, 35, 15]],
  [230, 299, [105, 100, 95, 85, 75, 55, 35]],
  [300, 379, [120, 115, 110, 100, 90, 65, 45]],
  [380, 459, [135, 130, 125, 115, 105, 80, 55]],
  [460, 559, [145, 140, 135, 125, 115, 90, 65]],
  [560, 99999, [155, 150, 145, 135, 125, 100, 70]]
];

// ==================================================
// HELPERS
// ==================================================

/**
 * Devuelve el territorio a partir de una tirada D66.
 * @param {string} d66 - resultado tipo '11', '26', '63', etc.
 */
function getTerritoryByD66(d66) {
  const num = parseInt(d66, 10);
  return TERRITORIES.find(t => num >= t.d66Range[0] && num <= t.d66Range[1]) || null;
}

/**
 * Tira un D66 y devuelve el resultado como string.
 * Función específica de territorios para evitar conflictos.
 */
function rollD66Territory() {
  const tens = Math.floor(Math.random() * 6) + 1;
  const ones = Math.floor(Math.random() * 6) + 1;
  return `${tens}${ones}`;
}

/**
 * Genera un territorio aleatorio.
 */
function rollRandomTerritory() {
  const d66 = rollD66Territory();
  return getTerritoryByD66(d66);
}

/**
 * Genera N territorios iniciales (por defecto 5).
 */
function generateInitialTerritories(count = 5) {
  const territories = [];
  for (let i = 0; i < count; i++) {
    const territory = rollRandomTerritory();
    territories.push({
      id: 'terr_' + Date.now() + '_' + i,
      territoryId: territory.id,
      acquiredAt: Date.now()
    });
  }
  return territories;
}

/**
 * Calcula el profit según income bruto y número de modelos.
 */
function calculateProfit(income, modelCount) {
  // Determinar franja de income
  let incomeRow = PROFIT_TABLE.find(r => income >= r[0] && income <= r[1]);
  if (!incomeRow) return 0;

  // Determinar columna según modelos
  let colIndex;
  if (modelCount <= 3) colIndex = 0;
  else if (modelCount <= 6) colIndex = 1;
  else if (modelCount <= 9) colIndex = 2;
  else if (modelCount <= 12) colIndex = 3;
  else if (modelCount <= 15) colIndex = 4;
  else if (modelCount <= 18) colIndex = 5;
  else colIndex = 6;

  return incomeRow[2][colIndex];
}

/**
 * Tira el income de un territorio.
 * @param {object} territory - objeto del catálogo
 * @returns {object} { total, rolls, extra }
 */
function rollTerritoryIncome(territory) {
  if (!territory) return { total: 0, rolls: [], extra: null };

  const type = territory.incomeType;

      if (type === 'fixed') {
    const result = { total: territory.incomeValue || 0, rolls: [], extra: null };

    // ===== SETTLEMENT: tirar D6 para ver si se une un Juve gratis =====
    if (territory.effect === 'settlement-recruit') {
      const d6 = Math.floor(Math.random() * 6) + 1;
      result.recruitRoll = d6;
      result.canRecruitJuve = (d6 === 6);
    }
    // ==================================================================

    return result;
  }

  if (type === '2D6') {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const isDouble = d1 === d2;

    // ===== CHEM PIT: si doble → 0 income + cicatrices =====
    if (territory.effect === 'dangerous-chem' && isDouble) {
      return {
        total: 0,
        rolls: [d1, d2],
        isDouble: true,
        specialEffect: 'chem-pit-accident',
        specialMessage: 'El ganger cayó al pozo químico. Salió horriblemente cicatrizado y ahora causa miedo. No se recoge income.'
      };
    }
    // ======================================================

    return {
      total: d1 + d2,
      rolls: [d1, d2],
      isDouble: isDouble,
      extra: null
    };
  }

  if (type === 'choose') {
    return { total: 0, rolls: [], extra: 'choose-needed' };
  }

  return { total: 0, rolls: [], extra: null };
}

/**
 * Devuelve el label formateado del income.
 */
function formatTerritoryIncome(territory) {
  if (!territory) return '—';
  return territory.incomeLabel || '—';
}
/**
 * Aplica una herida especial a un ganger desde un territorio.
 */
function applyTerritoryInjury(fighter, injuryId) {
  if (!fighter || !injuryId) return false;
  if (!fighter.injuries) fighter.injuries = [];
  if (fighter.injuries.includes(injuryId)) return false;
  fighter.injuries.push(injuryId);
  return true;
}

/**
 * Comprueba si un luchador está bloqueado para trabajar/buscar.
 * Bloqueado si tiene "spore-sickness".
 */
function isFighterBlocked(fighter) {
  if (!fighter) return false;
  if (!fighter.injuries) return false;
  return fighter.injuries.includes('spore-sickness');
}