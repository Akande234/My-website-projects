//
// Custom JavaScript for Geo‑Mapping Consults website
//
// Handles navigation toggling on mobile devices and triggers reveal
// animations when elements enter the viewport. IntersectionObserver is
// used for efficiency and performance.

document.addEventListener('DOMContentLoaded', () => {
  // Navigation toggle for mobile
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Reveal elements on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observerOptions = {
    threshold: 0.1
  };
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  reveals.forEach(el => {
    revealObserver.observe(el);
  });
});