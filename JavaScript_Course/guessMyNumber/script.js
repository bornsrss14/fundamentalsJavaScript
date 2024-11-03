"use strict";
let diceRoll = Math.trunc(Math.random() * 20) + 1; //give us a number btween 0 n 1
let score__inicial = 20;
const start = "Start guessing...";
let highScore = 0;
// document.querySelector(".number").textContent = diceRoll;

let gameLost = function () {
  document.querySelector(".message").textContent = "You lost the game!";
  document.querySelector(".score").textContent = 0;
  document.querySelector(".check").style.display = "none"; // Oculta el botón "Check"
  document.querySelector(".again").style.display = "block"; // Oculta el botón "Check"
  document.querySelector('body').style.backgroundColor = "red";
  document.querySelector('.number').textContent = "˙◠˙";
};

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
    if (score__inicial > highScore) {
      highScore = score__inicial;
      document.querySelector(".highscore").textContent = highScore;
    }
    document.querySelector(".check").style.display = "none"; // Oculta el botón "Check"
    document.querySelector(".again").style.display = "block";
  } else if (diceRoll > guessVariable) {
    if (score__inicial > 1) {
      document.querySelector(".message").textContent = "Muy bajo!";
      score__inicial--;
      document.querySelector(".score").textContent = score__inicial;
    } else {
      return gameLost();
    }
  } else if (diceRoll < guessVariable) {
    if (score__inicial > 1) {
      document.querySelector(".message").textContent = "Muy alto";
      score__inicial--;
      document.querySelector(".score").textContent = score__inicial;
    } else {
      return gameLost();
    }
  }
});

let resetAndAgain = function () {
  score__inicial = 20;
  diceRoll = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score__inicial;
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").textContent = start;
  document.querySelector(".guess").value = "";
  document.querySelector(".again").style.display = "none"; // Oculta el botón "Check"
  document.querySelector(".check").style.display = "block"; // Oculta el botón "Check"
};
document.querySelector(".again").addEventListener("click", resetAndAgain);
document.querySelector(".btn-reset").addEventListener("click", resetAndAgain);


