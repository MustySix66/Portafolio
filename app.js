// ==========================================================================
// PORTAFOLIO WEB - KEVIN ANTONIO ANDRADE LÓPEZ
// Core Application Logic (Tabs, i18n Bilingual Switch, Filters & Lightbox)
// ==========================================================================

const i18n = {
    es: {
        nav_about: "Sobre Mí",
        nav_experience: "Experiencia & Ed.",
        nav_skills: "Habilidades & Stack",
        nav_certificates: "Certificados & CTFs",
        
        status_text: "🟢 Activo: HTB CPTS en progreso | Programming Intern @ AUMOVIO",
        hero_title: "Ingeniero en Redes Inteligentes & Ciberseguridad",
        hero_subtitle: "Cloud Infrastructure · RPA Automation · Blue/Red Team Security",
        hero_bio: "Ingeniero bilingüe enfocado en infraestructura en la nube (AWS/GCP), ciberseguridad defensiva y automatización logística (RPA). Apasionado por la arquitectura IaC, la resiliencia de redes y el aprendizaje continuo.",
        
        contact_email: "Correo Electrónico",
        contact_phone: "Teléfono",
        contact_location: "Aguascalientes, México",
        contact_github: "GitHub",

        // Tab 1: About
        sec_about: "Perfil Profesional & Educación",
        summary_title: "Resumen Ejecutivo",
        summary_desc: "Especializado en la optimización de procesos mediante RPA en UiPath e integración con SAP SCM, despliegue de infraestructura como código (IaC), soporte técnico en entornos de alta demanda y ciberseguridad (Defensa Digital & Red Team).",
        
        soft_title: "Habilidades Blandas (Soft Skills)",
        skills_assertive: "Comunicación Asertiva",
        skills_critical: "Pensamiento Crítico",
        skills_analysis: "Capacidad de Análisis",
        skills_adaptability: "Adaptabilidad",
        skills_efficiency: "Orientación a la Eficiencia",
        skills_teamwork: "Trabajo en Equipo",
        
        lang_title: "Idiomas (Languages)",
        lang_es: "Español",
        lang_es_lvl: "Nativo",
        lang_en: "Inglés",
        lang_en_lvl: "C1 Avanzado",
        lang_fr: "Francés",
        lang_fr_lvl: "B1 Intermedio",

        edu_title: "Formación Académica",
        edu_1_title: "Ingeniería en Redes Computacionales y Ciberseguridad & TSU TI Infraestructura",
        edu_1_school: "Universidad Tecnológica de Aguascalientes (2024 - 2027)",
        edu_2_title: "TSU en Programación (Java y C++)",
        edu_2_school: "CETis 155 Josefa Ortiz de Domínguez (2014 - 2017)",

        // Tab 2: Experience
        sec_exp: "Experiencia Profesional",
        
        // Tab 3: Skills
        sec_skills: "Habilidades Técnicas & Tecnologías",
        domain_cloud: "Cloud & Infraestructura (IaC)",
        domain_rpa: "RPA & Automatización",
        domain_net: "Networking & SysAdmin",
        domain_dev: "Desarrollo & Scripting",
        domain_sec: "Ciberseguridad & Análisis",

        // Tab 4: Certificates
        sec_certs: "Certificaciones & Retos CTF",
        filter_all: "Todos",
        filter_cloud: "Cloud & IaC",
        filter_cybersecurity: "Ciberseguridad & CTF",
        filter_automation: "RPA & Automatización",
        filter_soft: "Soft Skills & Talleres",

        view_credential: "Ver Credencial",
        featured_tag: "Destacado",

        footer_rights: "Kevin Antonio Andrade López. Todos los derechos reservados.",
        footer_quote: "/* Infrastructure as Code & Security by Design */"
    },
    en: {
        nav_about: "About Me",
        nav_experience: "Experience & Ed.",
        nav_skills: "Skills & Stack",
        nav_certificates: "Certificates & CTFs",

        status_text: "🟢 Active: HTB CPTS in progress | Programming Intern @ AUMOVIO",
        hero_title: "Intelligent Networks & Cybersecurity Engineer",
        hero_subtitle: "Cloud Infrastructure · RPA Automation · Blue/Red Team Security",
        hero_bio: "Bilingual engineer focused on Cloud Infrastructure (AWS/GCP), defensive cybersecurity, and logistics automation (RPA). Passionate about IaC architecture, network resilience, and continuous learning.",

        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Aguascalientes, Mexico",
        contact_github: "GitHub",

        // Tab 1: About
        sec_about: "Professional Profile & Education",
        summary_title: "Executive Summary",
        summary_desc: "Specialized in process optimization using RPA in UiPath integrated with SAP SCM, Infrastructure as Code (IaC) deployment, IT technical support in high-demand environments, and cybersecurity (Digital Defense & Red Team).",

        soft_title: "Soft Skills",
        skills_assertive: "Assertive Communication",
        skills_critical: "Critical Thinking",
        skills_analysis: "Analytical Ability",
        skills_adaptability: "Adaptability",
        skills_efficiency: "Efficiency Orientation",
        skills_teamwork: "Teamwork",

        lang_title: "Languages",
        lang_es: "Spanish",
        lang_es_lvl: "Native",
        lang_en: "English",
        lang_en_lvl: "C1 Advanced",
        lang_fr: "French",
        lang_fr_lvl: "B1 Intermediate",

        edu_title: "Education",
        edu_1_title: "B.S. in Computer Networks & Cybersecurity / Associate Degree in Network Infrastructure",
        edu_1_school: "Universidad Tecnológica de Aguascalientes (2024 - 2027)",
        edu_2_title: "Associate Degree in Programming (Java & C++)",
        edu_2_school: "CETis 155 Josefa Ortiz de Domínguez (2014 - 2017)",

        // Tab 2: Experience
        sec_exp: "Work Experience",

        // Tab 3: Skills
        sec_skills: "Technical Skills & Stack",
        domain_cloud: "Cloud & Infrastructure (IaC)",
        domain_rpa: "RPA & Automation",
        domain_net: "Networking & SysAdmin",
        domain_dev: "Development & Scripting",
        domain_sec: "Cybersecurity & Analysis",

        // Tab 4: Certificates
        sec_certs: "Certifications & CTF Challenges",
        filter_all: "All",
        filter_cloud: "Cloud & IaC",
        filter_cybersecurity: "Cybersecurity & CTF",
        filter_automation: "RPA & Automation",
        filter_soft: "Soft Skills & Workshops",

        view_credential: "View Credential",
        featured_tag: "Featured",

        footer_rights: "Kevin Antonio Andrade López. All rights reserved.",
        footer_quote: "/* Infrastructure as Code & Security by Design */"
    }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'es';
let currentCategory = 'all';
let certificatesData = [];
let experienceData = [];

document.addEventListener('DOMContentLoaded', () => {
    initApp();
});

function initApp() {
    // 1. Setup Tab Switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            switchTab(targetTab);
        });
    });

    // 2. Setup Language Switches
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // 3. Setup Category Filters
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.getAttribute('data-category');
            renderCertificates();
        });
    });

    // 4. Setup Lightbox Close
    const lightbox = document.getElementById('lightbox-modal');
    const closeBtn = document.querySelector('.lightbox-close');
    if (lightbox && closeBtn) {
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    // 5. Fetch Data & Initial Render
    fetchData();
}

