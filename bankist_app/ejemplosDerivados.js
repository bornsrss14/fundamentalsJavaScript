"use strict";
const btn_login = document.querySelector(".login_btn");
const funMensaje = function (e) {
  e.preventDefault();
  let div = document.createElement("div"); //que tipo de elemento vamos a crear
  div.className = "alert"; // Cómo se va a ver -(qué clase le corresponde)-
  div.innerHTML =
    "<strong>¡Hola!</strong> Usted ha leído un importante mensaje."; //Qué es lo que vamos a insertar
  document.body.prepend(div); // dónde se va a insertar after, before, preppend, append etc.
  setTimeout(() => div.remove(), 2000);
};
btn_login.addEventListener("click", funMensaje);
//los agrega al final de el elemento seleccionado


//CREA UN CALENDARIO
const createCalendar = function(elem, year, month){
};
