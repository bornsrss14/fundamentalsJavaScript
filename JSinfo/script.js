// const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// const openingHours = {
//   [weekdays[0]]: {
//     open: 12,
//     close: 22,
//   },
//   [weekdays[4]]: {
//     open: 11,
//     close: 23,
//   },
//   [weekdays[5]]: {
//     open: 0, // Open 24 hours
//     close: 24,
//   },
//   [weekdays[2]]: {
//     // open:1,
//     close: 23,
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   // ES6 enhanced object literals
//   openingHours,

//   order(starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },

//   orderPasta(ing1, ing2, ing3) {
//     console.log(
//       `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },

//   orderPizza(mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// // const r = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // console.log(r);

// // for (const menuRes of r) console.log(menuRes);

// // for (const [index, element] of r.entries()) {
// //     // console.log(menuRes);
// //     console.log(`${index +1}:${element}`);
// // }

// // #1 Optional chaining

// // const user = {
// //   name: "Taylor",
// //   address: {
// //     city: "Manhattan",
// //     zipdode: 785455,
// //   },
// // };
// // const city = user.address?.city || "Esta no es una propiedad valida";
// // console.log(city);

// // const country =
// //   user.address?.country ?? "Esta propiedad no es accesible, o no existe";
// // console.log(country);

// // for (const day of weekdays) {
// //   const open = restaurant.openingHours[day]?.open ?? "were close";
// //   console.log(`On ${day}, we are open at ${open}`);
// // }

// // console.log('----- SEPARADOR --------');
// // // Another practical solution
// // for (const day of weekdays) {
// //   const open = restaurant.openingHours[day]?.open;
// //   if (open !== undefined) {
// //     console.log(`On ${day},we open at ${open}`);
// //   } else {
// //     console.log(`On ${day}, we are closed`);
// //   }
// // }

// // // #2 UTILIZAMOS ESTE MISMO OPERADOR PERO AHORA CON METHODS
// // console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// // console.log(restaurant.orderRissotto?.(0,1) ?? 'Method does not exist');
// // //#3 EN ARRAYS

// //#4 EN OBJETOS

// // const paulBanks = {
// //   nombreP:'Paul',
// //   apellidoP: 'Banks',
// //   ageP : 46,
// //   kids: 1,
// // };

// // const propiedades = Object.keys(paulBanks);

// // for (const p of propiedades) {
// //   console.log(`${p}: ${paulBanks[p]}`);
// // };

// // const values = Object.values(paulBanks);
// // console.log(values);
// // Object.entries(nombreDelObjeto)

// //#5 SETS
// //primero lo declaramos
// let mySet = new Set();
// //tenemos varios metodos para poder agrega datos al set
// mySet.add("Rosario");
// mySet.add(2);
// mySet.add(3);
// console.log(mySet);
// //Verificar si un elemento existe en el set

// const r = mySet.has("Rosario");
// console.log(r);
// mySet.delete(2);

// //Recorrer los elementos del set con un bucle For Of
// for (const clave of mySet) {
//   console.log(clave);
// }
// // Tambièn creo un SET con valores iniciales
// const otroSet = new Set([4, 14, 24, 7, 21, 45, 12]);
// console.log(otroSet);

// for (const it of otroSet) {
//   console.log(`These are the values of ${it}`);
// }
// console.log(`Nothing in particular ${otroSet.size} elements`);

// //MAPS
// // let mapRos = new Map();
// // mapRos.set('name', 'Rosario');
// // mapRos.set(1, 24);
// // mapRos.set(true, 'bitch');
// // mapRos.set(false, 'caothic');

// // console.log(mapRos.get(true));
// // console.log(mapRos.has(1));
// // console.log(mapRos.size);

// // console.log(mapRos);
// //RECORRER EL MAPA CON FOR OF...

