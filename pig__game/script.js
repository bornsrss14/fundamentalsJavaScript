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

const btnNew = document.querySelector("#btnNewGame");
const btnRollDice = document.querySelector("#rollDice");
const btnHold = document.querySelector("#btnHold");

const functionRollDice = function() {
  do {
    const funRandom = Math.trunc(Math.random() * 6) + 1;
    [dice1El, dice2El, dice3El, dice4El, dice5El, dice6El].forEach((el) =>
      el.classList.add("hidden")
    );

    //la logica para que el btn de roll dice funcione
    switch (+funRandom) {
      case 1:
        diceImgEl.classList.remove("oculto");
        dice1El.classList.remove("hidden");
        break;
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
    }
  } while (funRandom !== 0);
};

numScore0El.textContent = 0;
numScore1El.textContent = 0;
diceImgEl.classList.add("oculto");

btnRollDice.addEventListener("click", functionRollDice);
