/* ==================================================
   LÓGICA DE LUCHADORES
   ================================================== */


// ==================================================
// HELPER: Obtener arma del catálogo correcto según el luchador
// ==================================================
/**
 * Devuelve un arma del catálogo correcto (Necromunda o Outlaw)
 * según el tipo de banda a la que pertenece el luchador.
 * Busca primero en el catálogo correspondiente.
 */
function getWeaponForFighter(fighter, weaponId) {
  if (!fighter || !weaponId) return null;

  // Determinar la casa de la banda
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return getWeaponById(weaponId);

  if (isGangOutlander(gang)) {
    // Buscar primero en el catálogo Outlaw
    const outlawW = getOutlawWeaponById(weaponId);
    if (outlawW) return outlawW;
    // Fallback por si alguna arma común no está duplicada
    return getWeaponById(weaponId);
  }

  // Buscar en el catálogo Necromunda
  return getWeaponById(weaponId);
}

function isGangOutlaw(gang) {
  if (!gang) return false;
  const houseData = getHouseData(gang.houseId);
  return !!(houseData && houseData.isOutlander);
}

// ---------- AÑADIR LUCHADOR ----------
function addFighter(gangId, typeId) {
  const gang = gangs.find(g => g.id === gangId);
  if (!gang) return;

  // Buscar el tipo en los tipos propios de la casa primero,
  // y si no, en los tipos comunes (FIGHTER_TYPES)
  const houseData = getHouseData(gang.houseId);
  let type = null;
  if (houseData && houseData.fighterTypes) {
    type = houseData.fighterTypes.find(t => t.id === typeId);
  }
  if (!type) {
    type = getFighterTypeById(typeId);
  }
  if (!type) return;

  const fighters = gang.fighters || [];

  if (!canRecruitFighter(gang, typeId)) return;

  const initialXP = getInitialXP(type.id, gang.houseId);

   const fighter = {
    id: 'fighter_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    typeId: type.id,
    typeName: type.name,
    name: '',
    image: null,
    stats: { ...type.stats },
    originalStats: { ...type.stats },
    cost: type.cost,
    equipmentCost: 0,
    xp: initialXP,
    initialXP: initialXP,
    advancesTaken: 0,
    level: type.id === 'leader' ? 9 : 1,
    special: [...type.special],
    equipment: [],
    injuries: [],
    createdAt: Date.now()
  };

    // Auto-equipar el Cuchillo de Pandillero
  equipWeapon(fighter, 'pandillero-knife');

  // Avance inicial aleatorio (regla "Experimentados" de Pit Slaves)
  if (hasInitialRandomAdvance(gang.houseId)) {
    applyInitialRandomAdvance(fighter, gang);
  }

  // Descontar créditos de la banda
  spendCredits(gang, type.cost);

  fighters.push(fighter);
  gang.fighters = fighters;

  saveGangs(gangs);
  renderGangDetail(gang);
}

// ---------- ¿SE PUEDE RECLUTAR? ----------
// ---------- ¿SE PUEDE RECLUTAR? ----------
function canRecruitFighter(gang, typeId) {
  const fighters = gang.fighters || [];

  // Declaramos houseData UNA SOLA VEZ al principio
  const houseData = getHouseData(gang.houseId);

  // Buscar el tipo en los tipos propios de la casa primero, y si no, en los comunes
  let type = null;
  if (houseData && houseData.fighterTypes) {
    type = houseData.fighterTypes.find(t => t.id === typeId);
  }
  if (!type) {
    type = getFighterTypeById(typeId);
  }
  if (!type) return false;

  const available = getGangAvailable(gang);
  if (available < type.cost) return false;

  if (type.max !== null) {
    const count = fighters.filter(f => f.typeId === typeId).length;
    if (count >= type.max) return false;
  }

  // Solo aplica el límite de júves a las 6 casas grandes
  if (typeId === 'juve') {
    const juves = fighters.filter(f => f.typeId === 'juve').length;
    const total = fighters.length;
    if ((juves + 1) > Math.floor((total + 1) / 2) && total >= 2) {
      return false;
    }
  }

  // Regla especial de Pit Slaves: mínimo 50% deben ser tipo Pit Slave
  // Nota: esta regla se comprueba cuando se INTENTA no añadir un Pit Slave
  // Es decir: si ya tienes menos del 50%, solo puedes añadir Pit Slaves
  if (houseData && houseData.id === 'pitslaves') {
    const pitSlaves = fighters.filter(f => f.typeId === 'pit-slave').length;
    const totalAfter = fighters.length + 1;
    const pitSlavesAfter = pitSlaves + (typeId === 'pit-slave' ? 1 : 0);

    // Si después de añadir este luchador los Pit Slaves son menos del 50%, bloqueamos
    if (pitSlavesAfter / totalAfter < 0.5 && totalAfter > 1) {
      return false;
    }
  }

  return true;
}

// ==================================================
// CRÉDITOS
// ==================================================

/**
 * Créditos disponibles de la banda (valor guardado, se actualiza en cada movimiento).
 */
function getGangAvailable(gang) {
  return gang.creditsAvailable || 0;
}

/**
 * Descuenta créditos de la banda. Devuelve true si había suficientes.
 */
function spendCredits(gang, amount) {
  const available = getGangAvailable(gang);
  if (available < amount) return false;
  gang.creditsAvailable = available - amount;
  return true;
}

function addCredits(gang, amount) {
  gang.creditsAvailable = getGangAvailable(gang) + amount;
}

/**
 * (DEPRECATED) Cálculo histórico de gasto. Se mantiene por si acaso.
 */
function getGangSpent(gang) {
  const fighters = gang.fighters || [];
  return fighters.reduce((sum, f) => {
    return sum + (f.cost || 0) + getFighterEquipmentCost(f);
  }, 0);
}

