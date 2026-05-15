/* ========================================
   ON MY PEAK — Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Custom Cursor --- */
  const cursor    = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing && window.matchMedia('(pointer: fine)').matches) {
    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    document.addEventListener('mousemove', (e) => {
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    // Smooth ring follow
    function animateCursor() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      cursorRing.style.left = cx + 'px';
      cursorRing.style.top = cy + 'px';
      requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states
    const hoverElements = document.querySelectorAll('a, button, .product-card, .lookbook__item');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
        cursorRing.classList.add('cursor-ring--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
        cursorRing.classList.remove('cursor-ring--hover');
      });
    });
  }

  /* --- Navbar Scroll --- */
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    if (scrollY > 80) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
    lastScroll = scrollY;
  }, { passive: true });

  /* --- Hero Load Animation --- */
  const hero = document.querySelector('.hero');
  if (hero) {
    requestAnimationFrame(() => {
      hero.classList.add('hero--loaded');
    });
  }

  /* --- Scroll Reveal (Intersection Observer) --- */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --- Parallax on Manifesto BG --- */
  const manifestoBg = document.querySelector('.manifesto__bg');
  if (manifestoBg && window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('scroll', () => {
      const rect = manifestoBg.parentElement.getBoundingClientRect();
      const speed = 0.15;
      const offset = rect.top * speed;
      manifestoBg.style.transform = `translateY(calc(-50% + ${offset}px))`;
    }, { passive: true });
  }

  /* --- Waitlist Form --- */
  const form = document.getElementById('waitlistForm');
  const success = document.getElementById('waitlistSuccess');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('waitlistEmail').value.trim();

      if (!email) return;

      // Store locally (replace with API call to Mailchimp/Brevo)
      const waitlist = JSON.parse(localStorage.getItem('omp_waitlist') || '[]');
      if (!waitlist.includes(email)) {
        waitlist.push(email);
        localStorage.setItem('omp_waitlist', JSON.stringify(waitlist));
      }

      // Show success
      form.classList.add('hidden');
      success.classList.add('active');
    });
  }

  /* --- Gallery Drag-to-Scroll --- */
  const galleryWrap = document.getElementById('galleryWrap');
  const galleryProgress = document.getElementById('galleryProgress');

  if (galleryWrap) {
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let velocity = 0;
    let lastX = 0;
    let rafId = null;

    function updateProgress() {
      const max = galleryWrap.scrollWidth - galleryWrap.clientWidth;
      const pct = max > 0 ? (galleryWrap.scrollLeft / max) * 100 : 0;
      if (galleryProgress) galleryProgress.style.width = pct + '%';
    }

    function momentumLoop() {
      if (Math.abs(velocity) < 0.5) { velocity = 0; return; }
      galleryWrap.scrollLeft += velocity;
      velocity *= 0.93;
      updateProgress();
      rafId = requestAnimationFrame(momentumLoop);
    }

    galleryWrap.addEventListener('mousedown', (e) => {
      isDown = true;
      galleryWrap.classList.add('is-dragging');
      startX = e.pageX - galleryWrap.offsetLeft;
      scrollLeft = galleryWrap.scrollLeft;
      lastX = e.pageX;
      velocity = 0;
      cancelAnimationFrame(rafId);
    });

    document.addEventListener('mouseup', () => {
      if (!isDown) return;
      isDown = false;
      galleryWrap.classList.remove('is-dragging');
      rafId = requestAnimationFrame(momentumLoop);
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - galleryWrap.offsetLeft;
      const walk = (x - startX) * 1.4;
      velocity = e.pageX - lastX;
      lastX = e.pageX;
      galleryWrap.scrollLeft = scrollLeft - walk;
      updateProgress();
    });

    galleryWrap.addEventListener('scroll', updateProgress, { passive: true });

    // Touch support
    let touchStartX = 0;
    let touchScrollLeft = 0;

    galleryWrap.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].pageX;
      touchScrollLeft = galleryWrap.scrollLeft;
      velocity = 0;
      cancelAnimationFrame(rafId);
    }, { passive: true });

    galleryWrap.addEventListener('touchmove', (e) => {
      const diff = touchStartX - e.touches[0].pageX;
      velocity = e.touches[0].pageX - touchStartX;
      galleryWrap.scrollLeft = touchScrollLeft + diff;
      updateProgress();
    }, { passive: true });

    galleryWrap.addEventListener('touchend', () => {
      velocity = -velocity * 0.4;
      rafId = requestAnimationFrame(momentumLoop);
    }, { passive: true });

    // Add gallery items to cursor hover
    document.querySelectorAll('.gallery__item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor && cursor.classList.add('cursor--hover');
        cursorRing && cursorRing.classList.add('cursor-ring--hover');
      });
      el.addEventListener('mouseleave', () => {
        cursor && cursor.classList.remove('cursor--hover');
        cursorRing && cursorRing.classList.remove('cursor-ring--hover');
      });
    });

    updateProgress();
  }

  /* --- Smooth Scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
