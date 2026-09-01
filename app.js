// ==========================================================================
// PORTAFOLIO PROFESIONAL - KEVIN ANTONIO ANDRADE LÓPEZ
// Red Team, Cloud Infrastructure & RPA Engineer
// Core Application Logic (Tabs, i18n Bilingual Switch, Filters & Lightbox)
// ==========================================================================

const i18n = {
    es: {
        nav_about: "Sobre Mí",
        nav_experience: "Experiencia & Educación",
        nav_skills: "Habilidades & Stack",
        nav_certificates: "Certificados & CTFs",
        
        status_text: "Activo: HTB Certified Penetration Testing Specialist (CPTS) en progreso | MRO Technician @ AUMOVIO",
        hero_title: "Ingeniero en Redes Inteligentes & Ciberseguridad",
        hero_subtitle: "Red Team & Offensive Security Specialist · Cloud Infrastructure (AWS/GCP) · RPA Automation",
        hero_bio: "Ingeniero bilingüe especializado en Red Team, Penetration Testing y Ciberseguridad Ofensiva, respaldado por una sólida formación en Infraestructura Elástica en la Nube (AWS/GCP), Arquitectura IaC y Automatización Logística (RPA/SAP SCM). Orientado a la detección de vulnerabilidades, evaluación de seguridad y resiliencia operativa de infraestructura crítica.",
        
        contact_email: "Correo Electrónico",
        contact_phone: "Teléfono",
        contact_location: "Aguascalientes, México",
        contact_github: "GitHub",

        // Tab 1: About
        sec_about: "Perfil Profesional & Competencias de Egreso",
        summary_title: "Resumen Ejecutivo",
        summary_desc: "Profesional bilingüe con enfoque principal en Red Team y Ciberseguridad Ofensiva (evaluación de vulnerabilidades, pruebas de penetración, análisis de malware e informática forense). Cuenta con amplia experiencia técnica en despliegue de infraestructura elástica en la nube (AWS/GCP) mediante IaC (Terraform, Docker), automatización y optimización de procesos mediante flujos RPA en UiPath integrados a SAP SCM, y diagnóstico avanzado de hardware/software.",
        
        soft_title: "Competencias Profesionales",
        skills_assertive: "Comunicación Asertiva",
        skills_critical: "Pensamiento Crítico",
        skills_analysis: "Capacidad de Análisis Estratégico",
        skills_adaptability: "Adaptabilidad Tecnológica",
        skills_efficiency: "Orientación a la Eficiencia",
        skills_teamwork: "Trabajo Colaborativo",
        
        lang_title: "Dominio de Idiomas",
        lang_es: "Español",
        lang_es_lvl: "Nativo",
        lang_en: "Inglés",
        lang_en_lvl: "C1 Avanzado (Bilingüe Profesional)",
        lang_fr: "Francés",
        lang_fr_lvl: "B1 Intermedio",

        edu_title: "Formación Académica & Competencias Clave",
        edu_1_title: "Ingeniería en Redes Inteligentes y Ciberseguridad & TSU en Infraestructura de Redes Digitales",
        edu_1_school: "Universidad Tecnológica de Aguascalientes (2024 - 2027)",
        edu_1_desc: "Plan de estudios enfocado en la protección activa y ofensiva de activos de información, informática forense, diseño e implementación de infraestructura elástica en la nube (AWS/GCP), redes definidas por software (SDN), gestión de riesgos tecnológicas y continuidad del negocio (BCP/DRP).",
        
        edu_2_title: "TSU en Programación",
        edu_2_school: "CETis 155 Josefa Ortiz de Domínguez (2014 - 2017)",
        edu_2_desc: "Formación práctica en lógica de programación, estructuras de datos, programación orientada a objetos (Java, C++) y desarrollo de sistemas.",

        // Tab 2: Experience
        sec_exp: "Experiencia Profesional",
        
        // Tab 3: Skills
        sec_skills: "Matriz de Competencias & Dominio Técnico",
        domain_sec: "Ciberseguridad Ofensiva & Red Team",
        domain_cloud: "Cloud Infrastructure & IaC",
        domain_rpa: "Automatización RPA & Procesos",
        domain_net: "Networking & SysAdmin Avanzado",
        domain_dev: "Desarrollo & Scripting",

        // Tab 4: Certificates
        sec_certs: "Certificaciones Profesionales & Retos CTF",
        filter_all: "Todos",
        filter_cybersecurity: "Ciberseguridad & CTF",
        filter_cloud: "Cloud & IaC",
        filter_automation: "RPA & Automatización",
        filter_soft: "Desarrollo Profesional & Talleres",

        view_credential: "Ver Credencial Oficial",
        featured_tag: "Destacado",

        footer_rights: "Kevin Antonio Andrade López. Todos los derechos reservados.",
        footer_quote: "/* Red Team Operations & Offensive Security Architecture */"
    },
    en: {
        nav_about: "About Me",
        nav_experience: "Experience & Education",
        nav_skills: "Skills & Stack",
        nav_certificates: "Certificates & CTFs",

        status_text: "Active: HTB Certified Penetration Testing Specialist (CPTS) Candidate | MRO Technician @ AUMOVIO",
        hero_title: "Intelligent Networks & Cybersecurity Engineer",
        hero_subtitle: "Red Team & Offensive Security Specialist · Cloud Infrastructure (AWS/GCP) · RPA Automation",
        hero_bio: "Bilingual engineer specialized in Red Team operations, Penetration Testing, and Offensive Cybersecurity, backed by solid expertise in elastic Cloud Infrastructure (AWS/GCP), IaC Architecture, and Logistics Automation (RPA/SAP SCM). Focused on vulnerability identification, security auditing, and critical infrastructure operational resilience.",

        contact_email: "Email",
        contact_phone: "Phone",
        contact_location: "Aguascalientes, Mexico",
        contact_github: "GitHub",

        // Tab 1: About
        sec_about: "Professional Profile & Core Competencies",
        summary_title: "Executive Summary",
        summary_desc: "Bilingual professional primarily focused on Red Team and Offensive Cybersecurity (vulnerability assessment, penetration testing, malware analysis, and digital forensics). Experienced in elastic cloud infrastructure deployment (AWS/GCP) using IaC (Terraform, Docker), logistics process optimization via RPA workflows in UiPath integrated with SAP SCM, and advanced hardware/software troubleshooting.",

        soft_title: "Professional Competencies",
        skills_assertive: "Assertive Communication",
        skills_critical: "Critical Thinking",
        skills_analysis: "Strategic Analytical Ability",
        skills_adaptability: "Technological Adaptability",
        skills_efficiency: "Efficiency Orientation",
        skills_teamwork: "Collaborative Teamwork",

        lang_title: "Language Proficiency",
        lang_es: "Spanish",
        lang_es_lvl: "Native",
        lang_en: "English",
        lang_en_lvl: "C1 Advanced (Professional Bilingual)",
        lang_fr: "French",
        lang_fr_lvl: "B1 Intermediate",

        edu_title: "Education & Key Competencies",
        edu_1_title: "B.S. in Intelligent Networks & Cybersecurity / Associate Degree in Digital Network Infrastructure",
        edu_1_school: "Universidad Tecnológica de Aguascalientes (2024 - 2027)",
        edu_1_desc: "Comprehensive degree curriculum emphasizing active and offensive protection of information assets, digital forensics, design and implementation of elastic cloud infrastructure (AWS/GCP), software-defined networking (SDN), IT risk management, and business continuity (BCP/DRP).",

        edu_2_title: "Associate Degree in Programming",
        edu_2_school: "CETis 155 Josefa Ortiz de Domínguez (2014 - 2017)",
        edu_2_desc: "Practical training in programming logic, data structures, object-oriented programming (Java, C++), and system development.",

        // Tab 2: Experience
        sec_exp: "Work Experience",

        // Tab 3: Skills
        sec_skills: "Technical Skills & Competency Matrix",
        domain_sec: "Offensive Cybersecurity & Red Team",
        domain_cloud: "Cloud Infrastructure & IaC",
        domain_rpa: "RPA Automation & Processes",
        domain_net: "Networking & Advanced SysAdmin",
        domain_dev: "Development & Scripting",

        // Tab 4: Certificates
        sec_certs: "Professional Certifications & CTF Challenges",
        filter_all: "All",
        filter_cybersecurity: "Cybersecurity & CTF",
        filter_cloud: "Cloud & IaC",
        filter_automation: "RPA & Automation",
        filter_soft: "Professional Development & Workshops",

        view_credential: "View Official Credential",
        featured_tag: "Featured",

        footer_rights: "Kevin Antonio Andrade López. All rights reserved.",
        footer_quote: "/* Red Team Operations & Offensive Security Architecture */"
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
        gallery.innerHTML = `<p style="color: var(--text-muted); grid-column: 1/-1; text-align: center; padding: 2.5rem;">No hay registros disponibles en esta categoría.</p>`;
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
                <div class="cert-overlay">
                    <span class="view-zoom-text">Ver vista previa</span>
                </div>
            </div>
            <div class="cert-body">
                <h3 class="cert-title">${titleText}</h3>
                <p class="cert-issuer">${cert.otorgado_por}</p>
                <p class="cert-date">${cert.fecha}</p>
                ${descText ? `<p class="cert-desc">${descText}</p>` : ''}
                <div class="cert-footer">
                    <a href="${cert.credencial_url}" target="_blank" rel="noopener noreferrer" class="btn-credential">
                        ${btnText} &rarr;
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
                        <p class="exp-date">${date}</p>
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