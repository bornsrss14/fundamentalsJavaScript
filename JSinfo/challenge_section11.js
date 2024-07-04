const dataJulia = [14, 4, 2, 78, 12, 3];
const dataKate = [18, 78, 1, 0, 1, 8];

const funCheckDogs = function (arryDogs1, arryDogs2) {
  const shallowCopyArry1 = arryDogs1.slice();
  shallowCopyArry1.splice(0, 1);
  shallowCopyArry1.splice(-2);
  const arryDogs = shallowCopyArry1.concat(arryDogs2);
  arryDogs.forEach((dog, index) => {
    const mayOrMin = dog < 3 ? "Puppy 🐶" : "Adult 🐕";
    console.log(`La mascota ${index + 1} es: ${mayOrMin}`);
  });
};

funCheckDogs(dataJulia, dataKate);

const testData1 = [5, 2, 4, 1, 15, 8, 3];
const testData2 = [16, 6, 10, 5, 6, 1, 4];

const funCalcAverageHumanAge = function (arryDataTest) {
  const newMapArry = arryDataTest.map((age) =>
    age <= 2 ? age * 2 : 16 + age * 4
  );
  console.log(`Las edades de los perros son: ${newMapArry}`);
  const adultsArry = newMapArry.filter((age) => age >= 18);
  console.log(`Los perros adultos son: ${adultsArry}`);
  const average = adultsArry.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(average);
};
funCalcAverageHumanAge(testData1);
funCalcAverageHumanAge(testData2);

//.MAP() devuelve un nuevo array al aplicar una operación a esta

// const arry = [1, 14, 7, 90, 15, 7];
// let arryNew = arry.map((num) => num * 2);
// console.log(arryNew);
// //-------------------------- convertir EUR a USD
// const eurToUsd = 1.1; //tasa de cambio, ejemplo
// const originalMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// //creo una nueva variable (array)
// const arryUsd = originalMovements.map((mov) => Math.round(mov * eurToUsd));
// console.log(`El resultado de la tasa de cambio es: ${arryUsd}`);
// //--------------- Registrar cada movimiento en un array y después imprimirlo a consola

// const movimientosBancarios = [500, -300, 8500, -200, 250, 146, 789, -120];
// // const movBanSimplif = movimientosBancarios.map(
// //   (mov, i) =>
// //     `Movement ${i + 1}, you ${mov > 0 ? "deposited" : "withdrew"} ${Math.abs(
// //       mov
// //     )}`
// // );
// // console.log(movBanSimplif);

// const funMovBanSimplif = function (arry) {
//   const movBanSimplif2 = arry.map(
//     (mov, index) =>
//       `Movimiento #${index + 1}, tú ${
//         mov > 0 ? "depositaste" : "retiraste"
//       } la cantidad de ${Math.abs(mov)}`
//   );
//   console.log(movBanSimplif2);
// };

// funMovBanSimplif(movimientosBancarios);

// //.FILTER()
// //Hace un nuevo array apartir de datos filtrados
// const numbers = [7, 14, 21, 28, 36, 43, 49];
// let numbersFilter = numbers.filter(function (numero) {
//   return numero > 30;
// });
// console.log(`El resultado de filtración: ${numbersFilter}`);

// //.REDUCE()
// //Reduce los valores resultado de la operación, a un solo valor
// let numSum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
// let numeroRed = numSum.reduce((acc, number) => acc + number, 0);
// console.log(numeroRed);

//TEST DATA
// Study if each dog are eating to mucho o too little?
//Comer mucho significa que la porción de comida es más alta que la RECOMENDADA : poc---? lo contrario
//Iterar sobre el array forEach

//Formula: recFood = peso (KG) ** 0,75 * 28.
// arryDogs.item.recommendedFood = recFood;

//1. Recorra la matriz que contiene objetos para perros y, para cada perro,
//calcule la porción de comida recomendada y agréguela al objeto como una nueva propiedad.
//NO cree una nueva matriz, simplemente recorra la matriz.  Forumla:
//alimento recomendado = peso ** 0,75 * 28. (El resultado está en gramos de alimento y el peso debe estar en kg)
//Formula: recFood = peso (KG) ** 0,75 * 28.
// arryDogs.item.recommendedFood = recFood;

