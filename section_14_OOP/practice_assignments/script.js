"use strict";

const animal = function (nickName, birthYear) {
  this.nickName = nickName;
  this.birthYear = birthYear;
};

animal.prototype.calcAge = function () {
  console.log(`${this.nickName} tiene ${2024 - this.birthYear} years old.`);
};

const perro = new animal("Bardo", 2021);
console.log(perro);
const rana = new animal("charco", 2023);
console.log(rana);
const gato = new animal("Nina", 2019);
console.log(gato);
console.log(perro.__proto__ === animal.prototype);
console.log(perro.__proto__.__proto__ === Object.prototype);


rana.calcAge();
perro.calcAge();
gato.calcAge();

const objeto = { nombre: "Ana" };
// console.log(objeto.toString());



////////////////////////////////////////////////////////////
/////////////77 nuevoo metodo constructor /////////////////

class killers {
  constructor(nombre, birthYear, hobbie){
    this._nombre = nombre;
    this._birthYear = birthYear;
    this.hobbie = hobbie;
  }

  get calcAge(){
    return 2024 - this._birthYear;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(nuevoNombre){
    this._nombre = nuevoNombre;
  }
}

const killerWhave = new killers('Orca',1998, 'kill seals');
console.log(killerWhave.nombre);
killerWhave.nombre = 'Orca Asesina';
console.log(killerWhave.nombre);

console.log(killerWhave.calcAge);