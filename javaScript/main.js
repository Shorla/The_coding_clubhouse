// JavaScript logic

// Function to load content from other pages into layout.html
function loadPage(pageUrl) {
  fetch(pageUrl)
    .then(response => response.text())
    .then(html => {
      // Parse the HTML and extract the body content
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const mainContent = doc.body.innerHTML;
      
      // Insert content into main-content div
      const contentDiv = document.getElementById('main-content');
      if (contentDiv) {
        contentDiv.innerHTML = mainContent;
      }
    })
    .catch(error => {
      console.error('Error loading page:', error);
    });
}

// Example usage:
// When page loads, you can call: loadPage('index.html')
// Or attach to navigation links to load pages dynamically