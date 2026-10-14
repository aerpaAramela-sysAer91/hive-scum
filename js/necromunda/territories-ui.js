/* ==================================================
   TERRITORIOS — UI
   Interfaz para gestionar territorios de Necromunda
   ================================================== */

// ---------- ESTADO ----------
let currentTerritoryId = null;
let pendingIncomeData = null;
let territoriesWorkMode = false;  // true = se puede trabajar, false = solo consulta

// ==================================================
// PANTALLA DE TERRITORIOS
// ==================================================

/**
 * Renderiza la pantalla de territorios.
 */
function renderTerritoriesScreen() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  if (gang.gangType !== 'necromunda') {
    document.getElementById('territories-list').innerHTML = `
      <div class="territories-summary">
        <p>Los proscritos tienen su propio sistema de territorios.</p>
      </div>
    `;
    document.getElementById('territories-gangers-count').textContent = '0';
    document.getElementById('btn-collect-income').disabled = true;
    return;
  }

  if (!gang.territories || gang.territories.length === 0) {
    document.getElementById('territories-list').innerHTML = `
      <div class="territories-summary">
        <p>Esta banda no tiene territorios.</p>
      </div>
    `;
    document.getElementById('territories-gangers-count').textContent = '0';
    document.getElementById('btn-collect-income').disabled = true;
    return;
  }

  // Contar gangers
  const allGangers = (gang.fighters || []).filter(f => f.typeId === 'ganger' || f.typeId === 'pit-slave');
  const busyIds = [];
  (gang.territories || []).forEach(t => {
    if (t.workedBy) busyIds.push(t.workedBy);
  });
  const saved = gang.rareMarketOffers;
  const currentRound = gang.currentRound || 1;
  if (saved && saved.round === currentRound && saved.gangerIds) {
    saved.gangerIds.forEach(id => busyIds.push(id));
  }
  const disponibles = allGangers.filter(f => !busyIds.includes(f.id) && !f.workedThisRound);

  document.getElementById('territories-gangers-count').textContent = 
    `${disponibles.length} libres / ${allGangers.length} totales`;

  // Renderizar lista
  renderTerritoriesList(gang);

  // Aviso si está en modo consulta
  let consultNote = document.getElementById('territories-consult-note');
  if (!territoriesWorkMode) {
    if (!consultNote) {
      consultNote = document.createElement('div');
      consultNote.id = 'territories-consult-note';
      consultNote.className = 'territories-consult-mode-note';
      const list = document.getElementById('territories-list');
      list.parentNode.insertBefore(consultNote, list);
    }
    consultNote.textContent = 'Modo consulta. Para trabajar territorios, pulsa "Finalizar Ronda".';
    consultNote.style.display = 'block';
  } else if (consultNote) {
    consultNote.style.display = 'none';
  }

  // Botón income
  const btn = document.getElementById('btn-collect-income');
  const workedCount = (gang.territories || []).filter(t => t.workedBy).length;
  const alreadyCollected = gang.incomeCollectedRound === currentRound;

  if (!territoriesWorkMode) {
    btn.disabled = true;
    btn.textContent = 'Recoger income';
  } else {
    btn.disabled = workedCount === 0 || alreadyCollected;
    btn.textContent = alreadyCollected
      ? 'Finalizar ronda'
      : 'Finalizar ronda y recoger income';
    if (alreadyCollected) {
      btn.disabled = false;
    }
  }

  document.getElementById('territories-summary').style.display = 'none';
}

/**
 * Renderiza la lista de territorios.
 */