function switchTab(tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        if (btn.getAttribute('data-tab') === tabId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    tabContents.forEach(content => {
        if (content.id === `tab-${tabId}`) {
            content.classList.add('active');
        } else {
            content.classList.remove('active');
        }
    });
}

function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);

    // Update active button state
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update all i18n text nodes
    document.querySelectorAll('[data-i18n]').forEach(elem => {
        const key = elem.getAttribute('data-i18n');
        if (i18n[lang][key]) {
            elem.textContent = i18n[lang][key];
        }
    });

    // Re-render dynamic sections
    renderCertificates();
    renderExperience();
}

function fetchData() {
    Promise.all([
        fetch('certificados.json').then(res => res.json()),
        fetch('experiencia.json').then(res => res.json())
    ])
    .then(([certs, exp]) => {
        certificatesData = certs;
        experienceData = exp;
        
        // Initial Language Render
        setLanguage(currentLang);
    })
    .catch(err => {
        console.error('Error fetching portfolio data:', err);
    });
}

function renderCertificates() {
    const gallery = document.getElementById('cert-grid');
    if (!gallery) return;

    gallery.innerHTML = '';

    const filtered = certificatesData.filter(cert => {
        if (currentCategory === 'all') return true;
        return cert.categoria === currentCategory;
    });

    if (filtered.length === 0) {
        gallery.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 2rem;">No hay certificados en esta categoría.</p>`;
        return;
    }

    filtered.forEach(cert => {
        const card = document.createElement('div');
        card.className = `cert-card ${cert.destacado ? 'featured' : ''}`;

        const titleText = (currentLang === 'en' && cert.titulo_en) ? cert.titulo_en : cert.titulo;
        const descText = (currentLang === 'en' && cert.descripcion_en) ? cert.descripcion_en : (cert.descripcion_es || '');
        const btnText = i18n[currentLang].view_credential;
        const featuredText = i18n[currentLang].featured_tag;

        const featuredBadgeHTML = cert.destacado 
            ? `<span class="cert-badge-featured">${featuredText}</span>` 
            : '';

        card.innerHTML = `
            ${featuredBadgeHTML}
            <div class="cert-img-container" onclick="openLightbox('${cert.imagen_url}', '${titleText}')">
                <img src="${cert.imagen_url}" alt="${titleText}" loading="lazy">
                <div class="cert-overlay">🔍</div>
            </div>
            <div class="cert-body">
                <h3 class="cert-title">${titleText}</h3>
                <p class="cert-issuer">${cert.otorgado_por}</p>
                <p class="cert-date">🗓️ ${cert.fecha}</p>
                ${descText ? `<p class="cert-desc">${descText}</p>` : ''}
                <div class="cert-footer">
                    <a href="${cert.credencial_url}" target="_blank" rel="noopener noreferrer" class="btn-credential">
                        ${btnText} ↗
                    </a>
                </div>
            </div>
        `;

        gallery.appendChild(card);
    });
}

