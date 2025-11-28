/**
 * Toggles the 'active' class on an element
 * @param {HTMLElement} elem - The element to toggle
 */
const elementToggleFunc = (elem) => {
    elem.classList.toggle("active");
};

// Preloader
const preloader = document.querySelector('.preloader');

// Nascondi il preloader quando la pagina è caricata
window.addEventListener('load', () => {
    setTimeout(() => {
        preloader.classList.add('hidden');
    }, 500);
});

// DOM Elements
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Event Listeners
sidebarBtn?.addEventListener("click", () => elementToggleFunc(sidebar));

// Navigation State
const navigationState = {
    previousScrollPosition: window.scrollY || document.documentElement.scrollTop
};

// DOM Elements
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

/**
 * Updates the active state of pages and navigation links
 * @param {HTMLElement} targetPage - The page to activate
 * @param {HTMLElement} activeLink - The link that was clicked
 */
const updateActiveState = (targetPage, activeLink) => {
    pages.forEach(page => {
        const isTargetPage = page === targetPage;
        page.classList.toggle("active", isTargetPage);
        
        const correspondingLink = document.querySelector(`[data-nav-link="${page.dataset.page}"]`);
        correspondingLink?.classList.toggle("active", isTargetPage);
    });
};

// Navigation Event Listeners
navigationLinks.forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        
        const targetPage = document.getElementById(link.dataset.navLink);
        if (!targetPage) return;

        updateActiveState(targetPage, link);
        window.location.hash = link.dataset.navLink;
        window.scrollTo(0, navigationState.previousScrollPosition);
    });
});

/**
 * Initializes the page based on URL hash
 */
const initializePageFromHash = () => {
    const hash = window.location.hash.substring(1);
    const targetLink = document.querySelector(`[data-nav-link="${hash}"]`);
    targetLink?.click();
};

// Gestione del cambio lingua
const languageButtons = document.querySelectorAll(".language-btn");
let currentLanguage = "it"; // Lingua predefinita

