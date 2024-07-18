"use strict";
const btn_sus = document.querySelector(".btn_suscribirme");

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

// Cuando se hace clic en el botón, se desplaza hacia arriba de la página
toTopBtn.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
