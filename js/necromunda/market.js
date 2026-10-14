/* ==================================================
   TRADING POST — MERCADO
   ================================================== */

// ---------- ESTADO ----------
let currentMarketCategory = null;
let marketTargetFighterId = null;
let weaponActionContext = null;

// ==================================================
// HELPER: Obtener arma del catálogo correcto
// ==================================================
function getWeaponForGangContext(gang, weaponId) {
  if (!gang) return getWeaponById(weaponId);

  // 1) Buscar en el catálogo común
  const commonWeapon = getWeaponById(weaponId);
  if (commonWeapon) {
    // Si es exclusiva de OTRA casa, no la devolvemos
    if (commonWeapon.exclusiveTo && commonWeapon.exclusiveTo !== gang.houseId) {
      return null;
    }
    // Si es exclusiva de esta casa (aunque sea proscrita), la devolvemos
    if (commonWeapon.exclusiveTo === gang.houseId) {
      return commonWeapon;
    }
  }

  // 2) Si es banda proscrita, buscar en el catálogo Outlaw
  if (isGangOutlander(gang)) {
    const outlawWeapon = getOutlawWeaponById(weaponId);
    if (outlawWeapon) return outlawWeapon;
  }

  // 3) Fallback: devolver el común (sin filtro de exclusividad)
  return commonWeapon;
}

// ==================================================
// TRADING POST
// ==================================================

function openTradingPost(targetFighterId) {
  if (!currentGangId) {
    alert('Primero abre una banda desde Pandillas.');
    return;
  }

  marketTargetFighterId = targetFighterId || null;
  currentMarketCategory = null;

  // Resetear a Básicos
  document.getElementById('market-categories-view').style.display = 'block';
  document.getElementById('market-weapons-view').style.display = 'none';
  document.getElementById('market-rares-view').style.display = 'none';

  // Pestañas
  document.querySelectorAll('.market-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-basics').classList.add('active');

  const titleEl = document.querySelector('#modal-market .modal-header h2');
  if (titleEl) {
    if (marketTargetFighterId) {
      const gang = gangs.find(g => g.id === currentGangId);
      const fighter = (gang.fighters || []).find(f => f.id === marketTargetFighterId);
      titleEl.textContent = `🏪 Comprar para ${fighter?.name || fighter?.typeName || 'luchador'}`;
    } else {
      const gang = gangs.find(g => g.id === currentGangId);
      if (isGangOutlander(gang)) {
        if (isInCreationPhase(gang)) {
          titleEl.textContent = '⚙️ Lista de facción (Ronda 1)';
        } else {
          titleEl.textContent = '🏴 Puesto Proscrito';
        }
      } else {
        titleEl.textContent = '🏪 Puesto de Comercio';
      }
    }
  }

  updateMarketCredits();
  renderMarketCategories();
  openModal('modal-market');
}

function updateMarketCredits() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;
  const available = getGangAvailable(gang);
  document.getElementById('market-credits').textContent = available;
}

function renderMarketCategories() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const container = document.getElementById('market-categories-grid');
  container.innerHTML = '';

  const inCreation = isInCreationPhase(gang);
  const houseId = gang.houseId;           
  const isOutlaw = isGangOutlander(gang);  

   let cats = [
    'h2h', 'pistol', 'basic', 'special', 'heavy',
    'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'
  ];

  // Añadir categoría de Redención si la casa es Redencionista
  if (houseId === 'redemptionists') {
    cats = ['redemption-weapons', ...cats];
  }

  let allowedCategories = null;
  if (marketTargetFighterId) {
    const fighter = (gang.fighters || []).find(f => f.id === marketTargetFighterId);
    if (fighter) {
      allowedCategories = getAllowedCategoriesForFighter(fighter.typeId);
    }
  }

  cats.forEach(catId => {
    if (allowedCategories && !allowedCategories.includes(catId)) return;

    let weapons;

        if (isOutlaw && inCreation) {
      weapons = getStartingWeaponsForHouseNew(houseId)
        .filter(w => w.category === catId);
    } else if (isOutlaw) {
      weapons = getOutlawWeaponsByCategory(catId, true, houseId);

      // Caso especial: armas de casa proscrita que NO están en el Outlaw TP
      // (Redencionistas usan el TP normal pero son proscritos)
      if (weapons.length === 0) {
        // Buscar en el catálogo común las armas exclusivas de esta casa
        weapons = WEAPONS
          .filter(w => w.category === catId)
          .filter(w => w.exclusiveTo === houseId)
          .filter(w => w.purchasable !== false)
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
    } else if (inCreation) {
      const houseWeapons = getStartingWeaponsForHouseNew(houseId)
        .filter(w => w.category === catId);

      const basicEquip = WEAPONS
        .filter(w => BASIC_EQUIPMENT_IDS.includes(w.id))
        .map(w => getWeaponForHouseNew(houseId, w.id))
        .filter(w => w && w.category === catId);

      const seen = new Set();
      weapons = [...houseWeapons, ...basicEquip].filter(w => {
        if (seen.has(w.id)) return false;
        seen.add(w.id);
        return isWeaponAvailableForHouse(w, houseId);
      });
    } else {
      weapons = WEAPONS
        .filter(w => w.category === catId && w.purchasable)
        .filter(w => isWeaponAvailableForHouse(w, houseId))
        .map(w => getWeaponForHouseNew(houseId, w.id))
        .filter(w => w && w.effectiveAvailability === 'common');
    }

    const count = weapons.length;
    if (count === 0) return;

       const catInfo = WEAPON_CATEGORIES[catId] || (typeof OUTLAW_WEAPON_CATEGORIES !== 'undefined' ? OUTLAW_WEAPON_CATEGORIES[catId] : null);
if (!catInfo) return;

    const card = document.createElement('button');
    card.className = 'market-category-card';
    card.dataset.cat = catId;
    card.innerHTML = `
      <div class="market-category-name">${catInfo.label}</div>
      <div class="market-category-count">${count} objeto(s)</div>
    `;
    card.addEventListener('click', () => openMarketCategory(catId));
    container.appendChild(card);
  });
}

