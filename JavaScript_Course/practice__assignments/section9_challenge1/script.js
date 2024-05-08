"use srict";
///////////////////////////////////////
// Coding Challenge #1

// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.


const game = {
  team1: "bayern munich",
  team2: "Borrusia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const [players1, players2] =  game.players;
console.log(...players1, ...players2);


const [gkk , ...fieldPlayers2]= players1;
console.log(gkk , fieldPlayers2);

const allPlayers2 = [...players1, ...players2];
console.log(allPlayers2);
//1.-
const [players__1, players__2] = game.players;
// console.log( players__1, players__2);
// 2.-
const [gk, ...fieldPlayers] = players__1;
// console.log(gk, fieldPlayers);
// 3.-
const allPlayers = [...players__1, ...players__2];
// console.log(allPlayers);
// 4.-
const players1Final = [...players__1, "Thiago", "Coutinho", "Perisic"];

// console.log(players1Final);
// 5.-STEP
const {
  odds: { team1, x: draw, team2 },
} = game;


// console.log(team1, draw, team2);

// STEP 6 WRITE A FUNTION
// // 6. Write a function ('printGoals') that receives an arbitrary number
// of player names (NOT an array) and prints each of them to the console,
//  along with the number of goals that were scored in total (number of player names passed in)
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
console.log('----------------AQUI'),
printGoals(...game.scored);

// 7. The team with the lower odd is more likely to win. Print to the console which team
// is more likely to win, WITHOUT using an if/else statement or the ternary operator.
team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");
