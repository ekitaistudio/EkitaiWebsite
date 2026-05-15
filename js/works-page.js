/* 作品介紹頁邏輯：讀取 ?id=xxx，從 works.js 找資料並渲染 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 漢堡選單 ── */
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* ── 讀取 Query String ── */
  const params = new URLSearchParams(window.location.search);
  const id     = params.get('id');
  const detail = document.getElementById('work-detail');

  if (!id) {
    renderError(detail);
    return;
  }

  const index = WORKS.findIndex(w => w.id === id);

  if (index === -1) {
    renderError(detail);
    return;
  }

  const work = WORKS[index];
  const prev = WORKS[index - 1] || null;
  const next = WORKS[index + 1] || null;

  /* ── 更新頁面標題 ── */
  document.getElementById('page-title').textContent = `EKITAI — ${work.name}`;
  document.getElementById('page-desc').setAttribute('content', work.description || `${work.name} — ${work.client}`);

  /* ── 渲染作品頁 ── */
  detail.innerHTML = `

    <!-- Hero -->
    <div class="work-hero" style="--ph-a:${work.ph.a};--ph-b:${work.ph.b};">
      <div class="work-hero-bg"></div>
      <div class="work-hero-overlay">
        ${work.images[0] ? `<img src="${work.images[0]}" alt="${work.name}">` : ''}
      </div>
      <div class="work-hero-content">
        <div class="work-hero-category">${work.categoryLabel}</div>
        <h1 class="work-hero-title">${work.name}</h1>
        <p class="work-hero-subtitle">${work.client}</p>
        <div class="work-hero-tags">
          ${work.tags.map(t => `<span class="work-hero-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>

    <!-- 返回按鈕列 -->
    <div class="work-meta">
      <div class="work-meta-inner">
        <div class="work-meta-item">
          <div class="work-meta-label">Category</div>
          <div class="work-meta-value">${work.categoryLabel}</div>
        </div>
        <div class="work-meta-item">
          <div class="work-meta-label">Client</div>
          <div class="work-meta-value">${work.client}</div>
        </div>
        <div class="work-meta-item">
          <div class="work-meta-label">Tags</div>
          <div class="work-meta-value">${work.tags.map(t => `#${t}`).join('　')}</div>
        </div>
        <div class="work-meta-item">
          <a href="index.html#works" class="back-btn">Back to Works</a>
        </div>
      </div>
    </div>

    <!-- 描述 -->
    <div class="work-body">
      <div class="work-body-label">About</div>
      <div class="work-body-text ${work.description ? '' : 'work-body-empty'}">
        ${work.description
          ? work.description.replace(/\n/g, '<br>')
          : '說明文字即將加入'}
      </div>
    </div>

    <!-- 圖片 -->
    ${work.images.length > 0 ? `
    <div class="work-images">
      <div class="work-images-grid ${work.images.length === 1 ? 'single' : work.images.length >= 3 ? 'triple' : ''}">
        ${work.images.map(src => `
          <div class="work-img-item" style="--ph-a:${work.ph.a};--ph-b:${work.ph.b};">
            <img src="${src}" alt="${work.name}" loading="lazy">
          </div>
        `).join('')}
      </div>
    </div>
    ` : `
    <div class="work-images">
      <div class="work-images-grid">
        ${[1,2].map(() => `
          <div class="work-img-item" style="--ph-a:${work.ph.a};--ph-b:${work.ph.b};"></div>
        `).join('')}
      </div>
    </div>
    `}

    <!-- 上下頁 -->
    <div class="work-nav">
      ${prev
        ? `<a href="works.html?id=${prev.id}" class="work-nav-item prev">
             <span class="work-nav-dir">← Previous</span>
             <span class="work-nav-name">${prev.name}</span>
             <span class="work-nav-client">${prev.client}</span>
           </a>`
        : `<div class="work-nav-item"></div>`
      }
      ${next
        ? `<a href="works.html?id=${next.id}" class="work-nav-item next">
             <span class="work-nav-dir">Next →</span>
             <span class="work-nav-name">${next.name}</span>
             <span class="work-nav-client">${next.client}</span>
           </a>`
        : `<div class="work-nav-item"></div>`
      }
    </div>
  `;

  /* ── Reveal 動畫 ── */
  requestAnimationFrame(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), 80 * i);
    });
  });

});

/* 找不到作品時顯示錯誤頁 */
function renderError(container) {
  container.innerHTML = `
    <div class="error-page">
      <h1>404</h1>
      <p>找不到這件作品</p>
      <a href="index.html#works" class="back-btn" style="margin-top:16px;">Back to Works</a>
    </div>
  `;
}
