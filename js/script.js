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
      waitlistLabel: 'Consigue tu Peak',
      waitlistSubtitle: 'Pide tu camiseta del DROP 01/XX.<br>Selecciona modelo, color y talla.',
      purchase1: 'Desde 22 €',
      purchase2: 'Drop limitado',
      purchase3: 'IGIC calculado en carrito',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      modelLabel: 'Modelo de pedido',
      colorLabel: 'Color',
      sizeLabel: 'Talla',
      discountLabel: 'Código de descuento',
      submitOrder: 'Añadir al carrito',
      successTitle: 'Añadido al carrito.',
      perk1: 'Acceso anticipado a drops',
      perk2: 'Contenido exclusivo',
      perk3: 'Ediciones limitadas',
      viewInstagram: 'Ver Instagram',
      followMovement: 'SIGUE EL MOVIMIENTO',
      calendarButton: 'MARCAR EN TU CALENDARIO',
      footerFaq: 'Preguntas Frecuentes (FAQ)',
      footerReturns: 'Política de Cambios y Devoluciones',
      footerContact: 'Contacto / Atención al Cliente',
      footerPrivacy: 'Política de Privacidad',
      footerTerms: 'Términos y Condiciones',
      footerReviews: 'Clientes Satisfechos',
      footerRights: 'Todos los derechos reservados OMP.'
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
      purchase1: 'From €22',
      purchase2: 'Limited drop',
      purchase3: 'IGIC calculated in cart',
      nameLabel: 'Full name',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      modelLabel: 'Order model',
      colorLabel: 'Color',
      sizeLabel: 'Size',
      discountLabel: 'Discount code',
      submitOrder: 'Add to cart',
      successTitle: 'Added to cart.',
      perk1: 'Early access to drops',
      perk2: 'Exclusive content',
      perk3: 'Limited editions',
      viewInstagram: 'View Instagram',
      followMovement: 'FOLLOW THE MOVEMENT',
      calendarButton: 'ADD TO YOUR CALENDAR',
      footerFaq: 'Frequently Asked Questions (FAQ)',
      footerReturns: 'Exchanges and Returns Policy',
      footerContact: 'Contact / Customer Support',
      footerPrivacy: 'Privacy Policy',
      footerTerms: 'Terms and Conditions',
      footerReviews: 'Happy Customers',
      footerRights: 'All rights reserved OMP.'
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
      purchase1: 'Desde 22 €',
      purchase2: 'Drop limitado',
      purchase3: 'IGIC calculado no carrinho',
      nameLabel: 'Nome completo',
      emailLabel: 'Email',
      phoneLabel: 'Telefone',
      modelLabel: 'Modelo do pedido',
      colorLabel: 'Cor',
      sizeLabel: 'Tamanho',
      discountLabel: 'Código de desconto',
      submitOrder: 'Adicionar ao carrinho',
      successTitle: 'Adicionado ao carrinho.',
      perk1: 'Acesso antecipado aos drops',
      perk2: 'Conteúdo exclusivo',
      perk3: 'Edições limitadas',
      viewInstagram: 'Ver Instagram',
      followMovement: 'SEGUE O MOVIMENTO',
      calendarButton: 'MARCAR NO CALENDÁRIO',
      footerFaq: 'Perguntas Frequentes (FAQ)',
      footerReturns: 'Política de Trocas e Devoluções',
      footerContact: 'Contacto / Apoio ao Cliente',
      footerPrivacy: 'Política de Privacidade',
      footerTerms: 'Termos e Condições',
      footerReviews: 'Clientes Satisfeitos',
      footerRights: 'Todos os direitos reservados OMP.'
    }
  };

  const languageSwitcher = document.querySelector('.language-switcher');
  const languageToggle = document.getElementById('languageToggle');
  const languageFlag = document.getElementById('languageFlag');
  let currentLanguage = 'es';

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.es;
    currentLanguage = translations[lang] ? lang : 'es';
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

  /* --- Footer Info Pages --- */
  const legalPages = {
    es: {
      faq: {
        title: 'Preguntas Frecuentes',
        body: '<h3>¿Cómo reservo mi prenda?</h3><p>Elige modelo, color y talla, añade la prenda al carrito y escríbenos por WhatsApp para cerrar disponibilidad y entrega.</p><h3>¿Cuándo sale el próximo drop?</h3><p>DROP 02/XX está marcado para el 29 de mayo a las 20:00, hora de Canarias.</p><h3>¿Hay muchas unidades?</h3><p>No. OMP trabaja por drops limitados para mantener intención, calidad y exclusividad.</p>'
      },
      returns: {
        title: 'Cambios y Devoluciones',
        body: '<p>Aceptamos cambios de talla o modelo si la prenda está sin usar, con etiquetas y en perfecto estado. El plazo recomendado es de 14 días desde la entrega.</p><p>Si hay defecto de fabricación, escríbenos con fotos y número de pedido para resolverlo cuanto antes.</p>'
      },
      contact: {
        title: 'Contacto / Atención al Cliente',
        body: '<p>Para pedidos, tallas, colores o cualquier duda, hablamos directo por WhatsApp.</p><p><a href="https://wa.me/34663232469" target="_blank" rel="noopener">Abrir WhatsApp: +34 663 232 469</a></p><p>Base: LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Política de Privacidad',
        body: '<p>Usamos tus datos solo para gestionar tu pedido, contactar contigo y confirmar disponibilidad. No vendemos tus datos ni los cedemos para publicidad externa.</p><p>Puedes pedir acceso, corrección o eliminación escribiendo por WhatsApp.</p>'
      },
      terms: {
        title: 'Términos y Condiciones',
        body: '<p>Los productos se venden por disponibilidad de drop. Añadir al carrito no garantiza stock hasta que el pedido quede confirmado por OMP.</p><p>Los precios muestran subtotal y el carrito calcula el IGIC correspondiente.</p>'
      },
      reviews: {
        title: 'Clientes Satisfechos',
        body: '<p>Ropa creada para entrenar, moverse y aparecer cuando toca. La comunidad OMP empieza en los boxes, en la calle y en quienes no esperan permiso.</p><p>Pronto añadiremos reseñas reales de compradores del DROP 01/XX.</p>'
      }
    },
    en: {
      faq: {
        title: 'Frequently Asked Questions',
        body: '<h3>How do I reserve a piece?</h3><p>Choose model, color and size, add it to the cart and contact us on WhatsApp to confirm stock and delivery.</p><h3>When is the next drop?</h3><p>DROP 02/XX is scheduled for May 29 at 20:00, Canary Islands time.</p><h3>Are units limited?</h3><p>Yes. OMP works through limited drops to keep intention, quality and exclusivity.</p>'
      },
      returns: {
        title: 'Exchanges and Returns',
        body: '<p>We accept size or model exchanges if the piece is unused, tagged and in perfect condition. Recommended window: 14 days from delivery.</p><p>If there is a manufacturing issue, send photos and order details so we can solve it quickly.</p>'
      },
      contact: {
        title: 'Contact / Customer Support',
        body: '<p>For orders, sizing, colors or any question, talk to us directly on WhatsApp.</p><p><a href="https://wa.me/34663232469" target="_blank" rel="noopener">Open WhatsApp: +34 663 232 469</a></p><p>Based in LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Privacy Policy',
        body: '<p>We use your data only to manage your order, contact you and confirm availability. We do not sell your data or share it for third-party advertising.</p><p>You can request access, correction or deletion through WhatsApp.</p>'
      },
      terms: {
        title: 'Terms and Conditions',
        body: '<p>Products are sold according to drop availability. Adding an item to the cart does not guarantee stock until OMP confirms the order.</p><p>The cart shows subtotal and calculates the applicable IGIC.</p>'
      },
      reviews: {
        title: 'Happy Customers',
        body: '<p>Clothing made to train, move and show up when it counts. The OMP community starts in the box, on the street and with those who do not wait for permission.</p><p>Real DROP 01/XX buyer reviews will be added soon.</p>'
      }
    },
    pt: {
      faq: {
        title: 'Perguntas Frequentes',
        body: '<h3>Como reservo a minha peça?</h3><p>Escolhe modelo, cor e tamanho, adiciona ao carrinho e fala connosco no WhatsApp para confirmar stock e entrega.</p><h3>Quando sai o próximo drop?</h3><p>DROP 02/XX está marcado para 29 de maio às 20:00, hora das Canárias.</p><h3>As unidades são limitadas?</h3><p>Sim. A OMP trabalha por drops limitados para manter intenção, qualidade e exclusividade.</p>'
      },
      returns: {
        title: 'Trocas e Devoluções',
        body: '<p>Aceitamos trocas de tamanho ou modelo se a peça estiver sem uso, com etiquetas e em perfeito estado. Prazo recomendado: 14 dias desde a entrega.</p><p>Se houver defeito de fabrico, envia fotos e dados do pedido para resolvermos rapidamente.</p>'
      },
      contact: {
        title: 'Contacto / Apoio ao Cliente',
        body: '<p>Para pedidos, tamanhos, cores ou qualquer dúvida, fala connosco diretamente no WhatsApp.</p><p><a href="https://wa.me/34663232469" target="_blank" rel="noopener">Abrir WhatsApp: +34 663 232 469</a></p><p>Base: LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Política de Privacidade',
        body: '<p>Usamos os teus dados apenas para gerir o pedido, contactar-te e confirmar disponibilidade. Não vendemos os teus dados nem os cedemos para publicidade externa.</p><p>Podes pedir acesso, correção ou eliminação pelo WhatsApp.</p>'
      },
      terms: {
        title: 'Termos e Condições',
        body: '<p>Os produtos são vendidos conforme disponibilidade do drop. Adicionar ao carrinho não garante stock até confirmação da OMP.</p><p>O carrinho mostra subtotal e calcula o IGIC aplicável.</p>'
      },
      reviews: {
        title: 'Clientes Satisfeitos',
        body: '<p>Roupa criada para treinar, mover e aparecer quando conta. A comunidade OMP começa no box, na rua e em quem não espera autorização.</p><p>Em breve adicionaremos avaliações reais de compradores do DROP 01/XX.</p>'
      }
    }
  };

  const infoModal = document.getElementById('infoModal');
  const infoModalTitle = document.getElementById('infoModalTitle');
  const infoModalBody = document.getElementById('infoModalBody');
  const infoModalClose = document.getElementById('infoModalClose');

  function openInfoPage(pageKey) {
    const page = legalPages[currentLanguage]?.[pageKey] || legalPages.es[pageKey];
    if (!page || !infoModal || !infoModalTitle || !infoModalBody) return;
    infoModalTitle.textContent = page.title;
    infoModalBody.innerHTML = page.body;
    infoModal.classList.add('active');
    infoModal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function closeInfoPage() {
    infoModal?.classList.remove('active');
    infoModal?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  document.querySelectorAll('[data-page]').forEach(button => {
    button.addEventListener('click', () => openInfoPage(button.dataset.page));
  });
  infoModalClose?.addEventListener('click', closeInfoPage);
  infoModal?.addEventListener('click', (e) => {
    if (e.target === infoModal) closeInfoPage();
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
  const discountInput = document.getElementById('discountCode');
  const cartToggle = document.getElementById('cartToggle');
  const cartCount = document.getElementById('cartCount');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartTax = document.getElementById('cartTax');
  const cartTotal = document.getElementById('cartTotal');
  const cartClear = document.getElementById('cartClear');
  const cartCheckout = document.getElementById('cartCheckout');
  const IGIC_RATE = 0.07;

  const colorsByModel = {
    Oversized: ['Jade', 'Azul zen', 'Blanco', 'Negro', 'Naranja', 'Ebano', 'Verde mist'],
    'Crop top': ['Blanco', 'Negro', 'Rosa', 'Turquesa'],
    Hoodie: ['Negra', 'Blanca', 'Ebano', 'Azul tormenta', 'Marino', 'Blanco vintage']
  };

  const pricesByModel = {
    Oversized: 22,
    'Crop top': 22,
    Hoodie: 35
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

  /* --- Next Drop Countdown --- */
  const countdownTarget = new Date('2026-05-29T20:00:00+01:00').getTime();
  const countdownParts = {
    days: document.getElementById('countDays'),
    hours: document.getElementById('countHours'),
    minutes: document.getElementById('countMinutes'),
    seconds: document.getElementById('countSeconds')
  };

  function padTime(value) {
    return String(Math.max(0, value)).padStart(2, '0');
  }

  function updateCountdown() {
    if (!countdownParts.days) return;

    const distance = Math.max(0, countdownTarget - Date.now());
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    countdownParts.days.textContent = padTime(days);
    countdownParts.hours.textContent = padTime(hours);
    countdownParts.minutes.textContent = padTime(minutes);
    countdownParts.seconds.textContent = padTime(seconds);
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  /* --- Cart --- */
  function readCart() {
    return JSON.parse(localStorage.getItem('omp_cart') || '[]');
  }

  function writeCart(cart) {
    localStorage.setItem('omp_cart', JSON.stringify(cart));
  }

  function formatCurrency(value) {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  }

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[char]));
  }

  function openCart() {
    cartDrawer?.classList.add('active');
    cartDrawer?.setAttribute('aria-hidden', 'false');
    cartToggle?.setAttribute('aria-expanded', 'true');
    document.body.classList.add('lightbox-open');
  }

  function closeCart() {
    cartDrawer?.classList.remove('active');
    cartDrawer?.setAttribute('aria-hidden', 'true');
    cartToggle?.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('lightbox-open');
  }

  function renderCart() {
    const cart = readCart();
    const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * IGIC_RATE;
    const total = subtotal + tax;

    if (cartCount) cartCount.textContent = itemCount;
    if (cartSubtotal) cartSubtotal.textContent = formatCurrency(subtotal);
    if (cartTax) cartTax.textContent = formatCurrency(tax);
    if (cartTotal) cartTotal.textContent = formatCurrency(total);
    if (cartCheckout) {
      const orderLines = cart.map(item => `${item.quantity} x ${item.model} ${item.color} talla ${item.size}${item.discount ? ` codigo ${item.discount}` : ''}`);
      const messageText = cart.length
        ? `Hola OMP, quiero confirmar mi pedido:\n${orderLines.join('\n')}\nTotal con IGIC: ${formatCurrency(total)}`
        : 'Hola OMP, quiero reservar mi Drop.';
      cartCheckout.href = `https://wa.me/34663232469?text=${encodeURIComponent(messageText)}`;
    }
    cartEmpty?.classList.toggle('active', cart.length === 0);

    if (!cartItems) return;
    cartItems.innerHTML = cart.map((item, index) => `
      <article class="cart-item">
        <div class="cart-item__top">
          <span class="cart-item__title">${escapeHtml(item.model)}</span>
          <span class="cart-item__price">${formatCurrency(item.price * item.quantity)}</span>
        </div>
        <p class="cart-item__meta">${escapeHtml(item.color)} · talla ${escapeHtml(item.size)} · cantidad ${item.quantity}</p>
        ${item.discount ? `<p class="cart-item__discount">Código: ${escapeHtml(item.discount)}</p>` : ''}
        <div class="cart-item__bottom">
          <span class="cart-item__meta">Precio unidad: ${formatCurrency(item.price)}</span>
          <button class="cart-item__remove" type="button" data-remove-cart="${index}">Quitar</button>
        </div>
      </article>
    `).join('');
  }

  function addToCart(order) {
    const cart = readCart();
    const existing = cart.find(item =>
      item.model === order.model &&
      item.color === order.color &&
      item.size === order.size &&
      item.discount === order.discount
    );

    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        ...order,
        quantity: 1,
        price: pricesByModel[order.model] || 0
      });
    }

    writeCart(cart);
    renderCart();
    openCart();
  }

  cartToggle?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartDrawer?.addEventListener('click', (e) => {
    if (e.target === cartDrawer) closeCart();
  });
  cartItems?.addEventListener('click', (e) => {
    const removeButton = e.target.closest('[data-remove-cart]');
    if (!removeButton) return;
    const cart = readCart();
    cart.splice(Number(removeButton.dataset.removeCart), 1);
    writeCart(cart);
    renderCart();
  });
  cartClear?.addEventListener('click', () => {
    writeCart([]);
    renderCart();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer?.classList.contains('active')) {
      closeCart();
    }
    if (e.key === 'Escape' && infoModal?.classList.contains('active')) {
      closeInfoPage();
    }
  });
  renderCart();

  /* --- Live Instagram Feed --- */
  const instagramFeed = document.querySelector('[data-instagram-feed]');

  function createInstagramItem(post) {
    const link = document.createElement('a');
    link.className = 'instagram-preview__item';
    link.href = post.permalink || 'https://instagram.com/onmypeak_';
    link.target = '_blank';
    link.rel = 'noopener';
    link.setAttribute('aria-label', post.caption ? `Abrir post de Instagram: ${post.caption}` : 'Abrir post de Instagram de On My Peak');

    if (post.media_type === 'VIDEO') {
      link.classList.add('instagram-preview__item--video');
    }

    const img = document.createElement('img');
    img.src = post.thumbnail_url || post.media_url;
    img.alt = post.caption || 'Post reciente de On My Peak';
    img.loading = 'lazy';
    img.decoding = 'async';

    link.appendChild(img);
    return link;
  }

  async function hydrateInstagramFeed() {
    if (!instagramFeed) return;

    try {
      const response = await fetch('/api/instagram', {
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) {
        instagramFeed.dataset.source = 'fallback';
        return;
      }

      const payload = await response.json();
      const posts = Array.isArray(payload.posts) ? payload.posts.slice(0, 9) : [];
      if (posts.length < 1) return;

      instagramFeed.replaceChildren(...posts.map(createInstagramItem));
      instagramFeed.dataset.source = 'instagram';
    } catch (error) {
      instagramFeed.dataset.source = 'fallback';
    }
  }

  hydrateInstagramFeed();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('waitlistName').value.trim();
      const email = document.getElementById('waitlistEmail').value.trim();
      const phone = document.getElementById('waitlistPhone').value.trim();
      const discount = discountInput?.value.trim().toUpperCase() || '';
      const order = {
        name,
        email,
        phone,
        model: modelSelect.value,
        color: colorSelect.value,
        size: sizeSelect.value,
        discount,
        createdAt: new Date().toISOString()
      };

      if (!name || !email || !phone || !order.model || !order.color || !order.size) return;

      addToCart(order);

      if (summary) {
        summary.textContent = `${order.model} · ${order.color} · talla ${order.size} añadido al carrito. IGIC 7% calculado en el total.`;
      }
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
