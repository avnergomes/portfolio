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

    // Google Apps Script Web App URL
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz8NznOVFVYolyNWF7ZEE55PAvDsRIh2HYEJgjehKuVU2zt5da5m6-a1AsEC57EDw/exec';

    // Gather comprehensive tracking data
    const trackingData = gatherUserData();

    // Show loading state
    counterElement.textContent = '...';
    counterElement.classList.add('loading');

    // Send tracking data via POST to avoid URL length limits
    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(trackingData)
    })
        .then(response => response.text())
        .then(text => {
            // Parse JSON response
            return JSON.parse(text);
        })
        .then(data => {
            counterElement.classList.remove('loading');

            if (data && data.success && data.count !== undefined) {
                // Animate the counter
                animateCounter(counterElement, data.count);

                // Store count in sessionStorage to avoid duplicate tracking
                sessionStorage.setItem('portfolio_visit_tracked', 'true');

                // Log analytics (optional)
                if (window.console && data.timestamp) {
                    console.log(`Visit tracked: #${data.count} at ${data.timestamp}`);
                }
            } else {
                throw new Error('Invalid response format');
            }
        })
        .catch(error => {
            console.error('Visit tracker error:', error);
            counterElement.classList.remove('loading');
            counterElement.textContent = '--';

            // Fallback: Try to get cached count
            const cachedCount = sessionStorage.getItem('portfolio_visit_count');
            if (cachedCount) {
                counterElement.textContent = parseInt(cachedCount).toLocaleString();
            }
        });
}

/**
 * Gather comprehensive user data legally from browser APIs
 */
function gatherUserData() {
    // Detect device type based on screen width and user agent
    function getDeviceType() {
        const width = window.innerWidth;
        const ua = navigator.userAgent.toLowerCase();

        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
            return 'tablet';
        }
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
            return 'mobile';
        }
        return width <= 768 ? 'mobile' : (width <= 1024 ? 'tablet' : 'desktop');
    }

    // Extract browser name and version
    function getBrowserInfo() {
        const ua = navigator.userAgent;
        let browser = 'Unknown';
        let version = 'Unknown';

        if (ua.indexOf('Firefox') > -1) {
            browser = 'Firefox';
            version = ua.match(/Firefox\/([0-9.]+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Edg') > -1) {
            browser = 'Edge';
            version = ua.match(/Edg\/([0-9.]+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Chrome') > -1 && ua.indexOf('Edg') === -1) {
            browser = 'Chrome';
            version = ua.match(/Chrome\/([0-9.]+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1) {
            browser = 'Safari';
            version = ua.match(/Version\/([0-9.]+)/)?.[1] || 'Unknown';
        } else if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
            browser = 'IE';
            version = ua.match(/(MSIE |rv:)([0-9.]+)/)?.[2] || 'Unknown';
        }

        return { browser, version };
    }

    // Extract OS information
    function getOS() {
        const ua = navigator.userAgent;
        if (ua.indexOf('Win') > -1) return 'Windows';
        if (ua.indexOf('Mac') > -1) return 'MacOS';
        if (ua.indexOf('Linux') > -1) return 'Linux';
        if (ua.indexOf('Android') > -1) return 'Android';
        if (ua.indexOf('like Mac') > -1) return 'iOS';
        return 'Unknown';
    }

    // Get connection type if available
    function getConnectionType() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            return connection.effectiveType || connection.type || 'Unknown';
        }
        return 'Unknown';
    }

    // Get page load time
    function getPageLoadTime() {
        if (window.performance && window.performance.timing) {
            const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
            return loadTime > 0 ? Math.round(loadTime) : 0;
        }
        return 0;
    }

    const browserInfo = getBrowserInfo();

    // Compile all tracking data
    return {
        // Page info
        page: 'portfolio',
        url: window.location.href.substring(0, 200),
        referrer: document.referrer || 'direct',

        // Timestamp & Session
        timestamp: new Date().toISOString(),
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown',

        // Language
        language: navigator.language || navigator.userLanguage || 'Unknown',
        languages: navigator.languages ? navigator.languages.join(',').substring(0, 100) : 'Unknown',

        // Browser info
        browser: browserInfo.browser,
        browserVersion: browserInfo.version,
        userAgent: navigator.userAgent.substring(0, 200),
        platform: navigator.platform || 'Unknown',
        os: getOS(),

        // Device info
        deviceType: getDeviceType(),
        isMobile: /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry/.test(navigator.userAgent) ? 'true' : 'false',
        touchSupport: ('ontouchstart' in window || navigator.maxTouchPoints > 0) ? 'true' : 'false',

        // Screen info
        screenWidth: window.screen.width,
        screenHeight: window.screen.height,
        screenAvailWidth: window.screen.availWidth,
        screenAvailHeight: window.screen.availHeight,
        colorDepth: window.screen.colorDepth,
        pixelRatio: window.devicePixelRatio || 1,

        // Viewport info
        viewportWidth: window.innerWidth || document.documentElement.clientWidth,
        viewportHeight: window.innerHeight || document.documentElement.clientHeight,

        // Browser capabilities
        cookieEnabled: navigator.cookieEnabled ? 'true' : 'false',
        doNotTrack: navigator.doNotTrack || 'Unknown',
        onlineStatus: navigator.onLine ? 'online' : 'offline',

        // Connection & Performance
        connectionType: getConnectionType(),
        pageLoadTime: getPageLoadTime(),

        // Hardware info (if available)
        hardwareConcurrency: navigator.hardwareConcurrency || 'Unknown',
        deviceMemory: navigator.deviceMemory || 'Unknown',

        // Session info
        sessionId: getOrCreateSessionId(),
        isReturningVisitor: localStorage.getItem('portfolio_visited') ? 'true' : 'false'
    };
}

/**
 * Get or create a unique session ID
 */
function getOrCreateSessionId() {
    let sessionId = sessionStorage.getItem('portfolio_session_id');

    if (!sessionId) {
        // Generate a simple session ID based on timestamp and random number
        sessionId = Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
        sessionStorage.setItem('portfolio_session_id', sessionId);
    }

    // Mark as visited for returning visitor detection
    localStorage.setItem('portfolio_visited', 'true');

    return sessionId;
}

/**
 * Animate counter from 0 to target value
 */
function animateCounter(element, targetValue) {
    const duration = 1000; // 1 second
    const startTime = performance.now();
    const startValue = 0;

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutCubic)
        const easeProgress = 1 - Math.pow(1 - progress, 3);

        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeProgress);
        element.textContent = currentValue.toLocaleString();

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            // Cache the final count
            sessionStorage.setItem('portfolio_visit_count', targetValue);
        }
    }

    requestAnimationFrame(update);
}

/**
 * Check if visit was already tracked in this session
 */
function wasVisitTracked() {
    return sessionStorage.getItem('portfolio_visit_tracked') === 'true';
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
