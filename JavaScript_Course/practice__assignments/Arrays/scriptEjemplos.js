const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Foccacia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Osobuscco"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
    days: {
      monday: 1,
      tuesday: 2,
      wednesday: 3,
      thursday: 4,
      friday: 5,
      saturday: 6,
      sunday: 7,
    },
  },
  order: function (starterMenuPlat, mainMenuPlat) {
    return [this.starterMenu[starterMenuPlat], this.mainMenu[mainMenuPlat]];
  },

  orderDeliveryComplete: function ({
    time = "00:00",
    address = "S/N",
    mainIndexx = "0",
    starterIndex = "0",
  }) {
    console.log(`Order recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndexx]}, will be 
      delivered to ${address} at ${time}`);
  },
};
const [star, mainC] = restaurant.order(0, 3);

restaurant.orderDeliveryComplete({
  time: "22:30",
  address: "privada 1 de Mayo #4 Mza 6 LT 4 Col Las Palmas",
  mainIndexx: 2,
  starterIndex: 1,
});

const {
  thu: { open: o, close: c },
  days: { monday: m, tuesday: t },
} = restaurant.openingHours;
console.log(o, c, m, t);

let band = "Interpol";
let person = "Paul Banks";

const bandObject = {
  band: "Inter",
  person: "Daniel Kessler",
  origin: "New York",
};

({ band, person } = bandObject);
console.log(band, person);
