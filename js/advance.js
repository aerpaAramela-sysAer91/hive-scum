/* ==================================================
   SISTEMA DE AVANCE DE NIVEL
   ================================================== */

// ---------- ESTADO ----------
let currentAdvanceRoll = null;      // resultado de 2D6
let currentAdvanceResult = null;    // entrada de la tabla
let currentCharacteristicRoll = null; // resultado del 1D6 para características
let currentCharacteristicStat = null; // stat elegido ('F', 'HA', ...)
let currentSkillTable = null;       // tabla de habilidad elegida
let currentSkillRoll = null;        // resultado del D6 para habilidades

// ---------- TIRAR 2D6 ----------
function roll2D6() {
  const d1 = rollD6();
  const d2 = rollD6();
  return { d1, d2, total: d1 + d2 };
}

// ---------- ABRIR MODAL DE SUBIDA ----------
function openAdvanceModal(fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  // Resetear estado
  currentAdvanceRoll = null;
  currentAdvanceResult = null;
  currentCharacteristicRoll = null;
  currentCharacteristicStat = null;
  currentSkillTable = null;
  currentSkillRoll = null;

  // Guardar en un data-attribute qué fighter estamos tratando
  document.getElementById('modal-advance').dataset.fighterId = fighterId;

  // Actualizar UI
  document.getElementById('advance-title').textContent = 
    `Subida de nivel — ${fighter.name || fighter.typeName}`;
  document.getElementById('advance-step-roll').style.display = 'block';
  document.getElementById('advance-step-result').style.display = 'none';
  document.getElementById('advance-step-action').style.display = 'none';
  document.getElementById('advance-dice').textContent = '—';
  document.getElementById('advance-result-text').textContent = '';

  openModal('modal-advance');
}

// ---------- TIRAR DADOS DE AVANCE ----------
function advanceRollDice() {
  const roll = roll2D6();
  currentAdvanceRoll = roll.total;
  currentAdvanceResult = getAdvanceResult(roll.total);

  document.getElementById('advance-dice').textContent = 
    `🎲 ${roll.d1} + ${roll.d2} = ${roll.total}`;

  document.getElementById('advance-step-roll').style.display = 'none';
  document.getElementById('advance-step-result').style.display = 'block';

  processAdvanceResult();

  document.getElementById('advance-step-action').style.display = 'block';
  updateApplyButton();
}

// ---------- SELECCIONAR TABLA DE HABILIDAD ----------
function selectSkillTable(tableId) {
  currentSkillTable = tableId;

  const fighterId = document.getElementById('modal-advance').dataset.fighterId;
  const gang = gangs.find(g => g.id === currentGangId);
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);

  const table = SKILL_TABLES[tableId];
  const restrictions = getAdvanceRestrictions(gang.houseId, fighter.typeId);
  const forbidden = (restrictions && restrictions.cannotTakeSkills) || [];

  // Tirar 1D6 hasta obtener una habilidad permitida (máx 20 intentos)
  let skillRoll, skill, attempts = 0;
  do {
    skillRoll = rollD6();
    skill = table.skills[skillRoll - 1];
    attempts++;
  } while (forbidden.includes(skill.id) && attempts < 20);

  currentSkillRoll = skillRoll;

  const resultDiv = document.getElementById('advance-result-text');
  resultDiv.innerHTML = `
    <p class="advance-info">Resultado: <strong>Nueva Habilidad</strong></p>
    <p class="advance-detail">Tabla: <strong>${table.name}</strong></p>
    <p class="advance-detail">Tirada de 1D6: <strong>${skillRoll}</strong> -> <strong>${skill.name}</strong></p>
  `;

  updateApplyButton();
}

