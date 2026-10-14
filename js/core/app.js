/* ==================================================
   APP PRINCIPAL - Pantalla de Pandillas
   ================================================== */

// ---------- ESTADO ----------
let gangs = [];
let selectedHouseId = null;
let selectedGangType = null;
let gangToDeleteId = null;
let gangForImageId = null;
let currentGangId = null;
let fighterBeingEditedId = null;

// ---------- INICIALIZACIÓN ----------
document.addEventListener('DOMContentLoaded', () => {
  gangs = loadGangs();
  renderGangs();
  bindEvents();
  console.log('%c⚙ HIVE SCUM online', 'color: #d97706; font-weight: bold;');
});

// ---------- EVENTOS ----------
function bindEvents() {

  // ---------- CREAR BANDA ----------
  document.getElementById('btn-create-gang').addEventListener('click', () => {
    selectedGangType = null;
    selectedHouseId = null;
    openModal('modal-gang-type');
  });

    // Modal Única en un Millón
  document.getElementById('btn-oiam-roll').addEventListener('click', () => {
    rollOneInAMillion();
  });

    // Modal de créditos
  document.getElementById('btn-credits-cancel').addEventListener('click', () => {
    closeModal('modal-credits');
  });

  document.getElementById('btn-credits-apply').addEventListener('click', () => {
    applyCreditsChange();
  });

  document.getElementById('input-credits-amount').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      applyCreditsChange();
    }
  });

  // Botones de tipo de banda
  document.querySelectorAll('.gang-type-card').forEach(card => {
    card.addEventListener('click', () => {
      selectedGangType = card.dataset.gangType;
      closeModal('modal-gang-type');
      renderHousesList(selectedGangType);
      openModal('modal-houses');
    });
  });

  // Botón volver del modal de casas
  document.getElementById('btn-houses-back').addEventListener('click', () => {
    closeModal('modal-houses');
    openModal('modal-gang-type');
  });

  // Volver desde confirmación → abre modal de casas otra vez
  document.getElementById('btn-confirm-back').addEventListener('click', () => {
    document.getElementById('input-gang-name').value = '';
    closeModal('modal-confirm');
    openModal('modal-houses');
  });

  // Confirmar casa → crear banda
  document.getElementById('btn-confirm-yes').addEventListener('click', confirmCreateGang);

  // Pulsar Enter en el input de nombre → confirmar
  document.getElementById('input-gang-name').addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      confirmCreateGang();
    }
  });

  // ---------- MODALES GENÉRICOS ----------
  // Botones de cerrar modales (los ✕)
  document.querySelectorAll('[data-close]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(btn.dataset.close);
    });
  });

  // Cerrar modal al pulsar fuera
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(modal.id);
    });
  });

  // ---------- BORRAR BANDA ----------
  document.getElementById('btn-delete-cancel').addEventListener('click', () => {
    closeModal('modal-delete');
    gangToDeleteId = null;
  });

  document.getElementById('btn-delete-yes').addEventListener('click', confirmDeleteGang);

  // ---------- IMAGEN ----------
  document.getElementById('input-gang-image').addEventListener('change', handleImageSelected);

  // ---------- VOLVER A PANDILLAS ----------
  document.getElementById('btn-back-to-gangs').addEventListener('click', () => {
    currentGangId = null;
    showScreen('screen-gangs');
    renderGangs();
    document.body.classList.remove('in-gang-view');
    updateMenuVisibility();
  });

  // ---------- DELEGACIÓN EN FICHA DE BANDA ----------
  document.getElementById('gang-detail-content').addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const fighterId = actionEl.dataset.fighterId;
    const typeId = actionEl.dataset.typeId;
    const weaponId = actionEl.dataset.weaponId;

    if (action === 'add-fighter') {
      e.preventDefault();
      if (!actionEl.disabled) addFighter(currentGangId, typeId);
      return;
    }
    if (action === 'delete-fighter') {
      e.preventDefault();
      askDeleteFighter(fighterId);
      return;
    }
    if (action === 'open-house-rules') {
      e.preventDefault();
      e.stopPropagation();
      openHouseRulesModal();
      return;
    }
    if (action === 'open-fighter-editor') {
      e.preventDefault();
      openFighterEditor(fighterId);
      return;
    }
      if (action === 'open-credits-modal') {
      e.preventDefault();
      e.stopPropagation();
      openCreditsModal();
      return;
    }

      if (action === 'open-weapon-modal') {
      e.preventDefault();
      e.stopPropagation();
      const isOIAM = actionEl.dataset.oiam === '1';
      if (weaponId) openWeaponModal(weaponId, isOIAM);
      return;
    }
    if (action === 'open-weapon-actions') {
      e.preventDefault();
      e.stopPropagation();
      const source = actionEl.dataset.source;
      const itemId = actionEl.dataset.itemId;
      const wid = actionEl.dataset.weaponId;
      const fid = actionEl.dataset.fighterId;
      openWeaponActionsModal(source, itemId, wid, fid);
      return;
    }
    if (action === 'xp-plus') {
      e.preventDefault();
      e.stopPropagation();
      changeFighterXP(fighterId, 1);
      return;
    }
    if (action === 'xp-minus') {
      e.preventDefault();
      e.stopPropagation();
      changeFighterXP(fighterId, -1);
      return;
    }
    if (action === 'level-up') {
      e.preventDefault();
      e.stopPropagation();
      openAdvanceModal(fighterId);
      return;
    }
    if (action === 'open-skill-modal') {
      e.preventDefault();
      e.stopPropagation();
      const skillId = actionEl.dataset.skillId;
      if (skillId) openSkillModal(skillId);
      return;
    }
    if (action === 'equip-fighter') {
      e.preventDefault();
      e.stopPropagation();
      if (fighterId) openTradingPost(fighterId);
      return;
    }
    if (action === 'finish-round') {
      e.preventDefault();
      e.stopPropagation();
      askFinishRound();
      return;
    }
    if (action === 'show-stat-info') {
      e.preventDefault();
      e.stopPropagation();
      const statKey = actionEl.dataset.statKey;
      const fid = actionEl.dataset.fighterId;
      if (statKey && fid) openStatInfoModal(fid, statKey);
      return;
    }
    if (action === 'open-injuries') {
      e.preventDefault();
      e.stopPropagation();
      if (fighterId) openInjuriesModal(fighterId);
      return;
    }
    if (action === 'add-injury') {
      e.preventDefault();
      e.stopPropagation();
      const injuryId = actionEl.dataset.injuryId;
      if (fighterId && injuryId) addInjuryToFighter(fighterId, injuryId);
      return;
    }
    if (action === 'remove-injury') {
      e.preventDefault();
      e.stopPropagation();
      const injuryId = actionEl.dataset.injuryId;
      if (fighterId && injuryId) removeInjuryFromFighter(fighterId, injuryId);
      return;
    }
    if (action === 'open-injury-desc') {
      e.preventDefault();
      e.stopPropagation();
      const injuryId = actionEl.dataset.injuryId;
      if (injuryId) openInjuryDescModal(injuryId);
      return;
    }
  });

  // ---------- EDITOR LUCHADOR ----------
  document.getElementById('btn-fighter-cancel').addEventListener('click', () => {
    closeModal('modal-fighter');
    fighterBeingEditedId = null;
  });
  document.getElementById('btn-fighter-save').addEventListener('click', saveFighter);

  // ---------- MODAL ARMA ----------
  document.getElementById('btn-weapon-close').addEventListener('click', () => {
    closeModal('modal-weapon');
  });

  // ---------- ACCIONES DE ARMA ----------
  document.getElementById('btn-action-transfer').addEventListener('click', () => {
    closeModal('modal-weapon-actions');
    openTransferModal();
  });
  document.getElementById('btn-action-transfer-fighter').addEventListener('click', () => {
    closeModal('modal-weapon-actions');
    openTransferModal();
  });
  document.getElementById('btn-action-to-stash').addEventListener('click', () => {
    moveWeaponToStash();
  });
  document.getElementById('btn-action-sell').addEventListener('click', () => {
    sellWeaponFromContext();
  });
  document.getElementById('btn-action-remove').addEventListener('click', () => {
    removeWeaponFromContext();
  });

  // ---------- GLOSARIO ----------
  document.getElementById('btn-glossary-back').addEventListener('click', backToGlossaryCategories);
  document.getElementById('btn-glossary-search-back').addEventListener('click', backToGlossaryCategories);
  document.getElementById('glossary-search').addEventListener('input', (e) => {
    handleGlossarySearch(e.target.value);
  });

  // ---------- MERCADO RARO ----------
  document.getElementById('tab-basics').addEventListener('click', openBasicsTab);
  document.getElementById('tab-rares').addEventListener('click', openRareMarketTab);
  document.getElementById('rare-gangers-minus').addEventListener('click', () => setRareMarketGangers(-1));
  document.getElementById('rare-gangers-plus').addEventListener('click', () => setRareMarketGangers(1));
  document.getElementById('btn-rare-roll').addEventListener('click', rollRareMarket);

  // ---------- TRADING POST ----------
  document.getElementById('btn-market-back').addEventListener('click', backToMarketCategories);

  document.getElementById('btn-weapon-action').addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    const weaponId = e.target.dataset.weaponId;

    if (action === 'buy-weapon') {
      buyWeapon(weaponId);
    }
    if (action === 'buy-rare-weapon') {
      buyRareWeapon(weaponId, null);
    }
  });

  // ---------- MODAL HERIDAS ----------
  document.getElementById('modal-injuries').addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const fighterId = actionEl.dataset.fighterId;
    const injuryId = actionEl.dataset.injuryId;

    if (action === 'add-injury') {
      e.preventDefault();
      if (fighterId && injuryId) addInjuryToFighter(fighterId, injuryId);
      return;
    }
    if (action === 'remove-injury') {
      e.preventDefault();
      if (fighterId && injuryId) removeInjuryFromFighter(fighterId, injuryId);
      return;
    }
  });

  // ---------- SUBIDA DE NIVEL ----------
  document.getElementById('btn-advance-roll').addEventListener('click', advanceRollDice);
  document.getElementById('btn-advance-apply').addEventListener('click', applyAdvance);
  document.getElementById('btn-advance-manual').addEventListener('click', showManualAdvanceSelector);
  document.getElementById('btn-advance-manual-confirm').addEventListener('click', confirmManualAdvance);

  document.getElementById('advance-result-text').addEventListener('click', (e) => {
    const btn = e.target.closest('[data-table-id]');
    if (btn) {
      e.preventDefault();
      selectSkillTable(btn.dataset.tableId);
    }
  });

  // ---------- MENÚ LATERAL ----------
  document.getElementById('btn-menu-toggle').addEventListener('click', openMenu);
  document.getElementById('btn-menu-close').addEventListener('click', closeMenu);
  document.getElementById('menu-overlay').addEventListener('click', closeMenu);

  document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('click', () => {
      const target = item.dataset.screen;
      closeMenu();

      if (target === 'screen-gang-detail') {
        if (currentGangId) {
          const gang = gangs.find(g => g.id === currentGangId);
          if (gang) {
            renderGangDetail(gang);
            showScreen('screen-gang-detail');
          }
        }
        return;
      }

      if (target === 'screen-almacen') {
        renderAlmacenScreen();
        showScreen(target);
        return;
      }

           // Pantalla de territorios
      if (target === 'screen-territorios') {
        // Modo consulta (no se puede trabajar)
        territoriesWorkMode = false;
        renderTerritoriesScreen();
        showScreen(target);
        return;
      }

      if (target === 'screen-trading-post') {
        openTradingPost();
        return;
      }

      if (item.dataset.action === 'open-rare-market') {
        openRareMarket();
        return;
      }

      if (target === 'screen-glosario') {
        openGlossary();
        return;
      }

      showScreen(target);
    });
  });

  // Botones "← Volver" genéricos de las pantallas nuevas
  document.querySelectorAll('[data-back-to-gang]').forEach(btn => {
    btn.addEventListener('click', () => {
      if (typeof currentTerritoryId !== 'undefined') currentTerritoryId = null;
      if (typeof pendingIncomeData !== 'undefined') pendingIncomeData = null;

      if (currentGangId) {
        const gang = gangs.find(g => g.id === currentGangId);
        if (gang) {
          renderGangDetail(gang);
          showScreen('screen-gang-detail');
        }
      } else {
        showScreen('screen-gangs');
      }
    });
  });

  // ---------- DELEGACIÓN GLOBAL PARA TAGS DE REGLAS DE ARMAS ----------
  document.addEventListener('click', (e) => {
    const tag = e.target.closest('[data-action="open-weapon-rule"]');
    if (!tag) return;
    e.preventDefault();
    e.stopPropagation();
    const ruleId = tag.dataset.ruleId || null;
    const ruleName = tag.dataset.ruleName || null;
    openWeaponRuleModal(ruleId, ruleName);
  });

  // ============ TERRITORIOS ============
   document.getElementById('territories-list').addEventListener('click', (e) => {
    const actionEl = e.target.closest('[data-action]');
    if (!actionEl) return;

    const action = actionEl.dataset.action;
    const territoryItemId = actionEl.dataset.territoryId;

    if (action === 'work-territory') {
      e.preventDefault();
      if (!territoriesWorkMode) return;
      openTerritoryWorkerModal(territoryItemId);
      return;
    }
    if (action === 'view-territory-detail') {
      e.preventDefault();
      openTerritoryDetailModal(territoryItemId);
      return;
    }
    if (action === 'remove-territory') {
      e.preventDefault();
      e.stopPropagation();
      removeTerritory(territoryItemId);
      return;
    }
  });

  document.getElementById('btn-collect-income').addEventListener('click', () => {
    collectTerritoriesIncome();
  });

  document.getElementById('btn-income-confirm').addEventListener('click', () => {
    confirmIncome();
  });
  
    document.getElementById('btn-add-random-territory').addEventListener('click', () => {
    addRandomTerritory();
  });

  document.getElementById('btn-add-manual-territory').addEventListener('click', () => {
    openAddTerritoryModal();
  });

  // Delegación para el botón de reclutar Juve gratis
  document.addEventListener('click', (e) => {
    if (e.target.id === 'btn-recruit-free-juve') {
      e.preventDefault();
      recruitFreeJuveFromSettlement();
    }
  });
}


