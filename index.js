
    // Atualiza o ano automaticamente.
    const yearElement = document.querySelector("#year");
    yearElement.textContent = new Date().getFullYear();

    // Registra os cliques no WhatsApp para testes locais.
    const whatsappLink = document.querySelector('.contact-links a[href^="https://wa.me/"]');
    whatsappLink.addEventListener("click", () => {
      console.log("Botão do WhatsApp acionado.");
    });

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
