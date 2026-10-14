/* ==================================================
   MERCADO RARO (dentro del Trading Post)
   ================================================== */

// ---------- ESTADO ----------
let rareMarketGangers = 0;
let rareMarketGangerIds = [];
let rareMarketOffers = [];

// ---------- CAMBIAR A LA PESTAÑA RAROS ----------
function openRareMarketTab() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const currentRound = gang.currentRound || 1;
  if (currentRound < 2) {
    alert('El Mercado Raro solo está disponible a partir de la Ronda 2.');
    return;
  }

  // Ocultar vistas de básicos
  document.getElementById('market-categories-view').style.display = 'none';
  document.getElementById('market-weapons-view').style.display = 'none';
  // Mostrar vista de raros
  document.getElementById('market-rares-view').style.display = 'block';

  // Actualizar pestañas
  document.querySelectorAll('.market-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-rares').classList.add('active');

  // Actualizar créditos
  updateMarketCredits();

  // Cargar ofertas guardadas de la ronda o resetear
  const saved = gang.rareMarketOffers;
      if (saved && saved.round === currentRound && saved.offers) {
    rareMarketOffers = saved.offers || [];
    rareMarketGangers = saved.gangers || 0;
    rareMarketGangerIds = saved.gangerIds || [];

    document.getElementById('rare-market-intro').style.display = 'none';
    document.getElementById('rare-market-result').style.display = 'block';

    document.getElementById('rare-market-d3').textContent = saved.d3Result || '—';
    document.getElementById('rare-market-gangers-result').textContent = rareMarketGangers;
    document.getElementById('rare-market-offers-count').textContent = rareMarketOffers.length;

    renderRareMarketOffers();
    } else {
    rareMarketGangers = 0;
    rareMarketGangerIds = [];
    rareMarketOffers = [];

    document.getElementById('rare-market-intro').style.display = 'block';
    document.getElementById('rare-market-result').style.display = 'none';
    document.getElementById('rare-market-gangers-count').textContent = 0;
    updateRareMarketTotal();
  }
}

// ---------- VOLVER A BÁSICOS ----------
function openBasicsTab() {
  document.getElementById('market-categories-view').style.display = 'block';
  document.getElementById('market-weapons-view').style.display = 'none';
  document.getElementById('market-rares-view').style.display = 'none';

  document.querySelectorAll('.market-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-basics').classList.add('active');

  updateMarketCredits();
}

// ---------- ACTUALIZAR TOTAL ----------
function updateRareMarketTotal() {
  document.getElementById('rare-market-total').textContent = `(1D3 + ${rareMarketGangers} pandillero(s))`;
}

// ---------- AUMENTAR/REDUCIR PANDILLEROS ----------
function setRareMarketGangers(delta) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  // Excluir gangers que están trabajando territorios
  const busyInTerritories = new Set(
    (gang.territories || [])
      .filter(t => t.workedBy)
      .map(t => t.workedBy)
  );

    const availableGangers = getGangersInGang(gang).filter(f => 
    !busyInTerritories.has(f.id) && !f.workedThisRound
  );
  const max = availableGangers.length;

  rareMarketGangers = Math.max(0, Math.min(max, rareMarketGangers + delta));
  document.getElementById('rare-market-gangers-count').textContent = rareMarketGangers;
  updateRareMarketTotal();
}

