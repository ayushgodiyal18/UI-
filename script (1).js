document.addEventListener('DOMContentLoaded', () => {

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('siteNav');
  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Animate hero VU meters to their target level once visible
  const meterFills = document.querySelectorAll('.meter-fill');
  const meterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        meterFills.forEach(fill => {
          const level = fill.getAttribute('data-level') || 0;
          fill.style.height = level + '%';
        });
        meterObserver.disconnect();
      }
    });
  }, { threshold: 0.4 });
  const heroMeters = document.getElementById('heroMeters');
  if (heroMeters) meterObserver.observe(heroMeters);

  // Animate skill rings from 0 to their target percentage
  const rings = document.querySelectorAll('.ring');
  const ringObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const ring = entry.target;
        const target = parseInt(ring.style.getPropertyValue('--pct'), 10) || 0;
        let current = 0;
        ring.style.setProperty('--pct', 0);
        const step = () => {
          current += Math.max(1, Math.round(target / 40));
          if (current >= target) {
            ring.style.setProperty('--pct', target);
            return;
          }
          ring.style.setProperty('--pct', current);
          requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        ringObserver.unobserve(ring);
      }
    });
  }, { threshold: 0.4 });
  rings.forEach(ring => ringObserver.observe(ring));

  // Contact form — no backend wired up, so guide the user to email directly
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');
  if (form && note) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      const subject = encodeURIComponent(`Project inquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
      window.location.href = `mailto:hello@novarane.design?subject=${subject}&body=${body}`;
      note.textContent = 'Opening your email client…';
    });
  }
});
