/* ============================================================
   Toda Modas — Interações
   ============================================================ */
(function () {
  'use strict';

  const WHATSAPP_NUMBER = '551126912472';

  /* ---- Header: fundo ao rolar ---- */
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---- Menu mobile ---- */
  const navToggle = document.getElementById('navToggle');
  const nav = document.getElementById('nav');
  navToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  // Fecha o menu ao clicar em um link
  nav.querySelectorAll('.nav__link').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---- Animações ao rolar (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // pequeno atraso escalonado para itens irmãos
          setTimeout(() => entry.target.classList.add('visible'), (i % 4) * 90);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  /* ---- Ano atual no rodapé ---- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- Formulário de contato -> WhatsApp ---- */
  const form = document.getElementById('contactForm');
  const note = document.getElementById('formNote');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const telefone = form.telefone.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !telefone || !email || !mensagem) {
      showNote('Por favor, preencha todos os campos.', 'err');
      return;
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      showNote('Digite um e-mail válido.', 'err');
      return;
    }

    const texto =
      `Olá, Toda Modas! Meu nome é ${nome}.%0A` +
      `Telefone: ${telefone}%0A` +
      `E-mail: ${email}%0A%0A` +
      `Mensagem: ${mensagem}`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${texto}`, '_blank', 'noopener');

    showNote('Redirecionando para o WhatsApp… Obrigado pelo contato!', 'ok');
    form.reset();
  });

  function showNote(msg, type) {
    note.textContent = msg;
    note.className = 'contact__note ' + type;
  }
})();
