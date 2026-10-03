// Mobile menu and footer year. No dependencies.
(function () {
  // Mobile menu
  var menuButton = document.querySelector('.menu-btn');
  var links = document.getElementById('nav');
  if (menuButton && links) {
    menuButton.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Year
  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
