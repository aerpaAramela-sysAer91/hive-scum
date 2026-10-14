/* ==================================================
   GLOSARIO DE EQUIPO (solo lectura)
   ================================================== */

// ---------- ESTADO ----------
let currentGlossaryCategory = null;
let currentGlossarySearchTerm = '';

// ==================================================
// ABRIR GLOSARIO
// ==================================================
function openGlossary() {
  // Resetear estado
  currentGlossaryCategory = null;
  currentGlossarySearchTerm = '';

  // Resetear vistas
  document.getElementById('glossary-categories-view').style.display = 'block';
  document.getElementById('glossary-items-view').style.display = 'none';
  document.getElementById('glossary-search-view').style.display = 'none';

  // Limpiar buscador
  const searchInput = document.getElementById('glossary-search');
  if (searchInput) searchInput.value = '';

  // Renderizar categorías
  renderGlossaryCategories();

  // Abrir modal
  openModal('modal-glossary');
}

// ==================================================
// RENDERIZAR CATEGORÍAS
// ==================================================
function renderGlossaryCategories() {
  const container = document.getElementById('glossary-categories-grid');
  container.innerHTML = '';

  const cats = [
  'pit-slave', 'h2h', 'pistol', 'basic', 'special', 'heavy',
  'grenade', 'ammo', 'sights', 'tools', 'bionics', 'armor', 'drugs', 'misc'
];

  cats.forEach(catId => {
    const catInfo = WEAPON_CATEGORIES[catId];
    if (!catInfo) return;

    // Contar items de esa categoría que son visibles en el catálogo
    const count = WEAPONS.filter(w => w.category === catId).length;

    // Si no hay items, no mostrar la categoría
    if (count === 0) return;

    const card = document.createElement('button');
    card.className = 'market-category-card';
    card.dataset.cat = catId;
    card.innerHTML = `
      <div class="market-category-name">${catInfo.icon} ${catInfo.label}</div>
      <div class="market-category-count">${count} objeto(s)</div>
    `;
    card.addEventListener('click', () => openGlossaryCategory(catId));
    container.appendChild(card);
  });
}

// ==================================================
// ABRIR CATEGORÍA
// ==================================================
function openGlossaryCategory(catId) {
  currentGlossaryCategory = catId;

  document.getElementById('glossary-categories-view').style.display = 'none';
  document.getElementById('glossary-search-view').style.display = 'none';
  document.getElementById('glossary-items-view').style.display = 'block';

  const catInfo = WEAPON_CATEGORIES[catId];
  document.getElementById('glossary-items-title').textContent =
    `${catInfo.icon} ${catInfo.label}`;

  renderGlossaryItems(catId);
}

// ==================================================
// VOLVER A CATEGORÍAS
// ==================================================
function backToGlossaryCategories() {
  currentGlossaryCategory = null;
  currentGlossarySearchTerm = '';

  document.getElementById('glossary-items-view').style.display = 'none';
  document.getElementById('glossary-search-view').style.display = 'none';
  document.getElementById('glossary-categories-view').style.display = 'block';

  const searchInput = document.getElementById('glossary-search');
  if (searchInput) searchInput.value = '';
}

// ==================================================
// RENDERIZAR ITEMS DE UNA CATEGORÍA
// ==================================================
function renderGlossaryItems(catId) {
  const container = document.getElementById('glossary-items-list');
  container.innerHTML = '';

  // Todas las armas de la categoría (no filtramos por purchasable)
  const weapons = WEAPONS.filter(w => w.category === catId);

  if (weapons.length === 0) {
    container.innerHTML = `
      <div class="market-empty">
        <p>No hay objetos en esta categoría.</p>
      </div>
    `;
    return;
  }

  // Ordenar por coste
  weapons.sort((a, b) => (a.cost || 0) - (b.cost || 0));

  weapons.forEach(weapon => {
    const card = document.createElement('button');
    card.className = 'market-weapon-card';

    const imgHTML = weapon.image
      ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="market-weapon-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'market-weapon-icon\\'>${getWeaponCategoryIcon(weapon.category)}</span>';">
`
      : `<span class="market-weapon-icon">${getWeaponCategoryIcon(weapon.category)}</span>`;

    const costLabel = weapon.free ? 'Gratis' : `${weapon.cost}c`;

    card.innerHTML = `
      <div class="market-weapon-thumb">${imgHTML}</div>
      <div class="market-weapon-info">
        <div class="market-weapon-name">${escapeHTML(weapon.name)}</div>
        <div class="market-weapon-meta">
          <span class="market-weapon-rarity">${formatWeaponRarity(weapon)}</span>
        </div>
      </div>
      <div class="market-weapon-cost">${costLabel}</div>
    `;

    card.addEventListener('click', () => openWeaponModal(weapon.id));
    container.appendChild(card);
  });
}

// ==================================================
// BUSCADOR
// ==================================================
function handleGlossarySearch(query) {
  currentGlossarySearchTerm = query.trim().toLowerCase();

  if (currentGlossarySearchTerm === '') {
    // Volver a categorías si se borra la búsqueda
    backToGlossaryCategories();
    return;
  }

  // Mostrar vista de búsqueda
  document.getElementById('glossary-categories-view').style.display = 'none';
  document.getElementById('glossary-items-view').style.display = 'none';
  document.getElementById('glossary-search-view').style.display = 'block';

  document.getElementById('glossary-search-title').textContent =
    `🔍 "${query}"`;

  renderGlossarySearchResults();
}

function renderGlossarySearchResults() {
  const container = document.getElementById('glossary-search-list');
  container.innerHTML = '';

  const term = currentGlossarySearchTerm;

  // Buscar en TODO el catálogo por nombre
  const results = WEAPONS.filter(w => 
    w.name.toLowerCase().includes(term)
  );

  if (results.length === 0) {
    container.innerHTML = `
      <div class="market-empty">
        <p>No se encontraron objetos con "${escapeHTML(term)}".</p>
      </div>
    `;
    return;
  }

  // Ordenar por nombre
  results.sort((a, b) => a.name.localeCompare(b.name));

  results.forEach(weapon => {
    const card = document.createElement('button');
    card.className = 'market-weapon-card';

    const catIcon = getWeaponCategoryIcon(weapon.category);
    const imgHTML = weapon.image
      ? `<img src="${weapon.image}" alt="${escapeHTML(weapon.name)}" class="market-weapon-img" onerror="this.style.display='none'; this.parentElement.innerHTML='<span class=\\'market-weapon-icon\\'>${catIcon}</span>';">`
      : `<span class="market-weapon-icon">${catIcon}</span>`;

    const costLabel = weapon.free ? 'Gratis' : `${weapon.cost}c`;

    card.innerHTML = `
      <div class="market-weapon-thumb">${imgHTML}</div>
      <div class="market-weapon-info">
        <div class="market-weapon-name">${escapeHTML(weapon.name)}</div>
        <div class="market-weapon-meta">
          <span class="market-weapon-rarity">${getWeaponCategoryLabel(weapon.category)} · ${formatWeaponRarity(weapon)}</span>
        </div>
      </div>
      <div class="market-weapon-cost">${costLabel}</div>
    `;

    card.addEventListener('click', () => openWeaponModal(weapon.id));
    container.appendChild(card);
  });
}