// ---------- TIRAR D3 + GENERAR OFERTAS ----------
function rollRareMarket() {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

    const isOutlaw = isGangOutlander(gang);
  const d3 = rollD3();
  const totalOffers = d3 + rareMarketGangers;

  // Guardar IDs de gangers que van a buscar (excluyendo los que trabajan territorio)
  const busyInTerritories = new Set(
    (gang.territories || [])
      .filter(t => t.workedBy)
      .map(t => t.workedBy)
  );
    const availableGangers = getGangersInGang(gang).filter(f => 
    !busyInTerritories.has(f.id) && !f.workedThisRound
  );
  rareMarketGangerIds = availableGangers.slice(0, rareMarketGangers).map(f => f.id);

  rareMarketOffers = [];
  const usedIds = new Set();

  for (let i = 0; i < totalOffers; i++) {
    let offer = null;

    if (isOutlaw) {
      // ===== BANDA PROSCRITA: tiramos en la tabla D66 Outlaw =====
      let attempts = 0;
      while (attempts < 10) {
        const roll = rollOutlawRareTrade();
        if (!roll) { attempts++; continue; }

        // Si es "item" o "special-choice", tenemos un weaponId
        if (roll.entry && roll.entry.weaponId && !usedIds.has(roll.entry.weaponId)) {
          offer = {
            id: 'offer_' + Date.now() + '_' + i,
            weaponId: roll.entry.weaponId,
            d66: roll.d66,
            d6: roll.d6 || null,
            category: roll.category,
            type: roll.type
          };
          break;
        }

        // Si es "special" (Gamble/Rumour/Healer), lo guardamos como especial
        if (roll.type === 'special' && !usedIds.has(roll.entry.special)) {
          offer = {
            id: 'offer_' + Date.now() + '_' + i,
            special: roll.entry.special,
            label: roll.entry.label,
            d66: roll.d66,
            type: 'special'
          };
          usedIds.add(roll.entry.special);
          break;
        }

        attempts++;
      }
    } else {
      // ===== BANDA NORMAL: usamos el sistema antiguo =====
      let weapon = null;
      let attempts = 0;
      while (attempts < 10) {
        const candidate = getRandomRareWeapon(gang.houseId);
        if (candidate && !usedIds.has(candidate.id)) {
          weapon = candidate;
          break;
        }
        attempts++;
      }
      if (!weapon) weapon = getRandomRareWeapon(gang.houseId);
      if (!weapon) continue;

      usedIds.add(weapon.id);
      offer = {
        id: 'offer_' + Date.now() + '_' + i,
        weaponId: weapon.id
      };
    }

    if (offer) {
      if (offer.weaponId) usedIds.add(offer.weaponId);
      rareMarketOffers.push(offer);
    }
  }

    gang.rareMarketOffers = {
    round: gang.currentRound || 1,
    d3Result: d3,
    gangers: rareMarketGangers,
    gangerIds: rareMarketGangerIds,
    offers: rareMarketOffers,
    isOutlaw: isOutlaw
  };
  saveGangs(gangs);

  document.getElementById('rare-market-intro').style.display = 'none';
  document.getElementById('rare-market-result').style.display = 'block';

  document.getElementById('rare-market-d3').textContent = d3;
  document.getElementById('rare-market-gangers-result').textContent = rareMarketGangers;
  document.getElementById('rare-market-offers-count').textContent = rareMarketOffers.length;

  renderRareMarketOffers();
}

