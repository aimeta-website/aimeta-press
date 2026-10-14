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
  // Copy without launching a mail application; address remains readable/selectable.
  document.querySelectorAll('[data-copy-email]').forEach(button => {
    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-copy-email');
      const feedback = button.closest('.contact-actions')?.querySelector('.copy-feedback');
      let copied = false;
      if (navigator.clipboard && window.isSecureContext) {
        try { await navigator.clipboard.writeText(email); copied = true; } catch (_) {}
      }
      if (!copied) {
        const input = document.createElement('textarea');
        input.value = email;
        input.setAttribute('readonly', '');
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        try { copied = document.execCommand('copy'); } catch (_) {}
        input.remove();
      }
      if (feedback) feedback.textContent = copied ? 'Email address copied.' : 'Please select and copy the address shown above.';
    });
  });


  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
