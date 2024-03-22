// const age = 17;
// const driverName = 'Ros';

// const isOldEnought =  age >= 18;
// const isTooYoung = 18 - age;
// if(isOldEnought){
//     console.log(`The Driver ${driverName} is qualified `)
// }
// else {
//     console.log(`${driverName} should try againg in ${isTooYoung} years`);
// }

// const scoreDolphins = (97 + 112 + 81)/3;
// const scroreKoalas = (109+95+86)/3;
// console.log(scoreDolphins , scroreKoalas);

// if(scoreDolphins > scroreKoalas && scoreDolphins >= 100){
//     console.log('Dolphins win the trophy :D ');
// } else if (scroreKoalas > scoreDolphins && scroreKoalas >= 100) {
// console.log('Koalas win the trophy :X');
// } else (scoreDolphins === scroreKoalas){
//     console.log('Both are winners');
// }
// ------------------------------------------------------------------------------------WINNER
// const scoreDolphins = (97 + 2 + 81) / 3;
// const scoreKoalas = (109 + 95 + 6) / 3;

// console.log(scoreDolphins, scoreKoalas);

// const winner =
//   scoreDolphins > scoreKoalas && scoreDolphins >= 100
//     ? 'Dolphins win the trophy :D'
//     : scoreKoalas > scoreDolphins && scoreKoalas >= 100
//     ? 'Koalas win the trophy :X'
// //     : scoreDolphins === scoreKoalas
// //     ? 'Both are winners'
// //     : 'No winner';

// // console.log(winner);
// // -------------------------------------------------------------------------------- Password
// // let userName = prompt("Who's there?");
// // if (userName = 'Admin'){
// //     let pswrd = prompt('Please, type your password', '');
// //     if (pswrd ==='poderLun4r14$$'){
// //         alert('Welcome Pandasneezing');
// //     } else if (pswrd === '' || null) {
// //         alert('canceled');
// //     } else{
// //         alert('Wrong password, try again');
// //     }
// // } else if (userName === '' || null){
// //     alert('Canceled :(');

// // } else{
// //     alert("i don't know you :D");
// // }

// // ------------------------------------------------------------------------
// let browser = prompt('ingresa Edge, Chrome, Firefox, Safari, Opera, una deestas opciones', '');
// if(browser == Edge){
//     alert( "You've got the Edge!" );
// }
// else if (browser == 'Chrome' || 'Firefox' || 'Safari' || 'Opera'){
//     alert( 'Okay we support these browsers too' );
// } else{
//     alert( 'We hope that this page looks ok!' );
// }
// // -------------------------------------------------

// let a = +prompt('Aqui va el valor','');
// switch(a){
//     case 0:
//         alert(0);
//         break;
//     case 1:
//         alert(1);
//         break;
//     case 2:
//     case 3:
//         alert('2 o 3')
//     break;
//     default:
//         alert('Valor no encontrado');
// }

// // -------------------------------------------------- calculate tip

// // const bill =275;

// // const tip = bill >= 50 && bill <= 300 ? bill*.15 : bill*.20;
// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);

// //-------------------------- calculate otherwise

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Did parents allow you?');
//     }
//   }

//   function checkAge2(ageTwo){
//     return (ageTwo > 18) ?  true: confirm('Did parents allow you?');
//   }
//   checkAge2(2);

//   function checkAge3(ageThree){
//     return ageThree > 18 || confirm('Did parents allow you?');
//   }
//   checkAge3(20);

// //   ----------------------------------------exi

// function pow(x,n){
//     return x**n;
// }

// // ------------
// // esta es una funcion de ejemplo del procesador de fruta

// function frootProcessor(apples, mangos){
//   let frootVariable = `This Juice is ${apples} and ${mangos}`;
//   return frootVariable;
// }

// frootProcessor (2,3);

// // --------------------------------- calc years until retirement

// const calcAge = function (birthYear){
//   return 2024 - birthYear;
// }

