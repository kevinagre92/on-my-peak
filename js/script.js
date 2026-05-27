/* ========================================
   ON MY PEAK — Interactions & Animations
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Language Switcher --- */
  const translations = {
    es: {
      flag: '🇪🇸',
      navCta: 'Consigue tu Drop',
      heroCta: 'consiguelo ya',
      availableUntil: 'disponible durante',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifiesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'No hacemos ropa para que te veas bien. Hacemos <strong>armaduras</strong> para los que se presentan cada día sin excusas. Para los que nadie esperaba. Para los que <strong>siguen aquí</strong> cuando todos se han ido.',
      manifestoText2: 'Si necesitas que alguien te motive, esto no es para ti. Si ya estás dentro, <strong>lo sabes</strong>.',
      collectionLabel: 'Colección actual',
      dropText: 'Drop 1, nuestra base, "No one is coming", nadie va a venir a hacerlo por ti, te va a tocar currártelo.',
      dropHint: '<span>←→</span> Desliza lateralmente para ver más',
      dropUrgency: 'Disponible durante',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Alcanza tu Peak',
      waitlistSubtitle: 'Pide tu camiseta del DROP 01/XX.<br>Selecciona modelo, color y talla.',
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
      navCta: 'Get your Drop',
      heroCta: 'Get it now',
      availableUntil: 'available during',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'We do not make clothes so you look good. We make <strong>armor</strong> for those who show up every day with no excuses. For those nobody expected. For those who are <strong>still here</strong> when everyone else is gone.',
      manifestoText2: 'If you need someone to motivate you, this is not for you. If you are already in, <strong>you know</strong>.',
      collectionLabel: 'Collection',
      dropText: 'Drop 1, our foundation, "No one is coming": nobody is coming to do it for you, you will have to earn it.',
      dropHint: '<span>←→</span> Scroll sideways to see more',
      dropUrgency: 'Available during',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Waitlist',
      waitlistSubtitle: 'Reserve your DROP 01/XX piece.<br>Choose model, color and size.',
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
      navCta: 'Garante o teu Drop',
      heroCta: 'Garante já',
      availableUntil: 'disponível durante',
      heroClaim: 'Nothing given. Everything earned.',
      manifestoLabel: 'Manifesto',
      manifestoTitle: 'THIS IS NOT<br>FOR EVERYONE',
      manifestoText1: 'Não fazemos roupa só para ficares bem. Fazemos <strong>armadura</strong> para quem aparece todos os dias sem desculpas. Para quem ninguém esperava. Para quem <strong>continua aqui</strong> quando todos já foram embora.',
      manifestoText2: 'Se precisas que alguém te motive, isto não é para ti. Se já estás dentro, <strong>tu sabes</strong>.',
      collectionLabel: 'Coleção',
      dropText: 'Drop 1, a nossa base, "No one is coming": ninguém vai vir fazer isto por ti, vais ter de trabalhar por isso.',
      dropHint: '<span>←→</span> Desliza para o lado para ver mais',
      dropUrgency: 'Disponível durante',
      lookbookLabel: 'NEXT DROP',
      waitlistLabel: 'Lista de espera',
      waitlistSubtitle: 'Reserva a tua peça do DROP 01/XX.<br>Escolhe modelo, cor e tamanho.',
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
  let fallbackLanguage = 'es';

  function readLanguagePreference() {
    try {
      return window.localStorage.getItem('omp_language') || fallbackLanguage;
    } catch (error) {
      return fallbackLanguage;
    }
  }

  function writeLanguagePreference(lang) {
    fallbackLanguage = lang;
    try {
      window.localStorage.setItem('omp_language', lang);
    } catch (error) {
      // Some local previews block storage; language still works for the current visit.
    }
  }

  function applyLanguage(lang) {
    const dictionary = translations[lang] || translations.es;
    currentLanguage = translations[lang] ? lang : 'es';
    document.documentElement.lang = lang;
    if (languageFlag) languageFlag.textContent = dictionary.flag;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (dictionary[key]) el.innerHTML = dictionary[key];
    });
    writeLanguagePreference(lang);
  }

  const savedLanguage = readLanguagePreference();
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

  /* --- Logo Chomp --- */
  const navLogo = document.querySelector('.nav__logo');
  const navMenu = document.getElementById('navMenu');
  const navMenuLinks = navMenu ? Array.from(navMenu.querySelectorAll('a[href^="#"]')) : [];

  function closeNavMenu() {
    navMenu?.classList.remove('active');
    navMenu?.setAttribute('aria-hidden', 'true');
    navLogo?.setAttribute('aria-expanded', 'false');
  }

  navLogo?.addEventListener('click', (e) => {
    e.preventDefault();
    navLogo.classList.remove('nav__logo--chomp');
    void navLogo.offsetWidth;
    navLogo.classList.add('nav__logo--chomp');
    if (navMenu) {
      const isOpen = navMenu.classList.toggle('active');
      navMenu.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
      navLogo.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    }
    window.setTimeout(() => {
      navLogo.classList.remove('nav__logo--chomp');
    }, 260);
  });

  navMenuLinks.forEach(link => {
    link.addEventListener('click', closeNavMenu);
  });

  document.addEventListener('click', (e) => {
    if (e.target.closest('#navLogo') || e.target.closest('#navMenu')) return;
    closeNavMenu();
  });

  if (navMenuLinks.length && 'IntersectionObserver' in window) {
    const navSections = navMenuLinks
      .map(link => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    const navSectionObserver = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;
      navMenuLinks.forEach(link => {
        link.classList.toggle('is-current', link.getAttribute('href') === `#${visible.target.id}`);
      });
    }, {
      threshold: [0.22, 0.48],
      rootMargin: '-22% 0px -54% 0px'
    });

    navSections.forEach(section => navSectionObserver.observe(section));
  }

  /* --- Footer Info Pages --- */
  const legalPages = {
    es: {
      faq: {
        title: 'Preguntas Frecuentes',
        body: '<h3>¿Cómo reservo mi prenda?</h3><p>Elige modelo, color y talla, añade la prenda al carrito y escríbenos por WhatsApp para cerrar disponibilidad y entrega.</p><h3>¿Cuándo sale el próximo drop?</h3><p>DROP 02/XX está marcado para el 30 de mayo a las 12:00, hora de Canarias.</p><h3>¿Hay muchas unidades?</h3><p>No. OMP trabaja por drops limitados para mantener intención, calidad y exclusividad.</p>'
      },
      returns: {
        title: 'Cambios y Devoluciones',
        body: '<p>Aceptamos cambios de talla o modelo si la prenda está sin usar, con etiquetas y en perfecto estado. El plazo de devoluciones es de 14 días desde la entrega.</p><p>Si hay defecto de fabricación, escríbenos con fotos y número de pedido para resolverlo cuanto antes.</p>'
      },
      contact: {
        title: 'Contacto / Atención al Cliente',
        body: '<p>Para pedidos, tallas, colores o cualquier duda, hablamos directo por WhatsApp.</p><p><a href="https://wa.me/34673094993" target="_blank" rel="noopener noreferrer">Abrir WhatsApp: +34 673 094 993</a></p><p>Base: LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Política de Privacidad',
        body: '<p>Usamos tus datos solo para gestionar tu pedido, contactar contigo y confirmar disponibilidad. No vendemos tus datos ni los cedemos para publicidad externa.</p><p>Puedes pedir acceso, corrección o eliminación escribiendo por WhatsApp.</p>'
      },
      terms: {
        title: 'Términos y Condiciones',
        body: '<p>Los productos se venden por disponibilidad de drop. Añadir al carrito no garantiza stock hasta que el pedido quede confirmado por OMP.</p><p>Los precios se muestran en euros con IGIC incluido.</p>'
      },
      reviews: {
        title: 'Clientes Satisfechos',
        body: '<p>Ropa creada para entrenar, moverse y aparecer cuando toca. La comunidad OMP empieza en los boxes, en la calle y en quienes no esperan permiso.</p><p>Pronto añadiremos reseñas reales de compradores del DROP 01/XX.</p>'
      }
    },
    en: {
      faq: {
        title: 'Frequently Asked Questions',
        body: '<h3>How do I reserve a piece?</h3><p>Choose model, color and size, add it to the cart and contact us on WhatsApp to confirm stock and delivery.</p><h3>When is the next drop?</h3><p>DROP 02/XX is scheduled for May 30 at 12:00, Canary Islands time.</p><h3>Are units limited?</h3><p>Yes. OMP works through limited drops to keep intention, quality and exclusivity.</p>'
      },
      returns: {
        title: 'Exchanges and Returns',
        body: '<p>We accept size or model exchanges if the piece is unused, tagged and in perfect condition. The return period is 14 days from delivery.</p><p>If there is a manufacturing issue, send photos and order details so we can solve it quickly.</p>'
      },
      contact: {
        title: 'Contact / Customer Support',
        body: '<p>For orders, sizing, colors or any question, talk to us directly on WhatsApp.</p><p><a href="https://wa.me/34673094993" target="_blank" rel="noopener noreferrer">Open WhatsApp: +34 673 094 993</a></p><p>Based in LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Privacy Policy',
        body: '<p>We use your data only to manage your order, contact you and confirm availability. We do not sell your data or share it for third-party advertising.</p><p>You can request access, correction or deletion through WhatsApp.</p>'
      },
      terms: {
        title: 'Terms and Conditions',
        body: '<p>Products are sold according to drop availability. Adding an item to the cart does not guarantee stock until OMP confirms the order.</p><p>Prices are shown in euros with IGIC included.</p>'
      },
      reviews: {
        title: 'Happy Customers',
        body: '<p>Clothing made to train, move and show up when it counts. The OMP community starts in the box, on the street and with those who do not wait for permission.</p><p>Real DROP 01/XX buyer reviews will be added soon.</p>'
      }
    },
    pt: {
      faq: {
        title: 'Perguntas Frequentes',
        body: '<h3>Como reservo a minha peça?</h3><p>Escolhe modelo, cor e tamanho, adiciona ao carrinho e fala connosco no WhatsApp para confirmar stock e entrega.</p><h3>Quando sai o próximo drop?</h3><p>DROP 02/XX está marcado para 30 de maio às 12:00, hora das Canárias.</p><h3>As unidades são limitadas?</h3><p>Sim. A OMP trabalha por drops limitados para manter intenção, qualidade e exclusividade.</p>'
      },
      returns: {
        title: 'Trocas e Devoluções',
        body: '<p>Aceitamos trocas de tamanho ou modelo se a peça estiver sem uso, com etiquetas e em perfeito estado. O prazo de devoluções é de 14 dias desde a entrega.</p><p>Se houver defeito de fabrico, envia fotos e dados do pedido para resolvermos rapidamente.</p>'
      },
      contact: {
        title: 'Contacto / Apoio ao Cliente',
        body: '<p>Para pedidos, tamanhos, cores ou qualquer dúvida, fala connosco diretamente no WhatsApp.</p><p><a href="https://wa.me/34673094993" target="_blank" rel="noopener noreferrer">Abrir WhatsApp: +34 673 094 993</a></p><p>Base: LPA, Canary Islands.</p>'
      },
      privacy: {
        title: 'Política de Privacidade',
        body: '<p>Usamos os teus dados apenas para gerir o pedido, contactar-te e confirmar disponibilidade. Não vendemos os teus dados nem os cedemos para publicidade externa.</p><p>Podes pedir acesso, correção ou eliminação pelo WhatsApp.</p>'
      },
      terms: {
        title: 'Termos e Condições',
        body: '<p>Os produtos são vendidos conforme disponibilidade do drop. Adicionar ao carrinho não garante stock até confirmação da OMP.</p><p>Os preços são apresentados em euros com IGIC incluído.</p>'
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
  const sellerStats = document.getElementById('sellerStats');
  const sellerStatsGrid = document.getElementById('sellerStatsGrid');
  const sellerStatsClose = document.getElementById('sellerStatsClose');
  const sellerStatsReset = document.getElementById('sellerStatsReset');
  const sellerSales = document.getElementById('sellerSales');
  const sellerSalesTable = document.getElementById('sellerSalesTable');
  const sellerSalesClose = document.getElementById('sellerSalesClose');
  const sellerSalesReset = document.getElementById('sellerSalesReset');
  const sellerManualToggle = document.getElementById('sellerManualToggle');
  const sellerManualSaleForm = document.getElementById('sellerManualSaleForm');
  const sellerManualDrop = document.getElementById('sellerManualDrop');
  const sellerManualModel = document.getElementById('sellerManualModel');
  const sellerManualColor = document.getElementById('sellerManualColor');
  const sellerManualSize = document.getElementById('sellerManualSize');
  const sellerManualClient = document.getElementById('sellerManualClient');
  const sellerManualCode = document.getElementById('sellerManualCode');
  const sellerManualQuantity = document.getElementById('sellerManualQuantity');
  const sellerManualTotal = document.getElementById('sellerManualTotal');
  const sellerCommunity = document.getElementById('sellerCommunity');
  const sellerCommunityTable = document.getElementById('sellerCommunityTable');
  const sellerCommunityClose = document.getElementById('sellerCommunityClose');
  const sellerCommunityRefresh = document.getElementById('sellerCommunityRefresh');
  const peakLeadForm = document.getElementById('peakLeadForm');
  const peakLeadMessage = document.getElementById('peakLeadMessage');
  const peakPhotoForm = document.getElementById('peakPhotoForm');
  const peakPhotoMessage = document.getElementById('peakPhotoMessage');
  const approvedCommunityGrid = document.getElementById('approvedCommunityGrid');

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

  function closeSellerStats() {
    sellerStats?.classList.remove('active');
    sellerStats?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  function closeSellerSales() {
    sellerSales?.classList.remove('active');
    sellerSales?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  function closeSellerCommunity() {
    sellerCommunity?.classList.remove('active');
    sellerCommunity?.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
  }

  /* --- Custom Cursor --- */
  const cursor    = document.querySelector('.cursor');
  const cursorRing = document.querySelector('.cursor-ring');

  if (cursor && cursorRing) {
    let mx = 0, my = 0;
    let cx = 0, cy = 0;
    let clickTimer;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    if (!finePointer) {
      cursor.remove();
      cursorRing.remove();
    } else {
      function placeCursor(x, y) {
        mx = x;
        my = y;
        cursor.style.left = mx + 'px';
        cursor.style.top = my + 'px';
      }

      document.addEventListener('mousemove', (e) => {
        placeCursor(e.clientX, e.clientY);
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
      const hoverElements = document.querySelectorAll('a, button, .product-card');
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

      document.addEventListener('mousedown', () => {
        window.clearTimeout(clickTimer);
        cursor.classList.add('cursor--clicking');
        clickTimer = window.setTimeout(() => {
          cursor.classList.remove('cursor--clicking');
        }, 180);
      });
      document.addEventListener('mouseup', () => {
        clickTimer = window.setTimeout(() => {
          cursor.classList.remove('cursor--clicking');
        }, 80);
      });
    }
  }

  /* --- Navbar Scroll --- */
  const nav = document.getElementById('nav');
  const buyRail = document.getElementById('buyRail');
  const buyRailCart = document.getElementById('buyRailCart');
  const buyRailCount = document.getElementById('buyRailCount');
  const buyRailTotal = document.getElementById('buyRailTotal');
  let scrollTicking = false;

  function updateScrollState() {
    const scrollY = window.scrollY;
    const maxScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const waitlistSection = document.getElementById('waitlist');
    const waitlistRect = waitlistSection?.getBoundingClientRect();
    const isInsideCheckout = waitlistRect
      ? waitlistRect.top < window.innerHeight * 0.78 && waitlistRect.bottom > window.innerHeight * 0.18
      : false;
    document.documentElement.style.setProperty('--scroll-progress', Math.min(1, scrollY / maxScroll));
    if (scrollY > 80) {
      nav?.classList.add('nav--scrolled');
    } else {
      nav?.classList.remove('nav--scrolled');
    }
    buyRail?.classList.toggle('is-visible', scrollY > window.innerHeight * 0.62 && !isInsideCheckout);
    scrollTicking = false;
  }

  window.addEventListener('scroll', () => {
    if (scrollTicking) return;
    scrollTicking = true;
    window.requestAnimationFrame(updateScrollState);
  }, { passive: true });
  updateScrollState();

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
  const liteRevealElements = document.querySelectorAll('.product-card, .instagram-preview__item, .footer__links button, .waitlist__field, .waitlist__perk');
  liteRevealElements.forEach((el, index) => {
    el.classList.add('reveal-lite');
    el.style.setProperty('--reveal-order', index % 8);
  });

  const revealElements = document.querySelectorAll('.reveal, .reveal-lite');

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -8% 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  /* --- Parallax on Manifesto BG --- */
  const manifestoBg = document.querySelector('.manifesto__bg');
  if (manifestoBg && window.matchMedia('(pointer: fine)').matches) {
    let manifestoTicking = false;
    function updateManifestoParallax() {
      const rect = manifestoBg.parentElement.getBoundingClientRect();
      const offset = rect.top * 0.15;
      manifestoBg.style.transform = `translateY(calc(-50% + ${offset}px))`;
      manifestoTicking = false;
    }
    window.addEventListener('scroll', () => {
      if (manifestoTicking) return;
      manifestoTicking = true;
      window.requestAnimationFrame(updateManifestoParallax);
    }, { passive: true });
  }

  /* --- Waitlist Form --- */
  const form = document.getElementById('waitlistForm');
  const success = document.getElementById('waitlistSuccess');
  const summary = document.getElementById('waitlistSummary');
  const orderPreview = document.getElementById('orderPreview');
  const modelSelect = document.getElementById('orderModel');
  const modelOptions = document.getElementById('modelOptions');
  const modelPickerToggle = document.getElementById('modelPickerToggle');
  const selectedModelLabel = document.getElementById('selectedModelLabel');
  const selectedModelMeta = document.getElementById('selectedModelMeta');
  const colorSelect = document.getElementById('orderColor');
  const colorOptions = document.getElementById('colorOptions');
  const colorPickerToggle = document.getElementById('colorPickerToggle');
  const selectedColorSwatch = document.getElementById('selectedColorSwatch');
  const selectedColorLabel = document.getElementById('selectedColorLabel');
  const sizeSelect = document.getElementById('orderSize');
  const discountInput = document.getElementById('discountCode');
  const discountApply = document.getElementById('discountApply');
  const discountMessage = document.getElementById('discountMessage');
  const cartDiscountInput = document.getElementById('cartDiscountCode');
  const cartDiscountApply = document.getElementById('cartDiscountApply');
  const cartDiscountMessage = document.getElementById('cartDiscountMessage');
  const cartToggle = document.getElementById('cartToggle');
  const cartCount = document.getElementById('cartCount');
  const cartNavTotal = document.getElementById('cartNavTotal');
  const cartDrawer = document.getElementById('cartDrawer');
  const cartClose = document.getElementById('cartClose');
  const cartItems = document.getElementById('cartItems');
  const cartEmpty = document.getElementById('cartEmpty');
  const cartSubtotal = document.getElementById('cartSubtotal');
  const cartDiscountRow = document.getElementById('cartDiscountRow');
  const cartDiscount = document.getElementById('cartDiscount');
  const cartTax = document.getElementById('cartTax');
  const cartTotal = document.getElementById('cartTotal');
  const cartDrawerTotal = document.getElementById('cartDrawerTotal');
  const cartClear = document.getElementById('cartClear');
  const cartCheckout = document.getElementById('cartCheckout');
  const cartCheckoutHint = document.getElementById('cartCheckoutHint');
  const cartStepData = document.getElementById('cartStepData');
  const cartStepWhatsapp = document.getElementById('cartStepWhatsapp');
  const cartToast = document.getElementById('cartToast');
  const cartCustomerForm = document.getElementById('cartCustomerForm');
  const cartCustomerName = document.getElementById('cartCustomerName');
  const cartCustomerEmail = document.getElementById('cartCustomerEmail');
  const cartCustomerPhone = document.getElementById('cartCustomerPhone');
  const IGIC_RATE = 0.07;

  const colorsByModel = {
    Oversized: [
      { name: 'Jade', hex: '#12b3a1' },
      { name: 'Azul zen', hex: '#5c5ba1' },
      { name: 'Blanco', hex: '#fafafa' },
      { name: 'Negro', hex: '#101010' },
      { name: 'Naranja', hex: '#f23624' },
      { name: 'Ebano', hex: '#343c42' },
      { name: 'Verde mist', hex: '#d7dfc9' }
    ],
    'Crop top': [
      { name: 'Blanco', hex: '#fafafa' },
      { name: 'Negro', hex: '#101010' },
      { name: 'Rosa', hex: '#f6539a' },
      { name: 'Turquesa', hex: '#75adba' }
    ],
    Hoodie: [
      { name: 'Negra', hex: '#101010' },
      { name: 'Blanca', hex: '#fafafa' },
      { name: 'Ebano', hex: '#aaa7a3' },
      { name: 'Azul tormenta', hex: '#5f7482' },
      { name: 'Marino', hex: '#012653' },
      { name: 'Blanco vintage', hex: '#eee5e3' }
    ]
  };

  const pricesByModel = {
    Oversized: 22,
    'Crop top': 22,
    Hoodie: 35,
    Bull: 22,
    Chow: 22,
    Dominica: 22,
    Otto: 35
  };

  const costsByModel = {
    Oversized: 12,
    'Crop top': 12,
    Hoodie: 19,
    Bull: 12,
    Chow: 12,
    Dominica: 12,
    Otto: 19
  };

  const modelCards = {
    Oversized: {
      name: 'Oversized',
      image: 'assets/products/oversized.jpg',
      meta: 'Corte amplio · Drop 01/XX'
    },
    'Crop top': {
      name: 'Crop top',
      image: 'assets/products/crop-top.jpg',
      meta: 'Fit corto · Drop 01/XX'
    },
    Hoodie: {
      name: 'Hoodie',
      image: 'assets/products/hoodie.jpg',
      meta: 'Capucha premium · Drop 01/XX'
    }
  };

  const discountCodes = new Set([
    'JOELO10',
    'CABELLO10',
    'LUCHINI10',
    'KEVINAGRE10',
    '92810',
    'CLAUDIA10',
    'QUEROLI10',
    'GALVAN10',
    'GAROLI10',
    'DOMPU10',
    'SALAN10'
  ]);
  const DISCOUNT_RATE = 0.10;

  function formatCurrencyText(value) {
    const amount = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
    return `${amount} €`;
  }

  function formatCurrencyHtml(value) {
    const amount = new Intl.NumberFormat('es-ES', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(value);
    return `<span class="currency-amount">${amount}</span> <span class="currency-symbol" aria-label="euros">&euro;</span>`;
  }

  function updateColorOptions() {
    if (!modelSelect || !colorSelect) return;
    const colors = colorsByModel[modelSelect.value] || [];
    if (!modelSelect.value) {
      colorSelect.innerHTML = '<option value="">Elige color</option>';
      renderColorButtons([]);
      syncSelectedColor('');
      return;
    }
    colorSelect.innerHTML = colors
      .map(color => `<option value="${color.name}">${color.name}</option>`)
      .join('');
    renderColorButtons(colors);
    syncSelectedColor(colors[0]?.name);
  }

  function showModelOptions() {
    modelOptions?.classList.add('model-options--visible');
    modelPickerToggle?.setAttribute('aria-expanded', 'true');
  }

  function hideModelOptions() {
    modelOptions?.classList.remove('model-options--visible');
    modelPickerToggle?.setAttribute('aria-expanded', 'false');
  }

  function toggleModelOptions() {
    if (modelOptions?.classList.contains('model-options--visible')) {
      hideModelOptions();
    } else {
      showModelOptions();
    }
  }

  function syncSelectedModel(modelName = modelSelect?.value) {
    if (!modelSelect) return;
    if (!modelName) {
      modelSelect.value = '';
      if (selectedModelLabel) selectedModelLabel.textContent = 'Oversized · Crop top · Hoodie';
      if (selectedModelMeta) selectedModelMeta.textContent = '';
      modelOptions?.querySelectorAll('.model-option').forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-selected', 'false');
      });
      updateColorOptions();
      return;
    }
    modelSelect.value = modelName;
    const model = modelCards[modelName];
    if (selectedModelLabel && model) {
      selectedModelLabel.textContent = model.name;
    }
    if (selectedModelMeta) {
      selectedModelMeta.textContent = '';
    }
    modelOptions?.querySelectorAll('.model-option').forEach(option => {
      option.classList.toggle('active', option.dataset.model === modelSelect.value);
      option.setAttribute('aria-selected', option.dataset.model === modelSelect.value ? 'true' : 'false');
    });
    updateColorOptions();
  }

  function renderModelButtons() {
    if (!modelOptions) return;
    const models = Object.keys(modelCards);
    modelOptions.innerHTML = models.map((modelName, index) => {
      const model = modelCards[modelName];
      const price = formatCurrencyHtml(pricesByModel[modelName] || 0);
      return `
        <button class="model-option${index === 0 ? ' active' : ''}" type="button" role="option" data-model="${escapeHtml(modelName)}" aria-label="Elegir modelo ${escapeHtml(model.name)}" aria-selected="${index === 0 ? 'true' : 'false'}">
          <span class="model-option__media"><img src="${escapeHtml(model.image)}" width="1200" height="653" alt="${escapeHtml(model.name)}" loading="lazy" decoding="async"></span>
          <span class="model-option__copy">
            <strong>${escapeHtml(model.name)}</strong>
            <small>${escapeHtml(model.meta)}</small>
            <em>${price}</em>
          </span>
        </button>
      `;
    }).join('');
  }

  function showColorOptions() {
    colorOptions?.classList.add('color-options--visible');
    colorPickerToggle?.setAttribute('aria-expanded', 'true');
  }

  function hideColorOptions() {
    colorOptions?.classList.remove('color-options--visible');
    colorPickerToggle?.setAttribute('aria-expanded', 'false');
  }

  function toggleColorOptions() {
    if (colorOptions?.classList.contains('color-options--visible')) {
      hideColorOptions();
    } else {
      showColorOptions();
    }
  }

  function syncSelectedColor(colorName = colorSelect?.value) {
    if (!colorSelect) return;
    if (!colorName) {
      colorSelect.value = '';
      if (selectedColorSwatch) selectedColorSwatch.style.setProperty('--swatch', 'transparent');
      if (selectedColorLabel) selectedColorLabel.textContent = 'Elige color';
      colorOptions?.querySelectorAll('.color-option').forEach(option => {
        option.classList.remove('active');
        option.setAttribute('aria-selected', 'false');
      });
      return;
    }
    colorSelect.value = colorName;
    const colors = colorsByModel[modelSelect?.value] || [];
    const color = colors.find(item => item.name === colorName) || colors[0];
    if (selectedColorSwatch && color) {
      selectedColorSwatch.style.setProperty('--swatch', color.hex);
    }
    if (selectedColorLabel && color) {
      selectedColorLabel.textContent = color.name;
    }
    colorOptions?.querySelectorAll('.color-option').forEach(option => {
      option.classList.toggle('active', option.dataset.color === colorSelect.value);
      option.setAttribute('aria-selected', option.dataset.color === colorSelect.value ? 'true' : 'false');
    });
  }

  function renderColorButtons(colors) {
    if (!colorOptions) return;
    if (!colors.length) {
      colorOptions.innerHTML = '<p class="picker-empty">Elige primero un modelo.</p>';
      return;
    }
    colorOptions.innerHTML = colors.map((color, index) => `
      <button class="color-option${index === 0 ? ' active' : ''}" type="button" role="option" data-color="${escapeHtml(color.name)}" aria-label="Elegir color ${escapeHtml(color.name)}" aria-selected="${index === 0 ? 'true' : 'false'}" title="${escapeHtml(color.name)}">
        <span class="color-option__swatch" style="--swatch:${escapeHtml(color.hex)}"></span>
        <span class="color-option__name">${escapeHtml(color.name)}</span>
      </button>
    `).join('');
  }

  modelOptions?.addEventListener('click', (e) => {
    const button = e.target.closest('[data-model]');
    if (!button || !modelSelect) return;
    syncSelectedModel(button.dataset.model);
    hideModelOptions();
  });

  colorOptions?.addEventListener('click', (e) => {
    const button = e.target.closest('[data-color]');
    if (!button || !colorSelect) return;
    syncSelectedColor(button.dataset.color);
    hideColorOptions();
  });

  colorSelect?.addEventListener('change', () => {
    syncSelectedColor();
    hideColorOptions();
  });

  colorPickerToggle?.addEventListener('click', toggleColorOptions);
  colorPickerToggle?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideColorOptions();
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showColorOptions();
    }
  });
  modelPickerToggle?.addEventListener('click', toggleModelOptions);
  modelPickerToggle?.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModelOptions();
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      showModelOptions();
    }
  });
  document.addEventListener('click', (e) => {
    if (modelOptions?.classList.contains('model-options--visible')) {
      if (!e.target.closest('#modelPickerToggle') && !e.target.closest('#modelOptions')) {
        hideModelOptions();
      }
    }
    if (!colorOptions?.classList.contains('color-options--visible')) return;
    if (e.target.closest('#colorPickerToggle') || e.target.closest('#colorOptions')) return;
    hideColorOptions();
  });

  if (modelSelect) {
    renderModelButtons();
    syncSelectedModel('');
    modelSelect.addEventListener('change', () => syncSelectedModel());
  }

  /* --- Next Drop Countdown --- */
  const countdownTarget = new Date('2026-05-30T12:00:00+01:00').getTime();
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

  /* --- Drop Calendar Month Navigation --- */
  const calendarMonthLabel = document.getElementById('calendarMonthLabel');
  const calendarYearLabel = document.getElementById('calendarYearLabel');
  const calendarDays = document.getElementById('dropCalendarDays');
  const calendarPrev = document.querySelector('[data-calendar-prev]');
  const calendarNext = document.querySelector('[data-calendar-next]');
  const calendarMonths = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const dropRanges = [
    { start: '2026-05-04', end: '2026-05-26', className: 'drop-day--one' },
    { start: '2026-05-30', end: '2026-06-28', className: 'drop-day--two' }
  ];
  let visibleCalendarMonth = new Date(2026, 4, 1);

  function formatDateId(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function getDropClass(dateId) {
    const range = dropRanges.find(item => dateId >= item.start && dateId <= item.end);
    if (!range) return '';
    const edge = `${dateId === range.start ? ' drop-day--start' : ''}${dateId === range.end ? ' drop-day--end' : ''}`;
    return `drop-day ${range.className}${edge}`;
  }

  function renderDropCalendar() {
    if (!calendarDays || !calendarMonthLabel || !calendarYearLabel) return;
    const year = visibleCalendarMonth.getFullYear();
    const month = visibleCalendarMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const leadingDays = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const cells = [];

    for (let i = 0; i < leadingDays; i += 1) {
      cells.push('<span></span>');
    }

    for (let day = 1; day <= daysInMonth; day += 1) {
      const date = new Date(year, month, day);
      const dateId = formatDateId(date);
      const className = getDropClass(dateId);
      cells.push(`<time class="${className}" datetime="${dateId}">${day}</time>`);
    }

    while (cells.length % 7 !== 0) {
      cells.push('<span></span>');
    }

    calendarMonthLabel.textContent = calendarMonths[month];
    calendarYearLabel.textContent = year;
    calendarDays.innerHTML = cells.join('');
  }

  calendarPrev?.addEventListener('click', () => {
    visibleCalendarMonth = new Date(visibleCalendarMonth.getFullYear(), visibleCalendarMonth.getMonth() - 1, 1);
    renderDropCalendar();
  });

  calendarNext?.addEventListener('click', () => {
    visibleCalendarMonth = new Date(visibleCalendarMonth.getFullYear(), visibleCalendarMonth.getMonth() + 1, 1);
    renderDropCalendar();
  });

  renderDropCalendar();

  /* --- Drop 01 Deadline Countdown --- */
  const dropDeadlineTarget = new Date('2026-05-26T19:00:00+01:00').getTime();
  const dropDeadlineNodes = document.querySelectorAll('[data-drop-deadline-countdown]');

  function updateDropDeadlineCountdown() {
    if (!dropDeadlineNodes.length) return;
    const distance = Math.max(0, dropDeadlineTarget - Date.now());
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);
    const label = [
      ['D', days],
      ['H', hours],
      ['M', minutes],
      ['S', seconds]
    ].map(([unit, value]) => `<span><b>${padTime(value)}</b><small>${unit}</small></span>`).join('');
    dropDeadlineNodes.forEach(node => {
      node.innerHTML = label;
    });
  }

  updateDropDeadlineCountdown();
  window.setInterval(updateDropDeadlineCountdown, 1000);

  /* --- Cart --- */
  const cartMemory = {
    omp_cart: '[]',
    omp_discount: '',
    omp_discount_usage: '{}',
    omp_sales_history: '[]',
    omp_last_checkout_signature: ''
  };

  function canUseStorage() {
    try {
      const key = '__omp_storage_test__';
      window.localStorage.setItem(key, '1');
      window.localStorage.removeItem(key);
      return true;
    } catch (error) {
      return false;
    }
  }

  const storageAvailable = canUseStorage();

  function getStoredValue(key, fallback = '') {
    if (!storageAvailable) return cartMemory[key] ?? fallback;
    return window.localStorage.getItem(key) ?? fallback;
  }

  function setStoredValue(key, value) {
    if (!storageAvailable) {
      cartMemory[key] = value;
      return;
    }
    window.localStorage.setItem(key, value);
  }

  function removeStoredValue(key) {
    if (!storageAvailable) {
      cartMemory[key] = key === 'omp_cart' || key === 'omp_sales_history' ? '[]' : key === 'omp_discount_usage' ? '{}' : '';
      return;
    }
    window.localStorage.removeItem(key);
  }

  function readDiscountUsage() {
    try {
      const usage = JSON.parse(getStoredValue('omp_discount_usage', '{}'));
      return usage && typeof usage === 'object' && !Array.isArray(usage) ? usage : {};
    } catch (error) {
      return {};
    }
  }

  function writeDiscountUsage(usage) {
    setStoredValue('omp_discount_usage', JSON.stringify(usage || {}));
  }

  function trackDiscountConfirmation(code = readCartDiscount()) {
    if (!code || getDiscountRate(code) <= 0 || !readCart().length || !isCustomerReady()) return;

    const usage = readDiscountUsage();
    const now = new Date().toISOString();
    usage[code] = {
      count: Number(usage[code]?.count || 0) + 1,
      lastUsedAt: now
    };
    writeDiscountUsage(usage);
    renderSellerStats();

    const payload = {
      code,
      confirmedAt: now,
      total: cartTotal?.textContent?.trim() || '',
      source: window.location.hostname || 'local-preview'
    };

    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' });
      if (navigator.sendBeacon && navigator.sendBeacon('/api/discount-usage', blob)) return;
      fetch('/api/discount-usage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        keepalive: true
      }).catch(() => {});
    } catch (error) {
      // The local counter above is the safe fallback if a private webhook is not configured yet.
    }
  }

  function renderSellerStats() {
    if (!sellerStatsGrid) return;
    const usage = readDiscountUsage();
    const rows = Array.from(discountCodes).sort().map(code => {
      const item = usage[code] || {};
      const count = Number(item.count || 0);
      const lastDate = item.lastUsedAt
        ? new Date(item.lastUsedAt).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' })
        : 'Sin usos';
      return `
        <article class="seller-stats__row">
          <strong>${escapeHtml(code)}</strong>
          <span>${count} usos</span>
          <small>${escapeHtml(lastDate)}</small>
        </article>
      `;
    });
    sellerStatsGrid.innerHTML = rows.join('');
  }

  function openSellerStats() {
    renderSellerStats();
    sellerStats?.classList.add('active');
    sellerStats?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  function readSalesHistory() {
    try {
      const sales = JSON.parse(getStoredValue('omp_sales_history', '[]'));
      return Array.isArray(sales) ? sales : [];
    } catch (error) {
      return [];
    }
  }

  function writeSalesHistory(sales) {
    setStoredValue('omp_sales_history', JSON.stringify(Array.isArray(sales) ? sales : []));
  }

  let sellerSalesLoading = false;
  let sellerSalesDropFilter = getStoredValue('omp_seller_drop_filter', 'DROP 01/XX');
  let editingSalePurchaseId = '';

  function getSellerApiKey() {
    const params = new URLSearchParams(window.location.search);
    const incomingKey = params.get('erpKey');
    if (incomingKey) {
      setStoredValue('omp_erp_key', incomingKey);
      return incomingKey;
    }
    return getStoredValue('omp_erp_key', '');
  }

  function salesApiOptions(options = {}) {
    const adminKey = getSellerApiKey();
    return {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(adminKey ? { 'X-OMP-Admin-Key': adminKey } : {}),
        ...(options.headers || {})
      }
    };
  }

  function communityApiOptions(options = {}) {
    return salesApiOptions(options);
  }

  async function fetchCommunity(admin = false) {
    const url = admin ? '/api/community' : '/api/community';
    const response = await fetch(url, admin
      ? communityApiOptions({ cache: 'no-store' })
      : { cache: 'no-store' });
    if (!response.ok) throw new Error('community_fetch_failed');
    return response.json();
  }

  async function postCommunity(payload) {
    const response = await fetch('/api/community', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    if (!response.ok) throw new Error('community_post_failed');
    return response.json();
  }

  async function patchCommunitySubmission(id, approved) {
    const response = await fetch('/api/community', communityApiOptions({
      method: 'PATCH',
      body: JSON.stringify({ id, approved })
    }));
    if (!response.ok) throw new Error('community_patch_failed');
    return response.json();
  }

  async function deleteCommunitySubmission(id) {
    const response = await fetch('/api/community', communityApiOptions({
      method: 'DELETE',
      body: JSON.stringify({ id })
    }));
    if (!response.ok) throw new Error('community_delete_failed');
  }

  function renderApprovedCommunity(submissions = []) {
    if (!approvedCommunityGrid) return;
    const approved = submissions.filter(item => item.photo).slice(0, 6);
    approvedCommunityGrid.innerHTML = approved.map(item => `
      <article>
        <img src="${escapeHtml(item.photo)}" alt="Foto aprobada de la comunidad OMP subida por ${escapeHtml(item.name || item.handle || 'cliente')}" loading="lazy" decoding="async">
        <span>${escapeHtml(item.handle || item.name || 'OMP')}</span>
      </article>
    `).join('');
  }

  async function loadApprovedCommunity() {
    try {
      const data = await fetchCommunity(false);
      renderApprovedCommunity(Array.isArray(data.submissions) ? data.submissions : []);
    } catch (error) {
      renderApprovedCommunity([]);
    }
  }

  function renderSellerCommunity(data = {}, status = '') {
    if (!sellerCommunityTable) return;
    const submissions = Array.isArray(data.submissions) ? data.submissions : [];
    const leads = Array.isArray(data.leads) ? data.leads : [];
    const rows = submissions.map(item => `
      <article class="seller-community__row" data-community-id="${escapeHtml(item.id)}">
        <img src="${escapeHtml(item.photo)}" alt="Foto enviada por ${escapeHtml(item.name || item.handle || 'cliente')}">
        <div>
          <strong>${escapeHtml(item.handle || item.name || 'Sin nombre')}</strong>
          <span>${item.approved ? 'Aprobada' : 'Pendiente'} · ${escapeHtml(new Date(item.createdAt || Date.now()).toLocaleString('es-ES', { dateStyle: 'short', timeStyle: 'short' }))}</span>
        </div>
        <div class="seller-community__actions">
          <button type="button" data-community-approve="${item.approved ? 'false' : 'true'}">${item.approved ? 'Ocultar' : 'Aprobar'}</button>
          <button type="button" data-community-delete>Eliminar</button>
        </div>
      </article>
    `).join('');
    const leadRows = leads.slice(0, 40).map(item => `
      <article class="seller-community__row">
        <div></div>
        <div>
          <strong>${escapeHtml(item.name || 'Lead')}</strong>
          <span>${escapeHtml(item.email || '-')} · ${escapeHtml(item.phone || '-')} · ${(item.channels || []).map(escapeHtml).join(', ') || 'sin canal'}</span>
        </div>
        <div class="seller-community__actions"><span>${escapeHtml(new Date(item.createdAt || Date.now()).toLocaleDateString('es-ES'))}</span></div>
      </article>
    `).join('');

    sellerCommunityTable.innerHTML = `
      ${status ? `<p class="seller-sales__status">${escapeHtml(status)}</p>` : ''}
      <p class="seller-stats__note">${submissions.length} fotos enviadas · ${leads.length} altas en Únete al Peak.</p>
      ${rows || '<p class="seller-community__empty">Todavía no hay fotos pendientes.</p>'}
      <p class="seller-sales__manual-title">Altas Únete al Peak</p>
      ${leadRows || '<p class="seller-community__empty">Todavía no hay altas.</p>'}
    `;
  }

  async function loadSellerCommunity() {
    if (!sellerCommunityTable) return;
    sellerCommunityTable.innerHTML = '<p class="seller-community__empty">Cargando comunidad...</p>';
    try {
      const data = await fetchCommunity(true);
      renderSellerCommunity(data, 'Sincronizado con comunidad.');
      renderApprovedCommunity((data.submissions || []).filter(item => item.approved));
    } catch (error) {
      renderSellerCommunity({}, 'No se pudo sincronizar comunidad ahora.');
    }
  }

  function openSellerCommunity() {
    loadSellerCommunity();
    sellerCommunity?.classList.add('active');
    sellerCommunity?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  async function fetchSalesHistory() {
    const response = await fetch('/api/sales', salesApiOptions({ cache: 'no-store' }));
    if (!response.ok) throw new Error('sales_fetch_failed');
    const data = await response.json();
    const sales = Array.isArray(data.sales) ? data.sales : [];
    writeSalesHistory(sales);
    return sales;
  }

  function postSalesHistory(rows) {
    if (!rows.length) return;
    const payload = JSON.stringify({ sales: rows });
    fetch('/api/sales', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      keepalive: true
    }).catch(() => {
      try {
        const blob = new Blob([payload], { type: 'application/json' });
        if (navigator.sendBeacon) navigator.sendBeacon('/api/sales', blob);
      } catch (error) {
        fetch('/api/sales', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
          keepalive: true
        }).catch(() => {});
      }
    });
  }

  function retryPendingSales() {
    const pending = readSalesHistory().filter(sale => sale && sale.id && sale.model && sale.color && sale.size && sale.client);
    if (!pending.length) return;
    fetchSalesHistory().then(remoteSales => {
      const remoteIds = new Set(remoteSales.map(sale => sale.id));
      const missingRows = pending.filter(sale => !remoteIds.has(sale.id)).slice(0, 50);
      if (missingRows.length) postSalesHistory(missingRows);
    }).catch(() => {
      fetch('/api/sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sales: pending.slice(0, 50) }),
        keepalive: true
      }).catch(() => {});
    });
  }

  async function patchSaleStatus(id, status) {
    const response = await fetch('/api/sales', salesApiOptions({
      method: 'PATCH',
      body: JSON.stringify({ id, ...status })
    }));
    if (!response.ok) throw new Error('sale_patch_failed');
  }

  async function patchSalePaid(id, paid) {
    return patchSaleStatus(id, { paid });
  }

  async function patchSaleManufactured(id, manufactured) {
    return patchSaleStatus(id, { manufactured });
  }

  async function patchSaleDelivered(id, delivered) {
    return patchSaleStatus(id, { delivered });
  }

  async function patchSaleDeliveryDetails(id, deliveryDetails) {
    return patchSaleStatus(id, { deliveryDetails });
  }

  async function patchSaleField(id, field, value) {
    return patchSaleStatus(id, { [field]: value });
  }

  async function patchSaleTotal(id, total) {
    const response = await fetch('/api/sales', salesApiOptions({
      method: 'PATCH',
      body: JSON.stringify({ id, total })
    }));
    if (!response.ok) throw new Error('sale_total_failed');
  }

  async function createManualSale(sale) {
    const response = await fetch('/api/sales', salesApiOptions({
      method: 'POST',
      body: JSON.stringify({ sales: [sale] })
    }));
    if (!response.ok) throw new Error('manual_sale_failed');
    return response.json();
  }

  async function deleteSaleRow(id) {
    const response = await fetch('/api/sales', salesApiOptions({
      method: 'DELETE',
      body: JSON.stringify({ id })
    }));
    if (!response.ok) throw new Error('sale_delete_failed');
  }

  function getCartTotals() {
    const cart = readCart();
    const subtotal = cart.reduce((sum, item) => sum + getLineSubtotal(item), 0);
    const discountTotal = cart.reduce((sum, item) => sum + getLineDiscount(item), 0);
    const total = Math.max(0, subtotal - discountTotal);
    return { cart, subtotal, discountTotal, total };
  }

  function getSaleUnitCost(model) {
    const normalized = String(model || '').toLowerCase();
    return costsByModel[model] || (
      normalized.includes('hoodie') || normalized.includes('hoddie') || normalized.includes('otto')
        ? 19
        : normalized.includes('crop') || normalized.includes('oversized') || normalized.includes('dominica') || normalized.includes('bull') || normalized.includes('chow')
          ? 12
          : 0
    );
  }

  function getSaleCost(sale) {
    const quantity = Number(sale.quantity || 1);
    return Number(sale.cost ?? (Number(sale.unitCost ?? getSaleUnitCost(sale.model)) * quantity));
  }

  function getSaleProfit(sale) {
    return Number(sale.total || 0) - getSaleCost(sale);
  }

  function getSaleBuyerName(sale) {
    return String(sale.client || '').trim();
  }

  function getSaleDrop(sale) {
    return String(sale.drop || 'DROP 01/XX').trim() || 'DROP 01/XX';
  }

  function getSaleTimestamp(sale) {
    const timestamp = new Date(sale.createdAt || 0).getTime();
    return Number.isFinite(timestamp) ? timestamp : 0;
  }

  function getSaleStatusPriority(sale) {
    if (sale.paid && sale.delivered) return 3;
    if (sale.delivered) return 0;
    if (sale.paid) return 1;
    return 2;
  }

  function formatSaleDateTime(sale) {
    const timestamp = getSaleTimestamp(sale);
    if (!timestamp) return '-';
    return new Date(timestamp).toLocaleString('es-ES', {
      dateStyle: 'short',
      timeStyle: 'short'
    });
  }

  function formatSaleDateInput(sale) {
    const timestamp = getSaleTimestamp(sale);
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const pad = value => String(value).padStart(2, '0');
    return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
  }

  function dateInputToIso(value) {
    if (!value) return '';
    const date = new Date(value);
    return Number.isFinite(date.getTime()) ? date.toISOString() : '';
  }

  function saleEditableInput(sale, field, label, type = 'text') {
    const value = field === 'createdAt' ? formatSaleDateInput(sale) : sale[field] ?? '';
    return `
      <label class="seller-sales__editable" data-label="${escapeHtml(label)}">
        <input type="${type}" value="${escapeHtml(value)}" data-sale-field="${escapeHtml(field)}" aria-label="${escapeHtml(label)}">
      </label>
    `;
  }

  function salePurchaseControl(sale) {
    if (editingSalePurchaseId === sale.id) {
      return saleEditableInput(sale, 'createdAt', 'Compra', 'datetime-local');
    }
    return `
      <div class="seller-sales__purchase" data-label="Compra">
        <span>${escapeHtml(formatSaleDateTime(sale))}</span>
        <button type="button" data-sale-edit-purchase>Editar compra</button>
      </div>
    `;
  }

  function getSaleDateKey(sale) {
    const timestamp = getSaleTimestamp(sale);
    if (!timestamp) return '';
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function renderSellerSalesCalendar(sales) {
    const datedSales = sales.filter(sale => getSaleTimestamp(sale));
    const baseDate = datedSales.length
      ? new Date(Math.max(...datedSales.map(sale => getSaleTimestamp(sale))))
      : new Date();
    const year = baseDate.getFullYear();
    const month = baseDate.getMonth();
    const monthLabel = baseDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' });
    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const offset = (firstDay.getDay() + 6) % 7;
    const counts = sales.reduce((acc, sale) => {
      const key = getSaleDateKey(sale);
      if (key) acc[key] = (acc[key] || 0) + 1;
      return acc;
    }, {});
    const cells = [];
    for (let index = 0; index < offset; index += 1) {
      cells.push('<span class="seller-calendar__day seller-calendar__day--empty"></span>');
    }
    for (let day = 1; day <= daysInMonth; day += 1) {
      const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const count = counts[key] || 0;
      cells.push(`
        <span class="seller-calendar__day ${count ? 'seller-calendar__day--active' : ''}" title="${count ? `${count} pedido${count === 1 ? '' : 's'}` : 'Sin pedidos'}">
          <b>${day}</b>
          ${count ? `<em>${count}</em>` : ''}
        </span>
      `);
    }
    return `
      <section class="seller-calendar" aria-label="Calendario de pedidos">
        <div class="seller-calendar__head">
          <strong>Calendario pedidos</strong>
          <span>${escapeHtml(monthLabel)}</span>
        </div>
        <div class="seller-calendar__week" aria-hidden="true">
          <span>L</span><span>M</span><span>X</span><span>J</span><span>V</span><span>S</span><span>D</span>
        </div>
        <div class="seller-calendar__grid">
          ${cells.join('')}
        </div>
      </section>
    `;
  }

  function sortSalesForDisplay(sales) {
    return [...sales].sort((a, b) => {
      const byStatus = getSaleStatusPriority(a) - getSaleStatusPriority(b);
      if (byStatus) return byStatus;

      const aTimestamp = getSaleTimestamp(a);
      const bTimestamp = getSaleTimestamp(b);
      if (getSaleStatusPriority(a) === 2 && aTimestamp && bTimestamp && aTimestamp !== bTimestamp) {
        return bTimestamp - aTimestamp;
      }
      if (getSaleStatusPriority(a) === 2 && aTimestamp !== bTimestamp) {
        return bTimestamp - aTimestamp;
      }

      const byBuyer = getSaleBuyerName(a).localeCompare(getSaleBuyerName(b), 'es', {
        sensitivity: 'base',
        numeric: true
      });
      if (byBuyer) return byBuyer;

      return getSaleTimestamp(b) - getSaleTimestamp(a);
    });
  }

  function getColorHex(model, colorName) {
    const normalized = String(colorName || '').toLowerCase();
    const namedColors = {
      'azul lavado': '#7aaebd',
      'azul tormenta': '#607989',
      'azul zen': '#5b5aa3',
      blanca: '#ffffff',
      blanco: '#ffffff',
      coral: '#ff6b6b',
      ebano: '#343c43',
      ébano: '#343c43',
      gris: '#a8a5a0',
      'gris ebano': '#66615c',
      'gris ébano': '#66615c',
      'gris piedra': '#b4b0aa',
      jade: '#11b6a5',
      marino: '#001f46',
      negra: '#000000',
      negro: '#000000',
      rosa: '#f35699',
      'rosa lady fluor': '#ff4fa0',
      'verde mist': '#d1dbc2'
    };
    if (namedColors[normalized]) return namedColors[normalized];
    const colors = colorsByModel[model] || Object.values(colorsByModel).flat();
    return colors.find(color => color.name.toLowerCase() === normalized)?.hex || '#f4f4f4';
  }

  function renderSellerInventorySummary(sales) {
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    const grouped = sales.reduce((acc, sale) => {
      const model = sale.model || 'Producto';
      const quantity = Number(sale.quantity || 1);
      if (!acc[model]) {
        acc[model] = {
          model,
          total: 0,
          colors: {},
          sizes: {}
        };
      }
      acc[model].total += quantity;
      acc[model].colors[sale.color || 'Sin color'] = (acc[model].colors[sale.color || 'Sin color'] || 0) + quantity;
      acc[model].sizes[sale.size || '-'] = (acc[model].sizes[sale.size || '-'] || 0) + quantity;
      return acc;
    }, {});

    return Object.values(grouped).map(item => {
      const colorChips = Object.entries(item.colors)
        .sort((a, b) => b[1] - a[1])
        .map(([color, count]) => `
          <span class="seller-inventory__color" title="${escapeHtml(color)}">
            <b>${count}</b>
            <i style="--swatch:${escapeHtml(getColorHex(item.model, color))}"></i>
            <small>${escapeHtml(color)}</small>
          </span>
        `).join('');
      const sizeChips = sizes
        .filter(size => item.sizes[size])
        .map(size => `
          <span class="seller-inventory__size">
            <b>${escapeHtml(size)}</b>
            <small>${item.sizes[size]}</small>
          </span>
        `).join('');
      const otherSizes = Object.entries(item.sizes)
        .filter(([size]) => !sizes.includes(size))
        .map(([size, count]) => `
          <span class="seller-inventory__size">
            <b>${escapeHtml(size)}</b>
            <small>${count}</small>
          </span>
        `).join('');
      return `
        <article class="seller-inventory__row">
          <div class="seller-inventory__model">
            <strong>${escapeHtml(item.model)}</strong>
            <span>${item.total} uds vendidas</span>
          </div>
          <div class="seller-inventory__colors" aria-label="Colores vendidos">${colorChips}</div>
          <div class="seller-inventory__sizes" aria-label="Tallas vendidas">${sizeChips}${otherSizes}</div>
        </article>
      `;
    }).join('');
  }

  function renderSellerCodeUsage(sales) {
    const usage = sales.reduce((acc, sale) => {
      const code = String(sale.code || '').trim().toUpperCase();
      if (!code) return acc;
      const quantity = Number(sale.quantity || 1);
      if (!acc[code]) {
        acc[code] = {
          code,
          quantity: 0,
          orders: new Set(),
          total: 0
        };
      }
      acc[code].quantity += quantity;
      acc[code].orders.add(sale.orderId || sale.id);
      acc[code].total += Number(sale.total || 0);
      return acc;
    }, {});

    const knownRows = Array.from(discountCodes).sort().map(code => usage[code] || {
      code,
      quantity: 0,
      orders: new Set(),
      total: 0
    });
    const extraRows = Object.values(usage)
      .filter(item => !discountCodes.has(item.code))
      .sort((a, b) => b.quantity - a.quantity);
    const rows = [...knownRows, ...extraRows];

    return rows.map(item => `
      <article class="seller-code-usage__card ${item.quantity > 0 ? 'seller-code-usage__card--active' : ''}">
        <strong>${escapeHtml(item.code)}</strong>
        <span>${item.quantity} usos</span>
        <small>${item.orders.size} pedidos · ${formatCurrencyHtml(item.total)}</small>
      </article>
    `).join('');
  }

  function createCheckoutSignature(cart, customer, code, total) {
    return JSON.stringify({
      cart: cart.map(item => ({
        model: item.model,
        color: item.color,
        size: item.size,
        quantity: Number(item.quantity || 1),
        price: Number(item.price || 0)
      })),
      customer: {
        name: customer.name,
        email: customer.email,
        phone: customer.phone
      },
      code: getDiscountRate(code) > 0 ? code : '',
      total: Number(total || 0)
    });
  }

  function recordSaleConfirmation() {
    const { cart, total } = getCartTotals();
    if (!cart.length || !isCustomerReady()) return false;
    const customer = readCustomerDetails();
    const code = readCartDiscount();
    const checkoutSignature = createCheckoutSignature(cart, customer, code, total);
    if (getStoredValue('omp_last_checkout_signature', '') === checkoutSignature) {
      return false;
    }
    const now = new Date().toISOString();
    const saleId = `sale-${Date.now()}-${Math.random().toString(16).slice(2)}`;
    const discountRate = getDiscountRate(code);
    const rows = cart.map((item, index) => {
      const lineSubtotal = getLineSubtotal(item);
      const lineTotal = Math.max(0, lineSubtotal - (lineSubtotal * discountRate));
      return ({
      id: `${saleId}-${index}`,
      orderId: saleId,
      drop: 'DROP 01/XX',
      createdAt: now,
      model: item.model,
      color: item.color,
      size: item.size,
      quantity: Number(item.quantity || 1),
      client: customer.name,
      phone: customer.phone,
      email: customer.email,
      code: getDiscountRate(code) > 0 ? code : '',
      unitPrice: Number(item.price || 0),
      unitCost: getSaleUnitCost(item.model),
      cost: getSaleUnitCost(item.model) * Number(item.quantity || 1),
      total: lineTotal,
      netProfit: lineTotal - (getSaleUnitCost(item.model) * Number(item.quantity || 1)),
      orderTotal: total,
      manufactured: false,
      paid: false,
      delivered: false,
      deliveryDetails: ''
      });
    });
    writeSalesHistory([...rows, ...readSalesHistory()].slice(0, 300));
    postSalesHistory(rows);
    setStoredValue('omp_last_checkout_signature', checkoutSignature);
    renderSellerSales();
    return true;
  }

  function handleCheckoutConfirmation() {
    const code = readCartDiscount();
    const recorded = recordSaleConfirmation();
    if (recorded) {
      trackDiscountConfirmation(code);
    }
    return recorded;
  }

  function renderSellerSales(salesInput = readSalesHistory(), status = '') {
    if (!sellerSalesTable) return;
    const sales = Array.isArray(salesInput) ? salesInput : [];
    if (!sales.length) {
      sellerSalesTable.innerHTML = `
        ${status ? `<p class="seller-sales__status">${escapeHtml(status)}</p>` : ''}
        <p class="seller-sales__empty">${sellerSalesLoading && !status ? 'Cargando ventas...' : 'Todavía no hay ventas confirmadas.'}</p>
      `;
      return;
    }
    const drops = [...new Set(sales.map(getSaleDrop))].sort((a, b) => a.localeCompare(b, 'es', { numeric: true, sensitivity: 'base' }));
    if (!drops.includes(sellerSalesDropFilter)) {
      sellerSalesDropFilter = drops[0] || 'DROP 01/XX';
      setStoredValue('omp_seller_drop_filter', sellerSalesDropFilter);
    }
    const visibleSales = sales.filter(sale => getSaleDrop(sale) === sellerSalesDropFilter);
    const sortedSales = sortSalesForDisplay(visibleSales);
    const dropTabs = drops.map(drop => {
      const count = sales.filter(sale => getSaleDrop(sale) === drop).length;
      return `
        <button class="seller-drop-tabs__button ${drop === sellerSalesDropFilter ? 'is-active' : ''}" type="button" data-seller-drop="${escapeHtml(drop)}">
          <span>${escapeHtml(drop)}</span>
          <b>${count}</b>
        </button>
      `;
    }).join('');
    const totalSales = visibleSales.reduce((sum, sale) => sum + Number(sale.total || 0), 0);
    const paidSales = visibleSales.filter(sale => sale.paid).reduce((sum, sale) => sum + Number(sale.total || 0), 0);
    const totalCost = visibleSales.reduce((sum, sale) => sum + getSaleCost(sale), 0);
    const totalProfit = visibleSales.reduce((sum, sale) => sum + getSaleProfit(sale), 0);
    const statusRow = status ? `<p class="seller-sales__status">${escapeHtml(status)}</p>` : '';
    const inventoryRows = renderSellerInventorySummary(visibleSales);
    const codeUsageRows = renderSellerCodeUsage(visibleSales);
    const salesCalendar = renderSellerSalesCalendar(visibleSales);
    const allManufactured = visibleSales.length > 0 && visibleSales.every(sale => sale.manufactured);
    const allPaid = visibleSales.length > 0 && visibleSales.every(sale => sale.paid);
    const allDelivered = visibleSales.length > 0 && visibleSales.every(sale => sale.delivered);
    sellerSalesTable.innerHTML = `
      ${statusRow}
      <nav class="seller-drop-tabs" aria-label="Ventas por drop">
        ${dropTabs}
      </nav>
      <div class="seller-sales__summary" aria-label="Resumen de productos vendidos">
        <article class="seller-sales__summary-card seller-sales__summary-card--total">
          <strong>${escapeHtml(sellerSalesDropFilter)}</strong>
          <span>${visibleSales.length} líneas</span>
          <b>${formatCurrencyHtml(totalSales)}</b>
        </article>
        <article class="seller-sales__summary-card seller-sales__summary-card--total">
          <strong>Pagado</strong>
          <span>Marcado recibido</span>
          <b>${formatCurrencyHtml(paidSales)}</b>
        </article>
        <article class="seller-sales__summary-card seller-sales__summary-card--total">
          <strong>Beneficio neto</strong>
          <span>Venta menos coste</span>
          <b>${formatCurrencyHtml(totalProfit)}</b>
        </article>
        <article class="seller-sales__summary-card seller-sales__summary-card--total">
          <strong>Coste total</strong>
          <span>Gasto producto</span>
          <b>${formatCurrencyHtml(totalCost)}</b>
        </article>
      </div>
      <div class="seller-inventory" aria-label="Resumen por modelo, color y talla">
        ${inventoryRows}
      </div>
      <section class="seller-code-usage" aria-label="Uso de códigos de descuento">
        <div class="seller-code-usage__head">
          <strong>Códigos usados</strong>
          <span>Contador basado en ventas confirmadas del ERP</span>
        </div>
        <div class="seller-code-usage__grid">
          ${codeUsageRows}
        </div>
      </section>
      <div class="seller-sales__head">
        <label class="seller-sales__bulk">
          <input type="checkbox" data-sale-bulk="manufactured" ${allManufactured ? 'checked' : ''} aria-label="Marcar todas como fabricadas">
          <span>Fab.</span>
        </label>
        <span>Modelo</span><span>Color</span><span>Talla</span><span>Cliente</span><span>Compra</span><span>Código</span><span>Drop</span><span>Uds</span><span>Venta</span><span>Coste</span><span>Beneficio</span>
        <label class="seller-sales__bulk">
          <input type="checkbox" data-sale-bulk="paid" ${allPaid ? 'checked' : ''} aria-label="Marcar todas como pagadas">
          <span>P</span>
        </label>
        <label class="seller-sales__bulk">
          <input type="checkbox" data-sale-bulk="delivered" ${allDelivered ? 'checked' : ''} aria-label="Marcar todas como entregadas">
          <span>E</span>
        </label>
        <span></span>
      </div>
      ${sortedSales.map(sale => `
        <article class="seller-sales__row ${sale.manufactured ? 'seller-sales__row--manufactured' : ''} ${sale.paid ? 'seller-sales__row--paid' : ''} ${sale.delivered ? 'seller-sales__row--delivered' : ''}" data-sale-id="${escapeHtml(sale.id)}">
          <label class="seller-sales__paid seller-sales__paid--manufactured seller-sales__paid--icon-only" aria-label="Fabricada">
            <input type="checkbox" data-sale-manufactured ${sale.manufactured ? 'checked' : ''}>
          </label>
          ${saleEditableInput(sale, 'model', 'Modelo')}
          ${saleEditableInput(sale, 'color', 'Color')}
          ${saleEditableInput(sale, 'size', 'Talla')}
          ${saleEditableInput(sale, 'client', 'Cliente')}
          ${salePurchaseControl(sale)}
          ${saleEditableInput(sale, 'code', 'Código')}
          ${saleEditableInput(sale, 'drop', 'Drop')}
          ${saleEditableInput(sale, 'quantity', 'Unidades', 'number')}
          <label class="seller-sales__price" data-label="Venta">
            <input type="number" min="0" step="0.01" value="${Number(sale.total || 0).toFixed(2)}" data-sale-total aria-label="Precio de venta">
          </label>
          <label class="seller-sales__price" data-label="Coste">
            <input type="number" min="0" step="0.01" value="${Number(sale.unitCost ?? getSaleUnitCost(sale.model)).toFixed(2)}" data-sale-field="unitCost" aria-label="Coste unidad">
          </label>
          <span data-label="Beneficio" class="${getSaleProfit(sale) < 0 ? 'seller-sales__loss' : 'seller-sales__profit'}">${formatCurrencyHtml(getSaleProfit(sale))}</span>
          <label class="seller-sales__paid">
            <input type="checkbox" data-sale-paid ${sale.paid ? 'checked' : ''}>
            <span>P</span>
          </label>
          <label class="seller-sales__paid seller-sales__paid--delivered">
            <input type="checkbox" data-sale-delivered ${sale.delivered ? 'checked' : ''}>
            <span>E</span>
          </label>
          <button class="seller-sales__delete" type="button" data-sale-delete aria-label="Eliminar venta">Eliminar</button>
          <label class="seller-sales__delivery" data-label="Dónde/cuándo entrega">
            <span>Entrega</span>
            <input type="text" value="${escapeHtml(sale.deliveryDetails || '')}" data-sale-delivery-details placeholder="Lugar y hora de entrega">
          </label>
        </article>
      `).join('')}
      ${salesCalendar}
    `;
  }

  async function loadSellerSales() {
    sellerSalesLoading = true;
    renderSellerSales();
    try {
      const sales = await fetchSalesHistory();
      sellerSalesLoading = false;
      renderSellerSales(sales, 'Sincronizado con el ERP.');
    } catch (error) {
      sellerSalesLoading = false;
      renderSellerSales(readSalesHistory(), 'No se pudo sincronizar ahora. Mostrando la última copia guardada en este navegador.');
    }
  }

  function openSellerSales() {
    loadSellerSales();
    sellerSales?.classList.add('active');
    sellerSales?.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
  }

  setTimeout(retryPendingSales, 1200);

  function readCart() {
    try {
      const cart = JSON.parse(getStoredValue('omp_cart', '[]'));
      return Array.isArray(cart) ? cart : [];
    } catch (error) {
      return [];
    }
  }

  function writeCart(cart) {
    setStoredValue('omp_cart', JSON.stringify(cart));
  }

  function readCartDiscount() {
    return getStoredValue('omp_discount', '');
  }

  function writeCartDiscount(code) {
    const normalized = String(code || '').trim().toUpperCase();
    if (normalized) {
      setStoredValue('omp_discount', normalized);
    } else {
      removeStoredValue('omp_discount');
    }
  }

  function syncDiscountInputs(code = readCartDiscount()) {
    if (discountInput) discountInput.value = code;
    if (cartDiscountInput) cartDiscountInput.value = code;
  }

  function showDiscountMessage(target, code, valid) {
    if (!target) return;
    target.classList.toggle('discount-redeem__message--valid', valid);
    target.classList.toggle('discount-redeem__message--invalid', Boolean(code && !valid));
    target.classList.toggle('cart-discount__message--valid', valid);
    target.classList.toggle('cart-discount__message--invalid', Boolean(code && !valid));
    target.textContent = !code
      ? 'Introduce tu código para aplicarlo al carrito.'
      : valid
        ? `Código ${code} aplicado a todo el carrito.`
        : 'Código no válido.';
  }

  function applyDiscountCode(rawCode, preferredMessage) {
    const code = String(rawCode || '').trim().toUpperCase();
    const valid = getDiscountRate(code) > 0;
    writeCartDiscount(valid ? code : '');
    syncDiscountInputs(valid ? code : code);
    discountInput?.classList.toggle('waitlist__input--error', Boolean(code && !valid));
    cartDiscountInput?.classList.toggle('cart-discount__input--error', Boolean(code && !valid));
    showDiscountMessage(discountMessage, code, valid);
    showDiscountMessage(cartDiscountMessage, code, valid);
    if (valid) showCartToast(preferredMessage || 'Código canjeado');
    renderCart();
  }

  function formatCurrency(value) {
    return formatCurrencyText(value);
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

  function getDiscountRate(code) {
    return discountCodes.has(String(code || '').trim().toUpperCase()) ? DISCOUNT_RATE : 0;
  }

  function getLineSubtotal(item) {
    return item.price * Number(item.quantity || 0);
  }

  function getLineDiscount(item) {
    return getLineSubtotal(item) * getDiscountRate(readCartDiscount());
  }

  function readCustomerDetails() {
    return {
      name: cartCustomerName?.value.trim() || '',
      email: cartCustomerEmail?.value.trim() || '',
      phone: cartCustomerPhone?.value.trim() || ''
    };
  }

  function isCustomerReady() {
    const customer = readCustomerDetails();
    return Boolean(customer.name && customer.email && cartCustomerEmail?.checkValidity() && customer.phone);
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
    const itemCount = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
    const subtotal = cart.reduce((sum, item) => sum + getLineSubtotal(item), 0);
    const discountTotal = cart.reduce((sum, item) => sum + getLineDiscount(item), 0);
    const total = Math.max(0, subtotal - discountTotal);
    const tax = total - (total / (1 + IGIC_RATE));
    const cartDiscountCode = readCartDiscount();
    const hasValidCartDiscount = getDiscountRate(cartDiscountCode) > 0;

    syncDiscountInputs(cartDiscountCode);
    if (cartCount) cartCount.textContent = itemCount;
    if (cartNavTotal) cartNavTotal.innerHTML = formatCurrencyHtml(total);
    if (buyRailCount) buyRailCount.textContent = `${itemCount} ${itemCount === 1 ? 'pieza' : 'piezas'}`;
    if (buyRailTotal) buyRailTotal.innerHTML = formatCurrencyHtml(total);
    cartToggle?.classList.toggle('cart-toggle--has-items', itemCount > 0);
    buyRailCart?.classList.toggle('cart-toggle--has-items', itemCount > 0);
    if (cartSubtotal) cartSubtotal.innerHTML = formatCurrencyHtml(subtotal);
    if (cartDiscount) cartDiscount.innerHTML = `-${formatCurrencyHtml(discountTotal)}`;
    cartDiscountRow?.classList.toggle('active', discountTotal > 0);
    if (cartTax) cartTax.innerHTML = formatCurrencyHtml(tax);
    if (cartTotal) cartTotal.innerHTML = formatCurrencyHtml(total);
    if (cartDrawerTotal) cartDrawerTotal.innerHTML = formatCurrencyHtml(total);
    cartCustomerForm?.classList.toggle('cart-customer--active', cart.length > 0);
    if (cartCheckout) {
      const customer = readCustomerDetails();
      const customerReady = isCustomerReady();
      const orderLines = cart.map(item => {
        return `Drop 01/XX - ${item.model} - ${item.color} - talla ${item.size} - ${formatCurrency(item.price)} x ${item.quantity}`;
      });
      const messageText = cart.length
        ? `Hola OMP, quiero confirmar mi pedido:\nNombre: ${customer.name}\nEmail: ${customer.email}\nTelefono: ${customer.phone}\n${orderLines.join('\n')}${hasValidCartDiscount ? `\nCodigo descuento: ${cartDiscountCode} (-10%)` : cartDiscountCode ? `\nCodigo descuento: ${cartDiscountCode} (pendiente de validar)` : ''}\nTotal de la compra: ${formatCurrency(total)}`
        : 'Hola OMP, quiero reservar mi Drop.';
      cartCheckout.href = `https://wa.me/34673094993?text=${encodeURIComponent(messageText)}`;
      const disabled = !cart.length || !customerReady;
      cartCheckout.classList.toggle('cart-drawer__checkout--disabled', disabled);
      cartCheckout.setAttribute('aria-disabled', disabled.toString());
      cartCheckout.tabIndex = disabled ? -1 : 0;
      cartStepData?.classList.toggle('cart-step--active', cart.length > 0);
      cartStepWhatsapp?.classList.toggle('cart-step--active', cart.length > 0 && customerReady);
      if (cartCheckoutHint) {
        const missing = [];
        if (!cart.length) missing.push('añade una prenda');
        if (cart.length && !customer.name) missing.push('nombre');
        if (cart.length && (!customer.email || !cartCustomerEmail?.checkValidity())) missing.push('correo');
        if (cart.length && !customer.phone) missing.push('teléfono');
        cartCheckoutHint.textContent = disabled
          ? `Para confirmar: ${missing.join(', ')}.`
          : 'Listo para enviar el pedido por WhatsApp.';
        cartCheckoutHint.classList.toggle('is-ready', !disabled);
      }
    }
    cartEmpty?.classList.toggle('active', cart.length === 0);

    if (!cartItems) return;
    cartItems.innerHTML = cart.map((item, index) => `
      <article class="cart-item">
        <div class="cart-item__top">
          <span class="cart-item__title">${escapeHtml(item.model)}</span>
          <span class="cart-item__price">${formatCurrencyHtml(getLineSubtotal(item) - getLineDiscount(item))}</span>
        </div>
        <p class="cart-item__meta">${escapeHtml(item.color)} · talla ${escapeHtml(item.size)} · cantidad ${item.quantity}</p>
        ${cartDiscountCode ? `<p class="cart-item__discount ${hasValidCartDiscount ? 'cart-item__discount--valid' : ''}">Código carrito: ${escapeHtml(cartDiscountCode)}${hasValidCartDiscount ? ' · -10%' : ' · no aplicado'}</p>` : ''}
        <div class="cart-item__bottom">
          <span class="cart-item__meta">Precio unidad: ${formatCurrencyHtml(item.price)}</span>
          ${renderQuantityStepper(index, item.quantity)}
        </div>
      </article>
    `).join('');
    renderOrderPreview(cart, total);
  }

  function renderQuantityStepper(index, quantity) {
    return `
      <div class="quantity-stepper" data-cart-line="${index}">
        <button type="button" data-cart-delta="-1" aria-label="Quitar una unidad">−</button>
        <input type="number" min="0" step="1" value="${Number(quantity || 0)}" data-cart-quantity aria-label="Unidades">
        <button type="button" data-cart-delta="1" aria-label="Añadir una unidad">+</button>
      </div>
    `;
  }

  function renderOrderPreview(cart, total) {
    if (!orderPreview) return;
    if (!cart.length) {
      orderPreview.innerHTML = '';
      orderPreview.classList.remove('active');
      return;
    }
    orderPreview.classList.add('active');
    orderPreview.innerHTML = `
      <div class="waitlist-order-preview__head">
        <span>Tu selección</span>
        <strong>${formatCurrencyHtml(total)}</strong>
      </div>
      ${cart.map((item, index) => `
        <article class="waitlist-order-preview__item">
          <div>
            <strong><i class="order-color-chip" style="--swatch:${escapeHtml(getCartItemColor(item))}"></i>${escapeHtml(item.model)}</strong>
            <span>${escapeHtml(item.color)} · talla ${escapeHtml(item.size)} · ${formatCurrencyHtml(item.price)}</span>
          </div>
          ${renderQuantityStepper(index, item.quantity)}
        </article>
      `).join('')}
    `;
  }

  function changeCartQuantity(index, nextQuantity) {
    const cart = readCart();
    if (!cart[index]) return;
    const quantity = Math.max(0, Number(nextQuantity) || 0);
    if (quantity <= 0) {
      cart.splice(index, 1);
    } else {
      cart[index].quantity = quantity;
    }
    writeCart(cart);
    renderCart();
  }

  function getCartItemColor(item) {
    const colors = colorsByModel[item.model] || [];
    return colors.find(color => color.name === item.color)?.hex || '#fafafa';
  }

  function resetProductFields() {
    syncSelectedModel('');
    if (sizeSelect) sizeSelect.value = '';
    hideModelOptions();
    hideColorOptions();
  }

  let cartToastTimer;
  function showCartToast(message = '¡Articulo añadido al carrito!') {
    if (!cartToast) return;
    window.clearTimeout(cartToastTimer);
    cartToast.textContent = message;
    cartToast.classList.add('active');
    cartToastTimer = window.setTimeout(() => {
      cartToast.classList.remove('active');
    }, 2000);
  }

  function addToCart(order) {
    const cart = readCart();
    const existing = cart.find(item =>
      item.model === order.model &&
      item.color === order.color &&
      item.size === order.size
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
    showCartToast();
    cartToggle?.classList.add('cart-toggle--pop');
    window.setTimeout(() => cartToggle?.classList.remove('cart-toggle--pop'), 420);
  }

  cartToggle?.addEventListener('click', openCart);
  buyRailCart?.addEventListener('click', openCart);
  cartClose?.addEventListener('click', closeCart);
  cartDrawer?.addEventListener('click', (e) => {
    if (e.target === cartDrawer) closeCart();
  });
  cartCheckout?.addEventListener('click', (e) => {
    if (cartCheckout.getAttribute('aria-disabled') !== 'true') {
      handleCheckoutConfirmation();
      return;
    }
    e.preventDefault();
    cartCustomerForm?.classList.add('cart-customer--attention');
    cartCustomerForm?.querySelector('input:invalid, input')?.focus();
    window.setTimeout(() => cartCustomerForm?.classList.remove('cart-customer--attention'), 900);
  });
  sellerStatsClose?.addEventListener('click', closeSellerStats);
  sellerStats?.addEventListener('click', (e) => {
    if (e.target === sellerStats) closeSellerStats();
  });
  sellerStatsReset?.addEventListener('click', () => {
    writeDiscountUsage({});
    renderSellerStats();
  });
  sellerSalesClose?.addEventListener('click', closeSellerSales);
  sellerSales?.addEventListener('click', (e) => {
    if (e.target === sellerSales) closeSellerSales();
  });
  sellerCommunityClose?.addEventListener('click', closeSellerCommunity);
  sellerCommunity?.addEventListener('click', (e) => {
    if (e.target === sellerCommunity) closeSellerCommunity();
  });
  sellerCommunityRefresh?.addEventListener('click', loadSellerCommunity);
  sellerCommunityTable?.addEventListener('click', async (e) => {
    const row = e.target.closest('[data-community-id]');
    if (!row) return;
    const id = row.dataset.communityId;
    const approveButton = e.target.closest('[data-community-approve]');
    const deleteButton = e.target.closest('[data-community-delete]');
    try {
      if (approveButton) {
        await patchCommunitySubmission(id, approveButton.dataset.communityApprove === 'true');
        await loadSellerCommunity();
      } else if (deleteButton) {
        await deleteCommunitySubmission(id);
        await loadSellerCommunity();
      }
    } catch (error) {
      renderSellerCommunity({}, 'No se pudo actualizar esa foto ahora.');
    }
  });
  sellerSalesTable?.addEventListener('change', async (e) => {
    const bulkCheckbox = e.target.closest('[data-sale-bulk]');
    const checkbox = e.target.closest('[data-sale-manufactured], [data-sale-paid], [data-sale-delivered]');
    const fieldInput = e.target.closest('[data-sale-field]');
    const priceInput = e.target.closest('[data-sale-total]');
    const deliveryInput = e.target.closest('[data-sale-delivery-details]');
    if (!bulkCheckbox && !checkbox && !fieldInput && !priceInput && !deliveryInput) return;
    if (bulkCheckbox) {
      const field = bulkCheckbox.dataset.saleBulk;
      const checked = bulkCheckbox.checked;
      const sales = readSalesHistory();
      const allowedFields = new Set(['manufactured', 'paid', 'delivered']);
      if (!allowedFields.has(field) || !sales.length) return;
      const affectedSales = sales.filter(sale => getSaleDrop(sale) === sellerSalesDropFilter);
      affectedSales.forEach(sale => {
        sale[field] = checked;
      });
      writeSalesHistory(sales);
      renderSellerSales(sales, `${checked ? 'Columna marcada' : 'Columna desmarcada'}.`);
      try {
        await Promise.all(affectedSales.map(sale => patchSaleStatus(sale.id, { [field]: checked })));
        await loadSellerSales();
      } catch (error) {
        renderSellerSales(readSalesHistory(), 'Columna actualizada en esta copia. No se pudo sincronizar todo con el ERP.');
      }
      return;
    }
    if (fieldInput) {
      const fieldRow = fieldInput.closest('[data-sale-id]');
      const saleId = fieldRow?.dataset.saleId;
      const field = fieldInput.dataset.saleField;
      const editableFields = new Set(['drop', 'createdAt', 'model', 'color', 'size', 'quantity', 'client', 'phone', 'email', 'code', 'unitCost']);
      if (!saleId || !editableFields.has(field)) return;
      const rawValue = fieldInput.value.trim();
      const value = field === 'createdAt' ? dateInputToIso(rawValue) : field === 'quantity' || field === 'unitCost' ? Number(rawValue || 0) : rawValue;
      const sales = readSalesHistory();
      const sale = sales.find(item => item.id === saleId);
      if (!sale) return;
      sale[field] = value;
      if (field === 'model') sale.unitCost = getSaleUnitCost(value);
      if (field === 'quantity') sale.quantity = Math.max(1, Number(value || 1));
      if (field === 'unitCost') sale.unitCost = Math.max(0, Number(value || 0));
      sale.cost = getSaleCost(sale);
      sale.netProfit = getSaleProfit(sale);
      writeSalesHistory(sales);
      if (field === 'createdAt') editingSalePurchaseId = '';
      renderSellerSales(sales, 'Venta actualizada.');
      try {
        await patchSaleField(saleId, field, sale[field]);
        await loadSellerSales();
      } catch (error) {
        renderSellerSales(readSalesHistory(), 'Venta actualizada en esta copia. No se pudo sincronizar con el ERP.');
      }
      return;
    }
    if (priceInput) {
      const priceRow = priceInput.closest('[data-sale-id]');
      const saleId = priceRow?.dataset.saleId;
      const total = Math.max(0, Number(priceInput.value || 0));
      const sales = readSalesHistory();
      const sale = sales.find(item => item.id === saleId);
      if (!sale) return;
      sale.total = total;
      sale.unitPrice = total / Number(sale.quantity || 1);
      sale.cost = getSaleCost(sale);
      sale.netProfit = getSaleProfit(sale);
      writeSalesHistory(sales);
      renderSellerSales(sales, 'Precio actualizado.');
      try {
        await patchSaleTotal(saleId, total);
        await loadSellerSales();
      } catch (error) {
        renderSellerSales(readSalesHistory(), 'Precio actualizado en esta copia. No se pudo sincronizar con el ERP.');
      }
      return;
    }
    if (deliveryInput) {
      const deliveryRow = deliveryInput.closest('[data-sale-id]');
      const saleId = deliveryRow?.dataset.saleId;
      const deliveryDetails = deliveryInput.value.trim();
      const sales = readSalesHistory();
      const sale = sales.find(item => item.id === saleId);
      if (!sale) return;
      sale.deliveryDetails = deliveryDetails;
      writeSalesHistory(sales);
      renderSellerSales(sales, 'Entrega actualizada.');
      try {
        await patchSaleDeliveryDetails(saleId, deliveryDetails);
        await loadSellerSales();
      } catch (error) {
        renderSellerSales(readSalesHistory(), 'Entrega actualizada en esta copia. No se pudo sincronizar con el ERP.');
      }
      return;
    }
    const row = checkbox.closest('[data-sale-id]');
    const saleId = row?.dataset.saleId;
    const sales = readSalesHistory();
    const sale = sales.find(item => item.id === saleId);
    if (!sale) return;
    const isManufacturedToggle = checkbox.matches('[data-sale-manufactured]');
    const isDeliveryToggle = checkbox.matches('[data-sale-delivered]');
    if (isManufacturedToggle) {
      sale.manufactured = checkbox.checked;
    } else if (isDeliveryToggle) {
      sale.delivered = checkbox.checked;
    } else {
      sale.paid = checkbox.checked;
    }
    writeSalesHistory(sales);
    renderSellerSales();
    try {
      if (isManufacturedToggle) {
        await patchSaleManufactured(saleId, checkbox.checked);
      } else if (isDeliveryToggle) {
        await patchSaleDelivered(saleId, checkbox.checked);
      } else {
        await patchSalePaid(saleId, checkbox.checked);
      }
      await loadSellerSales();
    } catch (error) {
      const statusLabel = isManufacturedToggle ? 'Fabricación' : isDeliveryToggle ? 'Entrega' : 'Pago';
      renderSellerSales(readSalesHistory(), `${statusLabel} marcada en esta copia. No se pudo sincronizar con el ERP.`);
    }
  });
  sellerSalesTable?.addEventListener('click', async (e) => {
    const dropButton = e.target.closest('[data-seller-drop]');
    if (dropButton) {
      sellerSalesDropFilter = dropButton.dataset.sellerDrop || 'DROP 01/XX';
      setStoredValue('omp_seller_drop_filter', sellerSalesDropFilter);
      renderSellerSales();
      return;
    }
    const editPurchaseButton = e.target.closest('[data-sale-edit-purchase]');
    if (editPurchaseButton) {
      const row = editPurchaseButton.closest('[data-sale-id]');
      editingSalePurchaseId = row?.dataset.saleId || '';
      renderSellerSales();
      return;
    }
    const deleteButton = e.target.closest('[data-sale-delete]');
    if (!deleteButton) return;
    const row = deleteButton.closest('[data-sale-id]');
    const saleId = row?.dataset.saleId;
    if (!saleId) return;
    const sales = readSalesHistory().filter(item => item.id !== saleId);
    writeSalesHistory(sales);
    renderSellerSales(sales, 'Venta eliminada.');
    try {
      await deleteSaleRow(saleId);
      await loadSellerSales();
    } catch (error) {
      renderSellerSales(readSalesHistory(), 'Venta eliminada de esta copia. No se pudo sincronizar con el ERP.');
    }
  });
  sellerSalesReset?.addEventListener('click', () => {
    loadSellerSales();
  });
  sellerManualToggle?.addEventListener('click', () => {
    if (!sellerManualSaleForm) return;
    const shouldOpen = sellerManualSaleForm.hidden;
    sellerManualSaleForm.hidden = !shouldOpen;
    sellerManualToggle.setAttribute('aria-expanded', String(shouldOpen));
    sellerManualToggle.classList.toggle('is-open', shouldOpen);
    if (shouldOpen) {
      sellerManualClient?.focus();
    }
  });
  sellerManualModel?.addEventListener('change', () => {
    if (!sellerManualTotal) return;
    const quantity = Math.max(1, Number(sellerManualQuantity?.value || 1));
    sellerManualTotal.value = String((pricesByModel[sellerManualModel.value] || 0) * quantity);
  });
  sellerManualQuantity?.addEventListener('input', () => {
    if (!sellerManualTotal || !sellerManualModel) return;
    const quantity = Math.max(1, Number(sellerManualQuantity.value || 1));
    const defaultTotal = (pricesByModel[sellerManualModel.value] || 0) * quantity;
    if (!sellerManualTotal.value || Number(sellerManualTotal.value) === 0) {
      sellerManualTotal.value = String(defaultTotal);
    }
  });
  sellerManualSaleForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const model = sellerManualModel?.value || 'Oversized';
    const quantity = Math.max(1, Number(sellerManualQuantity?.value || 1));
    const total = Math.max(0, Number(sellerManualTotal?.value || 0));
    const unitCost = getSaleUnitCost(model);
    const sale = {
      id: `manual-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      orderId: `manual-${Date.now()}`,
      drop: sellerManualDrop?.value || sellerSalesDropFilter || 'DROP 01/XX',
      createdAt: new Date().toISOString(),
      model,
      color: sellerManualColor?.value.trim() || '',
      size: sellerManualSize?.value || '',
      quantity,
      client: sellerManualClient?.value.trim() || '',
      phone: '',
      email: '',
      code: sellerManualCode?.value.trim().toUpperCase() || '',
      unitPrice: total / quantity,
      unitCost,
      cost: unitCost * quantity,
      total,
      netProfit: total - (unitCost * quantity),
      manufactured: false,
      paid: false,
      delivered: false,
      deliveryDetails: ''
    };
    if (!sale.color || !sale.size || !sale.client || !sale.total) return;
    const nextSales = [sale, ...readSalesHistory()].slice(0, 300);
    writeSalesHistory(nextSales);
    renderSellerSales(nextSales, 'Venta manual añadida.');
    try {
      await createManualSale(sale);
      sellerManualSaleForm.reset();
      sellerManualSaleForm.hidden = true;
      sellerManualToggle?.setAttribute('aria-expanded', 'false');
      sellerManualToggle?.classList.remove('is-open');
      if (sellerManualQuantity) sellerManualQuantity.value = '1';
      if (sellerManualTotal) sellerManualTotal.value = String(pricesByModel[sellerManualModel?.value || 'Oversized'] || 22);
      await loadSellerSales();
    } catch (error) {
      renderSellerSales(readSalesHistory(), 'Venta añadida en esta copia. No se pudo sincronizar con el ERP.');
    }
  });
  cartCustomerForm?.addEventListener('input', renderCart);
  cartItems?.addEventListener('click', (e) => {
    const cart = readCart();
    const control = e.target.closest('[data-cart-delta]');
    if (!control) return;
    const line = control.closest('[data-cart-line]');
    const index = Number(line?.dataset.cartLine);
    changeCartQuantity(index, Number(cart[index]?.quantity || 0) + Number(control.dataset.cartDelta));
  });
  cartItems?.addEventListener('change', (e) => {
    const input = e.target.closest('[data-cart-quantity]');
    if (!input) return;
    const line = input.closest('[data-cart-line]');
    changeCartQuantity(Number(line?.dataset.cartLine), input.value);
  });
  orderPreview?.addEventListener('click', (e) => {
    const cart = readCart();
    const control = e.target.closest('[data-cart-delta]');
    if (!control) return;
    const line = control.closest('[data-cart-line]');
    const index = Number(line?.dataset.cartLine);
    changeCartQuantity(index, Number(cart[index]?.quantity || 0) + Number(control.dataset.cartDelta));
  });
  orderPreview?.addEventListener('change', (e) => {
    const input = e.target.closest('[data-cart-quantity]');
    if (!input) return;
    const line = input.closest('[data-cart-line]');
    changeCartQuantity(Number(line?.dataset.cartLine), input.value);
  });
  cartClear?.addEventListener('click', () => {
    writeCart([]);
    writeCartDiscount('');
    syncDiscountInputs('');
    if (discountMessage) discountMessage.textContent = '';
    if (cartDiscountMessage) cartDiscountMessage.textContent = '';
    renderCart();
  });
  discountApply?.addEventListener('click', () => {
    applyDiscountCode(discountInput?.value, 'Código canjeado');
  });
  cartDiscountApply?.addEventListener('click', () => {
    applyDiscountCode(cartDiscountInput?.value, 'Código canjeado');
  });
  discountInput?.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    discountApply?.click();
  });
  cartDiscountInput?.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    cartDiscountApply?.click();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && cartDrawer?.classList.contains('active')) {
      closeCart();
    }
    if (e.key === 'Escape' && infoModal?.classList.contains('active')) {
      closeInfoPage();
    }
    if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
      closeNavMenu();
      navLogo?.focus();
    }
    if (e.key === 'Escape' && sellerStats?.classList.contains('active')) {
      closeSellerStats();
    }
    if (e.key === 'Escape' && sellerSales?.classList.contains('active')) {
      closeSellerSales();
    }
    if (e.key === 'Escape' && sellerCommunity?.classList.contains('active')) {
      closeSellerCommunity();
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'c') {
      e.preventDefault();
      openSellerStats();
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'v') {
      e.preventDefault();
      openSellerSales();
    }
    if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === 'm') {
      e.preventDefault();
      openSellerCommunity();
    }
  });
  const sellerPanel = new URLSearchParams(window.location.search).get('seller');
  if (sellerPanel === 'codigos') {
    openSellerStats();
  } else if (sellerPanel === 'ventas') {
    openSellerSales();
  } else if (sellerPanel === 'comunidad') {
    openSellerCommunity();
  }
  renderCart();

  async function resizeCommunityImage(file) {
    if (!file) throw new Error('missing_file');
    const source = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
    const img = await new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = source;
    });
    const maxPayloadLength = 1900000;
    let maxSide = 1800;
    let quality = 0.86;
    let output = '';

    for (let attempt = 0; attempt < 8; attempt += 1) {
      const ratio = Math.min(1, maxSide / Math.max(img.width, img.height));
      const canvas = document.createElement('canvas');
      canvas.width = Math.max(1, Math.round(img.width * ratio));
      canvas.height = Math.max(1, Math.round(img.height * ratio));
      const ctx = canvas.getContext('2d', { alpha: false });
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      output = canvas.toDataURL('image/jpeg', quality);
      if (output.length <= maxPayloadLength) return output;
      quality = Math.max(0.52, quality - 0.08);
      maxSide = Math.max(880, Math.round(maxSide * 0.84));
    }

    if (output && output.length <= 2200000) return output;
    throw new Error('image_too_large_after_compression');
  }

  peakLeadForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(peakLeadForm);
    const channels = data.getAll('channels');
    if (!data.get('email') && !data.get('phone')) {
      if (peakLeadMessage) peakLeadMessage.textContent = 'Deja correo o WhatsApp para poder avisarte.';
      return;
    }
    if (peakLeadMessage) peakLeadMessage.textContent = 'Guardando...';
    try {
      await postCommunity({
        type: 'lead',
        name: data.get('name'),
        email: data.get('email'),
        phone: data.get('phone'),
        channels
      });
      peakLeadForm.reset();
      if (peakLeadMessage) peakLeadMessage.textContent = 'Estás dentro. Te avisaremos del próximo movimiento.';
    } catch (error) {
      if (peakLeadMessage) peakLeadMessage.textContent = 'No se pudo guardar ahora. Escríbenos por WhatsApp y te apuntamos.';
    }
  });

  peakPhotoForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(peakPhotoForm);
    if (!data.get('consent')) {
      if (peakPhotoMessage) peakPhotoMessage.textContent = 'Necesitamos tu permiso para revisar y publicar la foto.';
      return;
    }
    if (peakPhotoMessage) peakPhotoMessage.textContent = 'Comprimiendo y subiendo...';
    try {
      const photo = await resizeCommunityImage(data.get('photo'));
      await postCommunity({
        type: 'submission',
        name: data.get('name'),
        handle: data.get('name'),
        photo
      });
      peakPhotoForm.reset();
      if (peakPhotoMessage) peakPhotoMessage.textContent = 'Foto enviada. La revisamos antes de publicarla.';
      showCartToast('Foto enviada para aprobación');
    } catch (error) {
      if (peakPhotoMessage) peakPhotoMessage.textContent = 'No se pudo subir ahora. Prueba otra vez o envíanos la foto por WhatsApp.';
    }
  });

  loadApprovedCommunity();

  /* --- Collection Quick Shop --- */
  const shopSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
  function closeShopPanels() {
    document.querySelectorAll('.product-card.shop-open, .image-lightbox__stage.shop-open').forEach(card => {
      card.classList.remove('shop-open');
      card.querySelectorAll('.shop-tag.is-active').forEach(tag => tag.classList.remove('is-active'));
      const panel = card.querySelector('.product-card__size-panel');
      if (panel) {
        panel.innerHTML = '';
        panel.setAttribute('aria-hidden', 'true');
      }
    });
  }

  function openShopPanel(tag) {
    const card = tag.closest('.product-card, .image-lightbox__stage');
    const panel = card?.querySelector('.product-card__size-panel');
    if (!card || !panel) return;

    const wasOpen = card.classList.contains('shop-open') && tag.classList.contains('is-active');
    closeShopPanels();
    if (wasOpen) return;

    const model = tag.dataset.shopModel || '';
    const color = tag.dataset.shopColor || '';
    card.classList.add('shop-open');
    tag.classList.add('is-active');
    panel.setAttribute('aria-hidden', 'false');
    panel.innerHTML = `
      <span class="product-card__size-title">${escapeHtml(model)} · ${escapeHtml(color)} · elige talla</span>
      <div class="product-card__size-grid">
        ${shopSizes.map(size => `<button type="button" data-shop-size="${size}">${size}</button>`).join('')}
      </div>
    `;
  }

  document.addEventListener('click', (e) => {
    const tagButton = e.target.closest('[data-shop-model][data-shop-color]');
    if (tagButton) {
      e.preventDefault();
      e.stopPropagation();
      openShopPanel(tagButton);
    }
  });

  document.addEventListener('click', (e) => {
    const sizeButton = e.target.closest('[data-shop-size]');
    if (sizeButton) {
      e.preventDefault();
      e.stopPropagation();
      const card = sizeButton.closest('.product-card, .image-lightbox__stage');
      const tag = card?.querySelector('.shop-tag.is-active');
      if (!tag) return;

      addToCart({
        name: '',
        email: '',
        phone: '',
        model: tag.dataset.shopModel,
        color: tag.dataset.shopColor,
        size: sizeButton.dataset.shopSize,
        createdAt: new Date().toISOString()
      });
      closeShopPanels();
      return;
    }

    if (!e.target.closest('.product-card__size-panel') && !e.target.closest('.shop-tag')) {
      closeShopPanels();
    }
  });

  /* --- Live Instagram Feed --- */
  const instagramFeed = document.querySelector('[data-instagram-feed]');
  const INSTAGRAM_CACHE_KEY = 'omp_instagram_posts_v1';
  const fallbackInstagramPosts = instagramFeed
    ? Array.from(instagramFeed.querySelectorAll('img')).slice(0, 9).map((img, index) => ({
        id: `fallback-${index}`,
        caption: img.alt || 'Post reciente de On My Peak',
        media_type: 'IMAGE',
        media_url: '',
        fallback_image: img.getAttribute('src') || '',
        permalink: img.closest('a')?.href || 'https://instagram.com/onmypeak_'
      }))
    : [];

  function readInstagramCache() {
    try {
      const cached = JSON.parse(window.localStorage?.getItem(INSTAGRAM_CACHE_KEY) || 'null');
      return Array.isArray(cached?.posts) ? cached.posts.slice(0, 9) : [];
    } catch (error) {
      return [];
    }
  }

  function writeInstagramCache(posts) {
    if (!Array.isArray(posts) || posts.length < 1) return;
    try {
      window.localStorage?.setItem(INSTAGRAM_CACHE_KEY, JSON.stringify({
        savedAt: new Date().toISOString(),
        posts: posts.slice(0, 9)
      }));
    } catch (error) {
      // Storage can be unavailable in private browsing; the built-in fallback still covers the feed.
    }
  }

  function renderInstagramPosts(posts, source = 'fallback') {
    if (!instagramFeed || !Array.isArray(posts) || !posts.length) return false;
    instagramFeed.replaceChildren(...posts.slice(0, 9).map(createInstagramItem));
    instagramFeed.dataset.source = source;
    return true;
  }

  function renderInstagramFallback() {
    return renderInstagramPosts(readInstagramCache(), 'cached') ||
      renderInstagramPosts(fallbackInstagramPosts, 'fallback');
  }

  function proxiedInstagramImage(url) {
    if (!url || url.startsWith('/assets/') || url.startsWith('assets/')) return url;
    try {
      const parsedUrl = new URL(url);
      if (!/(^|\.)(cdninstagram\.com|fbcdn\.net)$/i.test(parsedUrl.hostname)) return url;
      return `/api/instagram-image?url=${encodeURIComponent(url)}`;
    } catch (error) {
      return url;
    }
  }

  function instagramImageSource(post) {
    return proxiedInstagramImage(post.thumbnail_url || post.media_url || post.fallback_image || '');
  }

  function createInstagramItem(post) {
    const link = document.createElement('a');
    link.className = 'instagram-preview__item';
    link.href = post.permalink || 'https://instagram.com/onmypeak_';
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.setAttribute('aria-label', post.caption ? `Abrir post de Instagram: ${post.caption}` : 'Abrir post de Instagram de On My Peak');

    if (post.media_type === 'VIDEO') {
      link.classList.add('instagram-preview__item--video');
    }

    const img = document.createElement('img');
    const fallbackImage = post.fallback_image || '';
    img.src = instagramImageSource(post) || fallbackImage;
    img.alt = post.caption || 'Post reciente de On My Peak';
    img.width = 416;
    img.height = 520;
    img.loading = 'eager';
    img.fetchPriority = 'low';
    img.decoding = 'async';
    img.referrerPolicy = 'no-referrer';
    img.onerror = () => {
      if (!fallbackImage || img.dataset.fallback === 'true') return;
      img.dataset.fallback = 'true';
      img.src = fallbackImage;
    };

    link.appendChild(img);
    return link;
  }

  async function hydrateInstagramFeed() {
    if (!instagramFeed) return;
    if (instagramFeed.dataset.source === 'instagram' || instagramFeed.dataset.loading === 'true') return;

    try {
      instagramFeed.dataset.loading = 'true';
      const response = await fetch(`/api/instagram?fresh=${Date.now()}`, {
        headers: { Accept: 'application/json' },
        cache: 'no-store'
      });
      if (!response.ok) {
        renderInstagramFallback();
        return;
      }

      const payload = await response.json();
      const posts = Array.isArray(payload.posts) ? payload.posts.slice(0, 9) : [];
      if (posts.length < 1) {
        renderInstagramFallback();
        return;
      }

      if (payload.source !== 'fallback') {
        writeInstagramCache(posts);
      }
      renderInstagramPosts(posts, payload.source === 'fallback' ? 'fallback' : 'instagram');
    } catch (error) {
      renderInstagramFallback();
    } finally {
      delete instagramFeed.dataset.loading;
    }
  }

  function scheduleInstagramFeed() {
    if (!instagramFeed) return;
    const idle = window.requestIdleCallback || ((callback) => window.setTimeout(callback, 900));

    idle(() => hydrateInstagramFeed());
    window.setTimeout(() => hydrateInstagramFeed(), 2500);

    if ('IntersectionObserver' in window) {
      const feedObserver = new IntersectionObserver((entries) => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        feedObserver.disconnect();
        hydrateInstagramFeed();
      }, { rootMargin: '650px 0px' });
      feedObserver.observe(instagramFeed);
      return;
    }
  }

  scheduleInstagramFeed();

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const order = {
        name: '',
        email: '',
        phone: '',
        model: modelSelect.value,
        color: colorSelect.value,
        size: sizeSelect.value,
        createdAt: new Date().toISOString()
      };

      if (!order.model || !order.color || !order.size) return;

      addToCart(order);
      resetProductFields();
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
  const lightboxStage = lightbox?.querySelector('.image-lightbox__stage');
  const lightboxImg = lightbox?.querySelector('.image-lightbox__img');
  const lightboxTags = lightbox?.querySelector('.image-lightbox__shop-tags');
  const lightboxSizePanel = lightbox?.querySelector('.image-lightbox__size-panel');
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
    closeShopPanels();
    if (lightboxTags) {
      const sourceTags = button.closest('.product-card')?.querySelectorAll('.shop-tag') || [];
      lightboxTags.replaceChildren(...Array.from(sourceTags).map(tag => tag.cloneNode(true)));
    }
    if (lightboxSizePanel) {
      lightboxSizePanel.innerHTML = '';
      lightboxSizePanel.setAttribute('aria-hidden', 'true');
    }
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
    lightboxTags?.replaceChildren();
    if (lightboxStage) lightboxStage.classList.remove('shop-open');
    document.body.classList.remove('lightbox-open');
  }

  document.addEventListener('click', (e) => {
    if (e.target.closest('.shop-tag, .product-card__size-panel')) return;
    const card = e.target.closest('.product-card');
    const mediaButton = card?.querySelector('[data-lightbox-src]');
    if (!mediaButton) return;
    const index = lightboxItems.indexOf(mediaButton);
    if (index < 0) return;
    e.preventDefault();
    showLightboxImage(index);
  }, true);

  lightboxItems.forEach((button, index) => {
    button.addEventListener('click', () => {
      showLightboxImage(index);
    });
  });

  document.addEventListener('click', (e) => {
    const mediaButton = e.target.closest('[data-lightbox-src]');
    if (!mediaButton) return;
    const index = lightboxItems.indexOf(mediaButton);
    if (index < 0) return;
    e.preventDefault();
    showLightboxImage(index);
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

  /* --- Drop Calendar Flip Cards --- */
  const flipCards = Array.from(document.querySelectorAll('[data-flip-card]'));
  flipCards.forEach(card => {
    const flipButton = card.querySelector('.drop-calendar__flip');
    flipButton?.addEventListener('click', () => {
      card.classList.toggle('is-flipped');
      card.classList.remove('show-hint');
    });
  });

  if (flipCards.length && 'IntersectionObserver' in window) {
    const flipHintObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting || entry.target.dataset.hintShown === 'true') return;
        entry.target.dataset.hintShown = 'true';
        entry.target.classList.add('show-hint');
        window.setTimeout(() => entry.target.classList.remove('show-hint'), 3000);
      });
    }, { threshold: 0.55 });

    flipCards.forEach(card => flipHintObserver.observe(card));
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