// ---------- RENDERIZAR OFERTAS ----------
function renderRareMarketOffers() {
  const container = document.getElementById('rare-market-offers-list');
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  container.innerHTML = '';

  if (rareMarketOffers.length === 0) {
    container.innerHTML = `<div class="rare-market-empty">No hay objetos disponibles esta ronda.</div>`;
    return;
  }

  rareMarketOffers.forEach(offer => {
    const card = document.createElement('button');
    card.className = 'market-weapon-card';

    // ===== RESULTADO ESPECIAL (Gamble / Rumour / Healer) =====
    if (offer.type === 'special') {
      const specialLabels = {
        'gamble': '🎲 Special: Gamble',
        'rumour': '📢 Special: Rumour',
        'healer': '💊 Special: Healer'
      };
      card.innerHTML = `
        <div class="market-weapon-thumb">🎁</div>
        <div class="market-weapon-info">
          <div class="market-weapon-name">${escapeHTML(specialLabels[offer.special] || offer.label || 'Especial')}</div>
          <div class="market-weapon-meta">
            <span class="market-weapon-rarity">RESULTADO D66: ${escapeHTML(offer.d66 || '—')}</span>
          </div>
        </div>
        <div class="market-weapon-cost">Próximamente</div>
      `;
      card.disabled = true;
      card.classList.add('market-weapon-card--missing');
      container.appendChild(card);
      return;
    }

    // ===== RESULTADO ITEM =====
    const weapon = getWeaponById(offer.weaponId);

    if (!weapon) {
      card.classList.add('market-weapon-card--missing');
      card.innerHTML = `
        <div class="market-weapon-thumb">❓</div>
        <div class="market-weapon-info">
          <div class="market-weapon-name">Objeto desconocido</div>
        </div>
        <div class="market-weapon-cost">Próximamente</div>
      `;
      card.disabled = true;
      container.appendChild(card);
      return;
    }

    const imgHTML = weapon.image
      ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="market-weapon-img">`
      : `<span class="market-weapon-icon">${getWeaponCategoryIcon(weapon.category)}</span>`;

    const costText = weapon.costVariable
      ? `${weapon.cost} + ${weapon.costVariable}`
      : `${weapon.cost}c`;

    card.innerHTML = `
      <div class="market-weapon-thumb">${imgHTML}</div>
      <div class="market-weapon-info">
        <div class="market-weapon-name">${escapeHTML(weapon.name)}</div>
        <div class="market-weapon-meta">
          <span class="market-weapon-rarity">${formatWeaponRarity(weapon)}</span>
        </div>
      </div>
      <div class="market-weapon-cost">${costText}</div>
    `;

    card.addEventListener('click', () => openWeaponDetailInRareMarket(offer.weaponId));
    container.appendChild(card);
  });
}

// ---------- COMPRAR DESDE MERCADO RARO ----------
function openWeaponDetailInRareMarket(weaponId) {
  const weapon = getWeaponById(weaponId);
  if (!weapon) return;

  openWeaponDetailInMarket(weaponId);

  const btn = document.getElementById('btn-weapon-action');
  const costText = weapon.costVariable
    ? `${weapon.cost} + ${weapon.costVariable}`
    : `${weapon.cost}c`;
  btn.textContent = `💎 Comprar raro (${costText})`;
  btn.dataset.action = 'buy-rare-weapon';
  btn.dataset.weaponId = weapon.id;
}

// ---------- COMPRAR ARMA RARA ----------
function buyRareWeapon(weaponId) {
  const gang = gangs.find(g => g.id === currentGangId);
  if (!gang) return;

  const weapon = getWeaponById(weaponId);
  if (!weapon) return;

  const offer = rareMarketOffers.find(o => o.weaponId === weaponId);
  if (!offer) {
    alert('Este objeto no está entre las ofertas de esta ronda.');
    return;
  }

  let totalCost = weapon.cost || 0;
  let variableRoll = 0;

  if (weapon.costVariable) {
    variableRoll = rollCostVariable(weapon.costVariable);
    totalCost += variableRoll;
  }

  const available = getGangAvailable(gang);
  if (available < totalCost) {
    alert(`No tienes suficientes créditos. Coste total: ${totalCost}c (base ${weapon.cost}c + variable ${variableRoll}).`);
    return;
  }

  spendCredits(gang, totalCost);

  if (!gang.stash) gang.stash = [];
  gang.stash.push({
    id: 'stash_' + Date.now() + '_' + Math.random().toString(36).substr(2, 6),
    weaponId: weapon.id,
    addedAt: Date.now(),
    paidCost: totalCost
  });

  rareMarketOffers = rareMarketOffers.filter(o => o.weaponId !== weaponId);
  if (gang.rareMarketOffers) {
    gang.rareMarketOffers.offers = rareMarketOffers;
  }

  saveGangs(gangs);

  closeModal('modal-weapon');

  document.getElementById('market-credits').textContent = getGangAvailable(gang);
  document.getElementById('rare-market-offers-count').textContent = rareMarketOffers.length;
  renderRareMarketOffers();

  const costMsg = variableRoll > 0
    ? `¡${weapon.name} comprado por ${totalCost}c (base ${weapon.cost}c + ${variableRoll} de tirada)!`
    : `¡${weapon.name} comprado por ${totalCost}c!`;
  setTimeout(() => alert(costMsg), 50);

  renderGangDetail(gang);
}