// // for (const [clave, valor] of mapRos.entries()) {
// //   console.log(`The key is ${clave} and the value is ${valor}`);
// // }
// // //ESTO ES SI TENEMOS UN OBJETO QUE QUEREMOS CONVERTIR EN MAP, AYUDA MUCHO
// // const hourMap = new Map(Object.entries(openingHours));
// // console.log(hourMap);

// const question = new Map([
//   [
//     "question",
//     "¿En qué año Interpol saca su album debut Turn on the bright lights?",
//   ],
//   [1, "2012"],
//   [2, "2001"],
//   [3, "2002"],
//   ["correct", 3],
//   [true, "Eres un gran fan de Interpol ヽ(^。^)ノ"],
//   [false, "Boo, you whore! (>o<) "],
// ]);

// //vamos a probar como se ve el mapa así
// console.log("---SEPARADOR----");
// console.log(question.get("question"));
// //vamos a recorrerlo con un for of... para obtener sus valores solo numericos keys
// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`${key}: ${value}`);
// }

// const userAnswer = +prompt("Tu respuesta por favor", "");
// console.log(userAnswer);
// //aqui buscamos que sea falso o verdadero
// console.log(question.get(question.get("correct") === userAnswer)); //evaluo si el valor de question.get('correct') que es 3 es igual a la respuesta del usuario, de esto tendré un valor falso y uno verdadero
// console.log(question.get(false));//Esto es lo mismo que hacemos en la linea anterior

// const inputWord = prompt('Ingressa tu nombre', '');

// const inputWord = "RoSArIo";
// const functionLoweCase = function (inputW) {
//   const wordLower = inputW.toLowerCase();
//   const correct = wordLower[0].toUpperCase() + wordLower.slice(1);
//   console.log(correct);
// };
// functionLoweCase(inputWord);

// const email = "rosario.fuega@gmail.com";
// const comparaison = "   RoSArio.Fuega@gmail.com";

// console.log(
//   email === comparaison.toLowerCase().trim() ? "Sí, es igual" : "No, diferente"
// );

//replacing text
// const price = "574,75$";
// const signRepl = price.replace("$", "#").replace(",", ".");
// console.log(signRepl);

//El metodo split, lo que hace es dividir apartir de una cadena divisora
// const splitPhrs = "Rosario+Fuentes+García".split("+");
// console.log(splitPhrs);
// const [nombre, apellidoP, apellidoM] = splitPhrs;
// console.log(
//   `Tu te llamas ${nombre} y tu apellido paterno es ${apellidoP} y apellido materno es ${apellidoM}`
// );
// const nombreJoin = ["Ms.", nombre, apellidoP, apellidoM.toUpperCase()].join(
//   " "
// );
// console.log(nombreJoin);
// //Función para poner en mayusculas todas las primeras letras de una palabra en una oración
// 1. Vamos a ingresar una frase completa
// 2. la vamos a dividir al detectar el carácter de espacio ‘ ’;

// 3. después vamos a recorrer ese array, al que fue almacenado
// 4. al recorrer cada palabra, vamos a extraer la primera letra y trannsformarla en MAYUS
// 5. vamos a ir almacenando cada palabra en un nuevo array, que será la frase completa convertida
// 6.- imprimimos cada palabra del array pero las unimos en una sola frase, atraves de join() con el carácter ‘ ’; espacio de separacion
// creamos una variable para el array que almacena la frase separada por ‘ ’;

// // const userInputPhrase = prompt('Porfavor ingresa una frase', '');
// //
// const convertToUpperCase = function (userInputPhrase) {
//   const arrayPhrase = userInputPhrase.split(" ");
//   const wordsArray = [];
//   for (const word of arrayPhrase) {
//     wordsArray.push(word[0].toUpperCase() + word.slice(1));
//     // wordsArray.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(wordsArray.join(" "));
// };
// // convertToUpperCase(userInputPhrase);
// convertToUpperCase("Esto es un ejemplo sin entrada de usuario---------");

