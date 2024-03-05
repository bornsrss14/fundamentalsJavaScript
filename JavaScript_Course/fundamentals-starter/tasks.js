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
  nickName: "Rosario",
  lastName: "Fuentes",
  agePandas: 24,
  userPandas: "bornsrss",
};

let keyPandas = prompt(
  "What do you want to know about pandasneezing? Choose: nickName, lastName, agePandas, userPandas",
  ""
);
if (rosPandas[keyPandas]) {
  console.log(rosPandas[keyPandas]);
} else {
  console.log("Choose: nickName, lastName, agePandas, userPandas", "");
}
rosPandas.favoriteSong = "Cold Sweat";
rosPandas["country"] = "Japan";
console.log(rosPandas);

console.log(
  rosPandas["nickName"] +
    "has" +
    rosPandas["agePandas"] +
    "years old, she is from" +
    rosPandas["country"] +
    "and his favorite song is" +
    rosPandas["favoriteSong"]
);

// -------------------------------------------------------------------- object integrado con una funcion

let jonas = {
  firstName: "Jonas",
  lastName: "",
  birthYear: 1991,
  job: "teacher",
  friends: ["Ros", "Alita", "Miriam"],
  hasDriverLicense: true,

  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} years old ${
      this.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} driver's License.`;
  },
};

console.log(jonas.age);
console.log(jonas.getSummary());

// -------------------------------- challenge 3

const mark = {
  fullName: "Mark Miller",
  mass: 78, // 92
  height: 1.69, // 1.95
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
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

for(let rep = 1 ;rep <= 20 ; rep++){
console.log(`This is my ej of template literal ${rep}`);
}