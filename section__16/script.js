"use stric";

// const img = document.querySelector(".image");
// img.src = "gatito.jpg"; // Set the image source
// img.addEventListener("load", function () {
//   img.classList.add("fadeIn");
// });

/* EVERYTHING RELATED OF COUNTRIES CARDS */
function setDisplayFlex() {
  const parentDivReference = document.querySelector(".divCountryDescription");
  const childDivs = parentDivReference.querySelectorAll("div");
  /* Apply display flex at every item */
  childDivs.forEach((div) => {
    // div.style.display = "flex";
    div.classList.add("descriprionCardStyle");
  });
}

/* LLAMADA DE FUNCIONES */
setDisplayFlex();
