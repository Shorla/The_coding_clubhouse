// layout.js
// Fetches navbar and footer HTML files and injects them around your page content

async function loadLayout() {
  const app = document.getElementById("app");
  if (!app) {
    console.error('No <div id="app"> found on this page.');
    return;
  }

  // Grab the main content already inside #app
  const mainContent = app.innerHTML;

  try {
    // Fetch navbar and footer HTML files in parallel
    const [navbarRes, footerRes] = await Promise.all([
      fetch("/components/navbar.html"),
      fetch("/components/footer.html"),
    ]);

    const navbarHTML = await navbarRes.text();
    const footerHTML = await footerRes.text();

    // Reassemble: Navbar + main content + Footer
    app.innerHTML = `
      ${navbarHTML}
      <main>
        ${mainContent}
      </main>
      ${footerHTML}
    `;
  } catch (err) {
    console.error("Failed to load layout components:", err);
  }
}

// Auto-run when DOM is ready
document.addEventListener("DOMContentLoaded", loadLayout);