function renderTerritoriesList(gang) {
  const container = document.getElementById('territories-list');
  container.innerHTML = '';

  const workedCount = (gang.territories || []).filter(t => t.workedBy).length;
  const MAX_WORKED = 10;

  (gang.territories || []).forEach(terrItem => {
    const territory = TERRITORIES.find(t => t.id === terrItem.territoryId);
    if (!territory) return;

    const card = document.createElement('div');
    card.className = 'territory-card';
    if (terrItem.workedBy) card.classList.add('territory-card--worked');

    let workerHTML = '';
    if (terrItem.workedBy) {
      const worker = (gang.fighters || []).find(f => f.id === terrItem.workedBy);
      if (worker) {
        workerHTML = `<div class="territory-card-worker">Trabajado por: ${escapeHTML(worker.name || worker.typeName)}</div>`;
      }
    }

    const hasWorker = !!terrItem.workedBy;
    const limitReached = !hasWorker && workedCount >= MAX_WORKED;
    const btnDisabled = (hasWorker || limitReached || !territoriesWorkMode) ? 'disabled' : '';

    let btnText = hasWorker ? 'Asignado' : 'Trabajar';
    if (limitReached) btnText = 'Límite 10';

    card.innerHTML = `
      <div class="territory-card-info"
           data-action="view-territory-detail"
           data-territory-id="${terrItem.id}">
        <div class="territory-card-name">${escapeHTML(territory.name)}</div>
        <div class="territory-card-income">Income: <strong>${escapeHTML(territory.incomeLabel)}</strong></div>
        ${workerHTML}
      </div>
      <div class="territory-card-actions">
        <button class="btn-territory-work"
                data-action="work-territory"
                data-territory-id="${terrItem.id}"
                ${btnDisabled}>
          ${btnText}
        </button>
        <button class="btn-territory-remove"
                data-action="remove-territory"
                data-territory-id="${terrItem.id}"
                title="Quitar territorio">
          Quitar
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

/**
 * Devuelve los gangers que pueden trabajar territorios.
 * (Excluye Líder, Heavy, Juve. Solo Ganger.)
 */
function getAvailableGangersForTerritories(gang) {
  const gangers = (gang.fighters || []).filter(f => f.typeId === 'ganger' || f.typeId === 'pit-slave');

  // Excluir los que están trabajando territorios
  const busyInTerritories = new Set(
    (gang.territories || [])
      .filter(t => t.workedBy)
      .map(t => t.workedBy)
  );

  // Excluir los que están buscando objetos raros esta ronda
  const saved = gang.rareMarketOffers;
  const currentRound = gang.currentRound || 1;
  const busyInRare = (saved && saved.round === currentRound && saved.gangerIds)
    ? new Set(saved.gangerIds)
    : new Set();

  return gangers.filter(f => !busyInTerritories.has(f.id) && !busyInRare.has(f.id));
}


/**
 * Abre el modal para elegir ganger para trabajar un territorio.
 */
function openTerritoryWorkerModal(territoryItemId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const terrItem = (gang.territories || []).find(t => t.id === territoryItemId);
  if (!terrItem) return;

  const territory = TERRITORIES.find(t => t.id === terrItem.territoryId);
  if (!territory) return;

  // Guardar en el modal
  document.getElementById('modal-territory-worker').dataset.territoryItemId = territoryItemId;

  document.getElementById('territory-worker-title').textContent = 'Elegir Ganger';
  document.getElementById('territory-worker-name').textContent = territory.name;

  const list = document.getElementById('territory-worker-list');
  list.innerHTML = '';

  // ===== FILTRO DIRECTO: coger gangers y quitar los que ya trabajan =====
  const allGangers = (gang.fighters || []).filter(f => f.typeId === 'ganger' || f.typeId === 'pit-slave');
  
  // IDs de gangers que YA están trabajando
  const busyIds = [];
  (gang.territories || []).forEach(t => {
    if (t.workedBy) busyIds.push(t.workedBy);
  });

  // IDs de gangers que están buscando raros
  const saved = gang.rareMarketOffers;
  const currentRound = gang.currentRound || 1;
  if (saved && saved.round === currentRound && saved.gangerIds) {
    saved.gangerIds.forEach(id => busyIds.push(id));
  }

  // Filtrar
   // Filtrar también los que ya trabajaron esta ronda
  const availableGangers = allGangers.filter(f => 
    !busyIds.includes(f.id) && !f.workedThisRound
  );

  console.log('=== MODAL WORKER ===');
  console.log('Total gangers:', allGangers.length);
  console.log('Busy IDs:', busyIds);
  console.log('Disponibles:', availableGangers.map(f => f.id));

  if (availableGangers.length === 0) {
    list.innerHTML = `
      <div class="territory-worker-hint" style="text-align:center;padding:1rem;">
        No hay Gangers disponibles. Todos están trabajando o buscando objetos raros.
      </div>
    `;
    openModal('modal-territory-worker');
    return;
  }

  availableGangers.forEach(fighter => {
    const btn = document.createElement('button');
    btn.className = 'territory-worker-btn';
    btn.innerHTML = `
      <span class="territory-worker-btn-name">${escapeHTML(fighter.name || '(sin nombre)')}</span>
      <span class="territory-worker-btn-type">${escapeHTML(fighter.typeName)}</span>
    `;
    btn.addEventListener('click', () => assignGangerToTerritory(fighter.id));
    list.appendChild(btn);
  });

  openModal('modal-territory-worker');
}

/**
 * Asigna un ganger a un territorio.
 */
function assignGangerToTerritory(fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const terrItemId = document.getElementById('modal-territory-worker').dataset.territoryItemId;
  if (!terrItemId) return;

  const terrItem = (gang.territories || []).find(t => t.id === terrItemId);
  if (!terrItem) return;

  // Asignar
  terrItem.workedBy = fighterId;

    // Marcar al ganger como que ya trabajó esta ronda
  const worker = (gang.fighters || []).find(f => f.id === fighterId);
  if (worker) {
    worker.workedThisRound = true;
  }

  // Quitar del mercado raro si estaba
  const saved = gang.rareMarketOffers;
  const currentRound = gang.currentRound || 1;
  if (saved && saved.round === currentRound && saved.gangerIds) {
    saved.gangerIds = saved.gangerIds.filter(id => id !== fighterId);
    saved.gangers = saved.gangerIds.length;
  }

  // Guardar INMEDIATAMENTE en localStorage
  saveGangs(gangs);

  // Cerrar modal
  closeModal('modal-territory-worker');

  // Forzar re-render
  renderTerritoriesScreen();
}

/**
 * Recoge el income de todos los territorios trabajados.
 */
function collectTerritoriesIncome() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  let pendingRecruitJuve = false;

  const currentRound = gang.currentRound || 1;

  // Verificar que no se ha recogido ya esta ronda
  if (gang.incomeCollectedRound === currentRound) {
    alert('Ya has recogido el income de esta ronda. Espera a la siguiente.');
    return;
  }

  const workedTerr = (gang.territories || []).filter(t => t.workedBy);
  if (workedTerr.length === 0) {
    alert('No hay territorios trabajados.');
    return;
  }

  // Calcular income bruto
  const incomeRows = [];
  let totalGross = 0;

     workedTerr.forEach(terrItem => {
    const territory = TERRITORIES.find(t => t.id === terrItem.territoryId);
    if (!territory) return;

    const worker = (gang.fighters || []).find(f => f.id === terrItem.workedBy);
    const roll = rollTerritoryIncome(territory);

    // ===== CHEM PIT: aplicar herida si hubo accidente =====
    if (roll.specialEffect === 'chem-pit-accident' && worker) {
      applyTerritoryInjury(worker, 'horrible-scars');
    }
    // ======================================================

    // ===== SETTLEMENT: guardar info de reclutamiento =====
    if (roll.canRecruitJuve) {
      pendingRecruitJuve = true;
    }
    // ====================================================

    incomeRows.push({
      territoryName: territory.name,
      workerName: worker ? (worker.name || worker.typeName) : '—',
      incomeLabel: territory.incomeLabel,
      income: roll.total,
      roll: roll,
      territory: territory
    });

    totalGross += roll.total;
  });


  // Calcular profit
  const modelCount = (gang.fighters || []).length;
  const profit = calculateProfit(totalGross, modelCount);

  // Guardar para confirmar
  pendingIncomeData = {
    rows: incomeRows,
    totalGross: totalGross,
    modelCount: modelCount,
    profit: profit,
    canRecruitJuve: pendingRecruitJuve
  };

  // Mostrar modal
  renderIncomeSummary();
  openModal('modal-income-summary');
}

/**
 * Renderiza el modal de resumen del income.
 */
function renderIncomeSummary() {
  if (!pendingIncomeData) return;

  const body = document.getElementById('income-summary-body');
  let html = '';

  html += `<p style="font-size:0.8rem;color:var(--text-secondary);margin-bottom:0.75rem;">
    Income bruto por territorio:
  </p>`;

   pendingIncomeData.rows.forEach(row => {
    html += `
      <div class="income-summary-row">
        <span class="income-summary-row-label">
          ${escapeHTML(row.territoryName)} <span style="color:var(--text-dim);font-size:0.75rem;">(${escapeHTML(row.workerName)})</span>
        </span>
        <span class="income-summary-row-value">+${row.income}c</span>
      </div>
    `;

    // Aviso especial si hubo accidente
    if (row.roll.specialMessage) {
      html += `
        <div class="income-summary-row" style="background:rgba(127,29,29,0.2);border-left:3px solid #991b1b;">
          <span class="income-summary-row-label" style="color:#fca5a5;">
            ${escapeHTML(row.roll.specialMessage)}
          </span>
        </div>
      `;
    }
  });

  html += `
    <div class="income-summary-row" style="background:var(--bg-panel);border-left:3px solid var(--border-accent);">
      <span class="income-summary-row-label">Income bruto total</span>
      <span class="income-summary-row-value">${pendingIncomeData.totalGross}c</span>
    </div>
  `;

  html += `
    <div class="income-summary-row" style="background:var(--bg-panel);border-left:3px solid var(--red-dark);">
      <span class="income-summary-row-label">Costes de mantenimiento (${pendingIncomeData.modelCount} modelos)</span>
      <span class="income-summary-row-value" style="color:#ef4444;">-${pendingIncomeData.totalGross - pendingIncomeData.profit}c</span>
    </div>
  `;

    html += `
    <div class="income-summary-total">
      <span class="income-summary-total-label">Profit neto</span>
      <span class="income-summary-total-value">+${pendingIncomeData.profit}c</span>
    </div>
  `;

  // Aviso de reclutamiento de Juve gratis
  if (pendingIncomeData.canRecruitJuve) {
    html += `
      <div style="margin-top:1rem;padding:0.75rem;background:rgba(34,197,94,0.15);border:1px solid #16a34a;border-radius:4px;">
        <p style="font-size:0.85rem;color:#86efac;margin-bottom:0.5rem;">
          <strong>¡Un joven familiar quiere unirse a la banda!</strong>
        </p>
        <p style="font-size:0.75rem;color:var(--text-secondary);margin-bottom:0.75rem;">
          Has sacado un 6 en el Settlement. Puedes reclutar un Juve gratis con cuchillo equipado.
        </p>
        <button id="btn-recruit-free-juve" class="btn btn-primary" style="width:100%;">
          Reclutar Juve gratis
        </button>
      </div>
    `;
  }

  body.innerHTML = html;
}

/**
 * Confirma el income y lo suma a los créditos.
 */
function confirmIncome() {
  if (!pendingIncomeData) return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  // Sumar profit a créditos
  gang.creditsAvailable = (gang.creditsAvailable || 0) + pendingIncomeData.profit;

    // Marcar que se ha recogido el income esta ronda
  gang.incomeCollectedRound = gang.currentRound || 1;

  saveGangs(gangs);

  // Cerrar modal
  closeModal('modal-income-summary');

  // Mostrar resumen en pantalla
  const summaryEl = document.getElementById('territories-summary');
  summaryEl.innerHTML = `
    <p style="color:var(--green);font-weight:700;margin-bottom:0.3rem;">
      Income recogido: +${pendingIncomeData.profit}c
    </p>
    <p style="font-size:0.75rem;color:var(--text-secondary);">
      (Income bruto: ${pendingIncomeData.totalGross}c · Mantenimiento: -${pendingIncomeData.totalGross - pendingIncomeData.profit}c)
    </p>
  `;
  summaryEl.style.display = 'block';

  pendingIncomeData = null;

  // Refrescar pantalla
  renderTerritoriesScreen();

  // Refrescar la ficha de banda también
  renderGangDetail(gang);

  // ===== AVANZAR RONDA SI ESTAMOS EN MODO TRABAJO =====
  if (territoriesWorkMode) {
    territoriesWorkMode = false;
    gang.currentRound = (gang.currentRound || 1) + 1;

    // Limpiar flags
    (gang.fighters || []).forEach(f => {
      delete f.workedThisRound;
    });
    (gang.territories || []).forEach(t => {
      delete t.workedBy;
    });
    gang.rareMarketOffers = null;

    saveGangs(gangs);

    setTimeout(() => {
      alert(`Ronda ${gang.currentRound} comenzada.`);
      renderGangDetail(gang);
      showScreen('screen-gang-detail');
    }, 300);
  }
  // ====================================================
}

/**
 * Abre el modal de detalle de un territorio.
 */
function openTerritoryDetailModal(territoryItemId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const terrItem = (gang.territories || []).find(t => t.id === territoryItemId);
  if (!terrItem) return;

  const territory = TERRITORIES.find(t => t.id === terrItem.territoryId);
  if (!territory) return;

  // Reutilizar el modal de reglas de la casa cambiando el contenido
  const titleEl = document.getElementById('house-rules-title');
  const bodyEl = document.getElementById('house-rules-body');

  titleEl.textContent = territory.name;

  let html = `
    <div class="house-rule-block">
      <div class="house-rule-name">Income: ${escapeHTML(territory.incomeLabel)}</div>
      <p class="house-rule-desc">${escapeHTML(territory.description).replace(/\n/g, '<br>')}</p>
    </div>
  `;

  if (territory.specialNote) {
    html += `
      <div class="house-rule-block">
        <div class="house-rule-name">Regla especial</div>
        <p class="house-rule-desc">${escapeHTML(territory.specialNote).replace(/\n/g, '<br>')}</p>
      </div>
    `;
  }

  bodyEl.innerHTML = html;
  openModal('modal-house-rules');
}
/**
 * Recluta un Juve gratis desde el Settlement.
 */
function recruitFreeJuveFromSettlement() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  // Comprobar que tiene tipo Juve
  const types = getFighterTypesForHouse(gang.houseId);
  const juveType = types.find(t => t.id === 'juve');
  if (!juveType) {
    alert('Esta banda no tiene Juves.');
    return;
  }

  // Crear el fighter (sin coste, con cuchillo equipado)
  const initialXP = getInitialXP('juve', gang.houseId);
  const fighter = {
    id: 'fighter_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9),
    typeId: 'juve',
    typeName: 'Juve',
    name: '',
    image: null,
    stats: { ...juveType.stats },
    originalStats: { ...juveType.stats },
    cost: 0,   // gratis
    equipmentCost: 0,
    xp: initialXP,
    initialXP: initialXP,
    advancesTaken: 0,
    level: 1,
    special: [...(juveType.special || [])],
    equipment: [],
    injuries: [],
    createdAt: Date.now()
  };

  // Equipar cuchillo de pandillero
  equipWeapon(fighter, 'pandillero-knife');

  gang.fighters = gang.fighters || [];
  gang.fighters.push(fighter);

  saveGangs(gangs);

  alert(`¡${fighter.typeName} se ha unido a la banda!`);

  // Cerrar el modal de income y confirmar
  confirmIncome();
}
/**
 * Abre el modal para elegir un territorio manualmente.
 */
function openAddTerritoryModal() {
  const list = document.getElementById('add-territory-list');
  list.innerHTML = '';

  TERRITORIES.forEach(territory => {
    const btn = document.createElement('button');
    btn.className = 'btn-add-territory-item';
    btn.innerHTML = `
      <span class="territory-name">${escapeHTML(territory.name)}</span>
      <span class="territory-income">${escapeHTML(territory.incomeLabel)}</span>
    `;
    btn.addEventListener('click', () => addManualTerritory(territory.id));
    list.appendChild(btn);
  });

  openModal('modal-add-territory');
}

/**
 * Añade un territorio concreto a la banda.
 */
function addManualTerritory(territoryId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  if (!gang.territories) gang.territories = [];

  gang.territories.push({
    id: 'terr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    territoryId: territoryId,
    acquiredAt: Date.now()
  });

  saveGangs(gangs);
  closeModal('modal-add-territory');
  renderTerritoriesScreen();
}

/**
 * Añade un territorio aleatorio (D66).
 */
function addRandomTerritory() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  if (!gang.territories) gang.territories = [];

  const territory = rollRandomTerritory();
  if (!territory) {
    alert('Error al tirar territorio. Inténtalo de nuevo.');
    return;
  }

  gang.territories.push({
    id: 'terr_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
    territoryId: territory.id,
    acquiredAt: Date.now()
  });

  saveGangs(gangs);
  renderTerritoriesScreen();
  alert(`Añadido: ${territory.name} (${territory.incomeLabel})`);
}

/**
 * Quita un territorio de la banda.
 */
function removeTerritory(territoryItemId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const terrItem = (gang.territories || []).find(t => t.id === territoryItemId);
  if (!terrItem) return;

  const territory = TERRITORIES.find(t => t.id === terrItem.territoryId);
  const name = territory ? territory.name : 'este territorio';

  if (!confirm(`¿Quitar "${name}"?`)) return;

  gang.territories = gang.territories.filter(t => t.id !== territoryItemId);

  saveGangs(gangs);
  renderTerritoriesScreen();
}
