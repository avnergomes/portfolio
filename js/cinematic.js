/* ============================================================
 * cinematic.js — the motion director
 * Loaded after gsap / ScrollTrigger / lenis (vendored) and after main.js.
 * See CINEMATIC.md. Timing law: min 0.6s, eases power3/expo only,
 * 0.2s stagger. Animate transform + opacity only (60fps target).
 *
 * Crawler-safe: html.cinematic is added ONLY when GSAP is live and
 * reduced-motion is off. Without it, every "from" state in cinematic.css
 * is inert, so content is fully visible to JS-less / LLM crawlers.
 * ============================================================ */
(function () {
  'use strict';

  var html = document.documentElement;
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var hasGSAP = !!(window.gsap && window.ScrollTrigger);
  var hasLenis = !!window.Lenis;
  var NAV_OFFSET = 70; // fixed navbar height

  /* ---------- Client logo manifest (used by every path, so declared up top) ----------
   * Explicit slug -> filename map (supplied files have arbitrary names /
   * extensions). Only files known to exist are listed, so there are zero 404s.
   * Clients absent from the map keep their text wordmark. */
  var CLIENT_LOGO_FILES = {
    'jw-hulme': 'jwhulmeco.png',
    'orbify': 'orbify.jpg',
    'adryada': 'adryada.png',
    'idr-parana': 'idr-parana.png',
    'sequoia-highland-camp': 'Sequoia_highland_camp_logo.png',
    'doggy-dates': 'doggydates.png',
    'kobe-interior-fabrics': 'kobe.png',
    'one-amazon': 'one-amazon.jpg',
    'capital-certainty': 'capitalcertainty.png',
    'deep-grain': 'deepgrain.png',
    'flai-data': 'flaidata.svg',
    'qatarenergy': 'qatarenergy.jpg',
    'rebel-group': 'rebelgroup.webp'
    // green-circle, ventura-pet: no file provided -> text wordmark.
  };
  // White/very-light logos (built for dark backgrounds) -> invert on the light chip.
  var CLIENT_LOGO_INVERT = { 'capital-certainty': 1, 'deep-grain': 1 };

  /* ---------- Anchor scrolling (runs in EVERY path) ----------
   * We own all in-page anchor scrolling here so main.js's smooth-scroll
   * block can be removed and never fight Lenis. */
  var lenis = null;

  function scrollToTarget(target) {
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target, { offset: -NAV_OFFSET, duration: 1.2 });
    } else {
      var top = target.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top: top, behavior: prefersReduced ? 'auto' : 'smooth' });
    }
  }

  function bindAnchors() {
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var href = a.getAttribute('href');
      if (!href || href === '#') return;
      a.addEventListener('click', function (e) {
        var target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        scrollToTarget(target);
      });
    });
  }

  /* ---------- Reduced-motion / no-lib path ----------
   * Content is already visible (no .cinematic class). Just wire anchors. */
  if (prefersReduced || !hasGSAP) {
    bindAnchors();
    loadClientLogos(); // upgrade wordmarks to logos statically (no marquee)
    return;
  }

  /* ---------- Full cinematic path ---------- */
  gsap.registerPlugin(ScrollTrigger);
  html.classList.add('cinematic');

  // Lenis smooth scroll, driven by a single GSAP ticker (no double rAF).
  if (hasLenis) {
    lenis = new Lenis({
      duration: 1.1,
      easing: function (t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); }, // expo-out feel
      smoothWheel: true,
      touchMultiplier: 1.4
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (time) { lenis.raf(time * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  bindAnchors();

  /* ============ HERO BACKGROUND — Ken Burns + scroll parallax ============
   * Ken Burns animates scale + xPercent (ambient loop); parallax animates
   * yPercent (scrub). Different transform axes => they compose, no conflict.
   * Eases: ambient loop uses power1.inOut and the scrub uses 'none' — both
   * exempt from the entrance ease law (see CINEMATIC.md §2). */
  function initHeroMedia() {
    var media = document.querySelector('.hero-media');
    if (!media) return;

    // Slow cinematic zoom + horizontal drift, forever, gently.
    gsap.fromTo(media,
      { scale: 1.04, xPercent: 0 },
      { scale: 1.12, xPercent: -2, duration: 20, ease: 'power1.inOut', repeat: -1, yoyo: true }
    );

    // Parallax: as you leave the hero, the canopy sinks while the content
    // rises and fades — the two layers move on different vectors, so the
    // shot reads like a camera dolly rather than a flat page scroll.
    ScrollTrigger.matchMedia({
      '(min-width: 769px)': function () {
        gsap.to(media, {
          yPercent: 24,
          ease: 'none',
          scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true }
        });
        gsap.to('.hero-content', {
          yPercent: -16,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true }
        });
      }
    });
  }

  /* ============ HERO CANVAS — particle / data-mesh field ============ */
  function initHeroCanvas() {
    var hero = document.getElementById('home');
    var canvas = document.getElementById('hero-canvas');
    if (!hero || !canvas) return;

    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 1.5); // cap DPR for mobile perf
    var W = 0, H = 0;
    var points = [];
    var raf = null;
    var running = false;
    var mouse = { x: -9999, y: -9999 };

    // Read brand hues from CSS so the canvas stays on-theme.
    var ACCENT = 'oklch(74% 0.14 60)';      // amber
    var COOL = 'oklch(60% 0.18 240)';        // dusk-blue

    function countForWidth(w) {
      if (w < 600) return 28;
      if (w < 1000) return 48;
      return 72;
    }

    function resize() {
      W = hero.clientWidth;
      H = hero.clientHeight;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      canvas.style.width = W + 'px';
      canvas.style.height = H + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    function seed() {
      var n = countForWidth(W);
      points = [];
      for (var i = 0; i < n; i++) {
        points.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: Math.random() * 1.6 + 0.6
        });
      }
    }

    var LINK_DIST = 140;
    function frame() {
      ctx.clearRect(0, 0, W, H);
      var i, p, q, j, dx, dy, dist;

      for (i = 0; i < points.length; i++) {
        p = points[i];
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // gentle pointer attraction (desktop only)
        dx = p.x - mouse.x; dy = p.y - mouse.y;
        dist = dx * dx + dy * dy;
        if (dist < 14000) {
          p.x += dx * 0.0009;
          p.y += dy * 0.0009;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'oklch(82% 0.02 250 / 0.55)';
        ctx.fill();
      }

      // constellation links
      for (i = 0; i < points.length; i++) {
        p = points[i];
        for (j = i + 1; j < points.length; j++) {
          q = points[j];
          dx = p.x - q.x; dy = p.y - q.y;
          dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            var a = (1 - dist / LINK_DIST) * 0.22;
            ctx.strokeStyle = (i % 5 === 0)
              ? 'oklch(74% 0.14 60 / ' + a.toFixed(3) + ')'   // occasional amber line
              : 'oklch(70% 0.04 250 / ' + a.toFixed(3) + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    function start() { if (!running) { running = true; frame(); } }
    function stop() { running = false; if (raf) cancelAnimationFrame(raf); raf = null; }

    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) stop(); else start();
    });
    if (window.matchMedia('(pointer:fine)').matches) {
      hero.addEventListener('mousemove', function (e) {
        var rect = hero.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
      }, { passive: true });
      hero.addEventListener('mouseleave', function () { mouse.x = -9999; mouse.y = -9999; });
    }

    // Pause the field once the hero scrolls off-screen (save battery/CPU).
    ScrollTrigger.create({
      trigger: hero,
      start: 'top bottom',
      end: 'bottom top',
      onToggle: function (self) { self.isActive ? start() : stop(); }
    });

    resize();
    start();
  }

  /* ============ HERO REVEAL TIMELINE ============ */
  function initHeroReveal() {
    var tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: 0.9 } });
    tl.to('.hero-greeting', { opacity: 1, y: 0 }, 0.1)
      .to('.hero-title', { opacity: 1, y: 0, duration: 1.1 }, 0.3)
      .to('.hero-subtitle', { opacity: 1, y: 0 }, 0.5)
      .to('.hero-description', { opacity: 1, y: 0 }, 0.7)
      .to('.hero-buttons', { opacity: 1, y: 0 }, 0.9)
      .to('.hero-image', { opacity: 1, scale: 1, duration: 1.2, ease: 'expo.out' }, 0.4);
  }

  /* ============ SCROLL CUE — fade out on first descent ============ */
  function initScrollCue() {
    var cue = document.querySelector('.hero-scroll');
    if (!cue) return;
    gsap.to(cue, {
      opacity: 0,
      y: 14,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '#home',
        start: 'top top',
        end: '12% top',
        scrub: true
      }
    });
  }

  /* ============ GENERIC SCROLL REVEALS ============ */
  function initReveals() {
    gsap.utils.toArray('[data-reveal]').forEach(function (el) {
      gsap.to(el, {
        opacity: 1, x: 0, y: 0, scale: 1,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 82%', once: true }
      });
    });
  }

  /* ============ STAGGERED GROUPS (about stats, flagship metrics, grids) ============ */
  function initGroups() {
    gsap.utils.toArray('[data-reveal-group]').forEach(function (group) {
      var items = group.querySelectorAll('[data-reveal-item]');
      if (!items.length) return;
      gsap.set(items, { opacity: 0, y: 32 });
      gsap.to(items, {
        opacity: 1, y: 0,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.2, // CINEMATIC.md law
        scrollTrigger: { trigger: group, start: 'top 80%', once: true }
      });
    });
  }

  /* ============ METRIC COUNT-UP ============ */
  function animateCount(el) {
    var raw = (el.getAttribute('data-count') || el.textContent || '').trim();
    var m = raw.match(/^([^\d-]*)([\d.,]+)(.*)$/); // prefix, number, suffix
    if (!m) return;
    var prefix = m[1], suffix = m[3];
    var target = parseFloat(m[2].replace(/,/g, ''));
    if (isNaN(target)) return;
    var decimals = (m[2].split('.')[1] || '').length;
    var obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.4,
      ease: 'power3.out',
      scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      onUpdate: function () {
        var val = decimals ? obj.v.toFixed(decimals) : Math.round(obj.v);
        // re-insert thousands separators for large ints
        if (!decimals && target >= 1000) {
          val = Math.round(obj.v).toLocaleString('en-US');
        }
        el.textContent = prefix + val + suffix;
      }
    });
  }
  function initCounters() {
    document.querySelectorAll('[data-count]').forEach(animateCount);
  }

  /* ============ CONTENT REVEALS — projects, services, cards, titles ============
   * Programmatic so the initial hidden state is set by JS (gsap.set), never CSS.
   * No JS / crawler => elements keep their natural visibility. Crawler-safe. */
  function initContentReveals() {
    var selector = [
      '.section-title', '.section-subtitle',
      '.services .service-card',
      '.projects .project-card',
      '.articles .article-card',
      '.testimonials .testimonial-card',
      '.skills-grid .skill-category'
    ].join(', ');
    var els = gsap.utils.toArray(selector);
    if (!els.length) return;
    gsap.set(els, { opacity: 0, y: 32 });
    ScrollTrigger.batch(els, {
      start: 'top 86%',
      once: true,
      onEnter: function (batch) {
        gsap.to(batch, {
          opacity: 1, y: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.12, // tighter than the 0.2 sequence law: grids would drag at 0.2
          overwrite: true
        });
      }
    });
  }

  /* ============ CLIENT LOGOS — running marquee ============
   * Each .client-logo starts as a text wordmark and is upgraded to its
   * official logo only if a file exists at assets/clients/<slug>.(svg|png|webp).
   * Probing-then-swapping (vs <img> + onerror) means: no broken images ever,
   * crawlers still get the names, and the swap finishes BEFORE we clone the
   * track for the marquee. Used by both the reduced-motion and full paths. */
  function loadClientLogos(done) {
    var cells = Array.prototype.slice.call(document.querySelectorAll('.client-logo[data-logo]'));
    if (!cells.length) { if (done) done(); return; }
    var pending = cells.length;
    function settle() { if (--pending === 0 && done) done(); }
    cells.forEach(function (cell) {
      var file = CLIENT_LOGO_FILES[cell.getAttribute('data-logo')];
      if (!file) { settle(); return; }                 // no logo -> keep wordmark
      var url = 'assets/clients/' + file;
      var probe = new Image();
      probe.onload = function () {
        var img = document.createElement('img');
        img.className = 'client-logo-img';
        if (CLIENT_LOGO_INVERT[cell.getAttribute('data-logo')]) {
          img.className += ' client-logo-img--invert';
        }
        img.src = url;
        img.alt = (cell.textContent || '').trim();
        img.loading = 'lazy';
        cell.textContent = '';
        cell.appendChild(img);
        settle();
      };
      probe.onerror = settle;
      probe.src = url;
    });
  }

  // Full path only: clone the resolved track and run the infinite marquee.
  function initClientMarquee() {
    var track = document.querySelector('[data-marquee-track]');
    if (!track) return;
    loadClientLogos(function () { buildMarquee(track); });
  }

  function buildMarquee(track) {
    var originals = Array.prototype.slice.call(track.children);
    if (!originals.length) return;

    // Duplicate the resolved set for a seamless -50% loop.
    originals.forEach(function (node) {
      var clone = node.cloneNode(true);
      clone.setAttribute('aria-hidden', 'true');
      track.appendChild(clone);
    });

    // Speed scales with logo count (constant px/sec feel).
    var duration = Math.max(18, originals.length * 2.6);
    var tween = gsap.to(track, { xPercent: -50, duration: duration, ease: 'none', repeat: -1 });

    // Gentle fade-in of the strip when it scrolls into view.
    gsap.from(track, {
      opacity: 0, y: 28, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#clients', start: 'top 82%', once: true }
    });

    // Slow on hover (desktop affordance).
    var marquee = track.closest('[data-marquee]');
    if (marquee && window.matchMedia('(pointer:fine)').matches) {
      marquee.addEventListener('mouseenter', function () { tween.timeScale(0.15); });
      marquee.addEventListener('mouseleave', function () { tween.timeScale(1); });
    }

    // Idle the tween while the section is off-screen.
    ScrollTrigger.create({
      trigger: '#clients',
      start: 'top bottom', end: 'bottom top',
      onToggle: function (self) { self.isActive ? tween.resume() : tween.pause(); }
    });
  }

  /* ============ FLAGSHIP (DataGeo) PINNED BEAT ============ */
  function initFlagship() {
    var section = document.getElementById('flagship');
    if (!section) return;
    var stage = section.querySelector('.flagship-stage');
    var items = section.querySelectorAll('[data-flagship-item]');
    if (!stage || !items.length) return;

    // Desktop only: pin the stage and reveal items as a slow dolly.
    ScrollTrigger.matchMedia({
      '(min-width: 969px)': function () {
        gsap.set(items, { opacity: 0, y: 40 });
        var tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: '+=120%',
            pin: stage,
            scrub: 1,
            anticipatePin: 1
          }
        });
        tl.to(items, {
          opacity: 1, y: 0,
          ease: 'power3.out',
          stagger: 0.2,
          duration: 1
        });
      },
      '(max-width: 968px)': function () {
        // Mobile: no pin. Simple sequential reveal, same aesthetic, cheaper.
        gsap.set(items, { opacity: 0, y: 32 });
        gsap.to(items, {
          opacity: 1, y: 0,
          ease: 'power3.out',
          stagger: 0.2,
          duration: 0.9,
          scrollTrigger: { trigger: section, start: 'top 75%', once: true }
        });
      }
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initHeroMedia();
    initHeroCanvas();
    initHeroReveal();
    initScrollCue();
    initReveals();
    initGroups();
    initContentReveals();
    initClientMarquee();
    initCounters();
    initFlagship();
    // Recompute trigger positions after fonts/images settle.
    ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