// const yearsUntilRetirement = function(birthYear, nickName){
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0){
//     console.log(`${nickName} retires in ${retirement} years`);
//     return `${retirement} - ${nickName}`;
//   } else{
//     console.log(`${nickName} is already retired.`);
//     return -1;
//   }
// }
// console.log(yearsUntilRetirement(1998 , 'Ros'));
// console.log(yearsUntilRetirement(1991, 'Anna Oh'));

// const year = [2024,1998,2012,2000];
// console.log(year);
// year.push(2005,2004);
// console.log(`${year}estos es con el cambio`);
// year.unshift(2010 ,'A.C');
// console.log(`${year} esto es el resultado final`);

// const kanyeDiscografia = ['Jesus is king', 'TLOP', 'Graduations', 'Voltures'];
// console.log(kanyeDiscografia);
// for(let albums of kanyeDiscografia){
//   alert(albums);
// }

// const kanyeSongs = ['Famous', 'Burn', 'Bound 2', 'Flashing lights', 'Carnival'];
// for(i=0;i < kanyeSongs.length; i++){
//   alert(kanyeSongs[i]);
// }

// // funcion para calcular la propina en base a
// // - 15% of the bill if the bill value is between 50 and 300
// // - 20% of the bill if the value is different

const calcTip = function (bills) {
  const tips = [];
  const totals = [];

  for (let i = 0; i < bills.length; i++) {
    let tipPercentage = bills[i] > 50 && bills[i] <= 300 ? 0.15 : 0.2;
    let tip = bills[i] * tipPercentage;
    tips.push(tip);
    totals.push(bills[i] + tip);
  }

  return { tips, totals };
};
90;
const bills = [125, 555, 44]; // Longitud de 3
const { tips, totals } = calcTip(bills);

alert(`Las cuentas fueron de ${bills}`);
alert(`Las propinas son de ${tips}`);
alert(`El total de las cuentas son de ${totals}`);

// --------------------------------------

const rosPandas = {
  nickName: 'Rosario',
  lastName: 'Fuentes',
  agePandas: 24,
  userPandas: 'bornsrss',
};

let keyPandas = prompt(
  'What do you want to know about pandasneezing? Choose: nickName, lastName, agePandas, userPandas',
  ''
);
if (rosPandas[keyPandas]) {
  console.log(rosPandas[keyPandas]);
} else {
  console.log('Choose: nickName, lastName, agePandas, userPandas', '');
}
rosPandas.favoriteSong = 'Cold Sweat';
rosPandas['country'] = 'Japan';
console.log(rosPandas);

console.log(
  rosPandas['nickName'] +
    'has' +
    rosPandas['agePandas'] +
    'years old, she is from' +
    rosPandas['country'] +
    'and his favorite song is' +
    rosPandas['favoriteSong']
);

// -------------------------------------------------------------------- object integrado con una funcion

let jonas = {
  firstName: 'Jonas',
  lastName: '',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Ros', 'Alita', 'Miriam'],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License.`;
  },
};

console.log(jonas.age);
console.log(jonas.getSummary());

// -------------------------------- challenge 3

