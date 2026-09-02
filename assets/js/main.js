(function () {
  "use strict";

  // Ano no rodapé
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Menu mobile
  var toggle = document.getElementById("nav-toggle");
  var nav = document.getElementById("main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Header com sombra ao rolar (vidro líquido)
  var header = document.getElementById("header");
  var onScroll = function () {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Scroll reveal
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in-view"); });
  }

  // Carrossel do hero (Home)
  var heroSlides = document.querySelectorAll(".hero-slide");
  var heroDots = document.querySelectorAll(".hero-dot");
  if (heroSlides.length > 1) {
    var heroIndex = 0;
    var heroTimer = null;

    var goToHeroSlide = function (index) {
      heroSlides[heroIndex].classList.remove("is-active");
      heroDots[heroIndex] && heroDots[heroIndex].classList.remove("is-active");
      heroIndex = index;
      heroSlides[heroIndex].classList.add("is-active");
      heroDots[heroIndex] && heroDots[heroIndex].classList.add("is-active");
    };

    var startHeroTimer = function () {
      clearInterval(heroTimer);
      heroTimer = setInterval(function () {
        goToHeroSlide((heroIndex + 1) % heroSlides.length);
      }, 6000);
    };

    heroDots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goToHeroSlide(i);
        startHeroTimer();
      });
    });

    startHeroTimer();
  }

  // Carrossel de depoimentos
  var testimonialSlides = document.querySelectorAll(".testimonial-slide");
  var testimonialDots = document.querySelectorAll(".testimonial-dot");
  if (testimonialSlides.length > 1) {
    var tIndex = 0;
    var tTimer = null;

    var goToTestimonial = function (index) {
      testimonialSlides[tIndex].classList.remove("is-active");
      testimonialDots[tIndex] && testimonialDots[tIndex].classList.remove("is-active");
      tIndex = index;
      testimonialSlides[tIndex].classList.add("is-active");
      testimonialDots[tIndex] && testimonialDots[tIndex].classList.add("is-active");
    };

    var startTestimonialTimer = function () {
      clearInterval(tTimer);
      tTimer = setInterval(function () {
        goToTestimonial((tIndex + 1) % testimonialSlides.length);
      }, 5000);
    };

    testimonialDots.forEach(function (dot, i) {
      dot.addEventListener("click", function () {
        goToTestimonial(i);
        startTestimonialTimer();
      });
    });

    startTestimonialTimer();
  }

  // FAQ (acordeão)
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var question = item.querySelector(".faq-question");
    var answer = item.querySelector(".faq-answer");
    question.addEventListener("click", function () {
      var isOpen = item.classList.contains("is-open");
      if (isOpen) {
        answer.style.maxHeight = "0px";
        item.classList.remove("is-open");
        question.setAttribute("aria-expanded", "false");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        item.classList.add("is-open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Contador animado (estatísticas)
  var counters = document.querySelectorAll(".stat-number[data-count]");
  if (counters.length && "IntersectionObserver" in window) {
    var animateCount = function (el) {
      var target = parseInt(el.getAttribute("data-count"), 10) || 0;
      var duration = 900;
      var start = null;

      function step(ts) {
        if (start === null) start = ts;
        var progress = Math.min((ts - start) / duration, 1);
        el.textContent = Math.floor(progress * target);
        if (progress < 1) {
          requestAnimationFrame(step);
        } else {
          el.textContent = target;
        }
      }
      requestAnimationFrame(step);
    };

    var counterIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            counterIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    counters.forEach(function (el) { counterIo.observe(el); });
  }
})();
