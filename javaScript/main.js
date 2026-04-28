// layout.js

async function fetchHTML(path) {
  const res = await fetch(path);
  if (!res.ok) {
    throw new Error(`Failed to fetch ${path}: ${res.status}`);
  }
  return await res.text();
}

async function loadLayout() {
  const app = document.getElementById("app");
  if (!app) {
    console.error('No <div id="app"> found on this page.');
    return;
  }

  const mainContent = app.innerHTML;

  try {
    const [navbarHTML, footerHTML] = await Promise.all([
      fetchHTML("/components/navbar.html"),
      fetchHTML("/components/footer.html"),
    ]);

    app.innerHTML = `
      ${navbarHTML}
      <main id="page-content">
        ${mainContent}
      </main>
      ${footerHTML}
    `;

    await loadPartials();
  } catch (err) {
    console.error("Failed to load layout components:", err);
  }
}

async function loadPartials() {
  const partialNodes = document.querySelectorAll("[data-include]");

  await Promise.all(
    [...partialNodes].map(async (node) => {
      const file = node.getAttribute("data-include");
      if (!file) return;

      try {
        const html = await fetchHTML(file);
        node.innerHTML = html;
      } catch (err) {
        console.error(`Failed to load partial: ${file}`, err);
      }
    }),
  );
}

document.addEventListener("DOMContentLoaded", loadLayout);