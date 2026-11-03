

    // Atualiza o ano automaticamente.
    const yearElement = document.querySelector("#year");
    yearElement.textContent = new Date().getFullYear();

    // Registra os cliques no WhatsApp para testes locais.
    const whatsappLink = document.querySelector('a[href^="https://wa.me/"]');
    if (whatsappLink) {
      whatsappLink.addEventListener("click", () => {
        console.log("Botão do WhatsApp acionado.");
      });
    }

    // IntersectionObserver para fade-in-up
    const fadeElements = document.querySelectorAll('.section-heading, .project, .service, .skill-card');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s cubic-bezier(0.25, 0.1, 0.25, 1), transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1)';
      observer.observe(el);
    });

    // Verifica preferência de tema
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
// Efeito parallax na espiral da seção Sobre
const spiral = document.querySelector(".about-spiral");

if (spiral && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  let ticking = false;

  function updateSpiral() {
    const section = spiral.closest(".about");
    const rect = section.getBoundingClientRect();

    // A espiral sobe em uma velocidade diferente do conteúdo.
    const movement = (window.scrollY - section.offsetTop) * 0.65;

    spiral.style.transform = `translateY(${-movement}px)`;

    ticking = false;
  }

  function requestSpiralUpdate() {
    if (!ticking) {
      window.requestAnimationFrame(updateSpiral);
      ticking = true;
    }
  }

  window.addEventListener("scroll", requestSpiralUpdate, {
    passive: true
  });

  window.addEventListener("resize", requestSpiralUpdate);

  updateSpiral();
}

