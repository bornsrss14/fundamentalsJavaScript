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
//calcular el max

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

const depositTrue = (mov) => mov >0;
//const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log('-----------------------------------------');
console.log(movements.some(depositTrue));
console.log(movements.every(depositTrue));
console.log(movements.filter(depositTrue));
console.log(movements.filter(depositTrue).length);
