"use strict";
const btn_login = document.querySelector(".login_btn");
const funMensaje = function (e) {
  e.preventDefault();
  let div = document.createElement("div"); //que tipo de elemento vamos a crear
  div.className = "alert"; // Cómo se va a ver -(qué clase le corresponde)-
  div.innerHTML =
    "<strong>¡Hola!</strong> Usted ha leído un importante mensaje."; //Qué es lo que vamos a insertar
  document.body.prepend(div); // dónde se va a insertar after, before, preppend, append etc.
  setTimeout(() => div.remove(), 2000);
};
btn_login.addEventListener("click", funMensaje);
//los agrega al final de el elemento seleccionado

//Repaso de algunos métodos importantes aprendidos en el curso
//167. Array Methods practice.
const account__one = {
  owner: "Emily Thompson",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300, -100],
  interestRate: 1.2, //%
  pin: 1414,
};

const account__two = {
  owner: "Jack Miller",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account__three = {
  owner: "Michael Smith",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account__four = {
  owner: "Anna Oh",
  movements: [430, 1000, 700, 50, 902, 140, 55, 147, 50, 150],
  interestRate: 1,
  pin: 1985,
};

const accounts = [account__one, account__two, account__three, account__four];

const arryMap = accounts
  .flatMap((acc) => acc.movements)
  .filter((mov) => mov > 0)
  .reduce((sum, curr) => sum + curr, 0);
console.log(`El resultado de los positivos es: ${arryMap}`);

console.log(accounts.flatMap((acc) => acc.movements));

const cadenaTexto = function (cadena) {
  const toCapitalize = function (word) {
    return word[0].toUpperCase() + word.slice(1);
  };
  // const capitalize = (word) => word[0].toUpperCase() + word.slice(1);
  const exceptions = ["an", "a", "and", "the", "but", "or", "on", "with", "in"];
  const titleCase = cadena
    .toLowerCase()
    .split(" ")
    .map((word) => (exceptions.includes(word) ? word : toCapitalize(word)))
    .join(" ");

  return titleCase;
};

console.log(cadenaTexto("rosario fuentes and another person"));

//reduce como metodo para crear nuevos objetos
const data = [
  { id: 1, name: "Alice", age: 30 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 35 },
];
console.log(data);

const result = data.reduce((acc, item) => {
  acc[item.id] = item;
  return acc;
}, {});
console.log(result);

const r = Array.from(
  { length: 40 },
  (_, i) => Math.trunc(Math.random() * 8000) + 1
);

const elementosPAres = r.reduce(
  (acc, currentValue) => (currentValue % 2 === 0 ? ++acc : acc),
  0
);

console.log(r);
console.log(`Los elementos pares encontrados fueron: ${elementosPAres}`);
//En el caso anterior creamos un array de 50 elementos random, y devolvemos el numero total de
//elementos que son pares, deacuerdo a la condición

//ahora lo que vamos hacer aquí es devolver un array apartir del acumulador

const crearArryAccount = r.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    acc.push(curr);
  }
  return acc;
}, []);

console.log(crearArryAccount);

//ahora creamos un objeto

// acceder a los depositos de todas las cuentas del array accounts
const { deposits, withdrawls } = accounts
  .flatMap((el) => el.movements)
  .reduce(
    (acc, current) => {
      acc[current > 0 ? "deposits" : "withdrawls"] += current;
      return acc;
    },
    {
      deposits: 0,
      withdrawls: 0,
    }
  );
// queremos crear un acumulador sum.deposits;

console.log(deposits, withdrawls);

// 174. Numeric separators 
const sistemSolarDiameter =  28_709_055_466; // it's to hard to read
const price = 345_50;
console.log(`El resultado en ${2* price}`); 
console.log(`El diametro del sistema solar es: ${sistemSolarDiameter}`);