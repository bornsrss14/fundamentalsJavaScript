const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
  [weekdays[2]]: {
    // open:1,
    close: 23,
  },
};


const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// const r = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(r);

// for (const menuRes of r) console.log(menuRes);

// for (const [index, element] of r.entries()) {
//     // console.log(menuRes);
//     console.log(`${index +1}:${element}`);
// }

// #1 Optional chaining

// const user = {
//   name: "Taylor",
//   address: {
//     city: "Manhattan",
//     zipdode: 785455,
//   },
// };
// const city = user.address?.city || "Esta no es una propiedad valida";
// console.log(city);

// const country =
//   user.address?.country ?? "Esta propiedad no es accesible, o no existe";
// console.log(country);

// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open ?? "were close";
//   console.log(`On ${day}, we are open at ${open}`);
// }

// console.log('----- SEPARADOR --------');
// // Another practical solution
// for (const day of weekdays) {
//   const open = restaurant.openingHours[day]?.open;
//   if (open !== undefined) {
//     console.log(`On ${day},we open at ${open}`);
//   } else {
//     console.log(`On ${day}, we are closed`);
//   }
// }

// // #2 UTILIZAMOS ESTE MISMO OPERADOR PERO AHORA CON METHODS
// console.log(restaurant.order?.(0,1) ?? 'Method does not exist');
// console.log(restaurant.orderRissotto?.(0,1) ?? 'Method does not exist');
// //#3 EN ARRAYS

//#4 EN OBJETOS

// const paulBanks = {
//   nombreP:'Paul',
//   apellidoP: 'Banks',
//   ageP : 46,
//   kids: 1,
// };

// const propiedades = Object.keys(paulBanks);

// for (const p of propiedades) {
//   console.log(`${p}: ${paulBanks[p]}`);
// };

// const values = Object.values(paulBanks);
// console.log(values);
// Object.entries(nombreDelObjeto)


//#5 SETS 
//primero lo declaramos
let mySet = new Set();
//tenemos varios metodos para poder agrega datos al set
mySet.add('Rosario');
mySet.add(2);
mySet.add(3);
console.log(mySet);
//Verificar si un elemento existe en el set

const r = mySet.has('Rosario');
console.log(r);
mySet.delete(2);

//Recorrer los elementos del set con un bucle For Of
for (const clave of mySet) {
  console.log(clave);
}
// Tambièn creo un SET con valores iniciales
const otroSet = new Set([4,14,24,7,21,45,12]);
console.log(otroSet);

for (const it of otroSet) {
  console.log(`These are the values of ${it}`);
}
console.log(`Nothing in particular ${otroSet.size} elements`);

//MAPS
let mapRos = new Map();
mapRos.set('name', 'Rosario');
mapRos.set(1, 24);
mapRos.set(true, 'bitch');
mapRos.set(false, 'caothic');

console.log(mapRos.get(true));
console.log(mapRos.has(1));
console.log(mapRos.size);

console.log(mapRos);
//RECORRER EL MAPA CON FOR OF...

for (const [clave, valor] of mapRos.entries()) {
  console.log(`The key is ${clave} and the value is ${valor}`);
}