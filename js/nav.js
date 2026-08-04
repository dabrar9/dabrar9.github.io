// Mobile hamburger menu toggle
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var navLinks = document.querySelector('.nav-links');

    if (!toggle || !navLinks) return;

    // Toggle mobile menu
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('open');
      document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
    });

    // Dropdown toggles on mobile
    var dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function (dropdown) {
      var trigger = dropdown.querySelector('.nav-item');
      trigger.addEventListener('click', function (e) {
        if (window.innerWidth > 768) return;
        e.preventDefault();
        dropdown.classList.toggle('open');
      });
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth > 768) return;
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
      });
    });

    // Close menu on resize to desktop
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        toggle.classList.remove('active');
        navLinks.classList.remove('open');
        document.body.style.overflow = '';
        dropdowns.forEach(function (d) { d.classList.remove('open'); });
      }
    });
  });
})();
