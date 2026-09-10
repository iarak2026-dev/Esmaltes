document.addEventListener('DOMContentLoaded', () => {

    /* ===================================================
       1. HEADER DINÂMICO (Efeito Scroll & Sombra)
    =================================================== */
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.1)';
            header.style.paddingTop = '12px';
            header.style.paddingBottom = '12px';
        } else {
            header.style.boxShadow = 'none';
            header.style.paddingTop = '18px';
            header.style.paddingBottom = '18px';
        }
    });


    /* ===================================================
       2. HIGHLIGHT DO MENU AO ROLAR (Active Nav Link)
    =================================================== */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a');

    const highlightMenu = () => {
        const scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 120;
            const sectionId = current.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', highlightMenu);


    /* ===================================================
       3. ANIMAÇÃO DE REVELAÇÃO AO ROLAR (Scroll Reveal)
    =================================================== */
    const revealElements = document.querySelectorAll(
        '.card, .impacto, .mini-card, .etapa, .titulo-secao, .introducao-conteudo, .ciclo, .observacao, .dados'
    );

    // Adiciona classe base e transição via JS para não quebrar CSS antigo
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        });
    };

    // Executa no carregamento e no scroll
    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);


    /* ===================================================
       4. EFEITO PARALLAX NO BANNER
    =================================================== */
    const banner = document.querySelector('.banner');

    window.addEventListener('scroll', () => {
        const scrollPos = window.pageYOffset;
        if (banner && scrollPos < banner.offsetHeight) {
            banner.style.backgroundPositionY = `${scrollPos * 0.4}px`;
        }
    });


    /* ===================================================
       5. BOTÃO "VOLTAR AO TOPO" (Criado Dinamicamente)
    =================================================== */
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';
    backToTopBtn.setAttribute('aria-label', 'Voltar ao topo');

    // Estilização do botão via JS
    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '48px',
        height: '48px',
        borderRadius: '50%',
        backgroundColor: 'var(--rosa)',
        color: '#ffffff',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.2rem',
        opacity: '0',
        visibility: 'hidden',
        transition: 'all 0.3s ease',
        zIndex: '999'
    });

    document.body.appendChild(backToTopBtn);

    // Mostrar/Esconder botão de topo
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.opacity = '1';
            backToTopBtn.style.visibility = 'visible';
        } else {
            backToTopBtn.style.opacity = '0';
            backToTopBtn.style.visibility = 'hidden';
        }
    });

    // Ação do clique
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efeito Hover no botão de topo
    backToTopBtn.addEventListener('mouseenter', () => {
        backToTopBtn.style.transform = 'scale(1.1)';
        backToTopBtn.style.backgroundColor = '#c85b73';
    });

    backToTopBtn.addEventListener('mouseleave', () => {
        backToTopBtn.style.transform = 'scale(1)';
        backToTopBtn.style.backgroundColor = 'var(--rosa)';
    });


    /* ===================================================
       6. INTERATIVIDADE NO CICLO DE VIDA (Destaque ao Hover)
    =================================================== */
    const cicloPassos = document.querySelectorAll('.linha-ciclo div');

    cicloPassos.forEach(passo => {
        passo.style.transition = 'transform 0.3s ease';
        passo.addEventListener('mouseenter', () => {
            passo.style.transform = 'scale(1.15)';
        });
        passo.addEventListener('mouseleave', () => {
            passo.style.transform = 'scale(1)';
        });
    });

});