// //El método join() se usa en arrays para unir todos sus elementos en una sola cadena.
// const arrayJoin = ["esto", "es", "un", "ejemplo", 5];
// console.log(arrayJoin.join(" "));

// //metodo para rellenar un string, PADDING STRING
// const message = "rellename esta";
// console.log(message.length);
// const corazones = message.padStart(20, "♡").padEnd(26, "♡");
// console.log(corazones);
// //voy a crear un metodo de enmascaramiento de numeros de una tarjeta de credito

// const entradaNumeros = String(prompt("Tu numero de tarjeta", ""));
// const maskNumbersCard = function (cardNumbers) {
//   const lastCharacters = cardNumbers.slice(-4);
//   return (last = lastCharacters.padStart(cardNumbers.length, "*"));
//   // console.log(lastCharacters.padStart(cardNumbers.length, '*'));
// };
// console.log(maskNumbersCard(entradaNumeros));
// // maskNumbersCard(entradaNumeros);

// //metodo para repetir REPEAT

// const planesInLine = function (n) {
//   const mesStr = `There are ${n} planes in line ${"✈️".repeat(n)}`;
//   return mesStr;
// };

// console.log(planesInLine(5));
// console.log(planesInLine(50));
// console.log(planesInLine(15));

// //DESAFIO DE STIRNGS
// 1. Recibo y almaceno una cadena de texto que sea como este ejemplo ‘esto_es_un_ejemplo’
// 2. La convierto en ‘estoEsUnEjemploDeCamelCase’
// 3. la entrada de texto es medianate un TextArea en la pagina
// 4. al presionar el botón, será convertido a camelCase

const txtArea = document.querySelector(".textAreaCon"); //este elemento se selecciona y se almacena en txtArea
const btnAction = document.querySelector(".btn"); //este elemento se selecciona y almacena en txtArea

// const underCaseWord = prompt("Ingresa tu texto", "");

// const toCamelCase = function (underCaseWord) {
//   const arrayCamelCase = [];
//   const arrayResultOfCaseWordSplit = underCaseWord.split("_"); //esto ya es un array

//   for (const item of arrayResultOfCaseWordSplit) {
//     arrayCamelCase.push(item[0].toUpperCase() + item.slice(1));
//   }
//   return arrayCamelCase.join("");
// };
// console.log(toCamelCase(underCaseWord));

// document.addEventListener("DOMContentLoaded", function () {
//   const btn = document.querySelector(".btn");
//   const textarea = document.querySelector(".textAreaCon");
//   const result = document.querySelector('.result');

//   btn.addEventListener("click", function (underCaseWord) {
//     var underCaseWord = textarea.value;
//     const arrayCamelCase = [];
//     const arrayResultOfCaseWordSplit = underCaseWord.split("_"); //esto ya es un array

//     for (const item of arrayResultOfCaseWordSplit) {
//       arrayCamelCase.push(item[0].toUpperCase() + item.slice(1));
//     }
//     return arrayCamelCase.join("");
//   });
// });

//EVENTOS DE BOTON

// document.addEventListener("DOMContentLoaded", function () {
//   var btnConvertir = document.getElementById("btnConvertir");
//   var inputTexto = document.getElementById("inputTexto");
//   var resultadoDiv = document.getElementById("resultado");

//   btnConvertir.addEventListener("click", function () {
//     var underCaseWord = inputTexto.value.trim();
//     var camelCaseWord = convertirSnakeCaseToCamelCase(underCaseWord);
//     resultadoDiv.textContent = camelCaseWord;
//   });

//   function convertirSnakeCaseToCamelCase(underCaseWord) {
//     const arrayCamelCase = [];
//     const arrayResultOfCaseWordSplit = underCaseWord.split("_");