// ---------- CAMBIO DE PANTALLA ----------
function showScreen(screenId) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const target = document.getElementById(screenId);
  if (target) target.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- MODALES ----------
function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  document.getElementById(id).classList.remove('active');
  const anyOpen = document.querySelector('.modal.active');
  if (!anyOpen) document.body.style.overflow = '';
}

// ---------- RENDERIZAR LISTA DE CASAS ----------
function renderHousesList(gangType) {
  const container = document.getElementById('houses-list');
  if (!container) return;
  container.innerHTML = '';

  const outlawHouses = ['pitslaves', 'scavvies', 'ratskins', 'redemptionists', 'spyrers', 'enforcers', 'genestealer', 'chaos', 'nomads'];

  let filteredHouses = HOUSES;
  if (gangType === 'proscritos') {
    filteredHouses = HOUSES.filter(h => outlawHouses.includes(h.id));
  } else if (gangType === 'necromunda') {
    filteredHouses = HOUSES.filter(h => !outlawHouses.includes(h.id));
  }

  if (filteredHouses.length === 0) {
    container.innerHTML = `
      <div class="houses-empty">
        <p>No hay casas disponibles para este tipo de banda.</p>
      </div>
    `;
    return;
  }

  filteredHouses.forEach(house => {
    const item = document.createElement('button');
    item.className = 'house-item';
    item.style.setProperty('--house-color', house.color);

    const emblemHTML = house.image
      ? `<div class="house-emblem house-emblem--img">
           <img src="${house.image}" alt="${house.name}">
         </div>`
      : `<div class="house-emblem">${getInitials(house.name)}</div>`;

    item.innerHTML = `
      ${emblemHTML}
      <div class="house-text">
        <div class="house-name">${house.name}</div>
        <div class="house-org">${house.org}</div>
        <div class="house-desc">${house.desc}</div>
      </div>
    `;
    item.addEventListener('click', () => selectHouse(house.id));
    container.appendChild(item);
  });
}

