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

const user = {
  name: "Taylor",
  address: {
    city: "Manhattan",
    zipdode: 785455,
  },
};

const city = user.address?.city || "Esta no es una propiedad valida";
console.log(city);

const country =
  user.address?.country ?? "Esta propiedad no es accesible, o no existe";
console.log(country);

for (const day of weekdays) {
  const open = restaurant.openingHours[day]?.open ?? "were close";
  console.log(`On ${day}, we are open at ${open}`);
}

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
