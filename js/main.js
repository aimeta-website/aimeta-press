/* AIMeta: accessible mobile navigation and footer year. */
(() => {
  'use strict';
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const closeMenu = () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open menu');
  };
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', e => { if (e.target.closest('a')) closeMenu(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); }
    });
    document.addEventListener('click', e => { if (!e.target.closest('.site-header')) closeMenu(); });
    window.matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
  }
  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealItems.length) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('in'); io.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(el => io.observe(el));
  } else {
    revealItems.forEach(el => el.classList.add('in'));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
