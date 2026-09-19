/* Pahal Investment — shared script */
(function () {
  "use strict";

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Contact form → mailto (no backend) — official email only
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

      var mailto =
        "mailto:pahalinvestment42@gmail.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }

  // Lightweight canvas particles for 3D hero (pointer-events handled in CSS)
  var canvas = document.getElementById("hero-particles");
  if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
    var particles = [];
    var raf = 0;
    var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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
      var count = Math.min(48, Math.floor((w * h) / 18000));
      for (var i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 1.2 + Math.random() * 2.4,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          a: 0.15 + Math.random() * 0.35
        });
      }
    }

    function draw() {
      var parent = canvas.parentElement;
      if (!parent) return;
      var w = parent.clientWidth;
      var h = parent.clientHeight;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        if (!reduceMotion) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > w) p.vx *= -1;
          if (p.y < 0 || p.y > h) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.fillStyle = "rgba(75, 139, 130, " + p.a + ")";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
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