// Iniciales para el placeholder del escudo
function getInitials(name) {
  return name
    .replace(/^Casa\s+/i, '')
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

// ---------- SELECCIONAR CASA → CONFIRMACIÓN ----------
function selectHouse(houseId) {
  selectedHouseId = houseId;
  const house = getHouseById(houseId);
  if (!house) return;

  // Determinar gangType automáticamente
  const outlawHouses = ['pitslaves', 'scavvies', 'ratskins', 'redemptionists', 'spyrers', 'enforcers', 'genestealer', 'chaos', 'nomads'];
  selectedGangType = outlawHouses.includes(house.id) ? 'proscritos' : 'necromunda';

  const emblemHTML = house.image
    ? `<div class="confirm-house-emblem confirm-house-emblem--img">
         <img src="${house.image}" alt="${house.name}">
       </div>`
    : `<div class="confirm-house-emblem" style="background:${house.color}">
         ${getInitials(house.name)}
       </div>`;

  const container = document.getElementById('confirm-content');
  container.innerHTML = `
    ${emblemHTML}
    <div class="confirm-house-name">${house.name}</div>
    <div class="confirm-house-org" style="color:${house.color}">${house.org}</div>
    <div class="confirm-house-desc">${house.desc}</div>
  `;

  const nameInput = document.getElementById('input-gang-name');
  nameInput.value = '';
  setTimeout(() => nameInput.focus(), 100);

  closeModal('modal-houses');
  openModal('modal-confirm');
}

// ---------- CREAR BANDA ----------
function confirmCreateGang() {
  if (!selectedHouseId) return;
  const house = getHouseById(selectedHouseId);
  if (!house) return;

  const nameInput = document.getElementById('input-gang-name');
  const gangName = (nameInput.value.trim() || 'Nueva Banda');

  const gangType = selectedGangType || 'necromunda';

  const newGang = {
    id: generateId(),
    gangType: gangType,
    name: gangName,
    houseId: house.id,
    houseName: house.name,
    houseColor: house.color,
    reputation: 0,
    image: null,
    fighters: [],
    stash: [],
    territories: [],
    currentRound: 1,
    creditsAvailable: 1000,
    createdAt: Date.now()
  };

  // Generar territorios iniciales si es Necromunda
  if (gangType === 'necromunda' && typeof generateInitialTerritories === 'function') {
    newGang.territories = generateInitialTerritories(5);
  }

  gangs.push(newGang);
  saveGangs(gangs);

  closeModal('modal-confirm');
  selectedHouseId = null;
  selectedGangType = null;
  renderGangs();

  openGangDetail(newGang.id);
}

// ---------- RENDERIZAR LISTA DE BANDAS ----------
function renderGangs() {
  const list = document.getElementById('gangs-list');
  const empty = document.getElementById('gangs-empty');
  list.innerHTML = '';

  if (gangs.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  gangs.forEach(gang => {
    const card = document.createElement('div');
    card.className = 'gang-card';

    const repName = getReputationName(gang.reputation);

    const thumbHTML = gang.image
      ? `<img src="${gang.image}" alt="${gang.name}">`
      : `<span>+</span>`;

    const deleteImgBtnHTML = gang.image
      ? `<button class="gang-thumb-delete" data-action="delete-image" data-gang-id="${gang.id}">Borrar img</button>`
      : '';

    const typeLabel = gang.gangType === 'proscritos' ? 'PROSCRITOS' : 'NECROMUNDA';
    const typeClass = gang.gangType === 'proscritos' ? 'gang-type-chip--proscritos' : 'gang-type-chip--necromunda';

    card.innerHTML = `
      <div class="gang-thumb-wrapper">
        <div class="gang-thumb ${gang.image ? 'has-image' : ''}" data-action="upload-image" data-gang-id="${gang.id}">
          ${thumbHTML}
        </div>
        ${deleteImgBtnHTML}
      </div>
      <div class="gang-info">
        <div class="gang-name">${escapeHTML(gang.name)}</div>
        <div class="gang-meta">
          <span class="gang-type-chip ${typeClass}">${typeLabel}</span>
          <span class="gang-house-chip">${escapeHTML(gang.houseName)}</span>
          <span class="gang-rep">${repName} · ${gang.reputation}</span>
        </div>
      </div>
      <div class="gang-actions">
        <button class="gang-delete-btn" data-action="delete-gang" data-gang-id="${gang.id}">
          Borrar
        </button>
      </div>
    `;

    card.addEventListener('click', (e) => {
      const action = e.target.dataset.action;

      if (action === 'delete-gang') {
        e.stopPropagation();
        askDeleteGang(e.target.dataset.gangId);
        return;
      }
      if (action === 'delete-image') {
        e.stopPropagation();
        removeGangImage(e.target.dataset.gangId);
        return;
      }
      if (action === 'upload-image') {
        e.stopPropagation();
        gangForImageId = e.target.dataset.gangId;
        document.getElementById('input-gang-image').click();
        return;
      }
      openGangDetail(gang.id);
    });

    list.appendChild(card);
  });
}

// ---------- BORRAR IMAGEN DE BANDA ----------
function removeGangImage(gangId) {
  const gang = gangs.find(g => g.id === gangId);
  if (!gang) return;
  gang.image = null;
  saveGangs(gangs);
  renderGangs();
  if (currentGangId === gangId) renderGangDetail(gang);
}

// ---------- BORRAR BANDA ----------
function askDeleteGang(gangId) {
  const gang = gangs.find(g => g.id === gangId);
  if (!gang) return;
  gangToDeleteId = gangId;
  document.getElementById('delete-gang-name').textContent = gang.name;
  openModal('modal-delete');
}

function confirmDeleteGang() {
  if (!gangToDeleteId) return;
  gangs = gangs.filter(g => g.id !== gangToDeleteId);
  saveGangs(gangs);
  gangToDeleteId = null;
  closeModal('modal-delete');
  renderGangs();
}

// ---------- SUBIR IMAGEN ----------
function handleImageSelected(e) {
  const file = e.target.files[0];
  if (!file || !gangForImageId) return;

  if (!file.type.startsWith('image/')) {
    alert('El archivo debe ser una imagen');
    resetImageInput();
    return;
  }

  const reader = new FileReader();
  reader.onload = (ev) => {
    const img = new Image();
    img.onload = () => {
      const MAX = 256;
      let { width, height } = img;
      if (width > height && width > MAX) {
        height = Math.round(height * MAX / width);
        width = MAX;
      } else if (height > MAX) {
        width = Math.round(width * MAX / height);
        height = MAX;
      }

      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, width, height);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

      const gang = gangs.find(g => g.id === gangForImageId);
      if (gang) {
        gang.image = dataUrl;
        saveGangs(gangs);
        renderGangs();
        if (currentGangId === gang.id) renderGangDetail(gang);
      }
      resetImageInput();
    };
    img.onerror = () => {
      alert('No se pudo cargar la imagen');
      resetImageInput();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

function resetImageInput() {
  document.getElementById('input-gang-image').value = '';
  gangForImageId = null;
}

// ---------- ABRIR DETALLE DE BANDA ----------
function openGangDetail(gangId) {
  const gang = gangs.find(g => g.id === gangId);
  if (!gang) return;
  currentGangId = gangId;
  renderGangDetail(gang);
  showScreen('screen-gang-detail');
  document.body.classList.add('in-gang-view');
  updateMenuVisibility();
}

// ---------- BORRAR LUCHADOR ----------
function askDeleteFighter(fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  const name = fighter.name || fighter.typeName;
  if (confirm(`¿Borrar al luchador "${name}"?`)) {
    gang.fighters = gang.fighters.filter(f => f.id !== fighterId);
    saveGangs(gangs);
    renderGangDetail(gang);
  }
}

// ==================================================
// EDITOR DE LUCHADOR
// ==================================================
function openFighterEditor(fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  fighterBeingEditedId = fighterId;

  document.getElementById('fighter-modal-title').textContent = 
    `Editar ${fighter.typeName}`;
  document.getElementById('input-fighter-name').value = fighter.name || '';

  openModal('modal-fighter');
  setTimeout(() => document.getElementById('input-fighter-name').focus(), 100);
}

function saveFighter() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterBeingEditedId);
  if (!fighter) return;

  const newName = document.getElementById('input-fighter-name').value.trim();
  fighter.name = newName;

  saveGangs(gangs);
  renderGangDetail(gang);

  closeModal('modal-fighter');
  fighterBeingEditedId = null;
}

// ==================================================
// MODAL DE ARMA
// ==================================================
function openWeaponModal(weaponId, isOIAM = false) {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return;

  ['modal-weapon-actions', 'modal-transfer', 'modal-skill', 'modal-advance'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

    // Título
  const titleSuffix = isOIAM ? ' ★' : '';
  document.getElementById('weapon-modal-title').textContent = weapon.name + titleSuffix;

  const imageContainer = document.getElementById('weapon-modal-image');
  if (weapon.image) {
    imageContainer.innerHTML = `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}">`;
  } else {
    const icon = getWeaponCategoryIcon(weapon.category);
    imageContainer.innerHTML = `
      <div class="weapon-image-placeholder">
        <span class="placeholder-icon">${icon}</span>
        <span class="placeholder-text">Sin imagen</span>
      </div>
    `;
  }

  const costText = weapon.costVariable
    ? `${weapon.cost} + ${weapon.costVariable}`
    : formatWeaponCost(weapon);
  document.getElementById('weapon-modal-cost').textContent = costText;
  document.getElementById('weapon-modal-rarity').textContent = formatWeaponRarity(weapon);

  const hasProfiles = weapon.profiles && weapon.profiles.length > 0;
  const hasDescription = !!weapon.descripcion;
  const hasProperties = weapon.propiedades && weapon.propiedades.length > 0;

    const profileDiv = document.querySelector('#modal-weapon .weapon-modal-profile');
  const infoDiv = document.querySelector('#modal-weapon .weapon-modal-info');

  if (hasProfiles) {
    profileDiv.style.display = 'block';
    infoDiv.style.display = 'block';
    profileDiv.innerHTML = renderWeaponProfilesTable(weapon);
  } else {
    profileDiv.style.display = 'none';
  }

  let extraInfoDiv = document.getElementById('weapon-modal-extra-info');
  if (!extraInfoDiv) {
    extraInfoDiv = document.createElement('div');
    extraInfoDiv.id = 'weapon-modal-extra-info';
    extraInfoDiv.className = 'weapon-modal-extra-info';
    
    const bodyDiv = document.querySelector('#modal-weapon .weapon-modal-body');
    bodyDiv.appendChild(extraInfoDiv);
  }

    let extraHTML = '';

  // Propiedades del arma + propiedades especiales (Única en un Millón)
  const specialProps = [];
  if (isOIAM) {
    specialProps.push({ nombre: 'Efecto', valor: 'Pasa automáticamente cualquier tirada de Munición' });
    specialProps.push({ nombre: 'Tipo', valor: 'Arma única en un millón' });
  }

  if (hasProperties || specialProps.length > 0) {
    extraHTML += `<div class="weapon-properties">`;
    if (hasProperties) {
      weapon.propiedades.forEach(prop => {
        extraHTML += `
          <div class="weapon-property-row">
            <span class="weapon-property-label">${escapeHTML(prop.nombre)}:</span>
            <span class="weapon-property-value">${escapeHTML(prop.valor)}</span>
          </div>
        `;
      });
    }
    specialProps.forEach(prop => {
      extraHTML += `
        <div class="weapon-property-row">
          <span class="weapon-property-label">${escapeHTML(prop.nombre)}:</span>
          <span class="weapon-property-value">${escapeHTML(prop.valor)}</span>
        </div>
      `;
    });
    extraHTML += `</div>`;
  }

  if (hasDescription) {
    extraHTML += `
      <div class="weapon-description">
        <div class="weapon-description-title">Descripción</div>
        <p class="weapon-description-text">${escapeHTML(weapon.descripcion).replace(/\n/g, '<br>')}</p>
      </div>
    `;
  }

  extraInfoDiv.innerHTML = extraHTML;
  extraInfoDiv.style.display = extraHTML ? 'block' : 'none';

  document.getElementById('weapon-modal-action').style.display = 'none';

  openModal('modal-weapon');
}

// ==================================================
// MENÚ LATERAL
// ==================================================
function openMenu() {
  const gang = gangs.find(g => g.id === currentGangId);
  const round = gang ? (gang.currentRound || 1) : 1;

  document.querySelectorAll('.menu-item[data-requires-round]').forEach(item => {
    const minRound = parseInt(item.dataset.requiresRound, 10);
    if (round < minRound) {
      item.style.display = 'none';
    } else {
      item.style.display = 'flex';
    }
  });

  document.getElementById('menu-drawer').classList.add('active');
  document.getElementById('menu-overlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeMenu() {
  document.getElementById('menu-drawer').classList.remove('active');
  document.getElementById('menu-overlay').classList.remove('active');
  document.body.style.overflow = '';
}

function updateMenuVisibility() {
  const btn = document.getElementById('btn-menu-toggle');
  if (currentGangId) {
    btn.style.display = 'flex';
  } else {
    btn.style.display = 'none';
    closeMenu();
  }
}

// ==================================================
// PANTALLA ALMACÉN
// ==================================================
function renderAlmacenScreen() {
  const container = document.getElementById('almacen-content');
  if (!container) return;

  if (!currentGangId) {
    container.innerHTML = `
      <div class="placeholder">
        <p>Primero abre una banda desde Pandillas.</p>
      </div>
    `;
    return;
  }

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  container.innerHTML = renderGangStash(gang);
}

/**
 * Abre el modal para modificar créditos.
 */
function openCreditsModal() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  document.getElementById('credits-modal-current').textContent = gang.creditsAvailable || 0;
  document.getElementById('input-credits-amount').value = '';
  openModal('modal-credits');
  setTimeout(() => document.getElementById('input-credits-amount').focus(), 100);
}

/**
 * Aplica el cambio de créditos desde el modal.
 */
function applyCreditsChange() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const input = document.getElementById('input-credits-amount');
  const value = parseInt(input.value, 10);

  if (isNaN(value) || value === 0) {
    alert('Introduce un número distinto de 0.');
    return;
  }

  const current = gang.creditsAvailable || 0;
  gang.creditsAvailable = Math.max(0, current + value);

  saveGangs(gangs);
  closeModal('modal-credits');
  renderGangDetail(gang);
}

// ==================================================
// CAMBIAR EXPERIENCIA
// ==================================================
function changeFighterXP(fighterId, delta) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const fighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!fighter) return;

  const newXP = (fighter.xp || 0) + delta;
  fighter.xp = Math.max(0, Math.min(401, newXP));

  const ascended = checkJuveAscension(fighter);
  if (ascended) {
    setTimeout(() => {
      alert(`¡${fighter.name || 'El Juve'} ha ascendido a Ganger! (21+ PX)`);
    }, 100);
  }

  saveGangs(gangs);
  renderGangDetail(gang);
}

