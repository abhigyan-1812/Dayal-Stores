// Dayal Store - Interactive Web Application Logic
// Estd 1952, Pratapgarh (Beige & Green Theme)

document.addEventListener('DOMContentLoaded', () => {
  // Application State
  const state = {
    selectedCategory: 'all',
    selectedSubcategory: 'all',
    searchQuery: '',
    viewMode: 'grid', // 'grid' | 'list'
    filteredProducts: [...PRODUCTS]
  };

  // DOM Elements
  const searchInput = document.getElementById('catalogSearchInput');
  const searchClearBtn = document.getElementById('searchClearBtn');
  const searchActionBtn = document.getElementById('searchActionBtn');
  const categoryPillsContainer = document.getElementById('categoryPillsContainer');
  const subcategoryBar = document.getElementById('subcategoryBar');
  const productsContainer = document.getElementById('productsContainer');
  const totalCountEl = document.getElementById('totalProductsCount');
  const filterSummary = document.getElementById('filterSummary');
  const filterQueryText = document.getElementById('filterQueryText');
  const resetFilterBtn = document.getElementById('resetFilterBtn');
  const viewGridBtn = document.getElementById('viewGridBtn');
  const viewListBtn = document.getElementById('viewListBtn');
  const quickTags = document.querySelectorAll('.quick-tag-chip');

  // Fallback realistic SVG image if external image encounters network error
  const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22400%22%20height%3D%22300%22%20viewBox%3D%220%200%20400%20300%22%3E%3Crect%20fill%3D%22%23FAF7F2%22%20width%3D%22400%22%20height%3D%22300%22%2F%3E%3Ccircle%20cx%3D%22200%22%20cy%3D%22130%22%20r%3D%2250%22%20fill%3D%22%23E7EFEA%22%20stroke%3D%22%231E4A34%22%20stroke-width%3D%222%22%2F%3E%3Ctext%20x%3D%22200%22%20y%3D%22140%22%20font-family%3D%22sans-serif%22%20font-size%3D%2232%22%20text-anchor%3D%22middle%22%20fill%3D%22%231E4A34%22%3E%E0%A4%A6%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%B2%3C%2Ftext%3E%3Ctext%20x%3D%22200%22%20y%3D%22220%22%20font-family%3D%22sans-serif%22%20font-size%3D%2215%22%20font-weight%3D%22bold%22%20text-anchor%3D%22middle%22%20fill%3D%22%23163826%22%3EDAYAL%20STORE%20ESTD%201952%3C%2Ftext%3E%3Ctext%20x%3D%22200%22%20y%3D%22245%22%20font-family%3D%22sans-serif%22%20font-size%3D%2213%22%20text-anchor%3D%22middle%22%20fill%3D%22%23C29546%22%3E%E2%9C%93%20%E0%A4%A6%E0%A5%81%E0%A4%95%E0%A4%BE%E0%A4%A8%20%E0%A4%AA%E0%A4%B0%20%E0%A4%89%E0%A4%AA%E0%A4%B2%E0%A4%AC%E0%A5%8D%E0%A4%A7%20%2F%20In%20Store%3C%2Ftext%3E%3C%2Fsvg%3E";

  // Initial Setup
  function init() {
    renderCategoryPills();
    renderSubcategories();
    filterAndRenderProducts();
    attachEventListeners();
  }

  // Render Category Navigation Pills
  function renderCategoryPills() {
    if (!categoryPillsContainer) return;

    // All Items Pill
    let html = `
      <button class="category-pill ${state.selectedCategory === 'all' ? 'active' : ''}" data-cat-id="all" id="cat-pill-all">
        <span class="pill-icon">🏬</span>
        <span>सभी श्रेणियां (All Items)</span>
        <span class="pill-count">${PRODUCTS.length}</span>
      </button>
    `;

    // Individual Category Pills
    CATEGORIES.forEach(cat => {
      const count = PRODUCTS.filter(p => p.categoryId === cat.id).length;
      const isActive = state.selectedCategory === cat.id;
      html += `
        <button class="category-pill ${isActive ? 'active' : ''}" data-cat-id="${cat.id}" id="cat-pill-${cat.id}">
          <span class="pill-icon">${cat.icon}</span>
          <span>${cat.name}</span>
          <span class="pill-count">${count}</span>
        </button>
      `;
    });

    categoryPillsContainer.innerHTML = html;
  }

  // Render Subcategory Filter Chips (Pure clean text/chips, NO pictures on subcategories)
  function renderSubcategories() {
    if (!subcategoryBar) return;

    if (state.selectedCategory === 'all') {
      subcategoryBar.style.display = 'none';
      return;
    }

    const currentCat = CATEGORIES.find(c => c.id === Number(state.selectedCategory));
    if (!currentCat || !currentCat.subcategories || currentCat.subcategories.length === 0) {
      subcategoryBar.style.display = 'none';
      return;
    }

    subcategoryBar.style.display = 'flex';

    let html = `
      <button class="subcat-chip ${state.selectedSubcategory === 'all' ? 'active' : ''}" data-subcat-id="all">
        सभी उप-श्रेणियां (${currentCat.name})
      </button>
    `;

    currentCat.subcategories.forEach(sub => {
      const count = PRODUCTS.filter(p => p.categoryId === currentCat.id && p.subcategoryId === sub.id).length;
      const isActive = state.selectedSubcategory === sub.id;
      html += `
        <button class="subcat-chip ${isActive ? 'active' : ''}" data-subcat-id="${sub.id}">
          ${sub.name} (${count})
        </button>
      `;
    });

    subcategoryBar.innerHTML = html;
  }

  // Filter products based on search query, category, and subcategory
  function filterAndRenderProducts() {
    const q = state.searchQuery.trim().toLowerCase();

    state.filteredProducts = PRODUCTS.filter(item => {
      // Category match
      if (state.selectedCategory !== 'all' && item.categoryId !== Number(state.selectedCategory)) {
        return false;
      }

      // Subcategory match
      if (state.selectedSubcategory !== 'all' && item.subcategoryId !== state.selectedSubcategory) {
        return false;
      }

      // Search Query match
      if (q) {
        const matchHindi = item.hindiName.toLowerCase().includes(q);
        const matchEnglish = item.englishName.toLowerCase().includes(q);
        const matchKeywords = item.keywords ? item.keywords.toLowerCase().includes(q) : false;
        const matchPack = item.packNote ? item.packNote.toLowerCase().includes(q) : false;

        // Also check category & subcategory names
        const cat = CATEGORIES.find(c => c.id === item.categoryId);
        const matchCat = cat ? (cat.name.toLowerCase().includes(q) || cat.englishName.toLowerCase().includes(q)) : false;

        return matchHindi || matchEnglish || matchKeywords || matchPack || matchCat;
      }

      return true;
    });

    // Update count in header
    if (totalCountEl) {
      totalCountEl.textContent = state.filteredProducts.length;
    }

    // Update Active Filter Bar
    updateFilterSummary();

    // Render HTML
    renderProductCards();
  }

  // Update summary bar
  function updateFilterSummary() {
    if (!filterSummary) return;

    const hasActiveFilters = state.selectedCategory !== 'all' || state.selectedSubcategory !== 'all' || state.searchQuery !== '';

    if (!hasActiveFilters) {
      filterSummary.style.display = 'none';
      return;
    }

    filterSummary.style.display = 'flex';
    let textParts = [];

    if (state.searchQuery) {
      textParts.push(`खोज: "${state.searchQuery}"`);
    }

    if (state.selectedCategory !== 'all') {
      const cat = CATEGORIES.find(c => c.id === Number(state.selectedCategory));
      if (cat) textParts.push(`श्रेणी: ${cat.name}`);
    }

    if (state.selectedSubcategory !== 'all') {
      const cat = CATEGORIES.find(c => c.id === Number(state.selectedCategory));
      const sub = cat?.subcategories?.find(s => s.id === state.selectedSubcategory);
      if (sub) textParts.push(`उप-श्रेणी: ${sub.name}`);
    }

    filterQueryText.textContent = textParts.join(' | ') + ` (${state.filteredProducts.length} उत्पाद उपलब्ध)`;
  }

  // Render Product Cards & Category Showcase
  // Rule strictly enforced: "image should be given in categories only not in subcategories"
  function renderProductCards() {
    if (!productsContainer) return;

    // SCENARIO 1: ALL CATEGORIES VIEW & NO SEARCH QUERY
    // Display all 17 Category Cards with their realistic Indian images (Minimal & Spacious)
    if (state.selectedCategory === 'all' && !state.searchQuery) {
      let catHtml = `
        <div class="category-showcase-header" style="grid-column: 1 / -1;">
          <h2 class="category-showcase-title">दुकान विभाग</h2>
          <span class="category-showcase-sub">17 श्रेणियां • 230+ उत्पाद</span>
        </div>
        <div class="category-showcase-grid" style="grid-column: 1 / -1;">
      `;

      CATEGORIES.forEach(cat => {
        const catProductCount = PRODUCTS.filter(p => p.categoryId === cat.id).length;

        catHtml += `
          <div class="category-card" data-category-target="${cat.id}" id="cat-card-${cat.id}">
            <div class="category-card-img-wrap">
              <img 
                src="${cat.image}" 
                alt="${cat.englishName}" 
                class="category-card-img" 
                loading="lazy"
                onerror="this.onerror=null; this.src='${FALLBACK_IMG}';"
              />
            </div>
            <div class="category-card-body">
              <div class="category-card-top-row">
                <h3 class="category-card-title">${cat.name}</h3>
                <span class="category-card-count">${catProductCount}</span>
              </div>
              <p class="category-card-subtitle">${cat.englishName}</p>
            </div>
          </div>
        `;
      });

      catHtml += `</div>`;
      productsContainer.innerHTML = catHtml;
      return;
    }

    // SCENARIO 2: SEARCH OR SPECIFIC CATEGORY SELECTED
    // In subcategories, images are NOT shown (strictly following: image should be given in categories only not in subcategories)
    if (state.filteredProducts.length === 0) {
      productsContainer.innerHTML = `
        <div class="no-results-card">
          <div class="no-results-icon">🔍</div>
          <h3 class="no-results-title">उत्पाद सूची में नहीं मिला</h3>
          <p class="no-results-desc">
            "${state.searchQuery}" उपलब्ध नहीं है। कृपया वर्तनी जांचें या फोन पर संपर्क करें।
          </p>
          <div class="no-results-call-box">
            <a href="tel:+917398283814" style="color: var(--green-deep); text-decoration: underline;">📞 +91 73982 83814</a>
          </div>
        </div>
      `;
      return;
    }

    let html = '';

    // If a specific category is selected and not searching, show the Category Banner (Minimal & Spacious)
    if (state.selectedCategory !== 'all' && !state.searchQuery) {
      const currentCat = CATEGORIES.find(c => c.id === Number(state.selectedCategory));
      if (currentCat) {
        html += `
          <div class="selected-category-banner" style="grid-column: 1 / -1;">
            <div class="selected-cat-left">
              <img 
                src="${currentCat.image}" 
                alt="${currentCat.name}" 
                class="selected-cat-img"
                onerror="this.onerror=null; this.src='${FALLBACK_IMG}';"
              />
              <div class="selected-cat-info">
                <h2>${currentCat.name}</h2>
                <span class="cat-en-title">${currentCat.englishName}</span>
                <span class="cat-count-pill">${state.filteredProducts.length} उत्पाद उपलब्ध</span>
              </div>
            </div>
            <div>
              <button type="button" class="btn-back-categories" id="btnBackToCategories">
                ← सभी श्रेणियां
              </button>
            </div>
          </div>
        `;
      }
    }

    // Now render the subcategories and their products in a clean catalog layout WITHOUT IMAGES
    let currentSubcategoryTracker = null;

    html += `<div class="catalog-list-container" style="grid-column: 1 / -1;">`;

    state.filteredProducts.forEach(item => {
      // Insert clean subcategory section divider (NO images on subcategories)
      if (state.selectedCategory !== 'all' && state.selectedSubcategory === 'all' && !state.searchQuery && item.subcategoryId && item.subcategoryId !== currentSubcategoryTracker) {
        currentSubcategoryTracker = item.subcategoryId;
        const currentCat = CATEGORIES.find(c => c.id === item.categoryId);
        const subObj = currentCat?.subcategories?.find(s => s.id === item.subcategoryId);

        if (subObj) {
          html += `
            <div class="subcategory-section-header" style="grid-column: 1 / -1;">
              <span class="subcat-badge">${subObj.id}</span>
              <h3 class="subcategory-title">${subObj.name}</h3>
              <span class="subcategory-title-en">${subObj.englishName}</span>
            </div>
          `;
        }
      }

      // Clean Product Card without call/whatsapp buttons (available at top and bottom only)
      html += `
        <article class="catalog-item-card" id="product-${item.id}">
          <div class="catalog-item-main">
            <h4 class="catalog-item-name-hi">${item.hindiName}</h4>
            <p class="catalog-item-name-en">${item.englishName}</p>
            ${item.packNote ? `<span class="catalog-pack-tag">${item.packNote}</span>` : ''}
          </div>
          <div class="catalog-item-status">
            <span class="stock-indicator">● उपलब्ध</span>
          </div>
        </article>
      `;
    });

    html += `</div>`;
    productsContainer.innerHTML = html;
  }

  // Event Listeners
  function attachEventListeners() {
    // Search input typing
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      if (searchClearBtn) {
        searchClearBtn.style.display = state.searchQuery ? 'flex' : 'none';
      }
      filterAndRenderProducts();
    });

    // Clear search button
    if (searchClearBtn) {
      searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        state.searchQuery = '';
        searchClearBtn.style.display = 'none';
        filterAndRenderProducts();
        searchInput.focus();
      });
    }

    // Search Action button click
    if (searchActionBtn) {
      searchActionBtn.addEventListener('click', () => {
        filterAndRenderProducts();
        const catalogEl = document.getElementById('catalogSection');
        if (catalogEl) {
          catalogEl.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Quick Search Tags
    quickTags.forEach(tag => {
      tag.addEventListener('click', () => {
        const query = tag.getAttribute('data-search');
        if (query) {
          searchInput.value = query;
          state.searchQuery = query;
          if (searchClearBtn) searchClearBtn.style.display = 'flex';
          filterAndRenderProducts();
          const catalogEl = document.getElementById('catalogSection');
          if (catalogEl) {
            catalogEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });

    // Category Pill Click (delegation)
    if (categoryPillsContainer) {
      categoryPillsContainer.addEventListener('click', (e) => {
        const pill = e.target.closest('.category-pill');
        if (!pill) return;

        const catId = pill.getAttribute('data-cat-id');
        state.selectedCategory = catId === 'all' ? 'all' : Number(catId);
        state.selectedSubcategory = 'all';

        // Update active UI pill
        document.querySelectorAll('.category-pill').forEach(p => p.classList.remove('active'));
        pill.classList.add('active');

        // Scroll pill into view smoothly if overflow
        pill.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });

        renderSubcategories();
        filterAndRenderProducts();
      });
    }

    // Subcategory Chip Click (delegation)
    if (subcategoryBar) {
      subcategoryBar.addEventListener('click', (e) => {
        const chip = e.target.closest('.subcat-chip');
        if (!chip) return;

        const subcatId = chip.getAttribute('data-subcat-id');
        state.selectedSubcategory = subcatId;

        document.querySelectorAll('.subcat-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');

        filterAndRenderProducts();
      });
    }

    // Category Card Click & Back to Categories (delegation on productsContainer)
    if (productsContainer) {
      productsContainer.addEventListener('click', (e) => {
        // Back to Categories button in selected category banner
        const backBtn = e.target.closest('#btnBackToCategories');
        if (backBtn) {
          state.selectedCategory = 'all';
          state.selectedSubcategory = 'all';
          state.searchQuery = '';
          if (searchInput) searchInput.value = '';
          if (searchClearBtn) searchClearBtn.style.display = 'none';

          document.querySelectorAll('.category-pill').forEach(p => {
            if (p.getAttribute('data-cat-id') === 'all') {
              p.classList.add('active');
              p.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
            } else {
              p.classList.remove('active');
            }
          });

          renderSubcategories();
          filterAndRenderProducts();

          const catalogEl = document.getElementById('catalogSection');
          if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          return;
        }

        // Category Card click in the 17 categories showcase
        const card = e.target.closest('.category-card');
        if (card) {
          const targetCatId = card.getAttribute('data-category-target');
          if (targetCatId) {
            state.selectedCategory = Number(targetCatId);
            state.selectedSubcategory = 'all';

            document.querySelectorAll('.category-pill').forEach(p => {
              if (p.getAttribute('data-cat-id') === targetCatId) {
                p.classList.add('active');
                p.scrollIntoView({ behavior: 'smooth', inline: 'nearest', block: 'nearest' });
              } else {
                p.classList.remove('active');
              }
            });

            renderSubcategories();
            filterAndRenderProducts();

            const catalogEl = document.getElementById('catalogSection');
            if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    }

    // Reset Filters
    if (resetFilterBtn) {
      resetFilterBtn.addEventListener('click', () => {
        state.selectedCategory = 'all';
        state.selectedSubcategory = 'all';
        state.searchQuery = '';
        searchInput.value = '';
        if (searchClearBtn) searchClearBtn.style.display = 'none';

        renderCategoryPills();
        renderSubcategories();
        filterAndRenderProducts();
      });
    }

    // View Switcher (Grid vs List)
    if (viewGridBtn && viewListBtn) {
      viewGridBtn.addEventListener('click', () => {
        state.viewMode = 'grid';
        viewGridBtn.classList.add('active');
        viewListBtn.classList.remove('active');
        productsContainer.classList.remove('list-view');
      });

      viewListBtn.addEventListener('click', () => {
        state.viewMode = 'list';
        viewListBtn.classList.add('active');
        viewGridBtn.classList.remove('active');
        productsContainer.classList.add('list-view');
      });
    }

    // Scroll to Top FAB
    const fabTop = document.getElementById('fabTop');
    window.addEventListener('scroll', () => {
      if (fabTop) {
        if (window.scrollY > 400) {
          fabTop.style.display = 'flex';
        } else {
          fabTop.style.display = 'none';
        }
      }
    });

    if (fabTop) {
      fabTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }
  }

  // Run initial setup
  init();
});
