// ===== DOM Elements =====
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const langBtns = document.querySelectorAll('.lang-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

// ===== Current Language =====
let currentLang = localStorage.getItem('language') || 'en';

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavigation();
    initScrollEffects();
    initProjectFilters();
    initCurrentYear();
    initRevealAnimations();
    initVisitorCounter();
});

// ===== Language System =====
function initLanguage() {
    // Set initial language
    setLanguage(currentLang);

    // Update active button
    langBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Language button click handlers
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);

            // Update active state
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Save preference
            localStorage.setItem('language', lang);
            currentLang = lang;
        });
    });
}

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');

    elements.forEach(element => {
        const key = element.dataset.i18n;
        const translation = getNestedTranslation(translations[lang], key);

        if (translation !== undefined && translation !== null) {
            element.textContent = translation;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

function getNestedTranslation(obj, key) {
    if (!obj) return undefined;

    // Support both nested objects and flat keys with dot notation
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }

    return key.split('.').reduce((o, k) => (o || {})[k], obj);
}

// ===== Navigation =====
function initNavigation() {
    // Mobile menu toggle
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Active link on scroll
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ===== Scroll Effects =====
function initScrollEffects() {
    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 70;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ===== Project Filters =====
function initProjectFilters() {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            projectCards.forEach(card => {
                const categories = card.dataset.category.split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                    card.style.animation = 'fadeInUp 0.5s ease forwards';
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// ===== Current Year =====
function initCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
}

// ===== Visitor Counter =====
function initVisitorCounter() {
    const counterElement = document.getElementById('visitor-count');
    if (!counterElement) return;

    const namespace = 'avnergomes-portfolio';
    const key = 'visitors';

    // Fetch and increment visitor count
    fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`)
        .then(response => response.json())
        .then(data => {
            if (data && data.count !== undefined) {
                counterElement.textContent = data.count.toLocaleString();
            }
        })
        .catch(() => {
            // Silently fail - keep showing "--"
        });
}

// ===== Reveal Animations =====
function initRevealAnimations() {
    const revealElements = document.querySelectorAll('.section-title, .section-subtitle, .service-card, .project-card, .stat-card, .skill-category');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = 150;

        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('reveal', 'active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check
}

// ===== Profile Image Error Handler =====
document.addEventListener('DOMContentLoaded', () => {
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.addEventListener('error', function() {
            // Create SVG placeholder
            const placeholder = createProfilePlaceholder();
            this.parentNode.innerHTML = placeholder;
        });
    }
});

function createProfilePlaceholder() {
    return `
        <svg class="profile-img" viewBox="0 0 350 350" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#2d5a27;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#4a7c43;stop-opacity:1" />
                </linearGradient>
            </defs>
            <rect width="350" height="350" rx="24" fill="url(#grad1)"/>
            <circle cx="175" cy="130" r="60" fill="rgba(255,255,255,0.2)"/>
            <ellipse cx="175" cy="280" rx="90" ry="70" fill="rgba(255,255,255,0.2)"/>
            <text x="175" y="175" text-anchor="middle" fill="white" font-size="48" font-family="Playfair Display, serif" font-weight="700">AG</text>
        </svg>
        <div class="profile-decoration"></div>
    `;
}

// ===== Intersection Observer for Performance =====
if ('IntersectionObserver' in window) {
    const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                element.classList.add('loaded');
                observer.unobserve(element);
            }
        });
    }, {
        rootMargin: '50px 0px',
        threshold: 0.1
    });

    document.querySelectorAll('.project-image, .client-logo').forEach(el => {
        lazyLoadObserver.observe(el);
    });
}

// ===== Mobile Menu Toggle Animation =====
navToggle.addEventListener('click', function() {
    const bars = this.querySelectorAll('.bar');

    if (this.classList.contains('active')) {
        bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }
});

// ===== Console Greeting =====
console.log(`
%c Avner Gomes Portfolio
%c Forest Engineer & Data Scientist
%c https://github.com/avnergomes

`,
'color: #2d5a27; font-size: 24px; font-weight: bold;',
'color: #4a7c43; font-size: 14px;',
'color: #718096; font-size: 12px;'
);
