"use strict";

// Variables de elementos del juego
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let numScore0El = document.querySelector("#numScore0");
let numScore1El = document.querySelector("#numScore1");
const diceImgEl = document.querySelector(".diceImg");
const btnNew = document.querySelector("#btnNewGame");
const btnRollDice = document.querySelector("#rollDice");
const btnHold = document.querySelector("#btnHold");

// Variables de juego
let currentScore = 0,
  activePlayer = 0,
  scores = [0, 0],
  playing = true;

// Función para iniciar un nuevo juego
const functionNew = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  resetView();

  numScore0El.textContent = 0;
  numScore1El.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;

  diceImgEl.classList.add("oculto");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};

// Función para ocultar los dados
const resetView = () => {
  diceImgEl
    .querySelectorAll(".genericDot")
    .forEach((elementFor) => elementFor.classList.add("hidden"));
};

// Función para cambiar de jugador
const switchPlayer = () => {
  document.getElementById(`currentScore${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};

// Función para lanzar los dados
const functionRollDice = () => {
  const funRandom = Math.trunc(Math.random() * 6) + 1;
  resetView();
  if (funRandom !== 1) {
    diceImgEl.classList.remove("oculto");
    currentScore += funRandom;
    document.getElementById(`currentScore${activePlayer}`).textContent =
      currentScore;
    switch (+funRandom) {
      case 2:
        diceImgEl.querySelector("#dice2").classList.remove("hidden");
        break;
      case 3:
        diceImgEl.querySelector("#dice3").classList.remove("hidden");
        break;
      case 4:
        document.querySelector("#dice4").classList.remove("hidden");
        diceImgEl.querySelector("#dice4").classList.remove("hidden");
        break;
      case 5:
        diceImgEl.querySelector("#dice5").classList.remove("hidden");
        break;
      case 6:
        diceImgEl.querySelector("#dice6").classList.remove("hidden");
        break;
      // Cases para otros números del dado
    }
  } else {
    switchPlayer();
  }
};

// Función para mantener el puntaje
const functionHold = () => {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`numScore${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImgEl.classList.add("oculto");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
      resetView();
    } else {
      switchPlayer();
    }
  }
};

// Agregar event listeners a los botones
btnRollDice.addEventListener("click", functionRollDice);
btnNew.addEventListener("click", functionNew);
btnHold.addEventListener("click", functionHold);
