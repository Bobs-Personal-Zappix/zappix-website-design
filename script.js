// =============================================================
// Zappix marketing site — prototype interactions
// Minimal vanilla JS: mobile nav toggle + scrolled header border
// =============================================================

(function () {
  'use strict';

  // ---------- Mobile nav toggle ----------
  var navToggle = document.getElementById('navToggle');
  var siteNav   = document.getElementById('siteNav');

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = siteNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav when a link inside it is clicked (placeholder links use '#')
    siteNav.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A') {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Close nav on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && siteNav.classList.contains('is-open')) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });

    // Reset state if viewport widens beyond mobile breakpoint
    var mq = window.matchMedia('(min-width: 769px)');
    var handleMQ = function (e) {
      if (e.matches) {
        siteNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    };
    if (mq.addEventListener) mq.addEventListener('change', handleMQ);
    else if (mq.addListener) mq.addListener(handleMQ);   // Safari < 14
  }

  // ---------- Sticky header border on scroll ----------
  var header = document.getElementById('site-header');
  if (header) {
    var lastY = -1;
    var update = function () {
      var y = window.scrollY || window.pageYOffset;
      if ((y > 8) !== (lastY > 8)) {
        header.classList.toggle('is-scrolled', y > 8);
      }
      lastY = y;
    };
    update();
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (!ticking) {
        window.requestAnimationFrame(function () { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
  }

})();