/**
 * Coste del equipo equipado a un luchador (excluye objetos gratuitos).
 */
function getFighterEquipmentCost(fighter) {
  let sum = 0;
  (fighter.equipment || []).forEach(eq => {
    const weapon = getWeaponForFighter(fighter, eq.weaponId);
    if (weapon && !weapon.free) {
      sum += weapon.cost || 0;
    }
  });
  return sum;
}

/**
 * Valor de un luchador para el Gang Rating.
 */
function getFighterValue(fighter) {
  return (fighter.cost || 0) + getFighterEquipmentCost(fighter);
}

/**
 * Gang Rating = suma de valores de luchadores. El almacén NO cuenta.
 */
function getGangRating(gang) {
  const fighters = gang.fighters || [];
  let value = 0;
  fighters.forEach(f => {
    value += getFighterValue(f);
  });
  return value;
}

function getFighterTotalCost(fighter) {
  return (fighter.cost || 0) + getFighterEquipmentCost(fighter);
}

function getGangFighterCount(gang, typeId) {
  const fighters = gang.fighters || [];
  if (!typeId) return fighters.length;
  return fighters.filter(f => f.typeId === typeId).length;
}

// ---------- RENDERIZAR LA FICHA DE BANDA ----------
function renderGangDetail(gang) {
  const container = document.getElementById('gang-detail-content');
  if (!container) return;

  const repName = getReputationName(gang.reputation);
  const fighters = gang.fighters || [];
  const available = getGangAvailable(gang);

  const thumbHTML = gang.image
    ? `<img src="${gang.image}" alt="${gang.name}">`
    : `<span>+</span>`;

  const currentRound = gang.currentRound || 1;
  const isCreation = currentRound === 1;
  const gangRating = getGangRating(gang);

    const outlawChip = isGangOutlaw(gang)
    ? `<span class="gang-detail-outlaw">PROSCRITO</span>`
    : '';

    let html = `
    <div class="gang-detail-thumb">${thumbHTML}</div>
    <div class="gang-detail-name">${escapeHTML(gang.name)}</div>
    <div class="gang-detail-chips">
      <span class="gang-detail-house">${escapeHTML(gang.houseName)}</span>
      <span class="gang-detail-rep">${repName} · ${gang.reputation}</span>
      ${outlawChip}
    </div>
           <div class="gang-detail-credits">
      Créditos: <strong>${available}</strong>
    </div>
    <div class="gang-credits-controls">
      <button class="btn-credits-open" data-action="open-credits-modal">Modificar créditos</button>
    </div>

    <div class="gang-rating-panel">
      <span class="gang-rating-label">Valor de Banda</span>
      <span class="gang-rating-value">${gangRating}</span>
    </div>

    <div class="gang-round-panel ${isCreation ? 'gang-round-panel--creation' : ''}">
      <div class="gang-round-info">
        <span class="gang-round-label">Ronda ${currentRound}</span>
        ${isCreation ? '<span class="gang-round-badge">FASE DE CREACIÓN</span>' : ''}
      </div>
      <button class="gang-round-btn" data-action="finish-round">
        ${isCreation ? 'Finalizar Ronda 1' : 'Finalizar Ronda'}
      </button>
    </div>
  `;
    const hasHouseRules = (() => {
    const hd = getHouseData(gang.houseId);
    return hd && hd.specialRules && hd.specialRules.length > 0;
  })();

  if (hasHouseRules) {
    html += `
      <button class="btn-house-rules" data-action="open-house-rules">
        Reglas de la casa
      </button>
    `;
  }


  const types = getFighterTypesForHouse(gang.houseId);
  if (types.length === 0) {
    html += `
      <div class="gang-no-types">
        🚧 Esta casa aún no tiene tipos de luchador configurados.
      </div>
    `;
  } else {
    html += `<div class="add-fighter-section"><h3>Añadir combatiente:</h3><div class="add-fighter-buttons">`;
    types.forEach(type => {
      const can = canRecruitFighter(gang, type.id);
      html += `
        <button class="btn-add-fighter ${can ? '' : 'disabled'}"
                data-action="add-fighter"
                data-type-id="${type.id}"
                ${can ? '' : 'disabled'}>
          + ${type.name} (${type.cost}c)
        </button>
      `;
    });
    html += `</div></div>`;
  }

  if (fighters.length === 0) {
    html += `
            <div class="fighters-empty">
        <p>Aún no hay luchadores en esta banda</p>
        <p class="fighters-empty-hint">Usa los botones de arriba para añadir</p>
      </div>
    `;
  } else {
    html += `<div class="fighters-list">`;
    fighters.forEach(f => {
      html += renderFighterCard(f, gang);
    });
    html += `</div>`;
  }

  html += renderGangStash(gang);
  container.innerHTML = html;
}

// ==================================================
// ALMACÉN DE LA BANDA
// ==================================================

