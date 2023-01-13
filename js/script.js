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

var heroSwiper = new Swiper(".hero_slider", {
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
});
