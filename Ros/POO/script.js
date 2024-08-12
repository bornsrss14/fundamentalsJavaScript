"use strict";

const persona = {
  nombre: { nom: "Ros", apellido1: "Fuentes" },
  edad: 26,
  genero: "femenine",
  intereses: ["Senderismo", "Cyclismo"],
  bio() {
    console.log(
      `Je m'appelle ${this.nombre.nom}. J'ai ${this.edad} ans. Je suis une ${this.genero}. Mes intérêts sont: ${this.intereses}`
    );
  },
};
const nombrePersonalizado = "romina";
const valorPersonalizado = "roman";
persona[nombrePersonalizado] = valorPersonalizado;

console.log(persona);

document.getElementById("notifyBtn").addEventListener("click", function () {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      const myNotificatio = new Notification("Pito", {
        body: "Esto es el contenido de mi notificacion",
        icon: "https://example.com/icon.png",
      });
    }
  });
});

class calculadora {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }
  static sumar(num1, num2) {
    return num1 + num2;
  }
  restar(num1, num2) {
    return num1 - num2;
  }
}

console.log(calculadora.sumar(45, 5));

const suma1 = new calculadora();
console.log("Esto debería arrojar un error, porque no debe ser instanciado");
// console.log(suma1.sumar(2, 3));
console.log("Esto debería estar correcto");
console.log(suma1.restar(40, 5));

//// Otra forma de implementar la herencia de prototipos, con Object.create();

const animalProto = {
  hacerSonido() {
    return "Sonido genérico";
  },
};
console.log(animalProto);

const perro = Object.create(animalProto);

perro.ladrar = function () {
  return "El perro hace guau •ﻌ•";
};

console.log(animalProto);

console.log(perro.hacerSonido());
console.log(perro.ladrar());

/////// person function constructor

const monstruos = function (name, yearOfAppearance) {
  this.name = name;
  this.yearOfAppearance = yearOfAppearance;
};
monstruos.prototype.yearsPassed = function () {
  console.log(
    `The last appearance of ${this.name} was ${
      2024 - this.yearOfAppearance
    } years ago, in ${this.yearOfAppearance}`
  );
};

const Mutante = function (name, yearOfAppearance, gender) {
  monstruos.call(this, name, yearOfAppearance);
  this.gender = gender;
};
mutante.prototype = Object.create(monstruos.prototype);
Mutante.prototype.briefHistory = function () {
  console.log(
    `This Mutant is ${this.name}, the last appearance was in ${this.yearOfAppearance}, and is the king of the beasts`
  );
};
const kong = new Mutante("Don. King Kong", 1998, "chimp kaiju");
console.log(`The last appearance of kong was in ${kong.yearOfAppearance}`);
kong.briefHistory();
Mutante.prototype.constructor = Mutante;
