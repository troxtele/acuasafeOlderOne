const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("drop-shadow-lg");
  } else {
    nav.classList.remove("drop-shadow-lg");
  }
});

// ************************ Sliders
var swiper = new Swiper(".client_slider", {
  slidesPerView: 0,
  loop: true,
  autoplay: true,
  pagination: {
    el: ".client_pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    760: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

// owl carousel
("use strict");

// Owl-carousel
$(document).ready(function () {
  if ($(".hero_slider").length) {
    $(".hero_slider").owlCarousel({
      dots: false,
      loop: true,
      items: 1,
      animateOut: "fadeOut",
      animateIn: "fadeIn",
      smartSpeed: 1000,
      autoplay: 6000,
    });
  }
});
