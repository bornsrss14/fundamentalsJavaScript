"use strict";
// const arrBookin = [];
// const createBooking = function(flightNumber , numPassengers = 1, price =20){
//     const booking = {
//         flightNumber,
//         numPassengers,
//         price,
//     };
//     console.log(booking);
//     arrBookin.push(booking);
// };
// createBooking('SFR14526640', 3);
// createBooking('SFR44412831', undefined, 84);

const flight = "HL244";
const passengerRoss = {
  name: "Ross Fuentes",
  passportNumber: 2475891,
};

const funChecking = (flightNumber, passenger) => {
  flightNumber = "LH999";
  passenger.name = "Ms." + passenger.name;
  if (passenger.passportNumber === 2475891) {
    console.log(`Checked in ${flightNumber}`);
  } else {
    console.log("incorrect ._.");
  }
};

funChecking(flight, passengerRoss);
console.log(`Number of flight: ${flight}`);
console.log(passengerRoss);w

const newPassport = (person) => {
  console.log(
    `New passport asigned: ${(person.passportNumber = Math.trunc(
      Math.random() * 100000
    ))}`
  );
};

newPassport(passengerRoss);
funChecking(flight, passengerRoss);
