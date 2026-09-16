// Theme toggle, mobile menu and footer year. No dependencies.
(function () {
  var root = document.documentElement;

  // Theme
  var toggle = document.querySelector('.theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      var current = root.getAttribute('data-theme') || (prefersDark ? 'dark' : 'light');
      var next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // Mobile menu
  var menuButton = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  if (menuButton && links) {
    menuButton.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
