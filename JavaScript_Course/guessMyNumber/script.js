'use strict';
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
const diceRoll = Math.trunc(Math.random()*20)+1; //give us a number btween 0 n 1 
document.querySelector('.number').textContent = diceRoll;
 
document.querySelector('.check').addEventListener('click', function(){
    let guessVariable = +document.querySelector('.guess').value;
    if(!guessVariable){
        document.querySelector('.message').textContent = 'ヽ(ー_ー )ノ invalid number';
    } else if(diceRoll === guessVariable){
        document.querySelector('.message').textContent = 'シ Correct Number!';
    }
});