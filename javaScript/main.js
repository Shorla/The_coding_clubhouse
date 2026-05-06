async function fetchHTML(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return await res.text();
}

function initNavbar() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const iconImg = document.getElementById('hamburger-icon-img');
  const programsToggle = document.getElementById('programs-toggle');
  const programsSubmenu = document.getElementById('programs-submenu');
  const programsChevron = document.getElementById('programs-chevron');

  if (!hamburger || !mobileMenu) return;

  // Hamburger / close toggle
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    // swap to X icon when open
    if (isOpen) {
      hamburger.style.background = '#FFD447';
      hamburger.style.borderRadius = '8px';
      hamburger.style.padding = '6px';
      iconImg.style.filter = 'brightness(0)';
    } else {
      hamburger.style.background = 'transparent';
      hamburger.style.padding = '0';
      iconImg.style.filter = 'none';
    }
  });

  // Programs submenu toggle
  if (programsToggle && programsSubmenu) {
    programsToggle.addEventListener('click', () => {
      const isOpen = programsSubmenu.classList.toggle('open');
      programsToggle.setAttribute('aria-expanded', isOpen);
      programsChevron.style.transform = isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
      programsToggle.style.color = isOpen ? '#8C52FF' : '#2d2d2d';
    });
  }

  // Close menu when a non-toggle link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.style.background = 'transparent';
      hamburger.style.padding = '0';
      iconImg.style.filter = 'none';
    });
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.style.background = 'transparent';
      hamburger.style.padding = '0';
      iconImg.style.filter = 'none';
    }
  });
}

async function loadLayout() {
  const app = document.getElementById('app');
  if (!app) { console.error('No <div id="app"> found.'); return; }

  const mainContent = app.innerHTML;
  try {
    const [navbarHTML, footerHTML] = await Promise.all([
      fetchHTML('/components/navbar.html'),
      fetchHTML('/components/footer.html'),
    ]);
    app.innerHTML = `
      ${navbarHTML}
      <main id="page-content">${mainContent}</main>
      ${footerHTML}
    `;
    await loadPartials();
    initNavbar(); // ← runs after navbar is in the DOM
  } catch (err) {
    console.error('Failed to load layout components:', err);
  }
}

async function loadPartials() {
  const partialNodes = document.querySelectorAll('[data-include]');
  await Promise.all(
    [...partialNodes].map(async (node) => {
      const file = node.getAttribute('data-include');
      if (!file) return;
      try {
        node.innerHTML = await fetchHTML(file);
      } catch (err) {
        console.error(`Failed to load partial: ${file}`, err);
      }
    })
  );
}

document.addEventListener('DOMContentLoaded', loadLayout);
