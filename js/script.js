const nav = document.querySelector("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    nav.classList.add("drop-shadow-lg");
  } else {
    nav.classList.remove("drop-shadow-lg");
  }
});

// Texts animation
const heading = document.querySelector(".heading_animation");
const pera = document.querySelector(".text_up_animation");
const buttons = document.querySelector(".button_up_animation");

// Bottle animation
const bottle = document.querySelector(".bottle_animation");

const mainFunc = () => {

}

const a = setTimeout(() => {
  heading.classList.toggle("fadeInUp", "opacity-100");
}, 500);

const b = setTimeout(() => {
  pera.classList.toggle("fadeInUp", "opacity-100");
}, 800);

const c = setTimeout(() => {
  buttons.classList.toggle("fadeInUp", "opacity-100");
}, 1100);


const bottleAnimation = setTimeout(() => {
  bottle.classList.toggle("fadeInUpBottle");
}, 500);

// fade out down

const content = document.querySelector(".content_down_animation");

const down = setTimeout(() => {
  content.classList.toggle("fadeOutDown");;
  bottle.classList.toggle("fadeOutDown");
}, 5000);

const repeatAnimation = setInterval(() => {
  // a()
  // b()
  // c()
  // bottleAnimation()
  // down()
  // console.log(a)
}, 1000);


setInterval(() => {
  lol()
}, 1000);


// ************************ Sliders
// Hero Slider
var heroSwiper = new Swiper(".hero_slider", {
  speed: 1000,
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
});

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
