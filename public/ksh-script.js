/* Kush Casino — Custom JS (no third-party libraries) */
document.addEventListener('DOMContentLoaded', function () {
  var navToggle = document.querySelector('.ksh-nav-toggle');
  var navMenu = document.querySelector('.ksh-nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('ksh-nav-open');
    });
  }

  var navLinks = document.querySelectorAll('.ksh-nav-menu a');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function () {
      if (navMenu) {
        navMenu.classList.remove('ksh-nav-open');
      }
    });
  }

  var sections = document.querySelectorAll('section[id]');
  var allNavLinks = document.querySelectorAll('.ksh-nav-menu a');

  function updateActiveNav() {
    var current = '';
    var scrollPos = window.scrollY + 120;

    for (var i = 0; i < sections.length; i++) {
      var top = sections[i].offsetTop;
      if (scrollPos >= top) {
        current = sections[i].getAttribute('id');
      }
    }

    for (var j = 0; j < allNavLinks.length; j++) {
      allNavLinks[j].classList.remove('ksh-nav-active');
      var href = allNavLinks[j].getAttribute('href');
      if (href === '#' + current) {
        allNavLinks[j].classList.add('ksh-nav-active');
      }
    }
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(function () {
        updateActiveNav();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveNav();
});
