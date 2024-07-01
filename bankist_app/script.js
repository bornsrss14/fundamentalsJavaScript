"use strict";
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

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [account__one, account__two, account__three, account__four];
//ENTRADAS
const input_user = document.querySelector(".login_input--user");
const input_pin = document.querySelector(".login_input--pin");
const input_transferTo = document.querySelector(".form_input--transferTo");
const input_amountTra = document.querySelector(".form_input--amount");
const input_loan = document.querySelector(".form_input--loan");
const input_closeUser = document.querySelector(".form_input--closeUser");
const input_closePin = document.querySelector(".form_input--closePin");

//MODIFICADORES DE TEXTOS
const welcome_message = document.querySelector(".welcome");
const fechaSpan = document.getElementById("current-date");
const balance_value = document.querySelector(".balance_value");
const summary_in = document.querySelector(".summary_value--in");
const summary_out = document.querySelector(".summary_value--out");
const summary_interest = document.querySelector(".summary_value_interest");
const timer_logout = document.querySelector(".timer");
//EVENTOS
const btn_login = document.querySelector(".login_btn");
const btn_sort = document.querySelector(".btn_sort");
const btn_transfer = document.querySelector(".btn_transfer");
const btn_loan = document.querySelector(".btn_loan");
const btn_closeAccount = document.querySelector(".btn_closeAccount");

//CONTENEDORES
const container_app = document.querySelector(".app");
const container_movements = document.querySelector(".movements");

/// apartir de aquí inicio on el codigo
document.addEventListener("DOMContentLoaded", () => {
  const fechaActual = new Date();
  const opciones = { year: "numeric", month: "long", day: "numeric" };
  fechaSpan.textContent = fechaActual.toLocaleDateString("es-ES", opciones);
});

const displayMovements = function (arr_movements) {
  container_movements.innerHTML = "";
  arr_movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposite" : "withdrawal";
    const html = `<div class="movements_row">
    <div class="movements_type movements_type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements_value">${mov} €</div>
  </div>`;
    container_movements.insertAdjacentHTML("afterbegin", html);
  });
};
// displayMovements(account__one.movements);

///FUNCIÓN PARA CREAR UN NOMBRE DE USUARIO PARA CADA USUARIO
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(" ")
      .map((name) => name[0])
      .join("");
  });
};
createUsernames(accounts); //recibe el array
console.log(accounts);
//event handler
let currentAccount;
//FUNCION PARA INCIAR SESION
// login_input--pin login_input--user
const loThi = (a, b) => a - b;
const hiTlo = (a, b) => b - a;

btn_login.addEventListener("click", function (evnt) {
  evnt.preventDefault();
  currentAccount = accounts.find(
    (account) => account.username === input_user.value
  );
  if (currentAccount?.pin === Number(input_pin.value)) {
    // console.log("♡");
    //display UI nd welcome message
    welcome_message.textContent = `Welcome, ${currentAccount.owner
      .split(" ")
      .slice(0, 1)}`;
    container_app.style.opacity = 100;
    // CLEAR INPUT FIELDS
    input_user.value = input_pin.value = "";
    input_pin.blur();

    updateUI(currentAccount);
  } else {
    alert("(╯°□°)╯");
  }
});
const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);
  //display balance
  funCalcAndDisplayBalance(acc);
  //display summary - in-out-interests
  funSummaryInOut(acc);
};

