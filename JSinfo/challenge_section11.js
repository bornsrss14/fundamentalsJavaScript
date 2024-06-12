// const dataJulia = [14, 4, 2, 78, 12, 3];
// const dataKate = [18, 78, 1, 0, 1, 8];

// const funCheckDogs = function (arryDogs1, arryDogs2) {
//   const shallowCopyArry1 = arryDogs1.slice();
//   shallowCopyArry1.splice(0, 1);
//   shallowCopyArry1.splice(-2);
//   const arryDogs = shallowCopyArry1.concat(arryDogs2);
//   arryDogs.forEach((dog, index) => {
//     const mayOrMin = dog < 3 ? "Puppy 🐶" : "Adult 🐕";
//     console.log(`La mascota ${index + 1} es: ${mayOrMin}`);
//   });
// };

// funCheckDogs(dataJulia, dataKate);
//.MAP() devuelve un nuevo array al aplicar una operación a esta
const arry = [1, 14, 7, 90, 15, 7];
let arryNew = arry.map((num) => num * 2);
console.log(arryNew);
//-------------------------- convertir EUR a USD
const eurToUsd = 1.1; //tasa de cambio, ejemplo
const originalMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//creo una nueva variable (array)
const arryUsd = originalMovements.map((mov) => Math.round(mov * eurToUsd));
console.log(`El resultado de la tasa de cambio es: ${arryUsd}`);

//.FILTER()
//Hace un nuevo array apartir de datos filtrados
const numbers = [7, 14, 21, 28, 36, 43, 49];
let numbersFilter = numbers.filter(function (numero) {
  return numero > 30;
});
console.log(`El resultado de filtración: ${numbersFilter}`);

//.REDUCE()
//Reduce los valores resultado de la operación, a un solo valor
let numSum = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
let numeroRed = numSum.reduce((acc, number) => acc + number, 0);
console.log(numeroRed);
