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

  // Contact form → mailto (no backend)
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
        "mailto:pahalinvestment@outlook.com" +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      window.location.href = mailto;
    });
  }
})();
