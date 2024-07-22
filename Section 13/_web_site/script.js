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
const btn_sus = document.querySelector(".btn_suscribirme");
const btn_closeModal = document.querySelector(".btn--close-modal");
const btn_openModal = document.querySelectorAll(".btn_open_modal");
const modal = document.querySelector(".modal");
const modal_overlay = document.querySelector(".overlay");

/* evitar la carga del form */
btn_sus.addEventListener("click", function (e) {
  e.preventDefault();
});
/* Showing date at the bottom in the <small> tag */
const showYear = document.getElementById("showYear");
showYear.innerHTML = new Date().getFullYear();

/* Button to the navigate easily to top of the page */
// Obtener el botón
const toTopBtn = document.getElementById("toTopBtn");

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

function funCloseModal() {
  modal.classList.add("hidden");
  modal_overlay.classList.add("hidden");
}
function funOpenModal() {
  modal.classList.remove("hidden");
  modal_overlay.classList.remove("hidden");
}

for (let i = 0; i < btn_openModal.length; i++)
  btn_openModal[i].addEventListener("click", funOpenModal);

document.addEventListener("keydown", function (e) { /* cierra con esc */
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    funCloseModal();
  }
});

// Cuando se hace clic en el botón, se desplaza hacia arriba de la página
toTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

btn_closeModal.addEventListener("click", funCloseModal);
btn_openModal.addEventListener("click", funOpenModal);

/* manipulando estilos en el dom */
// document.documentElement.style.setProperty('--purple--color', 'orange');
