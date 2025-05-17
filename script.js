const translations = {
    en: {
        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navContact: "Contact",
        headerHi: "Hi, I'm <span class='accent'>Boris</span>",
        headerRole: "Ethical Hacker & Programmer",
        headerSub: "Securing the web, one line of code at a time.",
        headerBtn: "Get in Touch",
        aboutTitle: "About Me",
        aboutText: "I’m an ethical hacker and programmer passionate about cybersecurity and building robust software. My mission: make the internet safer by finding vulnerabilities before the bad guys do.",
        skillsTitle: "Skills",
        projectsTitle: "Projects",
        contactTitle: "Contact",
        contactName: "Your Name",
        contactEmail: "Your Email",
        contactMessage: "Your Message",
        contactBtn: "Send",
        contactThanks: "Thank you! I'll get back to you soon.",
        footer: "&copy; 2025 Boris | Ethical Hacker & Programmer",
        // Project cards
        project1Title: "VulnFinder",
        project1Desc: "Automated vulnerability scanner for web apps (Python).",
        project2Title: "SecureChat",
        project2Desc: "End-to-end encrypted chat application (JavaScript & Node.js).",
        project3Title: "Linux Exploit Playground",
        project3Desc: "A safe environment to learn and test exploits."
    },
    de: {
        navAbout: "Über mich",
        navSkills: "Fähigkeiten",
        navProjects: "Projekte",
        navContact: "Kontakt",
        headerHi: "Hi, ich bin <span class='accent'>Boris</span>",
        headerRole: "Ethical Hacker & Programmierer",
        headerSub: "Sichere das Web, eine Codezeile nach der anderen.",
        headerBtn: "Kontakt aufnehmen",
        aboutTitle: "Über mich",
        aboutText: "Ich bin ein Ethical Hacker und Programmierer, leidenschaftlich in Sachen Cybersicherheit und dem Entwickeln robuster Software. Mein Ziel: Das Internet sicherer machen, indem ich Schwachstellen finde, bevor es andere tun.",
        skillsTitle: "Fähigkeiten",
        projectsTitle: "Projekte",
        contactTitle: "Kontakt",
        contactName: "Dein Name",
        contactEmail: "Deine E-Mail",
        contactMessage: "Deine Nachricht",
        contactBtn: "Senden",
        contactThanks: "Danke! Ich melde mich bald bei dir.",
        footer: "&copy; 2025 Boris | Ethical Hacker & Programmierer",
        // Project cards
        project1Title: "VulnFinder",
        project1Desc: "Automatisierter Schwachstellen-Scanner für Webanwendungen (Python).",
        project2Title: "SecureChat",
        project2Desc: "Ende-zu-Ende verschlüsselte Chat-Anwendung (JavaScript & Node.js).",
        project3Title: "Linux Exploit Playground",
        project3Desc: "Eine sichere Umgebung, um Exploits zu lernen und zu testen."
    }
};

let currentLang = "en";

function switchLanguage() {
    currentLang = currentLang === "en" ? "de" : "en";
    updateTexts();
    document.getElementById('langSwitch').textContent = currentLang === "en" ? "Deutsch" : "English";
}

function updateTexts() {
    const t = translations[currentLang];
    // Nav
    document.getElementById('navAbout').textContent = t.navAbout;
    document.getElementById('navSkills').textContent = t.navSkills;
    document.getElementById('navProjects').textContent = t.navProjects;
    document.getElementById('navContact').textContent = t.navContact;
    // Header
    document.getElementById('headerHi').innerHTML = t.headerHi;
    document.getElementById('headerRole').textContent = t.headerRole;
    document.getElementById('headerSub').textContent = t.headerSub;
    document.getElementById('headerBtn').textContent = t.headerBtn;
    // About
    document.getElementById('aboutTitle').textContent = t.aboutTitle;
    document.getElementById('aboutText').textContent = t.aboutText;
    // Skills
    document.getElementById('skillsTitle').textContent = t.skillsTitle;
    // Projects
    document.getElementById('projectsTitle').textContent = t.projectsTitle;
    // Project cards
    document.getElementById('project1Title').textContent = t.project1Title;
    document.getElementById('project1Desc').textContent = t.project1Desc;
    document.getElementById('project2Title').textContent = t.project2Title;
    document.getElementById('project2Desc').textContent = t.project2Desc;
    document.getElementById('project3Title').textContent = t.project3Title;
    document.getElementById('project3Desc').textContent = t.project3Desc;
    // Contact
    document.getElementById('contactTitle').textContent = t.contactTitle;
    document.getElementById('name').placeholder = t.contactName;
    document.getElementById('email').placeholder = t.contactEmail;
    document.getElementById('message').placeholder = t.contactMessage;
    document.getElementById('contactBtn').textContent = t.contactBtn;
    // Footer
    document.getElementById('footerText').innerHTML = t.footer;
}

document.getElementById('langSwitch').addEventListener('click', switchLanguage);

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('formMsg').textContent = translations[currentLang].contactThanks;
    this.reset();
});

// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash) {
            e.preventDefault();
            document.querySelector(link.hash).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initial set
updateTexts();