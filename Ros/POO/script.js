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
Mutante.prototype = Object.create(monstruos.prototype);
Mutante.prototype.briefHistory = function () {
  console.log(
    `This Mutant is ${this.name}, the last appearance was in ${this.yearOfAppearance}, and is the king of the beasts`
  );
};
const kong = new Mutante("Don. King Kong", 1998, "chimp kaiju");
console.log(`The last appearance of kong was in ${kong.yearOfAppearance}`);
kong.briefHistory();
Mutante.prototype.constructor = Mutante;

// implementación de herencia de prototipos en Clases ES6
/* en este ambito digamos que para calcular la zona de apoderado, debemos restar de 1000 la zona registral, y el resultado es7
// eso*/
class infonavitCesi {
  constructor(delegacion, zonaregistral, apoderado) {
    this.delegacion = delegacion;
    this.zonaregistral = zonaregistral;
    this.apoderado = apoderado;
  }
  inscribirCredito() {
    return `¡El Credito fue inscrito! Datos: En ${this.delegacion} a cargo de: ${this.apoderado}, bajo la zona registral ${this.zonaregistral}`;
  }
  greetApoderado() {
    return `Hola, soy ${this.apoderado}, apoderado legal del CESI infonavit ${this.delegacion}`;
  }
  get zonaApoderado() {
    return 1000 - this.zonaregistral;
  }
  set zonaRegistral(zonaregistral) {
    this._zonaregistral = zonaregistral;
  }
  get zonaRegistral() {
    return this._zonaregistral;
  }
  static hey() {
    console.log("Hey there!");
  }
}
/* -------------------------------------------------------------------------------------------------------------- */
class registroPublico extends infonavitCesi {
  constructor(delegacion, zonaregistral, apoderado, estado) {
    super(delegacion, zonaregistral, apoderado);
    this.estado = estado;
  }
  reglas() {
    return `Hello, there are some important things that is necessary to know before acquire an mortgage credit:
    Are you from ${this.estado}?`;
  }
}
const rppFrst = new registroPublico(
  "Cordoba",
  14,
  "Blanca Estela Rincon",
  "Veracruz"
);
console.log(rppFrst);

console.log(rppFrst.reglas());
console.log(rppFrst.inscribirCredito());

console.log(rppFrst.__proto__ === infonavitCesi.prototype);

///// implemenetando la herencia con el Object.create().

const amiga = {
  calcAge() {
    return `2024 - ${this.birthyear}`;
  },
  init(name, birthyear) {
    this.name = name;
    this.birthyear = birthyear;
  },
};

const bestFriend = Object.create(amiga);

bestFriend.init = function (name, birthyear, place) {
  amiga.init.call(this, name, birthyear);
  this.place = place;
  return `I met ${this.name} when we were teenegers at ${
    this.place
  },now, she is ${2024 - this.birthyear} years old.`;
};
const alita = Object.create(bestFriend);
console.log(alita.init("Alejandra", 1998, "school"));
console.log(bestFriend);

/// A few more clases
class Account {
  locale = navigator.language;
  #movements = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    console.log(`Thanks for opening an account, ${this.owner} `);
  }
  deposit(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposit(-val);
    return this;
  }
  _aproveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this._aproveLoan(val)) {
      console.log(`Loan aproved for ${val}`);
      this.deposit(val);
    } else {
      console.log("Sorry :(");
    }
    return this;
  }

  getMovements() {
    return this.#movements;
  }
}
const Account_one = new Account("Anna Oh", "US", 1985);
Account_one.deposit(450);
Account_one.deposit(13);
Account_one.withdraw(78);
Account_one.deposit(500);
Account_one.requestLoan(8000);

console.log(Account_one);

/* ejemplo de como la encapsulación funciona en un field privado */
// console.log(Account_one.#movements);
// console.log(Account_one.pin);

Account_one.deposit(300).deposit(4000).withdraw(50).requestLoan(400);
console.log(Account_one.getMovements());
