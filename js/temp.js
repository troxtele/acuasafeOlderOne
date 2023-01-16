// Texts animation
const heading = document.querySelector(".heading_animation");
const pera = document.querySelector(".text_up_animation");
const buttons = document.querySelector(".button_up_animation");
// Bottle animation
const bottle = document.querySelector(".bottle_animation");
// fade out down
const content = document.querySelector(".content_down_animation");

const fadeUp = () => {
  setTimeout(() => {
    heading.classList.add("fadeInUp", "opacity-100");
  }, 500);

  setTimeout(() => {
    pera.classList.add("fadeInUp", "opacity-100");
  }, 800);

  setTimeout(() => {
    buttons.classList.add("fadeInUp", "opacity-100");
  }, 1100);

  const bottleAnimation = setTimeout(() => {
    bottle.classList.add("fadeInUpBottle");
  }, 500);
};

const fadeDown = () => {
  setTimeout(() => {
    content.classList.add("fadeOutDown");
    bottle.classList.add("fadeOutDown");
  }, 5000);
};
