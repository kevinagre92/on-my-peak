/* ========================================
   ON MY PEAK — Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Language Switcher --- */
  const translations = {
    es: {
      flag: '🇪🇸',
      cta: 'Reserva tu Drop',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifiesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'No hacemos ropa para que te veas bien. Hacemos <strong>armaduras</strong> para los que se presentan cada día sin excusas. Para los que nadie esperaba. Para los que <strong>siguen aquí</strong> cuando todos se han ido.',
      manifestoText2: 'Si necesitas que alguien te motive, esto no es para ti. Si ya estás dentro, <strong>lo sabes</strong>.',
      collectionLabel: 'Colección',
      dropText: 'Drop 1, nuestra base, "No one is coming", nadie va a venir a hacerlo por ti, te va a tocar currártelo.',
      dropHint: '<span>←→</span> Desliza lateralmente para ver más',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Lista de espera',
      waitlistSubtitle: 'Pide tu camiseta del DROP 01/XX.<br>Selecciona modelo, color y talla.',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      modelLabel: 'Modelo de pedido',
      colorLabel: 'Color',
      sizeLabel: 'Talla',
      submitOrder: 'Pedir mi camiseta',
      successTitle: 'Pedido recibido.',
      perk1: 'Acceso anticipado a drops',
      perk2: 'Contenido exclusivo',
      perk3: 'Ediciones limitadas',
      followMovement: 'SIGUE EL MOVIMIENTO',
      calendarButton: 'MARCAR EN TU CALENDARIO'
    },
    en: {
      flag: '🇬🇧',
      cta: 'Reserve your Drop',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'We do not make clothes so you look good. We make <strong>armor</strong> for those who show up every day with no excuses. For those nobody expected. For those who are <strong>still here</strong> when everyone else is gone.',
      manifestoText2: 'If you need someone to motivate you, this is not for you. If you are already in, <strong>you know</strong>.',
      collectionLabel: 'Collection',
      dropText: 'Drop 1, our foundation, "No one is coming": nobody is coming to do it for you, you will have to earn it.',
      dropHint: '<span>←→</span> Scroll sideways to see more',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Waitlist',
      waitlistSubtitle: 'Reserve your DROP 01/XX piece.<br>Choose model, color and size.',
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      modelLabel: 'Order model',
      colorLabel: 'Color',
      sizeLabel: 'Size',
      submitOrder: 'Reserve my piece',
      successTitle: 'Order received.',
      perk1: 'Early access to drops',
      perk2: 'Exclusive content',
      perk3: 'Limited editions',
      followMovement: 'FOLLOW THE MOVEMENT',
      calendarButton: 'ADD TO YOUR CALENDAR'
    },
    pt: {
      flag: '🇵🇹',
      cta: 'Reserva o teu Drop',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'Não fazemos roupa só para ficares bem. Fazemos <strong>armadura</strong> para quem aparece todos os dias sem desculpas. Para quem ninguém esperava. Para quem <strong>continua aqui</strong> quando todos já foram embora.',
      manifestoText2: 'Se precisas que alguém te motive, isto não é para ti. Se já estás dentro, <strong>tu sabes</strong>.',
      collectionLabel: 'Coleção',
      dropText: 'Drop 1, a nossa base, "No one is coming": ninguém vai vir fazer isto por ti, vais ter de trabalhar por isso.',
      dropHint: '<span>←→</span> Desliza para o lado para ver mais',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Lista de espera',
      waitlistSubtitle: 'Reserva a tua peça do DROP 01/XX.<br>Escolhe modelo, cor e tamanho.',
      nameLabel: 'Nome completo',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      modelLabel: 'Modelo do pedido',
      colorLabel: 'Cor',
      sizeLabel: 'Tamanho',
      submitOrder: 'Reservar a minha peça',
      successTitle: 'Pedido recebido.',
      perk1: 'Acesso antecipado aos drops',
      perk2: 'Conteúdo exclusivo',
      perk3: 'Edições limitadas',
      followMovement: 'SEGUE O MOVIMENTO',
      calendarButton: 'MARCAR NO CALENDÁRIO'
    }
  };

  const languageSwitcher = document.querySelector('.language-switcher');
  const languageToggle = document.getElementById('languageToggle');
  const languageFlag = document.getElementById('languageFlag');

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.es;
    document.documentElement.lang = lang;
    if (languageFlag) languageFlag.textContent = dictionary.flag;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dictionary[key]) el.innerHTML = dictionary[key];
    });
    localStorage.setItem('omp_language', lang);
  }

  const savedLanguage = localStorage.getItem('omp_language') || 'es';
  applyLanguage(savedLanguage);

  languageToggle?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = languageSwitcher.classList.toggle('open');
    languageToggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.querySelectorAll('[data-lang]').forEach(button => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.lang);
      languageSwitcher?.classList.remove('open');
      languageToggle?.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', () => {
    languageSwitcher?.classList.remove('open');
    languageToggle?.setAttribute('aria-expanded', 'false');
  });

  /* --- Custom Cursor --- */
  const cursor    = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing) {
    let mx = 0, my = 0;
    let cx = 0, cy = 0;
    let clickTimer;
    let touchClickTimer;
    let touchHideTimer;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    function placeCursor(x, y) {
      mx = x;
      my = y;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }

    document.addEventListener('mousemove', (e) => {
      if (!finePointer) return;
      placeCursor(e.clientX, e.clientY);
    });

    document.addEventListener('pointerdown', (e) => {
      if (finePointer || e.pointerType === 'mouse') return;
      placeCursor(e.clientX, e.clientY);
      window.clearTimeout(touchClickTimer);
      window.clearTimeout(touchHideTimer);
      cursor.classList.add('cursor--touch-visible', 'cursor--clicking');
      touchClickTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--clicking');
      }, 170);
      touchHideTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--touch-visible', 'cursor--clicking');
      }, 760);
    }, { passive: true });

    document.addEventListener('touchstart', (e) => {
      if (finePointer || !e.touches.length) return;
      const touch = e.touches[0];
      placeCursor(touch.clientX, touch.clientY);
      window.clearTimeout(touchClickTimer);
      window.clearTimeout(touchHideTimer);
      cursor.classList.add('cursor--touch-visible', 'cursor--clicking');
      touchClickTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--clicking');
      }, 170);
      touchHideTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--touch-visible', 'cursor--clicking');
      }, 760);
    }, { passive: true });

    document.addEventListener('pointermove', (e) => {
      if (finePointer || e.pointerType === 'mouse') return;
      mx = e.clientX;
      my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    }, { passive: true });

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
    const hoverElements = document.querySelectorAll('a, button, .product-card');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        if (!finePointer) return;
        cursor.classList.add('cursor--hover');
        cursorRing.classList.add('cursor-ring--hover');
      });
      el.addEventListener('mouseleave', () => {
        if (!finePointer) return;
        cursor.classList.remove('cursor--hover');
        cursorRing.classList.remove('cursor-ring--hover');
      });
    });

    document.addEventListener('mousedown', () => {
      if (!finePointer) return;
      window.clearTimeout(clickTimer);
      cursor.classList.add('cursor--clicking');
      clickTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--clicking');
      }, 180);
    });
    document.addEventListener('mouseup', () => {
      if (!finePointer) return;
      clickTimer = window.setTimeout(() => {
        cursor.classList.remove('cursor--clicking');
      }, 80);
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

  /* --- Hero Typewriter Word --- */
  const typewriter = document.querySelector('[data-typewriter-words]');
  if (typewriter) {
    const words = typewriter.dataset.typewriterWords
      .split(',')
      .map(word => word.trim())
      .filter(Boolean);
    let wordIndex = 0;
    let letterIndex = words[0].length;
    let deleting = true;
    let resting = false;

    function tickTypewriter() {
      const word = words[wordIndex];

      if (resting) {
        resting = false;
        setTimeout(tickTypewriter, deleting ? 520 : 1200);
        return;
      }

      typewriter.textContent = word.slice(0, letterIndex);

      if (deleting) {
        if (letterIndex > 0) {
          letterIndex -= 1;
          setTimeout(tickTypewriter, 55);
        } else {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(tickTypewriter, 180);
        }
      } else {
        if (letterIndex < word.length) {
          letterIndex += 1;
          setTimeout(tickTypewriter, 95);
        } else {
          deleting = true;
          resting = true;
          setTimeout(tickTypewriter, 1200);
        }
      }
    }

    setTimeout(tickTypewriter, 2200);
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
  const summary = document.getElementById('waitlistSummary');
  const modelSelect = document.getElementById('orderModel');
  const colorSelect = document.getElementById('orderColor');
  const sizeSelect = document.getElementById('orderSize');

  const colorsByModel = {
    Oversized: ['Jade', 'Azul zen', 'Blanco', 'Negro', 'Naranja', 'Ebano', 'Verde mist'],
    'Crop top': ['Blanco', 'Negro', 'Rosa', 'Turquesa'],
    Hoodie: ['Negra', 'Blanca', 'Ebano', 'Azul tormenta', 'Marino', 'Blanco vintage']
  };

  function updateColorOptions() {
    if (!modelSelect || !colorSelect) return;
    const colors = colorsByModel[modelSelect.value] || [];
    colorSelect.innerHTML = colors
      .map(color => `<option value="${color}">${color}</option>`)
      .join('');
  }

  if (modelSelect) {
    updateColorOptions();
    modelSelect.addEventListener('change', updateColorOptions);
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('waitlistName').value.trim();
      const email = document.getElementById('waitlistEmail').value.trim();
      const phone = document.getElementById('waitlistPhone').value.trim();
      const order = {
        name,
        email,
        phone,
        model: modelSelect.value,
        color: colorSelect.value,
        size: sizeSelect.value,
        createdAt: new Date().toISOString()
      };

      if (!name || !email || !phone || !order.model || !order.color || !order.size) return;

      const orders = JSON.parse(localStorage.getItem('omp_orders') || '[]');
      orders.push(order);
      localStorage.setItem('omp_orders', JSON.stringify(orders));

      if (summary) {
        summary.textContent = `${order.name} · ${order.phone} · ${order.email} · ${order.model} · ${order.color} · talla ${order.size}. Te contactaremos para cerrar el pedido.`;
      }
      form.classList.add('hidden');
      success.classList.add('active');
    });
  }

  /* --- Collection Horizontal Scroll & Lightbox --- */
  const dropScroll = document.querySelector('.drop__scroll-wrap');
  if (dropScroll) {
    let isDraggingDrop = false;
    let dropStartX = 0;
    let dropScrollLeft = 0;

    dropScroll.addEventListener('mousedown', (e) => {
      isDraggingDrop = true;
      dropScroll.classList.add('is-dragging');
      dropStartX = e.pageX - dropScroll.offsetLeft;
      dropScrollLeft = dropScroll.scrollLeft;
    });

    document.addEventListener('mouseup', () => {
      isDraggingDrop = false;
      dropScroll.classList.remove('is-dragging');
    });

    document.addEventListener('mousemove', (e) => {
      if (!isDraggingDrop) return;
      e.preventDefault();
      const x = e.pageX - dropScroll.offsetLeft;
      dropScroll.scrollLeft = dropScrollLeft - (x - dropStartX) * 1.2;
    });
  }

  const lightbox = document.getElementById('imageLightbox');
  const lightboxImg = lightbox?.querySelector('.image-lightbox__img');
  const lightboxClose = lightbox?.querySelector('.image-lightbox__close');
  const lightboxPrev = lightbox?.querySelector('.image-lightbox__nav--prev');
  const lightboxNext = lightbox?.querySelector('.image-lightbox__nav--next');
  const lightboxItems = Array.from(document.querySelectorAll('[data-lightbox-src]'));
  let lightboxIndex = 0;

  function showLightboxImage(index) {
    if (!lightbox || !lightboxImg || !lightboxItems.length) return;
    lightboxIndex = (index + lightboxItems.length) % lightboxItems.length;
    const button = lightboxItems[lightboxIndex];
    const img = button.querySelector('img');
    lightboxImg.src = button.dataset.lightboxSrc;
    lightboxImg.alt = img?.alt || 'Imagen DROP 01/XX';
    lightbox.classList.add('active');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.classList.remove('active');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    document.body.classList.remove('lightbox-open');
  }

  lightboxItems.forEach((button, index) => {
    button.addEventListener('click', () => {
      showLightboxImage(index);
    });
  });

  lightboxClose?.addEventListener('click', closeLightbox);
  lightboxPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    showLightboxImage(lightboxIndex - 1);
  });
  lightboxNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    showLightboxImage(lightboxIndex + 1);
  });
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (!lightbox?.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showLightboxImage(lightboxIndex - 1);
    if (e.key === 'ArrowRight') showLightboxImage(lightboxIndex + 1);
  });

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