//2. Encuentre el perro de Sarah e inicie sesión en la consola, ya sea que esté comiendo demasiado o muy poco.
//PISTA: Algunos perros tienen varios dueños, por lo que primero debes encontrar a Sarah en la lista de dueños,
//por lo que este es un poco complicado (a propósito) 🤓

//3. Cree una matriz que contenga todos los dueños de perros que comen demasiado ('ownersEatTooMuch')
//y una matriz con todos los dueños de perros que comen muy poco ('ownersEatTooLittle').

//4. Log a string to the console for each array created in 3., like this:
//"Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"

//5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended
//(just true or false)

//6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)

//7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)

//8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order
//(keep in mind that the portions are inside the array's objects)

//PISTA 2: Estar dentro de un rango 10% por encima y por debajo de la porción recomendada
//significa: actual > (recomendado * 0,90) && actual < (recomendado * 1,10).
//Básicamente, la porción actual debe estar entre el 90% y el 110% de la porción recomendada.

const dogs = [
  { name: "Rex", weight: 22, curFood: 284, owners: ["Alice", "Bob"] },
  { name: "Bella", weight: 8, curFood: 200, owners: ["Matilda"] },
  { name: "Rocky", weight: 13, curFood: 275, owners: ["Sarah", "Jhon"] },
  { name: "Max", weight: 32, curFood: 340, owners: ["Michael"] },
  { name: "Floofy", weight: 14, curFood: 250, owners: ["Ros"] },
];

console.log(dogs);

//recorre el arreglo de dogs
const funOne = function (arry) {
  arry.forEach((dog) => {
    dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
  });
};

const funTwo = function (arry, owner) {
  const dogOfPerson = arry.find((dog) => dog.owners.includes(owner));
  if (dogs) {
    console.log(
      `${owner}'s dog ${dogOfPerson.name}, is eating too ${
        dogOfPerson.curFood > dogOfPerson.recommendedFood ? "much" : "little "
      }`
    );
  }
};

const funThree = function (dogsArry) {
  const dogOwnersWithOvereatingDogs = [];
  const dogOwnersWithUnderfedDogs = [];

  dogsArry.map((dog) =>
    dog.curFood > dog.recommendedFood
      ? dogOwnersWithOvereatingDogs.push(dog.owners)
      : dogOwnersWithUnderfedDogs.push(dog.owners)
  );
  console.log(
    `${dogOwnersWithOvereatingDogs
      .flat(Infinity)
      .join(" , ")}'s dogs eat too much! \n${dogOwnersWithUnderfedDogs
      .flat(Infinity)
      .join(" , ")}'s dogs eat too little! `
  );
  // console.log(...dogOwnersWithOvereatingDogs.flat(Infinity));
  // console.log(...dogOwnersWithUnderfedDogs.flat(Infinity));
};

// const allOwners = arry.flatMap((el) => el.owners);
//Algún perro que coma la cantidad de comida exacta recomendada
const thersSomeDogHealty = function (dogsArry) {
  const yesOrNotHealty = dogsArry.some(
    (dog) => dog.curFood === dog.recommendedFood
  );
  return yesOrNotHealty === true
    ? "¿Alguno come la cantidad correcta?: Yes"
    : "No hay perros que coman exactamente lo recomendado";
};
//Hay algun perro que coma la cantidad recomendada de comida
const trueFalseFun = (dog) =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
//Hay algun elemento dentro del array pasado que cumpla con lo descrito en la función ???
const trueFalseDos = function (dogsArry) {
  const trueFalse = dogsArry.some(trueFalseFun);
  console.log(trueFalse);
};

const shallow = function (dogsArry) {
  const dogsSorted = dogsArry
    .slice()
    .sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(dogsSorted);
};

//LLAMADAS DE FUNCIÓN -------------------------------------------------------₊˚🖇️✩ ( ｡•̀ ᴖ •́ ｡)💢 ˚🎧⊹♡
console.log(funOne(dogs));
funTwo(dogs, "Michael");
funTwo(dogs, "Ros");

funThree(dogs);
console.log(thersSomeDogHealty(dogs));
trueFalseDos(dogs);
console.log(dogs.filter(trueFalseFun));

shallow(dogs);