// ---------- APLICAR EL AVANCE ----------
function applyAdvance() {
  const fighterId = document.getElementById('modal-advance').dataset.fighterId;
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  if (!fighter.learnedSkills) fighter.learnedSkills = [];

  if (currentAdvanceResult.type === 'characteristic' && currentCharacteristicStat) {
    // Subir característica
    fighter.stats[currentCharacteristicStat] += 1;
  } else if (currentSkillTable && currentSkillRoll) {
    // Añadir habilidad
    const table = SKILL_TABLES[currentSkillTable];
    const skill = table.skills[currentSkillRoll - 1];
    fighter.learnedSkills.push({
      id: skill.id,
      name: skill.name,
      table: currentSkillTable,
      tableName: table.name,
      acquiredAt: Date.now()
    });
  } else {
    alert('No se puede aplicar el avance: falta información');
    return;
  }

    // Gastar el avance
  fighter.advancesTaken = (fighter.advancesTaken || 0) + 1;

  // Comprobar ascenso automático Juve → Ganger
  const ascended = checkJuveAscension(fighter);
  if (ascended) {
    setTimeout(() => {
      alert(`¡${fighter.name || 'El Juve'} ha ascendido a Ganger! (21+ PX)`);
    }, 100);
  }

  saveGangs(gangs);
  renderGangDetail(gang);
  closeModal('modal-advance');
  }

// ---------- ACTUALIZAR BOTÓN APLICAR ----------
function updateApplyButton() {
  const btn = document.getElementById('btn-advance-apply');
  let canApply = false;

  if (currentAdvanceResult?.type === 'characteristic' && currentCharacteristicStat) {
    canApply = true;
  } else if (currentSkillTable && currentSkillRoll) {
    canApply = true;
  }

  btn.disabled = !canApply;
  btn.classList.toggle('disabled', !canApply);
}

// ---------- CERRAR MODAL ----------
function closeAdvanceModal() {
  closeModal('modal-advance');
  currentAdvanceRoll = null;
  currentAdvanceResult = null;
  currentCharacteristicRoll = null;
  currentCharacteristicStat = null;
  currentSkillTable = null;
  currentSkillRoll = null;
}
// ---------- MOSTRAR SELECTOR MANUAL ----------
function showManualAdvanceSelector() {
  document.getElementById('advance-manual-selector').style.display = 'flex';
}

// ---------- CONFIRMAR RESULTADO MANUAL ----------
function confirmManualAdvance() {
  const select = document.getElementById('select-advance-result');
  const value = parseInt(select.value, 10);

  if (!value || value < 2 || value > 12) {
    alert('Elige un resultado entre 2 y 12');
    return;
  }

  // Simulamos la tirada: usamos el resultado elegido
  currentAdvanceRoll = value;
  currentAdvanceResult = getAdvanceResult(value);

  // Mostrar como si se hubiera tirado
  document.getElementById('advance-dice').textContent = 
    `📋 Resultado manual: ${value}`;

  // Ocultar paso 1, mostrar resultado
  document.getElementById('advance-step-roll').style.display = 'none';
  document.getElementById('advance-step-result').style.display = 'block';

  // Procesar el resultado (reutilizamos la lógica existente)
  processAdvanceResult();

  // Mostrar botón aplicar
  document.getElementById('advance-step-action').style.display = 'block';
  updateApplyButton();
}

