"use strict";

// The rule is simple, every time we roll the dice and the result is equal to one, you lose the game
//Selecting elements
let numScore0El = document.querySelector("#numScore0");
let numScore1El = document.querySelector("#numScore1");
const diceImgEl = document.querySelector(".diceImg");

const dice1El = document.getElementById("dice1");
const dice2El = document.getElementById("dice2");
const dice3El = document.getElementById("dice3");
const dice4El = document.getElementById("dice4");
const dice5El = document.getElementById("dice5");
const dice6El = document.getElementById("dice6");

const currentScore0 = document.getElementById("currentScore0");
const currentScore1 = document.getElementById("currentScore1");

const btnNew = document.querySelector("#btnNewGame");
const btnRollDice = document.querySelector("#rollDice");
const btnHold = document.querySelector("#btnHold");

let currentScore = 0,
  activePlayer = 0,
  scores,
  playing;

const resetViwe = () => {
  [dice1El, dice2El, dice3El, dice4El, dice5El, dice6El].forEach((el) =>
    el.classList.add("hidden")
  );
};
const switchPlayer = function () {
  document.getElementById(`currentScore${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
};
//para mantener el puntaje
const functionHold = () => {};

//para iniciar un nuevo juego
const functionNew = () => {
  scores = [0, 0];
  currentScore =0;
  playing = true;
  document.getElementById(`currentScore${activePlayer}`).textContent = 0;
  activePlayer = 0;
  playing = true;
  resetViwe()
};
// functionNew();

const functionRollDice = function () {
  do {
    const funRandom = Math.trunc(Math.random() * 6) + 1;
    resetViwe();
    //currentScore0
    if (funRandom !== 1) {
      currentScore += funRandom;
      document.getElementById(`currentScore${activePlayer}`).textContent =
        currentScore;
      //   currentScore0.textContent = currentScore; esto no ib

      switch (+funRandom) {
        //la logica para que el btn de roll dice funcione
        case 2:
          diceImgEl.classList.remove("oculto");
          dice2El.classList.remove("hidden");
          break;
        case 3:
          diceImgEl.classList.remove("oculto");
          dice3El.classList.remove("hidden");
          break;
        case 4:
          diceImgEl.classList.remove("oculto");
          dice4El.classList.remove("hidden");
          break;
        case 5:
          diceImgEl.classList.remove("oculto");
          dice5El.classList.remove("hidden");
          break;
        case 6:
          diceImgEl.classList.remove("oculto");
          dice6El.classList.remove("hidden");
          break;
        default:
          diceImgEl.classList.remove("oculto");
          dice1El.classList.remove("hidden");
          break;
      }
      //   ------ aqui termina el switch
    } else {
      switchPlayer();
    }
  } while (funRandom);
};

numScore0El.textContent = 0;
numScore1El.textContent = 0;
diceImgEl.classList.add("oculto");

btnRollDice.addEventListener("click", functionRollDice);
btnHold.addEventListener("click", functionHold);
btnNew.addEventListener("click", functionNew);