// ==================================================
// FINALIZAR RONDA
// ==================================================
function askFinishRound() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const currentRound = gang.currentRound || 1;

  const ok = confirm(
    `¿Finalizar la Ronda ${currentRound}?\n\n` +
    'Al finalizar, podrás asignar Gangers a territorios y recoger income.\n\n' +
    '¿Continuar?'
  );
  if (!ok) return;

  // Activar modo trabajo
  territoriesWorkMode = true;

  // Ir a la pantalla de territorios
  renderTerritoriesScreen();
  showScreen('screen-territorios');
}

// ---------- UTILIDADES ----------
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ==================================================
// MODAL DE HABILIDAD
// ==================================================
function openSkillModal(skillId) {
  let description = getSkillDescription(skillId);
  let name = skillId;

  if (!description) {
    description = 'Descripción no disponible para esta habilidad.';
  }

  for (const tableId in SKILL_TABLES) {
    const table = SKILL_TABLES[tableId];
    const skill = table.skills.find(s => s.id === skillId);
    if (skill) {
      name = skill.name;
      break;
    }
  }

  document.getElementById('skill-modal-title').textContent = name;
  document.getElementById('skill-modal-desc').textContent = description;
  openModal('modal-skill');
}

// ==================================================
// MODAL: REGLA DE ARMA
// ==================================================
function openWeaponRuleModal(ruleId, ruleNameFallback) {
  let rule = ruleId ? getWeaponRuleById(ruleId) : null;

  if (!rule) {
    rule = {
      name: ruleNameFallback || 'Regla',
      description: ''
    };
  }

  document.getElementById('weapon-rule-modal-title').textContent = rule.name;

  const descEl = document.getElementById('weapon-rule-modal-desc');
  if (rule.description && rule.description.trim() !== '') {
    descEl.textContent = rule.description;
    descEl.style.fontStyle = 'normal';
    descEl.style.color = 'var(--text-primary)';
  } else {
    descEl.textContent = 'Descripción próximamente.';
    descEl.style.fontStyle = 'italic';
    descEl.style.color = 'var(--text-dim)';
  }

  openModal('modal-weapon-rule');
}

// ==================================================
// MODAL: REGLAS DE LA CASA
// ==================================================
function openHouseRulesModal() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const houseData = getHouseData(gang.houseId);
  if (!houseData || !houseData.specialRules || houseData.specialRules.length === 0) {
    alert('Esta casa no tiene reglas especiales.');
    return;
  }

  document.getElementById('house-rules-title').textContent =
    'Reglas: ' + (houseData.name || gang.houseName);

  const body = document.getElementById('house-rules-body');
  let html = '';

  houseData.specialRules.forEach(rule => {
    html += `
      <div class="house-rule-block">
        <div class="house-rule-name">${escapeHTML(rule.name)}</div>
        <p class="house-rule-desc">${escapeHTML(rule.desc).replace(/\n/g, '<br>')}</p>
      </div>
    `;
  });

  body.innerHTML = html;
  openModal('modal-house-rules');
}