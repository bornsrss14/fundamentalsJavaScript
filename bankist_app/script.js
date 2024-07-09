"use strict";
const account__one = {
  /* american */ owner: "Emily Thompson",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1414,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-05-27T17:01:17.194Z",
    "2020-07-11T23:36:17.929Z",
    "2020-07-12T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "en-UK", // de-DE
};

const account__two = {
  /* CNY chino */ owner: "Jin Chon",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "CNY",
  locale: "zh-CN",
};

const account__three = {
  owner: "Michael Smith",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2024-01-10T08:15:30.123Z",
    "2024-02-20T11:45:22.456Z",
    "2024-03-25T14:32:11.789Z",
    "2024-04-15T17:50:43.321Z",
    "2024-05-05T09:25:54.654Z",
    "2024-06-18T13:40:29.987Z",
    "2024-07-22T10:30:15.432Z",
    "2024-08-30T16:45:20.876Z",
    /*     "2024-08-30T16:45:20.876Z", el toISOString genera un formato parecido a este */
  ],
  currency: "USD",
  locale: "en-US",
};

const account__four = {
  owner: "Anna Oh",
  movements: [430, 1000, 50, 902, 435, 355, 23, 60],
  interestRate: 1,
  pin: 1985,
  movementsDates: [
    /* acc.movementsDates[index] */ "2021-01-15T10:30:45.123Z",
    "2024-07-01T14:50:12.456Z",
    "2021-03-30T07:24:34.789Z",
    "2021-04-12T19:45:23.321Z",
    "2024-06-29T11:33:54.654Z",
    "2021-06-18T15:40:30.987Z",
    "2021-07-25T09:29:45.432Z",
    "2021-08-30T13:15:20.876Z",
  ],
  currency: "JPY",
  locale: "ja-JP",
};
const account__five = {
  owner: "Anjali Kapoor",
  movements: [40, 100, 500, 2, 45, 35, 2300, 670],
  interestRate: 1,
  pin: 5555,
  movementsDates: [
    /* acc.movementsDates[index] */ "2021-01-15T10:30:45.123Z",
    "2023-07-01T14:50:12.456Z",
    "2021-03-30T07:24:34.789Z",
    "2021-04-12T19:45:23.321Z",
    "2024-06-29T11:33:54.654Z",
    "2021-06-18T15:40:30.987Z",
    "2021-07-25T09:29:45.432Z",
    "2021-08-30T13:15:20.876Z",
  ],
  currency: "INR",
  locale: "en-in",
};

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const accounts = [
  account__one,
  account__two,
  account__three,
  account__four,
  account__five,
];
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

const formatMovementDate = function (date, locale) {
  const clacDaysPassed = (frstDate, scndDate) =>
    Math.round(Math.abs((scndDate - frstDate) / (1000 * 60 * 60 * 24)));
  const daysPassed = clacDaysPassed(new Date(), date);
  if (daysPassed === 0) return "Today";
  if (daysPassed === 1) return "Yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;
  if (daysPassed > 7 && daysPassed <= 14) return "Last week";

  return new Intl.DateTimeFormat(locale).format(date);

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  }).format(value);
};

const displayMovements = function (acc) {
  const fechaActual = new Date();
  const opciones = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  fechaSpan.textContent = new Intl.DateTimeFormat(acc.locale, opciones).format(
    fechaActual
  );

  container_movements.innerHTML = "";
  acc.movements.forEach(function (mov, index) {
    /* Lo que necesita es cachar una fecha generada, de dónde se generó ??? pues en el metodo al generar un prestamo o una transferencia*/
    /* Aquí ya no es necesario hacer por ejemplo const new = Date.now(), porqeu aquí genera una fecha actual, de ahora */
    const dateMovement = new Date(acc.movementsDates[index]);
    const displayDate = formatMovementDate(dateMovement, acc.locale);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const type = mov > 0 ? "deposite" : "withdrawal";
    const html = `<div class="movements_row">
    <div class="movements_type movements_type--${type}">${
      index + 1
    } ${type}</div>
     <div class="movements__date"> ${displayDate}</div> 
    <div class="movements_value"> ${formattedMov}</div>
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
let currentAccount, timer;
//FUNCION PARA INCIAR SESION
// login_input--pin login_input--user

const loThi = (a, b) => a - b;
const hiTlo = (a, b) => b - a;

const startLogOutTimer = function (durationMin) {
  let remainingTime = durationMin * 60;
  const tick = function () {
    const min = String(Math.trunc(remainingTime / 60)).padStart(2, "0");
    const sec = String(remainingTime % 60).padStart(2, "0");
    /* in each call, print the remaining time to UI */
    timer_logout.textContent = `${min}:${sec}`;

    if (remainingTime === 0) {
      clearInterval(timer);
      timer_logout.textContent = "El temporizador ha terminado";
      welcome_message.textContent = "Log In to get started";
      container_app.style.opacity = 0;
    }
    remainingTime--;
  }

  /* set time to five minutes */
  
  /* call the timer every second */
  
  /* timer expries and logged out user when reatches 0 s */
  tick(); 
  const timer = setInterval(tick, 1000);
  return timer;
};

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
  if(timer)clearInterval(timer);
  timer = startLogOutTimer(.50);
});
const updateUI = function (acc) {
  //display movements
  displayMovements(acc);
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
  summary_in.textContent = formatCur(summary, acc.locale, acc.currency);

  const summaryOut = acc.movements
    .filter((val) => val < 0)
    .reduce((acc, val, i, arr) => acc + val, 0);
  summary_out.textContent = formatCur(summaryOut, acc.locale, acc.currency);

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((deposit) => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  summary_interest.textContent = formatCur(interest, acc.locale, acc.currency);
};
// funSummaryInOut(account__one.movements);

//FUNCION PARA MOSTRAR EL BALANCE TOTAL en el ind class="balance_value"
const funCalcAndDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce(
    (accumulator, currValue) => accumulator + currValue,
    0
  );
  balance_value.textContent = formatCur(acc.balance, acc.locale, acc.currency);
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

    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
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
    currentAccount.movementsDates.push(new Date().toISOString());
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

//Acceder a las fechas de los movimientos de cada objeto

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
// console.log(movements.includes(-130)); // solo podemos probar la igualdad
//Cuando queremos meter una condición para evaluar si esto se incluye
// const trueDepositFalse = movements.some((some) => some > 0);
// console.log(trueDepositFalse);
//EVERY--- SI TODOS LOS ELEMENTOS SATISFACEN LA CONDICIÓN
const everyM = account__four.movements.every((mov) => mov > 0);
console.log(`Es: ${everyM}`);

//separated callback, a function------------  const fun = (X) => x*2;

const depositTrue = (mov) => mov > 0;
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
/*  console.log("-----------------------------------------");
console.log(movements.some(depositTrue));
console.log(movements.every(depositTrue));
console.log(movements.filter(depositTrue));
console.log(movements.filter(depositTrue).length);
*/
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

//EJERCICIO PRÁCTICO SOLO POR DIVERSIÓN
balance_value.addEventListener("click", function () {
  [...document.querySelectorAll(".movements_row")].forEach(function (
    row,
    index
  ) {
    if (index % 2 === 0) {
      row.style.backgroundColor = "#FDEDDE";
    }
  });
});
const evenOrOdd = (num) => num % 2 === 0;
console.log(evenOrOdd(4));
console.log(evenOrOdd(7));

console.log(account__one.movementsDates);
