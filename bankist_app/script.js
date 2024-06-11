"use strict";

const account__one = {
  owner: "Emily Thompson",
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
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
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 1985,
};

const accounts = [account__one, account__two, account__three, account__four];
//ENTRADAS
const input_user = document.querySelector(".login_input--user");
const input_pin = document.querySelector(".login_input--pin");
const input_loan = document.querySelector(".form_input--loan");
const input_closeUser = document.querySelector(".form_input--closeUser");
const input_closePin = document.querySelector(".form_input--closePin");

//MODIFICADORES DE TEXTOS
const welcome_message = document.querySelector(".welcome");
const fechaSpan = document.querySelector(".current-date");
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

const displayMovements = function (movements) {
    container_movements.innerHTML = '';
  movements.forEach(function (mov, index) {
    const type = mov > 0 ? "deposite" : "withdrawal";
    const html = `<div class="movements_row">
    <div class="movements_type movements_type--${type}">${
      index + 1
    } ${type}</div>
    <div class="movements_value">${mov}</div>
  </div>`;
    container_movements.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account__one.movements);

//MAPS
const currencies = new Map([
  ["USD", "United State Dollar"],
  ["EUR", "Euro"],
  ["GBP", "Pound sterling"],
]);
