async function fetchHTML(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return await res.text();
}

function initNavbar() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  // Close menu when a nav link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
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
