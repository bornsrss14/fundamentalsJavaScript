"use strict";
/* UNDERTANDING HOW DOM CONTROL THE EVENTS: AND UNDERSTANDING SOME CONCEPTS ABOUT IT, BUBBLING, PROPAGATION, CAPTURING*/
// let variableTrue = true;
// const alerta = document.querySelector(".evento_alerta");
// alerta.addEventListener("click", () => {
//   alert("First handler");
// });
// alerta.addEventListener("click", (event) => {
// //   event.stopImmediatePropagation(); // Detiene la propagación inmediata
//   alert("Second handler");
// });
// alerta.addEventListener("click", (event) => {
//     event.stopImmediatePropagation();
//   alert("Third handler");
// }, variableTrue);
// document.querySelector(".evento_cuadroRojo").addEventListener("click", () => {
//   alert("Parent clicked");
// });

// const h1 = document.querySelector("h1");
// console.log(h1.querySelectorAll(".highlight"));
// h1.firstElementChild.style.color = "blue";
// h1.lastElementChild.style.color = "red";

// console.log(`Este es el elemento padre ${h1.parentElement}`);
// console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach((el) => {
//   if (el !== h1) {
//     el.style.transform = "scale(.7)";
//   }
// });

// const childrenAll = h1.parentElement.children;
// for (let i = 0; i < childrenAll.length; i++) {
//   if (childrenAll[i] !== h1) {
//     childrenAll[i].style.color = "red";
//   }
// }

document.querySelector("ul").addEventListener("click", function (e) {
  const target =
    e.target; /* Determinamos qué elemento (ETIQUETA </>) desencadenó el evento */
  console.log(target);
  if (target.classList.contains("li")) {
    target.classList.add("bg-red");
  }
});

//Esto puedo usarlo cuando los elementos están separados de un contenedos general en comun, sin contar la ventana como tal
const collectionButtons = document.querySelectorAll(".selec__btn");
// collectionButtons.forEach((el) => {
//   el.addEventListener("click", function () {
//     console.log("Esto es un click");
//   });
// });

collectionButtons.forEach((element) => {
  element.addEventListener("click", (e) => {
    // Log the element that was clicked
    console.log("Element clicked:", e.target);
    if (e.target.classList.contains("yellow")) {
      e.target.classList.remove("yellow");
    } else {
      e.target.classList.add("yellow");
    }

    // You can perform other actions on e.target as well
    // e.target.style.backgroundColor = 'yellow';
  });
});
