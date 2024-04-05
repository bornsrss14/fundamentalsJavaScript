"use strict";
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Hello ';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 14;

// 1.- Cuando comenzamos el juego, el numero ingresado en el input debe
// ser recuperado, comencemos por eso, guardarlo en una variable
// 2. También debemos de verificar si el valor es valido
//    2.1 Cuando el numero es correcto
//    2.2 Cuando el numero es muy alto
//    2.3 Cuando el numero es muy bajo

// 3.- Cada vez que fallamos al adivinar el numero, nuestro score decrementa

let diceRoll = Math.trunc(Math.random() * 20) + 1; //give us a number btween 0 n 1
let score__inicial = 20;
const start = "Start guessing...";
// document.querySelector(".number").textContent = diceRoll;

document.querySelector(".check").addEventListener("click", function () {
  let guessVariable = +document.querySelector(".guess").value;
  if (!guessVariable) {
    document.querySelector(".message").textContent =
      "ヽ(ー_ー )ノ invalid number";
  } else if (diceRoll === guessVariable) {
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".message").textContent = "シ Correct Number!";
    document.querySelector(".number").textContent = diceRoll;
  } else if (diceRoll > guessVariable) {
    if (score__inicial > 1) {
      document.querySelector(".message").textContent = "Muy bajo!";
      score__inicial--;
      document.querySelector(".score").textContent = score__inicial;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } else if (diceRoll < guessVariable) {
    if (score__inicial > 1) {
      document.querySelector(".message").textContent = "Muy alto";
      score__inicial--;
      document.querySelector(".score").textContent = score__inicial;
    } else {
      document.querySelector(".message").textContent = "You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score__inicial = 20;
  diceRoll = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = "?";
  document.querySelector(".score").textContent = score__inicial;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = start;
  document.querySelector('.guess').value = "";
});