const mark = {
  fullName: 'Mark Miller',
  mass: 78, // 92
  height: 1.69, // 1.95
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92, //78
  height: 1.95, // 1.96
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(
  `${
    mark.bmi > john.bmi
      ? `Mark Miller's ${mark.calcBMI()}`
      : `John Smith's ${john.calcBMI()} `
  } BMI is higher than ${
    john.bmi < mark.bmi
      ? `John Smith's ${john.calcBMI()} `
      : `Mark Miller's ${mark.calcBMI()}`
  }`
);
// "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// for loop keeps running while condition is TRUE

for (let rep = 1; rep <= 20; rep++) {
  console.log(`This is my ej of template literal ${rep}`);
}

// -------------------------- otro loop

const jonasArray = [
  'jonas',
  'Shmetman',
  2024 - 1998,
  'teacher',
  ['Adrian', 'Brenda', 'Cristina'],
  true,
];

for (let i = 0; i <= jonasArray.length; i++) {
  console.log(jonasArray[i], typeof jonasArray[i]);
}

// ----------------------------- loop de edades
const yearOf = [1998, 2005, 1996, 1990, 2001];
const agesOf = [];

for (let i = 0; i <= yearOf.length; i++) {
  agesOf.push(2024 - yearOf[i]);
}
console.log(agesOf);

// continue and break statement
console.log('----------ONLY STRINGS ----------------');
for (let r = 0; r <= jonasArray.length; r++) {
  if (typeof jonasArray[r] !== 'string') continue;
  {
    console.log(jonasArray[r], typeof jonasArray[r]);
  }
}

console.log('------- BREAK WITH NUMBERS');
for (r = 0; r <= jonasArray.length; r++) {
  if (typeof jonasArray[r] === 'number') break;
  {
    console.log(jonasArray[r], typeof jonasArray[r]);
  }
}

// const yearOf = [1998, 2005, 1996,1990,2001];
// const agesOf = [];

//looping backwards and loops inside loops
for (let i = yearOf.length - 1; i >= 0; i--) {
  agesOf.push(2024 - yearOf[i]);
}
console.log(agesOf);

// ----------------------------------------- .

for (let r = 1; r < 4; r++) {
  console.log(`This is TITLE EXCERCICE ${r} ❤️`);

  for (let rep = 1; rep < 6; rep++) {
    console.log(`This rep ${rep}`);
  }
}

// Generar un numero random, simulando a lanzar un dado y la cndiciòn será hasta que el dado caiga en 6

var numeroAleatorio = Math.trunc(Math.random() * 6) + 1;

while (numeroAleatorio !== 6) {
  console.log(`You rolled a dice ${numeroAleatorio}`);
  numeroAleatorio = Math.trunc(Math.random() * 6) + 1;
  if (numeroAleatorio === 6) {
    console.log('Loop is about to end');
  }
}

// CHALLENGE #4 Let's improve Steven's tip calculator even more!-----------

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
// declaramos los arreglos, para las cuentas y para guardar los totales de cada operacion
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

// vamos a someter a evaluacion para recorrer el arreglo y para hacer las operaciones correspondbibills
for (let i = 0; i < bills.length; i++) {
  let tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}

console.log(bills);
console.log(tips);
console.log(totals);

// ----------------------------------------------- challenge Temperature -----------
const temperatures = [45, 4, -2, 9, 67];

const calclTemperature = function (tempOne, tempTwo) {
  const temps = tempOne.concat(tempTwo);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) {
      max = temps[i];
    }
    if (temps[i] < min) {
      min = temps[i];
    }
    console.log(`Son ${temps[i]}ºC registrados in ${i + 1} days`);
  }
  console.log(max, min);
};
calclTemperature([17, 21, 23]);
calclTemperature([12, 5, -5, 0, 4]);

// 17ºC (grados registrados en el array por posicion) in (dia que corresponde) day

// EJERCICIO #1 este pequeño ciclo se encarga de sumar los numero impares del 1 -100 en un ciclo for
let sumEvenNumbers = 0;
for (let i = 2; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEvenNumbers += i;
  }
}
console.log(
  `La suma de todos los numeros pares del 1-100 es ${sumEvenNumbers}`
);
// para numeros impares
let sumOddNumbers = 0;
for (let im = 1; im <= 100; im++) {
  if (im % 2 !== 0) {
    sumOddNumbers += im;
  }
}
console.log(
  `La suma de todos los numeros impares del 1 al 100 es ${sumOddNumbers}`
);

// EJERCICIO #2
//Tabla de multiplicar: Solicita al usuario el numero y luego imprime la tabla de multiplicar de ese numero
// del 1-10 utilizando un ciclo for
let userNumber = prompt(
  'Por favor ingresa un numero para calcular su tabla de multiplicar',
  ''
);
for (let i = 1; i <= 10; i++) {
  let multiploNumer = userNumber * i;
  console.log(multiploNumer);
}

//EJERCICIO #3
// Factorial de un número: Desarrolla un programa que calcule el factorial de un número
//ingresado por el usuario utilizando un ciclo for.
// n!=n×(n−1)×(n−2)×…×2×1

//userFactorialNumber
//factorialVariable se inicializa
//calculo = calculo  x factorial Variable
//
//1 * 1 = 1
// 1 *2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
//24 * 5 = 120
//120 * 6 = 720
let calculo = 1;
let userFactorialNumber = prompt('Por favor ingresa un numero', ''); //5
for (
  let factorialVariable = 1;
  factorialVariable <= userFactorialNumber /*5*/;
  factorialVariable++
) {
  calculo *= factorialVariable; // Multiplicamos el cálculo por el número de la iteración 1*1 1*2 2*3 6*4 24*5
}
console.log(`El factorial de ${userFactorialNumber} es ${calculo}`);

//Ejercicio #4 Secuencia Fibonacci
// Implementa un programa que genere los primeros n términos de la secuencia Fibonacci utilizando un ciclo for.
// comienzo con dos primeros numeros de la secuancia  firstDigFibonacci, secondDigFibonacci

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
let fibonacciSequence = [0, 1];
let numeroDado = prompt(
  'Dame un numero para calcular la secuencia Fibonacci',
  ''
); //6
for (let i = 2; i < numeroDado; i++) {
  let calculoPosition = fibonacciSequence[i - 2] + fibonacciSequence[i - 1];
  fibonacciSequence.push(calculoPosition);
}
console.log(
  `La secuencia de Fibonnacci de ${numeroDado} es ${fibonacciSequence} longitud es de ${fibonacciSequence.length}`
);

//Ejercicio #5
//Crea un programa que verifique si un número ingresado por el usuario es primo o no utilizando un ciclo for para comprobar sus divisores.

let inputNumber = Number(prompt('Numero ingresado', ''));
let esPrimo = true;
for (let i = 2; i < inputNumber; i++) {
  if (inputNumber % i === 0) {
    esPrimo = false; //si el if es cierto, entonces toma este valor la bandera, a falso y se va a ejecutar
    //lo que tiene en el else
    break;
  }
}
if (esPrimo) {
  console.log(numeroIngresado + ' es un número primo.');
} else {
  console.log(`El numero ${inputNumber} no es un número primo.`);
}

//EJERCICIO #6
//Contador de vocales: Desarrolla un programa que cuente el número de vocales en
// una cadena de texto ingresada por el usuario utilizando un ciclo for.

let texto = prompt('Ingresa una cadena de texto:');
texto = texto.toLowerCase();
let contadorVocales = 0;
for (let i = 0; i < texto.length; i++) {
  if (
    texto[i] === 'a' ||
    texto[i] === 'e' ||
    texto[i] === 'i' ||
    texto[i] === 'o' ||
    texto[i] === 'u'
  ) {
    contadorVocales++;
  }
}
console.log('El número de vocales en la cadena es: ' + contadorVocales);

//Ejercicio # 7
/*A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its 
own digits, each raised to the power of the number of digits in a given base. In this Kata,
 we will restrict ourselves to decimal (base 10). */
//153
 let inputArmstron = prompt('Por favor ingresa un numero','');
 let narcissisticNumber = 0;
 let resultadoFinal =0;
 for(let i=0;i < inputArmstron.length;i++){
  narcissisticNumber = Math.pow(inputArmstron[i], inputArmstron.length);
  resultadoFinal += narcissisticNumber;
 } if(resultadoFinal == inputArmstron){
  console.log('Es un numero narcicista')

 } else{
  console.log('No es');
 }
 console.log(resultadoFinal);

 //Arrow Funtions
// Para calcular los años que le quedan para jubilarse, 
//teniendo como parametros el año de nacimiento, edad actual, fecha actual

const fun = (birthYe, currentYear) => {
  let age = currentYear - birthYe;
  let yearsUntilRetire = 65 - age;
  return yearsUntilRetire;
}

console.log(fun(1998, 2024));