//     for (const item of arrayResultOfCaseWordSplit) {
//       arrayCamelCase.push(item[0].toUpperCase() + item.toLowerCase().slice(1));
//     }
//     return arrayCamelCase.join("");
//   }
// });
//Functions aceptin callback functions
// const deleteSpaces = (str) =>{
//   return str.replace(/ /g,'').toLowerCase();
// };

// const upperFirstCase = (str) =>{
//   const [uno, ...dos] = str.split(' ');
//   return [uno.toUpperCase(), ...dos].join(' ');
// };

// const transformer = (str, fn) =>{
// console.log(`This is the original ${str}`);
// console.log(`This is a modified ${fn(str)}, transformed by ${fn.name} function`);
// };

// transformer('This is my best life!', upperFirstCase);
// transformer('This is my best life!', deleteSpaces);

//functions returning functions

// const handShake = function (hand, personas) {
//   return function (name, apellido) {
//     console.log(`This ${hand} ${personas} from ${name} ${apellido}`);
//   };
// };

// const handShakeD = (handD, personasD) => (nameD, apellidoD) =>
//   console.log(`This ${handD} ${personasD} from ${nameD} ${apellidoD}`);

// const handHi = handShake("Bonjour!", "a tous"); // basicamente ahora handHi es una funcion, el resultado de la funcion handShake
// handHi("Ross", "Fuentes");
// handHi("Anna", undefined);
// handShake("Hola", "a todos")("Stella", "Artois");
// handShakeD("Hola", "a todos")("Arabella", "Artois");
// const variableConf = handShakeD();
// function contador(inicial) {
//   let cuenta = inicial;
//   return function () {
//     cuenta++;
//     return cuenta;
//   };
// }

// const contadorDesdeCinco = contador(5);
// console.log(contadorDesdeCinco()); // Salida: 6
// console.log(contadorDesdeCinco()); // Salida: 7
// console.log(contadorDesdeCinco()); // Salida: 7
// const contadorDesdeCien = contador(100);
// console.log(contadorDesdeCien()); // Salida: 101
// console.log(contadorDesdeCien()); // Salida: 101
// const flightData = [1998, 'Rosario Fuentes'];
// const arrflightData = [1999, 'Brenda Isela'];
// //The call and the apply method
// const vivaAerobus = {
//   airline: "Viva Aerobus",
//   iataCode: "VA",
//   bookings: [],
//   book: function (flightNum, namePass) {
//     console.log(
//       `${namePass} booked a seat on ${this.airline} flight, ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({flight:`${this.iataCode}${flightNum}`,namePass});
//   },
// };
//tomaremos el metodo de book, y lo almaceno en una variable para utilizarlo en otra aerolinea
// const bookFunGral = vivaAerobus.book;

// vivaAerobus.book('1486', 'Rebecca Oh');

// const mexicanaAviacion = {
//   airline: 'Mexicana de aviacion',
//   iataCode: 'MA',
//   bookings:[],
// };

// bookFunGral('2258', 'Ross Fuentes');

// bookFunGral.call(mexicanaAviacion,'4478', 'Hugo Mendoza');
// bookFunGral.call(vivaAerobus,'1989', 'Taylor Swift');
// bookFunGral.call(mexicanaAviacion, ...flightData);
// bookFunGral.apply(mexicanaAviacion, arrflightData );

//bind METHOD

// const vivaVar = bookFunGral.bind(vivaAerobus);
// const mexicanaAv = bookFunGral.bind(mexicanaAviacion);
// vivaVar('2000', 'Diana Fuentes');
// vivaVar('0202', 'America Eagle');
// mexicanaAv('0707', 'James Bond');
// vivaAerobus.planes = 14;
// vivaAerobus.buyPlane = function(){
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// console.log(vivaAerobus);
// console.log(mexicanaAviacion);
// const funVivaClick = vivaAerobus.buyPlane;
// const binReference = funVivaClick.bind(vivaAerobus);

//Una forma interesante de aplicar el método bind, es cuando usamos objetos con
// oyentes de eventos EventListener

