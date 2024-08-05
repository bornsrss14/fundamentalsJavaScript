"use strict";
/* practice asignments  187.Selecting and deletinglements */

// const allTagsButtons = document.getElementsByTagName("button");
// // console.log(`La cantidad de botones: ${allTagsButtons.length}`);
// console.log(allTagsButtons[4 - 1]);
// // console.log(allTagsButtons);

// console.log(`La cantidad de secciones que existen: ${allSections.length}`);
// console.log(allSections[2 - 1]);
// console.log("---When the range is oun of bounds---");
// console.log(allSections.item(1));
// console.log(allSections);
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
const tabsContainer = document.querySelector(".operations_tab-container");
const allInfoCont = document.querySelectorAll(".infoContainer");
const allTabs = document.querySelectorAll(".infoTab");
const dadTabs = document.querySelector(".tabsContainerAll");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navHeight = nav.getBoundingClientRect().height;

const allSections = document.querySelectorAll(".section");

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
///////////////////////////////////////
//F.1 Sticky navigation: Intersection Observer API

const objectParms = {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
};

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, objectParms);
headerObserver.observe(header);
///////////////////////////////////////
// /* Function 1.  Reveal Sections*/
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const object = {
  root: null,
  threshold: 0.15,
};

const sectionObserver = new IntersectionObserver(revealSection, object);
allSections.forEach((s) => {
  sectionObserver.observe(s);
  s.classList.add("section--hidden");
});

/* //////////////////////////////// */
/* Lazy loading images */

const allImgsLazy = document.querySelectorAll('img[data-src]');

const funLazyImgs = function (entries, observer) {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  // replace src with data-src
  
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function(){
    const tar = entry.target.closest('.rectangular-img');
    tar.classList.remove('lazy-img');
  });
  observerImges.unobserve(entry.target);
};
const optionsImgLazy = {
  root: null,
  rootMargin: '0px',
  threshold: .75,
};
const observerImges = new IntersectionObserver(funLazyImgs, optionsImgLazy);
allImgsLazy.forEach((img) => observerImges.observe(img)
);

/* ////////////////////////// */
const funTabInter = function (event) {
  const clicked = event.target.closest(".infoTab");
  if (!clicked) return;
  console.log("Esta mierda funciona");
  allTabs.forEach((tab) => tab.classList.remove("infTab--active"));
  allInfoCont.forEach((info) => info.classList.remove("infContainer--active"));

  clicked.classList.add("infTab--active");
  document
    .querySelector(`.infContainer--${clicked.dataset.tab}`)
    .classList.add("infContainer--active");
};

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
dadTabs.addEventListener("click", funTabInter);
/* manipulando estilos en el dom */
// document.documentElement.style.setProperty('--purple--color', 'orange');
