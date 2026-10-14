/* ==================================================
   GESTIÓN DE ALMACENAMIENTO (localStorage)
   ================================================== */

const STORAGE_KEY = 'hive_scum_gangs';

/**
 * Carga todas las bandas guardadas
 */
function loadGangs() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    const gangs = raw ? JSON.parse(raw) : [];

    let needsSave = false;

    gangs.forEach(gang => {
      // Migración: añadir currentRound
      if (gang.currentRound === undefined) {
        gang.currentRound = 1;
        needsSave = true;
      }

      // Migración: calcular creditsAvailable si no existe
      if (gang.creditsAvailable === undefined) {
        gang.creditsAvailable = calculateCreditsAvailableForMigration(gang);
        needsSave = true;
      }

      // Migración: añadir gangType (necromunda o proscritos)
      if (gang.gangType === undefined) {
        // Detectar por el houseId: si es pitslaves (o futuras proscritas), es proscritos
        const outlawHouses = ['pitslaves', 'scavvies', 'ratskins', 'redemptionists', 'spyrers', 'enforcers', 'genestealer', 'chaos', 'nomads'];
        gang.gangType = outlawHouses.includes(gang.houseId) ? 'proscritos' : 'necromunda';
        needsSave = true;
      }
            // Migración: añadir territories vacío
      if (gang.territories === undefined) {
        gang.territories = [];
        needsSave = true;
      }
    });

    if (needsSave) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(gangs));
    }

    return gangs;
  } catch (e) {
    console.error('Error cargando bandas:', e);
    return [];
  }
}

/**
 * Guarda el array completo de bandas
 */
function saveGangs(gangs) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gangs));
  } catch (e) {
    console.error('Error guardando bandas:', e);
  }
}

/**
 * Genera un ID único
 */
function generateId() {
  return 'gang_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

/**
 * Calcula los créditos disponibles de una banda que no tenía el campo guardado.
 * Solo se usa en la migración.
 */
function calculateCreditsAvailableForMigration(gang) {
  let spent = 0;

  (gang.fighters || []).forEach(f => {
    spent += f.cost || 0;

    (f.equipment || []).forEach(eq => {
      const weapon = (typeof getWeaponById === 'function') 
        ? getWeaponById(eq.weaponId) 
        : null;
      if (weapon && !weapon.free) {
        spent += weapon.cost || 0;
      }
    });
  });

  return 1000 - spent;
}