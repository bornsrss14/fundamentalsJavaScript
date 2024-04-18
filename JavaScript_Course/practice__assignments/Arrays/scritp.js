'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze Italy',
    categories: ['Italian','Pizzeria','Vegetarian','Organic'],
    starterMenu: ['Foccacia','Bruschetta','Garlic Bread','Caprese Salad'],
    mainMenu: ['Pizza','Pasta','Risotto','Osobuscco'],
    order: function(starterMenuPlat, mainMenuPlat){
        return [this.starterMenu[starterMenuPlat], this.mainMenu[mainMenuPlat]]

    }
};
// Si yo mapeo los array de cada uno
const [star, mainC] = restaurant.order(0,3);
console.log(star,mainC);

// This example is the old way to save array values into an variables
// not the best
const arr = ['Interpol','Kanye West', 'Alvvays'];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);
// this is the destructuring assignment
const [x,y,z] = arr;
console.log(x,y,z);
console.log(arr);
//Switching the values
let [first, second] = restaurant.categories;
console.log(first, second);
[first, second]=[second, first];
console.log(first,second);