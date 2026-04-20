(function () {
  // Mobile menu
  const menuBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');

  if (menuBtn && menu) {
    menuBtn.addEventListener('click', function () {
      menu.classList.toggle('open');
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.remove('open');
      });
    });
  }

  // Smooth nav shadow on scroll
  const nav = document.getElementById('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      nav.style.boxShadow = window.scrollY > 10 ? 'var(--shadow-sm)' : 'none';
    });
  }
})();
