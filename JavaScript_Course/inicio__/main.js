'use strict';

let lastName = 'Ros';
let newLastName = lastName;

lastName = "Rosario";
console.log(lastName, newLastName);

const anna ={
  firstName: 'Anna',
  lastName: 'Oh',
  age: 27
}

const marriedAnna = anna; //aquí estamos copiando el objeto completo de Anna
marriedAnna.lastName = 'Takimoto';
console.log('Before married:', anna);
console.log('After marriage:', marriedAnna);

const anna2 ={
  name: 'Rosario'
  ,lastName: 'Fuentes'
  , age: 25
  , siblins: ['Abigail','Diana','Lia','Angel','Eduardo']
}

const anna2Copy= Object.assign({}, anna2);
anna2Copy.lastName ='Oh';
anna2Copy.siblins.push('Jan');
anna2Copy.siblins.push('Lisa');
console.log('Este es el original:', anna2);
console.log('Esta es la copia que debe tener Rosario Oh: ', anna2Copy);