function renderGangStash(gang) {
  const stash = gang.stash || [];

  let html = `
        <div class="gang-stash">
      <div class="gang-stash-header">
        <span class="gang-stash-title">Almacén de la banda</span>
      </div>
  `;

  if (stash.length === 0) {
    html += `
      <div class="stash-empty">
        <p>El almacén está vacío.</p>
        <p class="stash-empty-hint">Las armas compradas en el Mercado aparecerán aquí.</p>
      </div>
    `;
  } else {
    html += `<div class="stash-list">`;
        stash.forEach(item => {
      const weapon = getWeaponById(item.weaponId);
      if (!weapon) return;

      const icon = getWeaponCategoryIcon(weapon.category);
      const imgHTML = weapon.image
        ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="stash-item-img">`
        : `<span class="stash-item-icon">${icon}</span>`;

      // Sufijo ★ si es Única en un Millón
      const oiamSuffix = item.oneInAMillion ? ' ★' : '';

      html += `
        <div class="stash-item">
                   <button class="stash-item-main" 
                  data-action="open-weapon-modal"
                  data-weapon-id="${weapon.id}"
                  data-oiam="${item.oneInAMillion ? '1' : ''}">
            ${imgHTML}
            <span class="stash-item-name">${escapeHTML(weapon.name)}${oiamSuffix}</span>
          </button>
          <button class="stash-item-actions-btn"
                  data-action="open-weapon-actions"
                  data-source="stash"
                  data-item-id="${item.id}"
                  data-weapon-id="${weapon.id}"
                  title="Opciones">⚙️</button>
        </div>
      `;
    });
    html += `</div>`;
  }

  html += `</div>`;
  return html;
}

// ---------- TARJETA DE LUCHADOR ----------
function renderFighterCard(fighter, gang) {
  const totalCost = getFighterTotalCost(fighter);
  const displayName = fighter.name || `(${fighter.typeName} sin nombre)`;

   const baseStats = fighter.stats;
  const stats = getEffectiveStats(fighter);
  const houseMaxes = getHouseStatMaximums(gang.houseId);

    function statBox(key, value) {
    // Si la stat es null (ej: Pit Fighter sin HB), mostramos "—"
    if (value === null || value === undefined) {
      return `
        <div class="stat stat--null">
          <span class="stat-label">${key}</span>
          <span class="stat-value">—</span>
        </div>
      `;
    }

       const baseValue = baseStats[key];
    const isModified = value !== baseValue;
    const max = houseMaxes[key];
    const isMax = value >= max;

    // Comprobar si la stat ha subido por avance (stat "original" vs actual base)
    const originalStats = fighter.originalStats || {};
    const isAdvanced = originalStats[key] !== undefined && baseValue > originalStats[key];

    let suffix = '';
    if (isAdvanced) suffix += '<span class="stat-advanced">▲</span>';
    if (isModified) suffix += '<span class="stat-modified">⚡</span>';
    if (isMax) suffix += '<span class="stat-max-star">★</span>';

    return `
      <div class="stat ${isMax ? 'stat-max' : ''} ${isModified ? 'stat-modified-box' : ''}"
           data-action="show-stat-info"
           data-stat-key="${key}"
           data-fighter-id="${fighter.id}"
           title="${isModified ? 'Modificado por equipo' : ''}">
        <span class="stat-label">${key}</span>
        <span class="stat-value">${value}${suffix}</span>
      </div>
    `;
  }

  const armourSave = getEffectiveArmourSave(fighter);
  const armourSaveValue = armourSave ? armourSave.value : '—';
  const armourIsSet = !!armourSave;

  const statsHTML = `
    <div class="fighter-stats">
      ${statBox('M', stats.M)}
      ${statBox('HA', stats.HA)}
      ${statBox('HB', stats.HB)}
      ${statBox('F', stats.F)}
      ${statBox('R', stats.R)}
      ${statBox('H', stats.H)}
      ${statBox('I', stats.I)}
      ${statBox('A', stats.A)}
      ${statBox('Ld', stats.Ld)}
      <div class="stat ${armourIsSet ? 'stat-modified-box' : ''}"
           data-action="show-stat-info"
           data-stat-key="Sv"
           data-fighter-id="${fighter.id}"
           title="${armourIsSet ? 'Salvación de armadura' : 'Sin armadura'}">
        <span class="stat-label">Sv</span>
        <span class="stat-value">${armourSaveValue}${armourIsSet ? '<span class="stat-modified">⚡</span>' : ''}</span>
      </div>
    </div>
  `;

  const equipment = fighter.equipment || [];
  let equipmentHTML = '';
  if (equipment.length > 0) {
           const itemsHTML = equipment.map(eq => {
      const weapon = getWeaponForFighter(fighter, eq.weaponId);
      if (!weapon) return '';
      const costLabel = weapon.free ? 'Gratis' : `${weapon.cost}c`;

      // Sufijo ★ si es Única en un Millón
      const oiamSuffix = eq.oneInAMillion ? ' ★' : '';

      const iconHTML = weapon.image
        ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="fighter-equipment-img">`
        : `<span class="fighter-equipment-icon">${getWeaponCategoryIcon(weapon.category)}</span>`;

      return `
        <div class="fighter-equipment-item">
                    <button class="fighter-equipment-main"
                  data-action="open-weapon-modal"
                  data-weapon-id="${weapon.id}"
                  data-oiam="${eq.oneInAMillion ? '1' : ''}">
            ${iconHTML}
            <span class="fighter-equipment-name">${escapeHTML(weapon.name)}${oiamSuffix}</span>
            <span class="fighter-equipment-cost">${costLabel}</span>
          </button>
          <button class="fighter-equipment-actions-btn"
                  data-action="open-weapon-actions"
                  data-source="fighter"
                  data-item-id="${eq.id}"
                  data-weapon-id="${weapon.id}"
                  data-fighter-id="${fighter.id}"
                  title="Opciones">⚙️</button>
        </div>
      `;
    }).join('');

    equipmentHTML = `
      <div class="fighter-equipment">
        <div class="fighter-equipment-title">Equipo</div>
        <div class="fighter-equipment-list">
          ${itemsHTML}
        </div>
      </div>
    `;
  }

  const nativeSkills = fighter.special || [];
  const learnedSkills = fighter.learnedSkills || [];
  const allSkills = [
    ...nativeSkills.map(s => ({ name: s, native: true, id: s })),
    ...learnedSkills.map(s => ({ name: s.name, native: false, id: s.id }))
  ];

  const skillsHTML = allSkills.length > 0
    ? `<div class="fighter-skills">
         <div class="fighter-skills-title">Habilidades</div>
         <div class="fighter-skills-list">
           ${allSkills.map(s => `
             <span class="skill-tag ${s.native ? 'skill-tag--native' : ''}"
                   data-action="open-skill-modal"
                   data-skill-id="${s.id}">
               ${escapeHTML(s.name)}
             </span>
           `).join('')}
         </div>
       </div>`
    : '';

      // ---------- HERIDAS ----------
  const injuryIds = fighter.injuries || [];
  const injuryTagsHTML = injuryIds.length > 0
    ? `<div class="fighter-injuries">
         <div class="fighter-injuries-title">Heridas</div>
         <div class="fighter-injuries-list">
           ${injuryIds.map(id => {
             const inj = getInjuryById(id);
             if (!inj) return '';
             let sevClass = 'injury-tag--minor';
             if (inj.severity === 'good') sevClass = 'injury-tag--good';
             else if (inj.severity === 'critical') sevClass = 'injury-tag--critical';
             return `
               <span class="injury-tag ${sevClass}"
                     data-action="open-injury-desc"
                     data-injury-id="${inj.id}"
                     title="${escapeHTML(inj.name)}">
                 ${escapeHTML(inj.name)}
               </span>
             `;
           }).join('')}
         </div>
       </div>`
    : '';

  const xp = fighter.xp || 0;
  const title = getXPTitle(xp);
  const isMax = isMaxLevel(xp);
  const pending = getPendingAdvances(fighter);

  const pendingLabel = pending > 0
    ? `[+${pending} subida(s) pendiente(s)]`
    : '';

  const canLevelUp = pending > 0;

  const xpHTML = `
    <div class="fighter-xp">
      <div class="fighter-xp-line">
        <span class="fighter-xp-title">${title}</span>
        <span class="fighter-xp-value">${xp} PX</span>
        ${isMax ? '<span class="fighter-xp-max">MÁXIMO</span>' : ''}
        ${pendingLabel ? `<span class="fighter-xp-pending">${pendingLabel}</span>` : ''}
      </div>
      <div class="fighter-xp-buttons">
        <button class="btn-xp" data-action="xp-minus" data-fighter-id="${fighter.id}">-1 PX</button>
        <button class="btn-xp" data-action="xp-plus" data-fighter-id="${fighter.id}">+1 PX</button>
        ${canLevelUp ? `<button class="btn-levelup" data-action="level-up" data-fighter-id="${fighter.id}">⬆ Subir de nivel</button>` : ''}
      </div>
    </div>
  `;

  return `
    <div class="fighter-card" data-fighter-id="${fighter.id}">
      <div class="fighter-body">
        <div class="fighter-header">
          <div class="fighter-name-row">
            <span class="fighter-name">${escapeHTML(displayName)}</span>
            <button class="btn-fighter-edit-icon" 
                    data-action="open-fighter-editor" 
                    data-fighter-id="${fighter.id}"
                    title="Editar nombre">✏️</button>
          </div>
          <span class="fighter-type" data-type="${fighter.typeId}">${escapeHTML(fighter.typeName)}</span>
        </div>
                ${statsHTML}
        ${xpHTML}
        ${skillsHTML}
        ${injuryTagsHTML}
        ${equipmentHTML}
                <div class="fighter-footer">
          <span class="fighter-cost">Coste: ${totalCost}c</span>
          <div class="fighter-actions">
            <button class="btn-fighter-injuries ${getInjuryCount(fighter) > 0 ? '' : 'btn-fighter-injuries--empty'}"
                    data-action="open-injuries"
                    data-fighter-id="${fighter.id}">
              🩸 Heridas (${getInjuryCount(fighter)})
            </button>
            <button class="btn-fighter-equip" data-action="equip-fighter" data-fighter-id="${fighter.id}">🛒 Equipar</button>
            <button class="btn-fighter-delete" data-action="delete-fighter" data-fighter-id="${fighter.id}">Borrar</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ==================================================
// EXPERIENCIA INICIAL POR TIPO DE LUCHADOR
// ==================================================

/**
 * Devuelve la experiencia inicial de un tipo de luchador.
 * - Soporta tipos comunes (leader, heavy, ganger, juve)
 * - Soporta tipos propios (con initialXP o initialXPBase)
 */
function getInitialXP(typeId, houseId) {
  // 1) Buscar si la casa tiene un tipo con este id
  if (houseId) {
    const houseData = getHouseData(houseId);
    if (houseData && houseData.fighterTypes) {
      const type = houseData.fighterTypes.find(t => t.id === typeId);
      if (type) {
        if (type.initialXP === 'fixed-plus-d6') {
          return (type.initialXPBase || 0) + rollD6();
        }
        return type.initialXP || 0;
      }
    }
  }

  // 2) Si no, tipos comunes
  switch (typeId) {
    case 'juve':
      return 0;
    case 'ganger':
      return 20 + rollD6();
    case 'heavy':
      return 60 + rollD6();
    case 'leader':
      return 60 + rollD6();
    default:
      return 0;
  }
}

function rollD6() {
  return Math.floor(Math.random() * 6) + 1;
}

// ==================================================
// ASCENSO AUTOMÁTICO: JUVE → GANGER
// ==================================================

function checkJuveAscension(fighter) {
  if (!fighter) return false;
  if (fighter.typeId !== 'juve') return false;
  if ((fighter.xp || 0) < 21) return false;

  fighter.typeId = 'ganger';
  fighter.typeName = 'Ganger';
  fighter.special = [];

  return true;
}

// ==================================================
// CÁLCULO DE STATS EFECTIVAS
// ==================================================

function getEffectiveStats(fighter) {
  const stats = { ...fighter.stats };
  const bonuses = {};
  const maluses = {};
  const overrides = {};

  // Aplicar efectos del EQUIPO
  (fighter.equipment || []).forEach(eq => {
    const weapon = getWeaponForFighter(fighter, eq.weaponId);
    if (!weapon) return;

    if (weapon.bonificaciones) {
      for (const key in weapon.bonificaciones) {
        bonuses[key] = (bonuses[key] || 0) + weapon.bonificaciones[key];
      }
    }
    if (weapon.penalizaciones) {
      for (const key in weapon.penalizaciones) {
        maluses[key] = (maluses[key] || 0) + weapon.penalizaciones[key];
      }
    }
    if (weapon.inicializa) {
      for (const key in weapon.inicializa) {
        overrides[key] = weapon.inicializa[key];
      }
    }
  });

  // Aplicar efectos de las HERIDAS
  (fighter.injuries || []).forEach(injuryId => {
    const injury = getInjuryById(injuryId);
    if (!injury) return;

    if (injury.bonificaciones) {
      for (const key in injury.bonificaciones) {
        bonuses[key] = (bonuses[key] || 0) + injury.bonificaciones[key];
      }
    }
    if (injury.penalizaciones) {
      for (const key in injury.penalizaciones) {
        maluses[key] = (maluses[key] || 0) + injury.penalizaciones[key];
      }
    }
  });

  // Aplicar inicializaciones primero
  for (const key in overrides) stats[key] = overrides[key];
  // Aplicar bonificaciones
  for (const key in bonuses) stats[key] = (stats[key] || 0) + bonuses[key];
  // Aplicar penalizaciones
  for (const key in maluses) stats[key] = (stats[key] || 0) + maluses[key];

    // Aplicar mínimos (solo a stats que no sean null)
  const statKeys = ['M', 'HA', 'HB', 'F', 'R', 'H', 'I', 'A', 'Ld'];
  statKeys.forEach(key => {
    if (stats[key] === null || stats[key] === undefined) return;  // ← respeta null
    if (key === 'A') {
      stats[key] = Math.max(0, stats[key]);
    } else {
      stats[key] = Math.max(1, stats[key]);
    }
  });

  return stats;
}
/**
 * Devuelve qué heridas modifican cada stat.
 */
function getInjuryModifiers(fighter) {
  const modifiers = {
    M: [], HA: [], HB: [], F: [], R: [], H: [], I: [], A: [], Ld: []
  };

  (fighter.injuries || []).forEach(injuryId => {
    const injury = getInjuryById(injuryId);
    if (!injury) return;

    ['M', 'HA', 'HB', 'F', 'R', 'H', 'I', 'A', 'Ld'].forEach(stat => {
      if (injury.bonificaciones && injury.bonificaciones[stat]) {
        modifiers[stat].push({ injury, type: 'bonus', value: injury.bonificaciones[stat] });
      }
      if (injury.penalizaciones && injury.penalizaciones[stat]) {
        modifiers[stat].push({ injury, type: 'penalty', value: injury.penalizaciones[stat] });
      }
    });
  });

  return modifiers;
}

/**
 * Cuenta las heridas de un luchador (sin contar Muerto).
 */
function getInjuryCount(fighter) {
  return (fighter.injuries || []).filter(id => id !== 'dead').length;
}

function getStatModifiers(fighter) {
  const modifiers = {
    M: [], HA: [], HB: [], F: [], R: [], H: [], I: [], A: [], Ld: []
  };

  // Equipo
  (fighter.equipment || []).forEach(eq => {
    const weapon = getWeaponForFighter(fighter, eq.weaponId);
    if (!weapon) return;

    ['M', 'HA', 'HB', 'F', 'R', 'H', 'I', 'A', 'Ld'].forEach(stat => {
      if (weapon.bonificaciones && weapon.bonificaciones[stat]) {
        modifiers[stat].push({ weapon, type: 'bonus', value: weapon.bonificaciones[stat], source: 'equipment' });
      }
      if (weapon.penalizaciones && weapon.penalizaciones[stat]) {
        modifiers[stat].push({ weapon, type: 'penalty', value: weapon.penalizaciones[stat], source: 'equipment' });
      }
      if (weapon.inicializa && weapon.inicializa[stat] !== undefined) {
        modifiers[stat].push({ weapon, type: 'override', value: weapon.inicializa[stat], source: 'equipment' });
      }
    });
  });

  // Heridas
  (fighter.injuries || []).forEach(injuryId => {
    const injury = getInjuryById(injuryId);
    if (!injury) return;

    ['M', 'HA', 'HB', 'F', 'R', 'H', 'I', 'A', 'Ld'].forEach(stat => {
      if (injury.bonificaciones && injury.bonificaciones[stat]) {
        modifiers[stat].push({ injury, type: 'bonus', value: injury.bonificaciones[stat], source: 'injury' });
      }
      if (injury.penalizaciones && injury.penalizaciones[stat]) {
        modifiers[stat].push({ injury, type: 'penalty', value: injury.penalizaciones[stat], source: 'injury' });
      }
    });
  });

  return modifiers;
}

// ==================================================
// CÁLCULO DE SALVACIÓN DE ARMADURA
// ==================================================

/**
 * Devuelve TODAS las salvaciones de armadura que tiene un luchador.
 * Combina armadura física + biónicos con armourSave.
 * Devuelve un array de objetos:
 *   { value, templateValue, name, weapon, source: 'armor'|'bionic' }
 */
function getAllArmourSaves(fighter) {
  const equipment = fighter.equipment || [];

  // Recoger todas las fuentes de salvación
  let physicalArmour = null;   // { value, templateValue, weapon }
  let bionicArmour = null;     // { value, weapon }
  let plateCount = 0;
  let plateWeapon = null;

    for (const eq of equipment) {
    const weapon = getWeaponForFighter(fighter, eq.weaponId);
    if (!weapon) continue;

    // Placas de armadura (acumulativas)
    if (weapon.armourPlates) {
      plateCount++;
      if (!plateWeapon) plateWeapon = weapon;
      continue;
    }

    // Biónicos con salvación
    if (weapon.category === 'bionics' && weapon.armourSave) {
      bionicArmour = { value: weapon.armourSave, weapon: weapon };
      continue;
    }

    // Armadura física
    if (weapon.category === 'armor' && weapon.armourSave) {
      physicalArmour = {
        value: weapon.armourSave,
        templateValue: weapon.armourSaveTemplate || null,
        weapon: weapon
      };
      continue;
    }
  }

  // ===== CÁLCULO =====
  // Sumar capas: cada capa adicional mejora el save en 1 punto
  // (menor número = mejor)

  // Comprobar incompatibilidad (nunca debería pasar)
  if (plateCount > 0 && physicalArmour) {
    console.warn('Placas + armadura física detectadas en el mismo luchador (incompatible)');
  }

  let baseSaveValue = null;        // valor numérico base (ej: 6, 5, 4)
  let baseName = '';
  let templateSaveValue = null;
  let hasPlates = false;
  let hasPhysical = false;
  let hasBionic = false;

  // 1) ¿Tiene armadura física o placas? (mutuamente excluyentes)
  if (plateCount > 0 && plateWeapon) {
    const stack = plateWeapon.armourPlatesStack || ['6+'];
    baseSaveValue = parseInt(stack[Math.min(plateCount, stack.length) - 1]);
    baseName = plateWeapon.name + ' x' + plateCount;
    hasPlates = true;
  } else if (physicalArmour) {
    baseSaveValue = parseInt(physicalArmour.value);
    baseName = physicalArmour.weapon.name;
    hasPhysical = true;
    if (physicalArmour.templateValue) {
      templateSaveValue = parseInt(physicalArmour.templateValue);
    }
  }

  // 2) Bono por biónico (siempre se suma si hay biónico con armourSave)
  const bionicBonus = bionicArmour ? 1 : 0;
  hasBionic = !!bionicArmour;

  // Si no hay nada, no hay save
  if (baseSaveValue === null && !hasBionic) {
    return [];
  }

  // Si solo hay biónico, la salvación es la del biónico
  if (baseSaveValue === null && hasBionic) {
    baseSaveValue = parseInt(bionicArmour.value);
    baseName = bionicArmour.weapon.name;
  }

  // Aplicar bono del biónico
  let finalSave = baseSaveValue - bionicBonus;
  if (finalSave < 2) finalSave = 2; // límite máximo 2+

  let finalTemplateSave = null;
  if (templateSaveValue !== null) {
    finalTemplateSave = templateSaveValue - bionicBonus;
    if (finalTemplateSave < 2) finalTemplateSave = 2;
  }

  // Construir nombre compuesto
  const nameParts = [baseName];
  if (hasBionic) {
    nameParts.push(bionicArmour.weapon.name);
  }
  const compositeName = nameParts.join(' + ');

  // Devolver un único save combinado
  return [{
    value: finalSave + '+',
    templateValue: finalTemplateSave !== null ? finalTemplateSave + '+' : null,
    name: compositeName,
    weapon: (physicalArmour && physicalArmour.weapon) ||
            (plateWeapon) ||
            (bionicArmour && bionicArmour.weapon),
    source: hasBionic ? 'bionic-combined' : (hasPlates ? 'plates' : 'armor'),
    isCombined: hasBionic && (hasPhysical || hasPlates),
    hasBionic: hasBionic,
    hasPlates: hasPlates,
    plateCount: plateCount
  }];
}

/**
 * Devuelve la MEJOR salvación (menor número) para mostrar en la ficha.
 * Si hay varias, devuelve la mejor. Si hay empate, prioriza la física.
 */
function getEffectiveArmourSave(fighter) {
  const saves = getAllArmourSaves(fighter);
  if (saves.length === 0) return null;

  // Ordenar por valor (menor = mejor)
  saves.sort((a, b) => {
    const va = parseInt(a.value) || 99;
    const vb = parseInt(b.value) || 99;
    if (va !== vb) return va - vb;
    // Empate: prioriza 'armor' sobre 'bionic'
    if (a.source === 'armor' && b.source === 'bionic') return -1;
    if (a.source === 'bionic' && b.source === 'armor') return 1;
    return 0;
  });

  return saves[0];
}

// ==================================================
// MODAL: INFORMACIÓN DE STAT MODIFICADA
// ==================================================

function openStatInfoModal(fighterId, statKey) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  const statNames = {
    M: 'Movimiento', HA: 'Habilidad Arma', HB: 'Habilidad Ballística',
    F: 'Fuerza', R: 'Resistencia', H: 'Heridas', I: 'Iniciativa',
    A: 'Ataques', Ld: 'Liderazgo', Sv: 'Salvación de Armadura'
  };

  const title = document.getElementById('stat-info-title');
  const body = document.getElementById('stat-info-body');
  title.textContent = `${statNames[statKey]} (${statKey})`;

  // ─── CASO ESPECIAL: SV ───
  if (statKey === 'Sv') {
    const saves = getAllArmourSaves(fighter);

    let html = '';

    if (saves.length === 0) {
      html = `<p class="stat-info-empty">No hay armaduras equipadas.</p>`;
    } else {
      html += `<div class="stat-info-mods-title">Salvaciones disponibles:</div>`;

      saves.forEach(save => {
        html += `
          <div class="stat-info-row">
            <span class="stat-info-label">
              <img src="${save.weapon.image || ''}" alt="" class="stat-info-icon"
                   onerror="this.style.display='none'">
              ${escapeHTML(save.name)}
              ${save.hasBionic ? '<span class="stat-info-bionic-tag">IMPLANTE</span>' : ''}
            </span>
            <span class="stat-info-value stat-mod-bonus">${save.value}</span>
          </div>
        `;

        if (save.templateValue) {
          html += `
            <div class="stat-info-row">
              <span class="stat-info-label" style="padding-left: 1.5rem; font-size: 0.7rem;">
                Contra plantillas
              </span>
              <span class="stat-info-value stat-mod-bonus">${save.templateValue}</span>
            </div>
          `;
        }
      });

      // Nota sobre el pecho biónico
      const hasBionicChest = saves.some(s => s.hasBionic);
      if (hasBionicChest) {
        html += `
          <p class="stat-info-note">
            El Pecho Biónico solo salva contra ataques cuerpo a cuerpo o disparos desde el arco frontal.
          </p>
        `;
      }
    }

    body.innerHTML = html;
    openModal('modal-stat-info');
    return;
  }

  // ─── CASO NORMAL ───
  const baseValue = fighter.stats[statKey];
  const effectiveValue = getEffectiveStats(fighter)[statKey];
  const modifiers = getStatModifiers(fighter)[statKey] || [];

  let html = `
    <div class="stat-info-row stat-info-base">
      <span class="stat-info-label">Valor base</span>
      <span class="stat-info-value">${baseValue}</span>
    </div>
  `;

  if (modifiers.length === 0) {
    html += `<p class="stat-info-empty">No hay objetos que modifiquen esta característica.</p>`;
  } else {
    html += `<div class="stat-info-mods-title">Modificadores aplicados:</div>`;
    modifiers.forEach(mod => {
      const sign = mod.value > 0 ? '+' : '';
      let effectLabel = '';
      let effectClass = '';

      if (mod.type === 'bonus') {
        effectLabel = `${sign}${mod.value}`;
        effectClass = 'stat-mod-bonus';
      } else if (mod.type === 'penalty') {
        effectLabel = `${mod.value}`;
        effectClass = 'stat-mod-penalty';
      } else if (mod.type === 'override') {
        effectLabel = `= ${mod.value}`;
        effectClass = 'stat-mod-override';
      }

      html += `
        <div class="stat-info-row">
          <span class="stat-info-label">
            <img src="${mod.weapon.image}" alt="" class="stat-info-icon"
                 onerror="this.style.display='none'">
            ${escapeHTML(mod.weapon.name)}
          </span>
          <span class="stat-info-value ${effectClass}">${effectLabel}</span>
        </div>
      `;
    });

    html += `
      <div class="stat-info-row stat-info-total">
        <span class="stat-info-label">Valor final</span>
        <span class="stat-info-value">${effectiveValue}</span>
      </div>
    `;
  }

  body.innerHTML = html;
  openModal('modal-stat-info');
}
// ==================================================
// MODAL: HERIDAS
// ==================================================

function openInjuriesModal(fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  // Guardar a quién estamos editando
  document.getElementById('modal-injuries').dataset.fighterId = fighterId;

  // Nombre del luchador
  const displayName = fighter.name || `(${fighter.typeName} sin nombre)`;
  document.getElementById('injuries-fighter-name').textContent = displayName;

  renderInjuriesModal(fighter);
  openModal('modal-injuries');
}

function renderInjuriesModal(fighter) {
  const injuries = fighter.injuries || [];

  // Actualizar contador
  document.getElementById('injuries-count').textContent = getInjuryCount(fighter);

  // Lista actual
  const currentList = document.getElementById('injuries-current-list');
  if (injuries.length === 0) {
    currentList.innerHTML = `<div class="injuries-empty">Sin heridas.</div>`;
  } else {
    currentList.innerHTML = injuries.map(injuryId => {
      const injury = getInjuryById(injuryId);
      if (!injury) return '';
      
      let severityClass = '';
      if (injury.severity === 'good') severityClass = 'injury-current-item--good';
      else if (injury.severity === 'minor') severityClass = 'injury-current-item--minor';
      else if (injury.severity === 'critical') severityClass = 'injury-current-item--critical';

      return `
        <div class="injury-current-item ${severityClass}">
          <span>${escapeHTML(injury.name)}</span>
          <button class="injury-remove-btn"
                  data-action="remove-injury"
                  data-injury-id="${injury.id}"
                  data-fighter-id="${fighter.id}"
                  title="Quitar herida">🗑</button>
        </div>
      `;
    }).join('');
  }

  // Lista de disponibles (todas las heridas que NO tiene ya)
  const availableList = document.getElementById('injuries-available-list');
  const available = INJURIES.filter(inj => !injuries.includes(inj.id));

  if (available.length === 0) {
    availableList.innerHTML = `<div class="injuries-empty">No quedan heridas por añadir.</div>`;
  } else {
    availableList.innerHTML = available.map(injury => {
      let severityClass = '';
      if (injury.severity === 'good') severityClass = 'injury-add-btn--good';
      else if (injury.severity === 'critical') severityClass = 'injury-add-btn--critical';

      return `
        <button class="injury-add-btn ${severityClass}"
                data-action="add-injury"
                data-injury-id="${injury.id}"
                data-fighter-id="${fighter.id}"
                title="${escapeHTML(injury.desc).substring(0, 100)}...">
          ${escapeHTML(injury.name)}
        </button>
      `;
    }).join('');
  }
}

// ---------- AÑADIR HERIDA ----------
function addInjuryToFighter(fighterId, injuryId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  if (!fighter.injuries) fighter.injuries = [];
  if (fighter.injuries.includes(injuryId)) return;

  const injury = getInjuryById(injuryId);
  if (!injury) return;

  fighter.injuries.push(injuryId);

  // Caso especial: MUERTO elimina al luchador
  if (injury.special === 'kills') {
    if (confirm(`¿Marcar a ${fighter.name || fighter.typeName} como MUERTO? Se eliminará de la banda.`)) {
      gang.fighters = gang.fighters.filter(f => f.id !== fighterId);
      saveGangs(gangs);
      closeModal('modal-injuries');
      renderGangDetail(gang);
      return;
    } else {
      fighter.injuries = fighter.injuries.filter(i => i !== injuryId);
      renderInjuriesModal(fighter);
      return;
    }
  }

  // Aplicar efectos especiales (por ejemplo, +2D6 PX en "Sobrevive contra todo pronóstico")
  const specialMessage = (typeof applyInjurySpecialEffects === 'function') 
    ? applyInjurySpecialEffects(fighter, injuryId) 
    : null;

  saveGangs(gangs);
  renderInjuriesModal(fighter);
  renderGangDetail(gang);

  // Aviso al jugador
  if (specialMessage) {
    setTimeout(() => {
      alert(specialMessage);
    }, 200);
  }
}

// ---------- QUITAR HERIDA ----------
function removeInjuryFromFighter(fighterId, injuryId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  if (!fighter.injuries) return;

  fighter.injuries = fighter.injuries.filter(i => i !== injuryId);

  saveGangs(gangs);
  renderInjuriesModal(fighter);
  renderGangDetail(gang);
}
// ==================================================
// MODAL: DESCRIPCIÓN DE HERIDA
// ==================================================

function openInjuryDescModal(injuryId) {
  const injury = getInjuryById(injuryId);
  if (!injury) return;

  document.getElementById('injury-desc-title').textContent = injury.name;

  const body = document.getElementById('injury-desc-body');

  let html = '';

  // Propiedades (efecto)
  const hasPenalties = injury.penalizaciones && Object.keys(injury.penalizaciones).length > 0;
  const hasBonuses = injury.bonificaciones && Object.keys(injury.bonificaciones).length > 0;

  if (hasPenalties || hasBonuses) {
    html += `<div class="weapon-properties">`;
    const statNames = {
      M: 'Movimiento', HA: 'Habilidad Arma', HB: 'Habilidad Ballística',
      F: 'Fuerza', R: 'Resistencia', H: 'Heridas', I: 'Iniciativa',
      A: 'Ataques', Ld: 'Liderazgo'
    };

    if (hasPenalties) {
      for (const key in injury.penalizaciones) {
        html += `
          <div class="weapon-property-row">
            <span class="weapon-property-label">${statNames[key] || key}:</span>
            <span class="weapon-property-value" style="color:#ef4444;">${injury.penalizaciones[key]}</span>
          </div>
        `;
      }
    }
    if (hasBonuses) {
      for (const key in injury.bonificaciones) {
        html += `
          <div class="weapon-property-row">
            <span class="weapon-property-label">${statNames[key] || key}:</span>
            <span class="weapon-property-value" style="color:#22c55e;">+${injury.bonificaciones[key]}</span>
          </div>
        `;
      }
    }
    html += `</div>`;
  }

  // Descripción
  if (injury.desc) {
    html += `
      <div class="weapon-description">
        <div class="weapon-description-title">Descripción</div>
        <p class="weapon-description-text">${escapeHTML(injury.desc).replace(/\n/g, '<br>')}</p>
      </div>
    `;
  }

  body.innerHTML = html;
  openModal('modal-injury-desc');
}
/**
 * Aplica un avance aleatorio inicial a un luchador (regla "Experimentados").
 * No consume avances pendientes, se aplica al reclutar.
 */
function applyInitialRandomAdvance(fighter, gang) {
  const roll = roll2D6();
  const result = getAdvanceResult(roll.total);
  if (!result) return;

  if (result.type === 'characteristic') {
    // +1 a una stat aleatoria de las dos opciones
    const index = Math.random() < 0.5 ? 0 : 1;
    let stat = result.options[index];
    const altStat = result.options[1 - index];

    // Si el stat elegido está al máximo o no existe, usa el alternativo
    const houseMaxes = getHouseStatMaximums(gang.houseId);
    if (fighter.stats[stat] === null || fighter.stats[stat] >= houseMaxes[stat]) {
      stat = altStat;
    }
    if (fighter.stats[stat] === null || fighter.stats[stat] >= houseMaxes[stat]) {
      return; // los dos al máximo o nulos, no aplica
    }

    fighter.stats[stat] += 1;

  } else if (result.type === 'skill-restricted' || result.type === 'skill-any') {
    // Elegir tabla permitida aleatoriamente
    let allowedTables = result.type === 'skill-any'
      ? getAllSkillTables()
      : getAvailableSkillTables(gang.houseId, fighter.typeId);

    // Aplicar restricciones de la casa
    const restrictions = getAdvanceRestrictions(gang.houseId, fighter.typeId);
    if (restrictions && restrictions.cannotTakeTables) {
      allowedTables = allowedTables.filter(t => !restrictions.cannotTakeTables.includes(t));
    }

    if (allowedTables.length === 0) return;

    // Elegir tabla aleatoria
    const tableId = allowedTables[Math.floor(Math.random() * allowedTables.length)];
    const table = SKILL_TABLES[tableId];
    if (!table) return;

    // Elegir habilidad aleatoria (evitando las prohibidas y las ya aprendidas)
    const forbidden = (restrictions && restrictions.cannotTakeSkills) || [];
    const learnedIds = (fighter.learnedSkills || []).map(s => s.id);

    const candidates = table.skills.filter(s =>
      !forbidden.includes(s.id) && !learnedIds.includes(s.id)
    );

    if (candidates.length === 0) return;

    const skill = candidates[Math.floor(Math.random() * candidates.length)];

    if (!fighter.learnedSkills) fighter.learnedSkills = [];
    fighter.learnedSkills.push({
      id: skill.id,
      name: skill.name,
      table: tableId,
      tableName: table.name,
      acquiredAt: Date.now(),
      initial: true
    });
  }
}
/**
 * Aplica una herida especial a un ganger desde un territorio.
 * (Spore Sickness, Cicatrices Horribles, etc.)
 */
function applyTerritoryInjury(fighter, injuryId) {
  if (!fighter || !injuryId) return false;
  if (!fighter.injuries) fighter.injuries = [];
  if (fighter.injuries.includes(injuryId)) return false;
  fighter.injuries.push(injuryId);
  return true;
}