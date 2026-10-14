/* ==================================================
   OUTLAW RARE TRADE CHART (D66)
   Tabla de objetos raros ofrecidos en el Puesto Proscrito
   + Ítems exclusivos de la tabla
   ================================================== */

// ==================================================
// TABLA D66
// ==================================================
window.OUTLAW_RARE_CHART = {
  results: {
    // ===== 11-16 =====
    '11': { type: 'item', weaponId: 'archeotech',          label: 'Archeotech' },
    '12': { type: 'item', weaponId: 'sump-dynamo',         label: 'Sump Dynamo' },
    '13': { type: 'item', weaponId: 'stinger-mould-patch', label: 'Stinger Mould Patch' },
    '14': { type: 'item', weaponId: 'spook',               label: 'Spook' },
    '15': { type: 'item', weaponId: 'bottle-wildsnake',    label: 'Bottle of Wild Snake' },
    '16': { type: 'item', weaponId: 'bottle-wildsnake',    label: 'Bottle of Wild Snake' },

    // ===== 21: Gas Grenades =====
    '21': {
      type: 'reroll',
      label: 'Gas Grenades',
      subtable: {
        '1-2': { weaponId: 'choke',        label: 'Choke' },
        '3-4': { weaponId: 'scare',        label: 'Scare' },
        '5-6': { weaponId: 'hallucinogen', label: 'Hallucinogen' }
      }
    },

    // ===== 22: Grenades =====
    '22': {
      type: 'reroll',
      label: 'Grenades',
      subtable: {
        '1':   { weaponId: 'melta-bombs',    label: 'Melta Bombs' },
        '2-3': { weaponId: 'photon-flares',  label: 'Photon Flash Flares' },
        '4':   { weaponId: 'plasma-grenade', label: 'Plasma Grenades' },
        '5-6': { weaponId: 'smoke-bombs',    label: 'Smoke Bombs' }
      }
    },

    // ===== 23: Ammo =====
    '23': {
      type: 'reroll',
      label: 'Ammo',
      subtable: {
        '1-2': { weaponId: 'laser-hotshot-pack', label: 'Hotshot Laser Power Packs' },
        '3-5': { weaponId: 'drum-magazine',      label: 'Drum Magazine' },
        '6':   { weaponId: 'hellfire-bolt',      label: 'Hellfire Bolts' }
      }
    },

    // ===== 24: Gunsight =====
    '24': {
      type: 'reroll',
      label: 'Gunsight',
      subtable: {
        '1-2': { weaponId: 'mira-punto-rojo',  label: 'Red-dot Laser' },
        '3':   { weaponId: 'mono-visor',       label: 'Mono-sight' },
        '4-5': { weaponId: 'mira-telescopica', label: 'Telescopic Sight' },
        '6':   { weaponId: 'mira-infrarroja',  label: 'Infra-red Sight' }
      }
    },

    // ===== 25: Armour =====
    '25': {
      type: 'reroll',
      label: 'Armour',
      subtable: {
        '1-3': { weaponId: 'flak-armour',     label: 'Flak' },
        '4-5': { weaponId: 'mesh-armour',     label: 'Mesh' },
        '6':   { weaponId: 'carapace-armour', label: 'Carapace' }
      }
    },

    // ===== 26: Roll again =====
    '26': {
      type: 'reroll',
      label: 'Roll again',
      subtable: {
        '1-3': { weaponId: 'icrotic-slime', label: 'Icrotic Slime' },
        '4-6': { weaponId: 'mung-vase',     label: 'Mung Vase' }
      }
    },

    // ===== 31-36 =====
    '31': { type: 'item', weaponId: 'concealed-blade',   label: 'Concealed Blade' },
    '32': { type: 'item', weaponId: 'blade-venom',       label: 'Blade Venom' },
    '33': { type: 'item', weaponId: 'blindsnake-pouch',  label: 'Blindsnake Pouch' },
    '34': { type: 'item', weaponId: 'berserker-chip',    label: 'Berserker Chip' },
    '35': { type: 'item', weaponId: 'infra-red-goggles', label: 'Infra-red Goggles' },
    '36': { type: 'item', weaponId: 'stinger-pouch',     label: 'Stinger Pouch' },

    // ===== 41-46 =====
    '41': { type: 'item', weaponId: 'rad-counter', label: 'Rad Counter' },
    '42': { type: 'item', weaponId: 'ratskin-map', label: 'Ratskin Map' },
    '43': { type: 'item', weaponId: 'shock-maul',  label: 'Shock Maul' },
    '44': { type: 'item', weaponId: 'grapnel',     label: 'Grapnel' },
    '45': { type: 'item', weaponId: 'photo-visor', label: 'Photo-visor' },
    '46': { type: 'item', weaponId: 'respirator',  label: 'Respirator' },

    // ===== 51-53: Raid Gear =====
    '51': {
      type: 'reroll',
      label: 'Raid Gear',
      subtable: {
        '1-3': { weaponId: 'silencer',  label: 'Silencer' },
        '4-6': { weaponId: 'raid-gear', label: 'Screamers or Stummers', special: 'choose-screamers-stummers' }
      }
    },
    '52': {
      type: 'reroll',
      label: 'Raid Gear',
      subtable: {
        '1-3': { weaponId: 'silencer',  label: 'Silencer' },
        '4-6': { weaponId: 'raid-gear', label: 'Screamers or Stummers', special: 'choose-screamers-stummers' }
      }
    },
    '53': {
      type: 'reroll',
      label: 'Raid Gear',
      subtable: {
        '1-3': { weaponId: 'silencer',  label: 'Silencer' },
        '4-6': { weaponId: 'raid-gear', label: 'Screamers or Stummers', special: 'choose-screamers-stummers' }
      }
    },

    // ===== 54-56: Drugs Fixer =====
    '54': {
      type: 'reroll',
      label: 'Drugs Fixer',
      subtable: {
        '1-3': { weaponId: 'kalma',   label: 'Kalma' },
        '4-5': { weaponId: 'slaught', label: "'Slaught" },
        '6':   { weaponId: 'spur',    label: 'Spur' }
      }
    },
    '55': {
      type: 'reroll',
      label: 'Drugs Fixer',
      subtable: {
        '1-3': { weaponId: 'kalma',   label: 'Kalma' },
        '4-5': { weaponId: 'slaught', label: "'Slaught" },
        '6':   { weaponId: 'spur',    label: 'Spur' }
      }
    },
    '56': {
      type: 'reroll',
      label: 'Drugs Fixer',
      subtable: {
        '1-3': { weaponId: 'kalma',   label: 'Kalma' },
        '4-5': { weaponId: 'slaught', label: "'Slaught" },
        '6':   { weaponId: 'spur',    label: 'Spur' }
      }
    },

    // ===== 61-63: Gamble =====
    '61': { type: 'special', label: 'Special: Gamble', special: 'gamble' },
    '62': { type: 'special', label: 'Special: Gamble', special: 'gamble' },
    '63': { type: 'special', label: 'Special: Gamble', special: 'gamble' },

    // ===== 64-65: Rumour =====
    '64': { type: 'special', label: 'Special: Rumour', special: 'rumour' },
    '65': { type: 'special', label: 'Special: Rumour', special: 'rumour' },

    // ===== 66: Healer =====
    '66': { type: 'special', label: 'Special: Healer', special: 'healer' }
  }
};

