document.addEventListener('DOMContentLoaded', () => {

    // --- Language Translations ---
    const translations = {
        pt: {
            "nav-about": "Sobre",
            "nav-experience": "Experiência",
            "nav-projects": "Projetos",
            "nav-contact": "Contato",
            "hero-greeting": "Olá, eu sou",
            "hero-role": "Cientista de Dados<span class=\"cursor-blink\">_</span>",
            "hero-description": "Transformando dados complexos em soluções inteligentes. Mestre em ciência de dados, professor universitário, palestrante e especialista no desenvolvimento de produtos de inteligência artificial prontos para produção.",
            "btn-projects": "Ver Projetos",
            "btn-linkedin": "<i class=\"fab fa-linkedin\"></i> LinkedIn",
            "about-title": "Sobre Mim",
            "about-p1": "Cientista de Dados e líder técnico do time de AI Engineering na CGDados/ENAP com sólida experiência em análises descritivas, diagnósticas e preditivas, atuando desde a engenharia e arquitetura de dados até a geração de insights estratégicos e deploy de soluções de dados em nuvem.",
            "about-p2": "Tenho como característica principal a habilidade de extrair valor de dados textuais por meio de <strong>Processamento de Linguagem Natural (NLP) e Inteligência Artificial aplicada</strong>. Além da vasta expertise no desenvolvimento de análises e visualizações de dados complexas, possuo experiência na concepção de sistemas de recomendação, busca semântica/lexical e RAGs e automações baseadas em SLMs e fluxos de agentes de IA baseados em grafos.",
            "about-p3": "Como lead de AI Engineering, venho conduzindo o desenvolvimento de soluções de IA aplicadas a problemas reais do setor público. Entre os principais projetos, destaque para a concepção do <strong>InfoChat Open</strong>, um agente de <strong>text-to-SQL baseado em SLMs open source</strong> que permite a gestores consultarem dados do negócio em linguagem natural, eliminando a dependência de conhecimento em SQL e acelerando a tomada de decisão baseada em dados. Também desenvolvi um sistema de recomendação em larga escala baseado em <strong>busca semântica com embeddings densos (SBERT)</strong>, capaz de gerar recomendações personalizadas de capacitações para dezenas de milhares de servidores simultaneamente, reduzindo um processo manual que mobilizava uma equipe inteira por cerca de duas semanas para poucos minutos e gerando economia operacional relevante para a organização. Atualmente, atuo no desenvolvimento de um <strong>RAG agentico pronto para produção</strong>, com técnicas de chunking semântico, busca híbrida com RRF, guardrails e observabilidade, estruturado inteiramente em <strong>Python</strong> e <strong>LangGraph</strong>.",
            "skills-education": "<i class=\"fas fa-graduation-cap\"></i> Educação",
            "edu-1-title": "Mestrado em Ciência de Dados Para Empresas",
            "edu-1-inst": "Inst. Politécnico de Setúbal (2023-2025)",
            "edu-2-title": "Pós-Graduação em Ciência de Dados/Big Data",
            "edu-2-inst": "Universidade Cruzeiro do Sul (2022-2023)",
            "edu-3-title": "Curso Superior de Tecnologia em Gestão Pública",
            "edu-3-inst": "Centro Universitário de Maringá (2014-2017)",
            "exp-title": "Experiência Profissional",
            "exp-1-date": "Jan 2026 - Atual",
            "exp-1-role": "Professor Assistente",
            "exp-1-company": "Centro Universitário de Brasília (UniCEUB)",
            "exp-1-desc": "Professor das disciplinas de <strong>Introdução à Ciência de Dados e Business Intelligence II</strong> para alunos da <strong>graduação em ciência de dados e machine learning.</strong>",
            "exp-2-date": "Jan 2022 - Atual",
            "exp-2-role": "Cientista de Dados",
            "exp-2-company": "Escola Nacional de Administração Pública (ENAP)",
            "exp-2-desc1": "Atuação como líder técnico em projetos de Inteligência Artificial e Ciência de Dados, com foco em soluções para o setor público.",
            "exp-2-desc2": "Desenvolvimento de sistema de matching de necessidades de capacitação Vs.cursos ofertados com uso de Inteligência Artificial (<strong>NLP e Arquitetura de Transformers SBERT</strong>), gerando expressiva economia financeira.",
            "exp-2-desc3": "Automação de rotinas com Python, GitHub Actions e GitLab CI/CD, além de desenvolvimento de Web Scrapers (Selenium, Scrapy).",
            "exp-2-desc4": "Modelagem de dados e criação de dashboards gerenciais em Looker e Power BI.",
            "exp-2-desc5": "Desenvolvimento de análises em bases de dados governamentais complexas para subsidiar a tomada de decisão em termos de políticas públicas federais.",
            "exp-2-desc6": "Criação/Deploy em nuvem (Python, AWS EC2, S3 e RDS) de soluções baseadas em NLP.",
            "exp-2-desc7": "Criação/Deploy em nuvem (Python, GCP GKE, GCS e BigQuery) de aplicação de text-2-sql com SLMs open source e LangGraph para tradução de questões em linguagem natural para queries SQL de maneira automatizada em bancos de dados Postgres e BigQuery.",
            "exp-2-desc8": "Atuação como professor de SQL e Inteligência Artificial para alunos do Mestrado Profissional em Avaliação e Monitoramento de Políticas Públicas da ENAP.",
            "exp-3-date": "Out 2013 - Set 2022",
            "exp-3-role": "Técnico Administrativo",
            "exp-3-company": "DNIT",
            "exp-3-desc1": "Desenvolvimento de planilhas de controle orçamentário e de ativos de patrimônio ferroviário.",
            "exp-3-desc2": "Elaboração de documentos técnicos e relatórios administrativos.",
            "exp-3-desc3": "Uso de python para automação de rotinas administrativas.",
            "exp-3-desc4": "Desenvolvimento de dashboards em Power BI para acompanhamento de indicadores administrativos.",
            "exp-3-desc5": "Liderança de equipes e atendimento focado na área de gestão pública.",
            "proj-title": "Projetos em Destaque",
            "proj-subtitle": "Algumas soluções e repositórios desenvolvidos recentemente.",
            "proj-1-title": "Sistema de Recomendação de Cursos NLP based",
            "proj-1-desc": "Motor NLP que utiliza arquitetura de transformers (SBERT) e TFIDF para realizar match entre perfis de capacitação e portfólio de cursos.",
            "proj-2-title": "RAG Agentico",
            "proj-2-desc": "RAG agentico avançado, com arquitetura baseada em grafos (langgraph) e Small Language Models (SLM) open source.",
            "proj-3-title": "Webapp para monitoramento de estudos",
            "proj-3-desc": "Webapp para monitoramento de estudos para concursos públicos e ENEM, com dashboard interativo e relatórios personalizados.",
            "proj-more": "Ver mais no GitHub",
            "contact-title": "Vamos Conversar?",
            "contact-p": "Estou disponível para consultorias em Dados e IA, projetos como freelancer e para palestras e capacitações sobre IA, Python, SQL, Power BI e demais assuntos relacionados a data science.",
            "contact-btn": "Falar com o Pedro",
            "footer-text": "Construído à base de café e dados."
        },
        en: {
            "nav-about": "About",
            "nav-experience": "Experience",
            "nav-projects": "Projects",
            "nav-contact": "Contact",
            "hero-greeting": "Hello, I am",
            "hero-role": "Data Scientist<span class=\"cursor-blink\">_</span>",
            "hero-description": "Transforming complex data into intelligent solutions. Master's in Data Science, university professor, speaker, and specialist in developing production-ready artificial intelligence products.",
            "btn-projects": "View Projects",
            "btn-linkedin": "<i class=\"fab fa-linkedin\"></i> LinkedIn",
            "about-title": "About Me",
            "about-p1": "Data Scientist and Tech Lead of the AI Engineering team at CGDados/ENAP with solid experience in descriptive, diagnostic, and predictive analytics, working from data engineering and architecture to generating strategic insights and deploying cloud data solutions.",
            "about-p2": "My main characteristic is the ability to extract value from textual data through <strong>Natural Language Processing (NLP) and Applied Artificial Intelligence</strong>. In addition to extensive expertise in developing complex data analyses and visualizations, I have experience in designing recommendation systems, semantic/lexical search and RAGs, and automations based on SLMs and graph-based AI agent flows.",
            "about-p3": "As AI Engineering Lead, I have been guiding the development of AI solutions applied to real public sector problems. Among the main projects, I highlight the design of <strong>InfoChat Open</strong>, a <strong>text-to-SQL agent based on open-source SLMs</strong> that allows managers to query business data in natural language, eliminating the reliance on SQL knowledge and accelerating data-driven decision making. I also developed a large-scale recommendation system based on <strong>semantic search with dense embeddings (SBERT)</strong>, capable of generating personalized training recommendations for tens of thousands of civil servants simultaneously, reducing a manual process that engaged an entire team for about two weeks to just a few minutes and generating significant operational savings for the organization. I am currently working on the development of a <strong>production-ready agentic RAG</strong>, with semantic chunking techniques, hybrid search with RRF, guardrails, and observability, structured entirely in <strong>Python</strong> and <strong>LangGraph</strong>.",
            "skills-education": "<i class=\"fas fa-graduation-cap\"></i> Education",
            "edu-1-title": "Master's in Data Science for Enterprises",
            "edu-1-inst": "Polytechnic Institute of Setúbal (2023-2025)",
            "edu-2-title": "Postgraduate in Data Science/Big Data",
            "edu-2-inst": "Cruzeiro do Sul University (2022-2023)",
            "edu-3-title": "Technology Degree in Public Management",
            "edu-3-inst": "University Center of Maringá (2014-2017)",
            "exp-title": "Professional Experience",
            "exp-1-date": "Jan 2026 - Present",
            "exp-1-role": "Assistant Professor",
            "exp-1-company": "University Center of Brasília (UniCEUB)",
            "exp-1-desc": "Professor of the disciplines <strong>Introduction to Data Science and Business Intelligence II</strong> for undergraduate students in <strong>data science and machine learning.</strong>",
            "exp-2-date": "Jan 2022 - Present",
            "exp-2-role": "Data Scientist",
            "exp-2-company": "National School of Public Administration (ENAP)",
            "exp-2-desc1": "Working as a technical lead in Artificial Intelligence and Data Science projects, focusing on solutions for the public sector.",
            "exp-2-desc2": "Development of a matching system for training needs Vs. courses offered using Artificial Intelligence (<strong>NLP and SBERT Transformers Architecture</strong>), generating significant financial savings.",
            "exp-2-desc3": "Automation of routines with Python, GitHub Actions, and GitLab CI/CD, in addition to the development of Web Scrapers (Selenium, Scrapy).",
            "exp-2-desc4": "Data modeling and creation of management dashboards in Looker and Power BI.",
            "exp-2-desc5": "Development of analyses on complex government databases to subsidize decision-making in terms of federal public policies.",
            "exp-2-desc6": "Cloud Creation/Deployment (Python, AWS EC2, S3, and RDS) of NLP-based solutions.",
            "exp-2-desc7": "Cloud Creation/Deployment (Python, GCP GKE, GCS, and BigQuery) of a text-2-sql application with open-source SLMs and LangGraph to automatically translate natural language questions into SQL queries in Postgres and BigQuery databases.",
            "exp-2-desc8": "Acting as a professor of SQL and Artificial Intelligence for students of the Professional Master's Program in Evaluation and Monitoring of Public Policies at ENAP.",
            "exp-3-date": "Oct 2013 - Sep 2022",
            "exp-3-role": "Administrative Assistant",
            "exp-3-company": "DNIT",
            "exp-3-desc1": "Development of budget control and railway heritage assets spreadsheets.",
            "exp-3-desc2": "Drafting of technical documents and administrative reports.",
            "exp-3-desc3": "Use of Python for automation of administrative routines.",
            "exp-3-desc4": "Development of dashboards in Power BI to monitor administrative indicators.",
            "exp-3-desc5": "Team leadership and customer service focused on public management.",
            "proj-title": "Featured Projects",
            "proj-subtitle": "Some recently developed solutions and repositories.",
            "proj-1-title": "NLP-based Course Recommendation System",
            "proj-1-desc": "NLP engine that uses transformers architecture (SBERT) and TFIDF to match training profiles with course portfolios.",
            "proj-2-title": "Agentic RAG",
            "proj-2-desc": "Advanced agentic RAG with graph-based architecture (LangGraph) and open-source Small Language Models (SLM).",
            "proj-3-title": "Study Monitoring Webapp",
            "proj-3-desc": "Study monitoring webapp for civil service exams and ENEM, featuring an interactive dashboard and personalized reports.",
            "proj-more": "View more on GitHub",
            "contact-title": "Let's Talk?",
            "contact-p": "I am available for Data and AI consulting, freelance projects, and lectures and training on AI, Python, SQL, Power BI, and other data science-related topics.",
            "contact-btn": "Talk to Pedro",
            "footer-text": "Built with coffee and data."
        }
    };

    const btnPt = document.getElementById('btn-pt');
    const btnEn = document.getElementById('btn-en');

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Update document lang attribute
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        // Toggle active classes
        if (lang === 'pt') {
            btnPt.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnPt.classList.remove('active');
        }
    }

    if (btnPt && btnEn) {
        btnPt.addEventListener('click', () => setLanguage('pt'));
        btnEn.addEventListener('click', () => setLanguage('en'));
    }

    // --- Dynamic Year ---
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Navbar Scroll Effect ---
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- Mobile Menu Toggle ---
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = menuBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = menuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }

    // --- Smooth Scroll for anchor links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // --- Active Link Highlighting on Scroll ---
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-links a[href^="#"]');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    });

    // --- Custom Cursor Glow (Desktop only mostly) ---
    const cursorGlow = document.getElementById('cursor-glow');
    if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });

        // Expand glow when hovering over clickable elements
        const clickables = document.querySelectorAll('a, button, .project-card, .menu-btn');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorGlow.style.width = '60px';
                cursorGlow.style.height = '60px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(88, 166, 255, 0.6) 0%, transparent 60%)';
            });
            el.addEventListener('mouseleave', () => {
                cursorGlow.style.width = '40px';
                cursorGlow.style.height = '40px';
                cursorGlow.style.background = 'radial-gradient(circle, rgba(88, 166, 255, 0.4) 0%, transparent 60%)';
            });
        });
    }

    // --- Scroll Reveal Animation ---
    // A simple Intersection Observer script to fade-in items smoothly
    const revealElements = document.querySelectorAll('.glass-card, .about-text, .about-skills, .section-title');

    // Initial style for reveal
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });
});