function renderExperience() {
    const expGallery = document.getElementById('experience-timeline');
    if (!expGallery) return;

    expGallery.innerHTML = '';

    experienceData.forEach(exp => {
        const title = (currentLang === 'en' && exp.titulo_en) ? exp.titulo_en : exp.titulo_es;
        const date = (currentLang === 'en' && exp.fecha_en) ? exp.fecha_en : exp.fecha_es;
        const desc = (currentLang === 'en' && exp.descripcion_en) ? exp.descripcion_en : exp.descripcion_es;

        const techPills = (exp.tecnologias || [])
            .map(t => `<span class="skill-tag">${t}</span>`)
            .join('');

        const item = document.createElement('div');
        item.className = 'exp-item';
        item.innerHTML = `
            <div class="exp-card">
                <div class="exp-header">
                    <div class="exp-logo-box">
                        <img src="${exp.logo_url}" alt="${exp.empresa}">
                    </div>
                    <div>
                        <h3 class="exp-role">${title}</h3>
                        <p class="exp-company">${exp.empresa}</p>
                        <p class="exp-date">🗓️ ${date}</p>
                    </div>
                </div>
                <p class="exp-desc">${desc}</p>
                <div class="skills-tags">
                    ${techPills}
                </div>
            </div>
        `;

        expGallery.appendChild(item);
    });
}

function openLightbox(imgUrl, caption) {
    const lightbox = document.getElementById('lightbox-modal');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    if (lightbox && lightboxImg) {
        lightboxImg.src = imgUrl;
        if (lightboxCaption) lightboxCaption.textContent = caption || '';
        lightbox.classList.add('active');
    }
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox-modal');
    if (lightbox) {
        lightbox.classList.remove('active');
    }
}