// ==================================================
// ÍTEMS EXCLUSIVOS DE LA TABLA RARA OUTLAW
// ==================================================
// Se añaden al catálogo WEAPONS al cargar el script.
window.OUTLAW_RARE_ITEMS = [
  {
    id: 'archeotech',
    name: 'Archeotech',
    image: 'assets/img/weapons/archeotech.jpg',
    category: 'tools',
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
    id: 'sump-dynamo',
    name: 'Sump Dynamo',
    image: 'assets/img/weapons/sump-dynamo.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'stinger-mould-patch',
    name: 'Stinger Mould Patch',
    image: 'assets/img/weapons/stinger-mould-patch.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'spook',
    name: 'Spook',
    image: 'assets/img/weapons/spook.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'bottle-wildsnake',
    name: 'Bottle of Wild Snake',
    image: 'assets/img/weapons/bottle-wildsnake.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'icrotic-slime',
    name: 'Icrotic Slime',
    image: 'assets/img/weapons/icrotic-slime.jpg',
    category: 'tools',
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
    id: 'blade-venom',
    name: 'Blade Venom',
    image: 'assets/img/weapons/blade-venom.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'rad-counter',
    name: 'Rad Counter',
    image: 'assets/img/weapons/rad-counter.jpg',
    category: 'tools',
    cost: 0,
    costVariable: 'D6x10',
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
    id: 'kalma',
    name: 'Kalma',
    image: 'assets/img/weapons/kalma.jpg',
    category: 'tools',
    cost: 0,
    costVariable: '5+D6',
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
    id: 'slaught',
    name: "'Slaught",
    image: 'assets/img/weapons/slaught.jpg',
    category: 'tools',
    cost: 0,
    costVariable: '5+3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Fixer', valor: 'Tira D6 por sesión: 2+ está disponible el \'slaught' },
      { nombre: 'Efecto', valor: '+D3 Iniciativa y +D3 Habilidad de Arma (HB no se ve afectada)' },
      { nombre: 'Duración', valor: 'Tira 2D6 + R en cada fase de recuperación. >12 termina' },
      { nombre: 'Adicción', valor: 'Con doble 1 en la tirada de duración, el modelo se vuelve dependiente' },
      { nombre: 'Uso', valor: 'Una sola dosis por partida' }
    ],
    descripcion: "'Slaught se conoce oficialmente como Onslaught y es una droga de combate cruda hecha de una peligrosa combinación de glándulas de rata mutante y varios compuestos de adrenalina sintética. 'Slaught mejora las habilidades de lucha del individuo: aumenta la alerta y la velocidad, aparentemente ralentizando el mundo al aumentar la conciencia mental de una persona. Si no fuera por sus desafortunados efectos secundarios, sería una droga de combate ideal.\n\nFixer: Como el kalma, el resultado \"'Slaught\" en la tabla de Comercio Raro Proscrito indica que has contactado con un individuo que puede suministrarte 'slaught siempre que comercies a partir de ahora. Tira un D6 en cada sesión de comercio: con 2+ el 'slaught está disponible, con cualquier otro resultado no.\n\nEfecto: Un modelo puede tomar una dosis de 'slaught antes del inicio de una partida. 'Slaught aumenta la Iniciativa y la Habilidad de Arma del usuario en D3 puntos cada una; la Habilidad Ballística no se ve afectada. Cuando los efectos desaparecen, las habilidades de lucha vuelven a la normalidad.\n\nDuración: Tira 2D6 en cada fase de recuperación y suma la Resistencia del modelo. Si el total es 12 o menos, el modelo sigue afectado por la dosis. Si el total es mayor que 12, la dosis desaparece, el modelo se derrumba, cuenta como fijado y ya no está bajo la influencia de la droga.\n\nEfectos secundarios: Cada vez que se hace la tirada de 2D6 para la duración hay una posibilidad de que el modelo se vuelva adicto. Con un doble 1, el modelo se ha vuelto dependiente. Un personaje dependiente ya no obtiene ningún beneficio de la droga pero debe seguir tomándola en el futuro o sufrirá efectos perjudiciales.\n\nUn solo uso: el 'slaught se guarda en el alijo de la banda hasta que se usa, tras lo cual se tacha de la hoja.",
    profiles: []
  },
  {
    id: 'spur',
    name: 'Spur',
    image: 'assets/img/weapons/spur.jpg',
    category: 'tools',
    cost: 0,
    costVariable: '5+3D6',
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
    descripcion: 'El nombre spur se da a varios estimulantes similares. Spur tiene algunos efectos secundarios inusuales que desaniman a la mayoría de los individuos a usarlo. Tomar spur implica riesgos adicionales porque no todo el spur es igual, y la potencia de cualquier efecto secundario no puede juzgarse con precisión.\n\nFixer: Como el kalma, el resultado \"Spur\" en la tabla de Comercio Raro Proscrito indica que has contactado con un individuo que puede suministrarte spur ocasionalmente siempre que comercies a partir de ahora. Tira un D6 en cada sesión: con 4+ el spur está disponible, con cualquier otro resultado no.\n\nEfecto: Un modelo puede tomar una dosis de spur antes del inicio de una partida. Tira un D6 en la tabla para determinar sus efectos:\n\n1: El lote es viejo o malo y no tiene efecto.\n2-3: Aumenta Movimiento e Iniciativa en +D3.\n4-5: Aumenta Movimiento e Iniciativa en +3 puntos, pero sensibiliza el sistema nervioso del personaje, de modo que un shock físico repentino puede dejarlo inconsciente. Para representar esto, la Resistencia del modelo se reduce en -1 punto mientras dure el spur.\n6: Aumenta la Iniciativa y la Habilidad de Arma del personaje en +D6 puntos cada una, Habilidad Ballística y Movimiento en +D3 puntos cada una. Como resultado de la condición nerviosa hiperactiva del personaje, cae derribado durante un turno entero tan pronto como la droga desaparece, tras lo cual se recupera automáticamente.\n\nDuración: Tira 2D6 en cada fase de recuperación y suma la Resistencia del modelo. Si el total es 12 o menos, el modelo sigue afectado por la dosis. Si es mayor que 12, la dosis desaparece.\n\nEfectos secundarios: No hay efectos secundarios a largo plazo.\n\nUn solo uso: el spur se guarda en el alijo hasta que se usa, tras lo cual se tacha de la hoja.',
    profiles: []
  },
  {
    id: 'raid-gear',
    name: 'Screamers o Stummers',
    image: 'assets/img/weapons/raid-gear.jpg',
    category: 'tools',
    cost: 10,
    costVariable: '3D6',
    free: false,
    removable: true,
    purchasable: true,
    rarity: 'rare',
    propiedades: [
      { nombre: 'Tipo', valor: 'Elige entre Screamers o Stummers' },
      { nombre: 'Uso', valor: 'Una sola partida' },
      { nombre: 'Screamers', valor: 'Alarma de proximidad contra intrusos' },
      { nombre: 'Stummers', valor: 'Anulan Screamers y amortiguan sonidos' }
    ],
    descripcion: 'Los Screamers y los Stummers son pequeños dispositivos de seguridad usados durante incursiones y escenarios de rescate.\n\nScreamers: pequeñas alarmas de proximidad utilizadas para proteger el escondite de una banda. Una banda dispersa docenas alrededor del perímetro. Solo duran una partida.\n\nStummers: similares a los Screamers, pero son dispersados por los intrusos a medida que se mueven. Una vez activados, todo sonido en unos pocos metros se amortigua momentáneamente. Reducen -1 todas las probabilidades de activar la alarma. Anulan completamente a los Screamers.\n\nElige uno de los dos al comprar este objeto.',
    profiles: []
  }
];