// ---------- PROCESAR RESULTADO (extraído del advanceRollDice) ----------
// Ahora advanceRollDice y confirmManualAdvance usan esta función común
function processAdvanceResult() {
  const resultDiv = document.getElementById('advance-result-text');
  const fighterId = document.getElementById('modal-advance').dataset.fighterId;
  const gang = gangs.find(g => g.id === currentGangId);
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);

  if (currentAdvanceResult.type === 'characteristic') {
    const restrictions = getAdvanceRestrictions(gang.houseId, fighter.typeId);

    // Si la casa prohíbe HB (Pit Fighter) y el avance es de HA o HB (resultados 6 y 8),
    // se debe repetir toda la tirada de 2D6.
    const isHAorHB = currentAdvanceResult.options &&
                     currentAdvanceResult.options.includes('HB');

    if (restrictions && restrictions.rerollIfBallisticSkill && isHAorHB) {
      resultDiv.innerHTML = `
        <p class="advance-info">Resultado: <strong>Incremento de Característica</strong></p>
        <p class="advance-detail warn">Este luchador no tiene Habilidad Ballística (HB). Debe repetir la tirada de 2D6.</p>
      `;
      currentCharacteristicStat = null;
      updateApplyButton();
      return;
    }

    const charRoll = rollD6();
    currentCharacteristicRoll = charRoll;
    const index = charRoll <= 3 ? 0 : 1;
    let stat = currentAdvanceResult.options[index];
    const altStat = currentAdvanceResult.options[1 - index];

    // Si el stat elegido es HB pero el luchador no tiene HB, coge el alternativo
    if (stat === 'HB' && fighter.stats.HB === null) {
      stat = altStat;
    }

    if (fighter.stats[stat] >= STAT_MAXIMUMS[stat]) {
      if (fighter.stats[altStat] < STAT_MAXIMUMS[altStat]) {
        stat = altStat;
      } else {
        stat = null;
      }
    }

    currentCharacteristicStat = stat;

    if (stat) {
      resultDiv.innerHTML = `
        <p class="advance-info">Resultado: <strong>Incremento de Característica</strong></p>
        <p class="advance-detail">Tirada de 1D6: <strong>${charRoll}</strong> → <strong>+1 ${STAT_NAMES[stat]} (${stat})</strong></p>
        <p class="advance-detail">Valor actual: ${fighter.stats[stat]} / Máximo: ${STAT_MAXIMUMS[stat]}</p>
      `;
    } else {
      resultDiv.innerHTML = `
        <p class="advance-info">Resultado: <strong>Incremento de Característica</strong></p>
        <p class="advance-detail warn">Las dos características están al máximo. Elige otra manualmente.</p>
      `;
    }

  } else if (currentAdvanceResult.type === 'skill-restricted' || currentAdvanceResult.type === 'skill-any') {
    let allowedTables = currentAdvanceResult.type === 'skill-any'
      ? getAllSkillTables()
      : getAvailableSkillTables(gang.houseId, fighter.typeId);

    // Aplicar restricciones de la casa (por ejemplo, Pit Slaves)
    const restrictions = getAdvanceRestrictions(gang.houseId, fighter.typeId);
    const hasTableRestrictions = restrictions && restrictions.cannotTakeTables && restrictions.cannotTakeTables.length > 0;

    if (hasTableRestrictions) {
      allowedTables = allowedTables.filter(t => !restrictions.cannotTakeTables.includes(t));
    }

    if (allowedTables.length === 0) {
      resultDiv.innerHTML = `
        <p class="advance-info">Resultado: <strong>Nueva Habilidad</strong></p>
        <p class="advance-detail warn">Este luchador no puede aprender habilidades de ninguna tabla disponible. Repite la tirada.</p>
      `;
      return;
    }

    let tableHTML = '<p class="advance-info">Resultado: <strong>Nueva Habilidad</strong></p>';
    if (currentAdvanceResult.type === 'skill-any') {
      tableHTML += hasTableRestrictions
        ? '<p class="advance-detail">Elige cualquier tabla de habilidad (algunas están prohibidas para este luchador):</p>'
        : '<p class="advance-detail">Elige cualquier tabla de habilidad:</p>';
    } else {
      tableHTML += '<p class="advance-detail">Elige una tabla disponible para este luchador:</p>';
    }
    tableHTML += '<div class="advance-table-buttons">';
    allowedTables.forEach(tableId => {
      tableHTML += `<button class="btn-skill-table" data-table-id="${tableId}">${getSkillTableName(tableId)}</button>`;
    });
    tableHTML += '</div>';
    resultDiv.innerHTML = tableHTML;
  }
}