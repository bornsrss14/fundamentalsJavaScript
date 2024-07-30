"use strict";
/* practice asignments  187.Selecting and deletinglements */

const allSections = document.querySelectorAll(".section");
const allTagsButtons = document.getElementsByTagName("button");
console.log(`La cantidad de botones: ${allTagsButtons.length}`);
console.log(allTagsButtons[4 - 1]);
console.log(allTagsButtons);

console.log(`La cantidad de secciones que existen: ${allSections.length}`);
console.log(allSections[2 - 1]);
console.log("---When the range is oun of bounds---");
console.log(allSections.item(1));
console.log(allSections);
/* ------------------------------------------------------------------------------------------------ */
const toTopBtn = document.getElementById("toTopBtn");
const btn_sus = document.querySelector(".btn_suscribirme");
const btn_closeModal = document.querySelector(".btn--close-modal");
const btn_openModal = document.querySelectorAll(".btn_open_modal");
const modal = document.querySelector(".modal");
const modal_overlay = document.querySelector(".overlay");
const dotsContainer = document.querySelector(".dots");
const btnLeft = document.querySelector(".slider_btn--left");
const btnRight = document.querySelector(".slider_btn--right");
const sliderEntero = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnScroll = document.querySelector(".btn--scroll-to");
const section__1 = document.getElementById("section--1");

/* evitar la carga del form */
btn_sus.addEventListener("click", function (e) {
  e.preventDefault();
});
const showYear = document.getElementById("showYear");
showYear.innerHTML = new Date().getFullYear();

// Mostrar el botón cuando se desplaza hacia abajo 100px desde la parte superior de la página
window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
};

/* Todos las funciones implementadas */
const funSmoothScroll = function () {
  const coordenadas = section__1.getBoundingClientRect();
  window.scrollTo({
    top: coordenadas.top + window.pageYOffset,
    left: coordenadas.left + window.pageXOffset,
    behavior: "smooth",
  });
};
const funCloseModal = function () {
  modal.classList.add("hidden");
  modal_overlay.classList.add("hidden");
};
const funOpenModal = function () {
  modal.classList.remove("hidden");
  modal_overlay.classList.remove("hidden");
};
btn_openModal.forEach((btn) => btn.addEventListener("click", funOpenModal));
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    funCloseModal();
  }
});
const funNavigateToTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
/* Delegación de eventos */
const linksContainer = document.querySelector(".nav_links");

linksContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("nav_link")) {
    event.preventDefault();
    const sectionId = event.target.getAttribute("href");
    const section = document.querySelector(sectionId);

    if (section) {
      // Calcula las coordenadas de la sección
      const coordenadas = section.getBoundingClientRect();
      // Realiza el smooth scroll
      window.scrollTo({
        top: coordenadas.top + window.pageYOffset,
        left: 0, // Normalmente no necesitas desplazamiento horizontal para secciones
        behavior: "smooth",
      });
    }
  }
});

/* slider */
let currentSlide = 0;
let maxSlides = slides.length;
const goToSlide = function (slide) {
  slides.forEach((s, index) => {
    s.style.transform = `translateX(${100 * (index - slide)}%)`;
  });
};
goToSlide(0);
/* 003.- ALL BIG FUNCTIONS */

const createDots = function () {
  slides.forEach(function (_, index) {
    dotsContainer.insertAdjacentHTML(
      "beforeend",
      `<button class = "dots__dot" data-slide="${index}" ></button>`
    ); /* <div class="slide" data-slide="1"></div> */
  });
};
createDots();

const activeDot = function (slide) {
  document
    .querySelectorAll(".dots__dot")
    .forEach((dot) => dot.classList.remove("dots__dot--active"));

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};
activeDot(0);

const funPreviousSlide = function () {
  currentSlide === 0 ? (currentSlide = maxSlides - 1) : currentSlide--;
  goToSlide(currentSlide);
  activeDot(currentSlide);
};
const funNextSlide = function () {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activeDot(currentSlide);
};

const funDotClick = function (e) {
  if (e.target.classList.contains("dots__dot")) {
    const { slide } = e.target.dataset;
    goToSlide(slide);
    activeDot(slide);
  }
};
/*004.- ALL EVENTLISTENERS */
btn_closeModal.addEventListener("click", funCloseModal);
toTopBtn.addEventListener("click", funNavigateToTop);
btnLeft.addEventListener("click", funPreviousSlide);
btnRight.addEventListener("click", funNextSlide);
dotsContainer.addEventListener("click", funDotClick);
document.addEventListener("keydown", function (ev) {
  if (ev.key === "ArrowLeft") {
    funPreviousSlide();
  }
  if (ev.key === "ArrowRight") {
    funNextSlide();
  }
});
btnScroll.addEventListener("click", funSmoothScroll);
/* manipulando estilos en el dom */
// document.documentElement.style.setProperty('--purple--color', 'orange');
