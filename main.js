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

  // ── FORMULAIRE DE CONTACT (Netlify Forms) ───
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const btn = form.querySelector('.form-submit');
      btn.textContent = 'Envoi en cours...';
      btn.disabled = true;

      const formData = new FormData(form);

      try {
        await fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams(formData).toString(),
        });

        // Succès
        btn.textContent = '✓ Message envoyé !';
        btn.style.background = '#4caf84';
        form.reset();

        setTimeout(() => {
          btn.textContent = 'Envoyer le message';
          btn.style.background = '';
          btn.disabled = false;
        }, 4000);

      } catch (err) {
        btn.textContent = 'Erreur, réessayez';
        btn.style.background = '#c0392b';
        btn.disabled = false;
      }
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
