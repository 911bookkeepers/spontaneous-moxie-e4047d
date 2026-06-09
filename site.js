/* 911 Bookkeepers — Shared nav, footer, modal */

(function () {
  const PHONE     = '(225) 274-6576';
  const PHONE_TEL = 'tel:2252746576';
  const EMAIL     = 'info@911bookkeepers.com';

  const NAV_LINKS = [
    ['Industries',      'industries.html'],
    ['HVAC',            'hvac.html'],
    ['Service Areas',   'areas.html'],
    ['Free Tools',      'resources.html'],
    ['FAQ',             'faq.html'],
  ];

  function currentPage() {
    return window.location.pathname.split('/').pop() || 'index.html';
  }

  /* ---- Top Bar ---- */
  const topbar = document.getElementById('topbar');
  if (topbar) {
    topbar.innerHTML = `
      <div class="topbar-stripe"></div>
      <div class="topbar-inner">
        <span class="topbar-left">
          <i data-lucide="radio" style="width:14px;height:14px;color:#F5C400;"></i>
          <strong>On call</strong> &mdash; Baton Rouge, LA &middot; Mon&ndash;Sat 1:00p&ndash;9:00p
        </span>
        <div class="topbar-right">
          <a href="mailto:${EMAIL}" class="topbar-link">
            <i data-lucide="mail" style="width:13px;height:13px;"></i>${EMAIL}
          </a>
          <a href="${PHONE_TEL}" class="topbar-link">
            <i data-lucide="phone" style="width:13px;height:13px;"></i>${PHONE}
          </a>
        </div>
      </div>`;
  }

  /* ---- Header ---- */
  const header = document.getElementById('site-header');
  if (header) {
    const cur = currentPage();
    const navItems = NAV_LINKS.map(([label, href]) =>
      `<a href="${href}" class="${cur === href ? 'active' : ''}">${label}</a>`
    ).join('');
    const mobileItems = NAV_LINKS.map(([label, href]) =>
      `<a href="${href}" onclick="document.getElementById('mobileNav').classList.remove('open')">${label}</a>`
    ).join('');

    header.innerHTML = `
      <div class="header-inner">
        <a href="index.html" class="logo-lockup">
          <span class="logo-911">911</span>
          <span class="logo-rest">
            <span class="logo-name">Bookkeepers LLC</span>
            <span class="logo-sub">Built for the Trades</span>
          </span>
        </a>
        <nav class="site-nav">${navItems}</nav>
        <div class="header-actions">
          <button class="btn btn-ghost btn-sm" onclick="openModal()">Client Login</button>
          <button class="btn btn-red btn-sm" onclick="openModal()">Free Checkup</button>
        </div>
        <button class="nav-toggle" onclick="document.getElementById('mobileNav').classList.toggle('open')" aria-label="Menu">
          <i data-lucide="menu" style="width:24px;height:24px;"></i>
        </button>
      </div>
      <div class="mobile-nav" id="mobileNav">${mobileItems}</div>`;
  }

  /* ---- Footer ---- */
  const footer = document.getElementById('site-footer');
  if (footer) {
    footer.innerHTML = `
      <div class="footer-inner">
        <div>
          <div class="footer-logo-911">911</div>
          <div class="footer-logo-name">Bookkeepers LLC</div>
          <div class="footer-logo-sub">Built for the Trades</div>
          <p class="footer-brand-text">Your first financial responder. Bookkeeping built for contractors out of Baton Rouge, Louisiana.</p>
        </div>
        <div>
          <div class="footer-col-head">Who We Help</div>
          <div class="footer-links">
            <a href="hvac.html">HVAC Contractors</a>
            <a href="industries.html">Plumbing</a>
            <a href="industries.html">Electrical</a>
            <a href="industries.html">General Contracting</a>
            <a href="areas.html">Louisiana &amp; Wisconsin</a>
          </div>
        </div>
        <div>
          <div class="footer-col-head">Resources</div>
          <div class="footer-links">
            <a href="resources.html">Free Tools</a>
            <a href="faq.html">FAQ</a>
            <a href="industries.html">Industries</a>
            <a href="areas.html">Service Areas</a>
          </div>
        </div>
        <div>
          <div class="footer-col-head">Get in Touch</div>
          <div class="footer-links">
            <a href="${PHONE_TEL}">${PHONE}</a>
            <a href="mailto:${EMAIL}">${EMAIL}</a>
            <a href="#" onclick="openModal();return false;">Free 30-Min Checkup</a>
            <a href="areas.html">Baton Rouge, LA</a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <span>&copy; 2026 911 Bookkeepers LLC &middot; Baton Rouge, LA</span>
        <span>Privacy &middot; Terms &middot; Not affiliated with any emergency service</span>
      </div>`;
  }

  /* ---- Modal ---- */
  const modalHtml = `
    <div class="modal-overlay" id="modalOverlay" onclick="if(event.target===this)closeModal()">
      <div class="modal">
        <div class="modal-stripe"></div>
        <div class="modal-inner">
          <div class="modal-form" id="modalForm">
            <div class="modal-head">
              <i data-lucide="siren" style="width:24px;height:24px;color:#CC1200;stroke-width:2.5;"></i>
              <span class="modal-title">Free 30-Min Checkup</span>
            </div>
            <p class="modal-sub">Tell us where it hurts. We'll call back within 24 hours &mdash; no pitch, just a real conversation.</p>
            <form onsubmit="handleModalSubmit(event)">
              <div class="field">
                <label>Your Name</label>
                <input type="text" placeholder="Mike Fontenot" required />
              </div>
              <div class="field-row">
                <div class="field">
                  <label>Business Name</label>
                  <input type="text" placeholder="Fontenot HVAC LLC" required />
                </div>
                <div class="field">
                  <label>Trade</label>
                  <input type="text" placeholder="HVAC" required />
                </div>
              </div>
              <div class="field">
                <label>Best Phone Number</label>
                <input type="tel" placeholder="(225) 555-0100" required />
              </div>
              <div class="field">
                <label>Biggest problem right now?</label>
                <textarea placeholder="Books behind, tax surprise, can't track job profit..."></textarea>
              </div>
              <button type="submit" class="btn btn-red btn-lg" style="width:100%;margin-top:4px;">
                <i data-lucide="phone" style="width:17px;height:17px;"></i>
                Request a Checkup Call
              </button>
              <p class="modal-disclaimer">We call back within 24 hours. No spam, no pressure.</p>
            </form>
          </div>
          <div class="modal-success" id="modalSuccess">
            <div class="success-ring">
              <i data-lucide="check-circle" style="width:38px;height:38px;stroke-width:2;"></i>
            </div>
            <h3 class="success-title">We're on it.</h3>
            <p class="success-sub">Expect a call within 24 hours. We'll come ready to listen, not to pitch.</p>
            <button class="btn btn-ink" onclick="closeModal()">Back to site</button>
          </div>
        </div>
      </div>
    </div>`;

  document.body.insertAdjacentHTML('beforeend', modalHtml);

  /* ---- Modal functions (global) ---- */
  window.openModal = function () {
    document.getElementById('modalOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
  };
  window.closeModal = function () {
    document.getElementById('modalOverlay').classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(() => {
      const f = document.getElementById('modalForm');
      const s = document.getElementById('modalSuccess');
      if (f) f.classList.remove('hide');
      if (s) s.classList.remove('show');
    }, 250);
  };
  window.handleModalSubmit = function (e) {
    e.preventDefault();
    document.getElementById('modalForm').classList.add('hide');
    document.getElementById('modalSuccess').classList.add('show');
    lucide.createIcons();
  };

})();
