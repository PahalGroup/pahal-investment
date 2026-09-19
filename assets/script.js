/* Pahal Investment — shared script */
(function () {
  "use strict";

  // Mobile nav toggle (+ body scroll lock while open)
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  function setNavOpen(open) {
    if (!toggle || !links) return;
    links.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    document.body.classList.toggle("nav-open", open);
  }
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      setNavOpen(!links.classList.contains("open"));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        setNavOpen(false);
      });
    });
    // Close on Escape / resize to desktop
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setNavOpen(false);
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 860) setNavOpen(false);
    });
  }

  // Contact form → mailto (official email only)
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = (form.querySelector('[name="name"]') || {}).value || "";
      var email = (form.querySelector('[name="email"]') || {}).value || "";
      var phone = (form.querySelector('[name="phone"]') || {}).value || "";
      var topic = (form.querySelector('[name="topic"]') || {}).value || "General enquiry";
      var message = (form.querySelector('[name="message"]') || {}).value || "";

      var subject = "Pahal Investment enquiry — " + topic;
      var body =
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Phone: " + phone + "\n" +
        "Topic: " + topic + "\n\n" +
        message;

      window.location.href =
        "mailto:pahalinvestment42@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);
    });
  }

  // Social: pop animation then open link
  document.querySelectorAll("[data-social-link]").forEach(function (el) {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      var href = el.getAttribute("href");
      el.classList.remove("pop");
      void el.offsetWidth;
      el.classList.add("pop");
      setTimeout(function () {
        el.classList.remove("pop");
        if (href) window.open(href, "_blank", "noopener,noreferrer");
      }, 280);
    });
  });

  // Hero 3D stage canvas — particles + soft geometry lines (pointer-events:none via CSS)
  var canvas = document.getElementById("hero-canvas");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var raf = 0;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    var t = 0;

    function resize() {
      var parent = canvas.parentElement;
      if (!parent) return;
      var rect = parent.getBoundingClientRect();
      var dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function seed() {
      particles = [];
      var parent = canvas.parentElement;
      if (!parent) return;
      var w = parent.clientWidth;
      var h = parent.clientHeight;
      var count = Math.min(55, Math.floor((w * h) / 14000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1 + Math.random() * 2.8,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          a: 0.2 + Math.random() * 0.45
        });
      }
    }

    function draw() {
      var parent = canvas.parentElement;
      if (!parent) return;
      var w = parent.clientWidth;
      var h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);

      // Soft grid
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      ctx.lineWidth = 1;
      var step = 36;
      for (var gx = 0; gx < w; gx += step) {
        ctx.beginPath(); ctx.moveTo(gx, 0); ctx.lineTo(gx, h); ctx.stroke();
      }
      for (var gy = 0; gy < h; gy += step) {
        ctx.beginPath(); ctx.moveTo(0, gy); ctx.lineTo(w, gy); ctx.stroke();
      }

      // Floating chart line
      if (!reduceMotion) t += 0.008;
      ctx.beginPath();
      ctx.strokeStyle = "rgba(196,163,90,0.45)";
      ctx.lineWidth = 2;
      for (var x = 0; x <= w; x += 4) {
        var y = h * 0.55 + Math.sin(x * 0.02 + t) * 28 + Math.cos(x * 0.01 - t * 0.7) * 14;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();

      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.fillStyle = "rgba(255,255,255," + p.a + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Connect nearby particles
      ctx.strokeStyle = "rgba(255,255,255,0.08)";
      ctx.lineWidth = 1;
      for (var a = 0; a < particles.length; a++) {
        for (var b = a + 1; b < particles.length; b++) {
          var dx = particles[a].x - particles[b].x;
          var dy = particles[a].y - particles[b].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 90) {
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    }

    resize();
    seed();
    draw();
    window.addEventListener("resize", function () {
      cancelAnimationFrame(raf);
      resize();
      seed();
      draw();
    });
  }
})();
