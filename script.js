/* ==========================================================
   Faozia Fariha — Portfolio · interactivity
   ========================================================== */

(function () {
  'use strict';

  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // -------- Mobile nav toggle --------
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    links.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // -------- Typewriter effect --------
  const tw = document.getElementById('typewriter');
  if (tw) {
    const phrases = [
      'Full-Stack Developer',
      'AI / ML Engineer',
      'Backend Engineer',
      'Competitive Programmer',
      'CS Graduate @ CUET'
    ];
    let pIdx = 0;
    let cIdx = 0;
    let deleting = false;

    const type = () => {
      const current = phrases[pIdx];

      if (!deleting) {
        tw.textContent = current.slice(0, cIdx + 1);
        cIdx++;
        if (cIdx === current.length) {
          deleting = true;
          return setTimeout(type, 1600);
        }
        setTimeout(type, 70 + Math.random() * 50);
      } else {
        tw.textContent = current.slice(0, cIdx - 1);
        cIdx--;
        if (cIdx === 0) {
          deleting = false;
          pIdx = (pIdx + 1) % phrases.length;
          return setTimeout(type, 250);
        }
        setTimeout(type, 35);
      }
    };
    type();
  }

  // -------- Reveal on scroll --------
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // -------- Active nav link on scroll --------
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');
  if (sections.length && navAnchors.length && 'IntersectionObserver' in window) {
    const setActive = (id) => {
      navAnchors.forEach((a) => {
        const isActive = a.getAttribute('href') === '#' + id;
        a.style.color = isActive ? 'var(--text)' : '';
      });
    };
    const sectionIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    sections.forEach((s) => sectionIo.observe(s));
  }

  // -------- Subtle parallax for the aurora blobs --------
  const blobs = document.querySelectorAll('.blob');
  if (blobs.length && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    let tx = 0, ty = 0;
    let raf = null;
    window.addEventListener('mousemove', (e) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      tx = cx * 24;
      ty = cy * 24;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          blobs.forEach((b, i) => {
            const factor = (i + 1) * 0.6;
            b.style.transform = `translate(${tx * factor * 0.2}px, ${ty * factor * 0.2}px)`;
          });
          raf = null;
        });
      }
    });
  }
})();