// ==================================================
// HELPERS
// ==================================================

/**
 * Tira un D66 (dos dados de 6) y devuelve { tens, ones, result }.
 */
function rollD66() {
  const tens = Math.floor(Math.random() * 6) + 1;
  const ones = Math.floor(Math.random() * 6) + 1;
  return { tens, ones, result: `${tens}${ones}` };
}

/**
 * Tira en la tabla Rare Trade de Outlaws.
 * Devuelve un objeto con la información del ítem ofrecido.
 */
function rollOutlawRareTrade() {
  const roll = rollD66();
  const entry = window.OUTLAW_RARE_CHART.results[roll.result];
  if (!entry) return null;

  if (entry.type === 'reroll') {
    const subRoll = rollD6();
    let subEntry = null;

    for (const rangeKey in entry.subtable) {
      if (rangeKey.includes('-')) {
        const [min, max] = rangeKey.split('-').map(Number);
        if (subRoll >= min && subRoll <= max) {
          subEntry = entry.subtable[rangeKey];
          break;
        }
      } else if (subRoll === Number(rangeKey)) {
        subEntry = entry.subtable[rangeKey];
        break;
      }
    }

    return {
      d66: roll.result,
      d6: subRoll,
      category: entry.label,
      entry: subEntry,
      type: subEntry ? (subEntry.special ? 'special-choice' : 'item') : 'unknown'
    };
  }

  return {
    d66: roll.result,
    category: entry.label,
    entry: entry,
    type: entry.type
  };
}