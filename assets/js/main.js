/* ==========================================================================
   ZEN TECHNOLOGIES — Shared site behavior
   Nav, scroll-reveal, animated counters, expandable product cards,
   product grid rendering from products-data.js.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Sticky header ---------- */
  function initHeaderScroll() {
    var header = document.querySelector(".site-header");
    if (!header) return;
    function onScroll() {
      header.classList.toggle("scrolled", window.scrollY > 30);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Subtle hero parallax (radar layer drifts slower than scroll) ---------- */
  function initHeroParallax() {
    var layer = document.querySelector(".hero-bg");
    if (!layer) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    function onScroll() {
      var y = window.scrollY;
      if (y > window.innerHeight) return;
      layer.style.transform = "translate3d(0, " + (y * 0.18) + "px, 0)";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Live radar HUD: sweep-synced contact detection (Home hero) ---------- */
  function initRadarHud() {
    var svg = document.getElementById("radar-svg");
    var sweep = document.getElementById("radar-sweep");
    if (!svg || !sweep) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    var CENTER_X = 500, CENTER_Y = 380;
    var RADII = [260, 340, 190, 380, 230, 300];

    var blips = Array.prototype.slice.call(svg.querySelectorAll(".blip")).map(function (el, i) {
      return {
        el: el,
        label: el.querySelector(".blip-label"),
        radius: RADII[i],
        angle: parseFloat(el.getAttribute("data-angle")),
        hits: 0,
        status: "unknown",
        cooldownUntil: 0
      };
    });

    var contactsEl = document.getElementById("hud-contacts");
    var neutralizedEl = document.getElementById("hud-neutralized");
    var statusEl = document.getElementById("hud-status");
    var neutralizedCount = 0;

    function pad(n, len) {
      var s = String(n);
      while (s.length < len) s = "0" + s;
      return s;
    }
    function updateHud() {
      if (contactsEl) {
        var active = blips.filter(function (b) { return b.status !== "neutralized"; }).length;
        contactsEl.textContent = pad(active, 3);
      }
      if (neutralizedEl) neutralizedEl.textContent = pad(neutralizedCount, 4);
    }
    updateHud();

    function placeBlip(blip) {
      var rad = (blip.angle * Math.PI) / 180;
      var x = CENTER_X + blip.radius * Math.cos(rad);
      var y = CENTER_Y + blip.radius * Math.sin(rad);
      blip.el.setAttribute("transform", "translate(" + x.toFixed(1) + " " + y.toFixed(1) + ")");
      var onRight = Math.cos(rad) >= 0;
      blip.label.setAttribute("x", onRight ? "12" : "-12");
      blip.label.setAttribute("text-anchor", onRight ? "start" : "end");
    }
    blips.forEach(placeBlip);

    function respawn(blip) {
      blip.angle = Math.random() * 360;
      blip.radius = 190 + Math.random() * 210;
      blip.hits = 0;
      blip.status = "unknown";
      blip.el.classList.remove("hostile", "friendly", "scanning", "neutralizing", "neutralized");
      blip.label.textContent = "TRK-0" + (parseInt(blip.el.getAttribute("data-id"), 10) + 1);
      placeBlip(blip);
      updateHud();
    }

    function pingBlip(blip) {
      blip.el.classList.remove("pinged");
      void blip.el.getBoundingClientRect(); // restart CSS animation
      blip.el.classList.add("pinged");
      blip.hits++;

      if (blip.status === "unknown") {
        blip.status = "scanning";
        blip.el.classList.add("scanning");
      } else if (blip.status === "scanning") {
        var isHostile = Math.random() < 0.35;
        blip.status = isHostile ? "hostile" : "friendly";
        blip.el.classList.remove("scanning");
        blip.el.classList.add(blip.status);
        blip.label.textContent = isHostile ? "HOSTILE" : "FRIENDLY";
        if (statusEl && isHostile) statusEl.textContent = "THREAT DETECTED";
      } else if (blip.status === "hostile" && blip.hits >= 4) {
        blip.status = "neutralizing";
        blip.el.classList.add("neutralizing");
        blip.label.textContent = "NEUTRALIZED";
        window.setTimeout(function () {
          blip.el.classList.add("neutralized");
          blip.status = "neutralized";
          neutralizedCount++;
          updateHud();
          if (statusEl) statusEl.textContent = "MONITORING";
          window.setTimeout(function () { respawn(blip); }, 2200 + Math.random() * 1500);
        }, 550);
      }
    }

    // Click any contact to force an immediate scan, instead of waiting for the sweep
    blips.forEach(function (blip) {
      blip.el.addEventListener("click", function () {
        if (blip.status === "neutralized") return;
        pingBlip(blip);
        blip.cooldownUntil = performance.now() + 400;
      });
    });

    // Subtle mouse-parallax: the radar drifts slightly toward the cursor
    var heroEl = svg.closest(".hero");
    if (heroEl) {
      var rafPending = false;
      var targetX = 0, targetY = 0, curX = 0, curY = 0;
      heroEl.addEventListener("mousemove", function (e) {
        var rect = heroEl.getBoundingClientRect();
        targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1..1
        targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(applyParallax);
        }
      });
      heroEl.addEventListener("mouseleave", function () {
        targetX = 0; targetY = 0;
        if (!rafPending) { rafPending = true; requestAnimationFrame(applyParallax); }
      });
      function applyParallax() {
        curX += (targetX - curX) * 0.08;
        curY += (targetY - curY) * 0.08;
        svg.style.transform = "translate3d(" + (curX * 14).toFixed(1) + "px, " + (curY * 10).toFixed(1) + "px, 0)";
        if (Math.abs(targetX - curX) > 0.001 || Math.abs(targetY - curY) > 0.001) {
          requestAnimationFrame(applyParallax);
        } else {
          rafPending = false;
        }
      }
    }

    var lastAngle = null;
    function tick() {
      var anim = sweep.getAnimations ? sweep.getAnimations()[0] : null;
      var progress = 0;
      if (anim && anim.effect && anim.effect.getTiming) {
        var timing = anim.effect.getTiming();
        var duration = typeof timing.duration === "number" && timing.duration > 0 ? timing.duration : 8000;
        var current = typeof anim.currentTime === "number" ? anim.currentTime : (anim.currentTime && anim.currentTime.value) || 0;
        progress = (current % duration) / duration;
      }
      // sweep line points "up" (270°) at progress 0, rotating clockwise
      var currentAngle = (270 + progress * 360) % 360;

      if (lastAngle !== null) {
        var now = performance.now();
        blips.forEach(function (blip) {
          if (blip.status === "neutralized") return;
          var crossed;
          if (currentAngle >= lastAngle) {
            crossed = blip.angle >= lastAngle && blip.angle < currentAngle;
          } else {
            crossed = blip.angle >= lastAngle || blip.angle < currentAngle;
          }
          if (crossed && now > blip.cooldownUntil) {
            pingBlip(blip);
            blip.cooldownUntil = now + 400;
          }
        });
      }
      lastAngle = currentAngle;
      requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ---------- Mobile nav + mega menu expand ---------- */
  function initMobileNav() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".main-nav");
    var scrim = document.querySelector(".nav-scrim");
    if (!toggle || !nav) return;

    function close() {
      toggle.classList.remove("open");
      nav.classList.remove("open");
      if (scrim) scrim.classList.remove("open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.classList.add("open");
      nav.classList.add("open");
      if (scrim) scrim.classList.add("open");
      document.body.style.overflow = "hidden";
    }
    toggle.addEventListener("click", function () {
      nav.classList.contains("open") ? close() : open();
    });
    if (scrim) scrim.addEventListener("click", close);

    // On mobile, tapping a mega-menu parent expands instead of navigating away
    nav.querySelectorAll("li.has-mega > button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var li = btn.closest("li");
        if (window.innerWidth <= 980) {
          li.classList.toggle("expanded");
        }
      });
    });

    // close on link click (mobile)
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        if (window.innerWidth <= 980) close();
      });
    });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var targets = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!targets.length) return;
    if (!("IntersectionObserver" in window)) {
      targets.forEach(function (t) { t.classList.add("in"); });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- Animated counters ---------- */
  function animateCount(el) {
    var to = parseFloat(el.getAttribute("data-count-to"));
    var suffixEl = el.querySelector(".suffix");
    var duration = 1600;
    var start = null;
    var decimals = el.getAttribute("data-decimals") ? parseInt(el.getAttribute("data-decimals"), 10) : 0;

    function step(ts) {
      if (start === null) start = ts;
      var progress = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var val = to * eased;
      el.firstChild.nodeValue = decimals ? val.toFixed(decimals) : Math.round(val).toString();
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.firstChild.nodeValue = decimals ? to.toFixed(decimals) : to.toString();
      }
    }
    // Ensure a text node exists before the suffix span to hold the number
    if (!el.firstChild || el.firstChild.nodeType !== 3) {
      el.insertBefore(document.createTextNode("0"), el.firstChild);
    }
    requestAnimationFrame(step);
  }

  function initCounters() {
    var counters = document.querySelectorAll("[data-count-to]");
    if (!counters.length) return;
    if (!("IntersectionObserver" in window)) {
      counters.forEach(animateCount);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (c) { io.observe(c); });
  }

  /* ---------- Back to top ---------- */
  function initToTop() {
    var btn = document.querySelector(".to-top");
    if (!btn) return;
    window.addEventListener(
      "scroll",
      function () {
        btn.classList.toggle("show", window.scrollY > 600);
      },
      { passive: true }
    );
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ---------- Expandable product cards (event delegation) ---------- */
  function wireProductCard(card) {
    var head = card.querySelector(".p-head");
    var body = card.querySelector(".p-body");
    if (!head || !body) return;
    head.addEventListener("click", function () {
      var isOpen = card.classList.contains("open");
      if (isOpen) {
        card.classList.remove("open");
        body.style.maxHeight = 0;
      } else {
        card.classList.add("open");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  }
  function initProductCards() {
    document.querySelectorAll(".product-card").forEach(wireProductCard);
  }

  /* ---------- Render a product grid for a category page ---------- */
  function renderProductGrid(containerId, categoryId, imgPrefix) {
    var container = document.getElementById(containerId);
    if (!container || !window.ZEN_DATA) return;
    var cat = window.ZEN_DATA.categories.find(function (c) { return c.id === categoryId; });
    if (!cat) return;
    imgPrefix = imgPrefix || "";

    var html = cat.products
      .map(function (p, i) {
        var bullets = (p.bullets || [])
          .map(function (b) { return "<li>" + b + "</li>"; })
          .join("");
        var photo = p.img
          ? '<div class="p-photo"><img src="' + imgPrefix + esc(p.img) + '" alt="' + esc(p.name) + '" loading="lazy"></div>'
          : '<div class="p-photo no-photo"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1"/><path d="M12 1V4M12 20V23M1 12H4M20 12H23" stroke="currentColor" stroke-width="1"/></svg></div>';
        return (
          '<div class="product-card reveal" data-domain="' + esc(p.domain || "") + '" data-layer="' + esc(p.layer || "") + '">' +
            photo +
            '<button class="p-head" aria-expanded="false">' +
              '<span class="p-title-wrap">' +
                '<span class="idline">' + String(i + 1).padStart(2, "0") + " / " + esc(p.code || "") + "</span>" +
                "<h3>" + esc(p.name) + "</h3>" +
                '<span class="p-sub">' + esc(p.tagline || "") + "</span>" +
              "</span>" +
              '<span class="chevron"><svg viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></span>' +
            "</button>" +
            '<div class="p-body">' +
              '<div class="p-body-inner">' +
                "<p>" + esc(p.description || "") + "</p>" +
                '<ul class="p-bullets">' + bullets + "</ul>" +
                (p.slug ? '<a class="read-more-link" href="detail.html?p=' + esc(p.slug) + '">Full Specifications</a>' : "") +
              "</div>" +
            "</div>" +
          "</div>"
        );
      })
      .join("");
    container.innerHTML = html;
    initProductCards();
    initReveal();
  }

  function esc(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ---------- Fill category product counts anywhere on the page ---------- */
  function fillCategoryCounts() {
    if (!window.ZEN_DATA) return;
    document.querySelectorAll("[data-cat-count]").forEach(function (el) {
      var id = el.getAttribute("data-cat-count");
      var cat = window.ZEN_DATA.categories.find(function (c) { return c.id === id; });
      if (cat) el.textContent = cat.products.length;
    });
  }

  /* ---------- Footer year ---------- */
  function fillYear() {
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ---------- Contact form (client-side only) ---------- */
  function initContactForm() {
    var form = document.getElementById("contact-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form-status");
      if (status) {
        status.textContent = "Message received. A Zen Technologies representative will respond shortly.";
        status.classList.add("show");
      }
      form.reset();
    });
  }

  /* ---------- Manifesto toggle (About page: Think Slow / Act Fast) ---------- */
  function initManifestoToggle() {
    var toggle = document.querySelector(".manifesto-toggle");
    if (!toggle) return;
    var buttons = toggle.querySelectorAll("button");
    var panels = document.querySelectorAll(".manifesto-panel");
    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var target = btn.getAttribute("data-panel");
        buttons.forEach(function (b) { b.classList.toggle("active", b === btn); });
        panels.forEach(function (p) { p.classList.toggle("active", p.getAttribute("data-panel") === target); });
      });
    });
  }

  /* ---------- Expandable timeline (About page milestones) ---------- */
  function initTimelineExpand() {
    document.querySelectorAll(".timeline-item.expandable").forEach(function (item) {
      var head = item.querySelector(".tl-head");
      var body = item.querySelector(".tl-body");
      if (!head || !body) return;
      head.addEventListener("click", function () {
        var isOpen = item.classList.contains("open");
        if (isOpen) {
          item.classList.remove("open");
          body.style.maxHeight = 0;
        } else {
          item.classList.add("open");
          body.style.maxHeight = body.scrollHeight + "px";
        }
      });
    });
  }

  /* ---------- Expandable leadership cards (About page) ---------- */
  function initLeaderExpand() {
    document.querySelectorAll(".leader-card.expandable").forEach(function (card) {
      function toggle() {
        var isOpen = card.classList.toggle("open");
        card.setAttribute("aria-expanded", isOpen ? "true" : "false");
      }
      card.addEventListener("click", toggle);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggle();
        }
      });
    });
  }

  /* ---------- Readiness tier selector (Combat Training Centre page) ---------- */
  function initTierChips() {
    var chips = document.querySelectorAll(".tier-chip");
    var detail = document.querySelector(".tier-detail");
    if (!chips.length || !detail) return;
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        detail.innerHTML = chip.getAttribute("data-detail") || "";
      });
    });
  }

  /* ---------- Domain filter chips (Virtual Simulation page) ---------- */
  function initDomainFilter() {
    var bar = document.querySelector(".domain-filter");
    if (!bar) return;
    var chips = bar.querySelectorAll(".domain-chip");
    var countEl = document.querySelector(".domain-filter-count");

    function apply(domain) {
      var cards = document.querySelectorAll("#grid-virtual-simulation .product-card");
      var shown = 0;
      cards.forEach(function (card) {
        var matches = domain === "All" || card.getAttribute("data-domain") === domain;
        card.style.display = matches ? "" : "none";
        if (matches) shown++;
      });
      if (countEl) countEl.textContent = shown;
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        apply(chip.getAttribute("data-domain"));
      });
    });
  }

  /* ---------- Chip-select groups (Contact form) ---------- */
  function initChipSelects() {
    document.querySelectorAll(".chip-select").forEach(function (group) {
      var hiddenInput = document.getElementById(group.getAttribute("data-hidden-input"));
      var options = group.querySelectorAll(".chip-option");
      options.forEach(function (opt) {
        opt.addEventListener("click", function () {
          options.forEach(function (o) { o.classList.toggle("active", o === opt); });
          if (hiddenInput) hiddenInput.value = opt.getAttribute("data-value") || "";
        });
      });
    });
  }

  /* ---------- Clickable ring diagram (Anti Drone page) ---------- */
  function initRingDiagram() {
    var groups = document.querySelectorAll(".ring-group");
    if (!groups.length) return;

    function activateLayer(layer) {
      var grid = document.getElementById("grid-anti-drone-system");
      if (!grid || !layer) return;
      var matches = Array.prototype.filter.call(grid.querySelectorAll(".product-card"), function (c) {
        return c.getAttribute("data-layer") === layer;
      });
      if (!matches.length) return;
      matches[0].scrollIntoView({ behavior: "smooth", block: "center" });
      matches.forEach(function (card) {
        card.classList.remove("flash-highlight");
        void card.offsetWidth; // restart animation
        card.classList.add("flash-highlight");
      });
    }

    groups.forEach(function (g) {
      g.addEventListener("click", function () { activateLayer(g.getAttribute("data-layer")); });
      g.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateLayer(g.getAttribute("data-layer"));
        }
      });
    });
  }

  /* ---------- Readiness Score HUD gauge (Home page) ---------- */
  function initHudGauge() {
    var gauge = document.querySelector(".hud-gauge");
    if (!gauge) return;
    var fill = gauge.querySelector(".hud-fill");
    var scoreEl = gauge.querySelector(".hud-score");
    var tierEl = document.querySelector(".hud-tier");
    var chips = document.querySelectorAll(".hud-chip");
    var circumference = 2 * Math.PI * 86;
    var current = 0;

    function animateTo(score) {
      var offset = circumference * (1 - score / 100);
      fill.style.strokeDashoffset = offset;
      var start = current;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / 700, 1);
        var eased = 1 - Math.pow(1 - progress, 3);
        var val = Math.round(start + (score - start) * eased);
        scoreEl.textContent = val;
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          current = score;
        }
      }
      requestAnimationFrame(step);
    }

    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        chips.forEach(function (c) { c.classList.toggle("active", c === chip); });
        tierEl.textContent = chip.getAttribute("data-tier") || "";
        animateTo(parseInt(chip.getAttribute("data-score"), 10) || 0);
      });
    });

    if (!("IntersectionObserver" in window)) {
      var active = document.querySelector(".hud-chip.active");
      if (active) animateTo(parseInt(active.getAttribute("data-score"), 10) || 0);
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var active = document.querySelector(".hud-chip.active");
            if (active) animateTo(parseInt(active.getAttribute("data-score"), 10) || 0);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(gauge);
  }

  /* ---------- Boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    initHeaderScroll();
    initHeroParallax();
    initRadarHud();
    initMobileNav();
    initReveal();
    initCounters();
    initToTop();
    initProductCards();
    fillCategoryCounts();
    fillYear();
    initContactForm();
    initManifestoToggle();
    initTimelineExpand();
    initLeaderExpand();
    initTierChips();
    initHudGauge();
    initDomainFilter();
    initRingDiagram();
    initChipSelects();
  });

  // expose for category pages to call after data-driven render
  /* ---------- Product detail page (products/detail.html?p=slug) ---------- */
  function renderProductDetail() {
    var host = document.getElementById("product-detail");
    if (!host || !window.ZEN_DATA) return;

    var slug = new URLSearchParams(window.location.search).get("p");
    var product = null, category = null;
    window.ZEN_DATA.categories.forEach(function (cat) {
      cat.products.forEach(function (p) {
        if (p.slug === slug) { product = p; category = cat; }
      });
    });

    if (!product) {
      host.innerHTML = '<div class="container"><p class="center-text">We couldn\'t find that product. <a href="../products.html" style="color:var(--accent);">Browse the full portfolio →</a></p></div>';
      return;
    }

    document.title = product.name + " | Zen Technologies";
    var catPage = category.id + ".html";

    // Breadcrumb + hero
    var breadcrumb = document.getElementById("detail-breadcrumb");
    if (breadcrumb) {
      breadcrumb.innerHTML =
        '<a href="../index.html">Home</a> / <a href="../products.html">Solutions</a> / ' +
        '<a href="' + esc(catPage) + '">' + esc(category.short) + '</a> / ' + esc(product.name);
    }
    var eyebrow = document.getElementById("detail-eyebrow");
    if (eyebrow) eyebrow.textContent = category.short;
    var titleEl = document.getElementById("detail-title");
    if (titleEl) titleEl.textContent = product.name;
    var taglineEl = document.getElementById("detail-tagline");
    if (taglineEl) taglineEl.textContent = product.tagline || "";
    var tagsEl = document.getElementById("detail-tags");
    if (tagsEl) {
      var tags = [];
      if (product.code) tags.push('<span class="tag hud">' + esc(product.code) + "</span>");
      tags.push('<span class="tag">' + esc(category.short) + "</span>");
      if (product.domain) tags.push('<span class="tag steel">' + esc(product.domain) + "</span>");
      if (product.layer) tags.push('<span class="tag steel">' + esc(product.layer) + " Layer</span>");
      tagsEl.innerHTML = tags.join("");
    }

    // Hero media: video > image > generated fallback
    var media;
    if (product.video) {
      media =
        '<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(product.video) +
        '?rel=0&modestbranding=1" title="' + esc(product.name) + '" referrerpolicy="strict-origin-when-cross-origin" ' +
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>' +
        '<p class="video-fallback-link"><a href="https://www.youtube.com/watch?v=' + esc(product.video) + '" target="_blank" rel="noopener">Watch on YouTube ↗</a></p>';
    } else if (product.img) {
      media = '<div class="detail-hero-media"><img src="../' + esc(product.img) + '" alt="' + esc(product.name) + '" loading="lazy"></div>';
    } else {
      media =
        '<div class="detail-hero-media"><div class="no-photo"><svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="1"/><circle cx="12" cy="12" r="4.5" stroke="currentColor" stroke-width="1"/><path d="M12 1V4M12 20V23M1 12H4M20 12H23" stroke="currentColor" stroke-width="1"/></svg></div></div>';
    }

    // Specs table
    var specsHtml = "";
    if (product.specs && product.specs.length) {
      specsHtml =
        "<h2>Technical Specifications</h2><div class=\"specs-table\">" +
        product.specs
          .map(function (row) {
            return (
              '<div class="spec-row"><div class="spec-label">' + esc(row[0]) + '</div><div class="spec-value">' + esc(row[1]) + "</div></div>"
            );
          })
          .join("") +
        "</div>";
    }

    // Bullets
    var bulletsHtml = "";
    if (product.bullets && product.bullets.length) {
      bulletsHtml =
        "<h2>Key Capabilities</h2><ul class=\"detail-bullets\">" +
        product.bullets.map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("") +
        "</ul>";
    }

    host.innerHTML =
      '<div class="container">' +
        '<div class="detail-layout">' +
          '<div class="detail-main reveal">' +
            media +
            "<h2>Overview</h2>" +
            '<p class="lede-text">' + esc(product.longDescription || product.description || "") + "</p>" +
            bulletsHtml +
            specsHtml +
          "</div>" +
          '<div class="detail-sidebar reveal">' +
            '<div class="detail-card">' +
              "<h3>At A Glance</h3>" +
              '<div class="detail-meta-list">' +
                '<div class="m-row"><span class="m-label">Category</span><span class="m-value">' + esc(category.short) + "</span></div>" +
                (product.code ? '<div class="m-row"><span class="m-label">Model / Code</span><span class="m-value">' + esc(product.code) + "</span></div>" : "") +
                (product.domain ? '<div class="m-row"><span class="m-label">Domain</span><span class="m-value">' + esc(product.domain) + "</span></div>" : "") +
                (product.layer ? '<div class="m-row"><span class="m-label">CUAS Layer</span><span class="m-value">' + esc(product.layer) + "</span></div>" : "") +
              "</div>" +
            "</div>" +
            '<div class="detail-card">' +
              "<h3>Talk To Zen</h3>" +
              '<p style="font-size:0.88rem; color:var(--ink-2); margin-bottom:16px;">Request a full spec sheet or a live demonstration of this system.</p>' +
              '<a href="../contact.html" class="btn btn-primary btn-arrow" style="width:100%; justify-content:center;">Request a Briefing</a>' +
            "</div>" +
            '<div class="detail-card">' +
              "<h3>Part Of</h3>" +
              '<p style="font-size:0.88rem; color:var(--ink-2); margin-bottom:16px;">' + esc(category.description || "") + "</p>" +
              '<a href="' + esc(catPage) + '" class="btn btn-ghost" style="width:100%; justify-content:center;">View ' + esc(category.short) + "</a>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>";

    // Related products (same category, excluding this one)
    var relatedSection = document.getElementById("related-section");
    var relatedGrid = document.getElementById("related-grid");
    var relatedHeading = document.getElementById("related-heading");
    if (relatedSection && relatedGrid) {
      var others = category.products.filter(function (p) { return p.slug !== slug; }).slice(0, 4);
      if (others.length) {
        if (relatedHeading) relatedHeading.textContent = "More In " + category.short;
        relatedGrid.innerHTML = others
          .map(function (p) {
            return (
              '<a class="related-card" href="detail.html?p=' + esc(p.slug || "") + '">' +
                '<span class="r-code">' + esc(p.code || "") + "</span>" +
                "<h4>" + esc(p.name) + "</h4>" +
              "</a>"
            );
          })
          .join("");
        relatedSection.style.display = "";
      }
    }

    initReveal();
  }

  window.ZenSite = {
    renderProductGrid: renderProductGrid,
    renderProductDetail: renderProductDetail,
    initReveal: initReveal
  };
})();
