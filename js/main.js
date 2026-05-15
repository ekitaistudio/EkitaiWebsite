/* 首頁邏輯：Nav 滾動、漢堡選單、Works 渲染與篩選、Reveal 動畫 */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 從 works.js 動態產生作品卡片 ── */
  const grid = document.querySelector('.works-grid');
  if (grid && typeof WORKS !== 'undefined') {
    grid.innerHTML = WORKS.map(work => `
      <a class="work-card" data-category="${work.category}"
         href="works.html?id=${work.id}"
         style="--ph-a:${work.ph.a};--ph-b:${work.ph.b};">
        <div class="work-thumb">
          ${work.images[0] ? `<img src="${work.images[0]}" alt="${work.name}" loading="lazy">` : ''}
          <div class="work-thumb-overlay"></div>
        </div>
        <div class="work-info">
          <div class="work-tags">
            ${work.tags.map(t => `<span class="work-tag">${t}</span>`).join('')}
          </div>
          <div class="work-name">${work.name}</div>
          <div class="work-client">${work.client}</div>
        </div>
      </a>
    `).join('');
  }

  /* ── Nav 滾動效果 ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });

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

  /* ── Works 篩選 ── */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const workCards  = document.querySelectorAll('.work-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      workCards.forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !show);
      });
    });
  });

  /* ── Scroll Reveal 入場動畫 ── */
  const reveals  = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 80 * i);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));

});