// const btn = document.querySelector('#btnConvertir');
// btn.addEventListener('click',funVivaClick);

// document.getElementById('btnConvertir').addEventListener('click', binReference);

//Vamos a hacer una funcion para vincular
// const taxes = (rate, value) => value + value * rate;

// const addValTaxes = taxes.bind(null, .23);
// console.log(addValTaxes(250));

// vivaAerobus.taxes = function(rate, value){
//   const result = value + value * rate;
//   console.log( `The result of taxes is ${result}`);
// }
// const funcTaxesFrst = vivaAerobus.taxes;
// const binRefVivaAerobus = funcTaxesFrst.bind(vivaAerobus, .23, 100);
// // const binReference = funVivaClick.bind(vivaAerobus);
// document.getElementById('btnConvertir').addEventListener('click', binRefVivaAerobus);
// console.log(vivaAerobus);

// //functions returning functions
// const addRateTax = function(rate){
//   return function(value){
//     return value + value * rate;
//   }
// }
// const nuevoAddRate = addRateTax(.23);
// console.log(nuevoAddRate(250));
// console.log(nuevoAddRate(230));
// console.log(nuevoAddRate(20));

// challenge #1 Sections A Closer Look of functions
//Let's buils a simple poll app!
//Una encuesta tiene una pregunta, una serie de opciones entre las que las personas pueden elegir
//  y una serie con el número de respuestas para cada opción.  Estos datos se almacenan en el objeto
//  inicial a continuación.

const poll = {
  question: "Whats is your favorite programming language?",
  options: ["0: JavaScript", "1: Python", "2:C#", "3: Rust"],
  answers: new Array(4).fill(0),
  registerNewAnswer: function () {
    const answer = +prompt(
      `${this.question}\n${this.options.join("\n")}\n(Write option number)`
    );
    console.log(answer);

    //Paso para registrar la respuesta
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;
      this.displayResults(); 
      this.displayResults('string'); 

  },
  displayResults: function(type = 'array'){
    if (type === 'array') {
      console.log(this.answers);
    } else if(type === 'string') {
      console.log(`Type results are ${this.answers.join(' ')}`);
    }


  },
};
// const registerNewAnswerRef = poll.registerNewAnswer; //asignacion de funcion

const btnPoll = document.getElementById("btnPoll");
btnPoll.addEventListener("click", poll.registerNewAnswer.bind(poll));
//Here are my tasks
// 1. Cree un método llamado 'registerNewAnswer' en el objeto 'encuesta'.  El método hace 2 cosas:
// 1.1.  Muestra una ventana de solicitud para que el usuario ingrese el número de la opción seleccionada.
//          El mensaje debería verse así:
//          ¿Cuál es tu lenguaje de programación favorito?
//          0: JavaScript
//          1: Python
//          2: C#
//          3:Rust
//          (Escriba el número de opción)

// 1.2.  Según el número ingresado, actualice la matriz de respuestas.
// Por ejemplo, si la opción es 3, aumente el valor EN LA POSICIÓN 3 de la matriz en
// 1. Asegúrese de verificar si la entrada es un número y si el número tiene sentido
// (por ejemplo, la respuesta 52 no tendría sentido, ¿verdad?)

//2. Llame a este método cada vez que el usuario haga clic en el botón "Responder encuesta".

// 3. Cree un método 'displayResults' que muestre los resultados de la encuesta.
//  El método toma una cadena como entrada (llamada 'tipo'),
//  que puede ser 'cadena' o 'matriz'.  Si el tipo es 'matriz', simplemente muestre la matriz de resultados
//   tal como está, usando console.log().  Esta debería ser la opción predeterminada.
//   Si el tipo es 'cadena', muestre una cadena como "Los resultados de la encuesta son 13, 2, 4, 1".

//  4. Ejecute el método 'displayResults' al final de cada llamada al método 'registerNewAnswer'.