function getAllowedCategoriesForFighter(typeId) {
  switch (typeId) {
    // ---- Casas grandes ----
    case 'juve':
      return ['h2h', 'pistol', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'ganger':
      return ['h2h', 'pistol', 'basic', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'heavy':
    case 'leader':
      return ['h2h', 'pistol', 'basic', 'special', 'heavy', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];

    // ---- Redencionistas ----
    case 'redemptor-priest':
      return ['redemption-weapons', 'h2h', 'pistol', 'basic', 'special', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'deacon':
      return ['redemption-weapons', 'h2h', 'pistol', 'basic', 'special', 'heavy', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'brother':
      return ['redemption-weapons', 'h2h', 'pistol', 'basic', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'novice':
    case 'zealot':
      return ['redemption-weapons', 'h2h', 'pistol', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];

    // ---- Pit Slaves ----
    case 'pit-slave':
    case 'pit-fighter':
      return ['pit-slave', 'h2h', 'pistol', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'techno':
      return ['pit-slave', 'h2h', 'pistol', 'basic', 'special', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
    case 'chief':
      return ['pit-slave', 'h2h', 'pistol', 'basic', 'special', 'heavy', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];

    // ---- Fallback ----
    default:
      return ['h2h', 'pistol', 'basic', 'special', 'heavy', 'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'];
  }
}

function openMarketCategory(catId) {
  currentMarketCategory = catId;

  document.getElementById('market-categories-view').style.display = 'none';
  document.getElementById('market-weapons-view').style.display = 'block';

   const gang = gangs.find(g => g.id === currentGangId);
  const isOutlaw = gang ? isGangOutlander(gang) : false;
  const catSource = (isOutlaw && typeof OUTLAW_WEAPON_CATEGORIES !== 'undefined')
    ? OUTLAW_WEAPON_CATEGORIES
    : WEAPON_CATEGORIES;
  document.getElementById('market-weapons-title').textContent =
    catSource[catId]?.label || catId;

  renderMarketWeapons(catId);
}

function backToMarketCategories() {
  currentMarketCategory = null;
  document.getElementById('market-categories-view').style.display = 'block';
  document.getElementById('market-weapons-view').style.display = 'none';
  updateMarketCredits();
}

function renderMarketWeapons(catId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const container = document.getElementById('market-weapons-list');
  container.innerHTML = '';

  const inCreation = isInCreationPhase(gang);
  const houseId = gang.houseId;
  const isOutlaw = isGangOutlander(gang);

  let weapons;

      if (isOutlaw && inCreation) {
      weapons = getStartingWeaponsForHouseNew(houseId)
        .filter(w => w.category === catId);
    } else if (isOutlaw) {
      weapons = getOutlawWeaponsByCategory(catId, true, houseId);

      // Caso especial: armas de casa proscrita que NO están en el Outlaw TP
      // (Redencionistas usan el TP normal pero son proscritos)
      if (weapons.length === 0) {
        // Buscar en el catálogo común las armas exclusivas de esta casa
        weapons = WEAPONS
          .filter(w => w.category === catId)
          .filter(w => w.exclusiveTo === houseId)
          .filter(w => w.purchasable !== false)
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
    } else if (inCreation) {
    const houseWeapons = getStartingWeaponsForHouseNew(houseId)
      .filter(w => w.category === catId);

    const basicEquip = WEAPONS
      .filter(w => BASIC_EQUIPMENT_IDS.includes(w.id))
      .map(w => getWeaponForHouseNew(houseId, w.id))
      .filter(w => w && w.category === catId);

    const seen = new Set();
    weapons = [...houseWeapons, ...basicEquip].filter(w => {
      if (seen.has(w.id)) return false;
      seen.add(w.id);
      return isWeaponAvailableForHouse(w, houseId);
    });
  } else {
    weapons = WEAPONS
      .filter(w => w.category === catId && w.purchasable)
      .filter(w => isWeaponAvailableForHouse(w, houseId))
      .map(w => getWeaponForHouseNew(houseId, w.id))
      .filter(w => w && w.effectiveAvailability === 'common');
  }

  if (weapons.length === 0) {
    container.innerHTML = `
      <div class="market-empty">
        <p>No hay armas disponibles en esta categoría.</p>
      </div>
    `;
    return;
  }

  weapons.sort((a, b) => (a.effectiveCost || 0) - (b.effectiveCost || 0));

  weapons.forEach(weapon => {
    const card = document.createElement('button');
    card.className = 'market-weapon-card';

       const catIconFn = (isOutlaw && typeof getOutlawWeaponCategoryIcon === 'function')
      ? getOutlawWeaponCategoryIcon
      : getWeaponCategoryIcon;
    const imgHTML = weapon.image
      ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="market-weapon-img">`
      : `<span class="market-weapon-icon">${catIconFn(weapon.category)}</span>`;

    const costVar = weapon.effectiveCostVariable || weapon.costVariable;
    const costLabel = costVar
      ? `${weapon.effectiveCost} + ${costVar}`
      : `${weapon.effectiveCost}c`;

    card.innerHTML = `
      <div class="market-weapon-thumb">${imgHTML}</div>
      <div class="market-weapon-info">
        <div class="market-weapon-name">${escapeHTML(weapon.name)}</div>
        <div class="market-weapon-meta">
          <span class="market-weapon-rarity">${RARITIES[weapon.effectiveAvailability] || weapon.effectiveAvailability || '—'}</span>
        </div>
      </div>
      <div class="market-weapon-cost">${costLabel}</div>
    `;

    card.addEventListener('click', () => openWeaponDetailInMarket(weapon.id));
    container.appendChild(card);
  });
}

function openWeaponDetailInMarket(weaponId) {
  const gang = gangs.find(g => g.id === currentGangId);
  const isOutlaw = gang ? isGangOutlander(gang) : false;
  const inCreation = gang ? isInCreationPhase(gang) : false;

  // Obtener el arma del catálogo correcto (Necro o Outlaw)
  const weapon = getWeaponForGangContext(gang, weaponId);
  if (!weapon) return;

  document.getElementById('weapon-modal-title').textContent = weapon.name;

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

  // Calcular coste efectivo según contexto
  let effectiveWeapon;
  if (isOutlaw && inCreation) {
    effectiveWeapon = gang ? getWeaponForHouseNew(gang.houseId, weaponId) : weapon;
  } else if (isOutlaw) {
    effectiveWeapon = getOutlawWeapon(weaponId, gang.houseId) || weapon;
  } else {
    effectiveWeapon = gang ? getWeaponForHouseNew(gang.houseId, weaponId) : weapon;
  }

  const effectiveCost = effectiveWeapon ? effectiveWeapon.effectiveCost : weapon.cost;
  const effectiveCostVar = effectiveWeapon?.effectiveCostVariable || weapon.costVariable;

  const costText = effectiveCostVar
    ? `${effectiveCost} + ${effectiveCostVar}`
    : `${effectiveCost} créditos`;
  document.getElementById('weapon-modal-cost').textContent = costText;
  document.getElementById('weapon-modal-rarity').textContent = formatWeaponRarity(weapon);

  // Perfiles / propiedades / descripción
  const hasProfiles = weapon.profiles && weapon.profiles.length > 0;
  const hasDescription = !!weapon.descripcion;
  const hasProperties = weapon.propiedades && weapon.propiedades.length > 0;

    const profileDiv = document.querySelector('#modal-weapon .weapon-modal-profile');

  if (hasProfiles) {
    profileDiv.style.display = 'block';
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
  if (hasProperties) {
    extraHTML += `<div class="weapon-properties">`;
    weapon.propiedades.forEach(prop => {
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

  // Botón de acción contextual
  const btn = document.getElementById('btn-weapon-action');
  const available = gang ? getGangAvailable(gang) : 0;
  const totalCost = effectiveCost;

  let btnText = `Comprar (${effectiveCost}c${effectiveCostVar ? ' + ' + effectiveCostVar : ''})`;
  if (marketTargetFighterId && gang) {
    const fighter = (gang.fighters || []).find(f => f.id === marketTargetFighterId);
    if (fighter) {
      btnText = `Comprar y equipar a ${fighter.name || fighter.typeName}`;
    }
  }

  btn.textContent = btnText;
  btn.className = 'btn btn-primary';
  btn.dataset.action = 'buy-weapon';
  btn.dataset.weaponId = weapon.id;
  btn.disabled = false;
  btn.classList.remove('disabled');

  if (available < totalCost) {
    btn.disabled = true;
    btn.textContent = `Sin créditos (${totalCost}c)`;
    btn.classList.add('disabled');
  }

  document.getElementById('weapon-modal-action').style.display = 'block';
  openModal('modal-weapon');
}

// ---------- COMPRAR ARMA ----------
function buyWeapon(weaponId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

   // ===== CASO ESPECIAL: ÚNICA EN UN MILLÓN =====
  if (weaponId === 'one-in-a-million') {
    // Verificar créditos mínimos (coste base 0, pero hay que poder pagar lo que salga)
    openOneInAMillionModal();
    return;
  }
  // ==============================================

  const isOutlaw = isGangOutlander(gang);
  const inCreation = isInCreationPhase(gang);

  let weapon;

  if (isOutlaw && inCreation) {
    const inStarting = getStartingWeaponsForHouseNew(gang.houseId)
      .some(w => w.id === weaponId);
    if (!inStarting) {
      alert('Durante la creación solo puedes comprar armas de tu lista de facción.');
      return;
    }
    weapon = getWeaponForHouseNew(gang.houseId, weaponId);
    if (!weapon) return;
  } else if (isOutlaw) {
    weapon = getOutlawWeapon(weaponId, gang.houseId);
    if (!weapon) {
      alert('Esta arma no está disponible en el Puesto Proscrito.');
      return;
    }
  } else {
    weapon = getWeaponForHouseNew(gang.houseId, weaponId);
    if (!weapon) return;
  }

  const available = getGangAvailable(gang);
  const effectiveCost = weapon.effectiveCost;

  if (available < effectiveCost) {
    alert('No tienes suficientes créditos.');
    return;
  }

  if (!isOutlaw && inCreation) {
    const isBasic = BASIC_EQUIPMENT_IDS.includes(weaponId);
    const override = getHouseOverrideNew(gang.houseId, weaponId);

    if (!override && !isBasic) {
      alert('Esta arma no está disponible en la fase de creación de tu casa.');
      return;
    }

    if (override && override.leaderOnly) {
      if (!marketTargetFighterId) {
        alert('Esta arma solo la puede llevar el Líder. Ábrela desde el botón "🛒 Equipar" del Líder.');
        return;
      }
      const target = (gang.fighters || []).find(f => f.id === marketTargetFighterId);
      if (!target || target.typeId !== 'leader') {
        alert('Esta arma solo la puede llevar el Líder.');
        return;
      }
    }
  }

  if (!inCreation && weapon.effectiveAvailability && weapon.effectiveAvailability !== 'common') {
    alert('Esta arma es rara. Búscala en el Mercado Raro.');
    return;
  }

  if (marketTargetFighterId) {
    const fighter = (gang.fighters || []).find(f => f.id === marketTargetFighterId);
    if (!fighter) {
      alert('El luchador no existe.');
      return;
    }

    const allowedCats = getAllowedCategoriesForFighter(fighter.typeId);
    if (!allowedCats.includes(weapon.category)) {
      alert(`El ${fighter.typeName} no puede llevar esta arma.`);
      return;
    }

    const equipped = equipWeapon(fighter, weapon.id);
    if (!equipped) {
      alert(`${fighter.name || fighter.typeName} ya lleva una armadura puesta.`);
      return;
    }

    spendCredits(gang, effectiveCost);

    const healed = tryHealWithBionic(fighter, weapon.id);
    if (healed) {
      setTimeout(() => alert(`¡El biónico ha curado la herida: ${healed}!`), 600);
    }

    saveGangs(gangs);

    closeModal('modal-weapon');
    closeModal('modal-market');
    renderGangDetail(gang);

    setTimeout(() => {
      alert(`¡${weapon.name} equipado a ${fighter.name || fighter.typeName}!`);
    }, 50);
    return;
  }

  if (!gang.stash) gang.stash = [];
gang.stash.push({
  id: 'stash_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
  weaponId: weapon.id,
  addedAt: Date.now()
});

spendCredits(gang, effectiveCost);
saveGangs(gangs);

closeModal('modal-weapon');
updateMarketCredits();
renderMarketWeapons(currentMarketCategory);

// ← AÑADIR: refrescar la ficha para que se vea el stash actualizado
renderGangDetail(gang);

setTimeout(() => {
  alert(`¡${weapon.name} comprado! Añadido al almacén.`);
}, 50);
}

// ==================================================
// ACCIONES DE ARMA
// ==================================================

function openWeaponActionsModal(source, itemId, weaponId, fighterId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const weapon = getWeaponForGangContext(gang, weaponId);
  if (!weapon) return;

  if (!weapon.removable) {
    openWeaponModal(weaponId);
    return;
  }

  weaponActionContext = { source, itemId, weaponId, fighterId };

  document.getElementById('weapon-actions-title').textContent = weapon.name;

  const btnTransfer = document.getElementById('btn-action-transfer');
  const btnTransferFighter = document.getElementById('btn-action-transfer-fighter');
  const btnToStash = document.getElementById('btn-action-to-stash');

  if (source === 'stash') {
    btnTransfer.style.display = 'block';
    btnTransferFighter.style.display = 'none';
    btnToStash.style.display = 'none';
  } else if (source === 'fighter') {
    btnTransfer.style.display = 'none';
    btnTransferFighter.style.display = 'block';
    btnToStash.style.display = 'block';
  }

  const sellPrice = Math.floor(weapon.cost * 0.5);
  document.getElementById('weapon-action-sell-price').textContent = `${sellPrice}c`;

  openModal('modal-weapon-actions');
}

function openTransferModal() {
  if (!weaponActionContext) return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const container = document.getElementById('transfer-body');
  container.innerHTML = '';

  let fighters = gang.fighters || [];
  if (weaponActionContext.source === 'fighter' && weaponActionContext.fighterId) {
    fighters = fighters.filter(f => f.id !== weaponActionContext.fighterId);
  }

  if (fighters.length === 0) {
    container.innerHTML = `
      <div class="transfer-empty">
        No hay otros combatientes en esta banda.
      </div>
    `;
    openModal('modal-transfer');
    return;
  }

  fighters.forEach(fighter => {
    const btn = document.createElement('button');
    btn.className = 'transfer-fighter-btn';
    btn.style.setProperty('--house-color', gang.houseColor);

    const displayName = fighter.name || `(${fighter.typeName} sin nombre)`;

    btn.innerHTML = `
      <span class="transfer-fighter-name">${escapeHTML(displayName)}</span>
      <span class="transfer-fighter-type">${escapeHTML(fighter.typeName)}</span>
    `;
    btn.addEventListener('click', () => transferWeaponToFighter(fighter.id));
    container.appendChild(btn);
  });

  openModal('modal-transfer');
}

function transferWeaponToFighter(fighterId) {
  if (!weaponActionContext) return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const targetFighter = (gang.fighters || []).find(f => f.id === fighterId);
  if (!targetFighter) return;

  let weaponId, fromStash = false;

  if (weaponActionContext.source === 'stash') {
    const stash = gang.stash || [];
    const idx = stash.findIndex(s => s.id === weaponActionContext.itemId);
    if (idx === -1) return;
    weaponId = stash[idx].weaponId;
    fromStash = true;
  } else if (weaponActionContext.source === 'fighter') {
    const fromFighter = (gang.fighters || []).find(f => f.id === weaponActionContext.fighterId);
    if (!fromFighter) return;
    const equipment = fromFighter.equipment || [];
    const eq = equipment.find(e => e.id === weaponActionContext.itemId);
    if (!eq) return;
    weaponId = eq.weaponId;
  } else {
    return;
  }

    const weapon = getWeaponForGangContext(gang, weaponId);
  if (!weapon) return;

  // 1) Validar categoría permitida
  const allowedCats = getAllowedCategoriesForFighter(targetFighter.typeId);
  if (!allowedCats.includes(weapon.category)) {
    alert(`El ${targetFighter.typeName} no puede llevar este objeto.`);
    return;
  }

  // 2) Intentar equipar ANTES de quitar del origen
  const equipped = equipWeapon(targetFighter, weaponId);
  if (!equipped) {
    // Mensaje específico según el caso
    if (weapon.armourPlates) {
      alert('No se pueden llevar más de 3 placas de armadura, o ya llevas armadura física.');
    } else if (weapon.category === 'armor' && weapon.armourSave) {
      alert(`${targetFighter.name || targetFighter.typeName} ya lleva una armadura física puesta.`);
    } else {
      alert(`No se puede equipar ${weapon.name} a ${targetFighter.name || targetFighter.typeName}.`);
    }
    return;
  }

    // 3) Recuperar la entrada original para copiar flags (paidCost, oneInAMillion, etc.)
  let originalEntry = null;
  if (fromStash) {
    const stash = gang.stash || [];
    const idx = stash.findIndex(s => s.id === weaponActionContext.itemId);
    if (idx !== -1) {
      originalEntry = stash[idx];
      stash.splice(idx, 1);
    }
  } else {
    const fromFighter = (gang.fighters || []).find(f => f.id === weaponActionContext.fighterId);
    if (fromFighter) {
      const equipment = fromFighter.equipment || [];
      const eqIdx = equipment.findIndex(e => e.id === weaponActionContext.itemId);
      if (eqIdx !== -1) {
        originalEntry = equipment[eqIdx];
        equipment.splice(eqIdx, 1);
      }
    }
  }

  // 4) Copiar flags a la nueva entrada del equipo
  if (originalEntry) {
    const newEq = targetFighter.equipment[targetFighter.equipment.length - 1];
    if (newEq) {
      if (originalEntry.paidCost !== undefined) newEq.paidCost = originalEntry.paidCost;
      if (originalEntry.oneInAMillion) newEq.oneInAMillion = true;
      if (originalEntry.oiamD6) newEq.oiamD6 = originalEntry.oiamD6;
      if (originalEntry.oiamCategory) newEq.oiamCategory = originalEntry.oiamCategory;
    }
  }

  // Intentar curar herida con biónico
  const healed = tryHealWithBionic(targetFighter, weaponId);
  if (healed) {
    setTimeout(() => {
      alert(`El biónico ha curado la herida: ${healed}.`);
    }, 600);
  }

  saveGangs(gangs);

  closeModal('modal-transfer');
  closeModal('modal-weapon-actions');
  renderGangDetail(gang);

  weaponActionContext = null;
}

function moveWeaponToStash() {
  if (!weaponActionContext || weaponActionContext.source !== 'fighter') return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const fighter = (gang.fighters || []).find(f => f.id === weaponActionContext.fighterId);
  if (!fighter) return;

  const equipment = fighter.equipment || [];
  const idx = equipment.findIndex(e => e.id === weaponActionContext.itemId);
  if (idx === -1) return;

   const eq = equipment[idx];
  const weapon = getWeaponForGangContext(gang, eq.weaponId);

  if (!weapon || !weapon.removable) {
    alert('Este objeto no se puede quitar.');
    return;
  }

    equipment.splice(idx, 1);

  if (!gang.stash) gang.stash = [];
  const newStashEntry = {
    id: 'stash_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    weaponId: eq.weaponId,
    addedAt: Date.now()
  };

  // Copiar flags
  if (eq.paidCost !== undefined) newStashEntry.paidCost = eq.paidCost;
  if (eq.oneInAMillion) newStashEntry.oneInAMillion = true;
  if (eq.oiamD6) newStashEntry.oiamD6 = eq.oiamD6;
  if (eq.oiamCategory) newStashEntry.oiamCategory = eq.oiamCategory;

  gang.stash.push(newStashEntry);

  saveGangs(gangs);

  closeModal('modal-weapon-actions');
  renderGangDetail(gang);

  weaponActionContext = null;
}

function sellWeaponFromContext() {
  if (!weaponActionContext) return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const weapon = getWeaponForGangContext(gang, weaponActionContext.weaponId);
  if (!weapon) return;

  const sellPrice = Math.floor(weapon.cost * 0.5);

  if (!confirm(`¿Vender "${weapon.name}" por ${sellPrice} créditos?`)) return;

  if (weaponActionContext.source === 'stash') {
    const idx = (gang.stash || []).findIndex(s => s.id === weaponActionContext.itemId);
    if (idx !== -1) gang.stash.splice(idx, 1);
  } else if (weaponActionContext.source === 'fighter') {
    const fighter = (gang.fighters || []).find(f => f.id === weaponActionContext.fighterId);
    if (fighter) {
      const equipment = fighter.equipment || [];
      const eqIdx = equipment.findIndex(e => e.id === weaponActionContext.itemId);
      if (eqIdx !== -1) equipment.splice(eqIdx, 1);
    }
  }

  addCredits(gang, sellPrice);

  saveGangs(gangs);

  closeModal('modal-weapon-actions');
  renderGangDetail(gang);

  weaponActionContext = null;
}

function removeWeaponFromContext() {
  if (!weaponActionContext) return;

  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const weapon = getWeaponForGangContext(gang, weaponActionContext.weaponId);
  if (!weapon) return;

  if (!confirm(`¿Quitar "${weapon.name}" sin recuperar créditos?`)) return;

  if (weaponActionContext.source === 'stash') {
    const idx = (gang.stash || []).findIndex(s => s.id === weaponActionContext.itemId);
    if (idx !== -1) gang.stash.splice(idx, 1);
  } else if (weaponActionContext.source === 'fighter') {
    const fighter = (gang.fighters || []).find(f => f.id === weaponActionContext.fighterId);
    if (fighter) {
      const equipment = fighter.equipment || [];
      const eqIdx = equipment.findIndex(e => e.id === weaponActionContext.itemId);
      if (eqIdx !== -1) equipment.splice(eqIdx, 1);
    }
  }

  saveGangs(gangs);

  closeModal('modal-weapon-actions');
  renderGangDetail(gang);

  weaponActionContext = null;
}
// ==================================================
// CURACIÓN POR BIONICOS
// ==================================================

/**
 * Mapa de qué biónico cura qué herida.
 */
const BIONIC_CURES = {
  'bionic-eye': 'blinded-eye',
  'bionic-arm': 'arm-wound',
  'bionic-leg': 'leg-wound',
  'bionic-chest': 'chest-wound'
};

/**
 * Si el objeto equipado es un biónico que cura una herida, la quita.
 * Devuelve el nombre de la herida curada, o null si no curó nada.
 */
function tryHealWithBionic(fighter, weaponId) {
  if (!fighter || !weaponId) return null;
  if (!fighter.injuries || fighter.injuries.length === 0) return null;

  const healTarget = BIONIC_CURES[weaponId];
  if (!healTarget) return null;

  if (!fighter.injuries.includes(healTarget)) return null;

  // Quitar la herida
  fighter.injuries = fighter.injuries.filter(i => i !== healTarget);

  const injury = getInjuryById(healTarget);
  return injury ? injury.name : null;
}
// ==================================================
// EFECTOS ESPECIALES DE HERIDAS AL AÑADIR
// ==================================================

/**
 * Aplica efectos especiales al añadir una herida.
 * Se llama desde addInjuryToFighter.
 */
function applyInjurySpecialEffects(fighter, injuryId) {
  const injury = getInjuryById(injuryId);
  if (!injury) return null;

  // Sobrevive contra todo pronóstico → +2D6 PX
  if (injury.special === 'bonus_xp') {
    const d1 = Math.floor(Math.random() * 6) + 1;
    const d2 = Math.floor(Math.random() * 6) + 1;
    const total = d1 + d2;
    fighter.xp = (fighter.xp || 0) + total;
    return `¡Sobrevive contra todo pronóstico! +${total} PX (${d1}+${d2})`;
  }

  return null;
}
/**
 * Renderiza los tags clicables de las reglas de un perfil de arma.
 */
function renderWeaponRulesTags(rulesString) {
  if (!rulesString || rulesString.trim() === '' || rulesString === '—') {
    return '—';
  }

  const rules = parseWeaponRules(rulesString);

  return rules.map(rule => {
    if (rule.id) {
      return `<span class="weapon-rule-tag" 
                    data-action="open-weapon-rule" 
                    data-rule-id="${rule.id}"
                    title="${escapeHTML(rule.name)}">${escapeHTML(rule.name)}</span>`;
    } else {
      // Regla no identificada → tag gris, pero igualmente clicable
      return `<span class="weapon-rule-tag weapon-rule-tag--unknown" 
                    data-action="open-weapon-rule" 
                    data-rule-name="${escapeHTML(rule.name)}"
                    title="${escapeHTML(rule.name)}">${escapeHTML(rule.name)}</span>`;
    }
  }).join(' ');
}
// ==================================================
// ÚNICA EN UN MILLÓN
// ==================================================

let oiamCategory = null; // categoría actual (pistol, basic, special, heavy)
let oiamD6Result = null;

/**
 * Abre el modal de "Única en un Millón".
 * Reinicia el estado y muestra el paso 1 (tirar D6).
 */
function openOneInAMillionModal() {
  oiamCategory = null;
  oiamD6Result = null;

  document.getElementById('oiam-step-roll').style.display = 'block';
  document.getElementById('oiam-step-choose').style.display = 'none';
  document.getElementById('oiam-d6-result').textContent = '—';
  document.getElementById('oiam-category-name').textContent = '—';

  openModal('modal-one-in-a-million');
}

/**
 * Tira D6 y muestra la categoría + armas disponibles.
 */
function rollOneInAMillion() {
  const d6 = Math.floor(Math.random() * 6) + 1;
  oiamD6Result = d6;

  // Determinar categoría
  let catId, catName;
  if (d6 <= 2) { catId = 'pistol'; catName = 'Pistola'; }
  else if (d6 <= 4) { catId = 'basic'; catName = 'Básica'; }
  else if (d6 === 5) { catId = 'special'; catName = 'Especial'; }
  else { catId = 'heavy'; catName = 'Pesada'; }

  oiamCategory = catId;

  document.getElementById('oiam-d6-result').textContent = d6;
  document.getElementById('oiam-category-name').textContent = catName;

  // Mostrar paso 2
  document.getElementById('oiam-step-roll').style.display = 'none';
  document.getElementById('oiam-step-choose').style.display = 'block';

  // Renderizar lista de armas de esa categoría
  renderOIAMWeapons(catId);
}

/**
 * Renderiza las armas disponibles de la categoría.
 */
function renderOIAMWeapons(catId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const list = document.getElementById('oiam-weapons-list');
  list.innerHTML = '';

  // Filtrar armas de la categoría que sean comprables
  const isOutlaw = isGangOutlander(gang);
  let weapons;

  if (isOutlaw) {
    // Bandas proscritas: usar catálogo Outlaw
    weapons = OUTLAW_WEAPONS
      .filter(w => w.category === catId && w.purchasable !== false)
      .map(w => getOutlawWeapon(w.id, gang.houseId))
      .filter(w => w);
  } else {
    // Bandas normales: usar catálogo común
    weapons = WEAPONS
      .filter(w => w.category === catId && w.purchasable)
      .filter(w => isWeaponAvailableForHouse(w, gang.houseId))
      .map(w => getWeaponForHouseNew(gang.houseId, w.id))
      .filter(w => w && w.effectiveAvailability === 'common');
  }

  if (weapons.length === 0) {
    list.innerHTML = `
      <div class="market-empty">
        <p>No hay armas disponibles en esta categoría.</p>
      </div>
    `;
    return;
  }

  weapons.sort((a, b) => (a.effectiveCost || 0) - (b.effectiveCost || 0));

  weapons.forEach(weapon => {
    const baseCost = weapon.effectiveCost || weapon.cost || 0;
    const doubledCost = baseCost * 2;

    const btn = document.createElement('button');
    btn.className = 'btn-oiam-weapon';
    btn.innerHTML = `
      <span class="oiam-weapon-name">${escapeHTML(weapon.name)}</span>
      <span class="oiam-weapon-cost">${baseCost}c → ${doubledCost}c</span>
    `;
    btn.addEventListener('click', () => confirmOneInAMillion(weapon.id, doubledCost));
    list.appendChild(btn);
  });
}

/**
 * Confirma la compra del arma elegida.
 */
function confirmOneInAMillion(baseWeaponId, totalCost) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  // Verificar créditos
  const available = getGangAvailable(gang);
  if (available < totalCost) {
    alert(`No tienes suficientes créditos. Necesitas ${totalCost}c y tienes ${available}c.`);
    return;
  }

  // Descontar créditos
  spendCredits(gang, totalCost);

  // Añadir al almacén con flags
  if (!gang.stash) gang.stash = [];
  gang.stash.push({
    id: 'stash_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    weaponId: baseWeaponId,
    addedAt: Date.now(),
    paidCost: totalCost,
    oneInAMillion: true,
    oiamD6: oiamD6Result,
    oiamCategory: oiamCategory
  });

  saveGangs(gangs);

  // Cerrar modal
  closeModal('modal-one-in-a-million');
  closeModal('modal-weapon');
  
  // Refrescar
  updateMarketCredits();
  renderMarketWeapons(currentMarketCategory);
  renderGangDetail(gang);

  setTimeout(() => {
    alert(`¡Arma única en un millón comprada por ${totalCost}c! Añadida al almacén.`);
  }, 100);
}
// ==================================================
// FUNCIÓN DE TEST TEMPORAL
// ==================================================
// Sirve para probar el flujo sin depender del mercado raro.
// BORRAR cuando ya no se necesite.
window.testOIAM = function() {
  openOneInAMillionModal();
};