//FUNCION PARA MOSTRAR LA SUMA DE TODOS LOS DEPOSITOS summary_value--in
const funSummaryInOut = function (acc) {
  const summary = acc.movements
    .filter((val) => val > 0)
    .reduce((acc, val, i, arr) => acc + val, 0);
  summary_in.textContent = `${summary}€`;

  const summaryOut = acc.movements
    .filter((val) => val < 0)
    .reduce((acc, val, i, arr) => acc + val, 0);
  summary_out.textContent = `${Math.abs(summaryOut)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  summary_interest.textContent = `${interest.toFixed(2)} €`;
};
// funSummaryInOut(account__one.movements);

//FUNCION PARA MOSTRAR EL BALANCE TOTAL en el ind class="balance_value"
const funCalcAndDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currValue) => accumulator + currValue,
    0
  );
  balance_value.textContent = `${acc.balance} €`;
};
// funCalcAndDisplayBalance(account__one.movements);

//FUNCIÓN PARA TRANFERIR
//1. verificar que amountTransfer/ sea una numero positivo
//2. Que tenga suficiente saldo en cuenta
//3. Se descuente del saldo de la cuenta origen
//4. Se envíe el saldo a la cuenta destino
//5. La cuenta destino existe (???)

const funClickTransfer = function (event) {
  event.preventDefault();
  const amountTransfer = Number(input_amountTra.value);
  const receiverAcc = accounts.find(
    (acc) => acc.username === input_transferTo.value
  );
  // console.log(amountTransfer, receiverAcc);
  input_amountTra.value = input_transferTo.value = "";
  if (
    amountTransfer > 0 &&
    receiverAcc &&
    currentAccount.balance >= amountTransfer &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amountTransfer);
    receiverAcc.movements.push(amountTransfer);
    updateUI(currentAccount);
  }
};

//FUNCION PARA CERRAR cuenta
//
//nuevo metodo .findIndex()
const funCloseAcc = function (evnt) {
  evnt.preventDefault();
  console.log("currentAccount:", currentAccount);
  console.log("input_closeUser.value:", input_closeUser.value);
  console.log("input_closePin.value:", input_closePin.value);
  if (
    input_closeUser.value === currentAccount.username &&
    Number(input_closePin.value) === currentAccount.pin
  ) {
    console.log("Hack, Yes");
    // Aquí puedes agregar la lógica para cerrar la cuenta, como removerla del array de cuentas
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    accounts.splice(index, 1);
    container_app.style.opacity = 0;

    input_closeUser.value = input_closePin.value = "";
    input_closeUser.blur();
    input_closePin.blur();
    welcome_message.textContent = `Account closed.`;
  } else {
    alert("Failed to match username or pin");
  }
};
//FUNCIÓN PARA PEDIR UN PRÉSTAMO
console.log("Ros");
//1. verificar que alguna cantidad (arry.movements (mov)) sea al menos el 10% del prestamo solicitado (input.loan)
const funLoan = function (evnt) {
  evnt.preventDefault();
  const amount = Number(input_loan.value);
  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    currentAccount.movements.push(amount);
    updateUI(currentAccount);
  } else {
    alert("Too Hight! ( • ᴖ • ｡)");
  }
  input_loan.value = "";
  input_loan.blur();
};

//FUNCIÓN PARA ORDENAR DE MAYOR A MENOR LOS ELEMENTOS DEL ARRAY
//1.- tomar un array de currentAcount.movements y ordenarlo de mayor a menor
let isAscending = true; // Estado inicial: orden ascendente
const funSort = function () {
  if (isAscending) {
    currentAccount.movements.sort(loThi);
  } else {
    currentAccount.movements.sort(hiTlo);
  }
  isAscending = !isAscending; // Alterno el estado
  updateUI(currentAccount);
};
//función paara crear el array de valores de transacción

//MAPSmax
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
//EVENT LISTENERS
btn_transfer.addEventListener("click", funClickTransfer);
btn_closeAccount.addEventListener("click", funCloseAcc);
btn_loan.addEventListener("click", funLoan);
btn_sort.addEventListener("click", funSort);

//calcular el max

//EXTRA FUNCIONALIDADES DE EJERCICIOS
// const funmax = function (movements) {
//   const max = movements.reduce(
//     (prev, next) => (prev > next ? prev : next),
//     movements[0]
//   );
//   return `El valor máximo es: ${max}`;
// };
// console.log(funmax(account__four.movements));
// El método some and any, vamos a comprender la diferencia y relación con .includes()
console.log(movements.includes(-130)); // solo podemos probar la igualdad
//Cuando queremos meter una condición para evaluar si esto se incluye
const trueDepositFalse = movements.some((some) => some > 0);
console.log(trueDepositFalse);
//EVERY--- SI TODOS LOS ELEMENTOS SATISFACEN LA CONDICIÓN
const everyM = account__four.movements.every((mov) => mov > 0);
console.log(`Es: ${everyM}`);

//separated callback, a function------------  const fun = (X) => x*2;

const depositTrue = (mov) => mov > 0;
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log("-----------------------------------------");
console.log(movements.some(depositTrue));
console.log(movements.every(depositTrue));
console.log(movements.filter(depositTrue));
console.log(movements.filter(depositTrue).length);

//.flat() and .flatMap();
const anasArry = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(anasArry.flat(Infinity));

let arrFlat = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arrFlat.flat());

let arr1 = [1, 2, [3, 4]];
console.log(arr1.flat());

let arr2 = [1, 2, [3, 4, [5, 6]]];
console.log(arr2.flat(2));

let arr3 = [1, [2, [3, [4, 5]]]];
console.log(arr3.flat(Infinity));

let arr4 = [1, [2, [3, [4, [5, [6, 7]]]]]];
console.log(arr4.flat(Infinity));

let practiceArr1 = [
  [1, 2],
  [3, 4],
  [5, [6, 7]],
];
console.log(practiceArr1.flat());

let practiceArr2 = [1, [2, [3, [4, [5]]]], 6];
console.log(practiceArr2.flat(2)); // 1,2,3, (2), 6

let practiceArr3 = [[1, [2, [3]]], 4, [5, [6, 7, [8]]]];
console.log(practiceArr3.flat(3)); // 1,2,3,4,5,6,7,8

const overBalance = accounts
  .map((acc) => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overBalance);

// combinación de .map() and .flat();
const flatMapEx = accounts
  .flatMap((acc) => acc.movements) // the flat map method just go one level deepper !!!!
  .reduce((acc, mov) => acc + mov, 0);
console.log(flatMapEx);
//SORT EVENTS
let items = [
  { name: "Widget", price: 25 },
  { name: "Ros", price: 14 },
  { name: "Anna", price: -13 },
  { name: "Gadget", price: 15 },
  { name: "Thingamajig", price: 5 },
];

let ticket = [
  { product: "Cookies", price: 45 },
  { product: "Sugar 800kg", price: 98 },
  { product: "Canol Oil 3pzas", price: 115 },
  { product: "Members Mark Soluble", price: 873 },
  { product: "Classic Nescafé 1.5kg", price: 475 },
  { product: "Milk 12 pzas", price: 245 },
];

const lowToHight = (a, b) => a.price - b.price;
const highToLow = (a, b) => b.price - a.price;

let shalowLow = [...items];
console.log("El resultado de Menor a Mayor de Items");
console.log(shalowLow.sort(lowToHight));

let shallowHight = [...items];
console.log("El resultado de Mayor a Menor de Items");
console.log(shallowHight.sort(highToLow));

console.log("El resultado de Menor a Mayor de ticket");
console.log(ticket.sort(lowToHight));

const lTh = (a, b) => a - b;
console.log(arr4.flat(Infinity).sort(lTh));

//THE FILL METHOD: convierte un iterable en un array (lo rellena)

const r = Array.from(
  { length: 100 }, //el objeto similar a un array o iterable que deseo convertir en un array
  (_, i) => Math.trunc(Math.random() * 500) + 1 //una función de mapeo que se llamará en cada elemento del array
);

console.log(r, typeof r);

const funMayor = r.filter((el) => el > 100);
const funMenor = r.filter((el) => el < 100);
console.log(funMayor);
console.log(funMenor);

//entendido
balance_value.addEventListener("click", function () {
  const nwArrTodos = Array.from(
    document.querySelectorAll(".movements_value"),
    (el) => Number(el.textContent.replace("€", ""))
  ).sort(lTh);
  console.log(nwArrTodos);
});
