// ============================================
//   JORIS GUYONNET — SITE VITRINE
//   main.js
// ============================================

document.addEventListener('DOMContentLoaded', () => {

  // ── NAV SCROLL ──────────────────────────────
  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // ── BURGER MENU MOBILE ───────────────────────
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
  });

  // ── REVEAL ON SCROLL ────────────────────────
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Petit délai en cascade pour les grilles
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: '0px 0px -40px 0px'
  });

  reveals.forEach(el => observer.observe(el));

  // ── FORMULAIRE DE CONTACT ───────────────────
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const btn = form.querySelector('.form-submit');
      const name = document.getElementById('name').value.trim();

      // Animation de succès
      btn.textContent = '✓ Message envoyé !';
      btn.style.background = '#4caf84';
      btn.style.transform = 'translateY(-2px)';

      setTimeout(() => {
        btn.textContent = 'Envoyer le message';
        btn.style.background = '';
        btn.style.transform = '';
        form.reset();
      }, 3000);

      // Note : pour un vrai envoi d'email, connecter à Formspree ou Netlify Forms
      // Voir le README pour les instructions
      console.log('Formulaire soumis :', { name });
    });
  }

  // ── SMOOTH SCROLL pour les liens nav ────────
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
