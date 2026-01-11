// Interacties: nav toggle, theme toggle, formulier verwerking, smooth scroll
document.addEventListener('DOMContentLoaded', () => {
  // Nav toggle for small screens
  const nav = document.getElementById('site-nav');
  const navToggle = document.querySelector('.nav-toggle');
  if (nav && navToggle) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.style.display === 'flex';
      nav.style.display = isOpen ? '' : 'flex';
      navToggle.setAttribute('aria-expanded', String(!isOpen));
    });
  }

  // Theme toggle (store preference in localStorage)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.body;
  const stored = localStorage.getItem('theme');
  if (stored === 'light') root.classList.add('light');
  themeToggle && themeToggle.addEventListener('click', () => {
    const isLight = root.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
    });
  });

  // Contact form
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !email || !message) {
        status.textContent = 'Vul alle velden in.';
        return;
      }
      // Simuleer verzending
      status.textContent = 'Verzenden...';
      setTimeout(() => {
        status.textContent = 'Bedankt! Je bericht is verzonden.';
        form.reset();
        setTimeout(() => status.textContent = '', 4000);
      }, 800);
    });
  }

  // Respect reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // Simple reveal on scroll
  const revealElems = document.querySelectorAll('section, .card, .hero-card');
  const onScroll = () => {
    const top = window.innerHeight * 0.9;
    revealElems.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < top) el.style.opacity = 1, el.style.transform = 'none';
    });
  };
  revealElems.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(12px)'; el.style.transition = 'opacity .6s ease, transform .6s ease'; });
  onScroll();
  window.addEventListener('scroll', onScroll);
});