// Traduzioni
const translations = {
    it: {
        // Preloader
        "loading": "Caricamento...",
        
        // Navbar
        "about": "Chi sono",
        "resume": "Curriculum",
        "contact": "Contattami",
        
        // Sidebar
        "showContacts": "Mostra contatti",
        "email": "Email",
        "phone": "Telefono",
        "birthDate": "Data di nascita",
        "residence": "Dove abito",
        
        // About section
        "aboutTitle": "Chi sono",
        "aboutText1": "Mi occupo della gestione e promozione di profili artistici musicali, aiutando talenti emergenti a sviluppare la loro presenza nel panorama digitale. Grazie a strategie di digital marketing, networking e contenuti mirati, supporto gli artisti nell'ottimizzazione della loro visibilità su piattaforme come Spotify e social media.",
        "aboutText2": "Nel corso della mia esperienza lavorativa, ho sviluppato competenze anche nel settore grafico, creando materiali promozionali, copertine e contenuti visivi per campagne digitali.",
        "aboutText3": "Parallelamente, sto ampliando le mie competenze nel settore IT e cybersecurity, con l'obiettivo di unire il mondo della tecnologia alla mia esperienza nella musica e nel marketing digitale.",
        "whatIDo": "Cosa faccio",
        "frontendDev": "Frontend Development",
        "frontendDesc": "Creazione di interfacce utente moderne e responsive utilizzando HTML5, CSS3 e JavaScript vanilla.",
        "webDev": "Web Development",
        "webDevDesc": "Sviluppo di siti web interattivi e dinamici con focus su user experience e design responsive.",
        "problemSolving": "Problem Solving",
        "problemSolvingDesc": "Sono creativo ed efficiente nell'individuare e risolvere problemi tecnici.",
        "problemSolvingServiceDesc": "Risoluzione di problemi tecnici e ottimizzazione del codice per migliorare le performance.",
        "softSkills": "Soft Skills",
        "fastLearner": "Imparo velocemente",
        "fastLearnerDesc": "Acquisisco rapidamente nuove conoscenze e mi adatto ai cambiamenti tecnologici.",
        "teamwork": "Teamwork",
        "teamworkDesc": "Collaboro a vari progetti e comunico chiaramente con i membri del team.",
        "communication": "Comunicazione",
        "communicationDesc": "Ho la capacità di trasmettere idee in modo chiaro e conciso.",
        "languages": "Linguaggi e framework",
        "technologies": "Tecnologie utilizzate",
        
        // Resume section
        "resumeTitle": "Curriculum",
        "workExperience": "Esperienze lavorative",
        "education": "Percorso di studi",
        "certifications": "Certificazioni",
        "languagesTitle": "Lingue",
        "italian": "Italiano",
        "english": "Inglese",
        "french": "Francese",
        
        // Contact section
        "contactTitle": "Contattami",
        
        // Work Experience descriptions
        "blntDescription": "Siamo un'etichetta discografica indipendente dedicata a scoprire, supportare e promuovere talenti emergenti. Offriamo un approccio personalizzato per valorizzare la creatività degli artisti, accompagnandoli in ogni fase del loro percorso musicale, dalla produzione alla distribuzione.<br><br>Con una visione innovativa e una passione per la musica, ci impegniamo a costruire connessioni significative tra gli artisti e il loro pubblico.",
        "serilarSerigrafista": "Dal 1980, uniamo tradizione artigianale e innovazione digitale per offrire soluzioni pubblicitarie su misura. Realizziamo adesivi, banner, targhe, abbigliamento personalizzato, segnaletica e allestimenti grafici per automezzi e insegne. Passione e qualità al servizio dei tuoi progetti.",
        "serilarOperatore": "Stage formativo presso azienda specializzata in soluzioni pubblicitarie e grafiche personalizzate.",
        
        // Education descriptions
        "itsDescription": "Diploma Istituto Tecnico e Professionale, Programmazione informatica",
        "fortunatoDescription": "Diploma Istituto Tecnico e Professionale, Grafica computerizzata",
        
        // Certifications descriptions
        "dattilografiaDesc": "IDCERT | International Digital Certification<br>ID credenziale: 171938e4-5db3-4f2e-ae5a-8e0625ab6366",
        "itSecurityDesc": "IDCERT | International Digital Certification<br>ID credenziale: 37923adc-7fa5-4c60-835c-2bfb7696b48c",
        "digitalCompetenceDesc": "IDCERT | International Digital Certification<br>ID credenziale: b07da170-4334-4a15-b1e6-3a9e157e99c6",
        
        
    },
    en: {
        // Preloader
        "loading": "Loading...",
        
        // Navbar
        "about": "About Me",
        "resume": "Resume",
        "contact": "Contact",
        
        // Sidebar
        "showContacts": "Show Contacts",
        "email": "Email",
        "phone": "Phone",
        "birthDate": "Birth Date",
        "residence": "Residence",
        
        // About section
        "aboutTitle": "About",
        "aboutText1": "I manage and promote musical artistic profiles, helping emerging talents develop their presence in the digital landscape. Through digital marketing strategies, networking and targeted content, I support artists in optimizing their visibility on platforms like Spotify and social media.",
        "aboutText2": "During my work experience, I have also developed skills in the graphic sector, creating promotional materials, covers and visual content for digital campaigns.",
        "aboutText3": "At the same time, I am expanding my skills in the IT and cybersecurity sector, with the goal of combining the world of technology with my experience in music and digital marketing.",
        "whatIDo": "What I do",
        "frontendDev": "Frontend Development",
        "frontendDesc": "Creating modern and responsive user interfaces using HTML5, CSS3 and vanilla JavaScript.",
        "webDev": "Web Development",
        "webDevDesc": "Development of interactive and dynamic websites with focus on user experience and responsive design.",
        "problemSolving": "Problem Solving",
        "problemSolvingDesc": "I am creative and efficient in identifying and solving technical problems.",
        "problemSolvingServiceDesc": "Technical problem solving and code optimization to improve performance.",
        "softSkills": "Soft Skills",
        "fastLearner": "Fast Learner",
        "fastLearnerDesc": "I quickly acquire new knowledge and adapt to technological changes.",
        "teamwork": "Teamwork",
        "teamworkDesc": "I collaborate on various projects and communicate clearly with team members.",
        "communication": "Communication",
        "communicationDesc": "I have the ability to convey ideas clearly and concisely.",
        "languages": "Languages and frameworks",
        "technologies": "Technologies used",
        
        // Resume section
        "resumeTitle": "Resume",
        "workExperience": "Work Experience",
        "education": "Education",
        "certifications": "Certifications",
        "languagesTitle": "Languages",
        "italian": "Italian",
        "english": "English",
        "french": "French",
        
        // Contact section
        "contactTitle": "Contact",
        
        // Work Experience descriptions
        "blntDescription": "We are an independent record label dedicated to discovering, supporting and promoting emerging talents. We offer a personalized approach to enhance artists' creativity, accompanying them in every phase of their musical journey, from production to distribution.<br><br>With an innovative vision and a passion for music, we are committed to building meaningful connections between artists and their audience.",
        "serilarSerigrafista": "Since 1980, we combine artisanal tradition and digital innovation to offer tailor-made advertising solutions. We create stickers, banners, signs, personalized clothing, signage and graphic setups for vehicles and signs. Passion and quality at the service of your projects.",
        "serilarOperatore": "Training internship at a company specialized in personalized advertising and graphic solutions.",
        
        // Education descriptions
        "itsDescription": "Technical and Professional Institute Diploma, Computer Programming",
        "fortunatoDescription": "Technical and Professional Institute Diploma, Computer Graphics",
        
        // Certifications descriptions
        "dattilografiaDesc": "IDCERT | International Digital Certification<br>Credential ID: 171938e4-5db3-4f2e-ae5a-8e0625ab6366",
        "itSecurityDesc": "IDCERT | International Digital Certification<br>Credential ID: 37923adc-7fa5-4c60-835c-2bfb7696b48c",
        "digitalCompetenceDesc": "IDCERT | International Digital Certification<br>Credential ID: b07da170-4334-4a15-b1e6-3a9e157e99c6",
        
        
    }
};

/**
 * Cambia la lingua dell'interfaccia
 * @param {string} lang - Il codice della lingua (it, en)
 */
const changeLanguage = (lang) => {
    if (!translations[lang]) return;
    currentLanguage = lang;
    
    // Aggiorna i pulsanti della lingua
    languageButtons.forEach(btn => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
    });
    
    // Traduce tutti gli elementi con attributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            // Se il contenuto è HTML (contiene tag <br>)
            if (translations[lang][key].includes('<br>')) {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
};

// Event listeners per i pulsanti della lingua
languageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.dataset.lang;
        changeLanguage(lang);
    });
});

// Global Event Listeners
window.addEventListener("DOMContentLoaded", () => {
    initializePageFromHash();
    // Imposta la lingua predefinita
    changeLanguage("it");
});

window.addEventListener("scroll", () => {
    navigationState.previousScrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // Gestione del pulsante back-to-top
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    }
}, { passive: true });

// Torna all'inizio quando il pulsante back-to-top viene cliccato
const backToTopButton = document.getElementById('back-to-top');
if (backToTopButton) {
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
