// "use strict";

// //TENGO UN OBJETO CON UNA PROPIEDAD DE MÉTODO
// // const object = {
// //   initial: 0,
// //   final: 4,
// //   increment: function (step) {
// //     this.final += step;
// //     return this.final;
// //   },
// // };

// // const object2 = {
// //   initial: 4,
// //   final: 1,
// // };

// //accedo a ese metodo con bind y creo un nuevo metodo
// // const copiaIncrementBind = object.increment.bind({final:10});
// // console.log(copiaIncrementBind(50)); //salida de 60
// // const funObjectDosBind = object.increment.bind(object2);
// // console.log(funObjectDosBind(90));

// //HAY DE DOS OPCIONES, ASÍ YO LO ENTIENDO
// //donde puedo acceder al this(a lo que apunta) en object.nombre de la funcion -> accediendo a bind, y cambiar su propiedad
// //para que a la llamada de la copia que se generó del mètodo, yo pueda acceder a ingresar
// //los argumentos, en este caso step

// // const arr = ['Rosario', 'Fuentes', 'Garcia'];
// // const others = ['is', 'a', 'bitch'];

// // arr.push.apply(arr, others);
// // for (const iterable of arr) {
// //   console.log(`This is the resoult of: ${iterable}`);

// // }

// // const numbers = [9, 8, 1,78,6,-22, 2, 3, 5, 6, 7];

// // const max = Math.max.apply(null, numbers);
// // const min = Math.min.apply(null, numbers);

// // console.log(max);
// // console.log(min);

// // (function(){
// //   console.log('this will never executed again');
// // })();

// // (() => console.log('Esto no se volverá a repetir'))();

// // let f;

// // const g = function () {
// //   const a = 23;

// //   f = function () {
// //     console.log(a * 2);
// //   };
// // };

// // const h = function () {
// //   const b = 14;
// //   f = function () {
// //     console.log(b * 2);
// //   };
// // };

// //the first adignment
// // g();
// // f();

// //f es una otra funcion, porque fue reasignada por h en la segunda funcion
// //esto prueba que f. se cerró sobre el entorno variable de h()
// // h();
// // f();

// /////////////////// creando otra función

// // const funEspera = function (numPass, waitTime) {
// //   const perGroup = numPass / 3;

// //   setTimeout(function () {
// //     console.log(
// //       `Now we are boarding all ${numPass} passengers  in ${waitTime} seconds`
// //     );
// //     console.log(
// //       `There are 3 groups , each with ${perGroup} passengers per group`
// //     );
// //   }, waitTime * 1000);

// //   console.log(`Will start boarding in ${waitTime} seconds`);
// // };

// // funEspera(18, 14);

// //-------------------------------------------------------------------------------
// (function () {
//   const acheUno = document.querySelector("h1");
//   acheUno.style.color = "red";

//   document.querySelector("body").addEventListener("click", function () {
//     acheUno.style.color = "steelblue";
//   });
// })(); //auto ejecutable para evitar dejar variabales en el ambito global

// // The new arrays methods
// // .concat()    .join()    .reverse()   .slice()

// // const arySingles = [
// //   "Turn on the bright lights",
// //   "stella was a diver and she was allways down",
// //   "obstacle 1",
// //   "Barricade",
// //   "No I in threesome",
// //   "Rest my Chemistry",
// // ];

// // const arySinglesTwo = ["All the  rages back home", "Evil", "NYK", "Toni"];

// // const concat1 = arySingles.concat(arySinglesTwo); //copia superficial
// // console.log(...concat1.join(""));

// ////// Looping Arrays forEach()

// // const arryMovements = [467, -56, 2000, -800, -25, -3, -56, 892, 5000];
// // //large form
// // for (const [indi, movement] of arryMovements.entries()) {
// //   if (movement > 0) {
// //     console.log(`Usted hizo un deposito de: ${indi + 1}.- ${movement}`);
// //   } else {
// //     console.log(`Usted hizo un retiro de: ${indi + 1}.- ${Math.abs(movement)}`);
// //   }
// // }
// // console.log(arryMovements);

// //Short form
// // for (const mov of arryMovements) {
// //   const result =
// //     mov > 0
// //       ? console.log(`Deposito de ${mov}`)
// //       : console.log(`retiro de ${Math.abs(mov)}`);
// // }

// //With for EachMethod
// console.log(
//   "--------------- con parametros de indice, replicando a .entries() method"
// );

// // arryMovements.forEach(function (movement, indi, array) {
// //   //què pasa si necesitamos acceso a una variable de contador(?)
// //   movement > 0
// //     ? console.log(`Deposito ${indi + 1}: de ${movement}`)
// //     : console.log(`Retiro de ${indi + 1}: de ${Math.abs(movement)}`);
// // });

// // console.log(
// //   "Con función de flecha =>------------ imitando al .entries() method--------------"
// // );
// // arryMovements.forEach((movement, index, array) =>
// //   movement > 0
// //     ? console.log(`Deposito ${index + 1}: de ${movement}`)
// //     : console.log(`Retiro ${index + 1}: de ${Math.abs(movement)}`)
// // );

// //--- El forEach también funciona en Maps y Sets
// //MAPS mis pares key, value

// const monedas = [
//   ["USD", "Dollar"],
//   ["MXN", "Pesos"],
//   ["IND", "Rupia"],
//   ["EUR", "Londres"],
// ];
